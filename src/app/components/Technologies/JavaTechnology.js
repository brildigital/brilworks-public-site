"use client";
import Link from "next/link";
import FAQsTechnology from "./FAQsTechnology";
import JavaDevelopers from "./JavaDevelopers";
import BenefitOfHiringDevelopers from "./BenefitOfHiringDevelopers";
import TechnologyCombination from "./TechnologyCombination";
import ThreeStepstoHireDeveloper from "./ThreeStepstoHireDeveloper";
import WhyShouldHireDevelopers from "./WhyShouldHireDevelopers";
import SolutionContactForm from "../Solution/SolutionContactForm";
import { scrollToSection } from "../lib/commonfunction";

const JavaTechnology = () => {
  return (
    <>
      <section className="portfolio mt-[6rem]">
        <div className="mx-auto service_width">
          <div className="relative">
            <p>
              <img
                className="h-[46vh] rounded-[20px]"
                src={
                  "https://a.storyblok.com/f/219851/1398x780/93d59fc963/java-services-banner.png"
                }
                alt="our process"
              />
            </p>
            <div className="service_sec1_position">
              <div className="flex self-end justify-between w-[96%] mx-auto">
                <div className="txt">
                  <div className="how-we flex items-center gap-[1rem]">
                    <div>
                      <img
                        decoding="async"
                        loading="lazy"
                        className="alignnone wp-image-258 "
                        src="/images/1.png"
                        alt="curly bracket"
                        width="24"
                        height="94"
                      />
                    </div>
                    <div>
                      <h1 className="font-style-solution-head uppercase xl:text-[4.5rem] lg:text-[66px] md:text-[50px] sm:text-[55px] text-[30px]">
                        Java
                      </h1>
                    </div>
                    <div>
                      <img
                        decoding="async"
                        loading="lazy"
                        className="alignnone wp-image-258 "
                        src="/images/2.png"
                        alt="curly bracket"
                        width="24"
                        height="94"
                      />
                    </div>
                  </div>
                  <div className="how-we flex items-center gap-[1rem]">
                    <h1 className="font-style-solution-head2 uppercase xl:text-[4rem] lg:text-[60px] md:text-[50px] sm:text-[55px] text-[30px] !leading-none">
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
                    HIRE JAVA DEVELOPER TO STAY IN SYNC WITH BACKEND
                  </p>
                </Link>
              </div>
            </div>
            <div className="basis-[55%]">
              <div className="home_sec2_txt4">
                <p className="!text-left !text-[1.2rem]">
                  Scale your application development team with our top-notch
                  Java developers. Choose our Java development company to take
                  your project to unforeseen heights of success.
                </p>

                <div className="flex md:gap-8 md:mt-[50px] flex-wrap">
                  <Link
                    href="#pricing"
                    onClick={(e) => scrollToSection(e, "pricing")}
                  >
                    <div className="btn_paddinng contact_btn btn_flex !m-[0px]">
                      <div className="formBtn_icon">
                        <p>
                          <img src="/images/right_arrow.png" alt="arrow" />
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
                          <img src="/images/right_arrow.png" alt="arrow" />
                        </p>
                      </div>

                      <p className="xl:!text-[20px] lg:!text-[18px]">
                        Hire Java Developers
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
                ENHANCE YOUR APPLICATIONS WITH OUR
                <br />
                JAVA DEVELOPMENT SERVICES.
              </p>
            </div>
          </div>

          <div className="service_grid_img">
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[40px] gap-[10px]">
              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    loading="lazy"
                    src="/images/Technology-04.png"
                    alt="Java Consulting"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 01.</div>
                  <div className="service_title">
                    <p>Java Consulting</p>
                  </div>
                  <div className="service_description">
                    <p>
                      Our team has a unique combination of skills, experience,
                      and cultural expertise (both domestically and
                      internationally) to provide you with fast, accurate
                      advice.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    loading="lazy"
                    src="/images/Technology-05.png"
                    alt="Java Web Development"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 02.</div>
                  <div className="service_title">
                    <p>Java Web Development</p>
                  </div>
                  <div className="service_description">
                    <p>
                      Our Full-stack Java Developers have the knowledge and
                      experience to design, develop, release and support
                      scalable web-based solutions for your business. They use
                      modern technologies such as Spring Boot, Hibernate, and
                      Microservices to help you organize your business into
                      highly scalable applications.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    className=""
                    src="/images/Technology-06.png"
                    alt="Java Software Development"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 03.</div>
                  <div className="service_title">
                    <p>Java Software Development</p>
                  </div>
                  <div className="service_description">
                    <p>
                      Our Java Developers have a proven track record of
                      delivering quality software at a rapid pace. They have
                      extensive knowledge of enterprise-level technologies such
                      as Java, C++, and other tools in order to create scalable,
                      robust, and platform-independent software that is easily
                      maintainable.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    className="alignnone wp-image-285 size-full"
                    src="/images/Technology-07.png"
                    alt="Spring Core Development"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 04.</div>
                  <div className="service_title">
                    <p>Spring Core Development</p>
                  </div>
                  <div className="service_description">
                    <p>
                      Hire Spring boot developer to easily develop J2EE
                      applications from plain old Java Objects to enterprises
                      level services through Spring framework.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    className="alignnone wp-image-285 size-full"
                    src="/images/Technology-08.png"
                    alt="Java App Development"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 05.</div>
                  <div className="service_title">
                    <p>Java App Development</p>
                  </div>

                  <div className="service_description">
                    <p>
                      Have you considered the benefits of hiring an app
                      developer with Java programming skills? Our developers are
                      skilled at java application development and in developing
                      all types of mobile applications from games, and social
                      media applications to enterprise solutions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    className="alignnone wp-image-285 size-full"
                    src="/images/Technology-09.png"
                    alt="Java Full Stack Development"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 06.</div>
                  <div className="service_title">
                    <p>Java Full Stack Development</p>
                  </div>
                  <div className="service_description">
                    <p>
                      Our team is proficient in full-stack java development. We
                      do not believe in off-the-shelf frameworks or ready-made
                      solutions. Instead, we work with our clients to build
                      scalable applications that are highly scalable,
                      performant, and maintainable.
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
                    <img src="/images/icons-05.png" alt="call" />
                  </p>
                </div>

                <p className="xl:!text-[20px] lg:!text-[18px]">
                  Get A Quote For Your Project
                </p>
              </div>
            </Link>
          </div>
        </div>

        <JavaDevelopers />

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

export default JavaTechnology;
