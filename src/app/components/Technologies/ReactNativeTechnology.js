"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { scrollEffect } from "../lib/commonFunction";
import HireTeamHeroSection from "../HireTeam/HireTeamHeroSection";
import ServicesSection from "../Common/ServicesSection";

const ReactNativeFAQs = dynamic(() => import("./TechnologyFAQ"));
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

const ReactNativeTechnology = () => {
  const reactNativeService = {
    title: "Create cross-platform mobile apps with React Native",
    desc: "Our services drive sustainable growth.",
    buttonText: "Get a Quote for your Project",
    servicesList: [
      {
        title: "React Native App Consultation",
        value: "rn-1",
        imageSrc: "/images/v2/react-native-app-consulting.webp",
        description:
          "Our team will help you to get the entire project roadmap, project schedule, and the overall design and layout of your application to build a robust and customized mobile app with a native look and feel.",
      },
      {
        title: "React Native Cross-Platform App Development",
        value: "rn-2",
        imageSrc: "/images/v2/cross-platform-app-development.webp",
        description:
          "If you are looking for a React Native app development company to create an app that runs on multiple platforms, then look no further. Hire our React Native developers who are specialized in developing applications for both Android & iOS platforms.",
      },
      {
        title: "React Native Migration",
        value: "rn-3",
        imageSrc: "/images/v2/react-native-migration.webp",
        description:
          "Our team of experts is adept at moving apps from other platforms without data loss. We’re here to help you migrate legacy apps, or get them up to speed with the latest version of your app.",
      },
      {
        title: "React Native App Maintenance & Support",
        value: "rn-4",
        imageSrc: "/images/v2/react-native-app-maintenance.webp",
        description:
          "We offer support and maintenance services after the app deployment. Our team monitors the system and ensures high performance. Whether you need to boost uptime or reduce downtime, we’ve got your back.",
      },
      {
        title: "React Native UI/UX Development",
        value: "rn-5",
        imageSrc: "/images/v2/ux-development.webp",
        description:
          "Our React Native specialists design beautiful applications while leveraging the latest technology to create a seamless and delightful user experience.",
      },
      {
        title: "React Native Testing & Audit",
        value: "rn-6",
        imageSrc: "/images/v2/react-native-testing-audit.webp",
        description:
          "We’ll help you evaluate your application for responsiveness, bugs, performance, and stability. The team ensures that your app is running as smoothly as possible on all devices and operating system platforms.",
      },
    ],
  };

  useEffect(() => {
    scrollEffect();
    window.addEventListener("scroll", scrollEffect);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);
  return (
    <>
      <HireTeamHeroSection
        technologyText="Hire React Native Developers"
        title="Hire React Native Developers to Build Stunning Mobile Applications"
        description="Our team is expert in handling the most complex of projects. We offer a scalable, responsive and flexible approach toward React Native mobile development that’s unmatched in the industry."
        imageSrc="/images/v2/react-native-banner.webp"
      />
      <ServicesSection
        sectionId="hire-react-native-developer"
        serviceData={reactNativeService}
      />
      <TechnologyDevelopers />
      <BenefitOfHiringDevelopers />
      <HireDevelopersInThreeSteps
        bgClass="bg-themeLight"
        title="React Native Developers"
      />
      <HireDevelopersPricingPlan title="React Native Developer" />
      <HomePageBlogs />
      <SolutionContactForm />
      <ReactNativeFAQs />
    </>
  );
};

export default ReactNativeTechnology;
