"use client";
import dynamic from "next/dynamic";
import ServiceHeroSection from "./ServiceHeroSection";
import SolutionContactForm from "../Solution/SolutionContactForm";

const Honors = dynamic(() => import("../Homepage/Honors"));
const ServicesSection = dynamic(() => import("../Common/ServicesSection"));
const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));
const MultipleCardWithIconBG = dynamic(() =>
  import("../Common/MultipleCardWithIconBG")
);
const MultipleCardInGrid = dynamic(() =>
  import("../Common/MultipleCardInGrid")
);
const HireTeamSolutions = dynamic(() =>
  import("../Technologies/HireTeamSolutions")
);
const CTASection = dynamic(() => import("../Common/CTASection"));
const SeeingBelieving = dynamic(() => import("../Homepage/SeeingBelieving"));
const HomePageBlogs = dynamic(() => import("../Homepage/HomePageBlogs"));
const ServicesFAQ = dynamic(() => import("./ServicesFAQ"));

const ReactJSDevelopmentService = () => {
  const reactJSDevelopmentServices = {
    title: "Our ReactJS Development Services",
    desc: "We partner with you across the full spectrum of ReactJS needs:",
    servicesList: [
      {
        title: "Custom React Application Development",
        value: "web-service-1",
        description:
          "Crafting single-page and multi-page React applications with clean state management, component architecture, and optimized rendering to ensure responsiveness and maintainability.",
        imageSrc: "/images/v2/mobile-app-img.webp",
        imageAlt: "Custom reactjs application dev image",
      },
      {
        title: "React Migration & Modernization",
        value: "web-service-2",
        description:
          "Updating legacy frontends to modern React stacks (including hooks, functional components, and TypeScript integration) to improve developer velocity and performance.",
        imageSrc: "/images/v2/react-modernization.webp",
        imageAlt: "Reactjs migration and modernization image",
      },
      {
        title: "Progressive Web Apps (PWAs) with React",
        value: "web-service-3",
        description:
          "Building installable, offline-capable web experiences that rival native apps in speed and engagement.",
        imageSrc: "/images/v2/progressive-web-app-pwa-development.webp",
        imageAlt: "PWA development image",
      },
      {
        title: "Design System Implementation",
        value: "web-service-4",
        description:
          "Creating reusable, accessible component libraries in React to ensure consistency across products while enabling rapid feature development.",
        imageSrc: "/images/v2/reactjs-dev-design-system.webp",
        imageAlt: "ReactJS design system image",
      },
      {
        title: "React Performance Optimization",
        value: "web-service-5",
        description:
          "Profiling and tuning render patterns, lazy loading, code splitting, memoization, and minimizing bundle size for real-world speed.",
        imageSrc: "/images/v2/reactjs-dev-performance-optimization.webp",
        imageAlt: "ReactJS performance optimization image",
      },
      {
        title: "Team Augmentation / Staff Extension",
        value: "web-service-6",
        description:
          "Seamlessly embed our experienced ReactJS developers into your existing team to accelerate delivery or fill specific capability gaps.",
        imageSrc: "/images/v2/reactjs-dev-team-augmentation.webp",
        imageAlt: "Reactjs team augmentation image",
      },
    ],
  };

  const whyChooseUsReactJsDevelopmentData = {
    title: "Why Choose Our ReactJS Development Services?",
    description:
      "We make ReactJS projects successful by combining business understanding with strong technical execution.",
    benefits: [
      {
        title: "Built Around Your Goals",
        icon: "/images/v2/fi_8099605.svg",
        description:
          "We design interfaces that match your user journey and business needs, not just templates or boilerplate code.",
      },
      {
        title: "Clean, Maintainable Code",
        icon: "/images/v2/fi_780477.svg",
        description:
          "Our ReactJS developers follow clear component structures, proven state management (Redux, Zustand, or Context API), and thorough testing.",
      },
      {
        title: "Scalable Solution",
        icon: "/images/v2/fi_8109512.svg",
        description:
          "We use modular design, lazy loading, and incremental upgrades so your app can grow without costly rewrites.",
      },
      {
        title: "Flexible Engagement",
        icon: "/images/v2/fi_2907826.svg",
        description:
          "You can hire ReactJS developers to work alongside your team or let us handle the full development.",
      },
      {
        title: "Modern Tech Expertise",
        icon: "/images/v2/security-per.svg",
        description:
          "From React Router and React Query to TypeScript and backend integration, we use best practices that keep your app fast and reliable.",
      },
    ],
  };

  const why100PlusBusinessChooseUs = [
    {
      title: "No Time Zone Limits",
      description:
        "Our ReactJS developers align with your working hours, whether you’re in London, Sydney, or San Francisco. Your schedule, your pace.",
      icon: "/images/v2/clock.svg",
    },
    {
      title: "Cross-Platform Expertise",
      description:
        "From web apps to mobile-friendly dashboards, we make ReactJS work seamlessly across platforms. Build once, deploy everywhere.",
      icon: "/images/v2/laptop.svg",
    },
    {
      title: "Save Up to 60% on Costs",
      description:
        "Access senior-level React talent at a fraction of in-house costs, no overhead, no hiring hassles.",
      icon: "/images/v2/dollar-black.svg",
    },
    {
      title: "Flexible Engagement Options",
      description:
        "Choose project-based delivery, dedicated ReactJS teams, or on-demand developers, tailored to your needs.",
      icon: "/images/v2/partnership.png",
    },
    {
      title: "24/7 Expert Support",
      description:
        "Round-the-clock assistance from experienced ReactJS professionals to keep your project on track and performing at its best.",
      icon: "/images/v2/24-7-support.svg",
    },
    {
      title: "Faster Time to Market",
      description:
        "We combine speed with precision, shipping high-quality ReactJS code in record time without cutting corners.",
      icon: "/images/v2/growth-midset-img.png",
    },
  ];

  return (
    <>
      <ServiceHeroSection
        title="End-to-End ReactJS Development Services for Scalable, High-Performance Web Applications."
        description="Looking for a ReactJS development company that delivers fast, scalable, and user-friendly web applications? Our team combines deep frontend expertise with engineering discipline to deliver responsive, performant, and maintainable React solutions."
        buttonText="Get Free Consultation"
        secondaryBtnText="Hire ReactJS Developer"
        secondaryBtnUrl="/hire-reactjs-developer/"
        imageSrc="/images/v2/reactjs-development-service-banner.webp"
      />
      <MultipleCardInGrid
        title="Why 100+ Businesses Choose Our ReactJS Development Services"
        description="We craft interfaces that keep users coming back. Here’s why clients stick with us."
        cardData={why100PlusBusinessChooseUs}
      />
      <ServicesSection
        bgClass="bg-themeLight"
        sectionId="service-section"
        serviceData={reactJSDevelopmentServices}
      />

      <MultipleCardWithIconBG
        bgClass="bg-sectionBG"
        data={whyChooseUsReactJsDevelopmentData}
      />

      <Honors />
      <ClientReviews />
      <SeeingBelieving />
      <HireTeamSolutions />

      <CTASection
        descriptionClass="md:w-4/5"
        title="Build your next high-impact web application with a trusted partner. Let’s turn your idea into a responsive, secure, and scalable digital experience."
        buttonText="Get a Free Consultation"
      />
      <HomePageBlogs />
      <SolutionContactForm
        title="Ready to Build with ReactJS?"
        description="If you’re evaluating modern frontend approaches or looking to accelerate with React, let’s talk. Get a free consultation to discover how our ReactJS development services can turn your interface into a competitive advantage."
      />
      <ServicesFAQ />
    </>
  );
};

export default ReactJSDevelopmentService;
