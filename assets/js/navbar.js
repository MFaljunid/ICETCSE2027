/* ═══════════════════════════════════════════
   ICETCSE-2027 | Navbar & Footer Injector
   navbar.js — with dropdown menus
═══════════════════════════════════════════ */

const isSubPage = window.location.pathname.includes('/pages/');
const root = isSubPage ? '../' : './';

const navHTML = `
<style>
/* ── DROPDOWN ── */
.nav-dropdown {
  position: relative;
}

.nav-dropdown > a {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
}

.nav-dropdown > a::after {
  content: '▾';
  font-size: 10px;
  opacity: 0.7;
  transition: transform 0.2s;
}

.nav-dropdown:hover > a::after {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  background: rgba(10, 22, 40, 0.97);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px;
  padding: 8px;
  min-width: 180px;
  opacity: 0;
  visibility: hidden;
  transform: translateX(-50%) translateY(-6px);
  transition: all 0.2s ease;
  z-index: 1000;
  backdrop-filter: blur(12px);
  box-shadow: 0 16px 40px rgba(0,0,0,0.4);
}

.dropdown-menu::before {
  content: '';
  position: absolute;
  top: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 10px;
  height: 10px;
  background: rgba(10,22,40,0.97);
  border-left: 1px solid rgba(255,255,255,0.1);
  border-top: 1px solid rgba(255,255,255,0.1);
  transform: translateX(-50%) rotate(45deg);
}

.nav-dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}

.dropdown-menu a {
  display: flex !important;
  align-items: center;
  gap: 8px;
  padding: 8px 12px !important;
  border-radius: 8px;
  font-size: 13px !important;
  color: rgba(255,255,255,0.75) !important;
  transition: all 0.15s !important;
  white-space: nowrap;
}

.dropdown-menu a:hover {
  background: rgba(255,255,255,0.07);
  color: white !important;
}

.dropdown-menu a .dd-icon {
  font-size: 14px;
  flex-shrink: 0;
}

.dropdown-divider {
  height: 1px;
  background: rgba(255,255,255,0.07);
  margin: 4px 8px;
}
</style>

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
    <a href="${root}pages/about.html">🏛️ About Conference</a>
    <a href="${root}pages/committees.html">👥 Committees</a>
    <a href="${root}pages/keynote-speakers.html">🎤 Keynote Speakers</a>
    <a href="${root}pages/call-for-papers.html">📄 Call for Papers</a>
    <a href="${root}pages/important-dates.html">📅 Important Dates</a>
    <a href="${root}pages/registration.html">🎟️ Registration</a>
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
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('navHamburger');
  const mobile    = document.getElementById('navMobile');
  if (hamburger && mobile) {
    hamburger.addEventListener('click', () => {
      mobile.classList.toggle('open');
      hamburger.classList.toggle('open');
    });
  }
});