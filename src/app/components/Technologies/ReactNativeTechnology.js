"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { scrollEffect } from "../lib/commonFunction";
import HireTeamHeroSection from "../HireTeam/HireTeamHeroSection";
import HireTeamServices from "../HireTeam/HireTeamServices";

const ReactNativeFAQs = dynamic(() => import("./TechnologyFAQ"));
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

const ReactNativeTechnology = () => {
  useEffect(() => {
    scrollEffect();
    window.addEventListener("scroll", scrollEffect);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);
  return (
    <>
      <HireTeamHeroSection
        technologyText="Hire React Native Developers"
        title="Hire React Native Developers to Build Stunning Mobile Applications"
        description="Our team is expert in handling the most complex of projects. We offer a scalable, responsive and flexible approach toward React Native mobile development that’s unmatched in the industry."
        imageSrc="/images/v2/react-native-banner.webp"
      />
      <HireTeamServices />
      <TechnologyDevelopers />
      <BenefitOfHiringDevelopers />
      <HireDevelopersInThreeSteps
        bgClass="bg-themeLight"
        title="React Native Developers"
      />
      <HireDevelopersPricingPlan title="React Native Developer" />
      <HomePageBlogs />
      <SolutionContactForm />
      <ReactNativeFAQs />
    </>
  );
};

export default ReactNativeTechnology;
