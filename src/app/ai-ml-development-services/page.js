import React from "react";
import AIMLService from "../components/Services/AIMLService";

export const metadata = {
  title: "AI and ML Services",
  description:
    "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.",
  openGraph: {
    title: "AI and ML Services",
    description:
      "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}ai-ml-development-services/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    images: [
      {
        url: `https://a.storyblok.com/f/219851/4500x1806/914b64af3d/aiml-banner.webp`,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "AI and ML Services",
    description:
      "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}ai-ml-development-services/`,
  },
};

const page = () => {
  return (
    <div className="!bg-colorWhite">
      <AIMLService />
    </div>
  );
};

export default page;
