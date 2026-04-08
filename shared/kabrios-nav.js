(() => {
  const SITE = {
    brandUrl: 'https://www.kabrios.com/',
    tryUrl: 'https://app.kabrios.com/login',
    productUrl: 'https://www.kabrios.com/product.html',
    pricingUrl: 'https://www.kabrios.com/pricing.html',
    compareUrl: 'https://www.kabrios.com/compare.html',
    docsUrl: 'https://www.kabrios.com/docs.html',
    blogUrl: 'https://www.kabrios.com/blog/',
    trustUrl: 'https://www.kabrios.com/trust/',
    aboutUrl: 'https://www.kabrios.com/about.html',
    supportUrl: 'https://www.kabrios.com/support.html'
  };

  const navItems = [
    { label: 'Product', href: SITE.productUrl, key: 'product' },
    { label: 'Pricing', href: SITE.pricingUrl, key: 'pricing' },
    { label: 'Compare', href: SITE.compareUrl, key: 'compare' },
    { label: 'Docs', href: SITE.docsUrl, key: 'docs' },
    { label: 'Blog', href: SITE.blogUrl, key: 'blog' },
    { label: 'Trust', href: SITE.trustUrl, key: 'trust' },
    { label: 'About', href: SITE.aboutUrl, key: 'about' }
  ];

  const actionItems = [
    { label: 'Login', href: SITE.tryUrl, key: 'login', style: 'secondary' },
    { label: 'Try now', href: SITE.tryUrl, key: 'try', style: 'cta' }
  ];

  const body = document.body;
  if (!body) return;

  const page = (body.dataset.kabriosPage || '').trim();
  const currentUrl = new URL(window.location.href);

  const isCurrent = (item) => {
    if (page === item.key) return true;
    if (item.key === 'try' && currentUrl.hostname === 'app.kabrios.com') return true;
    if (item.key === 'blog' && currentUrl.pathname.startsWith('/blog')) return true;
    if (item.key === 'trust' && currentUrl.pathname.startsWith('/trust')) return true;

    const itemUrl = new URL(item.href, currentUrl.origin);
    if (itemUrl.origin !== currentUrl.origin) return false;
    const normalize = (value) => value.replace(/\/$/, '') || '/';
    return normalize(itemUrl.pathname) === normalize(currentUrl.pathname) && itemUrl.hash === currentUrl.hash;
  };

  const navHtml = `
    <header class="kabrios-nav-shell" data-kabrios-nav>
      <div class="container">
        <div class="kabrios-nav">
          <a class="kabrios-brand" href="${SITE.brandUrl}" aria-label="Kabrios home">
            <span class="kabrios-brand-mark" aria-hidden="true">K</span>
            <span class="kabrios-brand-word">Kabrios</span>
          </a>
          <nav class="kabrios-nav-links" id="kabrios-nav-links" aria-label="Primary navigation">
            ${navItems.map((item) => `<a href="${item.href}" class="${isCurrent(item) ? 'is-current' : ''}" ${isCurrent(item) ? 'aria-current="page"' : ''}>${item.label}</a>`).join('')}
          </nav>
          <div class="kabrios-nav-actions">
            <button class="kabrios-nav-toggle" type="button" aria-expanded="false" aria-controls="kabrios-nav-links">Menu</button>
            ${actionItems.map((item) => `<a href="${item.href}" class="kabrios-nav-btn is-${item.style}">${item.label}</a>`).join('')}
          </div>
        </div>
      </div>
    </header>
  `;

  const footerHtml = `
    <footer class="kabrios-footer-shell">
      <div class="container">
        <div class="kabrios-footer">
          <a class="kabrios-brand" href="${SITE.brandUrl}" aria-label="Kabrios home">
            <span class="kabrios-brand-mark" aria-hidden="true">K</span>
            <span class="kabrios-brand-word">Kabrios</span>
          </a>
          <div class="kabrios-footer-links">
            ${navItems.map((item) => `<a href="${item.href}">${item.label}</a>`).join('')}
          </div>
          <div class="kabrios-footer-copy">Continuous readiness across the Kabrios platform.</div>
        </div>
      </div>
    </footer>
  `;

  body.insertAdjacentHTML('afterbegin', navHtml);
  body.insertAdjacentHTML('beforeend', footerHtml);

  const shell = document.querySelector('[data-kabrios-nav]');
  const toggle = shell?.querySelector('.kabrios-nav-toggle');

  const syncScroll = () => shell?.classList.toggle('is-scrolled', window.scrollY > 10);

  toggle?.addEventListener('click', () => {
    const isOpen = shell.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('click', (event) => {
    if (!shell?.contains(event.target)) {
      shell?.classList.remove('is-open');
      toggle?.setAttribute('aria-expanded', 'false');
    }
  });

  window.addEventListener('scroll', syncScroll, { passive: true });
  syncScroll();
})();
