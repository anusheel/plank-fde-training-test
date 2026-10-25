import { parseIntake } from "@/lib/intake";
import { triage } from "@/lib/triage";
export async function POST(request: Request) {
  try {
    return Response.json(triage(parseIntake(await request.json())));
  } catch (err) {
    return Response.json({ error: (err as Error).message }, { status: 400 });
  }
}
