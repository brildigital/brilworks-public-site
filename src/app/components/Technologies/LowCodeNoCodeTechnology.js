"use client";
import Image from "next/image";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { scrollEffect } from "../lib/commonFunction";
import Button from "../Common/Button";
import BenefitOfHiring from "./BenefitOfHiring";

const LowCodeNoCodeFAQs = dynamic(() => import("./TechnologyFAQ"));
const TechnologyDevelopers = dynamic(() => import("./TechnologyDevelopers"));
const WhyShouldHireDevelopers = dynamic(() =>
  import("./WhyShouldHireDevelopers")
);
const SolutionContactForm = dynamic(() =>
  import("../Solution/SolutionContactForm")
);

const ThreeStepstoHireDeveloper = dynamic(() =>
  import("./ThreeStepstoHireDeveloper")
);
const HomePageBlogs = dynamic(() => import("../Homepage/HomePageBlogs"));

const LowCodeNoCodeTechnology = () => {
  useEffect(() => {
    scrollEffect();
    window.addEventListener("scroll", scrollEffect);

    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);

  return (
    <>
      <section className="portfolio hiring-banner lg:mt-[5rem] mt-[4rem]">
        <div className="container max-w-[1440px] mx-auto">
          <div className="flex items-center justify-center lg:flex-row flex-col-reverse lg:py-[4%] pt-[14%] md:pt-[8%]">
            <div className="lg:w-[80%] w-full px-4">
              <h1 className="font-style-solution-head leading-tight mt-10 mb-5 xl:text-[4.5rem] lg:text-[66px] md:text-[50px] sm:text-[55px] text-[30px] md:w-[85%] w-full font-medium">
                Hire No Code Low Code Developers
              </h1>
              <p className="lg:w-[85%] w-full md:text-[24px] text-xl leading-normal text-colorWhite font-normal lg:!mb-[50px] !mb-5">
                As a top leading low code now code development agency, we
                specialize in delivering efficient, custom software solutions.
                Hire the best developers to build your app quickly using popular
                low code no code tools.
              </p>
              <div className="xl:w-[80%] w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:!mb-[50px] !mb-5 gap-4 md:gap-0">
                <div
                  className={`w-full flex justify-start items-start md:items-center lg:items-start gap-4 flex-row lg:!border-r lg:border-b-0 border-b border-[#17353D] lg:pb-0 pb-3 md:!w-fit`}
                >
                  <span className="text-colorWhite md:text-[42px] text-3xl leading-tight font-medium">
                    10+
                  </span>
                  <p
                    className={`md:text-xl font-normal text-lg !leading-normal text-colorWhite  md:w-full lg:w-3/5 w-3/5`}
                  >
                    Years of Experience
                  </p>
                </div>
                <div
                  className={`w-full md:min-w-[320px] flex justify-start gap-4 items-start md:items-center lg:items-start flex-row lg:!border-r lg:border-b-0 border-b border-[#17353D] lg:pb-0 pb-3`}
                >
                  <span className="text-colorWhite md:text-[42px] text-3xl leading-tight font-medium">
                    50+
                  </span>
                  <p
                    className={`md:text-xl font-normal text-lg !leading-normal text-colorWhite`}
                  >
                    Successfully Delivered Projects
                  </p>
                </div>
                <div
                  className={`w-full md:min-w-[320px] lg:pl-8 flex justify-start gap-4 items-start md:items-center lg:items-start flex-row lg:pb-0 pb-3 md:!w-fit`}
                >
                  <span className="text-colorWhite md:text-[42px] text-3xl leading-tight font-medium">
                    30+
                  </span>
                  <p
                    className={`md:text-xl font-normal text-lg !leading-normal text-colorWhite`}
                  >
                    Certified Developers
                  </p>
                </div>
              </div>
              <div className="flex !flex-col md:!flex-row lg:gap-12 gap-4 !mb-5">
                <div>
                  <Button
                    innerClassName="flex items-center justify-center gap-1 uppercase !text-base md:text-lg"
                    className="!pr-5"
                    redirect="#section10_service"
                    label="Hire No Code Developers"
                    icon="right-arrow"
                    variant="bg-dark"
                    scrollingButton
                  />
                </div>
                <div>
                  <Button
                    innerClassName="flex items-center justify-center gap-1 uppercase !text-base md:text-lg"
                    className="!pr-5"
                    redirect="#pricing"
                    label="Plan & Pricing"
                    icon="right-arrow"
                    variant="bg-dark"
                    scrollingButton
                  />
                </div>
              </div>
            </div>
            <div className="lg:w-[20%] md:w-2/5 w-3/5 mx-auto my-auto h-full">
              {/* <Image
                className=""
                src="/images/bubble-logo.svg"
                alt="Bubble Banner"
                width="320"
                height="320"
              /> */}
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio">
        <div className="container max-w-[1440px] mx-auto">
          <div className="xl:py-[6rem] md:py-[4rem] pt-[2rem] px-4">
            <div className="end-To-end">
              <div className="endTO_text solutions uppercase">
                <h2 className="!w-full p-0">
                  Explore Our Low Code Development Services
                </h2>
              </div>
            </div>

            <div className="service_grid_img reveal">
              <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-[40px] md:gap-y-0 gap-[10px]">
                <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                  <div className="basis-[15%]">
                    <img
                      decoding="async"
                      loading="lazy"
                      className="alignnone wp-image-285 size-full"
                      src="/images/web.png"
                      alt="Flutterflow custom app development"
                    />
                  </div>

                  <div className="service_txt basis-[85%]">
                    <div className="service_num">&lt; 01.</div>
                    <div className="service_title">
                      <h3>No-Code App Development:</h3>
                    </div>
                    <div className="service_description">
                      <p>
                        Build apps quickly with our expert developers, who
                        specialize in building next-level applications with
                        leading no-code platforms like Adalo, Flutterflow, and
                        Bubble.io.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                  <div className="basis-[15%]">
                    <img
                      decoding="async"
                      loading="lazy"
                      src="/images/AWS-App-Development-Services.png"
                      alt="AWS App Development Services"
                    />
                  </div>

                  <div className="service_txt basis-[85%]">
                    <div className="service_num">&lt; 02.</div>
                    <div className="service_title">
                      <h3>Adalo Development:</h3>
                    </div>
                    <div className="service_description">
                      <p>
                        Leverage the power of Adalo's intuitive interface. Our
                        experts craft stunning, user-friendly apps, handling all
                        aspects – from design to deployment – for a seamless
                        experience.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                  <div className="basis-[15%]">
                    <img
                      decoding="async"
                      loading="lazy"
                      src="/images/AWS-Cloud-Migration-Services.png"
                      alt="AWS Cloud Migration Services"
                    />
                  </div>

                  <div className="service_txt basis-[85%]">
                    <div className="service_num">&lt; 03.</div>
                    <div className="service_title">
                      <h3>Flutterflow Development:</h3>
                    </div>
                    <div className="service_description">
                      <p>
                        Get to market faster with next-level applications built
                        using our Flutterflow development service. Our
                        developers are skilled in building complex apps with
                        this powerful platform.
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
                      src="/images/DevOps-AWS-Services.png"
                      alt="DevOps AWS Services"
                    />
                  </div>

                  <div className="service_txt basis-[85%]">
                    <div className="service_num">&lt; 04.</div>
                    <div className="service_title">
                      <h3>Bubble.io Development:</h3>
                    </div>
                    <div className="service_description">
                      <p>
                        Our skilled developers use Bubble.io's full-stack
                        capabilities to build complex applications that rival
                        fully coded ones in functionality and quality.
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
                      src="/images/Technology-07.png"
                      alt="Spring Core Development"
                    />
                  </div>

                  <div className="service_txt basis-[85%]">
                    <div className="service_num">&lt; 05.</div>
                    <div className="service_title">
                      <h3>Streamlined Low-Code Development: </h3>
                    </div>
                    <div className="service_description">
                      <p>
                        Our team combines coding expertise with low-code
                        platforms to deliver modern apps in record time. Hire a
                        low-code developer today to get started.
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
                      src="/images/Technology-08.png"
                      alt="Java App Development"
                    />
                  </div>

                  <div className="service_txt basis-[85%]">
                    <div className="service_num">&lt; 06.</div>
                    <div className="service_title">
                      <h3>Low-Code Mobile App Development:</h3>
                    </div>

                    <div className="service_description">
                      <p>
                        Our specialists develop low-code mobile apps that
                        seamlessly run on both iOS and Android platforms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center xl:pt-[4rem] md:pt-[3rem] py-5">
              <Button
                innerClassName="flex items-center justify-center gap-2"
                className="!pr-5"
                label="Get a Quote For Your Budget"
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
          <BenefitOfHiring />
        </div>
      </section>

      <ThreeStepstoHireDeveloper />
      <HomePageBlogs />
      <WhyShouldHireDevelopers />

      <SolutionContactForm />
      <LowCodeNoCodeFAQs />
    </>
  );
};

export default LowCodeNoCodeTechnology;
