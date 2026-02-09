import { cookies } from "next/headers";

export function setAdminSession() {
  cookies().set("admin-auth", "peaceland_admin_secret", {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
  });
}

export function isAdminAuthenticated(cookieValue) {
  return cookieValue === "peaceland_admin_secret";
}
