/* Lions CT Scan & Diagnostic Centre — site scripts */
(function () {
  'use strict';

  // ---- Mobile navigation ----
  var burger = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  if (burger && nav) {
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') nav.classList.remove('open');
    });
  }

  // ---- Price list: search + category filter ----
  var search = document.getElementById('priceSearch');
  if (!search) return;

  var chips = Array.prototype.slice.call(document.querySelectorAll('.chip'));
  var tables = Array.prototype.slice.call(document.querySelectorAll('.ptable'));
  var empty = document.getElementById('noResult');
  var activeCat = 'all';

  function apply() {
    var q = search.value.trim().toLowerCase();
    var totalShown = 0;

    tables.forEach(function (tbl) {
      var catOk = activeCat === 'all' || tbl.getAttribute('data-cat') === activeCat;
      var rows = Array.prototype.slice.call(tbl.querySelectorAll('tbody tr'));
      var shown = 0;

      rows.forEach(function (row) {
        var hit = catOk && (q === '' || row.getAttribute('data-name').indexOf(q) !== -1);
        row.style.display = hit ? '' : 'none';
        if (hit) shown++;
      });

      tbl.style.display = shown ? '' : 'none';
      var counter = tbl.querySelector('.count');
      if (counter) counter.textContent = shown + (shown === 1 ? ' test' : ' tests');
      totalShown += shown;
    });

    if (empty) empty.style.display = totalShown ? 'none' : 'block';
  }

  search.addEventListener('input', apply);

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      chips.forEach(function (c) {
        c.classList.remove('on');
        c.setAttribute('aria-pressed', 'false');
      });
      chip.classList.add('on');
      chip.setAttribute('aria-pressed', 'true');
      activeCat = chip.getAttribute('data-filter');
      apply();
    });
  });

  apply();
})();
