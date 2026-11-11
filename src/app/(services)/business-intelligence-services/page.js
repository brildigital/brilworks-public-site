import React from "react";
import BusinessDevelopmentService from "@/app/components/Services/BusinessDevelopmentService";
import LastUpdated from "@/app/components/Common/LastUpdated";
import { generateWebPageSchema } from "@/app/components/lib/schemaCode";
import { generateServiceSchemaFromMetadata } from "@/app/components/lib/schemaCode";

const LAST_UPDATED = "2026-04-23";

export const metadata = {
  title: "Business Development Services | Brilworks",
  description:
    "Unlock data-driven insights with Brilworks' business intelligence services. Transform raw data into actionable strategies for sustainable growth and competitive advantage.",
  openGraph: {
    title: "Business Development Services",
    description:
      "Unlock data-driven insights with Brilworks' business intelligence services. Transform raw data into actionable strategies for sustainable growth and competitive advantage.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}business-intelligence-services/`,
    siteName: "Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/v2/fi_18810346.svg`,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Business Development Services",
    description:
      "Unlock data-driven insights with Brilworks' business intelligence services. Transform raw data into actionable strategies for sustainable growth and competitive advantage.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}business-intelligence-services/`,
  },
};

const page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateServiceSchemaFromMetadata(metadata),
        }}
      />
      <script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateWebPageSchema({
            title: "Business Development Services | Brilworks",
            description:
              "Unlock data-driven insights with Brilworks' business intelligence services. Transform raw data into actionable strategies for sustainable growth and competitive advantage.",
            url: `${process.env.NEXT_PUBLIC_BASE_URL}business-intelligence-services/`,
            dateModified: LAST_UPDATED,
          }),
        }}
      />
      <LastUpdated date={LAST_UPDATED} />
      <div className="">
        <BusinessDevelopmentService />
      </div>
    </>
  );
};

export default page;
