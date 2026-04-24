import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jhckqsdepgmrsmwwuour.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpoY2txc2RlcGdtcnNtd3d1b3VyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5MTM4MDAsImV4cCI6MjA3NTQ4OTgwMH0.4YkgiyQITZR_TvV9GzNU-go6F36R0aSIfeVoreftJEc";

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
