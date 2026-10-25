import { summarizeRequests, type RequestItem } from "@/lib/requests";
export async function POST(request: Request) {
  const list = (await request.json()) as RequestItem[];
  return Response.json({ summary: summarizeRequests(list), requests: list });
}
