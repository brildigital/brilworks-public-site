import React from "react";
import AIMLService from "@/app/components/Services/AIMLService";
import LastUpdated from "@/app/components/Common/LastUpdated";
import { generateWebPageSchema } from "@/app/components/lib/schemaCode";

const LAST_UPDATED = "2026-04-23";

export const metadata = {
  title: "AI and ML Development Services | Production-Ready AI",
  description:
    "We build ML systems, generative AI, and computer vision that ship to production, drive measurable ROI, and scale with your data.",
  openGraph: {
    title: "AI and ML Development Services | Production-Ready AI",
    description:
      "We build ML systems, generative AI, and computer vision that ship to production, drive measurable ROI, and scale with your data.",
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
    title: "AI and ML Development Services | Production-Ready AI",
    description:
      "We build ML systems, generative AI, and computer vision that ship to production, drive measurable ROI, and scale with your data.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}ai-ml-development-services/`,
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
            title: "AI and ML Development Services | Production-Ready AI",
            description:
              "We build ML systems, generative AI, and computer vision that ship to production, drive measurable ROI, and scale with your data.",
            url: `${process.env.NEXT_PUBLIC_BASE_URL}ai-ml-development-services/`,
            dateModified: LAST_UPDATED,
          }),
        }}
      />
      <LastUpdated date={LAST_UPDATED} />
      <AIMLService />
    </>
  );
};

export default page;
