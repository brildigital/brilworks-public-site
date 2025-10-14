import React from "react";
import StartupTechReadinessQuiz from "@/app/components/Tools/StartupTechReadinessQuiz";

export const metadata = {
  title: "Startup Tech Readiness Quiz | Find Out If Your Startup Is Tech-Ready",
  description:
    "Take our quick Startup Tech Readiness Quiz to assess how prepared your startup is for product development and scaling. Discover your strengths, uncover gaps, and get tailored next steps to build smarter.",
  openGraph: {
    title:
      "Startup Tech Readiness Quiz | Find Out If Your Startup Is Tech-Ready",
    description:
      "Take our quick Startup Tech Readiness Quiz to assess how prepared your startup is for product development and scaling. Discover your strengths, uncover gaps, and get tailored next steps to build smarter.",

    url: `${process.env.NEXT_PUBLIC_BASE_URL}tools/startup-tech-readiness-quiz/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}tools/startup-tech-readiness-quiz/`,
  },
};
const page = () => {
  return <StartupTechReadinessQuiz />;
};

export default page;
