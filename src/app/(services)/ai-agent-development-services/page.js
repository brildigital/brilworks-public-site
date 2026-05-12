import React from "react";
import AiAgentServicePage from "@/app/components/AiAgents/AiAgentServicePage";
import LastUpdated from "@/app/components/Common/LastUpdated";
import { generateWebPageSchema } from "@/app/components/lib/schemaCode";

const LAST_UPDATED = "2026-05-01";

export const metadata = {
  title: "Custom AI Agent Development | AI Agents for Business | Brilworks",
  description:
    "Get a working AI agent prototype in 7 days. Brilworks builds custom AI agents — lead qualification, customer support, WhatsApp, document processing, and workflow automation. Starting at $2,000.",
  openGraph: {
    title: "Custom AI Agent Development | Brilworks",
    description:
      "Get a working AI agent prototype in 7 days, tailored to your operations. 30+ agents built and deployed.",
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
    title: "Custom AI Agent Development | Brilworks",
    description:
      "Get a working AI agent prototype in 7 days, tailored to your operations. 30+ agents built and deployed.",
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
            title:
              "Custom AI Agent Development | AI Agents for Business | Brilworks",
            description:
              "Get a working AI agent prototype in 7 days. Brilworks builds custom AI agents — lead qualification, customer support, WhatsApp, document processing, and workflow automation. Starting at $2,000.",
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
