export const FIRST_VISIT_KEY = "wockytech-first-visit-done";

export function hasCompletedFirstVisit(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(FIRST_VISIT_KEY) === "true";
}

export function markFirstVisitComplete(): void {
  localStorage.setItem(FIRST_VISIT_KEY, "true");
}
