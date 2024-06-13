import React from "react";
import BusinessDevelopmentService from "../components/Services/BusinessDevelopmentService";

export const metadata = {
  title: "Business Development Services",
  description:
    "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.",
  openGraph: {
    title: "Business Development Services",
    description:
      "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}business-intelligence-services/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    images: [
      {
        url: "https://a.storyblok.com/f/219851/1440x796/0d87546e9e/business-dev-banner.webp",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Business Development Services",
    description:
      "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.",
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
