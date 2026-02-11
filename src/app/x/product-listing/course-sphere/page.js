import React from "react";
import CourseSphere from "@/app/components/Product/CourseSphere";

export const metadata = {
  title:
    "CourseSphere - Learn Without Limits | Online Learning Platform | Brilworks",
  description:
    "Discover thousands of courses from expert instructors. Build real projects, gain certifications, and grow your career with guided learning paths. Join 50K+ learners on CourseSphere.",
  openGraph: {
    title:
      "CourseSphere - Learn Without Limits | Online Learning Platform | Brilworks",
    description:
      "Discover thousands of courses from expert instructors. Build real projects, gain certifications, and grow your career with guided learning paths. Join 50K+ learners on CourseSphere.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}x/product-listing/course-sphere/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    locale: "en-US",
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/assets/course-sphere-1770795626948.webp`,
      },
    ],
  },

  twitter: {
    title:
      "CourseSphere - Learn Without Limits | Online Learning Platform | Brilworks",
    description:
      "Discover thousands of courses from expert instructors. Build real projects, gain certifications, and grow your career with guided learning paths.",
    card: "summary_large_image",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/assets/course-sphere-1770795626948.webp`,
      },
    ],
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}x/product-listing/course-sphere/`,
  },
};

const page = () => {
  return <CourseSphere />;
};

export default page;
