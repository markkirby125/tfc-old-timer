# Theme Implementation Tasks

## 1. Refactor Color Palette & Theme Tokens
* **Details:** Refactor the current hardcoded Tailwind colors into semantic CSS variables (e.g., `bg-primary`, `text-accent`). Define the current slate/brand-blue palette as the "Moderna" theme with both Light and Dark mode variables.
* **Assigned Skills:** `better-colors`

## 2. Design the "Oldtimer" Theme
* **Details:** Create a second set of CSS variables that mimic the classic Windows UI / TFC application aesthetic. This will include retro grays, classic system blues, inset border styles, and system fonts (`Tahoma`, `Segoe UI`), mapped cleanly into both a Light variant and a high-contrast retro Dark variant.
* **Assigned Skills:** `better-colors`, `better-ui`

## 3. Implement Theme Switcher UI & Logic
* **Details:** Inject a beautifully polished Theme Switcher dropdown into the desktop and mobile navigation bars. It will allow users to toggle between **Moderna (Light/Dark)** and **Oldtimer (Light/Dark)**. The logic will persist the user's choice in `localStorage` and include a smooth theme-switch transition.
* **Assigned Skills:** `better-ui`, `emil-design-eng`

# GitHub Repository Optimization (Grok Report v2)

## 4. GitHub Metadata & Configuration Setup
* **Details:** Update the repository "About" section, inject SEO topics (`tfc`, `windows-7`, `malware-cleanup`), generate and upload a dark-mode terminal social preview image, enable Discussions, and create strict Issue templates.
* **Assigned Skills:** `gh`, `seo-image-gen`
* **Model:** Flash | **Effort:** Low

## 5. README.md Complete Revamp
* **Details:** Add download badge, "Not this TFC" disambiguation box, screenshot/log, PowerShell snippet, and retro ASCII banner. Create a `NOT-SOURCE/` directory.
* **Assigned Skills:** `better-writing`, `seo-content`
* **Model:** Pro | **Effort:** Medium

## 6. Trust & Verification Pack
* **Details:** Create `/hashes` directory (`TFC.exe.md5`, `.sha256`, `.sha1`). Write `VERIFICATION.md` and a brutally honest `SECURITY.md`.
* **Assigned Skills:** `caveman-commit`, `token-efficiency`
* **Model:** Flash | **Effort:** Low

## 7. Ecosystem & Documentation Expansion
* **Details:** Create `SUITE.md`, `COMPAT.md` (matrix), `BEFORE-AFTER.md` (lab notes), and `CITATION.cff`.
* **Assigned Skills:** `architect`, `write-content`
* **Model:** Pro | **Effort:** Medium

## 8. Release Asset Restructuring
* **Details:** Rename attached assets (`TFC-3.1.9.0-OldTimer.exe`, `TFC-3.1.9.0-SHA256.txt`, `TFC-3.1.9.0.VirusTotal.txt`). Write a definitive release body.
* **Assigned Skills:** `gh`
* **Model:** Flash | **Effort:** Low
