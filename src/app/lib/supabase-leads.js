import { createClient } from "@supabase/supabase-js";

const url = process.env.SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_KEY;

if (!url || !serviceKey) {
  throw new Error("Missing SUPABASE_URL or SUPABASE_SERVICE_KEY");
}

// Server-only client using the service key (bypasses RLS — safe for server routes only)
export const supabaseLeads = createClient(url, serviceKey);

/**
 * Determine which table a lead belongs to based on the page URL.
 * @param {string} page - current page path or full URL
 * @param {string} previousPage - referrer page path or full URL
 * @returns {"ebooks"|"tools"|"blogs"|"contacts"}
 */
export function getLeadTable(page = "", previousPage = "") {
  const combined = `${page} ${previousPage}`.toLowerCase();
  if (combined.includes("/ebook")) return "ebooks";
  if (combined.includes("/tools/")) return "tools";
  if (combined.includes("/blog/")) return "blogs";
  return "contacts";
}

/**
 * Insert a lead into the correct table based on the page URL.
 */
export async function saveLead({
  name,
  email,
  phone,
  message,
  page,
  previousPage,
  region,
  city,
  country,
  projectType,
}) {
  const table = getLeadTable(page, previousPage);

  const { error } = await supabaseLeads.from(table).insert({
    name: name || null,
    email: email || null,
    phone: phone || null,
    message: message || null,
    page: page || null,
    previous_page: previousPage || null,
    region: region || null,
    city: city || null,
    country: country || null,
    ...(table === "contacts" && { project_type: projectType || null }),
  });

  if (error) throw error;
  return table;
}
