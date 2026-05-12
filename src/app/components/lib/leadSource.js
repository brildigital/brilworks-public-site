"use client";

// Funnel-of-origin attribution for `generate_lead` events.
// Spec: BRI-231 (Wave 1.5 #1) — tag every generate_lead with one of:
//   form_funnel | chat | calendly | direct_email | unknown
// Resolution rule: most-recent signal wins; persists for the browser session.

const STORAGE_KEY = "lead_source_funnel";
const TIMESTAMP_KEY = "lead_source_funnel_at";

export const LEAD_SOURCE_VALUES = Object.freeze([
  "form_funnel",
  "chat",
  "calendly",
  "direct_email",
  "unknown",
]);

function isBrowser() {
  return typeof window !== "undefined";
}

export function markLeadSource(source) {
  if (!isBrowser()) return;
  if (!LEAD_SOURCE_VALUES.includes(source)) return;
  try {
    window.sessionStorage.setItem(STORAGE_KEY, source);
    window.sessionStorage.setItem(TIMESTAMP_KEY, String(Date.now()));
  } catch {
    // sessionStorage may be unavailable (private mode, quota); fall through.
  }
  // Mirror to dataLayer so GTM Custom JS Variable can read it independently
  // of sessionStorage in case GTM fires before our code.
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ lead_source_funnel: source });
}

export function getLeadSource() {
  if (!isBrowser()) return "unknown";
  try {
    const v = window.sessionStorage.getItem(STORAGE_KEY);
    if (v && LEAD_SOURCE_VALUES.includes(v)) return v;
  } catch {
    // ignore
  }
  return "unknown";
}

// Push a `generate_lead` event with the resolved source dimension. Use this
// from explicit conversion points (form submit success, Calendly booking
// success, etc.) so GA4 captures `lead_source_funnel` as a custom dimension.
export function pushGenerateLead(extras = {}) {
  if (!isBrowser()) return;
  const source = extras.lead_source_funnel || getLeadSource();
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "generate_lead",
    ...extras,
    lead_source_funnel: source,
  });
}

// Push a `form_start` event with the resolved source. Mirrors what GA4
// enhanced measurement auto-fires, but lets us ride the same dimension.
export function pushFormStart(extras = {}) {
  if (!isBrowser()) return;
  const source = extras.lead_source_funnel || getLeadSource();
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "form_start",
    ...extras,
    lead_source_funnel: source,
  });
}

// Install a global click listener that tags `mailto:` clicks as direct_email.
// Idempotent — safe to call from multiple bootstrap points.
let mailtoListenerInstalled = false;
export function installMailtoListener() {
  if (!isBrowser() || mailtoListenerInstalled) return;
  mailtoListenerInstalled = true;
  document.addEventListener(
    "click",
    (e) => {
      const link = e.target && e.target.closest && e.target.closest("a[href^='mailto:']");
      if (!link) return;
      markLeadSource("direct_email");
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "mailto_click",
        mailto_address: link.getAttribute("href").replace(/^mailto:/, ""),
        lead_source_funnel: "direct_email",
      });
    },
    { capture: true, passive: true },
  );
}
