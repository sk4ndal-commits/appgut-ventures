// Copy-to-clipboard for the email address (falls back to selecting the text).
document.querySelectorAll('[data-copy]').forEach(function (btn) {
  var label = btn.getAttribute('aria-label');
  btn.addEventListener('click', function () {
    var text = btn.getAttribute('data-copy');
    var done = function () {
      btn.classList.add('copied');
      btn.setAttribute('aria-label', btn.getAttribute('data-done') || label);
      btn.title = btn.getAttribute('aria-label');
      setTimeout(function () {
        btn.classList.remove('copied');
        btn.setAttribute('aria-label', label);
        btn.title = label;
      }, 2000);
    };
    var fallback = function () {
      var target = document.getElementById(btn.getAttribute('aria-controls'));
      if (!target) return;
      var range = document.createRange();
      range.selectNodeContents(target);
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, fallback);
    } else {
      fallback();
    }
  });
});
