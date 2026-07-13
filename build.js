const fs = require("fs");
const path = require("path");
const { svgIcon } = require("./icons.js");

const A = (p) => path.join(__dirname, "assets", p);
const b64 = (p, mime) => `data:${mime};base64,${fs.readFileSync(p).toString("base64")}`;

const FONT_BLACK = b64(A("SFUIDisplay-Black.otf"), "font/otf");
const FONT_BOLD = b64(A("OpenSans-Bold.ttf"), "font/ttf");
const FONT_LIGHT = b64(A("OpenSans-Light.ttf"), "font/ttf");
const FONT_XBOLD = b64(A("OpenSans-ExtraBold.ttf"), "font/ttf");

const IMG_LOGO_W = b64(A("enae_white.png"), "image/png");
const IMG_LOGO_H_W = b64(A("enae_horizontal_white.png"), "image/png");
const IMG_FUNDAE = b64(A("fundae.png"), "image/png");
const IMG_WORKSHOP = b64(A("photo_workshop.jpg"), "image/jpeg");
const IMG_CLASSROOM = b64(A("photo_classroom.jpg"), "image/jpeg");
const IMG_PORTRAIT = b64(A("photo_portrait.jpg"), "image/jpeg");

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,600;1,700&display=swap');
@font-face{ font-family:'SFUIDisplay'; src:url(${FONT_BLACK}) format('opentype'); font-weight:900; font-style:normal; }
@font-face{ font-family:'OpenSans'; src:url(${FONT_BOLD}) format('truetype'); font-weight:700; font-style:normal; }
@font-face{ font-family:'OpenSans'; src:url(${FONT_LIGHT}) format('truetype'); font-weight:300; font-style:normal; }
@font-face{ font-family:'OpenSans'; src:url(${FONT_XBOLD}) format('truetype'); font-weight:800; font-style:normal; }

:root{
  --granate:#A91831; --granate2:#7c1226; --negro:#202221; --azul:#DEE5EC;
  --blanco:#ffffff; --gris:#404040; --grismed:#8a8a8a; --panel:#ffffff;
  --f-display:'SFUIDisplay','Arial Black',sans-serif;
  --f-serif:'Playfair Display',Georgia,serif;
  --f-body:'OpenSans',Arial,sans-serif;
}
*{box-sizing:border-box; margin:0; padding:0;}
html,body{ width:100%; height:100%; background:#000; overflow:hidden; font-family:var(--f-body); }
.stage-viewport{ position:fixed; inset:0; background:#100809; }
.stage{ position:absolute; top:50%; left:50%; width:1920px; height:1080px; transform-origin:center center; box-shadow:0 40px 120px rgba(0,0,0,.6); }
.slide{ position:absolute; inset:0; overflow:hidden; opacity:0; pointer-events:none; transition:opacity .5s ease; background:var(--blanco); }
.slide.active{ opacity:1; pointer-events:auto; }

/* ---------- shared utility ---------- */
.kicker{ font-family:var(--f-body); font-weight:700; font-size:20px; letter-spacing:6px; text-transform:uppercase; }
.ghost-num{ position:absolute; font-family:var(--f-display); font-weight:900; line-height:.78; color:rgba(169,24,49,.07); pointer-events:none; user-select:none; }
.rule{ height:4px; background:var(--granate); }
.pill{ display:inline-flex; align-items:center; gap:14px; padding:20px 40px; border-radius:999px; font-family:var(--f-body); font-weight:700; font-size:18px; letter-spacing:2px; text-transform:uppercase; }
.pill.solid{ background:var(--granate); color:#fff; }
.pill.outline-w{ border:2px solid rgba(255,255,255,.85); color:#fff; }
.logo-h{ height:54px; width:auto; display:block; }
.icon-badge{ width:76px; height:76px; border-radius:20px; display:flex; align-items:center; justify-content:center; background:var(--azul); color:var(--granate); flex:none; }
.icon-badge svg{ color:var(--granate); }
.small-caps{ font-family:var(--f-body); font-weight:800; font-size:14px; letter-spacing:3px; text-transform:uppercase; color:var(--granate); }
.serif-italic{ font-family:var(--f-serif); font-style:italic; font-weight:600; }
.footer-tag{ position:absolute; left:90px; bottom:52px; font-family:var(--f-serif); font-style:italic; font-size:22px; }
.page-index{ position:absolute; right:90px; bottom:52px; font-family:var(--f-body); font-weight:700; font-size:15px; letter-spacing:2px; }

/* ---------- diagonal photo clips ---------- */
.clip-slant-r{ clip-path: polygon(16% 0, 100% 0, 100% 100%, 0% 100%); }
.clip-slant-l{ clip-path: polygon(0 0, 100% 0, 84% 100%, 0 100%); }
.seam{ position:absolute; top:0; bottom:0; width:6px; background:var(--granate); transform:skewX(-11deg); }

/* ================= SLIDE 1 — COVER ================= */
#s1{ background:linear-gradient(150deg,#171213 0%,var(--negro) 46%); color:#fff; }
#s1 .photo{ position:absolute; top:0; right:0; width:60%; height:100%; }
#s1 .photo img{ width:100%; height:100%; object-fit:cover; }
#s1 .seam{ left:calc(40% - 3px); }
#s1 .content{ position:relative; z-index:2; padding:88px 0 0 96px; max-width:900px; }
#s1 .kicker{ color:var(--granate); opacity:.95; }
#s1 h1{ font-family:var(--f-display); font-weight:900; font-size:88px; line-height:1.0; margin-top:34px; letter-spacing:-1px; }
#s1 h1 em{ font-family:var(--f-serif); font-style:italic; font-weight:600; color:var(--granate); font-size:1.02em; display:inline-block; }
#s1 p.lede{ font-family:var(--f-body); font-weight:300; font-size:22px; line-height:1.55; color:rgba(255,255,255,.82); max-width:560px; margin-top:34px; }
#s1 .ctarow{ margin-top:52px; display:flex; gap:24px; align-items:center; }
#s1 .contact-line{ margin-top:60px; font-size:15px; color:rgba(255,255,255,.55); letter-spacing:.5px; }
#s1 .logo-row{ display:flex; align-items:center; }

/* ================= SLIDE 2 — PROPUESTA DE VALOR ================= */
#s2{ background:#fff; }
#s2 .ghost-num{ font-size:640px; right:-70px; top:-140px; }
#s2 .head{ padding:84px 96px 0 96px; position:relative; z-index:1; }
#s2 .head .small-caps{ margin-bottom:18px; }
#s2 h2{ font-family:var(--f-display); font-weight:900; font-size:56px; color:var(--negro); line-height:1.05; max-width:1150px; }
#s2 h2 em{ font-family:var(--f-serif); font-style:italic; font-weight:600; color:var(--granate); }
#s2 .items{ position:relative; z-index:1; margin:56px 96px 0 96px; display:grid; grid-template-columns:repeat(4,1fr); gap:24px; }
#s2 .item{ background:var(--azul); border-radius:10px; padding:38px 30px; }
#s2 .item .idx{ font-family:var(--f-display); font-weight:900; font-size:15px; color:var(--granate); letter-spacing:2px; margin-top:18px; margin-bottom:8px; }
#s2 .item h3{ font-family:var(--f-body); font-weight:700; font-size:21px; color:var(--negro); margin:0 0 14px 0; }
#s2 .item p{ font-family:var(--f-body); font-weight:300; font-size:15px; line-height:1.55; color:var(--gris); }

/* ================= SLIDE 3 — TU ELIGES ================= */
#s3{ background:var(--negro); color:#fff; }
#s3 .diag-panel{ position:absolute; inset:0; background:linear-gradient(100deg, var(--negro) 58%, var(--granate2) 58.4%, var(--granate) 100%); clip-path:polygon(0 0,100% 0,100% 100%, 30% 100%); opacity:.9;}
#s3 .head{ position:relative; z-index:2; padding:84px 0 0 96px; }
#s3 h2{ font-family:var(--f-display); font-weight:900; font-size:54px; color:#fff; }
#s3 h2 em{ font-family:var(--f-serif); font-style:italic; font-weight:600; color:var(--azul); }
#s3 .sub{ font-family:var(--f-body); font-weight:300; font-size:19px; color:rgba(255,255,255,.68); margin-top:14px; }
#s3 .steps{ position:relative; z-index:2; margin:56px 96px 0 96px; display:flex; flex-direction:column; max-width:1250px; }
#s3 .step{ display:flex; align-items:center; gap:32px; padding:26px 0; border-bottom:1px solid rgba(255,255,255,.14); }
#s3 .step .n{ width:64px; height:64px; border-radius:16px; background:rgba(255,255,255,.08); border:1px solid rgba(255,255,255,.2); display:flex; align-items:center; justify-content:center; color:var(--azul); flex:none; }
#s3 .step .txt{ flex:1; display:flex; align-items:baseline; gap:28px; }
#s3 .step h3{ font-family:var(--f-body); font-weight:700; font-size:19px; letter-spacing:2px; width:220px; flex:none; }
#s3 .step p{ font-family:var(--f-body); font-weight:300; font-size:16px; line-height:1.5; color:rgba(255,255,255,.72); }

/* ================= SLIDE 4 — FUNDAE ================= */
#s4{ background:#fff; }
#s4 .ghost-num{ font-size:520px; left:-60px; bottom:-160px; }
#s4 .head{ padding:84px 96px 0 96px; position:relative; z-index:1; }
#s4 h2{ font-family:var(--f-display); font-weight:900; font-size:54px; color:var(--negro); }
#s4 h2 em{ font-family:var(--f-serif); font-style:italic; font-weight:600; color:var(--granate); }
#s4 .body{ position:relative; z-index:1; display:flex; gap:70px; margin:56px 96px 0 96px; align-items:flex-start; }
#s4 .left{ flex:1.15; }
#s4 .left p.intro{ font-family:var(--f-body); font-weight:300; font-size:19px; line-height:1.6; color:var(--gris); }
#s4 .qa{ margin-top:34px; }
#s4 .qa h4{ font-family:var(--f-body); font-weight:700; font-size:19px; color:var(--granate); margin-bottom:10px; }
#s4 .qa p{ font-family:var(--f-body); font-weight:300; font-size:16px; line-height:1.55; color:var(--gris); }
#s4 .reqs{ margin-top:30px; display:flex; flex-direction:column; gap:14px; }
#s4 .req{ display:flex; gap:14px; align-items:center; }
#s4 .req .icon-badge{ width:38px; height:38px; border-radius:10px; }
#s4 .req .icon-badge svg{ width:22px; height:22px; }
#s4 .req span{ font-family:var(--f-body); font-weight:400; font-size:16px; color:var(--gris); }
#s4 .right{ flex:.85; }
#s4 .card{ background:var(--negro); color:#fff; border-radius:4px; padding:52px 44px; clip-path:polygon(0 0,100% 0,100% 88%, 86% 100%, 0 100%); position:relative; }
#s4 .card .fundae-plate{ background:#fff; border-radius:10px; padding:22px 26px; display:inline-block; }
#s4 .card .fundae-plate img{ height:52px; width:auto; display:block; }
#s4 .card .stat{ font-family:var(--f-display); font-weight:900; font-size:118px; color:var(--azul); line-height:1; margin-top:36px; }
#s4 .card .stat-label{ font-family:var(--f-body); font-weight:700; font-size:15px; letter-spacing:3px; color:rgba(255,255,255,.75); margin-top:10px; }
#s4 .card .note{ font-family:var(--f-body); font-weight:300; font-size:14px; color:rgba(255,255,255,.55); margin-top:26px; line-height:1.5; }

/* ================= SLIDE 5 & 6b — AREAS (detalle) ================= */
#s5{ background:var(--negro); }
#s6b{ background:var(--negro); }
#s5 .head, #s6b .head{ padding:52px 96px 0 96px; }
#s5 h2, #s6b h2{ font-family:var(--f-display); font-weight:900; font-size:44px; color:#fff; }
#s5 h2 em, #s6b h2 em{ font-family:var(--f-serif); font-style:italic; font-weight:600; color:var(--azul); }
#s5 .sub, #s6b .sub{ font-family:var(--f-body); font-weight:300; font-size:15px; color:rgba(255,255,255,.55); margin-top:8px; }
#s5 .areas, #s6b .areas{ margin:34px 96px 0 96px; display:flex; flex-direction:column; gap:14px; }
.area-card{ position:relative; display:flex; align-items:flex-start; gap:26px; background:var(--azul); border-radius:8px; padding:20px 30px; min-height:118px; }
.area-card .num{ font-family:var(--f-display); font-weight:900; font-size:52px; color:var(--granate); line-height:1; width:80px; flex:none; padding-top:2px; }
.area-card .title{ width:220px; flex:none; font-family:var(--f-body); font-weight:700; font-size:15.5px; line-height:1.28; color:var(--negro); padding-top:6px; }
.area-card .cols{ display:flex; gap:24px; flex:1; padding-top:4px; }
.area-card .col{ flex:1; font-family:var(--f-body); font-weight:400; font-size:10.3px; line-height:14px; color:var(--gris); }
.area-card .col div{ margin-bottom:4px; padding-left:10px; position:relative; }
.area-card .col div::before{ content:'—'; position:absolute; left:0; top:0; color:var(--granate); font-size:9px; }

/* ================= SLIDE 6 — EMPRESAS ================= */
#s6{ background:#fff; }
#s6 .photo{ position:absolute; top:0; left:0; width:46%; height:100%; }
#s6 .photo img{ width:100%; height:100%; object-fit:cover; }
#s6 .seam{ left:calc(46% - 3px); }
#s6 .right{ position:absolute; right:0; top:0; width:54%; height:100%; padding:100px 96px 0 90px; }
#s6 h2{ font-family:var(--f-display); font-weight:900; font-size:50px; color:var(--negro); line-height:1.08; }
#s6 h2 em{ font-family:var(--f-serif); font-style:italic; font-weight:600; color:var(--granate); }
#s6 .clients{ margin-top:52px; display:flex; flex-direction:column; }
#s6 .client{ display:flex; align-items:center; gap:22px; padding:22px 0; border-bottom:1px solid #eee; }
#s6 .client .tick{ width:28px; height:6px; background:var(--granate); flex:none; }
#s6 .client span{ font-family:var(--f-display); font-weight:900; font-size:27px; color:var(--negro); }
#s6 .stats{ margin-top:44px; display:flex; gap:70px; }
#s6 .stat b{ display:block; font-family:var(--f-display); font-weight:900; font-size:44px; color:var(--granate); }
#s6 .stat small{ font-family:var(--f-body); font-weight:700; font-size:12.5px; letter-spacing:2px; color:var(--grismed); text-transform:uppercase; }

/* ================= SLIDE 7 — KPIs ================= */
#s7{ background:#fff; }
#s7 .photo{ position:absolute; right:0; top:0; width:34%; height:100%; }
#s7 .photo img{ width:100%; height:100%; object-fit:cover; }
#s7 .seam{ left:calc(66% - 3px); }
#s7 .head{ position:relative; z-index:1; padding:84px 0 0 96px; max-width:1150px; }
#s7 h2{ font-family:var(--f-display); font-weight:900; font-size:52px; color:var(--negro); }
#s7 h2 em{ font-family:var(--f-serif); font-style:italic; font-weight:600; color:var(--granate); }
#s7 .sub{ font-family:var(--f-body); font-weight:300; font-size:18px; color:var(--gris); margin-top:12px; }
#s7 .kpis{ position:relative; z-index:1; margin:64px 0 0 96px; display:grid; grid-template-columns:repeat(3,1fr); width:1150px; gap:0; }
#s7 .kpi{ padding:0 40px 0 0; border-left:3px solid var(--granate); padding-left:26px; }
#s7 .kpi b{ display:block; font-family:var(--f-display); font-weight:900; font-size:60px; color:var(--negro); line-height:1; }
#s7 .kpi small{ display:block; font-family:var(--f-body); font-weight:700; font-size:13px; letter-spacing:2px; color:var(--grismed); text-transform:uppercase; margin-top:14px; line-height:1.5; }
#s7 .accred{ position:relative; z-index:1; margin:70px 0 0 96px; width:1150px; font-family:var(--f-body); font-weight:400; font-size:13px; color:var(--grismed); }

/* ================= SLIDE 8 — CIERRE ================= */
#s8{ background:var(--negro); color:#fff; }
#s8 .block{ position:absolute; top:-14%; right:-8%; width:52%; height:80%; background:linear-gradient(135deg,var(--granate),var(--granate2)); clip-path:polygon(24% 0,100% 0,76% 100%,0% 100%); opacity:.92; }
#s8 .block2{ position:absolute; bottom:-16%; left:-6%; width:26%; height:46%; background:var(--granate); clip-path:polygon(0 20%, 100% 0, 100% 100%, 0 100%); opacity:.5; }
#s8 .center{ position:relative; z-index:2; height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; }
#s8 .center img{ height:80px; margin-bottom:52px; }
#s8 h2{ font-family:var(--f-display); font-weight:900; font-size:52px; }
#s8 .accent{ font-family:var(--f-serif); font-style:italic; font-weight:600; font-size:34px; color:var(--azul); margin-top:22px; }
#s8 .pill{ margin-top:48px; }
#s8 .contact{ margin-top:44px; font-family:var(--f-body); font-weight:400; font-size:18px; color:rgba(255,255,255,.8); letter-spacing:.4px; }
#s8 .addr{ margin-top:12px; font-family:var(--f-body); font-weight:300; font-size:14px; color:rgba(255,255,255,.45); }

.content-footer{ position:absolute; left:96px; right:96px; bottom:44px; display:flex; align-items:center; justify-content:space-between; z-index:2; }
.content-footer .brandmark{ display:flex; align-items:center; gap:10px; font-family:var(--f-body); font-weight:700; font-size:12px; letter-spacing:3px; color:var(--grismed); text-transform:uppercase; }
.content-footer .dot{ width:7px; height:7px; background:var(--granate); border-radius:50%; flex:none; }
.content-footer .idx{ font-family:var(--f-body); font-weight:700; font-size:12px; letter-spacing:2px; color:var(--grismed); }
#s3 .content-footer .brandmark, #s3 .content-footer .idx{ color:rgba(255,255,255,.5); }

/* ---------- nav chrome (fixed, unscaled) ---------- */
.nav{ position:fixed; left:50%; bottom:26px; transform:translateX(-50%); z-index:50; display:flex; align-items:center; gap:18px; background:rgba(20,20,20,.72); backdrop-filter:blur(6px); padding:10px 18px; border-radius:999px; }
.nav button{ width:36px; height:36px; border-radius:999px; border:none; background:rgba(255,255,255,.12); color:#fff; font-size:16px; cursor:pointer; display:flex; align-items:center; justify-content:center; }
.nav button:hover{ background:var(--granate); }
.nav .count{ color:#fff; font-family:var(--f-body); font-weight:700; font-size:13px; letter-spacing:1px; min-width:64px; text-align:center; }
`;

function icon(name, size) {
  return svgIcon(name, size);
}

// ---- Áreas formativas: contenido completo (8 áreas) ----
const AREAS = [
  { n: "01", title: "Habilidades Directivas", cols: [
    ["Aplicación del coaching en la gestión de equipos","Comunicación no verbal","Cuadro de mando integral","Delegación","Dirección por objetivos","El compromiso y la cultura empresarial","Gestión de conflictos"],
    ["Gestión del Cambio","Gestión del tiempo","Inteligencia Emocional","La profesión del directivo","Liderazgo","Motivación","Plan de desarrollo directivo","Planificación estratégica"],
    ["Planificación estratégica","Presentaciones eficaces","Reuniones eficaces","Técnicas de negociación efectivas"],
  ]},
  { n: "02", title: "Recursos Humanos", cols: [
    ["Comunicación Interna","Diseño de sistemas de retribución","Diseño del organigrama organizativo","Diseño y evaluación de un Plan de Formación","El Trabajo en equipo como elemento dinamizador de las organizaciones","Evaluación del desempeño"],
    ["Fuentes de Financiación de la Formación","Gestión por competencias","Identificación y retención del talento","Legislación laboral y de la Seguridad Social","Negociación Colectiva","Plan de igualdad"],
    ["Planificación de plantillas","Prevención de Riesgos Laborales","Resolución efectiva de conflictos","Responsabilidad social corporativa","Selección de personal"],
  ]},
  { n: "03", title: "Marketing y Ventas", cols: [
    ["Cierre de ventas","Cómo gestionar quejas y reclamaciones","Desarrollo de las habilidades comerciales y técnicas de venta","Elaboración de un plan de marketing","Evaluación de las acciones comercial","Fidelización de Clientes","Gestión de imagen corporativa"],
    ["Gestión de la reputación online","Internacionalización de la empresa","La excelencia en el servicio","Marketing Internacional","Marketing online","Mistery Shopper","Nuevas herramientas de marketing en las redes sociales"],
    ["Project finance","Protocolo","Sistema de información de ventas","Técnicas de investigación de mercado","Técnicas de negociación y ventas","Telemarketing"],
  ]},
  { n: "04", title: "Producción, Logística y Comercio Internacional", cols: [
    ["Comercio Exterior","Contratación Internacional","Distribución y Logística Comercial","Financiación Internacional","Gestión de proyectos","Incoterms","Internacionalización de la empresa","Lean manufacturing","Logística del frío"],
    ["Logística Interna. Gestión del almacén, optimización del espacio disponible.","Logística internacional","Logística inversa","Marketing Internacional","Negociación con proveedores","Planificación y control del Aprovisionamiento. Gestión de compras."],
    ["Planificación, gestión y control de la producción","Supply Chain Management","Técnicas de Gestión y Optimización","Transporte y Operadores Logísticos"],
  ]},
  { n: "05", title: "Laboral y Fiscal", cols: [
    ["Derecho ambiental","Derecho empresarial","Derecho urbanístico","Fiscalidad internacional","Impuesto de Sociedades","Impuesto sobre el Valor Añadido","Impuesto sobre la Renta de las Personas Físicas","La negociación en el ámbito laboral"],
    ["Ley concursal","Modalidades y modificaciones de contratación","Nóminas","Procedimientos de gestión, inspector y recaudatorio"],
  ]},
  { n: "06", title: "Economía y Finanzas", cols: [
    ["Diagnóstico de la posición económico financiera","Finanzas internacionales","Finanzas para directivos no financieros","Fusiones y adquisiciones","Gestión de cobros e impagados","Gestión de la tesorería","Interpretación de los estados contables"],
    ["Los costes relevantes en la toma de decisiones","Mercados financieros","Planificación financiera y presupuestos","Project finance","Técnicas de negociación con entidades financieras","Viabilidad financiera de los proyectos de inversión"],
  ]},
  { n: "07", title: "Gerencia de Riesgos", cols: [
    ["Elementos y Técnicas Generales de Aplicación en la Gerencia de Riesgos","Experiencias Empresariales Prácticas y Análisis de Programas de Seguros","Financiación de Riesgos Puros y Especulativos","Gerencia de Riesgos en la Administración Pública"],
    ["Identificación y Evolución de Riesgos","Organización y Economía de la Gerencia de Riesgos","Reducción y Control de Riesgos","Vida y Accidentes"],
  ]},
  { n: "08", title: "Ofimática e Idiomas", cols: [
    ["Excel para directivos","Excel para las finanzas","Microsoft Project","Power Point","Word"],
  ]},
];

function renderAreaCard(area, dark) {
  const cols = area.cols.map((col) => `<div class="col">${col.map((it) => `<div>${it}</div>`).join("")}</div>`).join("");
  return `<div class="area-card${dark ? " dark" : ""}">
    <div class="num">${area.n}</div>
    <div class="title">${area.title}</div>
    <div class="cols">${cols}</div>
  </div>`;
}

const SLIDES = `
<!-- ============ SLIDE 1 ============ -->
<section class="slide active" id="s1">
  <div class="photo clip-slant-r"><img src="${IMG_WORKSHOP}"/></div>
  <div class="seam"></div>
  <div class="content">
    <div class="logo-row"><img class="logo-h" src="${IMG_LOGO_H_W}"/></div>
    <div class="kicker" style="margin-top:60px;">Formación In Company</div>
    <h1>Potencia el<br><em>talento</em><br>de tu equipo</h1>
    <p class="lede">Programas a medida, prácticos y 100% bonificados por FUNDAE para impulsar la productividad, la motivación y el liderazgo de tu organización.</p>
    <div class="ctarow">
      <div class="pill solid">Solicita información</div>
    </div>
    <div class="contact-line">968 899 899 &nbsp;·&nbsp; info@enae.es &nbsp;·&nbsp; www.enae.es</div>
  </div>
  <div class="footer-tag" style="color:rgba(255,255,255,.55);">Lead your future</div>
  <div class="page-index" style="color:rgba(255,255,255,.4);">01 / 09</div>
</section>

<!-- ============ SLIDE 2 ============ -->
<section class="slide" id="s2">
  <div class="ghost-num">02</div>
  <div class="head">
    <div class="small-caps">Por qué ENAE In Company</div>
    <h2>Profesionales actualizados,<br><em>empresas que lideran</em></h2>
  </div>
  <div class="items">
    <div class="item">
      <div class="icon-badge">${icon("target", 34)}</div>
      <div class="idx">01</div>
      <h3>Formación a medida</h3>
      <p>Diseñamos contigo un programa alineado con los objetivos reales de tu equipo.</p>
    </div>
    <div class="item">
      <div class="icon-badge">${icon("sliders", 34)}</div>
      <div class="idx">02</div>
      <h3>Programas adaptados</h3>
      <p>Definimos juntos la modalidad y el enfoque que mejor encajan con tu negocio.</p>
    </div>
    <div class="item">
      <div class="icon-badge">${icon("layers", 34)}</div>
      <div class="idx">03</div>
      <h3>Acompañamiento completo</h3>
      <p>Un equipo de ENAE te acompaña en el diseño y el seguimiento del programa.</p>
    </div>
    <div class="item">
      <div class="icon-badge">${icon("medal", 34)}</div>
      <div class="idx">04</div>
      <h3>Experiencia</h3>
      <p>Más de 37 años formando a profesionales que lideran sus organizaciones.</p>
    </div>
  </div>
  <div class="content-footer">
    <div class="brandmark"><div class="dot"></div>ENAE Business School</div>
    <div class="idx">02 / 09</div>
  </div>
</section>

<!-- ============ SLIDE 3 ============ -->
<section class="slide" id="s3">
  <div class="diag-panel"></div>
  <div class="head">
    <h2>Tú eliges: qué,<br>cuándo y <em>cómo</em></h2>
    <div class="sub">Tu empresa, tus decisiones</div>
  </div>
  <div class="steps">
    <div class="step">
      <div class="n">${icon("list", 30)}</div>
      <div class="txt"><h3>CONTENIDOS</h3><p>Defines qué áreas necesitas reforzar en tu equipo.</p></div>
    </div>
    <div class="step">
      <div class="n">${icon("clock", 30)}</div>
      <div class="txt"><h3>DURACIÓN</h3><p>Cursos intensivos, sesiones ejecutivas o formaciones completas.</p></div>
    </div>
    <div class="step">
      <div class="n">${icon("toggle", 30)}</div>
      <div class="txt"><h3>MODALIDAD</h3><p>Presencial en tu empresa o en ENAE, online o híbrida.</p></div>
    </div>
    <div class="step">
      <div class="n">${icon("calendar", 30)}</div>
      <div class="txt"><h3>HORARIOS</h3><p>Nos adaptamos al ritmo de tu equipo: mañanas, tardes o fines de semana.</p></div>
    </div>
  </div>
  <div class="content-footer">
    <div class="brandmark"><div class="dot"></div>ENAE Business School</div>
    <div class="idx">03 / 09</div>
  </div>
</section>

<!-- ============ SLIDE 4 ============ -->
<section class="slide" id="s4">
  <div class="ghost-num">04</div>
  <div class="head">
    <h2>Formación <em>bonificada</em><br>para empresas</h2>
  </div>
  <div class="body">
    <div class="left">
      <p class="intro">Cada año, ENAE Business School diseña formaciones In Company que pueden bonificarse a través del crédito de formación de la Fundación Estatal para la Formación en el Empleo (FUNDAE), sin coste directo para tu empresa.</p>
      <div class="qa">
        <h4>¿Qué significa que una formación sea bonificable?</h4>
        <p>El coste del programa se compensa con las cotizaciones de la empresa a la Seguridad Social.</p>
      </div>
      <div class="reqs">
        <div class="req"><div class="icon-badge">${icon("check", 20)}</div><span>Estar al corriente con Hacienda y la Seguridad Social</span></div>
        <div class="req"><div class="icon-badge">${icon("check", 20)}</div><span>Cotizar por formación profesional</span></div>
        <div class="req"><div class="icon-badge">${icon("check", 20)}</div><span>Disponer de crédito según su plantilla y cotización</span></div>
      </div>
    </div>
    <div class="right">
      <div class="card">
        <div class="fundae-plate"><img src="${IMG_FUNDAE}"/></div>
        <div class="stat">100%</div>
        <div class="stat-label">FORMACIÓN BONIFICADA</div>
        <div class="note">Impulsada por la bolsa de crédito de FUNDAE — sin coste directo para tu compañía.</div>
      </div>
    </div>
  </div>
  <div class="content-footer">
    <div class="brandmark"><div class="dot"></div>ENAE Business School</div>
    <div class="idx">04 / 09</div>
  </div>
</section>

<!-- ============ SLIDE 5 — ÁREAS FORMATIVAS (1/2) ============ -->
<section class="slide" id="s5">
  <div class="head">
    <h2>8 áreas formativas<br>a tu <em>medida</em></h2>
    <div class="sub">Todo el conocimiento que tu equipo necesita, en un único programa — 1 de 2</div>
  </div>
  <div class="areas">
    ${AREAS.slice(0, 4).map((a) => renderAreaCard(a)).join("\n")}
  </div>
  <div class="content-footer">
    <div class="brandmark" style="color:rgba(255,255,255,.5);"><div class="dot"></div>ENAE Business School</div>
    <div class="idx" style="color:rgba(255,255,255,.5);">05 / 09</div>
  </div>
</section>

<!-- ============ SLIDE 6 — ÁREAS FORMATIVAS (2/2) ============ -->
<section class="slide" id="s6b">
  <div class="head">
    <h2>8 áreas formativas<br>a tu <em>medida</em></h2>
    <div class="sub">Todo el conocimiento que tu equipo necesita, en un único programa — 2 de 2</div>
  </div>
  <div class="areas">
    ${AREAS.slice(4, 8).map((a) => renderAreaCard(a)).join("\n")}
  </div>
  <div class="content-footer">
    <div class="brandmark" style="color:rgba(255,255,255,.5);"><div class="dot"></div>ENAE Business School</div>
    <div class="idx" style="color:rgba(255,255,255,.5);">06 / 09</div>
  </div>
</section>

<!-- ============ SLIDE 7 — EMPRESAS ============ -->
<section class="slide" id="s6">
  <div class="photo clip-slant-l"><img src="${IMG_CLASSROOM}"/></div>
  <div class="seam"></div>
  <div class="right">
    <h2>Empresas que ya<br>han <em>confiado</em> en nosotros</h2>
    <div class="clients">
      <div class="client"><div class="tick"></div><span>Navantia</span></div>
      <div class="client"><div class="tick"></div><span>grupoHefame</span></div>
      <div class="client"><div class="tick"></div><span>Cosentino</span></div>
      <div class="client"><div class="tick"></div><span>La Boca te Lía</span></div>
    </div>
    <div class="stats">
      <div class="stat"><b>+200</b><small>Empresas colaboradoras</small></div>
      <div class="stat"><b>+150</b><small>Docentes</small></div>
    </div>
  </div>
  <div class="page-index" style="color:var(--grismed);">07 / 09</div>
</section>

<!-- ============ SLIDE 8 — KPIs ============ -->
<section class="slide" id="s7">
  <div class="photo clip-slant-r"><img src="${IMG_PORTRAIT}"/></div>
  <div class="seam"></div>
  <div class="head">
    <h2>Por qué formar a tu<br>equipo con <em>ENAE</em></h2>
    <div class="sub">Más de tres décadas acompañando a profesionales líderes</div>
  </div>
  <div class="kpis">
    <div class="kpi"><b>+37</b><small>Años de<br>experiencia</small></div>
    <div class="kpi"><b>+150</b><small>Profesores nacionales<br>e internacionales</small></div>
    <div class="kpi"><b>+200</b><small>Empresas<br>colaboradoras</small></div>
  </div>
  <div class="accred">Acreditación AACSB en proceso · Agencia de Colocación Autorizada nº 1400000046 · Universidad Politécnica de Cartagena · Cámara de Comercio de Murcia · INFO</div>
  <div class="page-index" style="color:var(--grismed);">08 / 09</div>
</section>

<!-- ============ SLIDE 9 — CIERRE ============ -->
<section class="slide" id="s8">
  <div class="block"></div>
  <div class="block2"></div>
  <div class="center">
    <img src="${IMG_LOGO_W}"/>
    <h2>¿Preparados para impulsar a tu equipo?</h2>
    <div class="accent">Lead your future</div>
    <div class="pill solid">Solicita información</div>
    <div class="contact">968 899 899 &nbsp;·&nbsp; info@enae.es &nbsp;·&nbsp; www.enae.es</div>
    <div class="addr">Edificio ENAE nº 13 · Campus Universitario de Espinardo · 30100 Murcia</div>
  </div>
  <div class="page-index" style="color:rgba(255,255,255,.4);">09 / 09</div>
</section>
`;

const HTML = `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8"/>
<title>ENAE · Formación In Company</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,600;1,700&display=swap" rel="stylesheet">
<style>${CSS}</style>
</head>
<body>
  <div class="stage-viewport">
    <div class="stage" id="stage">
      ${SLIDES}
    </div>
  </div>
  <div class="nav">
    <button id="prev" aria-label="Anterior">&#8592;</button>
    <div class="count" id="count">01 / 09</div>
    <button id="next" aria-label="Siguiente">&#8594;</button>
  </div>
<script>
  const stage = document.getElementById('stage');
  const slides = Array.from(document.querySelectorAll('.slide'));
  const countEl = document.getElementById('count');
  let idx = 0;
  function show(i){
    idx = (i + slides.length) % slides.length;
    slides.forEach((s,j)=> s.classList.toggle('active', j===idx));
    countEl.textContent = String(idx+1).padStart(2,'0') + ' / ' + String(slides.length).padStart(2,'0');
  }
  document.getElementById('prev').onclick = ()=> show(idx-1);
  document.getElementById('next').onclick = ()=> show(idx+1);
  document.addEventListener('keydown', e=>{
    if(e.key==='ArrowRight' || e.key===' ') show(idx+1);
    if(e.key==='ArrowLeft') show(idx-1);
  });
  function fit(){
    const vw = window.innerWidth, vh = window.innerHeight;
    const scale = Math.min(vw/1920, vh/1080);
    stage.style.transform = 'translate(-50%,-50%) scale(' + scale + ')';
  }
  window.addEventListener('resize', fit);
  fit();
  show(0);
</script>
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, "ENAE_InCompany_Modern.html"), HTML);
console.log("OK bytes:", HTML.length);
