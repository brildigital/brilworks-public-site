import React from "react";
import GoToMarketTimelinePlanner from "@/app/components/Tools/GoToMarketTimelinePlanner";

export const metadata = {
  title: "Go-to-Market Timeline Planner | AI-Powered Product Launch Tool",
  description:
    "Plan your product launch with precision using our Go-to-Market Timeline Planner. Generate optimized timelines, track milestones, and avoid delays with AI-powered insights.",
  openGraph: {
    title: "Go-to-Market Timeline Planner | AI-Powered Product Launch Tool",
    description:
      "Plan your product launch with precision using our Go-to-Market Timeline Planner. Generate optimized timelines, track milestones, and avoid delays with AI-powered insights.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}tools/go-to-market-timeline-planner/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}tools/go-to-market-timeline-planner/`,
  },
};
const page = () => {
  return <GoToMarketTimelinePlanner />;
};

export default page;
