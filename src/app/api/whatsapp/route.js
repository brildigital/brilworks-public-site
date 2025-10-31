import { NextResponse } from "next/server";

const WHATSAPP_TOKEN =
  "EAAWStqMHurEBPZCAa3WhdA1avOyDPlalMoipT7HbvoC3EBUyyJ1SCnAZCQZBUcQcCepxPUUjcYLN3dG95roTZCZBE4tkPvhavkpAQucJU6LHrbm0GtjMcr7zTrMuALzvEirFHzLtsYXx2xcGzLNuvZBD6XATZBmNrtHmf0vVzM3DmZBvZCuVn6KfFb28CONHpqnzIMN3n9Hj16OxiRIfvmZCTYqEfkzi0GBCJoPOzORD9U9MvrzZC77gdIIU39xh6Jn2pyFoyJSW2sgU7fU4H0KwfntaGy5";
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

      console.log("Incoming message:", text);

      // Simple logic-based reply
      let reply = "I didn’t understand that.";
      if (text.toLowerCase().includes("hello")) {
        reply = "Hi there 👋! How can I help you today?";
      } else if (text.toLowerCase().includes("price")) {
        reply = "Our plans start from $10/month.";
      }

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
            text: { body: reply },
          }),
        }
      );
    }

    return NextResponse.json({ status: "ok" });
  } catch (err) {
    console.error("Error handling webhook:", err);
    return new Response("Error", { status: 500 });
  }
}

// Handle POST webhook and forward to Supabase/Bolt backend
// export async function POST(request) {
//   try {
//     const body = await request.json();
//     console.log("Incoming WhatsApp message:", JSON.stringify(body, null, 2));

//     // Forward the webhook data to Bolt/Supabase function
//     const response = await fetch(
//       "https://jhckqsdepgmrsmwwuour.supabase.co/functions/v1/whatsapp-api",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           authorization:
//             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpoY2txc2RlcGdtcnNtd3d1b3VyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5MTM4MDAsImV4cCI6MjA3NTQ4OTgwMH0.4YkgiyQITZR_TvV9GzNU-go6F36R0aSIfeVoreftJEc",
//         },
//         body: JSON.stringify(body),
//       }
//     );

//     if (!response.ok) {
//       console.error("Error from Bolt:", await response.text());
//       return new NextResponse("Failed to forward to Bolt", { status: 500 });
//     }

//     return new NextResponse("Forwarded to Bolt successfully", { status: 200 });
//   } catch (error) {
//     console.error("Error handling webhook:", error);
//     return new NextResponse("Error processing webhook", { status: 500 });
//   }
// }

// export async function POST(request) {
//   try {
//     const body = await request.json();
//     console.log("Incoming WhatsApp webhook:", JSON.stringify(body, null, 2));

//     // Extract message details safely
//     const entry = body.entry?.[0];
//     const change = entry?.changes?.[0];
//     const message = change?.value?.messages?.[0];

//     if (!message || !message.from || !message.text?.body) {
//       console.warn("Invalid message structure");
//       return new NextResponse("No valid message found", { status: 400 });
//     }

//     const payload = {
//       from: message.from,
//       message: message.text.body,
//       messageId: message.id || null,
//     };

//     console.log("Forwarding to Supabase:", payload);

//     // Forward to your Supabase/Bolt endpoint
//     const response = await fetch(
//       "https://jhckqsdepgmrsmwwuour.supabase.co/functions/v1/whatsapp-api",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           authorization:
//             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpoY2txc2RlcGdtcnNtd3d1b3VyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5MTM4MDAsImV4cCI6MjA3NTQ4OTgwMH0.4YkgiyQITZR_TvV9GzNU-go6F36R0aSIfeVoreftJEc",
//         },
//         body: JSON.stringify(payload),
//       }
//     );

//     const result = await response.text();

//     if (!response.ok) {
//       console.error("Error from Bolt:", result);
//       return new NextResponse("Failed to forward to Bolt", { status: 500 });
//     }

//     console.log("Bolt response:", result);
//     return new NextResponse("Forwarded successfully", { status: 200 });
//   } catch (error) {
//     console.error("Error handling webhook:", error);
//     return new NextResponse("Error processing webhook", { status: 500 });
//   }
// }
