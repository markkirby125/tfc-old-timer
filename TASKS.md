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
