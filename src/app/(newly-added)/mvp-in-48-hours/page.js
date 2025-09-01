import AboutSection from "@/app/components/MVPIn48Hours/AboutSection";
import "../../styles/mvp-style.scss";
import HeroSectionMVPIn48Hours from "@/app/components/MVPIn48Hours/HeroSectionMVPIn48Hours";
import OutcomesSection from "@/app/components/MVPIn48Hours/OutcomeSection";
import React from "react";
import ProcessSection from "@/app/components/MVPIn48Hours/ProcessSection";
import CalendarSection from "@/app/components/MVPIn48Hours/CalendarSection";

const page = () => {
  return (
    <div className="bg-[#0b111e] text-[#f8fafc] antialiased">
      <HeroSectionMVPIn48Hours />
      <OutcomesSection />
      <AboutSection />
      <CalendarSection />
      <ProcessSection />
    </div>
  );
};

export default page;
