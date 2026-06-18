import React from "react";
import AIReadinessAudit from "./AIReadinessAudit";

export const metadata = {
  title:
    "AI Readiness Audit | Assess Your AI Readiness Score | Brilworks",
  description:
    "Free AI readiness audit. Assess how prepared your business is for AI adoption. Answer 10 questions to receive your AI readiness score and practical recommendations.",
  openGraph: {
    title: "AI Readiness Audit | Assess Your AI Readiness Score | Brilworks",
    description:
      "Assess how prepared your business is for AI adoption. Get your AI readiness score in under 2 minutes.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}data-engineering-tools/ai-readiness-audit/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "AI Readiness Audit | Brilworks",
    description:
      "Assess how prepared your business is for AI adoption. Get your AI readiness score in under 2 minutes.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}data-engineering-tools/ai-readiness-audit/`,
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "AI Readiness Audit",
    applicationCategory: "BusinessApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    provider: {
      "@type": "Organization",
      name: "Brilworks",
      url: "https://www.brilworks.com",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is an AI readiness score?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An AI readiness score measures how prepared an organization is to adopt AI based on factors such as data quality, technology, governance, and business processes. It helps identify strengths, weaknesses, and areas that need improvement before launching AI initiatives.",
        },
      },
      {
        "@type": "Question",
        name: "What does AI readiness mean?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI readiness refers to an organization's ability to successfully implement and scale AI solutions. It includes having reliable data, the right technology, skilled teams, and business processes that support AI adoption.",
        },
      },
      {
        "@type": "Question",
        name: "How accurate is this AI readiness audit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The audit provides an assessment based on your responses and accepted AI readiness principles. While it cannot replace a detailed consulting engagement, it offers a practical benchmark for evaluating your current level of preparedness.",
        },
      },
      {
        "@type": "Question",
        name: "Why is AI readiness important?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Organizations that assess their readiness before investing in AI are more likely to avoid costly implementation challenges. Understanding existing gaps helps prioritize improvements and increases the likelihood of successful AI adoption.",
        },
      },
      {
        "@type": "Question",
        name: "How can I improve my AI readiness score?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Improving your score typically involves strengthening data quality, integrating disconnected systems, establishing governance policies, modernizing infrastructure, and identifying business use cases where AI can deliver measurable value.",
        },
      },
    ],
  },
];

const page = () => {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <AIReadinessAudit />
    </>
  );
};

export default page;
