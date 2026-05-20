import { ORDERED_NOTICE_CLASSES } from "./noticeClasses";

/** Classes used for absence records (excludes "For All"). */
export const ABSENT_STUDENT_CLASSES = ORDERED_NOTICE_CLASSES.filter(
  (c) => c !== "For All"
);

/** Normalize Nepali (BS) date to YYYY-MM-DD for storage and sorting. */
export function normalizeBsDate(input) {
  const trimmed = String(input ?? "").trim();
  if (!trimmed) return "";
  const parts = trimmed.replace(/\//g, "-").split("-").map((p) => p.trim());
  if (parts.length !== 3) return trimmed;
  const [y, m, d] = parts;
  return `${y.padStart(4, "0")}-${m.padStart(2, "0")}-${d.padStart(2, "0")}`;
}

/** Parse names from textarea (one per line, or comma/semicolon separated). */
export function parseStudentNames(text) {
  return String(text ?? "")
    .split(/[\n,;]+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

export function normalizeStudentNamesField(names) {
  if (!names) return [];
  if (Array.isArray(names)) return names.map((n) => String(n).trim()).filter(Boolean);
  if (typeof names === "string") {
    try {
      const parsed = JSON.parse(names);
      if (Array.isArray(parsed)) return parsed.map((n) => String(n).trim()).filter(Boolean);
    } catch {
      return parseStudentNames(names);
    }
  }
  return [];
}

/** Group rows by BS date; merge names for the same date (newest records first). */
export function groupAbsentRecordsByDate(records) {
  const byDate = new Map();

  for (const row of records) {
    const dateKey = normalizeBsDate(row.date_bs) || row.date_bs;
    const names = normalizeStudentNamesField(row.student_names);
    if (!byDate.has(dateKey)) byDate.set(dateKey, []);
    byDate.get(dateKey).push(...names);
  }

  return [...byDate.entries()]
    .map(([date_bs, names]) => ({
      date_bs,
      student_names: [...new Set(names)],
    }))
    .sort((a, b) => b.date_bs.localeCompare(a.date_bs));
}
