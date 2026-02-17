import React from "react";
import SaaSBusinessModelGenerator from "@/app/components/Tools/SaaSBusinessModelGenerator";

export const metadata = {
  title:
    "SaaS Business Model Generator | Create a Winning SaaS Strategy in Minutes",
  description:
    "Use our free SaaS business model generator to turn your app idea into a complete business plan. Get AI-powered insights on pricing, target audience, and growth strategy in minutes.",
  openGraph: {
    title:
      "SaaS Business Model Generator | Create a Winning SaaS Strategy in Minutes",
    description:
      "Use our free SaaS business model generator to turn your app idea into a complete business plan. Get AI-powered insights on pricing, target audience, and growth strategy in minutes.",

    url: `${process.env.NEXT_PUBLIC_BASE_URL}tools/build-your-saas-business-model/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}tools/build-your-saas-business-model/`,
  },
};
const page = () => {
  return <SaaSBusinessModelGenerator />;
};

export default page;
