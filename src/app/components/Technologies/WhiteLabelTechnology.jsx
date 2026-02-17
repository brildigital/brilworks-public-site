"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { scrollEffect } from "../lib/commonFunction";
import HireTeamHeroSection from "../HireTeam/HireTeamHeroSection";
import ServicesSection from "../Common/ServicesSection";

const WhiteLabelFAQs = dynamic(() => import("./TechnologyFAQ"));
const TechnologyDevelopers = dynamic(() => import("./TechnologyDevelopers"));
const SolutionContactForm = dynamic(
  () => import("../Solution/SolutionContactForm")
);
const HireDevelopersInThreeSteps = dynamic(
  () => import("../HireTeam/HireDevelopersInThreeSteps")
);
const HomePageBlogs = dynamic(() => import("../Homepage/HomePageBlogs"));
const MultipleCardInGrid = dynamic(
  () => import("../Common/MultipleCardInGrid")
);
const HireTeamSolutions = dynamic(() => import("./HireTeamSolutions"));
const MultipleCardWithIconBG = dynamic(
  () => import("../Common/MultipleCardWithIconBG")
);

const why100PlusAgenciesTrustUs = [
  {
    title: "Zero brand traces",
    description:
      "Your logo, colors, and branding. We ensure no traces of our involvement—perfect for resellers and SaaS providers.",
    icon: "/images/v2/Zero_Brand_Traces.svg",
  },
  {
    title: "End-to-end customization",
    description:
      "Customize every feature, workflow, and interface to align with your clients’ needs. Full code ownership and IP rights included.",
    icon: "/images/v2/End_to_End_Customization.svg",
  },
  {
    title: "Rapid time-to-market",
    description:
      "Launch products 2x faster with pre-built modules for e-commerce, fintech, and healthcare use cases—powered by agile sprints.",
    icon: "/images/v2/Rapid_Time_to_Market.svg",
  },
  {
    title: "Scalable infrastructure",
    description:
      "Cloud-native architectures (AWS, Azure) built to scale past 10k users. Auto-scaling and 99.9% uptime out of the box.",
    icon: "/images/v2/Scalable_Infrastructure.svg",
  },
  {
    title: "SEO-optimized foundations",
    description:
      "Web solutions built for visibility—accelerated load times, schema markup, and mobile-first indexing baked in.",
    icon: "/images/v2/SEO_Optimized_Foundations.svg",
  },
  {
    title: "Dedicated support & training",
    description:
      "24/7 technical support, plus training materials and API docs to help your clients onboard with confidence.",
    icon: "/images/v2/Dedicated_Support_and_Training.svg",
  },
];

const whiteLabelService = {
  title: "Build Your Brand’s Ecosystem With Our White Label Services",
  buttonText: "Get Quote",
  servicesList: [
    {
      title: "Branded White Label App Solutions",
      value: "wl-1",
      imageSrc: "/images/v2/white-label-app-solutions.webp",
      description:
        "Launch your own branded mobile app with our white label development services. We deliver fully customizable, ready-to-deploy apps with your logo, colors, and features—ideal for MVPs or enterprise-scale solutions.",
    },
    {
      title: "Multi-Platform App Deployment",
      value: "wl-2",
      imageSrc: "/images/v2/multi-platform-deployment.webp",
      description:
        "Expand across iOS, Android, and web with consistent branding and seamless functionality. Our white label apps ensure a unified user experience and rapid deployment across platforms.",
    },
    {
      title: "Custom Feature Integration",
      value: "wl-3",
      imageSrc: "/images/v2/custom-feature-integration.webp",
      description:
        "Tailor your app to fit your exact needs. We integrate custom features like in-app purchases, user authentication, and analytics dashboards to match your business model.",
    },
    {
      title: "White Label SaaS App Development",
      value: "wl-4",
      imageSrc: "/images/v2/white-label-saas-development.webp",
      description:
        "Turn your SaaS platform into a mobile experience. Our white label SaaS development ensures scalable, secure apps with seamless API integration and complete brand alignment.",
    },
    {
      title: "App Rebranding Services",
      value: "wl-5",
      imageSrc: "/images/v2/app-rebranding-services.webp",
      description:
        "Give existing apps a fresh look. We redesign UI/UX, modernize features, and rebrand apps to align with your identity—without the need for a full rebuild.",
    },
    {
      title: "White Label App Reseller Program",
      value: "wl-6",
      imageSrc: "/images/v2/white-label-reseller-program.webp",
      description:
        "Sell branded apps under your own name. Our reseller program provides templates, backend support, and marketing tools so you can offer high-quality apps to your clients.",
    },
    {
      title: "Dedicated White Label Development Team",
      value: "wl-7",
      imageSrc: "/images/v2/white-label-dev-team.webp",
      description:
        "As a trusted white label app development company, we provide dedicated developers as an extension of your team, providing specialized skills in customization, feature integration, or app scaling, with flexible engagement options.",
    },
  ],
};
const whiteLabelBenefits = {
  title: "Why Choose White Label Development?",
  description:
    "Expand your service offerings without overhead costs. Our solutions are designed for effortless rebranding, allowing you to focus on client acquisition while we handle the tech.",
  benefits: [
    {
      title: "Brand consistency",
      description:
        "Launch market-ready products 2x faster under your brand, with zero compromises on UI/UX or functionality.",
      icon: "/images/v2/white_label_brand_consistency.svg",
    },
    {
      title: "Cost-efficient",
      description:
        "Eliminate R&D costs—scale your offerings with pre-built modules and cloud architectures that grow with your client base.",
      icon: "/images/v2/why_rn_1.svg",
    },
    {
      title: "Rapid market entry",
      description:
        "White label apps accelerate your launch with pre-built, customizable solutions, ensuring your brand reaches customers quickly and efficiently.",
      icon: "/images/v2/white_label_rapid_entry.svg",
    },
    {
      title: "Scalable architecture",
      description:
        "Our white label apps are built for growth, supporting seamless feature additions and performance enhancements as your business expands rapidly.",
      icon: "/images/v2/white_label_scalable_architecture.svg",
    },
    {
      title: "Expert customization",
      description:
        "Benefit from our expertise in tailoring white label apps, integrating unique features to meet your specific business and user needs.",
      icon: "/images/v2/white_label_expert_customization.svg",
    },
    {
      title: "Reliable support",
      description:
        "Enjoy peace of mind with 24/7 maintenance and updates, ensuring your white label app remains secure, functional, and user-friendly.",
      icon: "/images/v2/white_label_support.svg",
    },
  ],
};

const WhiteLabelTechnology = () => {
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
        technologyText="White Label Mobile App Development Services"
        title={
          <>
            Brand-Aligned <br className="md:block hidden" />
            White-Label Solutions
          </>
        }
        description="Deploy fully white-label software solutions under your brand in 4-6 weeks. Onboard expert app developers who build custom white-label apps, platforms, and tools. As a leading white app label development company, we empower agencies and enterprises to scale their offerings without investing in in-house R&D."
        imageSrc="/images/v2/white-label-solutions-banner.webp"
        hireButtonText="Hire White Label Developers"
      />
      <MultipleCardInGrid
        title="Why 100+ Agencies Trust Us"
        description="From UI/UX to backend infrastructure, we deliver white-label solutions that mirror your brand’s identity. We create market-ready products that amplify your portfolio."
        cardData={why100PlusAgenciesTrustUs}
      />
      <ServicesSection
        sectionId="services-one"
        serviceData={whiteLabelService}
      />
      <TechnologyDevelopers description="Our services deliver customized, scalable white label solutions." />
      <HireTeamSolutions />
      <MultipleCardWithIconBG data={whiteLabelBenefits} />
      <HireDevelopersInThreeSteps
        bgClass="bg-themeLight"
        title="White Label Developers"
      />
      <HomePageBlogs />
      <SolutionContactForm />
      <WhiteLabelFAQs />
    </>
  );
};

export default WhiteLabelTechnology;
