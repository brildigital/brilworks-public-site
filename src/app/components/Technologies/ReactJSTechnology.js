"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { scrollEffect } from "../lib/commonFunction";
import {
  faReact,
  faAngular,
  faVuejs,
  faNode,
  faPhp,
  faJs,
  faHtml5,
  faCss3Alt,
  faDocker,
} from "@fortawesome/free-brands-svg-icons";
import HireTeamHeroSection from "../HireTeam/HireTeamHeroSection";
import MultipleCardInGrid from "../Common/MultipleCardInGrid";

const BrilworksAdvantage = dynamic(() => import("./BrilworksAdvantage"));
const HireTeamServices = dynamic(() => import("../HireTeam/HireTeamServices"));
const TechStackWeWorkWith = dynamic(() => import("./TechStackWeWorkWith"));
const HireTeamSolutions = dynamic(() => import("./HireTeamSolutions"));
const HiringModels = dynamic(() => import("./HiringModels"));
const WhyThisTech = dynamic(() => import("./WhyThisTech"));
const ReactJSFAQs = dynamic(() => import("./TechnologyFAQ"));
const TechnologyDevelopers = dynamic(() => import("./TechnologyDevelopers"));
const TechnologyCombination = dynamic(() => import("./TechnologyCombination"));
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

const techStackList = [
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
    title: "Backend",
    value: "backend",
    items: [
      { label: "NodeJS", icon: faNode, color: "#68A063" },
      { label: "Java", iconifyIcon: "/images/java.svg" },
      { label: "Python", iconifyIcon: "/images/python.svg" },
      { label: "PHP", icon: faPhp, color: "#777BB4" },
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
const ReactJSTechnology = () => {
  useEffect(() => {
    scrollEffect();
    window.addEventListener("scroll", scrollEffect);
    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);

  const why100PlusCompaniesTrust = [
    {
      title: "No Time Zone Barriers",
      description:
        "Our remote React developers work in your hours. Whether you’re in New York or Singapore. Early birds? We match your rhythm.",
      icon: "/images/v2/clock.svg",
    },
    {
      title: "Cross-Platform Mastery",
      description:
        "Web, mobile, IoT dashboards. we make React dance across platforms. Hire React developers who build once, deploy everywhere.",
      icon: "/images/v2/laptop.svg",
    },
    {
      title: "Costs 60% Less Than In-House",
      description:
        "Get senior talent at junior rates. No benefits. No turnover. Just React brilliance.",
      icon: "/images/v2/dollar-black.svg",
    },
    {
      title: "Flexible Engagement Models",
      description:
        "Project-based sprints, dedicated teams, or on-demand React developers. We bend to your business needs.",
      icon: "/images/v2/partnership.png",
    },
    {
      title: "Reliable 24/7 Support",
      description:
        "Our seasoned React experts deliver exceptional support and guidance at every step, ensuring your project achieves success with industry-leading insights.",
      icon: "/images/v2/24-7-support.svg",
    },
    {
      title: "Rapid Development",
      description:
        "Tight deadlines? No problem. Our React developers ship high-quality code at startup speed, without cutting corners.",
      icon: "/images/v2/growth-midset-img.png",
    },
  ];

  return (
    <>
      <HireTeamHeroSection
        technologyText="Hire ReactJS Developers"
        title="Hire ReactJS Developers to Fire Up Your Frontend"
        description="Our experienced Reactjs developers have built and maintained scalable, intuitive, and interactive applications that have served millions of users. If you’re planning on using React software development services, we’re the right partner for you."
        imageSrc="/images/v2/reactjs-banner.webp"
      />
      <MultipleCardInGrid
        title="Why 100+ Companies Trust Us"
        description="We don’t just write React code. We engineer user addiction. Here’s what sets us apart."
        cardData={why100PlusCompaniesTrust}
      />
      <HireTeamServices bgClass="bg-themeLight" />
      <BenefitOfHiringDevelopers />
      <TechnologyDevelopers />
      <TechnologyCombination />
      <TechStackWeWorkWith active="frontend" techStackList={techStackList} />
      <BrilworksAdvantage />
      <HireTeamSolutions />
      <WhyThisTech />
      <HiringModels />
      <HireDevelopersInThreeSteps
        bgClass="bg-themeLight"
        title="ReactJS Developers"
      />
      <HireDevelopersPricingPlan title="ReactJS Developer" />
      <HomePageBlogs />
      <SolutionContactForm />
      <ReactJSFAQs />
    </>
  );
};

export default ReactJSTechnology;
