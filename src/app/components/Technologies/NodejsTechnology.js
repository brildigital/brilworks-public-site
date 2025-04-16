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
const HireTeamServices = dynamic(() => import("../HireTeam/HireTeamServices"));
const WhyThisTech = dynamic(() => import("./WhyThisTech"));
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
      <HireTeamServices bgClass="bg-themeLight" />
      <TechnologyDevelopers bgClass="bg-white" />
      <HireTeamDigitalTransformation />
      <BenefitOfHiringDevelopers />
      <TechStackWeWorkWith active="backend" techStackList={techStackList} />
      <BrilworksAdvantage />
      <HireTeamSolutions />
      <WhyThisTech />
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
