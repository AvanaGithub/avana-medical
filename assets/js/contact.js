// Contact page: choosing an office moves the map to it.
(function () {
  var map = document.getElementById('officeMap');
  var label = document.getElementById('officeMapLabel');
  var offices = document.querySelectorAll('.office');
  if (!map || !offices.length) return;

  function select(office) {
    offices.forEach(function (o) {
      var on = o === office;
      o.classList.toggle('is-active', on);
      o.querySelector('.office__select').setAttribute('aria-pressed', String(on));
    });
    var type = office.querySelector('.office__type').textContent;
    var city = office.querySelector('.office__city').textContent;
    map.src = 'https://www.google.com/maps?q=' + office.getAttribute('data-query') + '&output=embed';
    map.title = 'Map: ' + type + ', ' + city;
    label.innerHTML = '<span>' + type + '</span> ' + city;
    label.classList.remove('is-swapping');
    void label.offsetWidth; // restart the label animation
    label.classList.add('is-swapping');
  }

  offices.forEach(function (office) {
    office.querySelector('.office__select').addEventListener('click', function () { select(office); });
  });
})();
