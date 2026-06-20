/* Theme toggle + small leaderboard interactions.
   The no-flash theme bootstrap lives inline in each page <head>. */
(function () {
  "use strict";

  // --- theme toggle --------------------------------------------------------
  function setTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    try { localStorage.setItem("pref-theme", t); } catch (e) {}
  }
  document.addEventListener("click", function (e) {
    var btn = e.target.closest(".theme-toggle");
    if (!btn) return;
    var cur = document.documentElement.getAttribute("data-theme") || "light";
    setTheme(cur === "dark" ? "light" : "dark");
  });

  // --- leaderboard: highlight a metric column on header click --------------
  document.querySelectorAll("table.data[data-sortable]").forEach(function (table) {
    var headers = table.querySelectorAll("thead th[data-key]");
    headers.forEach(function (th) {
      th.style.cursor = "pointer";
      th.title = "Click to sort by " + th.textContent.trim();
      th.addEventListener("click", function () {
        sortBy(table, th);
      });
    });
  });

  function sortBy(table, th) {
    var idx = Array.prototype.indexOf.call(th.parentNode.children, th);
    var dir = th.dataset.dir === "asc" ? "desc" : "asc";
    th.parentNode.querySelectorAll("th").forEach(function (h) { delete h.dataset.dir; });
    th.dataset.dir = dir;
    var tbody = table.querySelector("tbody");
    var rows = Array.prototype.slice.call(tbody.querySelectorAll("tr"));
    rows.sort(function (a, b) {
      var va = parseFloat(a.children[idx].dataset.v ?? a.children[idx].textContent);
      var vb = parseFloat(b.children[idx].dataset.v ?? b.children[idx].textContent);
      if (isNaN(va) && isNaN(vb)) return 0;
      if (isNaN(va)) return 1;
      if (isNaN(vb)) return -1;
      return dir === "asc" ? va - vb : vb - va;
    });
    rows.forEach(function (r) { tbody.appendChild(r); });
  }

  // --- scroll-spy for TOC --------------------------------------------------
  var tocLinks = document.querySelectorAll(".toc a[href^='#']");
  if (tocLinks.length) {
    var map = {};
    tocLinks.forEach(function (l) { map[l.getAttribute("href").slice(1)] = l; });
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var link = map[en.target.id];
        if (link && en.isIntersecting) {
          tocLinks.forEach(function (l) { l.style.color = ""; l.style.fontWeight = ""; });
          link.style.color = "var(--teal)";
          link.style.fontWeight = "600";
        }
      });
    }, { rootMargin: "-10% 0px -75% 0px" });
    document.querySelectorAll("h2[id], h3[id]").forEach(function (h) { obs.observe(h); });
  }
})();
