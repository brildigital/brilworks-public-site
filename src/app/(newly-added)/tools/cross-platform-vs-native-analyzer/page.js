import React from "react";
import CrossPlatformVsNativeAnalyzer from "@/app/components/Tools/CrossPlatformVsNativeAnalyzer";

export const metadata = {
  title: "Cross-Platform vs Native Analyzer",
  description:
    "Compare cross-platform and native development instantly. Analyze cost, performance, and timeline to choose the best mobile app strategy for your project.",
  openGraph: {
    title: "Cross-Platform vs Native Analyzer",
    description:
      "Compare cross-platform and native development instantly. Analyze cost, performance, and timeline to choose the best mobile app strategy for your project.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}cross-platform-vs-native-analyzer/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}cross-platform-vs-native-analyzer/`,
  },
};
const page = () => {
  return <CrossPlatformVsNativeAnalyzer />;
};

export default page;
