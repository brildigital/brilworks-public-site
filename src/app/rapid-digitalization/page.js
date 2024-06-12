import React from "react";
import RapidDigitization from "../components/RapidDigitization";

export const metadata = {
  title: "Rapid Digitalization",
  description:
    "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.",
  openGraph: {
    title: "Rapid Digitalization",
    description:
      "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}rapid-digitalization/`,
    siteName: "AWS Consulting Partner | Gen AI | Product Engineering",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Rapid Digitalization",
    description:
      "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.",
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
