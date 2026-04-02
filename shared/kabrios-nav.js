(function () {
  var page = (document.body && document.body.dataset.kabriosPage) || '';

  /* ═══════════════════════════════════════════════════════
     CONFIGURATION — Edit these to update the entire site
     ═══════════════════════════════════════════════════════ */

  /* Formspree endpoint — replace YOUR_FORM_ID with your actual Formspree form ID
     Sign up free at https://formspree.io, create a form, copy the ID.
     Example: if your form URL is https://formspree.io/f/xpzvqkdl
     then set FORM_ID to 'xpzvqkdl' */
  var FORM_ID = 'meerrjqe';
  var FORM_ACTION = 'https://formspree.io/f/' + FORM_ID;

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
    { label: 'Login',      href: 'https://app.kabrios.com/login',  cls: 'is-secondary' },
    { label: 'Start free', href: 'https://app.kabrios.com/login',  cls: 'is-cta' }
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

  /* ═══════════════════════════════════════════════════════ */

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

  /* ── Build footer with subscribe box ── */
  var footer = document.createElement('footer');
  footer.className = 'kb-footer';
  var fl = footerLinks.map(function (item) {
    return '<a href="' + item.href + '" class="kb-footer-link">' + item.label + '</a>';
  }).join('');

  footer.innerHTML =
    /* Subscribe bar */
    '<div class="kb-subscribe-bar">' +
      '<div class="kb-footer-wrap kb-subscribe-wrap">' +
        '<div class="kb-subscribe-text">' +
          '<strong class="kb-subscribe-title">Stay in the loop</strong>' +
          '<span class="kb-subscribe-desc">Product updates, compliance insights, and launch news. No spam.</span>' +
        '</div>' +
        '<form class="kb-subscribe-form" id="kb-subscribe-form" action="' + FORM_ACTION + '" method="POST">' +
          '<input type="hidden" name="_subject" value="Kabrios subscribe: new signup">' +
          '<input type="hidden" name="_source" value="' + (page || 'unknown') + '">' +
          '<input type="email" name="email" class="kb-subscribe-input" placeholder="you@company.com" required autocomplete="email">' +
          '<button type="submit" class="kb-subscribe-btn">Subscribe</button>' +
        '</form>' +
        '<div class="kb-subscribe-success" id="kb-subscribe-success" style="display:none;">' +
          '<span class="kb-subscribe-check">\u2713</span> You\u2019re subscribed. We\u2019ll be in touch.' +
        '</div>' +
      '</div>' +
    '</div>' +
    /* Main footer */
    '<div class="kb-footer-wrap">' +
      '<div>' +
        '<div class="kb-footer-brand">Kab<span style="color:var(--kb-accent)">rios</span></div>' +
        '<p class="kb-footer-copy">Continuous readiness for security, compliance, and client trust.</p>' +
        '<p class="kb-footer-contact">security@kabrios.com \u00B7 contact@kabrios.com</p>' +
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

  /* ── Subscribe form handling ── */
  var form = document.getElementById('kb-subscribe-form');
  var success = document.getElementById('kb-subscribe-success');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var email = form.querySelector('input[name="email"]').value;
      if (!email) return;

      var btn = form.querySelector('.kb-subscribe-btn');
      var origText = btn.textContent;
      btn.textContent = 'Sending\u2026';
      btn.disabled = true;

      /* If FORM_ID hasn't been configured yet, just show success anyway
         so the UX works during development */
      if (FORM_ID === 'YOUR_FORM_ID') {
        console.log('[Kabrios] Subscribe form not configured yet. Email:', email);
        form.style.display = 'none';
        success.style.display = 'flex';
        return;
      }

      fetch(FORM_ACTION, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          _subject: 'Kabrios subscribe: new signup',
          _source: page || 'unknown'
        })
      }).then(function (res) {
        if (res.ok) {
          form.style.display = 'none';
          success.style.display = 'flex';
        } else {
          btn.textContent = 'Try again';
          btn.disabled = false;
        }
      }).catch(function () {
        btn.textContent = 'Try again';
        btn.disabled = false;
      });
    });
  }

  /* ── Also wire up any inline email-capture forms on the page ── */
  var inlineForms = document.querySelectorAll('.email-capture');
  inlineForms.forEach(function (inlineForm) {
    inlineForm.removeAttribute('onsubmit');
    inlineForm.setAttribute('action', FORM_ACTION);
    inlineForm.setAttribute('method', 'POST');

    /* Add hidden fields */
    var h1 = document.createElement('input');
    h1.type = 'hidden'; h1.name = '_subject'; h1.value = 'Kabrios subscribe: inline form';
    inlineForm.appendChild(h1);
    var h2 = document.createElement('input');
    h2.type = 'hidden'; h2.name = '_source'; h2.value = page + '-inline';
    inlineForm.appendChild(h2);

    inlineForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var emailInput = inlineForm.querySelector('input[type="email"]');
      var email = emailInput ? emailInput.value : '';
      if (!email) return;

      var btn = inlineForm.querySelector('button');
      var origText = btn.textContent;
      btn.textContent = 'Sending\u2026';
      btn.disabled = true;

      if (FORM_ID === 'YOUR_FORM_ID') {
        console.log('[Kabrios] Inline form not configured. Email:', email);
        btn.textContent = '\u2713 Subscribed!';
        btn.style.background = 'var(--success, #9be7b4)';
        btn.style.color = 'var(--button-text, #04111b)';
        emailInput.disabled = true;
        return;
      }

      fetch(FORM_ACTION, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          _subject: 'Kabrios subscribe: inline form',
          _source: page + '-inline'
        })
      }).then(function (res) {
        if (res.ok) {
          btn.textContent = '\u2713 Subscribed!';
          btn.style.background = 'var(--success, #9be7b4)';
          btn.style.color = 'var(--button-text, #04111b)';
          emailInput.disabled = true;
        } else {
          btn.textContent = 'Try again';
          btn.disabled = false;
        }
      }).catch(function () {
        btn.textContent = 'Try again';
        btn.disabled = false;
      });
    });
  });
})();
