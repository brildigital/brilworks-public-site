"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { scrollEffect } from "../lib/commonFunction";
import HireTeamHeroSection from "../HireTeam/HireTeamHeroSection";
import HireTeamServices from "../HireTeam/HireTeamServices";

const UIUXFAQs = dynamic(() => import("./TechnologyFAQ"));
const TechnologyDevelopers = dynamic(() => import("./TechnologyDevelopers"));
const SolutionContactForm = dynamic(() =>
  import("../Solution/SolutionContactForm")
);
const BenefitOfHiringDevelopers = dynamic(() =>
  import("./BenefitOfHiringDevelopers")
);
const HireDevelopersInThreeSteps = dynamic(() =>
  import("../HireTeam/HireDevelopersInThreeSteps")
);
const HireDevelopersPricingPlan = dynamic(() =>
  import("../HireTeam/HireDevelopersPricingPlan")
);
const HomePageBlogs = dynamic(() => import("../Homepage/HomePageBlogs"));

const UIUXTechnology = () => {
  useEffect(() => {
    scrollEffect();
    window.addEventListener("scroll", scrollEffect);

    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);

  return (
    <>
      <HireTeamHeroSection
        technologyText="Hire UI/UX Designer"
        title="Hire UI UX Designers to Create Exceptional User Experience"
        description="We design intuitive, appealing, aesthetic, and informative experiences that are easy for your customers to engage with, understand and enjoy. Unlock exponential growth with our UI UX design services today!"
        imageSrc="/images/v2/ui-ux-banner.webp"
      />
      <HireTeamServices />
      <TechnologyDevelopers bgClass="bg-white" />
      <BenefitOfHiringDevelopers bgClass="bg-sectionBG" />
      <HireDevelopersInThreeSteps
        title="UI/UX Designers"
        bgClass="bg-themeLight"
      />
      <HireDevelopersPricingPlan title="UI/UX Designer" />
      <HomePageBlogs />
      <SolutionContactForm />
      <UIUXFAQs />
    </>
  );
};

export default UIUXTechnology;
