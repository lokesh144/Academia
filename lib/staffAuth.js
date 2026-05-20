export const STAFF_ABSENT_COOKIE = "staff-absent-auth";
export const STAFF_ABSENT_SESSION_VALUE = "staff_absent_authenticated";

export function isStaffAbsentAuthenticated(cookieValue) {
  return cookieValue === STAFF_ABSENT_SESSION_VALUE;
}
