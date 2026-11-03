# appgut-ventures.de

Static website for Appgut Ventures, hosted on GitHub Pages.

| Path | Page |
| --- | --- |
| `/` | English landing page (`index.html`) |
| `/de/` | German landing page (`de/index.html`) |
| `/impressum.html` | Impressum (German) |
| `/datenschutz.html` | Datenschutzerklärung (German) |

Fonts are self-hosted in `assets/fonts/` (SIL Open Font License). No cookies, no tracking, no external requests.

## Before going live

- Replace the yellow placeholders in `impressum.html` and `datenschutz.html` (phone, VAT ID, email provider, US transfer basis) and have both pages checked.
- Make sure `hello@appgut-ventures.de` receives mail.

## Deploy on GitHub Pages

1. Create a public repository (e.g. `appgut-ventures.de`) and push these files to the `main` branch, root folder.
2. Repository → Settings → Pages → Source: "Deploy from a branch", Branch: `main`, folder `/ (root)`.
3. Custom domain: `appgut-ventures.de` (the `CNAME` file already contains it).
4. At your domain registrar, set DNS for the apex domain `appgut-ventures.de`:
   - `A` records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `AAAA` records (optional): `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
   - `CNAME` for `www`: `<your-github-username>.github.io`
   - Keep the existing `MX` records for email untouched.
5. GitHub → your account Settings → Pages → verify the domain (protects it from takeover).
6. Once the certificate is issued (can take up to a day), tick "Enforce HTTPS".
