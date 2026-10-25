import { parseIntake } from "@/lib/intake";
import { exportMarkdown } from "@/lib/export";
export async function POST(request: Request) {
  const md = exportMarkdown(parseIntake(await request.json()));
  return new Response(md, { headers: { "Content-Type": "text/markdown" } });
}
