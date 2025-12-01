import ManufaturingSoftwareDevelopmentService from "@/app/components/Solution/ManufaturingSoftwareDevelopmentService";
import React from "react";

export const metadata = {
  title: "Manufacturing Software Development Services by Brilworks | Brilworks",
  description:
    "Custom manufacturing software for SMBs: order management, inventory, shop floor apps, MES, and warehouse tools, built by a team with deep production-domain experience.",
  openGraph: {
    title: "Manufacturing Software Development Services by Brilworks",
    description:
      "Custom manufacturing software for SMBs: order management, inventory, shop floor apps, MES, and warehouse tools, built by a team with deep production-domain experience.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}industy/manufacturing-software-development-services/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/v2/manufacturing-software-development-services.webp`,
      },
    ],
    locale: "en-US",
    type: "article",
  },
  twitter: {
    title: "Manufacturing Software Development Services by Brilworks",
    description:
      "Custom manufacturing software for SMBs: order management, inventory, shop floor apps, MES, and warehouse tools, built by a team with deep production-domain experience.",

    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}industy/manufacturing-software-development-services/`,
  },
};

const page = () => {
  return <ManufaturingSoftwareDevelopmentService />;
};

export default page;
