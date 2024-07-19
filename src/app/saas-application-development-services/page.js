import React from "react";
import ProductEngineeringDevService from "../components/Services/ProductEngineeringDevService";
import SaaSApplicationDevelopmentService from "../components/Services/SaaSApplicationDevelopmentService";

export const metadata = {
  title: "Brilworks | Saas Application Development Services",
  description:
    "Launch powerful SaaS solutions with Brilworks' expert development services. Create scalable, user-centric applications that drive recurring revenue and customer satisfaction.",
  openGraph: {
    title: "Saas Application Development Services",
    description:
      "Launch powerful SaaS solutions with Brilworks' expert development services. Create scalable, user-centric applications that drive recurring revenue and customer satisfaction.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}saas-application-development-services/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/product-engineering-banner.webp`,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Saas Application Development Services",
    description:
      "Launch powerful SaaS solutions with Brilworks' expert development services. Create scalable, user-centric applications that drive recurring revenue and customer satisfaction.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}saas-application-development-services/`,
  },
};

const page = () => {
  return (
    <div className="!bg-colorWhite">
      <SaaSApplicationDevelopmentService />
    </div>
  );
};

export default page;
