<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>BUILD UP — Elite Productivity</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box;}

:root{
  --black:#000000;
  --deep:#04060c;
  --dark:#080d18;
  --card:#0c1220;
  --glass:rgba(255,255,255,0.04);
  --glass2:rgba(255,255,255,0.07);
  --border:rgba(255,255,255,0.08);
  --border2:rgba(255,255,255,0.14);

  --g:#00ff87;
  --g2:#00e676;
  --g3:#00c853;
  --g-glow:rgba(0,255,135,0.35);
  --g-soft:rgba(0,255,135,0.12);
  --g-dim:rgba(0,255,135,0.06);

  --b:#2979ff;
  --b-glow:rgba(41,121,255,0.3);
  --b-soft:rgba(41,121,255,0.1);

  --p:#d500f9;
  --p-glow:rgba(213,0,249,0.3);
  --p-soft:rgba(213,0,249,0.08);

  --a:#ff9500;
  --a-glow:rgba(255,149,0,0.3);
  --a-soft:rgba(255,149,0,0.08);

  --r:#ff3b30;
  --r-soft:rgba(255,59,48,0.1);

  --t:#f5f5f7;
  --t2:#a1a1a6;
  --t3:#4a4a52;
  --t4:#2a2a32;

  --f:'Space Grotesk',sans-serif;
  --mono:'Space Mono',monospace;
  --serif:'Inter',sans-serif;
}

html{scroll-behavior:smooth;}

body{
  background:var(--deep);
  color:var(--t);
  font-family:var(--f);
  min-height:100vh;
  overflow-x:hidden;
  -webkit-font-smoothing:antialiased;
}

/* ═══ AMBIENT BACKGROUND ═══ */
.ambient{
  position:fixed;inset:0;pointer-events:none;z-index:0;overflow:hidden;
}
.orb{
  position:absolute;border-radius:50%;filter:blur(120px);opacity:.5;
  animation:orbFloat 20s ease-in-out infinite;
}
.orb1{width:700px;height:700px;top:-200px;left:-200px;background:radial-gradient(circle,rgba(0,255,135,.12) 0%,transparent 70%);animation-delay:0s;}
.orb2{width:500px;height:500px;bottom:-100px;right:-100px;background:radial-gradient(circle,rgba(41,121,255,.1) 0%,transparent 70%);animation-delay:-7s;}
.orb3{width:400px;height:400px;top:50%;left:50%;transform:translate(-50%,-50%);background:radial-gradient(circle,rgba(213,0,249,.06) 0%,transparent 70%);animation-delay:-14s;}

@keyframes orbFloat{
  0%,100%{transform:translate(0,0) scale(1);}
  33%{transform:translate(30px,-20px) scale(1.05);}
  66%{transform:translate(-20px,30px) scale(0.95);}
}

/* noise grain overlay */
body::before{
  content:'';position:fixed;inset:0;
  background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
  background-size:150px;opacity:.025;pointer-events:none;z-index:1;
}

/* ═══ WRAP ═══ */
.wrap{
  position:relative;z-index:2;
  max-width:1340px;margin:0 auto;
  padding:0 28px 80px;
}

/* ═══ HEADER ═══ */
header{
  display:flex;align-items:center;justify-content:space-between;
  padding:32px 0 28px;
  border-bottom:1px solid var(--border);
  margin-bottom:36px;
  flex-wrap:wrap;gap:16px;
}

.logo-area{display:flex;align-items:center;gap:18px;}

.logo-icon{
  width:48px;height:48px;
  background:linear-gradient(135deg,var(--g),var(--g3));
  border-radius:14px;
  display:flex;align-items:center;justify-content:center;
  box-shadow:0 0 30px var(--g-glow),0 0 60px rgba(0,255,135,.1);
  position:relative;overflow:hidden;
  animation:iconPulse 3s ease-in-out infinite;
}
.logo-icon::after{
  content:'';position:absolute;inset:0;
  background:linear-gradient(135deg,rgba(255,255,255,.25),transparent);
}
.logo-icon svg{position:relative;z-index:1;}

@keyframes iconPulse{
  0%,100%{box-shadow:0 0 30px var(--g-glow),0 0 60px rgba(0,255,135,.1);}
  50%{box-shadow:0 0 50px var(--g-glow),0 0 100px rgba(0,255,135,.15);}
}

.logo-text-wrap{}
.logo-name{
  font-family:var(--serif);
  font-size:28px;font-weight:900;letter-spacing:6px;
  background:linear-gradient(135deg,#fff 0%,var(--g) 60%,#00c853 100%);
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;
  background-clip:text;
  line-height:1;
}
.logo-tagline{
  font-family:var(--mono);font-size:9px;color:var(--t3);
  letter-spacing:3px;text-transform:uppercase;margin-top:4px;
}

.hdr-right{display:flex;align-items:center;gap:12px;flex-wrap:wrap;}

.date-chip{
  font-family:var(--mono);font-size:10px;color:var(--t2);
  letter-spacing:1px;
  background:var(--glass);
  border:1px solid var(--border);
  padding:7px 14px;
  backdrop-filter:blur(20px);
}

.btn{
  font-family:var(--mono);font-size:10px;letter-spacing:1.5px;
  padding:9px 18px;
  border:1px solid var(--border2);
  background:var(--glass);
  color:var(--t2);cursor:pointer;
  transition:all .25s cubic-bezier(.4,0,.2,1);
  text-transform:uppercase;
  backdrop-filter:blur(20px);
  -webkit-backdrop-filter:blur(20px);
  position:relative;overflow:hidden;
}
.btn::before{
  content:'';position:absolute;inset:0;
  background:linear-gradient(135deg,rgba(255,255,255,.06),transparent);
  opacity:0;transition:opacity .25s;
}
.btn:hover::before{opacity:1;}
.btn:hover{border-color:var(--g);color:var(--g);box-shadow:0 0 20px var(--g-soft),inset 0 0 20px var(--g-dim);}

.btn-accent{
  background:linear-gradient(135deg,var(--g),var(--g3));
  border:none;color:#000;font-weight:700;
  box-shadow:0 0 25px var(--g-glow);
}
.btn-accent:hover{box-shadow:0 0 40px var(--g-glow),0 4px 20px var(--g-glow);transform:translateY(-1px);color:#000;}

/* ═══ WIDGETS ═══ */
.widgets{
  display:grid;grid-template-columns:repeat(4,1fr);
  gap:16px;margin-bottom:28px;
}

.widget{
  background:var(--glass);
  border:1px solid var(--border);
  backdrop-filter:blur(40px);-webkit-backdrop-filter:blur(40px);
  padding:24px;position:relative;overflow:hidden;
  transition:all .3s cubic-bezier(.4,0,.2,1);
  animation:slideUp .5s cubic-bezier(.4,0,.2,1) both;
  border-radius:2px;
}
.widget:nth-child(1){animation-delay:.05s}
.widget:nth-child(2){animation-delay:.1s}
.widget:nth-child(3){animation-delay:.15s}
.widget:nth-child(4){animation-delay:.2s}

.widget::before{
  content:'';position:absolute;top:0;left:0;right:0;height:1px;
  background:linear-gradient(90deg,transparent,var(--accent, var(--g)),transparent);
}
.widget::after{
  content:'';position:absolute;inset:0;
  background:radial-gradient(ellipse 80% 60% at 50% -20%,var(--w-glow,rgba(0,255,135,.06)),transparent 70%);
  pointer-events:none;
}
.widget:hover{
  transform:translateY(-4px);
  border-color:var(--border2);
  box-shadow:0 20px 60px rgba(0,0,0,.4),0 0 30px var(--w-glow,rgba(0,255,135,.08));
}
.wg{--accent:var(--g);--w-glow:rgba(0,255,135,.08);}
.wb{--accent:var(--b);--w-glow:rgba(41,121,255,.08);}
.wa{--accent:var(--a);--w-glow:rgba(255,149,0,.08);}
.wp{--accent:var(--p);--w-glow:rgba(213,0,249,.08);}

.wlabel{
  font-family:var(--mono);font-size:9px;
  color:var(--t3);letter-spacing:2.5px;
  text-transform:uppercase;margin-bottom:14px;
}
.wvalue{
  font-family:var(--serif);font-size:42px;font-weight:900;
  line-height:1;margin-bottom:6px;letter-spacing:-1px;
}
.wg .wvalue{
  background:linear-gradient(135deg,#fff,var(--g));
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
}
.wb .wvalue{
  background:linear-gradient(135deg,#fff,var(--b));
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
}
.wa .wvalue{
  background:linear-gradient(135deg,#fff,var(--a));
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
}
.wp .wvalue{
  background:linear-gradient(135deg,#fff,var(--p));
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
}
.wsub{font-family:var(--mono);font-size:10px;color:var(--t3);}
.wglow{
  position:absolute;right:-10px;bottom:-10px;
  width:80px;height:80px;border-radius:50%;
  filter:blur(30px);opacity:.4;pointer-events:none;
}
.wg .wglow{background:var(--g);}
.wb .wglow{background:var(--b);}
.wa .wglow{background:var(--a);}
.wp .wglow{background:var(--p);}

/* ═══ LAYOUT ═══ */
.main-grid{display:grid;grid-template-columns:1fr 400px;gap:20px;}
.left{display:flex;flex-direction:column;gap:20px;}
.right{display:flex;flex-direction:column;gap:20px;}

/* ═══ GLASS PANEL ═══ */
.panel{
  background:var(--glass);
  border:1px solid var(--border);
  backdrop-filter:blur(40px);-webkit-backdrop-filter:blur(40px);
  padding:24px;
  animation:slideUp .6s cubic-bezier(.4,0,.2,1) both;
  position:relative;overflow:hidden;
}
.panel::before{
  content:'';position:absolute;inset:0;
  background:linear-gradient(135deg,rgba(255,255,255,.03) 0%,transparent 60%);
  pointer-events:none;
}

.ph{
  display:flex;align-items:center;justify-content:space-between;
  margin-bottom:20px;padding-bottom:16px;
  border-bottom:1px solid var(--border);
  flex-wrap:wrap;gap:10px;position:relative;z-index:1;
}
.ptitle{
  font-family:var(--serif);font-size:11px;font-weight:600;
  letter-spacing:3px;text-transform:uppercase;color:var(--t2);
}

.pbadge{
  font-family:var(--mono);font-size:8px;letter-spacing:1.5px;
  padding:4px 10px;border:1px solid;
  background:var(--glass2);
  backdrop-filter:blur(10px);
}
.bg2{border-color:rgba(0,255,135,.4);color:var(--g);box-shadow:0 0 10px var(--g-soft);}
.bc2{border-color:rgba(41,121,255,.4);color:var(--b);box-shadow:0 0 10px var(--b-soft);}
.ba2{border-color:rgba(255,149,0,.4);color:var(--a);box-shadow:0 0 10px var(--a-soft);}

/* ═══ TASK LIST ═══ */
.task-list{display:flex;flex-direction:column;gap:8px;position:relative;z-index:1;}

.task-item{
  display:flex;align-items:center;gap:14px;
  padding:14px 16px;
  background:rgba(255,255,255,.02);
  border:1px solid var(--border);
  cursor:pointer;
  transition:all .22s cubic-bezier(.4,0,.2,1);
  user-select:none;position:relative;overflow:hidden;
}
.task-item::before{
  content:'';position:absolute;left:0;top:0;bottom:0;width:0;
  background:linear-gradient(180deg,var(--g),var(--g3));
  transition:width .22s cubic-bezier(.4,0,.2,1);
}
.task-item:hover{border-color:var(--border2);background:rgba(255,255,255,.04);}
.task-item.done{
  border-color:rgba(0,255,135,.25);
  background:rgba(0,255,135,.05);
  box-shadow:0 0 20px rgba(0,255,135,.05);
}
.task-item.done::before{width:3px;}

.tcheck{
  width:22px;height:22px;flex-shrink:0;
  border:1.5px solid var(--t3);
  border-radius:50%;
  display:flex;align-items:center;justify-content:center;
  font-size:11px;font-weight:700;
  transition:all .22s cubic-bezier(.4,0,.2,1);
  position:relative;z-index:1;
}
.task-item.done .tcheck{
  border-color:var(--g);background:var(--g);color:#000;
  box-shadow:0 0 12px var(--g-glow);
}

.tinfo{flex:1;min-width:0;position:relative;z-index:1;}
.tname{
  font-family:var(--serif);font-size:14px;font-weight:600;
  margin-bottom:3px;transition:color .2s;
  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;
}
.task-item.done .tname{color:var(--g);}
.tmeta{font-family:var(--mono);font-size:9px;color:var(--t3);letter-spacing:.5px;}

.tcat{
  font-family:var(--mono);font-size:8px;letter-spacing:1px;
  padding:3px 8px;
  position:relative;z-index:1;flex-shrink:0;
  backdrop-filter:blur(10px);
}
.cat-health {border:1px solid rgba(0,255,135,.35);color:var(--g);background:rgba(0,255,135,.07);}
.cat-study  {border:1px solid rgba(41,121,255,.35);color:var(--b);background:rgba(41,121,255,.07);}
.cat-personal{border:1px solid rgba(255,149,0,.35);color:var(--a);background:rgba(255,149,0,.07);}
.cat-work   {border:1px solid rgba(255,59,48,.35);color:var(--r);background:rgba(255,59,48,.07);}

/* ═══ WEEK GRID ═══ */
.week-grid{display:grid;grid-template-columns:130px repeat(7,1fr);gap:0;position:relative;z-index:1;}

.wg-corner,.wg-head{
  border-bottom:1px solid var(--border);padding-bottom:12px;
}
.wg-head{
  font-family:var(--mono);font-size:9px;color:var(--t3);
  text-align:center;
  display:flex;flex-direction:column;align-items:center;gap:3px;
}
.wg-head .dn{font-family:var(--serif);font-size:15px;font-weight:700;color:var(--t2);}
.wg-head.tc .dn,.wg-head.tc .dy{color:var(--g);}
.wg-head.tc .dn{text-shadow:0 0 15px var(--g-glow);}

.wg-label{
  font-family:var(--mono);font-size:9px;color:var(--t2);letter-spacing:.3px;
  padding:8px 10px 8px 0;
  border-bottom:1px solid var(--border);
  display:flex;align-items:center;
  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;
}

.wg-cell{
  border-bottom:1px solid var(--border);
  border-left:1px solid rgba(255,255,255,.04);
  display:flex;align-items:center;justify-content:center;
  min-height:38px;cursor:pointer;
  transition:background .15s;
}
.wg-cell:hover .wg-dot{transform:scale(1.3);}
.wg-cell.future{cursor:default;opacity:.25;pointer-events:none;}

.wg-dot{
  width:16px;height:16px;border-radius:3px;
  background:rgba(255,255,255,.05);
  border:1px solid rgba(255,255,255,.1);
  transition:all .18s cubic-bezier(.4,0,.2,1);
}
.wg-cell.done .wg-dot{
  background:linear-gradient(135deg,var(--g),var(--g3));
  border-color:transparent;
  box-shadow:0 0 10px var(--g-glow),0 0 4px var(--g);
}
.wg-cell.tc .wg-dot{border-color:rgba(0,255,135,.4);}

/* ═══ CHART AREA ═══ */
.wtabs{display:flex;gap:4px;}
.wtab{
  font-family:var(--mono);font-size:9px;letter-spacing:1px;
  padding:5px 14px;
  border:1px solid var(--border);background:transparent;color:var(--t3);
  cursor:pointer;transition:all .2s;text-transform:uppercase;
  backdrop-filter:blur(10px);
}
.wtab.active,.wtab:hover{
  border-color:rgba(0,255,135,.4);color:var(--g);
  background:rgba(0,255,135,.07);
  box-shadow:0 0 12px rgba(0,255,135,.1);
}

/* ═══ TIMETABLE ═══ */
.tt-panel{margin-top:20px;animation-delay:.25s;}

.tt-scroll{overflow-x:auto;padding-bottom:8px;}
.tt-scroll::-webkit-scrollbar{height:3px;}
.tt-scroll::-webkit-scrollbar-thumb{background:var(--border2);border-radius:2px;}

.tt-table{width:100%;border-collapse:separate;border-spacing:0;min-width:860px;}

.tt-table th{
  font-family:var(--mono);font-size:8px;letter-spacing:2px;
  text-transform:uppercase;color:var(--t3);
  padding:10px 14px;text-align:center;
  border-bottom:1px solid var(--border);
  background:rgba(255,255,255,.01);white-space:nowrap;
}
.slot-hd{color:var(--g);opacity:.8;border-bottom-color:rgba(0,255,135,.2)!important;}
.day-hd{text-align:left;padding-left:18px;color:var(--t2);width:110px;}

.tt-table td{
  padding:12px 14px;vertical-align:top;
  border-bottom:1px solid rgba(255,255,255,.04);
  border-right:1px solid rgba(255,255,255,.02);
  transition:background .18s;
}
.tt-table td:last-child{border-right:none;}
.tt-table tr:last-child td{border-bottom:none;}
.tt-table tr:hover td{background:rgba(255,255,255,.025);}

.tt-day{
  font-family:var(--serif);font-size:13px;font-weight:700;
  color:var(--t);letter-spacing:.5px;
}
.tt-today td{background:rgba(0,255,135,.03)!important;}
.tt-today td:first-child{border-left:2px solid var(--g);}
.tt-today .tt-day{color:var(--g);text-shadow:0 0 20px var(--g-glow);}

.tt-cell{display:flex;flex-direction:column;gap:5px;align-items:flex-start;}
.tt-subject{
  font-family:var(--serif);font-size:13px;font-weight:600;
  line-height:1.2;
}
.tt-note{
  font-family:var(--mono);font-size:7.5px;letter-spacing:.8px;
  padding:2px 7px;display:inline-block;
  border:1px solid;
}
.note-practice{border-color:rgba(41,121,255,.4);color:var(--b);background:var(--b-soft);}
.note-ttn{border-color:rgba(255,149,0,.4);color:var(--a);background:var(--a-soft);}
.note-lq{border-color:rgba(213,0,249,.4);color:var(--p);background:var(--p-soft);}
.note-jee{border-color:rgba(0,255,135,.4);color:var(--g);background:var(--g-dim);}

.sub-phy {color:#60a5fa;}
.sub-math{color:#c084fc;}
.sub-chem{color:#34d399;}
.sub-bio {color:#86efac;}
.sub-eng {color:#fbbf24;}
.sub-mil {color:#f87171;}
.sub-odia{color:#f9a8d4;}
.sub-empty{color:var(--t3);font-family:var(--mono);font-size:11px;}

.slot-active{background:rgba(0,255,135,.06)!important;}
.slot-active .tt-subject{color:var(--g)!important;text-shadow:0 0 15px var(--g-glow);}

.now-pill{
  display:none;align-items:center;gap:8px;
  font-family:var(--mono);font-size:9px;letter-spacing:1.5px;
  padding:5px 14px;
  border:1px solid rgba(0,255,135,.4);
  color:var(--g);
  background:rgba(0,255,135,.07);
  backdrop-filter:blur(20px);
  box-shadow:0 0 15px rgba(0,255,135,.15);
}
.now-pill.visible{display:inline-flex;}

/* ═══ MODALS ═══ */
.overlay{
  position:fixed;inset:0;background:rgba(0,0,0,.75);
  z-index:999;display:none;align-items:center;justify-content:center;
  backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);
}
.overlay.open{display:flex;}

.modal{
  background:rgba(10,14,24,.92);
  border:1px solid var(--border2);
  backdrop-filter:blur(60px);-webkit-backdrop-filter:blur(60px);
  padding:32px;width:480px;max-width:95vw;
  box-shadow:0 40px 120px rgba(0,0,0,.6),0 0 60px rgba(0,255,135,.05);
  animation:slideUp .25s cubic-bezier(.4,0,.2,1);
  max-height:90vh;overflow-y:auto;
  position:relative;
}
.modal::before{
  content:'';position:absolute;top:0;left:0;right:0;height:1px;
  background:linear-gradient(90deg,transparent,var(--g),transparent);
}

.modal h3{
  font-family:var(--serif);font-size:13px;font-weight:700;
  letter-spacing:3px;text-transform:uppercase;
  margin-bottom:20px;padding-bottom:14px;
  border-bottom:1px solid var(--border);
  color:var(--g);
}
.modal p{font-family:var(--mono);font-size:11px;color:var(--t2);margin-bottom:20px;line-height:1.8;}
.mbtns{display:flex;gap:10px;justify-content:flex-end;margin-top:24px;}

/* Editor rows */
.editor-list{display:flex;flex-direction:column;gap:8px;margin-bottom:14px;}
.erow{
  display:grid;grid-template-columns:1fr 120px auto;gap:10px;align-items:center;
  background:rgba(255,255,255,.03);
  border:1px solid var(--border);
  padding:12px 14px;
}
.erow input,.erow select{
  background:rgba(255,255,255,.05);border:1px solid var(--border2);
  color:var(--t);font-family:var(--mono);font-size:10px;
  padding:7px 10px;outline:none;width:100%;transition:border-color .2s;
}
.erow input:focus,.erow select:focus{border-color:rgba(0,255,135,.5);box-shadow:0 0 10px rgba(0,255,135,.1);}
.erow select option{background:#0c1220;}
.flbl{font-family:var(--mono);font-size:8px;color:var(--t3);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:4px;}
.fgrp{display:flex;flex-direction:column;}

.btn-del{
  width:30px;height:30px;flex-shrink:0;
  border:1px solid rgba(255,59,48,.4);background:rgba(255,59,48,.08);
  color:var(--r);cursor:pointer;font-size:16px;
  display:flex;align-items:center;justify-content:center;transition:all .2s;
}
.btn-del:hover{background:var(--r);color:#fff;box-shadow:0 0 15px rgba(255,59,48,.3);}

.btn-add{
  width:100%;font-family:var(--mono);font-size:9px;letter-spacing:2px;
  padding:10px;border:1px dashed var(--border2);background:transparent;
  color:var(--t3);cursor:pointer;transition:all .2s;text-transform:uppercase;
}
.btn-add:hover{border-color:rgba(0,255,135,.4);color:var(--g);background:rgba(0,255,135,.05);}

/* ═══ LIVE DOT ═══ */
.ldot{
  width:6px;height:6px;background:var(--g);border-radius:50%;
  display:inline-block;flex-shrink:0;
  box-shadow:0 0 6px var(--g);
  animation:blink 1.5s ease-in-out infinite;
}
@keyframes blink{0%,100%{opacity:1;box-shadow:0 0 6px var(--g);}50%{opacity:.4;box-shadow:0 0 2px var(--g);}}

/* ═══ ANIMATIONS ═══ */
@keyframes slideUp{from{opacity:0;transform:translateY(24px);}to{opacity:1;transform:translateY(0);}}

/* ═══ SCROLLBAR ═══ */
::-webkit-scrollbar{width:5px;height:5px;}
::-webkit-scrollbar-track{background:transparent;}
::-webkit-scrollbar-thumb{background:var(--border2);border-radius:10px;}

/* ═══ RESPONSIVE ═══ */
@media(max-width:1080px){.main-grid{grid-template-columns:1fr;}}
@media(max-width:680px){.widgets{grid-template-columns:1fr 1fr;}}
@media(max-width:400px){.widgets{grid-template-columns:1fr;}}

/* ═══ CURSOR GLOW ═══ */
#cursor-glow{
  position:fixed;
  width:500px;height:500px;
  border-radius:50%;
  pointer-events:none;
  z-index:9999;
  transform:translate(-50%,-50%);
  background:radial-gradient(circle,
    rgba(0,255,135,.13) 0%,
    rgba(0,255,135,.06) 25%,
    rgba(41,121,255,.03) 55%,
    transparent 75%
  );
  transition:opacity .3s ease;
  mix-blend-mode:screen;
  filter:blur(2px);
}


/* ═══ DRAG SYSTEM ═══ */
.drag-container{
  position:fixed;
  inset:0;
  pointer-events:none;
  z-index:500;
}

.draggable-card{
  position:absolute;
  pointer-events:all;
  cursor:grab;
  background:rgba(10,15,28,.92);
  border:1px solid var(--border2);
  backdrop-filter:blur(50px);
  -webkit-backdrop-filter:blur(50px);
  padding:22px;
  box-shadow:0 8px 40px rgba(0,0,0,.5);
  transition:box-shadow .2s ease, border-color .2s ease;
  min-width:280px;
  animation:none!important;
}
.draggable-card::before{
  content:'';position:absolute;inset:0;
  background:linear-gradient(135deg,rgba(255,255,255,.04) 0%,transparent 60%);
  pointer-events:none;
}
.draggable-card:hover{
  border-color:rgba(0,255,135,.3);
  box-shadow:0 12px 60px rgba(0,0,0,.6),0 0 30px rgba(0,255,135,.08);
}
.draggable-card.dragging{
  cursor:grabbing;
  box-shadow:0 30px 80px rgba(0,0,0,.7),0 0 50px rgba(0,255,135,.2);
  border-color:rgba(0,255,135,.5);
  z-index:600;
  transform:scale(1.02);
}

.drag-handle{
  display:flex;align-items:center;justify-content:space-between;
  margin-bottom:14px;padding-bottom:12px;
  border-bottom:1px solid var(--border);
  cursor:grab;
  user-select:none;
}
.drag-handle:active{cursor:grabbing;}
.drag-grip{
  display:flex;gap:3px;align-items:center;
  opacity:.3;transition:opacity .2s;
}
.draggable-card:hover .drag-grip{opacity:.7;}
.drag-grip span{
  display:block;width:3px;height:3px;
  border-radius:50%;background:var(--t2);
}

.dock-bar{
  position:fixed;
  bottom:28px;left:50%;transform:translateX(-50%);
  display:flex;gap:10px;align-items:center;
  background:rgba(8,12,22,.85);
  border:1px solid var(--border2);
  backdrop-filter:blur(40px);-webkit-backdrop-filter:blur(40px);
  padding:10px 16px;
  z-index:1000;
  box-shadow:0 8px 40px rgba(0,0,0,.5),0 0 20px rgba(0,255,135,.05);
}
.dock-btn{
  font-family:var(--mono);font-size:8px;letter-spacing:1.5px;
  padding:6px 14px;
  border:1px solid var(--border);background:rgba(255,255,255,.04);
  color:var(--t3);cursor:pointer;transition:all .2s;text-transform:uppercase;
  white-space:nowrap;
}
.dock-btn:hover{border-color:rgba(0,255,135,.4);color:var(--g);background:rgba(0,255,135,.06);}
.dock-btn.active{border-color:rgba(0,255,135,.6);color:var(--g);background:rgba(0,255,135,.1);box-shadow:0 0 12px rgba(0,255,135,.15);}
.dock-sep{width:1px;height:20px;background:var(--border);}
.dock-label{font-family:var(--mono);font-size:8px;color:var(--t3);letter-spacing:2px;text-transform:uppercase;}
</style>
</head>
<body>

<!-- CURSOR GLOW ELEMENTS -->
<div id="cursor-glow"></div>

<!-- DRAG CONTAINER (floating cards land here) -->
<div class="drag-container" id="dragContainer"></div>

<!-- DOCK BAR -->
<div class="dock-bar" id="dockBar">
  <span class="dock-label">Panels</span>
  <div class="dock-sep"></div>
  <button class="dock-btn" onclick="spawnCard('tasks')">+ Tasks</button>
  <button class="dock-btn" onclick="spawnCard('trend')">+ Trend</button>
  <button class="dock-btn" onclick="spawnCard('weekly')">+ Weekly</button>
  <button class="dock-btn" onclick="spawnCard('timetable')">+ Timetable</button>
  <button class="dock-btn" onclick="spawnCard('breakdown')">+ Breakdown</button>
  <div class="dock-sep"></div>
  <button class="dock-btn" onclick="clearCards()" style="border-color:rgba(255,59,48,.3);color:var(--r);">✕ Clear</button>
</div>

<div class="ambient">
  <div class="orb orb1"></div>
  <div class="orb orb2"></div>
  <div class="orb orb3"></div>
</div>

<div class="wrap">

  <!-- HEADER -->
  <header>
    <div class="logo-area">
      <div class="logo-icon">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
          <path d="M5 20L13 4L21 20" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8 15H18" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
        </svg>
      </div>
      <div class="logo-text-wrap">
        <div class="logo-name">BUILD UP</div>
        <div class="logo-tagline">Elite · JEE Productivity OS</div>
      </div>
    </div>
    <div class="hdr-right">
      <div class="date-chip" id="dateTxt"></div>
      <button class="btn" onclick="openEditor()">✎&nbsp; Edit Tasks</button>
      <button class="btn btn-accent" onclick="openExport()">↑ &nbsp;Export</button>
    </div>
  </header>

  <!-- WIDGETS -->
  <div class="widgets">
    <div class="widget wg">
      <div class="wlabel">Done Today</div>
      <div class="wvalue" id="w-done">0</div>
      <div class="wsub">of <span id="w-total">0</span> tasks</div>
      <div class="wglow"></div>
    </div>
    <div class="widget wb">
      <div class="wlabel">Today's Score</div>
      <div class="wvalue" id="w-pct">0%</div>
      <div class="wsub">completion rate</div>
      <div class="wglow"></div>
    </div>
    <div class="widget wa">
      <div class="wlabel">Weekly Avg</div>
      <div class="wvalue" id="w-week">0%</div>
      <div class="wsub">last 7 days</div>
      <div class="wglow"></div>
    </div>
    <div class="widget wp">
      <div class="wlabel">Best Day</div>
      <div class="wvalue" id="w-best">—</div>
      <div class="wsub" id="w-best-sub">this week</div>
      <div class="wglow"></div>
    </div>
  </div>

  <!-- MAIN GRID -->
  <div class="main-grid">
    <div class="left">

      <!-- TREND CHART -->
      <div class="panel" style="animation-delay:.1s">
        <div class="ph">
          <div class="ptitle">Productivity Trend</div>
          <div class="wtabs">
            <button class="wtab active" onclick="switchView(this,'week')">This Week</button>
            <button class="wtab" onclick="switchView(this,'month')">This Month</button>
          </div>
        </div>
        <div style="position:relative;height:190px;z-index:1;">
          <canvas id="trendChart"></canvas>
        </div>
      </div>

      <!-- WEEKLY TRACKER -->
      <div class="panel" style="animation-delay:.16s">
        <div class="ph">
          <div class="ptitle">Weekly Tracker</div>
          <span class="pbadge bc2" id="week-badge">—</span>
        </div>
        <div class="week-grid" id="weekGrid"></div>
      </div>

    </div>
    <div class="right">

      <!-- DAILY TASKS -->
      <div class="panel" style="animation-delay:.1s">
        <div class="ph">
          <div class="ptitle">Daily Work</div>
          <span class="pbadge ba2" id="task-badge">0 / 0</span>
        </div>
        <div class="task-list" id="taskList"></div>
      </div>

      <!-- BAR CHART -->
      <div class="panel" style="animation-delay:.18s">
        <div class="ph">
          <div class="ptitle">Daily Breakdown</div>
          <span class="pbadge bg2"><span class="ldot" style="margin-right:6px"></span>Live</span>
        </div>
        <div style="position:relative;height:165px;z-index:1;">
          <canvas id="barChart"></canvas>
        </div>
      </div>

    </div>
  </div>

  <!-- TIMETABLE -->
  <div class="panel tt-panel">
    <div class="ph">
      <div>
        <div class="ptitle">Weekly Timetable</div>
      </div>
      <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
        <span id="nowPill" class="now-pill"><span class="ldot"></span><span id="nowText">—</span></span>
        <span class="pbadge" style="border-color:rgba(255,255,255,.15);color:var(--t2);">JEE 2025 · Schedule</span>
      </div>
    </div>
    <div class="tt-scroll">
      <table class="tt-table">
        <thead>
          <tr>
            <th class="day-hd">Day</th>
            <th class="slot-hd">6:00 – 7:30</th>
            <th class="slot-hd">9:00 – 12:30</th>
            <th class="slot-hd">2:00 – 5:00</th>
            <th class="slot-hd">6:30 – 9:00</th>
            <th class="slot-hd">10:00 – 11:30</th>
          </tr>
        </thead>
        <tbody id="ttBody"></tbody>
      </table>
    </div>
  </div>

</div>

<!-- TASK EDITOR -->
<div class="overlay" id="editorOverlay">
  <div class="modal">
    <h3>✎ Edit Daily Tasks</h3>
    <div class="editor-list" id="editorList"></div>
    <button class="btn-add" onclick="addRow()">+ Add Task</button>
    <div class="mbtns">
      <button class="btn" onclick="closeEditor()">Cancel</button>
      <button class="btn btn-accent" onclick="saveEditor()">Save Changes</button>
    </div>
  </div>
</div>

<!-- EXPORT -->
<div class="overlay" id="exportOverlay">
  <div class="modal">
    <h3>↑ Export Data</h3>
    <p>Downloads your complete task list, weekly history, and all completion records as a JSON file.</p>
    <div class="mbtns">
      <button class="btn" onclick="closeExport()">Cancel</button>
      <button class="btn btn-accent" onclick="doExport()">Download JSON</button>
    </div>
  </div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.0/chart.umd.min.js"></script>
<script>
// ══════════════════════════════════
// DATA LAYER
// ══════════════════════════════════
const today     = new Date();
const todayKey  = dk(today);
const daysInMon = new Date(today.getFullYear(),today.getMonth()+1,0).getDate();
const DAYS      = ['SUN','MON','TUE','WED','THU','FRI','SAT'];

function dk(d){
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}
function offset(n){ // 0=6 days ago, 6=today
  const d=new Date(today); d.setDate(today.getDate()-(6-n)); return d;
}

let tasks = [
  {id:'t1',name:'Study Session', cat:'study',   streak:12},
  {id:'t2',name:'Exercise',      cat:'health',  streak:7 },
  {id:'t3',name:'Reading',       cat:'personal',streak:5 },
  {id:'t4',name:'Coding',        cat:'work',    streak:9 },
  {id:'t5',name:'Meditation',    cat:'health',  streak:14},
];

const history = {};
(function seed(){
  for(let i=29;i>=1;i--){
    const d=new Date(today); d.setDate(today.getDate()-i);
    const k=dk(d),r={};
    tasks.forEach(t=>r[t.id]=Math.random()>.28);
    history[k]=r;
  }
})();
if(!history[todayKey]) history[todayKey]={};
tasks.forEach(t=>{ if(history[todayKey][t.id]===undefined) history[todayKey][t.id]=false; });

function rec(d){ return history[dk(d)]||{}; }
function todayRec(){ return history[todayKey]; }

// ══════════════════════════════════
// HEADER
// ══════════════════════════════════
document.getElementById('dateTxt').textContent =
  today.toLocaleDateString('en-US',{weekday:'long',year:'numeric',month:'long',day:'numeric'}).toUpperCase();

// ══════════════════════════════════
// WIDGETS
// ══════════════════════════════════
function updateWidgets(){
  const r=todayRec();
  const done=tasks.filter(t=>r[t.id]).length;
  const total=tasks.length;
  const pct=total?Math.round(done/total*100):0;
  document.getElementById('w-done').textContent=done;
  document.getElementById('w-total').textContent=total;
  document.getElementById('w-pct').textContent=pct+'%';

  let wSum=0,bestPct=-1,bestDay='—';
  for(let i=0;i<7;i++){
    const d=offset(i);
    const p=dayPct(d);
    wSum+=p;
    if(p>bestPct){bestPct=p;bestDay=DAYS[d.getDay()];}
  }
  document.getElementById('w-week').textContent=Math.round(wSum/7)+'%';
  document.getElementById('w-best').textContent=bestDay;
  document.getElementById('w-best-sub').textContent=bestPct>=0?bestPct+'% completion':'no data';
}

// ══════════════════════════════════
// TASK LIST
// ══════════════════════════════════
function buildTaskList(){
  const list=document.getElementById('taskList');
  list.innerHTML='';
  const r=todayRec();
  if(!tasks.length){
    list.innerHTML=`<div style="font-family:var(--mono);font-size:10px;color:var(--t3);text-align:center;padding:24px">No tasks — click Edit Tasks to add</div>`;
    document.getElementById('task-badge').textContent='0 / 0';
    return;
  }
  tasks.forEach(t=>{
    const done=!!r[t.id];
    list.innerHTML+=`
      <div class="task-item ${done?'done':''}" onclick="toggleTask('${t.id}')">
        <div class="tcheck">${done?'✓':''}</div>
        <div class="tinfo">
          <div class="tname">${t.name}</div>
          <div class="tmeta">🔥 ${t.streak+(done?1:0)} day streak</div>
        </div>
        <div class="tcat cat-${t.cat}">${t.cat.toUpperCase()}</div>
      </div>`;
  });
  const done=tasks.filter(t=>r[t.id]).length;
  document.getElementById('task-badge').textContent=`${done} / ${tasks.length}`;
}

function toggleTask(id){
  const r=todayRec(); r[id]=!r[id];
  buildTaskList(); buildWeekGrid(); updateWidgets(); refreshCharts();
}

// ══════════════════════════════════
// WEEKLY GRID
// ══════════════════════════════════
function buildWeekGrid(){
  const grid=document.getElementById('weekGrid');
  grid.innerHTML='';
  const cols=Array.from({length:7},(_,i)=>offset(i));

  const corner=document.createElement('div');
  corner.className='wg-corner'; grid.appendChild(corner);

  cols.forEach(d=>{
    const isT=dk(d)===todayKey;
    const h=document.createElement('div');
    h.className='wg-head'+(isT?' tc':'');
    h.innerHTML=`<span class="dn">${d.getDate()}</span><span class="dy">${DAYS[d.getDay()]}</span>`;
    grid.appendChild(h);
  });

  tasks.forEach(t=>{
    const lbl=document.createElement('div');
    lbl.className='wg-label'; lbl.textContent=t.name;
    grid.appendChild(lbl);

    cols.forEach(d=>{
      const isFuture=d>today;
      const isT=dk(d)===todayKey;
      const r=rec(d); const done=!!r[t.id];
      const cell=document.createElement('div');
      cell.className=`wg-cell ${done?'done':''} ${isFuture?'future':''} ${isT?'tc':''}`;
      cell.innerHTML='<div class="wg-dot"></div>';
      if(!isFuture){
        cell.addEventListener('click',()=>{
          if(!history[dk(d)]) history[dk(d)]={};
          history[dk(d)][t.id]=!done;
          buildWeekGrid();
          if(isT){buildTaskList();}
          updateWidgets(); refreshCharts();
        });
      }
      grid.appendChild(cell);
    });
  });

  let wD=0,wT=0;
  cols.forEach(d=>{ const r=rec(d); tasks.forEach(t=>{wT++;if(r[t.id])wD++;}); });
  document.getElementById('week-badge').textContent=`${wD} / ${wT} this week`;
}

// ══════════════════════════════════
// CHARTS
// ══════════════════════════════════
let tChart=null,bChart=null,currentView='week';

Chart.defaults.color='rgba(255,255,255,.3)';
Chart.defaults.borderColor='rgba(255,255,255,.06)';
Chart.defaults.font.family="'Space Mono',monospace";
Chart.defaults.font.size=9;

function dayPct(d){
  if(!tasks.length) return 0;
  const r=rec(d);
  return Math.round(tasks.filter(t=>r[t.id]).length/tasks.length*100);
}
function colorFor(v){return v>70?'rgba(0,255,135,.7)':v>40?'rgba(255,149,0,.7)':'rgba(255,59,48,.55)';}
function borderFor(v){return v>70?'#00ff87':v>40?'#ff9500':'#ff3b30';}
function glowFor(v){return v>70?'rgba(0,255,135,.3)':v>40?'rgba(255,149,0,.25)':'rgba(255,59,48,.2)';}

function trendData(view){
  const labels=[],data=[];
  if(view==='week'){
    for(let i=0;i<7;i++){
      const d=offset(i);
      labels.push(DAYS[d.getDay()]);
      data.push(dayPct(d));
    }
  } else {
    for(let day=1;day<=today.getDate();day++){
      const d=new Date(today.getFullYear(),today.getMonth(),day);
      labels.push(day%5===0||day===1||day===today.getDate()?String(day):'');
      data.push(dayPct(d));
    }
  }
  return {labels,data};
}

function barData(){
  const labels=[],data=[];
  for(let i=0;i<7;i++){
    const d=offset(i);
    labels.push(dk(d)===todayKey?'TODAY':DAYS[d.getDay()]);
    data.push(dayPct(d));
  }
  return {labels,data};
}

function initCharts(){
  if(tChart){tChart.destroy();tChart=null;}
  if(bChart){bChart.destroy();bChart=null;}

  // TREND
  const c1=document.getElementById('trendChart');
  c1.width=c1.parentElement.offsetWidth||650;
  c1.height=190;
  const x1=c1.getContext('2d');

  const grad=x1.createLinearGradient(0,0,0,190);
  grad.addColorStop(0,'rgba(0,255,135,.25)');
  grad.addColorStop(.5,'rgba(0,255,135,.08)');
  grad.addColorStop(1,'rgba(0,255,135,0)');

  const {labels:l1,data:d1}=trendData('week');
  tChart=new Chart(x1,{
    type:'line',
    data:{labels:l1,datasets:[{
      data:d1,
      borderColor:'#00ff87',borderWidth:2,
      backgroundColor:grad,fill:true,tension:.4,
      pointBackgroundColor:d1.map(borderFor),
      pointBorderColor:'rgba(0,0,0,.5)',pointBorderWidth:2,
      pointRadius:5,pointHoverRadius:9,
      shadowColor:'rgba(0,255,135,.5)',shadowBlur:20,
    }]},
    options:{
      responsive:false,animation:{duration:700,easing:'easeInOutQuart'},
      plugins:{
        legend:{display:false},
        tooltip:{
          backgroundColor:'rgba(8,13,24,.95)',
          borderColor:'rgba(0,255,135,.4)',borderWidth:1,
          titleColor:'#00ff87',bodyColor:'rgba(255,255,255,.5)',
          padding:12,cornerRadius:0,
          callbacks:{label:c=>` ${c.parsed.y}% tasks complete`}
        }
      },
      scales:{
        x:{grid:{color:'rgba(255,255,255,.04)'},ticks:{color:'rgba(255,255,255,.3)'}},
        y:{grid:{color:'rgba(255,255,255,.04)'},min:0,max:100,
           ticks:{color:'rgba(255,255,255,.3)',callback:v=>v+'%',stepSize:25}}
      }
    }
  });

  // BAR
  const c2=document.getElementById('barChart');
  c2.width=c2.parentElement.offsetWidth||380;
  c2.height=165;
  const x2=c2.getContext('2d');
  const {labels:l2,data:d2}=barData();
  bChart=new Chart(x2,{
    type:'bar',
    data:{labels:l2,datasets:[{
      data:d2,
      backgroundColor:d2.map(colorFor),
      borderColor:d2.map(borderFor),
      borderWidth:1,borderRadius:3,
    }]},
    options:{
      responsive:false,animation:{duration:700,easing:'easeInOutQuart'},
      plugins:{
        legend:{display:false},
        tooltip:{
          backgroundColor:'rgba(8,13,24,.95)',
          borderColor:'rgba(255,255,255,.15)',borderWidth:1,
          titleColor:'rgba(255,255,255,.6)',bodyColor:'rgba(255,255,255,.4)',
          padding:12,cornerRadius:0,
          callbacks:{label:c=>` ${c.parsed.y}% done`}
        }
      },
      scales:{
        x:{grid:{display:false},ticks:{color:'rgba(255,255,255,.3)'}},
        y:{grid:{color:'rgba(255,255,255,.04)'},min:0,max:100,
           ticks:{color:'rgba(255,255,255,.3)',callback:v=>v+'%',stepSize:25}}
      }
    }
  });
}

function refreshCharts(){
  if(!tChart||!bChart) return;
  const {labels,data}=trendData(currentView);
  tChart.data.labels=labels;
  tChart.data.datasets[0].data=data;
  tChart.data.datasets[0].pointBackgroundColor=data.map(borderFor);
  tChart.update();

  const {labels:l2,data:d2}=barData();
  bChart.data.labels=l2;
  bChart.data.datasets[0].data=d2;
  bChart.data.datasets[0].backgroundColor=d2.map(colorFor);
  bChart.data.datasets[0].borderColor=d2.map(borderFor);
  bChart.update();
}

function switchView(btn,view){
  document.querySelectorAll('.wtab').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active'); currentView=view;
  if(!tChart) return;
  const {labels,data}=trendData(view);
  tChart.data.labels=labels;
  tChart.data.datasets[0].data=data;
  tChart.data.datasets[0].pointBackgroundColor=data.map(borderFor);
  tChart.update();
}

// ══════════════════════════════════
// TIMETABLE
// ══════════════════════════════════
const TT=[
  {day:'Monday',dow:1,slots:[
    {s:'Physics', c:'sub-phy', n:'ttn',      nl:'Theory + Notes'},
    {s:'Math',    c:'sub-math',n:'practice', nl:'Practice'},
    {s:'Biology', c:'sub-bio', n:'practice', nl:'Practice'},
    {s:'Physics', c:'sub-phy', n:'practice', nl:'Practice'},
    {s:'JEE Q.P.',c:'sub-math',n:'jee',      nl:'Any Subject'},
  ]},
  {day:'Tuesday',dow:2,slots:[
    {s:'Chemistry',c:'sub-chem',n:'',nl:''},
    {s:'Chemistry',c:'sub-chem',n:'',nl:''},
    {s:'Math',     c:'sub-math',n:'',nl:''},
    {s:'Math + Bio',c:'sub-bio',n:'ttn',nl:'Theory + Notes'},
    {s:'JEE Q.P.', c:'sub-math',n:'jee',nl:'Any Subject'},
  ]},
  {day:'Wednesday',dow:3,slots:[
    {s:'Physics',  c:'sub-phy', n:'ttn',     nl:'Theory + Notes'},
    {s:'Physics',  c:'sub-phy', n:'practice',nl:'Practice'},
    {s:'Chemistry',c:'sub-chem',n:'',nl:''},
    {s:'Biology',  c:'sub-bio', n:'',nl:''},
    {s:'JEE Q.P.', c:'sub-math',n:'jee',nl:'Any Subject'},
  ]},
  {day:'Thursday',dow:4,slots:[
    {s:'Mil',      c:'sub-mil', n:'',nl:''},
    {s:'Math',     c:'sub-math',n:'',nl:''},
    {s:'Chemistry',c:'sub-chem',n:'',nl:''},
    {s:'Math + Bio',c:'sub-bio',n:'ttn',nl:'Theory + Notes'},
    {s:'JEE Q.P.', c:'sub-math',n:'jee',nl:'Any Subject'},
  ]},
  {day:'Friday',dow:5,slots:[
    {s:'Physics',  c:'sub-phy', n:'ttn',     nl:'Theory + Notes'},
    {s:'Physics',  c:'sub-phy', n:'practice',nl:'Practice'},
    {s:'Chemistry',c:'sub-chem',n:'',nl:''},
    {s:'English',  c:'sub-eng', n:'',nl:''},
    {s:'JEE Q.P.', c:'sub-math',n:'jee',nl:'Any Subject'},
  ]},
  {day:'Saturday',dow:6,slots:[
    {s:'Biology',  c:'sub-bio', n:'',nl:''},
    {s:'Biology',  c:'sub-bio', n:'',nl:''},
    {s:'Math',     c:'sub-math',n:'',nl:''},
    {s:'Math + Bio',c:'sub-bio',n:'ttn',nl:'Theory + Notes'},
    {s:'JEE Q.P.', c:'sub-math',n:'jee',nl:'Any Subject'},
  ]},
  {day:'Sunday',dow:0,slots:[
    {s:'English / Odia',c:'sub-eng',n:'',nl:''},
    {s:'Math',    c:'sub-math',n:'lq', nl:'Long Q Practice'},
    {s:'Physics', c:'sub-phy', n:'lq', nl:'Long Q Practice'},
    {s:'Chemistry',c:'sub-chem',n:'lq',nl:'Long Q Practice'},
    {s:'',        c:'sub-empty',n:'',nl:''},
  ]},
];

const SLOT_TIMES=[[6,0,7,30],[9,0,12,30],[14,0,17,0],[18,30,21,0],[22,0,23,30]];
const SLOT_NAMES=['6:00–7:30','9:00–12:30','2:00–5:00','6:30–9:00','10:00–11:30'];

function curSlot(){
  const n=new Date(),mins=n.getHours()*60+n.getMinutes();
  for(let i=0;i<SLOT_TIMES.length;i++){
    const[sh,sm,eh,em]=SLOT_TIMES[i];
    if(mins>=sh*60+sm&&mins<eh*60+em) return i;
  }
  return -1;
}

function buildTT(){
  const tbody=document.getElementById('ttBody');
  const todayDow=today.getDay();
  const act=curSlot();
  tbody.innerHTML='';

  TT.forEach(row=>{
    const isT=row.dow===todayDow;
    const tr=document.createElement('tr');
    if(isT) tr.className='tt-today';

    const dayTd=document.createElement('td');
    dayTd.innerHTML=`<div class="tt-day">${row.day}${isT?'<br><span style="font-family:var(--mono);font-size:8px;color:var(--g);letter-spacing:1px;opacity:.8">◀ TODAY</span>':''}</div>`;
    tr.appendChild(dayTd);

    row.slots.forEach((s,i)=>{
      const td=document.createElement('td');
      if(isT&&i===act) td.classList.add('slot-active');
      if(!s.s){
        td.innerHTML=`<span class="sub-empty">—</span>`;
      } else {
        const note=s.n?`<span class="tt-note note-${s.n}">${s.nl}</span>`:'';
        td.innerHTML=`<div class="tt-cell"><span class="tt-subject ${s.c}">${s.s}</span>${note}</div>`;
      }
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });

  const pill=document.getElementById('nowPill');
  const nowTxt=document.getElementById('nowText');
  if(act>=0){
    const row=TT.find(r=>r.dow===todayDow);
    if(row&&row.slots[act]?.s){
      pill.classList.add('visible');
      nowTxt.textContent=`NOW: ${row.slots[act].s}  ·  ${SLOT_NAMES[act]}`;
    }
  } else {
    pill.classList.remove('visible');
  }
}

// ══════════════════════════════════
// EDITOR
// ══════════════════════════════════
let eRows=[];
function openEditor(){eRows=tasks.map(t=>({...t}));renderEditor();document.getElementById('editorOverlay').classList.add('open');}
function closeEditor(){document.getElementById('editorOverlay').classList.remove('open');}
function renderEditor(){
  document.getElementById('editorList').innerHTML=eRows.map((t,i)=>`
    <div class="erow">
      <div class="fgrp"><div class="flbl">Task Name</div>
        <input type="text" value="${t.name}" oninput="eRows[${i}].name=this.value" placeholder="Task name…"/></div>
      <div class="fgrp"><div class="flbl">Category</div>
        <select onchange="eRows[${i}].cat=this.value">
          <option value="health"   ${t.cat==='health'  ?'selected':''}>Health</option>
          <option value="study"    ${t.cat==='study'   ?'selected':''}>Study</option>
          <option value="personal" ${t.cat==='personal'?'selected':''}>Personal</option>
          <option value="work"     ${t.cat==='work'    ?'selected':''}>Work</option>
        </select></div>
      <button class="btn-del" onclick="removeRow(${i})">×</button>
    </div>`).join('');
}
function addRow(){eRows.push({id:'t'+Date.now(),name:'New Task',cat:'work',streak:0});renderEditor();}
function removeRow(i){eRows.splice(i,1);renderEditor();}
function saveEditor(){
  const oldIds=new Set(tasks.map(t=>t.id));
  tasks=eRows.map(t=>({...t}));
  const r=todayRec();
  tasks.forEach(t=>{if(r[t.id]===undefined) r[t.id]=false;});
  oldIds.forEach(id=>{if(!tasks.find(t=>t.id===id)) delete r[id];});
  closeEditor();buildTaskList();buildWeekGrid();updateWidgets();refreshCharts();
}

// ══════════════════════════════════
// EXPORT
// ══════════════════════════════════
function openExport(){document.getElementById('exportOverlay').classList.add('open');}
function closeExport(){document.getElementById('exportOverlay').classList.remove('open');}
function doExport(){
  const blob=new Blob([JSON.stringify({tasks,history,exported:today.toISOString()},null,2)],{type:'application/json'});
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='buildup-export.json';a.click();
  closeExport();
}

// backdrop
['editorOverlay','exportOverlay'].forEach(id=>{
  document.getElementById(id).addEventListener('click',e=>{if(e.target===e.currentTarget) document.getElementById(id).classList.remove('open');});
});

// ══════════════════════════════════
// BOOT
// ══════════════════════════════════
buildTaskList();
buildWeekGrid();
updateWidgets();
buildTT();
window.addEventListener('load', initCharts);

// ══════════════════════════════════
// CURSOR GLOW
// ══════════════════════════════════
(function initCursor(){
  const glow = document.getElementById('cursor-glow');

  document.addEventListener('mousemove', e=>{
    glow.style.left=e.clientX+'px';
    glow.style.top =e.clientY+'px';
  });

  document.addEventListener('mouseleave',()=>{glow.style.opacity='0';});
  document.addEventListener('mouseenter',()=>{glow.style.opacity='1';});
})();

// ══════════════════════════════════
// DRAG SYSTEM
// ══════════════════════════════════
const CARD_TEMPLATES = {
  tasks: {
    title: 'Daily Work',
    badge: ()=>`<span class="pbadge ba2" id="fc-task-badge">${document.getElementById('task-badge')?.textContent||'0/0'}</span>`,
    content: ()=>{
      const items = tasks.map(t=>{
        const done=!!todayRec()[t.id];
        return `<div class="task-item ${done?'done':''}" onclick="toggleTask('${t.id}');syncFloating()" style="cursor:pointer">
          <div class="tcheck">${done?'✓':''}</div>
          <div class="tinfo"><div class="tname">${t.name}</div><div class="tmeta">🔥 ${t.streak+(done?1:0)}d streak</div></div>
          <div class="tcat cat-${t.cat}">${t.cat.toUpperCase()}</div>
        </div>`;
      }).join('');
      return `<div class="task-list" style="pointer-events:all">${items}</div>`;
    },
    width: 360
  },
  trend: {
    title: 'Productivity Trend',
    badge: ()=>'<span class="pbadge bg2">Chart</span>',
    content: ()=>`<div style="position:relative;height:180px"><canvas id="floatTrend" width="320" height="180"></canvas></div>`,
    width: 380,
    onMount: (el)=>{
      setTimeout(()=>{
        const c=el.querySelector('#floatTrend');
        if(!c) return;
        const x=c.getContext('2d');
        const g=x.createLinearGradient(0,0,0,180);
        g.addColorStop(0,'rgba(0,255,135,.28)');g.addColorStop(1,'rgba(0,255,135,0)');
        const {labels,data}=trendData(currentView);
        new Chart(x,{type:'line',data:{labels,datasets:[{data,borderColor:'#00ff87',borderWidth:2,backgroundColor:g,fill:true,tension:.4,pointBackgroundColor:'#00ff87',pointRadius:4,pointHoverRadius:7}]},
          options:{responsive:false,animation:{duration:600},plugins:{legend:{display:false},tooltip:{backgroundColor:'rgba(8,13,24,.95)',borderColor:'rgba(0,255,135,.4)',borderWidth:1,titleColor:'#00ff87',bodyColor:'rgba(255,255,255,.4)',callbacks:{label:c=>` ${c.parsed.y}%`}}},
          scales:{x:{grid:{color:'rgba(255,255,255,.04)'},ticks:{color:'rgba(255,255,255,.3)',font:{size:8}}},y:{grid:{color:'rgba(255,255,255,.04)'},min:0,max:100,ticks:{color:'rgba(255,255,255,.3)',callback:v=>v+'%',stepSize:25,font:{size:8}}}}}});
      },100);
    }
  },
  weekly: {
    title: 'Weekly Tracker',
    badge: ()=>`<span class="pbadge bc2">${document.getElementById('week-badge')?.textContent||'—'}</span>`,
    content: ()=>{
      const cols=Array.from({length:7},(_,i)=>offset(i));
      const DAYS=['SUN','MON','TUE','WED','THU','FRI','SAT'];
      let html=`<div style="overflow-x:auto"><table style="border-collapse:separate;border-spacing:2px;min-width:300px;width:100%">`;
      // header
      html+=`<tr><td style="width:100px"></td>`;
      cols.forEach(d=>{
        const isT=dk(d)===todayKey;
        html+=`<td style="text-align:center;font-family:var(--mono);font-size:8px;color:${isT?'var(--g)':'var(--t3)'};padding-bottom:8px">
          <div style="font-family:var(--serif);font-size:12px;font-weight:700">${d.getDate()}</div>
          ${DAYS[d.getDay()]}
        </td>`;
      });
      html+=`</tr>`;
      tasks.forEach(t=>{
        html+=`<tr><td style="font-family:var(--mono);font-size:8px;color:var(--t2);padding:4px 6px 4px 0;white-space:nowrap;overflow:hidden;max-width:100px;text-overflow:ellipsis">${t.name}</td>`;
        cols.forEach(d=>{
          const isFuture=d>today;const isT=dk(d)===todayKey;
          const done=!!(rec(d)[t.id]);
          html+=`<td style="text-align:center;padding:4px">
            <div style="width:14px;height:14px;border-radius:2px;margin:0 auto;
              background:${done?'linear-gradient(135deg,#00ff87,#00c853)':'rgba(255,255,255,.05)'};
              border:1px solid ${done?'transparent':isT?'rgba(0,255,135,.3)':'rgba(255,255,255,.1)'};
              box-shadow:${done?'0 0 8px rgba(0,255,135,.4)':'none'};
              opacity:${isFuture?.3:1}">
            </div>
          </td>`;
        });
        html+=`</tr>`;
      });
      html+=`</table></div>`;
      return html;
    },
    width: 440
  },
  timetable: {
    title: 'Timetable',
    badge: ()=>'<span class="pbadge" style="border-color:rgba(255,255,255,.15);color:var(--t2)">JEE Schedule</span>',
    content: ()=>{
      const todayDow=today.getDay();const act=curSlot();
      const SNMS=['6–7:30','9–12:30','2–5','6:30–9','10–11:30'];
      let html=`<div style="overflow-x:auto"><table style="border-collapse:collapse;min-width:500px;width:100%">
        <tr><th style="font-family:var(--mono);font-size:7px;letter-spacing:1px;color:var(--t3);padding:6px 10px;text-align:left;border-bottom:1px solid var(--border)">Day</th>`;
      SNMS.forEach(s=>html+=`<th style="font-family:var(--mono);font-size:7px;letter-spacing:1px;color:var(--g);opacity:.8;padding:6px 8px;text-align:center;border-bottom:1px solid rgba(0,255,135,.2)">${s}</th>`);
      html+=`</tr>`;
      TT.forEach(row=>{
        const isT=row.dow===todayDow;
        html+=`<tr style="background:${isT?'rgba(0,255,135,.03)':'transparent'}">`;
        html+=`<td style="font-family:var(--serif);font-size:11px;font-weight:700;color:${isT?'var(--g)':'var(--t)'};padding:8px 10px;border-bottom:1px solid rgba(255,255,255,.04);${isT?'border-left:2px solid var(--g)':''}">${row.day.slice(0,3)}</td>`;
        row.slots.forEach((s,i)=>{
          const active=isT&&i===act;
          html+=`<td style="padding:7px 8px;border-bottom:1px solid rgba(255,255,255,.04);text-align:center;background:${active?'rgba(0,255,135,.06)':'transparent'}">
            <span class="tt-subject ${s.c}" style="font-size:11px;${active?'text-shadow:0 0 12px var(--g-glow)':''}">${s.s||'—'}</span>
          </td>`;
        });
        html+=`</tr>`;
      });
      html+=`</table></div>`;
      return html;
    },
    width: 600
  },
  breakdown: {
    title: 'Daily Breakdown',
    badge: ()=>'<span class="pbadge bg2"><span class="ldot" style="margin-right:5px"></span>Live</span>',
    content: ()=>`<div style="position:relative;height:155px"><canvas id="floatBar" width="320" height="155"></canvas></div>`,
    width: 360,
    onMount: (el)=>{
      setTimeout(()=>{
        const c=el.querySelector('#floatBar');
        if(!c) return;
        const x=c.getContext('2d');
        const {labels,data}=barData();
        new Chart(x,{type:'bar',data:{labels,datasets:[{data,backgroundColor:data.map(colorFor),borderColor:data.map(borderFor),borderWidth:1,borderRadius:3}]},
          options:{responsive:false,animation:{duration:600},plugins:{legend:{display:false},tooltip:{backgroundColor:'rgba(8,13,24,.95)',borderColor:'rgba(255,255,255,.1)',borderWidth:1,callbacks:{label:c=>` ${c.parsed.y}%`}}},
          scales:{x:{grid:{display:false},ticks:{color:'rgba(255,255,255,.3)',font:{size:8}}},y:{grid:{color:'rgba(255,255,255,.04)'},min:0,max:100,ticks:{color:'rgba(255,255,255,.3)',callback:v=>v+'%',stepSize:25,font:{size:8}}}}}});
      },100);
    }
  }
};

let cardCount = 0;
const activeCards = {};

function spawnCard(type){
  cardCount++;
  const id='card-'+cardCount;
  const tpl=CARD_TEMPLATES[type];
  if(!tpl) return;

  const card=document.createElement('div');
  card.className='draggable-card';
  card.id=id;
  card.dataset.type=type;

  // Random position near center
  const vw=window.innerWidth, vh=window.innerHeight;
  const w=tpl.width||340;
  const x=Math.max(20,Math.min(vw-w-20, vw/2-w/2+(Math.random()-.5)*300));
  const y=Math.max(60,Math.min(vh-300, 120+(Math.random()-.5)*200));
  card.style.left=x+'px';
  card.style.top=y+'px';
  card.style.width=w+'px';

  card.innerHTML=`
    <div class="drag-handle" data-drag="${id}">
      <span class="ptitle" style="font-size:10px">${tpl.title}</span>
      <div style="display:flex;align-items:center;gap:8px">
        ${tpl.badge()}
        <div class="drag-grip">
          ${Array(6).fill('<span></span>').join('')}
        </div>
        <button onclick="removeCard('${id}')" style="width:22px;height:22px;border:1px solid rgba(255,59,48,.3);background:rgba(255,59,48,.06);color:var(--r);cursor:pointer;font-size:13px;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all .2s" onmouseover="this.style.background='var(--r)';this.style.color='#fff'" onmouseout="this.style.background='rgba(255,59,48,.06)';this.style.color='var(--r)'">×</button>
      </div>
    </div>
    <div class="card-body">
      ${tpl.content()}
    </div>`;

  document.getElementById('dragContainer').appendChild(card);
  activeCards[id]={type};

  if(tpl.onMount) tpl.onMount(card);
  makeDraggable(card);

  // Entrance animation
  card.style.opacity='0';card.style.transform='scale(.92) translateY(10px)';
  requestAnimationFrame(()=>{
    card.style.transition='opacity .3s ease, transform .3s cubic-bezier(.4,0,.2,1), box-shadow .2s ease, border-color .2s ease';
    card.style.opacity='1';card.style.transform='scale(1) translateY(0)';
  });
}

function removeCard(id){
  const card=document.getElementById(id);
  if(!card) return;
  card.style.transition='opacity .25s ease, transform .25s ease';
  card.style.opacity='0';card.style.transform='scale(.9)';
  setTimeout(()=>card.remove(),260);
  delete activeCards[id];
}

function clearCards(){
  Object.keys(activeCards).forEach(id=>removeCard(id));
}

function syncFloating(){
  // Re-render task cards to reflect toggle state
  Object.entries(activeCards).forEach(([id,{type}])=>{
    if(type==='tasks'){
      const tpl=CARD_TEMPLATES.tasks;
      const card=document.getElementById(id);
      if(card) card.querySelector('.card-body').innerHTML=tpl.content();
    }
  });
}

function makeDraggable(card){
  let dragging=false, ox=0, oy=0, startX=0, startY=0;

  const handle=card.querySelector('.drag-handle');

  handle.addEventListener('mousedown',e=>{
    if(e.target.closest('button')) return;
    dragging=true;
    document.body.classList.add('dragging');

    const rect=card.getBoundingClientRect();
    ox=e.clientX-rect.left;
    oy=e.clientY-rect.top;

    card.classList.add('dragging');
    card.style.transition='box-shadow .2s ease, border-color .2s ease, transform .15s ease';

    // bring to front
    card.style.zIndex=600+cardCount;

    e.preventDefault();
  });

  document.addEventListener('mousemove',e=>{
    if(!dragging) return;
    const x=e.clientX-ox;
    const y=e.clientY-oy;
    card.style.left=Math.max(0,x)+'px';
    card.style.top =Math.max(0,y)+'px';
  });

  document.addEventListener('mouseup',()=>{
    if(!dragging) return;
    dragging=false;
    document.body.classList.remove('dragging');
    card.classList.remove('dragging');
    card.style.transform='scale(1)';
  });

  // touch support
  handle.addEventListener('touchstart',e=>{
    if(e.target.closest('button')) return;
    dragging=true;
    const t=e.touches[0];
    const rect=card.getBoundingClientRect();
    ox=t.clientX-rect.left; oy=t.clientY-rect.top;
    card.classList.add('dragging');
    e.preventDefault();
  },{passive:false});

  document.addEventListener('touchmove',e=>{
    if(!dragging) return;
    const t=e.touches[0];
    card.style.left=Math.max(0,t.clientX-ox)+'px';
    card.style.top =Math.max(0,t.clientY-oy)+'px';
    e.preventDefault();
  },{passive:false});

  document.addEventListener('touchend',()=>{
    dragging=false;card.classList.remove('dragging');
  });
}
</script>
</body>
</html>
