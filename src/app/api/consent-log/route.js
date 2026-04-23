import { NextResponse } from "next/server";
import crypto from "crypto";
import prismadb from "../../lib/prismadb";

const ALLOWED_ACTIONS = new Set([
  "accept-all",
  "reject-all",
  "customize",
  "initial",
]);

function hashIp(ip) {
  if (!ip) return null;
  const salt = process.env.CONSENT_IP_SALT || "brilworks-consent-salt";
  return crypto
    .createHash("sha256")
    .update(`${salt}:${ip}`)
    .digest("hex")
    .substring(0, 16);
}

function getClientIp(req) {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return req.headers.get("x-real-ip") || null;
}

export async function POST(req) {
  try {
    const payload = await req.json();
    const {
      consentId,
      necessary,
      analytics,
      marketing,
      version,
      action,
      country,
      region,
      city,
      pageUrl,
    } = payload;

    if (!consentId || typeof consentId !== "string" || consentId.length > 64) {
      return NextResponse.json({ error: "Invalid consentId" }, { status: 400 });
    }
    if (!ALLOWED_ACTIONS.has(action)) {
      return NextResponse.json({ error: "Invalid action" }, { status: 400 });
    }

    await prismadb.consentLog.create({
      data: {
        consentId,
        necessary: Boolean(necessary),
        analytics: Boolean(analytics),
        marketing: Boolean(marketing),
        version: Number(version) || 1,
        action,
        userAgent: req.headers.get("user-agent")?.substring(0, 500) || null,
        ipHash: hashIp(getClientIp(req)),
        country: country?.substring(0, 100) || null,
        region: region?.substring(0, 100) || null,
        city: city?.substring(0, 100) || null,
        pageUrl: pageUrl?.substring(0, 500) || null,
      },
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("Consent log error:", error);
    return NextResponse.json(
      { error: "Failed to log consent" },
      { status: 500 }
    );
  }
}
