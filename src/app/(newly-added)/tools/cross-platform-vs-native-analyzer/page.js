import React from "react";
import CrossPlatformVsNativeAnalyzer from "@/app/components/Tools/CrossPlatformVsNativeAnalyzer";

export const metadata = {
  title:
    "Cross-Platform vs Native Mobile App Analyzer | Personalized Development Recommendations",
  description:
    "Get data-driven insights for your mobile app development. Compare native, cross-platform, and hybrid approaches with personalized recommendations based on project requirements, budget, timeline, and performance needs.",
  openGraph: {
    title:
      "Cross-Platform vs Native Mobile App Analyzer | Personalized Development Recommendations",
    description:
      "Get data-driven insights for your mobile app development. Compare native, cross-platform, and hybrid approaches with personalized recommendations based on project requirements, budget, timeline, and performance needs.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}tools/cross-platform-vs-native-analyzer/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}tools/cross-platform-vs-native-analyzer/`,
  },
};
const page = () => {
  return <CrossPlatformVsNativeAnalyzer />;
};

export default page;
