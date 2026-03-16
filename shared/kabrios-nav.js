(function () {
  var page = (document.body && document.body.dataset.kabriosPage) || '';

  /* ── Nav links — edit ONLY here to update across the entire site ── */
  var navLinks = [
    { label: 'Product',  href: 'https://kabrios.com/product.html', key: 'product' },
    { label: 'Pricing',  href: 'https://pricing.kabrios.com/',     key: 'pricing' },
    { label: 'Compare',  href: 'https://compare.kabrios.com/',     key: 'compare' },
    { label: 'Docs',     href: 'https://docs.kabrios.com/',        key: 'docs' },
    { label: 'Trust',    href: 'https://trust.kabrios.com/',        key: 'trust' },
    { label: 'Blog',     href: 'https://blog.kabrios.com/',         key: 'blog' },
    { label: 'About',    href: 'https://about.kabrios.com/',        key: 'about' },
    { label: 'Support',  href: 'https://support.kabrios.com/',      key: 'support' }
  ];

  var actionLinks = [
    { label: 'Login',      href: 'https://app.kabrios.com/',       cls: 'is-secondary' },
    { label: 'Start free', href: 'https://app.kabrios.com/',       cls: 'is-cta' }
  ];

  var footerLinks = [
    { label: 'Home',      href: 'https://kabrios.com/' },
    { label: 'Product',   href: 'https://kabrios.com/product.html' },
    { label: 'Pricing',   href: 'https://pricing.kabrios.com/' },
    { label: 'Compare',   href: 'https://compare.kabrios.com/' },
    { label: 'Docs',      href: 'https://docs.kabrios.com/' },
    { label: 'Trust',     href: 'https://trust.kabrios.com/' },
    { label: 'Blog',      href: 'https://blog.kabrios.com/' },
    { label: 'About',     href: 'https://about.kabrios.com/' },
    { label: 'Support',   href: 'https://support.kabrios.com/' }
  ];

  /* ── Remove any existing inline header/footer ── */
  var eh = document.querySelector('header');
  if (eh) eh.remove();
  var ef = document.querySelector('footer');
  if (ef) ef.remove();

  /* ── Build header ── */
  var header = document.createElement('header');
  header.className = 'kb-header';
  header.innerHTML =
    '<div class="kb-header-wrap">' +
      '<a class="kb-brand" href="https://kabrios.com/" aria-label="Kabrios home">' +
        '<span class="kb-brand-mark"></span>' +
        '<span class="kb-brand-text">Kab<span class="kb-brand-accent">rios</span></span>' +
      '</a>' +
      '<button class="kb-toggle" type="button" aria-expanded="false" aria-controls="kb-nav">Menu</button>' +
      '<nav class="kb-nav" id="kb-nav" aria-label="Primary"></nav>' +
      '<div class="kb-actions"></div>' +
    '</div>';

  var nav = header.querySelector('.kb-nav');
  navLinks.forEach(function (item) {
    var a = document.createElement('a');
    a.textContent = item.label;
    a.href = item.href;
    a.className = 'kb-nav-link';
    if (page === item.key) a.classList.add('is-active');
    nav.appendChild(a);
  });

  var actions = header.querySelector('.kb-actions');
  actionLinks.forEach(function (item) {
    var a = document.createElement('a');
    a.textContent = item.label;
    a.href = item.href;
    a.className = 'kb-btn ' + item.cls;
    actions.appendChild(a);
  });

  document.body.prepend(header);

  /* ── Build footer ── */
  var footer = document.createElement('footer');
  footer.className = 'kb-footer';
  var fl = footerLinks.map(function (item) {
    return '<a href="' + item.href + '" class="kb-footer-link">' + item.label + '</a>';
  }).join('');

  footer.innerHTML =
    '<div class="kb-footer-wrap">' +
      '<div>' +
        '<div class="kb-footer-brand">Kab<span style="color:var(--kb-accent)">rios</span></div>' +
        '<p class="kb-footer-copy">Continuous readiness for security, compliance, and client trust.</p>' +
        '<p class="kb-footer-contact">security@kabrios.com · contact@kabrios.com</p>' +
      '</div>' +
      '<div class="kb-footer-links">' + fl + '</div>' +
    '</div>' +
    '<div class="kb-footer-wrap kb-footer-bottom">' +
      '<span>\u00A9 2026 Kabrios. All rights reserved.</span>' +
    '</div>';

  document.body.appendChild(footer);

  /* ── Mobile toggle ── */
  var toggle = header.querySelector('.kb-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var open = header.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }
})();
