"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { scrollEffect } from "../lib/commonFunction";
import HireTeamHeroSection from "../HireTeam/HireTeamHeroSection";
import ServicesSection from "../Common/ServicesSection";

const UIUXFAQs = dynamic(() => import("./TechnologyFAQ"));
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
const HomePageBlogs = dynamic(() => import("../Homepage/HomePageBlogs"));

const UIUXTechnology = () => {
  const uiuxService = {
    title:
      "Experience the Perfect Blend of Creativity & Technology With Our UI/UX Designing Services",
    buttonText: "Get Quote",
    servicesList: [
      {
        title: "UI UX Consulting Services",
        value: "ui-ux-1",
        imageSrc: "/images/v2/java-consulting.webp",
        description:
          "Our UX and UI design can help you set the tone of your brand, create designs that are visually appealing and easy for your users to navigate.",
      },
      {
        title: "UI UX Design Services",
        value: "ui-ux-2",
        imageSrc: "/images/v2/ui-ux-design-services.webp",
        description:
          "We believe in the power of intuitive design and are always on the lookout for new ways to streamline the user experience. Our team has proven expertise in creating human-centered experiences.",
      },
      {
        title: "UX Strategy",
        value: "ui-ux-3",
        imageSrc: "/images/v2/ux-strategy.webp",
        description:
          "Our strategy is a perfect blend of design, usability, and business principles. We identify your biggest needs and come up with an effective UX strategy to transform your brand into one that resonates with users.",
      },
      {
        title: "Mockups Designing",
        value: "ui-ux-4",
        imageSrc: "/images/v2/mockups-designing.webp",
        description:
          "Our talented team of UI/UX designers deliver mockups that make it easy for you to focus on what’s most important: creating a great product.",
      },
      {
        title: "Wireframe and Prototyping",
        value: "ui-ux-5",
        imageSrc: "/images/v2/wireframe-and-prototyping.webp",
        description:
          "With our expertly curated selection of UX professionals, you’ll get wireframe designers that offer a full range of services to make your product plan come alive.",
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
        technologyText="Hire UI/UX Designer"
        title="Hire UI UX Designers to Create Exceptional User Experience"
        description="We design intuitive, appealing, aesthetic, and informative experiences that are easy for your customers to engage with, understand and enjoy. Unlock exponential growth with our UI UX design services today!"
        imageSrc="/images/v2/ui-ux-banner.webp"
      />
      <ServicesSection
        serviceData={uiuxService}
        sectionId="hire-ui-ux-designer"
      />
      <TechnologyDevelopers bgClass="bg-white" />
      {/* <BenefitOfHiringDevelopers bgClass="bg-sectionBG" /> */}
      <HireDevelopersInThreeSteps
        title="UI/UX Designers"
        bgClass="bg-themeLight"
      />
      <HomePageBlogs />
      <SolutionContactForm />
      <UIUXFAQs />
    </>
  );
};

export default UIUXTechnology;
