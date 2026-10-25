export type RequestItem = { name: string; since?: string; approved: boolean };
export function summarizeRequests(list: RequestItem[]): string {
  const approved = list.filter((r) => r.approved).length;
  return `${list.length} request(s), ${approved} approved.`;
}
