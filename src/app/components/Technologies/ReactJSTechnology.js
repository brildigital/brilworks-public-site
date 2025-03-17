"use client";
import { useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { scrollEffect } from "../lib/commonFunction";
import Button from "../Common/Button";
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
const CommonServices = dynamic(() => import("./CommonServices"));
const TechStackWeWorkWith = dynamic(() => import("./TechStackWeWorkWith"));
const ReactJSSolutions = dynamic(() => import("./CommonSolutions"));
const ReactJSHiringModels = dynamic(() => import("./HiringModels"));
const WhyReact = dynamic(() => import("./WhyThisTech"));
const Why90ClientComeBack = dynamic(() => import("./WhyFirstSection"));
const ReactJSFAQs = dynamic(() => import("./TechnologyFAQ"));
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
      "Our remote React developers work in your hours. Whether you’re in New York or Singapore. Night owls? Early birds? We match your rhythm.",
    icon: "/images/No-Time-Zone-Barriers.svg",
  },
  {
    heading: "Cross-Platform Mastery",
    description:
      "Web, mobile, IoT dashboards. we make React dance across platforms. Hire React developers who build once, deploy everywhere.",
    icon: "/images/cross-platform.svg",
  },
  {
    heading: "Costs 60% Less Than In-House",
    description:
      "Get senior talent at junior rates. No benefits. No turnover. Just React brilliance.",
    icon: "/images/Cost-Effective.svg",
  },
  {
    heading: "Flexible Engagement Models",
    description:
      "Project-based sprints, dedicated teams, or on-demand React developers. Monthly? Hourly? Fixed-scope? We bend to your business needs.",
    icon: "/images/Flexibility-in-Time.svg",
  },
  {
    heading: "24/7 Support",
    description:
      "Our seasoned React experts deliver exceptional support and guidance at every step, ensuring your project achieves success with industry-leading insights.",
    icon: "/images/handSettingIcon.svg",
  },
  {
    heading: "Rapid Development",
    description:
      "Tight deadlines? No problem. Our React developers ship high-quality code at startup speed, without cutting corners.",
    icon: "/images/Development.svg",
  },
];

const reactJsServices = [
  {
    imgSrc: "/images/Web-Development.svg",
    title: "Web Development",
    description:
      "Transform slow, clunky websites into React-powered rockets—3.2s average load time improvement in client projects.",
  },
  {
    imgSrc: "/images/update.svg",
    title: "Migration and Updation Services",
    description:
      "Legacy app? We’ll rebuild it in React so smoothly, the only thing users will notice is the improvement.",
  },
  {
    imgSrc: "/images/High-Performing-PWAs.svg",
    title: "High-Performing PWAs",
    description:
      "We build PWAs that outpace native apps, 100% offline mode, 0% app store fees, and lightning-fast performance.",
  },
  {
    imgSrc: "/images/ecommerce-development.svg",
    title: "eCommerce Development",
    description:
      "React storefronts built to convert—dynamic hydration, psychology-backed flows, and seamless user experiences that drive sales.",
  },
  {
    imgSrc: "/images/SPA-web-app.svg",
    title: "SPA Development",
    description:
      "Blazing-fast SPAs, instant interactivity, smooth navigation, and scroll restoration that remembers every pixel.",
  },
  {
    imgSrc: "/images/dashboard-development.svg",
    title: "Dashboard Development",
    description:
      "Transform your data into decisions—sleek, intuitive dashboards that blend real-time analytics with elegant design, turning complex metrics into instant insights.",
  },
];

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

  return (
    <>
      <section className="portfolio mt-[6rem]">
        <div className="mx-auto service_width">
          <div className="relative">
            <p>
              <Image
                className="h-[46vh] md:block hidden rounded-[20px]"
                src="/images/react-banner.webp"
                alt="React banner"
                priority
                width="1399"
                height="781"
                sizes="(min-width: 1040px) 80vw, (min-width: 640px) 91.84vw, calc(100vw - 30px)"
                media="(min-width: 768px)"
              />
              <Image
                className="h-[300px] block md:hidden rounded-[20px]"
                src="/images/react-banner-768x429.webp"
                alt="React banner"
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
                  <div className="how-we flex items-center gap-[1rem]">
                    <h1 className="font-style-solution-head line-height-normal uppercase xl:text-[4.5rem] lg:text-[66px] md:text-[50px] sm:text-[55px] text-[30px]">
                      HIRE
                      <div className="flex items-center">
                        <Image
                          className="w-[auto]"
                          src="/images/1.png"
                          alt="curly bracket"
                          width="24"
                          height="94"
                        />
                        REACTJS
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
                <p className="uppercase !p-0 !ml-[0] !w-full">
                  Skilled React Developers for Your Next Project
                </p>
              </div>
            </div>
            <div className="basis-[55%]">
              <div className="home_sec2_txt4">
                <p className="!text-left !text-base lg:!text-xl">
                  Hire React experts from us. Our expert React developers thrive
                  in global workflows, working seamlessly across time zones to
                  keep your project moving 24/7. With a hiring process refined
                  over 8+ years, we deliver senior talent faster than most
                  agencies reply to emails.
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
                      label="Hire ReactJS Developers"
                      icon="right-arrow"
                      scrollingButton
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Why90ClientComeBack
          title="Why 90% of Clients Come Back"
          description="We don’t just write React code. We engineer user
            addiction. Here’s what sets us apart"
          firstSectionFeatures={firstSectionFeatures}
        />
        <CommonServices
          title="Build Feature-rich Frontend Applications With Our React Development Services"
          services={reactJsServices}
        />
        <TechnologyDevelopers />
        <BenefitOfHiringDevelopers />

        <TechnologyCombination />
        <TechStackWeWorkWith active="frontend" techStackList={techStackList} />
      </section>
      <BrilworksAdvantage />
      <ReactJSSolutions />
      <WhyReact />
      <ReactJSHiringModels />
      <ThreeStepstoHireDeveloper />
      <HomePageBlogs />
      <WhyShouldHireDevelopers />
      <SolutionContactForm />
      <ReactJSFAQs />
    </>
  );
};

export default ReactJSTechnology;
