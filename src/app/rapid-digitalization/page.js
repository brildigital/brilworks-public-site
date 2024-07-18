import React from "react";
import RapidDigitization from "../components/RapidDigitization";

export const metadata = {
  title: "Rapid Digitalization",
  description:
    "Accelerate your digital transformation with Brilworks' rapid digitalization services. Modernize your business processes and stay ahead in the digital age with our expert guidance.",
  openGraph: {
    title: "Rapid Digitalization",
    description:
      "Accelerate your digital transformation with Brilworks' rapid digitalization services. Modernize your business processes and stay ahead in the digital age with our expert guidance.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}rapid-digitalization/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Rapid Digitalization",
    description:
      "Accelerate your digital transformation with Brilworks' rapid digitalization services. Modernize your business processes and stay ahead in the digital age with our expert guidance.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}rapid-digitalization/`,
  },
};

const page = () => {
  return (
    <div className="!bg-colorWhite">
      <RapidDigitization />
    </div>
  );
};

export default page;
