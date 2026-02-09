import { NextResponse } from "next/server";

export async function POST() {
  console.log("✅ Admin login API called"); 
  const response = NextResponse.json({ success: true });

  response.cookies.set("admin-auth", "peaceland_admin_secret", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // ✅ FIX
    sameSite: "lax",
    path: "/",
  });

  return response;
}
