import React from "react";
import StartupTechReadinessQuiz from "@/app/components/Tools/StartupTechReadinessQuiz";

export const metadata = {
  title:
    "Startup Technology Readiness Assessment | Tech Stack Evaluation Tool & TRL Quiz",
  description:
    "Free startup technology readiness assessment tool. Evaluate your tech stack maturity, TRL score & infrastructure. Get actionable recommendations in minutes.",
  openGraph: {
    title:
      "Startup Technology Readiness Assessment | Tech Stack Evaluation Tool & TRL Quiz",
    description:
      "Free startup technology readiness assessment tool. Evaluate your tech stack maturity, TRL score & infrastructure. Get actionable recommendations in minutes.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}tools/tech-readiness-assessment-tool/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}tools/tech-readiness-assessment-tool/`,
  },
};
const page = () => {
  return <StartupTechReadinessQuiz />;
};

export default page;
