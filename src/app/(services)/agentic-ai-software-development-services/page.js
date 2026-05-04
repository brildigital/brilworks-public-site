import AgenticAISoftwareDevelopmentService from "@/app/components/Services/AgenticAISoftwareDevelopmentService";
import LastUpdated from "@/app/components/Common/LastUpdated";
import { generateWebPageSchema } from "@/app/components/lib/schemaCode";

const LAST_UPDATED = "2026-05-04";

const PAGE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}agentic-ai-software-development-services/`;

const PAGE_TITLE = "Agentic AI Software Development Services | Brilworks";
const PAGE_DESCRIPTION =
  "Brilworks builds and ships agentic AI software — code assistants, developer tools, and autonomous agents engineered into real production codebases.";

export const metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: "Agentic AI Software Development | Brilworks",
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
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
    title: "Agentic AI Software Development | Brilworks",
    description: PAGE_DESCRIPTION,
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: PAGE_URL,
  },
  robots: { index: true, follow: true },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Agentic AI Software Development",
  provider: {
    "@type": "Organization",
    name: "Brilworks",
    url: "https://www.brilworks.com/",
  },
  areaServed: "Worldwide",
  description:
    "Brilworks builds and ships agentic AI software — code assistants, developer tools, and autonomous agents engineered into production codebases for engineering teams.",
  url: "https://www.brilworks.com/agentic-ai-software-development-services/",
  offers: {
    "@type": "OfferCatalog",
    name: "Agentic AI software development engagements",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Agentic AI code assistant rollout",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Agentic AI developer tools and platforms",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Autonomous workflow agents",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom agentic AI development services",
        },
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What's the difference between agentic AI software development and traditional AI/ML projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Traditional AI/ML projects produce a model and an inference endpoint. Agentic AI software development produces a system — a model plus tools, planning logic, evaluation, and integration into a real workflow. The deliverable is a working agent that does work, not a notebook with a benchmark score.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between an agentic AI code assistant and GitHub Copilot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Copilot autocompletes inside your editor. An agentic AI code assistant plans, reads multiple files, runs your tests, fixes its own mistakes, and ships PRs. The autonomy level is the difference.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with our model provider, or do we have to use yours?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We are model-agnostic. We've shipped projects on Anthropic Claude, OpenAI GPT-4, Amazon Bedrock, and Azure OpenAI. We will tell you the tradeoffs, but the choice is yours and your security team's.",
      },
    },
    {
      "@type": "Question",
      name: "How long does an enterprise agentic AI development engagement take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Discovery: 1–2 weeks. POC: 3–6 weeks. Production: 8–12 weeks. Most clients have a working agent in a sandboxed environment inside two months and a production deployment inside four.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer custom agentic AI development services for regulated industries?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We've worked under NDA in regulated environments and can deploy on Bedrock, Azure, or on-prem inference. The architectural patterns — HIPAA-aware deployment, human-in-the-loop checkpoints, audit trails — are well-trodden ground for our team.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work directly in our codebase?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — most of our agentic AI for developers work happens inside the client's repo, behind their auth, on their infrastructure. We sign NDAs and work to your security review.",
      },
    },
    {
      "@type": "Question",
      name: "How is pricing structured?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fixed-fee for discovery, POC, and production phases. Retainer for ongoing enablement and iteration. Time-and-materials available for novel scope.",
      },
    },
    {
      "@type": "Question",
      name: "What's the smallest engagement you take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A discovery sprint (1–2 weeks, fixed fee). Sometimes that's all a team needs — a workflow audit and a build-vs-buy recommendation — and we end the engagement there with a written deliverable.",
      },
    },
  ],
};

const page = () => {
  return (
    <>
      <script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateWebPageSchema({
            title: PAGE_TITLE,
            description: PAGE_DESCRIPTION,
            url: PAGE_URL,
            dateModified: LAST_UPDATED,
          }),
        }}
      />
      <script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <LastUpdated date={LAST_UPDATED} />
      <AgenticAISoftwareDevelopmentService />
    </>
  );
};

export default page;
