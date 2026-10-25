export type Incident = { at: string; name: string; severity: 1 | 2 | 3 | 4 | 5 };
export function timeline(incidents: Incident[]): Incident[] {
  return [...incidents].sort((a, b) => a.at.localeCompare(b.at));
}
