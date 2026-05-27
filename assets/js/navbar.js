/* ═══════════════════════════════════════════
   ICETCSE-2027 | Navbar & Footer Injector
   navbar.js — with dropdown menus
═══════════════════════════════════════════ */

const isSubPage = window.location.pathname.includes('/pages/');
const root = isSubPage ? '../' : './';

const navHTML = `

<nav id="navbar">
  <div class="nav-inner">

    <!-- Brand -->
    <a href="${root}index.html" class="nav-brand">
      <img src="${root}assets/images/logo-mitk.png" class="nav-mitk-logo" alt="MITK Logo">
      <div class="nav-brand-sep"></div>
      <div class="nav-brand-text">
        <span class="nav-brand-name">ICETCSE – 2027</span>
        <span class="nav-brand-sub">Dept. of CSE, MIT Kundapura</span>
      </div>
    </a>

    <!-- Desktop Nav Links -->
    <div class="nav-links">

      <a href="${root}index.html">Home</a>

      <!-- About Dropdown -->
      <div class="nav-dropdown">
        <a href="#">About</a>
        <div class="dropdown-menu">
          <a href="${root}pages/about.html">
            <span class="dd-icon">🏛️</span> About Conference
          </a>
          <a href="${root}pages/committees.html">
            <span class="dd-icon">👥</span> Committees
          </a>
          <a href="${root}pages/keynote-speakers.html">
            <span class="dd-icon">🎤</span> Keynote Speakers
          </a>
        </div>
      </div>

      <!-- Authors Dropdown -->
      <div class="nav-dropdown">
        <a href="#">Authors</a>
        <div class="dropdown-menu">
          <a href="${root}pages/call-for-papers.html">
            <span class="dd-icon">📄</span> Call for Papers
          </a>
          <a href="https://easychair.org/conferences/?conf=icetcse2027" target="_blank">
            <span class="dd-icon">📤</span> Submit Paper
          </a>
          <div class="dropdown-divider"></div>
          <a href="${root}pages/registration.html">
            <span class="dd-icon">🎟️</span> Registration
          </a>
        </div>
      </div>

      <a href="${root}pages/important-dates.html">Dates</a>
      <a href="${root}pages/tourism.html">Visit</a>
      <a href="${root}pages/contact.html">Contact</a>

    </div>

    <!-- Right side -->
    <div class="nav-right">
      <img src="${root}assets/images/logo-elsevier.png" class="nav-elsevier-logo" alt="Elsevier Procedia">
      <a href="https://easychair.org/conferences/?conf=icetcse2027"
         target="_blank"
         class="nav-cta">
         Submit Paper →
      </a>
    </div>

    <!-- Hamburger -->
    <div class="nav-hamburger" id="navHamburger">
      <span></span><span></span><span></span>
    </div>

  </div>

  <!-- Mobile Menu -->
  <div class="nav-mobile" id="navMobile">
    <a href="${root}index.html">🏠 Home</a>
    
    <!-- About Mobile Dropdown -->
    <div class="mob-dropdown">
      <div class="mob-dropdown-trigger" onclick="toggleMobDrop(this)">
        🏛️ About <span class="mob-arrow">▾</span>
      </div>
      <div class="mob-dropdown-menu">
        <a href="${root}pages/about.html">About Conference</a>
        <a href="${root}pages/committees.html">Committees</a>
        <a href="${root}pages/keynote-speakers.html">Keynote Speakers</a>
      </div>
    </div>

    <!-- Authors Mobile Dropdown -->
    <div class="mob-dropdown">
      <div class="mob-dropdown-trigger" onclick="toggleMobDrop(this)">
        ✍️ Authors <span class="mob-arrow">▾</span>
      </div>
      <div class="mob-dropdown-menu">
        <a href="${root}pages/call-for-papers.html">Call for Papers</a>
        <a href="https://easychair.org/conferences/?conf=icetcse2027" target="_blank">Submit Paper</a>
        <a href="${root}pages/registration.html">Registration</a>
      </div>
    </div>

    <a href="${root}pages/important-dates.html">📅 Important Dates</a>
    <a href="${root}pages/tourism.html">🌴 Places to Visit</a>
    <a href="${root}pages/contact.html">📬 Contact</a>
    <a href="https://easychair.org/conferences/?conf=icetcse2027"
       target="_blank"
       class="nav-cta">
       Submit Paper →
    </a>
  </div>
</nav>`;

// ── INJECT FOOTER ──
const footerHTML = `
<footer id="footer">
  <div class="footer-inner">
    <div class="footer-brand">
      <img src="${root}assets/images/logo-mitk.png" class="footer-mitk" alt="MITK">
      <div class="footer-sep"></div>
      <img src="${root}assets/images/logo-elsevier.png" class="footer-elsevier" alt="Elsevier">
      <div style="margin-left:10px;">
        <div class="footer-text">© 2027 <span>ICETCSE-2027</span> · Dept. of CSE, MIT, Kundapura, Udupi, Karnataka, India</div>
        <div class="footer-text">Published by Elsevier Procedia Computer Science · Scopus Indexed</div>
      </div>
    </div>
    <div class="footer-links">
      <a href="${root}index.html">Home</a>
      <a href="${root}pages/about.html">About</a>
      <a href="${root}pages/call-for-papers.html">Call for Papers</a>
      <a href="${root}pages/committees.html">Committees</a>
      <a href="${root}pages/important-dates.html">Dates</a>
      <a href="${root}pages/keynote-speakers.html">Speakers</a>
      <a href="https://easychair.org/conferences/?conf=icetcse2027" target="_blank">Submit</a>
      <a href="${root}pages/registration.html">Register</a>
      <a href="${root}pages/tourism.html">Visit</a>
      <a href="${root}pages/contact.html">Contact</a>
    </div>
  </div>
</footer>`;

// ── INJECT ──
document.body.insertAdjacentHTML('afterbegin', navHTML);
document.body.insertAdjacentHTML('beforeend', footerHTML);
// ── HAMBURGER TOGGLE ──
const hamburger = document.getElementById('navHamburger');
const mobile = document.getElementById('navMobile');

if (hamburger && mobile) {
  hamburger.addEventListener('click', () => {
    mobile.classList.toggle('open');
    hamburger.classList.toggle('open');
  });
}

// ── MOBILE DROPDOWNS ──
const isMobile = () => window.innerWidth <= 768;

document.querySelectorAll('.nav-dropdown > a').forEach(trigger => {
  trigger.addEventListener('click', (e) => {
    if (isMobile()) {
      e.preventDefault();

      const menu = trigger.nextElementSibling;
      const isOpen = menu.style.display === 'block';

      // Close others
      document.querySelectorAll('.dropdown-menu')
        .forEach(m => m.style.display = 'none');

      // Toggle current
      menu.style.display = isOpen ? 'none' : 'block';
    }
  });
});

// Close when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.nav-dropdown')) {
    document.querySelectorAll('.dropdown-menu')
      .forEach(m => m.style.display = 'none');
  }
});

window.toggleMobDrop = function(trigger) {

  const menu = trigger.nextElementSibling;
  const isOpen = menu.style.display === 'block';

  document.querySelectorAll('.mob-dropdown-menu')
    .forEach(m => m.style.display = 'none');

  document.querySelectorAll('.mob-dropdown-trigger')
    .forEach(t => t.classList.remove('active'));

  if (!isOpen) {
    menu.style.display = 'block';
    trigger.classList.add('active');
  }
};