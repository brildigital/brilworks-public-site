import Dreams from "../../../components/AiAgents/Dreams";
import React from "react";

export const metadata = {
  title: "Dream State – AI Dream Interpretation & Analysis",
  description:
    "Analyze dream symbols, patterns, and subconscious signals using advanced dream interpretation AI.",
  openGraph: {
    title: "Dream State – AI Dream Interpretation & Analysis",
    description:
      "Analyze dream symbols, patterns, and subconscious signals using advanced dream interpretation AI.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/dreams/`,
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
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/dreams/`,
  },
};

const page = () => {
  return <Dreams />;
};

export default page;
