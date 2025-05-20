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
const MultipleCardInGrid = dynamic(() =>
  import("../Common/MultipleCardInGrid")
);
const HireTeamDigitalTransformation = dynamic(() =>
  import("../HireTeam/HireTeamDigitalTransformation")
);
const BrilworksAdvantage = dynamic(() => import("./BrilworksAdvantage"));
const HireTeamSolutions = dynamic(() => import("./HireTeamSolutions"));
const MultipleCardWithIconBG = dynamic(() =>
  import("../Common/MultipleCardWithIconBG")
);
const CTASection = dynamic(() => import("../Common/CTASection"));
const ReactNativeHiringTable = dynamic(() =>
  import("./ReactNativeHiringTable")
);

const why100PlusCompaniesTrustMobile = [
  {
    title: "Timezone-aligned collaboration",
    description:
      "Our remote mobile development teams work in your time zone for real-time collaboration and daily scrums.",
    icon: "/images/v2/Timezone_Aligned_Collaboration.svg",
  },
  {
    title: "Senior talent at competitive rates",
    description:
      "Access top React Native specialists at 40% lower cost than in-house hires, with transparent monthly billing.",
    icon: "/images/v2/Senior_talent_at_competitive_rates.svg",
  },
  {
    title: "Flexible team compositions",
    description:
      "Scale from solo React Native developers to full-stack teams (UI/UX + QA included) with 72-hour onboarding.",
    icon: "/images/v2/Flexible_Team_Compositions.svg",
  },
  {
    title: "App store-compliant development",
    description:
      "Strict adherence to Apple/Google guidelines with pre-submission audits for design, security, and performance.",
    icon: "/images/v2/App_Store_Compliant_Development.svg",
  },
  {
    title: "Production-ready in 6-8 weeks",
    description:
      "Our mobile development team works at startup speed without sacrificing enterprise standards.",
    icon: "/images/v2/WhyReactNativeFrame.svg",
  },
];

const ReactNativeTechnology = () => {
  const reactNativeService = {
    title: "React Native Development Services For Startups & Enterprises",
    buttonText: "Get a Quote for your Project",
    servicesList: [
      {
        title: "Custom Mobile App Development",
        value: "rn-1",
        imageSrc: "/images/v2/custom-mobile-app-development.webp",
        description:
          "Need a customized mobile app for your business? Our React Native app development services deliver bespoke React Native solutions, from MVPs to enterprise-grade apps. We align with your goals, using tools like Redux and Jest for robust performance.",
      },
      {
        title: "Cross-Platform App Development",
        value: "rn-2",
        imageSrc: "/images/v2/cross-platform-app-development-2.webp",
        description:
          "Native-like mobile experiences built with React Native's most advanced capabilities. Our development process delivers iOS and Android versions simultaneously with shared business logic and platform-perfect interfaces. From concept to app store submission, we build complete cross-platform mobile solutions.",
      },
      {
        title: "React Native UI/UX Development",
        value: "rn-3",
        imageSrc: "/images/v2/ux-development.webp",
        description:
          "Craft pixel-perfect interfaces that set industry standards. Our React Native UI/UX development services combine Figma's precision design tools with optimized native components, delivering buttery-smooth experiences across all devices.",
      },
      {
        title: "React Native iOS App Development",
        value: "rn-4",
        imageSrc: "/images/v2/react-native-ios-app-development.webp",
        description:
          "We engineer premium iOS experiences using React Native, optimized for Apple's ecosystem. Our iOS solutions deliver true-native performance while maintaining cross-platform efficiency, fully compliant with App Store guidelines.",
      },
      {
        title: "React Native Application Modernization",
        value: "rn-5",
        imageSrc: "/images/v2/react-native-modernization.webp",
        description:
          "Update outdated apps with React Native application modernization. We revamp legacy systems, improve performance, and add modern features (e.g., push notifications, offline support), keeping your app competitive in 2025 and beyond.",
      },
      {
        title: "React Native Migration Services",
        value: "rn-6",
        imageSrc: "/images/v2/react-native-migration-2.webp",
        description:
          "Migrate legacy apps to React Native without data loss. Our React Native migration services ensure smooth transitions, updating your app to the latest standards with minimal downtime. Ideal for modernizing your mobile presence.",
      },
      {
        title: "React Native Team Augmentation",
        value: "rn-7",
        imageSrc: "/images/v2/react-native-team-augmentation.webp",
        description:
          "Scale your in-house team with React Native team augmentation. Hire our dedicated React Native developers to work alongside your team, providing expertise in custom development, API integration, or modernization, with flexible engagement models.",
      },
      {
        title: "App Maintenance & Support",
        value: "rn-8",
        imageSrc: "/images/v2/react-native-app-maintenance.webp",
        description:
          "Keep your app running smoothly with 24/7 maintenance. We monitor performance, fix bugs, and provide updates to ensure scalable mobile apps with 99.9% uptime.",
      },
      {
        title: "Testing & Audit",
        value: "rn-9",
        imageSrc: "/images/v2/react-native-testing-audit.webp",
        description:
          "Ensure your app is bug-free with our testing services. We conduct performance audits, responsiveness tests, and stability checks across devices, delivering a flawless user experience.",
      },
    ],
  };
  const reactNativeBenefits = {
    title: "Why Choose React Native Development?",
    description:
      "React Native app development offers unmatched advantages for businesses exploring mobile app solutions. Our React Native development services deliver cost-efficient, SEO-friendly apps that rank well and perform flawlessly. Here’s why React Native is the top choice for mobile app development in 2025:",
    benefits: [
      {
        title: "Cost-efficient development",
        description:
          "React Native reduces the cost of mobile app development by up to 40% with a single codebase for iOS and Android. Our developers optimize budgets, making React Native for startups and enterprises a smart, high-ROI investment.",
        icon: "/images/v2/why_rn_1.svg",
      },
      {
        title: "Faster time-to-market",
        description:
          "Launch apps quickly with React Native’s streamlined development process. Our React Native mobile app development delivers MVPs in weeks, helping startups and businesses stay ahead in competitive markets.",
        icon: "/images/v2/why_rn_2.svg",
      },
      {
        title: "App store optimized apps",
        description:
          "React Native apps are built for high app store ranking. Our developers optimize performance and metadata, ensuring your app gains visibility on Google Play and the App Store, driving downloads.",
        icon: "/images/v2/why_rn_3.svg",
      },
      {
        title: "Strong developer community",
        description:
          "Hire React Native developers backed by a global community of contributors. This ensures continuous updates, robust plugins, and reliable support for React Native mobile app development projects.",
        icon: "/images/v2/why_rn_4.svg",
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
        title="Hire React Native Developers for Mobile Application Development"
        description="Our team is expert in handling the most complex of mobile development. We offer a scalable, responsive and flexible approach toward React Native mobile development, unmatched in the industry. Add vetted React developers to your team in 72 hours."
        imageSrc="/images/v2/react-native-banner.webp"
      />
      <MultipleCardInGrid
        title="Why Mobile-First Companies Partner With Us"
        description="From UI prototyping to App Store deployment, we combine React Native expertise with product thinking to build apps that acquire and retain users."
        cardData={why100PlusCompaniesTrustMobile}
      />
      <ServicesSection
        sectionId="hire-react-native-developer"
        serviceData={reactNativeService}
        bgClass="mb-[4rem]"
      />
      <TechnologyDevelopers />
      <HireTeamDigitalTransformation />
      <BenefitOfHiringDevelopers title="Enterprise-Grade Resourcing For React Native Development" />
      <BrilworksAdvantage />
      <HireTeamSolutions />
      <MultipleCardWithIconBG data={reactNativeBenefits} />
      <HireDevelopersInThreeSteps
        bgClass="bg-themeLight"
        title="React Native Developers"
      />
      <CTASection
        title="Join 100+ clients who trust Brilworks for React Native development services. Take advantage of our 48-hour risk-free trial and start building your app today."
        buttonText="Hire React Native Developer"
      />
      <HireDevelopersPricingPlan title="React Native Developer" />
      <ReactNativeHiringTable />
      <HomePageBlogs />
      <SolutionContactForm />
      <ReactNativeFAQs />
    </>
  );
};

export default ReactNativeTechnology;
