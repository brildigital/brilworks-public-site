import GenerativeAIDevService from "@/app/components/Services/GenerativeAIDevService";
import LastUpdated from "@/app/components/Common/LastUpdated";
import { generateWebPageSchema } from "@/app/components/lib/schemaCode";

const LAST_UPDATED = "2026-04-23";

export const metadata = {
  title: "Generative AI Development Services | Brilworks",
  description:
    "Generative AI Development Services. We build production-grade LLM, RAG, and agent systems that ship in weeks, run with guardrails, and scale reliably.",
  openGraph: {
    title: "Generative AI Development Services | Brilworks",
    description:
      "Generative AI Development Services. We build production-grade LLM, RAG, and agent systems that ship in weeks, run with guardrails, and scale reliably.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}generative-ai-development-services/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/generative-ai-banner.webp`,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Generative AI Development Services | Brilworks",
    description:
      "Generative AI Development Services. We build production-grade LLM, RAG, and agent systems that ship in weeks, run with guardrails, and scale reliably.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}generative-ai-development-services/`,
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
            title: "Generative AI Development Services | Brilworks",
            description:
              "Generative AI Development Services. We build production-grade LLM, RAG, and agent systems that ship in weeks, run with guardrails, and scale reliably.",
            url: `${process.env.NEXT_PUBLIC_BASE_URL}generative-ai-development-services/`,
            dateModified: LAST_UPDATED,
          }),
        }}
      />
      <LastUpdated date={LAST_UPDATED} />
      <GenerativeAIDevService />
    </>
  );
};

export default page;
