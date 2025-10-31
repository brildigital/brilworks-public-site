"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { scrollEffect } from "../lib/commonFunction";
import HireTeamHeroSection from "../HireTeam/HireTeamHeroSection";
import ServicesSection from "../Common/ServicesSection";

const MobileAppFAQs = dynamic(() => import("./TechnologyFAQ"));
const TechnologyDevelopers = dynamic(() => import("./TechnologyDevelopers"));
const BenefitOfHiringDevelopers = dynamic(() =>
  import("./BenefitOfHiringDevelopers")
);
const SolutionContactForm = dynamic(() =>
  import("../Solution/SolutionContactForm")
);
const HireDevelopersInThreeSteps = dynamic(() =>
  import("../HireTeam/HireDevelopersInThreeSteps")
);
const MultipleKeyValueWithBG = dynamic(() =>
  import("../Common/MultipleKeyValueWithBG")
);

const HomePageBlogs = dynamic(() => import("../Homepage/HomePageBlogs"));

const MobileAppTechnology = () => {
  const mobileAppService = {
    title: "Our Services",
    buttonText: "Get Quote",
    servicesList: [
      {
        title: "Cross-Platform App Development",
        value: "mobile-app-1",
        imageSrc: "/images/v2/cross-platform-app-dev.webp",
        description:
          "We offer cross-platform app development solutions using industry-leading frameworks.",
      },
      {
        title: "React Native Development",
        value: "mobile-app-2",
        imageSrc: "/images/v2/react-native-development.webp",
        description:
          "React Native is a powerful framework to build high-performance mobile apps for both iOS and Android using a single codebase.",
      },
      {
        title: "iOS App Development",
        value: "mobile-app-3",
        imageSrc: "/images/v2/ios-app-development.webp",
        description:
          "Our experienced iOS developers specialize in developing innovative and visually appealing apps using the latest technologies and design trends.",
      },
      {
        title: "Android App Development",
        value: "mobile-app-4",
        imageSrc: "/images/v2/android-app-development.webp",
        description:
          "Our Android app development team is skilled in building robust and scalable apps, ensuring optimal performance, compatibility, and a native-like experience across various Android devices.",
      },
    ],
  };
  const mobileAppExperienceShowCase = [
    {
      value: "30+",
      description: "Projects Completed",
      color: "#E5F4FF",
    },
    {
      value: "60%",
      description: "Savings In Salaries",
      color: "#FFE2E5",
    },

    {
      value: "20+",
      description: "Mobile App Experts Onboard",
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
      color: "#FFE8FC",
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

  const mobileAppDeveloperBenefits = [
    {
      title: "Extensive Talent Pool",
      imgSrc: "/images/v2/extensive-pool.svg",
      alt: "Extensive Talent Pool",
    },
    {
      title: "Proven Track Record",
      imgSrc: "/images/v2/proven-track-record.svg",
      alt: "Proven Track Record",
    },
    {
      title: "Transparent Communication",
      imgSrc: "/images/v2/transparent-comm.svg",
      alt: "Transparent Communication",
    },
    {
      title: "Quality Assurance",
      imgSrc: "/images/v2/regular-compliance.svg",
      alt: "Quality Assurance",
    },
    {
      title: "Flexible Engagement Models",
      imgSrc: "/images/v2/flexible-engagement.svg",
      alt: "Flexible Engagement Models",
    },
    {
      title: "Complete Autonomy",
      imgSrc: "/images/v2/complete-atonomy.png",
      alt: "Complete Autonomy",
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
        technologyText="Hire Mobile App Developers"
        title="Skilled Mobile App Developers ready to realize your vision"
        description="Looking for a mobile app developer to realize your vision? We connect you with experts in iOS, Android, and cross-platform app development."
        imageSrc="/images/v2/mobile-app-bannner.webp"
      />
      <ServicesSection
        bgClass="bg-themeLight"
        sectionId="services-one"
        serviceData={mobileAppService}
      />
      <TechnologyDevelopers bgClass="bg-white" />
      {/* <BenefitOfHiringDevelopers
        title="Why Choose Us?"
        description="Hiring a dedicated development team from a Mobile App Development Company empowers companies across the globe to access expert talent without any limitation of location. It enables you to keep up with the pace of technological change while keeping your costs down."
        cardData={mobileAppDeveloperBenefits}
      /> */}
      <HireDevelopersInThreeSteps
        bgClass="bg-themeLight"
        title="Hire Mobile App Developers"
      />
      <HomePageBlogs />
      <MultipleKeyValueWithBG
        title="Why Should You Hire Mobile App Developers from Brilworks?"
        description="Mobile App has taken the world by storm and rightly so. It’s fast, flexible, and cost-effective. We leverage React Native to deliver brilliant & unforgettable user experience to our clients. Our Mobile App developers focus on delivering flawless solutions with clear insights to meet all your business needs."
        keyValueData={mobileAppExperienceShowCase}
      />
      <SolutionContactForm />
      <MobileAppFAQs />
    </>
  );
};

export default MobileAppTechnology;
