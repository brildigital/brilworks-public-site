// import { supabase } from "@/app/lib/supabase";

// const corsHeaders = {
//   "Access-Control-Allow-Origin": "*",
//   "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
//   "Access-Control-Allow-Headers":
//     "Content-Type, Authorization, X-Client-Info, Apikey",
// };

// // helper: send message via WhatsApp API
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

// // helper: call AI API for response
// async function getAIResponseFromAPI(
//   userMessage,
//   conversationHistory,
//   systemPrompt
// ) {
//   try {
//     const response = await fetch("https://www.brilworks.com/api/whatsapp/", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         message: userMessage,
//         history: conversationHistory,
//         systemPrompt,
//       }),
//     });

//     if (!response.ok) {
//       console.error("API error:", response.status, response.statusText);
//       return "I'm here to help! How can I assist you today?";
//     }

//     const data = await response.json();
//     return (
//       data.response ||
//       data.message ||
//       "I'm here to help! How can I assist you today?"
//     );
//   } catch (error) {
//     console.error("Error calling AI API:", error);
//     return "I'm here to help! How can I assist you today?";
//   }
// }

// export async function OPTIONS() {
//   return new Response(null, { status: 200, headers: corsHeaders });
// }

// export async function GET(req) {
//   const { searchParams } = new URL(req.url);
//   const mode = searchParams.get("hub.mode");
//   const token = searchParams.get("hub.verify_token");
//   const challenge = searchParams.get("hub.challenge");

//   const { data: config } = await supabase
//     .from("agent_config")
//     .select("whatsapp_verify_token")
//     .limit(1)
//     .maybeSingle();

//   const verifyToken = config?.whatsapp_verify_token || "default_verify_token";

//   if (mode === "subscribe" && token === verifyToken) {
//     console.log("Webhook verified");
//     return new Response(challenge, {
//       status: 200,
//       headers: { ...corsHeaders, "Content-Type": "text/plain" },
//     });
//   }

//   return new Response("Forbidden", { status: 403, headers: corsHeaders });
// }

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     console.log("Received webhook:", JSON.stringify(body, null, 2));

//     const { data: config } = await supabase
//       .from("agent_config")
//       .select("*")
//       .eq("is_active", true)
//       .limit(1)
//       .maybeSingle();

//     if (!config) {
//       console.log("No active agent found");
//       return new Response(JSON.stringify({ status: "no_active_agent" }), {
//         status: 200,
//         headers: { ...corsHeaders, "Content-Type": "application/json" },
//       });
//     }

//     if (body.object === "whatsapp_business_account") {
//       for (const entry of body.entry || []) {
//         for (const change of entry.changes || []) {
//           const value = change.value;
//           const phoneNumberId = value.metadata.phone_number_id;

//           if (value.messages && value.messages.length > 0) {
//             const message = value.messages[0];
//             const from = message.from;
//             const messageBody = message.text.body;
//             const whatsappMessageId = message.id;

//             console.log(`Message from ${from}: ${messageBody}`);

//             let { data: conversation } = await supabase
//               .from("conversations")
//               .select("id")
//               .eq("agent_id", config.id)
//               .eq("phone_number", from)
//               .maybeSingle();

//             if (!conversation) {
//               const { data: newConv } = await supabase
//                 .from("conversations")
//                 .insert({
//                   agent_id: config.id,
//                   phone_number: from,
//                   last_message_at: new Date().toISOString(),
//                   last_message_preview: messageBody,
//                   unread: true,
//                 })
//                 .select()
//                 .single();
//               conversation = newConv;
//             } else {
//               await supabase
//                 .from("conversations")
//                 .update({
//                   last_message_at: new Date().toISOString(),
//                   last_message_preview: messageBody,
//                   unread: true,
//                 })
//                 .eq("id", conversation.id);
//             }

//             await supabase.from("messages").insert({
//               conversation_id: conversation.id,
//               role: "user",
//               content: messageBody,
//               whatsapp_message_id: whatsappMessageId,
//             });

//             const { data: recentMessages } = await supabase
//               .from("messages")
//               .select("role, content")
//               .eq("conversation_id", conversation.id)
//               .order("created_at", { ascending: false })
//               .limit(10);

//             const conversationHistory = (recentMessages || []).reverse();

//             const aiResponse = await getAIResponseFromAPI(
//               messageBody,
//               conversationHistory,
//               config.system_prompt
//             );

//             await supabase.from("messages").insert({
//               conversation_id: conversation.id,
//               role: "assistant",
//               content: aiResponse,
//             });

//             await supabase
//               .from("conversations")
//               .update({
//                 last_message_at: new Date().toISOString(),
//                 last_message_preview: aiResponse,
//               })
//               .eq("id", conversation.id);

//             await sendWhatsAppMessage(
//               phoneNumberId,
//               config.whatsapp_token,
//               from,
//               aiResponse
//             );
//           }
//         }
//       }
//     }

//     return new Response(JSON.stringify({ status: "success" }), {
//       status: 200,
//       headers: { ...corsHeaders, "Content-Type": "application/json" },
//     });
//   } catch (error) {
//     console.error("Error processing webhook:", error);
//     return new Response(
//       JSON.stringify({
//         error: "Internal server error",
//         message: error.message,
//       }),
//       {
//         status: 500,
//         headers: { ...corsHeaders, "Content-Type": "application/json" },
//       }
//     );
//   }
// }
