"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import { ArticleSkeleton } from "./Blog/ArticleSkeleton";

/** Import your components */
import Article from "./Article";

const components = {
  article: Article,
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
  use: [apiPlugin],
  components,
});

export default function StoryblokProvider({ children }) {
  if (!children) return <ArticleSkeleton />;
  return children;
}
