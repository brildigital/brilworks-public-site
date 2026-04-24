import { connectDB } from "@/app/lib/db";
import { NextResponse } from "next/server";
import ChatSession from "../../../../models/ChatSession";

const WHATSAPP_TOKEN =
  "EAAWStqMHurEBPwZBt0NXHs32A4wkoXDRedhmhSmyFN3AUBX5eZCRZAWRybbZCJwhvjmUgtrb7uxnlfuFTFfQDMG2pGopKyZAakc1MG5fLLfzURvgwSveDakKHugd2KZCIrP0W6f924wvCLMeFpDZCbd09qso0owytXjgB7vZBuN6S0xF1TINGzZAY3tSB53mZBlqq9AZBeSau7Ks4lYnGhkjcRpxHkDNqWnsZBSUJlMTISlg4tM4lpjnYt7WBJVx8nM8qbY737CfW72fGA5BwnDpn3mYeZBIU";
const WHATSAPP_PHONE_ID = 428707450320928;
const VERIFY_TOKEN = "brilworks";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const mode = searchParams.get("hub.mode");
    const challenge = searchParams.get("hub.challenge");
    const verifyToken = searchParams.get("hub.verify_token");

    // Optional: verify the token before responding
    if (verifyToken !== VERIFY_TOKEN) {
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

export async function POST(request) {
  try {
    const body = await request.json();

    const entry = body.entry?.[0];
    const changes = entry?.changes?.[0];
    const message = changes?.value?.messages?.[0];

    if (message && message.type === "text") {
      const from = message.from; // WhatsApp user number
      const text = message.text.body; // message text

      await connectDB();
      let session = await ChatSession.findOne({ id: from });

      if (!session) {
        session = await ChatSession.create({
          id: from,
          messages: [],
        });
      }

      // 🔹 Add user's message
      session.messages.push({
        role: "user",
        content: text,
        parts: [{ type: "text", text }],
      });

      await session.save();

      // 🔹 Send the entire conversation to MCP
      const payload = {
        id: from,
        messages: session.messages,
      };

      console.log("📤 Sending to MCP:", JSON.stringify(payload, null, 2));

      const mcpResponse = await fetch("http://168.231.121.196:3001/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
        },
        body: JSON.stringify(payload),
      });

      const rawText = await mcpResponse.text();
      console.log("📥 MCP raw response:", rawText);

      let mcpData;
      try {
        mcpData = JSON.parse(rawText);
      } catch {
        mcpData = { reply: rawText };
      }

      const replyText =
        mcpData.reply ||
        mcpData.output ||
        mcpData.content ||
        mcpData.message ||
        "Sorry, I couldn’t understand that.";

      // 🔹 Add assistant's reply to DB
      session.messages.push({
        role: "assistant",
        content: replyText,
        parts: [{ type: "text", text: replyText }],
      });

      await session.save();

      // Send reply to WhatsApp user
      await fetch(
        `https://graph.facebook.com/v21.0/${WHATSAPP_PHONE_ID}/messages`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${WHATSAPP_TOKEN}`,
          },
          body: JSON.stringify({
            messaging_product: "whatsapp",
            to: from,
            text: { body: "success" },
          }),
        },
      );
    }

    return NextResponse.json({ status: "ok" });
  } catch (err) {
    console.error("Error handling webhook:", err);
    return new Response("Error", { status: 500 });
  }
}
