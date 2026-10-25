import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import postgres from "postgres";
import { z } from "zod";

const sql = postgres(process.env.DATABASE_URL!);
const server = new McpServer({ name: "workbot-db", version: "0.1.0" });

server.tool("schema", "List tables and columns", {}, async () => {
  const rows = await sql`select table_name, column_name, data_type from information_schema.columns where table_schema = 'public' order by 1, 2`;
  return { content: [{ type: "text", text: JSON.stringify(rows, null, 2) }] };
});

server.tool("query", "Run a read-only SELECT", { statement: z.string().regex(/^\s*select/i) }, async ({ statement }) => {
  const rows = await sql.unsafe(`${statement} limit 200`);
  return { content: [{ type: "text", text: JSON.stringify(rows, null, 2) }] };
});

await server.connect(new StdioServerTransport());
