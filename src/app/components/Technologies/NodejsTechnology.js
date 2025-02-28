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
const services = [
  {
    title: "Web App Development",
    description:
      "Build fast, scalable web apps with a backend that handles high traffic efficiently.",
    image: "/images/Web-Development.svg",
    alt: "Web App Development",
  },
  {
    title: "API Development & Integration",
    description:
      "Develop RESTful and GraphQL APIs that seamlessly integrate with your systems.",
    image: "/images/API-Integration.svg",
    alt: "API Development & Integration",
  },
  {
    title: "Migration & Modernization",
    description:
      "Upgrade legacy systems to Node.js for better performance and maintainability.",
    image: "/images/update.svg",
    alt: "Migration & Modernization",
  },
  {
    title: "Real-Time Applications",
    description:
      "Power chat apps, live streaming, and collaborative tools with real-time Node.js capabilities.",
    image: "/images/Real-Time-App.svg",
    alt: "Real-Time Applications",
  },
  {
    title: "Microservices Architecture",
    description:
      "Create modular, scalable applications with Node.js-based microservices.",
    image: "/images/microservices-architecture.svg",
    alt: "Microservices Architecture",
  },
  {
    title: "Serverless Development",
    description:
      "Build cost-efficient, scalable applications using Node.js with serverless architectures.",
    image: "/images/server-less.svg",
    alt: "Serverless Development",
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
                  Hire Node.js Developers: Pre-Vetted Experts, Zero Hassle
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
        <div className="mx-auto service_width xl:py-[2rem] py-[1rem] md:pt-[1.5rem] workpadd_borderTop end-to-end">
          <div className="grid grid-cols-1 md:grid-cols-5 md:flex-row gap-4 justify-between">
            <div className="end-To-end md:col-span-2">
              <div className="endTO_text solutions">
                <h2 className="!w-full p-0 uppercase text-left">
                  Build Lightning-Fast Solutions With Our Node.js Development
                  Services
                </h2>
              </div>
            </div>

            <div className="service_grid_img reveal md:col-span-3">
              <div className="flex flex-col overflow-y-auto custom-scrollbar md:h-[500px] md:gap-[40px] gap-[10px]">
                {services.map((service, index) => (
                  <div key={index} className="flex flex-col md:flex-row gap-6">
                    <div className="basis-[15%]">
                      <div className="flex md:justify-end">
                        <img
                          className="max-w-[48px] object-cover"
                          decoding="async"
                          loading="lazy"
                          src={service.image}
                          alt={service.alt}
                        />
                      </div>
                    </div>
                    <div className="service_txt basis-[85%]">
                      <div className="service_num">&lt; 0{index + 1}.</div>
                      <div className="service_title">
                        <h3>{service.title}</h3>
                      </div>
                      <div className="py-4">
                        <p>{service.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center xl:pt-[2rem] md:pt-[1.5rem] pt-[1rem]">
            <Button
              innerClassName="flex items-center justify-center gap-2"
              className="!pr-5"
              redirect="#section10_service"
              label="Get A Quote For Your Project"
              scrollingButton
              icon={
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="24px"
                  width="24px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.486 2 2 5.589 2 10c0 2.908 1.898 5.515 5 6.934V22l5.34-4.005C17.697 17.852 22 14.32 22 10c0-4.411-4.486-8-10-8zm0 14h-.333L9 18v-2.417l-.641-.247C5.67 14.301 4 12.256 4 10c0-3.309 3.589-6 8-6s8 2.691 8 6-3.589 6-8 6z"></path>
                  <path d="M7 7h10v2H7zm0 4h7v2H7z"></path>
                </svg>
              }
            />
          </div>
        </div>

        <TechnologyDevelopers />

        <BenefitOfHiringDevelopers />

        <TechnologyCombination />
        <TechStackWeWorkWith active="backend" techStackList={techStackList} />
      </section>
      <CommonSolutions />
      <WhyThisTech />
      <HiringModels />
      <ThreeStepstoHireDeveloper />

      <WhyShouldHireDevelopers />

      <SolutionContactForm />
      <NodeJSFAQs />
    </>
  );
};

export default NodejsTechnology;
