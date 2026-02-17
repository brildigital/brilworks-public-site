// import { NextResponse } from "next/server";
// import { createClient } from "@supabase/supabase-js";
// import { supabase } from "@/app/lib/supabase";

// const corsHeaders = {
//   "Access-Control-Allow-Origin": "*",
//   "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
//   "Access-Control-Allow-Headers":
//     "Content-Type, Authorization, X-Client-Info, Apikey",
// };

// async function sendWhatsAppMessage(phoneNumberId, accessToken, to, message) {
//   const url = `https://graph.facebook.com/v17.0/${phoneNumberId}/messages`;

//   const response = await fetch(url, {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       messaging_product: "whatsapp",
//       to,
//       type: "text",
//       text: { body: message },
//     }),
//   });

//   return response.json();
// }

// export async function OPTIONS() {
//   return NextResponse.json({}, { headers: corsHeaders });
// }

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const { conversationId, message } = body;

//     console.log("📨 Received send-whatsapp request:", {
//       conversationId,
//       messageLength: message?.length,
//     });

//     if (!conversationId || !message) {
//       console.error("❌ Missing required fields:", {
//         conversationId: !!conversationId,
//         message: !!message,
//       });
//       return NextResponse.json(
//         { error: "Missing required fields: conversationId, message" },
//         { status: 400, headers: corsHeaders }
//       );
//     }

//     // ✅ Fetch conversation details
//     console.log("🔍 Fetching conversation details for ID:", conversationId);
//     const { data: conversation, error: convError } = await supabase
//       .from("conversations")
//       .select("id, phone_number, agent_id")
//       .eq("id", conversationId)
//       .maybeSingle();

//     if (convError) {
//       console.error("❌ Database error fetching conversation:", convError);
//       return NextResponse.json(
//         { error: "Database error", details: convError.message },
//         { status: 500, headers: corsHeaders }
//       );
//     }

//     if (!conversation) {
//       console.error("❌ Conversation not found for ID:", conversationId);
//       return NextResponse.json(
//         { error: "Conversation not found" },
//         { status: 404, headers: corsHeaders }
//       );
//     }

//     console.log("✅ Conversation found:", {
//       phone: conversation.phone_number,
//       agentId: conversation.agent_id,
//     });

//     // ✅ Fetch agent WhatsApp config
//     console.log("🔍 Fetching agent config for ID:", conversation.agent_id);
//     const { data: config, error: configError } = await supabase
//       .from("agent_config")
//       .select("whatsapp_phone_id, whatsapp_token")
//       .eq("id", conversation.agent_id)
//       .maybeSingle();

//     if (configError) {
//       console.error("❌ Database error fetching agent config:", configError);
//       return NextResponse.json(
//         { error: "Database error", details: configError.message },
//         { status: 500, headers: corsHeaders }
//       );
//     }

//     if (!config) {
//       console.error(
//         "❌ Agent configuration not found for ID:",
//         conversation.agent_id
//       );
//       return NextResponse.json(
//         { error: "Agent configuration not found" },
//         { status: 404, headers: corsHeaders }
//       );
//     }

//     if (!config.whatsapp_phone_id || !config.whatsapp_token) {
//       console.error("❌ Incomplete WhatsApp configuration:", {
//         hasPhoneId: !!config.whatsapp_phone_id,
//         hasToken: !!config.whatsapp_token,
//       });
//       return NextResponse.json(
//         {
//           error:
//             "Incomplete WhatsApp configuration. Please check phone ID and access token.",
//         },
//         { status: 400, headers: corsHeaders }
//       );
//     }

//     console.log("✅ Agent config found:", {
//       phoneId: config.whatsapp_phone_id,
//       hasToken: !!config.whatsapp_token,
//     });

//     // ✅ Insert message into database
//     console.log("💾 Inserting message into database");
//     const { error: insertError } = await supabase.from("messages").insert({
//       conversation_id: conversationId,
//       role: "assistant",
//       content: message,
//     });

//     if (insertError) {
//       console.error("❌ Error inserting message:", insertError);
//       return NextResponse.json(
//         { error: "Failed to save message", details: insertError.message },
//         { status: 500, headers: corsHeaders }
//       );
//     }

//     // ✅ Update conversation
//     console.log("💾 Updating conversation");
//     const { error: updateError } = await supabase
//       .from("conversations")
//       .update({
//         last_message_at: new Date().toISOString(),
//         last_message_preview: message,
//         unread: false,
//       })
//       .eq("id", conversationId);

//     if (updateError) {
//       console.error("❌ Error updating conversation:", updateError);
//       // Don't return error here as message is already saved
//     }

//     // ✅ Send message via WhatsApp API
//     console.log(
//       "📤 Sending message via WhatsApp API to:",
//       conversation.phone_number
//     );
//     const whatsappResponse = await sendWhatsAppMessage(
//       config.whatsapp_phone_id,
//       config.whatsapp_token,
//       conversation.phone_number,
//       message
//     );

//     console.log("✅ WhatsApp API Response:", whatsappResponse);

//     if (whatsappResponse.error) {
//       console.error("❌ WhatsApp API Error:", whatsappResponse.error);
//       return NextResponse.json(
//         {
//           error: "WhatsApp API error",
//           details: whatsappResponse.error,
//           whatsappResponse,
//         },
//         { status: 400, headers: corsHeaders }
//       );
//     }

//     return NextResponse.json(
//       { success: true, whatsappResponse },
//       { status: 200, headers: corsHeaders }
//     );
//   } catch (error) {
//     console.error("❌ Unexpected error sending WhatsApp message:", error);
//     return NextResponse.json(
//       { error: "Internal server error", message: error.message },
//       { status: 500, headers: corsHeaders }
//     );
//   }
// }
