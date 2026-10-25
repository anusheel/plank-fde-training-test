const started = Date.now();
export async function GET() {
  return Response.json({ ok: true, version: process.env.VERCEL_GIT_COMMIT_SHA ?? "dev", uptimeSeconds: Math.round((Date.now() - started) / 1000) });
}
