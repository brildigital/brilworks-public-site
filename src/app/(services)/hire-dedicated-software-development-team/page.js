import React from "react";
import DedicatedTeam from "@/app/components/Services/DedicatedTeam";
import LastUpdated from "@/app/components/Common/LastUpdated";
import { generateWebPageSchema } from "@/app/components/lib/schemaCode";

const LAST_UPDATED = "2026-04-23";

export const metadata = {
  title: "Hire Dedicated Software Development Team",
  description:
    "Scale your development capabilities with Brilworks' dedicated software teams. Access top-tier talent committed to your long-term success and seamlessly integrated with your business goals.",
  openGraph: {
    title: "Hire Dedicated Software Development Team",
    description:
      "Scale your development capabilities with Brilworks' dedicated software teams. Access top-tier talent committed to your long-term success and seamlessly integrated with your business goals.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}hire-dedicated-software-development-team/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Hire Dedicated Software Development Team",
    description:
      "Scale your development capabilities with Brilworks' dedicated software teams. Access top-tier talent committed to your long-term success and seamlessly integrated with your business goals.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}hire-dedicated-software-development-team/`,
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
            title: "Hire Dedicated Software Development Team",
            description:
              "Scale your development capabilities with Brilworks' dedicated software teams. Access top-tier talent committed to your long-term success and seamlessly integrated with your business goals.",
            url: `${process.env.NEXT_PUBLIC_BASE_URL}hire-dedicated-software-development-team/`,
            dateModified: LAST_UPDATED,
          }),
        }}
      />
      <LastUpdated date={LAST_UPDATED} />
      <DedicatedTeam />
    </>
  );
};

export default page;
