import type { Intake } from "./intake";
export function exportMarkdown(i: Intake): string {
  return [`# ${i.name}`, "", "## Requests", ...i.requests.map((c) => `- ${c}`), "", "## Approvers", ...i.approvers.map((m) => `- ${m}`)].join("\n");
}
