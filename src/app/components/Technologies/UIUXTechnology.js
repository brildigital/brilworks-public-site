"use client";
import Link from "next/link";
import FAQsTechnology from "./FAQsTechnology";
import TechnologyContactForm from "./TechnologyContactForm";
import BenefitOfHiringDevelopers from "./BenefitOfHiringDevelopers";
import ThreeStepstoHireDeveloper from "./ThreeStepstoHireDeveloper";
import WhyShouldHireDevelopers from "./WhyShouldHireDevelopers";
import UIUXDesigners from "./UIUXDesigners";

const UIUXTechnology = () => {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const targetSection = document.getElementById(sectionId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <section className="portfolio mt-[6rem]">
        <div className="mx-auto service_width">
          <div className="relative">
            <p>
              <img
                className="h-[46vh] rounded-[20px]"
                src="/images/2-ui-ux.png"
                alt="React Native banner"
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
                      <p className="uppercase xl:text-[4.5rem] lg:text-[66px] md:text-[50px] sm:text-[55px] text-[30px]">
                        UI/UX Design
                      </p>
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
                    <p className="uppercase xl:text-[4rem] lg:text-[60px] md:text-[50px] sm:text-[55px] text-[30px] !leading-none">
                      SERVICES <br />
                      COMPANY
                    </p>
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
                    Hire UI UX Designers to Create Exceptional User Experience
                  </p>
                </Link>
              </div>
            </div>
            <div className="basis-[55%]">
              <div className="home_sec2_txt4">
                <p className="!text-left !text-[1.2rem]">
                  We design intuitive, appealing, aesthetic, and informative
                  experiences that are easy for your customers to engage with,
                  understand and enjoy. Unlock exponential growth with our UI UX
                  design services today!
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
                        Hire UI/UX Designers
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
                Experience the Perfect Blend of Creativity & Technology With Our
                UI/UX Designing Services
              </p>
            </div>
          </div>

          <div className="service_grid_img">
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[40px] gap-[10px]">
              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    loading="lazy"
                    src="/images/UI-UX-Consulting-Services-1.png"
                    alt="UI UX Consulting Services"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 01.</div>
                  <div className="service_title">
                    <p>UI UX Consulting Services</p>
                  </div>
                  <div className="service_description">
                    <p>
                      Our UX and UI design can help you set the tone of your
                      brand, create designs that are visually appealing and easy
                      for your users to navigate.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    loading="lazy"
                    src="/images/UI-UX-Design-Services-1.png"
                    alt="UI UX Design Services"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 02.</div>
                  <div className="service_title">
                    <p>UI UX Design Services</p>
                  </div>
                  <div className="service_description">
                    <p>
                      We believe in the power of intuitive design and are always
                      on the lookout for new ways to streamline the user
                      experience. Our team has proven expertise in creating
                      human-centered experiences.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    className=""
                    src="/images/UX-Strategy.png"
                    alt="UX Strategy"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 03.</div>
                  <div className="service_title">
                    <p>UX Strategy</p>
                  </div>
                  <div className="service_description">
                    <p>
                      Our strategy is a perfect blend of design, usability, and
                      business principles. We identify your biggest needs and
                      come up with an effective UX strategy to transform your
                      brand into one that resonates with users.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    className="alignnone wp-image-285 size-full"
                    src="/images/frontend.png"
                    alt="Mockups Designing"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 04.</div>
                  <div className="service_title">
                    <p>Mockups Designing</p>
                  </div>
                  <div className="service_description">
                    <p>
                      Our talented team of UI/UX designers deliver mockups that
                      make it easy for you to focus on what’s most important:
                      creating a great product.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    className="alignnone wp-image-285 size-full"
                    src="/images/Wireframe-and-Prototyping-1.png"
                    alt="Wireframe and Prototyping"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 05.</div>
                  <div className="service_title">
                    <p>Wireframe and Prototyping</p>
                  </div>

                  <div className="service_description">
                    <p>
                      With our expertly curated selection of UX professionals,
                      you’ll get wireframe designers that offer a full range of
                      services to make your product plan come alive.
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

        <UIUXDesigners />

        <BenefitOfHiringDevelopers />
      </section>

      <ThreeStepstoHireDeveloper />

      <WhyShouldHireDevelopers />

      <TechnologyContactForm />
      <FAQsTechnology />
    </>
  );
};

export default UIUXTechnology;
