"use client";
import Link from "next/link";
import FAQsTechnology from "./FAQsTechnology";
import BenefitOfHiringDevelopers from "./BenefitOfHiringDevelopers";
import TechnologyCombination from "./TechnologyCombination";
import ThreeStepstoHireDeveloper from "./ThreeStepstoHireDeveloper";
import NodeJSDevelopers from "./NodeJSDevelopers";
import WhyShouldHireDevelopers from "./WhyShouldHireDevelopers";
import SolutionContactForm from "../Solution/SolutionContactForm";
import { scrollEffect, scrollToSection } from "../lib/commonfunction";
import { useEffect } from "react";
import Image from "next/image";

const NodejsTechnology = () => {
  useEffect(() => {
    scrollEffect();
    window.addEventListener("scroll", scrollEffect);
    // Clean up the event listener when the component unmounts
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
              <img
                decoding="async"
                loading="lazy"
                className="h-[46vh] rounded-[20px]"
                src={
                  "https://a.storyblok.com/f/219851/1398x780/f539ccd77f/node-services-banner.png"
                }
                alt="Node banner"
              />
            </p>
            <div className="service_sec1_position">
              <div className="flex self-end justify-between w-[96%] mx-auto">
                <div className="txt">
                  <div className="how-we flex fle items-center gap-[1rem]">
                    <h1 className="font-style-solution-head line-height-normal uppercase xl:text-[4.5rem] lg:text-[66px] md:text-[50px] sm:text-[55px] text-[30px]">
                      <div className="flex items-center">
                        <Image
                          className="w-[auto]"
                          src="/images/1.png"
                          alt="curly bracket"
                          width="24"
                          height="94"
                        />
                        NODE.JS
                        <Image
                          className="w-[auto]"
                          src="/images/2.png"
                          alt="curly bracket"
                          width="24"
                          height="94"
                        />
                      </div>
                      DEVELOPMENT <br />
                      COMPANY
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto service_width lg:py-[6rem] sm:py-[4rem] py-[2rem]">
          <div className="flex !flex-col lg:!flex-row gap-[1.5rem]">
            <div className="basis-[45%]">
              <div className="home_sec2_txt3 like_text">
                <Link
                  href="#section10_service"
                  onClick={(e) => scrollToSection(e, "section10_service")}
                >
                  <p className="p-0 !ml-[0] !w-full">
                    HIRE OUR NODE JS DEVELOPMENT COMPANY TO POWER UP YOUR
                    BACKEND
                  </p>
                </Link>
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

                <div className="flex md:gap-8 md:mt-[50px] flex-wrap">
                  <Link
                    href="#pricing"
                    onClick={(e) => scrollToSection(e, "pricing")}
                  >
                    <div className="btn_paddinng contact_btn btn_flex !m-[0px]">
                      <div className="formBtn_icon">
                        <p>
                          <img
                            decoding="async"
                            loading="lazy"
                            src="/images/right_arrow.png"
                            alt="arrow"
                          />
                        </p>
                      </div>
                      <p className="xl:!text-[20px] lg:!text-[18px]">
                        Plan & Pricing
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="#section10_service"
                    onClick={(e) => scrollToSection(e, "section10_service")}
                  >
                    <div className="btn_paddinng contact_btn btn_flex !m-[0px]">
                      <div className="formBtn_icon">
                        <p>
                          <img
                            decoding="async"
                            loading="lazy"
                            src="/images/right_arrow.png"
                            alt="arrow"
                          />
                        </p>
                      </div>

                      <p className="xl:!text-[20px] lg:!text-[18px]">
                        Hire Node.js Developers
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto service_width md:pt-[6rem] pt-[4rem] workpadd_borderTop end-to-end">
          <div className="end-To-end">
            <div className="endTO_text home_sec2_txt3">
              <p className="!w-full p-0">
                DRIVE TRANSFORMATION CHANGE WITH OUR NODE JS
                <br />
                DEVELOPMENT SERVICES
              </p>
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
                    <p>Node.js Consulting</p>
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
                    <p>Node.js API Development & Integration</p>
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
                    <p>Node.js Plugin Development</p>
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
                    <p>Node.js Migration</p>
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
                    <p>Node.js Enterprise Web Apps</p>
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
                    <p>Node.js End-to-end Solutions</p>
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

          <div className="w-full md:my-[60px] my-[40px]">
            <Link
              href="#section10_service"
              onClick={(e) => scrollToSection(e, "section10_service")}
            >
              <div className="btn_paddinng btn_flex !mx-auto">
                <div className="formBtn_icon">
                  <p>
                    <img
                      decoding="async"
                      loading="lazy"
                      src="/images/icons-05.png"
                      alt="call"
                    />
                  </p>
                </div>

                <p className="xl:!text-[20px] lg:!text-[18px]">
                  Get A Quote For Your Project
                </p>
              </div>
            </Link>
          </div>
        </div>

        <NodeJSDevelopers />

        <BenefitOfHiringDevelopers />

        <TechnologyCombination />
      </section>

      <ThreeStepstoHireDeveloper />

      <WhyShouldHireDevelopers />

      <SolutionContactForm />
      <FAQsTechnology />
    </>
  );
};

export default NodejsTechnology;
