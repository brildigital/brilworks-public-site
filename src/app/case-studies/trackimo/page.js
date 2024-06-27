import React from "react";
import CaseStudyTrackimo from "@/app/components/Portfolio/CaseStudyTrackimo";

export const metadata = {
  title: "Trackimo - Portfolio | Real-Time Tracking | Brilworks Software",
  description:
    "Check out Brilworks's work for Trackimo. How we helped Trackimo to develop a software solution for all the GPS/GSM/Wifi-based tracking approaches.",
  openGraph: {
    title: "Trackimo - Portfolio | Real-Time Tracking | Brilworks Software",
    description:
      "Check out Brilworks's work for Trackimo. How we helped Trackimo to develop a software solution for all the GPS/GSM/Wifi-based tracking approaches.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}portfolio/trackimo/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}portfolio/trackimo/`,
  },
};

const page = () => {
  return <CaseStudyTrackimo />;
};

export default page;
