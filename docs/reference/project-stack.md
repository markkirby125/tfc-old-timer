# Project Stack & Platform Specifications: TFC by OldTimer

## 1. Project Identity & Architecture
- **Project Name**: TFC (Temp File Cleaner) by OldTimer Mirror & Remediation Guide
- **Production URL**: `https://tfc-old-timer.tcp123.com`
- **Preview / Edge URL**: `https://tfc-old-timer.pages.dev`
- **GitHub Pages Mirror**: `https://markkirby125.github.io/tfc-old-timer/`
- **Repository**: `markkirby125/tfc-old-timer`
- **Niche**: Legacy Windows temp file remediation, disk cleanup utility archive, and modern OS native cleanup guide.
- **Tech Stack**: Static HTML5, Tailwind CSS, Vanilla JavaScript, Cloudflare Pages static edge (zero server-side runtime).
- **UI Constraints**: No heavy third-party UI libraries (e.g. Radix, Shadcn, Material UI, React, Vue). Pure static client-side execution.
- **Language & Conventions**: Strict British English for all UI strings, metadata, logs, comments, documentation, and agent output (e.g., optimise, realise, centre, organisation, behaviour, analyse, prioritise, licence).

## 2. Platform-Specific Invariants
- **Stateless Edge Execution**: The project is 100% client-side static HTML/CSS/JS. Zero backend APIs, Node.js servers, or database connections.
- **Cloudflare Pages Deploy Root**: `main/` is the sole deployable production directory.
- **Security & Caching Headers**: All Cloudflare Pages security headers (CSP, HSTS, X-Content-Type-Options, X-Frame-Options) and asset caching rules are configured in `main/_headers`.

## 3. Build & Verification Pipeline
- **Validation Gates**:
  1. Local HTML semantic validity and anchor integrity (zero broken links).
  2. JSON-LD schema verification (`SoftwareApplication`, `FAQPage`).
  3. Accessibility & WCAG AAA contrast verification on dark slate/navy theme tokens.
- **Deployment Command**:
  ```bash
  npx wrangler pages deploy ./main --project-name tfc-old-timer --branch main
  ```
