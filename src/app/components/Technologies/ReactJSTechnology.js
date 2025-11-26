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

const BrilworksAdvantage = dynamic(() => import("./BrilworksAdvantage"));
const ServicesSection = dynamic(() => import("../Common/ServicesSection"));
const MultipleCardWithIconBG = dynamic(() =>
  import("../Common/MultipleCardWithIconBG")
);
const TechStackWeWorkWith = dynamic(() => import("./TechStackWeWorkWith"));
const HireTeamSolutions = dynamic(() => import("./HireTeamSolutions"));
const HiringModels = dynamic(() => import("./HiringModels"));
const ReactJSFAQs = dynamic(() => import("./TechnologyFAQ"));
const TechnologyDevelopers = dynamic(() => import("./TechnologyDevelopers"));
const TechnologyCombination = dynamic(() => import("./TechnologyCombination"));
const SolutionContactForm = dynamic(() =>
  import("../Solution/SolutionContactForm")
);

const HireDevelopersInThreeSteps = dynamic(() =>
  import("../HireTeam/HireDevelopersInThreeSteps")
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

  const reactJsBenefits = {
    title: "Why ReactJS? A Strategic Choice for Modern Development",
    description: "",
    benefits: [
      {
        title: "Optimized Performance with Virtual DOM",
        description:
          "React’s virtual DOM transforms front-end development by updating only specific User Interface elements instead of entire pages. This precision cuts load times by 40% in data-heavy apps while keeping animations at 60fps. For mobile-first users, this leads to 3x lower bounce rates—crucial since 75% of users abandon sites that take over 3 seconds to load.",
        icon: "/images/v2/why-n-7.svg",
      },
      {
        title: "Cross-Platform Consistency",
        description:
          "React Native ensures a unified UI across platforms, sharing 90% of the code between iOS, Android, and web. This reduces development costs by $78K per year for a mid-sized project and keeps branding consistent. Shopify cut customer training costs by 22% using identical UX patterns.",
        icon: "/images/v2/cross-platform.svg",
      },
      {
        title: "SEO-Friendly Architecture",
        description:
          "React’s server-side rendering (Next.js) improves search rankings by boosting Google crawl speeds 20-35% compared to client-side SPAs. A luxury retailer increased organic traffic by 48% after moving from an AJAX-heavy user interface to React/Next.js.",
        icon: "/images/v2/seo-friendly.svg",
      },
      {
        title: "Long-Term Scalability",
        description:
          "React’s component-based architecture allows Airbnb to handle 100M+ users smoothly. We design UI elements as reusable modules—update a profile card once, deploy globally. Redux Toolkit reduces enterprise app bugs by 63%, ensuring scalable front-end development.",
        icon: "/images/v2/scale-project.svg",
      },
      {
        title: "Future-Proof Maintenance",
        description:
          "React’s one-way data flow keeps codebases easy to manage. A fintech client onboarded 12 developers in 3 days (down from 3 weeks pre-React) using self-documenting UI components, ensuring long-term front-end stability.",
        icon: "/images/v2/future-proof.svg",
      },
      {
        title: "Talent Availability",
        description:
          "React is the standard for 72% of Fortune 500 teams. We access this global talent pool to staff projects 3x faster than Vue or Angular specialists, ensuring expert front-end execution.",
        icon: "/images/v2/talent-availability.svg",
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
        title="Unlock Expert ReactJS Talent for Your Projects"
        description={
          <>
            Looking to build fast, modern web apps that engage users and scale
            with your business? Build lightning-fast web and mobile applications
            with India’s top ReactJS engineers.
            <br /> Brilworks helps you hire ReactJS developers who blend deep
            expertise with a focus on your ROI. From launching startups to
            modernizing enterprise SaaS, our team is trusted by digital leaders
            across industries.
          </>
        }
        imageSrc="/images/v2/reactjs-banner.webp"
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
      {/* <BenefitOfHiringDevelopers /> */}
      <TechnologyDevelopers />
      <TechnologyCombination />
      <TechStackWeWorkWith active="frontend" techStackList={techStackList} />
      <BrilworksAdvantage />
      <HireTeamSolutions />
      <MultipleCardWithIconBG data={reactJsBenefits} />
      <HiringModels />
      <HireDevelopersInThreeSteps
        bgClass="bg-themeLight"
        title="ReactJS Developers"
      />
      <HomePageBlogs />
      <SolutionContactForm />
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
              calLink="vikas-singh-bril/free-consultation"
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
