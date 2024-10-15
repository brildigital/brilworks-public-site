"use client";
import Image from "next/image";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { scrollEffect } from "../lib/commonFunction";
import Button from "../Common/Button";
import BenefitOfHiring from "./BenefitOfHiring";

const MobileAppFAQs = dynamic(() => import("./TechnologyFAQ"));
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

const MobileAppTechnology = () => {
  useEffect(() => {
    scrollEffect();
    window.addEventListener("scroll", scrollEffect);

    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);

  return (
    <>
      <section className="portfolio hiring-banner lg:mt-[5.5rem] mt-[4rem]">
        <div className="container max-w-[1440px] mx-auto">
          <div className="flex items-center justify-center lg:flex-row flex-col-reverse lg:pt-[6%] pt-[15%] md:pt-[10%]">
            <div className="lg:w-[80%] w-full px-4">
              <h1 className="font-style-solution-head leading-tight lg:mt-[60px] mt-10 mb-5 xl:text-[4.5rem] lg:text-[66px] md:text-[50px] sm:text-[55px] text-[30px] md:w-[85%] w-full font-medium">
                Hire Mobile App Developers
              </h1>
              <p className="lg:w-[85%] w-full md:text-[24px] text-xl leading-normal text-colorWhite font-normal lg:!mb-[50px] !mb-5">
                Need a mobile app developer to bring your vision to life? We
                connect you with skilled professionals who specialize in
                delivering exceptional mobile apps. Whether you're looking to
                develop an iOS, Android, or cross-platform app, we've got the
                talent you need.
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
                    500+
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
                    Highly Experienced Developers
                  </p>
                </div>
              </div>
              <div className="flex !flex-col md:!flex-row lg:gap-12 gap-4 !mb-5">
                <div>
                  <Button
                    innerClassName="flex items-center justify-center gap-1 uppercase !text-base md:text-lg"
                    className="!pr-5"
                    redirect="#section10_service"
                    label="Hire Mobile App Developers"
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
              <Image
                className=""
                src="/images/mobile-app-liogo.svg"
                alt="Mobile App Logo"
                width="320"
                height="320"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio">
        <div className="container max-w-[1440px] mx-auto">
          <div className="xl:py-[6rem] md:py-[4rem] pt-[2rem]">
            <div className="end-To-end">
              <div className="endTO_text solutions uppercase">
                <h2 className="!w-full p-0">Our Services</h2>
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
                      <h3>Cross-Platform App Development</h3>
                    </div>
                    <div className="service_description">
                      <p>
                        We offer cross-platform app development solutions using
                        industry-leading frameworks.
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
                      <h3>React Native Development</h3>
                    </div>
                    <div className="service_description">
                      <p>
                        React Native is a powerful framework to build
                        high-performance mobile apps for both iOS and Android
                        using a single codebase.
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
                      <h3>iOS App Development</h3>
                    </div>
                    <div className="service_description">
                      <p>
                        Our experienced iOS developers specialize in developing
                        innovative and visually appealing apps using the latest
                        technologies and design trends.
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
                      <h3>Android App Development</h3>
                    </div>
                    <div className="service_description">
                      <p>
                        Our Android app development team is skilled in building
                        robust and scalable apps, ensuring optimal performance,
                        compatibility, and a native-like experience across
                        various Android devices.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center xl:pt-[4rem] md:pt-[3rem] pt-5">
              <Button
                innerClassName="flex items-center justify-center gap-2"
                className="!pr-5"
                label="Get a Quote For Your Project"
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

      <WhyShouldHireDevelopers />

      <SolutionContactForm />
      <MobileAppFAQs />
    </>
  );
};

export default MobileAppTechnology;
