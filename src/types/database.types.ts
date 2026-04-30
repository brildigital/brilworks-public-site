export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

// Shared shape for all four lead tables
interface LeadRow {
  id: number;
  name: string | null;
  email: string | null;
  phone: string | null;
  message: string | null;
  page: string | null;
  previous_page: string | null;
  project_type: string | null;
  region: string | null;
  city: string | null;
  country: string | null;
  created_at: string;
}

interface LeadInsert {
  id?: number;
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  message?: string | null;
  page?: string | null;
  previous_page?: string | null;
  project_type?: string | null;
  region?: string | null;
  city?: string | null;
  country?: string | null;
  created_at?: string;
}

type LeadUpdate = Partial<LeadInsert>;

interface LeadTable {
  Row: LeadRow;
  Insert: LeadInsert;
  Update: LeadUpdate;
}

export interface Database {
  public: {
    Tables: {
      contacts: LeadTable;
      blogs: LeadTable;
      ebooks: LeadTable;
      tools: LeadTable;
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
}

export type LeadTableName = "contacts" | "blogs" | "ebooks" | "tools";
