"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { scrollEffect } from "../lib/commonFunction";
import HireTeamHeroSection from "../HireTeam/HireTeamHeroSection";
import HireTeamServices from "../HireTeam/HireTeamServices";

const JavaFAQs = dynamic(() => import("./TechnologyFAQ"));
const TechnologyDevelopers = dynamic(() => import("./TechnologyDevelopers"));
const TechnologyCombination = dynamic(() => import("./TechnologyCombination"));
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
const JavaTechnology = () => {
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
        technologyText="Hire Java Developers"
        title="Hire Java Developer to Stay in Sync with Backend"
        description="Scale your application development team with our top-notch Java developers. Choose our Java development company to take your project to unforeseen heights of success."
        imageSrc="/images/v2/java-banner.webp"
      />
      <HireTeamServices />
      <TechnologyDevelopers />
      <BenefitOfHiringDevelopers />
      <TechnologyCombination />
      <HireDevelopersInThreeSteps title="Java Developers" />
      <HireDevelopersPricingPlan title="Java Developer" />
      <HomePageBlogs />
      <SolutionContactForm />
      <JavaFAQs />
    </>
  );
};

export default JavaTechnology;
