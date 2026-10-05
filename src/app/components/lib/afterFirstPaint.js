"use client";

// Runs non-critical work (tracking tags, analytics SDKs, menu data fetches) only
// once the page's main content has painted. Anything requested before LCP sits
// on the LCP critical path: it competes with the hero for bandwidth/CPU, and
// Lighthouse/PageSpeed's simulation counts every request started before the
// observed LCP towards it (this alone pushed lab LCP on the homepage to 12-17s).
//
// Nothing is dropped — callbacks are only queued until the first paint, which on
// real devices usually lands before hydration finishes anyway.

const FALLBACK_MS = 4000;

let paintPromise;

function whenPainted() {
  if (paintPromise) return paintPromise;

  paintPromise = new Promise((resolve) => {
    let observer;
    const done = () => {
      observer?.disconnect();
      resolve();
    };

    const supported = window.PerformanceObserver?.supportedEntryTypes || [];
    // Prefer LCP (Chromium, Firefox); fall back to FCP (Safari) when unsupported.
    const type = supported.includes("largest-contentful-paint")
      ? "largest-contentful-paint"
      : supported.includes("paint")
        ? "paint"
        : null;

    if (type) {
      try {
        observer = new PerformanceObserver((list) => {
          const painted = list
            .getEntries()
            .some((e) => type !== "paint" || e.name === "first-contentful-paint");
          if (painted) done();
        });
        observer.observe({ type, buffered: true });
      } catch {
        // Fall through to the timeout below.
      }
    }

    // Safety net: background tabs never report paint entries, and some
    // browsers expose neither entry type.
    setTimeout(done, FALLBACK_MS);
  });

  return paintPromise;
}

export function afterFirstPaint(callback) {
  if (typeof window === "undefined") return;
  whenPainted().then(() => {
    if (window.requestIdleCallback) {
      window.requestIdleCallback(() => callback(), { timeout: 1500 });
    } else {
      setTimeout(callback, 0);
    }
  });
}
