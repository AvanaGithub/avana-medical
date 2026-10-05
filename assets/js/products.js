// Renders the product catalogue (products.html) and product detail page (product.html)
// from window.AVANA_CATALOG, defined in data/catalog.js.
(function () {
  var data = window.AVANA_CATALOG;
  if (!data) return;

  var brandsById = {};
  var catsById = {};
  data.brands.forEach(function (b) { brandsById[b.id] = b; });
  data.categories.forEach(function (c) { catsById[c.id] = c; });

  var params = new URLSearchParams(window.location.search);

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  // Featured first, then alphabetical
  function sorted(list) {
    return list.slice().sort(function (a, b) {
      if (a.featured !== b.featured) return a.featured ? -1 : 1;
      return a.name.localeCompare(b.name);
    });
  }

  function card(p) {
    var brand = brandsById[p.brand] || { name: p.brand };
    var cat = catsById[p.category] || { name: p.category };
    return '<li><a class="pcard" href="product.html?id=' + encodeURIComponent(p.id) + '">' +
      '<span class="pcard__img">' +
        '<img src="' + esc(p.images && p.images[0]) + '" alt="' + esc(p.name) + '" width="800" height="600" loading="lazy">' +
        (p.featured ? '<span class="pcard__badge">Featured</span>' : '') +
      '</span>' +
      '<span class="pcard__body">' +
        '<span class="pcard__meta"><span class="pcard__brand">' + esc(brand.name) + '</span><span class="pcard__cat">' + esc(cat.name) + '</span></span>' +
        '<span class="pcard__name">' + esc(p.name) + '</span>' +
        '<span class="pcard__summary">' + esc(p.summary) + '</span>' +
        '<span class="pcard__more">View product <span aria-hidden="true">&rarr;</span></span>' +
      '</span>' +
    '</a></li>';
  }

  /* ---------------- Catalogue ---------------- */

  function initCatalog() {
    var grid = document.getElementById('productGrid');
    var catBox = document.getElementById('catFilters');
    var brandBox = document.getElementById('brandFilters');
    var search = document.getElementById('q');
    var clearBtn = document.getElementById('clearFilters');
    var empty = document.getElementById('emptyState');
    var title = document.getElementById('catalogTitle');
    var intro = document.getElementById('catalogIntro');
    var count = document.getElementById('resultCount');

    var state = {
      category: catsById[params.get('category')] ? params.get('category') : '',
      brand: brandsById[params.get('brand')] ? params.get('brand') : '',
      q: params.get('q') || ''
    };
    search.value = state.q;

    function matches(p, s) {
      if (s.category && p.category !== s.category) return false;
      if (s.brand && p.brand !== s.brand) return false;
      if (s.q) {
        var hay = (p.name + ' ' + p.code + ' ' + p.summary + ' ' +
          (brandsById[p.brand] || {}).name + ' ' + (catsById[p.category] || {}).name).toLowerCase();
        var words = s.q.toLowerCase().split(/\s+/).filter(Boolean);
        for (var i = 0; i < words.length; i++) if (hay.indexOf(words[i]) === -1) return false;
      }
      return true;
    }

    function countWith(overrides) {
      var s = { category: state.category, brand: state.brand, q: state.q };
      for (var k in overrides) s[k] = overrides[k];
      return data.products.filter(function (p) { return matches(p, s); }).length;
    }

    function buttons(box, list, key, allLabel) {
      var html = '<button type="button" class="fbtn" data-key="' + key + '" data-value="" aria-pressed="' + (!state[key]) + '">' +
        '<span>' + allLabel + '</span><span class="fbtn__count">' + countWith(obj(key, '')) + '</span></button>';
      list.forEach(function (item) {
        var n = countWith(obj(key, item.id));
        if (!data.products.some(function (p) { return p[key] === item.id; })) return;
        html += '<button type="button" class="fbtn" data-key="' + key + '" data-value="' + esc(item.id) + '" aria-pressed="' + (state[key] === item.id) + '"' + (n === 0 && state[key] !== item.id ? ' disabled' : '') + '>' +
          '<span>' + esc(item.name) + '</span><span class="fbtn__count">' + n + '</span></button>';
      });
      box.innerHTML = html;
    }

    function obj(k, v) { var o = {}; o[k] = v; return o; }

    function syncUrl() {
      var u = new URLSearchParams();
      if (state.category) u.set('category', state.category);
      if (state.brand) u.set('brand', state.brand);
      if (state.q) u.set('q', state.q);
      var qs = u.toString();
      try { history.replaceState(null, '', qs ? '?' + qs : window.location.pathname); } catch (e) { /* file:// in some browsers */ }
    }

    function render() {
      var list = sorted(data.products.filter(function (p) { return matches(p, state); }));

      buttons(catBox, data.categories, 'category', 'All categories');
      buttons(brandBox, data.brands, 'brand', 'All brands');

      var cat = catsById[state.category];
      var brand = brandsById[state.brand];
      title.textContent = cat ? cat.name : (brand ? brand.name : 'All products');
      intro.textContent = cat ? cat.summary : 'Implants, instruments, biologics and capital equipment available through Avana.';
      count.textContent = 'Showing ' + list.length + ' of ' + data.products.length + ' products';

      grid.innerHTML = list.map(card).join('');
      empty.hidden = list.length > 0;
      clearBtn.hidden = !(state.category || state.brand || state.q);
      syncUrl();
    }

    function clearAll() {
      state.category = '';
      state.brand = '';
      state.q = '';
      search.value = '';
      render();
    }

    document.querySelector('.filters').addEventListener('click', function (e) {
      var b = e.target.closest('.fbtn');
      if (!b || b.disabled) return;
      state[b.getAttribute('data-key')] = b.getAttribute('data-value');
      render();
      // Keep keyboard focus on the same option after re-render
      var again = document.querySelector('.fbtn[data-key="' + b.getAttribute('data-key') + '"][data-value="' + b.getAttribute('data-value') + '"]');
      if (again) again.focus();
    });

    search.addEventListener('input', function () {
      state.q = search.value.trim();
      render();
    });

    clearBtn.addEventListener('click', clearAll);
    document.getElementById('emptyClear').addEventListener('click', clearAll);

    render();
  }

  /* ---------------- Product detail ---------------- */

  function initDetail() {
    var p = data.products.filter(function (x) { return x.id === params.get('id'); })[0];
    var pdp = document.getElementById('pdp');

    if (!p) {
      document.getElementById('pdpMissing').hidden = false;
      document.title = 'Product not found | Avana Medical';
      return;
    }

    var brand = brandsById[p.brand] || { name: p.brand };
    var cat = catsById[p.category] || { name: p.category, id: p.category };
    var catLink = 'products.html?category=' + encodeURIComponent(cat.id);
    var images = p.images && p.images.length ? p.images : [];

    document.title = p.name + ' | Avana Medical';

    document.getElementById('crumbs').innerHTML =
      '<a href="index.html">Home</a><span aria-hidden="true">/</span>' +
      '<a href="products.html">Products</a><span aria-hidden="true">/</span>' +
      '<a href="' + catLink + '">' + esc(cat.name) + '</a><span aria-hidden="true">/</span>' +
      '<span aria-current="page">' + esc(p.name) + '</span>';

    var thumbs = images.length > 1 ? '<div class="pdp__thumbs" role="group" aria-label="Product images">' +
      images.map(function (src, i) {
        return '<button type="button" class="pdp__thumb" data-src="' + esc(src) + '" aria-pressed="' + (i === 0) + '" aria-label="Show image ' + (i + 1) + ' of ' + images.length + '">' +
          '<img src="' + esc(src) + '" alt="" width="800" height="600"></button>';
      }).join('') + '</div>' : '';

    var specs = (p.specs || []).map(function (s) {
      return '<tr><th scope="row">' + esc(s.label) + '</th><td>' + esc(s.value) + '</td></tr>';
    }).join('');

    pdp.innerHTML =
      '<div class="pdp__gallery">' +
        '<div class="frame pdp__stage"><img id="pdpMain" src="' + esc(images[0]) + '" alt="' + esc(p.name) + '" width="800" height="600"></div>' +
        thumbs +
      '</div>' +
      '<div class="pdp__info">' +
        '<p class="eyebrow">' + esc(brand.name) + '</p>' +
        '<h1 class="pdp__title">' + esc(p.name) + '</h1>' +
        '<div class="pdp__tags"><a class="tag" href="' + catLink + '">' + esc(cat.name) + '</a><span class="tag tag--code">Ref. ' + esc(p.code) + '</span></div>' +
        '<p class="lead">' + esc(p.summary) + '</p>' +
        '<ul class="checks">' + (p.features || []).map(function (f) { return '<li>' + esc(f) + '</li>'; }).join('') + '</ul>' +
        '<div class="pdp__actions">' +
          '<a class="btn btn--gold" href="about.html?product=' + encodeURIComponent(p.name) + '#get-in-touch">Enquire about this product</a>' +
          '<a class="btn btn--outline" href="' + catLink + '">More ' + esc(cat.name) + '</a>' +
        '</div>' +
      '</div>' +
      '<div class="pdp__details">' +
        '<div class="pdp__desc">' +
          '<h2 class="heading">Description</h2>' +
          (p.description || []).map(function (d) { return '<p>' + esc(d) + '</p>'; }).join('') +
        '</div>' +
        '<div>' +
          '<h2 class="heading">Specifications</h2>' +
          '<div class="spec-wrap"><table class="spec"><tbody>' + specs + '</tbody></table></div>' +
          '<div class="brandbox"><p class="eyebrow">About the brand</p><p><strong>' + esc(brand.name) + '</strong>' + (brand.origin ? ' &middot; ' + esc(brand.origin) : '') + '</p><p>' + esc(brand.about) + '</p></div>' +
        '</div>' +
      '</div>';
    pdp.hidden = false;

    // Gallery thumbnails swap the main image
    var main = document.getElementById('pdpMain');
    pdp.addEventListener('click', function (e) {
      var t = e.target.closest('.pdp__thumb');
      if (!t) return;
      main.src = t.getAttribute('data-src');
      pdp.querySelectorAll('.pdp__thumb').forEach(function (b) { b.setAttribute('aria-pressed', String(b === t)); });
    });

    var related = sorted(data.products.filter(function (x) { return x.category === p.category && x.id !== p.id; })).slice(0, 3);
    if (related.length) {
      document.getElementById('relatedTitle').innerHTML = 'More in <span class="gold">' + esc(cat.name) + '</span>';
      document.getElementById('relatedGrid').innerHTML = related.map(card).join('');
      document.getElementById('relatedSection').hidden = false;
    }
  }

  if (document.getElementById('productGrid')) initCatalog();
  if (document.getElementById('pdp')) initDetail();
})();
