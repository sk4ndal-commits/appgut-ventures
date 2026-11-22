// Savings calculator: runs entirely in the browser, nothing is sent anywhere.
(function () {
  var lang = document.documentElement.lang === 'en' ? 'en' : 'de';
  var areas = {
    de: ['Rechnungen & Dokumente', 'Daten & Schnittstellen', 'E-Mail & Kommunikation', 'Vertrieb & CRM', 'Aufgaben & Abläufe', 'Recherche', 'Internes Wissen'],
    en: ['Invoices & documents', 'Data & integrations', 'Email & communication', 'Sales & CRM', 'Tasks & processes', 'Research', 'Internal knowledge']
  }[lang];
  var state = { area: 0, hours: 10, rate: 50 };

  function fmt(n) {
    n = Math.round(n);
    return lang === 'de' ? n.toLocaleString('de-DE') + '\u00a0€' : '€' + n.toLocaleString('en-GB');
  }

  function render() {
    var cost = state.hours * 46 * state.rate;
    var save = cost * 0.5;
    var weeks = Math.max(1, Math.ceil(690 / (state.hours * state.rate * 0.5)));
    var out = {
      costText: fmt(cost),
      saveText: fmt(save),
      monthText: fmt(save / 12),
      weeksText: lang === 'de' ? (weeks === 1 ? '1 Woche' : weeks + ' Wochen') : (weeks === 1 ? '1 week' : weeks + ' weeks'),
      formulaText: lang === 'de'
        ? state.hours + ' h/Woche × 46 Arbeitswochen × ' + state.rate + ' €/h × 50 % Automatisierungsanteil'
        : state.hours + ' h/week × 46 working weeks × €' + state.rate + '/h × 50% automation share',
      areaLabel: lang === 'de' ? areas[state.area] : areas[state.area].toLowerCase()
    };
    document.querySelectorAll('[data-out]').forEach(function (el) {
      el.textContent = out[el.getAttribute('data-out')];
    });
    document.querySelectorAll('[data-group]').forEach(function (btn) {
      var g = btn.getAttribute('data-group');
      btn.setAttribute('aria-pressed', String(Number(btn.getAttribute('data-value')) === state[g]));
    });
  }

  document.querySelectorAll('[data-group]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      state[btn.getAttribute('data-group')] = Number(btn.getAttribute('data-value'));
      render();
    });
  });
  render();
})();
