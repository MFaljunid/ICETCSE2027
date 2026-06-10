const isSubPage = window.location.pathname.includes('/pages/');
const root = isSubPage ? '../' : './';

const navHTML = `
<style>
.nav-dropdown { position: relative; }
.nav-dropdown > a { display: inline-flex; align-items: center; gap: 4px; cursor: pointer; }
.nav-dropdown > a::after { content: '▾'; font-size: 10px; opacity: 0.7; transition: transform 0.2s; }
.nav-dropdown:hover > a::after { transform: rotate(180deg); }
.dropdown-menu {
  position: absolute; top: calc(100% + 10px); left: 50%;
  transform: translateX(-50%) translateY(-6px);
  background: rgba(10,22,40,0.97); border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px; padding: 8px; min-width: 180px;
  opacity: 0; visibility: hidden; transition: all 0.2s ease;
  z-index: 9999; backdrop-filter: blur(12px);
  box-shadow: 0 16px 40px rgba(0,0,0,0.4);
}
.nav-dropdown:hover .dropdown-menu { opacity: 1; visibility: visible; transform: translateX(-50%) translateY(0); }
.dropdown-menu a {
  display: flex !important; align-items: center; gap: 8px;
  padding: 8px 12px !important; border-radius: 8px; font-size: 13px !important;
  color: rgba(255,255,255,0.75) !important; transition: all 0.15s !important; white-space: nowrap;
}
.dropdown-menu a:hover { background: rgba(255,255,255,0.07); color: white !important; }
.dd-icon { font-size: 14px; flex-shrink: 0; }
.dropdown-divider { height: 1px; background: rgba(255,255,255,0.07); margin: 4px 8px; }

.nav-hamburger {
  display: none; flex-direction: column; gap: 5px;
  cursor: pointer; padding: 8px; z-index: 9999;
  background: none; border: none;
}
.nav-hamburger span {
  width: 24px; height: 2px; background: white;
  border-radius: 2px; display: block; transition: all 0.3s;
}

.nav-mobile {
  display: none; flex-direction: column;
  background: rgba(8,18,35,0.99);
  border-top: 1px solid rgba(255,255,255,0.08);
  padding: 8px 0 20px; width: 100%;
}
.nav-mobile.show {
  display: flex !important;
}
  .nav-mobile > a {
  padding: 13px 20px; color: rgba(255,255,255,0.85) !important;
  font-size: 15px; border-bottom: 1px solid rgba(255,255,255,0.06); display: block;
}
.nav-mobile > a:hover { color: white !important; background: rgba(255,255,255,0.04); }

.mob-dropdown { width: 100%; }
.mob-dropdown-trigger {
  display: flex; align-items: center; justify-content: space-between;
  padding: 13px 20px; color: rgba(255,255,255,0.85); font-size: 15px;
  cursor: pointer; border-bottom: 1px solid rgba(255,255,255,0.06); user-select: none;
}
.mob-dropdown-trigger:hover { color: white; background: rgba(255,255,255,0.04); }
.mob-arrow { font-size: 11px; transition: transform 0.25s; display: inline-block; }
.mob-dropdown-trigger.open .mob-arrow { transform: rotate(180deg); }
.mob-dropdown-menu {
  display: none; background: rgba(0,180,216,0.06);
  border-left: 3px solid #00b4d8; margin: 0 0 0 20px;
}
.mob-dropdown-menu.show { display: block !important; }
.mob-dropdown-menu a {
  display: block !important; padding: 11px 18px !important;
  font-size: 14px !important; color: rgba(255,255,255,0.7) !important;
  border-bottom: 1px solid rgba(255,255,255,0.04);
}
.mob-dropdown-menu a:last-child { border-bottom: none; }
.mob-dropdown-menu a:hover { color: white !important; background: rgba(255,255,255,0.05); }

.mob-submit-btn {
  margin: 14px 16px 0;
  background: #e8a020; color: #0a1628;
  padding: 12px 20px; border-radius: 6px;
  font-weight: 700; font-size: 14px;
  text-align: center; display: block;
}

@media (max-width: 768px) {
  .nav-links, .nav-right { display: none !important; }
  .nav-hamburger { display: flex !important; }
}
</style>

<nav id="navbar">
  <div class="nav-inner">
    <a href="${root}index.html" class="nav-brand">
      <img src="${root}assets/images/logo-mitk.png" class="nav-mitk-logo" alt="MITK">
      <div class="nav-brand-sep"></div>
      <div class="nav-brand-text">
        <span class="nav-brand-name">ICETCSE \u2013 2027</span>
        <span class="nav-brand-sub">Dept. of CSE, MIT Kundapura</span>
      </div>
    </a>

    <div class="nav-links">
      <a href="${root}index.html">Home</a>
      <div class="nav-dropdown">
        <a href="#">About</a>
        <div class="dropdown-menu">
          <a href="${root}pages/about.html"><span class="dd-icon">🏛️</span> About Conference</a>
          <a href="${root}pages/committees.html"><span class="dd-icon">👥</span> Committees</a>
          <a href="${root}pages/keynote-speakers.html"><span class="dd-icon">🎤</span> Keynote Speakers</a>
        </div>
      </div>
      <div class="nav-dropdown">
        <a href="#">Authors</a>
        <div class="dropdown-menu">
          <a href="${root}pages/call-for-papers.html"><span class="dd-icon">📄</span> Call for Papers</a>
          <a href="https://easychair.org/conferences/?conf=icetcse2027" target="_blank"><span class="dd-icon">📤</span> Submit Paper</a>
          <div class="dropdown-divider"></div>
          <a href="${root}pages/registration.html"><span class="dd-icon">🎟️</span> Registration</a>
        </div>
      </div>
      <a href="${root}pages/important-dates.html">Dates</a>
      <a href="${root}pages/tourism.html">Visit</a>
      <a href="${root}pages/contact.html">Contact</a>
    </div>

    <div class="nav-right">
      <img src="${root}assets/images/logo-elsevier.png" class="nav-elsevier-logo" alt="Elsevier">
      <a href="https://easychair.org/conferences/?conf=icetcse2027" target="_blank" class="nav-cta">Submit Paper \u2192</a>
    </div>

    <button class="nav-hamburger" id="navHamburger" aria-label="Open menu">
      <span></span><span></span><span></span>
    </button>
  </div>

  <div class="nav-mobile" id="navMobile">
    <a href="${root}index.html">🏠 Home</a>

    <div class="mob-dropdown">
      <div class="mob-dropdown-trigger" id="mobTrigger1">
        🏛️ About <span class="mob-arrow">▾</span>
      </div>
      <div class="mob-dropdown-menu" id="mobMenu1">
        <a href="${root}pages/about.html">About Conference</a>
        <a href="${root}pages/committees.html">Committees</a>
        <a href="${root}pages/keynote-speakers.html">Keynote Speakers</a>
      </div>
    </div>

    <div class="mob-dropdown">
      <div class="mob-dropdown-trigger" id="mobTrigger2">
        ✍️ Authors <span class="mob-arrow">▾</span>
      </div>
      <div class="mob-dropdown-menu" id="mobMenu2">
        <a href="${root}pages/call-for-papers.html">Call for Papers</a>
        <a href="https://easychair.org/conferences/?conf=icetcse2027" target="_blank">Submit Paper</a>
        <a href="${root}pages/registration.html">Registration</a>
      </div>
    </div>

    <a href="${root}pages/important-dates.html">📅 Important Dates</a>
    <a href="${root}pages/tourism.html">🌴 Places to Visit</a>
    <a href="${root}pages/contact.html">📬 Contact</a>
    <a href="https://easychair.org/conferences/?conf=icetcse2027" target="_blank" class="mob-submit-btn">Submit Paper \u2192</a>
  </div>
</nav>`;

const footerHTML = `
<footer id="footer">
  <div class="footer-inner">
    <div class="footer-brand">
      <img src="${root}assets/images/logo-mitk.png" class="footer-mitk" alt="MITK">
      <div class="footer-sep"></div>
      <img src="${root}assets/images/logo-elsevier.png" class="footer-elsevier" alt="Elsevier">
      <div style="margin-left:10px;">
        <div class="footer-text">\u00a9 2027 <span>ICETCSE-2027</span> \u00b7 Dept. of CSE, MIT, Kundapura, Udupi, Karnataka, India</div>
        <div class="footer-text">Published by Elsevier Procedia Computer Science \u00b7 Scopus Indexed</div>
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

document.body.insertAdjacentHTML('afterbegin', navHTML);
document.body.insertAdjacentHTML('beforeend', footerHTML);

// HAMBURGER
var ham = document.getElementById('navHamburger');
var mob = document.getElementById('navMobile');
ham.onclick = function() {
mob.classList.toggle('show');
};

// MOBILE DROPDOWNS
document.getElementById('mobTrigger1').onclick = function() { toggleMob('mobMenu1', this); };
document.getElementById('mobTrigger2').onclick = function() { toggleMob('mobMenu2', this); };

function toggleMob(menuId, trigger) {
  var menu = document.getElementById(menuId);
  var isOpen = menu.classList.contains('show');  // ← تتحقق show
  document.querySelectorAll('.mob-dropdown-menu').forEach(function(m) { m.classList.remove('show'); });
  document.querySelectorAll('.mob-dropdown-trigger').forEach(function(t) { t.classList.remove('open'); });
  if (!isOpen) {
    menu.classList.add('show');   // ← أضف show
    trigger.classList.add('open');
  }
}