"use client";
import dynamic from "next/dynamic";
import ServiceHeroSection from "./ServiceHeroSection";
import CTASection from "../Common/CTASection";
import AboutOurExpertise from "./AboutOurExpertise";
import MultipleCardInGrid from "../Common/MultipleCardInGrid";

const Honors = dynamic(() => import("../Homepage/Honors"));
const ServicesSection = dynamic(() => import("../Common/ServicesSection"));
const IndustriesWeServe = dynamic(() =>
  import("../Homepage/IndustriesWeServe")
);
const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));
const MultipleCardWithIconBG = dynamic(() =>
  import("../Common/MultipleCardWithIconBG")
);

const SeeingBelieving = dynamic(() => import("../Homepage/SeeingBelieving"));
const HomePageBlogs = dynamic(() => import("../Homepage/HomePageBlogs"));
const ServicesFAQ = dynamic(() => import("./ServicesFAQ"));

const ReactNativeAppDevelopmentServices = () => {
  const reactnativeAppServices = {
    title: "Our React Native Development Services",
    servicesList: [
      {
        title: "End-to-End App Development",
        value: "web-service-1",
        description:
          "We handle the complete journey. Discovery, UI and UX, development, integrations, testing, deployment, and post-launch support. The result is a stable React Native app designed for growth.",
        imageSrc: "/images/v2/end-to-end-app-development.webp",
        imageAlt: "Native App Development image",
      },
      {
        title: "Custom React Native Features",
        value: "web-service-2",
        description:
          "From chat and live tracking to in-app purchases, notifications, and media handling, we build features that require more than basic boilerplate.",
        imageSrc: "/images/v2/custom-react-native-features.webp",
        imageAlt: "Cross-Platform Development image",
      },
      {
        title: "React Native Optimization",
        value: "web-service-3",
        description:
          "If you already have an app but it feels slow, outdated, or inconsistent, we audit the codebase, fix performance issues, and bring it up to a modern standard.",
        imageSrc: "/images/v2/react-native-optimization.webp",
        imageAlt: "PWA development image",
      },
      {
        title: "React Native Migration",
        value: "web-service-4",
        description:
          "We help teams move from legacy stacks or outdated frameworks into a React Native environment that’s easier to maintain and scale.",
        imageSrc: "/images/v2/react-native-migration-2.webp",
        imageAlt: "IoT App Development image",
      },
      {
        title: "API Integration",
        value: "web-service-5",
        description:
          "Our team integrates your backend systems, payment gateways, analytics, auth flows, and third-party services into a stable React Native architecture.",
        imageSrc: "/images/v2/advanced-api-integrations.webp",
        imageAlt: "Wearable App Development image",
      },
      {
        title: "Ongoing Maintenance and Support",
        value: "web-service-6",
        description:
          "We update OS compatibility, patch issues, maintain libraries, and help you iterate on new features without disrupting live users.",
        imageSrc: "/images/v2/ongoing-maintenance-and-support.webp",
        imageAlt: "Wearable App Development image",
      },
    ],
  };
  const mobileAppServiceEngagementData = [
    {
      title: "Fixed Price",
      icon: "/images/v2/budget-estimate.svg",
      description:
        "For projects with well-defined requirements, we work on a fixed-price model that gives you clarity from day one. We translate your scope into a structured execution plan, outline deliverables, and commit to a predictable budget.",
    },
    {
      title: "Time & Material",
      icon: "/images/Quick-Turnaround-Time.png",
      description:
        "When your roadmap is evolving or you’re working through discovery, iterations, and rapid validation, we shift to a time-and-material engagement. It gives you the flexibility to adjust priorities, experiment, and refine features without being locked into a rigid scope.",
    },
    {
      title: "Dedicated Team",
      icon: "/images/v2/dedicated-dev-team.svg",
      description:
        "For companies building long-term or scaling multiple product lines, we offer a dedicated team that integrates directly with your internal workflow. You get consistent talent—engineers, designers, PMs—aligned with your goals and committed to your roadmap.",
    },
  ];

  const whyChooseUsDevelopmentData = {
    title: "Why Choose Briworks for Mobile Development Services",
    benefits: [
      {
        title: "Top 3% Talent",
        icon: "/images/v2/talent-availability.svg",
        description:
          "You work with developers who’ve already passed our filters for clarity, discipline, and problem-solving—people who don’t need babysitting to move a product forward.",
      },
      {
        title: "5-Star Rating",
        icon: "/images/v2/star.svg",
        description:
          "Our five-star record comes from consistent behaviour: clear communication, steady delivery, and a habit of fixing issues before they turn into excuses.",
      },
      {
        title: "100+ Completed Projects",
        icon: "/images/v2/why-n-2.svg",
        description:
          "Over a hundred builds have given us enough mileage to understand patterns, avoid traps, and guide your product without wasting cycles.",
      },
      {
        title: "AI-Driven Approach",
        icon: "/images/v2/fi_10644631.svg",
        description:
          "We use AI to cut slow steps, surface issues earlier, and keep engineering focused on the decisions that actually shape your product’s outcome.",
      },
      {
        title: "Real 24/7 Availability",
        icon: "/images/v2/24X7-support-mgmt.svg",
        description:
          "We operate across time zones with overlapping teams, so your project doesn’t sit idle—progress continues even when you’re offline.",
      },
    ],
  };

  return (
    <>
      <ServiceHeroSection
        title="React Native Development Services"
        description="We use React Native to build fast, stable, and scalable mobile applications without doubling the engineering effort. Our focus is simple. We help businesses launch cross-platform apps that look sharp, run smoothly, and are easy to maintain over time. React Native is one of the tools we rely on to achieve that level of speed and consistency."
        buttonText="Start Your App Journey"
        imageSrc="/images/v2/react-native-development-services-banner.webp"
      />
      <AboutOurExpertise
        title="How We Work With React Native"
        description1="React Native fits when you want both platforms covered without managing two separate codebases. We combine React Native with the right backend setup, design workflows, and QA practices so your app feels polished from the first interaction."
      />

      {/* <CTASection
        titleClass="md:w-[70%]"
        descriptionClass="md:w-4/5"
        title="Ship Faster, Test Smarter, Deploy Smoother: DevOps Consulting for Modern Businesses"
        description="We're a leading DevOps consulting service company dedicated to building high-performing software delivery pipelines that streamline your workflow, accelerate releases, and empower your teams. Our expert consultants work alongside your team to identify your unique challenges and design a pipeline tailored to address your unique needs. We leverage the latest tools and cutting-edge technologies, from GitLab CI/CD to containerization solutions, to create a system that aligns perfectly with your specific needs."
        buttonText="Let’s Discuss"
        darkBackground={false}
      /> */}
      <ServicesSection
        bgClass="bg-themeLight"
        sectionId="service-section"
        serviceData={reactnativeAppServices}
      />
      <MultipleCardInGrid
        // bgClass="bg-themeLight"
        title="Engagement Models For React Native Mobile App Development"
        cardData={mobileAppServiceEngagementData}
        buttonText="Know More"
        redirect="/contact-us/"
      />
      <MultipleCardWithIconBG
        bgClass="bg-sectionBG"
        data={whyChooseUsDevelopmentData}
      />
      <Honors />
      <ClientReviews />

      <SeeingBelieving />
      <IndustriesWeServe darkBackground={false} />
      <HomePageBlogs />
      <CTASection
        descriptionClass="md:w-4/5"
        title="Build your next high-impact web application with a trusted partner. Let’s turn your idea into a responsive, secure, and scalable digital experience."
        buttonText="Get a Free Consultation"
      />
      <ServicesFAQ />
    </>
  );
};

export default ReactNativeAppDevelopmentServices;
