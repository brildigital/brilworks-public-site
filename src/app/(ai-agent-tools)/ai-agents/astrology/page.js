import React from "react";
import Astrology from "../../../components/AiAgents/Astrology";

export const metadata = {
  title: "Astro Core – Advanced Kundli & Astrology AI Engine",
  description:
    "Generate accurate Kundli, astrological insights, planetary analysis, and personalized cosmic reports powered by AI.",
  openGraph: {
    title: "Astro Core – Advanced Kundli & Astrology AI Engine",
    description:
      "Generate accurate Kundli, astrological insights, planetary analysis, and personalized cosmic reports powered by AI.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/astrology/`,
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
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/astrology/`,
  },
};

const page = () => {
  return <Astrology />;
};

export default page;
