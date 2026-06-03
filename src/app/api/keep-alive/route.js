import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

function getSupabase() {
  const url = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_KEY;
  if (!url || !serviceKey) {
    throw new Error("Missing SUPABASE_URL or SUPABASE_SERVICE_KEY");
  }
  return createClient(url, serviceKey);
}

export async function GET(req) {
  // Protect the endpoint — Vercel cron sends this header automatically,
  // but we also support a manual secret for local testing.
  const authHeader = req.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;

  if (
    cronSecret &&
    authHeader !== `Bearer ${cronSecret}`
  ) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const supabase = getSupabase();
    const { error } = await supabase.from("keep_alive").insert({
      message: "Supabase keep-alive ping — preventing free-plan pause",
    });

    if (error) throw error;

    return NextResponse.json(
      { success: true, pinged_at: new Date().toISOString() },
      { status: 200 }
    );
  } catch (err) {
    console.error("[keep-alive] failed:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
