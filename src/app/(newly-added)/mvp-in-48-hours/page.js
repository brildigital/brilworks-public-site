import AboutSection from "@/app/components/MVPIn48Hours/AboutSection";
import "../../styles/mvp-style.css";
import HeroSectionMVPIn48Hours from "@/app/components/MVPIn48Hours/HeroSectionMVPIn48Hours";
import OutcomesSection from "@/app/components/MVPIn48Hours/OutcomeSection";
import React from "react";
import ProcessSection from "@/app/components/MVPIn48Hours/ProcessSection";
import CalendarSection from "@/app/components/MVPIn48Hours/CalendarSection";
import FAQSection from "@/app/components/MVPIn48Hours/FAQSection";

export const metadata = {
  title: "Launch Your MVP in 48 Hours",
  description:
    "Need to validate your idea fast? Let Brilworks help you launch your MVP in just 48 hours with a free one-on-one walkthrough. Prototype, scope, cost estimate & roadmap included.",
  openGraph: {
    title: "Launch Your MVP in 48 Hours",
    description:
      "Need to validate your idea fast? Let Brilworks help you launch your MVP in just 48 hours with a free one-on-one walkthrough. Prototype, scope, cost estimate & roadmap included.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}mvp-in-48-hours/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}mvp-in-48-hours/`,
  },
};
const page = () => {
  return (
    <div className="bg-[#0b111e] text-[#f8fafc] antialiased">
      <HeroSectionMVPIn48Hours />
      <ProcessSection />
      <OutcomesSection />
      <AboutSection />
      <CalendarSection />
      <FAQSection />
    </div>
  );
};

export default page;
