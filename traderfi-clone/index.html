<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>PitBull Markets — Trade the Markets, Risk-Free</title>
<meta name="description" content="PitBull Markets — a free, gamified trading simulator. Compete in 5-minute tournaments, climb the leaderboard, and sharpen your trading instincts without risking a cent." />
<meta name="theme-color" content="#0a0718" />

<!-- PitBull Markets backend — FastAPI + SQLite on Fly.io -->
<meta name="pb:api-base" content="https://pitbull-backend-rifisgfb.fly.dev">

<!-- PWA manifest (Android/iOS/Windows install) -->
<link rel="manifest" href="manifest.webmanifest">
<link rel="apple-touch-icon" href="icon-192.png">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">

<!-- Lightweight Charts by TradingView (OSS) -->
<script src="https://unpkg.com/lightweight-charts@4.1.3/dist/lightweight-charts.standalone.production.js"></script>

<style>
*{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;}

:root{
  /* surfaces */
  --bg:#07051a;
  --bg-1:#0b0824;
  --bg-2:#120a33;
  --panel:rgba(22,14,56,0.72);
  --panel-2:rgba(36,22,90,0.55);
  --glass:rgba(255,255,255,0.04);
  --glass-2:rgba(255,255,255,0.08);
  --border:rgba(255,255,255,0.08);
  --border-2:rgba(255,255,255,0.14);

  /* brand */
  --p1:#a855f7;      /* purple primary */
  --p2:#7c3aed;
  --p-glow:rgba(168,85,247,0.45);
  --p-soft:rgba(168,85,247,0.12);
  --c1:#22d3ee;      /* cyan */
  --c-glow:rgba(34,211,238,0.45);
  --c-soft:rgba(34,211,238,0.1);
  --g1:#10e39b;      /* buy / profit */
  --g-glow:rgba(16,227,155,0.45);
  --g-soft:rgba(16,227,155,0.12);
  --r1:#ff4f70;      /* sell / loss */
  --r-glow:rgba(255,79,112,0.45);
  --r-soft:rgba(255,79,112,0.12);
  --y1:#ffcb3a;
  --y-soft:rgba(255,203,58,0.14);

  /* text */
  --t1:#f5f3ff;
  --t2:#bfb8e6;
  --t3:#7b749e;
  --t4:#3e3a63;

  --f:'Space Grotesk',system-ui,sans-serif;
  --mono:'Space Mono',ui-monospace,monospace;
  --sans:'Inter',system-ui,sans-serif;

  --r-sm:8px;
  --r-md:14px;
  --r-lg:20px;
  --r-xl:28px;

  --shadow-card:0 20px 60px -20px rgba(0,0,0,0.55), 0 6px 24px -10px rgba(124,58,237,0.25);
}

html,body{background:var(--bg);overflow-x:hidden;max-width:100%;}
body{
  color:var(--t1);
  font-family:var(--f);
  min-height:100vh;
  overflow-x:hidden;
  -webkit-font-smoothing:antialiased;
  line-height:1.4;
}

a{color:inherit;text-decoration:none;}
button{font-family:inherit;cursor:pointer;border:none;background:none;color:inherit;}
input,select,textarea{font-family:inherit;color:inherit;}
svg{display:block;}

/* ──────────── Floating particles backdrop ──────────── */
#bg-particles{
  position:fixed;inset:0;z-index:1;pointer-events:none;
  width:100vw;height:100vh;
  mix-blend-mode:screen;
}

/* ──────────── Ambient background ──────────── */
.ambient{
  position:fixed;inset:0;z-index:-1;overflow:hidden;pointer-events:none;
  background:
    radial-gradient(1000px 600px at 15% -10%, rgba(124,58,237,0.35), transparent 60%),
    radial-gradient(900px 500px at 95% 10%, rgba(34,211,238,0.25), transparent 60%),
    radial-gradient(800px 600px at 50% 110%, rgba(168,85,247,0.30), transparent 60%),
    linear-gradient(180deg,#050418 0%,#07051a 40%,#0a0726 100%);
}
.ambient::before,.ambient::after{
  content:"";position:absolute;inset:0;
  background-image:
    linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
  background-size:64px 64px;
  mask-image:radial-gradient(ellipse at center,#000 20%, transparent 70%);
  opacity:.55;
}
.ambient::after{
  background-size:8px 8px;
  background-image:
    radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px);
  mask-image:radial-gradient(ellipse at top,#000 20%, transparent 75%);
  opacity:.4;
}
.orb{position:absolute;border-radius:50%;filter:blur(80px);opacity:.55;animation:float 18s ease-in-out infinite;}
.orb.o1{width:520px;height:520px;background:radial-gradient(circle,var(--p1),transparent 60%);top:-120px;left:-120px;}
.orb.o2{width:420px;height:420px;background:radial-gradient(circle,var(--c1),transparent 60%);top:20%;right:-120px;animation-delay:-6s;}
.orb.o3{width:600px;height:600px;background:radial-gradient(circle,var(--p2),transparent 60%);bottom:-220px;left:35%;animation-delay:-12s;opacity:.45;}
@keyframes float{
  0%,100%{transform:translate(0,0) scale(1);}
  50%{transform:translate(30px,-40px) scale(1.08);}
}

/* ──────────── Layout helpers ──────────── */
.wrap{max-width:1440px;margin:0 auto;padding:0 28px;}
@media (max-width:640px){.wrap{padding:0 18px;}}

.section{padding:80px 0;position:relative;}
.section-eyebrow{
  display:inline-flex;align-items:center;gap:8px;
  padding:6px 12px;border-radius:999px;
  background:var(--p-soft);border:1px solid var(--border-2);
  color:var(--c1);font-size:12px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;
  margin-bottom:14px;
}
.section-eyebrow::before{content:"";width:6px;height:6px;border-radius:50%;background:var(--c1);box-shadow:0 0 12px var(--c-glow);}
.section-title{font-size:clamp(28px,3.5vw,44px);font-weight:700;letter-spacing:-0.02em;margin-bottom:10px;}
.section-title span.grad{background:linear-gradient(120deg,#fff 0%,var(--c1) 45%,var(--p1) 100%);-webkit-background-clip:text;background-clip:text;color:transparent;}
.section-lead{color:var(--t2);font-size:17px;max-width:640px;}

/* ──────────── Header ──────────── */
/* ──────────── Simulation disclaimer banner ──────────── */
.sim-disclaimer{
  position:sticky;top:0;z-index:70;display:flex;align-items:center;gap:10px;
  padding:8px 14px;font-size:12px;line-height:1.4;
  background:linear-gradient(90deg,rgba(255,180,40,0.18),rgba(124,58,237,0.18));
  border-bottom:1px solid rgba(255,180,40,0.35);
  color:#ffe7b2;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);
}
.sim-disclaimer.dismissed{display:none;}
.sim-disclaimer .sd-pill{
  font-size:10px;font-weight:800;letter-spacing:0.18em;background:#ffd55a;color:#1a0f00;
  padding:3px 8px;border-radius:999px;flex:0 0 auto;
}
.sim-disclaimer .sd-text{flex:1;color:#ffe7b2;}
.sim-disclaimer .sd-text b{color:#fff;}
.sim-disclaimer .sd-close{
  flex:0 0 auto;background:transparent;color:#ffe7b2;font-size:20px;line-height:1;
  width:28px;height:28px;border-radius:50%;cursor:pointer;
}
.sim-disclaimer .sd-close:hover{background:rgba(255,255,255,0.08);color:#fff;}
@media (max-width:640px){
  .sim-disclaimer{padding:8px 10px;font-size:11px;gap:8px;}
  .sim-disclaimer .sd-text{font-size:11px;}
}

/* Trade-feedback flash (full-page tint on buy/sell/close) */
@keyframes pb-flash {
  0%   { opacity:0; }
  18%  { opacity:0.55; }
  100% { opacity:0; }
}
.pb-flash{
  position:fixed;inset:0;z-index:180;pointer-events:none;opacity:0;
  animation: pb-flash 600ms ease-out forwards;
}
.pb-flash.up   { background:radial-gradient(circle at 50% 50%, rgba(16,227,155,0.55), transparent 60%); }
.pb-flash.down { background:radial-gradient(circle at 50% 50%, rgba(255,79,112,0.55), transparent 60%); }
.pb-flash.neut { background:radial-gradient(circle at 50% 50%, rgba(124,58,237,0.45), transparent 60%); }

.nav-outer{position:sticky;top:0;z-index:60;backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);background:rgba(7,5,26,0.55);border-bottom:1px solid var(--border);}
.nav{display:flex;align-items:center;gap:28px;height:68px;}
.logo{display:flex;align-items:center;gap:10px;font-weight:700;letter-spacing:-0.01em;font-size:18px;}
.logo-mark{
  width:34px;height:34px;border-radius:10px;position:relative;
  background:linear-gradient(135deg,var(--p1),var(--c1));
  box-shadow:0 6px 24px -6px var(--p-glow), inset 0 -4px 10px rgba(0,0,0,0.3);
  display:grid;place-items:center;
}
.logo-mark svg{width:18px;height:18px;color:#fff;}
.logo-text{display:flex;flex-direction:column;line-height:1;}
.logo-text b{font-size:16px;letter-spacing:-0.01em;}
.logo-text small{font-size:10px;color:var(--t3);letter-spacing:0.2em;text-transform:uppercase;margin-top:2px;}
.nav-links{display:flex;gap:4px;margin-left:12px;}
.nav-links a{padding:8px 14px;color:var(--t2);font-size:14px;font-weight:500;border-radius:999px;transition:.2s;}
.nav-links a:hover{color:var(--t1);background:var(--glass);}
.nav-spacer{flex:1;}
.nav-live{display:flex;align-items:center;gap:16px;padding:6px 14px;border-radius:999px;background:var(--glass);border:1px solid var(--border);}
.nav-live .dot{width:8px;height:8px;border-radius:50%;background:var(--g1);box-shadow:0 0 12px var(--g-glow);animation:pulse 1.6s infinite;}
@keyframes pulse{0%,100%{transform:scale(1);opacity:1;}50%{transform:scale(1.3);opacity:.55;}}
.nav-live b{color:var(--t1);font-size:13px;}
.nav-live small{color:var(--t3);font-size:11px;text-transform:uppercase;letter-spacing:0.12em;}
.nav-live .sep{width:1px;height:16px;background:var(--border-2);}
.btn{display:inline-flex;align-items:center;gap:8px;padding:10px 16px;border-radius:999px;font-weight:600;font-size:14px;transition:.2s;border:1px solid transparent;white-space:nowrap;}
.btn-ghost{background:var(--glass);border-color:var(--border);color:var(--t1);}
.btn-ghost:hover{background:var(--glass-2);border-color:var(--border-2);}
.btn-primary{background:linear-gradient(135deg,var(--c1),var(--p1));color:#0b0720;box-shadow:0 8px 28px -6px var(--p-glow), 0 4px 14px -6px var(--c-glow);}
.btn-primary:hover{transform:translateY(-1px);box-shadow:0 12px 36px -6px var(--p-glow), 0 6px 16px -6px var(--c-glow);}
.btn-outline{border-color:var(--border-2);color:var(--t1);}
.btn-outline:hover{background:var(--glass);}
.btn-danger{background:rgba(255,79,112,0.12);border-color:rgba(255,79,112,0.5);color:#ff8fa5;}
.btn-danger:hover:not([disabled]){background:rgba(255,79,112,0.22);border-color:rgba(255,79,112,0.9);color:#ffd7df;}
.btn-danger[disabled]{opacity:0.4;cursor:not-allowed;}

.mobile-menu-btn{display:none;}
@media (max-width:900px){
  .nav-links,.nav-live{display:none;}
  .mobile-menu-btn{display:inline-flex;align-items:center;padding:8px;border-radius:10px;background:var(--glass);border:1px solid var(--border);}
}

/* ──────────── Ticker strip ──────────── */
.ticker{
  border-bottom:1px solid var(--border);background:rgba(10,7,32,0.6);
  overflow:hidden;position:relative;
}
.ticker::before,.ticker::after{content:"";position:absolute;top:0;bottom:0;width:80px;z-index:2;pointer-events:none;}
.ticker::before{left:0;background:linear-gradient(90deg,var(--bg),transparent);}
.ticker::after{right:0;background:linear-gradient(-90deg,var(--bg),transparent);}
.ticker-track{display:flex;gap:48px;padding:12px 0;animation:slide 55s linear infinite;width:max-content;}
@keyframes slide{from{transform:translateX(0);}to{transform:translateX(-50%);}}
.ticker-item{display:inline-flex;align-items:center;gap:10px;font-size:13px;font-family:var(--mono);white-space:nowrap;color:var(--t2);}
.ticker-item b{color:var(--t1);}
.ticker-up{color:var(--g1);}
.ticker-down{color:var(--r1);}
.ticker-dot{width:6px;height:6px;border-radius:50%;}

/* ──────────── Hero ──────────── */
.hero{padding:72px 0 40px;position:relative;}
.hero-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:48px;align-items:center;}
@media (max-width:1024px){.hero-grid{grid-template-columns:1fr;gap:32px;}}
.hero-badges{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:22px;}
.hero-badge{display:inline-flex;align-items:center;gap:8px;padding:6px 12px;border-radius:999px;background:var(--glass);border:1px solid var(--border);font-size:12px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:var(--t2);}
.hero-badge .dot{width:6px;height:6px;border-radius:50%;background:var(--g1);box-shadow:0 0 10px var(--g-glow);}
.hero-badge.purple .dot{background:var(--p1);box-shadow:0 0 10px var(--p-glow);}
.hero h1{font-size:clamp(36px,5.5vw,68px);line-height:1.02;letter-spacing:-0.03em;font-weight:700;margin-bottom:22px;}
.hero h1 .line{display:block;}
.hero h1 em{font-style:normal;background:linear-gradient(120deg,var(--c1),var(--p1));-webkit-background-clip:text;background-clip:text;color:transparent;}
.hero p{color:var(--t2);font-size:18px;max-width:540px;margin-bottom:28px;}
.hero-cta{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:36px;}
.hero-cta .btn-primary{padding:14px 22px;font-size:15px;}
.hero-cta .btn-ghost{padding:14px 22px;font-size:15px;}
.hero-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;max-width:560px;}
.hero-stat{border:1px solid var(--border);background:var(--glass);border-radius:var(--r-md);padding:14px 16px;}
.hero-stat b{display:block;font-size:24px;font-weight:700;letter-spacing:-0.01em;font-family:var(--mono);}
.hero-stat small{display:block;color:var(--t3);font-size:11px;text-transform:uppercase;letter-spacing:0.14em;margin-top:4px;}

/* Hero preview card */
.hero-preview{
  position:relative;border-radius:var(--r-xl);overflow:hidden;
  background:linear-gradient(160deg,rgba(168,85,247,0.14),rgba(34,211,238,0.08));
  border:1px solid var(--border-2);
  box-shadow:var(--shadow-card);
  padding:18px;
}
.hero-preview::before{
  content:"";position:absolute;inset:-2px;border-radius:var(--r-xl);padding:2px;
  background:conic-gradient(from 180deg,var(--p1),var(--c1),var(--p1));
  -webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);
  -webkit-mask-composite:xor;mask-composite:exclude;
  opacity:.35;animation:spin 12s linear infinite;pointer-events:none;
}
@keyframes spin{to{transform:rotate(360deg);}}
.hp-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;}
.hp-sym{display:flex;align-items:center;gap:10px;}
.hp-sym .icon{width:36px;height:36px;border-radius:10px;background:linear-gradient(135deg,var(--y1),#f97316);display:grid;place-items:center;font-weight:700;color:#241400;font-family:var(--mono);}
.hp-sym b{font-size:16px;}
.hp-sym small{color:var(--t3);font-size:11px;text-transform:uppercase;letter-spacing:0.14em;}
.hp-price{text-align:right;}
.hp-price b{font-size:22px;font-family:var(--mono);}
.hp-price span{font-size:12px;color:var(--g1);display:inline-flex;align-items:center;gap:4px;margin-top:2px;}
#hero-chart{height:220px;width:100%;border-radius:12px;overflow:hidden;background:rgba(0,0,0,0.25);}
.hp-foot{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:12px;}
.hp-foot button{padding:10px 12px;font-size:13px;font-weight:700;border-radius:10px;letter-spacing:0.05em;}
.hp-foot .b-buy{background:linear-gradient(180deg,rgba(16,227,155,0.3),rgba(16,227,155,0.12));color:var(--g1);border:1px solid rgba(16,227,155,0.4);}
.hp-foot .b-hold{background:var(--y-soft);color:var(--y1);border:1px solid rgba(255,203,58,0.35);}
.hp-foot .b-sell{background:linear-gradient(180deg,rgba(255,79,112,0.3),rgba(255,79,112,0.12));color:var(--r1);border:1px solid rgba(255,79,112,0.4);}

/* ──────────── Feature cards ──────────── */
.feat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;}
@media (max-width:900px){.feat-grid{grid-template-columns:1fr;}}
.feat-card{
  padding:22px;border-radius:var(--r-lg);
  border:1px solid var(--border);background:var(--panel);
  transition:.2s;position:relative;overflow:hidden;
}
.feat-card:hover{transform:translateY(-3px);border-color:var(--border-2);}
.feat-icon{width:44px;height:44px;border-radius:12px;display:grid;place-items:center;margin-bottom:14px;}
.feat-icon.buy{background:var(--g-soft);color:var(--g1);}
.feat-icon.cyan{background:var(--c-soft);color:var(--c1);}
.feat-icon.purple{background:var(--p-soft);color:var(--p1);}
.feat-card h3{font-size:18px;letter-spacing:-0.01em;margin-bottom:6px;}
.feat-card p{color:var(--t2);font-size:14px;}

/* ──────────── Arena (trading screen) ──────────── */
.arena{
  margin-top:24px;border-radius:var(--r-xl);
  border:1px solid var(--border-2);background:linear-gradient(180deg,rgba(14,9,42,0.9),rgba(10,7,32,0.94));
  box-shadow:var(--shadow-card);
  overflow:hidden;
}
.arena-head{
  display:flex;align-items:center;justify-content:space-between;
  padding:14px 18px;border-bottom:1px solid var(--border);
  background:rgba(18,10,51,0.6);
  flex-wrap:wrap;gap:14px;
}
.arena-meta{display:flex;align-items:center;gap:18px;flex-wrap:wrap;}
.round-timer{display:flex;align-items:center;gap:10px;padding:6px 12px;background:var(--r1);background:linear-gradient(135deg,rgba(255,79,112,0.18),rgba(168,85,247,0.18));border:1px solid rgba(255,79,112,0.35);border-radius:999px;}
.round-timer svg{width:14px;height:14px;color:var(--r1);}
.round-timer b{font-family:var(--mono);font-size:14px;letter-spacing:0.04em;}
.round-timer small{color:var(--t3);font-size:10px;text-transform:uppercase;letter-spacing:0.14em;}
.balance-pill{display:flex;align-items:center;gap:10px;padding:6px 14px;background:var(--glass);border:1px solid var(--border);border-radius:999px;}
.balance-pill .lbl{color:var(--t3);font-size:11px;text-transform:uppercase;letter-spacing:0.14em;}
.balance-pill b{font-family:var(--mono);font-size:14px;color:var(--t1);}
.balance-pill.profit{border-color:rgba(16,227,155,0.35);background:var(--g-soft);}
.balance-pill.profit b{color:var(--g1);}
.balance-pill.loss{border-color:rgba(255,79,112,0.35);background:var(--r-soft);}
.balance-pill.loss b{color:var(--r1);}

.arena-body{
  display:grid;grid-template-columns:280px 1fr 300px;gap:0;
  min-height:560px;
}
@media (max-width:1200px){.arena-body{grid-template-columns:240px 1fr;} .arena-ticket{grid-column:1/-1;border-left:0;border-top:1px solid var(--border);}}
@media (max-width:820px){.arena-body{grid-template-columns:1fr;} .arena-list{border-right:0;border-bottom:1px solid var(--border);max-height:320px;} .arena-chart{min-height:380px;}}
@media (max-width:640px){.arena-head{padding:12px;} .round-timer b{font-size:13px;} .balance-pill{padding:5px 10px;} .balance-pill b{font-size:13px;} .arena-list{max-height:240px;}}

/* Instrument list */
.arena-list{border-right:1px solid var(--border);background:rgba(8,5,26,0.5);display:flex;flex-direction:column;max-height:760px;}
.list-tabs{display:flex;padding:10px;gap:4px;border-bottom:1px solid var(--border);overflow-x:auto;}
.list-tab{flex:1;padding:7px 10px;font-size:12px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:var(--t3);border-radius:8px;white-space:nowrap;transition:.15s;}
.list-tab.active{color:var(--t1);background:var(--glass-2);}
.list-tab:hover:not(.active){color:var(--t2);}
.list-search{padding:10px;border-bottom:1px solid var(--border);}
.list-search input{
  width:100%;padding:8px 12px;background:var(--glass);border:1px solid var(--border);
  border-radius:8px;color:var(--t1);font-size:13px;outline:none;transition:.15s;
}
.list-search input:focus{border-color:var(--p1);background:var(--glass-2);}
.list-items{flex:1;overflow-y:auto;}
.list-items::-webkit-scrollbar{width:6px;}
.list-items::-webkit-scrollbar-thumb{background:var(--border-2);border-radius:3px;}
.list-row{
  display:grid;grid-template-columns:auto 1fr auto;gap:10px;align-items:center;
  padding:10px 14px;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.03);
  transition:.12s;
}
.list-row:hover{background:var(--glass);}
.list-row.active{background:linear-gradient(90deg,var(--p-soft),transparent);border-left:2px solid var(--p1);padding-left:12px;}
.list-row .sym-icon{width:28px;height:28px;border-radius:7px;display:grid;place-items:center;font-size:12px;font-weight:700;font-family:var(--mono);color:#160620;}
.list-row b{font-size:13px;}
.list-row small{display:block;color:var(--t3);font-size:11px;margin-top:1px;}
.list-row .price{text-align:right;font-family:var(--mono);font-size:12px;}
.list-row .price b{display:block;color:var(--t1);}
.list-row .price span{font-size:11px;}
.list-row .price span.up{color:var(--g1);}
.list-row .price span.down{color:var(--r1);}

/* Chart area */
.arena-chart{display:flex;flex-direction:column;min-width:0;}
.chart-head{padding:14px 18px;display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;border-bottom:1px solid var(--border);}
.chart-head .sym{display:flex;align-items:center;gap:12px;}
.chart-head .sym-icon{width:40px;height:40px;border-radius:10px;display:grid;place-items:center;font-weight:700;font-family:var(--mono);color:#160620;font-size:14px;}
.chart-head b{font-size:20px;letter-spacing:-0.01em;}
.chart-head small{display:block;color:var(--t3);font-size:11px;text-transform:uppercase;letter-spacing:0.14em;}
.chart-price{text-align:right;}
.chart-price b{font-family:var(--mono);font-size:24px;}
.chart-price span{display:inline-flex;align-items:center;gap:4px;font-size:13px;margin-top:2px;}
.chart-price span.up{color:var(--g1);}
.chart-price span.down{color:var(--r1);}
.chart-tf{display:flex;gap:4px;padding:0 18px 12px;flex-wrap:wrap;}
.chart-tf button{padding:6px 10px;font-size:12px;font-weight:600;color:var(--t3);border-radius:6px;text-transform:uppercase;letter-spacing:0.08em;transition:.18s color,.18s background;}
.chart-tf button.active{color:var(--t1);background:var(--glass);box-shadow:inset 0 0 0 1px rgba(124,58,237,0.45);}
.chart-tf button:hover:not(.active){color:var(--t2);background:rgba(255,255,255,0.03);}
#arena-chart{transition:opacity 180ms ease,filter 180ms ease;}
#arena-chart.tf-swap{opacity:0.25;filter:blur(2px);}
#arena-chart{flex:1;width:100%;min-height:360px;}

/* Order ticket */
.arena-ticket{padding:16px;border-left:1px solid var(--border);background:rgba(8,5,26,0.4);display:flex;flex-direction:column;gap:14px;}
.ticket-toggle{display:grid;grid-template-columns:1fr 1fr;gap:8px;padding:4px;background:var(--glass);border-radius:12px;border:1px solid var(--border);}
.ticket-toggle button{padding:10px;border-radius:9px;font-size:13px;font-weight:700;letter-spacing:0.06em;color:var(--t2);transition:.2s;}
.ticket-toggle button.buy.active{background:linear-gradient(180deg,rgba(16,227,155,0.35),rgba(16,227,155,0.15));color:var(--g1);box-shadow:0 4px 16px -4px var(--g-glow);}
.ticket-toggle button.sell.active{background:linear-gradient(180deg,rgba(255,79,112,0.35),rgba(255,79,112,0.15));color:var(--r1);box-shadow:0 4px 16px -4px var(--r-glow);}
.ticket-field{display:flex;flex-direction:column;gap:6px;}
.ticket-field label{font-size:11px;color:var(--t3);text-transform:uppercase;letter-spacing:0.14em;}
.ticket-input{
  display:flex;align-items:center;background:var(--glass);border:1px solid var(--border);border-radius:10px;padding:0 10px;
  transition:.15s;
}
.ticket-input:focus-within{border-color:var(--p1);background:var(--glass-2);}
.ticket-input input{flex:1;padding:10px 6px;background:transparent;border:none;outline:none;color:var(--t1);font-family:var(--mono);font-size:14px;}
.ticket-input .step{width:26px;height:26px;border-radius:6px;background:var(--glass-2);display:grid;place-items:center;color:var(--t2);}
.ticket-input .step:hover{color:var(--t1);background:var(--border-2);}
.ticket-quick{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;}
.ticket-quick button{padding:7px;font-size:11px;font-weight:600;border:1px solid var(--border);border-radius:8px;background:var(--glass);color:var(--t2);}
.ticket-quick button:hover{color:var(--t1);background:var(--glass-2);}
.ticket-summary{padding:12px;border-radius:10px;background:var(--glass);border:1px solid var(--border);display:flex;flex-direction:column;gap:6px;}
.ticket-summary .row{display:flex;justify-content:space-between;font-size:12px;}
.ticket-summary .row .k{color:var(--t3);}
.ticket-summary .row .v{font-family:var(--mono);color:var(--t1);}
.ticket-submit{
  padding:14px;border-radius:12px;font-weight:700;font-size:14px;letter-spacing:0.06em;
  background:linear-gradient(180deg,rgba(16,227,155,0.4),rgba(16,227,155,0.2));color:var(--g1);
  border:1px solid rgba(16,227,155,0.5);transition:.2s;
}
.ticket-submit:hover{transform:translateY(-1px);box-shadow:0 8px 24px -6px var(--g-glow);}
.ticket-submit.sell{background:linear-gradient(180deg,rgba(255,79,112,0.4),rgba(255,79,112,0.2));color:var(--r1);border-color:rgba(255,79,112,0.5);}
.ticket-submit.sell:hover{box-shadow:0 8px 24px -6px var(--r-glow);}
.ticket-otype{display:grid;grid-template-columns:1fr 1fr;gap:6px;padding:3px;background:var(--glass);border-radius:9px;border:1px solid var(--border);}
.ticket-otype .otype-btn{padding:7px;font-size:11px;font-weight:600;letter-spacing:0.10em;text-transform:uppercase;border-radius:6px;color:var(--t3);transition:.18s;}
.ticket-otype .otype-btn.active{color:var(--t1);background:var(--glass-2);box-shadow:inset 0 0 0 1px rgba(124,58,237,0.45);}
.ticket-otype .otype-btn:hover:not(.active){color:var(--t2);}
.ticket-hint{font-size:10.5px;color:var(--t3);line-height:1.4;}

/* Pending limit orders header inside Orders tab */
.pending-head{padding:10px 14px;font-size:11px;color:#ffd55a;letter-spacing:0.12em;text-transform:uppercase;font-weight:700;border-bottom:1px solid rgba(255,213,90,0.18);background:rgba(255,180,40,0.06);display:flex;justify-content:space-between;align-items:center;}
.pending-head .badge{background:#ffd55a;color:#1a0f00;padding:2px 7px;border-radius:999px;font-size:10px;font-weight:800;}
.pending-row{display:grid;grid-template-columns:1fr 60px 1fr 1fr 1fr 70px;gap:8px;padding:9px 14px;font-size:12px;align-items:center;border-bottom:1px solid var(--border);}
.pending-row .b-cancel{padding:5px 9px;font-size:10.5px;font-weight:700;border-radius:6px;background:rgba(255,79,112,0.12);color:var(--r1);border:1px solid rgba(255,79,112,0.25);text-transform:uppercase;letter-spacing:0.08em;}
.pending-row .b-cancel:hover{background:rgba(255,79,112,0.22);}
.pending-row .side-buy{color:var(--g1);font-weight:700;}
.pending-row .side-sell{color:var(--r1);font-weight:700;}

/* Positions */
.positions{padding:16px 18px;border-top:1px solid var(--border);}

/* Terminal panel (Groww-style tabs: Positions/Depth/Orders/Holdings/Balance) */
.term-panel{border-top:1px solid var(--border);background:rgba(8,5,26,0.35);}
.term-tabs{display:flex;gap:2px;padding:0 10px;border-bottom:1px solid var(--border);overflow-x:auto;}
.term-tab{display:inline-flex;align-items:center;gap:6px;padding:11px 14px;font-size:12px;font-weight:600;letter-spacing:0.06em;color:var(--t3);border-bottom:2px solid transparent;margin-bottom:-1px;white-space:nowrap;transition:.15s;}
.term-tab:hover{color:var(--t2);}
.term-tab.active{color:var(--t1);border-bottom-color:var(--c1);}
.term-tab svg{opacity:.7;}
.term-tab.active svg{opacity:1;color:var(--c1);}
.term-badge{font-family:var(--mono);font-size:11px;padding:1px 6px;border-radius:999px;background:var(--glass);color:var(--t2);}
.term-tab.active .term-badge{background:rgba(16,227,155,0.14);color:#10e39b;}
.term-pane{display:none;padding:14px 18px;min-height:180px;}
.term-pane.active{display:block;}

/* Market depth ladder */
.depth-head{display:flex;justify-content:space-between;align-items:center;font-size:12px;color:var(--t2);margin-bottom:10px;}
.depth-head b{color:var(--t1);font-family:var(--mono);}
.depth-spread{color:var(--t3);}
.depth-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;}
.depth-col-head{display:flex;justify-content:space-between;font-size:10px;text-transform:uppercase;letter-spacing:0.1em;color:var(--t3);padding:6px 8px;border-bottom:1px solid var(--border);}
.depth-row{position:relative;display:flex;justify-content:space-between;padding:5px 8px;font-family:var(--mono);font-size:12px;overflow:hidden;}
.depth-row .d-bar{position:absolute;top:0;bottom:0;z-index:0;opacity:0.18;}
.depth-row .d-qty,.depth-row .d-px{position:relative;z-index:1;}
.depth-col.bid .depth-row .d-bar{right:0;background:linear-gradient(90deg,transparent,#10e39b);}
.depth-col.ask .depth-row .d-bar{left:0;background:linear-gradient(90deg,#ff4f70,transparent);}
.depth-col.bid .depth-row .d-px{color:#10e39b;font-weight:600;}
.depth-col.ask .depth-row .d-px{color:#ff4f70;font-weight:600;}
.depth-col.ask .depth-row{flex-direction:row-reverse;}
.depth-footer{display:flex;justify-content:space-between;margin-top:12px;padding-top:10px;border-top:1px solid var(--border);font-size:11px;color:var(--t3);}
.depth-footer b{color:var(--t1);font-family:var(--mono);margin-left:4px;}

/* Balance grid */
.bal-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;}
@media (max-width:900px){.bal-grid{grid-template-columns:repeat(2,1fr);}}
.bal-card{padding:14px;border-radius:var(--r-md);background:var(--glass);border:1px solid var(--border);display:flex;flex-direction:column;gap:6px;}
.bal-lbl{font-size:11px;text-transform:uppercase;letter-spacing:0.1em;color:var(--t3);}
.bal-card b{font-family:var(--mono);font-size:18px;color:var(--t1);}
.positions h4{font-size:12px;text-transform:uppercase;letter-spacing:0.14em;color:var(--t3);margin-bottom:10px;display:flex;justify-content:space-between;}
.pos-table{width:100%;font-size:13px;}
.pos-table thead th{text-align:left;padding:6px 10px;font-size:11px;color:var(--t3);text-transform:uppercase;letter-spacing:0.1em;font-weight:600;border-bottom:1px solid var(--border);}
.pos-table tbody td{padding:10px;border-bottom:1px solid rgba(255,255,255,0.03);font-family:var(--mono);}
.pos-table tbody tr:hover{background:var(--glass);}
.pos-table .empty{text-align:center;color:var(--t3);padding:24px;font-family:var(--f);}
.pos-pnl.up{color:var(--g1);}
.pos-pnl.down{color:var(--r1);}
.pos-close{padding:4px 8px;border:1px solid var(--border-2);border-radius:6px;font-size:11px;color:var(--t2);font-family:var(--f);}
.pos-close:hover{background:var(--r-soft);color:var(--r1);border-color:var(--r1);}

/* ──────────── Modal ──────────── */
.modal-overlay{
  position:fixed;inset:0;z-index:100;background:rgba(5,4,20,0.75);backdrop-filter:blur(8px);
  display:none;align-items:center;justify-content:center;padding:20px;
}
.modal-overlay.open{display:flex;animation:fade .25s ease;}
@keyframes fade{from{opacity:0;}to{opacity:1;}}
.modal{
  position:relative;width:100%;max-width:460px;border-radius:var(--r-xl);
  background:linear-gradient(160deg,#1a1146,#0d0630);
  border:1px solid var(--border-2);box-shadow:0 30px 80px -20px rgba(0,0,0,0.7);
  padding:36px 28px 28px;
  animation:rise .35s cubic-bezier(.2,.8,.2,1);
}
@keyframes rise{from{transform:translateY(20px) scale(.96);opacity:0;}to{transform:none;opacity:1;}}
.modal-close{
  position:absolute;top:12px;right:12px;width:32px;height:32px;border-radius:50%;
  background:var(--glass-2);border:1px solid var(--border);display:grid;place-items:center;color:var(--t2);transition:.2s;
}
.modal-close:hover{color:var(--r1);border-color:var(--r1);}
.modal-eyebrow{
  display:inline-flex;align-items:center;gap:10px;
  padding:6px 14px;border-radius:999px;
  background:var(--glass);border:1px solid var(--border-2);
  font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;
  margin-bottom:18px;color:var(--c1);
}
.modal h2{font-size:26px;letter-spacing:-0.01em;margin-bottom:8px;font-family:var(--f);}
.modal h2 em{font-style:normal;background:linear-gradient(120deg,var(--y1),#ffb347);-webkit-background-clip:text;background-clip:text;color:transparent;}
.modal .lead{color:var(--t2);font-size:14px;margin-bottom:22px;}

.welcome-stats{
  display:flex;gap:18px;padding:10px 14px;border-radius:12px;
  background:var(--glass);border:1px solid var(--border);
  margin-bottom:22px;font-size:12px;
}
.welcome-stats .w-s{display:flex;align-items:center;gap:6px;}
.welcome-stats .w-s .dot{width:6px;height:6px;border-radius:50%;}
.welcome-stats .w-s b{font-family:var(--mono);color:var(--t1);}
.welcome-stats .w-s small{color:var(--t3);text-transform:uppercase;letter-spacing:0.12em;font-size:10px;}
.welcome-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:18px;}
.welcome-card{
  padding:14px 10px;border-radius:12px;
  background:var(--glass);border:1px solid var(--border);
  text-align:center;cursor:pointer;transition:.2s;font-size:12px;font-weight:600;
}
.welcome-card:hover{background:var(--glass-2);border-color:var(--p1);transform:translateY(-2px);}
.welcome-card .icon{width:36px;height:36px;border-radius:10px;margin:0 auto 8px;display:grid;place-items:center;background:var(--p-soft);color:var(--p1);}
.welcome-feats{display:flex;gap:14px;margin-bottom:22px;font-size:12px;color:var(--t2);justify-content:center;flex-wrap:wrap;}
.welcome-feats b{color:var(--t1);}
.welcome-feats .sep{color:var(--t4);}
.modal-cta{width:100%;padding:14px;border-radius:12px;background:linear-gradient(135deg,var(--c1),var(--p1));color:#0b0720;font-weight:700;font-size:14px;letter-spacing:0.04em;}
.modal-cta:hover{transform:translateY(-1px);box-shadow:0 10px 30px -6px var(--p-glow);}
.modal-skip{display:block;margin:12px auto 0;font-size:12px;color:var(--t3);text-decoration:underline;}
.modal-skip:hover{color:var(--t1);}

/* Auth */
.auth-tabs{display:grid;grid-template-columns:1fr 1fr;gap:4px;padding:4px;background:var(--glass);border:1px solid var(--border);border-radius:10px;margin-bottom:16px;}
.auth-tabs button{padding:8px;font-size:13px;font-weight:600;color:var(--t3);border-radius:7px;}
.auth-tabs button.active{background:var(--glass-2);color:var(--t1);}
.auth-oauth{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:18px;}
.auth-oauth button{padding:10px;font-size:13px;font-weight:600;border:1px solid var(--border-2);border-radius:10px;color:var(--t1);display:flex;align-items:center;justify-content:center;gap:8px;background:var(--glass);}
.auth-oauth button:hover{background:var(--glass-2);}
.auth-oauth .ic{width:16px;height:16px;}
.auth-divider{text-align:center;color:var(--t3);font-size:12px;margin:14px 0;position:relative;}
.auth-divider::before,.auth-divider::after{content:"";position:absolute;top:50%;width:calc(50% - 22px);height:1px;background:var(--border);}
.auth-divider::before{left:0;}.auth-divider::after{right:0;}
.field{margin-bottom:12px;}
.field label{display:block;font-size:11px;text-transform:uppercase;letter-spacing:0.14em;color:var(--t3);margin-bottom:6px;}
.field input{
  width:100%;padding:12px 14px;background:var(--glass);border:1px solid var(--border);
  border-radius:10px;color:var(--t1);font-size:14px;outline:none;transition:.15s;font-family:var(--sans);
}
.field input:focus{border-color:var(--p1);background:var(--glass-2);}
.auth-extras{display:flex;justify-content:space-between;align-items:center;font-size:12px;margin:10px 0 18px;color:var(--t2);}
.auth-extras a{color:var(--c1);}

/* How-to-play carousel */
.htp-slide{display:none;}
.htp-slide.active{display:block;animation:fade .3s ease;}
.htp-media{width:100%;height:160px;border-radius:12px;margin:10px 0 18px;background:linear-gradient(135deg,var(--p-soft),var(--c-soft));border:1px solid var(--border);display:grid;place-items:center;color:var(--t3);font-size:12px;letter-spacing:0.14em;text-transform:uppercase;overflow:hidden;position:relative;}
.htp-media svg{width:72%;height:72%;}
.htp-dots{display:flex;justify-content:center;gap:6px;margin:18px 0 10px;}
.htp-dots .d{width:8px;height:8px;border-radius:50%;background:var(--border-2);transition:.2s;}
.htp-dots .d.active{background:var(--c1);width:20px;box-shadow:0 0 10px var(--c-glow);}
.htp-nav{display:grid;grid-template-columns:1fr 1fr;gap:10px;}
.htp-nav button{padding:12px;border-radius:10px;font-weight:600;font-size:13px;}
.htp-nav .back{background:var(--glass);border:1px solid var(--border);color:var(--t2);}
.htp-nav .next{background:linear-gradient(135deg,var(--c1),var(--p1));color:#0b0720;}
.htp-nav .back:hover{background:var(--glass-2);color:var(--t1);}

/* ──────────── Tournaments ──────────── */
.tourn-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:28px;}
@media (max-width:960px){.tourn-grid{grid-template-columns:1fr;}}

/* ───────── Portfolio dashboard ───────── */
.port-top{display:grid;grid-template-columns:1.4fr 1fr;gap:16px;margin-bottom:24px;}
@media (max-width:960px){.port-top{grid-template-columns:1fr;}}
.port-equity-card{background:linear-gradient(180deg,rgba(124,58,237,0.08),rgba(8,5,26,0.6));border:1px solid var(--border);border-radius:18px;padding:22px;}
.pec-head{display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:14px;margin-bottom:18px;}
.pec-lbl{display:block;font-size:11px;text-transform:uppercase;letter-spacing:0.16em;color:var(--t3);margin-bottom:4px;}
.pec-head b{font-family:var(--mono);font-size:28px;color:var(--t1);}
.pec-pill{text-align:right;padding:10px 16px;border-radius:12px;background:var(--glass);border:1px solid var(--border);}
.pec-pill.profit{border-color:rgba(16,227,155,0.4);background:rgba(16,227,155,0.08);}
.pec-pill.loss{border-color:rgba(255,79,112,0.4);background:rgba(255,79,112,0.08);}
.pec-pill b{font-size:20px;}
.pec-pct{display:block;margin-top:2px;font-family:var(--mono);font-size:12px;color:var(--t3);}
.pec-pill.profit .pec-pct{color:var(--g1);}
.pec-pill.loss .pec-pct{color:var(--r1);}
#equity-spark{width:100%;height:120px;display:block;border-radius:10px;background:rgba(0,0,0,0.18);}
.pec-foot{display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px;margin-top:12px;font-size:11px;color:var(--t3);text-transform:uppercase;letter-spacing:0.12em;}
.pec-foot b{color:var(--t2);font-family:var(--mono);text-transform:none;letter-spacing:0;}

.port-stats{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;}
.ps-card{padding:14px 16px;border-radius:14px;background:var(--glass);border:1px solid var(--border);display:flex;flex-direction:column;gap:4px;}
.ps-lbl{font-size:11px;color:var(--t3);text-transform:uppercase;letter-spacing:0.14em;}
.ps-card b{font-family:var(--mono);font-size:18px;color:var(--t1);}
.ps-card.up b{color:var(--g1);}
.ps-card.down b{color:var(--r1);}

/* Gamification row */
.game-row,.market-row{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:18px;}
@media (max-width:960px){.game-row,.market-row{grid-template-columns:1fr;}}
.game-card{background:linear-gradient(180deg,rgba(124,58,237,0.06),rgba(8,5,26,0.5));border:1px solid var(--border);border-radius:16px;padding:18px;display:flex;flex-direction:column;gap:10px;}
.gc-head{display:flex;justify-content:space-between;align-items:center;gap:8px;}
.gc-eyebrow{font-size:11px;color:var(--t3);text-transform:uppercase;letter-spacing:0.16em;}
.dc-reward{padding:3px 9px;border-radius:999px;background:rgba(255,213,90,0.14);color:#ffd55a;font-size:11px;font-weight:700;letter-spacing:0.06em;}
.xp-card .gc-head b{font-family:var(--mono);font-size:28px;color:var(--p2);}
.xp-title{margin-left:auto;font-size:12px;color:var(--t2);font-weight:600;}
.xp-bar{height:10px;background:rgba(255,255,255,0.06);border-radius:999px;overflow:hidden;}
.xp-fill{height:100%;background:linear-gradient(90deg,var(--p1),var(--c1));transition:width 600ms ease;}
.xp-meta{font-size:11px;color:var(--t3);font-family:var(--mono);}
.dc-text{font-size:14px;font-weight:600;color:var(--t1);line-height:1.5;}
.dc-progress{height:8px;background:rgba(255,255,255,0.06);border-radius:999px;overflow:hidden;}
.dc-fill{height:100%;background:linear-gradient(90deg,#ffd55a,var(--g1));transition:width 600ms ease;}
.dc-meta{font-size:11px;color:var(--t3);font-family:var(--mono);}
.dc-done .dc-fill{background:linear-gradient(90deg,var(--g1),var(--c1));}
.dc-done .dc-text{color:var(--g1);}
.ach-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;}
.ach{aspect-ratio:1/1;border-radius:10px;background:var(--glass);border:1px solid var(--border);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;padding:6px;text-align:center;transition:.2s;}
.ach .ach-icon{font-size:20px;filter:grayscale(1);opacity:0.4;}
.ach.unlocked{background:linear-gradient(180deg,rgba(255,213,90,0.18),rgba(124,58,237,0.10));border-color:rgba(255,213,90,0.45);}
.ach.unlocked .ach-icon{filter:none;opacity:1;}
.ach .ach-name{font-size:9px;color:var(--t3);text-align:center;line-height:1.2;text-transform:uppercase;letter-spacing:0.04em;}
.ach.unlocked .ach-name{color:var(--t2);}

/* News & bots & crash */
.news-list{display:flex;flex-direction:column;gap:6px;max-height:220px;overflow-y:auto;padding-right:4px;}
.news-empty{font-size:13px;color:var(--t3);padding:18px 4px;text-align:center;}
.news-item{padding:10px 12px;border-radius:8px;background:var(--glass);border:1px solid var(--border);font-size:12.5px;line-height:1.4;animation:newsIn .35s ease-out;}
@keyframes newsIn{from{opacity:0;transform:translateY(-4px);}to{opacity:1;transform:translateY(0);}}
.news-item.bull{border-left:3px solid var(--g1);}
.news-item.bear{border-left:3px solid var(--r1);}
.news-item .nh{font-weight:700;color:var(--t1);}
.news-item .nm{color:var(--t3);font-size:11px;font-family:var(--mono);}
.bots-list{display:flex;flex-direction:column;gap:6px;}
.bot-row{display:grid;grid-template-columns:24px 1fr auto auto;align-items:center;gap:10px;padding:8px 10px;border-radius:8px;background:var(--glass);border:1px solid var(--border);}
.bot-rank{font-family:var(--mono);font-size:11px;color:var(--t3);}
.bot-rank.gold{color:#ffd55a;}
.bot-name{font-size:12.5px;font-weight:600;}
.bot-name small{display:block;color:var(--t3);font-size:10px;font-weight:400;}
.bot-pnl{font-family:var(--mono);font-size:13px;}
.bot-pnl.up{color:var(--g1);}
.bot-pnl.down{color:var(--r1);}
.bot-trades{font-family:var(--mono);font-size:10.5px;color:var(--t3);}
.mode-text{font-size:13px;line-height:1.5;color:var(--t2);}
#mode-pill.crash{background:rgba(255,79,112,0.2);color:var(--r1);animation:crashPulse 1.2s ease-in-out infinite;}
@keyframes crashPulse{0%,100%{opacity:1;}50%{opacity:0.55;}}

/* Trade history */
.port-history{margin-top:18px;background:rgba(8,5,26,0.4);border:1px solid var(--border);border-radius:16px;overflow:hidden;}
.ph-head{padding:14px 18px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--border);}
.ph-head h3{font-size:14px;letter-spacing:0.04em;}
.ph-table-wrap{max-height:340px;overflow-y:auto;}

/* XP toast */
.xp-toast{position:fixed;top:80px;right:20px;z-index:200;padding:10px 16px;border-radius:12px;background:linear-gradient(135deg,rgba(124,58,237,0.95),rgba(89,201,255,0.85));color:#fff;font-size:13px;font-weight:700;letter-spacing:0.04em;box-shadow:0 12px 36px -8px rgba(124,58,237,0.6);animation:xpToast 2.4s ease-out forwards;pointer-events:none;}
@keyframes xpToast{0%{opacity:0;transform:translateY(-12px);}10%{opacity:1;transform:translateY(0);}80%{opacity:1;transform:translateY(0);}100%{opacity:0;transform:translateY(-8px);}}
.tourn{
  padding:20px;border-radius:var(--r-lg);
  background:linear-gradient(160deg,rgba(22,14,56,0.85),rgba(10,7,32,0.9));
  border:1px solid var(--border);
  display:flex;flex-direction:column;gap:14px;position:relative;overflow:hidden;transition:.2s;
}
.tourn:hover{transform:translateY(-3px);border-color:var(--p1);box-shadow:0 14px 40px -10px var(--p-glow);}
.tourn::before{content:"";position:absolute;top:0;right:0;width:160px;height:160px;background:radial-gradient(circle,var(--p-soft),transparent 70%);pointer-events:none;}
.tourn-head{display:flex;justify-content:space-between;align-items:flex-start;position:relative;z-index:1;}
.tourn-type{padding:4px 10px;border-radius:999px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.14em;}
.tourn-type.public{background:var(--c-soft);color:var(--c1);}
.tourn-type.private{background:var(--p-soft);color:var(--p1);}
.tourn-type.featured{background:var(--y-soft);color:var(--y1);}
.tourn h3{font-size:18px;letter-spacing:-0.01em;}
.tourn p{color:var(--t2);font-size:13px;}
.tourn-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;padding:12px;border-radius:10px;background:var(--glass);border:1px solid var(--border);}
.tourn-stats .t-s b{font-family:var(--mono);font-size:14px;color:var(--t1);}
.tourn-stats .t-s small{display:block;font-size:10px;text-transform:uppercase;letter-spacing:0.12em;color:var(--t3);margin-top:2px;}
.tourn-foot{display:flex;justify-content:space-between;align-items:center;gap:10px;}
.tourn-foot .btn{padding:9px 14px;font-size:13px;flex:1;justify-content:center;}
.tourn-avatars{display:flex;}
.tourn-avatars span{width:22px;height:22px;border-radius:50%;border:2px solid var(--bg-1);margin-left:-6px;display:grid;place-items:center;font-size:9px;font-weight:700;color:#160620;}
.tourn-avatars span:first-child{margin-left:0;}

/* ──────────── Leaderboard ──────────── */
.lb-wrap{margin-top:28px;border-radius:var(--r-lg);border:1px solid var(--border);overflow-x:auto;overflow-y:hidden;background:var(--panel);-webkit-overflow-scrolling:touch;}
.lb-table{min-width:640px;}
.lb-table{width:100%;font-size:14px;}
.lb-table thead{background:rgba(22,14,56,0.6);}
.lb-table th{text-align:left;padding:14px 18px;font-size:11px;color:var(--t3);text-transform:uppercase;letter-spacing:0.14em;font-weight:600;}
.lb-table td{padding:14px 18px;border-top:1px solid var(--border);font-family:var(--mono);}
.lb-table tbody tr{transition:.15s;}
.lb-table tbody tr:hover{background:var(--glass);}
.lb-rank{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:8px;font-weight:700;font-family:var(--mono);font-size:13px;}
.lb-rank.r1{background:linear-gradient(135deg,#ffd55a,#f8a02b);color:#160620;}
.lb-rank.r2{background:linear-gradient(135deg,#e0e0e0,#9d9db0);color:#160620;}
.lb-rank.r3{background:linear-gradient(135deg,#d08658,#965230);color:#160620;}
.lb-rank.rx{background:var(--glass-2);color:var(--t2);}
.lb-name{display:flex;align-items:center;gap:10px;font-family:var(--f);}
.lb-name .av{width:28px;height:28px;border-radius:50%;font-size:10px;font-weight:700;color:#160620;display:grid;place-items:center;}
.lb-pnl.up{color:var(--g1);}
.lb-pnl.down{color:var(--r1);}
.lb-trades{color:var(--t3);}

/* ──────────── Footer ──────────── */
footer{padding:40px 0 28px;border-top:1px solid var(--border);margin-top:80px;}
.foot-grid{display:grid;grid-template-columns:2fr repeat(3,1fr);gap:32px;margin-bottom:28px;}
@media (max-width:900px){.foot-grid{grid-template-columns:1fr 1fr;}}
@media (max-width:560px){.foot-grid{grid-template-columns:1fr;}}
.foot-brand p{color:var(--t2);font-size:13px;margin-top:10px;max-width:320px;}
.foot-col h5{font-size:11px;text-transform:uppercase;letter-spacing:0.14em;color:var(--t3);margin-bottom:12px;}
.foot-col a{display:block;font-size:14px;color:var(--t2);padding:5px 0;}
.foot-col a:hover{color:var(--t1);}
.foot-bot{display:flex;justify-content:space-between;flex-wrap:wrap;gap:12px;padding-top:18px;border-top:1px solid var(--border);color:var(--t3);font-size:12px;}

/* ──────────── Utility ──────────── */
.scroll-fade > * {opacity:0;transform:translateY(20px);transition:opacity .6s ease, transform .6s ease;}
.scroll-fade.visible > * {opacity:1;transform:none;}
.scroll-fade.visible > *:nth-child(2){transition-delay:.08s;}
.scroll-fade.visible > *:nth-child(3){transition-delay:.16s;}
.scroll-fade.visible > *:nth-child(4){transition-delay:.24s;}

.kb{font-family:var(--mono);font-size:11px;padding:2px 6px;border-radius:4px;background:var(--glass-2);border:1px solid var(--border);color:var(--t2);}

.sr-only{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;}
@media (prefers-reduced-motion:reduce){
  *,*::before,*::after{animation-duration:.001ms!important;animation-iteration-count:1!important;transition:none!important;}
  .orb{animation:none;}
}

/* Toast */
.toast-wrap{position:fixed;bottom:20px;right:20px;z-index:200;display:flex;flex-direction:column;gap:10px;max-width:340px;}
.toast{
  padding:12px 16px;border-radius:12px;background:linear-gradient(160deg,#1a1146,#0d0630);
  border:1px solid var(--border-2);box-shadow:0 10px 30px -6px rgba(0,0,0,0.55);
  font-size:13px;display:flex;align-items:center;gap:10px;
  animation:slideIn .3s ease;
}
.toast.success{border-color:rgba(16,227,155,0.4);}
.toast.error{border-color:rgba(255,79,112,0.4);}
.toast .ic{width:22px;height:22px;border-radius:50%;display:grid;place-items:center;flex-shrink:0;}
.toast.success .ic{background:var(--g-soft);color:var(--g1);}
.toast.error .ic{background:var(--r-soft);color:var(--r1);}
@keyframes slideIn{from{transform:translateX(20px);opacity:0;}to{transform:none;opacity:1;}}

/* ════════════════════════════════════════════════════════════════
   ✨  PREMIUM LANDING — particle gravity, cursor, hero v2, magnetic
   ════════════════════════════════════════════════════════════════ */

/* Custom glowing cursor aura (desktop fine-pointer only). */
@media (pointer: fine) and (hover: hover){
  body.pb-cursor-on{ cursor:none; }
  body.pb-cursor-on a, body.pb-cursor-on button, body.pb-cursor-on input,
  body.pb-cursor-on select, body.pb-cursor-on textarea{ cursor:none; }
}
.pb-cursor{
  position:fixed;left:0;top:0;width:36px;height:36px;border-radius:50%;
  pointer-events:none;z-index:9998;transform:translate3d(-100px,-100px,0);
  border:1px solid rgba(168,85,247,0.6);
  background:radial-gradient(circle, rgba(168,85,247,0.18), transparent 70%);
  backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);
  transition:width .25s ease, height .25s ease, border-color .25s ease, background .25s ease, transform .08s linear;
  mix-blend-mode:screen;
}
.pb-cursor.is-hover{ width:62px;height:62px;border-color:rgba(34,211,238,0.7);
  background:radial-gradient(circle, rgba(34,211,238,0.22), transparent 70%); }
.pb-cursor.is-down{ width:24px;height:24px; }
.pb-cursor-dot{
  position:fixed;left:0;top:0;width:6px;height:6px;border-radius:50%;
  background:#fff;box-shadow:0 0 12px rgba(255,255,255,0.9);
  pointer-events:none;z-index:9999;transform:translate3d(-100px,-100px,0);
  mix-blend-mode:screen;
}

/* Tilt cards (3D parallax on hover) */
.pb-tilt{ transform-style:preserve-3d; transition:transform .35s ease; will-change:transform; }
.pb-tilt-inner{ transform:translateZ(30px); }

/* Magnetic buttons */
.pb-magnetic{ transition:transform .25s cubic-bezier(.2,.8,.2,1); will-change:transform; }

/* Ripple effect */
.pb-ripple{position:relative;overflow:hidden;}
.pb-ripple > .pb-ripple-wave{
  position:absolute;border-radius:50%;
  background:radial-gradient(circle, rgba(255,255,255,0.55), rgba(255,255,255,0) 60%);
  transform:translate(-50%,-50%) scale(0);pointer-events:none;
  animation:pb-ripple 700ms ease-out forwards;
}
@keyframes pb-ripple{
  0%{ transform:translate(-50%,-50%) scale(0); opacity:.55; }
  100%{ transform:translate(-50%,-50%) scale(2.6); opacity:0; }
}

/* Soft pulse for buttons */
.pb-pulse{ position:relative; }
.pb-pulse::after{
  content:"";position:absolute;inset:-2px;border-radius:inherit;pointer-events:none;
  box-shadow:0 0 0 0 rgba(168,85,247,0.55);
  animation:pb-pulse 2.6s ease-out infinite;
}
@keyframes pb-pulse{
  0%{ box-shadow:0 0 0 0 rgba(168,85,247,0.55); }
  70%{ box-shadow:0 0 0 16px rgba(168,85,247,0); }
  100%{ box-shadow:0 0 0 0 rgba(168,85,247,0); }
}

/* Profit / loss feedback */
@keyframes pb-profit-pulse{ 0%{ text-shadow:0 0 0 rgba(16,227,155,0); } 50%{ text-shadow:0 0 18px rgba(16,227,155,0.85); } 100%{ text-shadow:0 0 0 rgba(16,227,155,0); } }
@keyframes pb-loss-flicker{ 0%,100%{opacity:1;} 30%{opacity:.55;} 60%{opacity:1;} 75%{opacity:.7;} }
.pb-profit{ animation: pb-profit-pulse 900ms ease-out 1; color:var(--g1); }
.pb-loss{ animation: pb-loss-flicker 600ms ease-out 1; color:var(--r1); }

/* Animated flowing gradient on headline */
@keyframes pb-text-flow{
  0%{ background-position:0% 50%; }
  50%{ background-position:100% 50%; }
  100%{ background-position:0% 50%; }
}
.pb-grad-text{
  background:linear-gradient(120deg,#a855f7 0%,#22d3ee 25%,#7c3aed 50%,#22d3ee 75%,#a855f7 100%);
  background-size:300% 100%;
  -webkit-background-clip:text;background-clip:text;color:transparent;
  animation: pb-text-flow 8s ease-in-out infinite;
}
.pb-grad-text-2{
  background:linear-gradient(120deg,#22d3ee 0%,#a855f7 50%,#22d3ee 100%);
  background-size:200% 100%;
  -webkit-background-clip:text;background-clip:text;color:transparent;
  animation: pb-text-flow 6s ease-in-out infinite;
}

/* Reveal-on-scroll (used by IntersectionObserver) */
.reveal{ opacity:0; transform:translateY(28px); transition:opacity .8s cubic-bezier(.2,.8,.2,1), transform .8s cubic-bezier(.2,.8,.2,1); }
.reveal.is-in{ opacity:1; transform:none; }
.reveal-d1{ transition-delay:.08s; }
.reveal-d2{ transition-delay:.18s; }
.reveal-d3{ transition-delay:.28s; }

/* ════════════ HERO V2 — premium centerpiece ════════════ */
.hero2{
  position:relative; padding:64px 0 40px;
}
.hero2-grid{
  display:grid; grid-template-columns:1.05fr 1fr; gap:56px; align-items:center;
}
@media (max-width:1024px){ .hero2-grid{ grid-template-columns:1fr; gap:36px; } }
.hero2 .eyebrow{
  display:inline-flex; align-items:center; gap:10px;
  padding:8px 14px; border-radius:999px;
  background:linear-gradient(120deg,rgba(168,85,247,0.18),rgba(34,211,238,0.18));
  border:1px solid rgba(168,85,247,0.35); color:#e6d8ff;
  font-size:12px; font-weight:600; letter-spacing:.16em; text-transform:uppercase;
  backdrop-filter:blur(8px); -webkit-backdrop-filter:blur(8px);
}
.hero2 .eyebrow .spark{ width:6px; height:6px; border-radius:50%; background:var(--c1); box-shadow:0 0 14px var(--c-glow); }
.hero2-title{
  font-size:clamp(40px,6.2vw,84px); line-height:1.0; letter-spacing:-0.035em;
  font-weight:800; margin:18px 0 8px; font-family:var(--sans);
}
.hero2-title .l1{ display:block; color:#fff; }
.hero2-title .l2{ display:block; }
.hero2-sub{
  font-size:clamp(28px,4.5vw,56px); line-height:1.05; letter-spacing:-0.03em;
  font-weight:800; margin-bottom:18px; font-family:var(--sans);
}
.hero2-sub .w{ display:inline-block; color:#fff; }
.hero2-sub .w + .w{ margin-left:.18em; }
.hero2-sub .grad{
  background:linear-gradient(120deg,#a855f7,#22d3ee);
  -webkit-background-clip:text;background-clip:text;color:transparent;
}
.hero2-lead{
  color:var(--t2); font-size:17px; max-width:560px; margin-bottom:30px;
}
.hero2-cta{ display:flex; gap:14px; flex-wrap:wrap; margin-bottom:34px; }
.hero2-cta .btn{ padding:15px 24px; font-size:15px; }
.hero2-cta .play-trigger{
  display:inline-flex; align-items:center; gap:10px;
  background:transparent; color:#e6d8ff; font-weight:600; padding:14px 18px;
  border-radius:999px; border:1px solid rgba(255,255,255,0.12);
}
.hero2-cta .play-trigger .play-ico{
  width:36px; height:36px; border-radius:50%;
  background:linear-gradient(135deg,#a855f7,#7c3aed);
  display:grid; place-items:center; box-shadow:0 8px 24px rgba(124,58,237,0.5);
}
.hero2-cta .play-trigger:hover{ border-color:rgba(168,85,247,0.5); }

/* Glassmorphic floating chart card */
.hero2-card{
  position:relative; border-radius:24px;
  background:linear-gradient(160deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02) 60%);
  border:1px solid rgba(255,255,255,0.10);
  backdrop-filter:blur(14px); -webkit-backdrop-filter:blur(14px);
  padding:22px;
  box-shadow:
    0 30px 80px -20px rgba(124,58,237,0.45),
    0 18px 60px -25px rgba(34,211,238,0.35),
    inset 0 1px 0 rgba(255,255,255,0.08);
  animation: pb-float-card 6.5s ease-in-out infinite;
  will-change:transform;
}
.hero2-card::before{
  content:""; position:absolute; inset:-1px; border-radius:25px; pointer-events:none;
  background:conic-gradient(from 0deg,
    rgba(168,85,247,0) 0deg, rgba(168,85,247,0.55) 60deg,
    rgba(34,211,238,0) 120deg, rgba(168,85,247,0) 180deg,
    rgba(34,211,238,0.55) 240deg, rgba(34,211,238,0) 300deg, rgba(168,85,247,0) 360deg);
  -webkit-mask:linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  mask:linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite:xor; mask-composite:exclude;
  padding:1px;
  animation: pb-card-spin 14s linear infinite;
  opacity:.7;
}
@keyframes pb-float-card{
  0%,100%{ transform:translateY(0px); }
  50%{ transform:translateY(-10px); }
}
@keyframes pb-card-spin{ to{ transform:rotate(360deg); } }
.hero2-card .h-row{ display:flex; align-items:flex-start; justify-content:space-between; gap:14px; }
.hero2-card .h-sym{ display:flex; align-items:center; gap:12px; }
.hero2-card .h-sym .ico{
  width:42px; height:42px; border-radius:12px;
  background:linear-gradient(135deg,#1a0f4d,#2c1a76);
  border:1px solid rgba(255,255,255,0.10);
  display:grid; place-items:center; font-weight:700; color:#e6d8ff;
}
.hero2-card .h-sym b{ font-size:16px; }
.hero2-card .h-sym small{ color:var(--t3); font-size:12px; }
.hero2-card .h-tf{
  display:inline-flex; gap:4px; padding:4px;
  background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08);
  border-radius:10px;
}
.hero2-card .h-tf button{
  padding:5px 9px; font-size:11px; font-weight:600; color:var(--t3);
  border-radius:7px; font-family:var(--mono);
}
.hero2-card .h-tf button.is-on{ background:rgba(168,85,247,0.18); color:#e6d8ff; }
.hero2-card .h-price{
  margin-top:14px; display:flex; align-items:baseline; gap:14px;
}
.hero2-card .h-price .p{ font-size:32px; font-weight:700; letter-spacing:-0.02em; font-family:var(--mono); }
.hero2-card .h-price .ch{ font-size:15px; color:var(--g1); font-weight:600; }
.hero2-card .h-chart{
  height:200px; margin-top:12px; border-radius:16px; overflow:hidden;
  background:linear-gradient(180deg,rgba(34,211,238,0.04),rgba(168,85,247,0.04));
  border:1px solid rgba(255,255,255,0.05);
  position:relative;
}
.hero2-card .h-chart canvas{ display:block; width:100%; height:100%; }
.hero2-card .h-foot{
  margin-top:16px; display:grid; grid-template-columns:repeat(4,1fr); gap:12px;
}
.hero2-card .h-foot > div{
  padding:10px 12px; border-radius:12px;
  background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.06);
}
.hero2-card .h-foot small{ display:block; color:var(--t3); font-size:11px; text-transform:uppercase; letter-spacing:0.12em; }
.hero2-card .h-foot b{ display:block; font-family:var(--mono); font-size:14px; margin-top:3px; }

/* Hero balance pill (shown in nav-live area on landing) */
.pb-bal-pill{
  display:inline-flex; align-items:center; gap:10px; padding:8px 14px;
  border-radius:14px; background:linear-gradient(120deg,rgba(168,85,247,0.18),rgba(34,211,238,0.12));
  border:1px solid rgba(255,255,255,0.10);
}
.pb-bal-pill .v{ font-family:var(--mono); font-weight:700; font-size:14px; }
.pb-bal-pill small{ display:block; color:var(--t3); font-size:10px; text-transform:uppercase; letter-spacing:0.12em; }
.pb-bal-pill .pos{ color:var(--g1); }

/* Feature cards row beneath hero */
.feat-row{
  display:grid; grid-template-columns:repeat(4,1fr); gap:18px; margin-top:40px;
}
@media (max-width:1024px){ .feat-row{ grid-template-columns:repeat(2,1fr); } }
@media (max-width:560px){ .feat-row{ grid-template-columns:1fr; } }
.feat-card{
  position:relative; padding:18px; border-radius:18px;
  background:linear-gradient(160deg,rgba(255,255,255,0.05),rgba(255,255,255,0.015));
  border:1px solid rgba(255,255,255,0.08);
  transition:transform .25s ease, border-color .25s ease, box-shadow .25s ease;
}
.feat-card:hover{
  transform:translateY(-4px);
  border-color:rgba(168,85,247,0.4);
  box-shadow:0 18px 40px -20px rgba(168,85,247,0.5);
}
.feat-card .ico{
  width:38px; height:38px; border-radius:12px; display:grid; place-items:center;
  background:rgba(168,85,247,0.15); border:1px solid rgba(168,85,247,0.3); color:#e6d8ff;
  margin-bottom:12px;
}
.feat-card.cyan .ico{ background:rgba(34,211,238,0.15); border-color:rgba(34,211,238,0.3); color:#22d3ee; }
.feat-card.green .ico{ background:rgba(16,227,155,0.15); border-color:rgba(16,227,155,0.3); color:#10e39b; }
.feat-card.amber .ico{ background:rgba(255,203,58,0.15); border-color:rgba(255,203,58,0.3); color:#ffcb3a; }
.feat-card h4{ font-size:15px; font-weight:700; margin-bottom:6px; }
.feat-card p{ color:var(--t3); font-size:13px; line-height:1.5; }
.feat-card a{ display:inline-flex; align-items:center; gap:6px; margin-top:10px; font-size:13px; color:var(--c1); font-weight:600; }
.feat-card a:hover{ color:#7ee9ff; }

/* Hide old hero markup if we render the new one (kept as fallback) */
.hero{ display:none !important; }

/* ══════════ Info modal (about / press / careers / contact / legal / terms / privacy / fairplay / responsible) ══════════ */
.info-modal{ max-width: 640px; padding: 30px 32px 26px; }
.info-modal .info-eyebrow{
  display:inline-flex; align-items:center; gap:8px;
  padding:6px 12px; border-radius:999px;
  background:var(--glass); border:1px solid var(--border-2);
  font-size:10.5px; font-weight:700; letter-spacing:0.16em; text-transform:uppercase;
  margin-bottom:14px; color:var(--c1);
}
.info-modal .info-eyebrow .dot{ width:6px; height:6px; border-radius:50%; background:var(--c1); box-shadow:0 0 8px var(--c-glow); }
.info-modal h2.info-title{
  font-size: 26px; line-height:1.15; letter-spacing:-0.015em;
  margin: 0 0 6px;
  font-family: var(--f);
  font-weight: 700;
}
.info-modal .info-sub{ color: var(--t3); font-size: 13px; margin-bottom: 18px; }
.info-modal .info-body{
  max-height: 60vh; overflow-y: auto; padding-right: 10px;
  font-size: 14px; line-height: 1.65; color: var(--t2);
}
.info-modal .info-body h3{
  font-size: 14px; font-weight: 600; color: var(--t1);
  margin: 18px 0 8px; letter-spacing: -0.005em;
}
.info-modal .info-body h3:first-child{ margin-top: 0; }
.info-modal .info-body p{ margin-bottom: 10px; }
.info-modal .info-body ul{ margin: 6px 0 12px 18px; padding: 0; }
.info-modal .info-body li{ margin: 4px 0; color: var(--t2); }
.info-modal .info-body strong, .info-modal .info-body b{ color: var(--t1); font-weight: 600; }
.info-modal .info-body em{ font-style: normal; background: linear-gradient(120deg,var(--c1),var(--p1)); -webkit-background-clip:text; background-clip:text; color:transparent; }
.info-modal .info-body a{ color: var(--c1); text-decoration: none; border-bottom: 1px solid rgba(34,211,238,0.4); }
.info-modal .info-body a:hover{ color: #7ee9ff; border-bottom-color: var(--c1); }
.info-modal .info-body code, .info-modal .info-body .mono{
  font-family: var(--mono); font-size: 12.5px;
  background: var(--glass); padding: 2px 6px; border-radius: 5px; color: var(--t1);
}
.info-modal .info-body hr{ border:0; border-top:1px solid var(--border); margin: 18px 0; }
.info-modal .info-body .small{ font-size:12px; color: var(--t3); margin-top: 18px; }

/* Pretty scrollbar inside info body */
.info-modal .info-body::-webkit-scrollbar{ width: 8px; }
.info-modal .info-body::-webkit-scrollbar-track{ background: transparent; }
.info-modal .info-body::-webkit-scrollbar-thumb{ background: var(--glass-2); border-radius: 4px; }
.info-modal .info-body::-webkit-scrollbar-thumb:hover{ background: var(--p-soft); }

/* ══════════════════════════════════════════════════════════════════════
   Mobile-first overhaul: bottom nav, FAB, safe areas, taps, transitions
   Activated below 720px. Desktop layout untouched.
   ══════════════════════════════════════════════════════════════════════ */

/* iOS / Android viewport-height bug — JS sets --vh = 1% of innerHeight */
:root{ --vh: 1vh; }

/* Safe-area insets for notched devices */
body{
  padding-bottom: env(safe-area-inset-bottom, 0);
}

/* Prevent iOS auto-zoom on input focus (must be ≥16px) */
@media (max-width: 720px){
  input[type="text"],
  input[type="email"],
  input[type="password"],
  input[type="search"],
  input[type="number"],
  input[type="tel"],
  textarea,
  select{
    font-size: 16px !important;
  }
}

/* ─── Bottom nav (mobile) ─────────────────────────────────────────── */
.mob-nav{
  display: none;
  position: fixed;
  left: 0; right: 0; bottom: 0;
  z-index: 95;
  padding: 8px 12px calc(8px + env(safe-area-inset-bottom, 0));
  background: rgba(7, 5, 26, 0.82);
  backdrop-filter: blur(18px) saturate(160%);
  -webkit-backdrop-filter: blur(18px) saturate(160%);
  border-top: 1px solid var(--border);
  box-shadow: 0 -10px 30px -8px rgba(0,0,0,0.5);
}
.mob-nav-grid{
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2px;
  max-width: 520px;
  margin: 0 auto;
}
.mob-nav-btn{
  display: flex; flex-direction: column; align-items: center; gap: 3px;
  padding: 8px 2px;
  min-height: 52px;
  border-radius: 12px;
  background: transparent;
  color: var(--t3);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.01em;
  transition: color .2s ease, background .2s ease, transform .15s ease;
  -webkit-tap-highlight-color: transparent;
  position: relative;
  overflow: hidden;
  border: 0;
  cursor: pointer;
}
.mob-nav-btn span{
  font-size: 10px;
  white-space: nowrap;
}
.mob-nav-btn svg{
  width: 22px; height: 22px;
  stroke: currentColor; fill: none;
  stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round;
}
.mob-nav-btn.active{
  color: var(--c1);
  background: linear-gradient(180deg, rgba(34,211,238,0.10), rgba(168,85,247,0.06));
}
.mob-nav-btn.active svg{ filter: drop-shadow(0 0 6px var(--c-glow)); }
.mob-nav-btn:active{ transform: scale(0.94); }

/* ─── FAB (mobile) ───────────────────────────────────────────────── */
.mob-fab{
  display: none;
  position: fixed;
  right: 16px;
  bottom: calc(80px + env(safe-area-inset-bottom, 0));
  z-index: 96;
  width: 56px; height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--c1), var(--p1));
  color: #fff;
  align-items: center; justify-content: center;
  box-shadow: 0 12px 32px -6px rgba(168,85,247,0.55), 0 4px 12px -2px rgba(34,211,238,0.4);
  font-size: 22px;
  border: 0;
  cursor: pointer;
  transition: transform .2s cubic-bezier(.2,.8,.2,1), box-shadow .2s;
  -webkit-tap-highlight-color: transparent;
}
.mob-fab svg{ width: 24px; height: 24px; stroke: #fff; fill: none; stroke-width: 2.4; stroke-linecap: round; stroke-linejoin: round;}
.mob-fab:active{ transform: scale(0.92); }
.mob-fab.is-pulse::after{
  content: ''; position: absolute; inset: -4px; border-radius: 50%;
  border: 2px solid var(--c1); animation: fabPulse 1.6s ease-out infinite;
}
@keyframes fabPulse{
  0%{ opacity: 0.6; transform: scale(1); }
  100%{ opacity: 0; transform: scale(1.5); }
}

/* ─── Pull-to-refresh indicator ──────────────────────────────────── */
.mob-ptr{
  position: fixed; left: 50%; top: 60px;
  transform: translate(-50%, -60px);
  z-index: 90;
  display: flex; align-items: center; gap: 8px;
  padding: 8px 14px; border-radius: 999px;
  background: rgba(20, 12, 50, 0.92);
  border: 1px solid var(--border-2);
  font-size: 12px; font-weight: 600;
  color: var(--c1);
  pointer-events: none;
  transition: transform .25s cubic-bezier(.2,.8,.2,1), opacity .2s;
  opacity: 0;
}
.mob-ptr.show{ opacity: 1; transform: translate(-50%, 0); }
.mob-ptr.spin svg{ animation: spin 0.8s linear infinite; }
@keyframes spin{ to{ transform: rotate(360deg); } }
.mob-ptr svg{ width: 14px; height: 14px; stroke: currentColor; fill: none; stroke-width: 2.4; }

/* ─── Section transition (fade up on enter) ─────────────────────── */
@media (max-width: 720px){
  .section{
    opacity: 0;
    transform: translateY(12px);
    transition: opacity .55s cubic-bezier(.2,.8,.2,1), transform .55s cubic-bezier(.2,.8,.2,1);
  }
  .section.in-view, .section.always-show{
    opacity: 1;
    transform: translateY(0);
  }
}

/* ─── Show mobile-only chrome below 720px ────────────────────────── */
@media (max-width: 720px){
  .mob-nav{ display: block; }
  .mob-fab{ display: flex; }
  body{ padding-bottom: calc(76px + env(safe-area-inset-bottom, 0)); }
  /* Push footer above bottom nav */
  footer{ margin-bottom: 0; }
  /* Bigger tap targets */
  .btn, .btn-ghost, .btn-primary, button.cta, .nav-links a, .feat-card a, .auth-tabs button{
    min-height: 44px;
  }
  /* Hide redundant header start button on mobile (the FAB replaces it) */
  #btn-start{ display: none; }
  /* Hide nav-live counter on mobile to keep header compact */
  .nav-live{ display: none !important; }
  /* Compact header */
  .nav{ gap: 8px; padding: 10px 0; }
  .logo-text small{ display: none; }
}

/* ─── Sticky buy/sell bar inside arena (mobile) ──────────────────── */
.mob-sticky-trade{
  display: none;
}
@media (max-width: 720px){
  .mob-sticky-trade{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    position: sticky;
    bottom: calc(76px + env(safe-area-inset-bottom, 0));
    z-index: 8;
    margin: 12px -16px -16px;
    padding: 10px 14px calc(10px + env(safe-area-inset-bottom, 0));
    background: linear-gradient(180deg, rgba(7, 5, 26, 0.0), rgba(7, 5, 26, 0.96) 30%);
    backdrop-filter: blur(8px);
  }
  .mob-sticky-trade button{
    height: 48px;
    border-radius: 12px;
    font-weight: 700;
    letter-spacing: 0.04em;
    font-size: 14px;
    color: #fff;
    border: 0;
    -webkit-tap-highlight-color: transparent;
  }
  .mob-sticky-trade .buy{ background: linear-gradient(135deg, #00b386, #16d29a); }
  .mob-sticky-trade .sell{ background: linear-gradient(135deg, #ff3b6b, #ff7a8a); }
  .mob-sticky-trade button:active{ transform: scale(0.97); }
}

/* ─── Swipeable terminal tabs visual hint ────────────────────────── */
@media (max-width: 720px){
  .term-tabs{
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }
  .term-tabs::-webkit-scrollbar{ display: none; }
  .term-tabs button{
    scroll-snap-align: start;
    flex: 0 0 auto;
    min-height: 40px;
    padding-left: 14px; padding-right: 14px;
  }
}

/* ─── Hide nav links + start button on small viewports ──────────── */
@media (max-width: 900px){
  .nav-links{ display: none; }
}

/* ══════════════════════════════════════════════════════════════════════
   Mobile premium polish: ripple, overflow guard, chart bleed, transitions
   ══════════════════════════════════════════════════════════════════════ */

/* Material-style ripple (works on any element with .ripple) */
.ripple{ position: relative; overflow: hidden; -webkit-tap-highlight-color: transparent; }
.ripple .rip{
  position: absolute; border-radius: 50%; pointer-events: none;
  background: rgba(255,255,255,0.35);
  transform: scale(0); opacity: 0.55;
  animation: rip-anim .55s cubic-bezier(.2,.8,.2,1) forwards;
  mix-blend-mode: screen;
}
@keyframes rip-anim{
  to{ transform: scale(2.6); opacity: 0; }
}

/* Page-transition fade when navigating via bottom nav */
.mob-page-transition{
  opacity: 0;
  transition: opacity .22s ease-out;
}

/* iOS dynamic viewport height (where supported) */
@supports (height: 100dvh){
  .full-vh{ min-height: 100dvh; }
}

/* ─── Global horizontal-overflow guard on mobile ─── */
@media (max-width: 720px){
  html, body{
    max-width: 100vw;
    overflow-x: hidden;
  }
  .wrap{ max-width: 100vw; padding-left: 16px; padding-right: 16px; }
  .hero2-grid, .hero-grid, .feat-row, .game-row, .market-row, .tourn-grid, .port-top, .arena-body, .bal-grid, .foot-grid{
    grid-template-columns: 1fr !important;
    gap: 16px !important;
  }
  /* Hero stats: 3 tiny cards → keep 3 columns but compact */
  .hero-stats{
    grid-template-columns: repeat(3, 1fr) !important;
    gap: 10px !important;
    max-width: 100% !important;
  }
  .hero-stats > *{
    padding: 10px 8px !important;
    min-width: 0;
  }
  .hero-stats b{
    font-size: 14px !important;
    overflow-wrap: anywhere;
    word-break: break-word;
  }
  .hero-stats small{
    font-size: 9px !important;
    letter-spacing: 0.08em !important;
  }
  .hero2-card, .feat-card, .game-card, .arena-chart, .arena-list, .arena-ticket, .pnl-card, .ps-card{
    min-width: 0;
  }
  /* Long words wrap rather than overflow */
  h1, h2, h3, p, b, span, a{ overflow-wrap: anywhere; }
  /* Make hero CTAs stack tidily */
  .hero2-ctas, .hero-ctas{ flex-wrap: wrap; gap: 10px; }
  .hero2-ctas > *, .hero-ctas > *{ flex: 1 1 auto; }
  /* Keep buttons from forcing horizontal scroll */
  button, .btn{ max-width: 100%; }
}

/* ─── Chart full-bleed on mobile + good touch behavior ─── */
@media (max-width: 720px){
  .arena-chart{
    margin-left: -16px;
    margin-right: -16px;
    border-radius: 0;
    min-height: 320px;
  }
  .arena-chart, .arena-chart canvas, .tv-lightweight-charts, #pb-chart{
    touch-action: pan-y pinch-zoom !important;
  }
  /* Compact arena head so chart gets more vertical space */
  .arena-head{ padding: 10px 14px; }

  /* Hero2 marquee card adapts to narrow widths */
  .hero2-card{ padding: 16px !important; }
  .hero2-card .h-row{
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }
  .hero2-card .h-tf{
    overflow-x: auto;
    scrollbar-width: none;
    max-width: 100%;
    flex-wrap: nowrap;
  }
  .hero2-card .h-tf::-webkit-scrollbar{ display: none; }
  .hero2-card .h-tf button{ flex: 0 0 auto; }
  .hero2-card .h-price .p{ font-size: 24px; }
  .hero2-card .h-foot{
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 8px !important;
  }
  .hero2-card .h-foot > div{ padding: 8px 10px; }
  .hero2-card .h-chart{ height: 160px; }
}

/* ─── Compact mobile balance pill in header ─── */
.mob-balance-pill{ display: none; }
@media (max-width: 720px){
  .mob-balance-pill{
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 4px 9px;
    border-radius: 999px;
    background: linear-gradient(135deg, rgba(34,211,238,0.15), rgba(168,85,247,0.15));
    border: 1px solid var(--border-2);
    font-family: var(--mono);
    font-size: 10.5px;
    line-height: 1;
    font-weight: 700;
    color: var(--t1);
    letter-spacing: 0.02em;
    white-space: nowrap;
    margin-left: 4px;
    max-width: 50vw;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .mob-balance-pill .lbl{
    color: var(--c1);
    font-weight: 700;
    font-size: 8.5px;
    letter-spacing: 0.12em;
  }
}

/* ─── Smoother momentum scroll on iOS ─── */
@media (max-width: 720px){
  body{ -webkit-overflow-scrolling: touch; }
}

/* ─── Reduce ambient orb intensity on mobile (perf) ─── */
@media (max-width: 720px){
  .ambient .orb{ filter: blur(60px); opacity: 0.3; }
}
</style>
</head>
<body>

<div class="ambient" aria-hidden="true">
  <div class="orb o1"></div>
  <div class="orb o2"></div>
  <div class="orb o3"></div>
</div>
<canvas id="bg-particles" aria-hidden="true"></canvas>

<!-- ══════════ Simulation disclaimer (sticky, dismissible per session) ══════════ -->
<div id="sim-disclaimer" class="sim-disclaimer" role="status" aria-live="polite">
  <span class="sd-pill">SIM</span>
  <span class="sd-text"><b>This is a simulation game</b> · No real money involved · Practice trading on Indian stocks (NSE) with virtual ₹1,00,000 · For learning only.</span>
  <button type="button" class="sd-close" aria-label="Dismiss disclaimer" onclick="dismissSimDisclaimer()">×</button>
</div>

<!-- ══════════ Header ══════════ -->
<div class="nav-outer">
  <div class="wrap">
    <nav class="nav" aria-label="Primary">
      <a href="#" class="logo" aria-label="PitBull Markets home">
        <span class="logo-mark" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 17 9 11 13 15 21 7"/><polyline points="14 7 21 7 21 14"/></svg>
        </span>
        <span class="logo-text"><b>PitBull Markets</b><small>Trade · Compete · Win</small></span>
      </a>
      <div class="nav-links" role="menubar">
        <a href="#arena" role="menuitem">Trade</a>
        <a href="#portfolio" role="menuitem">Portfolio</a>
        <a href="#tournaments" role="menuitem">Tournaments</a>
        <a href="#leaderboard" role="menuitem">Leaderboard</a>
        <a href="#how" role="menuitem">How it works</a>
      </div>
      <div class="nav-spacer"></div>
      <span class="mob-balance-pill" id="mob-balance-pill" aria-live="polite" title="Virtual balance">
        <span class="lbl">BAL</span>
        <span id="mob-balance-amount">₹1,00,000</span>
      </span>
      <div class="nav-live" aria-live="polite">
        <span class="dot"></span>
        <div><b id="live-players">—</b> <small>players</small></div>
        <span class="sep"></span>
        <div><b id="live-tourns">—</b> <small>live</small></div>
      </div>
      <button class="btn btn-ghost" id="btn-signin" type="button">Sign in</button>
      <button class="btn btn-primary" id="btn-start" type="button">
        Start playing
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
      </button>
      <button class="mobile-menu-btn" aria-label="Menu">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      </button>
    </nav>
  </div>
</div>

<!-- ══════════ Ticker Strip ══════════ -->
<div class="ticker" aria-hidden="true">
  <div class="ticker-track" id="ticker-track"></div>
</div>

<!-- ══════════ Hero v2 (premium futuristic landing) ══════════ -->
<section class="hero2" id="hero2">
  <div class="wrap">
    <div class="hero2-grid">
      <div class="hero2-left reveal">
        <div class="eyebrow"><span class="spark"></span>Experience trading like never before</div>
        <h1 class="hero2-title">
          <span class="l1">Trading,</span>
          <span class="l2 pb-grad-text">Reimagined</span>
        </h1>
        <div class="hero2-sub">
          <span class="w">Play.</span>
          <span class="w grad">Learn.</span>
          <span class="w">Grow.</span>
        </div>
        <p class="hero2-lead">The most advanced stock-market simulator in India. Real markets. Real-time data. Real experience — with zero real-money risk.</p>
        <div class="hero2-cta">
          <button class="btn btn-primary pb-magnetic pb-ripple pb-pulse" id="btn-hero2-start" type="button">
            Start Trading Now
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
          <button class="play-trigger pb-magnetic" id="btn-hero2-how" type="button">
            <span class="play-ico">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#fff" stroke="none"><polygon points="6 4 20 12 6 20 6 4"/></svg>
            </span>
            See How It Works
          </button>
        </div>
        <div class="hero-stats">
          <div class="hero-stat"><b id="s-players">—</b><small>Players signed up</small></div>
          <div class="hero-stat"><b id="s-tourns">—</b><small>Live tournaments</small></div>
          <div class="hero-stat"><b data-count-to="100000" data-count-prefix="₹" data-count-format="inr">₹1,00,000</b><small>Virtual balance</small></div>
        </div>
      </div>
      <div class="hero2-right reveal reveal-d2">
        <div class="hero2-card pb-tilt" id="hero2-card">
          <div class="pb-tilt-inner">
            <div class="h-row">
              <div class="h-sym">
                <span class="ico">RE</span>
                <div><b>RELIANCE</b><br><small>Reliance Industries Ltd.</small></div>
              </div>
              <div class="h-tf" role="tablist" aria-label="Hero timeframes">
                <button class="is-on" data-h-tf="5s">5s</button>
                <button data-h-tf="1m">1m</button>
                <button data-h-tf="5m">5m</button>
                <button data-h-tf="1h">1h</button>
                <button data-h-tf="1D">1D</button>
                <button data-h-tf="1M">1M</button>
                <button data-h-tf="10M">10M</button>
              </div>
            </div>
            <div class="h-price">
              <span class="p" id="h-price">₹2,856.75</span>
              <span class="ch" id="h-change">+42.30 (1.50%)</span>
            </div>
            <div class="h-chart">
              <canvas id="hero2-chart" aria-hidden="true"></canvas>
            </div>
            <div class="h-foot">
              <div><small>Open</small><b>₹2,823.15</b></div>
              <div><small>High</small><b>₹2,872.40</b></div>
              <div><small>Low</small><b>₹2,812.30</b></div>
              <div><small>Volume</small><b>12.45M</b></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="feat-row">
      <div class="feat-card reveal reveal-d1">
        <div class="ico"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
        <h4>Real-time Markets</h4>
        <p>Live NSE-anchored data with low-latency simulation across 41 instruments.</p>
        <a href="#arena">Explore Markets →</a>
      </div>
      <div class="feat-card cyan reveal reveal-d2">
        <div class="ico"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="20" x2="6" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="18" y1="20" x2="18" y2="14"/></svg></div>
        <h4>Advanced Charts</h4>
        <p>Pro candlestick charts with 7 timeframes from 5-second scalping to 10-month swings.</p>
        <a href="#arena">View Charts →</a>
      </div>
      <div class="feat-card green reveal reveal-d3">
        <div class="ico"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M16 10h2"/><path d="M3 10h18"/></svg></div>
        <h4>Virtual Trading</h4>
        <p>Trade with ₹1,00,000 virtual balance. No real money. No risk. All learning.</p>
        <a href="#arena">Start Trading →</a>
      </div>
      <div class="feat-card amber reveal reveal-d3">
        <div class="ico"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9 12 2"/></svg></div>
        <h4>Learn &amp; Earn</h4>
        <p>Complete daily challenges, earn XP, unlock achievements, and climb the leaderboard.</p>
        <a href="#portfolio">View Challenges →</a>
      </div>
    </div>
  </div>
</section>

<!-- ══════════ Hero (legacy fallback) ══════════ -->
<section class="hero">
  <div class="wrap">
    <div class="hero-grid">
      <div class="hero-left">
        <div class="hero-badges">
          <span class="hero-badge"><span class="dot"></span>Demo Money · Real Skills</span>
          <span class="hero-badge purple"><span class="dot"></span>No Deposit Needed</span>
        </div>
        <h1>
          <span class="line">Trade the markets.</span>
          <span class="line"><em>Zero risk.</em> All glory.</span>
        </h1>
        <p>Start with ₹1,00,000 in virtual capital, enter 5-minute tournaments, and compete against other Indian traders. Sharpen real trading instincts on Reliance, TCS, INFY, HDFC Bank — without risking a single rupee.</p>
        <div class="hero-cta">
          <button class="btn btn-primary" id="btn-hero-start" type="button">
            Play Solo Now
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
          <button class="btn btn-ghost" id="btn-hero-how" type="button">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            How it works
          </button>
        </div>
        <div class="hero-stats">
          <div class="hero-stat"><b id="s-players">—</b><small>Players signed up</small></div>
          <div class="hero-stat"><b id="s-tourns">—</b><small>Live tournaments</small></div>
          <div class="hero-stat"><b>₹1,00,000</b><small>Virtual balance</small></div>
        </div>
      </div>
      <div class="hero-preview" aria-hidden="true">
        <div class="hp-head">
          <div class="hp-sym">
            <span class="icon">RE</span>
            <div><b>RELIANCE</b><br><small>Reliance Industries · NSE</small></div>
          </div>
          <div class="hp-price">
            <b id="hp-price">₹2,948.10</b><br>
            <span id="hp-change">▲ +0.83% (+₹24.30)</span>
          </div>
        </div>
        <div id="hero-chart"></div>
        <div class="hp-foot">
          <button class="b-buy" type="button" onclick="openArena('buy')">▲ BUY</button>
          <button class="b-hold" type="button">HOLD</button>
          <button class="b-sell" type="button" onclick="openArena('sell')">▼ SELL</button>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ══════════ Features ══════════ -->
<section class="section">
  <div class="wrap">
    <div style="margin-bottom:36px;max-width:640px;">
      <span class="section-eyebrow">Why PitBull</span>
      <h2 class="section-title">The fastest way to <span class="grad">learn markets</span> without losing money.</h2>
      <p class="section-lead">We strip trading down to its purest form — charts, instincts, timing — and turn it into a game with friends, tournaments, and leaderboards.</p>
    </div>
    <div class="feat-grid">
      <div class="feat-card">
        <div class="feat-icon buy">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 17 9 11 13 15 21 7"/><polyline points="14 7 21 7 21 14"/></svg>
        </div>
        <h3>5-minute tournaments</h3>
        <p>Quick rounds, big payoffs. Compete head-to-head on the same chart replay and see who ends the round with the most profit.</p>
      </div>
      <div class="feat-card">
        <div class="feat-icon cyan">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="7" r="4"/><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/><circle cx="17" cy="7" r="3"/><path d="M23 21v-1a3 3 0 0 0-2-2.8"/></svg>
        </div>
        <h3>Play with friends</h3>
        <p>Create private tournaments, invite your crew, and trash-talk in real-time. Bragging rights or token prize pools — you decide.</p>
      </div>
      <div class="feat-card">
        <div class="feat-icon purple">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4.5L6 21l1.5-7.5L2 9h7z"/></svg>
        </div>
        <h3>Real skill rankings</h3>
        <p>Every trade feeds your global ELO. Climb from rookie to legend, earn badges, and prove your edge on the seasonal leaderboard.</p>
      </div>
    </div>
  </div>
</section>

<!-- ══════════ Arena ══════════ -->
<section class="section" id="arena">
  <div class="wrap">
    <div style="margin-bottom:20px;">
      <span class="section-eyebrow">Live Arena · Demo</span>
      <h2 class="section-title">Your first trade is <span class="grad">one click away</span>.</h2>
      <p class="section-lead">No sign-up needed to try the arena. Tap BUY or SELL to open a paper position — your P&L updates live as the market moves.</p>
    </div>

    <div class="arena" id="arena-box" aria-label="Trading arena">
      <div class="arena-head">
        <div class="arena-meta">
          <div class="round-timer" title="Round time remaining">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <b id="round-timer">04:58</b><small>Round</small>
          </div>
          <div class="balance-pill">
            <span class="lbl">Balance</span><b id="balance">₹1,00,000.00</b>
          </div>
          <div class="balance-pill" id="pnl-pill">
            <span class="lbl">P&amp;L</span><b id="pnl">+₹0.00</b>
          </div>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <button class="btn btn-danger" id="btn-close-all" type="button" title="Close every open position at mark price" disabled>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            Close all <span id="close-all-count" style="opacity:.6;font-family:var(--mono);"></span>
          </button>
          <button class="btn btn-ghost" id="btn-reset" type="button" title="Reset the demo round">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
            Reset
          </button>
          <button class="btn btn-outline" id="btn-arena-how" type="button">How to play</button>
        </div>
      </div>

      <div class="arena-body">
        <!-- Instrument list -->
        <aside class="arena-list" aria-label="Instruments">
          <div class="list-tabs" role="tablist">
            <button class="list-tab" data-cat="all" role="tab">All</button>
            <button class="list-tab" data-cat="indices" role="tab">Indices</button>
            <button class="list-tab active" data-cat="in" role="tab">India</button>
            <button class="list-tab" data-cat="stocks" role="tab">US</button>
            <button class="list-tab" data-cat="crypto" role="tab">Crypto</button>
            <button class="list-tab" data-cat="fx" role="tab">FX</button>
          </div>
          <div class="list-search">
            <input type="search" id="list-search" placeholder="Search symbol…" aria-label="Search instruments">
          </div>
          <div class="list-items" id="list-items" role="list"></div>
        </aside>

        <!-- Chart -->
        <div class="arena-chart">
          <div class="chart-head">
            <div class="sym">
              <span class="sym-icon" id="chart-icon">BT</span>
              <div>
                <b id="chart-name">BTCUSD</b>
                <small id="chart-desc">Bitcoin / US Dollar · Crypto</small>
              </div>
            </div>
            <div class="chart-price">
              <b id="chart-price">$64,812.40</b>
              <span class="up" id="chart-change">▲ +1.87%</span>
            </div>
          </div>
          <div class="chart-tf" role="tablist" aria-label="Timeframe">
            <button class="active" data-tf-key="5s"  role="tab" title="5-second bars">5s</button>
            <button                data-tf-key="1m"  role="tab" title="1-minute bars">1m</button>
            <button                data-tf-key="5m"  role="tab" title="5-minute bars">5m</button>
            <button                data-tf-key="1h"  role="tab" title="1-hour bars">1h</button>
            <button                data-tf-key="1d"  role="tab" title="Daily bars">1d</button>
            <button                data-tf-key="1M"  role="tab" title="Monthly bars (last ~2.5 years)">1M</button>
            <button                data-tf-key="10M" role="tab" title="Monthly bars (last ~10 years)">10M</button>
          </div>
          <div id="arena-chart"></div>

          <!-- Terminal panel: Positions / Depth / Orders / Holdings / Balance -->
          <div class="term-panel" role="region" aria-label="Terminal">
            <div class="term-tabs" role="tablist">
              <button class="term-tab active" data-tab="positions" role="tab">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
                Positions <span class="term-badge" id="pos-count">0</span>
              </button>
              <button class="term-tab" data-tab="depth" role="tab">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="21" y1="10" x2="3" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="21" y1="18" x2="3" y2="18"/></svg>
                Depth
              </button>
              <button class="term-tab" data-tab="orders" role="tab">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="13" y2="17"/></svg>
                Orders <span class="term-badge" id="ord-count">0</span>
              </button>
              <button class="term-tab" data-tab="holdings" role="tab">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                Holdings
              </button>
              <button class="term-tab" data-tab="balance" role="tab">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
                Balance
              </button>
            </div>

            <!-- Positions tab -->
            <div class="term-pane active" data-pane="positions">
              <table class="pos-table">
                <thead><tr><th>Symbol</th><th>Side</th><th>Size</th><th>Entry</th><th>Mark</th><th>P&amp;L</th><th></th></tr></thead>
                <tbody id="pos-body">
                  <tr><td class="empty" colspan="7">No open positions. Hit <span class="kb">B</span> to BUY or <span class="kb">S</span> to SELL.</td></tr>
                </tbody>
              </table>
            </div>

            <!-- Market depth tab (DOM / order book ladder) -->
            <div class="term-pane" data-pane="depth">
              <div class="depth-head">
                <span>Market depth · <b id="depth-sym">BTCUSD</b></span>
                <span class="depth-spread">Spread <b id="depth-spread">—</b></span>
              </div>
              <div class="depth-grid">
                <div class="depth-col">
                  <div class="depth-col-head"><span>Bid qty</span><span>Bid</span></div>
                  <div id="depth-bids"></div>
                </div>
                <div class="depth-col">
                  <div class="depth-col-head"><span>Ask</span><span>Ask qty</span></div>
                  <div id="depth-asks"></div>
                </div>
              </div>
              <div class="depth-footer">
                <span>Total bid <b id="depth-bid-total">—</b></span>
                <span>Total ask <b id="depth-ask-total">—</b></span>
              </div>
            </div>

            <!-- Orders tab: pending limit orders + closed trade history -->
            <div class="term-pane" data-pane="orders">
              <div id="pending-block" style="display:none;">
                <div class="pending-head"><span>Pending limit orders <span class="badge" id="pending-count">0</span></span><span style="color:#ffd55a;font-size:10px;">Auto-fill on touch</span></div>
                <div id="pending-list"></div>
              </div>
              <table class="pos-table">
                <thead><tr><th>Time</th><th>Symbol</th><th>Side</th><th>Size</th><th>Entry</th><th>Exit</th><th>P&amp;L</th></tr></thead>
                <tbody id="ord-body">
                  <tr><td class="empty" colspan="7">No filled orders yet. Close a position to see it here.</td></tr>
                </tbody>
              </table>
            </div>

            <!-- Holdings tab (aggregated by symbol) -->
            <div class="term-pane" data-pane="holdings">
              <table class="pos-table">
                <thead><tr><th>Symbol</th><th>Net qty</th><th>Avg. cost</th><th>Mark</th><th>Market value</th><th>Unrealised</th></tr></thead>
                <tbody id="hold-body">
                  <tr><td class="empty" colspan="6">Holdings appear once you have open positions.</td></tr>
                </tbody>
              </table>
            </div>

            <!-- Balance tab (account overview) -->
            <div class="term-pane" data-pane="balance">
              <div class="bal-grid">
                <div class="bal-card"><span class="bal-lbl">Available balance</span><b id="bal-avail">₹1,00,000.00</b></div>
                <div class="bal-card"><span class="bal-lbl">Equity</span><b id="bal-equity">₹1,00,000.00</b></div>
                <div class="bal-card"><span class="bal-lbl">Used margin</span><b id="bal-used">$0.00</b></div>
                <div class="bal-card"><span class="bal-lbl">Unrealised P&amp;L</span><b id="bal-upnl">$0.00</b></div>
                <div class="bal-card"><span class="bal-lbl">Realised P&amp;L</span><b id="bal-rpnl">$0.00</b></div>
                <div class="bal-card"><span class="bal-lbl">Open positions</span><b id="bal-open">0</b></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Order ticket -->
        <aside class="arena-ticket" aria-label="Order ticket">
          <div class="ticket-toggle" role="tablist">
            <button class="buy active" data-side="buy" role="tab">▲ BUY</button>
            <button class="sell" data-side="sell" role="tab">▼ SELL</button>
          </div>
          <div class="ticket-otype" role="tablist" aria-label="Order type">
            <button class="otype-btn active" data-otype="market" type="button" role="tab" title="Fill instantly at current mark">Market</button>
            <button class="otype-btn"        data-otype="limit"  type="button" role="tab" title="Fill only when price hits your limit">Limit</button>
          </div>
          <div class="ticket-field" id="limit-field" style="display:none;">
            <label>Limit price</label>
            <div class="ticket-input">
              <input id="limit-input" type="number" value="0" min="0" step="0.01" placeholder="0.00">
              <span style="color:var(--t3);padding:0 10px;font-family:var(--mono);" id="limit-curr">₹</span>
            </div>
            <small class="ticket-hint" id="limit-hint">Order parks until price reaches this level.</small>
          </div>
          <div class="ticket-field">
            <label>Size (₹)</label>
            <div class="ticket-input">
              <button class="step" type="button" onclick="adjSize(-100)" aria-label="Decrease">−</button>
              <input id="size-input" type="number" value="1000" min="10" step="100">
              <button class="step" type="button" onclick="adjSize(100)" aria-label="Increase">+</button>
            </div>
            <div class="ticket-quick">
              <button type="button" onclick="setSize(1000)">₹1,000</button>
              <button type="button" onclick="setSize(5000)">₹5,000</button>
              <button type="button" onclick="setSize(25000)">₹25,000</button>
              <button type="button" onclick="setSize(50000)">₹50,000</button>
            </div>
          </div>
          <div class="ticket-field">
            <label>Leverage</label>
            <div class="ticket-input">
              <input id="lev-input" type="number" value="5" min="1" max="25" step="1">
              <span style="color:var(--t3);padding-right:10px;font-family:var(--mono);">×</span>
            </div>
          </div>
          <div class="ticket-summary">
            <div class="row"><span class="k">Est. qty</span><span class="v" id="sum-qty">0.0771 BTC</span></div>
            <div class="row"><span class="k">Est. fee</span><span class="v" id="sum-fee">₹0.50</span></div>
            <div class="row"><span class="k">Liq. price</span><span class="v" id="sum-liq">₹52,649.00</span></div>
          </div>
          <button class="ticket-submit" id="ticket-submit" type="button">Open long · BUY</button>
          <p style="font-size:11px;color:var(--t3);text-align:center;">Paper trading. No real money at risk. <a href="#" style="color:var(--c1);">Learn more →</a></p>
        </aside>
      </div>

      <!-- Sticky buy/sell bar (mobile only — sits above bottom nav) -->
      <div class="mob-sticky-trade" aria-hidden="false">
        <button class="buy ripple" id="mob-quick-buy" type="button">BUY</button>
        <button class="sell ripple" id="mob-quick-sell" type="button">SELL</button>
      </div>
    </div>
  </div>
</section>

<!-- ══════════ Portfolio dashboard ══════════ -->
<section class="section" id="portfolio">
  <div class="wrap">
    <div style="margin-bottom:24px;">
      <span class="section-eyebrow">My Portfolio</span>
      <h2 class="section-title">Track your <span class="grad">edge</span>, round after round.</h2>
      <p class="section-lead">Live snapshot of your equity, today's P&amp;L, win-rate, and trade history. Updates every tick as the market moves.</p>
    </div>

    <div class="port-top">
      <div class="port-equity-card">
        <div class="pec-head">
          <div>
            <span class="pec-lbl">Total equity</span>
            <b id="pec-equity">₹1,00,000.00</b>
          </div>
          <div class="pec-pill" id="pec-pnl-pill">
            <span class="pec-lbl">Today's P&amp;L</span>
            <b id="pec-pnl">+₹0.00</b>
            <span id="pec-pnl-pct" class="pec-pct">+0.00%</span>
          </div>
        </div>
        <canvas id="equity-spark" height="120"></canvas>
        <div class="pec-foot">
          <span>Tracking <b id="pec-samples">0</b> ticks</span>
          <span>Anchored to NSE close · <b id="pec-anchor">today</b></span>
        </div>
      </div>

      <div class="port-stats">
        <div class="ps-card"><span class="ps-lbl">Trades</span><b id="ps-trades">0</b></div>
        <div class="ps-card"><span class="ps-lbl">Win rate</span><b id="ps-winrate">—</b></div>
        <div class="ps-card up"><span class="ps-lbl">Wins</span><b id="ps-wins">0</b></div>
        <div class="ps-card down"><span class="ps-lbl">Losses</span><b id="ps-losses">0</b></div>
        <div class="ps-card"><span class="ps-lbl">Best trade</span><b id="ps-best">—</b></div>
        <div class="ps-card"><span class="ps-lbl">Worst trade</span><b id="ps-worst">—</b></div>
      </div>
    </div>

    <!-- Gamification row: XP + daily challenge + achievements -->
    <div class="game-row" id="challenges">
      <div class="game-card xp-card">
        <div class="gc-head">
          <span class="gc-eyebrow">Level</span>
          <b id="xp-level">1</b>
          <span class="xp-title" id="xp-title">Rookie Trader</span>
        </div>
        <div class="xp-bar"><div class="xp-fill" id="xp-fill" style="width:0%;"></div></div>
        <div class="xp-meta"><span id="xp-cur">0</span> / <span id="xp-max">100</span> XP · <span id="xp-toast-hint">earn XP by trading</span></div>
      </div>

      <div class="game-card challenge-card">
        <div class="gc-head"><span class="gc-eyebrow">Daily challenge</span><span class="dc-reward" id="dc-reward">+50 XP</span></div>
        <div class="dc-text" id="dc-text">Loading…</div>
        <div class="dc-progress"><div class="dc-fill" id="dc-fill" style="width:0%;"></div></div>
        <div class="dc-meta" id="dc-meta">—</div>
      </div>

      <div class="game-card achievements-card">
        <div class="gc-head"><span class="gc-eyebrow">Achievements</span><span id="ach-count" class="dc-reward">0/8</span></div>
        <div class="ach-grid" id="ach-grid"></div>
      </div>
    </div>

    <!-- News feed + AI traders + market mode -->
    <div class="market-row">
      <div class="game-card news-card">
        <div class="gc-head"><span class="gc-eyebrow">📰 Market news (sim)</span><span id="news-count" class="dc-reward">0 events</span></div>
        <div class="news-list" id="news-list"><div class="news-empty">News events will appear here as the simulated market moves.</div></div>
      </div>
      <div class="game-card aibots-card">
        <div class="gc-head"><span class="gc-eyebrow">🤖 AI traders</span><span class="dc-reward">live ranking</span></div>
        <div class="bots-list" id="bots-list"></div>
      </div>
      <div class="game-card crash-card">
        <div class="gc-head"><span class="gc-eyebrow">⚡ Market mode</span><span id="mode-pill" class="dc-reward">Normal</span></div>
        <div class="mode-text">Trigger a temporary high-volatility shock to test your nerves. Lasts ~30 seconds; all symbols swing wildly.</div>
        <button class="btn btn-danger" type="button" id="btn-crash" style="margin-top:12px;">⚡ Trigger crash event</button>
        <small style="color:var(--t3);font-size:11px;margin-top:6px;display:block;">Or wait — crashes also fire randomly during news events.</small>
      </div>
    </div>

    <!-- Trade history (full) -->
    <div class="port-history">
      <div class="ph-head"><h3>Trade history</h3><span id="ph-count" class="dc-reward">0 trades</span></div>
      <div class="ph-table-wrap">
        <table class="pos-table">
          <thead><tr><th>Time</th><th>Symbol</th><th>Side</th><th>Size</th><th>Entry</th><th>Exit</th><th>P&amp;L</th></tr></thead>
          <tbody id="ph-body"><tr><td class="empty" colspan="7">Your closed trades will appear here.</td></tr></tbody>
        </table>
      </div>
    </div>
  </div>
</section>

<!-- ══════════ Tournaments ══════════ -->
<section class="section" id="tournaments">
  <div class="wrap">
    <div style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:16px;">
      <div>
        <span class="section-eyebrow">Tournaments</span>
        <h2 class="section-title">Pick a <span class="grad">battlefield</span>. Grab your prize.</h2>
        <p class="section-lead">Jump into a public room, or spin up a private match with friends. Winners split the token pool — losers get lessons.</p>
      </div>
      <button class="btn btn-outline" type="button">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        Create tournament
      </button>
    </div>
    <div class="tourn-grid" id="tourn-grid"></div>
  </div>
</section>

<!-- ══════════ Leaderboard ══════════ -->
<section class="section" id="leaderboard">
  <div class="wrap">
    <div style="max-width:640px;margin-bottom:10px;">
      <span class="section-eyebrow">Season 04 Leaderboard</span>
      <h2 class="section-title">The <span class="grad">sharpest traders</span> on the planet.</h2>
      <p class="section-lead">Rankings update in real-time. Top 100 earn token rewards, badges, and entry to the end-of-season invitational.</p>
    </div>
    <div class="lb-wrap">
      <table class="lb-table">
        <thead>
          <tr>
            <th style="width:60px;">#</th><th>Trader</th><th>P&amp;L</th><th>Win rate</th><th>Trades</th><th>Streak</th>
          </tr>
        </thead>
        <tbody id="lb-body"></tbody>
      </table>
    </div>
  </div>
</section>

<!-- ══════════ How it works ══════════ -->
<section class="section" id="how">
  <div class="wrap">
    <div style="max-width:640px;margin-bottom:28px;">
      <span class="section-eyebrow">How it works</span>
      <h2 class="section-title">Six steps from <span class="grad">rookie to pro</span>.</h2>
      <p class="section-lead">No paperwork. No deposits. No lectures. Just a chart, a timer, and a global scoreboard.</p>
    </div>
    <div class="feat-grid" style="grid-template-columns:repeat(3,1fr);">
      <div class="feat-card"><div class="feat-icon cyan"><b style="font-size:14px;">01</b></div><h3>Sign up free</h3><p>Email, Google, or Discord. We'll spot you ₹1,00,000 in virtual capital and 100 PitBull tokens to start.</p></div>
      <div class="feat-card"><div class="feat-icon purple"><b style="font-size:14px;">02</b></div><h3>Pick your arena</h3><p>Solo practice, a public tournament, or a private game with friends. All use the same fair-replay engine.</p></div>
      <div class="feat-card"><div class="feat-icon buy"><b style="font-size:14px;">03</b></div><h3>Trade the chart</h3><p>Buy, sell, or sit out. Rounds are 5 minutes — small enough to fit in a coffee break, fast enough to feel live.</p></div>
      <div class="feat-card"><div class="feat-icon cyan"><b style="font-size:14px;">04</b></div><h3>Watch the timer</h3><p>Positions auto-close at round end. Biggest net P&L wins. Ties split pots. No nonsense.</p></div>
      <div class="feat-card"><div class="feat-icon purple"><b style="font-size:14px;">05</b></div><h3>Climb the board</h3><p>Every trade feeds your ELO. Weekly, monthly, and seasonal leaderboards pay out token rewards and badges.</p></div>
      <div class="feat-card"><div class="feat-icon buy"><b style="font-size:14px;">06</b></div><h3>Cash out the glory</h3><p>Tokens unlock private tournaments, premium charts, and entry to the invitational cup. Bragging rights are free.</p></div>
    </div>
  </div>
</section>

<!-- ══════════ Footer ══════════ -->
<footer>
  <div class="wrap">
    <div class="foot-grid">
      <div class="foot-brand">
        <a href="#" class="logo">
          <span class="logo-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 17 9 11 13 15 21 7"/><polyline points="14 7 21 7 21 14"/></svg>
          </span>
          <span class="logo-text"><b>PitBull Markets</b><small>Trade · Compete · Win</small></span>
        </a>
        <p>A free, gamified trading simulator. No real money, no risk — just pure trading skill.</p>
      </div>
      <div class="foot-col">
        <h5>Play</h5>
        <a href="#arena">Live Arena</a><a href="#tournaments">Tournaments</a><a href="#leaderboard">Leaderboard</a><a href="#how">How it works</a>
      </div>
      <div class="foot-col">
        <h5>Company</h5>
        <a href="#" data-info="about">About</a><a href="#" data-info="press">Press kit</a><a href="#" data-info="careers">Careers</a><a href="#" data-info="contact">Contact</a>
      </div>
      <div class="foot-col">
        <h5>Legal</h5>
        <a href="#" data-info="terms">Terms</a><a href="#" data-info="privacy">Privacy</a><a href="#" data-info="fairplay">Fair play</a><a href="#" data-info="responsible">Responsible gaming</a>
      </div>
    </div>
    <div class="foot-bot">
      <div>© <span id="year"></span> PitBull Markets · Demo-only paper trading. Not investment advice. <a href="#" data-info="legal" style="color:var(--t3);text-decoration:underline;">Disclaimer</a>.</div>
      <div style="display:flex;gap:10px;">
        <span class="kb">B</span> Buy · <span class="kb">S</span> Sell · <span class="kb">R</span> Reset · <span class="kb">?</span> How to play
      </div>
    </div>
  </div>
</footer>

<!-- ══════════ Modals ══════════ -->
<!-- Welcome -->
<div class="modal-overlay" id="welcome-modal" role="dialog" aria-modal="true" aria-labelledby="welcome-title">
  <div class="modal" style="max-width:480px;">
    <button class="modal-close" data-close="welcome-modal" aria-label="Close">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>
    <div class="welcome-stats">
      <div class="w-s"><span class="dot" style="background:var(--g1);box-shadow:0 0 8px var(--g-glow);"></span><b id="w-players">—</b><small>Playing</small></div>
      <div class="w-s"><span class="dot" style="background:var(--c1);box-shadow:0 0 8px var(--c-glow);"></span><b id="w-tourns">—</b><small>Live rooms</small></div>
    </div>
    <div style="font-size:44px;text-align:center;margin-bottom:10px;" aria-hidden="true">🐶</div>
    <h2 id="welcome-title" style="text-align:center;">Welcome to <em>PitBull</em></h2>
    <p class="lead" style="text-align:center;">Can you beat the market? One chart, five minutes, your call.</p>
    <div class="welcome-cards">
      <button class="welcome-card" onclick="closeModal('welcome-modal');document.getElementById('tournaments').scrollIntoView({behavior:'smooth'});">
        <div class="icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><line x1="6" y1="12" x2="10" y2="12"/><line x1="14" y1="10" x2="14" y2="14"/><line x1="18" y1="10" x2="18" y2="14"/></svg></div>
        Join a Tournament
      </button>
      <button class="welcome-card" onclick="closeModal('welcome-modal');openModal('auth-modal');">
        <div class="icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="7" r="4"/><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/><circle cx="17" cy="7" r="3"/><path d="M23 21v-1a3 3 0 0 0-2-2.8"/></svg></div>
        Invite Friends
      </button>
      <button class="welcome-card" onclick="closeModal('welcome-modal');document.getElementById('arena').scrollIntoView({behavior:'smooth'});">
        <div class="icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
        Play Solo
      </button>
    </div>
    <div class="welcome-feats">
      <span>🪙 <b>₹1,00,000</b> virtual balance</span><span class="sep">·</span>
      <span>⚡ <b>5-min</b> tournaments</span><span class="sep">·</span>
      <span>🏆 <b>Real</b> rankings</span>
    </div>
    <button class="modal-cta" onclick="closeModal('welcome-modal');document.getElementById('arena').scrollIntoView({behavior:'smooth'});">Start Exploring</button>
    <button class="modal-skip" data-close="welcome-modal" type="button">Don't show this again</button>
  </div>
</div>

<!-- How to play -->
<div class="modal-overlay" id="htp-modal" role="dialog" aria-modal="true" aria-labelledby="htp-title">
  <div class="modal" style="max-width:480px;">
    <button class="modal-close" data-close="htp-modal" aria-label="Close">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>
    <div class="modal-eyebrow">How to play</div>
    <div id="htp-slides">
      <div class="htp-slide active" data-slide="0">
        <h2 id="htp-title">Grow Your <em>Virtual Balance</em></h2>
        <p class="lead">Start with <b>₹1,00,000</b> in virtual capital and make smart <b>BUY</b> and <b>SELL</b> calls. Finish the round with the biggest profit to climb the board.</p>
        <div class="htp-media"><svg viewBox="0 0 300 140" fill="none"><polyline points="10,100 40,85 60,90 90,60 120,70 160,40 200,55 240,25 290,30" stroke="url(#g1)" stroke-width="3" fill="none"/><defs><linearGradient id="g1"><stop offset="0" stop-color="#22d3ee"/><stop offset="1" stop-color="#a855f7"/></linearGradient></defs></svg></div>
      </div>
      <div class="htp-slide" data-slide="1">
        <h2>Every Player <em>Starts With</em></h2>
        <p class="lead"><b>₹1,00,000</b> virtual trading balance and <b>100 PitBull tokens</b>. Use your balance to trade; use tokens to enter premium tournaments.</p>
        <div class="htp-media" style="display:grid;grid-template-columns:1fr 1fr;gap:10px;padding:14px;">
          <div style="background:var(--glass-2);border-radius:10px;padding:14px;text-align:left;"><small style="color:var(--t3);font-size:10px;letter-spacing:.14em;">VIRTUAL BALANCE</small><b style="display:block;font-family:var(--mono);font-size:22px;color:#fff;">₹1,00,000</b></div>
          <div style="background:var(--glass-2);border-radius:10px;padding:14px;text-align:left;"><small style="color:var(--t3);font-size:10px;letter-spacing:.14em;">PITBULL TOKENS</small><b style="display:block;font-family:var(--mono);font-size:22px;color:var(--y1);">100</b></div>
        </div>
      </div>
      <div class="htp-slide" data-slide="2">
        <h2>Choose <em>How You Play</em></h2>
        <p class="lead">► Join public tournaments anytime<br>► Create private rooms and invite friends<br>► Enter games using tokens<br>► Compete for prize pools and leaderboard rewards</p>
        <div class="htp-media"><svg viewBox="0 0 300 140" fill="none"><rect x="20" y="20" width="80" height="100" rx="8" fill="rgba(34,211,238,0.2)" stroke="#22d3ee"/><rect x="110" y="20" width="80" height="100" rx="8" fill="rgba(168,85,247,0.2)" stroke="#a855f7"/><rect x="200" y="20" width="80" height="100" rx="8" fill="rgba(16,227,155,0.2)" stroke="#10e39b"/><text x="60" y="80" fill="#22d3ee" font-size="14" font-weight="bold" text-anchor="middle">Public</text><text x="150" y="80" fill="#a855f7" font-size="14" font-weight="bold" text-anchor="middle">Private</text><text x="240" y="80" fill="#10e39b" font-size="14" font-weight="bold" text-anchor="middle">Solo</text></svg></div>
      </div>
      <div class="htp-slide" data-slide="3">
        <h2>Watch the <em>chart move live</em></h2>
        <p class="lead">► Decide when to <b>BUY</b> or <b>SELL</b><br>► Fast timing = better profits<br>► The chart replays real historical market moves</p>
        <div class="htp-media"><svg viewBox="0 0 300 140" fill="none"><polyline points="10,110 30,90 50,100 70,70 90,85 110,60 130,75 150,45 170,55 190,30 210,45 230,20 250,35 270,10 290,25" stroke="#10e39b" stroke-width="2.5" fill="none"/><polyline points="10,110 30,90 50,100 70,70 90,85" stroke="#ff4f70" stroke-width="2.5" fill="none"/></svg></div>
      </div>
      <div class="htp-slide" data-slide="4">
        <h2>Climb the <em>leaderboard</em></h2>
        <p class="lead">Every trade feeds your global ELO. Earn badges, unlock exclusive tournaments, and compete for seasonal rewards.</p>
        <div class="htp-media"><svg viewBox="0 0 300 140" fill="none"><rect x="60" y="70" width="40" height="50" fill="rgba(224,224,224,0.3)" stroke="#e0e0e0" rx="4"/><rect x="120" y="40" width="40" height="80" fill="rgba(255,213,90,0.3)" stroke="#ffd55a" rx="4"/><rect x="180" y="80" width="40" height="40" fill="rgba(208,134,88,0.3)" stroke="#d08658" rx="4"/><text x="80" y="95" fill="#e0e0e0" font-size="18" font-weight="bold" text-anchor="middle">2</text><text x="140" y="75" fill="#ffd55a" font-size="22" font-weight="bold" text-anchor="middle">1</text><text x="200" y="105" fill="#d08658" font-size="18" font-weight="bold" text-anchor="middle">3</text></svg></div>
      </div>
      <div class="htp-slide" data-slide="5">
        <h2>Ready? <em>Hit trade</em>.</h2>
        <p class="lead">Press <span class="kb">B</span> to BUY, <span class="kb">S</span> to SELL, <span class="kb">R</span> to reset. The rest is you vs. the market.</p>
        <div class="htp-media" style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;padding:14px;">
          <div style="background:rgba(16,227,155,0.2);border:1px solid #10e39b;border-radius:10px;padding:14px;color:#10e39b;font-weight:700;display:grid;place-items:center;">▲ BUY</div>
          <div style="background:rgba(255,203,58,0.15);border:1px solid #ffcb3a;border-radius:10px;padding:14px;color:#ffcb3a;font-weight:700;display:grid;place-items:center;">HOLD</div>
          <div style="background:rgba(255,79,112,0.2);border:1px solid #ff4f70;border-radius:10px;padding:14px;color:#ff4f70;font-weight:700;display:grid;place-items:center;">▼ SELL</div>
        </div>
      </div>
    </div>
    <div class="htp-dots" id="htp-dots"></div>
    <div class="htp-nav">
      <button class="back" id="htp-back" type="button">Back</button>
      <button class="next" id="htp-next" type="button">Next</button>
    </div>
  </div>
</div>

<!-- Auth -->
<div class="modal-overlay" id="auth-modal" role="dialog" aria-modal="true" aria-labelledby="auth-title">
  <div class="modal" style="max-width:420px;">
    <button class="modal-close" data-close="auth-modal" aria-label="Close">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>
    <h2 id="auth-title" style="text-align:center;"><em>Sign in</em> to PitBull</h2>
    <p class="lead" style="text-align:center;">Save your rank, join tournaments, and invite friends.</p>
    <div class="auth-oauth" style="grid-template-columns:1fr;">
      <button type="button" id="btn-oauth-google" onclick="pbStartOAuth('google')"><svg class="ic" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.6-6 8-11.3 8a12 12 0 1 1 7.9-21l5.7-5.7C33.6 6 29 4 24 4A20 20 0 1 0 44 24c0-1.2-.1-2.4-.4-3.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8A12 12 0 0 1 24 12c3 0 5.7 1.1 7.9 2.9l5.7-5.7C33.6 6 29 4 24 4A20 20 0 0 0 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5 0 9.5-1.9 12.9-5l-6-4.9a12 12 0 0 1-6.9 2.1c-5.3 0-9.7-3.4-11.3-8l-6.6 5A20 20 0 0 0 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3a12 12 0 0 1-4.1 5.4l6 4.9A20 20 0 0 0 44 24c0-1.2-.1-2.4-.4-3.5z"/></svg>Continue with Google</button>
    </div>
    <div id="oauth-note" style="display:none;font-size:11.5px;color:var(--t3);text-align:center;margin:-10px 0 14px;line-height:1.5;"></div>
    <div class="auth-divider">or with email</div>
    <div class="auth-tabs" role="tablist">
      <button class="active" data-authtab="login" role="tab">Log in</button>
      <button data-authtab="signup" role="tab">Sign up</button>
    </div>
    <form id="auth-form" onsubmit="return pbAuthSubmit(event);">
      <div class="field" id="auth-handle-field" style="display:none;"><label>Username</label><input id="auth-handle" type="text" placeholder="e.g. scalp_lord" autocomplete="username" minlength="3" maxlength="24" pattern="[a-zA-Z0-9_]+"></div>
      <div class="field"><label>Email</label><input id="auth-email" type="email" required placeholder="you@example.com" autocomplete="email"></div>
      <div class="field"><label>Password</label><input id="auth-password" type="password" required placeholder="••••••••" autocomplete="current-password" minlength="6"></div>
      <div id="auth-error" style="display:none;color:var(--r1);font-size:13px;margin:4px 0 8px;padding:8px 10px;background:rgba(255,79,112,0.08);border:1px solid rgba(255,79,112,0.3);border-radius:8px;"></div>
      <div class="auth-extras">
        <label style="display:flex;align-items:center;gap:6px;cursor:pointer;"><input type="checkbox" checked style="accent-color:var(--p1);">Remember me</label>
        <a href="#" onclick="event.preventDefault();pbForgotPassword();">Forgot password?</a>
      </div>
      <button type="submit" class="modal-cta" id="auth-submit">Log in</button>
    </form>
  </div>
</div>

<!-- Info modal (about / press / careers / contact / terms / privacy / fairplay / responsible) -->
<div class="modal-overlay" id="info-modal" role="dialog" aria-modal="true" aria-labelledby="info-title">
  <div class="modal info-modal">
    <button class="modal-close" data-close="info-modal" aria-label="Close">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>
    <div class="info-eyebrow"><span class="dot"></span><span id="info-eyebrow-text">About</span></div>
    <h2 id="info-title" class="info-title">Building, learning, shipping.</h2>
    <div class="info-sub" id="info-sub"></div>
    <div class="info-body" id="info-body"></div>
  </div>
</div>

<!-- Toasts -->
<div class="toast-wrap" id="toast-wrap" aria-live="polite"></div>

<!-- ══════════ Mobile bottom nav (5 tabs) ══════════ -->
<nav class="mob-nav" id="mob-nav" aria-label="Mobile navigation">
  <div class="mob-nav-grid">
    <button class="mob-nav-btn active ripple" data-mob-target="hero2" type="button" aria-label="Home">
      <svg viewBox="0 0 24 24"><path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/></svg>
      <span>Home</span>
    </button>
    <button class="mob-nav-btn ripple" data-mob-target="arena" type="button" aria-label="Markets">
      <svg viewBox="0 0 24 24"><polyline points="3 17 9 11 13 15 21 7"/><polyline points="14 7 21 7 21 14"/></svg>
      <span>Markets</span>
    </button>
    <button class="mob-nav-btn ripple" data-mob-target="portfolio" type="button" aria-label="Portfolio">
      <svg viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 13h18"/></svg>
      <span>Portfolio</span>
    </button>
    <button class="mob-nav-btn ripple" data-mob-target="challenges" type="button" aria-label="Challenges">
      <svg viewBox="0 0 24 24"><path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 4h10v5a5 5 0 0 1-10 0V4z"/><path d="M17 4h3v3a3 3 0 0 1-3 3"/><path d="M7 4H4v3a3 3 0 0 0 3 3"/></svg>
      <span>Challenges</span>
    </button>
    <button class="mob-nav-btn ripple" data-mob-target="leaderboard" type="button" aria-label="Profile">
      <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>
      <span>Profile</span>
    </button>
  </div>
</nav>

<!-- ══════════ Mobile FAB Buy/Sell ══════════ -->
<button class="mob-fab ripple" id="mob-fab" type="button" aria-label="Quick trade">
  <svg viewBox="0 0 24 24"><polyline points="3 17 9 11 13 15 21 7"/><polyline points="14 7 21 7 21 14"/></svg>
</button>

<!-- Pull-to-refresh indicator -->
<div class="mob-ptr" id="mob-ptr" aria-hidden="true">
  <svg viewBox="0 0 24 24"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
  <span id="mob-ptr-text">Pull to refresh</span>
</div>

<script>
/* ══════════════════════════════════════════════════════════════
   Floating particles backdrop (Antigravity-style)
   Lightweight canvas: ~80 dots desktop / ~40 mobile, drift + glow.
   Respects prefers-reduced-motion.
   ══════════════════════════════════════════════════════════════ */
/* ════════════════════════════════════════════════════════════════
   ✨ Premium particle gravity-field
   ───────────────────────────────────────────────────────────────
   - Curved-path drift (perlin-ish phase noise)
   - Cursor attracts particles & accelerates them
   - Connection lines between near particles
   - Mouse trail particles spawn on fast moves
   - 60fps via requestAnimationFrame, dt-capped
   ════════════════════════════════════════════════════════════════ */
(function initParticles(){
  const cv = document.getElementById('bg-particles');
  if(!cv) return;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduced) return;

  const ctx = cv.getContext('2d', { alpha: true });
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const isMobile = () => window.innerWidth < 720;
  const palette = [
    { r:168, g:85,  b:247 },
    { r:34,  g:211, b:238 },
    { r:124, g:58,  b:237 },
    { r:99,  g:102, b:241 },
    { r:236, g:72,  b:153 },
  ];

  let W = 0, H = 0;
  function resize(){
    W = window.innerWidth;
    H = window.innerHeight;
    cv.width  = Math.floor(W * dpr);
    cv.height = Math.floor(H * dpr);
    cv.style.width  = W + 'px';
    cv.style.height = H + 'px';
    ctx.setTransform(dpr,0,0,dpr,0,0);
  }
  resize();
  window.addEventListener('resize', () => { resize(); spawn(); });

  let parts = [];
  function spawn(){
    // Lower particle count on mobile + skip entirely if Save-Data or low-end device
    const lowEnd = (navigator.connection && (navigator.connection.saveData || /^slow-2g|2g$/.test(navigator.connection.effectiveType || '')))
                 || ((navigator.deviceMemory || 4) <= 2)
                 || ((navigator.hardwareConcurrency || 4) <= 2);
    if(lowEnd){ parts = []; return; }
    const n = isMobile() ? 28 : 140;
    parts = new Array(n).fill(0).map(() => {
      const c = palette[(Math.random() * palette.length) | 0];
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        r: 1.0 + Math.random() * 2.4,
        vx: (Math.random() - 0.5) * 0.22,
        vy: -(0.04 + Math.random() * 0.22),
        a: Math.random() * Math.PI * 2,
        ax: 0.0006 + Math.random() * 0.0012,
        sway: 0.4 + Math.random() * 0.9,
        col: c,
        alpha: 0.55 + Math.random() * 0.4,
        glow: 10 + Math.random() * 18,
      };
    });
  }
  spawn();

  // Cursor (gravity field) — desktop only
  const hasFinePointer = window.matchMedia('(pointer: fine)').matches
                      && !('ontouchstart' in window)
                      && (navigator.maxTouchPoints || 0) === 0;
  const cursor = { x: -1000, y: -1000, lastX:-1000, lastY:-1000, speed:0, active:false };
  const trails = [];

  if(hasFinePointer){
    window.addEventListener('mousemove', (e) => {
      const dx = e.clientX - cursor.x, dy = e.clientY - cursor.y;
      cursor.speed = Math.sqrt(dx*dx + dy*dy);
      cursor.lastX = cursor.x; cursor.lastY = cursor.y;
      cursor.x = e.clientX; cursor.y = e.clientY; cursor.active = true;
      // spawn small trail particle when fast
      if(cursor.speed > 8 && trails.length < 60){
        const c = palette[(Math.random() * palette.length) | 0];
        trails.push({ x:e.clientX, y:e.clientY, r:1.6+Math.random()*2.2, life:1, col:c, vx:(Math.random()-0.5)*0.6, vy:(Math.random()-0.5)*0.6 });
      }
    }, { passive:true });
    window.addEventListener('mouseleave', () => { cursor.active = false; });
    window.addEventListener('blur',       () => { cursor.active = false; });
  }

  let t0 = performance.now();
  let visible = !document.hidden;
  document.addEventListener('visibilitychange', () => { visible = !document.hidden; if(visible) t0 = performance.now(); });

  function frame(now){
    requestAnimationFrame(frame);
    if(!visible) return;
    const dt = Math.min(48, now - t0);
    t0 = now;

    ctx.clearRect(0, 0, W, H);

    const cR = 220;          // gravity radius
    const cR2 = cR * cR;
    const repel = false;     // attract by default
    const attract = 0.00018; // pull strength

    // Draw connections first (behind) — track which pairs are close
    const near = [];
    for(let i = 0, l = parts.length; i < l; i++){
      const p = parts[i];
      // motion: curved path
      p.a += p.ax * dt;
      const swayX = Math.cos(p.a) * 0.025 * p.sway;
      const swayY = Math.sin(p.a * 0.7) * 0.012 * p.sway;
      p.x += (p.vx + swayX) * (dt / 16);
      p.y += (p.vy + swayY) * (dt / 16);

      // gravity toward cursor
      if(cursor.active){
        const dx = cursor.x - p.x, dy = cursor.y - p.y;
        const d2 = dx*dx + dy*dy;
        if(d2 < cR2 && d2 > 4){
          const f = (1 - d2 / cR2);
          const a = (repel ? -1 : 1) * attract * f * dt;
          p.vx += dx * a;
          p.vy += dy * a;
          // visual highlight
          p._glowBoost = f * 28;
        } else {
          p._glowBoost = 0;
        }
      } else {
        p._glowBoost = 0;
      }

      // damping
      p.vx *= 0.985;
      p.vy *= 0.985;
      // tiny upward bias so the field doesn't go limp
      p.vy += -0.0015 * (dt / 16);

      // wrap
      if(p.y < -16){ p.y = H + 16; p.x = Math.random() * W; }
      if(p.y > H + 30){ p.y = -10; }
      if(p.x < -30) p.x = W + 30;
      if(p.x > W + 30) p.x = -30;

      // draw the dot
      const a = Math.min(1, p.alpha + (p._glowBoost ? p._glowBoost*0.012 : 0));
      ctx.shadowBlur = p.glow + (p._glowBoost || 0);
      ctx.shadowColor = `rgba(${p.col.r},${p.col.g},${p.col.b},${a})`;
      ctx.fillStyle   = `rgba(${p.col.r},${p.col.g},${p.col.b},${a})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.shadowBlur = 0;

    // connection lines (only nearby + cap) — sparse loop for perf
    if(!isMobile()){
      const step = 2; // skip every other particle
      for(let i = 0; i < parts.length; i += step){
        const p = parts[i];
        for(let j = i + step; j < Math.min(parts.length, i + 16); j += step){
          const q = parts[j];
          const dx = p.x - q.x, dy = p.y - q.y;
          const d2 = dx*dx + dy*dy;
          if(d2 < 110*110){
            const a = (1 - d2 / (110*110)) * 0.18;
            ctx.strokeStyle = `rgba(168,85,247,${a})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }
    }

    // cursor trail particles
    for(let i = trails.length - 1; i >= 0; i--){
      const t = trails[i];
      t.x += t.vx * dt; t.y += t.vy * dt; t.life -= dt * 0.0014;
      if(t.life <= 0){ trails.splice(i,1); continue; }
      ctx.globalAlpha = Math.max(0, t.life);
      ctx.shadowBlur = 16;
      ctx.shadowColor = `rgba(${t.col.r},${t.col.g},${t.col.b},${t.life})`;
      ctx.fillStyle   = `rgba(${t.col.r},${t.col.g},${t.col.b},${t.life})`;
      ctx.beginPath();
      ctx.arc(t.x, t.y, t.r * t.life, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1; ctx.shadowBlur = 0;
  }
  requestAnimationFrame((t) => { t0 = t; frame(t); });
})();

/* ════════════════════════════════════════════════════════════════
   ✨ Cursor aura, magnetic buttons, 3D tilt, ripple, counters,
      hero candlestick chart, scroll reveal
   ════════════════════════════════════════════════════════════════ */
(function initPremiumUX(){
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(pointer: fine)').matches
                   && !('ontouchstart' in window)
                   && (navigator.maxTouchPoints || 0) === 0;

  // ── Custom cursor aura (desktop only) ────────────────────────
  if(finePointer && !reduced){
    document.body.classList.add('pb-cursor-on');
    const ring = document.createElement('div'); ring.className = 'pb-cursor';
    const dot  = document.createElement('div'); dot.className  = 'pb-cursor-dot';
    document.body.appendChild(ring); document.body.appendChild(dot);
    let mx = -100, my = -100, rx = -100, ry = -100;
    window.addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY; }, { passive:true });
    window.addEventListener('mousedown', () => ring.classList.add('is-down'));
    window.addEventListener('mouseup',   () => ring.classList.remove('is-down'));
    document.addEventListener('mouseover', (e) => {
      const t = e.target.closest('a,button,input[type="submit"],.pb-tilt,.feat-card,.tournament-card');
      if(t) ring.classList.add('is-hover'); else ring.classList.remove('is-hover');
    });
    function tick(){
      rx += (mx - rx) * 0.22; ry += (my - ry) * 0.22;
      ring.style.transform = `translate3d(${rx - 18}px, ${ry - 18}px, 0)`;
      dot.style.transform  = `translate3d(${mx - 3}px, ${my - 3}px, 0)`;
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  // ── Magnetic buttons ─────────────────────────────────────────
  if(finePointer && !reduced){
    document.querySelectorAll('.pb-magnetic').forEach((el) => {
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
        const dx = (e.clientX - cx) * 0.3, dy = (e.clientY - cy) * 0.4;
        el.style.transform = `translate(${dx}px, ${dy}px)`;
      });
      el.addEventListener('mouseleave', () => { el.style.transform = ''; });
    });
  }

  // ── 3D tilt for cards ────────────────────────────────────────
  if(finePointer && !reduced){
    document.querySelectorAll('.pb-tilt').forEach((el) => {
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top)  / r.height;
        const rx = (0.5 - py) * 8;   // rotateX
        const ry = (px - 0.5) * 10;  // rotateY
        el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
      });
      el.addEventListener('mouseleave', () => { el.style.transform = ''; });
    });
  }

  // ── Ripple click effect ──────────────────────────────────────
  document.addEventListener('click', (e) => {
    const t = e.target.closest('.pb-ripple');
    if(!t) return;
    const r = t.getBoundingClientRect();
    const wave = document.createElement('span'); wave.className = 'pb-ripple-wave';
    const size = Math.max(r.width, r.height) * 1.2;
    wave.style.width = wave.style.height = size + 'px';
    wave.style.left = (e.clientX - r.left) + 'px';
    wave.style.top  = (e.clientY - r.top)  + 'px';
    t.appendChild(wave);
    setTimeout(() => wave.remove(), 700);
  });

  // ── Animated counters ────────────────────────────────────────
  function fmtINR(n){ return '₹' + Math.round(n).toLocaleString('en-IN'); }
  function animateCount(el){
    const to = parseFloat(el.getAttribute('data-count-to') || '0');
    const fmt = el.getAttribute('data-count-format');
    const dur = 1500;
    const start = performance.now();
    function step(now){
      const k = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - k, 3);
      const v = to * eased;
      el.textContent = (fmt === 'inr') ? fmtINR(v) : Math.round(v).toLocaleString('en-IN');
      if(k < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  // ── Reveal on scroll ─────────────────────────────────────────
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if(en.isIntersecting){
        en.target.classList.add('is-in');
        // counters within the revealed element
        en.target.querySelectorAll('[data-count-to]').forEach(animateCount);
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

  // ── Hero v2 candlestick chart (canvas-based, animated) ───────
  (function heroChart(){
    const cv = document.getElementById('hero2-chart');
    if(!cv) return;
    const ctx = cv.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    function size(){
      const r = cv.getBoundingClientRect();
      cv.width = Math.floor(r.width * dpr); cv.height = Math.floor(r.height * dpr);
      ctx.setTransform(dpr,0,0,dpr,0,0);
      return r;
    }
    let R = size();
    window.addEventListener('resize', () => { R = size(); });

    const N = 40; let series = [];
    let p = 2820;
    for(let i = 0; i < N; i++){
      const o = p;
      const ch = (Math.random() - 0.45) * 14;
      const c = o + ch;
      const h = Math.max(o,c) + Math.random() * 8;
      const l = Math.min(o,c) - Math.random() * 8;
      series.push({ o, h, l, c });
      p = c;
    }

    function draw(){
      const W = R.width, H = R.height;
      ctx.clearRect(0,0,W,H);

      // grid
      ctx.strokeStyle = 'rgba(255,255,255,0.04)';
      ctx.lineWidth = 1;
      for(let i = 1; i < 5; i++){
        const y = (H / 5) * i;
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
      }

      // y-bounds
      let lo = +Infinity, hi = -Infinity;
      for(const c of series){ if(c.l < lo) lo = c.l; if(c.h > hi) hi = c.h; }
      const pad = (hi - lo) * 0.1; lo -= pad; hi += pad;
      const yOf = (v) => H - ((v - lo) / (hi - lo)) * H;

      // candles
      const bw = (W - 16) / N;
      for(let i = 0; i < N; i++){
        const c = series[i];
        const x = 8 + i * bw + bw / 2;
        const up = c.c >= c.o;
        const col = up ? '#10e39b' : '#ff4f70';
        ctx.strokeStyle = col;
        ctx.lineWidth = 1.2;
        ctx.beginPath(); ctx.moveTo(x, yOf(c.h)); ctx.lineTo(x, yOf(c.l)); ctx.stroke();
        ctx.fillStyle = col;
        ctx.shadowBlur = 8; ctx.shadowColor = col;
        const y0 = yOf(c.o), y1 = yOf(c.c);
        ctx.fillRect(x - bw*0.32, Math.min(y0,y1), bw*0.64, Math.max(1.4, Math.abs(y1 - y0)));
        ctx.shadowBlur = 0;
      }

      // glow line over closes
      ctx.strokeStyle = 'rgba(168,85,247,0.55)';
      ctx.lineWidth = 1.4; ctx.shadowBlur = 16; ctx.shadowColor = 'rgba(168,85,247,0.8)';
      ctx.beginPath();
      for(let i = 0; i < N; i++){
        const x = 8 + i * bw + bw / 2;
        const y = yOf(series[i].c);
        if(i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke(); ctx.shadowBlur = 0;
    }

    function tick(){
      // shift series, append new candle
      const last = series[N - 1];
      const o = last.c;
      const ch = (Math.random() - 0.45) * 12;
      const c = o + ch;
      const h = Math.max(o,c) + Math.random() * 7;
      const l = Math.min(o,c) - Math.random() * 7;
      series.push({ o, h, l, c }); series.shift();

      // update price labels
      const priceEl = document.getElementById('h-price');
      const chEl    = document.getElementById('h-change');
      if(priceEl) priceEl.textContent = '₹' + c.toLocaleString('en-IN', { minimumFractionDigits:2, maximumFractionDigits:2 });
      if(chEl){
        const delta = c - 2814.45;
        const pct = (delta / 2814.45) * 100;
        const up = delta >= 0;
        chEl.textContent = (up ? '+' : '') + delta.toFixed(2) + ' (' + (up ? '+' : '') + pct.toFixed(2) + '%)';
        chEl.style.color = up ? 'var(--g1)' : 'var(--r1)';
      }
      draw();
    }
    draw();
    setInterval(tick, 1100);
  })();
})();

/* ══════════════════════════════════════════════════════════════
   PitBull Markets API client
   Talks to a FastAPI backend (SQLite + JWT auth) deployed on Fly.io.
   Auth token persisted in localStorage so login carries across reloads
   on Android, iOS, and Windows browsers.
   ══════════════════════════════════════════════════════════════ */
const PB_API = (document.querySelector('meta[name="pb:api-base"]')?.content || '').replace(/\/$/,'').trim();
const PB_LIVE = !!PB_API;
const PB_TOKEN_KEY = 'pb-auth-token';
window.pb = { live: PB_LIVE, user: null, profile: null, token: localStorage.getItem(PB_TOKEN_KEY) };

async function pbApi(path, opts={}){
  if(!PB_LIVE) throw new Error('API not configured.');
  const headers = Object.assign({}, opts.headers || {});
  if(opts.body && !headers['content-type']) headers['content-type'] = 'application/json';
  if(pb.token) headers['authorization'] = 'Bearer ' + pb.token;
  const res = await fetch(PB_API + path, {
    method: opts.method || (opts.body ? 'POST' : 'GET'),
    headers,
    body: opts.body ? JSON.stringify(opts.body) : undefined,
  });
  let data = null;
  try { data = await res.json(); } catch { /* empty body ok */ }
  if(!res.ok){
    let msg = `Request failed (${res.status})`;
    if(data){
      if(typeof data.detail === 'string') msg = data.detail;
      else if(Array.isArray(data.detail) && data.detail.length){
        // FastAPI validation errors → friendly message
        const e0 = data.detail[0];
        const fld = (e0?.loc?.slice(-1)[0]) || 'field';
        msg = `${fld}: ${e0?.msg || 'invalid'}`;
      }
      else if(typeof data.message === 'string') msg = data.message;
    }
    const err = new Error(msg);
    err.status = res.status;
    throw err;
  }
  return data;
}

async function pbSignUp(email, password, handle){
  try {
    const data = await pbApi('/api/auth/signup', { body:{ email, password, handle } });
    pb.token = data.token; pb.user = data.user; pb.profile = data.user;
    localStorage.setItem(PB_TOKEN_KEY, pb.token);
    return { data, error: null };
  } catch(e){ return { data:null, error:{ message: e.message } }; }
}
async function pbSignIn(email, password){
  try {
    const data = await pbApi('/api/auth/login', { body:{ email, password } });
    pb.token = data.token; pb.user = data.user; pb.profile = data.user;
    localStorage.setItem(PB_TOKEN_KEY, pb.token);
    return { data, error: null };
  } catch(e){ return { data:null, error:{ message: e.message } }; }
}
async function pbSignOut(){
  pb.token = null; pb.user = null; pb.profile = null;
  localStorage.removeItem(PB_TOKEN_KEY);
}
async function pbLoadProfile(){
  if(!PB_LIVE || !pb.token) return null;
  try {
    const u = await pbApi('/api/auth/me');
    pb.user = u; pb.profile = u;
    return u;
  } catch(e){
    // token invalid — clear it
    if(e.status === 401) await pbSignOut();
    return null;
  }
}
async function pbFetchTournaments(){
  if(!PB_LIVE) return null;
  try { return await pbApi('/api/tournaments'); }
  catch { return null; }
}
async function pbJoinTournament(tournamentId){
  if(!PB_LIVE) return { error:{ message:'API not configured.' } };
  if(!pb.user)  return { error:{ message:'Sign in to join.' } };
  try {
    const d = await pbApi(`/api/tournaments/${tournamentId}/join`, { method:'POST', body:{} });
    return { data: d };
  } catch(e){ return { error:{ message: e.message, code: e.status } }; }
}
async function pbInsertTrade(trade){
  if(!PB_LIVE || !pb.user) return;
  try {
    await pbApi('/api/trades', { body:{
      symbol: trade.sym,
      side:   trade.side,
      size_usd:    trade.size,
      entry_price: trade.entry,
      exit_price:  trade.exit,
      pnl:         trade.pnl,
    }});
  } catch(e){ console.warn('[PitBull] trade record failed:', e.message); }
}
async function pbFetchLeaderboard(limit=25){
  if(!PB_LIVE) return null;
  try { return await pbApi(`/api/leaderboard?limit=${limit}`); }
  catch { return null; }
}

/* Real header / hero pills — backed by /api/stats. */
async function pbFetchStats(){
  if(!PB_LIVE) return null;
  try { return await pbApi('/api/stats'); }
  catch { return null; }
}
function pbRenderStats(s){
  const dash = '—';
  const players = (s && Number.isFinite(s.users_total)) ? s.users_total.toLocaleString('en-US') : dash;
  const tlive   = (s && Number.isFinite(s.tournaments_live)) ? s.tournaments_live.toLocaleString('en-US') : dash;
  const tall    = (s && Number.isFinite(s.tournaments_total)) ? s.tournaments_total.toLocaleString('en-US') : dash;
  const set = (id, val) => { const el = document.getElementById(id); if(el) el.textContent = val; };
  set('live-players', players);
  set('live-tourns',  tlive);
  set('s-players',    players);
  set('s-tourns',     tall);  // hero shows total tournaments (more honest "5 live tournaments" feel)
  set('w-players',    players);
  set('w-tourns',     tlive);
}
async function pbRefreshStats(){
  const s = await pbFetchStats();
  pbRenderStats(s);
}

/* Update header signed-in state */
function pbRenderAuthChip(){
  const btn = document.getElementById('btn-signin');
  if(!btn) return;
  if(pb.user){
    const name = pb.profile?.handle || pb.profile?.display_name || pb.user.email?.split('@')[0] || 'player';
    const avatarUrl = pb.profile?.avatar_url || pb.user?.avatar_url;
    const avatarBg = pb.profile?.avatar_color || '#7c3aed';
    const initials = name.slice(0,2).toUpperCase();
    const avatarHTML = avatarUrl
      ? `<span style="width:22px;height:22px;border-radius:50%;background:url('${avatarUrl}') center/cover, ${avatarBg};display:inline-block;border:1px solid rgba(255,255,255,0.18);"></span>`
      : `<span style="width:22px;height:22px;border-radius:50%;background:${avatarBg};display:inline-grid;place-items:center;font-size:10px;font-weight:700;color:#fff;">${initials}</span>`;
    btn.innerHTML = `<span style="display:inline-flex;align-items:center;gap:8px;">${avatarHTML}${name}</span>`;
    btn.onclick = async () => {
      if(confirm('Sign out of PitBull Markets?')){
        await pbSignOut();
        pbRenderAuthChip();
        toast('Signed out', 'success');
        refreshTournsFromDB();
        renderLeaders();
      }
    };
  } else {
    btn.textContent = 'Sign in';
    btn.onclick = () => openModal('auth-modal');
  }
}

/* Init session + restore from saved token */
async function pbInit(){
  if(!PB_LIVE){
    console.info('[PitBull] Demo mode — API not configured.');
    return;
  }
  // OAuth handoff: backend redirects back with #oauth_token=JWT in the URL
  const hashTok = pbReadOAuthHash();
  if(hashTok){
    pb.token = hashTok;
    localStorage.setItem(PB_TOKEN_KEY, pb.token);
    pbCleanOAuthHash();
  }
  if(pb.token){
    await pbLoadProfile();
  }
  pbRenderAuthChip();
  pbRefreshStats();
  pbRefreshOAuthStatus();
  setInterval(pbRefreshStats, 30000);  // poll every 30s
  if(hashTok && pb.user){
    if(typeof toast === 'function') toast(`Signed in as @${pb.user.handle}`, 'good');
  }
}

/* ─── OAuth (Google + Discord) ─────────────────────────────────── */
function pbReadOAuthHash(){
  // We send the JWT in the URL fragment so it never hits server logs.
  const m = (location.hash || '').match(/(?:^#|&)oauth_token=([^&]+)/);
  return m ? decodeURIComponent(m[1]) : null;
}
function pbCleanOAuthHash(){
  // Remove just the oauth_token piece, preserve any other hash content.
  let h = (location.hash || '').replace(/^#/, '');
  h = h.split('&').filter(p => !p.startsWith('oauth_token=')).join('&');
  const newUrl = location.pathname + location.search + (h ? '#' + h : '');
  history.replaceState(null, '', newUrl);
}
function pbStartOAuth(provider){
  if(!PB_LIVE){
    if(typeof toast === 'function') toast('API not configured.', 'bad');
    return;
  }
  // Full-page redirect — backend handles the dance and redirects us back with the token.
  window.location.href = `${PB_API}/auth/${provider}`;
}
async function pbRefreshOAuthStatus(){
  if(!PB_LIVE) return;
  let s;
  try {
    s = await pbApi('/api/auth/oauth-status');
  } catch (e){
    // Endpoint missing (older backend) or cold-start — assume neither provider configured.
    s = { google: false, discord: false };
  }
  {
    pb.oauth = s;
    const note = document.getElementById('oauth-note');
    const gBtn = document.getElementById('btn-oauth-google');
    const dBtn = document.getElementById('btn-oauth-discord');
    const missing = [];
    if(gBtn){
      if(!s.google){
        gBtn.disabled = true; gBtn.style.opacity = 0.55; gBtn.style.cursor = 'not-allowed';
        gBtn.title = 'Google OAuth not configured yet';
        missing.push('Google');
      } else {
        gBtn.disabled = false; gBtn.style.opacity = ''; gBtn.style.cursor = '';
        gBtn.title = '';
      }
    }
    if(dBtn){
      // Discord button removed from UI; keep stub for safety
      dBtn.style.display = 'none';
    }
    if(note){
      if(missing.length){
        note.textContent = `${missing.join(' & ')} sign-in not configured yet — use email below.`;
        note.style.display = 'block';
      } else {
        note.style.display = 'none';
      }
    }
  }
}
window.pbStartOAuth = pbStartOAuth;

/* ══════════════════════════════════════════════════════════════
   State
   ══════════════════════════════════════════════════════════════ */
const state = {
  balance: 100000,
  pnl: 0,
  positions: [], // {id, sym, side, size, qty, entry, mark}
  activeSym: 'RELIANCE',
  side: 'buy',
  roundSeconds: 5 * 60,
  tf: '5s', // active timeframe key—see TIMEFRAMES table
  orders: [], // closed-trade history
  pending: [], // pending limit orders {id, sym, side, size, lev, qty, limit, placedAt}
  orderType: 'market', // 'market' | 'limit'
  instruments: [
    // Indian indices (Groww-style terminal header)
    {sym:'NIFTY',    name:'Nifty 50',            cat:'indices', price:23897.95, color:'#00b386', curr:'₹'},
    {sym:'SENSEX',   name:'BSE Sensex',          cat:'indices', price:76664.21, color:'#5367ff', curr:'₹'},
    {sym:'BANKNIFTY',name:'Nifty Bank',          cat:'indices', price:56089.75, color:'#ff7a00', curr:'₹'},
    {sym:'FINNIFTY', name:'Nifty Financial',     cat:'indices', price:26141.75, color:'#a855f7', curr:'₹'},
    {sym:'BANKEX',   name:'BSE Bankex',          cat:'indices', price:63188.31, color:'#e11d48', curr:'₹'},

    // Indian stocks (NSE)
    {sym:'HIMADRI',  name:'Himadri Speciality',  cat:'in',      price:539.20,   color:'#f59e0b', curr:'₹'},
    {sym:'RELIANCE', name:'Reliance Industries', cat:'in',      price:2948.10,  color:'#1e3a8a', curr:'₹'},
    {sym:'TCS',      name:'Tata Consultancy',    cat:'in',      price:3874.50,  color:'#5a3fbe', curr:'₹'},
    {sym:'INFY',     name:'Infosys',             cat:'in',      price:1532.20,  color:'#007cc3', curr:'₹'},
    {sym:'HDFCBANK', name:'HDFC Bank',           cat:'in',      price:1712.90,  color:'#004c8f', curr:'₹'},
    {sym:'ICICIBANK',name:'ICICI Bank',          cat:'in',      price:1281.35,  color:'#f2542d', curr:'₹'},
    {sym:'SBIN',     name:'State Bank of India', cat:'in',      price:817.45,   color:'#22356f', curr:'₹'},
    {sym:'TATASTEEL',name:'Tata Steel',          cat:'in',      price:164.80,   color:'#0066b2', curr:'₹'},
    {sym:'WIPRO',    name:'Wipro',               cat:'in',      price:308.65,   color:'#341f97', curr:'₹'},
    {sym:'ADANIENT', name:'Adani Enterprises',   cat:'in',      price:3225.10,  color:'#0ea5e9', curr:'₹'},
    {sym:'ITC',      name:'ITC Limited',         cat:'in',      price:432.55,   color:'#16a34a', curr:'₹'},
    {sym:'MARUTI',   name:'Maruti Suzuki',       cat:'in',      price:12248.00, color:'#ef4444', curr:'₹'},
    {sym:'LT',       name:'Larsen & Toubro',     cat:'in',      price:3612.40,  color:'#0891b2', curr:'₹'},
    {sym:'BAJFIN',   name:'Bajaj Finance',       cat:'in',      price:7241.80,  color:'#dc2626', curr:'₹'},

    // US stocks
    {sym:'AAPL',   name:'Apple',              cat:'stocks', price:189.40,   color:'#a3aaae', curr:'$'},
    {sym:'MSFT',   name:'Microsoft',          cat:'stocks', price:415.26,   color:'#00a4ef', curr:'$'},
    {sym:'NVDA',   name:'NVIDIA',             cat:'stocks', price:918.42,   color:'#76b900', curr:'$'},
    {sym:'TSLA',   name:'Tesla',              cat:'stocks', price:248.13,   color:'#cc0000', curr:'$'},
    {sym:'GOOG',   name:'Alphabet',           cat:'stocks', price:174.09,   color:'#4285f4', curr:'$'},
    {sym:'AMZN',   name:'Amazon',             cat:'stocks', price:184.72,   color:'#ff9900', curr:'$'},
    {sym:'META',   name:'Meta Platforms',     cat:'stocks', price:502.19,   color:'#1877f2', curr:'$'},
    {sym:'NFLX',   name:'Netflix',            cat:'stocks', price:628.84,   color:'#e50914', curr:'$'},
    {sym:'AMD',    name:'AMD',                cat:'stocks', price:158.26,   color:'#ed1c24', curr:'$'},
    {sym:'JPM',    name:'JPMorgan',           cat:'stocks', price:198.62,   color:'#0a1f4d', curr:'$'},
    {sym:'V',      name:'Visa',               cat:'stocks', price:275.31,   color:'#1a1f71', curr:'$'},
    {sym:'DIS',    name:'Disney',             cat:'stocks', price:104.85,   color:'#3b82f6', curr:'$'},

    // Crypto
    {sym:'BTCUSD', name:'Bitcoin',            cat:'crypto', price:64812.40, color:'#f7931a', curr:'$'},
    {sym:'ETHUSD', name:'Ethereum',           cat:'crypto', price:3412.80,  color:'#627eea', curr:'$'},
    {sym:'SOLUSD', name:'Solana',             cat:'crypto', price:172.15,   color:'#9945ff', curr:'$'},
    {sym:'XRPUSD', name:'Ripple',             cat:'crypto', price:0.5124,   color:'#00b2e2', curr:'$'},
    {sym:'DOGEUSD',name:'Dogecoin',           cat:'crypto', price:0.1582,   color:'#c3a634', curr:'$'},
    {sym:'ADAUSD', name:'Cardano',            cat:'crypto', price:0.4582,   color:'#0033ad', curr:'$'},

    // FX
    {sym:'EURUSD', name:'Euro / Dollar',      cat:'fx',     price:1.0842,   color:'#ffd700', curr:'$'},
    {sym:'GBPUSD', name:'Pound / Dollar',     cat:'fx',     price:1.2561,   color:'#ed1c24', curr:'$'},
    {sym:'USDJPY', name:'Dollar / Yen',       cat:'fx',     price:154.23,   color:'#bc002d', curr:'$'},
    {sym:'USDINR', name:'Dollar / Rupee',     cat:'fx',     price:83.42,    color:'#f97316', curr:'$'},
  ],
};
// Determine currency symbol for an instrument (used in prices/P&L formatting)
const cur = sym => (state.instruments.find(i=>i.sym===sym)?.curr) || '$';

const fmt   = n => n.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
// Indian-locale rupee formatter: 125000 -> ₹1,25,000.00
const fmtIN = n => Math.abs(n).toLocaleString('en-IN', {minimumFractionDigits:2, maximumFractionDigits:2});
const fmtINR = n => (n<0?'-':'') + '₹' + fmtIN(n);
// Account-side amounts always display in ₹. Per-instrument prices keep their own currency (₹ for NSE, $ for US/crypto/FX).
const fmtUSD = fmtINR; // legacy alias — all internal balances now ₹
const fmtPct = n => (n>=0?'+':'') + n.toFixed(2) + '%';

function toast(msg, type='success'){
  const wrap = document.getElementById('toast-wrap');
  const t = document.createElement('div');
  t.className = 'toast ' + type;
  const ic = type==='success' ? '✓' : '!';
  t.innerHTML = `<span class="ic">${ic}</span><span>${msg}</span>`;
  wrap.appendChild(t);
  setTimeout(()=>{ t.style.opacity='0'; t.style.transform='translateX(20px)'; setTimeout(()=>t.remove(), 300); }, 3500);
}

/* ── Simulation disclaimer ───────────────────────────────── */
function dismissSimDisclaimer(){
  const el = document.getElementById('sim-disclaimer');
  if(el) el.classList.add('dismissed');
  try { sessionStorage.setItem('pb-sim-dismissed', '1'); } catch(_){}
}
(function initSimDisclaimer(){
  try {
    if(sessionStorage.getItem('pb-sim-dismissed') === '1'){
      const el = document.getElementById('sim-disclaimer');
      if(el) el.classList.add('dismissed');
    }
  } catch(_){}
})();

/* ── Trade feedback: short tone + full-page flash ─────────── */
let _pbAudioCtx = null;
function pbAudio(){
  if(_pbAudioCtx) return _pbAudioCtx;
  try { _pbAudioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch(_){ _pbAudioCtx = null; }
  return _pbAudioCtx;
}
function pbBeep(kind='buy'){
  // kind: 'buy' (rising), 'sell' (falling), 'win' (chord), 'loss' (low buzz)
  const ctx = pbAudio(); if(!ctx) return;
  if(ctx.state === 'suspended') ctx.resume().catch(()=>{});
  const now = ctx.currentTime;
  const make = (freq, t0, dur=0.18, type='sine', gain=0.06) => {
    const osc = ctx.createOscillator();
    const g   = ctx.createGain();
    osc.type = type; osc.frequency.setValueAtTime(freq, now + t0);
    g.gain.setValueAtTime(0, now + t0);
    g.gain.linearRampToValueAtTime(gain, now + t0 + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, now + t0 + dur);
    osc.connect(g); g.connect(ctx.destination);
    osc.start(now + t0); osc.stop(now + t0 + dur + 0.02);
  };
  if(kind === 'buy')      { make(660, 0, 0.10, 'triangle'); make(990, 0.07, 0.16, 'triangle'); }
  else if(kind === 'sell'){ make(880, 0, 0.10, 'triangle'); make(550, 0.07, 0.16, 'triangle'); }
  else if(kind === 'win') { make(523.25, 0, 0.10, 'sine'); make(659.25, 0.08, 0.10, 'sine'); make(783.99, 0.16, 0.22, 'sine'); }
  else if(kind === 'loss'){ make(220, 0, 0.10, 'sawtooth', 0.05); make(165, 0.08, 0.22, 'sawtooth', 0.05); }
}
function pbFlash(kind='neut'){
  // kind: 'up' (green), 'down' (red), 'neut' (purple)
  const el = document.createElement('div');
  el.className = 'pb-flash ' + kind;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 700);
}
// Gamification stub — actual XP system defined in Phase 6 below.
let pbAddXP = function(){};

function pbTradeFeedback(kind, pnl){
  // kind: 'open-buy' | 'open-sell' | 'close'
  if(kind === 'open-buy')      { pbBeep('buy');  pbFlash('neut'); }
  else if(kind === 'open-sell'){ pbBeep('sell'); pbFlash('neut'); }
  else { // close
    if(pnl >= 0){ pbBeep('win');  pbFlash('up');   }
    else        { pbBeep('loss'); pbFlash('down'); }
  }
}

/* ══════════════════════════════════════════════════════════════
   Ticker strip
   ══════════════════════════════════════════════════════════════ */
function renderTicker(){
  const track = document.getElementById('ticker-track');
  if(!track) return;
  const indices = state.instruments.filter(i=>i.cat==='indices');
  const top = state.instruments.filter(i=>i.cat!=='indices').slice(0,14);
  const picks = [...indices, ...top];
  const rows = [...picks, ...picks].map(i=>{
    const up = Math.random()>.4; const pct = (Math.random()*3 + 0.1)*(up?1:-1);
    return `<span class="ticker-item"><span class="ticker-dot" style="background:${i.color}"></span><b>${i.sym}</b> ${i.curr}${fmt(i.price)} <span class="${up?'ticker-up':'ticker-down'}">${up?'▲':'▼'} ${fmtPct(pct)}</span></span>`;
  }).join('');
  track.innerHTML = rows;
}
renderTicker();

/* ══════════════════════════════════════════════════════════════
   Candle series generator
   ══════════════════════════════════════════════════════════════ */
function genCandles(startPrice, count=180, volatility=0.004, barSec=1, endTs=null){
  // Build `count` candles ending at endTs, working backwards so the LAST close ~= startPrice.
  // Random walk + mean-reverting drift towards startPrice so wider lookbacks don't run away.
  const out = []; let p = startPrice;
  const end = endTs || Math.floor(Date.now()/1000);
  const start = end - count*barSec;
  // Build forward from a slightly-perturbed historical anchor for realism
  let cursor = startPrice * (1 + (Math.random()-0.5)*volatility*Math.sqrt(count)*0.3);
  for(let i=0;i<count;i++){
    const o = cursor;
    const drift = (Math.random()-0.5)*volatility*o;
    const reversion = (startPrice - o) * 0.03; // pull gently back to today's price
    const c = Math.max(0.0001, o + drift + reversion);
    const h = Math.max(o,c) + Math.random()*volatility*o*0.5;
    const l = Math.min(o,c) - Math.random()*volatility*o*0.5;
    out.push({time: start + i*barSec, open:o, high:h, low:l, close:c});
    cursor = c;
  }
  // Force the last close to match startPrice exactly so live trading state stays consistent
  if(out.length){
    const last = out[out.length-1];
    last.close = startPrice;
    last.high = Math.max(last.high, startPrice);
    last.low  = Math.min(last.low,  startPrice);
  }
  return out;
}

// Per-timeframe config: bar duration, tick rate, lookback count, volatility multiplier
const TIMEFRAMES = {
  '5s' : { barSec: 5,           tickMs: 1000, bars: 120, volMul: 1.0 },
  '1m' : { barSec: 60,          tickMs: 1500, bars: 120, volMul: 1.6 },
  '5m' : { barSec: 300,         tickMs: 2000, bars: 120, volMul: 2.2 },
  '1h' : { barSec: 3600,        tickMs: 2500, bars: 120, volMul: 3.0 },
  '1d' : { barSec: 86400,       tickMs: 3500, bars: 120, volMul: 4.5 },
  '1M' : { barSec: 30*86400,    tickMs: 4500, bars: 30,  volMul: 6.5 },
  '10M': { barSec: 30*86400,    tickMs: 5500, bars: 120, volMul: 6.5 },
};

/* ══════════════════════════════════════════════════════════════
   Hero chart (mini)
   ══════════════════════════════════════════════════════════════ */
let heroChart, heroSeries, heroData;
function initHeroChart(){
  const el = document.getElementById('hero-chart');
  heroChart = LightweightCharts.createChart(el, {
    layout: { background:{ type:'solid', color:'rgba(0,0,0,0)' }, textColor:'#7b749e' },
    grid: { vertLines:{ visible:false }, horzLines:{ color:'rgba(255,255,255,0.04)' } },
    rightPriceScale: { borderVisible:false },
    timeScale: { borderVisible:false, timeVisible:true, secondsVisible:true },
    crosshair: { vertLine:{ labelVisible:false }, horzLine:{ labelVisible:false } },
    width: el.clientWidth, height: 220,
  });
  heroSeries = heroChart.addCandlestickSeries({
    upColor:'#10e39b', downColor:'#ff4f70', borderVisible:false,
    wickUpColor:'#10e39b', wickDownColor:'#ff4f70',
  });
  heroData = genCandles(2948.10, 90, 0.006);
  heroSeries.setData(heroData);
  heroChart.timeScale().fitContent();
  window.addEventListener('resize', ()=>heroChart.applyOptions({width: el.clientWidth}));
  setInterval(tickHero, 1200);
}
function tickHero(){
  const last = heroData[heroData.length-1];
  const o = last.close;
  const c = o + (Math.random()-0.5)*o*0.004;
  const h = Math.max(o,c) + Math.random()*o*0.002;
  const l = Math.min(o,c) - Math.random()*o*0.002;
  const bar = {time: last.time+1, open:o, high:h, low:l, close:c};
  heroData.push(bar);
  if(heroData.length>200) heroData.shift();
  heroSeries.update(bar);
  const start = heroData[0].close;
  const chg = (c-start)/start*100;
  const el = document.getElementById('hp-price'); if(el) el.textContent = '₹'+c.toLocaleString('en-IN',{minimumFractionDigits:2,maximumFractionDigits:2});
  const ce = document.getElementById('hp-change'); if(ce){
    ce.textContent = (chg>=0?'▲ +':'▼ ') + fmt(Math.abs(chg)) + '%';
    ce.style.color = chg>=0 ? 'var(--g1)' : 'var(--r1)';
  }
}

/* ══════════════════════════════════════════════════════════════
   Arena chart
   ══════════════════════════════════════════════════════════════ */
let arenaChart, arenaSeries, arenaData;
function initArenaChart(){
  const el = document.getElementById('arena-chart');
  arenaChart = LightweightCharts.createChart(el, {
    layout: { background:{ type:'solid', color:'rgba(0,0,0,0)' }, textColor:'#7b749e' },
    grid: { vertLines:{ color:'rgba(255,255,255,0.03)' }, horzLines:{ color:'rgba(255,255,255,0.05)' } },
    rightPriceScale: { borderColor:'rgba(255,255,255,0.06)' },
    timeScale: { borderColor:'rgba(255,255,255,0.06)', timeVisible:true, secondsVisible:true },
    crosshair: { mode: LightweightCharts.CrosshairMode.Normal },
    width: el.clientWidth, height: 360,
  });
  arenaSeries = arenaChart.addCandlestickSeries({
    upColor:'#10e39b', downColor:'#ff4f70', borderVisible:false,
    wickUpColor:'#10e39b', wickDownColor:'#ff4f70',
  });
  loadSymbol(state.activeSym);
  window.addEventListener('resize', ()=>arenaChart.applyOptions({width: el.clientWidth}));
  startTickLoop();
}
let _tickTimer = null;
function startTickLoop(){
  if(_tickTimer) clearInterval(_tickTimer);
  const tf = TIMEFRAMES[state.tf] || TIMEFRAMES['5s'];
  _tickTimer = setInterval(tickArena, tf.tickMs);
}
function setTimeframe(key, btn){
  if(!TIMEFRAMES[key]) return;
  if(state.tf === key && btn && btn.classList.contains('active')) return;
  state.tf = key;
  document.querySelectorAll('.chart-tf button').forEach(b=>b.classList.remove('active'));
  if(btn) btn.classList.add('active');
  // Smooth crossfade: fade out, regenerate data, fade back in
  const wrap = document.getElementById('arena-chart');
  if(wrap) wrap.classList.add('tf-swap');
  setTimeout(() => {
    regenerateArenaData();
    if(wrap) wrap.classList.remove('tf-swap');
  }, 180);
  startTickLoop();
}
function regenerateArenaData(){
  const inst = state.instruments.find(i=>i.sym===state.activeSym);
  if(!inst) return;
  const tf = TIMEFRAMES[state.tf] || TIMEFRAMES['5s'];
  const baseVol = inst.cat==='fx' ? 0.0012 : (inst.cat==='indices' ? 0.0028 : 0.005);
  const vol = baseVol * tf.volMul;
  arenaData = genCandles(inst.price, tf.bars, vol, tf.barSec);
  arenaSeries.setData(arenaData);
  arenaChart.timeScale().fitContent();
}
function loadSymbol(sym){
  const inst = state.instruments.find(i=>i.sym===sym);
  state.activeSym = sym;
  regenerateArenaData();
  // update headers
  const icon = document.getElementById('chart-icon');
  icon.textContent = sym.slice(0,2);
  icon.style.background = inst.color;
  document.getElementById('chart-name').textContent = sym;
  const catLabel = ({crypto:'Crypto',stocks:'US Stocks',fx:'Forex',indices:'Index',in:'NSE'})[inst.cat] || inst.cat;
  document.getElementById('chart-desc').textContent = inst.name + ' · ' + catLabel;
  updatePriceHeader();
  updateTicketSummary();
  updateDepth(true);
  // Sync limit-price field hint to the new instrument's currency
  const lc = document.getElementById('limit-curr');
  const li = document.getElementById('limit-input');
  if(lc) lc.textContent = inst.curr;
  if(li && state.orderType === 'limit') li.value = inst.price.toFixed(2);
}
function tickArena(){
  if(!arenaData || !arenaData.length) return;
  const last = arenaData[arenaData.length-1];
  const inst = state.instruments.find(i=>i.sym===state.activeSym);
  const tf = TIMEFRAMES[state.tf] || TIMEFRAMES['5s'];
  const baseVol = inst.cat==='fx' ? 0.0012 : (inst.cat==='indices' ? 0.0028 : 0.005);
  const vol = baseVol * tf.volMul;
  const o = last.close;
  const c = Math.max(0.0001, o + (Math.random()-0.5)*o*vol);
  const h = Math.max(o,c) + Math.random()*o*vol*0.6;
  const l = Math.min(o,c) - Math.random()*o*vol*0.6;
  const bar = {time: last.time + tf.barSec, open:o, high:h, low:l, close:c};
  arenaData.push(bar);
  if(arenaData.length > tf.bars + 60) arenaData.shift();
  arenaSeries.update(bar);
  inst.price = c;
  updatePriceHeader();
  matchPendingOrders();
  updatePositions();
  updateDepth();
}
function updatePriceHeader(){
  const inst = state.instruments.find(i=>i.sym===state.activeSym);
  const start = arenaData[0].close;
  const chg = (inst.price - start)/start*100;
  document.getElementById('chart-price').textContent = inst.curr + fmt(inst.price);
  const ce = document.getElementById('chart-change');
  ce.className = chg>=0 ? 'up' : 'down';
  ce.textContent = (chg>=0?'▲ +':'▼ ') + fmt(Math.abs(chg)) + '%';
}

/* ══════════════════════════════════════════════════════════════
   Instrument list
   ══════════════════════════════════════════════════════════════ */
function renderList(filter='all', search=''){
  const wrap = document.getElementById('list-items');
  const s = search.toLowerCase();
  const list = state.instruments.filter(i =>
    (filter==='all' || i.cat===filter) &&
    (i.sym.toLowerCase().includes(s) || i.name.toLowerCase().includes(s))
  );
  wrap.innerHTML = list.map(i=>{
    const chg = (Math.random()*3 - 1); // stable-ish each render
    const up = chg>=0;
    return `<div class="list-row ${i.sym===state.activeSym?'active':''}" role="listitem" data-sym="${i.sym}">
      <span class="sym-icon" style="background:${i.color}">${i.sym.slice(0,2)}</span>
      <div><b>${i.sym}</b><small>${i.name}</small></div>
      <div class="price"><b>${i.curr}${fmt(i.price)}</b><span class="${up?'up':'down'}">${up?'▲':'▼'} ${fmt(Math.abs(chg))}%</span></div>
    </div>`;
  }).join('');
  wrap.querySelectorAll('.list-row').forEach(r=>{
    r.addEventListener('click', ()=>{
      loadSymbol(r.dataset.sym);
      wrap.querySelectorAll('.list-row').forEach(x=>x.classList.remove('active'));
      r.classList.add('active');
    });
  });
}

document.querySelectorAll('.list-tab').forEach(b=>{
  b.addEventListener('click', ()=>{
    document.querySelectorAll('.list-tab').forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    renderList(b.dataset.cat, document.getElementById('list-search').value);
  });
});
document.getElementById('list-search').addEventListener('input', e=>{
  const activeTab = document.querySelector('.list-tab.active').dataset.cat;
  renderList(activeTab, e.target.value);
});

// Chart timeframe tabs
document.querySelectorAll('.chart-tf button').forEach(b=>{
  b.addEventListener('click', ()=>{
    const key = b.dataset.tfKey || b.textContent.trim();
    setTimeframe(key, b);
    toast(`Timeframe · ${key}`, 'success');
  });
});

/* ══════════════════════════════════════════════════════════════
   Order ticket
   ══════════════════════════════════════════════════════════════ */
const sizeInput = document.getElementById('size-input');
const levInput  = document.getElementById('lev-input');
function setSize(v){ sizeInput.value = v; updateTicketSummary(); }
function adjSize(d){ sizeInput.value = Math.max(10, parseFloat(sizeInput.value||0)+d); updateTicketSummary(); }
sizeInput.addEventListener('input', updateTicketSummary);
levInput.addEventListener('input', updateTicketSummary);
function setSide(side){
  state.side = side;
  document.querySelectorAll('.ticket-toggle button').forEach(x=>x.classList.toggle('active', x.dataset.side===side));
  const sub = document.getElementById('ticket-submit');
  updateTicketSubmitLabel();
  updateTicketSummary();
}
window.setSide = setSide;
document.querySelectorAll('.ticket-toggle button').forEach(b=>{
  b.addEventListener('click', ()=>setSide(b.dataset.side));
});

/* Order type toggle (Market / Limit) */
function setOrderType(t){
  state.orderType = t;
  document.querySelectorAll('.ticket-otype .otype-btn').forEach(x=>x.classList.toggle('active', x.dataset.otype===t));
  const lf = document.getElementById('limit-field');
  if(lf) lf.style.display = (t==='limit') ? 'flex' : 'none';
  if(t === 'limit'){
    // Prefill limit price near current mark
    const inst = state.instruments.find(i=>i.sym===state.activeSym);
    const li = document.getElementById('limit-input');
    if(inst && li && (!li.value || li.value === '0')) li.value = inst.price.toFixed(2);
  }
  updateTicketSubmitLabel();
}
document.querySelectorAll('.ticket-otype .otype-btn').forEach(b=>{
  b.addEventListener('click', ()=>setOrderType(b.dataset.otype));
});
function updateTicketSubmitLabel(){
  const sub = document.getElementById('ticket-submit');
  if(!sub) return;
  const verb = state.orderType === 'limit' ? 'Place limit ' : 'Open ';
  if(state.side === 'buy'){ sub.textContent = verb + (state.orderType==='limit' ? 'BUY' : 'long · BUY'); sub.classList.remove('sell'); }
  else                    { sub.textContent = verb + (state.orderType==='limit' ? 'SELL' : 'short · SELL'); sub.classList.add('sell'); }
}
function updateTicketSummary(){
  const inst = state.instruments.find(i=>i.sym===state.activeSym);
  const size = parseFloat(sizeInput.value||0);
  const lev  = Math.max(1, parseFloat(levInput.value||1));
  const qty  = (size*lev) / inst.price;
  const qtyLabel = inst.cat==='fx' ? '' : (inst.cat==='crypto' ? ' ' + inst.sym.replace('USD','') : ' sh');
  document.getElementById('sum-qty').textContent = qty.toFixed(inst.cat==='fx'?0:4) + qtyLabel;
  document.getElementById('sum-fee').textContent = '₹' + (size*0.0005).toFixed(2);
  const liq = state.side==='buy' ? inst.price*(1 - 0.95/lev) : inst.price*(1 + 0.95/lev);
  document.getElementById('sum-liq').textContent = inst.curr + fmt(liq);
}
function fillOrderAtPrice(inst, side, size, lev, fillPrice){
  const qty = (size*lev)/fillPrice;
  const pos = {
    id: Date.now() + Math.floor(Math.random()*1000), sym:inst.sym, side, size, lev, qty,
    entry: fillPrice, mark: inst.price
  };
  state.positions.unshift(pos);
  state.balance -= size;
  updatePositions();
  pbTradeFeedback(side === 'buy' ? 'open-buy' : 'open-sell');
  pbAddXP(5, side==='buy' ? 'Opened long' : 'Opened short');
  return pos;
}

document.getElementById('ticket-submit').addEventListener('click', ()=>{
  const inst = state.instruments.find(i=>i.sym===state.activeSym);
  const size = parseFloat(sizeInput.value||0);
  const lev  = Math.max(1, parseFloat(levInput.value||1));
  if(size<=0){ toast('Enter a valid size', 'error'); return; }
  if(size > state.balance){ toast('Size exceeds balance', 'error'); return; }

  if(state.orderType === 'limit'){
    const limitInput = document.getElementById('limit-input');
    const limit = parseFloat(limitInput && limitInput.value || 0);
    if(!(limit > 0)){ toast('Enter a valid limit price', 'error'); return; }
    // Edge case: limit already crossed -> fill immediately at the better price
    const wouldFillNow = state.side==='buy' ? inst.price <= limit : inst.price >= limit;
    if(wouldFillNow){
      fillOrderAtPrice(inst, state.side, size, lev, inst.price);
      toast(`Limit ${state.side.toUpperCase()} ${inst.sym} filled instantly at ${inst.curr}${fmt(inst.price)}`, 'success');
      return;
    }
    state.pending.unshift({
      id: Date.now() + Math.floor(Math.random()*1000),
      sym: inst.sym, side: state.side, size, lev, limit,
      placedAt: new Date().toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit',second:'2-digit'})
    });
    renderPending();
    toast(`Limit ${state.side.toUpperCase()} ${inst.sym} parked at ${inst.curr}${fmt(limit)}`, 'success');
    return;
  }

  // Market order
  fillOrderAtPrice(inst, state.side, size, lev, inst.price);
  toast((state.side==='buy'?'▲ Opened long ':'▼ Opened short ') + inst.sym + ' · ' + fmtUSD(size), 'success');
});

/* Limit-order matching engine: invoked from tickArena */
function matchPendingOrders(){
  if(!state.pending.length) return;
  let fired = false;
  for(let i = state.pending.length - 1; i >= 0; i--){
    const o = state.pending[i];
    const inst = state.instruments.find(x=>x.sym===o.sym);
    if(!inst) continue;
    const fills = o.side === 'buy' ? inst.price <= o.limit : inst.price >= o.limit;
    if(!fills) continue;
    if(o.size > state.balance){
      // insufficient funds — cancel silently with a toast
      state.pending.splice(i,1);
      toast(`Limit ${o.side.toUpperCase()} ${o.sym} cancelled — insufficient balance`, 'error');
      fired = true;
      continue;
    }
    fillOrderAtPrice(inst, o.side, o.size, o.lev, o.limit);
    state.pending.splice(i,1);
    toast(`✓ Limit ${o.side.toUpperCase()} ${o.sym} filled at ${inst.curr}${fmt(o.limit)}`, 'success');
    fired = true;
  }
  if(fired) renderPending();
}

function cancelPending(id){
  const idx = state.pending.findIndex(p=>p.id===id);
  if(idx < 0) return;
  const o = state.pending[idx];
  state.pending.splice(idx,1);
  renderPending();
  toast(`Cancelled limit ${o.side.toUpperCase()} ${o.sym}`, 'success');
}

function renderPending(){
  const block = document.getElementById('pending-block');
  const list = document.getElementById('pending-list');
  const cnt = document.getElementById('pending-count');
  if(!block || !list) return;
  if(!state.pending.length){
    block.style.display = 'none';
    list.innerHTML = '';
    if(cnt) cnt.textContent = '0';
    return;
  }
  block.style.display = 'block';
  if(cnt) cnt.textContent = state.pending.length;
  list.innerHTML = state.pending.map(o=>{
    const inst = state.instruments.find(x=>x.sym===o.sym);
    const c = inst ? inst.curr : '₹';
    const distance = inst ? ((inst.price - o.limit)/inst.price*100) : 0;
    const distStr = (distance>=0?'+':'') + distance.toFixed(2) + '%';
    return `<div class="pending-row">
      <div><b>${o.sym}</b><br><small style="color:var(--t3);font-size:10px;">${o.placedAt}</small></div>
      <span class="side-${o.side}">${o.side==='buy'?'BUY':'SELL'}</span>
      <span style="font-family:var(--mono);">${fmtUSD(o.size)}</span>
      <span style="font-family:var(--mono);">@ ${c}${fmt(o.limit)}</span>
      <span style="font-family:var(--mono);color:var(--t3);font-size:11px;">mark ${distStr}</span>
      <button class="b-cancel" type="button" onclick="cancelPending(${o.id})">Cancel</button>
    </div>`;
  }).join('');
}

/* ══════════════════════════════════════════════════════════════
   Positions
   ══════════════════════════════════════════════════════════════ */
function positionPnL(p){
  const direction = p.side==='buy' ? 1 : -1;
  return direction * (p.mark - p.entry) * p.qty;
}
function updatePositions(){
  state.positions.forEach(p=>{
    const inst = state.instruments.find(i=>i.sym===p.sym);
    if(inst) p.mark = inst.price;
  });
  const totalPnL = state.positions.reduce((a,p)=>a+positionPnL(p), 0);
  state.pnl = totalPnL;
  renderBalance();
  renderPositions();
  renderHoldings();
  renderBalancePane();
  // Toggle "Close all" button
  const btn = document.getElementById('btn-close-all');
  if(btn){
    const n = state.positions.length;
    btn.disabled = n === 0;
    document.getElementById('close-all-count').textContent = n ? '· '+n : '';
  }
}
function renderBalance(){
  document.getElementById('balance').textContent = fmtUSD(state.balance);
  const pnlEl = document.getElementById('pnl');
  pnlEl.textContent = (state.pnl>=0?'+':'') + fmtUSD(state.pnl);
  const pill = document.getElementById('pnl-pill');
  pill.classList.toggle('profit', state.pnl>0.01);
  pill.classList.toggle('loss', state.pnl<-0.01);
}
function renderPositions(){
  const body = document.getElementById('pos-body');
  document.getElementById('pos-count').textContent = state.positions.length;
  if(!state.positions.length){
    body.innerHTML = `<tr><td class="empty" colspan="7">No open positions. Hit <span class="kb">B</span> to BUY or <span class="kb">S</span> to SELL.</td></tr>`;
    return;
  }
  body.innerHTML = state.positions.map(p=>{
    const pnl = positionPnL(p);
    const c = cur(p.sym);
    return `<tr>
      <td><b>${p.sym}</b></td>
      <td style="color:${p.side==='buy'?'var(--g1)':'var(--r1)'};">${p.side==='buy'?'▲ LONG':'▼ SHORT'}</td>
      <td>₹${fmtIN(p.size)} · ${p.lev}×</td>
      <td>${c}${fmt(p.entry)}</td>
      <td>${c}${fmt(p.mark)}</td>
      <td class="pos-pnl ${pnl>=0?'up':'down'}">${pnl>=0?'+':''}${fmtUSD(pnl)}</td>
      <td><button class="pos-close" type="button" onclick="closePosition(${p.id})">Close</button></td>
    </tr>`;
  }).join('');
}
function closePosition(id){
  const p = state.positions.find(x=>x.id===id);
  if(!p) return;
  const pnl = positionPnL(p);
  state.balance += p.size + pnl;
  state.positions = state.positions.filter(x=>x.id!==id);
  const order = {
    id: p.id, sym:p.sym, side:p.side, size:p.size, entry:p.entry, exit:p.mark, pnl,
    at: new Date().toLocaleTimeString('en-US',{hour:'2-digit',minute:'2-digit',second:'2-digit'})
  };
  state.orders.unshift(order);
  pbInsertTrade(order);
  updatePositions();
  renderOrders();
  pbTradeFeedback('close', pnl);
  if(typeof recordClosedTrade === 'function') recordClosedTrade(order);
  toast(`Closed ${p.sym} · ${pnl>=0?'+':''}${fmtUSD(pnl)}`, pnl>=0?'success':'error');
}
function closeAllPositions(){
  if(!state.positions.length){ toast('No open positions to close.', 'error'); return; }
  const n = state.positions.length;
  let total = 0;
  [...state.positions].forEach(p=>{
    const pnl = positionPnL(p);
    total += pnl;
    state.balance += p.size + pnl;
    const order = {
      id:p.id, sym:p.sym, side:p.side, size:p.size, entry:p.entry, exit:p.mark, pnl,
      at: new Date().toLocaleTimeString('en-US',{hour:'2-digit',minute:'2-digit',second:'2-digit'})
    };
    state.orders.unshift(order);
    pbInsertTrade(order);
    if(typeof recordClosedTrade === 'function') recordClosedTrade(order);
  });
  state.positions = [];
  updatePositions();
  renderOrders();
  pbTradeFeedback('close', total);
  toast(`Closed ${n} position${n>1?'s':''} · Net ${total>=0?'+':''}${fmtUSD(total)}`, total>=0?'success':'error');
}

/* ══════════════════════════════════════════════════════════════
   Terminal panels: Orders / Holdings / Balance / Depth
   ══════════════════════════════════════════════════════════════ */
function renderOrders(){
  const body = document.getElementById('ord-body');
  const count = document.getElementById('ord-count');
  if(count) count.textContent = state.orders.length;
  if(!body) return;
  if(!state.orders.length){
    body.innerHTML = `<tr><td class="empty" colspan="7">No filled orders yet. Close a position to see it here.</td></tr>`;
    return;
  }
  body.innerHTML = state.orders.slice(0,20).map(o=>{
    const c = cur(o.sym);
    return `<tr>
      <td style="color:var(--t3);">${o.at}</td>
      <td><b>${o.sym}</b></td>
      <td style="color:${o.side==='buy'?'var(--g1)':'var(--r1)'};">${o.side==='buy'?'LONG':'SHORT'}</td>
      <td>₹${fmtIN(o.size)}</td>
      <td>${c}${fmt(o.entry)}</td>
      <td>${c}${fmt(o.exit)}</td>
      <td class="pos-pnl ${o.pnl>=0?'up':'down'}">${o.pnl>=0?'+':''}${fmtUSD(o.pnl)}</td>
    </tr>`;
  }).join('');
}
function renderHoldings(){
  const body = document.getElementById('hold-body');
  if(!body) return;
  // Aggregate by symbol
  const agg = {};
  state.positions.forEach(p=>{
    const sign = p.side==='buy' ? 1 : -1;
    const e = agg[p.sym] || (agg[p.sym] = {sym:p.sym, qty:0, cost:0, markVal:0});
    e.qty += sign * p.qty;
    e.cost += sign * p.qty * p.entry;
  });
  const rows = Object.values(agg);
  if(!rows.length){
    body.innerHTML = `<tr><td class="empty" colspan="6">Holdings appear once you have open positions.</td></tr>`;
    return;
  }
  body.innerHTML = rows.map(h=>{
    const inst = state.instruments.find(i=>i.sym===h.sym);
    const mark = inst ? inst.price : 0;
    const c = cur(h.sym);
    const avg = h.qty ? h.cost / h.qty : 0;
    const mv  = h.qty * mark;
    const un  = mv - h.cost;
    return `<tr>
      <td><b>${h.sym}</b></td>
      <td style="color:${h.qty>=0?'var(--g1)':'var(--r1)'};">${h.qty.toFixed(4)}</td>
      <td>${c}${fmt(Math.abs(avg))}</td>
      <td>${c}${fmt(mark)}</td>
      <td>${c}${fmt(Math.abs(mv))}</td>
      <td class="pos-pnl ${un>=0?'up':'down'}">${un>=0?'+':''}${fmtUSD(un)}</td>
    </tr>`;
  }).join('');
}
function renderBalancePane(){
  const used = state.positions.reduce((a,p)=>a+p.size, 0);
  const equity = state.balance + state.pnl;
  const rpnl = state.orders.reduce((a,o)=>a+o.pnl, 0);
  const set = (id,val) => { const el = document.getElementById(id); if(el) el.textContent = val; };
  set('bal-avail', fmtUSD(state.balance));
  set('bal-equity', fmtUSD(equity));
  set('bal-used', fmtUSD(used));
  set('bal-upnl', (state.pnl>=0?'+':'') + fmtUSD(state.pnl));
  set('bal-rpnl', (rpnl>=0?'+':'') + fmtUSD(rpnl));
  set('bal-open', state.positions.length);
}
// Market depth ladder (synthetic 5x5 around last price)
function updateDepth(forceReset=false){
  const bids = document.getElementById('depth-bids');
  const asks = document.getElementById('depth-asks');
  if(!bids || !asks) return;
  const inst = state.instruments.find(i=>i.sym===state.activeSym);
  if(!inst) return;
  // Persist random qty per tick but keep layout stable
  const step = Math.max(0.01, inst.price * (inst.cat==='fx'?0.0002 : inst.cat==='indices'?0.0004 : 0.0008));
  const halfSpread = step * 0.5;
  const bid = inst.price - halfSpread;
  const ask = inst.price + halfSpread;
  const c = inst.curr;
  const levels = 8;
  const mkQty = () => (Math.random()*1200 + 80);
  const bidRows = [], askRows = [];
  let bTotal = 0, aTotal = 0;
  const bidQtys = [], askQtys = [];
  for(let i=0;i<levels;i++){ bidQtys.push(mkQty()); askQtys.push(mkQty()); }
  const maxQ = Math.max(...bidQtys, ...askQtys);
  for(let i=0;i<levels;i++){
    const bPx = bid - step*i;
    const aPx = ask + step*i;
    bTotal += bidQtys[i]; aTotal += askQtys[i];
    const bw = (bidQtys[i]/maxQ*100).toFixed(1);
    const aw = (askQtys[i]/maxQ*100).toFixed(1);
    bidRows.push(`<div class="depth-row"><span class="d-bar" style="width:${bw}%;"></span><span class="d-qty">${Math.round(bidQtys[i])}</span><span class="d-px">${c}${fmt(bPx)}</span></div>`);
    askRows.push(`<div class="depth-row"><span class="d-bar" style="width:${aw}%;"></span><span class="d-qty">${Math.round(askQtys[i])}</span><span class="d-px">${c}${fmt(aPx)}</span></div>`);
  }
  bids.parentElement.classList.add('bid');
  asks.parentElement.classList.add('ask');
  bids.innerHTML = bidRows.join('');
  asks.innerHTML = askRows.join('');
  const set = (id,val) => { const el = document.getElementById(id); if(el) el.textContent = val; };
  set('depth-sym', inst.sym);
  set('depth-spread', c + fmt(ask - bid));
  set('depth-bid-total', Math.round(bTotal).toLocaleString());
  set('depth-ask-total', Math.round(aTotal).toLocaleString());
}

// Tab switching
document.querySelectorAll('.term-tab').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const tab = btn.dataset.tab;
    document.querySelectorAll('.term-tab').forEach(x=>x.classList.toggle('active', x===btn));
    document.querySelectorAll('.term-pane').forEach(p=>p.classList.toggle('active', p.dataset.pane===tab));
  });
});
document.getElementById('btn-close-all').addEventListener('click', () => closeAllPositions());
window.closePosition = closePosition;
window.setSize = setSize;
window.adjSize = adjSize;
window.openArena = (side)=>{
  setSide(side);
  document.getElementById('arena').scrollIntoView({behavior:'smooth'});
};

/* ══════════════════════════════════════════════════════════════
   Round timer
   ══════════════════════════════════════════════════════════════ */
function startTimer(){
  setInterval(()=>{
    state.roundSeconds = state.roundSeconds>0 ? state.roundSeconds-1 : 5*60;
    const m = Math.floor(state.roundSeconds/60);
    const s = String(state.roundSeconds%60).padStart(2,'0');
    document.getElementById('round-timer').textContent = m+':'+s;
  }, 1000);
}
document.getElementById('btn-reset').addEventListener('click', ()=>{
  state.balance = 100000;
  state.pnl = 0;
  state.positions = [];
  state.orders = [];
  state.pending = [];
  state.roundSeconds = 5*60;
  updatePositions();
  renderOrders();
  renderPending();
  toast('Round reset. Balance restored to ₹1,00,000.', 'success');
});

/* ══════════════════════════════════════════════════════════════
   Modals
   ══════════════════════════════════════════════════════════════ */
function openModal(id){
  const m = document.getElementById(id);
  m.classList.add('open');
  m.dataset.wasScrollY = window.scrollY;
  document.body.style.overflow = 'hidden';
  const focusable = m.querySelector('button, [href], input');
  if(focusable) focusable.focus();
}
function closeModal(id){
  document.getElementById(id).classList.remove('open');
  document.body.style.overflow = '';
  if(id==='welcome-modal') localStorage.setItem('pb-welcome-seen', '1');
}
window.openModal = openModal; window.closeModal = closeModal;

/* ══════════════════════════════════════════════════════════════
   Info modal — About / Press / Careers / Contact / Terms / Privacy / Fair Play / Responsible Gaming
   ══════════════════════════════════════════════════════════════ */
const PB_INFO = {
  about: {
    eyebrow: 'About',
    title: 'Built by a Class 12 student. Shipped like it isn\'t.',
    sub: 'PitBull Markets is a free, gamified trading simulator made in India.',
    body: `
      <h3>What this is</h3>
      <p>PitBull Markets is a stock-market simulator built for one thing: <b>letting you learn how markets feel without risking a rupee.</b> Indian stocks (NSE), real-time-style price action, candlestick charts across seven timeframes, virtual ₹1,00,000 balance, tournaments, leaderboards, and a global ranking — all in your browser, no install required.</p>
      <h3>Who built this</h3>
      <p>A Class 12 student from India who got obsessed with figuring out how things work and rebuilding them better. The codebase, the design, the API, the simulation engine — all of it was built solo, in late nights, on a laptop, while juggling exams.</p>
      <h3>What's next</h3>
      <p>More instruments. Friend-only tournaments. A proper option-chain tab. Real anchored data refreshed daily. Better charts. Better polish. The roadmap is public — every commit ships in days, not quarters.</p>
      <p class="small">If you spot something broken or have ideas, email <a href="mailto:cosmiccrumbs.07@gmail.com">cosmiccrumbs.07@gmail.com</a>.</p>
    `,
  },

  press: {
    eyebrow: 'Press kit',
    title: 'For media, collaborators, and conversations.',
    sub: 'Bios, brand info, and contact for press inquiries.',
    body: `
      <h3>Boilerplate</h3>
      <p><b>PitBull Markets</b> is a free, gamified Indian stock-market simulator built by a Class 12 student. It teaches market mechanics through 5-minute tournaments, candlestick charts, and a global leaderboard — with zero real-money risk.</p>
      <h3>Short bio (50 words)</h3>
      <p>Subhransu Nayak is a Class 12 student from India building projects in technology, finance, and design. From trading simulators to portfolio tools, he focuses on clean engineering, honest interfaces, and shipping fast — proving that meaningful products don't need a degree, just curiosity.</p>
      <h3>Long bio (90 words)</h3>
      <p>Subhransu Nayak is a Class 12 student and independent builder based in India. His work spans full-stack web development, fintech experimentation, and product design — with a clear focus on craft, clarity, and real-world usefulness. He's currently building <em>PitBull Markets</em>, a gamified Indian stock-market simulator, alongside a growing portfolio of side projects. When he isn't shipping code, he's reading market history, studying interfaces from Stripe to Apple, and writing about what he learns. He believes the best way to grow is to build in public.</p>
      <h3>Contact</h3>
      <ul>
        <li>Press inquiries: <a href="mailto:sbhrnsnk@gmail.com">sbhrnsnk@gmail.com</a></li>
        <li>Collaborations: <a href="mailto:cosmiccrumbs.07@gmail.com">cosmiccrumbs.07@gmail.com</a></li>
      </ul>
      <p class="small">Brand colors: violet <code>#a855f7</code>, cyan <code>#22d3ee</code>, deep navy <code>#07051a</code>. Wordmark: PitBull Markets · Trade · Compete · Win.</p>
    `,
  },

  careers: {
    eyebrow: 'Careers',
    title: 'Open to collaborations.',
    sub: 'Personal project — no formal hiring page, but plenty of doors are open.',
    body: `
      <p>This is a personal project, not a company — so there's no "We're hiring" page.</p>
      <p>But if you're working on something interesting in <b>tech, finance, design, or product</b>, I'd love to talk. Internships, paid freelance work, open-source collabs, hackathons, or just trading ideas — all welcome.</p>
      <h3>How to reach out</h3>
      <ul>
        <li>Send a short email to <a href="mailto:sbhrnsnk@gmail.com">sbhrnsnk@gmail.com</a></li>
        <li>Tell me what you're building and why I should care</li>
        <li>Skip the corporate intro paragraph — be direct, be specific</li>
      </ul>
      <p class="small">Short emails get faster replies. Most messages answered within 48 hours.</p>
    `,
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Let\'s talk.',
    sub: 'The fastest way to reach me is email.',
    body: `
      <h3>Email</h3>
      <ul>
        <li><b>General:</b> <a href="mailto:sbhrnsnk@gmail.com">sbhrnsnk@gmail.com</a></li>
        <li><b>Collaborations &amp; projects:</b> <a href="mailto:cosmiccrumbs.07@gmail.com">cosmiccrumbs.07@gmail.com</a></li>
      </ul>
      <h3>Response time</h3>
      <p>I read everything. I reply to most things within 48 hours.</p>
      <h3>What helps</h3>
      <p>If you're sending a project idea, a job, or feedback — keep it short, be specific, and tell me why you're reaching out. That's it.</p>
    `,
  },

  legal: {
    eyebrow: 'Legal',
    title: 'Disclaimer.',
    sub: 'Plain-English notice about ownership, liability, and trademarks.',
    body: `
      <p>This website is a personal portfolio and educational simulator created and maintained by Subhransu Nayak. All content, code, and projects shown here are owned by their respective authors and are shared for educational, demonstrative, and non-commercial purposes unless explicitly stated otherwise.</p>
      <p>Information on this site is provided <b>as-is</b>, without warranty of any kind. The owner is not liable for any loss or damage arising from the use of this website or any linked resources.</p>
      <p>Logos, brand names, and trademarks belong to their respective owners and appear here only for identification or reference.</p>
      <p class="small">PitBull Markets is a simulator. No real money is processed, held, or transferred at any point.</p>
    `,
  },

  terms: {
    eyebrow: 'Terms of Use',
    title: 'What you can and can\'t do here.',
    sub: 'By using PitBull Markets, you agree to the following.',
    body: `
      <h3>Your responsibilities</h3>
      <ul>
        <li>You'll use the site for lawful, personal, and non-commercial purposes only.</li>
        <li>You won't copy, redistribute, or resell content or code from this site without written permission.</li>
        <li>You won't attempt to break, exploit, or misuse any part of the site or its underlying services.</li>
        <li>Anything you submit (feedback, messages, etc.) is assumed to be voluntary and non-confidential unless agreed otherwise in writing.</li>
      </ul>
      <h3>Account security</h3>
      <p>You're responsible for keeping your login credentials safe. If you suspect unauthorized access, email <a href="mailto:cosmiccrumbs.07@gmail.com">cosmiccrumbs.07@gmail.com</a> and we'll invalidate your session.</p>
      <h3>Updates</h3>
      <p>These terms may be updated at any time. Continuing to use the site means you accept the latest version.</p>
    `,
  },

  privacy: {
    eyebrow: 'Privacy',
    title: 'Short version: I respect your data.',
    sub: 'No selling. No third-party tracking pixels. Minimal collection.',
    body: `
      <h3>What might be collected</h3>
      <ul>
        <li>Basic, anonymous analytics (page visits, device type, country) to understand what's useful.</li>
        <li>Information you voluntarily share by signing up or emailing me — username, email, hashed password, your simulated trade history.</li>
      </ul>
      <h3>What is never collected</h3>
      <ul>
        <li>Names, phone numbers, or personal details without your explicit input.</li>
        <li>Payment information. The site does not process payments.</li>
        <li>Anything that gets sold, traded, or handed to third parties.</li>
      </ul>
      <h3>Where data lives</h3>
      <p>Account data lives in a SQLite database on a Fly.io server in India/US regions, mounted on a persistent volume. Passwords are stored only as <b>bcrypt hashes</b> — never plaintext. JWT session tokens live in your browser's localStorage and expire after 30 days.</p>
      <h3>Your rights</h3>
      <p>Email <a href="mailto:sbhrnsnk@gmail.com">sbhrnsnk@gmail.com</a> at any time to ask what's stored about you, export it, or have it deleted.</p>
    `,
  },

  fairplay: {
    eyebrow: 'Fair Play',
    title: 'Honesty is the product.',
    sub: 'Built with one rule: don\'t pretend.',
    body: `
      <h3>What this means</h3>
      <ul>
        <li>Numbers shown in projects (P&amp;L, balances, leaderboards) reflect either real data or clearly-marked simulated data — never fake values designed to inflate engagement.</li>
        <li>Where a project simulates a real-world system (markets, trading, finance), it is labeled clearly as a simulation.</li>
        <li>No misleading claims. No staged screenshots. No hidden affiliate manipulations.</li>
      </ul>
      <h3>Tournament integrity</h3>
      <p>Every player in a tournament gets the same starting balance, the same chart replay, and the same execution model. There are no premium "boost" packages, no pay-to-win mechanics, and no hidden advantages.</p>
      <h3>Found something off?</h3>
      <p>Email <a href="mailto:cosmiccrumbs.07@gmail.com">cosmiccrumbs.07@gmail.com</a> — I'd rather fix it than hide it.</p>
    `,
  },

  responsible: {
    eyebrow: 'Responsible Gaming',
    title: 'For learning. Not for losing.',
    sub: 'Important reminders before you trade — even with virtual money.',
    body: `
      <p>PitBull Markets simulates financial markets for <b>educational and entertainment purposes only.</b></p>
      <h3>Please remember</h3>
      <ul>
        <li><b>No real money is involved.</b> Virtual balances, profits, and losses are part of a game.</li>
        <li><b>Past simulated performance is not a predictor of real-world results.</b> Real markets carry real risk.</li>
        <li><b>These tools are for learning, not investing.</b> Do not treat them as financial advice.</li>
        <li>If you trade real money elsewhere, do so only with capital you can afford to lose, and consult a SEBI-registered financial professional.</li>
      </ul>
      <h3>Take a break if it stops being fun</h3>
      <p>If trading or markets are starting to feel stressful or compulsive, step away. India's <b>iCall helpline</b> (<a href="tel:9152987821">9152987821</a>) offers free, confidential mental-health support.</p>
      <p class="small">PitBull Markets has no real-money mode. There is no path inside this app that puts your money at risk.</p>
    `,
  },
};

function openInfoModal(key){
  const data = PB_INFO[key] || PB_INFO.about;
  document.getElementById('info-eyebrow-text').textContent = data.eyebrow;
  document.getElementById('info-title').textContent = data.title;
  document.getElementById('info-sub').textContent = data.sub;
  document.getElementById('info-body').innerHTML = data.body;
  // scroll body to top each open
  const body = document.getElementById('info-body');
  body.scrollTop = 0;
  openModal('info-modal');
}
window.openInfoModal = openInfoModal;

document.querySelectorAll('a[data-info]').forEach(a => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    openInfoModal(a.dataset.info);
  });
});

document.querySelectorAll('[data-close]').forEach(b=>{
  b.addEventListener('click', ()=>closeModal(b.dataset.close));
});
document.querySelectorAll('.modal-overlay').forEach(m=>{
  m.addEventListener('click', e=>{ if(e.target===m) closeModal(m.id); });
});
document.addEventListener('keydown', e=>{
  if(e.key==='Escape'){
    document.querySelectorAll('.modal-overlay.open').forEach(m=>closeModal(m.id));
  }
  // global shortcuts only if no modal open and not typing
  if(document.querySelector('.modal-overlay.open')) return;
  if(['INPUT','TEXTAREA'].includes(document.activeElement?.tagName)) return;
  if(e.key==='b' || e.key==='B'){ setSide('buy'); document.getElementById('ticket-submit').click(); }
  if(e.key==='s' || e.key==='S'){ setSide('sell'); document.getElementById('ticket-submit').click(); }
  if(e.key==='r' || e.key==='R'){ document.getElementById('btn-reset').click(); }
  if(e.key==='c' || e.key==='C'){ closeAllPositions(); }
  if(e.key==='?' ){ openModal('htp-modal'); }
});

/* How-to-play carousel */
let htpIdx = 0;
const htpSlides = document.querySelectorAll('.htp-slide');
const htpDotsEl = document.getElementById('htp-dots');
htpSlides.forEach((_,i)=>{ const d=document.createElement('span'); d.className='d'+(i===0?' active':''); htpDotsEl.appendChild(d); });
function setHtp(i){
  htpIdx = Math.max(0, Math.min(htpSlides.length-1, i));
  htpSlides.forEach((s,k)=>s.classList.toggle('active', k===htpIdx));
  htpDotsEl.querySelectorAll('.d').forEach((d,k)=>d.classList.toggle('active', k===htpIdx));
  document.getElementById('htp-back').disabled = htpIdx===0;
  document.getElementById('htp-back').style.opacity = htpIdx===0 ? 0.4 : 1;
  document.getElementById('htp-next').textContent = htpIdx===htpSlides.length-1 ? 'Start trading →' : 'Next';
}
document.getElementById('htp-back').addEventListener('click', ()=>setHtp(htpIdx-1));
document.getElementById('htp-next').addEventListener('click', ()=>{
  if(htpIdx===htpSlides.length-1){ closeModal('htp-modal'); document.getElementById('arena').scrollIntoView({behavior:'smooth'}); }
  else setHtp(htpIdx+1);
});
setHtp(0);

/* Header buttons */
document.getElementById('btn-signin').addEventListener('click', ()=>openModal('auth-modal'));
document.getElementById('btn-start').addEventListener('click', ()=>{
  document.getElementById('arena').scrollIntoView({behavior:'smooth'});
});
document.getElementById('btn-hero-start').addEventListener('click', ()=>{
  document.getElementById('arena').scrollIntoView({behavior:'smooth'});
});
document.getElementById('btn-hero-how').addEventListener('click', ()=>openModal('htp-modal'));
const _bh2s = document.getElementById('btn-hero2-start');
if(_bh2s) _bh2s.addEventListener('click', ()=>{ document.getElementById('arena').scrollIntoView({behavior:'smooth'}); });
const _bh2h = document.getElementById('btn-hero2-how');
if(_bh2h) _bh2h.addEventListener('click', ()=>openModal('htp-modal'));
document.getElementById('btn-arena-how').addEventListener('click', ()=>openModal('htp-modal'));

document.querySelectorAll('.auth-tabs button').forEach(b=>{
  b.addEventListener('click', ()=>{
    document.querySelectorAll('.auth-tabs button').forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    const isSignup = b.dataset.authtab==='signup';
    document.getElementById('auth-submit').textContent = isSignup ? 'Create account' : 'Log in';
    document.getElementById('auth-handle-field').style.display = isSignup ? '' : 'none';
    document.getElementById('auth-handle').required = isSignup;
    document.getElementById('auth-password').autocomplete = isSignup ? 'new-password' : 'current-password';
    pbAuthError('');
  });
});

function pbAuthError(msg){
  const el = document.getElementById('auth-error');
  if(!el) return;
  if(!msg){ el.style.display='none'; el.textContent=''; }
  else    { el.style.display='';    el.textContent=msg; }
}
async function pbAuthSubmit(ev){
  ev.preventDefault();
  const mode   = document.querySelector('.auth-tabs button.active').dataset.authtab;
  const email  = document.getElementById('auth-email').value.trim();
  const pw     = document.getElementById('auth-password').value;
  const btn    = document.getElementById('auth-submit');
  btn.disabled = true;
  const origTxt = btn.textContent;
  btn.textContent = mode==='signup' ? 'Creating…' : 'Signing in…';
  pbAuthError('');

  if(!PB_LIVE){
    btn.disabled = false; btn.textContent = origTxt;
    pbAuthError('Backend not configured.');
    return false;
  }
  try {
    if(mode === 'signup'){
      const handle = document.getElementById('auth-handle').value.trim();
      if(!/^[a-zA-Z0-9_]{3,24}$/.test(handle)){
        pbAuthError('Username: 3–24 chars, letters/numbers/underscore only.');
        btn.disabled=false; btn.textContent=origTxt; return false;
      }
      const { data, error } = await pbSignUp(email, pw, handle);
      if(error){ pbAuthError(error.message); btn.disabled=false; btn.textContent=origTxt; return false; }
      pbRenderAuthChip();
      refreshTournsFromDB();
      renderLeaders();
      toast(`Welcome, ${handle}!`, 'success');
      closeModal('auth-modal');
    } else {
      const { error } = await pbSignIn(email, pw);
      if(error){ pbAuthError(error.message); btn.disabled=false; btn.textContent=origTxt; return false; }
      pbRenderAuthChip();
      refreshTournsFromDB();
      renderLeaders();
      toast('Signed in · paper account ready', 'success');
      closeModal('auth-modal');
    }
  } catch(e){
    pbAuthError(e.message || 'Unexpected error.');
  } finally {
    btn.disabled = false; btn.textContent = origTxt;
  }
  return false;
}
async function pbForgotPassword(){
  toast('Password reset is coming soon — please contact support.', 'success');
}

/* ══════════════════════════════════════════════════════════════
   Tournaments + Leaderboard mock data
   ══════════════════════════════════════════════════════════════ */
const tourns = [
  {type:'featured', title:'Friday Night Cup',    prize:'1,000 tokens', entry:'Free', players:'312/500', timer:'Starts in 14m', color:'linear-gradient(135deg,#ffd55a,#f97316)'},
  {type:'public',   title:'Crypto Sprint',       prize:'500 tokens',   entry:'10 tokens', players:'48/100', timer:'Live · 3:14 left', color:'linear-gradient(135deg,#22d3ee,#7c3aed)'},
  {type:'public',   title:'Blue Chip Bash',      prize:'250 tokens',   entry:'5 tokens',  players:'17/50',  timer:'Starts in 2m', color:'linear-gradient(135deg,#10e39b,#22d3ee)'},
  {type:'private',  title:'The Goon Squad',      prize:'Bragging rights', entry:'Invite only', players:'5/8', timer:'Starts in 8m', color:'linear-gradient(135deg,#a855f7,#ff4f70)'},
  {type:'public',   title:'FX Face-off',         prize:'200 tokens',   entry:'Free', players:'66/100', timer:'Live · 1:40 left', color:'linear-gradient(135deg,#ffd55a,#ff4f70)'},
  {type:'public',   title:'Rookie Rumble',       prize:'150 tokens',   entry:'Free', players:'91/200', timer:'Starts in 22m', color:'linear-gradient(135deg,#22d3ee,#10e39b)'},
];
function tournTimerText(t){
  const now = Date.now();
  const starts = t.starts_at ? new Date(t.starts_at).getTime() : now;
  if(t.status==='live')  return 'Live';
  if(t.status==='ended') return 'Ended';
  const diffMs = starts - now;
  if(diffMs <= 0) return 'Starting';
  const mins = Math.round(diffMs/60000);
  if(mins < 60) return `Starts in ${mins}m`;
  const hrs = Math.round(mins/60);
  if(hrs < 48)  return `Starts in ${hrs}h`;
  return `Starts ${new Date(starts).toLocaleDateString()}`;
}
function renderTournsFromRows(rows){
  const colors = ['linear-gradient(135deg,#22d3ee,#7c3aed)','linear-gradient(135deg,#10e39b,#22d3ee)','linear-gradient(135deg,#ffd55a,#f97316)','linear-gradient(135deg,#a855f7,#ff4f70)'];
  const grid = document.getElementById('tourn-grid');
  if(!grid) return;
  grid.innerHTML = rows.map((t,idx)=>{
    const type  = t.mode || 'public';
    const prize = t.prize_pool_usd ? '₹' + Number(t.prize_pool_usd).toLocaleString('en-IN') : 'Bragging rights';
    const entry = t.entry_tokens > 0 ? `${t.entry_tokens} tokens` : 'Free';
    const players = `${t.player_count ?? 0}/${t.max_players ?? 100}`;
    const blurb = type==='private' ? 'A private room among invited friends.'
                : type==='solo'    ? 'Practice solo — same replay, same rules.'
                :                    'Open to everyone. Fair replay, same start balance.';
    const joinId = t.id || ('mock-'+idx);
    const joinLabel = t.mode==='private' ? 'Request invite' : (t.status==='ended' ? 'Ended' : 'Join →');
    const disabled = t.status==='ended' ? 'disabled' : '';
    return `
    <article class="tourn">
      <div class="tourn-head">
        <span class="tourn-type ${type}">${type}</span>
        <div style="color:var(--t3);font-size:11px;font-family:var(--mono);">${tournTimerText(t)}</div>
      </div>
      <div>
        <h3>${t.name || t.title}</h3>
        <p>${blurb}</p>
      </div>
      <div class="tourn-stats">
        <div class="t-s"><b>${prize}</b><small>Prize</small></div>
        <div class="t-s"><b>${entry}</b><small>Entry</small></div>
        <div class="t-s"><b>${players}</b><small>Players</small></div>
      </div>
      <div class="tourn-foot">
        <div class="tourn-avatars">${[0,1,2,3].map(i=>`<span style="background:${['#22d3ee','#a855f7','#10e39b','#ffd55a'][i]};">${'UMTF'[i]}</span>`).join('')}</div>
        <button class="btn btn-primary" type="button" onclick="joinTourn('${joinId}','${(t.name||t.title||'').replace(/'/g,'')}')" ${disabled}>${joinLabel}</button>
      </div>
    </article>`;
  }).join('');
}
function renderTourns(){
  // Default (demo / fallback) render from mock array
  renderTournsFromRows(tourns.map(t => ({
    id: 'mock-'+t.title.replace(/\s/g,'-'),
    name: t.title,
    mode: t.type==='featured' ? 'public' : t.type,
    prize_pool_usd: null, // show original prize string via override below
    entry_tokens: t.entry==='Free' ? 0 : parseInt(t.entry, 10) || 0,
    max_players: parseInt((t.players.split('/')[1]||'100'), 10),
    player_count: parseInt(t.players.split('/')[0], 10) || 0,
    status: t.timer.startsWith('Live') ? 'live' : 'upcoming',
    starts_at: null,
    _demoPrize: t.prize,
    _demoTimer: t.timer,
  })));
  // Patch prize labels for demo (prize_pool_usd is null)
  document.querySelectorAll('#tourn-grid article').forEach((card, i) => {
    const src = tourns[i]; if(!src) return;
    const prizeCell = card.querySelector('.tourn-stats .t-s:first-child b');
    if(prizeCell) prizeCell.textContent = src.prize;
    const timerCell = card.querySelector('.tourn-head div:last-child');
    if(timerCell) timerCell.textContent = src.timer;
  });
}
async function refreshTournsFromDB(){
  if(!PB_LIVE){ renderTourns(); return; }
  const rows = await pbFetchTournaments();
  if(rows && rows.length){ renderTournsFromRows(rows); }
  else                   { renderTourns(); }
}
window.joinTourn = async (id, name)=>{
  if(PB_LIVE){
    if(!pb.user){
      openModal('auth-modal');
      toast(`Sign in to join "${name}"`, 'success');
      return;
    }
    const { error } = await pbJoinTournament(id);
    if(error){
      if((error.code||'') === '23505' || (error.message||'').toLowerCase().includes('duplicate')){
        toast(`Already joined "${name}"`, 'success');
      } else {
        toast(error.message || 'Join failed', 'error');
      }
    } else {
      toast(`Joined "${name}"`, 'success');
      refreshTournsFromDB();
    }
    return;
  }
  // Demo-mode fallback
  if(!localStorage.getItem('pb-signed-in')){
    openModal('auth-modal');
    toast('Sign in to join "' + name + '"', 'success');
  } else {
    toast('Joined "' + name + '"', 'success');
  }
};
renderTourns();
refreshTournsFromDB();

const leaders = [
  {name:'ch0pS_tacticks', pnl:+48213.22, wr:72, tr:418, streak:'W12', color:'#ffd55a'},
  {name:'midnight_macro',  pnl:+44018.90, wr:68, tr:392, streak:'W8',  color:'#22d3ee'},
  {name:'scalp_lord',      pnl:+38925.14, wr:64, tr:511, streak:'W5',  color:'#a855f7'},
  {name:'gingerbread_fx',  pnl:+31421.50, wr:66, tr:287, streak:'W3',  color:'#10e39b'},
  {name:'yolo_yasmin',     pnl:+29870.10, wr:59, tr:604, streak:'L2',  color:'#ff4f70'},
  {name:'senseieight',     pnl:+24510.77, wr:63, tr:311, streak:'W7',  color:'#ffcb3a'},
  {name:'0xvelvet',        pnl:+22108.40, wr:58, tr:244, streak:'W4',  color:'#7c3aed'},
  {name:'quant_nomad',     pnl:+19840.08, wr:61, tr:175, streak:'W2',  color:'#22d3ee'},
  {name:'frost_bull',      pnl:+17012.63, wr:55, tr:421, streak:'W1',  color:'#10e39b'},
  {name:'daybreak_dani',   pnl:+15221.34, wr:53, tr:289, streak:'L1',  color:'#a855f7'},
];
function renderLeaderRows(rows){
  document.getElementById('lb-body').innerHTML = rows.map((p,i)=>{
    const rankCls = i===0?'r1':i===1?'r2':i===2?'r3':'rx';
    const color = p.color || p.avatar_color || '#7c3aed';
    const name  = p.name  || p.handle || p.display_name || 'player';
    const pnl   = Number(p.pnl ?? p.total_pnl ?? 0);
    const wr    = p.wr    ?? Math.min(99, Math.max(0, Math.round(50 + (pnl/10000))));
    const tr    = p.tr    ?? p.trade_count ?? 0;
    const streak= p.streak ?? (pnl>=0 ? `W${Math.min(9,Math.floor(pnl/5000)+1)}` : `L${Math.min(5,Math.ceil(-pnl/5000))}`);
    return `<tr>
      <td><span class="lb-rank ${rankCls}">${i+1}</span></td>
      <td><span class="lb-name"><span class="av" style="background:${color}">${name.slice(0,2).toUpperCase()}</span>${name}</span></td>
      <td class="lb-pnl ${pnl>=0?'up':'down'}">${pnl>=0?'+':''}${fmtUSD(pnl)}</td>
      <td>${wr}%</td>
      <td class="lb-trades">${tr}</td>
      <td style="color:${String(streak).startsWith('W')?'var(--g1)':'var(--r1)'};">${streak}</td>
    </tr>`;
  }).join('');
}
async function renderLeaders(){
  if(PB_LIVE){
    const rows = await pbFetchLeaderboard(25);
    if(rows && rows.length){ renderLeaderRows(rows); return; }
  }
  renderLeaderRows(leaders);
}
renderLeaders();

/* Live counters are driven by /api/stats (pbRefreshStats) — no fake jitter. */

/* Year */
document.getElementById('year').textContent = new Date().getFullYear();

/* ══════════════════════════════════════════════════════════════
   Phase 5/6/7: Portfolio · XP · Achievements · Daily challenge · AI · News · Crash
   ══════════════════════════════════════════════════════════════ */

/* ── Equity tracking ─────────────────────────────────────────── */
const equityHistory = [];      // {t, equity}
const STARTING_EQUITY = 100000;
const EQUITY_MAX_POINTS = 240;

function pushEquitySample(){
  const equity = state.balance + state.pnl;
  equityHistory.push({t: Date.now(), equity});
  if(equityHistory.length > EQUITY_MAX_POINTS) equityHistory.shift();
  drawEquitySpark();
  renderPortfolioStats();
}

function drawEquitySpark(){
  const c = document.getElementById('equity-spark');
  if(!c) return;
  const dpr = window.devicePixelRatio || 1;
  const cssW = c.clientWidth || 600;
  const cssH = 120;
  if(c.width !== cssW*dpr || c.height !== cssH*dpr){
    c.width = cssW*dpr; c.height = cssH*dpr;
  }
  const ctx = c.getContext('2d');
  ctx.setTransform(dpr,0,0,dpr,0,0);
  ctx.clearRect(0,0,cssW,cssH);
  if(equityHistory.length < 2){
    ctx.fillStyle = 'rgba(255,255,255,0.18)';
    ctx.font = '11px ui-sans-serif, system-ui';
    ctx.fillText('Equity history will draw here once you start trading…', 12, cssH/2);
    return;
  }
  const eqs = equityHistory.map(p=>p.equity);
  const min = Math.min(STARTING_EQUITY, ...eqs);
  const max = Math.max(STARTING_EQUITY, ...eqs);
  const range = (max-min) || 1;
  const padX = 8, padY = 12;
  const W = cssW - padX*2, H = cssH - padY*2;
  // baseline (starting equity)
  const baselineY = padY + H - ((STARTING_EQUITY - min)/range) * H;
  ctx.strokeStyle = 'rgba(255,255,255,0.10)';
  ctx.setLineDash([3,4]);
  ctx.beginPath(); ctx.moveTo(padX, baselineY); ctx.lineTo(padX+W, baselineY); ctx.stroke();
  ctx.setLineDash([]);
  // line + fill
  const lastEq = eqs[eqs.length-1];
  const up = lastEq >= STARTING_EQUITY;
  const stroke = up ? '#10e39b' : '#ff4f70';
  const fill1  = up ? 'rgba(16,227,155,0.28)' : 'rgba(255,79,112,0.28)';
  const fill2  = 'rgba(0,0,0,0)';
  ctx.beginPath();
  eqs.forEach((y, i) => {
    const px = padX + (i/(eqs.length-1)) * W;
    const py = padY + H - ((y-min)/range) * H;
    if(i===0) ctx.moveTo(px,py); else ctx.lineTo(px,py);
  });
  ctx.lineTo(padX+W, padY+H);
  ctx.lineTo(padX, padY+H);
  ctx.closePath();
  const grad = ctx.createLinearGradient(0, padY, 0, padY+H);
  grad.addColorStop(0, fill1); grad.addColorStop(1, fill2);
  ctx.fillStyle = grad; ctx.fill();
  // line
  ctx.beginPath();
  eqs.forEach((y, i) => {
    const px = padX + (i/(eqs.length-1)) * W;
    const py = padY + H - ((y-min)/range) * H;
    if(i===0) ctx.moveTo(px,py); else ctx.lineTo(px,py);
  });
  ctx.lineWidth = 2; ctx.strokeStyle = stroke; ctx.stroke();
  // last dot
  const lastX = padX + W;
  const lastY = padY + H - ((lastEq-min)/range) * H;
  ctx.beginPath(); ctx.arc(lastX,lastY,3.5,0,Math.PI*2);
  ctx.fillStyle = stroke; ctx.fill();
}

function renderPortfolioStats(){
  const equity = state.balance + state.pnl;
  const dailyPnL = equity - STARTING_EQUITY;
  const dailyPct = (dailyPnL / STARTING_EQUITY) * 100;
  const set = (id,val) => { const el = document.getElementById(id); if(el) el.textContent = val; };
  set('pec-equity', fmtINR(equity));
  set('pec-pnl', (dailyPnL>=0?'+':'') + fmtINR(dailyPnL));
  set('pec-pnl-pct', (dailyPct>=0?'+':'') + dailyPct.toFixed(2) + '%');
  // Update sticky mobile balance pill in header — round integer for compactness
  try {
    const intStr = fmtINR(Math.round(equity)).replace(/\.\d+$/, '');
    set('mob-balance-amount', intStr);
  } catch { set('mob-balance-amount', fmtINR(equity)); }
  set('pec-samples', equityHistory.length);
  const pill = document.getElementById('pec-pnl-pill');
  if(pill){
    pill.classList.toggle('profit', dailyPnL > 0.5);
    pill.classList.toggle('loss', dailyPnL < -0.5);
  }
  // Trade-based stats
  const orders = state.orders;
  const wins = orders.filter(o=>o.pnl>=0).length;
  const losses = orders.length - wins;
  const winRate = orders.length ? Math.round((wins/orders.length)*100) + '%' : '—';
  let best = null, worst = null;
  orders.forEach(o => {
    if(best === null || o.pnl > best) best = o.pnl;
    if(worst === null || o.pnl < worst) worst = o.pnl;
  });
  set('ps-trades', orders.length);
  set('ps-winrate', winRate);
  set('ps-wins', wins);
  set('ps-losses', losses);
  set('ps-best', best===null ? '—' : fmtINR(best));
  set('ps-worst', worst===null ? '—' : fmtINR(worst));
  // Anchor info
  const anchor = document.getElementById('pec-anchor');
  if(anchor) anchor.textContent = pbState.anchorDate || new Date().toLocaleDateString('en-IN',{day:'2-digit',month:'short'});
  // Trade history table
  const ph = document.getElementById('ph-body');
  const phc = document.getElementById('ph-count');
  if(phc) phc.textContent = orders.length + ' trades';
  if(ph){
    if(!orders.length){
      ph.innerHTML = `<tr><td class="empty" colspan="7">Your closed trades will appear here.</td></tr>`;
    } else {
      ph.innerHTML = orders.map(o=>{
        const c = cur(o.sym);
        return `<tr>
          <td><small style="font-family:var(--mono);">${o.at}</small></td>
          <td><b>${o.sym}</b></td>
          <td class="pos-${o.side}">${o.side==='buy'?'BUY':'SELL'}</td>
          <td>${fmtUSD(o.size)}</td>
          <td>${c}${fmt(o.entry)}</td>
          <td>${c}${fmt(o.exit)}</td>
          <td class="pos-pnl ${o.pnl>=0?'up':'down'}">${o.pnl>=0?'+':''}${fmtUSD(o.pnl)}</td>
        </tr>`;
      }).join('');
    }
  }
}

/* ── XP / Level / Achievements / Daily challenge ─────────────── */
const XP_KEY = 'pb-game-state';
const ACHIEVEMENTS = [
  { id:'first_trade',  icon:'🎯', name:'First trade',     test: g => g.totalTrades >= 1 },
  { id:'win_streak3',  icon:'🔥', name:'3-streak',         test: g => g.bestStreak >= 3 },
  { id:'profit_10k',   icon:'💰', name:'₹10K profit',      test: g => g.bestSession >= 10000 },
  { id:'volume_100k',  icon:'📊', name:'₹1L volume',       test: g => g.totalVolume >= 100000 },
  { id:'level5',       icon:'⭐', name:'Level 5',          test: g => g.level >= 5 },
  { id:'level10',      icon:'👑', name:'Level 10',         test: g => g.level >= 10 },
  { id:'twenty_wins',  icon:'🏆', name:'20 wins',          test: g => g.totalWins >= 20 },
  { id:'comeback',     icon:'⚡', name:'Comeback (recover from -₹5K)', test: g => g.didComeback },
];
const RANKS = [
  {min:0,    title:'Rookie Trader'},
  {min:100,  title:'Apprentice'},
  {min:300,  title:'Day Trader'},
  {min:700,  title:'Swing Pro'},
  {min:1500, title:'Quant'},
  {min:3000, title:'Market Maker'},
  {min:6000, title:'Whale'},
  {min:12000,title:'Legend'},
];
function rankFor(xp){
  let r = RANKS[0];
  for(const x of RANKS){ if(xp >= x.min) r = x; }
  return r;
}
function xpForLevel(lvl){ return Math.round(100 * Math.pow(lvl, 1.4)); } // L1=100, L2=264, L3=465, …
function gameLoad(){
  try {
    const raw = localStorage.getItem(XP_KEY);
    if(raw) return Object.assign(gameDefault(), JSON.parse(raw));
  } catch(_){}
  return gameDefault();
}
function gameDefault(){
  return {
    xp: 0, level: 1, totalTrades: 0, totalWins: 0, totalVolume: 0,
    bestStreak: 0, currentStreak: 0, bestSession: 0, didComeback: false,
    minSession: 0, achievements: [],
    dailyId: dailyChallengeId(), dailyProgress: 0, dailyDoneOn: null,
  };
}
function gameSave(){ try { localStorage.setItem(XP_KEY, JSON.stringify(pbGame)); } catch(_){} }

const DAILY_CHALLENGES = [
  { id:'profit_500',  text:'Lock in ₹500 in profit today',     target:500,  unit:'inr', kind:'profit', reward:50 },
  { id:'profit_2k',   text:'Make ₹2,000 in realised P&L',      target:2000, unit:'inr', kind:'profit', reward:100 },
  { id:'trades_5',    text:'Close 5 trades today',             target:5,    unit:'count', kind:'trades', reward:60 },
  { id:'win_3',       text:'Win 3 trades in a row',            target:3,    unit:'count', kind:'streak', reward:80 },
  { id:'volume_50k',  text:'Trade ₹50,000 in total volume',    target:50000,unit:'inr', kind:'volume',  reward:75 },
];
function dailyChallengeId(){
  // Deterministic per-day pick
  const d = new Date();
  const seed = parseInt(d.getFullYear() + '' + (d.getMonth()+1).toString().padStart(2,'0') + d.getDate().toString().padStart(2,'0'), 10);
  return DAILY_CHALLENGES[seed % DAILY_CHALLENGES.length].id;
}
function getDailyChallenge(){
  return DAILY_CHALLENGES.find(d => d.id === pbGame.dailyId) || DAILY_CHALLENGES[0];
}

let pbGame = gameLoad();

function pbAddXP_real(amount, reason){
  pbGame.xp += amount;
  // Level-up loop
  while(pbGame.xp >= xpForLevel(pbGame.level)){
    pbGame.xp -= xpForLevel(pbGame.level);
    pbGame.level += 1;
    showXPToast(`Level ${pbGame.level} unlocked!`, true);
    pbBeep('win');
  }
  showXPToast(`+${amount} XP · ${reason}`);
  renderGameUI();
  gameSave();
  checkAchievements();
}
pbAddXP = pbAddXP_real; // override the stub from earlier

function showXPToast(text, big=false){
  const el = document.createElement('div');
  el.className = 'xp-toast';
  if(big) el.style.fontSize = '15px';
  el.textContent = text;
  document.body.appendChild(el);
  setTimeout(()=>el.remove(), 2400);
}

function recordClosedTrade(order){
  pbGame.totalTrades += 1;
  pbGame.totalVolume += order.size;
  if(order.pnl >= 0){
    pbGame.totalWins += 1;
    pbGame.currentStreak += 1;
    if(pbGame.currentStreak > pbGame.bestStreak) pbGame.bestStreak = pbGame.currentStreak;
  } else {
    pbGame.currentStreak = 0;
  }
  // Best/worst session-equity tracking
  const equity = state.balance + state.pnl;
  const sessionPnL = equity - STARTING_EQUITY;
  if(sessionPnL > pbGame.bestSession) pbGame.bestSession = sessionPnL;
  if(sessionPnL < pbGame.minSession) pbGame.minSession = sessionPnL;
  if(pbGame.minSession <= -5000 && sessionPnL >= 0) pbGame.didComeback = true;

  // Daily challenge progress
  const dc = getDailyChallenge();
  if(pbGame.dailyDoneOn !== todayKey()){
    if(dc.kind === 'profit'){
      const realised = state.orders.reduce((a,o)=>a+o.pnl, 0);
      pbGame.dailyProgress = Math.max(0, realised);
    } else if(dc.kind === 'trades'){
      pbGame.dailyProgress = pbGame.totalTrades;
    } else if(dc.kind === 'streak'){
      pbGame.dailyProgress = pbGame.currentStreak;
    } else if(dc.kind === 'volume'){
      pbGame.dailyProgress = pbGame.totalVolume;
    }
    if(pbGame.dailyProgress >= dc.target){
      pbGame.dailyDoneOn = todayKey();
      pbAddXP(dc.reward, 'Daily challenge complete!');
      toast(`🎯 Daily challenge done · +${dc.reward} XP`, 'success');
    }
  }

  // XP for the trade
  const baseXp = 8;
  const bonusXp = order.pnl > 0 ? Math.min(50, Math.round(order.pnl/200)) : 0;
  pbAddXP(baseXp + bonusXp, order.pnl >= 0 ? 'Profitable close' : 'Closed trade');
  gameSave();
  // Refresh dashboard immediately
  if(typeof renderPortfolioStats === 'function') renderPortfolioStats();
  if(typeof pushEquitySample === 'function') pushEquitySample();
}

function todayKey(){
  const d = new Date();
  return d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
}

function checkAchievements(){
  let unlocked = false;
  ACHIEVEMENTS.forEach(a => {
    if(!pbGame.achievements.includes(a.id) && a.test(pbGame)){
      pbGame.achievements.push(a.id);
      unlocked = true;
      toast(`🏅 Achievement unlocked: ${a.name}`, 'success');
      pbBeep('win');
      pbAddXP(40, `Unlocked "${a.name}"`);
    }
  });
  if(unlocked){ gameSave(); renderAchievements(); }
}

function renderGameUI(){
  const set = (id,v) => { const el = document.getElementById(id); if(el) el.textContent = v; };
  set('xp-level', pbGame.level);
  set('xp-cur', pbGame.xp);
  set('xp-max', xpForLevel(pbGame.level));
  set('xp-title', rankFor((pbGame.level-1)*200 + pbGame.xp).title);
  const fill = document.getElementById('xp-fill');
  if(fill){
    const pct = Math.min(100, (pbGame.xp / xpForLevel(pbGame.level)) * 100);
    fill.style.width = pct + '%';
  }
  // Daily challenge
  const dc = getDailyChallenge();
  const dt = document.getElementById('dc-text');
  const dr = document.getElementById('dc-reward');
  const df = document.getElementById('dc-fill');
  const dm = document.getElementById('dc-meta');
  const card = document.querySelector('.challenge-card');
  if(dt) dt.textContent = dc.text;
  if(dr) dr.textContent = '+' + dc.reward + ' XP';
  const done = pbGame.dailyDoneOn === todayKey();
  let prog = pbGame.dailyProgress || 0;
  // Recompute live progress from current state (cheap)
  if(dc.kind === 'profit')      prog = Math.max(0, state.orders.reduce((a,o)=>a+o.pnl, 0));
  else if(dc.kind === 'trades') prog = pbGame.totalTrades;
  else if(dc.kind === 'streak') prog = pbGame.currentStreak;
  else if(dc.kind === 'volume') prog = pbGame.totalVolume;
  const pct = Math.min(100, (prog/dc.target)*100);
  if(df) df.style.width = pct + '%';
  if(dm){
    if(dc.unit === 'inr') dm.textContent = `${fmtINR(prog)} / ${fmtINR(dc.target)}`;
    else                  dm.textContent = `${prog} / ${dc.target}`;
  }
  if(card) card.classList.toggle('dc-done', done);
  // Achievements
  renderAchievements();
}

function renderAchievements(){
  const grid = document.getElementById('ach-grid');
  const cnt  = document.getElementById('ach-count');
  if(!grid) return;
  grid.innerHTML = ACHIEVEMENTS.map(a => {
    const got = pbGame.achievements.includes(a.id);
    return `<div class="ach ${got?'unlocked':''}" title="${a.name}">
      <span class="ach-icon">${a.icon}</span>
      <span class="ach-name">${a.name}</span>
    </div>`;
  }).join('');
  if(cnt) cnt.textContent = pbGame.achievements.length + '/' + ACHIEVEMENTS.length;
}

/* ── AI traders ──────────────────────────────────────────────── */
const AI_BOTS = [
  {name:'AlphaBot',   style:'aggressive', avg: 0,   trades: 0, wins: 0},
  {name:'NiftyNinja', style:'momentum',   avg: 0,   trades: 0, wins: 0},
  {name:'BetaBeast',  style:'meanrev',    avg: 0,   trades: 0, wins: 0},
  {name:'RupeeRover', style:'scalper',    avg: 0,   trades: 0, wins: 0},
  {name:'SwingShark', style:'swing',      avg: 0,   trades: 0, wins: 0},
];
function tickBots(){
  AI_BOTS.forEach(b => {
    // Style-driven random PnL with bias
    let bias = 0;
    if(b.style==='aggressive') bias = (Math.random()-0.46) * 220;
    if(b.style==='momentum')   bias = (Math.random()-0.45) * 160;
    if(b.style==='meanrev')    bias = (Math.random()-0.5)  * 110;
    if(b.style==='scalper')    bias = (Math.random()-0.49) * 60;
    if(b.style==='swing')      bias = (Math.random()-0.47) * 200;
    if(pbState.crashUntil && Date.now() < pbState.crashUntil){
      bias *= 2.4 - Math.random();
    }
    b.avg += bias;
    b.trades += Math.random() < 0.6 ? 1 : 0;
    if(bias > 0) b.wins += Math.random() < 0.55 ? 1 : 0;
  });
  renderBots();
}
function renderBots(){
  const list = document.getElementById('bots-list');
  if(!list) return;
  // Insert player synthetic row
  const equity = state.balance + state.pnl;
  const playerPnL = equity - STARTING_EQUITY;
  const all = [
    ...AI_BOTS.map(b => ({name:b.name, sub:b.style, pnl:b.avg, trades:b.trades, isYou:false})),
    {name:'You', sub:'live', pnl:playerPnL, trades:state.orders.length, isYou:true}
  ];
  all.sort((a,b)=>b.pnl-a.pnl);
  list.innerHTML = all.map((b,i)=>{
    const goldClass = i === 0 ? 'gold' : '';
    const sign = b.pnl >= 0 ? '+' : '';
    const cls  = b.pnl >= 0 ? 'up' : 'down';
    const youStyle = b.isYou ? 'background:rgba(124,58,237,0.16);border-color:rgba(124,58,237,0.5);' : '';
    return `<div class="bot-row" style="${youStyle}">
      <span class="bot-rank ${goldClass}">#${i+1}</span>
      <span class="bot-name">${b.isYou?'<b>You</b>':b.name}<small>${b.sub}</small></span>
      <span class="bot-pnl ${cls}">${sign}${fmtINR(b.pnl)}</span>
      <span class="bot-trades">${b.trades}t</span>
    </div>`;
  }).join('');
}

/* ── News feed ──────────────────────────────────────────────── */
const NEWS_TEMPLATES = [
  { sym:'RELIANCE',  bull:true,  head:'Reliance reports record quarterly revenue', body:'JIO subscriber base hits new high; retail margins expand.' },
  { sym:'RELIANCE',  bull:false, head:'Reliance hit by oil-import duty hike',       body:'Refining margin compression flagged by analysts.' },
  { sym:'TCS',       bull:true,  head:'TCS bags ₹15,000Cr deal with European bank', body:'5-year multi-cloud transformation contract.' },
  { sym:'TCS',       bull:false, head:'TCS warns on Q4 IT-spend slowdown',          body:'Discretionary deals delayed in BFSI vertical.' },
  { sym:'INFY',      bull:true,  head:'Infosys lifts FY guidance',                  body:'Cost optimisation deals win share from rivals.' },
  { sym:'INFY',      bull:false, head:'Infosys: senior leadership exits',           body:'Three EVPs depart; succession concerns.' },
  { sym:'HDFCBANK',  bull:true,  head:'HDFC Bank loan growth beats estimates',      body:'Credit cards + retail mortgages strong.' },
  { sym:'HDFCBANK',  bull:false, head:'HDFC Bank: NIM contraction larger than expected', body:'Deposit cost pressure persists.' },
  { sym:'NIFTY',     bull:true,  head:'RBI holds rates; cuts inflation forecast',   body:'Liquidity additions boost rate-sensitive sectors.' },
  { sym:'NIFTY',     bull:false, head:'FII outflow accelerates on rupee weakness',  body:'Profit-taking ahead of US Fed decision.' },
  { sym:'ITC',       bull:true,  head:'ITC FMCG margins expand on input cost ease', body:'Cigarettes volume growth steady.' },
  { sym:'TATASTEEL', bull:false, head:'Steel prices fall on China demand worries',  body:'Tata Steel may guide softer realisations.' },
  { sym:'BTCUSD',    bull:true,  head:'BTC ETF sees record inflow',                 body:'Institutional demand resumes; supply tight.' },
  { sym:'BTCUSD',    bull:false, head:'BTC: regulatory uncertainty in Asia',        body:'Hong Kong delays ETF approvals.' },
];
function fireNewsEvent(){
  const ev = NEWS_TEMPLATES[Math.floor(Math.random()*NEWS_TEMPLATES.length)];
  const inst = state.instruments.find(i=>i.sym === ev.sym);
  if(inst){
    // Move price 0.6%–2.5%
    const delta = (0.006 + Math.random()*0.019) * (ev.bull ? 1 : -1);
    inst.price = Math.max(0.0001, inst.price * (1 + delta));
    if(state.activeSym === inst.sym) updatePriceHeader();
  }
  pbState.newsEvents.unshift({...ev, t: Date.now()});
  if(pbState.newsEvents.length > 30) pbState.newsEvents.pop();
  renderNews();
}
function renderNews(){
  const list = document.getElementById('news-list');
  const cnt = document.getElementById('news-count');
  if(!list) return;
  if(cnt) cnt.textContent = pbState.newsEvents.length + ' events';
  if(!pbState.newsEvents.length){
    list.innerHTML = `<div class="news-empty">News events will appear here as the simulated market moves.</div>`;
    return;
  }
  list.innerHTML = pbState.newsEvents.slice(0,10).map(n=>{
    const ago = Math.floor((Date.now()-n.t)/1000);
    const agoStr = ago < 60 ? ago+'s ago' : Math.floor(ago/60)+'m ago';
    return `<div class="news-item ${n.bull?'bull':'bear'}">
      <div class="nh">${n.bull?'▲':'▼'} ${n.sym}: ${n.head}</div>
      <div>${n.body}</div>
      <div class="nm">${agoStr}</div>
    </div>`;
  }).join('');
}

/* ── Crash mode ─────────────────────────────────────────────── */
function triggerCrash(){
  pbState.crashUntil = Date.now() + 30*1000;
  const pill = document.getElementById('mode-pill');
  if(pill){ pill.textContent = '⚡ CRASH'; pill.classList.add('crash'); }
  toast('⚡ Crash mode engaged · 30s of extreme volatility', 'error');
  pbBeep('loss');
  // Hard down-shock to all symbols
  state.instruments.forEach(i => {
    const shock = (Math.random()*0.04 + 0.02) * (Math.random() < 0.85 ? -1 : 1);
    i.price = Math.max(0.0001, i.price * (1 + shock));
  });
  if(arenaData) regenerateArenaData();
  setTimeout(() => {
    pbState.crashUntil = 0;
    if(pill){ pill.textContent = 'Normal'; pill.classList.remove('crash'); }
    toast('Crash mode ended', 'success');
  }, 30*1000);
}

/* ── Simulation orchestrator ─────────────────────────────────── */
const pbState = {
  newsEvents: [],
  crashUntil: 0,
  anchorDate: new Date().toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'}),
};

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn-crash');
  if(btn) btn.addEventListener('click', triggerCrash);
});

/* recordClosedTrade is invoked directly from closePosition / closeAllPositions
   in the original handlers above (typeof check makes it safe at boot time). */

/* ── Anchored simulation: pull real opening prices from backend (graceful fallback) ─ */
async function pbFetchAnchors(){
  try {
    const r = await fetch(PB_API_BASE + '/api/anchors');
    if(!r.ok) return;
    const data = await r.json();
    if(data && data.prices && typeof data.prices === 'object'){
      let changed = 0;
      state.instruments.forEach(i => {
        if(data.prices[i.sym] && data.prices[i.sym] > 0){
          i.price = data.prices[i.sym];
          changed++;
        }
      });
      if(data.date) pbState.anchorDate = data.date;
      if(changed){
        const inst = state.instruments.find(i=>i.sym===state.activeSym);
        if(inst) regenerateArenaData();
        renderTicker();
        renderList(document.querySelector('.list-tab.active')?.dataset.cat || 'in', '');
      }
    }
  } catch(_){ /* offline fallback */ }
}

/* Start periodic timers AFTER chart init below */

/* ══════════════════════════════════════════════════════════════
   Init
   ══════════════════════════════════════════════════════════════ */
initHeroChart();
initArenaChart();
renderList('in','');
startTimer();
renderOrders();
renderHoldings();
renderBalancePane();
updateDepth(true);
// Refresh depth at a visible cadence even when no tick has happened yet
setInterval(()=>{ if(document.querySelector('.term-pane.active')?.dataset.pane==='depth') updateDepth(); }, 1500);

/* Phase 5/6/7 — first render + recurring timers */
renderGameUI();
renderPortfolioStats();
drawEquitySpark();
renderBots();
renderNews();
window.addEventListener('resize', () => drawEquitySpark());
// Equity sample every 3s (gives us a smooth sparkline without spamming)
setInterval(pushEquitySample, 3000);
// AI bots tick every 4s
setInterval(tickBots, 4000);
// Random news every 18-32s
function scheduleNews(){
  const delay = 18000 + Math.random()*14000;
  setTimeout(() => {
    fireNewsEvent();
    if(Math.random() < 0.06) triggerCrash(); // 6% chance of crash on a news event
    scheduleNews();
  }, delay);
}
scheduleNews();
// Refresh news "X ago" labels every 15s
setInterval(renderNews, 15000);
// Pull anchor prices once at boot, then daily
pbFetchAnchors();
setInterval(pbFetchAnchors, 6 * 60 * 60 * 1000);

/* ══════════════════════════════════════════════════════════════
   Mobile UX overhaul (bottom nav, FAB, PTR, swipe, haptic, 100vh)
   ══════════════════════════════════════════════════════════════ */
(function initMobileUX(){
  const isMobile = () => window.innerWidth < 720 || ('ontouchstart' in window);

  /* 100vh bug fix: --vh = real viewport height / 100 */
  function setVh(){
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
  }
  setVh();
  window.addEventListener('resize', setVh);
  window.addEventListener('orientationchange', () => setTimeout(setVh, 60));

  /* Haptic feedback helper */
  function haptic(ms){
    try { if(navigator.vibrate) navigator.vibrate(ms || 12); } catch {}
  }
  window.pbHaptic = haptic;

  /* Material-style ripple on any .ripple element */
  function spawnRipple(host, e){
    const rect = host.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
    const r = document.createElement('span');
    r.className = 'rip';
    r.style.width = r.style.height = size + 'px';
    r.style.left = (x - size/2) + 'px';
    r.style.top  = (y - size/2) + 'px';
    host.appendChild(r);
    setTimeout(() => r.remove(), 600);
  }
  document.addEventListener('pointerdown', (e) => {
    const host = e.target.closest && e.target.closest('.ripple');
    if(!host) return;
    spawnRipple(host, e);
  }, { passive: true });

  /* Bottom nav: tap → scroll to section + subtle fade transition + active state */
  const navBtns = document.querySelectorAll('.mob-nav-btn');
  const mainContent = document.querySelector('main') || document.body;
  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tgt = btn.dataset.mobTarget;
      const el = document.getElementById(tgt);
      navBtns.forEach(b => b.classList.toggle('active', b === btn));
      haptic(8);
      // brief fade for page-transition feel
      try {
        document.body.classList.add('mob-page-transition');
        setTimeout(() => document.body.classList.remove('mob-page-transition'), 240);
      } catch {}
      if(el){
        // Scroll into view; for hero2 (Home) go to very top instead
        if(tgt === 'hero2'){
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  if('IntersectionObserver' in window){
    const targets = ['hero2','arena','portfolio','challenges','leaderboard']
      .map(id => document.getElementById(id))
      .filter(Boolean);
    const navByTarget = {};
    navBtns.forEach(b => { navByTarget[b.dataset.mobTarget] = b; });
    const io = new IntersectionObserver((entries) => {
      // pick the most-visible section
      let best = null, bestRatio = 0;
      entries.forEach(e => {
        if(e.isIntersecting && e.intersectionRatio > bestRatio){
          bestRatio = e.intersectionRatio; best = e.target;
        }
      });
      if(best && best.id && navByTarget[best.id]){
        navBtns.forEach(b => b.classList.toggle('active', b === navByTarget[best.id]));
      }
    }, { rootMargin: '-30% 0px -50% 0px', threshold: [0.05, 0.25, 0.5, 0.75] });
    targets.forEach(t => io.observe(t));
  }

  /* FAB: scroll to arena and open the trade ticket */
  const fab = document.getElementById('mob-fab');
  if(fab){
    fab.addEventListener('click', () => {
      haptic(10);
      const arena = document.getElementById('arena');
      if(arena) arena.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // briefly highlight ticket
      setTimeout(() => {
        const t = document.getElementById('ticket-submit');
        if(t) t.focus({ preventScroll: true });
      }, 600);
    });
    // Pulse the FAB on first scroll into arena (then stop)
    let pulsed = false;
    window.addEventListener('scroll', () => {
      if(pulsed) return;
      const arena = document.getElementById('arena');
      if(!arena) return;
      const r = arena.getBoundingClientRect();
      if(r.top < window.innerHeight && r.bottom > 0){
        fab.classList.add('is-pulse');
        setTimeout(() => fab.classList.remove('is-pulse'), 4000);
        pulsed = true;
      }
    }, { passive: true });
  }

  /* Sticky mobile Buy/Sell — drives the existing ticket */
  const setSide = window.setSide;
  const submitBtn = document.getElementById('ticket-submit');
  const wireMobBtn = (id, side) => {
    const b = document.getElementById(id);
    if(!b || !submitBtn) return;
    b.addEventListener('click', () => {
      haptic(15);
      if(typeof window.setSide === 'function') window.setSide(side);
      submitBtn.click();
    });
  };
  wireMobBtn('mob-quick-buy', 'buy');
  wireMobBtn('mob-quick-sell', 'sell');

  /* Haptic on the main ticket submit (in addition to mobile bar) */
  if(submitBtn){
    submitBtn.addEventListener('click', () => haptic(12), { passive: true });
  }

  /* Pull-to-refresh: drag down at top of page → refresh tournaments + leaderboard + stats */
  if(isMobile()){
    const ptr = document.getElementById('mob-ptr');
    const ptrText = document.getElementById('mob-ptr-text');
    let startY = 0, pulling = false, dist = 0;
    const THRESHOLD = 70;

    document.addEventListener('touchstart', (e) => {
      if(window.scrollY > 2) return;
      // Don't trigger if user is interacting with a scrollable inner element
      const inScroller = e.target.closest('.term-tabs, .info-body, .modal-overlay');
      if(inScroller) return;
      startY = e.touches[0].clientY;
      pulling = true;
      dist = 0;
    }, { passive: true });

    document.addEventListener('touchmove', (e) => {
      if(!pulling) return;
      dist = e.touches[0].clientY - startY;
      if(dist > 12 && window.scrollY <= 2){
        ptr.classList.add('show');
        if(ptrText) ptrText.textContent = dist >= THRESHOLD ? 'Release to refresh' : 'Pull to refresh';
      } else {
        ptr.classList.remove('show');
      }
    }, { passive: true });

    document.addEventListener('touchend', async () => {
      if(!pulling){ return; }
      const trigger = dist >= THRESHOLD && window.scrollY <= 2;
      pulling = false; dist = 0;
      if(!trigger){ ptr.classList.remove('show'); return; }
      // Refreshing
      if(ptrText) ptrText.textContent = 'Refreshing…';
      ptr.classList.add('spin', 'show');
      haptic(20);
      try {
        await Promise.allSettled([
          (typeof refreshTournsFromDB === 'function') ? refreshTournsFromDB() : null,
          (typeof renderLeaders === 'function') ? renderLeaders() : null,
          (typeof pbRefreshStats === 'function') ? pbRefreshStats() : null,
          (typeof pbFetchAnchors === 'function') ? pbFetchAnchors() : null,
        ]);
      } catch {}
      if(ptrText) ptrText.textContent = 'Up to date';
      setTimeout(() => {
        ptr.classList.remove('show', 'spin');
      }, 800);
    });
  }

  /* Swipe between terminal tabs (horizontal flick on .term-tabs container) */
  (function swipeTermTabs(){
    if(!isMobile()) return;
    const tabsRow = document.querySelector('.term-tabs');
    if(!tabsRow) return;
    let sx = 0, sy = 0, locked = false;
    const all = () => Array.from(tabsRow.querySelectorAll('button'));
    const activeIdx = () => {
      const arr = all();
      const i = arr.findIndex(b => b.classList.contains('active'));
      return i < 0 ? 0 : i;
    };
    tabsRow.addEventListener('touchstart', (e) => {
      sx = e.touches[0].clientX; sy = e.touches[0].clientY; locked = false;
    }, { passive: true });
    tabsRow.addEventListener('touchmove', (e) => {
      const dx = e.touches[0].clientX - sx;
      const dy = e.touches[0].clientY - sy;
      if(!locked && Math.abs(dx) > 20 && Math.abs(dx) > Math.abs(dy) * 1.4){ locked = true; }
    }, { passive: true });
    tabsRow.addEventListener('touchend', (e) => {
      if(!locked) return;
      const dx = (e.changedTouches[0].clientX - sx);
      if(Math.abs(dx) < 36) return;
      const arr = all();
      let i = activeIdx();
      i = dx < 0 ? Math.min(arr.length - 1, i + 1) : Math.max(0, i - 1);
      arr[i].click();
      haptic(8);
    });
  })();

  /* Mobile section reveal — fade up sections as they enter viewport */
  if(isMobile() && 'IntersectionObserver' in window){
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if(e.isIntersecting){ e.target.classList.add('in-view'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.section').forEach(s => {
      // Hero variant + above-fold sections should always show
      if(s.id === 'hero2' || s.classList.contains('hero2')) s.classList.add('always-show');
      else obs.observe(s);
    });
  }

  /* Disable cursor parallax / aura code paths on touch (already done in their inits)
     and lower particle count on phones with very low memory */
  if(navigator.deviceMemory && navigator.deviceMemory <= 2){
    document.documentElement.classList.add('low-end');
  }
})();

/* Supabase session + live data */
pbInit();
if(PB_LIVE){
  // Refresh tournaments / leaderboard periodically
  setInterval(() => { refreshTournsFromDB(); renderLeaders(); }, 45000);
}

/* PWA: register service worker (installable on Android / iOS / Windows).
   Auto-update strategy: on every load, register, force an update check, and
   when a new SW takes control, reload once so users always see the newest build. */
if('serviceWorker' in navigator){
  window.addEventListener('load', async () => {
    try {
      const reg = await navigator.serviceWorker.register('sw.js');
      reg.update().catch(() => {});
      // If a waiting SW is queued, tell it to take over immediately
      if(reg.waiting) reg.waiting.postMessage('SKIP_WAITING');
      reg.addEventListener('updatefound', () => {
        const sw = reg.installing;
        if(!sw) return;
        sw.addEventListener('statechange', () => {
          if(sw.state === 'installed' && navigator.serviceWorker.controller){
            sw.postMessage('SKIP_WAITING');
          }
        });
      });
      let reloaded = false;
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if(reloaded) return; reloaded = true;
        location.reload();
      });
    } catch(err){
      console.warn('[PitBull] SW register failed', err);
    }
  });
}

/* Show welcome once per browser */
if(!localStorage.getItem('pb-welcome-seen')){
  setTimeout(()=>openModal('welcome-modal'), 900);
}
</script>
</body>
</html>
