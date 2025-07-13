import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

// Define paths you want to protect
const protectedPaths = ["/", "/home", "/dashboard"]; // Add your protected routes here

export async function middleware(req) {
  // Try to extract the user's session token
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const { pathname } = req.nextUrl;

  console.log("Middleware running for:", pathname);
  console.log("Token:", token);

  // Allow access to:
  // - /login
  // - /register
  // - /api routes
  // - static assets like favicon or _next
  const isPublicPath =
    pathname === "/login" ||
    pathname === "/register" ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname === "/favicon.ico";

  if (isPublicPath) {
    return NextResponse.next(); // allow request to continue
  }

  // If no session token AND trying to access a protected path → redirect to /login
  if (!token && protectedPaths.some((path) => pathname.startsWith(path))) {
    const loginUrl = new URL("/login", req.url);
    return NextResponse.redirect(loginUrl);
  }

  // Otherwise, allow
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!.*\\.).*)"], // Matches all routes except static files
};
