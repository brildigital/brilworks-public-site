"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import AWSFAQs from "./TechnologyFAQ";
import TechnologyDevelopers from "./TechnologyDevelopers";
import WhyShouldHireDevelopers from "./WhyShouldHireDevelopers";
import SolutionContactForm from "../Solution/SolutionContactForm";
import BenefitOfHiringDevelopers from "./BenefitOfHiringDevelopers";
import ThreeStepstoHireDeveloper from "./ThreeStepstoHireDeveloper";
import { scrollEffect, scrollToSection } from "../lib/commonfunction";

const AWSTechnology = () => {
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
              <img
                decoding="async"
                loading="lazy"
                className="h-[46vh] rounded-[20px]"
                src="/images/AWS.webp"
                alt="AWS banner"
              />
            </p>
            <div className="service_sec1_position">
              <div className="flex self-end justify-between w-[96%] mx-auto">
                <div className="txt">
                  <div className="how-we flex items-center gap-[1rem]">
                    <h1 className="font-style-solution-head line-height-normal uppercase xl:text-[4.5rem] lg:text-[66px] md:text-[50px] sm:text-[55px] text-[30px] ">
                      HIRE
                      <div className="flex items-center gap-2">
                        <Image
                          className="w-[auto]"
                          src="/images/1.png"
                          alt="curly bracket"
                          width="24"
                          height="94"
                        />
                        AWS
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

        <div className="mx-auto service_width lg:py-[6rem] sm:py-[4rem] py-[2rem]">
          <div className="flex !flex-col lg:!flex-row gap-[1.5rem]">
            <div className="basis-[45%]">
              <div className="home_sec2_txt3 like_text">
                <Link
                  href="#section10_service"
                  onClick={(e) => scrollToSection(e, "section10_service")}
                >
                  <p className="!p-0 !ml-[0] !w-full">
                    Hire AWS Developers for Your Cloud-Adoption Needs
                  </p>
                </Link>
              </div>
            </div>
            <div className="basis-[55%]">
              <div className="home_sec2_txt4">
                <p className="!text-left !text-[1.2rem]">
                  Our expertise in AWS development services has empowered us to
                  bring the best cloud solutions to your organization’s
                  infrastructure without the cost and hassle of having to build
                  it yourself.
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
                        Hire AWS Developers
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
            <div className="endTO_text solutions">
              <h2 className="!w-full p-0">Our AWS Development Services</h2>
            </div>
          </div>

          <div className="service_grid_img reveal">
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[40px] gap-[10px]">
              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    decoding="async"
                    loading="lazy"
                    src="/images/AWS-Development-Consulting.png"
                    alt="AWS Development Consulting"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 01.</div>
                  <div className="service_title">
                    <h3>AWS Development Consulting</h3>
                  </div>
                  <div className="service_description">
                    <p>
                      Our team of AWS consultants helps your business to
                      establish and maintain a high-performance cloud
                      environment. Our consulting services include development,
                      deployment, migration & optimization.
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
                    <h3>AWS App Development Services</h3>
                  </div>
                  <div className="service_description">
                    <p>
                      The AWS development experts at Brilworks build
                      cutting-edge web and mobile applications, with custom
                      features that are needed to gain a competitive advantage.
                      Whether it is developing them from scratch or modernizing
                      your legacy applications with AWS, our team can assist you
                      with it all.
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
                    <h3>AWS Cloud Migration Services</h3>
                  </div>
                  <div className="service_description">
                    <p>
                      We know that a successful migration to the cloud is about
                      more than just moving your workloads from on-premise
                      applications to public cloud platforms. This is why we
                      take the time to understand your application needs,
                      business objectives, and migration requirements.
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
                    <h3>DevOps AWS Services</h3>
                  </div>
                  <div className="service_description">
                    <p>
                      DevOps on AWS is an end-to-end automation framework that
                      uses AWS services like CodePipeline, AWS CodeBuild &
                      AWSCodeDeploy to develop, test and deploy your
                      applications in AWS. Our experts help you use services
                      like these so that you can easily build and deploy
                      compound cloud architectures on AWS.
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
                    <h3>AWS Managed Services</h3>
                  </div>

                  <div className="service_description">
                    <p>
                      We offer cost-optimized, seamless managed services that
                      are built for the modern world of IT. Our goal is to help
                      you make more informed decisions about your infrastructure
                      and get more out of what you have.
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

        <TechnologyDevelopers />

        <BenefitOfHiringDevelopers />
      </section>

      <ThreeStepstoHireDeveloper />

      <WhyShouldHireDevelopers />

      <SolutionContactForm />
      <AWSFAQs />
    </>
  );
};

export default AWSTechnology;
