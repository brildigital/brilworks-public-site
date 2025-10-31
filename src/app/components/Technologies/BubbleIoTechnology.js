"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { scrollEffect } from "../lib/commonFunction";
import HireTeamHeroSection from "../HireTeam/HireTeamHeroSection";
import ServicesSection from "../Common/ServicesSection";

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

const HomePageBlogs = dynamic(() => import("../Homepage/HomePageBlogs"));

const BubbleIoTechnology = () => {
  const bubbleIoService = {
    title: "Explore Our Bubble App Development Services",
    // buttonText: "Hire Bubble Developer",
    buttonText: "Get Quote",
    servicesList: [
      {
        title: "Database Integration",
        value: "bubble-io-1",
        imageSrc: "/images/v2/databse-integration.webp",
        description:
          "We seamlessly connect your app to various databases, ensuring efficient data management and real-time updates for enhanced functionality.",
      },
      {
        title: "Testing and Debugging",
        value: "bubble-io-2",
        imageSrc: "/images/v2/testing-and-debugging.webp",
        description:
          "Our rigorous testing process identifies and resolves bugs early, ensuring a smooth user experience and reliable app performance across all devices.",
      },
      {
        title: "Visual Development",
        value: "bubble-io-3",
        imageSrc: "/images/v2/visual-development.webp",
        description:
          "We utilize Bubble's powerful visual development tools to create intuitive user interfaces, bringing your app ideas to life without extensive coding knowledge.",
      },
      {
        title: "App Integration",
        value: "bubble-io-4",
        imageSrc: "/images/v2/app-integration.webp",
        description:
          "Integrate your Bubble app with other systems and platforms, such as CRM, payment gateways, and social media.",
      },
      {
        title: "Maintenance",
        value: "bubble-io-5",
        imageSrc: "/images/v2/maintenance.webp",
        description:
          "Our ongoing maintenance services keep your app running smoothly, providing updates and optimizations to enhance performance and user engagement over time.",
      },
    ],
  };

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
        technologyText="Hire Bubble Developers"
        title="Hire Bubble Developer to Build Apps Faster"
        description="Need top-notch Bubble developers to get your app off the ground faster? We house the best Bubble io developers to hire to help startups and businesses build industry-standard applications in less time."
        imageSrc="/images/v2/bubble-io-banner.webp"
      />
      <ServicesSection
        bgClass="bg-themeLight"
        sectionId="services-one"
        serviceData={bubbleIoService}
      />
      <TechnologyDevelopers bgClass="bg-white" />
      {/* <BenefitOfHiringDevelopers
        title="Why Choose Brilworks for Bubble Development?"
        description="Let's build groundbreaking solutions together. Brilworks offers expert Bubble developers and rigorous quality assurance to ensure your app is exceptional."
        cardData={bubbleDeveloperBenefits}
      /> */}
      <HireDevelopersInThreeSteps
        bgClass="bg-themeLight"
        title="Bubble Developers"
      />
      <HomePageBlogs />
      <MultipleKeyValueWithBG
        title="What Makes a Top-Rated Bubble Company?"
        description="We understand the need for a stable, cost-effective tech infrastructure. Our Bubble experts deliver end-to-end solutions to drive your business growth and innovation."
        keyValueData={bubbleExperienceShowCase}
      />
      <SolutionContactForm />
      <BubbleIoFAQs />
    </>
  );
};

export default BubbleIoTechnology;
