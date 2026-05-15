/** Display names for class notice targeting (aligned with dashboard NoticeFormDialog). */
export const ORDERED_NOTICE_CLASSES = [
  "Nursery",
  "LKG",
  "UKG",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "For All",
];

export function classDisplayNameToSlug(name) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

const SLUG_TO_DISPLAY = new Map(
  ORDERED_NOTICE_CLASSES.map((n) => [classDisplayNameToSlug(n), n])
);

/** Returns the canonical display class name for a URL slug, or null if unknown. */
export function slugToClassDisplayName(slug) {
  if (!slug || typeof slug !== "string") return null;
  return SLUG_TO_DISPLAY.get(slug.toLowerCase()) ?? null;
}

export function normalizeNoticeClasses(classes) {
  if (!classes) return [];
  if (Array.isArray(classes)) return classes;
  if (typeof classes === "string") {
    try {
      const parsed = JSON.parse(classes);
      if (Array.isArray(parsed)) return parsed;
    } catch {
      return classes.split(",").map((c) => c.trim());
    }
  }
  return [];
}

function classNamesMatch(a, b) {
  return String(a).trim().toLowerCase() === String(b).trim().toLowerCase();
}

/** True only when the notice is explicitly assigned to the selected class (or "For All" when that tile is chosen). */
export function noticeAppliesToClass(noticeClassesField, selectedClassName) {
  const noticeClasses = normalizeNoticeClasses(noticeClassesField);
  return noticeClasses.some((c) => classNamesMatch(c, selectedClassName));
}
