import { NextResponse } from "next/server";

// TEMPORARY: confirms the runtime picked up the Oct 2026 Node.js security
// release (expect v24.22.1+). Remove once verified in production.
export const dynamic = "force-dynamic";

export function GET() {
  return NextResponse.json(
    { node: process.version, openssl: process.versions.openssl },
    { headers: { "Cache-Control": "no-store" } },
  );
}
