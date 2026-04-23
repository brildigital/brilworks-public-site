"use client";

import Cookies from "js-cookie";

const CONSENT_COOKIE = "cookie-consent";
const CONSENT_ID_COOKIE = "cookie-consent-id";
const CONSENT_VERSION = 1;
const EXPIRY_DAYS = 365;

function getOrCreateConsentId() {
  let id = Cookies.get(CONSENT_ID_COOKIE);
  if (!id) {
    id = (crypto.randomUUID && crypto.randomUUID()) ||
      `c_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
    Cookies.set(CONSENT_ID_COOKIE, id, {
      expires: EXPIRY_DAYS,
      path: "/",
      sameSite: "lax",
    });
  }
  return id;
}

function getUserGeoFromCookie() {
  const raw = Cookies.get("user-data");
  if (!raw) return {};
  try {
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

async function logToServer(payload, action) {
  try {
    await fetch("/api/consent-log", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        consentId: getOrCreateConsentId(),
        necessary: payload.necessary,
        analytics: payload.analytics,
        marketing: payload.marketing,
        version: payload.version,
        action,
        ...getUserGeoFromCookie(),
        pageUrl: typeof window !== "undefined" ? window.location.pathname : null,
      }),
      keepalive: true,
    });
  } catch (error) {
    console.error("Failed to log consent to server:", error);
  }
}

export const CATEGORIES = {
  necessary: { label: "Necessary", required: true },
  analytics: { label: "Analytics", required: false },
  marketing: { label: "Marketing", required: false },
};

const DEFAULT_CONSENT = {
  necessary: true,
  analytics: false,
  marketing: false,
};

export function getConsent() {
  if (typeof window === "undefined") return null;
  const raw = Cookies.get(CONSENT_COOKIE);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw);
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function setConsent(prefs, action = "customize") {
  const payload = {
    ...DEFAULT_CONSENT,
    ...prefs,
    necessary: true,
    timestamp: new Date().toISOString(),
    version: CONSENT_VERSION,
  };
  Cookies.set(CONSENT_COOKIE, JSON.stringify(payload), {
    expires: EXPIRY_DAYS,
    path: "/",
    sameSite: "lax",
  });
  updateGtmConsent(payload);
  logToServer(payload, action);
  window.dispatchEvent(new CustomEvent("consent-change", { detail: payload }));
  return payload;
}

export function hasConsent(category) {
  const consent = getConsent();
  if (!consent) return false;
  return Boolean(consent[category]);
}

export function acceptAll() {
  return setConsent({ analytics: true, marketing: true }, "accept-all");
}

export function rejectAll() {
  return setConsent({ analytics: false, marketing: false }, "reject-all");
}

export function initGtmConsentDefaults() {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;
  const existing = getConsent();
  const defaults = existing || DEFAULT_CONSENT;
  gtag("consent", "default", {
    ad_storage: defaults.marketing ? "granted" : "denied",
    ad_user_data: defaults.marketing ? "granted" : "denied",
    ad_personalization: defaults.marketing ? "granted" : "denied",
    analytics_storage: defaults.analytics ? "granted" : "denied",
    functionality_storage: "granted",
    security_storage: "granted",
  });
}

function updateGtmConsent(prefs) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("consent", "update", {
    ad_storage: prefs.marketing ? "granted" : "denied",
    ad_user_data: prefs.marketing ? "granted" : "denied",
    ad_personalization: prefs.marketing ? "granted" : "denied",
    analytics_storage: prefs.analytics ? "granted" : "denied",
  });
}
