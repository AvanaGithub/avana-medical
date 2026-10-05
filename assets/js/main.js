(function () {
  var header = document.getElementById('header');
  var nav = document.getElementById('nav');
  var toggle = document.getElementById('navToggle');
  var subs = document.querySelectorAll('.has-sub');

  // Header shadow once the page has scrolled
  function onScroll() {
    header.classList.toggle('is-stuck', window.scrollY > 8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  function setMenu(open) {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  toggle.addEventListener('click', function () {
    setMenu(!nav.classList.contains('is-open'));
  });

  // Dropdowns: hover is handled in CSS, click/tap and keyboard here
  function setSub(item, open) {
    item.classList.toggle('is-open', open);
    item.querySelector('.nav__link').setAttribute('aria-expanded', String(open));
  }
  subs.forEach(function (item) {
    item.querySelector('.nav__link').addEventListener('click', function (e) {
      e.stopPropagation();
      setSub(item, !item.classList.contains('is-open'));
    });
  });

  document.addEventListener('click', function (e) {
    subs.forEach(function (item) {
      if (!item.contains(e.target)) setSub(item, false);
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    subs.forEach(function (item) { setSub(item, false); });
    setMenu(false);
  });

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Scroll reveal: content stays visible unless JS and IntersectionObserver are available
  var reveals = document.querySelectorAll('[data-reveal]');
  if (reveals.length && 'IntersectionObserver' in window && !reduceMotion) {
    document.documentElement.classList.add('reveal-ready');
    var revealIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        // Stagger siblings that arrive together (card rows)
        var sibs = Array.prototype.filter.call(el.parentNode.children, function (c) { return c.hasAttribute('data-reveal'); });
        var delay = sibs.indexOf(el) * 120;
        el.style.transitionDelay = delay + 'ms';
        el.classList.add('is-in');
        setTimeout(function () { el.style.transitionDelay = ''; }, delay + 800);
        revealIO.unobserve(el);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { revealIO.observe(el); });
  }

  // Count-up figures
  var counters = document.querySelectorAll('[data-count]');
  if (counters.length && 'IntersectionObserver' in window && !reduceMotion) {
    var countIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var end = Number(el.getAttribute('data-count'));
        var start = el.hasAttribute('data-plain') ? end - 30 : 0;
        var t0 = null;
        function step(t) {
          if (t0 === null) t0 = t;
          var p = Math.min((t - t0) / 1400, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(start + (end - start) * eased);
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
        countIO.unobserve(el);
      });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { countIO.observe(el); });
  }

  // Gold node network drawn behind dark panels
  function initNetwork(canvas) {
    var ctx = canvas.getContext('2d');
    var w = 0, h = 0, points = [], running = false, raf = 0;
    var LINK = 130;

    function resize() {
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var count = Math.max(24, Math.min(90, Math.round(w * h / 13000)));
      points = [];
      for (var i = 0; i < count; i++) {
        points.push({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35, r: 1 + Math.random() * 1.4 });
      }
      draw();
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      for (var i = 0; i < points.length; i++) {
        var a = points[i];
        for (var j = i + 1; j < points.length; j++) {
          var b = points[j];
          var dx = a.x - b.x, dy = a.y - b.y;
          var d = Math.sqrt(dx * dx + dy * dy);
          if (d < LINK) {
            ctx.strokeStyle = 'rgba(224, 181, 80, ' + (0.3 * (1 - d / LINK)).toFixed(3) + ')';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        ctx.fillStyle = 'rgba(224, 181, 80, 0.75)';
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Cursor acts as a node: link it to every point in reach
      if (!mouse) return;
      for (var k = 0; k < points.length; k++) {
        var q = points[k];
        var mx = q.x - mouse.x, my = q.y - mouse.y;
        var md = Math.sqrt(mx * mx + my * my);
        if (md < REACH) {
          ctx.strokeStyle = 'rgba(224, 181, 80, ' + (0.8 * (1 - md / REACH)).toFixed(3) + ')';
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(q.x, q.y);
          ctx.stroke();
        }
      }
      ctx.fillStyle = 'rgba(224, 181, 80, 0.9)';
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 2.4, 0, Math.PI * 2);
      ctx.fill();
    }

    function tick() {
      for (var i = 0; i < points.length; i++) {
        var p = points[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        // Nearby points drift toward the cursor, stopping short so they don't bunch up
        if (mouse) {
          var dx = mouse.x - p.x, dy = mouse.y - p.y;
          var d = Math.sqrt(dx * dx + dy * dy);
          if (d < REACH && d > 40) {
            var pull = 0.035 * (1 - d / REACH);
            p.x += dx * pull;
            p.y += dy * pull;
          }
        }
      }
      draw();
      if (running) raf = requestAnimationFrame(tick);
    }

    // Track the cursor over the panel that holds the canvas (the canvas sits behind the content)
    var mouse = null;
    var REACH = 200;
    var host = canvas.parentElement;
    host.addEventListener('pointermove', function (e) {
      var rect = canvas.getBoundingClientRect();
      mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      if (!running) draw();
    });
    host.addEventListener('pointerleave', function () {
      mouse = null;
      if (!running) draw();
    });

    resize();
    window.addEventListener('resize', resize);

    if (reduceMotion || !('IntersectionObserver' in window)) return;
    // Animate only while the panel is on screen
    new IntersectionObserver(function (entries) {
      running = entries[0].isIntersecting;
      cancelAnimationFrame(raf);
      if (running) raf = requestAnimationFrame(tick);
    }).observe(canvas);
  }
  document.querySelectorAll('canvas[data-network]').forEach(initNetwork);

  // Leadership team: on wide screens the section pins and the leader cards stack
  // as you scroll. Everything is scrubbed from scroll position, so it moves with the reader.
  var team = document.querySelector('[data-team]');
  if (team) {
    var track = team.querySelector('.team__track');
    var sticky = team.querySelector('.team__sticky');
    var leaders = Array.prototype.slice.call(team.querySelectorAll('.leader'));
    var names = team.querySelectorAll('.team__name');
    var nowEl = team.querySelector('[data-team-now]');
    var barEl = team.querySelector('[data-team-bar]');
    var wide = window.matchMedia('(min-width: 861px) and (min-height: 600px)');
    var last = leaders.length - 1;
    var current = -1;
    var headerH = 84;
    var ticking = false;

    function clamp(v, lo, hi) { return Math.min(hi, Math.max(lo, v)); }
    function smooth(t) { return t * t * (3 - 2 * t); }

    // 0..1 across the pinned stretch
    function teamProgress() {
      var scrollable = track.offsetHeight - sticky.offsetHeight;
      return clamp((headerH - track.getBoundingClientRect().top) / scrollable, 0, 1);
    }

    // Each leader gets a stretch of scroll; the card holds still for the first 22%
    // and last 14% of it so the bio can be read, and moves in between.
    function stackPosition(raw) {
      var i = Math.floor(raw);
      if (i >= last) return last;
      return i + smooth(clamp((raw - i - 0.22) / 0.64, 0, 1));
    }

    function markCurrent(i) {
      if (i === current) return;
      current = i;
      names.forEach(function (el, k) { el.setAttribute('aria-current', String(k === i)); });
      nowEl.textContent = (i < 9 ? '0' : '') + (i + 1);
    }

    function renderStack() {
      ticking = false;
      if (!team.classList.contains('team--scroll')) return;

      var p = stackPosition(teamProgress() * last);
      barEl.style.width = (p / last * 100).toFixed(2) + '%';
      markCurrent(Math.round(p));

      leaders.forEach(function (card, k) {
        var d = k - p;   // >0: still below and arriving, <=0: on top or covered
        var hidden = d >= 1 || d < -2.6;
        card.style.visibility = hidden ? 'hidden' : 'visible';
        card.setAttribute('aria-hidden', String(Math.round(p) !== k));
        card.style.zIndex = k + 1;
        if (hidden) return;

        if (reduceMotion) {
          card.style.visibility = Math.round(p) === k ? 'visible' : 'hidden';
          return;
        }

        if (d > 0) {
          // Arriving: slides up from below, photo drifts slower than the card, text fades up late
          card.style.transform = 'translate3d(0,' + (d * 112).toFixed(2) + '%,0)';
          card.style.setProperty('--shade', 0);
          card.style.setProperty('--py', (-d * 18 - 12).toFixed(2) + '%');
          card.style.setProperty('--to', clamp(1 - d * 2.2, 0, 1).toFixed(3));
          card.style.setProperty('--ty', (d * 70).toFixed(1) + 'px');
        } else {
          // Covered: shrinks, lifts and dims, building a deck behind the current card
          var depth = Math.max(d, -2);
          card.style.transform = 'translate3d(0,' + (depth * 22).toFixed(1) + 'px,0) scale(' + (1 + depth * 0.05).toFixed(4) + ')';
          card.style.setProperty('--shade', clamp(-d * 0.38, 0, 0.75).toFixed(3));
          card.style.setProperty('--py', (-12 - d * 6).toFixed(2) + '%');
          card.style.setProperty('--to', clamp(1 + d * 1.4, 0, 1).toFixed(3));
          card.style.setProperty('--ty', '0px');
        }
      });
    }

    function onTeamScroll() {
      if (!ticking) { ticking = true; requestAnimationFrame(renderStack); }
    }

    function setTeamMode() {
      headerH = header.offsetHeight;
      team.style.setProperty('--hh', headerH + 'px');
      var on = wide.matches;
      team.classList.toggle('team--scroll', on);
      if (!on) {
        // Stacked list: clear anything the scroll mode set
        leaders.forEach(function (card) {
          card.removeAttribute('style');
          card.removeAttribute('aria-hidden');
        });
      }
      current = -1;
      renderStack();
    }

    // Clicking a name scrolls to the point where that leader's card has settled
    names.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var i = Number(btn.getAttribute('data-go'));
        var scrollable = track.offsetHeight - sticky.offsetHeight;
        var trackTop = window.scrollY + track.getBoundingClientRect().top - headerH;
        var at = i === 0 ? 0 : (i - 1 + 0.92) / last;
        window.scrollTo({ top: trackTop + scrollable * Math.min(at, 1) + 1, behavior: reduceMotion ? 'auto' : 'smooth' });
      });
    });

    window.addEventListener('scroll', onTeamScroll, { passive: true });
    window.addEventListener('resize', setTeamMode);
    if (wide.addEventListener) wide.addEventListener('change', setTeamMode);
    setTeamMode();
  }

  // Enquiry form: validates, then hands the message to the visitor's email app
  var form = document.getElementById('contactForm');
  if (form) {
    var fields = [
      { el: form.elements.name, ok: function (v) { return v.length > 1; } },
      { el: form.elements.phone, ok: function (v) { return v.replace(/\D/g, '').length >= 10; } },
      { el: form.elements.email, ok: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); } },
      { el: form.elements.message, ok: function (v) { return v.length > 3; } }
    ];
    var status = document.getElementById('cfStatus');

    // Arriving from a product page's "Enquire" button: start the message for the visitor
    var enquiry = new URLSearchParams(window.location.search).get('product');
    if (enquiry && !form.elements.message.value) {
      form.elements.message.value = 'I would like to know more about ' + enquiry + '.';
    }

    function check(f) {
      var valid = f.ok(f.el.value.trim());
      var err = document.getElementById(f.el.id + 'Err');
      f.el.setAttribute('aria-invalid', String(!valid));
      if (valid) f.el.removeAttribute('aria-describedby'); else f.el.setAttribute('aria-describedby', err.id);
      err.hidden = valid;
      return valid;
    }

    fields.forEach(function (f) {
      f.el.addEventListener('blur', function () { if (f.el.value) check(f); });
      f.el.addEventListener('input', function () { if (f.el.getAttribute('aria-invalid') === 'true') check(f); });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var bad = fields.filter(function (f) { return !check(f); });
      if (bad.length) { bad[0].el.focus(); status.hidden = true; return; }

      // Optional fields only exist on some versions of the form (the Contact page has them)
      var v = function (n) { return form.elements[n] ? form.elements[n].value.trim() : ''; };
      var topic = v('topic');
      var body = v('message') + '\n\n' + v('name') +
        (v('organisation') ? '\n' + v('organisation') : '') +
        '\nMobile: ' + v('phone') + '\nEmail: ' + v('email');
      var subject = (topic || 'Website enquiry') + ' from ' + v('name');
      window.location.href = 'mailto:info@avanamedical.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      status.textContent = 'Your email app should open with this message ready to send. If it does not, write to info@avanamedical.com.';
      status.hidden = false;
    });
  }

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
