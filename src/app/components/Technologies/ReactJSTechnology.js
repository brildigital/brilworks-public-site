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
import ButtonV2 from "../Common/ButtonV2";
import Cal from "@calcom/embed-react";
import Heading from "../HTMLComponents/Heading";

const ServicesSection = dynamic(() => import("../Common/ServicesSection"));
const TechStackWeWorkWith = dynamic(() => import("./TechStackWeWorkWith"));
const HireTeamSolutions = dynamic(() => import("./HireTeamSolutions"));
const HiringModels = dynamic(() => import("./HiringModels"));
const ReactJSFAQs = dynamic(() => import("./TechnologyFAQ"));
const TechnologyDevelopers = dynamic(() => import("./TechnologyDevelopers"));
const TechnologyCombination = dynamic(() => import("./TechnologyCombination"));
const SolutionContactForm = dynamic(
  () => import("../Solution/SolutionContactForm"),
);

const HireDevelopersInThreeSteps = dynamic(
  () => import("../HireTeam/HireDevelopersInThreeSteps"),
);
const HireInFourSteps = dynamic(() => import("../HireTeam/HireInFourSteps"));
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

  const reactJSService = {
    title: "Our ReactJS Development Services",
    desc: "Brilworks offers a range of services to help you unlock modern web capabilities—no matter the scale or complexity of your project.",
    buttonText: "Get Quote",
    servicesList: [
      {
        title: "Custom Application Development",
        value: "reactjs-1",
        imageSrc: "/images/v2/custom-application-development-img.webp",
        description:
          "We design and deliver dynamic, scalable web and mobile applications with ReactJS and Next.js, ensuring smooth user experiences and solid technical foundations.",
      },
      {
        title: "Legacy Modernization",
        value: "reactjs-2",
        imageSrc: "/images/v2/legacy-modernization-img.webp",
        description:
          "Replace outdated front-ends with fast, SEO-friendly React apps, or migrate from older frameworks to a future-ready stack.",
      },
      {
        title: "Real-time Dashboards & PWAs",
        value: "reactjs-3",
        imageSrc: "/images/v2/realtime-dashboards-PWAs-img.webp",
        description:
          "Build analytics dashboards, PWAs, and live data interfaces using best practices for performance and engagement.",
      },
      {
        title: "eCommerce & SaaS Platforms",
        value: "reactjs-4",
        imageSrc: "/images/v2/e-eommerce-saas-platforms-img.webp",
        description:
          "Develop intuitive dashboards, product catalogs, portals, and user management systems for online businesses.",
      },
      {
        title: "Mobile with React Native",
        value: "reactjs-5",
        imageSrc: "/images/v2/mobile-with-react-native-img.webp",
        description:
          "Extend your product’s reach with mobile apps using React Native—built for both iOS and Android with a shared codebase.",
      },
    ],
  };

  const why100PlusCompaniesTrust = [
    {
      title: "Top-tier talent",
      description:
        "Each developer is evaluated for React, Next.js, TypeScript, and UI/UX excellence.",
      icon: "/images/v2/Senior_talent_at_competitive_rates.svg",
    },
    {
      title: "Reliable results",
      description:
        "200+ successful projects, average 5-star client rating, brands in 12+ countries.",
      icon: "/images/v2/proven-track-record.svg",
    },
    {
      title: "Flexible models",
      description:
        "Dedicated experts or on-demand teams that adapt to your preferred workflows.",
      icon: "/images/v2/flexible-engagement.svg",
    },
    {
      title: "Seamless collaboration",
      description:
        "Work in your timezone, with transparent updates and easy communication.",
      icon: "/images/v2/partnership.png",
    },
    {
      title: "Client focus",
      description:
        "Custom solutions, proactive support, and a commitment to your long-term success.",
      icon: "/images/v2/client-centric-icon.svg",
    },
  ];

  return (
    <>
      <HireTeamHeroSection
        technologyText={"Hire ReactJS Developers"}
        title="Hire ReactJS Developers, Onboarded in 48 Hours"
        description="Build fast, scalable web apps with India’s top ReactJS engineers. Vetted talent, onboarded in days — not months."
        imageSrc="/images/v2/hire_reactJS_hero_img.webp"
        buttonLabel="Explore Reactjs Development"
      />
      <MultipleCardInGrid
        title="Why Outsource ReactJS Development from Brilworks?"
        description="At Brilworks, our ReactJS specialists bring proven skills in building interactive, high-performance user interfaces and robust enterprise systems."
        cardData={why100PlusCompaniesTrust}
      />
      <ServicesSection
        sectionId="services-one"
        bgClass="bg-themeLight"
        serviceData={reactJSService}
      />
      <div className="bg-themeLight">
        <div className="container max-w-7xl mx-auto py-10">
          <ButtonV2
            label="Explore More"
            redirect="/reactjs-development-services/"
            className="!w-fit mx-auto hover:text-themeColor"
          />
        </div>
      </div>
      <HireInFourSteps />
      {/* <BenefitOfHiringDevelopers /> */}
      <TechnologyDevelopers />
      <TechnologyCombination />
      <TechStackWeWorkWith active="frontend" techStackList={techStackList} />
      <HireTeamSolutions />
      <HiringModels />
      <HireDevelopersInThreeSteps
        bgClass="bg-themeLight"
        title="ReactJS Developers"
      />
      <HomePageBlogs />
      <SolutionContactForm bgClassName="svc-mid-cta-bg" />
      <section className="bg-themeLight">
        <div className="max-w-7xl main-section-padding-top mx-auto text-center">
          <Heading
            type="h2"
            className="text-colorBlack lg:!text-[34px] md:!text-3xl !text-2xl"
            text="Ready to Hire Elite ReactJS Developers?"
          />

          <p className="max-w-3xl mx-auto md:text-lg text-base !pt-[10px]">
            Submit Your Requirements or Book a Free 30-Minute Consultation to
            get expert profiles within 24 hours. Scale your vision with
            Brilworks today!
          </p>

          <div className="w-full mt-10">
            <Cal
              calLink="vikas-singh-bril/30-min-product-eng-review"
              config={{ theme: "light" }}
            />
          </div>
        </div>
      </section>
      <ReactJSFAQs />
    </>
  );
};

export default ReactJSTechnology;
