"use client";
import dynamic from "next/dynamic";
import ServiceHeroSection from "./ServiceHeroSection";
import CTASection from "../Common/CTASection";
import { faReact } from "@fortawesome/free-brands-svg-icons";
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
const TechStackWeWorkWith = dynamic(() =>
  import("../Technologies/TechStackWeWorkWith")
);
const SeeingBelieving = dynamic(() => import("../Homepage/SeeingBelieving"));
const HomePageBlogs = dynamic(() => import("../Homepage/HomePageBlogs"));
const ServicesFAQ = dynamic(() => import("./ServicesFAQ"));

const FitnessAppDevelopmentServices = () => {
  const mobileAppServices = {
    title: "Core Mobile Development Services",
    servicesList: [
      {
        title: "Native App Development",
        value: "web-service-1",
        description:
          "Using Swift and Kotlin, we build native apps that integrate fully with device hardware including cameras, sensors, and biometric systems, following platform design guidelines.",
        imageSrc: "/images/v2/Native-App-Development.webp",
        imageAlt: "Native App Development image",
      },
      {
        title: "Cross-Platform Development",
        value: "web-service-2",
        description:
          "We build high-performance cross-platform apps using modern frameworks like React Native and Flutter for both iOS and Android from a single codebase, using standard practices and development guidelines.",
        imageSrc: "/images/v2/Cross-Platform-Development.webp",
        imageAlt: "Cross-Platform Development image",
      },
      {
        title: "Progressive Web App (PWA) Development",
        value: "web-service-3",
        description:
          "Brilworks offers Progressive Web Apps development, combined with our decade of expertise in mobile and mobile development. PWAs deliver application functionality through web browsers while providing features typically associated with native apps.",
        imageSrc: "/images/v2/Progressive-Web-App-(PWA) Development).webp",
        imageAlt: "PWA development image",
      },
      {
        title: "IoT App Development",
        value: "web-service-4",
        description:
          "Our IoT software development services product engineering, architecture design, testing, and post-development support.  Our IoT applications provide mobile interfaces for connected devices and systems.",
        imageSrc: "/images/v2/IoT-App-Development.webp",
        imageAlt: "IoT App Development image",
      },
      {
        title: "Wearable App Development",
        value: "web-service-5",
        description:
          "We design wearable applications for devices like smartwatches and fitness trackers. These applications prioritize essential information and quick interactions, accounting for limited screen space and brief usage sessions.",
        imageSrc: "/images/v2/Wearable-App-Development.webp",
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

  const techStackList = [
    {
      title: "Native Platforms",
      value: "native",
      items: [
        { label: "Swift", iconifyIcon: "/images/swift-language.svg" },
        { label: "Kotlin", iconifyIcon: "/images/kotlin-icon.svg" },
        {
          label: "Objective-C",
          iconifyIcon: "/images/v2/objective-c-icon.png",
        },
        { label: "Java", iconifyIcon: "/images/java.svg" },
      ],
    },
    {
      title: "Cross-Platform",
      value: "cross-platform",
      items: [
        { label: "React Native", icon: faReact, color: "#61DBFB" },
        { label: "Flutter", iconifyIcon: "/images/flutter.svg" },
      ],
    },
    {
      title: "Server & Data",
      value: "server-data",
      items: [
        { label: "Python", iconifyIcon: "/images/python.svg" },
        { label: "NodeJS", iconifyIcon: "/images/node-icon.svg" },
        { label: "Firebase", iconifyIcon: "/images/firebase-icon.svg" },
        { label: "AWS", iconifyIcon: "/images/aws.svg" },
        { label: "Azure", iconifyIcon: "/images/azure.svg" },
      ],
    },
    {
      title: "Design & UX",
      value: "design-ux",
      items: [
        { label: "Figma", iconifyIcon: "/images/figma.png" },
        { label: "Sketch", iconifyIcon: "/images/sketch-svgrepo.png" },
      ],
    },
  ];

  return (
    <>
      <ServiceHeroSection
        title="Mobile Application Development Services"
        description="We build mobile applications for iOS and Android platforms using native and cross-platform technologies, covering the complete lifecycle, from initial requirements through design, development, testing, and ongoing maintenance. Our team has delivered over 100 mobile projects across healthcare, finance, retail, and enterprise sectors."
        buttonText="Start Your App Journey"
        imageSrc="/images/v2/mobile-app-dev-banner.webp"
      />
      <AboutOurExpertise
        title="Brilwork’s Mobile Application Development Expertise"
        description1="Brilworks provides mobile development services with a focus on technical quality and project delivery.Our teams consist of experienced developers with expertise in both native and cross-platform development."
        description2="We build applications designed to scale with your business. Our process includes clear project planning, regular communication, and defined milestones. We provide transparent cost estimates and work within agreed timelines."
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
        serviceData={mobileAppServices}
      />
      <MultipleCardInGrid
        // bgClass="bg-themeLight"
        title="Engagement Models For Mobile App Development"
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
      <TechStackWeWorkWith
        title="The Technology Environment We Use"
        active="native"
        techStackList={techStackList}
      />
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

export default FitnessAppDevelopmentServices;
