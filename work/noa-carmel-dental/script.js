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
    tooth: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c-3 0-4.5 2.2-4.5 5 0 4 1.5 5 1.9 8.3.1 1 .9 1.7 1.6 1.7s1.4-.9 1.4-2c0-1.6 1.2-1.6 1.2 0 0 1.1.7 2 1.4 2s1.5-.7 1.6-1.7C17 15 18.5 14 18.5 10c0-2.8-1.5-7-4.7-7"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-4.35 7-10V6l-7-3-7 3v5c0 5.65 7 10 7 10Z"/><path d="m9 12 2 2 4-4"/></svg>',
    sparkle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.8 2.8M15.2 15.2 18 18M18 6l-2.8 2.8M8.8 15.2 6 18"/></svg>',
    smile: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8 13c.8 1.6 2.2 2.5 4 2.5s3.2-.9 4-2.5"/><path d="M9 9.5h.01M15 9.5h.01"/></svg>',
    implant: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2s6 7 6 12a6 6 0 0 1-12 0c0-5 6-12 6-12Z"/><path d="M12 12v8"/></svg>',
    root: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="7" r="4.2"/><path d="M9 10.5 7 21M15 10.5l2 10.5M12 11v10"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.4 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>'
  };

  // ---------- Global: brand colors, business text, header, footer, nav toggle ----------
  function setVar(name, value) { document.documentElement.style.setProperty(name, value); }
  setVar('--color-bg', cfg.brand.colorBg);
  setVar('--color-ink', cfg.brand.colorInk);
  setVar('--color-accent', cfg.brand.colorAccent);
  setVar('--color-accent2', cfg.brand.colorAccent2);
  setVar('--color-card', cfg.brand.colorCard);

  var pageTitle = document.title;
  document.title = (pageTitle ? pageTitle + ' | ' : '') + cfg.business.name;

  document.querySelectorAll('.js-logo-text').forEach(function (n) { n.textContent = cfg.brand.logoText || cfg.business.name; });
  document.querySelectorAll('.js-nav-cta-text').forEach(function (n) { n.textContent = cfg.hero.ctaPrimaryText; });

  document.querySelectorAll('.js-footer-name').forEach(function (n) { n.textContent = cfg.business.name; });
  document.querySelectorAll('.js-footer-specialty').forEach(function (n) { n.textContent = cfg.business.specialty; });
  document.querySelectorAll('.js-footer-address').forEach(function (n) { n.textContent = cfg.business.address; });
  document.querySelectorAll('.js-footer-phone').forEach(function (n) {
    n.textContent = cfg.business.phoneDisplay; n.href = 'tel:' + cfg.business.phone;
  });
  document.querySelectorAll('.js-footer-email').forEach(function (n) {
    n.textContent = cfg.business.email; n.href = 'mailto:' + cfg.business.email;
  });
  document.querySelectorAll('.js-built-by').forEach(function (n) { n.textContent = cfg.brand.builtBy || ''; });

  // Floating mobile call button
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

  // ---------- Home hero ----------
  if ($('heroTitle')) {
    $('heroEyebrow').textContent = cfg.hero.eyebrow || '';
    $('heroTitle').textContent = cfg.hero.title;
    $('heroSubtitle').textContent = cfg.hero.subtitle;
    $('heroCtaPrimary').textContent = cfg.hero.ctaPrimaryText;
    var heroCtaSecondary = $('heroCtaSecondary');
    if (heroCtaSecondary) heroCtaSecondary.textContent = cfg.hero.ctaSecondaryText;
    var heroVisual = $('heroVisual');
    if (heroVisual && cfg.hero.image) {
      heroVisual.style.backgroundImage = 'url(' + cfg.hero.image + ')';
    }
  }

  // ---------- Highlights ----------
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
    card.querySelector('.icon-badge').innerHTML = ICONS[s.icon] || ICONS.tooth;
    card.querySelector('h3').textContent = s.title;
    card.querySelector('p').textContent = s.summary;
    if (s.duration || s.price) {
      var meta = el('div', 'service-meta');
      if (s.duration) meta.appendChild(el('span', null, s.duration));
      if (s.price) meta.appendChild(el('span', null, s.price));
      card.appendChild(meta);
    }
    return card;
  }
  var servicesTeaser = $('servicesTeaser');
  if (servicesTeaser) {
    (cfg.services || []).slice(0, 3).forEach(function (s) { servicesTeaser.appendChild(renderServiceCard(s)); });
  }
  var servicesFull = $('servicesFull');
  if (servicesFull) {
    (cfg.services || []).forEach(function (s) { servicesFull.appendChild(renderServiceCard(s)); });
  }

  // ---------- About page ----------
  if ($('aboutIntro')) {
    $('aboutIntro').textContent = cfg.about.intro;
    $('aboutPhilosophy').textContent = cfg.about.philosophy;
    var aboutVisual = $('aboutVisual');
    if (aboutVisual && cfg.about.image) aboutVisual.style.backgroundImage = 'url(' + cfg.about.image + ')';
  }
  var teamGrid = $('teamGrid');
  var team = cfg.team || [];
  if (teamGrid) {
    if (team.length) {
      team.forEach(function (m) {
        var card = el('div', 'team-card',
          '<div class="team-avatar"></div><div><h3></h3><div class="team-role"></div><p class="team-bio"></p></div>');
        card.querySelector('.team-avatar').textContent = (m.name || '?').trim().charAt(0);
        card.querySelector('h3').textContent = m.name;
        card.querySelector('.team-role').textContent = m.role || '';
        card.querySelector('.team-bio').textContent = m.bio || '';
        teamGrid.appendChild(card);
      });
    } else {
      var teamSection = $('teamSection');
      if (teamSection) teamSection.style.display = 'none';
    }
  }

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
      tile.appendChild(el('span', 'gallery-caption', item.caption || ''));
      tile.addEventListener('click', function () {
        lightboxImg.src = item.image || '';
        lightboxImg.alt = item.caption || '';
        lightboxImg.style.display = item.image ? 'block' : 'none';
        lightboxCaption.textContent = item.caption || '';
        lightbox.hidden = false;
      });
      galleryGrid.appendChild(tile);
    });
    $('lightboxClose').addEventListener('click', function () { lightbox.hidden = true; });
    lightbox.addEventListener('click', function (e) { if (e.target === lightbox) lightbox.hidden = true; });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') lightbox.hidden = true; });
  }

  // ---------- Testimonials ----------
  var testimonialGrid = $('testimonialGrid');
  if (testimonialGrid) {
    (cfg.testimonials || []).forEach(function (t) {
      var stars = '★'.repeat(t.rating || 5) + '☆'.repeat(5 - (t.rating || 5));
      var card = el('div', 'testimonial-card',
        '<div class="testimonial-stars"></div><p class="testimonial-text"></p><div class="testimonial-name"></div>');
      card.querySelector('.testimonial-stars').textContent = stars;
      card.querySelector('.testimonial-text').textContent = '"' + t.text + '"';
      card.querySelector('.testimonial-name').textContent = t.name;
      testimonialGrid.appendChild(card);
    });
  }

  // ---------- Contact page ----------
  if ($('contactForm')) {
    $('contactFormTitle').textContent = cfg.contact.formTitle;
    $('contactFormSubtitle').textContent = cfg.contact.formSubtitle;
    var treatmentSelect = $('treatmentSelect');
    if (treatmentSelect) {
      (cfg.services || []).forEach(function (s) {
        var opt = el('option'); opt.value = s.title; opt.textContent = s.title;
        treatmentSelect.appendChild(opt);
      });
    }
    var form = $('contactForm');
    var successMsg = $('formSuccess');
    successMsg.textContent = cfg.contact.successMessage;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      successMsg.hidden = false;
      form.reset();
    });

    $('contactAddress').textContent = cfg.business.address;
    var contactPhone = $('contactPhone');
    contactPhone.textContent = cfg.business.phoneDisplay;
    contactPhone.href = 'tel:' + cfg.business.phone;
    var contactWhatsapp = $('contactWhatsapp');
    if (contactWhatsapp) contactWhatsapp.href = 'https://wa.me/' + cfg.business.whatsapp;
    var contactEmail = $('contactEmail');
    contactEmail.textContent = cfg.business.email;
    contactEmail.href = 'mailto:' + cfg.business.email;

    var hoursTable = $('hoursTable');
    if (hoursTable) {
      (cfg.business.hours || []).forEach(function (h) {
        var row = el('tr', null, '<td></td><td></td>');
        row.children[0].textContent = h.days;
        row.children[1].textContent = h.time;
        hoursTable.appendChild(row);
      });
    }
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
