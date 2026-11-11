import React from "react";
import ProductEngineeringDevService from "@/app/components/Services/ProductEngineeringDevService";
import LastUpdated from "@/app/components/Common/LastUpdated";
import { generateWebPageSchema } from "@/app/components/lib/schemaCode";
import { generateServiceSchemaFromMetadata } from "@/app/components/lib/schemaCode";

const LAST_UPDATED = "2026-04-23";

export const metadata = {
  title: "Product Engineering and Services | Brilworks",
  description:
    "Transform ideas into market-ready products with Brilworks' product engineering expertise. We deliver innovative, user-centric solutions that drive business growth and customer satisfaction.",
  openGraph: {
    title: "Product Engineering and Services",
    description:
      "Transform ideas into market-ready products with Brilworks' product engineering expertise. We deliver innovative, user-centric solutions that drive business growth and customer satisfaction.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}product-engineering-development-services/`,
    siteName: "Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/product-engineering-banner.webp`,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Product Engineering and Services",
    description:
      "Transform ideas into market-ready products with Brilworks' product engineering expertise. We deliver innovative, user-centric solutions that drive business growth and customer satisfaction.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}product-engineering-development-services/`,
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
            title: "Product Engineering and Services | Brilworks",
            description:
              "Transform ideas into market-ready products with Brilworks' product engineering expertise. We deliver innovative, user-centric solutions that drive business growth and customer satisfaction.",
            url: `${process.env.NEXT_PUBLIC_BASE_URL}product-engineering-development-services/`,
            dateModified: LAST_UPDATED,
          }),
        }}
      />
      <LastUpdated date={LAST_UPDATED} />
      <ProductEngineeringDevService />
    </>
  );
};

export default page;
