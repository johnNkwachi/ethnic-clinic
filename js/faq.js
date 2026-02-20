(function () {
  'use strict';
  document.querySelectorAll('[data-faq-toggle]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var expanded = this.getAttribute('aria-expanded') === 'true';
      var id = this.getAttribute('aria-controls');
      var panel = id ? document.getElementById(id) : null;
      this.setAttribute('aria-expanded', !expanded);
      if (panel) panel.hidden = expanded;
      var wrap = this.closest('.faq-item') || this.closest('[data-faq-item]');
      if (wrap) wrap.classList.toggle('faq-item-open', !expanded), wrap.classList.toggle('is-open', !expanded);
    });
  });
})();
