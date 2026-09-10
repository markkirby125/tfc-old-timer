# Directory Layout & Workspace Invariants: TFC by OldTimer

## 1. Directory Tree
```text
.
├── .nojekyll                 <-- Prevents GitHub Pages Jekyll processing
├── AGENTS.md                 <-- Agent operational directives & governance
├── README.md                 <-- GitHub repository presentation overview
├── github-projects/          <-- Local reference sources, zip archives & upstream binary (READ-ONLY)
│   ├── Landing-Page-master.zip
│   ├── astro-astro-7.2.2.tar.gz
│   ├── WinClearCache-2.0.tar.gz
│   └── TFC.exe
├── docs/                     <-- Architectural specs, documentation & GitHub Pages source
│   ├── .nojekyll
│   ├── index.html
│   ├── TASKS.md              <-- Central task register (P0-P3, model, skill)
│   ├── reference/            <-- Canonical git-versioned reference knowledge base
│   │   ├── project-stack.md
│   │   ├── domain-specs.md
│   │   ├── endpoints-security.md
│   │   └── directory-layout.md
│   └── github/
│       ├── .nojekyll
│       └── index.html
└── main/                     <-- DEPLOYABLE PRODUCTION ROOT (Cloudflare Pages build root)
    ├── index.html            <-- Main production landing page
    ├── _headers              <-- Cloudflare Pages security & caching headers
    ├── robots.txt            <-- Search crawler directives
    └── sitemap.xml           <-- XML sitemap for SEO indexing
```

## 2. Module & Workspace Invariants
- **`github-projects/`**: Strictly **READ-ONLY**. Contains local reference sources, zip archives, and upstream binaries. Never edit or commit bloat into this folder.
- **`main/`**: The **SOLE DEPLOYABLE ROOT** for Cloudflare Pages. All production code, assets, scripts, security headers (`_headers`), `robots.txt`, and `sitemap.xml` reside exclusively here.
- **`docs/`**: Houses technical specifications, reference documentation, task registers, and the GitHub Pages documentation mirror (`.nojekyll`).
- **No floating root production files** and zero server-side dependencies or dynamic backends.
