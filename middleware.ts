import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const user = request.cookies.get("user");
  const isAuthPage = request.nextUrl.pathname.startsWith("/auth");
  const isProtectedRoute = ["/profile", "/coins", "/refer"].includes(
    request.nextUrl.pathname
  );

  if (!user && isProtectedRoute) {
    return NextResponse.redirect(new URL("/auth/sign-in", request.url));
  }

  if (user && isAuthPage) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile", "/coins", "/refer", "/auth/:path*"],
};
