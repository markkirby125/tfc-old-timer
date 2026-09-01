# AGENTS.md — TFC by OldTimer

This document defines architectural constraints, operational rules, and behavioural guardrails for automated agents working on this codebase.

> **Knowledge Map**: Reference data is offloaded to the knowledge graph and canonical files. Read pointers dynamically when required.
> | Domain | Retrieval Path | Fallback |
> | --- | --- | --- |
> | **Architecture & Stack** | `get_architecture()` / `search_graph()` | `docs/reference/project-stack.md` |
> | **Hashes, OS Specs, SEO** | `manage_adr(mode='get')` | `docs/reference/domain-specs.md` |
> | **Endpoints & Security** | `manage_adr(mode='get')` | `docs/reference/endpoints-security.md` |
> | **Module Invariants & Tree** | `get_architecture()` | `docs/reference/directory-layout.md` |
> | **Tasks Register** | Read verbatim | `docs/TASKS.md` |

---

## 1. Task Execution Protocol & Sequential Workflow

Register-only work uses Section 2 only. Implementation work strictly follows these six stages:

1. **Investigation**: Probe requirements. Validate graph/ADR context. Add/list `docs/TASKS.md` row.
2. **Explicit Skill Approval**: Present the best-matched skill and await user confirmation.
   > **Skill Approval Request**: "Task: <summary>. Recommended Skill: <skill_name>. Rationale: <why>. Do you approve?"
3. **Modular Code Implementation**: Follow semantic HTML5/Tailwind rules and zero ghost-dependency mandates.
4. **Verification Pipeline**: Validate syntax, JSON-LD schema, contrast ratios. Halt and escalate after 3 failed repair loops.
5. **Deployment**: `npx wrangler pages deploy ./main --project-name tfc-old-timer --branch main`
6. **Git Versioning**: `git add . && git commit -m "<type>(<scope>): <desc>" && git status`.

---

## 2. Skill Discovery & Task Register (Behavioural)

1. **Match**: Scan installed skills. Select the optimal pattern (`brainstorming`, `diagnosing-bugs`, `code-implementer`, `seo-page`, `wrangler`, etc.).
2. **Prompt**: Request user approval per Stage 2 before invoking.
3. **Task Register**: All task assignments live in `docs/TASKS.md` using five exact fields (priority, name, summary, model, skill).
4. **Execution**: On approval, announce `Using [skill] to [purpose]`, load, and execute.

---

## 3. Engineering & Token Directives

- **Clean Execution**: Strict HTML5, pure CSS/native SVG icons, zero heavy UI frameworks.
- **Defensive Flow**: Null-check DOM, wrap clipboard in `try...catch`, clean up timers.
- **Token Efficiency**: Bounded file inspection, signature-first reading, dense communication. Offload complex tracking to `docs/TASKS.md`.

---

## 4. Live Data Grounding & Invariants

- **Read-before-write**: Never invent variables from memory; inspect graph/ADR first.
- **Mathematical Determinism**: Fetch exact MD5/SHA-256 hashes from `manage_adr()` or `docs/reference/domain-specs.md`.
- **Vendor Immutability**: `github-projects/` is strictly READ-ONLY.
- **Stateless Edge**: Pure static Cloudflare deployment natively located in `main/`. Zero backend API logic.

---

## 5. Git Commit Governance

- **Mandatory Post-Live**: Commit immediately after verification and deployment.
- **Format**: Imperative Conventional Commits (e.g., `feat(engine): ...`, `fix(ui): ...`, `docs(agents): ...`).
- **Cleanliness**: Respect `.gitignore`. Never commit `.wrangler/`, `node_modules/`, or transient logs.
