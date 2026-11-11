import React from "react";
import DevOpsService from "@/app/components/Services/DevOpsService";
import LastUpdated from "@/app/components/Common/LastUpdated";
import { generateWebPageSchema } from "@/app/components/lib/schemaCode";
import { generateServiceSchemaFromMetadata } from "@/app/components/lib/schemaCode";

const LAST_UPDATED = "2026-04-23";

export const metadata = {
  title: "DevOps Consulting Services | Brilworks",
  description:
    "Accelerate your software delivery with Brilworks' DevOps consulting. Streamline processes, enhance collaboration, and achieve continuous improvement for lasting success.",
  openGraph: {
    title: "DevOps Consulting Services",
    description:
      "Accelerate your software delivery with Brilworks' DevOps consulting. Streamline processes, enhance collaboration, and achieve continuous improvement for lasting success.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}devops-consulting-services/`,
    siteName: "Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/DevOps-banner.webp`,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "DevOps Consulting Services",
    description:
      "Accelerate your software delivery with Brilworks' DevOps consulting. Streamline processes, enhance collaboration, and achieve continuous improvement for lasting success.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}devops-consulting-services/`,
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
            title: "DevOps Consulting Services | Brilworks",
            description:
              "Accelerate your software delivery with Brilworks' DevOps consulting. Streamline processes, enhance collaboration, and achieve continuous improvement for lasting success.",
            url: `${process.env.NEXT_PUBLIC_BASE_URL}devops-consulting-services/`,
            dateModified: LAST_UPDATED,
          }),
        }}
      />
      <LastUpdated date={LAST_UPDATED} />
      <DevOpsService />
    </>
  );
};

export default page;
