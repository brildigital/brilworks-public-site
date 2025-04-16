"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { scrollEffect } from "../lib/commonFunction";
import HireTeamHeroSection from "../HireTeam/HireTeamHeroSection";
import HireTeamServices from "../HireTeam/HireTeamServices";

const BubbleIoFAQs = dynamic(() => import("./TechnologyFAQ"));
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
const MultipleKeyValueWithBG = dynamic(() =>
  import("../Common/MultipleKeyValueWithBG")
);
const HireDevelopersPricingPlan = dynamic(() =>
  import("../HireTeam/HireDevelopersPricingPlan")
);

const HomePageBlogs = dynamic(() => import("../Homepage/HomePageBlogs"));

const BubbleIoTechnology = () => {
  useEffect(() => {
    scrollEffect();
    window.addEventListener("scroll", scrollEffect);

    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);

  const bubbleDeveloperBenefits = [
    {
      title: "Expertise",
      imgSrc: "/images/v2/dediated-resource.svg",
      alt: "Expert Flutterflow Developers",
    },

    {
      title: "Dedicated Resources On-Demand",
      imgSrc: "/images/v2/extensive-pool.svg",
      alt: "Dedicated Resources On-Demand",
    },
    {
      title: "Quality Assurance",
      imgSrc: "/images/v2/regular-compliance.svg",
      alt: "Quality Assurance",
    },
    {
      title: "Rapid Development",
      imgSrc: "/images/v2/dedicates-no-distraction.svg",
      alt: "Rapid Development",
    },

    {
      title: "Support and Maintenance",
      imgSrc: "/images/v2/why-n-2.svg",
      alt: "Continuous Support",
    },
    {
      title: "Design and User Experience",
      imgSrc: "/images/v2/user-experience.svg",
      alt: "Design and User Experience",
    },
  ];

  const bubbleExperienceShowCase = [
    {
      value: "30+",
      description: "Experienced Bubble Developers",
      color: "#E5F4FF",
    },
    {
      value: "20+",
      description: "Enterprice-level Applications",
      color: "#FFE2E5",
    },
    {
      value: "98%",
      description: "Project Success Rate",
      color: "#E9FFE2",
    },
    {
      value: "48-72",
      description: "Hours to Fill Roles",
      color: "#FFE8FC",
    },
    {
      value: "100%",
      description: "100% On-time Delivery",
      color: "#FFE8FC",
    },
    {
      value: "+4/-4",
      description: "Available in Your Timezone",
      color: "#FEF3E6",
    },
  ];

  return (
    <>
      <HireTeamHeroSection
        technologyText="Hire Bubble Developers"
        title="Hire Bubble Developer to Build Apps Faster"
        description="Need top-notch Bubble developers to get your app off the ground faster? We house the best Bubble io developers to hire to help startups and businesses build industry-standard applications in less time."
        imageSrc="/images/v2/bubble-io-banner.webp"
      />
      <HireTeamServices bgClass="bg-themeLight" />
      <TechnologyDevelopers bgClass="bg-white" />
      <BenefitOfHiringDevelopers
        title="Why Choose Brilworks for Bubble Development?"
        description="Let's build groundbreaking solutions together. Brilworks offers expert Bubble developers and rigorous quality assurance to ensure your app is exceptional."
        cardData={bubbleDeveloperBenefits}
      />
      <HireDevelopersInThreeSteps
        bgClass="bg-themeLight"
        title="Bubble Developers"
      />
      <HireDevelopersPricingPlan title="Bubble Developer" />
      <HomePageBlogs />
      <MultipleKeyValueWithBG
        title="What Makes a Top-Rated Bubble Company?"
        description="We understand the need for a stable, cost-effective tech infrastructure. Our Bubble experts deliver end-to-end cloud solutions to drive your business growth and innovation."
        keyValueData={bubbleExperienceShowCase}
      />
      <SolutionContactForm />
      <BubbleIoFAQs />
    </>
  );
};

export default BubbleIoTechnology;
