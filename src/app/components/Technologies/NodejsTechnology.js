"use client";
import Image from "next/image";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { scrollEffect, scrollToSection } from "../lib/commonFunction";
import Button from "../Common/Button";

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
                <p className="!p-0 !ml-[0] !w-full">
                  HIRE OUR NODEJS DEVELOPMENT COMPANY TO POWER UP YOUR BACKEND
                </p>
              </div>
            </div>
            <div className="basis-[55%]">
              <div className="home_sec2_txt4">
                <p className="!text-left !text-[1.2rem]">
                  Our Node.js developers are specialists in developing
                  real-time, data-intensive, and scalable web and mobile
                  applications. Get more for your company through our Node js
                  development services today!
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

        <div className="mx-auto service_width xl:py-[6rem] md:py-[4rem] py-[2rem] workpadd_borderTop end-to-end">
          <div className="end-To-end">
            <div className="endTO_text solutions">
              <h2 className="!w-full p-0">
                DRIVE TRANSFORMATION CHANGE WITH OUR NODE JS
                <br />
                DEVELOPMENT SERVICES
              </h2>
            </div>
          </div>

          <div className="service_grid_img reveal">
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[40px] gap-[10px]">
              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    decoding="async"
                    loading="lazy"
                    src="/images/consultacy.png"
                    alt="Node.js Consulting"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 01.</div>
                  <div className="service_title">
                    <h3>Node.js Consulting</h3>
                  </div>
                  <div className="service_description">
                    <p>
                      Our Node.js consulting program offers services such as
                      architecture analysis, code review, and assessment
                      development processes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    decoding="async"
                    loading="lazy"
                    src="/images/migration-1.png"
                    alt="Node.js API Development & Integration"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 02.</div>
                  <div className="service_title">
                    <h3>Node.js API Development & Integration</h3>
                  </div>
                  <div className="service_description">
                    <p>
                      If you’re building an app and you need a custom API, we
                      can help. We’ve gathered all the relevant expertise in
                      developing high-performing robust and scalable back-end
                      solutions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    decoding="async"
                    loading="lazy"
                    className=""
                    src="/images/plugin.png"
                    alt="Node.js Plugin Development"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 03.</div>
                  <div className="service_title">
                    <h3>Node.js Plugin Development</h3>
                  </div>
                  <div className="service_description">
                    <p>
                      Our team of experts can create and integrate custom
                      plugins to augment your web app’s functionality and
                      capabilities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    decoding="async"
                    loading="lazy"
                    className="alignnone wp-image-285 size-full"
                    src="/images/migration.png"
                    alt="Node.js Migration"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 04.</div>
                  <div className="service_title">
                    <h3>Node.js Migration</h3>
                  </div>
                  <div className="service_description">
                    <p>
                      Our team of developers can help you migrate your existing
                      .Net, PHP, Java, or other apps to NodeJS in a matter of
                      weeks.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    decoding="async"
                    loading="lazy"
                    className="alignnone wp-image-285 size-full"
                    src="/images/web.png"
                    alt="Node.js Enterprise Web Apps"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 05.</div>
                  <div className="service_title">
                    <h3>Node.js Enterprise Web Apps</h3>
                  </div>

                  <div className="service_description">
                    <p>
                      We can help you to build your next-generation web app by
                      adding custom functionality and enhancing its capabilities
                      with customizable NodeJS plugins.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    decoding="async"
                    loading="lazy"
                    className="alignnone wp-image-285 size-full"
                    src="/images/end-to-end-node.png"
                    alt="Node.js End-to-end Solutions"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 06.</div>
                  <div className="service_title">
                    <h3>Node.js End-to-end Solutions</h3>
                  </div>
                  <div className="service_description">
                    <p>
                      We don’t just fix broken code, we offer cost-effective
                      solutions for your company. With Node, we’ll help you be
                      more agile, and develop faster with better modules and
                      transparent architecture.
                    </p>
                  </div>
                </div>
              </div>
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
                  stroke-width="0"
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
      </section>

      <ThreeStepstoHireDeveloper />

      <WhyShouldHireDevelopers />

      <SolutionContactForm />
      <NodeJSFAQs />
    </>
  );
};

export default NodejsTechnology;
