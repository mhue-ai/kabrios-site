(function(){
  const site = document.body.dataset.site || "main";
  const navItems = [
    { key: "main", href: "https://kabrios.com", label: "Platform" },
    { key: "docs", href: "https://docs.kabrios.com", label: "Docs" },
    { key: "trust", href: "https://trust.kabrios.com", label: "Trust" }
  ];
  const topbar = document.getElementById("kabrios-shared-nav");
  const footer = document.getElementById("kabrios-shared-footer");
  const isMain = site === "main";
  const base = isMain ? "" : "https://kabrios.com";
  const mark = base + "/shared/logo/kabrios-mark.svg";
  const wordmark = base + "/shared/logo/kabrios-wordmark.svg";

  if (topbar) {
    topbar.innerHTML = `
      <div class="container topbar-inner">
        <a class="brand" href="https://kabrios.com" aria-label="Kabrios home">
          <span class="brand-lockup">
            <img class="logo-mark" src="${mark}" alt="Kabrios mark">
            <img class="logo-wordmark" src="${wordmark}" alt="Kabrios">
          </span>
        </a>
        <nav class="nav" aria-label="Primary">
          ${navItems.map(item => `<a class="${site === item.key ? "active" : ""}" href="${item.href}">${item.label}</a>`).join("")}
          <a class="nav-cta" href="mailto:hello@kabrios.com">Contact</a>
        </nav>
      </div>
    `;
  }
  if (footer) {
    footer.innerHTML = `
      <div class="container footer-inner">
        <span>© Kabrios</span>
        <div class="footer-links">
          <a href="https://kabrios.com">Platform</a>
          <a href="https://docs.kabrios.com">Docs</a>
          <a href="https://trust.kabrios.com">Trust</a>
        </div>
      </div>
    `;
  }
})();
