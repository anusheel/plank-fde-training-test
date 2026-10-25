import Anthropic from "@anthropic-ai/sdk";
import type { Turn } from "./index";
const client = new Anthropic();
const PRICE = { input: 4 / 1e6, output: 20 / 1e6 };
export async function* anthropic(system: string, turns: Turn[]) {
  const stream = client.messages.stream({ model: "claude-opus-5-5", max_tokens: 16000, system, messages: turns });
  for await (const event of stream) {
    if (event.type === "content_block_delta" && event.delta.type === "text_delta") yield event.delta.text;
  }
  const final = await stream.finalMessage();
  yield { usage: { input: final.usage.input_tokens, output: final.usage.output_tokens, usd: final.usage.input_tokens * PRICE.input + final.usage.output_tokens * PRICE.output } } as never;
}
