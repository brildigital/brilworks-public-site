import React from "react";
import AIMLService from "../components/Services/AIMLService";

export const metadata = {
  title: "AI and ML Services | Brilworks",
  description:
    "Revolutionize your business with Brilworks' AI/ML development services. Harness the power of artificial intelligence and machine learning for data-driven growth and innovation.",
  openGraph: {
    title: "AI and ML Services",
    description:
      "Revolutionize your business with Brilworks' AI/ML development services. Harness the power of artificial intelligence and machine learning for data-driven growth and innovation.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}ai-ml-development-services/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    images: [
      {
        url: `/images/v2/ai-ml-service-banner.webp`,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "AI and ML Services",
    description:
      "Revolutionize your business with Brilworks' AI/ML development services. Harness the power of artificial intelligence and machine learning for data-driven growth and innovation.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}ai-ml-development-services/`,
  },
};

const page = () => {
  return <AIMLService />;
};

export default page;
