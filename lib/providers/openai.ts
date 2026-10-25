import OpenAI from "openai";
import type { Turn } from "./index";
const client = new OpenAI();
const PRICE = { input: 2.5 / 1e6, output: 10 / 1e6 };
export async function* openai(system: string, turns: Turn[]) {
  const stream = await client.chat.completions.create({ model: "gpt-5", stream: true, stream_options: { include_usage: true }, messages: [{ role: "system", content: system }, ...turns] });
  let usage = { input: 0, output: 0 };
  for await (const chunk of stream) {
    const text = chunk.choices[0]?.delta?.content;
    if (text) yield text;
    if (chunk.usage) usage = { input: chunk.usage.prompt_tokens, output: chunk.usage.completion_tokens };
  }
  yield { usage: { ...usage, usd: usage.input * PRICE.input + usage.output * PRICE.output } } as never;
}
