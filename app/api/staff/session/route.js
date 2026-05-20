import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import {
  STAFF_ABSENT_COOKIE,
  isStaffAbsentAuthenticated,
} from "@/lib/staffAuth";

export async function GET() {
  const cookie = cookies().get(STAFF_ABSENT_COOKIE)?.value;
  return NextResponse.json({
    authenticated: isStaffAbsentAuthenticated(cookie),
  });
}
