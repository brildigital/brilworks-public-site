import HRSoftwareDevelopment from "@/app/components/Solution/HRSoftwareDevelopment";
import React from "react";

export const metadata = {
  title: "HR Software Development Services | Brilworks",
  description:
    "HR software development for people teams with applicant tracking onboarding performance management attendance benefits and analytics systems engineered for real operations.",
  openGraph: {
    title: "HR Software Development Services",
    description:
      "HR software development for people teams with applicant tracking onboarding performance management attendance benefits and analytics systems engineered for real operations.",
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
      "HR software development for people teams with applicant tracking onboarding performance management attendance benefits and analytics systems engineered for real operations.",
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
