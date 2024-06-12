import React from "react";
import DigitalExperienceService from "../components/Services/DigitalExperienceService";

export const metadata = {
  title: "Digital Experience Services",
  description:
    "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.",
  openGraph: {
    title: "Digital Experience Services",
    description:
      "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}digital-experience-services/`,
    siteName: "AWS Consulting Partner | Gen AI | Product Engineering",
    images: [
      {
        url: "https://a.storyblok.com/f/219851/4500x2487/ee4ef3dd60/digital-experience-banner.webp",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Digital Experience Services",
    description:
      "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}digital-experience-services/`,
  },
};

const page = () => {
  return (
    <div className="!bg-colorWhite">
      <DigitalExperienceService />
    </div>
  );
};

export default page;
