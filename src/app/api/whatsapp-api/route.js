import { NextResponse } from "next/server";
import { supabase } from "@/app/lib/supabase";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers":
    "Content-Type, Authorization, X-Client-Info, Apikey",
};

// interface IncomingMessage {
//   from: string;
//   message: string;
//   messageId?: string;
// }

// interface OutgoingResponse {
//   to: string;
//   response: string;
// }

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200, headers: corsHeaders });
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { from, message: messageBody, messageId } = body;

    if (!from || !messageBody) {
      return NextResponse.json(
        { error: "Missing required fields: from, message" },
        { status: 400, headers: corsHeaders }
      );
    }

    const { data: config } = await supabase
      .from("agent_config")
      .select("*")
      .eq("is_active", true)
      .limit(1)
      .maybeSingle();

    if (!config) {
      return NextResponse.json(
        { error: "No active agent found" },
        { status: 404, headers: corsHeaders }
      );
    }

    let { data: conversation } = await supabase
      .from("conversations")
      .select("id")
      .eq("agent_id", config.id)
      .eq("phone_number", from)
      .maybeSingle();

    if (!conversation) {
      const { data: newConv } = await supabase
        .from("conversations")
        .insert({
          agent_id: config.id,
          phone_number: from,
          last_message_at: new Date().toISOString(),
          last_message_preview: messageBody,
          unread: true,
        })
        .select()
        .single();
      conversation = newConv;
    } else {
      await supabase
        .from("conversations")
        .update({
          last_message_at: new Date().toISOString(),
          last_message_preview: messageBody,
          unread: true,
        })
        .eq("id", conversation.id);
    }

    await supabase.from("messages").insert({
      conversation_id: conversation.id,
      role: "user",
      content: messageBody,
      whatsapp_message_id: messageId || null,
    });

    const { data: recentMessages } = await supabase
      .from("messages")
      .select("role, content")
      .eq("conversation_id", conversation.id)
      .order("created_at", { ascending: false })
      .limit(10);

    const conversationHistory = (recentMessages || []).reverse();

    return NextResponse.json(
      {
        success: true,
        conversationId: conversation.id,
        history: conversationHistory,
        systemPrompt: config.system_prompt,
      },
      { status: 200, headers: corsHeaders }
    );
  } catch (error) {
    console.error("Error processing POST request:", error);
    return NextResponse.json(
      { error: "Internal server error", message: error.message },
      { status: 500, headers: corsHeaders }
    );
  }
}

export async function PUT(req) {
  try {
    const body = await req.json();
    const { to, response: aiResponse } = body;

    if (!to || !aiResponse) {
      return NextResponse.json(
        { error: "Missing required fields: to, response" },
        { status: 400, headers: corsHeaders }
      );
    }

    const { data: config } = await supabase
      .from("agent_config")
      .select("id")
      .eq("is_active", true)
      .limit(1)
      .maybeSingle();

    if (!config) {
      return NextResponse.json(
        { error: "No active agent found" },
        { status: 404, headers: corsHeaders }
      );
    }

    const { data: conversation } = await supabase
      .from("conversations")
      .select("id")
      .eq("agent_id", config.id)
      .eq("phone_number", to)
      .maybeSingle();

    if (!conversation) {
      return NextResponse.json(
        { error: "Conversation not found" },
        { status: 404, headers: corsHeaders }
      );
    }

    await supabase.from("messages").insert({
      conversation_id: conversation.id,
      role: "assistant",
      content: aiResponse,
    });

    await supabase
      .from("conversations")
      .update({
        last_message_at: new Date().toISOString(),
        last_message_preview: aiResponse,
      })
      .eq("id", conversation.id);

    return NextResponse.json(
      { success: true },
      { status: 200, headers: corsHeaders }
    );
  } catch (error) {
    console.error("Error processing PUT request:", error);
    return NextResponse.json(
      { error: "Internal server error", message: error.message },
      { status: 500, headers: corsHeaders }
    );
  }
}
