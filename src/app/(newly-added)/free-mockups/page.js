import BenefitsSection from "@/app/components/FreeMockups/BenefitsSection";
import "../../styles/free-mockup-style.scss";
import FreeMockUpHeroSection from "@/app/components/FreeMockups/FreeMockUpHeroSection";
import React from "react";
import AuthoritySection from "@/app/components/FreeMockups/AuthoritySection";
import LeadFormSection from "@/app/components/FreeMockups/LeadFormSection";
import ExamplesOfFreeMockup from "@/app/components/FreeMockups/ExamplesOfFreeMockup";
import FAQSection from "@/app/components/MVPIn48Hours/FAQSection";

const page = () => {
  return (
    <div className="free-mockup bg-[#0d0f11] text-[#f8fafc]">
      <FreeMockUpHeroSection />
      <BenefitsSection />
      <AuthoritySection />
      <LeadFormSection />
      <ExamplesOfFreeMockup />
      <FAQSection />
    </div>
  );
};

export default page;
