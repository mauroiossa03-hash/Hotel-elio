// ====== Navigazione e footer condivisi ======
const PAGES = [
  {href:'index.html',       label:'Home'},
  {href:'hotel.html',       label:"L'Hotel"},
  {href:'camere.html',      label:'Camere'},
  {href:'ristorante.html',  label:'Ristorante'},
  {href:'pizzeria.html',    label:'Pizzeria'},
  {href:'eventi.html',      label:'Eventi'},
  {href:'prezzi.html',      label:'Prezzi'},
  {href:'dove-siamo.html',  label:'Dove Siamo'},
];

function buildHeader(){
  const current = location.pathname.split('/').pop() || 'index.html';
  const links = PAGES.map(p =>
    `<li><a href="${p.href}" class="${p.href===current?'active':''}">${p.label}</a></li>`
  ).join('');
  const solid = document.body.dataset.solidHeader === 'true';
  return `
  <header id="header" class="${solid?'solid':''}">
    <div class="wrap nav-inner">
      <a href="index.html" class="logo">
        <span class="logo-mark">E</span>
        <span class="logo-txt"><strong>Elio</strong><span>Albergo · Ristorante</span></span>
      </a>
      <nav>
        <ul id="menu">
          ${links}
          <li><a href="contatti.html" class="nav-cta ${current==='contatti.html'?'active':''}">Contatti</a></li>
        </ul>
      </nav>
      <button class="burger" id="burger" aria-label="Menu"><span></span><span></span><span></span></button>
    </div>
  </header>`;
}

function buildFooter(){
  const y = new Date().getFullYear();
  return `
  <footer>
    <div class="wrap">
      <div class="foot-grid">
        <div class="foot-col">
          <div class="foot-logo"><span class="logo-mark">E</span><strong>Albergo Ristorante Elio</strong></div>
          <p>Ospitalità familiare a tre stelle nel cuore di Marigliano, in provincia di Napoli. Camere, ristorante pizzeria, giardino con piscina e sale per cerimonie.</p>
        </div>
        <div class="foot-col">
          <h4>Naviga</h4>
          <ul>
            <li><a href="hotel.html">L'Hotel</a></li>
            <li><a href="camere.html">Camere</a></li>
            <li><a href="ristorante.html">Ristorante</a></li>
            <li><a href="pizzeria.html">Pizzeria</a></li>
            <li><a href="prezzi.html">Prezzi</a></li>
            <li><a href="dove-siamo.html">Dove Siamo</a></li>
          </ul>
        </div>
        <div class="foot-col">
          <h4>Contatti</h4>
          <p>Corso Umberto I, 115<br>80034 Marigliano (NA)</p>
          <p>Tel. <a href="tel:+390818411389">081 8411389</a><br>Cell. <a href="tel:+393331608101">333 1608101</a></p>
          <p><a href="mailto:info@hotelelio.com">info@hotelelio.com</a></p>
        </div>
      </div>
      <div class="foot-bottom">P.IVA 010256398 · © ${y} Albergo Ristorante Elio · Tutti i diritti riservati</div>
    </div>
  </footer>`;
}

document.addEventListener('DOMContentLoaded', () => {
  // Inserisci header e footer
  const h = document.getElementById('site-header');
  const f = document.getElementById('site-footer');
  if(h) h.innerHTML = buildHeader();
  if(f) f.innerHTML = buildFooter();

  const header = document.getElementById('header');
  const solid = document.body.dataset.solidHeader === 'true';

  // Scroll effect (solo se header trasparente)
  if(header && !solid){
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    onScroll();
  }

  // Menu mobile
  const burger = document.getElementById('burger');
  const menu = document.getElementById('menu');
  if(burger && menu){
    burger.addEventListener('click', () => menu.classList.toggle('open'));
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
  }
});
