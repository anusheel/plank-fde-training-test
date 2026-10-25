# WorkBot

Next.js 16, TypeScript, App Router. Read node_modules/next/dist/docs before writing Next code.

## The loop
One Linear ticket per branch. Open a PR early, keep it under 200 lines, let CI run typecheck and lint, merge on green. Target: 10 PRs an hour.

## Conventions
- Server components by default; "use client" only for interaction.
- Personal data never leaves the server unredacted.
- Every endpoint has a test next to it.
