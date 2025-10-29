import React from "react";
import LegacySystemModernizationReadiness from "@/app/components/Tools/LegacySystemModernizationReadiness";

export const metadata = {
  title:
    "Legacy System Modernization Readiness | Enterprise Modernization Assessment Tool",
  description:
    "Evaluate your legacy infrastructure with our modernization readiness tool. Identify technical debt, assess risks, compare modernization strategies, and plan a digital transformation with clear ROI projections.",
  openGraph: {
    title:
      "Legacy System Modernization Readiness | Enterprise Modernization Assessment Tool",
    description:
      "Evaluate your legacy infrastructure with our modernization readiness tool. Identify technical debt, assess risks, compare modernization strategies, and plan a digital transformation with clear ROI projections.",

    url: `${process.env.NEXT_PUBLIC_BASE_URL}tools/legacy-system-modernization-readiness/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}tools/legacy-system-modernization-readiness/`,
  },
};
const page = () => {
  return <LegacySystemModernizationReadiness />;
};

export default page;
