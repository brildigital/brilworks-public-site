import React from "react";
import PerformanceBenchmarkingTool from "@/app/components/Tools/PerformanceBenchmarkingTool";

export const metadata = {
  title: "Performance Benchmarking Tool | Measure & Optimize App Speed",
  description:
    "Analyze your app’s speed, scalability, and efficiency with our Performance Benchmarking Tool. Identify bottlenecks, compare metrics, and optimize for superior user experience.",
  openGraph: {
    title: "Performance Benchmarking Tool | Measure & Optimize App Speed",
    description:
      "Analyze your app’s speed, scalability, and efficiency with our Performance Benchmarking Tool. Identify bottlenecks, compare metrics, and optimize for superior user experience.",

    url: `${process.env.NEXT_PUBLIC_BASE_URL}tools/performance-benchmarking-tool/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}tools/performance-benchmarking-tool/`,
  },
};
const page = () => {
  return <PerformanceBenchmarkingTool />;
};

export default page;
