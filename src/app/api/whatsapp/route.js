import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const mode = searchParams.get("hub.mode");
    const challenge = searchParams.get("hub.challenge");
    const verifyToken = searchParams.get("hub.verify_token");

    // Optional: verify the token before responding
    if (verifyToken !== "brilworks") {
      return new NextResponse("Invalid verify token", { status: 403 });
    }

    // Return the challenge if mode is subscribe and token is valid
    if (mode === "subscribe" && challenge) {
      return new NextResponse(challenge, {
        status: 200,
        headers: {
          "Content-Type": "text/plain",
        },
      });
    }

    return new NextResponse("Invalid request", { status: 400 });
  } catch (error) {
    console.error("Error:", error);
    return new NextResponse("Server error", { status: 500 });
  }
}

// Handle POST webhook and forward to Supabase/Bolt backend
export async function POST(request) {
  try {
    const body = await request.json();
    console.log("Incoming WhatsApp message:", JSON.stringify(body, null, 2));

    // Forward the webhook data to Bolt/Supabase function
    const response = await fetch(
      "https://jhckqsdepgmrsmwwuour.supabase.co/functions/v1/whatsapp-api",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );

    if (!response.ok) {
      console.error("Error from Bolt:", await response.text());
      return new NextResponse("Failed to forward to Bolt", { status: 500 });
    }

    return new NextResponse("Forwarded to Bolt successfully", { status: 200 });
  } catch (error) {
    console.error("Error handling webhook:", error);
    return new NextResponse("Error processing webhook", { status: 500 });
  }
}
