import React from "react";
import MVPFeatureSelectorQuiz from "@/app/components/Tools/MVPFeatureSelectorQuiz";

export const metadata = {
  title:
    "MVP Feature Selector Quiz – Choose the Right Features for Your Launch",
  description:
    "Take this quick quiz to identify the must-have features for your Minimum Viable Product. Get a tailored feature list to launch faster and save development costs.",
  openGraph: {
    title:
      "MVP Feature Selector Quiz – Choose the Right Features for Your Launch",
    description:
      "Take this quick quiz to identify the must-have features for your Minimum Viable Product. Get a tailored feature list to launch faster and save development costs.",

    url: `${process.env.NEXT_PUBLIC_BASE_URL}mvp-feature-selector-quiz/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}mvp-feature-selector-quiz/`,
  },
};
const page = () => {
  return <MVPFeatureSelectorQuiz />;
};

export default page;
