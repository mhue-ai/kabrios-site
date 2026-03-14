(function () {
  const current = document.body.dataset.kabriosPage || 'main';
  const root = document.body.dataset.kabriosRoot || 'https://kabrios.com';
  const items = [
    { key: 'try', label: 'Try now', href: 'https://app.kabrios.com', highlight: true },
    { key: 'features', label: 'Features', href: 'https://kabrios.com/#features' },
    { key: 'docs', label: 'Docs', href: 'https://docs.kabrios.com/' },
    { key: 'trust', label: 'Trust', href: 'https://trust.kabrios.com/' },
    { key: 'about', label: 'About us', href: 'https://kabrios.com/#about' },
    { key: 'contact', label: 'Contact', href: 'https://kabrios.com/#contact' }
  ];

  function renderHeader() {
    const mount = document.getElementById('kabrios-nav');
    if (!mount) return;
    mount.innerHTML = `
      <header class="kabrios-header">
        <div class="kabrios-shell">
          <a class="kabrios-brand" href="https://kabrios.com/" aria-label="Kabrios home">
            <span class="kabrios-mark">K</span>
            <span class="kabrios-wordmark">Kabrios</span>
          </a>
          <button class="kabrios-menu" type="button" aria-expanded="false" aria-controls="kabrios-links">Menu</button>
          <nav class="kabrios-links" id="kabrios-links" aria-label="Primary">
            ${items.map(item => {
              const active = item.key === current;
              const cls = [item.highlight ? 'is-highlight' : '', active ? 'is-active' : ''].filter(Boolean).join(' ');
              return `<a class="${cls}" href="${item.href}">${item.label}</a>`;
            }).join('')}
          </nav>
        </div>
      </header>`;
    const button = mount.querySelector('.kabrios-menu');
    const links = mount.querySelector('.kabrios-links');
    if (button && links) {
      button.addEventListener('click', () => {
        const expanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', String(!expanded));
        links.classList.toggle('open', !expanded);
      });
    }
  }

  function renderFooter() {
    const mount = document.getElementById('kabrios-footer');
    if (!mount) return;
    mount.innerHTML = `
      <div class="kabrios-footer-shell">
        <div>
          <strong>Kabrios</strong>
          <p>Continuous readiness for security, risk, and compliance teams.</p>
        </div>
        <div class="kabrios-footer-links">
          <a href="https://app.kabrios.com/">Try now</a>
          <a href="https://kabrios.com/#features">Features</a>
          <a href="https://docs.kabrios.com/">Docs</a>
          <a href="https://trust.kabrios.com/">Trust</a>
          <a href="https://kabrios.com/#about">About us</a>
          <a href="https://kabrios.com/#contact">Contact</a>
        </div>
      </div>`;
  }

  renderHeader();
  renderFooter();
})();
