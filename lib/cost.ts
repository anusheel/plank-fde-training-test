export type Usage = { input: number; output: number; usd: number };
export class CostTracker {
  private turns: Usage[] = [];
  add(u: Usage) { this.turns.push(u); }
  get total(): Usage { return this.turns.reduce((a, b) => ({ input: a.input + b.input, output: a.output + b.output, usd: a.usd + b.usd }), { input: 0, output: 0, usd: 0 }); }
  line(): string { const t = this.total; return `${t.input + t.output} tokens, $${t.usd.toFixed(4)} this session`; }
}
