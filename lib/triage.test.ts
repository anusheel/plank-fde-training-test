import { triage } from "./triage";
import { test, expect } from "vitest";
test("urgent keyword wins", () => {
  expect(triage({ name: "A", requests: ["outage"], approvers: [] }).urgency).toBe("high");
});
test("deterministic", () => {
  const i = { name: "B", requests: ["refund"], approvers: ["finance lead"] };
  expect(triage(i)).toEqual(triage(i));
});
