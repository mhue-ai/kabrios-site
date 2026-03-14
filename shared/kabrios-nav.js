(function () {
  const page = document.body?.dataset?.kabriosPage || '';
  const navItems = [
    { label: 'Try now', href: 'https://app.kabrios.com', external: true, cta: true, key: 'app' },
    { label: 'See it in action', href: 'https://seeit.kabrios.com', external: true, key: 'seeit' },
    { label: 'Why Kabrios', href: 'https://why.kabrios.com', external: true, key: 'why' },
    { label: 'Features', href: page === 'main' ? '#features' : 'https://kabrios.com/#features', key: 'features' },
    { label: 'Docs', href: 'https://docs.kabrios.com', external: true, key: 'docs' },
    { label: 'Trust', href: 'https://trust.kabrios.com', external: true, key: 'trust' },
    { label: 'About us', href: page === 'main' ? '#about' : 'https://kabrios.com/#about', key: 'about' },
    { label: 'Contact', href: page === 'main' ? '#contact' : 'https://kabrios.com/#contact', key: 'contact' }
  ];

  const header = document.createElement('header');
  header.className = 'kabrios-nav-shell';
  header.innerHTML = `
    <div class="kabrios-nav-wrap">
      <a class="kabrios-brand" href="https://kabrios.com/" aria-label="Kabrios home">
        <span class="kabrios-brand-mark"></span>
        <span class="kabrios-brand-text">Kabrios</span>
      </a>
      <button class="kabrios-nav-toggle" type="button" aria-expanded="false" aria-controls="kabrios-nav-links">Menu</button>
      <nav class="kabrios-nav" aria-label="Primary">
        <div id="kabrios-nav-links" class="kabrios-nav-links"></div>
      </nav>
    </div>`;

  const linkWrap = header.querySelector('#kabrios-nav-links');
  navItems.forEach((item) => {
    const a = document.createElement('a');
    a.textContent = item.label;
    a.href = item.href;
    a.className = 'kabrios-nav-link';
    if (item.cta) a.classList.add('is-cta');
    if (page === item.key) a.classList.add('is-active');
    if (item.external) {
      a.target = '_self';
      a.rel = 'noopener';
    }
    linkWrap.appendChild(a);
  });

  document.body.prepend(header);

  const footer = document.createElement('footer');
  footer.className = 'kabrios-footer-shell';
  footer.innerHTML = `
    <div class="kabrios-footer-wrap">
      <div>
        <div class="kabrios-footer-brand">Kabrios</div>
        <p class="kabrios-footer-copy">Continuous readiness for security and compliance programs that need a real operating system, not another disconnected dashboard.</p>
      </div>
      <div class="kabrios-footer-links">
        ${navItems.map(item => `<a href="${item.href}" class="kabrios-footer-link">${item.label}</a>`).join('')}
      </div>
    </div>`;
  document.body.appendChild(footer);

  const toggle = header.querySelector('.kabrios-nav-toggle');
  toggle?.addEventListener('click', () => {
    const open = header.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
})();