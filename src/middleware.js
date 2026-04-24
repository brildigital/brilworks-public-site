import { NextResponse } from "next/server";

function shouldBlockCrawling(host) {
  const h = (host || "").toLowerCase();
  if (!h) return true;
  if (h.startsWith("dev.")) return true;
  if (h.endsWith(".vercel.app")) return true;
  if (h.startsWith("localhost") || h.startsWith("127.")) return true;
  return false;
}

export function middleware(request) {
  const response = NextResponse.next();
  if (shouldBlockCrawling(request.headers.get("host"))) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }
  return response;
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};
