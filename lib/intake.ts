export type Intake = { name: string; requests: string[]; approvers: string[] };

const ALLOWED = new Set(["name", "requests", "approvers"]);

export function parseIntake(input: unknown): Intake {
  if (typeof input !== "object" || input === null) throw new Error("Intake must be an object");
  for (const key of Object.keys(input)) if (!ALLOWED.has(key)) throw new Error(`Unknown field: ${key}`);
  const { name, requests, approvers } = input as Record<string, unknown>;
  if (typeof name !== "string" || !name.trim()) throw new Error("name is required");
  const list = (v: unknown, field: string) => {
    if (!Array.isArray(v) || v.some((x) => typeof x !== "string")) throw new Error(`${field} must be a list of strings`);
    return [...new Set(v.map((x) => x.trim().toLowerCase()).filter(Boolean))];
  };
  return { name: name.trim(), requests: list(requests ?? [], "requests"), approvers: list(approvers ?? [], "approvers") };
}
