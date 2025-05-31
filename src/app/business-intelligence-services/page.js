import React from "react";
import BusinessDevelopmentService from "../components/Services/BusinessDevelopmentService";

export const metadata = {
  title: "Business Development Services | Brilworks",
  description:
    "Unlock data-driven insights with Brilworks' business intelligence services. Transform raw data into actionable strategies for sustainable growth and competitive advantage.",
  openGraph: {
    title: "Business Development Services",
    description:
      "Unlock data-driven insights with Brilworks' business intelligence services. Transform raw data into actionable strategies for sustainable growth and competitive advantage.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}business-intelligence-services/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    images: [
      {
        url: "/images/v2/fi_18810346.svg",
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
    <div className="!bg-colorWhite">
      <BusinessDevelopmentService />
    </div>
  );
};

export default page;
