import MindSync from "@/app/components/Product/MindSync";
import React from "react";

export const metadata = {
  title: "Building a Connected Platform for Doctors and Patients | Brilworks",
  description:
    "We designed and built a two-sided healthcare platform that helps doctors manage patients, assign follow-ups, share exercises, and stay in touch through real-time chat. Patients can track progress, complete questionnaires, and stay connected with their doctor easily.",
  openGraph: {
    title: "Building a Connected Platform for Doctors and Patients | Brilworks",
    description:
      "We designed and built a two-sided healthcare platform that helps doctors manage patients, assign follow-ups, share exercises, and stay in touch through real-time chat. Patients can track progress, complete questionnaires, and stay connected with their doctor easily.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}product/exora/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    locale: "en-US",
    type: "website",
    images: [
      {
        url: "https://d11qzsb0ksp6iz.cloudfront.net/assets/exora-banner-1759756411673.webp",
      },
    ],
  },

  twitter: {
    title: "Building a Connected Platform for Doctors and Patients | Brilworks",
    description:
      "We designed and built a two-sided healthcare platform that helps doctors manage patients, assign follow-ups, share exercises, and stay in touch through real-time chat. Patients can track progress, complete questionnaires, and stay connected with their doctor easily.",
    card: "summary_large_image",
    images: [
      {
        url: "https://d11qzsb0ksp6iz.cloudfront.net/assets/exora-banner-1759756411673.webp",
      },
    ],
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}product/exora/`,
  },
};

const page = () => {
  return <MindSync />;
};

export default page;
