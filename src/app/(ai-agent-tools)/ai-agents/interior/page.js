import Interior from "../../../components/AiAgents/Interior";
import React from "react";

export const metadata = {
  title: "Habitat – AI Interior Design Planner",
  description:
    "Get interior design ideas, room layouts, furniture pairing, and color palette suggestions using AI.",
  openGraph: {
    title: "Habitat – AI Interior Design Planner",
    description:
      "Get interior design ideas, room layouts, furniture pairing, and color palette suggestions using AI.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/interior/`,
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
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/interior/`,
  },
};

const page = () => {
  return <Interior />;
};

export default page;
