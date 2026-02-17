import Music from "../../../components/AiAgents/Music";
import React from "react";

export const metadata = {
  title: "Sonic – AI Music Discovery & Playlist Generator",
  description:
    "Discover music, generate playlists, and explore new sounds with intelligent music pattern analysis.",
  openGraph: {
    title: "Sonic – AI Music Discovery & Playlist Generator",
    description:
      "Discover music, generate playlists, and explore new sounds with intelligent music pattern analysis.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/music/`,
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
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/music/`,
  },
};

const page = () => {
  return <Music />;
};

export default page;
