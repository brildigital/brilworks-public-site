"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { createContext, useContext, useEffect, useState, Suspense } from "react";
import { afterFirstPaint } from "./lib/afterFirstPaint";
import { setPostHogClient } from "./lib/posthogClient";

const PostHogContext = createContext(null);

// The posthog-js client once it has been loaded and initialised, otherwise null.
// Captures made before init are dropped by posthog-js, so always go through this.
export const usePostHogClient = () => useContext(PostHogContext);

function PostHogPageView({ client }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (client && pathname) {
      let url = window.location.origin + pathname;
      const search = searchParams?.toString();
      if (search) url += "?" + search;
      client.capture("$pageview", { $current_url: url });
    }
  }, [client, pathname, searchParams]);

  return null;
}

export default function PostHogProvider({ children }) {
  const [client, setClient] = useState(null);

  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    const host = process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com";
    const isProduction = process.env.NEXT_PUBLIC_APP_ENV === "production";

    if (key && isProduction) {
      // Load and init after first paint: posthog-js itself (~100 KB) plus the
      // recorder, surveys and autocapture bundles it pulls in right after init
      // otherwise compete with LCP and dominate main-thread time on mobile.
      afterFirstPaint(async () => {
        const { default: posthog } = await import("posthog-js");
        posthog.init(key, {
          api_host: host,
          capture_pageview: false,
          capture_pageleave: true,
          person_profiles: "identified_only",
          loaded: (instance) => {
            setPostHogClient(instance);
            setClient(instance);
          },
        });
      });
    }
  }, []);

  return (
    <PostHogContext.Provider value={client}>
      <Suspense fallback={null}>
        <PostHogPageView client={client} />
      </Suspense>
      {children}
    </PostHogContext.Provider>
  );
}
