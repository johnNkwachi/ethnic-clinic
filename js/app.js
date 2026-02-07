(function () {
  var body = document.body;
  var page = body.getAttribute("data-page");
  if (!page) return;
  var links = document.querySelectorAll(".main-nav .nav-link, .nav-drawer .nav-link");
  links.forEach(function (link) {
    var href = link.getAttribute("href") || "";
    var linkPage = href.replace(".html", "").replace("index", "home") || "home";
    link.classList.toggle("active", linkPage === page);
  });
})();
