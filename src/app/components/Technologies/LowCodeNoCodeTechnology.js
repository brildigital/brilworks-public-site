"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { scrollEffect } from "../lib/commonFunction";
import Button from "../Common/Button";
import BenefitOfHiring from "./BenefitOfHiring";
import HireTeamHeroSection from "../HireTeam/HireTeamHeroSection";
import HireTeamServices from "../HireTeam/HireTeamServices";

const LowCodeNoCodeFAQs = dynamic(() => import("./TechnologyFAQ"));
const TechnologyDevelopers = dynamic(() => import("./TechnologyDevelopers"));
const WhyShouldHireDevelopers = dynamic(() =>
  import("./WhyShouldHireDevelopers")
);
const SolutionContactForm = dynamic(() =>
  import("../Solution/SolutionContactForm")
);
const BenefitOfHiringDevelopers = dynamic(() =>
  import("./BenefitOfHiringDevelopers")
);
const HireDevelopersInThreeSteps = dynamic(() =>
  import("../HireTeam/HireDevelopersInThreeSteps")
);
const MultipleKeyValueWithBG = dynamic(() =>
  import("../Common/MultipleKeyValueWithBG")
);
const HireDevelopersPricingPlan = dynamic(() =>
  import("../HireTeam/HireDevelopersPricingPlan")
);
const ThreeStepstoHireDeveloper = dynamic(() =>
  import("./ThreeStepstoHireDeveloper")
);
const HomePageBlogs = dynamic(() => import("../Homepage/HomePageBlogs"));

const LowCodeNoCodeTechnology = () => {
  const lowCodeDeveloperBenefits = [
    {
      title: "Dedicated Resources On-Demand",
      imgSrc: "/images/v2/dediated-resource.svg",
      alt: "Dedicated Resources On-Demand",
    },
    {
      title: "Expert Team",
      imgSrc: "/images/v2/extensive-pool.svg",
      alt: "Expert Lo Code Team",
    },
    {
      title: "Cost-Effective Solutions",
      imgSrc: "/images/v2/cost-efficient.svg",
      alt: "Fast Turnaround",
    },
    {
      title: "Custom Development",
      imgSrc: "/images/v2/dedicates-no-distraction.svg",
      alt: "Custom Development",
    },

    {
      title: "Continuous Support",
      imgSrc: "/images/v2/why-n-2.svg",
      alt: "Continuous Support",
    },
    {
      title: "Complete Autonomy",
      imgSrc: "/images/v2/complete-atonomy.png",
      alt: "Complete Autonomy",
    },
  ];

  const lowCodeExperienceShowCase = [
    {
      value: "15+",
      description: "Certified Developers",
      color: "#E5F4FF",
    },
    {
      value: "50+",
      description: "Project Completed",
      color: "#FFE2E5",
    },
    {
      value: "60%",
      description: "Saving in Salaries",
      color: "#E9FFE2",
    },
    {
      value: "48-72",
      description: "Hours to Fill Roles",
      color: "#FFE8FC",
    },
    {
      value: "98%",
      description: "Project Success Rate",
      color: "#F4ECFF",
    },
    {
      value: "+4/-4",
      description: "Available to Work in Your Timezone",
      color: "#FEF3E6",
    },
  ];

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
        technologyText="Hire Low Code Developers"
        title="Hire No Code Low Code Developers"
        description="As a top leading low code now code development agency, we specialize in delivering efficient, custom software solutions. Hire the best developers to build your app quickly using popular low code no code tools."
        imageSrc="/images/v2/low-code-banner.webp"
      />
      <HireTeamServices bgClass="bg-themeLight" />
      <TechnologyDevelopers bgClass="bg-white" />
      <BenefitOfHiringDevelopers
        title="Why Choose Brilworks for Low Code Development?"
        description="Let's build groundbreaking solutions together. Brilworks offers expert Low Code developers and rigorous quality assurance to ensure your app is exceptional."
        cardData={lowCodeDeveloperBenefits}
      />
      <HireDevelopersInThreeSteps
        bgClass="bg-themeLight"
        title="Low Code Developers"
      />
      <HireDevelopersPricingPlan title="Low Developer" />
      <HomePageBlogs />
      <MultipleKeyValueWithBG
        title="What Makes a Top-Rated Adalo Development Company?"
        description="We understand the need for a stable, cost-effective tech infrastructure. Our Adalo experts deliver end-to-end cloud solutions to drive your business growth and innovation."
        keyValueData={lowCodeExperienceShowCase}
      />
      <SolutionContactForm />
      <LowCodeNoCodeFAQs />
    </>
  );
};

export default LowCodeNoCodeTechnology;
