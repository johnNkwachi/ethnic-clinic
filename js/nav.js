(function () {
  var body = document.body;
  var toggle = document.getElementById("nav-toggle");
  var overlay = document.getElementById("nav-overlay");
  var drawer = document.getElementById("nav-drawer");

  if (!toggle || !overlay || !drawer) return;

  function openNav() {
    body.classList.add("nav-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close menu");
    overlay.setAttribute("aria-hidden", "false");
    drawer.setAttribute("aria-hidden", "false");
  }

  function closeNav() {
    body.classList.remove("nav-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
    overlay.setAttribute("aria-hidden", "true");
    drawer.setAttribute("aria-hidden", "true");
  }

  function toggleNav() {
    if (body.classList.contains("nav-open")) {
      closeNav();
    } else {
      openNav();
    }
  }

  toggle.addEventListener("click", toggleNav);
  overlay.addEventListener("click", closeNav);

  drawer.querySelectorAll(".nav-link").forEach(function (link) {
    link.addEventListener("click", closeNav);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && body.classList.contains("nav-open")) {
      closeNav();
    }
  });
})();
