"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { scrollEffect } from "../lib/commonFunction";
import TechStackWeWorkWith from "./TechStackWeWorkWith";
import {
  faReact,
  faAngular,
  faVuejs,
  faNode,
  faJs,
  faHtml5,
  faCss3Alt,
  faDocker,
} from "@fortawesome/free-brands-svg-icons";
import HireTeamHeroSection from "../HireTeam/HireTeamHeroSection";
import MultipleCardInGrid from "../Common/MultipleCardInGrid";

const BrilworksAdvantage = dynamic(() => import("./BrilworksAdvantage"));
const HireTeamSolutions = dynamic(() => import("./HireTeamSolutions"));
const ServicesSection = dynamic(() => import("../Common/ServicesSection"));
const MultipleCardWithIconBG = dynamic(() =>
  import("../Common/MultipleCardWithIconBG")
);
const HiringModels = dynamic(() => import("./HiringModels"));
const NodeJSFAQs = dynamic(() => import("./TechnologyFAQ"));
const TechnologyDevelopers = dynamic(() => import("./TechnologyDevelopers"));
const SolutionContactForm = dynamic(() =>
  import("../Solution/SolutionContactForm")
);
const HireTeamDigitalTransformation = dynamic(() =>
  import("../HireTeam/HireTeamDigitalTransformation")
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

const techStackList = [
  {
    title: "Backend",
    value: "backend",
    items: [
      { label: "NodeJS", icon: faNode, color: "#68A063" },
      { label: "ExpressJS", iconifyIcon: "/images/express.svg" },
      { label: "NestJS", iconifyIcon: "/images/nestjs.svg" },
    ],
  },
  {
    title: "Frontend",
    value: "frontend",
    items: [
      { label: "ReactJS", icon: faReact, color: "#61DBFB" },
      { label: "AngularJS", icon: faAngular, color: "#DD0031" },
      { label: "VueJS", icon: faVuejs, color: "#42B883" },
    ],
  },
  {
    title: "Languages",
    value: "languages",
    items: [
      { label: "JavaScript", icon: faJs, color: "#F7DF1E" },
      {
        label: "TypeScript",
        iconifyIcon: "/images/typescript.svg",
      },
      { label: "HTML", icon: faHtml5, color: "#E34F26" },
      { label: "CSS", icon: faCss3Alt, color: "#1572B6" },
    ],
  },
  {
    title: "Databases",
    value: "databases",
    items: [
      {
        label: "MongoDB",
        iconifyIcon: "/images/mongodb.svg",
      },
      {
        label: "PostgreSQL",
        iconifyIcon: "/images/postgresql.svg",
      },
      { label: "MySQL", iconifyIcon: "/images/mysql.svg" },
    ],
  },
  {
    title: "Cloud & DevOps",
    value: "cloud-devops",
    items: [
      { label: "AWS", iconifyIcon: "/images/aws.svg" },
      { label: "Azure", iconifyIcon: "/images/azure.svg" },
      { label: "Docker", icon: faDocker, color: "#2496ED" },
      { label: "Kubernetes", iconifyIcon: "/images/kubernetes.svg" },
    ],
  },
];

const nodeJSService = {
  title: "Build Lightning-Fast Solutions With Our Node.js Development Services",
  desc: "Backed by years of specialized experience, our Node.js developers deliver enterprise-grade solutions that combine technical excellence with strategic business alignment.",
  buttonText: "Get a Quote for your Project",
  servicesList: [
    {
      title: "Web App Development",
      value: "nodejs-1",
      imageSrc: "/images/v2/web-development.webp",
      description:
        "We engineer high-traffic web applications that outperform industry benchmarks. Our deep understanding of Node.js’s event-driven architecture enables us to build solutions that maintain sub-second response times.",
    },
    {
      title: "API Development & Integration",
      value: "nodejs-2",
      imageSrc: "/images/v2/api-dev.webp",
      description:
        "Our track record includes 100+ mission-critical API implementations. We design secure RESTful/GraphQL APIs and 99.99% uptime SLAs, having integrated complex ecosystems spanning fintech platforms, IoT networks, and global ERP systems.",
    },
    {
      title: "Legacy Application Modernization",
      value: "nodejs-3",
      imageSrc: "/images/v2/legacy-modernization-leadership.webp",
      description:
        "We’ve successfully migrated 50+ legacy systems to Node.js with zero business disruption. Our phased modernization approach combines reverse-engineering expertise with future-ready architecture design.",
    },
    {
      title: "Microservices Development",
      value: "nodejs-4",
      imageSrc: "/images/v2/microservices-architecture-authority.webp",
      description:
        "Architects of 50+ production-grade Node.js microservices ecosystems, we implement containerized, Kubernetes-optimized solutions that enable true CI/CD. Our modular designs have helped enterprises achieve 5x faster feature deployments.",
    },
    {
      title: "Serverless Development",
      value: "nodejs-5",
      imageSrc: "/images/v2/serverless-development-innovators.webp",
      description:
        "We are a top-rated app development company in serverless Node.js implementations. We optimize cloud costs by reducing infrastructure expenses through intelligent cloud management.",
    },
    {
      title: "Node js Consulting",
      value: "nodejs-6",
      imageSrc: "/images/v2/node-js-consulting.webp",
      description:
        "Run high-performance Node.js applications with precision, backed by expert guidance and strategic support from our team. Whether you're launching your first Node.js project or optimizing for enterprise-scale growth, our consulting services deliver the insights and solutions you need to succeed.",
    },
  ],
};

const nodeJsBenefits = {
  title: "Why Choose Node.js Development?",
  description:
    "Node.js is widely used for real-time applications and scalable microservices, but scaling it properly requires careful management. Our Node.js developers help you navigate these challenges, ensuring smooth performance as your application grows.",
  benefits: [
    {
      title: "Non-Blocking Architecture for Speed",
      description:
        "Node.js processes requests asynchronously, eliminating delays in web applications like real-time chat, live streaming, or RESTful APIs. This ensures fast response times and seamless user experiences.",
      icon: "/images/v2/why-n-1.svg",
    },
    {
      title: "Lightweight & Resource-Efficient",
      description:
        "Its event-driven model minimizes server load, making it ideal for building scalable systems without excessive hardware costs. Perfect for startups and enterprises alike.",
      icon: "/images/v2/why-n-2.svg",
    },
    {
      title: "Microservices-Ready Ecosystem",
      description:
        "Node.js simplifies splitting monolithic apps into modular microservices, enabling independent scaling, faster updates, and easier maintenance in software development cycles.",
      icon: "/images/v2/why-n-3.svg",
    },
    {
      title: "High Concurrency Handling",
      description:
        "Designed to manage thousands of simultaneous connections, Node.js excels in high-quality platforms like gaming, IoT, or collaborative tools with heavy real-time traffic.",
      icon: "/images/v2/why-n-4.svg",
    },
    {
      title: "Optimized for RESTful API Development",
      description:
        "Node.js streamlines creating RESTful APIs, ensuring smooth communication between frontend and backend systems for data-driven web applications.",
      icon: "/images/v2/why-n-5.svg",
    },
    {
      title: "Unmatched Scalability",
      description:
        "Built for horizontal and vertical scaling, Node.js supports building scalable architectures that grow with user demand, from startups to global enterprises.",
      icon: "/images/v2/scale-project.svg",
    },
    {
      title: "Performance-Centric Design",
      description:
        "Node.js prioritizes performance optimization out of the box, reducing latency and CPU bottlenecks even in compute-heavy tasks like data analytics or real-time dashboards.",
      icon: "/images/v2/why-n-7.svg",
    },
    {
      title: "JavaScript Everywhere",
      description:
        "Leverage a unified programming language (JavaScript/TypeScript) across frontend and backend, streamlining software development and reducing context-switching for teams.",
      icon: "/images/v2/why-n-8.svg",
    },
  ],
};

const why100PlusCompaniesTrust = [
  {
    title: "No Time Zone Barriers",
    description:
      "Our remote Node.js teams work in your time zone for real-time collaboration and daily standups.",
    icon: "/images/v2/clock.svg",
  },
  {
    title: "Scalable, High-Performance Apps",
    description:
      "Build APIs and real-time systems optimized for 50k+ RPM with Redis caching and WebSocket efficiency.",
    icon: "/images/v2/medal-star.svg",
  },
  {
    title: "Cost-Effective Hiring",
    description:
      "Senior Node.js expertise at mid-level rates, with transparent billing and 35-60% cost savings versus in-house.",
    icon: "/images/v2/dollar-black.svg",
  },
  {
    title: "Flexible Engagement Models",
    description:
      "Choose dedicated teams, fixed-scope sprints, or hourly support—scale resources with 48-hour notice.",
    icon: "/images/v2/partnership.png",
  },
  {
    title: "Reliable 24/7 Support",
    description:
      "24/7 support with 40-minute response SLAs, uptime monitoring, and round-the-clock DevOps coverage.",
    icon: "/images/v2/24-7-support.svg",
  },
  {
    title: "Rapid Development",
    description:
      "Accelerate delivery with prebuilt modules, CI/CD pipelines, and 2-week agile sprints for shippable increments.",
    icon: "/images/v2/growth-midset-img.png",
  },
];
const NodejsTechnology = () => {
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
        technologyText="Hire NodeJS Developers"
        title={
          <>
            Hire Nodejs Developers: <br />
            Pre-Vetted Experts, Zero Hassle
          </>
        }
        description="Add Expert Node.js talent to your team in 72 hours. Get a pre-vetted, production-ready Node.js developer aligned with your timezone and workflow. As a leading Node.js development company, we specialize in crafting lightning-fast, scalable, and secure applications."
        imageSrc="/images/v2/nodejs-banner.webp"
      />
      <MultipleCardInGrid
        title="Why 100+ Companies Trust Us"
        description="From concept to deployment, we prioritize technical excellence, agile methodologies, and innovative problem-solving to deliver solutions that drive growth. We don't just write Node.js code. We build high-performance backend solutions."
        cardData={why100PlusCompaniesTrust}
      />
      <ServicesSection
        sectionId="hire-nodejs-developer"
        bgClass="bg-themeLight"
        serviceData={nodeJSService}
      />
      <TechnologyDevelopers bgClass="bg-white" />
      <HireTeamDigitalTransformation />
      <BenefitOfHiringDevelopers />
      <TechStackWeWorkWith active="backend" techStackList={techStackList} />
      <BrilworksAdvantage />
      <HireTeamSolutions />
      <MultipleCardWithIconBG data={nodeJsBenefits} />
      <HiringModels />
      <HireDevelopersInThreeSteps
        bgClass="bg-themeLight"
        title="NodeJS Developers"
      />
      <HireDevelopersPricingPlan title="NodeJS Developer" />
      <HomePageBlogs />
      <SolutionContactForm />
      <NodeJSFAQs />
    </>
  );
};

export default NodejsTechnology;
