"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { usePostHog } from "posthog-js/react";
import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";

export function PostHogProvider({ children }) {
  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      person_profiles: "identified_only", // or 'always' to create profiles for anonymous users as well
    });
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
// "use client"
// import { SessionProvider } from "next-auth/react";

// export const NextAuthProvider = ({ children }) => {
//   return <SessionProvider>{children}</SessionProvider>;
// };
