-- PitBull Markets — Supabase schema
-- Run this in your Supabase project: SQL Editor → New query → paste → Run.
-- Idempotent (safe to re-run).

-- ─────────────────────────────────────────────────────────
-- 1. Player profile (1:1 with auth.users)
-- ─────────────────────────────────────────────────────────
create table if not exists public.profiles (
  id           uuid primary key references auth.users(id) on delete cascade,
  handle       text unique not null,
  display_name text,
  avatar_color text default '#7c3aed',
  balance      numeric not null default 100000,   -- virtual USD
  tokens       integer not null default 100,      -- premium tournament tokens
  elo          integer not null default 1000,
  created_at   timestamptz not null default now()
);

-- auto-create profile row when a new auth.user signs up
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, handle, display_name)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'handle',  'player_' || substr(new.id::text, 1, 8)),
    coalesce(new.raw_user_meta_data->>'display_name', new.email)
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ─────────────────────────────────────────────────────────
-- 2. Tournaments
-- ─────────────────────────────────────────────────────────
create table if not exists public.tournaments (
  id              uuid primary key default gen_random_uuid(),
  name            text not null,
  status          text not null check (status in ('upcoming','live','ended')) default 'upcoming',
  mode            text not null check (mode in ('public','private','solo')) default 'public',
  entry_tokens    integer not null default 0,
  prize_pool_usd  numeric not null default 0,
  max_players     integer not null default 100,
  starts_at       timestamptz not null default now(),
  ends_at         timestamptz,
  symbol          text default 'BTCUSD',
  created_at      timestamptz not null default now()
);

-- ─────────────────────────────────────────────────────────
-- 3. Tournament entries (players that joined)
-- ─────────────────────────────────────────────────────────
create table if not exists public.tournament_entries (
  id            uuid primary key default gen_random_uuid(),
  tournament_id uuid not null references public.tournaments(id) on delete cascade,
  player_id     uuid not null references public.profiles(id)    on delete cascade,
  final_pnl     numeric,
  rank          integer,
  joined_at     timestamptz not null default now(),
  unique (tournament_id, player_id)
);

-- ─────────────────────────────────────────────────────────
-- 4. Trade history (one row per closed trade)
-- ─────────────────────────────────────────────────────────
create table if not exists public.trades (
  id            uuid primary key default gen_random_uuid(),
  player_id     uuid not null references public.profiles(id) on delete cascade,
  tournament_id uuid      references public.tournaments(id)  on delete set null,
  symbol        text not null,
  side          text not null check (side in ('buy','sell')),
  size_usd      numeric not null,
  entry_price   numeric not null,
  exit_price    numeric not null,
  pnl           numeric not null,
  opened_at     timestamptz not null default now(),
  closed_at     timestamptz not null default now()
);

create index if not exists trades_player_idx     on public.trades (player_id, closed_at desc);
create index if not exists trades_tournament_idx on public.trades (tournament_id);

-- ─────────────────────────────────────────────────────────
-- 5. Seed data — 3 public tournaments so the UI has content
-- ─────────────────────────────────────────────────────────
insert into public.tournaments (name, status, mode, entry_tokens, prize_pool_usd, max_players, symbol, starts_at)
select * from (values
  ('Friday Night Flip',  'live',     'public', 10,  5000, 256, 'BTCUSD', now() - interval '5 min'),
  ('Crypto Sprint',      'upcoming', 'public', 0,    500, 128, 'ETHUSD', now() + interval '1 hour'),
  ('Blue Chip Blitz',    'upcoming', 'public', 25, 12500, 512, 'AAPL',   now() + interval '3 hour')
) as t(name,status,mode,entry_tokens,prize_pool_usd,max_players,symbol,starts_at)
where not exists (select 1 from public.tournaments);

-- ─────────────────────────────────────────────────────────
-- 6. Leaderboard view (derived — no separate table)
-- ─────────────────────────────────────────────────────────
create or replace view public.leaderboard as
  select
    p.id            as player_id,
    p.handle,
    p.display_name,
    p.avatar_color,
    p.elo,
    coalesce(sum(t.pnl), 0) as total_pnl,
    count(t.id)             as trade_count
  from public.profiles p
  left join public.trades t on t.player_id = p.id
  group by p.id;

-- ─────────────────────────────────────────────────────────
-- 7. Row-Level Security
-- ─────────────────────────────────────────────────────────
alter table public.profiles           enable row level security;
alter table public.tournaments        enable row level security;
alter table public.tournament_entries enable row level security;
alter table public.trades             enable row level security;

-- profiles: anyone signed-in can read; only owner can update
drop policy if exists "profiles read"   on public.profiles;
drop policy if exists "profiles update" on public.profiles;
create policy "profiles read"   on public.profiles for select using (true);
create policy "profiles update" on public.profiles for update using (auth.uid() = id);

-- tournaments: public read
drop policy if exists "tournaments read" on public.tournaments;
create policy "tournaments read" on public.tournaments for select using (true);

-- tournament_entries: read public, insert own, delete own
drop policy if exists "entries read"   on public.tournament_entries;
drop policy if exists "entries insert" on public.tournament_entries;
drop policy if exists "entries delete" on public.tournament_entries;
create policy "entries read"   on public.tournament_entries for select using (true);
create policy "entries insert" on public.tournament_entries for insert with check (auth.uid() = player_id);
create policy "entries delete" on public.tournament_entries for delete using (auth.uid() = player_id);

-- trades: read own; insert own
drop policy if exists "trades read"   on public.trades;
drop policy if exists "trades insert" on public.trades;
create policy "trades read"   on public.trades for select using (auth.uid() = player_id);
create policy "trades insert" on public.trades for insert with check (auth.uid() = player_id);

-- leaderboard view inherits table RLS (trades read → only own); override with SECURITY DEFINER function:
create or replace function public.public_leaderboard(limit_n int default 50)
returns table (player_id uuid, handle text, display_name text, avatar_color text, elo int, total_pnl numeric, trade_count bigint)
language sql
security definer
set search_path = public
as $$
  select p.id, p.handle, p.display_name, p.avatar_color, p.elo,
         coalesce((select sum(pnl) from public.trades where player_id = p.id), 0),
         (select count(*) from public.trades where player_id = p.id)
  from public.profiles p
  order by 6 desc nulls last
  limit limit_n;
$$;

grant execute on function public.public_leaderboard(int) to anon, authenticated;
