/**
 * ממלא את כל העמודים מתוך config.js.
 * כל פונקציה בודקת שהאלמנט שלה קיים בעמוד הנוכחי לפני שהיא רצה.
 */
(function () {
  "use strict";

  var CFG = window.SITE_CONFIG;
  var B = CFG.business;
  var DAY_NAMES = ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"];

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function shekel(n) { return n + " ₪"; }

  /* ---------- מיתוג ופרטי עסק ---------- */

  function applyBrand() {
    var b = CFG.brand, s = document.documentElement.style;
    s.setProperty("--bg", b.colorBg);
    s.setProperty("--card", b.colorCard);
    s.setProperty("--ink", b.colorInk);
    s.setProperty("--muted", b.colorMuted);
    s.setProperty("--accent", b.colorAccent);
    s.setProperty("--brass", b.colorBrass);
    s.setProperty("--brass-lt", b.colorBrassLt);
  }

  function bindBusiness() {
    $$(".js-name").forEach(function (el) { el.textContent = B.name; });
    $$(".js-latin").forEach(function (el) { el.textContent = B.latin; });
    $$(".js-specialty").forEach(function (el) { el.textContent = B.specialty; });
    $$(".js-address").forEach(function (el) { el.textContent = B.address; });
    $$(".js-parking").forEach(function (el) { el.textContent = B.parking; });
    $$(".js-built-by").forEach(function (el) { el.textContent = B.builtBy; });
    $$(".js-year").forEach(function (el) { el.textContent = new Date().getFullYear(); });
    $$(".js-phone").forEach(function (el) { el.href = "tel:" + B.phone; el.textContent = B.phoneDisplay; });
    $$(".js-email").forEach(function (el) { el.href = "mailto:" + B.email; el.textContent = B.email; });
    $$(".js-maps").forEach(function (el) { el.href = B.mapsUrl; });
    $$(".js-whatsapp").forEach(function (el) { el.href = "https://wa.me/" + B.whatsapp; });
    $$("[data-shot]").forEach(function (el) { el.src = CFG.shots[el.getAttribute("data-shot")]; });
  }

  function renderHours() {
    var today = new Date().getDay();
    $$(".js-hours").forEach(function (ul) {
      ul.innerHTML = CFG.hours.map(function (h) {
        var cls = h.days.indexOf(today) > -1 ? ' class="is-today"' : "";
        var val = h.open ? '<span dir="ltr">' + esc(h.open) + "–" + esc(h.close) + "</span>" : "סגור";
        return "<li" + cls + "><span>" + esc(h.label) + "</span>" + val + "</li>";
      }).join("");
    });
  }

  /* ---------- ניווט ---------- */

  function initNav() {
    var burger = $("#burger"), nav = $("#nav");
    if (burger && nav) {
      burger.addEventListener("click", function () {
        var open = nav.classList.toggle("is-open");
        burger.setAttribute("aria-expanded", open ? "true" : "false");
        burger.textContent = open ? "סגירה" : "תפריט";
      });
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && nav.classList.contains("is-open")) { burger.click(); burger.focus(); }
      });
    }
    var head = $(".masthead");
    if (head) {
      var onScroll = function () { head.classList.toggle("is-scrolled", window.scrollY > 8); };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }
    if ($(".float-book")) { document.body.classList.add("has-float"); }
  }

  /* ---------- פס הכיסאות ---------- */

  function renderRail() {
    var host = $("#chairRail");
    if (!host) { return; }
    host.innerHTML = CFG.barbers.map(function (b) {
      return '<article class="chair reveal">' +
               '<img class="chair__img" src="' + esc(b.image) + '" alt="' + esc(b.name) + " בעבודה" + '" loading="lazy" width="360" height="450">' +
               '<div class="chair__body">' +
                 '<div class="chair__name"><h3>' + esc(b.name) + '</h3><span class="chair__role">' + esc(b.role) + '</span></div>' +
                 '<p class="chair__craft">' + esc(b.years) + " · " + esc(b.craft) + '</p>' +
                 '<span class="free">פנוי ' + esc(b.next) + '</span>' +
                 '<a class="btn btn-ink" href="book.html?barber=' + esc(b.id) + '">לקבוע אצל ' + esc(b.name) + '</a>' +
               '</div>' +
             '</article>';
    }).join("") +
    '<article class="chair chair--any reveal">' +
      '<div class="chair__visual" aria-hidden="true">?</div>' +
      '<div class="chair__body">' +
        '<div class="chair__name"><h3>לא משנה לי</h3></div>' +
        '<p class="chair__craft">הכיסא הראשון שמתפנה</p>' +
        '<span class="free">הכי מוקדם: ' + esc(CFG.barbers[0].next) + '</span>' +
        '<a class="btn" href="book.html?barber=any">לתור הכי מוקדם</a>' +
      '</div>' +
    '</article>';
  }

  /* ---------- מחירון ---------- */

  function priceLine(s, withMeta) {
    return '<li>' +
             '<div class="price-line">' +
               '<span class="price-line__name">' + esc(s.name) + '</span>' +
               '<span class="price-line__dots" aria-hidden="true"></span>' +
               '<span class="price-line__price">' + shekel(s.price) + '</span>' +
             '</div>' +
             (withMeta ? '<p class="price-line__meta">' + s.minutes + ' דקות · ' + esc(s.note) + '</p>' : '') +
           '</li>';
  }

  function renderPrices() {
    var short = $("#signList");
    if (short) {
      short.innerHTML = CFG.services.filter(function (s) { return s.featured; })
        .map(function (s) { return priceLine(s, false); }).join("");
    }
    var full = $("#fullList");
    if (full) {
      full.innerHTML = CFG.services.map(function (s) { return priceLine(s, true); }).join("");
    }
  }

  /* ---------- הספרים ---------- */

  function renderBarbers() {
    var host = $("#barberList");
    if (!host) { return; }
    host.innerHTML = CFG.barbers.map(function (b) {
      return '<article class="barber reveal" id="' + esc(b.id) + '">' +
               '<img class="barber__img" src="' + esc(b.image) + '" alt="' + esc(b.name) + " בעבודה" + '" loading="lazy" width="480" height="600">' +
               '<div>' +
                 '<span class="kicker">' + esc(b.role) + '</span>' +
                 '<h2>' + esc(b.name) + '</h2>' +
                 '<p class="barber__meta"><span>' + esc(b.years) + '</span><span>' + esc(b.craft) + '</span></p>' +
                 '<p>' + esc(b.bio) + '</p>' +
                 '<div class="barber__actions">' +
                   '<a class="btn btn-ink" href="book.html?barber=' + esc(b.id) + '">לקבוע אצל ' + esc(b.name) + '</a>' +
                   '<span class="free">פנוי ' + esc(b.next) + '</span>' +
                 '</div>' +
               '</div>' +
             '</article>';
    }).join("");
  }

  /* ---------- גלריה ---------- */

  function renderGallery() {
    var host = $("#galleryGrid"), box = $("#lightbox");
    if (!host || !box) { return; }
    host.innerHTML = CFG.gallery.map(function (g, i) {
      return '<button type="button" class="reveal" data-i="' + i + '" aria-label="הגדלת תמונה: ' + esc(g.alt) + '">' +
               '<img src="' + esc(g.src) + '" alt="' + esc(g.alt) + '" loading="lazy">' +
             '</button>';
    }).join("");
    var img = $("img", box), close = $("button", box), last = null;
    function shut() { box.classList.remove("is-open"); box.setAttribute("aria-hidden", "true"); if (last) { last.focus(); } }
    host.addEventListener("click", function (e) {
      var btn = e.target.closest("button");
      if (!btn) { return; }
      var g = CFG.gallery[+btn.getAttribute("data-i")];
      last = btn;
      img.src = g.src; img.alt = g.alt;
      box.classList.add("is-open"); box.setAttribute("aria-hidden", "false");
      close.focus();
    });
    close.addEventListener("click", shut);
    box.addEventListener("click", function (e) { if (e.target === box) { shut(); } });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && box.classList.contains("is-open")) { shut(); } });
  }

  /* ---------- קביעת תור ----------
     הדגמה בלבד: השעות הפנויות מחושבות כאן ולא מגיעות ממערכת אמיתית.
     באתר אמיתי הכפתור בסוף מעביר ל-CFG.booking.url. */

  function toMin(t) { var p = t.split(":"); return +p[0] * 60 + +p[1]; }
  function toTime(m) { return String(Math.floor(m / 60)).padStart(2, "0") + ":" + String(m % 60).padStart(2, "0"); }
  function dateKey(d) { return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate(); }
  function hoursFor(d) {
    for (var i = 0; i < CFG.hours.length; i++) {
      if (CFG.hours[i].days.indexOf(d.getDay()) > -1) { return CFG.hours[i].open ? CFG.hours[i] : null; }
    }
    return null;
  }
  // "תפוס" קבוע לכל שילוב של יום, ספר ושעה - כדי שההדגמה תיראה אמינה ולא תשתנה בכל רענון
  function taken(key, barberId, m) {
    var s = key + barberId + m, h = 0;
    for (var i = 0; i < s.length; i++) { h = (h * 31 + s.charCodeAt(i)) >>> 0; }
    return h % 5 < 1;
  }

  function initBooker() {
    var form = $("#booker");
    if (!form) { return; }
    var state = { barber: null, service: null, day: null, time: null };
    var days = [], d = new Date();
    d.setHours(0, 0, 0, 0);
    while (days.length < 8) {
      if (hoursFor(d)) { days.push(new Date(d)); }
      d.setDate(d.getDate() + 1);
    }

    function choice(name, value, inner, checked) {
      return '<label class="choice"><input type="radio" name="' + name + '" value="' + esc(value) + '"' + (checked ? " checked" : "") + '>' +
             '<span class="choice__box">' + inner + '</span></label>';
    }

    $("#pickBarber").innerHTML = CFG.barbers.map(function (b) {
      return choice("barber", b.id,
        '<img src="' + esc(b.image) + '" alt="" width="44" height="44">' +
        '<span class="choice__main"><b>' + esc(b.name) + '</b><small>' + esc(b.craft) + '</small></span>');
    }).join("") + choice("barber", "any",
        '<span class="ph" aria-hidden="true">?</span>' +
        '<span class="choice__main"><b>לא משנה לי</b><small>הראשון שמתפנה</small></span>');

    $("#pickService").innerHTML = CFG.services.map(function (s) {
      return choice("service", s.id,
        '<span class="choice__main"><b>' + esc(s.name) + '</b><small>' + s.minutes + ' דקות</small></span>' +
        '<span class="choice__price">' + shekel(s.price) + '</span>');
    }).join("");

    $("#pickDay").innerHTML = days.map(function (day, i) {
      var label = i === 0 && dateKey(day) === dateKey(new Date()) ? "היום" : DAY_NAMES[day.getDay()];
      return choice("day", dateKey(day),
        '<b>' + label + '</b><small>' + day.getDate() + "." + (day.getMonth() + 1) + '</small>');
    }).join("");

    function freeBarber(day, m, len) {
      var ids = state.barber === "any" ? CFG.barbers.map(function (b) { return b.id; }) : [state.barber];
      for (var i = 0; i < ids.length; i++) {
        var ok = true;
        for (var t = m; t < m + len; t += 15) { if (taken(dateKey(day), ids[i], t - (t % 15))) { ok = false; break; } }
        if (ok) { return ids[i]; }
      }
      return null;
    }

    function renderSlots() {
      var host = $("#pickTime");
      if (!state.barber || !state.service || !state.day) {
        host.innerHTML = '<p class="slots__empty">בחרו ספר, שירות ויום, והשעות הפנויות יופיעו כאן.</p>';
        return;
      }
      var day = days.filter(function (x) { return dateKey(x) === state.day; })[0];
      var h = hoursFor(day), svc = serviceById(state.service);
      var now = new Date(), isToday = dateKey(now) === state.day;
      var nowMin = now.getHours() * 60 + now.getMinutes();
      var html = "";
      for (var m = toMin(h.open); m + svc.minutes <= toMin(h.close); m += 15) {
        if (isToday && m <= nowMin + 30) { continue; }
        var who = freeBarber(day, m, svc.minutes);
        if (who) { html += choice("time", toTime(m) + "|" + who, '<span dir="ltr">' + toTime(m) + "</span>", state.time === toTime(m) + "|" + who); }
      }
      host.innerHTML = html || '<p class="slots__empty">אין שעות פנויות ביום הזה. נסו יום אחר.</p>';
    }

    function serviceById(id) { return CFG.services.filter(function (s) { return s.id === id; })[0]; }
    function barberById(id) { return CFG.barbers.filter(function (b) { return b.id === id; })[0]; }

    function renderSummary() {
      var svc = state.service && serviceById(state.service);
      var parts = state.time ? state.time.split("|") : null;
      var who = parts ? barberById(parts[1]) : (state.barber && state.barber !== "any" ? barberById(state.barber) : null);
      var day = state.day && days.filter(function (x) { return dateKey(x) === state.day; })[0];
      $("#sumBarber").textContent = who ? who.name : (state.barber === "any" ? "הראשון שמתפנה" : "—");
      $("#sumService").textContent = svc ? svc.name : "—";
      $("#sumWhen").textContent = day ? DAY_NAMES[day.getDay()] + " " + day.getDate() + "." + (day.getMonth() + 1) + (parts ? ", " + parts[0] : "") : "—";
      $("#sumPrice").textContent = svc ? shekel(svc.price) : "—";
      var go = $("#bookGo"), ready = !!(svc && parts);
      go.setAttribute("aria-disabled", ready ? "false" : "true");
      go.href = CFG.booking.url || "#";
      $("#bookNotice").hidden = true;
    }

    form.addEventListener("change", function (e) {
      var t = e.target;
      state[t.name] = t.value;
      if (t.name !== "time") { state.time = null; renderSlots(); }
      renderSummary();
    });

    $("#bookGo").addEventListener("click", function (e) {
      if (this.getAttribute("aria-disabled") === "true") { e.preventDefault(); return; }
      if (!CFG.booking.url) { e.preventDefault(); $("#bookNotice").hidden = false; }
    });
    $$(".js-booking-system").forEach(function (el) { el.textContent = CFG.booking.systemName; });

    var pre = new URLSearchParams(location.search).get("barber");
    var preInput = pre && $('input[name="barber"][value="' + pre.replace(/[^a-z]/g, "") + '"]', form);
    if (preInput) { preInput.checked = true; state.barber = preInput.value; }

    renderSlots();
    renderSummary();
  }

  /* ---------- חשיפה בגלילה ---------- */

  function initReveal() {
    var els = $$(".reveal");
    if (!("IntersectionObserver" in window)) { els.forEach(function (el) { el.classList.add("is-in"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      });
    }, { threshold: .12, rootMargin: "0px 0px -40px 0px" });
    els.forEach(function (el, i) {
      el.style.transitionDelay = Math.min(i % 6, 5) * 60 + "ms";
      io.observe(el);
    });
  }

  applyBrand();
  bindBusiness();
  renderHours();
  initNav();
  renderRail();
  renderPrices();
  renderBarbers();
  renderGallery();
  initBooker();
  initReveal();
})();
