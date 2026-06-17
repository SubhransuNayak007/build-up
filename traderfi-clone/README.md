# PitBull Markets — traderFi-inspired trading game

A single-file, gamified trading simulator inspired by [play.traderfi.game](https://play.traderfi.game/).
No backend, no dependencies to install — just open `index.html` in a browser, or deploy as static files.

## Live preview
Deployed at: **https://traderfi-clone-jmzllkqw.devinapps.com**

## What's inside `index.html`
Everything. ~1.5k lines of HTML / CSS / vanilla JS in one file:

- **Landing / lobby** — hero, live ticker strip, feature cards
- **Live Arena** — real candlestick chart (TradingView `lightweight-charts` via CDN), instrument list (tabs + search), order ticket (BUY / SELL toggle, size, leverage, fee & liq. preview), open positions table, round timer, balance & P&L pills
- **Tournaments** — public / private / featured rooms with prize pools, entry fees, live status
- **Season leaderboard** — ranked table with gold/silver/bronze badges
- **How-it-works** — 6-slide onboarding carousel
- **Auth modal** — Google / Discord / email tabs (Log in / Sign up)
- **Welcome modal** — shown once per browser (stored in `localStorage`), dismissible
- **Keyboard shortcuts** — `B` buy, `S` sell, `R` reset, `?` open help
- **Responsive** at desktop / tablet / mobile breakpoints
- **A11y** — focus management, `Esc`-to-close modals, `aria-*` on all dialogs, reduced-motion support

## UX improvements over the reference site
- Welcome modal appears **once**, is dismissable, and remembered (`localStorage`). No modal-loop.
- Landing + lobby + arena are **browsable without sign-in**. Auth is only needed to join real tournaments.
- Real `<dialog>`-style focus traps with `Esc` to close.
- Reduced-motion and keyboard navigation fully supported.
- All content is original (brand, copy, mascot, colors).

## Stack
- HTML5 + CSS custom properties (no framework)
- `lightweight-charts@4.1.3` via unpkg CDN
- Google Fonts (`Space Grotesk`, `Space Mono`, `Inter`)

## Local preview
```bash
cd traderfi-clone
python3 -m http.server 8000
open http://localhost:8000
```
