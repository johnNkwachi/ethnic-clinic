/**
 * Scroll-triggered animations: add .in-view when elements enter viewport.
 * Use with CSS classes .animate-on-scroll, .animate-delay-1, etc.
 */
(function () {
  if (!('IntersectionObserver' in window)) return;

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1
    }
  );

  function observe() {
    document.querySelectorAll('.animate-on-scroll').forEach(function (el) {
      observer.observe(el);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observe);
  } else {
    observe();
  }
})();
