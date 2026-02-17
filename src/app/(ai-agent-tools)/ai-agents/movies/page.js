import Movies from "../../../components/AiAgents/Movies";
import React from "react";

export const metadata = {
  title: "Media – AI Movie Recommendations & Review Assistant",
  description:
    "Find movies, analyze ratings, generate watchlists, and discover entertainment curated by AI.",
  openGraph: {
    title: "Media – AI Movie Recommendations & Review Assistant",
    description:
      "Find movies, analyze ratings, generate watchlists, and discover entertainment curated by AI.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/movies/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/movies/`,
  },
};

const page = () => {
  return <Movies />;
};

export default page;
