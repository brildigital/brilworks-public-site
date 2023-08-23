"use client";
import Link from "next/link";
import "./solutionStyle.scss";
import MediaNEntertainmentFAQs from "./MediaNEntertainmentFAQs";
import SolutionContactForm from "./SolutionContactForm";
import SoutionHowCanStart from "./SoutionHowCanStart";
import SolutionEngagementModal from "./SolutionEngagementModal";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { scrollToSection } from "../lib/commonfunction";

const MediaAndEntertainment = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isAccordionActive, setAccordionActive] = useState(1);
  const [isAccordionOpen, setAccordionOpen] = useState(true);

  const handleAccordianceClick = (accordanceNumber) => {
    if (isAccordionActive === accordanceNumber) {
      setAccordionOpen(!isAccordionOpen);
    } else {
      setAccordionOpen(true);
    }
    setAccordionActive(accordanceNumber);
  };

  return (
    <>
      <section className="portfolio mt-[6rem] solution-accordion">
        <div className="mx-auto service_width">
          <div className="relative">
            <p>
              <img
                className="h-[46vh] rounded-[20px]"
                src={
                  "https://a.storyblok.com/f/219851/1398x780/98db6f1ff8/media-1.png"
                }
                alt="our process"
              />
            </p>
            <div className="service_sec1_position">
              <div className="flex self-end justify-between w-[96%] mx-auto">
                <div className="txt">
                  <div className="how-we flex items-center gap-[1rem]">
                    <h1 className="font-style-solution-head uppercase xl:text-[70px] lg:text-[66px] md:text-[50px] sm:text-[55px] text-[30px]">
                      MEDIA & ENTERTAINMENT
                      <br />
                      APP DEVELOPMENT
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto service_width  lg:py-[6rem] sm:py-[4rem] py-[2rem]">
          <div className="flex !flex-col lg:!flex-row gap-[1.5rem]">
            <div className="basis-[50%]">
              <div className="home_sec2_txt3 like_text">
                <p className="uppercase p-0 !ml-[0] !w-full">
                  MEDIA AND ENTERTAINMENT APP DEVELOPMENT SERVICES FOR THE
                  ULTIMATE USER EXPERIENCE.
                </p>
              </div>
            </div>
            <div className="basis-[55%]">
              <div className="home_sec2_txt4">
                <p className="!text-left pb-8">
                  We take your customers on a visual delight with our
                  entertainment software solutions. Create an immersive
                  experience for your users and earn a competitive edge in the
                  entertainment & media industry.
                </p>

                <Link
                  href="#section10_service"
                  onClick={(e) => scrollToSection(e, "section10_service")}
                >
                  <div className="btn_paddinng contact_btn btn_flex btn-margin-top-0">
                    <div className="formBtn_icon">
                      <p>
                        <img src="/images/right_arrow.png" alt="arrow" />
                      </p>
                    </div>
                    <p className="xl:!text-[20px] lg:!text-[18px]">
                      Request For Proposal
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto service_width md:py-[6rem] py-[4rem] workpadd_borderTop end-to-end">
          <div className="end-To-end">
            <div className="endTO_text home_sec2_txt3 lg:!mb-[3rem] !mb-0">
              <p className="!w-full p-0">
                DELIGHT YOUR USERS WITH <br />
                OUR ENTERTAINMENT SOFTWARE SOLUTIONS
              </p>
            </div>
          </div>

          <div className="mx-auto pt-[32px]">
            <div className="accordion-tab-section">
              <div className="flex flex-wrap">
                <div className="lg:w-6/12 w-full mb-[10px]">
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
                                    OTT Streaming Apps
                                  </div>

                                  <div className="number_icon_img">
                                    <img
                                      src="/images/OTT-Streaming-Apps.png"
                                      alt="OTT Streaming Apps"
                                    />
                                  </div>
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="flex w-full">
                                  <div className="number_icon_img">
                                    <img
                                      src="/images/OTT-Streaming-Apps.png"
                                      alt="OTT Streaming Apps"
                                    />
                                  </div>
                                  <div className="text-[24px] ml-5">
                                    OTT Streaming Apps
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
                            <p className="mb-[1rem] text-[20px]">
                              Leverage our proven domain expertise along with
                              cutting-edge technologies to create a streaming
                              service that is as fast as it is instantly
                              accessible.
                            </p>
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
                                    Music Streaming Apps
                                  </div>

                                  <div className="number_icon_img">
                                    <img
                                      src="/images/Music-Streaming-Apps.png"
                                      alt="Music Streaming Apps"
                                    />
                                  </div>
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="flex w-full">
                                  <div className="number_icon_img">
                                    <img
                                      src="/images/Music-Streaming-Apps.png"
                                      alt="Music Streaming Apps"
                                    />
                                  </div>
                                  <div className="text-[24px] ml-5">
                                    Music Streaming Apps
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
                              Make the sway to the melodies of your music
                              streaming app. Our powerful backend helps you
                              manage thousands of active listeners without any
                              interruption or issue.
                            </p>
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
                                  <div className="text-[24px]">
                                    Photo Editing & Sharing Apps
                                  </div>

                                  <div className="number_icon_img">
                                    <img
                                      src="/images/Photo-Editing-Sharing-Apps.png"
                                      alt=" Photo Editing & Sharing Apps"
                                    />
                                  </div>
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="flex w-full">
                                  <div className="number_icon_img">
                                    <img
                                      src="/images/Photo-Editing-Sharing-Apps.png"
                                      alt=" Photo Editing & Sharing Apps"
                                    />
                                  </div>
                                  <div className="text-[24px] ml-5">
                                    Photo Editing & Sharing Apps
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
                              Become one of the most used photo editing and
                              sharing apps. We help you create an Instagram-like
                              app with your own photo editing and sharing
                              features.
                            </p>
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
                                    Ticket Booking Portals
                                  </div>

                                  <div className="number_icon_img">
                                    <img
                                      src="/images/Ticket-Booking-Portals.png"
                                      alt="Ticket Booking Portals"
                                    />
                                  </div>
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="flex w-full">
                                  <div className="number_icon_img">
                                    <img
                                      src="/images/Ticket-Booking-Portals.png"
                                      alt="Ticket Booking Portals"
                                    />
                                  </div>
                                  <div className="text-[24px] ml-5">
                                    Ticket Booking Portals
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
                              We develop ticket booking portals for all kinds of
                              events including movie theatres, live concerts,
                              sports matches, etc. Our team is focused on
                              providing a seamless ticket-booking experience to
                              eager fans.
                            </p>
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
                                  <div className="text-[24px]">Gaming apps</div>

                                  <div className="number_icon_img">
                                    <img
                                      src="/images/Gaming-apps.png"
                                      alt="Gaming apps"
                                    />
                                  </div>
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="flex w-full">
                                  <div className="number_icon_img">
                                    <img
                                      src="/images/Gaming-apps.png"
                                      alt="Gaming apps"
                                    />
                                  </div>
                                  <div className="text-[24px] ml-5">
                                    Gaming apps
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
                              We create gaming apps across platforms and genres.
                              In the world of gaming, we are known for our
                              stable infrastructure, technical speed, efficient
                              development process, and cutting-edge technology.
                            </p>
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
                                    Content Aggregation Apps
                                  </div>

                                  <div className="number_icon_img">
                                    <img
                                      src="/images/Content-Aggregation-Apps.png"
                                      alt="  Content Aggregation Apps"
                                    />
                                  </div>
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="flex w-full">
                                  <div className="number_icon_img">
                                    <img
                                      src="/images/Content-Aggregation-Apps.png"
                                      alt="  Content Aggregation Apps"
                                    />
                                  </div>
                                  <div className="text-[24px] ml-5">
                                    Content Aggregation Apps
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
                              These apps are the new way to get quality content
                              and videos. We are a trusted app aggregator
                              providing a one-stop solution for customers and
                              businesses to quickly find high-quality databases
                              on any topic or industry.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-6/12 w-full">
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="accordion-one"
                      role="tabpanel"
                      aria-labelledby="accordion-one-tab"
                    >
                      <div className="team_img">
                        <img
                          src={
                            "https://a.storyblok.com/f/219851/693x770/2763b15915/ott-streaming-apps-bg.png"
                          }
                          alt="OTT Streaming Apps"
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
                          src="/images/Music-Streaming-Apps.jpg"
                          alt="Music Streaming Apps"
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
                          src="/images/photoediting.jpg"
                          alt="Photo Editing & Sharing Apps"
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
                          src="/images/tickets-booking-portal.jpg"
                          alt="Ticket Booking Portals"
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
                        <img src="/images/gaming-apps.jpg" alt="Gaming apps" />
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
                          src="/images/Content-Aggregation-Apps.jpg"
                          alt="Content Aggregation Apps"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full mt-[40px]">
                  <Link
                    href="#section10_service"
                    onClick={(e) => scrollToSection(e, "section10_service")}
                  >
                    <div className="btn_paddinng contact_btn_solution btn_flex !mx-auto">
                      <div className="formBtn_icon">
                        <p>
                          <img src="/images/right_arrow.png" alt="arrow" />{" "}
                        </p>
                      </div>

                      <p className="xl:!text-[20px] lg:!text-[18px]">
                        Build My Entertainment App
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
                LEVERAGE OUR COMPREHENSIVE SOLUTIONS TO
                {!isMobile && <br />}
                DEVELOP MEDIA & ENTERTAINMENT APPS
              </p>
            </div>
          </div>

          <div className="endTO_text_content home_sec2_txt4">
            <p className="md:!text-center !text-left">
              Elevate your audience engagement and improve customer retention
              with ease. We bring extensive knowledge of the media and
              entertainment industry to help you increase your global reach and
              grow to new heights.
            </p>
          </div>

          <div className="my-[40px]">
            <img
              src={
                "https://a.storyblok.com/f/219851/1401x701/1bb92f5739/image-3-1.webp"
              }
              alt="MEDIA &amp; ENTERTAINMENT APPS"
            />
          </div>

          <div className="grid xl:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-[4rem]">
            <div className="text-center">
              <img
                src="/images/Subscription-Management.png"
                alt="Subscription Management"
                className="w-[50px] mx-auto"
              />
              <p className="mt-[20px] lg:text-[20px] text-[14px]">
                Subscription Management
              </p>
            </div>

            <div className="text-center">
              <img
                src="/images/Multichannel-Distribution.png"
                alt="Multichannel Distribution"
                className="w-[50px] mx-auto"
              />
              <p className="mt-[20px] lg:text-[20px] text-[14px]">
                Multichannel Distribution
              </p>
            </div>

            <div className="text-center">
              <img
                src="/images/Digital-Asset-Management.png"
                alt="Digital Asset Management"
                className="w-[50px] mx-auto"
              />
              <p className="mt-[20px] lg:text-[20px] text-[14px]">
                Digital Asset Management
              </p>
            </div>

            <div className="text-center">
              <img
                src="/images/OTT-Content.png"
                alt="OTT Content
              Delivery Solutions"
                className="w-[50px] mx-auto"
              />
              <p className="mt-[20px] lg:text-[20px] text-[14px]">
                OTT Content Delivery Solutions
              </p>
            </div>

            <div className="text-center">
              <img
                src="/images/Data-Management-Solution.png"
                alt="Data Management Solution"
                className="w-[50px] mx-auto"
              />
              <p className="mt-[20px] lg:text-[20px] text-[14px]">
                Data Management Solution
              </p>
            </div>

            <div className="text-center">
              <img
                src="/images/Media-Streaming-Services-Solutions.png"
                alt="Media Streaming Services & Solutions"
                className="w-[50px] mx-auto"
              />
              <p className="mt-[20px] lg:text-[20px] text-[14px]">
                Media Streaming Services & Solutions
              </p>
            </div>
          </div>

          <div className="w-full md:my-[60px] my-[40px]">
            <Link
              href="#section10_service"
              onClick={(e) => scrollToSection(e, "section10_service")}
            >
              <div className="btn_paddinng contact_btn_solution btn_flex !mx-auto">
                <div className="formBtn_icon">
                  <p>
                    <img src="/images/icons2-04.png" alt="call" />
                  </p>
                </div>

                <p className="xl:!text-[20px] lg:!text-[18px]">
                  Speak with Our Experts
                </p>
              </div>
            </Link>
          </div>
        </div>

        <div className="mx-auto service_width md:pt-[6rem] pt-[4rem] workpadd_borderTop end-to-end">
          <div className="end-To-end">
            <div className="endTO_text home_sec2_txt3">
              <p className="!w-full p-0">
                FEATURES THAT ELEVATE OUR MEDIA
                {!isMobile && <br />}
                AND ENTERTAINMENT SOFTWARE
              </p>
            </div>
          </div>

          <div className="service_grid_img">
            <div className="grid grid-cols-2 md:gap-[40px] gap-[20px]">
              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    loading="lazy"
                    className=""
                    src="/images/Real-time-Content-Feeds.png"
                    alt="Real-time Content Feeds"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 01.</div>
                  <div className="service_title">
                    <p>Real-time Content Feeds</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    loading="lazy"
                    className=""
                    src="/images/Multilingual-Support.png"
                    alt="Multilingual Support"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 02.</div>
                  <div className="service_title">
                    <p>Multilingual Support</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    className=""
                    src="/images/Live-Chatting.png"
                    alt="Live Chatting"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 03.</div>
                  <div className="service_title">
                    <p>Live {isMobile ? <br /> : ""}Chatting</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    className="alignnone wp-image-285 size-full"
                    src="/images/Secure-Payment-Gateways.png"
                    alt="Secure Payment Gateways"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 04.</div>
                  <div className="service_title">
                    <p>Secure Payment Gateways</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    className="alignnone wp-image-285 size-full"
                    src="/images/IoT-Integration.png"
                    alt="IoT Integration"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 05.</div>
                  <div className="service_title">
                    <p>IoT Integration</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    className="alignnone wp-image-285 size-full"
                    src="/images/Push-Notifications.png"
                    alt="Push Notifications"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 06.</div>
                  <div className="service_title">
                    <p>Push Notifications</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    className="alignnone wp-image-285 size-full"
                    src="/images/Interactive-UIUX.png"
                    alt="Interactive UI/UX"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 07.</div>
                  <div className="service_title">
                    <p>Interactive {isMobile ? <br /> : ""}UI/UX</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    className="alignnone wp-image-285 size-full"
                    src="/images/Social-Media-Integration.png"
                    alt="Social Media Integration"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 08.</div>
                  <div className="service_title">
                    <p>Social Media Integration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:py-[6rem] md:py-[6rem] py-[4rem]">
            <div className="sec9_service_style xl:px-[12rem] sm:px-[4rem] px-[1rem]">
              <div>
                <div className="end-To-end pt-8">
                  <div className="endTO_text home_sec2_txt3 mt-[4rem] mb-0">
                    <p className="!w-full md:p-0 p-3">
                      WHAT MAKES BRILWORKS THE BEST ENTERTAINMENT APP
                      DEVELOPMENT COMPANY?
                    </p>
                  </div>
                </div>

                <p
                  className={`p-font md:text-center text-left md:my-[2rem] mt-[2rem] pl-3 ${
                    isMobile ? "!text-[1rem]" : ""
                  } `}
                >
                  We specialize in creating world-class entertainment apps to
                  help you increase engagement and retain your customers over a
                  longer period of time. Get ready to elevate your app to the
                  next level of success with our media & entertainment software
                  solutions.
                </p>

                <div className="grid lg:grid-cols-3 grid-cols-2 xl:gap-[3.5rem] gap-x-3 gap-y-4 p-3">
                  <div>
                    <div
                      className={`number xl:text-[34px] text-[24px] ${
                        isMobile ? "!text-[20px]" : ""
                      }`}
                    >
                      GDPR
                    </div>
                    <p className="year border-0 py-[1rem]">Compliant Apps</p>
                  </div>

                  <div>
                    <div
                      className={`number xl:text-[34px] text-[24px] ${
                        isMobile ? "!text-[20px]" : ""
                      }`}
                    >
                      APPEALING
                    </div>
                    <p className="year border-0 py-[1rem]">UI/UX Experience</p>
                  </div>

                  <div>
                    <div
                      className={`number xl:text-[34px] text-[24px] ${
                        isMobile ? "!text-[20px]" : ""
                      }`}
                    >
                      Expert
                    </div>
                    <p className="year border-0 py-[1rem]">Knowledge</p>
                  </div>

                  <div>
                    <div
                      className={`number xl:text-[34px] text-[24px] ${
                        isMobile ? "!text-[20px]" : ""
                      }`}
                    >
                      AGILE
                    </div>
                    <p className="year border-0 py-[1rem]">Centric Model</p>
                  </div>

                  <div>
                    <div
                      className={`number xl:text-[34px] text-[24px] ${
                        isMobile ? "!text-[20px]" : ""
                      }`}
                    >
                      SECURITY
                    </div>
                    <p className="year border-0 py-[1rem]">-First Approach</p>
                  </div>

                  <div>
                    <div
                      className={`number xl:text-[34px] text-[24px] ${
                        isMobile ? "!text-[20px]" : ""
                      }`}
                    >
                      UNPARALLELED
                    </div>
                    <p className="year border-0 py-[1rem]">Code Quality</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <Link
              href="#section10_service"
              onClick={(e) => scrollToSection(e, "section10_service")}
            >
              <div className="btn_paddinng btn_flex !mx-auto">
                <div className="formBtn_icon">
                  <p>
                    <img src="/images/icons2-04.png" alt="call" />
                  </p>
                </div>

                <p className="xl:!text-[20px] lg:!text-[18px]">Work with us</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <SolutionEngagementModal />
      <SoutionHowCanStart />
      <SolutionContactForm />
      <MediaNEntertainmentFAQs />
    </>
  );
};

export default MediaAndEntertainment;
