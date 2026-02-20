/**
 * Testimonials carousel — one slide at a time, dots + arrows, auto-advance.
 */
(function () {
  var wrap = document.getElementById('testimonials-carousel');
  if (!wrap) return;

  var track = wrap.querySelector('.testimonials-track');
  var slides = wrap.querySelectorAll('.testimonial-slide');
  var prevBtn = wrap.querySelector('.testimonial-prev');
  var nextBtn = wrap.querySelector('.testimonial-next');
  var dotsEl = wrap.querySelector('.testimonials-dots');
  var total = slides.length;
  var current = 0;
  var autoplayMs = 7000;
  var timer = null;

  function goTo(index) {
    current = (index + total) % total;
    var percent = total > 0 ? (current / total) * 100 : 0;
    if (track) track.style.transform = 'translateX(-' + percent + '%)';
    slides.forEach(function (s, i) {
      s.classList.toggle('active', i === current);
      s.setAttribute('aria-hidden', i !== current);
    });
    updateDots();
  }

  function updateDots() {
    if (!dotsEl) return;
    var dots = dotsEl.querySelectorAll('button');
    dots.forEach(function (d, i) {
      d.setAttribute('aria-selected', i === current);
      d.classList.toggle('active', i === current);
    });
  }

  function buildDots() {
    if (!dotsEl || total <= 1) return;
    dotsEl.innerHTML = '';
    for (var i = 0; i < total; i++) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-label', 'Go to testimonial ' + (i + 1));
      btn.setAttribute('aria-selected', i === 0);
      if (i === 0) btn.classList.add('active');
      btn.addEventListener('click', function (idx) {
        goTo(idx);
        resetTimer();
      }.bind(null, i));
      dotsEl.appendChild(btn);
    }
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
  buildDots();
  goTo(0);
  resetTimer();

  wrap.addEventListener('mouseenter', function () {
    if (timer) clearInterval(timer);
  });
  wrap.addEventListener('mouseleave', function () {
    resetTimer();
  });
})();
