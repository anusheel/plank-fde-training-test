import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const HOST = process.env.POSTHOG_HOST ?? "https://us.posthog.com";
const headers = { Authorization: `Bearer ${process.env.POSTHOG_API_KEY}`, "Content-Type": "application/json" };
const server = new McpServer({ name: "workbot-posthog", version: "0.1.0" });

server.tool("events", "Recent events by name", { event: z.string(), limit: z.number().max(200).default(50) }, async ({ event, limit }) => {
  const res = await fetch(`${HOST}/api/projects/${process.env.POSTHOG_PROJECT}/events?event=${encodeURIComponent(event)}&limit=${limit}`, { headers });
  return { content: [{ type: "text", text: await res.text() }] };
});

server.tool("funnel", "Conversion between two events in the last 7 days", { from: z.string(), to: z.string() }, async ({ from, to }) => {
  const res = await fetch(`${HOST}/api/projects/${process.env.POSTHOG_PROJECT}/insights/funnel`, { method: "POST", headers, body: JSON.stringify({ events: [{ id: from }, { id: to }], date_from: "-7d" }) });
  return { content: [{ type: "text", text: await res.text() }] };
});

await server.connect(new StdioServerTransport());
