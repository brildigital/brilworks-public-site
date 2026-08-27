"use client";

import { useEffect } from "react";
import posthog from "posthog-js";

const STALE_CHUNK_PATTERN = /Loading (chunk|CSS chunk) \d+ failed|ChunkLoadError|Failed to fetch dynamically imported module/i;

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error("GlobalError boundary caught:", error);
    if (posthog.__loaded) {
      posthog.captureException(error);
    }

    // A deploy can swap the build out from under an already-loaded page, so the
    // client asks for a JS chunk that no longer exists under the old build hash.
    // Reload once to pick up the new build instead of showing a crash screen.
    const isStaleChunk =
      error?.name === "ChunkLoadError" || STALE_CHUNK_PATTERN.test(error?.message || "");
    if (isStaleChunk && !sessionStorage.getItem("stale-chunk-reload")) {
      sessionStorage.setItem("stale-chunk-reload", "1");
      window.location.reload();
    }
  }, [error]);

  return (
    <html>
      <body>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
          <div style={{ textAlign: "center" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Something went wrong!</h2>
            <button
              onClick={() => reset()}
              style={{
                padding: "0.75rem 1.5rem",
                fontSize: "1rem",
                backgroundColor: "#000",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
