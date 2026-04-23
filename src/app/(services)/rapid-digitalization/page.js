import React from "react";
import RapidDigitalization from "@/app/components/Services/RapidDigitalization";
import LastUpdated from "@/app/components/Common/LastUpdated";
import { generateWebPageSchema } from "@/app/components/lib/schemaCode";

const LAST_UPDATED = "2026-04-23";

export const metadata = {
  title: "Rapid Digitalization | Brilworks",
  description:
    "Accelerate your digital transformation with Brilworks' rapid digitalization services. Modernize your business processes and stay ahead in the digital age with our expert guidance.",
  openGraph: {
    title: "Rapid Digitalization",
    description:
      "Accelerate your digital transformation with Brilworks' rapid digitalization services. Modernize your business processes and stay ahead in the digital age with our expert guidance.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}rapid-digitalization/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Rapid Digitalization",
    description:
      "Accelerate your digital transformation with Brilworks' rapid digitalization services. Modernize your business processes and stay ahead in the digital age with our expert guidance.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}rapid-digitalization/`,
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
            title: "Rapid Digitalization | Brilworks",
            description:
              "Accelerate your digital transformation with Brilworks' rapid digitalization services. Modernize your business processes and stay ahead in the digital age with our expert guidance.",
            url: `${process.env.NEXT_PUBLIC_BASE_URL}rapid-digitalization/`,
            dateModified: LAST_UPDATED,
          }),
        }}
      />
      <LastUpdated date={LAST_UPDATED} />
      <RapidDigitalization />
    </>
  );
};

export default page;
