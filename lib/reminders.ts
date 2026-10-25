export function nextReminder(schedule: string, now = new Date()): Date {
  const [h, m] = (schedule.match(/(\d{1,2}):(\d{2})/) ?? ["", "9", "00"]).slice(1).map(Number);
  const next = new Date(now); next.setHours(h, m, 0, 0);
  if (next <= now) next.setDate(next.getDate() + 1);
  return next;
}
