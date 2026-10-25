import { parseIntake } from "@/lib/intake";
export async function POST(request: Request) {
  try {
    return Response.json(parseIntake(await request.json()));
  } catch (err) {
    return Response.json({ error: (err as Error).message }, { status: 400 });
  }
}
