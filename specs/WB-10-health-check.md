# WB-10 Health check endpoint
Problem: deploys have no liveness signal. Criteria: GET /api/health returns 200 with version and uptime; fails if the database is unreachable.
