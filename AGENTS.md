# AGENTS.md — TFC (Temp File Cleaner) by OldTimer Mirror & Remediation Guide

This document defines architectural constraints, operational rules, session-onboarding knowledge retrieval, execution guidelines, closed-loop validation, defensive error handling, deterministic anti-hallucination guardrails, and Git versioning protocols for automated agents working on this codebase.

---

## 1. Project Identity & Tech Stack

- **Project Name**: TFC (Temp File Cleaner) by OldTimer Mirror & Remediation Guide — `https://tfc-old-timer.tcp123.com`.
- **Niche**: Legacy Windows temp file remediation, disk cleanup utility archive, and modern OS native cleanup guide.
- **Tech Stack**: Static HTML5, Tailwind CSS, Vanilla JavaScript, Cloudflare Pages static edge (zero server-side runtime).
- **No heavy third-party UI libraries** (e.g. Radix, Shadcn, Material UI, React, Vue) unless already present in the dependency manifest.
- **Language & Conventions**: Strict British English for all UI strings, metadata, logs, comments, documentation, and agent output (e.g., optimise, realise, centre, organisation, behaviour, analyse, prioritise, licence).

---

## 2. Directory Layout & Module Invariants

- **Module Invariants**: 
  - `github-projects/` is strictly **READ-ONLY** (contains upstream binary archives and reference sources). Never edit or commit bloat into this folder.
  - `main/` is the **SOLE DEPLOYABLE ROOT** for Cloudflare Pages. All production code, assets, scripts, security headers (`_headers`), `robots.txt`, and `sitemap.xml` reside exclusively here.
  - `docs/` houses technical specifications, architectural documentation, and the GitHub Pages documentation mirror (`.nojekyll`).
  - **No floating root production files** and zero server-side dependencies or dynamic backends.

- **Directory Tree**:
```text
.
├── .nojekyll                 <-- Prevents GitHub Pages Jekyll processing
├── AGENTS.md                 <-- Agent operational directives & governance
├── README.md                 <-- GitHub repository presentation overview
├── github-projects/          <-- Local reference sources, zip archives & upstream binary (READ-ONLY)
│   ├── Landing-Page-master.zip
│   ├── astro-astro-7.2.2.tar.gz
│   └── TFC.exe
├── docs/                     <-- Architectural specs, documentation & GitHub Pages source
│   ├── .nojekyll
│   ├── index.html
│   ├── TASKS.md              <-- Central task register (P0-P3, model, skill)
│   └── github/
│       ├── .nojekyll
│       └── index.html
└── main/                     <-- DEPLOYABLE PRODUCTION ROOT (Cloudflare Pages build root)
    ├── index.html            <-- Main production landing page
    ├── _headers              <-- Cloudflare Pages security & caching headers
    ├── robots.txt            <-- Search crawler directives
    └── sitemap.xml           <-- XML sitemap for SEO indexing
```

---

## 3. Core Engine & Domain Specifications

- **Legacy Binary Assets & Verified Integrity Hashes**:
  - **Primary Binary Asset:** `https://github.com/markkirby125/tfc-old-timer/releases/latest/download/TFC.exe`
  - **Fallback Release Mirror:** `https://github.com/markkirby125/tfc-old-timer/releases`
  - **Verified MD5 Hash:** `788fcddd88240a85039f7f561093b118`
  - **Verified SHA-256 Hash:** `c6592c2061c39ea8ed94d1f6854e16a722dc461f4d5b907b0230452d07d4cce3`

- **Operating System Compatibility Boundary**:
  - **Supported (Target Audience):** Windows XP, Windows Vista, Windows 7, Windows 8, Windows 8.1.
  - **Incompatible (Strict User Warning):** Windows 10, Windows 11. (Terminating `explorer.exe` risks breaking the modern UWP shell, Start menu, taskbar, and notification tray).
  - **Deterministic Win 10/11 Remediation Guidance:** Explicitly recommend native Windows tools: Storage Sense (`Settings > System > Storage`), Disk Cleanup (`cleanmgr.exe`), DISM component cleanup, and BleachBit.

- **Primary & Secondary SEO Keywords**:
  - **Primary:** `TFC Old Timer`, `Temp File Cleaner by OldTimer`, `TFC.exe download`
  - **Secondary:** `TFC BleepingComputer`, `OldTimer software`, `TFC Windows 7`, `TFC Windows XP`, `clean temp files OldTimer`, `portable disk cleanup`

- **Conversion & Download Trigger Rules**:
  - Primary CTA directs users to the GitHub release direct download link.
  - Prominent OS compatibility warning callouts must intercept modern Windows users before download.
  - Checksum copy buttons must provide instant clipboard copying of MD5 and SHA-256 hashes with user feedback.

---

## 4. Task Execution Protocol & Sequential Workflow

Register-only work (add / update / list `docs/TASKS.md` rows) uses Section 5.I only — skip Stages 2–6. Implementation work follows all six stages.

### Stage 1: Requirement Investigation & Skill Discovery
- Load the project knowledge base (`docs/index.html` and `README.md`) per Section 6 before inspecting anything else.
- Thoroughly inspect relevant files, imported modules, and dependencies using bounded line inspection.
- **Add / list `docs/TASKS.md`:** follow Section 5.I (add or list). Stop after Stage 1.
- **Execute a `docs/TASKS.md` row:** the skill is that row's skill. Do not re-select. Continue at Stage 2.
- **Any other task:** select the skill (or pipeline) per Section 5.A.
- Run Section 5.C only for new features, or when the user asks for enhancements.
- Formulate a structured analysis, proposed execution roadmap, and explicit skill recommendation.

### Stage 2: Explicit Skill Approval & Alignment Gate
- **Mandatory User Approval Gate**: Present the skill; wait for explicit confirmation before invoking it or making substantive/destructive changes.
- If a `docs/TASKS.md` row exists, the recommended skill **is** that row's skill (Section 5.I).
- Present the skill proposal using the standard approval prompt:
  ```markdown
  **Task / Batch**: <Summary of task or phase breakdown>
  **Recommended Skill**: `<skill_name>` (or pipeline table for batched tasks)
  **Rationale**: <Why this is the best installed skill for the task>
  **Confirmation Request**: Prompt user for explicit approval to invoke the skill, request an alternative, or proceed directly.
  ```
- After approval, load that skill and follow it. Alternative skill or native execution: respect the user; if a TASKS row exists, write the new skill (or `native`) onto the row first (Section 5.I step 3).
- For structured feature development, produce an atomic, checklist-driven plan in `docs/superpowers/plans/` (or `docs/TASKS.md`).

### Stage 3: Modular Code Implementation
- Write clean, semantic, accessible HTML5 and Tailwind CSS strictly aligned with the architectural constraints in Section 2.
- Adhere to DRY and YAGNI principles; maintain pure static execution without introducing ghost-dependencies.
- Maintain dark cybersecurity aesthetic (slate/navy tones, brand blue accents, emerald status indicators).

### Stage 4: Verification Pipeline & Closed Repair Loop
- Run local validation checks (HTML syntax, JSON-LD schema validity, local anchor integrity, accessible contrast ratios).
- If errors occur, feed the raw `stderr` into an immediate closed repair loop. After 3 consecutive failures, halt and request user intervention to prevent infinite loops.

### Stage 5: Cloudflare Pages Deployment & Live Verification
- Execute deployment using:
  ```bash
  npx wrangler pages deploy ./main --project-name tfc-old-timer --branch main
  ```
- Verify live health, headers, and functionality directly at `https://tfc-old-timer.tcp123.com` or `https://tfc-old-timer.pages.dev`.

### Stage 6: Post-Deployment Local Git Versioning
- Immediately following every successful deployment, stage and commit all local changes to maintain an unbroken version history:
  ```bash
  git add .
  git commit -m "<type>(<scope>): <short description in imperative present tense>"
  ```
- Confirm the working tree is clean via `git status`.

---

## 5. Skill Discovery, Selection & User Approval Protocol

### A. Dynamic Skill Discovery & Best-Skill Matching

Automated agents must match each incoming task against the optimal installed skill:

| Lifecycle Event / Task Type | Candidate Skill Pattern | Trigger & Capability Mapping |
| --- | --- | --- |
| Feature Ideation & Proposal | `brainstorming` | New features, conversion funnels, or architecture overhauls. |
| Defect / Bug Investigation | `diagnosing-bugs` / `systematic-debugging` | Defect reports, layout breakage, schema validation errors. |
| Architecture & Plan Design | `architect` / `implementation-planner` | Atomic checklists, multi-stage refactoring plans. |
| Multi-Module Parallel Execution | `invoke_subagent` / `teamwork` | Isolated, parallelisable documentation or audit workflows. |
| Sequential Plan Execution | `code-implementer` | Complex landing page refactoring or interactive JS components. |
| Pre-Completion Code Audit | `code-review` / `plan-reviewer` | Static audit, accessibility checks, Schema.org validation. |
| Review Remediation | `ruthless-refactorer` | Resolving audit and review feedback cleanly. |
| SEO & Performance Audit | `seo` / `seo-page` / `web-perf` | Core Web Vitals, JSON-LD schema, metadata, crawlability. |
| Edge / Cloudflare Deployment | `cloudflare` / `wrangler` | Cloudflare Pages deployment, headers, DNS routing. |
| New / updated `docs/TASKS.md` item | Section 5.I | Add path: match skill, set P0–P3 and `flash` / `pro`. Execute path: load the row skill after approval. |

### B. Mandatory Skill Approval Protocol

1. **Skill Discovery**: Scan all installed skills for relevant domain and process capabilities.
2. **Best-Skill Selection**: Select the single most capable skill (or an ordered pipeline for batched tasks).
3. **Prompt for Approval**: Before calling the skill tool or executing changes, present the recommendation to the user:
   - **For Single Tasks**:
     > **Skill Approval Request**
     > - **Task**: `<Clear task summary>`
     > - **Recommended Skill**: `<skill_name>`
     > - **Rationale**: `<Why this installed skill is best suited>`
     > 
     > *Do you approve using `<skill_name>` for this task, would you prefer an alternative, or should we proceed directly?*
4. **User Decision Handling**:
   - **Approved**: Announce `Using [skill] to [purpose]`, then load the skill and follow it.
   - **Partial Approval (Batched)**: Re-plan the pipeline integrating the user's modifications before executing the approved phases.
   - **Alternative Requested**: If a `docs/TASKS.md` row exists, write the requested skill onto that row, then load it.
   - **Declined (Execute Natively)**: If a TASKS row exists, set skill to `native`. Proceed with Section 5.D without loading a skill.
   - **Declined (Abort Task)**: Halt immediately.
5. **Undiscovered Skills**: If no relevant skill is found, state that and propose `native` execution.

### C. Brainstorming & Creative Enhancements

Use this subsection only for new features, or when the user asks for enhancements — not on bugfixes, TASKS register work, or execute-an-existing-row.

1. **Listen & Deconstruct** — identify the core requirement, constraints, and UX expectations.
2. **Skill Approval & Invocation** — recommend a brainstorming skill, obtain user approval, then conceptualise 2–4 high-value enhancements across the 4 core strategic pillars (SEO, AI SEO/GEO, CTR & Conversion UX, Contextual Accessibility).
3. **Present Interactive Choices** — confirm selections before executing plans.

### D. Clean & Efficient Engineering Standards

1. **DRY & YAGNI** — keep styling and scripts lean; avoid unnecessary abstraction.
2. **Strict semantic HTML5** — use semantic tags (`<header>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`).
3. **Explicit leak prevention** — clean up event listeners and clipboard timer callbacks.
4. **Lightweight native visualisations** — pure CSS / inline SVG icons; zero heavy icon libraries.
5. **Mobile-first responsiveness** — touch targets ≥ 44×44px; responsive grid layouts.
6. **Accessible contrast & readability** — ensure WCAG AAA contrast for text on dark backgrounds.

### E. Token Efficiency Directives

1. **Bounded file inspection** — read precise line ranges, not whole files.
2. **Signature-first inspection** — read headings, schemas, and script functions before entire documents.
3. **Dense communication** — concise, technically dense summaries without conversational boilerplate.
4. **Plan offloading** — store detailed proposals and tracking in `docs/TASKS.md`.

### F. Core Strategic Principles (SEO, GEO, CTR, Mobile, Integrity)

1. **Traditional SEO** — semantic HTML5, complete Schema.org JSON-LD microdata (`SoftwareApplication`, `FAQPage`), sub-50ms INP, 0 CLS, Open Graph and Twitter Card metadata.
2. **AI SEO / GEO** — authoritative definitions, explicit checksum anchors, tabular comparison specs, 40–60 word lead-in answers.
3. **CTR & Conversion** — prominent single-click download CTAs, instant hash copy buttons, and visual OS compatibility badges.
4. **Integrity Preservation** — accurate archival history, attribution to OldTimer, and verified checksum fidelity.

### G. Up-to-Date Live Data Verification & Grounding

1. Never guess external data (checksums, file sizes, URLs) from memory.
2. Ground via local file verification (`github-projects/TFC.exe`) or web search before writing code.
3. If unverified or contradictory, pause and consult the user.

### H. Bug & Task Tracking (`docs/TASKS.md`)

Behaviour lives in Section 5.I. Closed items move to Closed Tasks with dates.

### I. Task Register Protocol (`docs/TASKS.md`)

Source of truth for each task's skill, priority, and model.

Every open row MUST carry five fields: **priority**, **name**, **summary**, **model**, **skill**. Optional sixth: **support** (secondary skill).

**Model:** `flash` = fetch / patch / implement. `pro` = judgement / legal / architecture.

**Row shape:**
```markdown
- [ ] **P1 — Short name** — pro · `skill-name`. One-line summary.
```

**When:**
- **Add / update a row** — steps 1–2 only. Skip Stages 2–6.
- **List open tasks** — step 4 only.
- **Execute a row** — step 3, then Stages 3–6 if the work is implementation.

1. **Add** — Match one primary installed skill. Set P0–P3. Set model. Write all five fields. No match → skill `native` and say so. Optional support skill after the primary.
2. **On every add** — Sweep open rows. Fill *missing* skill / priority / model only. Leave rows that already have a skill unless the user asks to re-match.
3. **Execute** — Present the row's skill and model for Section 5.B approval. After yes: announce `Using [skill] to [purpose]`, load that skill, follow it. If the user names a different skill, write it onto the row, then load. If skill is `native`, skip load.
4. **List open** — In the final reply of a session, and whenever the user asks to list tasks, present:

   | Priority | Name | Summary | Model | Skill |

---

## 6. Session Onboarding & Progressive Knowledge Loading

At the start of every session, ground yourself in project knowledge before executing any task:

1. **Load the knowledge index** — read `README.md` and `docs/index.html`.
2. **Progressive disclosure** — retrieve individual reference files (`docs/*`, `github-projects/*`) only as the current task demands; grep by keyword before reading whole files.
3. **Completion criterion** — onboarding is complete when you can state the project's niche, tech stack, and directory layout grounded in the loaded knowledge index rather than assumption; then proceed to the Section 4 protocol.
4. **Regeneration** — when architectural or domain specifications change meaningfully, update `docs/index.html` and `README.md`.
5. **Escalation boundary** — this workspace uses file-based retrieval (Tier 0).

---

## 7. Defensive Error Handling & Fault Tolerance

1. **DOM & Event Isolation** — null-check all DOM element selections (`document.getElementById`, `querySelector`) before binding event listeners.
2. **Clipboard API Resilience** — wrap `navigator.clipboard.writeText` calls in `try...catch` blocks with fallback textarea copy mechanisms for legacy or restricted browser contexts.
3. **Graceful UI Feedback** — display temporary visual state feedback (e.g., "Copied!", icon tick) with bounded `setTimeout` cleanup to prevent memory leaks.
4. **Zero Script Blocking** — ensure all scripts run deferred or inline at the end of `<body>` to prevent render blocking and preserve Core Web Vitals.

---

## 8. Git Cleanliness & Conventional Commit Directives

1. **Mandatory Post-Live Commit**: Immediately after every batch of changes is verified and deployed, agents must commit all modifications locally to keep Git history unbroken.
2. **Standard Post-Live Git Commands**:
   ```bash
   git add .
   git commit -m "<type>(<scope>): <short description in imperative present tense>"
   git status
   ```
3. **Ignored Artifacts & `.gitignore` Governance**:
   - Never stage Cloudflare edge emulation cache (`.wrangler/`), IDE/editor configurations (`.cursor/`, `.vscode/`, `*.swp`), or runtime transients (`node_modules/`, `*.log`, `.DS_Store`, `Thumbs.db`).
   - Ensure `.gitignore` is properly configured at repository initialisation and remains respected.
4. **Conventional Commits**: Format commit messages strictly in the imperative present tense:
   ```text
   <type>(<scope>): <short description in imperative present tense>
   ```
   - Standard types: `feat`, `fix`, `chore`, `docs`, `style`, `refactor`, `perf`, `test`.

---

## 9. Anti-Hallucination & Architecture Invariants

### A. Anti-Hallucination & Code Grounding

1. **Read-before-write** — never modify or create a file from memory; inspect target files and reference structures first.
2. **Zero ghost-dependencies** — never import external scripts, CDNs, or npm packages absent from architectural specifications.
3. **Deterministic negative fallbacks** — fallback cleanly to native browser APIs.
4. **Mathematical determinism** — never invent hashes or file sizes; strictly mirror the exact checksums in Section 3.
5. **Vendor immutability** — never edit or pollute the `github-projects/` directory.
6. **Data anchoring** — reference only configured URLs, GitHub release targets, and verified metadata.
7. **Skill transparency & governance** — Recommend only installed skills. Invoke a skill only after Section 5.B approval. For `docs/TASKS.md` rows, follow Section 5.I (assigned skill or `native`; model is `flash` or `pro` as defined there).

### B. Platform-Specific Invariants

- **Stateless Edge Execution**: The project is 100% client-side static HTML/CSS/JS. Zero backend APIs, Node.js servers, or database connections.
- **Security & Caching Headers**: All Cloudflare Pages security headers (CSP, HSTS, X-Content-Type-Options, X-Frame-Options) and asset caching rules must be defined in `main/_headers`.

### C. Whitelisted Network Endpoints & CORS

- `https://github.com/markkirby125/tfc-old-timer/releases/` (Binary download & release tags)
- `https://tfc-old-timer.tcp123.com` (Production domain)
- `https://tfc-old-timer.pages.dev` (Cloudflare Pages edge domain)
- `https://markkirby125.github.io/tfc-old-timer/` (GitHub Pages mirror)
- `https://cdn.tailwindcss.com` (Tailwind CDN / standalone build assets)

---

## 10. Build, Verification & Closed Repair Pipeline

Before deploying, execute this exact sequential pipeline; on any failure, feed the raw `stderr` into a closed repair loop (maximum 3 retries) until all gates pass:

1. **Local Integrity & Syntax Check**:
   - Verify HTML semantic validity and check that all anchor links and download URLs resolve correctly.
2. **JSON-LD Schema Verification**:
   - Validate `SoftwareApplication` and `FAQPage` schema objects in `main/index.html`.
3. **Accessibility & Contrast Verification**:
   - Confirm WCAG AAA contrast ratios across dark slate/navy theme tokens and emerald status badges.
4. **Deploy to Cloudflare Pages**:
   ```bash
   npx wrangler pages deploy ./main --project-name tfc-old-timer --branch main
   ```
5. **Post-Deployment Live Verification**:
   - Inspect HTTP response headers and live DOM rendering at `https://tfc-old-timer.tcp123.com` or `https://tfc-old-timer.pages.dev`.
6. **Git Versioning & Clean Status Check**:
   ```bash
   git add .
   git commit -m "<type>(<scope>): <short description in imperative present tense>"
   git status
   ```
