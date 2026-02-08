import { NextResponse } from "next/server";

export function middleware(request) {
  const adminCookie = request.cookies.get("admin-auth")?.value;

  if (request.nextUrl.pathname.startsWith("/addnotice")) {
    if (adminCookie !== process.env.ADMIN_SECRET) {
      return NextResponse.redirect(
        new URL("/admin/login", request.url)
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/addnotice/:path*"],
};
