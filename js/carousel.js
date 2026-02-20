/**
 * Service carousel: auto-advance every 5s, prev/next arrows.
 */
(function () {
  var carousel = document.getElementById('services-carousel');
  if (!carousel) return;

  var inner = carousel.querySelector('.carousel-inner');
  var slides = carousel.querySelectorAll('.carousel-slide');
  var prevBtn = carousel.querySelector('.carousel-prev');
  var nextBtn = carousel.querySelector('.carousel-next');
  var total = slides.length;
  var current = 0;
  var autoplayMs = 5500;
  var timer = null;

  function goTo(index) {
    current = (index + total) % total;
    inner.style.transform = 'translateX(-' + (current * 100) + '%)';
    slides.forEach(function (s, i) {
      s.classList.toggle('active', i === current);
      s.setAttribute('aria-hidden', i !== current);
    });
    if (prevBtn) prevBtn.setAttribute('aria-label', 'Previous service');
    if (nextBtn) nextBtn.setAttribute('aria-label', 'Next service');
  }

  function next() {
    goTo(current + 1);
    resetTimer();
  }

  function prev() {
    goTo(current - 1);
    resetTimer();
  }

  function resetTimer() {
    if (timer) clearInterval(timer);
    timer = setInterval(next, autoplayMs);
  }

  if (prevBtn) prevBtn.addEventListener('click', prev);
  if (nextBtn) nextBtn.addEventListener('click', next);

  goTo(0);
  resetTimer();

  carousel.addEventListener('mouseenter', function () {
    if (timer) clearInterval(timer);
  });
  carousel.addEventListener('mouseleave', function () {
    resetTimer();
  });
})();
