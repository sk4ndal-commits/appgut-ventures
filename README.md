# appgut-ventures.de

Static website for Appgut Ventures (process automation & AI), hosted on GitHub Pages.

| Path | Page |
| --- | --- |
| `/` | German landing page (`index.html`) |
| `/en/` | English landing page (`en/index.html`) |
| `/impressum.html` | Impressum (German) |
| `/datenschutz.html` | Datenschutzerklärung (German) |
| `/en/legal-notice.html` | Legal notice (English translation) |
| `/en/privacy.html` | Privacy policy (English translation) |
| `/de/` | Redirect to `/` (old German URL) |

- Styles: `assets/site.css`. Savings calculator: `assets/calculator.js` (runs only in the browser).
- Fonts Inter and Space Grotesk are self-hosted in `assets/fonts/` (SIL Open Font License). No cookies, no tracking, no external requests.
- Booking buttons open an email to `info@appgut-ventures.de`. To switch to Calendly later, replace the `mailto:` links with the booking link and re-add a Calendly section to both privacy pages.

## Open items

- Impressum: add the Wirtschafts-Identifikationsnummer once the BZSt assigns it (commented out in `impressum.html` and `en/legal-notice.html`).
- About section: replace the photo placeholder.
- Have Impressum and Datenschutzerklärung checked before relying on them.

## Deploy

Push to `main`; GitHub Pages serves the root folder. The custom domain is set in `CNAME`.
