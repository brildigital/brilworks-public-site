"use client";
import Image from "next/image";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { scrollEffect } from "../lib/commonFunction";
import Button from "../Common/Button";
import TechStackWeWorkWith from "./TechStackWeWorkWith";
import {
  faReact,
  faAngular,
  faVuejs,
  faNode,
  faJava,
  faPython,
  faPhp,
  faJs,
  faHtml5,
  faCss3Alt,
  faAws,
  faMicrosoft,
  faDocker,
} from "@fortawesome/free-brands-svg-icons";

const BrilworksAdvantage = dynamic(() => import("./BrilworksAdvantage"));
const PerformanceOptAccordion = dynamic(() =>
  import("./PerformanceOptAccordion")
);
const CommonServices = dynamic(() => import("./CommonServices"));
const WhyFirstSection = dynamic(() => import("./WhyFirstSection"));
const CommonSolutions = dynamic(() => import("./CommonSolutions"));
const WhyThisTech = dynamic(() => import("./WhyThisTech"));
const HiringModels = dynamic(() => import("./HiringModels"));
const NodeJSFAQs = dynamic(() => import("./TechnologyFAQ"));
const TechnologyDevelopers = dynamic(() => import("./TechnologyDevelopers"));
const TechnologyCombination = dynamic(() => import("./TechnologyCombination"));
const WhyShouldHireDevelopers = dynamic(() =>
  import("./WhyShouldHireDevelopers")
);
const SolutionContactForm = dynamic(() =>
  import("../Solution/SolutionContactForm")
);
const BenefitOfHiringDevelopers = dynamic(() =>
  import("./BenefitOfHiringDevelopers")
);
const ThreeStepstoHireDeveloper = dynamic(() =>
  import("./ThreeStepstoHireDeveloper")
);
const HomePageBlogs = dynamic(() => import("../Homepage/HomePageBlogs"));

const firstSectionFeatures = [
  {
    heading: "No Time Zone Barriers",
    description:
      "Our remote Node.js teams work in your time zone for real-time collaboration and daily standups.",
    icon: "/images/No-Time-Zone-Barriers.svg",
  },
  {
    heading: "Scalable, High-Performance Apps",
    description:
      "Build APIs and real-time systems optimized for 50k+ RPM with Redis caching and WebSocket efficiency.",
    icon: "/images/scalable.svg",
  },
  {
    heading: "Cost-Effective Hiring",
    description:
      "Senior Node.js expertise at mid-level rates, with transparent billing and 35-60% cost savings versus in-house.",
    icon: "/images/Cost-Effective.svg",
  },
  {
    heading: "Flexible Engagement Models",
    description:
      "Choose dedicated teams, fixed-scope sprints, or hourly support—scale resources with 48-hour notice.",
    icon: "/images/Flexibility-in-Time.svg",
  },
  {
    heading: "Reliable 24/7 Support",
    description:
      "24/7 support with 40-minute response SLAs, uptime monitoring, and round-the-clock DevOps coverage.",
    icon: "/images/handSettingIcon.svg",
  },
  {
    heading: "Rapid Development",
    description:
      "Accelerate delivery with prebuilt modules, CI/CD pipelines, and 2-week agile sprints for shippable increments.",
    icon: "/images/Development.svg",
  },
];
const nodeJsServices = [
  {
    imgSrc: "/images/Web-Development.svg",
    title: "Web App Development",
    description:
      "We engineer high-traffic web applications that outperform industry benchmarks. Leveraging Node.js’s event-driven architecture, we build solutions that maintain sub-second response times, even with 10,000+ concurrent users. Our battle-tested approach ensures seamless scalability and 24/7 reliability.",
  },
  {
    imgSrc: "/images/API-Integration.svg",
    title: "API Development & Integration",
    description:
      "Our track record includes 100+ mission-critical API implementations. We design RESTful/GraphQL APIs with military-grade security and 99.99% uptime SLAs, having integrated complex ecosystems spanning fintech platforms, IoT networks, and global ERP systems.",
  },
  {
    imgSrc: "/images/update.svg",
    title: "Legacy Modernization Leadership",
    description:
      "We’ve successfully migrated 50+ legacy systems to Node.js with zero business disruption. Our phased modernization approach combines reverse-engineering expertise with future-ready architecture design, typically achieving 3x performance improvements and 40% maintenance cost reductions.",
  },
  {
    imgSrc: "/images/Real-Time-App.svg",
    title: "Real-Time Solution Specialists",
    description:
      "Developers of enterprise-ready real-time systems, we create collaborative platforms and live data solutions using Node.js’s native capabilities. Our implementations power mission-critical communication tools and instant-update interfaces across industries.",
  },
  {
    imgSrc: "/images/microservices-architecture.svg",
    title: "Microservices Architecture Authority",
    description:
      "Architects of 50+ production-grade Node.js microservices ecosystems, we implement containerized, Kubernetes-optimized solutions that enable true CI/CD. Our modular designs have helped enterprises achieve 5x faster feature deployments.",
  },
  {
    imgSrc: "/images/server-less.svg",
    title: "Serverless Development Innovators",
    description:
      "Leaders in serverless Node.js implementations, we optimize cloud costs while maintaining elastic scalability. Our solutions have reduced clients’ infrastructure expenses by 60%+ through intelligent AWS Lambda/Azure Functions architectures.",
  },
];
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
      <section className="portfolio mt-[6rem]">
        <div className="mx-auto service_width">
          <div className="relative">
            <p>
              <Image
                className="h-[46vh] md:block hidden rounded-[20px]"
                src="https://a.storyblok.com/f/219851/1398x780/f5221a3182/node-services-banner.webp"
                alt="Node banner"
                priority
                width="1398"
                height="780"
                sizes="(min-width: 1040px) 80vw, (min-width: 640px) 91.84vw, calc(100vw - 30px)"
                media="(min-width: 768px)"
              />
              <Image
                className="h-[300px] block md:hidden rounded-[20px]"
                src="/images/node-banner-mobile.webp"
                alt="Node banner"
                priority
                width="320"
                height="250"
                sizes="(min-width: 1040px) 80vw, (min-width: 640px) 91.84vw, calc(100vw - 30px)"
                media="(max-width: 767px)"
              />
            </p>
            <div className="service_sec1_position">
              <div className="flex self-end justify-between w-[96%] mx-auto">
                <div className="txt">
                  <div className="how-we flex fle items-center gap-[1rem]">
                    <h1 className="font-style-solution-head line-height-normal uppercase xl:text-[4.5rem] lg:text-[66px] md:text-[50px] sm:text-[55px] text-[30px]">
                      HIRE
                      <div className="flex items-center gap-1">
                        <Image
                          className="w-[auto]"
                          src="/images/1.png"
                          alt="curly bracket"
                          width="24"
                          height="94"
                        />
                        NODEJS
                        <Image
                          className="w-[auto]"
                          src="/images/2.png"
                          alt="curly bracket"
                          width="24"
                          height="94"
                        />
                      </div>
                      DEVELOPERS
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto service_width xl:py-[6rem] md:py-[4rem] py-[2rem]">
          <div className="flex !flex-col lg:!flex-row gap-[1.5rem]">
            <div className="basis-[45%]">
              <div className="home_sec2_txt3 like_text">
                <p className="!p-0 !ml-[0] !w-full uppercase">
                  Hire Nodejs Developers: Pre-Vetted Experts, Zero Hassle
                </p>
              </div>
            </div>
            <div className="basis-[55%]">
              <div className="home_sec2_txt4">
                <p className="!text-left !text-[1.2rem]">
                  Add Expert Node.js talent to your team in 72 hours. Get a
                  pre-vetted, production-ready Node.js developer aligned with
                  your timezone and workflow. As a leading Node.js development
                  company, we specialize in crafting lightning-fast, scalable,
                  and secure applications.
                </p>

                <div className="flex !flex-col md:!flex-row gap-6 mt-8 md:mt-[50px]">
                  <div>
                    <Button
                      innerClassName="flex items-center justify-center gap-1"
                      className="!pr-5"
                      redirect="#pricing"
                      label="Plan & Pricing"
                      icon="right-arrow"
                      scrollingButton
                    />
                  </div>
                  <div>
                    <Button
                      innerClassName="flex items-center justify-center gap-1"
                      className="!pr-5"
                      redirect="#section10_service"
                      label="Hire NodeJS Developers"
                      icon="right-arrow"
                      scrollingButton
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <WhyFirstSection
          title="Why 100+ Companies Trust Us"
          description="From concept to deployment, we prioritize technical excellence, agile methodologies, and innovative problem-solving to deliver solutions that drive growth. We don't just write Node.js code. We build high-performance backend solutions."
          firstSectionFeatures={firstSectionFeatures}
        />
        <PerformanceOptAccordion />
        <CommonServices
          title="Build Lightning-Fast Solutions With Our Node.js Development
          Services"
          services={nodeJsServices}
        />
        <TechnologyDevelopers />
        <BenefitOfHiringDevelopers />
        <TechnologyCombination />
        <TechStackWeWorkWith active="backend" techStackList={techStackList} />
      </section>
      <BrilworksAdvantage />
      <CommonSolutions />
      <WhyThisTech />
      <HiringModels />
      <ThreeStepstoHireDeveloper />
      <HomePageBlogs />
      <WhyShouldHireDevelopers />

      <SolutionContactForm />
      <NodeJSFAQs />
    </>
  );
};

export default NodejsTechnology;
