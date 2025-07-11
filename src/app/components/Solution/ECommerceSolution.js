"use client";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { scrollEffect } from "../lib/commonFunction";
import SolutionHeroSection from "./SolutionHeroSection";
import ServicesSection from "../Common/ServicesSection";
import CTASection from "../Common/CTASection";
import TechStackWeWorkWith from "../Technologies/TechStackWeWorkWith";
import {
  faReact,
  faAngular,
  faVuejs,
  faNode,
  faPhp,
  faFigma,
  faJs,
  faHtml5,
  faCss3Alt,
  faDocker,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Heading from "../HTMLComponents/Heading";
import SolutionCostAndTimeLine from "./SolutionCostAndTimeLine";

const MultipleKeyValueWithBG = dynamic(() =>
  import("../Common/MultipleKeyValueWithBG")
);
const MultipleCardInGrid = dynamic(() =>
  import("../Common/MultipleCardInGrid")
);
const FintechFAQ = dynamic(() => import("./SolutionFAQ"));
const SeeingBelieving = dynamic(() => import("../Homepage/SeeingBelieving"));
const SolutionContactForm = dynamic(() => import("./SolutionContactForm"));
const SolutionEngagementAndHowCanStart = dynamic(() =>
  import("./SolutionEngagementAndHowCanStart")
);

const ECommerceSolution = () => {
  const eCommerceService = {
    title: "Our Comprehensive eCommerce App Development Services",
    desc: "We offer a full suite of services designed to power your growth in the competitive online marketplace:",
    buttonText: "Build E-Commerce App",
    servicesList: [
      {
        title: "Mobile and Web App Development",
        value: "fintech-service1-1",
        description:
          "Crafting bespoke applications for iOS and Android, alongside responsive web solutions, to meet your unique business requirements and ensure increased engagement.",
        imageSrc: "/images/v2/mobile-app-web-app.webp",
        imageAlt: "mobile-app-dev-banner",
      },
      {
        title: "UI/UX Design and Development",
        value: "fintech-service1-2",
        description:
          "Developing visually appealing and intuitive designs that provide seamless navigation, enhance user satisfaction, and set your application apart.",
        imageSrc: "/images/v2/ui-ux-design-and-development.webp",
        imageAlt: "ui-ux-design-dev-banner",
      },
      {
        title: "Platform-Specific Solutions",
        value: "fintech-service1-3",
        description:
          "Specialising in development for leading eCommerce platforms such as Magento, Shopify, WooCommerce, Adobe Commerce, BigCommerce, and Shopware, to build scalable and customisable online stores.",
        imageSrc: "/images/v2/Platform-Specific-Solutions.webp",
        imageAlt: "platform-specific-banner",
      },
      {
        title: "Advanced API Integrations",
        value: "fintech-service1-4",
        description:
          "Seamlessly integrating third-party APIs for payment gateways, shipping, analytics, and other critical functionalities to streamline operations and enhance user convenience.",
        imageSrc: "/images/v2/advanced-api-integrations.webp",
        imageAlt: "adv-api-banner",
      },
      {
        title: "Strategic Consulting and Digital Transformation",
        value: "fintech-service1-5",
        description:
          "Providing advisory services to help elaborate on long-term eCommerce roadmaps, including headless commerce architecture, microservices, and AI-driven personalisation.",
        imageSrc:
          "/images/v2/strategic-consulting-and-digital-transformation.webp",
        imageAlt: "strategy-consulting-banner",
      },
      {
        title: "Backend and Frontend Development",
        value: "fintech-service1-6",
        description:
          "Building robust and unified digital experiences from the ground up, ensuring high security, data privacy, speed, and efficient inventory management.",
        imageSrc: "/images/v2/backend-and-frontend-development.webp",
        imageAlt: "ongoing-maintenance-banner",
      },
      {
        title: "Ongoing Maintenance and Support",
        value: "fintech-service1-7",
        description:
          "Delivering continuous 24/7 support, timely updates, and performance monitoring to ensure your eCommerce application remains secure, stable, and up-to-date.",
        imageSrc: "/images/v2/ongoing-maintenance-and-support.webp",
        imageAlt: "ongoing-maintenance-banner",
      },
    ],
  };

  const why100PlusCompaniesTrust = [
    {
      title: "Proven Expertise and Experience",
      icon: "/images/v2/proven-expertise.svg",
      description:
        "We bring extensive experience in mobile app implementation and eCommerce IT, ensuring your project is handled by qualified, experienced specialists.",
    },
    {
      title: "Customised, Goal-Oriented Solutions",
      icon: "/images/v2/fi_8869087.svg",
      description:
        "Our services are meticulously designed to future-proof your retail strategy and build bespoke applications that precisely align with your specific business goals.",
    },
    {
      title: "Enhanced User Experience and Engagement",
      icon: "/images/v2/fi_16743164.svg",
      description:
        "We specialize in creating visually appealing, intuitive, conversion-driven designs, ensuring  seamless navigation, engagement, and a personalized shopping experience.",
    },
    {
      title: "Robust Security and Performance",
      icon: "/images/v2/security.svg",
      description:
        "We prioritize the confidentiality and integrity of your data. Our development with ISO 27001-approved security processes and GDPR standards ensures secure data exchange.",
    },
    {
      title: "Comprehensive Service and Support",
      icon: "/images/v2/fi_8623753.svg",
      description:
        "From initial strategy and research to design, integration, and deployment, we offer a full suite of end-to-end services, with 24/7 support and maintenance.",
    },
    {
      title: "Agile Methodology and Transparency",
      icon: "/images/v2/fi_2907826.svg",
      description:
        "We leverage agile development practices to deliver solutions within stipulated timelines without compromising on quality.",
    },
  ];

  const fintechExperienceShowCase = [
    {
      value: "100%",
      description: "Safe & Secure Products",
      color: "#E5F4FF",
    },
    {
      value: "25+",
      description: "E-Commerce Developers",
      color: "#FFE2E5",
    },

    {
      value: "100%",
      description: "Compliance with Financial Standards",
      color: "#E9FFE2",
    },
    {
      value: "Agile",
      description: "Development Team",
      color: "#FFE8FC",
    },
    {
      value: "Expert",
      description: "Knowledge",
      color: "#F4ECFF",
    },
    {
      value: "API",
      description: "Third-party API Development & Integration",
      color: "#FCFFE3",
    },
  ];

  const techStackList = [
    {
      title: "Mobile Development",
      value: "mobile-development",
      items: [
        { label: "Java", iconifyIcon: "/images/java.svg" },
        { label: "Kotlin", iconifyIcon: "/images/kotlin-icon.svg" },
        { label: "Swift", iconifyIcon: "/images/swift-language.svg" },
        { label: "React Native", icon: faReact, color: "#61DBFB" },
        { label: "Android Studio", iconifyIcon: "/images/android-studio.svg" },
        { label: "Flutter", iconifyIcon: "/images/flutter.svg" },
      ],
    },
    {
      title: "Android Development Tools",
      value: "android",
      items: [
        { label: "XCode", iconifyIcon: "/images/xcode.svg" },
        { label: "Appcode", iconifyIcon: "/images/android-code.svg" },
        { label: "Android UI", iconifyIcon: "/images/android-ui.svg" },
        { label: "Jetpack Compose", iconifyIcon: "/images/jetpackcompose.svg" },
        { label: "UIKit", iconifyIcon: "/images/uikit.svg" },
        { label: "SwiftUI", iconifyIcon: "/images/swiftui.svg" },
      ],
    },
    {
      title: "Web Front End",
      value: "frontend",
      items: [
        { label: "AngularJS", iconifyIcon: "/images/angular-icon.svg" },
        { label: "ReactJS", icon: faReact, color: "#61DBFB" },
        { label: "Figma", iconifyIcon: "/images/figma-icon.svg" },
      ],
    },
    {
      title: "Back-end",
      value: "baclend",
      items: [
        { label: "Java", iconifyIcon: "/images/java.svg" },
        { label: "NodeJS", iconifyIcon: "/images/node-icon.svg" },
        { label: "Python", iconifyIcon: "/images/python.svg" },
        { label: "PHP", icon: faPhp, color: "#777BB4" },
        { label: "Golang", iconifyIcon: "/images/golang.svg" },
        { label: ".Net", iconifyIcon: "/images/dot-net.svg" },
        { label: "Hapi.js", iconifyIcon: "/images/hapi.svg" },
        { label: "Meteor.js", iconifyIcon: "/images/meteor-icon.svg" },
        { label: "Socket.io", iconifyIcon: "/images/socket-io.svg" },
        { label: "Spring", iconifyIcon: "/images/spring-3.svg" },
      ],
    },
  ];
  const eCommerceCostAndTimeline = {
    title: "Ecommerce App Development Cost & Timeline",
    description:
      "We offer scalable development tiers designed to balance cost, speed, and feature depth.",
    listItems: [
      {
        title: "For Solo founders and startups",
        icon: "/images/v2/fi_10650262.svg",
        budgetRange: "$15K – $55K",
        includes: [
          "Mobile-friendly storefront design",
          "Standard cart, checkout, and payment integration (Stripe, Razorpay)",
          "Lightweight admin dashboard for catalog and orders",
        ],
        timeline: "10–16 weeks",
        engagementModel: "Fixed scope / Agile with capped T&M",
      },
      {
        title: "For mid-sized businesses",
        icon: "/images/v2/fi_14991761.svg",
        budgetRange: "$55K – $190K",
        includes: [
          "Multi-vendor or personalized catalog logic",
          "POS system sync and stock management",
          "Loyalty engine and promo campaigns",
          "Traffic handling for seasonal sales",
          "Optional mobile apps (PWA or native)",
        ],
        timeline: "4–8 months",
        engagementModel: "Agile / T&M with milestone-based billing",
      },
      {
        title: "For enterprises",
        icon: "/images/v2/fi_3137795.svg",
        budgetRange: "$190K+",
        includes: [
          "Unified web + mobile platforms",
          "Multi-language and currency support",
          "CRM/ERP integration for operations",
          "Product search, AI-powered recommendations",
          "Omnichannel readiness (chatbots, WhatsApp, voice search)",
        ],
        timeline: "8–14 months",
        engagementModel: "Dedicated squad / Phased rollout strategy",
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
      <SolutionHeroSection
        technologyText="E-Commerce App Development"
        title={
          <>
            Elevate Your Online Retail: Custom
            <br /> E-Commerce App Development
          </>
        }
        description="Revolutionise your digital presence with cutting-edge mobile and web solutions tailored for superior performance and growth. Our expert ecommerce app development services empower businesses to connect with customers seamlessly, driving conversions and fostering lasting brand loyalty."
        buttonText="Hire E-Commerce Developer"
        imageSrc="/images/v2/e-commerce-industry-banner.webp"
      />
      <ServicesSection
        sectionId="fintech-services-one"
        serviceData={eCommerceService}
      />

      <MultipleCardInGrid
        title="Why Partner with Us for Your eCommerce App Development?"
        cardData={why100PlusCompaniesTrust}
      />
      <CTASection
        title="Partner with us to transform your vision into a highly effective and successful eCommerce application that propels your brand forward."
        buttonText="Let's Build"
        darkBackground
      />
      <TechStackWeWorkWith
        active="mobile-development"
        techStackList={techStackList}
      />
      <SeeingBelieving buttonText="Work With Us" title="Our Portfolio" />
      <SolutionCostAndTimeLine costData={eCommerceCostAndTimeline} />
      <MultipleKeyValueWithBG
        bgClass="bg-white"
        title="Why Should You Hire AWS Developers from Brilworks?"
        description="We offer next-gen fintech solutions, which allow you to embrace innovation, improve efficiency, and comply with regulations. Our fintech software developers are always ready to help develop innovative solutions that optimize your customers’ experience and better manage risk in the financial industry."
        keyValueData={fintechExperienceShowCase}
      />

      <SolutionEngagementAndHowCanStart />
      <SolutionContactForm
        title="How Can You Get Started?"
        description="Ready to revolutionise your online retail presence? Connect with our eCommerce App Development experts today to discuss your vision and discover how a tailored solution can drive your business growth. Let's build your next success story together."
      />
      <FintechFAQ />
    </>
  );
};

export default ECommerceSolution;
