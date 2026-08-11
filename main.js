/* ===========================================================
   THE DUMPING DUDES — Shared Site Script
   =========================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* Mobile nav toggle */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      var expanded = nav.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { nav.classList.remove('open'); });
    });
  }

  /* Highlight current page in nav */
  var here = (window.location.pathname.split('/').pop() || 'index.html');
  document.querySelectorAll('.main-nav a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === here || (here === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* Footer year */
  var yearEl = document.getElementById('year');
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }

  /*
    Newsletter signup handling (homepage/footer).
    The main "Get a Free Quote" form on contact.html is now a live GoHighLevel
    embed (see contact.html) that submits directly into the GHL CRM — no JS
    handling needed for that one.
  */
  var newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thanks for signing up! (Connect this form to your email platform to start collecting real signups.)');
      newsletterForm.reset();
    });
  }

});
