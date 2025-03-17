"use client";
import Image from "next/image";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { scrollEffect, scrollToSection } from "../lib/commonFunction";
import Button from "../Common/Button";

const ReactNativeFAQs = dynamic(() => import("./TechnologyFAQ"));
const TechnologyDevelopers = dynamic(() => import("./TechnologyDevelopers"));
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

const ReactNativeTechnology = () => {
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
              <Image
                className="h-[46vh] md:block hidden rounded-[20px]"
                src="https://a.storyblok.com/f/219851/1398x780/20378830a8/react-native-banner.webp"
                alt="React Native banner"
                priority
                width="1398"
                height="780"
                sizes="(min-width: 1040px) 80vw, (min-width: 640px) 91.84vw, calc(100vw - 30px)"
                media="(min-width: 768px)"
              />
              <Image
                className="h-[300px] block md:hidden rounded-[20px]"
                src="/images/REACT-NATIVE-banner-mob.webp"
                alt="React Native banner"
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
                      <div className="flex items-center gap-1">
                        <Image
                          className="w-[auto]"
                          src="/images/1.png"
                          alt="curly bracket"
                          width="24"
                          height="94"
                        />
                        REACT NATIVE
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
                  Hire React Native Developers to Build Stunning Mobile
                  Applications
                </p>
              </div>
            </div>
            <div className="basis-[55%]">
              <div className="home_sec2_txt4">
                <p className="!text-left !text-[1.2rem]">
                  Our team is expert in handling the most complex of projects.
                  We offer a scalable, responsive and flexible approach toward
                  React Native mobile development that’s unmatched in the
                  industry.
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
                      label="Hire React Native Developers"
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
              <h2 className="!w-full p-0 uppercase">
                Create cross-platform mobile apps with React Native
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
                    src="/images/Enterprise-App-Development.png"
                    alt="React Native App Consultation"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 01.</div>
                  <div className="service_title">
                    <h3>React Native App Consultation</h3>
                  </div>
                  <div className="service_description">
                    <p>
                      Our team will help you to get the entire project roadmap,
                      project schedule, and the overall design and layout of
                      your application to build a robust and customized mobile
                      app with a native look and feel.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    decoding="async"
                    loading="lazy"
                    src="/images/Custom-App-Development.png"
                    alt="React Native Cross-Platform App Development"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 02.</div>
                  <div className="service_title">
                    <h3>React Native Cross-Platform App Development</h3>
                  </div>
                  <div className="service_description">
                    <p>
                      If you are looking for a React Native app development
                      company to create an app that runs on multiple platforms,
                      then look no further. Hire our React Native developers who
                      are specialized in developing applications for both
                      Android & iOS platforms.
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
                    src="/images/frontend.png"
                    alt="React Native Migration"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 03.</div>
                  <div className="service_title">
                    <h3>React Native Migration</h3>
                  </div>
                  <div className="service_description">
                    <p>
                      Our team of experts is adept at moving apps from other
                      platforms without data loss. We’re here to help you
                      migrate legacy apps, or get them up to speed with the
                      latest version of your app.
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
                    src="/images/migration-1.png"
                    alt="React Native App Maintenance & Support"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 04.</div>
                  <div className="service_title">
                    <h3>React Native App Maintenance & Support</h3>
                  </div>
                  <div className="service_description">
                    <p>
                      We offer support and maintenance services after the app
                      deployment. Our team monitors the system and ensures high
                      performance. Whether you need to boost uptime or reduce
                      downtime, we’ve got your back.
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
                    src="/images/ui-ux-1.png"
                    alt="React Native UI/UX Development"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 05.</div>
                  <div className="service_title">
                    <h3>React Native UI/UX Development</h3>
                  </div>

                  <div className="service_description">
                    <p>
                      Our React Native specialists design beautiful applications
                      while leveraging the latest technology to create a
                      seamless and delightful user experience.
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
                    src="/images/support.png"
                    alt="React Native Testing & Audit"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 06.</div>
                  <div className="service_title">
                    <h3>React Native Testing & Audit</h3>
                  </div>
                  <div className="service_description">
                    <p>
                      We’ll help you evaluate your application for
                      responsiveness, bugs, performance, and stability. The team
                      ensures that your app is running as smoothly as possible
                      on all devices and operating system platforms.
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
      </section>

      <ThreeStepstoHireDeveloper />
      <HomePageBlogs />
      <WhyShouldHireDevelopers />

      <SolutionContactForm />
      <ReactNativeFAQs />
    </>
  );
};

export default ReactNativeTechnology;
