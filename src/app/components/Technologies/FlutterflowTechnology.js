"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { scrollEffect } from "../lib/commonFunction";
import HireTeamHeroSection from "../HireTeam/HireTeamHeroSection";
import HireTeamServices from "../HireTeam/HireTeamServices";
import MultipleKeyValueWithBG from "../Common/MultipleKeyValueWithBG";

const FlutterflowFAQs = dynamic(() => import("./TechnologyFAQ"));
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

const FlutterflowTechnology = () => {
  const flutterflowExperienceShowCase = [
    {
      value: "20+",
      description: "Projects Completed",
      color: "#E5F4FF",
    },
    {
      value: "10+",
      description: "Flutterflow Experts",
      color: "#E9FFE2",
    },

    {
      value: "+4/-4",
      description: "Available in Your Timezone",
      color: "#FFE8FC",
    },
    {
      value: "48-72",
      description: "Hours to Fill Roles",
      color: "#FEF3E6",
    },
    {
      value: "98%",
      description: "Project Success Rate",
      color: "#FCFFE3",
    },
    {
      value: "100%",
      description: "100% client satisfation",
      color: "#EAFFFD",
    },
  ];

  const flutterflowDeveloperBenefits = [
    {
      title: "Expert Flutterflow Developers",
      imgSrc: "/images/v2/developer-icon.svg",
      alt: "Expert Flutterflow Developers",
    },
    {
      title: "Rapid App Development",
      imgSrc: "/images/v2/dedicates-no-distraction.svg",
      alt: "Rapid App Development",
    },
    {
      title: "Continuous Support",
      imgSrc: "/images/v2/why-n-2.svg",
      alt: "Continuous Support",
    },
    {
      title: "Dedicated Resources On-Demand",
      imgSrc: "/images/v2/dediated-resource.svg",
      alt: "Dedicated Resources On-Demand",
    },
    {
      title: "Complete Autonomy",
      imgSrc: "/images/v2/complete-atonomy.png",
      alt: "Complete Autonomy",
    },
    {
      title: "Scalable Projects",
      imgSrc: "/images/v2/scalable-project.svg",
      alt: "Scalable Projects",
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
        technologyText="Hire Flutterflow Developers"
        title="Hire Flutterflow Developer to Build Apps Faster"
        description="Looking for a mobile app developer to realize your vision? We connect you with experts in iOS, Android, and cross-platform app development."
        imageSrc="/images/v2/flutterflow-banner.webp"
      />
      <HireTeamServices bgClass="bg-themeLight" />
      <TechnologyDevelopers bgClass="bg-white" />
      <BenefitOfHiringDevelopers
        title="Why Choose Brilworks as your Flutterflow App Development Partner?"
        description="As a leading Flutterflow development partner, Brilworks helps you create stunning and functional mobile applications. Our team of skilled developers is dedicated to delivering exceptional results, ensuring your app meets the highest standards of quality and user experience."
        cardData={flutterflowDeveloperBenefits}
      />
      <HireDevelopersInThreeSteps
        bgClass="bg-themeLight"
        title="Flutterflow Developers"
      />
      <HireDevelopersPricingPlan title="Flutterflow Developer" />
      <HomePageBlogs />
      <MultipleKeyValueWithBG
        title="What Makes a Top-Rated Flutterflow Company?"
        description="We understand the need for a stable, cost-effective tech infrastructure. Our Flutter experts deliver end-to-end cloud solutions to drive your business growth and innovation."
        keyValueData={flutterflowExperienceShowCase}
      />
      <SolutionContactForm />
      <FlutterflowFAQs />
    </>
  );
};

export default FlutterflowTechnology;
