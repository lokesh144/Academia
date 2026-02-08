import { cookies } from "next/headers";

export function setAdminSession() {
  cookies().set("admin-auth", process.env.ADMIN_SECRET, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
  });
}

export function isAdminAuthenticated(cookieValue) {
  return cookieValue === process.env.ADMIN_SECRET;
}
