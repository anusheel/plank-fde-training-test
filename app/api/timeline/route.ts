import { timeline, type Incident } from "@/lib/timeline";
export async function POST(request: Request) {
  return Response.json(timeline((await request.json()) as Incident[]));
}
