import React from "react";
import ReactJSDevelopmentService from "@/app/components/Services/ReactJSDevelopmentService";

export const metadata = {
  title: "React.js Development Services | Brilworks",
  description:
    "Boost your web app with expert React.js development services. Scalable, high-performance solutions tailored to your business needs. Hire an expert today.",
  openGraph: {
    title: "React.js Development Services | Brilworks",
    description:
      "Boost your web app with expert React.js development services. Scalable, high-performance solutions tailored to your business needs. Hire an expert today.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}reactjs-development-services/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/v2/reactjs-development-service-banner.webp`,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "React.js Development Services | Brilworks",
    description:
      "Boost your web app with expert React.js development services. Scalable, high-performance solutions tailored to your business needs. Hire an expert today.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}reactjs-development-services/`,
  },
};

const page = () => {
  return <ReactJSDevelopmentService />;
};

export default page;
