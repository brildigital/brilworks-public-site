import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jhckqsdepgmrsmwwuour.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpoY2txc2RlcGdtcnNtd3d1b3VyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5MTM4MDAsImV4cCI6MjA3NTQ4OTgwMH0.4YkgiyQITZR_TvV9GzNU-go6F36R0aSIfeVoreftJEc";

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// export interface AgentConfig {
//   id: string;
//   name: string;
//   system_prompt: string;
//   whatsapp_phone_id: string | null;
//   whatsapp_token: string | null;
//   whatsapp_verify_token: string | null;
//   is_active: boolean;
//   created_at: string;
//   updated_at: string;
// }

// export interface Conversation {
//   id: string;
//   agent_id: string;
//   phone_number: string;
//   last_message_at: string;
//   last_message_preview: string;
//   unread: boolean;
//   created_at: string;
// }

// export interface Message {
//   id: string;
//   conversation_id: string;
//   role: 'user' | 'assistant';
//   content: string;
//   whatsapp_message_id: string | null;
//   created_at: string;
// }
