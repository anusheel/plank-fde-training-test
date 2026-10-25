import { nextReminder } from "@/lib/reminders";
export async function POST(request: Request) {
  const { schedule } = (await request.json()) as { schedule: string };
  return Response.json({ next: nextReminder(schedule).toISOString() });
}
