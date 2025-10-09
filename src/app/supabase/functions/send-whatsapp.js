import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { supabase } from "@/app/lib/supabase";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers":
    "Content-Type, Authorization, X-Client-Info, Apikey",
};

// interface SendMessageRequest {
//   conversationId: string;
//   message: string;
// }

async function sendWhatsAppMessage(phoneNumberId, accessToken, to, message) {
  const url = `https://graph.facebook.com/v17.0/${phoneNumberId}/messages`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messaging_product: "whatsapp",
      to: to,
      type: "text",
      text: { body: message },
    }),
  });

  return response.json();
}

Deno.serve(async (req) => {
  try {
    if (req.method === "OPTIONS") {
      return new Response(null, {
        status: 200,
        headers: corsHeaders,
      });
    }

    if (req.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const body = await req.json();
    const { conversationId, message } = body;

    if (!conversationId || !message) {
      return new Response(
        JSON.stringify({
          error: "Missing required fields: conversationId, message",
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const { data: conversation, error: convError } = await supabase
      .from("conversations")
      .select("id, phone_number, agent_id")
      .eq("id", conversationId)
      .maybeSingle();

    if (convError || !conversation) {
      return new Response(JSON.stringify({ error: "Conversation not found" }), {
        status: 404,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { data: config, error: configError } = await supabase
      .from("agent_config")
      .select("whatsapp_phone_id, whatsapp_token")
      .eq("id", conversation.agent_id)
      .maybeSingle();

    if (
      configError ||
      !config ||
      !config.whatsapp_phone_id ||
      !config.whatsapp_token
    ) {
      return new Response(
        JSON.stringify({
          error: "Agent configuration not found or incomplete",
        }),
        {
          status: 404,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    await supabase.from("messages").insert({
      conversation_id: conversationId,
      role: "assistant",
      content: message,
    });

    await supabase
      .from("conversations")
      .update({
        last_message_at: new Date().toISOString(),
        last_message_preview: message,
        unread: false,
      })
      .eq("id", conversationId);

    const whatsappResponse = await sendWhatsAppMessage(
      config.whatsapp_phone_id,
      config.whatsapp_token,
      conversation.phone_number,
      message
    );

    console.log("WhatsApp API response:", whatsappResponse);

    return new Response(JSON.stringify({ success: true, whatsappResponse }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error sending message:", error);
    return new Response(
      JSON.stringify({
        error: "Internal server error",
        message: error.message,
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
