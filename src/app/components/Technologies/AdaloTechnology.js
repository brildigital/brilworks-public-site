"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { scrollEffect } from "../lib/commonFunction";
import HireTeamHeroSection from "../HireTeam/HireTeamHeroSection";
import HireTeamServices from "../HireTeam/HireTeamServices";

const AdaloFAQs = dynamic(() => import("./TechnologyFAQ"));
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

const AdaloTechnology = () => {
  const adaloDeveloperBenefits = [
    {
      title: "Experienced Team",
      imgSrc: "/images/v2/extensive-pool.svg",
      alt: "Expert Flutterflow Developers",
    },

    {
      title: "Dedicated Resources On-Demand",
      imgSrc: "/images/v2/dediated-resource.svg",
      alt: "Dedicated Resources On-Demand",
    },
    {
      title: "Fast Turnaround",
      imgSrc: "/images/v2/fast-turnaround-icon.svg",
      alt: "Fast Turnaround",
    },
    {
      title: "Client-Centric Approach",
      imgSrc: "/images/v2/client-centric-icon.svg",
      alt: "Client-Centric Approach",
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

  const adaloExperienceShowCase = [
    {
      value: "30+",
      description: "Successful Adalo Project Completed",
      color: "#E5F4FF",
    },
    {
      value: "10",
      description: "Team Member With Adalo Certification",
      color: "#FFE2E5",
    },
    {
      value: "98%",
      description: "Client Satisfation Rate",
      color: "#E9FFE2",
    },
    {
      value: "48-72",
      description: "Hours to Fill Roles",
      color: "#FFE8FC",
    },
    {
      value: "10+",
      description: " Industries Served with Adalo Solution",
      color: "#FCFFE3",
    },
    {
      value: "100%",
      description: "100% On-time Delivery",
      color: "#EAFFFD",
    },
    {
      value: "+4/-4",
      description: "Available in Your Timezone",
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
        technologyText="Hire Adalo Developers"
        title="Hire Adalo Developers to Build Your Dream App"
        description="Ready to build an app in less time? As a certified Adalo development company, we provide end-to-end Adalo development services, from design and development to ongoing maintenance and coaching."
        imageSrc="/images/v2/adalo-banner.webp"
      />
      <HireTeamServices bgClass="bg-themeLight" />
      <TechnologyDevelopers bgClass="bg-white" />
      <BenefitOfHiringDevelopers
        title="Why Choose Brilworks for Adalo Development?"
        description="Let's build groundbreaking solutions together. Brilworks offers expert Adalo developers and rigorous quality assurance to ensure your app is exceptional."
        cardData={adaloDeveloperBenefits}
      />
      <HireDevelopersInThreeSteps
        bgClass="bg-themeLight"
        title="Adalo Developers"
      />
      <HireDevelopersPricingPlan title="Adalo Developer" />
      <HomePageBlogs />
      <MultipleKeyValueWithBG
        title="What Makes a Top-Rated Adalo Development Company?"
        description="We understand the need for a stable, cost-effective tech infrastructure. Our Adalo experts deliver end-to-end cloud solutions to drive your business growth and innovation."
        keyValueData={adaloExperienceShowCase}
      />
      <SolutionContactForm />
      <AdaloFAQs />
    </>
  );
};

export default AdaloTechnology;
