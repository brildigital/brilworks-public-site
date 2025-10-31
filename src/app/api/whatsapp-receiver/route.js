// import { supabase } from "@/app/lib/supabase";
// import { NextResponse } from "next/server";

// const corsHeaders = {
//   "Access-Control-Allow-Origin": "*",
//   "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
//   "Access-Control-Allow-Headers":
//     "Content-Type, Authorization, X-Client-Info, Apikey",
// };

// export async function OPTIONS() {
//   return NextResponse.json({}, { status: 200, headers: corsHeaders });
// }

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     console.log("Received webhook:", JSON.stringify(body, null, 2));

//     // Fetch active agent config
//     const { data: config } = await supabase
//       .from("agent_config")
//       .select("*")
//       .eq("is_active", true)
//       .limit(1)
//       .maybeSingle();

//     if (!config) {
//       console.log("No active agent found");
//       return NextResponse.json(
//         { status: "no_active_agent" },
//         { status: 200, headers: corsHeaders }
//       );
//     }

//     let messageFrom, messageBody, whatsappMessageId;

//     // ✅ Case 1: WhatsApp Business webhook payload
//     if (body.object === "whatsapp_business_account" && body.entry) {
//       for (const entry of body.entry) {
//         for (const change of entry.changes) {
//           const value = change.value;

//           if (value.messages && value.messages.length > 0) {
//             const message = value.messages[0];
//             messageFrom = message.from;
//             messageBody = message.text.body;
//             whatsappMessageId = message.id;

//             console.log(`Message from ${messageFrom}: ${messageBody}`);

//             // Check existing conversation
//             let { data: conversation } = await supabase
//               .from("conversations")
//               .select("id")
//               .eq("agent_id", config.id)
//               .eq("phone_number", messageFrom)
//               .maybeSingle();

//             // Create or update conversation
//             if (!conversation) {
//               const { data: newConv } = await supabase
//                 .from("conversations")
//                 .insert({
//                   agent_id: config.id,
//                   phone_number: messageFrom,
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

//             // Insert new message
//             if (conversation) {
//               await supabase.from("messages").insert({
//                 conversation_id: conversation.id,
//                 role: "user",
//                 content: messageBody,
//                 whatsapp_message_id: whatsappMessageId,
//               });
//             }
//           }
//         }
//       }
//     }

//     // ✅ Case 2: Direct POST from client (testing / manual)
//     else if (body.from && body.message) {
//       messageFrom = body.from;
//       messageBody = body.message;
//       whatsappMessageId = body.messageId;

//       console.log(`Direct message from ${messageFrom}: ${messageBody}`);

//       let { data: conversation } = await supabase
//         .from("conversations")
//         .select("id")
//         .eq("agent_id", config.id)
//         .eq("phone_number", messageFrom)
//         .maybeSingle();

//       if (!conversation) {
//         const { data: newConv } = await supabase
//           .from("conversations")
//           .insert({
//             agent_id: config.id,
//             phone_number: messageFrom,
//             last_message_at: new Date().toISOString(),
//             last_message_preview: messageBody,
//             unread: true,
//           })
//           .select()
//           .single();
//         conversation = newConv;
//       } else {
//         await supabase
//           .from("conversations")
//           .update({
//             last_message_at: new Date().toISOString(),
//             last_message_preview: messageBody,
//             unread: true,
//           })
//           .eq("id", conversation.id);
//       }

//       if (conversation) {
//         await supabase.from("messages").insert({
//           conversation_id: conversation.id,
//           role: "user",
//           content: messageBody,
//           whatsapp_message_id: whatsappMessageId || null,
//         });
//       }
//     }

//     return NextResponse.json(
//       { status: "success" },
//       { status: 200, headers: corsHeaders }
//     );
//   } catch (error) {
//     console.error("Error processing webhook:", error);
//     return NextResponse.json(
//       { error: "Internal server error", message: error.message },
//       { status: 500, headers: corsHeaders }
//     );
//   }
// }
