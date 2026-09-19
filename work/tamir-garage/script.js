(function () {
  var cfg = window.SITE_CONFIG;
  if (!cfg) return;

  function el(tag, className, html) {
    var e = document.createElement(tag);
    if (className) e.className = className;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }
  function $(id) { return document.getElementById(id); }

  var ICONS = {
    years: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="17" height="15" rx="2"/><path d="M3.5 9.5h17M8 3v3.5M16 3v3.5"/></svg>',
    guarantee: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5 19 6v5.5c0 4.4-2.9 7.6-7 8.9-4.1-1.3-7-4.5-7-8.9V6z"/><path d="m9.2 12.2 1.9 1.9 3.7-3.9"/></svg>',
    certification: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="9" r="5.5"/><path d="m8.5 13.5-1.3 6.5 4.8-2.4 4.8 2.4-1.3-6.5"/></svg>',
    rating: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 3.5l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17.3l-5.4 3.1 1-6.1L3.2 10l6.1-.9z"/></svg>',
    diagnose: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2-2z"/></svg>',
    brakes: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.2"/><path d="M12 3v3M12 18v3M21 12h-3M6 12H3M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1M18.4 18.4l-2.1-2.1M7.7 7.7 5.6 5.6"/></svg>',
    tire: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="3"/><path d="M12 3.5v3M12 17.5v3M3.5 12h3M17.5 12h3M6 6l2.2 2.2M15.8 15.8 18 18M18 6l-2.2 2.2M6 18l2.2-2.2"/></svg>',
    ac: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h16M4 16h16M8 4l-2 4M18 4l2 4M8 20l-2-4M18 20l2-4"/></svg>',
    battery: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="16" height="10" rx="1.5"/><path d="M19 11h2v4h-2M7 8V6M11 8V6"/><path d="m9.5 11 1.8 1.8L15 9"/></svg>',
    transmission: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="7" cy="7" r="3"/><circle cx="17" cy="17" r="3"/><path d="M9.5 9.5 14.5 14.5M7 10v4a3 3 0 0 0 3 3h2"/></svg>',
    oil: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5C9 8 6.5 11 6.5 14.5a5.5 5.5 0 0 0 11 0C17.5 11 15 8 12 3.5Z"/></svg>',
    inspect: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16V11l1.8-4.2A2 2 0 0 1 7.6 5.6h8.8a2 2 0 0 1 1.8 1.2L20 11v5"/><path d="M4 16h16M6.5 16v2M17.5 16v2"/><circle cx="7.5" cy="13" r=".6" fill="currentColor" stroke="none"/><circle cx="16.5" cy="13" r=".6" fill="currentColor" stroke="none"/><path d="m9 9.5 1.6 1.6L14 8"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.4 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>'
  };

  // ---------- Global: brand colors, business text, header, footer, nav toggle ----------
  function setVar(name, value) { document.documentElement.style.setProperty(name, value); }
  setVar('--color-primary', cfg.brand.colorPrimary);
  setVar('--color-accent', cfg.brand.colorAccent);
  setVar('--color-dark', cfg.brand.colorDark);
  setVar('--color-light', cfg.brand.colorLight);
  if (cfg.brand.colorSteel) setVar('--color-steel', cfg.brand.colorSteel);

  var pageTitle = document.title;
  document.title = (pageTitle ? pageTitle + ' | ' : '') + cfg.business.name;

  document.querySelectorAll('.js-logo-text').forEach(function (n) { n.textContent = cfg.brand.logoText || cfg.business.name; });
  document.querySelectorAll('.js-nav-cta-text').forEach(function (n) { n.textContent = cfg.hero.ctaPrimaryText; });
  document.querySelectorAll('.js-footer-name').forEach(function (n) { n.textContent = cfg.business.name; });
  document.querySelectorAll('.js-footer-specialty').forEach(function (n) { n.textContent = cfg.business.specialty; });
  document.querySelectorAll('.js-footer-address').forEach(function (n) { n.textContent = cfg.business.address; });
  document.querySelectorAll('.js-footer-phone').forEach(function (n) { n.textContent = cfg.business.phoneDisplay; n.href = 'tel:' + cfg.business.phone; });
  document.querySelectorAll('.js-footer-email').forEach(function (n) { n.textContent = cfg.business.email; n.href = 'mailto:' + cfg.business.email; });
  document.querySelectorAll('.js-built-by').forEach(function (n) { n.textContent = cfg.brand.builtBy || ''; });

  // Floating mobile call button (never animated - critical content)
  var callBtn = $('mobileCallBtn');
  if (callBtn) {
    callBtn.href = 'tel:' + cfg.business.phone;
    callBtn.innerHTML = ICONS.phone;
    callBtn.setAttribute('aria-label', 'התקשרו ל' + cfg.business.name);
  }

  // Mobile nav toggle
  var navToggle = $('navToggle');
  var navLinks = $('navLinks');
  if (navToggle && navLinks) {
    navToggle.innerHTML = ICONS.menu;
    navToggle.addEventListener('click', function () {
      var open = navLinks.classList.toggle('open');
      navToggle.innerHTML = open ? ICONS.close : ICONS.menu;
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        navLinks.classList.remove('open');
        navToggle.innerHTML = ICONS.menu;
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Sticky header shadow on scroll
  var header = document.querySelector('.site-header');
  if (header) {
    addEventListener('scroll', function () {
      header.classList.toggle('is-scrolled', scrollY > 40);
    }, { passive: true });
  }

  // ---------- Hero ----------
  if ($('heroTitle')) {
    $('heroTitle').textContent = cfg.hero.title;
    $('heroSubtitle').textContent = cfg.hero.subtitle;
    $('heroCtaPrimary').textContent = cfg.hero.ctaPrimaryText;
    var heroCtaSecondary = $('heroCtaSecondary');
    if (heroCtaSecondary) heroCtaSecondary.textContent = cfg.hero.ctaSecondaryText;
    var heroCtaPrimary = $('heroCtaPrimary');
    if (heroCtaPrimary && heroCtaPrimary.tagName === 'A' && heroCtaPrimary.dataset.call) heroCtaPrimary.href = 'tel:' + cfg.business.phone;
    var heroVisual = $('heroVisual');
    if (heroVisual && cfg.hero.image) heroVisual.style.backgroundImage = 'url(' + cfg.hero.image + ')';
  }

  // ---------- Trust bar ----------
  var trustBarInner = $('trustBarInner');
  if (trustBarInner) {
    var trust = cfg.trust || {};
    if (trust.yearsFounded) trustBarInner.appendChild(el('div', 'trust-item', '<span class="icon">' + ICONS.years + '</span><span><strong>מאז ' + trust.yearsFounded + '</strong><span>שנות ותק בענף</span></span>'));
    if (trust.guarantee) trustBarInner.appendChild(el('div', 'trust-item', '<span class="icon">' + ICONS.guarantee + '</span><span><strong>אחריות</strong><span>' + trust.guarantee + '</span></span>'));
    if (trust.certification) trustBarInner.appendChild(el('div', 'trust-item', '<span class="icon">' + ICONS.certification + '</span><span><strong>מוסמכים</strong><span>' + trust.certification + '</span></span>'));
    if (trust.rating) trustBarInner.appendChild(el('div', 'trust-item', '<span class="icon">' + ICONS.rating + '</span><span><strong>' + trust.rating + ' / 5</strong><span>' + (trust.ratingCount || 'דירוג לקוחות') + '</span></span>'));
    if (!trustBarInner.children.length) $('trustBar').style.display = 'none';
  }

  // ---------- Highlights (about page) ----------
  var highlightsRow = $('highlightsRow');
  if (highlightsRow) {
    (cfg.highlights || []).forEach(function (h) {
      var item = el('div', 'highlight-item', '<h3></h3><p></p>');
      item.querySelector('h3').textContent = h.title;
      item.querySelector('p').textContent = h.text;
      highlightsRow.appendChild(item);
    });
  }

  // ---------- Services (teaser on home, full list on services.html) ----------
  function renderServiceCard(s) {
    var card = el('div', 'service-card', '<div class="icon-badge"></div><h3></h3><p></p>');
    card.querySelector('.icon-badge').innerHTML = ICONS[s.icon] || ICONS.diagnose;
    card.querySelector('h3').textContent = s.title;
    card.querySelector('p').textContent = s.description;
    return card;
  }
  var servicesTeaser = $('servicesTeaser');
  if (servicesTeaser) (cfg.services || []).slice(0, 3).forEach(function (s) { servicesTeaser.appendChild(renderServiceCard(s)); });
  var servicesFull = $('servicesFull');
  if (servicesFull) (cfg.services || []).forEach(function (s) { servicesFull.appendChild(renderServiceCard(s)); });

  // ---------- Process (how it works) ----------
  var processGrid = $('processGrid');
  if (processGrid) {
    (cfg.process || []).forEach(function (step, i) {
      var card = el('div', 'process-step', '<h3></h3><p></p>');
      card.setAttribute('data-step', String(i + 1).padStart(2, '0'));
      card.querySelector('h3').textContent = step.title;
      card.querySelector('p').textContent = step.description;
      processGrid.appendChild(card);
    });
  }

  // ---------- About page ----------
  if ($('aboutIntro')) {
    $('aboutIntro').textContent = cfg.about.intro;
    var aboutVisual = $('aboutVisual');
    if (aboutVisual && cfg.about.image) aboutVisual.style.backgroundImage = 'url(' + cfg.about.image + ')';
  }
  if ($('aboutPhilosophy')) $('aboutPhilosophy').textContent = cfg.about.philosophy;

  // ---------- Gallery ----------
  var galleryGrid = $('galleryGrid');
  if (galleryGrid) {
    var lightbox = $('lightbox');
    var lightboxImg = $('lightboxImg');
    var lightboxCaption = $('lightboxCaption');
    (cfg.gallery || []).forEach(function (item) {
      var tile = el('button', 'gallery-item');
      tile.type = 'button';
      if (item.image) tile.style.backgroundImage = 'url(' + item.image + ')';
      tile.setAttribute('aria-label', item.caption || 'תמונה מהמוסך');
      tile.appendChild(el('span', 'gallery-caption', item.caption || ''));
      tile.addEventListener('click', function () {
        lightboxImg.src = item.image || '';
        lightboxImg.alt = item.caption || '';
        lightboxCaption.textContent = item.caption || '';
        lightbox.hidden = false;
      });
      galleryGrid.appendChild(tile);
    });
    $('lightboxClose').innerHTML = ICONS.close;
    $('lightboxClose').addEventListener('click', function () { lightbox.hidden = true; });
    lightbox.addEventListener('click', function (e) { if (e.target === lightbox) lightbox.hidden = true; });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !lightbox.hidden) lightbox.hidden = true; });
  }

  // ---------- Testimonials ----------
  var testimonialGrid = $('testimonialGrid');
  if (testimonialGrid) {
    (cfg.testimonials || []).forEach(function (t) {
      var stars = '★'.repeat(t.rating || 5) + '☆'.repeat(5 - (t.rating || 5));
      var card = el('div', 'testimonial-card', '<div class="testimonial-stars"></div><p class="testimonial-text"></p><div class="testimonial-name"></div>');
      card.querySelector('.testimonial-stars').textContent = stars;
      card.querySelector('.testimonial-text').textContent = '"' + t.text + '"';
      card.querySelector('.testimonial-name').textContent = t.name;
      testimonialGrid.appendChild(card);
    });
  }

  // ---------- Visit / Contact: hours + map + form ----------
  var hoursTable = $('hoursTable');
  if (hoursTable) {
    (cfg.hours || []).forEach(function (h) {
      var row = el('tr', null, '<td></td><td></td>');
      row.children[0].textContent = h.day;
      row.children[1].textContent = h.hours;
      hoursTable.appendChild(row);
    });
  }
  var addressLine = $('addressLine');
  if (addressLine) addressLine.textContent = cfg.business.address;
  var mapFrame = $('mapFrame');
  if (mapFrame) {
    var mapQuery = encodeURIComponent(cfg.business.mapQuery || cfg.business.address);
    mapFrame.src = 'https://www.google.com/maps?q=' + mapQuery + '&output=embed';
  }

  if ($('contactForm')) {
    $('contactFormTitle').textContent = cfg.contact.formTitle;
    $('contactFormSubtitle').textContent = cfg.contact.formSubtitle;
    var form = $('contactForm');
    var successMsg = $('formSuccess');
    successMsg.textContent = cfg.contact.successMessage;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      successMsg.hidden = false;
      form.reset();
    });
    var contactAddress = $('contactAddress');
    if (contactAddress) contactAddress.textContent = cfg.business.address;
    var contactPhone = $('contactPhone');
    if (contactPhone) { contactPhone.textContent = cfg.business.phoneDisplay; contactPhone.href = 'tel:' + cfg.business.phone; }
    var contactEmail = $('contactEmail');
    if (contactEmail) { contactEmail.textContent = cfg.business.email; contactEmail.href = 'mailto:' + cfg.business.email; }
  }

  // ---------- Scroll reveal (tier א' - fade + translateY, once) ----------
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealTargets = document.querySelectorAll('.service-card');
  if (reduce) {
    revealTargets.forEach(function (t) { t.classList.add('is-in'); });
  } else if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { threshold: .15, rootMargin: '0px 0px -10% 0px' });
    revealTargets.forEach(function (t, i) {
      t.style.transitionDelay = Math.min(i, 5) * 60 + 'ms';
      io.observe(t);
    });
  } else {
    revealTargets.forEach(function (t) { t.classList.add('is-in'); });
  }

  // ---------- Page-load reveal + soft page-transition on internal links ----------
  addEventListener('DOMContentLoaded', function () { document.body.classList.add('is-ready'); });
  if (!reduce) {
    document.querySelectorAll('a[href$=".html"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        if (a.target || a.hasAttribute('download') || e.metaKey || e.ctrlKey || e.shiftKey) return;
        e.preventDefault();
        document.body.style.transition = 'opacity .26s ' + getComputedStyle(document.documentElement).getPropertyValue('--ease-out');
        document.body.style.opacity = '0';
        setTimeout(function () { location.href = a.href; }, 260);
      });
    });
  }
})();
