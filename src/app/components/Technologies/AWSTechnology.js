"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { scrollEffect } from "../lib/commonFunction";
import HireTeamHeroSection from "../HireTeam/HireTeamHeroSection";
import HireTeamServices from "../HireTeam/HireTeamServices";

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
const AWSFAQs = dynamic(() => import("./TechnologyFAQ"));

const AWSTechnology = () => {
  useEffect(() => {
    scrollEffect();
    window.addEventListener("scroll", scrollEffect);

    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);

  const awsExperienceShowCase = [
    {
      value: "50+",
      description: "Projects Completed",
      color: "#E5F4FF",
    },
    {
      value: "60%",
      description: "Savings In Salaries",
      color: "#FFE2E5",
    },

    {
      value: "10+",
      description: "AWS Experts Onboard",
      color: "#E9FFE2",
    },
    {
      value: "+4/-4",
      description: "Available in Your Timezone",
      color: "#FFE8FC",
    },
    {
      value: "48-72",
      description: "Hours to Fill Most Roles",
      color: "#F4ECFF",
    },
    {
      value: "98%",
      description: "Project Success Rate",
      color: "#FCFFE3",
    },
    {
      value: "90%",
      description: "Employee Retention Rate",
      color: "#EAFFFD",
    },
    {
      value: "80%",
      description: "Customer Satisfaction Score",
      color: "#FEF3E6",
    },
  ];

  return (
    <>
      <HireTeamHeroSection
        technologyText="Hire AWS Developer"
        title="Hire AWS Developers for Your Cloud-Adoption Needs"
        description="Our expertise in AWS development services has empowered us to bring the best cloud solutions to your organization’s infrastructure without the cost and hassle of having to build it yourself."
        imageSrc="/images/v2/aws-banner.webp"
      />
      <HireTeamServices />
      <TechnologyDevelopers />
      <BenefitOfHiringDevelopers />
      <HireDevelopersInThreeSteps title="AWS Developers" />
      <HireDevelopersPricingPlan title="AWS Developer" />
      <HomePageBlogs />
      <MultipleKeyValueWithBG
        title="Why Should You Hire AWS Developers from Brilworks?"
        description="We understand the need for a stable, cost-effective tech infrastructure. Our AWS experts deliver end-to-end cloud solutions to drive your business growth and innovation."
        keyValueData={awsExperienceShowCase}
      />
      <SolutionContactForm />
      <AWSFAQs />
    </>
  );
};

export default AWSTechnology;
