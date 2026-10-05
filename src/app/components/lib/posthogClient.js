"use client";

// posthog-js (~100 KB gzipped) is imported lazily by PostHogProvider after first
// paint. This holds the initialised client so code outside the React tree (e.g.
// global-error) can use it without pulling posthog-js into its own bundle.
let client = null;

export const setPostHogClient = (instance) => {
  client = instance;
};

export const getPostHogClient = () => client;
