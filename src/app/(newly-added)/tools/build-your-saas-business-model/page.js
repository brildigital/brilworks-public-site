import React from "react";
import SaaSBusinessModelGenerator from "@/app/components/Tools/SaaSBusinessModelGenerator";

export const metadata = {
  title:
    "SaaS Business Model Generator | Create a Winning SaaS Strategy in Minutes",
  description:
    "Generate a complete SaaS business model tailored to your idea. Define pricing, target market, value proposition, and growth strategy instantly with our intelligent SaaS model generator.",
  openGraph: {
    title:
      "SaaS Business Model Generator | Create a Winning SaaS Strategy in Minutes",
    description:
      "Generate a complete SaaS business model tailored to your idea. Define pricing, target market, value proposition, and growth strategy instantly with our intelligent SaaS model generator.",

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
