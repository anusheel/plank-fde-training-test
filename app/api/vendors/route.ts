import { normalizeVendor, type Vendor } from "@/lib/vendors";
export async function POST(request: Request) {
  const list = (await request.json()) as Vendor[];
  return Response.json(list.map(normalizeVendor));
}
