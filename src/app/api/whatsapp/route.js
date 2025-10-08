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
