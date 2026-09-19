/* ============================================================
   ליבה · סטודיו פילאטיס
   מזין את כל התוכן מ-config.js, מנהל את הפאנל הקבוע,
   את תפריט הנייד ואת החשיפה בגלילה.
   ============================================================ */
(function () {
  var cfg = window.SITE_CONFIG;
  if (!cfg) return;

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function $(id) { return document.getElementById(id); }
  function all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  /* ---------- 1. צבעי מותג ---------- */
  var vars = {
    '--color-bone': cfg.brand.colorBone,
    '--color-ink': cfg.brand.colorInk,
    '--color-muted': cfg.brand.colorMuted,
    '--color-char': cfg.brand.colorChar,
    '--color-plum': cfg.brand.colorPlum,
    '--color-plum-lt': cfg.brand.colorPlumLt,
    '--color-surface': cfg.brand.colorSurface,
    '--color-line': cfg.brand.colorLine
  };
  Object.keys(vars).forEach(function (k) {
    if (vars[k]) document.documentElement.style.setProperty(k, vars[k]);
  });

  /* ---------- 2. פרטי העסק ---------- */
  var b = cfg.business;
  document.title = (document.title ? document.title + ' · ' : '') + b.fullName;

  all('.js-name').forEach(function (n) { n.textContent = b.name; });
  all('.js-latin').forEach(function (n) { n.textContent = b.latin; });
  all('.js-specialty').forEach(function (n) { n.textContent = b.specialty; });
  all('.js-address').forEach(function (n) { n.textContent = b.address; });
  all('.js-address-note').forEach(function (n) { n.textContent = b.addressNote; });
  all('.js-phone').forEach(function (n) {
    n.textContent = b.phoneDisplay;
    if (n.tagName === 'A') n.href = 'tel:' + b.phone;
  });
  all('.js-email').forEach(function (n) {
    n.textContent = b.email;
    if (n.tagName === 'A') n.href = 'mailto:' + b.email;
  });
  all('.js-whatsapp').forEach(function (n) {
    n.href = 'https://wa.me/' + b.whatsapp;
  });
  all('.js-built-by').forEach(function (n) { n.textContent = cfg.brand.builtBy; });
  all('.js-year').forEach(function (n) { n.textContent = new Date().getFullYear(); });

  all('.js-hours').forEach(function (list) {
    list.innerHTML = b.hours.map(function (h) {
      return '<li><span>' + esc(h.days) + '</span><span dir="ltr">' + esc(h.time) + '</span></li>';
    }).join('');
  });

  var mapFrame = $('mapFrame');
  if (mapFrame) {
    mapFrame.src = 'https://maps.google.com/maps?q=' + encodeURIComponent(b.mapQuery) +
      '&hl=iw&z=16&output=embed';
    mapFrame.title = 'מפה: ' + b.address;
  }

  /* ---------- 3. רשימות מהקונפיג ---------- */

  var classList = $('classList');
  if (classList) {
    classList.innerHTML = cfg.classes.map(function (c) {
      return '<li>' +
        '<div class="row-head">' +
          '<h3>' + esc(c.title) + '</h3>' +
          '<span class="row-meta">' + esc(c.duration) + ' · ' + esc(c.capacity) + '</span>' +
        '</div>' +
        '<div class="row-body">' +
          '<p>' + esc(c.summary) + '</p>' +
          '<p class="row-for">' + esc(c.forWho) + '</p>' +
        '</div>' +
      '</li>';
    }).join('');
  }

  var classBrief = $('classBrief');
  if (classBrief) {
    classBrief.innerHTML = cfg.classes.map(function (c) {
      return '<li><div class="row-head">' +
        '<h3>' + esc(c.title) + '</h3>' +
        '<span class="row-meta">' + esc(c.duration) + '</span>' +
      '</div></li>';
    }).join('');
  }

  var priceList = $('priceList');
  if (priceList) {
    priceList.innerHTML = cfg.prices.map(function (p) {
      return '<li><div class="price-row">' +
        '<span class="price-title">' + esc(p.title) +
          '<span class="price-note">' + esc(p.note) + '</span>' +
        '</span>' +
        '<span class="price-value">' + esc(p.value) + '</span>' +
      '</div></li>';
    }).join('');
  }

  var scheduleBody = $('scheduleBody');
  if (scheduleBody) {
    var head = $('scheduleHead');
    if (head) {
      head.innerHTML = '<tr><th scope="col">שעה</th>' +
        cfg.scheduleDays.map(function (d) { return '<th scope="col">' + esc(d) + '</th>'; }).join('') +
        '</tr>';
    }
    scheduleBody.innerHTML = cfg.schedule.map(function (row) {
      var cells = row.slots.map(function (s) {
        if (!s) return '<td></td>';
        if (s.state === 'full') {
          return '<td><span class="slot slot--full"><b>' + esc(s.name) +
            '</b><i>השיעור מלא</i></span></td>';
        }
        return '<td><a class="slot" href="contact.html"><b>' + esc(s.name) +
          '</b><i>' + esc(s.teacher) + '</i></a></td>';
      }).join('');
      return '<tr><th scope="row" dir="ltr">' + esc(row.hour) + '</th>' + cells + '</tr>';
    }).join('');
    all('.js-week').forEach(function (n) { n.textContent = cfg.scheduleWeek; });
  }

  var teamList = $('teamList');
  if (teamList) {
    teamList.innerHTML = cfg.team.map(function (m) {
      return '<article class="member">' +
        '<img src="' + esc(cfg.images[m.photo]) + '" alt="' + esc(m.name) + '" loading="lazy" width="88" height="104">' +
        '<div>' +
          '<h3>' + esc(m.name) + '</h3>' +
          '<span class="role">' + esc(m.role) + '</span>' +
          '<p>' + esc(m.bio) + '</p>' +
        '</div>' +
      '</article>';
    }).join('');
  }

  var faqList = $('faqList');
  if (faqList) {
    faqList.innerHTML = cfg.faq.map(function (f) {
      return '<details><summary>' + esc(f.q) + '</summary><p>' + esc(f.a) + '</p></details>';
    }).join('');
  }

  /* ---------- 4. תפריט נייד ---------- */
  var burger = $('burger'), nav = $('nav');
  if (burger && nav) {
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      burger.textContent = open ? 'סגירה' : 'תפריט';
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A' && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
        burger.textContent = 'תפריט';
      }
    });
  }

  /* ---------- 5. הפאנל הקבוע: הצלבת תמונות לפי הסקשן הנראה ---------- */
  var sections = all('.sec[data-shot]');

  // רצועות התמונה של הנייד יונקות מאותו מקור
  sections.forEach(function (sec) {
    var band = sec.querySelector('.band');
    if (band) {
      band.src = cfg.images[sec.dataset.shot] || '';
      band.alt = sec.dataset.caption || '';
    }
  });

  var stage = $('stage');
  if (stage && sections.length) {
    var layers = all('.stage__layer', stage),
        cap = $('stageCap'),
        eyebrow = $('stageEyebrow'),
        text = $('stageText'),
        count = $('stageCount'),
        active = 0,
        current = -1;

    function pad(n) { return (n < 10 ? '0' : '') + n; }

    function show(i) {
      if (i === current) return;
      current = i;
      var sec = sections[i],
          url = cfg.images[sec.dataset.shot];

      var next = layers[active === 0 ? 1 : 0];
      next.style.backgroundImage = 'url("' + url + '")';
      next.classList.add('is-visible');
      layers[active].classList.remove('is-visible');
      active = active === 0 ? 1 : 0;

      count.textContent = pad(i + 1) + ' / ' + pad(sections.length);

      function swapText() {
        eyebrow.textContent = sec.dataset.eyebrow || '';
        text.textContent = sec.dataset.caption || '';
        cap.classList.remove('is-swapping');
      }
      if (reduced) { swapText(); return; }
      cap.classList.add('is-swapping');
      window.setTimeout(swapText, 200);
    }

    // טעינה מוקדמת של כל התמונות של העמוד
    sections.forEach(function (sec) {
      var pre = new Image();
      pre.src = cfg.images[sec.dataset.shot] || '';
    });

    var stageObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) show(sections.indexOf(e.target));
      });
    }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });

    sections.forEach(function (s) { stageObserver.observe(s); });
    show(0);
  }

  /* ---------- 6. חשיפה בגלילה ---------- */
  var revealables = all('.reveal');
  if (revealables.length) {
    if (reduced || !('IntersectionObserver' in window)) {
      revealables.forEach(function (n) { n.classList.add('is-in'); });
    } else {
      var revealObserver = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add('is-in');
            obs.unobserve(e.target);
          }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: .12 });
      revealables.forEach(function (n) { revealObserver.observe(n); });
    }
  }

  /* ---------- 7. פיצול מילים בכותרת הירו (עמוד הבית בלבד) ---------- */
  var heroTitle = $('heroTitle');
  if (heroTitle) {
    heroTitle.textContent = cfg.hero.title;
    if (!reduced) {
      var words = cfg.hero.title.split(' ');
      heroTitle.innerHTML = words.map(function (w, i) {
        return '<span class="split-word" style="--i:' + i + '">' + esc(w) + '</span>';
      }).join(' ');
      requestAnimationFrame(function () { heroTitle.classList.add('is-split-ready'); });
    }
  }
  all('.js-hero-kicker').forEach(function (n) { n.textContent = cfg.hero.kicker; });
  all('.js-hero-lede').forEach(function (n) { n.textContent = cfg.hero.lede; });
  all('.js-hero-cta').forEach(function (n) { n.textContent = cfg.hero.ctaText; });

  /* ---------- 8. טופס (דמו - לא נשלח לשרת) ---------- */
  var form = $('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = $('formStatus'),
          name = (form.elements.fullname.value || '').trim();
      status.textContent = 'תודה' + (name ? ' ' + name : '') +
        '. זהו אתר דמו, ולכן הפנייה לא נשלחה בפועל. באתר החי ההודעה מגיעה למייל של הסטודיו.';
      status.focus();
    });
  }
})();
