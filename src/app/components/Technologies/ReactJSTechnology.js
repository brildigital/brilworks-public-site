"use client";
import { useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { scrollEffect } from "../lib/commonFunction";
import Button from "../Common/Button";
import { Card } from "@material-tailwind/react";
import TechStackWeWorkWith from "./TechStackWeWorkWith";

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

const ReactJSTechnology = () => {
  useEffect(() => {
    scrollEffect();
    window.addEventListener("scroll", scrollEffect);
    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);

  const firstSectionFeatures = [
    {
      heading: "No Time Zone Barriers",
      description:
        "Our remote React developers work in your hours – Whether you’re in New York or Singapore. Night owls? Early birds? We match your rhythm.",
      icon: "/images/No-Time-Zone-Barriers.svg",
    },
    {
      heading: "Cross-Platform Mastery",
      description:
        "Web, mobile, IoT dashboards – we make React dance across platforms. Hire React developers who build once, deploy everywhere.",
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
      icon: "/images/cross-platform.svg",
    },
    {
      heading: "Rapid Development",
      description:
        "Tight deadlines? No problem. Our React developers ship high-quality code at startup speed, without cutting corners.",
      icon: "/images/cross-platform.svg",
    },
  ];

  const richFeatures = [
    {
      imgSrc: "/images/Enterprise-App-Development.png",
      imgAlt: "ReactJS for Enterprise App Development",
      title: "ReactJS for Enterprise App Development",
      description:
        "Our react js development services enable you to quickly build powerful web apps that are custom-tailored to address the needs of your enterprise.",
    },
    {
      imgSrc: "/images/Custom-App-Development.png",
      imgAlt: "ReactJS for Custom App Development",
      title: "ReactJS for Custom App Development",
      description:
        "Build custom web applications that are perfect for your business needs or specific project needs with the help of our ReactJS developers.",
    },
    {
      imgSrc: "/images/frontend.png",
      imgAlt: "ReactJS for Front-End Development",
      title: "ReactJS for Front-End Development",
      description:
        "Our React rockstars possess a comprehensive understanding of the framework, real-time data exchange, and the best practices to build modern user interfaces with real-time data validation.",
    },
    {
      imgSrc: "/images/migration-1.png",
      imgAlt: "ReactJS Website Migration & Integration",
      title: "ReactJS Website Migration & Integration",
      description:
        "Our developers will help you move over your current code and all the data in a way that does not lose any information and makes sure everything is migrated smoothly.",
    },
    {
      imgSrc: "/images/ui-ux-1.png",
      imgAlt: "ReactJS UI/UX Development",
      title: "ReactJS UI/UX Development",
      description:
        "We believe that a great user experience across all devices should be the goal of any developer in the business. Our developers strive to do just that.",
    },
    {
      imgSrc: "/images/support.png",
      imgAlt: "ReactJS Support & Maintenance",
      title: "ReactJS Support & Maintenance",
      description:
        "Our team of skilled developers is always ready to serve you. We offer ReactJS support and maintenance services to help our clients to stay ahead of the competition, thus increasing their market share.",
    },
  ];

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
        <div className="mx-auto service_width xl:py-[6rem] md:py-[4rem] py-[2rem] workpadd_borderTop end-to-end">
          <div className="end-To-end">
            <div className="endTO_text solutions flex flex-col gap-2">
              <h2 className="!w-full p-0">Why 90% of Clients Come Back</h2>
              <p className="md:text-xl text-base md:text-center text-left">
                We don’t just write React code – we engineer user addiction.
                Here’s what sets us apart:
              </p>
            </div>
          </div>

          <div className="reveal grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-5">
            {firstSectionFeatures.map((item, index) => {
              return (
                <div
                  className="p-3 md:p-4 rounded-lg border-2 border-transparent hover:border-gray-200 hover:-translate-y-1 duration-300"
                  key={index}
                >
                  <div className="flex items-center gap-4">
                    <div className="">
                      <div className="service_title">
                        <h3 className="w-full flex gap-3 font-bold items-center text-xl text-black">
                          <Image
                            className="w-[48px] h-[48px]"
                            src={item.icon}
                            alt="icon"
                            height={48}
                            width={48}
                          />
                          {item.heading}
                        </h3>
                      </div>
                      <div className="service_description">
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mx-auto service_width xl:py-[6rem] md:py-[4rem] py-[2rem] workpadd_borderTop end-to-end">
          <div className="end-To-end">
            <div className="endTO_text solutions">
              <h2 className="!w-full p-0 uppercase">
                Build Feature-rich Frontend Applications With
                <br />
                Our React Development Services
              </h2>
            </div>
          </div>

          <div className="service_grid_img reveal">
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[40px] gap-[10px] ">
              {richFeatures.map(
                ({ imgSrc, imgAlt, title, description }, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]"
                  >
                    <div className="basis-[15%]">
                      <img
                        decoding="async"
                        loading="lazy"
                        src={imgSrc}
                        alt={imgAlt}
                      />
                    </div>

                    <div className="service_txt basis-[85%]">
                      <div className="service_num">&lt; 0{index}.</div>
                      <div className="service_title">
                        <h3>{title}</h3>
                      </div>
                      <div className="service_description">
                        <p>{description}</p>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="flex items-center justify-center xl:pt-[6rem] md:pt-[4rem] pt-[2rem]">
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
        <TechStackWeWorkWith />
      </section>

      <ThreeStepstoHireDeveloper />

      <WhyShouldHireDevelopers />

      <SolutionContactForm />
      <ReactJSFAQs />
    </>
  );
};

export default ReactJSTechnology;
