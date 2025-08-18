"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { scrollEffect } from "../lib/commonFunction";
import HireTeamHeroSection from "../HireTeam/HireTeamHeroSection";
import ServicesSection from "../Common/ServicesSection";

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

  const awsService = {
    title: "Our AWS Development Services",
    buttonText: "Get Quote",
    servicesList: [
      {
        title: "AWS Development Consulting",
        value: "aws-1",
        imageSrc: "/images/v2/AWS-dev-consulting.webp",
        description:
          "Our team of AWS consultants helps your business to establish and maintain a high-performance cloud environment. Our consulting services include development, deployment, migration & optimization.",
      },
      {
        title: "AWS App Development Services",
        value: "aws-2",
        imageSrc: "/images/v2/AWS-app-development-services.webp",
        description:
          "The AWS development experts at Brilworks build cutting-edge web and mobile applications, with custom features that are needed to gain a competitive advantage. Whether it is developing them from scratch or modernizing your legacy applications with AWS, our team can assist you with it all.",
      },
      {
        title: "AWS Cloud Migration Services",
        value: "aws-3",
        imageSrc: "/images/v2/AWS-cloud-migration-services.webp",
        description:
          "We know that a successful migration to the cloud is about more than just moving your workloads from on-premise applications to public cloud platforms. This is why we take the time to understand your application needs, business objectives, and migration requirements.",
      },
      {
        title: "DevOps AWS Services",
        value: "aws-4",
        imageSrc: "/images/v2/DevOps-AWS-services.webp",
        description:
          "DevOps on AWS is an end-to-end automation framework that uses AWS services like CodePipeline, AWS CodeBuild & AWSCodeDeploy to develop, test and deploy your applications in AWS. Our experts help you use services like these so that you can easily build and deploy compound cloud architectures on AWS.",
      },
      {
        title: "AWS Managed Services",
        value: "aws-5",
        imageSrc: "/images/v2/AWS-managed-services.webp",
        description:
          "We offer cost-optimized, seamless managed services that are built for the modern world of IT. Our goal is to help you make more informed decisions about your infrastructure and get more out of what you have.",
      },
    ],
  };

  return (
    <>
      <HireTeamHeroSection
        technologyText="Hire AWS Developer"
        title="Hire AWS Developers for Your Cloud-Adoption Needs"
        description="Our expertise in AWS development services has empowered us to bring the best cloud solutions to your organization’s infrastructure without the cost and hassle of having to build it yourself."
        imageSrc="/images/v2/aws-banner.webp"
      />
      <ServicesSection
        serviceData={awsService}
        sectionId="hire-aws-developer"
      />
      <TechnologyDevelopers />
      {/* <BenefitOfHiringDevelopers /> */}
      <HireDevelopersInThreeSteps title="AWS Developers" />
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
