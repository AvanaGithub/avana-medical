// Careers page: open positions (from data/jobs.js), hiring-process timeline, application form.
(function () {
  var jobs = (window.AVANA_JOBS || []).slice().sort(function (a, b) { return a.posted < b.posted ? 1 : -1; });
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function niceDate(iso) {
    var d = new Date(iso + 'T00:00:00');
    return isNaN(d) ? iso : d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  }

  function unique(key) {
    var seen = {};
    return jobs.map(function (j) { return j[key]; }).filter(function (v) {
      if (!v || seen[v]) return false;
      seen[v] = true;
      return true;
    }).sort();
  }

  /* ---------------- Open positions ---------------- */

  var list = document.getElementById('jobList');
  var q = document.getElementById('jobQ');
  var dept = document.getElementById('jobDept');
  var loc = document.getElementById('jobLoc');
  var count = document.getElementById('jobCount');
  var empty = document.getElementById('jobEmpty');
  var roleSelect = document.getElementById('apRole');

  function fill(select, values) {
    values.forEach(function (v) {
      var o = document.createElement('option');
      o.value = v;
      o.textContent = v;
      select.appendChild(o);
    });
  }

  function jobCard(j) {
    var panelId = 'job-' + j.id;
    return '<article class="job" data-id="' + esc(j.id) + '">' +
      '<h3 class="job__title-wrap"><button class="job__toggle" type="button" aria-expanded="false" aria-controls="' + panelId + '">' +
        '<span class="job__main">' +
          '<span class="job__title">' + esc(j.title) + '</span>' +
          '<span class="job__meta">' +
            '<span class="job__chip">' + esc(j.department) + '</span>' +
            '<span class="job__chip job__chip--loc">' + esc(j.location) + '</span>' +
            '<span class="job__chip">' + esc(j.type) + '</span>' +
            '<span class="job__chip">' + esc(j.experience) + '</span>' +
          '</span>' +
        '</span>' +
        '<span class="job__side"><span class="job__posted">Posted ' + esc(niceDate(j.posted)) + '</span><span class="job__chev" aria-hidden="true"></span></span>' +
      '</button></h3>' +
      '<div class="job__panel" id="' + panelId + '" hidden>' +
        '<p class="job__summary">' + esc(j.summary) + '</p>' +
        '<div class="job__cols">' +
          '<div><h4>Responsibilities</h4><ul class="checks">' + (j.responsibilities || []).map(function (r) { return '<li>' + esc(r) + '</li>'; }).join('') + '</ul></div>' +
          '<div><h4>Requirements</h4><ul class="checks">' + (j.requirements || []).map(function (r) { return '<li>' + esc(r) + '</li>'; }).join('') + '</ul></div>' +
        '</div>' +
        '<a class="btn btn--gold" href="#apply" data-apply="' + esc(j.id) + '">Apply for this Role</a>' +
      '</div>' +
    '</article>';
  }

  function setOpen(article, open) {
    var btn = article.querySelector('.job__toggle');
    var panel = article.querySelector('.job__panel');
    btn.setAttribute('aria-expanded', String(open));
    panel.hidden = !open;
    article.classList.toggle('is-open', open);
  }

  function renderJobs() {
    var words = q.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
    var shown = jobs.filter(function (j) {
      if (dept.value && j.department !== dept.value) return false;
      if (loc.value && j.location !== loc.value) return false;
      var hay = (j.title + ' ' + j.department + ' ' + j.location + ' ' + j.summary).toLowerCase();
      return words.every(function (w) { return hay.indexOf(w) !== -1; });
    });
    list.innerHTML = shown.map(jobCard).join('');
    empty.hidden = shown.length > 0;
    count.textContent = shown.length === jobs.length
      ? jobs.length + ' open positions'
      : 'Showing ' + shown.length + ' of ' + jobs.length + ' open positions';
  }

  function chooseRole(id) {
    roleSelect.value = jobs.some(function (j) { return j.id === id; }) ? id : 'general';
    var target = document.getElementById('apply');
    target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    setTimeout(function () { document.getElementById('apName').focus({ preventScroll: true }); }, reduceMotion ? 0 : 600);
  }

  if (list) {
    fill(dept, unique('department'));
    fill(loc, unique('location'));
    jobs.forEach(function (j) {
      var o = document.createElement('option');
      o.value = j.id;
      o.textContent = j.title + ' (' + j.location + ')';
      roleSelect.appendChild(o);
    });

    [q, dept, loc].forEach(function (el) { el.addEventListener('input', renderJobs); });
    renderJobs();

    list.addEventListener('click', function (e) {
      var toggle = e.target.closest('.job__toggle');
      if (toggle) {
        var article = toggle.closest('.job');
        setOpen(article, toggle.getAttribute('aria-expanded') !== 'true');
        return;
      }
      var apply = e.target.closest('[data-apply]');
      if (apply) {
        e.preventDefault();
        chooseRole(apply.getAttribute('data-apply'));
      }
    });

    document.querySelectorAll('[data-general]').forEach(function (a) {
      a.addEventListener('click', function (e) { e.preventDefault(); chooseRole('general'); });
    });

    // Deep link: careers.html?job=<id> opens that role
    var wanted = new URLSearchParams(window.location.search).get('job');
    var article = wanted && list.querySelector('.job[data-id="' + wanted.replace(/"/g, '') + '"]');
    if (article) {
      setOpen(article, true);
      setTimeout(function () { article.scrollIntoView({ block: 'center' }); }, 50);
    }
  }

  /* ---------------- Hiring process timeline ---------------- */

  var stepsBox = document.querySelector('[data-steps]');
  if (stepsBox) {
    var fillEl = stepsBox.querySelector('[data-steps-fill]');
    var stepEls = stepsBox.querySelectorAll('.step');
    var ticking = false;

    function paintSteps() {
      ticking = false;
      var r = stepsBox.getBoundingClientRect();
      var vh = window.innerHeight;
      // 0 when the timeline enters the lower part of the screen, 1 by the time it reaches the middle
      var p = reduceMotion ? 1 : Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (vh * 0.45)));
      fillEl.style.transform = 'scaleX(' + p.toFixed(3) + ')';
      fillEl.parentNode.style.setProperty('--fill', p.toFixed(3));
      stepEls.forEach(function (s, i) {
        s.classList.toggle('is-on', p >= (stepEls.length === 1 ? 0 : i / (stepEls.length - 1)) - 0.001);
      });
    }

    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(paintSteps); }
    }, { passive: true });
    window.addEventListener('resize', paintSteps);
    paintSteps();
  }

  /* ---------------- Application form ---------------- */

  var form = document.getElementById('applyForm');
  if (form) {
    var status = document.getElementById('apStatus');
    var fields = [
      { el: form.elements.name, ok: function (v) { return v.length > 1; } },
      { el: form.elements.phone, ok: function (v) { return v.replace(/\D/g, '').length >= 10; } },
      { el: form.elements.email, ok: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); } },
      { el: form.elements.experience, ok: function (v) { return v !== ''; } },
      { el: form.elements.linkedin, ok: function (v) { return v === '' || /^https?:\/\/\S+\.\S+/.test(v); } }
    ];

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
      f.el.addEventListener('change', function () { if (f.el.getAttribute('aria-invalid') === 'true') check(f); });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var bad = fields.filter(function (f) { return !check(f); });
      if (bad.length) { bad[0].el.focus(); status.hidden = true; return; }

      var v = function (n) { return form.elements[n].value.trim(); };
      var role = roleSelect.options[roleSelect.selectedIndex].textContent;
      var body = [
        'Position: ' + role,
        'Name: ' + v('name'),
        'Mobile: ' + v('phone'),
        'Email: ' + v('email'),
        'Total experience: ' + v('experience'),
        'Preferred location: ' + v('location'),
        v('linkedin') ? 'LinkedIn: ' + v('linkedin') : '',
        '',
        v('note'),
        '',
        '[Please attach your CV to this email]'
      ].filter(function (line, i, arr) { return line !== '' || arr[i - 1] !== ''; }).join('\n');

      window.location.href = 'mailto:info@avanamedical.com?subject=' +
        encodeURIComponent('Job application: ' + role + ' – ' + v('name')) + '&body=' + encodeURIComponent(body);
      status.innerHTML = 'Your email app should open with your application ready. <strong>Attach your CV</strong> before sending. If nothing opens, email your CV to info@avanamedical.com.';
      status.hidden = false;
    });
  }
})();
