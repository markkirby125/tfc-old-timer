# Whitelisted Endpoints & Security Policy: TFC by OldTimer

## 1. Whitelisted Network Endpoints & CORS
Agents and client scripts must only interact with or link to the following explicitly whitelisted hosts:
- `https://github.com/markkirby125/tfc-old-timer/releases/` (Binary download & release tags)
- `https://tfc-old-timer.tcp123.com` (Custom production domain)
- `https://tfc-old-timer.pages.dev` (Cloudflare Pages edge domain)
- `https://markkirby125.github.io/tfc-old-timer/` (GitHub Pages documentation mirror)
- `https://cdn.tailwindcss.com` (Tailwind CDN / standalone styling assets)

## 2. Security Headers & CSP Directives (`main/_headers`)
All Cloudflare Pages security headers must enforce:
- **HSTS**: `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`
- **X-Content-Type-Options**: `nosniff`
- **X-Frame-Options**: `DENY`
- **Referrer-Policy**: `strict-origin-when-cross-origin`
- **Permissions-Policy**: `camera=(), microphone=(), geolocation=()`
- **Content-Security-Policy**: Configured to whitelist self, GitHub download targets, and Tailwind CDN scripts/styles.
