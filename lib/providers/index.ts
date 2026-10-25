import { anthropic } from "./anthropic";
import { openai } from "./openai";
export type Provider = "anthropic" | "openai";
export type Turn = { role: "user" | "assistant"; content: string };
export function provider(name: Provider) {
  return name === "openai" ? openai : anthropic;
}
