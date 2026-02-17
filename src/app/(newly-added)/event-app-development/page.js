import React from "react";
import dynamic from "next/dynamic";
import EventAppHeroSection from "@/app/components/Solution/EventAppDev/EventAppHeroSection";
import EventAppServices from "@/app/components/Solution/EventAppDev/EventAppServices";

const TypeOfApps = dynamic(() =>
  import("@/app/components/Solution/EventAppDev/TypeOfApps")
);
const Features = dynamic(() =>
  import("@/app/components/Solution/EventAppDev/Features")
);

const Analytics = dynamic(() =>
  import("@/app/components/Solution/EventAppDev/Analytics")
);
const AiFeatureDemo = dynamic(() =>
  import("@/app/components/Solution/EventAppDev/AiFeatureDemo")
);
const WhyChoose = dynamic(() =>
  import("@/app/components/Solution/EventAppDev/WhyChoose")
);
const Process = dynamic(() =>
  import("@/app/components/Solution/EventAppDev/Process")
);
const Faq = dynamic(() => import("@/app/components/Solution/EventAppDev/Faq"));

export const metadata = {
  title: "Event App Development Company | Custom Event & Conference Apps",
  description:
    "Build a custom event app that boosts registrations, engagement, and sponsor ROI. Brilworks is an event app development company helping enterprises and global brands design and develop secure, scalable event and conference apps with real-time analytics and integrations.",
  openGraph: {
    title: "Event App Development Company | Custom Event & Conference Apps",
    description:
      "Build a custom event app that boosts registrations, engagement, and sponsor ROI. Brilworks is an event app development company helping enterprises and global brands design and develop secure, scalable event and conference apps with real-time analytics and integrations.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}event-app-development`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    title: "Event App Development Company | Custom Event & Conference Apps",
    description:
      "Build a custom event app that boosts registrations, engagement, and sponsor ROI. Brilworks is an event app development company helping enterprises and global brands design and develop secure, scalable event and conference apps with real-time analytics and integrations.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}event-app-development`,
  },
};

const page = () => {
  return (
    <div>
      <EventAppHeroSection />
      <EventAppServices />
      <TypeOfApps />
      <Features />
      <Analytics />
      <AiFeatureDemo />
      <WhyChoose />
      <Process />
      <Faq />
    </div>
  );
};

export default page;
