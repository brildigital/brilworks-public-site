import React from "react";
import MVPLaunchTimelineEstimator from "@/app/components/Tools/MVPLaunchTimelineEstimator";

export const metadata = {
  title: "MVP Launch Timeline Estimator | Brilworks",
  description:
    "Estimate how long it will take to build and launch your MVP. Get quick, data-driven development timelines to plan your startup’s next steps.",
  openGraph: {
    title: "MVP Launch Timeline Estimator | Brilworks",
    description:
      "Estimate how long it will take to build and launch your MVP. Get quick, data-driven development timelines to plan your startup’s next steps.",

    url: `${process.env.NEXT_PUBLIC_BASE_URL}mvp-launch-timeline-estimator/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}mvp-launch-timeline-estimator/`,
  },
};

const page = () => {
  return <MVPLaunchTimelineEstimator />;
};

export default page;
