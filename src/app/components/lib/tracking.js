"use client";

// Minimal dataLayer push. GTM picks it up and routes to GA4 / Ads / Clarity.
// Safe to call during SSR (no-op) and before consent (consent is gated inside GTM).
export function trackEvent(event, params = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

// Fire scroll-depth events once per threshold while the user is on the current page.
// thresholds: array of ints 1-100 (percentage of scrolled page height).
// pageKey is prefixed on the event name so GA4 can slice by page.
export function installScrollDepth(pageKey, thresholds = [25, 50, 75, 100]) {
  if (typeof window === "undefined") return () => {};
  const fired = new Set();

  const onScroll = () => {
    const doc = document.documentElement;
    const max = Math.max(doc.scrollHeight - window.innerHeight, 1);
    const pct = Math.min(100, Math.round((window.scrollY / max) * 100));
    for (const t of thresholds) {
      if (pct >= t && !fired.has(t)) {
        fired.add(t);
        trackEvent(`${pageKey}_scroll_depth`, { percent: t });
      }
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  return () => window.removeEventListener("scroll", onScroll);
}
