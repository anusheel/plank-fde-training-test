# Day 5: two MCP servers, used from Claude Code

`workbot-db` answers "what tables do we have" and runs read-only SELECTs; `workbot-posthog` pulls events and funnels. Both registered in .mcp.json, both used in the same session to build the requests feature: the schema tool shaped the migration, the funnel tool showed where intake drops off.
