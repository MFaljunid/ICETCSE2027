/* ═══════════════════════════════════════════
   ICETCSE-2027 | Navbar & Footer Injector
   navbar.js — injects shared nav + footer
═══════════════════════════════════════════ */

// Detect if we're in /pages/ subfolder
const isSubPage = window.location.pathname.includes('/pages/');
const root = isSubPage ? '../' : './';

// ── INJECT NAVBAR ──
const navHTML = `
<nav id="navbar">
  <div class="nav-inner">
    <a href="${root}index.html" class="nav-brand">
      <img src="${root}assets/images/logo-mitk.png" class="nav-mitk-logo" alt="MITK Logo">
      <div class="nav-brand-sep"></div>
      <div class="nav-brand-text">
        <span class="nav-brand-name">ICETCSE – 2027</span>
        <span class="nav-brand-sub">Dept. of CSE, MIT Kundapura</span>
      </div>
    </a>
    <div class="nav-links">
      <a href="${root}index.html">Home</a>
      <a href="${root}pages/about.html">About</a>
      <a href="${root}pages/call-for-papers.html">Call for Papers</a>
      <a href="${root}pages/committees.html">Committees</a>
      <a href="${root}pages/important-dates.html">Dates</a>
      <a href="${root}pages/submission.html">Submit</a>
      <a href="${root}pages/registration.html">Register</a>
      <a href="${root}pages/keynote-speakers.html">Speakers</a>
      <a href="${root}pages/tourism.html">Visit</a>
      <a href="${root}pages/contact.html">Contact</a>
    </div>
    <div class="nav-right">
      <img src="${root}assets/images/logo-elsevier.png" class="nav-elsevier-logo" alt="Elsevier Procedia">
      <a href="${root}pages/submission.html" class="nav-links a nav-cta">Submit Paper →</a>
    </div>
    <div class="nav-hamburger" id="navHamburger">
      <span></span><span></span><span></span>
    </div>
  </div>
  <div class="nav-mobile" id="navMobile">
    <a href="${root}index.html">Home</a>
    <a href="${root}pages/about.html">About</a>
    <a href="${root}pages/call-for-papers.html">Call for Papers</a>
    <a href="${root}pages/committees.html">Committees</a>
    <a href="${root}pages/important-dates.html">Important Dates</a>
    <a href="${root}pages/submission.html">Submission</a>
    <a href="${root}pages/registration.html">Registration</a>
    <a href="${root}pages/keynote-speakers.html">Keynote Speakers</a>
    <a href="${root}pages/tourism.html">Places to Visit</a>
    <a href="${root}pages/contact.html">Contact</a>
    <a href="${root}pages/submission.html" class="nav-cta">Submit Paper →</a>
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
      <a href="${root}pages/call-for-papers.html">Tracks</a>
      <a href="${root}pages/submission.html">Submit</a>
      <a href="${root}pages/registration.html">Register</a>
      <a href="${root}pages/tourism.html">Visit</a>
      <a href="${root}pages/contact.html">Contact</a>
    </div>
  </div>
</footer>`;

// Inject into page
document.body.insertAdjacentHTML('afterbegin', navHTML);
document.body.insertAdjacentHTML('beforeend', footerHTML);
