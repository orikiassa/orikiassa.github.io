/* אורי אסא · בניית אתרים לעסקים
   סקריפט משותף לכל ארבעת העמודים. כל פונקציה בודקת שהאלמנט שלה קיים
   בעמוד הנוכחי לפני שהיא רצה, כך שאותו קובץ עובד בכל עמוד בלי שגיאות. */

(function () {
  'use strict';

  var CFG = window.SITE_CONFIG;
  if (!CFG) { return; }

  var $  = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  function esc(str) {
    return String(str)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* ---------- קישורי יצירת קשר ---------- */

  function waLink(text) {
    return 'https://wa.me/' + CFG.business.whatsapp +
           '?text=' + encodeURIComponent(text || CFG.business.whatsappText);
  }
  function telLink() {
    return 'tel:' + CFG.business.phone;
  }

  function wireContactLinks() {
    $$('.js-wa').forEach(function (el) {
      el.href = waLink();
      el.rel = 'noopener';
      el.target = '_blank';
    });
    $$('.js-tel').forEach(function (el) { el.href = telLink(); });
    $$('.js-phone-text').forEach(function (el) { el.textContent = CFG.business.phoneDisplay; });
    $$('.js-brand-name').forEach(function (el) { el.textContent = CFG.business.name; });
    $$('.js-tagline').forEach(function (el) { el.textContent = CFG.business.tagline; });
    $$('.js-area').forEach(function (el) { el.textContent = CFG.business.area; });
    $$('.js-year').forEach(function (el) { el.textContent = new Date().getFullYear(); });
  }

  /* ---------- ניווט ---------- */

  function wireNav() {
    var toggle = $('#navToggle');
    var menu = $('#navMenu');
    if (toggle && menu) {
      toggle.addEventListener('click', function () {
        var open = menu.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        toggle.setAttribute('aria-label', open ? 'סגירת תפריט' : 'פתיחת תפריט');
      });
      menu.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') {
          menu.classList.remove('is-open');
          toggle.setAttribute('aria-expanded', 'false');
        }
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && menu.classList.contains('is-open')) {
          menu.classList.remove('is-open');
          toggle.setAttribute('aria-expanded', 'false');
          toggle.focus();
        }
      });
    }

    // בדף הבית הניווט נחשף רק אחרי מסך הפתיחה
    var nav = $('#siteNav');
    var ask = $('#ask');
    if (nav && ask && document.body.classList.contains('nav-hidden-until-scroll')) {
      var sync = function () {
        nav.classList.toggle('is-shown', window.scrollY > ask.offsetHeight * 0.66);
      };
      sync();
      window.addEventListener('scroll', sync, { passive: true });
      window.addEventListener('resize', sync, { passive: true });
    }
  }

  /* ---------- מסך הפתיחה ---------- */

  function renderAsk() {
    var host = $('#askContent');
    if (!host) { return; }
    host.innerHTML =
      '<div class="ask-id">' +
        '<b>' + esc(CFG.business.name) + '</b>' +
        '<span>' + esc(CFG.business.tagline) + ' · ' + esc(CFG.business.area) + '</span>' +
        '<a class="js-tel" href="' + telLink() + '" dir="ltr">' + esc(CFG.business.phoneDisplay) + '</a>' +
      '</div>' +
      '<h1>' + esc(CFG.ask.question) +
      ' <span class="mark">' + esc(CFG.ask.questionMark) + '</span></h1>' +
      '<dl class="ask-meta">' + CFG.ask.meta.map(function (m) {
        return '<div><dt>' + esc(m.k) + '</dt><dd>' + esc(m.v) + '</dd></div>';
      }).join('') + '</dl>';
  }

  /* ---------- קצב שאלה-תשובה ---------- */

  function renderQa() {
    var host = $('#qaList');
    if (!host) { return; }
    host.className = 'qa-list';
    host.innerHTML = CFG.qa.map(function (item, i) {
      return '<div class="qa-row reveal">' +
               '<p class="num">' + ('0' + (i + 1)) + '</p>' +
               '<h3 class="q">' + esc(item.q) + ' <em>' + esc(item.mark) + '</em>' +
                 esc(item.qEnd || '') + '</h3>' +
               '<p class="a">' + esc(item.a) + '</p>' +
             '</div>';
    }).join('');
  }

  /* ---------- תהליך ---------- */

  function renderProcess() {
    var host = $('#processList');
    if (!host) { return; }
    host.innerHTML = CFG.process.map(function (step) {
      return '<div class="step reveal">' +
               '<h3>' + esc(step.title) + '</h3>' +
               '<p>' + esc(step.text) + '</p>' +
             '</div>';
    }).join('');
  }

  /* ---------- עבודות ---------- */

  function renderWorkCards() {
    var host = $('#workCards');
    if (!host) { return; }
    host.innerHTML = CFG.work.map(function (w) {
      return '<article class="work-card reveal">' +
               '<img class="shot" src="' + esc(w.shot) + '" alt="צילום מסך של ' + esc(w.title) +
                 ' - ' + esc(w.field) + '" loading="lazy" width="800" height="500">' +
               '<div class="body">' +
                 '<span class="tag">' + esc(w.tag) + '</span>' +
                 '<h3>' + esc(w.title) + '</h3>' +
                 '<p class="field">' + esc(w.field) + '</p>' +
                 '<p class="blurb">' + esc(w.blurb) + '</p>' +
                 '<p class="actions"><a class="link-arrow" href="work/' + esc(w.slug) +
                   '/index.html" target="_blank" rel="noopener">לצפייה בהדגמה החיה</a></p>' +
               '</div>' +
               '<dl class="meta">' + (w.meta || []).map(function (m) {
                 return '<div><dt>' + esc(m.k) + '</dt><dd>' + esc(m.v) + '</dd></div>';
               }).join('') + '</dl>' +
             '</article>';
    }).join('');
  }

  function renderWorkDetails() {
    var host = $('#workDetails');
    if (!host) { return; }
    host.innerHTML = CFG.work.map(function (w) {
      return '<article class="work-detail reveal">' +
               '<div class="layout">' +
                 '<img class="shot" src="' + esc(w.shot) + '" alt="צילום מסך של ' + esc(w.title) +
                   ' - ' + esc(w.field) + '" loading="lazy" width="1000" height="625">' +
                 '<div>' +
                   '<span class="tag">' + esc(w.tag) + '</span>' +
                   '<h2>' + esc(w.title) + '</h2>' +
                   '<p class="field">' + esc(w.field) + '</p>' +
                   '<p class="blurb">' + esc(w.blurb) + '</p>' +
                   '<ul>' + w.points.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ul>' +
                   '<p class="actions"><a class="btn btn-ghost" href="work/' + esc(w.slug) +
                     '/index.html" target="_blank" rel="noopener">פתיחת ההדגמה החיה</a></p>' +
                 '</div>' +
               '</div>' +
             '</article>';
    }).join('');
  }

  /* ---------- אודות + ראיות ---------- */

  function renderAbout() {
    var host = $('#aboutBody');
    if (host) {
      host.innerHTML = CFG.about.paras.map(function (p) {
        return '<p>' + esc(p) + '</p>';
      }).join('');
    }
    var lede = $('#aboutLede');
    if (lede) { lede.textContent = CFG.about.lede; }
  }

  function renderEvidence() {
    var host = $('#evidenceList');
    if (!host) { return; }
    host.innerHTML = CFG.evidence.items.map(function (item) {
      return '<div class="evidence-row reveal">' +
               '<p class="stat">' + esc(item.stat) + '</p>' +
               '<div>' +
                 '<p class="claim">' + esc(item.claim) + '</p>' +
                 '<p class="source">' + esc(item.source) + '</p>' +
                 '<p class="note">' + esc(item.note) + '</p>' +
               '</div>' +
             '</div>';
    }).join('');

    var h = $('#evidenceHonesty');
    if (h) {
      h.innerHTML = '<h3>' + esc(CFG.evidence.honesty.title) + '</h3>' +
                    '<p>' + esc(CFG.evidence.honesty.text) + '</p>' +
                    '<p class="close">' + esc(CFG.evidence.honesty.close) + '</p>';
    }
    var lede = $('#evidenceLede');
    if (lede) { lede.textContent = CFG.evidence.lede; }
  }

  /* ---------- טקסטים של יצירת קשר (גם בעמודים בלי טופס) ---------- */

  function fillContactCopy() {
    $$('.js-form-note').forEach(function (el) { el.textContent = CFG.contact.formNote; });
    $$('.js-contact-lede').forEach(function (el) { el.textContent = CFG.contact.lede; });
    $$('.js-area-note').forEach(function (el) { el.textContent = CFG.contact.areaNote; });
    $$('.js-direct-title').forEach(function (el) { el.textContent = CFG.contact.directTitle; });
    $$('.js-form-title').forEach(function (el) { el.textContent = CFG.contact.formTitle; });
    $$('.js-form-lead').forEach(function (el) { el.textContent = CFG.contact.formLead; });
  }

  /* ---------- טופס יצירת קשר -> הודעת וואטסאפ מוכנה ---------- */

  function wireForm() {
    var form = $('#contactForm');
    if (!form) { return; }

    var nameInput = $('#f-name');
    var businessInput = $('#f-business');
    var statusEl = $('#formStatus');
    var submitBtn = $('#formSubmit');
    var fields = [nameInput, businessInput].filter(Boolean);

    function errorFor(input) {
      if (input === nameInput) { return CFG.contact.nameError; }
      return CFG.contact.businessError;
    }

    function setFieldError(input, message) {
      var err = document.getElementById(input.id + '-err');
      input.classList.toggle('is-invalid', !!message);
      input.setAttribute('aria-invalid', message ? 'true' : 'false');
      if (err) { err.textContent = message || ''; }
    }

    function validateField(input) {
      var empty = !String(input.value || '').trim();
      setFieldError(input, empty ? errorFor(input) : '');
      return !empty;
    }

    function setStatus(message, kind) {
      if (!statusEl) { return; }
      statusEl.textContent = message || '';
      statusEl.classList.remove('is-ok', 'is-warn');
      if (kind) { statusEl.classList.add(kind); }
    }

    fields.forEach(function (input) {
      input.addEventListener('blur', function () { validateField(input); });
      input.addEventListener('input', function () {
        if (input.classList.contains('is-invalid')) { validateField(input); }
        setStatus('');
      });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var firstInvalid = null;
      fields.forEach(function (input) {
        if (!validateField(input) && !firstInvalid) { firstInvalid = input; }
      });
      if (firstInvalid) {
        firstInvalid.focus();
        setStatus('');
        return;
      }

      var data = new FormData(form);
      var lines = [
        'היי אורי, הגעתי מהאתר.',
        'שם: ' + String(data.get('name') || '').trim(),
        'העסק: ' + String(data.get('business') || '').trim()
      ];
      var msg = String(data.get('message') || '').trim();
      if (msg) { lines.push('מה אני צריך: ' + msg); }

      if (submitBtn) { submitBtn.disabled = true; }
      var win = window.open(waLink(lines.join('\n')), '_blank', 'noopener');
      if (!win) {
        setStatus(CFG.contact.blocked, 'is-warn');
      } else {
        setStatus(CFG.contact.opened, 'is-ok');
      }
      if (submitBtn) { submitBtn.disabled = false; }
    });
  }

  /* ---------- חשיפה בגלילה (דרגה א' - פעם אחת בלבד) ---------- */

  function wireReveal() {
    var items = $$('.reveal');
    if (!items.length) { return; }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
        !('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('is-in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) { return; }
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { threshold: .15, rootMargin: '0px 0px -10% 0px' });
    items.forEach(function (el) { io.observe(el); });
  }

  /* ---------- הפעלה ---------- */

  function init() {
    renderAsk();
    renderQa();
    renderProcess();
    renderWorkCards();
    renderWorkDetails();
    renderAbout();
    renderEvidence();
    wireContactLinks();
    fillContactCopy();
    wireForm();
    wireNav();
    wireReveal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
