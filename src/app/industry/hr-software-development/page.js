import HRSoftwareDevelopment from "@/app/components/Solution/HRSoftwareDevelopment";
import React from "react";

export const metadata = {
  title: "HR Software Development Services | Brilworks",
  description:
    "Empower your business with Brilworks' low-code/no-code solutions. Rapidly develop and deploy applications that drive efficiency and innovation, without extensive coding.",
  openGraph: {
    title: "HR Software Development Services",
    description:
      "Empower your business with Brilworks' low-code/no-code solutions. Rapidly develop and deploy applications that drive efficiency and innovation, without extensive coding.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}industy/hr-software-development/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/v2/hr-software-development.webp`,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "HR Software Development Services",
    description:
      "Empower your business with Brilworks' low-code/no-code solutions. Rapidly develop and deploy applications that drive efficiency and innovation, without extensive coding.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}industy/hr-software-development/`,
  },
};

const page = () => {
  return <HRSoftwareDevelopment />;
};

export default page;
