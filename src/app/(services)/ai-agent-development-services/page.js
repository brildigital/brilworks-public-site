import React from "react";
import AiAgentServicePage from "@/app/components/AiAgents/AiAgentServicePage";
import LastUpdated from "@/app/components/Common/LastUpdated";
import { generateWebPageSchema } from "@/app/components/lib/schemaCode";

const LAST_UPDATED = "2026-05-01";

export const metadata = {
  title: "AI Agent Development Services | Live in 7 Days",
  description:
    "AI Agent Development Services. We deploy working AI agents that qualify leads, process documents, and automate support without long build cycles.",
  openGraph: {
    title: "AI Agent Development Services | Live in 7 Days",
    description:
      "AI Agent Development Services. We deploy working AI agents that qualify leads, process documents, and automate support without long build cycles.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agent-development-services/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    images: [
      {
        url: `/images/v2/ai-model-fine-tuning.webp`,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "AI Agent Development Services | Live in 7 Days",
    description:
      "AI Agent Development Services. We deploy working AI agents that qualify leads, process documents, and automate support without long build cycles.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agent-development-services/`,
  },
};

const page = () => {
  return (
    <>
      <script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateWebPageSchema({
            title: "AI Agent Development Services | Live in 7 Days",
            description:
              "AI Agent Development Services. We deploy working AI agents that qualify leads, process documents, and automate support without long build cycles.",
            url: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agent-development-services/`,
            dateModified: LAST_UPDATED,
          }),
        }}
      />
      <LastUpdated date={LAST_UPDATED} />
      <AiAgentServicePage />
    </>
  );
};

export default page;
