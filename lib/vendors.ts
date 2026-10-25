export type Vendor = { name: string; terms: string; schedule: string };
export function normalizeVendor(v: Vendor): Vendor {
  return { name: v.name.trim().toLowerCase(), terms: v.terms.replace(/\s+/g, ""), schedule: v.schedule.trim() };
}
