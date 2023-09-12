"use client";
import Link from "next/link";
import "./OurProcessStyle.scss";
import ToolsAndGetInTouch from "../Portfolio/ToolsAndGetInTouch";
import { useEffect, useState } from "react";
import { scrollEffect, scrollToSection } from "../lib/commonfunction";
import Image from "next/image";

const OurProcessPage = () => {
  const [isAccordionActive, setAccordionActive] = useState(1);
  const [isAccordionOpen, setAccordionOpen] = useState(true);

  const [isAccordionActive2, setAccordionActive2] = useState(1);
  const [isAccordionOpen2, setAccordionOpen2] = useState(true);

  const handleAccordianceClick = (accordanceNumber) => {
    if (isAccordionActive === accordanceNumber) {
      setAccordionOpen(!isAccordionOpen);
    } else {
      setAccordionOpen(true);
    }
    setAccordionActive(accordanceNumber);
  };

  const handleAccordianceClick2 = (accordanceNumber2) => {
    if (isAccordionActive2 === accordanceNumber2) {
      setAccordionOpen2(!isAccordionOpen2);
    } else {
      setAccordionOpen2(true);
    }
    setAccordionActive2(accordanceNumber2);
  };

  useEffect(() => {
    scrollEffect();
    window.addEventListener("scroll", scrollEffect);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);

  return (
    <section className="portfolio mt-[6rem] our_process_page">
      <div className="mx-auto service_width">
        <div className="relative">
          <p>
            <Image
              className="how_works_img alignnone"
              src={
                "https://a.storyblok.com/f/219851/1398x780/2fdaa336f4/work-baner.png"
              }
              alt="our process"
              width={1398}
              height={780}
            />
          </p>
          <div className="service_sec1_position">
            <div className="flex self-end justify-between w-[90%] mx-auto">
              <div className="txt">
                <div className="how-we flex items-center gap-[1rem]">
                  <h1 className="font-style-solution-head uppercase xl:text-[96px] lg:text-[86px] md:text-[70px] sm:text-[55px] text-[30px]">
                    How We
                    <div className="how-we flex items-center gap-[1rem]">
                      <div className="imgebreakets">
                        <Image
                          className="alignnone"
                          src="/images/1.png"
                          alt="curley bracket"
                          width={690}
                          height={360}
                        />
                      </div>
                      Work
                      <div className="imgebreakets">
                        <Image
                          className="alignnone"
                          src="/images/2.png"
                          alt="curley bracket"
                          width={690}
                          height={360}
                        />
                      </div>
                    </div>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto service_width lg:py-[8rem] py-[4rem]">
        <div className="flex !flex-col lg:!flex-row gap-[3.5rem]">
          <div className="basis-[45%]">
            <div className="home_sec2_txt3 like_text">
              <p className="uppercase p-0 !ml-[0] lg:!w-[92%] !w-[100%]">
                Time Tested Processes for All Your Project Needs
              </p>
            </div>
          </div>
          <div className="basis-[55%]">
            <div className="home_sec2_txt4">
              <p className="!text-left">
                Over the past decade, we’ve developed a flexible production
                process that enables us to deliver high-quality solutions on
                time, regardless of scale. Our experienced team offers a breadth
                of technical expertise to meet any client’s needs from finding
                the right talent to managing end-to-end projects.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto service_width pb-[4rem] reveal">
        <div className="flex !flex-col md:!flex-row items-start gap-[1rem]">
          <div className="our_img_text_sec relative">
            <div className="our_img">
              <img
                decoding="async"
                loading="lazy"
                className="border_redius20 alignnone"
                src="/images/time1.png"
                alt="Project Development"
              />
            </div>
            <div className="overlay">
              <div className="ourProcess_text_arrow">
                <div className="our_text home_sec2_txt4">
                  <p>Our Process for End-to-end Project Development</p>
                </div>
                <div className="down_arrow">
                  <Link
                    href="#workSec4"
                    onClick={(e) => scrollToSection(e, "workSec4")}
                    className="__mPS2id _mPS2id-h mPS2id-highlight mPS2id-highlight-first mPS2id-highlight-last"
                  >
                    <Image
                      className="alignnone"
                      src="/images/explore-arrow-01.png"
                      alt="down arrow"
                      width="72"
                      height="72"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="our_img_text_sec relative">
            <div className="our_img">
              <img
                decoding="async"
                loading="lazy"
                className="border_redius20 alignnone"
                src="/images/time2.png"
                alt="Team Extension"
              />
            </div>
            <div className="overlay">
              <div className="ourProcess_text_arrow">
                <div className="our_text home_sec2_txt4">
                  <p>Our Process for Team Extension</p>
                </div>
                <div className="down_arrow">
                  <Link
                    href="#workSec5"
                    onClick={(e) => scrollToSection(e, "workSec5")}
                    className="__mPS2id _mPS2id-h"
                  >
                    <Image
                      className="alignnone"
                      src="/images/explore-arrow-01.png"
                      alt="down arrow"
                      width="72"
                      height="72"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="mx-auto service_width md:py-[6rem] py-[4rem] workpadd_borderTop end-to-end reveal"
        id="workSec4"
      >
        <div className="end-To-end">
          <div className="endTO_text home_sec2_txt3">
            <p className="md:!w-[74%] !w-full p-0">
              OUR PROCESS FOR END-TO-END PROJECT DEVELOPMENT
            </p>
          </div>
        </div>

        <div className="endTO_text_content home_sec2_txt4">
          <p>
            We’ll understand your project needs and goals to guide you from the
            project initiation to the release phase. Depending on your goals, we
            provide consultation and an end-to-end development plan.
          </p>
        </div>

        <div className="mx-auto xl:pt-[128px] md:pt-[60px] pt-[32px]">
          <div className="accordion-tab-section our-process-endToEnd">
            <div className="flex flex-wrap">
              <div className="lg:w-6/12 w-full">
                <div
                  id="accordionEndtoEnd"
                  className="d-block accordion nav nav-tabs !mb-0 lg:w-[90%] w-full"
                  role="tablist"
                >
                  <div
                    className={`${
                      isAccordionActive == 1 && isAccordionOpen
                        ? "item-accordion"
                        : ""
                    } `}
                    onClick={() => {
                      handleAccordianceClick(1);
                    }}
                  >
                    <div
                      className="accordion-item"
                      data-bs-toggle="tab"
                      data-bs-target="#accordion-one"
                      type="button"
                      role="tab"
                      aria-controls="accordion-one"
                      aria-selected="true"
                    >
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button xl:text-[32px] md:text-[26px] text-[16px]"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          {isAccordionActive == 1 && isAccordionOpen ? (
                            <>
                              <div className="flex justify-between w-full">
                                <div className="text-[24px]">
                                  Requirements Analysis
                                </div>
                                <div className="number_icon_img image_toggle">
                                  <img
                                    loading="lazy"
                                    decoding="async"
                                    src="/images/Requirements-Analysis.png"
                                    alt="Requirements-Analysis"
                                  />
                                </div>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="flex w-full">
                                <div className="number_icon_img image_toggle">
                                  <img
                                    loading="lazy"
                                    decoding="async"
                                    src="/images/Requirements-Analysis.png"
                                    alt="Requirements-Analysis"
                                  />
                                </div>
                                <div className="text-[24px] ml-5">
                                  Requirements Analysis
                                </div>
                              </div>
                            </>
                          )}
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionEndtoEnd"
                      >
                        <div className="accordion-body">
                          <p className="mb-[1rem] text-[20px] pb-4">
                            We follow a rigorous process of requirement analysis
                            in which we go through the business needs using
                            various techniques. It includes end-to-end sessions
                            with the client team and project team.
                          </p>

                          <div className="flex items-center gap-[1rem] flex-wrap">
                            <div className="flexbasis_idea">
                              <div className="ideaBg_class bg-[#dcecff]">
                                <div className="idea_title work_sec2_txt4">
                                  <p className="ng-binding">Idea Validation</p>
                                </div>
                              </div>
                            </div>
                            <div className="flexbasis_idea">
                              <div className="ideaBg_class  bg-[#dcf9f0]">
                                <div className="idea_title work_sec2_txt4">
                                  <p className="ng-binding">
                                    Project Estimation
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="flexbasis_idea">
                              <div className="ideaBg_class bg-[#ede9ff]">
                                <div className="idea_title work_sec2_txt4">
                                  <p className="ng-binding">
                                    Technical Feasibility
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="flexbasis_idea">
                              <div className="ideaBg_class bg-[#f9f0de]">
                                <div className="idea_title work_sec2_txt4">
                                  <p className="ng-binding">
                                    Operational Feasibility
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="flexbasis_idea">
                              <div className="ideaBg_class  bg-[#cbdbfe]">
                                <div className="idea_title work_sec2_txt4">
                                  <p className="ng-binding">
                                    Legal Feasibility
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${
                      isAccordionActive == 2 && isAccordionOpen
                        ? "item-accordion"
                        : ""
                    } `}
                    onClick={() => {
                      handleAccordianceClick(2);
                    }}
                  >
                    <div
                      className="accordion-item"
                      data-bs-toggle="tab"
                      data-bs-target="#accordion-two"
                      type="button"
                      role="tab"
                      aria-controls="accordion-two"
                      aria-selected="false"
                    >
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed xl:text-[32px] md:text-[26px] text-[16px]"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          {isAccordionActive == 2 && isAccordionOpen ? (
                            <>
                              <div className="flex justify-between w-full">
                                <div className="text-[24px]">
                                  Prototype or MVP
                                </div>

                                <div className="number_icon_img">
                                  <img
                                    loading="lazy"
                                    decoding="async"
                                    src="/images/Prototype-or-MVP.png"
                                    alt="Prototype-or-MVP"
                                  />
                                </div>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="flex w-full">
                                <div className="number_icon_img">
                                  <img
                                    loading="lazy"
                                    decoding="async"
                                    src="/images/Prototype-or-MVP.png"
                                    alt="Prototype-or-MVP"
                                  />
                                </div>
                                <div className="text-[24px] ml-5">
                                  Prototype or MVP
                                </div>
                              </div>
                            </>
                          )}
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionEndtoEnd"
                      >
                        <div className="accordion-body">
                          <p className="mb-[1rem] text-[20px]">
                            After identifying the business needs and
                            understanding the market, we develop the product
                            with the help of our industry experts and create a
                            minimum viable product to verify its usability.
                          </p>
                          <div className="flex items-center gap-[1rem] flex-wrap">
                            <div className="flexbasis_idea">
                              <div className="ideaBg_class  bg-[#dcecff]">
                                <div className="idea_title work_sec2_txt4">
                                  <p className="ng-binding">
                                    Technology selection
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="flexbasis_idea">
                              <div className="ideaBg_class bg-[#dcf9f0]">
                                <div className="idea_title work_sec2_txt4">
                                  <p className="ng-binding">Basic features</p>
                                </div>
                              </div>
                            </div>
                            <div className="flexbasis_idea">
                              <div className="ideaBg_class  bg-[#ede9ff]">
                                <div className="idea_title work_sec2_txt4">
                                  <p className="ng-binding">
                                    Performance features
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${
                      isAccordionActive == 3 && isAccordionOpen
                        ? "item-accordion"
                        : ""
                    } `}
                    onClick={() => {
                      handleAccordianceClick(3);
                    }}
                  >
                    <div
                      className="accordion-item"
                      data-bs-toggle="tab"
                      data-bs-target="#accordion-three"
                      type="button"
                      role="tab"
                      aria-controls="accordion-three"
                      aria-selected="false"
                    >
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed xl:text-[32px] md:text-[26px] text-[16px]"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          {isAccordionActive == 3 && isAccordionOpen ? (
                            <>
                              <div className="flex justify-between w-full">
                                <div className="text-[24px]">Design Sprint</div>
                                <div className="number_icon_img">
                                  <img
                                    loading="lazy"
                                    decoding="async"
                                    src="/images/Design-Sprint.png"
                                    alt="Design-Sprint"
                                  />
                                </div>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="flex w-full">
                                <div className="number_icon_img">
                                  <img
                                    loading="lazy"
                                    decoding="async"
                                    src="/images/Design-Sprint.png"
                                    alt="Design-Sprint"
                                  />
                                </div>
                                <div className="text-[24px]  ml-5">
                                  Design Sprint
                                </div>
                              </div>
                            </>
                          )}
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionEndtoEnd"
                      >
                        <div className="accordion-body">
                          <p className="mb-[1rem] text-[20px]">
                            When planning your product, we ensure that user
                            experience is at the core of our development. Our
                            best practices have led to a flow of product
                            development that enriches user experience.
                          </p>
                          <div className="flex items-center gap-[1rem] flex-wrap">
                            <div className="flexbasis_idea">
                              <div className="ideaBg_class bg-[#dcecff]">
                                <div className="idea_title work_sec2_txt4">
                                  <p className="ng-binding">Design brief</p>
                                </div>
                              </div>
                            </div>
                            <div className="flexbasis_idea">
                              <div className="ideaBg_class   bg-[#dcf9f0]">
                                <div className="idea_title work_sec2_txt4">
                                  <p className="ng-binding">User persona</p>
                                </div>
                              </div>
                            </div>
                            <div className="flexbasis_idea">
                              <div className="ideaBg_class  bg-[#ede9ff]">
                                <div className="idea_title work_sec2_txt4">
                                  <p className="ng-binding">User journey</p>
                                </div>
                              </div>
                            </div>
                            <div className="flexbasis_idea">
                              <div className="ideaBg_class bg-[#f9f0de]">
                                <div className="idea_title work_sec2_txt4">
                                  <p className="ng-binding">Wireframing</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${
                      isAccordionActive == 4 && isAccordionOpen
                        ? "item-accordion"
                        : ""
                    } `}
                    onClick={() => {
                      handleAccordianceClick(4);
                    }}
                  >
                    <div
                      className="accordion-item"
                      data-bs-toggle="tab"
                      data-bs-target="#accordion-four"
                      type="button"
                      role="tab"
                      aria-controls="accordion-four"
                      aria-selected="false"
                    >
                      <h2 className="accordion-header" id="headingFour">
                        <button
                          className="accordion-button collapsed xl:text-[32px] md:text-[26px] text-[16px]"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          {isAccordionActive == 4 && isAccordionOpen ? (
                            <>
                              <div className="flex justify-between w-full">
                                <div className="text-[24px]">
                                  Development Sprint
                                </div>

                                <div className="number_icon_img">
                                  <img
                                    loading="lazy"
                                    decoding="async"
                                    src="/images/Development-Sprint.png"
                                    alt="Development-Sprint"
                                  />
                                </div>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="flex w-full">
                                <div className="number_icon_img">
                                  <img
                                    loading="lazy"
                                    decoding="async"
                                    src="/images/Development-Sprint.png"
                                    alt="Development-Sprint"
                                  />
                                </div>
                                <div className="text-[24px] ml-5">
                                  Development Sprint
                                </div>
                              </div>
                            </>
                          )}
                        </button>
                      </h2>
                      <div
                        id="collapseFour"
                        className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionEndtoEnd"
                      >
                        <div className="accordion-body">
                          <p className="mb-[1rem] text-[20px]">
                            We work together to ensure the delivery of the
                            product is on time while ensuring that all the
                            intended features are in place. We ensure the
                            delivery of a stable build before a launch. Internal
                            demos ensure that we are ready for testing prior to
                            any release.
                          </p>
                          <div className="flex items-center gap-[1rem] flex-wrap">
                            <div className="flexbasis_idea">
                              <div className="ideaBg_class  bg-[#dcecff]">
                                <div className="idea_title work_sec2_txt4">
                                  <p>Gantt chart</p>
                                </div>
                              </div>
                            </div>
                            <div className="flexbasis_idea">
                              <div className="ideaBg_class  bg-[#dcf9f0]">
                                <div className="idea_title work_sec2_txt4">
                                  <p>RACI matrix</p>
                                </div>
                              </div>
                            </div>
                            <div className="flexbasis_idea">
                              <div className="ideaBg_class bg-[#ede9ff]">
                                <div className="idea_title work_sec2_txt4">
                                  <p>Project roadmap Back</p>
                                </div>
                              </div>
                            </div>
                            <div className="flexbasis_idea">
                              <div className="ideaBg_class    bg-[#f9f0de]">
                                <div className="idea_title work_sec2_txt4">
                                  <p>Daily standups</p>
                                </div>
                              </div>
                            </div>
                            <div className="flexbasis_idea">
                              <div className="ideaBg_class bg-[#cbdbfe]">
                                <div className="idea_title work_sec2_txt4">
                                  <p>Backlog estimation</p>
                                </div>
                              </div>
                            </div>
                            <div className="flexbasis_idea">
                              <div className="ideaBg_class  bg-[#dcecff]">
                                <div className="idea_title work_sec2_txt4">
                                  <p>Sprint retrospectives</p>
                                </div>
                              </div>
                            </div>
                            <p>&nbsp;</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${
                      isAccordionActive == 5 && isAccordionOpen
                        ? "item-accordion"
                        : ""
                    } `}
                    onClick={() => {
                      handleAccordianceClick(5);
                    }}
                  >
                    <div
                      className="accordion-item"
                      data-bs-toggle="tab"
                      data-bs-target="#accordion-five"
                      type="button"
                      role="tab"
                      aria-controls="accordion-five"
                      aria-selected="false"
                    >
                      <h2 className="accordion-header" id="headingFive">
                        <button
                          className="accordion-button collapsed xl:text-[32px] md:text-[26px] text-[16px]"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFive"
                          aria-expanded="false"
                          aria-controls="collapseFive"
                        >
                          {isAccordionActive == 5 && isAccordionOpen ? (
                            <>
                              <div className="flex justify-between w-full">
                                <div className="text-[24px]">
                                  Quality Assurance
                                </div>

                                <div className="number_icon_img">
                                  <img
                                    loading="lazy"
                                    decoding="async"
                                    src="/images/Quality-Assurance.png"
                                    alt="Quality-Assurance"
                                  />
                                </div>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="flex w-full">
                                <div className="number_icon_img">
                                  <img
                                    loading="lazy"
                                    decoding="async"
                                    src="/images/Quality-Assurance.png"
                                    alt="Quality-Assurance"
                                  />
                                </div>
                                <div className="text-[24px] ml-5">
                                  Quality Assurance
                                </div>
                              </div>
                            </>
                          )}
                        </button>
                      </h2>
                      <div
                        id="collapseFive"
                        className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                        aria-labelledby="headingFive"
                        data-bs-parent="#accordionEndtoEnd"
                      >
                        <div className="accordion-body">
                          <p className="mb-[1rem] text-[20px]">
                            Our quality assurance team supports our developers
                            by testing the product in various environments and
                            scenarios. Our testing experts test across all the
                            product requirements through both automated and
                            manual approaches. We ensure that the entire product
                            is properly tested before going to market.
                          </p>
                          <div className="flex items-center gap-[1rem] flex-wrap">
                            <div className="flexbasis_idea">
                              <div className="ideaBg_class  bg-[#dcecff]">
                                <div className="idea_title work_sec2_txt4">
                                  <p className="ng-binding">
                                    Usability testing
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="flexbasis_idea">
                              <div className="ideaBg_class bg-[#dcf9f0]">
                                <div className="idea_title work_sec2_txt4">
                                  <p className="ng-binding">
                                    Functionality testing
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="flexbasis_idea">
                              <div className="ideaBg_class bg-[#ede9ff]">
                                <div className="idea_title work_sec2_txt4">
                                  <p className="ng-binding">
                                    Compatibility testing
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="flexbasis_idea">
                              <div className="ideaBg_class  bg-[#f9f0de]">
                                <div className="idea_title work_sec2_txt4">
                                  <p className="ng-binding">
                                    Performance testing
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="flexbasis_idea">
                              <div className="ideaBg_class bg-[#cbdbfe]">
                                <div className="idea_title work_sec2_txt4">
                                  <p className="ng-binding">
                                    Penetration testing
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${
                      isAccordionActive == 6 && isAccordionOpen
                        ? "item-accordion"
                        : ""
                    } `}
                    onClick={() => {
                      handleAccordianceClick(6);
                    }}
                  >
                    <div
                      className="accordion-item"
                      data-bs-toggle="tab"
                      data-bs-target="#accordion-six"
                      type="button"
                      role="tab"
                      aria-controls="accordion-six"
                      aria-selected="false"
                    >
                      <h2 className="accordion-header" id="headingSix">
                        <button
                          className="accordion-button collapsed xl:text-[32px] md:text-[26px] text-[16px]"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSix"
                          aria-expanded="false"
                          aria-controls="collapseSix"
                        >
                          {isAccordionActive == 6 && isAccordionOpen ? (
                            <>
                              <div className="flex justify-between w-full">
                                <div className="text-[24px]">
                                  Implementation & Deployment
                                </div>

                                <div className="number_icon_img">
                                  <img
                                    loading="lazy"
                                    decoding="async"
                                    src="/images/Implementation-Deployment.png"
                                    alt="Implementation-Deployment"
                                  />
                                </div>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="flex w-full">
                                <div className="number_icon_img">
                                  <img
                                    loading="lazy"
                                    decoding="async"
                                    src="/images/Implementation-Deployment.png"
                                    alt="Implementation-Deployment"
                                  />
                                </div>
                                <div className="text-[24px] ml-5">
                                  Implementation & Deployment
                                </div>
                              </div>
                            </>
                          )}
                        </button>
                      </h2>
                      <div
                        id="collapseSix"
                        className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                        aria-labelledby="headingSix"
                        data-bs-parent="#accordionEndtoEnd"
                      >
                        <div className="accordion-body">
                          <p className="mb-[1rem] text-[20px]">
                            When the software is ready for release, we
                            orchestrate the build from sprint to the staging
                            server. This allows us to test the product in a live
                            environment thereby removing any risk of failure.
                            Once everyone is satisfied, we take the product
                            live.
                          </p>
                          <div className="flex items-center gap-[1rem] flex-wrap">
                            <div className="flexbasis_idea">
                              <div className="ideaBg_class bg-[#dcecff]">
                                <div className="idea_title work_sec2_txt4">
                                  <p className="ng-binding">
                                    Setting up servers
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="flexbasis_idea">
                              <div className="ideaBg_class bg-[#dcf9f0]">
                                <div className="idea_title work_sec2_txt4">
                                  <p className="ng-binding">
                                    Building CI/CD pipeline
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="flexbasis_idea">
                              <div className="ideaBg_class  bg-[#ede9ff]">
                                <div className="idea_title work_sec2_txt4">
                                  <p className="ng-binding">
                                    Tests at staging server
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="flexbasis_idea">
                              <div className="ideaBg_class bg-[#f9f0de]">
                                <div className="idea_title work_sec2_txt4">
                                  <p className="ng-binding">
                                    Preparing &amp; implementing a deployment
                                    plan
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${
                      isAccordionActive == 7 && isAccordionOpen
                        ? "item-accordion"
                        : ""
                    } `}
                    onClick={() => {
                      handleAccordianceClick(7);
                    }}
                  >
                    <div
                      className="accordion-item"
                      data-bs-toggle="tab"
                      data-bs-target="#accordion-seven"
                      type="button"
                      role="tab"
                      aria-controls="accordion-seven"
                      aria-selected="false"
                    >
                      <h2 className="accordion-header" id="headingSeven">
                        <button
                          className="accordion-button collapsed xl:text-[32px] md:text-[26px] text-[16px]"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSeven"
                          aria-expanded="false"
                          aria-controls="collapseSeven"
                        >
                          {isAccordionActive == 7 && isAccordionOpen ? (
                            <>
                              <div className="flex justify-between w-full">
                                <div className="text-[24px]">
                                  Maintenance & Support
                                </div>

                                <div className="number_icon_img">
                                  <img
                                    loading="lazy"
                                    decoding="async"
                                    src="/images/Maintenance-Support.png"
                                    alt="Maintenance-Support"
                                  />
                                </div>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="flex w-full">
                                <div className="number_icon_img">
                                  <img
                                    loading="lazy"
                                    decoding="async"
                                    src="/images/Maintenance-Support.png"
                                    alt="Maintenance-Support"
                                  />
                                </div>
                                <div className="text-[24px] ml-5">
                                  Maintenance & Support
                                </div>
                              </div>
                            </>
                          )}
                        </button>
                      </h2>
                      <div
                        id="collapseSeven"
                        className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                        aria-labelledby="headingSeven"
                        data-bs-parent="#accordionEndtoEnd"
                      >
                        <div className="accordion-body">
                          <p className="mb-[1rem] text-[20px]">
                            Maintenance keeps the application running smoothly
                            by providing 24x7x365 days support for complete
                            peace of mind. It’s the best way to ensure that your
                            new app is up-to-date and secure, which means users
                            will continue to love it.
                          </p>
                          <div className="flex items-center gap-[1rem] flex-wrap">
                            <div className="flexbasis_idea">
                              <div className="ideaBg_class bg-[#dcecff]">
                                <div className="idea_title work_sec2_txt4">
                                  <p className="ng-binding">
                                    Corrective software maintenance
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="flexbasis_idea">
                              <div className="ideaBg_class bg-[#dcf9f0]">
                                <div className="idea_title work_sec2_txt4">
                                  <p className="ng-binding">
                                    Preventive software maintenance
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="flexbasis_idea">
                              <div className="ideaBg_class bg-[#ede9ff]">
                                <div className="idea_title work_sec2_txt4">
                                  <p className="ng-binding">
                                    Perfective software maintenance
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="flexbasis_idea">
                              <div className="ideaBg_class bg-[#f9f0de]">
                                <div className="idea_title work_sec2_txt4">
                                  <p className="ng-binding">
                                    Adaptive software maintenance
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-6/12 w-full md:mt-[0px] mt-[30px]">
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="accordion-one"
                    role="tabpanel"
                    aria-labelledby="accordion-one-tab"
                  >
                    <div className="team_img">
                      <img
                        loading="lazy"
                        decoding="async"
                        src="/images/requirements-analysis-1-226x300.jpg"
                        alt="requirements-analysis"
                      />
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="accordion-two"
                    role="tabpanel"
                    aria-labelledby="accordion-two-tab"
                  >
                    <div className="team_img">
                      <img
                        loading="lazy"
                        decoding="async"
                        src={
                          "https://a.storyblok.com/f/219851/692x920/07ee0875cf/prototype.jpg"
                        }
                        alt="requirements-analysis"
                      />
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="accordion-three"
                    role="tabpanel"
                    aria-labelledby="accordion-three-tab"
                  >
                    <div className="team_img">
                      <img
                        loading="lazy"
                        decoding="async"
                        src="/images/design-sprint.jpg"
                        alt="requirements-analysis"
                      />
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="accordion-four"
                    role="tabpanel"
                    aria-labelledby="accordion-four-tab"
                  >
                    <div className="team_img">
                      <img
                        loading="lazy"
                        decoding="async"
                        src={`https://a.storyblok.com/f/219851/692x920/6553d4ab22/end-to-end.png`}
                        alt="requirements-analysis"
                      />
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="accordion-five"
                    role="tabpanel"
                    aria-labelledby="accordion-five-tab"
                  >
                    <div className="team_img">
                      <img
                        loading="lazy"
                        decoding="async"
                        src="https://a.storyblok.com/f/219851/692x920/d5d12b1dd4/quality.jpg"
                        alt="quality"
                      />
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="accordion-six"
                    role="tabpanel"
                    aria-labelledby="accordion-six-tab"
                  >
                    <div className="team_img">
                      <img
                        loading="lazy"
                        decoding="async"
                        src="/images/implementation-Deployment.jpg"
                        alt="requirements-analysis"
                      />
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="accordion-seven"
                    role="tabpanel"
                    aria-labelledby="accordion-seven-tab"
                  >
                    <div className="team_img">
                      <img
                        loading="lazy"
                        decoding="async"
                        src={
                          "https://a.storyblok.com/f/219851/692x920/f1915dbc83/maintenance-and-support.jpg"
                        }
                        alt="requirements-analysis"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="mx-auto service_width md:pt-[6rem] pt-[4rem] workpadd_borderTop end-to-end reveal"
        id="workSec5"
      >
        <div className="end-To-end">
          <div className="endTO_text home_sec2_txt3">
            <p className="md:!w-[74%] !w-full p-0">
              OUR PROCESS FOR TEAM EXTENSION
            </p>
          </div>
        </div>

        <div className="endTO_text_content home_sec2_txt4">
          <p>
            Whether you want to add a member to your existing team or build an
            entire SCRUM team from scratch, We’ll handle all the search,
            interviewing and vetting to help you find the right team members.
          </p>
        </div>

        <div className="mx-auto px xl:pt-[128px] md:pt-[60px] pt-[32px]">
          <div className="accordion-tab-section our-process-endToEnd2">
            <div className="flex flex-wrap">
              <div className="lg:w-6/12 w-full md:mt-[0px] mb-[40px]">
                <div
                  className="tab-content lg:w-[90%] w-full"
                  id="nav-tabContent"
                >
                  <div
                    className="tab-pane fade show active"
                    id="accordion-one-ourteam"
                    role="tabpanel"
                    aria-labelledby="accordion-one-ourteam-tab"
                  >
                    <div className="team_img">
                      <img
                        loading="lazy"
                        decoding="async"
                        src="/images/Screening-and-Shortlisting-1.jpg"
                        alt="Screening-and-Shortlisting"
                      />
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="accordion-two-ourteam"
                    role="tabpanel"
                    aria-labelledby="accordion-two-ourteam-tab"
                  >
                    <div className="team_img">
                      <img
                        loading="lazy"
                        decoding="async"
                        src="/images/language-proficiency.jpg"
                        alt="language-proficiency"
                      />
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="accordion-three-ourteam"
                    role="tabpanel"
                    aria-labelledby="accordion-three-ourteam-tab"
                  >
                    <div className="team_img">
                      <img
                        loading="lazy"
                        decoding="async"
                        src="/images/aptitude-test-recruitment-assessment.jpg"
                        alt="aptitude-test"
                      />
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="accordion-four-ourteam"
                    role="tabpanel"
                    aria-labelledby="accordion-four-ourteam-tab"
                  >
                    <div className="team_img">
                      <img
                        loading="lazy"
                        decoding="async"
                        src="/images/technical-evaluation-1.jpg"
                        alt="technical-evaluation"
                      />
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="accordion-five-ourteam"
                    role="tabpanel"
                    aria-labelledby="accordion-five-ourteam-tab"
                  >
                    <div className="team_img">
                      <img
                        loading="lazy"
                        decoding="async"
                        src="/images/team-extension.jpg"
                        alt="team-extension"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-6/12 w-full">
                <div
                  id="accordionourProcess"
                  className="d-block accordion nav nav-tabs !mb-0"
                  role="tablist"
                >
                  <div
                    className={`${
                      isAccordionActive2 == 1 && isAccordionOpen2
                        ? "item-accordion"
                        : ""
                    } `}
                    onClick={() => {
                      handleAccordianceClick2(1);
                    }}
                  >
                    <div
                      className="accordion-item"
                      data-bs-toggle="tab"
                      data-bs-target="#accordion-one-ourteam"
                      type="button"
                      role="tab"
                      aria-controls="accordion-one-ourteam"
                      aria-selected="true"
                    >
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button xl:text-[32px] md:text-[26px] text-[16px]"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne-ourteam"
                          aria-expanded="true"
                          aria-controls="collapseOne-ourteam"
                        >
                          {isAccordionActive2 == 1 && isAccordionOpen2 ? (
                            <>
                              <div className="flex justify-between w-full">
                                <div className="text-[24px]">
                                  Screening & Shortlisting
                                </div>

                                <div className="number_icon_img">
                                  <img
                                    loading="lazy"
                                    decoding="async"
                                    src="/images/Screening-Shortlisting.png"
                                    alt="Screening-Shortlisting"
                                  />
                                </div>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="flex w-full">
                                <div className="number_icon_img">
                                  <img
                                    loading="lazy"
                                    decoding="async"
                                    src="/images/Screening-Shortlisting.png"
                                    alt="Screening-Shortlisting"
                                  />
                                </div>
                                <div className="text-[24px] ml-5">
                                  Screening & Shortlisting
                                </div>
                              </div>
                            </>
                          )}
                        </button>
                      </h2>
                      <div
                        id="collapseOne-ourteam"
                        className="accordion-collapse collapse show xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                        aria-labelledby="headingOne-ourteam"
                        data-bs-parent="#accordionourProcess"
                      >
                        <div className="accordion-body">
                          <p className="mb-[1rem] text-[20px]">
                            Phase I begins with sorting, filtering, and
                            assessing candidates against our stringent criteria.
                            This helps us to determine the best candidates for
                            each role.
                          </p>

                          <div className="flex items-center gap-[1rem] flex-wrap">
                            <div className="flexbasis_idea">
                              <div className="ideaBg_class  bg-[#dcecff]">
                                <div className="idea_title work_sec2_txt4">
                                  <p className="ng-binding">Reviewing skills</p>
                                </div>
                              </div>
                            </div>
                            <div className="flexbasis_idea">
                              <div className="ideaBg_class  bg-[#dcf9f0]">
                                <div className="idea_title work_sec2_txt4">
                                  <p className="ng-binding">
                                    Behavioral traits
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="flexbasis_idea">
                              <div className="ideaBg_class bg-[#ede9ff]">
                                <div className="idea_title work_sec2_txt4">
                                  <p className="ng-binding">Culture fit</p>
                                </div>
                              </div>
                            </div>
                            <div className="flexbasis_idea">
                              <div className="ideaBg_class bg-[#f9f0de]">
                                <div className="idea_title work_sec2_txt4">
                                  <p className="ng-binding">
                                    Overall experience
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${
                      isAccordionActive2 == 2 && isAccordionOpen2
                        ? "item-accordion"
                        : ""
                    } `}
                    onClick={() => {
                      handleAccordianceClick2(2);
                    }}
                  >
                    <div
                      className="accordion-item"
                      data-bs-toggle="tab"
                      data-bs-target="#accordion-two-ourteam"
                      type="button"
                      role="tab"
                      aria-controls="accordion-two-ourteam"
                      aria-selected="false"
                    >
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed xl:text-[32px] md:text-[26px] text-[16px]"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo-ourteam"
                          aria-expanded="false"
                          aria-controls="collapseTwo-ourteam"
                        >
                          {isAccordionActive2 == 2 && isAccordionOpen2 ? (
                            <>
                              <div className="flex justify-between w-full">
                                <div className="text-[24px]">
                                  Language Proficiency
                                </div>

                                <div className="number_icon_img">
                                  <img
                                    loading="lazy"
                                    decoding="async"
                                    src="/images/Language-Proficiency.png"
                                    alt="Language-Proficiency"
                                  />
                                </div>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="flex w-full">
                                <div className="number_icon_img">
                                  <img
                                    loading="lazy"
                                    decoding="async"
                                    src="/images/Language-Proficiency.png"
                                    alt="Language-Proficiency"
                                  />
                                </div>
                                <div className="text-[24px] ml-5">
                                  Language Proficiency
                                </div>
                              </div>
                            </>
                          )}
                        </button>
                      </h2>
                      <div
                        id="collapseTwo-ourteam"
                        className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                        aria-labelledby="headingTwo-ourteam"
                        data-bs-parent="#accordionourProcess"
                      >
                        <div className="accordion-body">
                          <p className="mb-[1rem] text-[20px]">
                            We test each candidate’s language proficiency
                            through a series of assessments to understand their
                            speaking, writing, and collaboration skills.
                          </p>
                          <div className="flex items-center gap-[1rem] flex-wrap">
                            <div className="flexbasis_idea">
                              <div className="ideaBg_class  bg-[#dbebff]">
                                <div className="idea_title work_sec2_txt4">
                                  <p className="ng-binding">Reading</p>
                                </div>
                              </div>
                            </div>
                            <div className="flexbasis_idea">
                              <div className="ideaBg_class bg-[#dcf9f0]">
                                <div className="idea_title work_sec2_txt4">
                                  <p className="ng-binding">
                                    Written communication ability
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="flexbasis_idea">
                              <div className="ideaBg_class bg-[#ede9ff]">
                                <div className="idea_title work_sec2_txt4">
                                  <p className="ng-binding">
                                    Pronunciation &amp; speaking
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="flexbasis_idea">
                              <div className="ideaBg_class bg-[#f9f0de]">
                                <div className="idea_title work_sec2_txt4">
                                  <p className="ng-binding">
                                    Clarity &amp; fluency
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="flexbasis_idea">
                              <div className="ideaBg_class  bg-[#cbdbfe]">
                                <div className="idea_title work_sec2_txt4">
                                  <p className="ng-binding">
                                    Overall communication skills
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${
                      isAccordionActive2 == 3 && isAccordionOpen2
                        ? "item-accordion"
                        : ""
                    } `}
                    onClick={() => {
                      handleAccordianceClick2(3);
                    }}
                  >
                    <div
                      className="accordion-item"
                      data-bs-toggle="tab"
                      data-bs-target="#accordion-three-ourteam"
                      type="button"
                      role="tab"
                      aria-controls="accordion-three-ourteam"
                      aria-selected="false"
                    >
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed xl:text-[32px] md:text-[26px] text-[16px]"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree-ourteam"
                          aria-expanded="false"
                          aria-controls="collapseThree-ourteam"
                        >
                          {isAccordionActive2 == 3 && isAccordionOpen2 ? (
                            <>
                              <div className="flex justify-between w-full">
                                <div className="text-[24px] ">
                                  Aptitude Assessment
                                </div>

                                <div className="number_icon_img">
                                  <img
                                    loading="lazy"
                                    decoding="async"
                                    src="/images/Aptitude-Assessment.png"
                                    alt="Aptitude-Assessment"
                                  />
                                </div>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="flex w-full">
                                <div className="number_icon_img">
                                  <img
                                    loading="lazy"
                                    decoding="async"
                                    src="/images/Aptitude-Assessment.png"
                                    alt="Aptitude-Assessment"
                                  />
                                </div>
                                <div className="text-[24px] ml-5">
                                  Aptitude Assessment
                                </div>
                              </div>
                            </>
                          )}

                          <div className="flex justify-between w-full"></div>
                        </button>
                      </h2>
                      <div
                        id="collapseThree-ourteam"
                        className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                        aria-labelledby="headingThree-ourteam"
                        data-bs-parent="#accordionourProcess"
                      >
                        <div className="accordion-body">
                          <p className="mb-[1rem] text-[20px]">
                            Each candidate is given a timed aptitude test to
                            help assess their decision-making, problem-solving,
                            and critical thinking skills. These tests help us
                            determine if they have the skills you are looking
                            for. We also use this test as an indicator of how
                            well they will fit into your company culture.
                          </p>
                          <div className="flex items-center gap-[1rem] flex-wrap">
                            <div className="flexbasis_idea">
                              <div className="ideaBg_class bg-[#dcecff]">
                                <div className="idea_title work_sec2_txt4">
                                  <p className="ng-binding">Reasoning skills</p>
                                </div>
                              </div>
                            </div>
                            <div className="flexbasis_idea">
                              <div className="ideaBg_class bg-[#dcf9f0]">
                                <div className="idea_title work_sec2_txt4">
                                  <p className="ng-binding">
                                    Learning across disciplines
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="flexbasis_idea">
                              <div className="ideaBg_class   bg-[#ede9ff]">
                                <div className="idea_title work_sec2_txt4">
                                  <p className="ng-binding">
                                    Working across cultural boundaries
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${
                      isAccordionActive2 == 4 && isAccordionOpen2
                        ? "item-accordion"
                        : ""
                    } `}
                    onClick={() => {
                      handleAccordianceClick2(4);
                    }}
                  >
                    <div
                      className="accordion-item"
                      data-bs-toggle="tab"
                      data-bs-target="#accordion-four-ourteam"
                      type="button"
                      role="tab"
                      aria-controls="accordion-four-ourteam"
                      aria-selected="false"
                    >
                      <h2 className="accordion-header" id="headingFour">
                        <button
                          className="accordion-button collapsed xl:text-[32px] md:text-[26px] text-[16px]"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour-ourteam"
                          aria-expanded="false"
                          aria-controls="collapseFour-ourteam"
                        >
                          {isAccordionActive2 == 4 && isAccordionOpen2 ? (
                            <>
                              <div className="flex justify-between w-full">
                                <div className="text-[24px]">
                                  Technical Evaluation
                                </div>

                                <div className="number_icon_img">
                                  <img
                                    loading="lazy"
                                    decoding="async"
                                    src="/images/Technical-Evaluation.png"
                                    alt="Technical-Evaluation"
                                  />
                                </div>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="flex w-full">
                                <div className="number_icon_img">
                                  <img
                                    loading="lazy"
                                    decoding="async"
                                    src="/images/Technical-Evaluation.png"
                                    alt="Technical-Evaluation"
                                  />
                                </div>
                                <div className="text-[24px] ml-5">
                                  Technical Evaluation
                                </div>
                              </div>
                            </>
                          )}
                        </button>
                      </h2>
                      <div
                        id="collapseFour-ourteam"
                        className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                        aria-labelledby="headingFour-ourteam"
                        data-bs-parent="#accordionourProcess"
                      >
                        <div className="accordion-body">
                          <p className="mb-[1rem] text-[20px]">
                            We conduct rigorous skill review tests to review
                            your technical capabilities and professional
                            knowledge
                          </p>
                          <div className="flex items-center gap-[1rem] flex-wrap">
                            <div className="flexbasis_idea">
                              <div className="ideaBg_class  bg-[#dcecff]">
                                <div className="idea_title work_sec2_txt4">
                                  <p className="ng-binding">Domain knowledge</p>
                                </div>
                              </div>
                            </div>
                            <div className="flexbasis_idea">
                              <div className="ideaBg_class bg-[#dcf9f0]">
                                <div className="idea_title work_sec2_txt4">
                                  <p className="ng-binding">
                                    Technical know-how
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="flexbasis_idea">
                              <div className="ideaBg_class bg-[#ede9ff]">
                                <div className="idea_title work_sec2_txt4">
                                  <p className="ng-binding">
                                    Proficiency with tools &amp; technologies
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="flexbasis_idea">
                              <div className="ideaBg_class bg-[#f9f0de]">
                                <div className="idea_title work_sec2_txt4">
                                  <p className="ng-binding">
                                    Industry-ready skills
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${
                      isAccordionActive2 == 5 && isAccordionOpen2
                        ? "item-accordion"
                        : ""
                    } `}
                    onClick={() => {
                      handleAccordianceClick2(5);
                    }}
                  >
                    <div
                      className="accordion-item"
                      data-bs-toggle="tab"
                      data-bs-target="#accordion-five-ourteam"
                      type="button"
                      role="tab"
                      aria-controls="accordion-five-ourteam"
                      aria-selected="false"
                    >
                      <h2 className="accordion-header" id="headingFive">
                        <button
                          className="accordion-button collapsed xl:text-[32px] md:text-[26px] text-[16px]"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFive-ourteam"
                          aria-expanded="false"
                          aria-controls="collapseFive-ourteam"
                        >
                          {isAccordionActive2 == 5 && isAccordionOpen2 ? (
                            <>
                              <div className="flex justify-between w-full">
                                <div className="text-[24px]">
                                  Team Extension
                                </div>

                                <div className="number_icon_img">
                                  <img
                                    loading="lazy"
                                    decoding="async"
                                    src="/images/Team-Extension.png"
                                    alt="Team-Extension"
                                  />
                                </div>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="flex w-full">
                                <div className="number_icon_img">
                                  <img
                                    loading="lazy"
                                    decoding="async"
                                    src="/images/Team-Extension.png"
                                    alt="Team-Extension"
                                  />
                                </div>
                                <div className="text-[24px] ml-5">
                                  Team Extension
                                </div>
                              </div>
                            </>
                          )}
                        </button>
                      </h2>
                      <div
                        id="collapseFive-ourteam"
                        className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                        aria-labelledby="headingFive-ourteam"
                        data-bs-parent="#accordionourProcess"
                      >
                        <div className="accordion-body">
                          <p className="mb-[1rem] text-[20px]">
                            The final matchmaking process to connect you with
                            the right talent for your business. Our mission is
                            to keep your project on track by providing you with
                            the skills and talent you need.
                          </p>
                          <div className="flex items-center gap-[1rem] flex-wrap">
                            <div className="flexbasis_idea">
                              <div className="ideaBg_class  bg-[#dcecff]">
                                <div className="idea_title work_sec2_txt4">
                                  <p className="ng-binding">Remote talent</p>
                                </div>
                              </div>
                            </div>
                            <div className="flexbasis_idea">
                              <div className="ideaBg_class  bg-[#dcf9f0]">
                                <div className="idea_title work_sec2_txt4">
                                  <p className="ng-binding">
                                    Pre-vetted talent
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="flexbasis_idea">
                              <div className="ideaBg_class  bg-[#ede9ff]">
                                <div className="idea_title work_sec2_txt4">
                                  <p className="ng-binding">
                                    Available in your timezone
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToolsAndGetInTouch />
    </section>
  );
};

export default OurProcessPage;
