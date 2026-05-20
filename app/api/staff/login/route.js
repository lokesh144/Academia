import { NextResponse } from "next/server";
import {
  STAFF_ABSENT_COOKIE,
  STAFF_ABSENT_SESSION_VALUE,
} from "@/lib/staffAuth";

const STAFF_USERNAME = "staff";
const STAFF_PASSWORD = "staff321";

export async function POST(request) {
  try {
    const body = await request.json();
    const username = String(body?.username ?? "").trim();
    const password = String(body?.password ?? "");

    if (username !== STAFF_USERNAME || password !== STAFF_PASSWORD) {
      return NextResponse.json(
        { success: false, message: "Invalid username or password." },
        { status: 401 }
      );
    }

    const response = NextResponse.json({ success: true });
    response.cookies.set(STAFF_ABSENT_COOKIE, STAFF_ABSENT_SESSION_VALUE, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    });

    return response;
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request." },
      { status: 400 }
    );
  }
}
