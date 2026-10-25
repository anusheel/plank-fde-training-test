import readline from "node:readline/promises";
import { provider, type Provider, type Turn } from "../lib/providers";
import { CostTracker } from "../lib/cost";
const cost = new CostTracker();
const name = (process.argv.find((a) => a.startsWith("--provider="))?.split("=")[1] ?? "anthropic") as Provider;
const SYSTEM = "You are WorkBot, an operations assistant for a company's teams. You never act without an approval; you help people run their workflows.";
const turns: Turn[] = [];
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
for (;;) {
  const line = await rl.question("you> ");
  if (!line.trim()) continue;
  turns.push({ role: "user", content: line });
  let reply = "";
  process.stdout.write("workbot> ");
  for await (const piece of provider(name)(SYSTEM, turns)) {
    if (typeof piece === "string") { process.stdout.write(piece); reply += piece; }
    else if (piece && typeof piece === "object" && "usage" in piece) cost.add((piece as { usage: never }).usage);
  }
  process.stdout.write(`\n  [${cost.line()}]\n`);
  turns.push({ role: "assistant", content: reply });
}
