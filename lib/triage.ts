import type { Intake } from "./intake";
const URGENT = ["outage", "payment failed", "security incident", "legal hold"];
const WATCH = ["refund", "contract renewal", "access request", "invoice dispute"];
export function triage(i: Intake): { urgency: "low" | "medium" | "high"; summary: string } {
  const all = [...i.requests, ...i.approvers].join(" ");
  const urgency = URGENT.some((u) => all.includes(u)) ? "high" : WATCH.some((w) => all.includes(w)) ? "medium" : "low";
  const summary = `${i.name} submits ${i.requests.length || "no"} request(s) with ${i.approvers.length || "no"} approver(s). Urgency ${urgency}.`;
  return { urgency, summary };
}
