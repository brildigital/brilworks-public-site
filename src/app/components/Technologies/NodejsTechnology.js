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

const HireTeamSolutions = dynamic(() => import("./HireTeamSolutions"));
const ServicesSection = dynamic(() => import("../Common/ServicesSection"));
const HiringModels = dynamic(() => import("./HiringModels"));
const NodeJSFAQs = dynamic(() => import("./TechnologyFAQ"));
const TechnologyDevelopers = dynamic(() => import("./TechnologyDevelopers"));
const SolutionContactForm = dynamic(
  () => import("../Solution/SolutionContactForm"),
);
const HireDevelopersInThreeSteps = dynamic(
  () => import("../HireTeam/HireDevelopersInThreeSteps"),
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

const whenToHireData = {
  title: "When to hire a Node.js developer",
  subtitle:
    "Node.js isn't the right call for every project. Here's when bringing on a Node.js engineer pays off — fast.",
  cards: [
    {
      title: "You're building real-time features",
      description:
        "Live chat, collaborative editing, multiplayer experiences, streaming dashboards, notification systems. Node.js's event-driven architecture handles thousands of concurrent WebSocket connections without breaking a sweat — which is why Slack, Trello, and Discord run on it.",
      icon: "/images/v2/why-n-1.svg",
    },
    {
      title: "You need APIs that scale",
      description:
        "High-throughput REST and GraphQL APIs, microservices, third-party integrations, mobile app backends. Node.js handles 10,000+ requests per second on modest hardware, making it the default choice for API-first products that need to scale without ballooning infrastructure costs.",
      icon: "/images/v2/why-n-5.svg",
    },
    {
      title: "You're modernizing a legacy backend",
      description:
        "Aging PHP, Java, or .NET systems that are expensive to maintain, slow to deploy, and impossible to hire for. Node.js migrations can be phased — strangler-fig style — so you replace one service at a time without a risky big-bang rewrite. Most of our clients see 3-5x faster deploy cycles within six months.",
      icon: "/images/v2/why-n-3.svg",
    },
    {
      title: "Your frontend team already writes JavaScript",
      description:
        "If your frontend runs on React, Vue, or Angular, putting Node.js on the backend means one language across the stack. Engineers move between frontend and backend without context-switching. Code, types, and validation logic get shared instead of rewritten. Hiring gets easier because your talent pool doubles.",
      icon: "/images/v2/why-n-8.svg",
    },
  ],
};

const nodeJSService = {
  title: "Our Node.js Development Services",
  desc: "Backed by years of specialized experience, our Node.js developers deliver enterprise-grade solutions that combine technical excellence with strategic business alignment.",
  buttonText: "Get Quote",
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
        title="Hire a Node.js developer in 72 hours"
        description="Add senior Node.js engineers to your team in 72 hours. Every developer is pre-vetted by our engineering team, works in your timezone, and is ready to ship from day one."
        imageSrc="/images/v2/hire_node_hero_img.webp"
      />
      <MultipleCardInGrid
        title="Why 100+ Companies Trust Us"
        description="From concept to deployment, we prioritize technical excellence, agile methodologies, and innovative problem-solving to deliver solutions that drive growth. We don't just write Node.js code. We build high-performance backend solutions."
        cardData={why100PlusCompaniesTrust}
      />
      <ServicesSection
        sectionId="services-one"
        bgClass="bg-themeLight"
        serviceData={nodeJSService}
      />
      <TechnologyDevelopers bgClass="bg-white" />
      <TechStackWeWorkWith active="backend" techStackList={techStackList} />
      <HireTeamSolutions />
      <section className="bg-white">
        <div className="container max-w-[1280px] main-section-padding mx-auto reveal text-center">
          <h2 className="text-colorBlack lg:!text-[34px] md:!text-3xl !text-2xl font-bold !mb-3">
            {whenToHireData.title}
          </h2>
          <p className="md:text-lg text-base text-gray-500 !mb-8 md:!mb-10 max-w-[720px] mx-auto">
            {whenToHireData.subtitle}
          </p>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 md:gap-7">
            {whenToHireData.cards.map(({ title, description, icon }) => (
              <div
                key={title}
                className="flex flex-col items-center border rounded-2xl border-borderGray md:px-7.5 md:py-6 p-5 text-center"
              >
                <img src={icon} alt="" className="w-10 h-10 !mb-4" />
                <h3 className="text-colorBlack md:!text-xl !text-lg font-semibold !mb-3">
                  {title}
                </h3>
                <p className="md:text-base text-sm text-gray-500 flex-1">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <HiringModels />
      <HireDevelopersInThreeSteps
        bgClass="bg-themeLight"
        title="NodeJS Developers"
      />
      <HomePageBlogs />
      <SolutionContactForm bgClassName="svc-mid-cta-bg" />
      <NodeJSFAQs />
    </>
  );
};

export default NodejsTechnology;
