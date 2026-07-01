import { generateBreadcrumb } from "@/app/components/lib/schemaCode";
import HireMLAIEngineers from "@/app/components/HireTeam/HireMLAIEngineers";

export const metadata = {
  title: "Hire ML / AI Engineers | GenAI & LLM Engineering | Brilworks",
  description:
    "Hire senior ML and AI engineers who build production models, GenAI applications, RAG pipelines, and agentic systems. AWS GenAI Competency. Classical ML, LLM integration, and AI agent development.",
  openGraph: {
    title: "Hire ML / AI Engineers | GenAI & LLM Engineering",
    description:
      "Hire senior ML and AI engineers who build production models, GenAI applications, RAG pipelines, and agentic systems. Models running in production — not demos.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}hire-ml-ai-engineer/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/og/hire-ml-ai-engineer.webp`,
      },
    ],
    locale: "en-US",
    type: "article",
  },
  twitter: {
    title: "Hire ML / AI Engineers | GenAI & LLM Engineering",
    description:
      "Senior ML and AI engineers building production models, RAG pipelines, and agentic systems.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}hire-ml-ai-engineer/`,
  },
};

const page = () => {
  return (
    <>
      <script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateBreadcrumb("Hire ML / AI Engineers"),
        }}
      />
      <HireMLAIEngineers />
    </>
  );
};

export default page;
