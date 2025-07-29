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
const BenefitOfHiringDevelopers = dynamic(() =>
  import("./BenefitOfHiringDevelopers")
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
    title:
      "Build Feature-rich Frontend Applications With Our React Development Services",
    buttonText: "Get a Quote for your Project",
    servicesList: [
      {
        title: "Web Development",
        value: "reactjs-1",
        imageSrc: "/images/v2/web-development.webp",
        description:
          "Transform slow, clunky websites into React-powered rockets—3.2s average load time improvement in client projects.",
      },
      {
        title: "Migration and Updation Services",
        value: "reactjs-2",
        imageSrc: "/images/v2/migration-and-updation-services.webp",
        description:
          "Legacy app? We’ll rebuild it in React so smoothly, the only thing users will notice is the improvement.",
      },
      {
        title: "High-Performing PWAs",
        value: "reactjs-3",
        imageSrc: "/images/v2/high-performing-PWAs.webp",
        description:
          "We build PWAs that outpace native apps, 100% offline mode, 0% app store fees, and lightning-fast performance.",
      },
      {
        title: "eCommerce Development",
        value: "reactjs-4",
        imageSrc: "/images/v2/eCommerce-development.webp",
        description:
          "React storefronts built to convert—dynamic hydration, psychology-backed flows, and seamless user experiences that drive sales.",
      },
      {
        title: "SPA Development",
        value: "reactjs-5",
        imageSrc: "/images/v2/SPA-development.webp",
        description:
          "Blazing-fast SPAs, instant interactivity, smooth navigation, and scroll restoration that remembers every pixel.",
      },
      {
        title: "Dashboard Development",
        value: "reactjs-6",
        imageSrc: "/images/v2/dashboard-development.webp",
        description:
          "Transform your data into decisions—sleek, intuitive dashboards that blend real-time analytics with elegant design, turning complex metrics into instant insights.",
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
        technologyText="Reactjs Development Services"
        title="Hire React.js Developers: Dedicated Experts in 72 hours"
        description="Our experienced Reactjs developers have built and maintained scalable, intuitive, and interactive applications that have served millions of users. If you’re planning on using React software development services, we’re the right partner for you."
        imageSrc="/images/v2/reactjs-banner.webp"
      />
      <MultipleCardInGrid
        title="Why 100+ Companies Trust Us"
        description="We don’t just write React code. We engineer user addiction. Here’s what sets us apart."
        cardData={why100PlusCompaniesTrust}
      />
      <ServicesSection
        sectionId="hire-reactjs-developer"
        bgClass="bg-themeLight"
        serviceData={reactJSService}
      />
      <BenefitOfHiringDevelopers />
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
      <ReactJSFAQs />
    </>
  );
};

export default ReactJSTechnology;
