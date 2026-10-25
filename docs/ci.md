# The CI gate

Every pull request runs typecheck, lint and build before it can merge. The
workflow is intentionally not committed in this simulated repository (it would
run, and fail, on every push of test data); in the real project it lives at
.github/workflows/ci.yml with setup-node, npm ci and the three scripts.
