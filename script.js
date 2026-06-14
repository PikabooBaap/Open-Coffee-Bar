/* Open Coffee Bar — site interactions */

// 1. Mobile navigation toggle
var navToggle = document.getElementById('navToggle');
var navLinks = document.getElementById('navLinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', function () {
    var open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  // Close the menu after tapping a link (mobile)
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// 2. Current year in the footer
var yearEl = document.getElementById('year');
if (yearEl) { yearEl.textContent = new Date().getFullYear(); }

// 3. Contact form: simple validation + friendly confirmation
var form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var msg = document.getElementById('formMsg');
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      msg.style.color = '#b0392a';
      msg.textContent = 'Please fill in all the fields so we can get back to you.';
      return;
    }
    msg.style.color = '#6F4E37';
    msg.textContent = 'Thanks, ' + name + '! Your message has been noted. We’ll be in touch soon. ☕';
    form.reset();
  });
}

// 4. Scroll-reveal animation for elements with .reveal
var revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && revealEls.length) {
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(function (el) { io.observe(el); });
} else {
  revealEls.forEach(function (el) { el.classList.add('visible'); });
}

// 5. Back-to-top button
var toTop = document.getElementById('toTop');
if (toTop) {
  window.addEventListener('scroll', function () {
    toTop.style.display = window.scrollY > 500 ? 'block' : 'none';
  });
  toTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
