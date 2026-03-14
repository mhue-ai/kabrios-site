Kabrios unified nav production package

What changed:
- shared nav moved into kabrios-nav.js
- shared nav styling moved into kabrios-nav.css
- each page only needs to include those two files
- nav items are absolute so they work across kabrios.com, docs.kabrios.com, trust.kabrios.com, and app.kabrios.com
- Try now is first and highlighted
- Features, Docs, Trust, About us, and Contact are included

How to use on every page:
1. Add in <head>:
   <link rel="stylesheet" href="/kabrios-nav.css">
   <script defer src="/kabrios-nav.js"></script>

2. Set page identity on <body>:
   home | docs | trust | try | features | about | contact
   Example: <body data-kabrios-page="trust">

3. Keep your page content inside <main id="main-content">...</main>

Notes:
- Features points to https://kabrios.com/#capabilities
- About us points to https://kabrios.com/#about-us
- Contact points to https://kabrios.com/#contact
- If docs or trust has its own internal pages, keep using data-kabrios-page="docs" or "trust" for consistent highlighting.
