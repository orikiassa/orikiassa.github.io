(function () {
  var cfg = window.SITE_CONFIG;
  if (!cfg) return;
  function $(id) { return document.getElementById(id); }
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---------- brand vars ----------
  var root = document.documentElement;
  root.style.setProperty('--char', cfg.brand.colorChar);
  root.style.setProperty('--fire', cfg.brand.colorFire);
  root.style.setProperty('--ember', cfg.brand.colorEmber);
  root.style.setProperty('--ink', cfg.brand.colorInk);
  root.style.setProperty('--bone', cfg.brand.colorBone);

  var pageTitle = document.title;
  document.title = (pageTitle ? pageTitle + ' · ' : '') + cfg.business.name + ' ' + cfg.business.specialty;

  document.querySelectorAll('.js-mark').forEach(function (n) { n.textContent = cfg.brand.logoText; });
  document.querySelectorAll('.js-addr').forEach(function (n) { n.textContent = cfg.business.address; });
  document.querySelectorAll('.js-phone').forEach(function (n) {
    n.textContent = cfg.business.phoneDisplay; n.href = 'tel:' + cfg.business.phone;
  });
  document.querySelectorAll('.js-email').forEach(function (n) {
    n.textContent = cfg.business.email; n.href = 'mailto:' + cfg.business.email;
  });
  document.querySelectorAll('.js-built').forEach(function (n) { n.textContent = cfg.brand.builtBy || ''; });

  // ---------- nav sheet ----------
  var sheet = $('navSheet'), openBtn = $('menuBtn'), closeBtn = $('navClose');
  if (sheet && openBtn) {
    var lastFocus = null;
    function openSheet() {
      lastFocus = document.activeElement;
      sheet.classList.add('open');
      openBtn.setAttribute('aria-expanded', 'true');
      sheet.removeAttribute('aria-hidden');
      var first = sheet.querySelector('a');
      if (first) first.focus();
    }
    function closeSheet() {
      sheet.classList.remove('open');
      openBtn.setAttribute('aria-expanded', 'false');
      sheet.setAttribute('aria-hidden', 'true');
      if (lastFocus) lastFocus.focus();
    }
    openBtn.addEventListener('click', openSheet);
    if (closeBtn) closeBtn.addEventListener('click', closeSheet);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && sheet.classList.contains('open')) closeSheet();
    });
  }

  // ---------- home panels ----------
  if ($('openTitle')) {
    $('openTitle').textContent = cfg.home.openTitle;
    $('openText').textContent = cfg.home.openText;
    $('openPanel').style.backgroundImage = 'url(' + cfg.home.openImage + ')';
    $('sigLabel').textContent = cfg.home.signatureLabel;
    $('sigTitle').textContent = cfg.home.signatureTitle;
    $('sigText').textContent = cfg.home.signatureText;
    $('closeTitle').textContent = cfg.home.closeTitle;
    $('closePanel').style.backgroundImage = 'url(' + cfg.home.closeImage + ')';
  }

  // ---------- menu rows ----------
  function renderRows(target, items) {
    if (!target) return;
    items.forEach(function (m) {
      var row = el('div', 'mrow rv',
        '<div><span class="nm"></span><span class="ds"></span></div><span class="pr"></span>');
      row.querySelector('.nm').textContent = m.name;
      row.querySelector('.ds').textContent = m.desc;
      row.querySelector('.pr').textContent = m.price;
      target.appendChild(row);
    });
  }
  renderRows($('menuTeaser'), (cfg.menu || []).slice(0, 4));
  renderRows($('menuFull'), cfg.menu || []);
  renderRows($('sidesFull'), cfg.sides || []);

  // ---------- meat page ----------
  if ($('meatLede')) {
    $('meatLede').textContent = cfg.meat.lede;
    $('meatClosing').textContent = cfg.meat.closing;
    var mi = $('meatImage');
    if (mi) mi.style.backgroundImage = 'url(' + cfg.meat.image + ')';
    var spec = $('meatSpec');
    (cfg.meat.specs || []).forEach(function (s) {
      var dt = el('dt', null); dt.textContent = s.k;
      var dd = el('dd', null); dd.textContent = s.v;
      spec.appendChild(dt); spec.appendChild(dd);
    });
  }

  // ---------- gallery ----------
  var gal = $('gal');
  if (gal) {
    var lb = $('lightbox'), lbImg = $('lbImg'), lbCap = $('lbCap');
    (cfg.gallery || []).forEach(function (g) {
      var b = el('button', null, '<span class="cap"></span>');
      b.type = 'button';
      b.style.backgroundImage = 'url(' + g.image + ')';
      b.setAttribute('aria-label', g.caption || 'תמונה');
      b.querySelector('.cap').textContent = g.caption || '';
      b.addEventListener('click', function () {
        lbImg.src = g.image; lbImg.alt = g.caption || '';
        lbCap.textContent = g.caption || '';
        lb.hidden = false;
      });
      gal.appendChild(b);
    });
    $('lbClose').addEventListener('click', function () { lb.hidden = true; });
    lb.addEventListener('click', function (e) { if (e.target === lb) lb.hidden = true; });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !lb.hidden) lb.hidden = true; });
  }

  // ---------- visit page ----------
  if ($('visitLede')) {
    $('visitLede').textContent = cfg.visit.lede;
    var vi = $('visitImage');
    if (vi) vi.style.backgroundImage = 'url(' + cfg.visit.image + ')';
    var hrs = $('hours');
    (cfg.business.hours || []).forEach(function (h) {
      var d = el('div', null, '<span></span><b></b>');
      d.children[0].textContent = h.days;
      d.children[1].textContent = h.time;
      hrs.appendChild(d);
    });
    var mf = $('mapFrame');
    if (mf) mf.src = 'https://www.google.com/maps?q=' + encodeURIComponent(cfg.business.mapQuery || cfg.business.address) + '&output=embed';
    $('formTitle').textContent = cfg.visit.formTitle;
    $('formSubtitle').textContent = cfg.visit.formSubtitle;
    var form = $('bookForm'), ok = $('formOk');
    ok.textContent = cfg.visit.successMessage;
    form.addEventListener('submit', function (e) {
      e.preventDefault(); ok.hidden = false; form.reset();
    });
  }

  // ---------- motion: tier ב׳ ----------
  // split-text on the single hero heading (WORDS only - never characters, RTL bidi)
  var heroH = document.querySelector('[data-split]');
  if (heroH && !reduce) {
    var text = heroH.textContent.trim();
    heroH.setAttribute('aria-label', text);
    heroH.innerHTML = text.split('\n').map(function (line) {
      return line.trim().split(/\s+/).map(function (w, i) {
        return '<span class="w" aria-hidden="true"><span class="w-i" style="transition-delay:' + (i * 60) + 'ms">' + w + '</span></span>';
      }).join(' ');
    }).join('<br>');
    requestAnimationFrame(function () { heroH.classList.add('is-in'); });
  }

  var targets = document.querySelectorAll('.rv, .mask');
  if (reduce || !('IntersectionObserver' in window)) {
    targets.forEach(function (t) { t.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add('is-in');
        io.unobserve(en.target);
      });
    }, { threshold: .15, rootMargin: '0px 0px -8% 0px' });
    targets.forEach(function (t, i) {
      t.style.transitionDelay = Math.min(i % 6, 5) * 60 + 'ms';
      io.observe(t);
    });
  }

  // page-load reveal + soft transition between pages
  addEventListener('DOMContentLoaded', function () { document.body.classList.add('is-ready'); });
  if (!reduce) {
    document.querySelectorAll('a[href$=".html"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        if (a.target || a.hasAttribute('download') || e.metaKey || e.ctrlKey || e.shiftKey) return;
        e.preventDefault();
        document.body.style.opacity = '0';
        setTimeout(function () { location.href = a.href; }, 260);
      });
    });
  }
})();
