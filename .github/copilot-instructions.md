<!-- .github/copilot-instructions.md - guidance for AI coding agents on this repo -->
# Copilot instructions for contributors and AI agents

Purpose: help an AI coding agent be immediately productive in this Vite + React + TypeScript project.

1) Big picture
- This is a Vite + React + TypeScript single-page app (see `package.json` + `vite.config.ts`).
- App entry: `src/main.tsx` mounts `<App />` into the HTML root. Routing is defined in `src/App.tsx` using `react-router-dom`.
- UI primitives live under `src/components/ui/*` (shadcn-style components and Radix wrappers). Page content components are grouped under `src/components/sections/` and pages under `src/pages/`.
- Data/async flow: `@tanstack/react-query` is used globally via a single `QueryClient` in `src/App.tsx`.

2) Where to make changes (concrete examples)
- Add a new page: create `src/pages/MyPage.tsx` and add a route in `src/App.tsx`:
  - Example: add `<Route path="/my-page" element={<MyPage/>} />` above the `*` catch-all.
- Add a UI primitive: put small reusable controls in `src/components/ui/` (example: `button.tsx`, `input.tsx`).
- Add content sections used by pages: `src/components/sections/` (there are many ready examples to copy/extend).

3) Important conventions and patterns
- Import alias: `@` resolves to `./src` (see `vite.config.ts`). Prefer `@/...` imports for project files.
- File types: TSX components (.tsx) and TypeScript config files. Keep components typed; follow local naming (PascalCase components, kebab or camel file names used in this repo).
- Routing: All custom routes must be placed above the catch-all `Route path="*"` in `src/App.tsx` (there is a helpful comment in that file).
- UI primitives follow shadcn-ui + Radix usage (look at `src/components/ui/*` for patterns like `tooltip`, `toaster`, `dialog`). Copy structure and props patterns from these files.
- State/queries: Use `react-query` for server/async state. The global QueryClient is already provided in `src/App.tsx`.

4) Dev / build / debug workflows (concrete commands)
- Install: `npm i` (this repo has `package-lock.json` -> npm preferred).
- Dev server: `npm run dev` — starts Vite on host `::` and port `8080` (see `vite.config.ts`).
- Build (production): `npm run build`.
- Build for development mode: `npm run build:dev` (this runs vite build with `--mode development`).
- Preview built site: `npm run preview`.
- Lint: `npm run lint` uses ESLint configuration in repo root.

5) Integrations and external deps to be aware of
- `lovable-tagger` plugin is used in `vite.config.ts` in development mode—it injects component tagging when `mode === "development"`.
- UI libs: Radix primitives (many `@radix-ui/*` packages) and `shadcn`-style components live under `src/components/ui`.
- Notifications: the repo has two toaster implementations — `Toaster` and `Sonner` used in `App.tsx`.

6) Patterns to preserve when changing code
- Keep route ordering and the catch-all route. The comment in `src/App.tsx` is authoritative.
- Prefer composition of small UI primitives in `src/components/ui` instead of large page-level components.
- Follow existing structure in `src/components/sections/` when adding sections — they are consistently small, focused components.

7) Files and locations to inspect for examples
- Entry & routes: `src/main.tsx`, `src/App.tsx`.
- Pages: `src/pages/*.tsx` (Index, DietCare, GentlePath, DistanceWithTrust, NotFound).
- UI primitives: `src/components/ui/*`.
- Section components: `src/components/sections/*`.
- Small utilities/hooks: `src/lib/utils.ts`, `src/hooks/*`.
- Build config: `vite.config.ts`, `tailwind.config.ts`, `postcss.config.js`.

8) What NOT to assume
- There are no tests discovered in the repository; do not invent test runners or test GUIs without asking.
- No `.github` agent docs were found when this file was written — if a human later adds one, reconcile and preserve human guidance.

If anything here is unclear or you want extra examples (e.g., a copy-paste template for adding a new page or UI component), tell me which area to expand and I will update this file.
