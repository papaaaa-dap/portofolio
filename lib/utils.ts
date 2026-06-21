/**
 * utils.ts
 * Helper functions — cn() untuk conditional className merging.
 */

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
