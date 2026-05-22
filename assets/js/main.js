/* ═══════════════════════════════════════════
   ICETCSE-2027 | Main JavaScript
   main.js
═══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // ── 1. NAVBAR SCROLL EFFECT ──
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    });
  }

  // ── 2. MOBILE HAMBURGER ──
  const hamburger = document.getElementById('navHamburger');
  const mobileMenu = document.getElementById('navMobile');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });
    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
      });
    });
  }

  // ── 3. ACTIVE NAV LINK on scroll ──
  const sections = document.querySelectorAll('section[id], div[id]');
  const navLinks = document.querySelectorAll('.nav-links a, .nav-mobile a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 90) current = s.id;
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === `#${current}` || a.getAttribute('href') === `${current}.html`);
    });
  });

  // ── 4. SCROLL REVEAL ──
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          revealObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    revealEls.forEach(el => revealObs.observe(el));
  }

  // ── 5. COMMITTEE TABS ──
  window.showTab = function(name, btn) {
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    const panel = document.getElementById('tab-' + name);
    if (panel) panel.classList.add('active');
    if (btn)   btn.classList.add('active');
  };

  // ── 6. COUNTDOWN TIMER ──
  // Set your deadline here (YYYY-MM-DDTHH:MM:SS)
const DEADLINE = new Date('2027-07-19T23:59:00')

  function updateCountdown() {
    const now  = new Date();
    const diff = DEADLINE - now;
    const daysEl = document.getElementById('cd-days');
    const hrsEl  = document.getElementById('cd-hrs');
    const minEl  = document.getElementById('cd-min');
    const secEl  = document.getElementById('cd-sec');
    if (!daysEl) return;
    if (diff <= 0) {
      [daysEl, hrsEl, minEl, secEl].forEach(el => el.textContent = '00');
      return;
    }
    daysEl.textContent = String(Math.floor(diff / 86400000)).padStart(2, '0');
    hrsEl.textContent  = String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0');
    minEl.textContent  = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
    secEl.textContent  = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');
  }
  updateCountdown();
  setInterval(updateCountdown, 1000);

  // ── 7. TOURISM SLIDER — build cards ──
  const tourSlides = document.getElementById('tourSlides');
  if (tourSlides) {
const places = [
  { name: 'Maravanthe Beach',         dist: '5 km',   desc: 'Sea on both sides of the road — unique in India',      img: 'assets/images/tourism/maravanthe.jpg',   bg: 'linear-gradient(135deg,#006994,#00b4d8)' },
  { name: 'Kollur Mookambika Temple', dist: '40 km',  desc: 'Sacred temple amid Western Ghats forest',               img: 'assets/images/tourism/kollur.jpg',        bg: 'linear-gradient(135deg,#8b4513,#d47c3a)' },
  { name: 'Udupi Sri Krishna Temple', dist: '50 km',  desc: 'One of the most revered temples in South India',        img: 'assets/images/tourism/udupi.jpg',         bg: 'linear-gradient(135deg,#1a4fa0,#00b4d8)' },
  { name: "St. Mary's Island",        dist: '60 km',  desc: 'Unique basalt rock formations & pristine beaches',      img: 'assets/images/tourism/st-marys.jpg',      bg: 'linear-gradient(135deg,#006400,#228b22)' },
  { name: 'Murudeshwar Temple',       dist: '100 km', desc: 'Giant Shiva statue overlooking the Arabian Sea',        img: 'assets/images/tourism/murudeshwar.jpg',   bg: 'linear-gradient(135deg,#4a0080,#9b30ff)' },
  { name: 'Jog Falls',                dist: '120 km', desc: "India's second-highest plunge waterfall",               img: 'assets/images/tourism/jog-falls.jpg',     bg: 'linear-gradient(135deg,#004d40,#00897b)' },
  { name: 'Kundapura Town',           dist: '2 km',   desc: 'Charming coastal town — fresh seafood & local culture', img: 'assets/images/tourism/kundapura.jpg',     bg: 'linear-gradient(135deg,#0a3d6b,#1a6fa0)' },
  { name: 'Malpe Beach',              dist: '55 km',  desc: 'Beautiful beach near Udupi with boat rides',            img: 'assets/images/tourism/malpe.jpg',         bg: 'linear-gradient(135deg,#7b3f00,#e8820a)' },
];
    // Duplicate for seamless infinite loop
    const all = [...places, ...places];
    all.forEach(p => {
      tourSlides.innerHTML += `
  <div class="tour-card">
    <div class="tour-img" style="background:${p.bg};font-size:0;overflow:hidden;">
      <img src="${p.img}" 
           alt="${p.name}"
           style="width:100%;height:100%;object-fit:cover;transition:transform .5s;"
           onmouseover="this.style.transform='scale(1.08)'"
           onmouseout="this.style.transform='scale(1)'"
           onerror="this.style.opacity='0'">
    </div>
          <div class="tour-overlay">
            <h4>${p.name}</h4>
            <p>${p.desc}</p>
            <span class="tour-dist">📍 ${p.dist} from MITK</span>
          </div>
        </div>`;
    });
  }

  // ── 8. SMOOTH ANCHOR SCROLL (same-page links) ──
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 72;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

});
