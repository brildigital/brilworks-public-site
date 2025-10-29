import React from "react";
import PerformanceBenchmarkingTool from "@/app/components/Tools/PerformanceBenchmarkingTool";

export const metadata = {
  title:
    "Performance Benchmarking Tool | Optimize App Speed & Compare Industry Standards",
  description:
    "Run a complete performance benchmarking test for your web, mobile, or SaaS app. Analyze load time, API performance, throughput, and resource utilization to optimize speed, reduce bottlenecks, and deliver faster user experiences.",
  openGraph: {
    title:
      "Performance Benchmarking Tool | Optimize App Speed & Compare Industry Standards",
    description:
      "Run a complete performance benchmarking test for your web, mobile, or SaaS app. Analyze load time, API performance, throughput, and resource utilization to optimize speed, reduce bottlenecks, and deliver faster user experiences.",

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
