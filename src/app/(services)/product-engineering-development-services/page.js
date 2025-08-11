import React from "react";
import ProductEngineeringDevService from "@/app/components/Services/ProductEngineeringDevService";

export const metadata = {
  title: "Product Engineering and Services | Brilworks",
  description:
    "Transform ideas into market-ready products with Brilworks' product engineering expertise. We deliver innovative, user-centric solutions that drive business growth and customer satisfaction.",
  openGraph: {
    title: "Product Engineering and Services",
    description:
      "Transform ideas into market-ready products with Brilworks' product engineering expertise. We deliver innovative, user-centric solutions that drive business growth and customer satisfaction.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}product-engineering-development-services/`,
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
    title: "Product Engineering and Services",
    description:
      "Transform ideas into market-ready products with Brilworks' product engineering expertise. We deliver innovative, user-centric solutions that drive business growth and customer satisfaction.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}product-engineering-development-services/`,
  },
};

const page = () => {
  return (
    <div className="!bg-colorWhite">
      <ProductEngineeringDevService />
    </div>
  );
};

export default page;
