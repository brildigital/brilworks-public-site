import Fashion from "../../../components/AiAgents/Fashion";
import React from "react";

export const metadata = {
  title: "Aesthetics – AI Fashion Stylist & Outfit Planner",
  description:
    "Personalized outfit recommendations, wardrobe curation, and trend analysis powered by AI.",
  openGraph: {
    title: "Aesthetics – AI Fashion Stylist & Outfit Planner",
    description:
      "Personalized outfit recommendations, wardrobe curation, and trend analysis powered by AI.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/fashion/`,
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
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/fashion/`,
  },
};
const page = () => {
  return <Fashion />;
};

export default page;
