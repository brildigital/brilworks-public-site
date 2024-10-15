"use client";
import Image from "next/image";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { scrollEffect } from "../lib/commonFunction";
import Button from "../Common/Button";
import BenefitOfHiring from "./BenefitOfHiring";

const AdaloFAQs = dynamic(() => import("./TechnologyFAQ"));
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

const AdaloTechnology = () => {
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
                Hire Adalo Developers to Build Your Dream App
              </h1>
              <p className="lg:w-[85%] w-full md:text-[24px] text-xl leading-normal text-colorWhite font-normal lg:!mb-[50px] !mb-5">
                Ready to build an app in less time? As a certified Adalo
                development company, we provide end-to-end Adalo development
                services, from design and development to ongoing maintenance and
                coaching.
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
                    30
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
                    10
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
                    label="Hire Adalo Developers"
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
                src="/images/adalo-logo.png"
                alt="Bubble Banner"
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
                <h2 className="!w-full p-0">
                  Explore Our Adalo Development Services
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
                      <h3>Custom App Development</h3>
                    </div>
                    <div className="service_description">
                      <p>
                        Whether you need a prototype or a fully functional
                        application, our team can develop any kind of custom app
                        using Adalo.
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
                      <h3>UI/UX Design</h3>
                    </div>
                    <div className="service_description">
                      <p>
                        User experience is at the heart of every successful app.
                        Our design team crafts intuitive and engaging
                        interfaces, ensuring a seamless user journey from start
                        to finish.
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
                      <h3>Integration Services</h3>
                    </div>
                    <div className="service_description">
                      <p>
                        Integrate your app with third-party services and APIs,
                        from payment gateways to social media platforms, to
                        enhance its functionality.
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
                      <h3>App Maintenance and Support</h3>
                    </div>
                    <div className="service_description">
                      <p>
                        Our commitment to your success doesn’t end at launch. We
                        offer ongoing maintenance and support services.
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
                      src="/images/AWS-Managed-Services.png"
                      alt="AWS Managed Services"
                    />
                  </div>

                  <div className="service_txt basis-[85%]">
                    <div className="service_num">&lt; 05.</div>
                    <div className="service_title">
                      <h3>Adalo Consulting Services</h3>
                    </div>

                    <div className="service_description">
                      <p>
                        Not sure where to start? Our Adalo experts provide
                        consulting services to help you navigate the app
                        development process, from ideation to deployment.
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
                label="Hire Adalo Developers"
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
      <AdaloFAQs />
    </>
  );
};

export default AdaloTechnology;
