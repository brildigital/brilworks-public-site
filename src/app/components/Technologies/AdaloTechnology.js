"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { scrollEffect } from "../lib/commonFunction";
import HireTeamHeroSection from "../HireTeam/HireTeamHeroSection";
import ServicesSection from "../Common/ServicesSection";

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

  const adaloService = {
    title: "Explore Our Adalo Development Services",
    // buttonText: "Hire Adalo Developer",
    buttonText: "Get Quote",
    servicesList: [
      {
        title: "Custom App Development",
        value: "adalo-1",
        imageSrc: "/images/v2/mobile-app-img.webp",
        description:
          "Whether you need a prototype or a fully functional application, our team can develop any kind of custom app using Adalo.",
      },
      {
        title: "UI/UX Design",
        value: "adalo-2",
        imageSrc: "/images/v2/ui-ux-img.webp",
        description:
          "User experience is at the heart of every successful app. Our design team crafts intuitive and engaging interfaces, ensuring a seamless user journey from start to finish.",
      },
      {
        title: "Integration Services",
        value: "adalo-3",
        imageSrc: "/images/v2/integration-services.webp",
        description:
          "Integrate your app with third-party services and APIs, from payment gateways to social media platforms, to enhance its functionality.",
      },
      {
        title: "App Maintenance and Support",
        value: "adalo-4",
        imageSrc: "/images/v2/maintenance.webp",
        description:
          "Our commitment to your success doesn’t end at launch. We offer ongoing maintenance and support services.",
      },
      {
        title: "Adalo Consulting Services",
        value: "adalo-5",
        imageSrc: "/images/v2/adalo-consulting-services.webp",
        description:
          "Not sure where to start? Our Adalo experts provide consulting services to help you navigate the app development process, from ideation to deployment.",
      },
    ],
  };

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
      <ServicesSection
        bgClass="bg-themeLight"
        sectionId="services-one"
        serviceData={adaloService}
      />
      <TechnologyDevelopers bgClass="bg-white" />
      {/* <BenefitOfHiringDevelopers
        title="Why Choose Brilworks for Adalo Development?"
        description="Let's build groundbreaking solutions together. Brilworks offers expert Adalo developers and rigorous quality assurance to ensure your app is exceptional."
        cardData={adaloDeveloperBenefits}
      /> */}
      <HireDevelopersInThreeSteps
        bgClass="bg-themeLight"
        title="Adalo Developers"
      />
      <HomePageBlogs />
      <MultipleKeyValueWithBG
        title="What Makes a Top-Rated Adalo Development Company?"
        description="We understand the need for a stable, cost-effective tech infrastructure. Our Adalo experts deliver end-to-end solutions to drive your business growth and innovation."
        keyValueData={adaloExperienceShowCase}
      />
      <SolutionContactForm />
      <AdaloFAQs />
    </>
  );
};

export default AdaloTechnology;
