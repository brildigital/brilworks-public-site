// import AIStudioContactForm from "@/app/components/AIStudio/AIStudioContactForm";
import "../../styles/ai-studio.scss";
import AIStudioHeroSection from "@/app/components/AIStudio/AIStudioHeroSection";
import { Benefits } from "@/app/components/AIStudio/Benefits";
import { CTA } from "@/app/components/AIStudio/CTA";
import { OnboardingSteps } from "@/app/components/AIStudio/OnboardingSteps";
import { Pricing } from "@/app/components/AIStudio/Pricing";
import { SocialProof } from "@/app/components/AIStudio/SocialProof";
import { WorkGallery } from "@/app/components/AIStudio/WorkGallery";
import React from "react";

const page = () => {
  return (
    <>
      <AIStudioHeroSection />
      <div className="ai-studio bg-cyber-navy text-white">
        <OnboardingSteps />
        <SocialProof />
        <WorkGallery />
        <Benefits />
        <Pricing />
        <CTA />
      </div>

      {/* <AIStudioContactForm /> */}
    </>
  );
};

export default page;
