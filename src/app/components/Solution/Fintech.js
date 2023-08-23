"use client";
import Link from "next/link";
import "./solutionStyle.scss";
import FintechFAQs from "./FintechFAQs";
import SolutionContactForm from "./SolutionContactForm";
import SoutionHowCanStart from "./SoutionHowCanStart";
import SolutionEngagementModal from "./SolutionEngagementModal";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

const Fintech = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
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
      <section className="portfolio mt-[6rem] solution-accordion">
        <div className="mx-auto service_width">
          <div className="relative">
            <p>
              <img
                className="h-[46vh] rounded-[20px]"
                src={
                  "https://a.storyblok.com/f/219851/1398x780/99204abf86/fintech-1.png"
                }
                alt="our process"
              />
            </p>
            <div className="service_sec1_position">
              <div className="flex self-end justify-between w-[96%] mx-auto">
                <div className="txt">
                  <div className="how-we flex items-center gap-[1rem]">
                    <h1 className="font-style-solution-head uppercase xl:text-[70px] lg:text-[66px] md:text-[50px] sm:text-[55px] text-[30px]">
                      FINTECH SOFTWARE
                    </h1>
                  </div>
                  <div className="how-we flex items-center gap-[1rem]">
                    <h1 className="font-style-solution-head uppercase xl:text-[70px] lg:text-[66px] md:text-[50px] sm:text-[55px] text-[30px]">
                      DEVELOPMENT SERVICES
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto service_width lg:py-[6rem] sm:py-[4rem] py-[2rem]">
          <div className="flex !flex-col lg:!flex-row gap-[1.5rem] sm:gap-[3.5rem] ">
            <div className="basis-[50%]">
              <div className="home_sec2_txt3 like_text">
                <p className="uppercase p-0 !ml-[0] !w-full">
                  DELIVERING SECURE FINTECH SOFTWARE DEVELOPMENT SERVICES TO
                  TRANSFORM THE FINANCIAL ECOSYSTEM.
                </p>
              </div>
            </div>
            <div className="basis-[55%]">
              <div className="home_sec2_txt4">
                <p className="!text-left">
                  Step into a new era of financial flexibility with our
                  sophisticated, intuitive & highly-secure fintech applications.
                  Our fintech software development services are built to drive
                  business transformation and maximize ROI.
                </p>

                <div
                  className={`flex ${
                    isMobile
                      ? "md:gap-8 md:mt-[50px] flex-wrap"
                      : "align-middle gap-4"
                  }`}
                >
                  <Link
                    href="#section10_service"
                    onClick={(e) => scrollToSection(e, "section10_service")}
                  >
                    <div className="btn_paddinng contact_btn btn_flex">
                      <div className="formBtn_icon">
                        <p>
                          <img src="/images/right_arrow.png" alt="arrow" />
                        </p>
                      </div>
                      <p className="xl:!text-[20px] lg:!text-[18px]">
                        Hire Fintech Developers
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="#section10_service"
                    onClick={(e) => scrollToSection(e, "section10_service")}
                  >
                    <div className="btn_paddinng contact_btn btn_flex">
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
        </div>

        <div className="mx-auto service_width md:py-[6rem] sm:py-[4rem] py-[2rem] workpadd_borderTop end-to-end">
          <div className="end-To-end">
            <div className="endTO_text home_sec2_txt3 lg:!mb-[3rem] !mb-0">
              <p className="!w-full p-0">
                OUR END-TO-END FINTECH SOFTWARE
                <br />
                DEVELOPMENT SERVICES
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
                                    Custom Fintech Software Developments
                                  </div>

                                  <div className="number_icon_img">
                                    <img
                                      src="/images/Custom-Fintech-Software-Developments.png"
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
                                      src="/images/Custom-Fintech-Software-Developments.png"
                                      alt="OTT Streaming Apps"
                                    />
                                  </div>
                                  <div className="text-[24px] ml-5">
                                    Custom Fintech Software Developments
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
                              Our custom fintech software development services
                              include application development, custom reporting,
                              and real-time data interaction.
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
                                    Banking App Development
                                  </div>

                                  <div className="number_icon_img">
                                    <img
                                      src="/images/Banking-App-Development.png"
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
                                      src="/images/Banking-App-Development.png"
                                      alt="Music Streaming Apps"
                                    />
                                  </div>
                                  <div className="text-[24px] ml-5">
                                    Banking App Development
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
                              Develop applications such as digital wallets or
                              mobile banking apps with our fintech app
                              development services that let you expand your
                              digital footprint by making it easier for your
                              clients to do banking from any device, at any
                              time.
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
                                    Insurance App Development
                                  </div>

                                  <div className="number_icon_img">
                                    <img
                                      src="/images/Insurance-App-Development.png"
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
                                      src="/images/Insurance-App-Development.png"
                                      alt=" Photo Editing & Sharing Apps"
                                    />
                                  </div>
                                  <div className="text-[24px] ml-5">
                                    Insurance App Development
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
                              We know that customer experience is an essential
                              part of building a successful InsurTech app. Our
                              team specializes in custom insurance application
                              development, with no compromises on quality or
                              usability.
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
                                    Wallet App Development
                                  </div>

                                  <div className="number_icon_img">
                                    <img
                                      src="/images/Wallet-App-Development.png"
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
                                      src="/images/Wallet-App-Development.png"
                                      alt="Ticket Booking Portals"
                                    />
                                  </div>
                                  <div className="text-[24px] ml-5">
                                    Wallet App Development
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
                              Giving customers the ability to pay with a
                              smartphone-specific digital wallet is an easy way
                              to encourage loyalty and ensure customer
                              satisfaction.
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
                                  <div className="text-[24px]">
                                    Fintech Software Security
                                  </div>

                                  <div className="number_icon_img">
                                    <img
                                      src="/images/Fintech-Software-Security-Compliance.png"
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
                                      src="/images/Fintech-Software-Security-Compliance.png"
                                      alt="Gaming apps"
                                    />
                                  </div>
                                  <div className="text-[24px] ml-5">
                                    Fintech Software Security
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
                              We work with you to ensure your application
                              remains up and running. Whether it’s in server
                              management, data security, or continuous
                              monitoring.
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
                                    FinOps Services
                                  </div>

                                  <div className="number_icon_img">
                                    <img
                                      src="/images/FinOps-Services.png"
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
                                      src="/images/FinOps-Services.png"
                                      alt="  Content Aggregation Apps"
                                    />
                                  </div>
                                  <div className="text-[24px] ml-5">
                                    FinOps Services
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
                              With the right cloud cost management, your
                              business can scale effectively and avoid cost
                              overheads. From managing your cloud custodian
                              services to proactive detection of technology
                              costs to constructing agile, scalable solutions
                              for you, our fintech software developers manage it
                              all.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-6/12 w-full mt-[0px]">
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="accordion-one"
                      role="tabpanel"
                      aria-labelledby="accordion-one-tab"
                    >
                      <div className="team_img">
                        <img
                          src="/images/custom-fintech-software-developments.jpg"
                          alt="fintech-software-developments"
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
                          src="/images/banking-app-development.jpg"
                          alt="Banking Apps"
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
                          src={
                            "https://a.storyblok.com/f/219851/693x771/b3c39a5900/2-12.png"
                          }
                          alt="Insurance app development"
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
                          src="/images/wallet-app-development.jpg"
                          alt="Wallet App Development"
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
                          src={
                            "https://a.storyblok.com/f/219851/693x771/6f75c05158/fintech-software-security-compliance.jpg"
                          }
                          alt="Fintech-Software-Security-Compliance"
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
                          src="/images/FinOps-Services-1.jpg"
                          alt="FinOps Services Apps"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full mt-[3rem]">
                  <Link
                    href="#section10_service"
                    onClick={(e) => scrollToSection(e, "section10_service")}
                  >
                    <div className="btn_paddinng contact_btn_solution btn_flex !mx-auto">
                      <div className="formBtn_icon">
                        <p>
                          <img src="/images/right_arrow.png" alt="arrow" />
                        </p>
                      </div>

                      <p className="xl:!text-[20px] lg:!text-[18px]">
                        Build My Fintech App
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
            <div className="endTO_text home_sec2_txt3 lg:!mb-[3rem] !mb-0">
              <p className="!w-full p-0">
                INDUSTRY-SPECIFIC
                <br />
                FINTECH SOFTWARE DEVELOPMENT
              </p>
            </div>
          </div>
          <div className="mx-auto pt-[32px]">
            <div className="accordion-tab-section">
              <div className="flex flex-wrap ">
                <div className="lg:w-6/12 w-full md:mt-[0px] mt-[30px]">
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="accordion-seven"
                      role="tabpanel"
                      aria-labelledby="accordion-seven-tab"
                    >
                      <div className="team_img">
                        <img
                          src={
                            "https://a.storyblok.com/f/219851/693x771/c05c991634/2-13.png"
                          }
                          alt="fintech-software-developments"
                        />
                      </div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="accordion-eight"
                      role="tabpanel"
                      aria-labelledby="accordion-eight-tab"
                    >
                      <div className="team_img">
                        <img src="/images/Lending.jpg" alt="Banking Apps" />
                      </div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="accordion-nine"
                      role="tabpanel"
                      aria-labelledby="accordion-nine-tab"
                    >
                      <div className="team_img">
                        <img
                          src="/images/consumer-banking.jpg"
                          alt="consumer-banking"
                        />
                      </div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="accordion-ten"
                      role="tabpanel"
                      aria-labelledby="accordion-ten-tab"
                    >
                      <div className="team_img">
                        <img
                          src="/images/Personal-Finance.jpg"
                          alt="Personal Finance"
                        />
                      </div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="accordion-eleven"
                      role="tabpanel"
                      aria-labelledby="accordion-eleven-tab"
                    >
                      <div className="team_img">
                        <img src="/images/payment.jpg" alt="payment" />
                      </div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="accordion-tweleve"
                      role="tabpanel"
                      aria-labelledby="accordion-tweleve-tab"
                    >
                      <div className="team_img">
                        <img src="/images/insurance.jpg" alt="Insurance" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-6/12 w-full mb-[10px]">
                  <div
                    id="accordionindustry"
                    className="d-block accordion nav nav-tabs !mb-0 md:ml-8 w-full"
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
                        data-bs-target="#accordion-seven"
                        type="button"
                        role="tab"
                        aria-controls="accordion-seven"
                        aria-selected="true"
                      >
                        <h2 className="accordion-header" id="headingSeven">
                          <button
                            className="accordion-button xl:text-[32px] md:text-[26px] text-[16px]"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSeven"
                            aria-expanded="true"
                            aria-controls="collapseSeven"
                          >
                            {isAccordionActive2 == 1 && isAccordionOpen2 ? (
                              <>
                                <div className="flex justify-between w-full">
                                  <div className="text-[24px]">
                                    Wealth Management
                                  </div>

                                  <div className="number_icon_img">
                                    <img
                                      src="/images/Wealth-Management.png"
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
                                      src="/images/Wealth-Management.png"
                                      alt="OTT Streaming Apps"
                                    />
                                  </div>
                                  <div className="text-[24px] ml-5">
                                    Wealth Management
                                  </div>
                                </div>
                              </>
                            )}
                          </button>
                        </h2>
                        <div
                          id="collapseSeven"
                          className="accordion-collapse collapse show xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                          aria-labelledby="headingSeven"
                          data-bs-parent="#accordionindustry"
                        >
                          <div className="accordion-body">
                            <p className="mb-[1rem] text-[20px]">
                              We build fintech apps to better manage financial
                              assets, seek insight into consumer trends and
                              improve communication.
                            </p>
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
                        data-bs-target="#accordion-eight"
                        type="button"
                        role="tab"
                        aria-controls="accordion-eight"
                        aria-selected="false"
                      >
                        <h2 className="accordion-header" id="headingEight">
                          <button
                            className="accordion-button collapsed xl:text-[32px] md:text-[26px] text-[16px]"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseEight"
                            aria-expanded="false"
                            aria-controls="collapseEight"
                          >
                            {isAccordionActive2 == 2 && isAccordionOpen2 ? (
                              <>
                                <div className="flex justify-between w-full">
                                  <div className="text-[24px]">Lending</div>

                                  <div className="number_icon_img">
                                    <img
                                      src="/images/Lending.png"
                                      alt="Lending"
                                    />
                                  </div>
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="flex w-full">
                                  <div className="number_icon_img">
                                    <img
                                      src="/images/Lending.png"
                                      alt="Lending"
                                    />
                                  </div>
                                  <div className="text-[24px] ml-5">
                                    Lending
                                  </div>
                                </div>
                              </>
                            )}
                          </button>
                        </h2>
                        <div
                          id="collapseEight"
                          className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                          aria-labelledby="headingEight"
                          data-bs-parent="#accordionindustry"
                        >
                          <div className="accordion-body">
                            <p className="mb-[1rem] text-[20px]">
                              We build technology solutions to enhance your
                              operations and automate and improve your lending
                              processes to facilitate instant loan approval, KYC
                              verification, and consumer eligibility checks.
                            </p>
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
                        data-bs-target="#accordion-nine"
                        type="button"
                        role="tab"
                        aria-controls="accordion-nine"
                        aria-selected="false"
                      >
                        <h2 className="accordion-header" id="headingNine">
                          <button
                            className="accordion-button collapsed xl:text-[32px] md:text-[26px] text-[16px]"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseNine"
                            aria-expanded="false"
                            aria-controls="collapseNine"
                          >
                            {isAccordionActive2 == 3 && isAccordionOpen2 ? (
                              <>
                                <div className="flex justify-between w-full">
                                  <div className="text-[24px]">
                                    Consumer Banking
                                  </div>

                                  <div className="number_icon_img">
                                    <img
                                      src="/images/Consumer-Banking.png"
                                      alt="Consumer Banking"
                                    />
                                  </div>
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="flex w-full">
                                  <div className="number_icon_img">
                                    <img
                                      src="/images/Consumer-Banking.png"
                                      alt="Consumer Banking"
                                    />
                                  </div>
                                  <div className="text-[24px] ml-5">
                                    Consumer Banking
                                  </div>
                                </div>
                              </>
                            )}
                          </button>
                        </h2>
                        <div
                          id="collapseNine"
                          className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                          aria-labelledby="headingNine"
                          data-bs-parent="#accordionindustry"
                        >
                          <div className="accordion-body">
                            <p className="mb-[1rem] text-[20px]">
                              We create and deploy the most advanced and secure
                              banking solutions that enable customers to help
                              customer service, predict the future, and smoothen
                              out operations.
                            </p>
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
                        data-bs-target="#accordion-ten"
                        type="button"
                        role="tab"
                        aria-controls="accordion-ten"
                        aria-selected="false"
                      >
                        <h2 className="accordion-header" id="headingTen">
                          <button
                            className="accordion-button collapsed xl:text-[32px] md:text-[26px] text-[16px]"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTen"
                            aria-expanded="false"
                            aria-controls="collapseTen"
                          >
                            {isAccordionActive2 == 4 && isAccordionOpen2 ? (
                              <>
                                <div className="flex justify-between w-full">
                                  <div className="text-[24px]">
                                    Personal Finance
                                  </div>

                                  <div className="number_icon_img">
                                    <img
                                      src="/images/Personal-Finance.png"
                                      alt="Personal Finance"
                                    />
                                  </div>
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="flex w-full">
                                  <div className="number_icon_img">
                                    <img
                                      src="/images/Personal-Finance.png"
                                      alt="Personal Finance"
                                    />
                                  </div>
                                  <div className="text-[24px] ml-5">
                                    Personal Finance
                                  </div>
                                </div>
                              </>
                            )}
                          </button>
                        </h2>
                        <div
                          id="collapseTen"
                          className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                          aria-labelledby="headingTen"
                          data-bs-parent="#accordionindustry"
                        >
                          <div className="accordion-body">
                            <p className="mb-[1rem] text-[20px]">
                              We develop software for personal finance, in a way
                              that’s both simple and powerful. Our goal is to
                              help users better manage their savings and
                              investments.
                            </p>
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
                        data-bs-target="#accordion-eleven"
                        type="button"
                        role="tab"
                        aria-controls="accordion-eleven"
                        aria-selected="false"
                      >
                        <h2 className="accordion-header" id="headingEleven">
                          <button
                            className="accordion-button collapsed xl:text-[32px] md:text-[26px] text-[16px]"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseEleven"
                            aria-expanded="false"
                            aria-controls="collapseEleven"
                          >
                            {isAccordionActive2 == 5 && isAccordionOpen2 ? (
                              <>
                                <div className="flex justify-between w-full">
                                  <div className="text-[24px]">Payment</div>

                                  <div className="number_icon_img">
                                    <img
                                      src="/images/Payment.png"
                                      alt="Payment"
                                    />
                                  </div>
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="flex w-full">
                                  <div className="number_icon_img">
                                    <img
                                      src="/images/Payment.png"
                                      alt="Payment"
                                    />
                                  </div>
                                  <div className="text-[24px] ml-5">
                                    Payment
                                  </div>
                                </div>
                              </>
                            )}
                          </button>
                        </h2>
                        <div
                          id="collapseEleven"
                          className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                          aria-labelledby="headingEleven"
                          data-bs-parent="#accordionindustry"
                        >
                          <div className="accordion-body">
                            <p className="mb-[1rem] text-[20px]">
                              Our portfolio encompasses a suite of financial
                              technology that is designed to bring transparency,
                              safety, and control to the payments system.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`${
                        isAccordionActive2 == 6 && isAccordionOpen2
                          ? "item-accordion"
                          : ""
                      } `}
                      onClick={() => {
                        handleAccordianceClick2(6);
                      }}
                    >
                      <div
                        className="accordion-item"
                        data-bs-toggle="tab"
                        data-bs-target="#accordion-tweleve"
                        type="button"
                        role="tab"
                        aria-controls="accordion-tweleve"
                        aria-selected="false"
                      >
                        <h2 className="accordion-header" id="headingTwelve">
                          <button
                            className="accordion-button collapsed xl:text-[32px] md:text-[26px] text-[16px]"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwelve"
                            aria-expanded="false"
                            aria-controls="collapseTwelve"
                          >
                            {isAccordionActive2 == 6 && isAccordionOpen2 ? (
                              <>
                                <div className="flex justify-between w-full">
                                  <div className="text-[24px]">Insurance</div>

                                  <div className="number_icon_img">
                                    <img
                                      src="/images/Wealth-Management.png"
                                      alt="Wealth Management"
                                    />
                                  </div>
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="flex w-full">
                                  <div className="number_icon_img">
                                    <img
                                      src="/images/Wealth-Management.png"
                                      alt="Wealth Management"
                                    />
                                  </div>
                                  <div className="text-[24px] ml-5">
                                    Insurance
                                  </div>
                                </div>
                              </>
                            )}
                          </button>
                        </h2>
                        <div
                          id="collapseTwelve"
                          className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                          aria-labelledby="headingTwelve"
                          data-bs-parent="#accordionindustry"
                        >
                          <div className="accordion-body">
                            <p className="mb-[1rem] text-[20px]">
                              Fintech is changing the insurance industry, so
                              we’re changing the way it works for you. Our
                              fintech products help insurance companies improve
                              customer engagement, underwriting process, claims
                              processing, and fraud detection.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full md:my-[6rem] mb-12">
                  <Link
                    href="#section10_service"
                    onClick={(e) => scrollToSection(e, "section10_service")}
                  >
                    <div className="btn_paddinng contact_btn_solution btn_flex !mx-auto">
                      <div className="formBtn_icon">
                        <p>
                          <img src="/images/icons2-04.png" alt="arrow" />
                        </p>
                      </div>

                      <p className="xl:!text-[20px] lg:!text-[18px]">
                        Speak with Our Experts
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
                HOW OUR INNOVATIVE PRODUCTS HELP
                <br />
                FINTECH SOLUTION COMPANIES
              </p>
            </div>
          </div>

          <div className="service_grid_img">
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[40px] gap-[20px]">
              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    loading="lazy"
                    className=""
                    src="/images/Fraud-Detection-Software.png"
                    alt="Fraud-Detection-Software"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 01.</div>
                  <div className="service_title">
                    <p>Fraud Detection Software</p>
                  </div>
                  <div className="service_description">
                    <p>
                      Our financial fraud detection software is designed to
                      screen users, accounts, transactions, and reports for
                      money laundering, counterfeiting, embezzlement, and all
                      forms of abuse.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    loading="lazy"
                    className=""
                    src="/images/Financial-Reporting-Software.png"
                    alt="Financial-Reporting-Software"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 02.</div>
                  <div className="service_title">
                    <p>Financial Reporting Software</p>
                  </div>
                  <div className="service_description">
                    <p>
                      It helps organizations to complete financial tasks more
                      efficiently by reducing the time taken for manual work by
                      replacing it with automation and providing accurate
                      reports for management decision-making.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    className=""
                    src="/images/Financial-Risk-Management.png"
                    alt="Financial-Risk-Management"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 03.</div>
                  <div className="service_title">
                    <p>Financial Risk Management</p>
                  </div>
                  <div className="service_description">
                    <p>
                      Risk Management software increases the focus on the risk
                      of financial losses to the institution and helps its
                      management mitigate these risks through accurate and
                      timely decisions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    className="alignnone wp-image-285 size-full"
                    src="/images/Financial-CRM-software.png"
                    alt="Financial-CRM-software"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 04.</div>
                  <div className="service_title">
                    <p>Financial CRM software</p>
                  </div>
                  <div className="service_description">
                    <p>
                      It is used by insurance companies and banks to streamline
                      customer communications. Financial CRM software includes
                      features like business intelligence, analytics,
                      dashboards, reports, and much more.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    className="alignnone wp-image-285 size-full"
                    src="/images/Background-Check-Software.png"
                    alt="Background-Check-Software"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 05.</div>
                  <div className="service_title">
                    <p>Background Check Software</p>
                  </div>
                  <div className="service_description">
                    <p>
                      It provides fast and accurate information on the
                      authenticity of confidential information provided by
                      individuals to process any applications like a credit
                      card, mortgage loan, insurance etc.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    className="alignnone wp-image-285 size-full"
                    src="/images/Sales-Forecasting-Softwaref.png"
                    alt="Sales-Forecasting-Softwaref"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 06.</div>
                  <div className="service_title">
                    <p>Sales Forecasting Software</p>
                  </div>
                  <div className="service_description">
                    <p>
                      It is a powerful tool used by sales managers and business
                      owners to estimate and predict expenses with analysis and
                      modeling tools including, expense reports, customer
                      profitability analysis etc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full pb-[64px] pt-6">
              <Link
                href="#section10_service"
                onClick={(e) => scrollToSection(e, "section10_service")}
              >
                <div className="btn_paddinng contact_btn_solution btn_flex !mx-auto">
                  <div className="formBtn_icon">
                    <p>
                      <img
                        src="/images/icons-05.png"
                        className="!w-full"
                        alt="arrow"
                      />
                    </p>
                  </div>

                  <p className="xl:!text-[20px] lg:!text-[18px]">
                    Let's get in touch
                  </p>
                </div>
              </Link>
            </div>
          </div>

          <div className="mx-auto md:pt-[6rem] pt-[4rem] workpadd_borderTop end-to-end">
            <div className="portfolio_health_sec1 w-full">
              <div className="flex md:flex-row flex-col gap-[2rem] align-middle mb-0 ">
                <div className="health_sec1_flex_40 order_2">
                  <div className=" portfolio_title">
                    <p>OUR PORTFOLIO</p>
                  </div>
                  <br />
                  <div className="fintech-portfolio-sec">
                    <p>
                      Reliant Business Valuations <br /> Software Development
                    </p>
                  </div>

                  <div>
                    <p className="w-3/5 fintech-portfolio-content">
                      New-age financing software developed for small businesses
                      and services companies.
                    </p>
                  </div>
                  <div className="sp-8 w-fit py-[2rem]">
                    <Link href="/portfolio/">
                      <div className="btn_flex">
                        <div className="arrow_icon">
                          <img
                            decoding="async"
                            loading="lazy"
                            className="alignnone"
                            src="/images/right_arrow.png"
                            alt="arrow"
                            width="10"
                            height="17"
                          />
                        </div>
                        <div className="xl:!text-[20px] lg:!text-[18px]">
                          <p className="align-left">Know More</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="health_sec1_flex_60 order_1">
                  <div className="about_sec1_img1">
                    <img
                      decoding="async"
                      loading="lazy"
                      className="alignnone"
                      src="/images/reliant-img.png"
                      alt="Reliant"
                      width="815"
                      height="523"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:py-[6rem] md:py-[4rem] py-[2rem]">
            <div className="sec9_service_style xl:px-[12rem] sm:px-[4rem] px-[1rem]">
              <div>
                <div className="end-To-end pt-8">
                  <div className="endTO_text home_sec2_txt3 mt-[4rem] mb-0 md:pt-[4.5rem]">
                    <p className="!w-full md:p-0 p-3">
                      WHY SHOULD YOU CHOOSE US FOR FINTECH SOFTWARE DEVELOPMENT?
                    </p>
                  </div>
                </div>

                <p
                  className={`p-font md:text-center text-left ${
                    isMobile ? "!text-[1rem]" : ""
                  } md:my-[2rem] mt-[2rem] pl-3`}
                >
                  We offer next-gen fintech solutions, which allow you to
                  embrace innovation, improve efficiency, and comply with
                  regulations. Our fintech software developers are always ready
                  to help develop innovative solutions that optimize your
                  customers’ experience and better manage risk in the financial
                  industry.
                </p>

                <div className="grid lg:grid-cols-3 grid-cols-2 xl:gap-[3.5rem] gap-[2rem] p-4">
                  <div>
                    <div
                      className={`number xl:text-[34px] text-[24px] ${
                        isMobile ? "!text-[24px]" : ""
                      }`}
                    >
                      100%
                    </div>
                    <p className="year border-0 py-[1rem]">
                      Safe & Secure
                      <br />
                      Products
                    </p>
                  </div>

                  <div>
                    <div
                      className={`number xl:text-[34px] text-[24px] ${
                        isMobile ? "!text-[24px]" : ""
                      }`}
                    >
                      30+
                    </div>
                    <p className="year border-0 py-[1rem]">
                      Fintech
                      <br />
                      Developers
                    </p>
                  </div>

                  <div>
                    <div
                      className={`number xl:text-[34px] text-[24px] ${
                        isMobile ? "!text-[24px]" : ""
                      }`}
                    >
                      100%
                    </div>
                    <p className="year border-0 py-[1rem]">
                      Compliance with
                      <br />
                      Financial Standards
                    </p>
                  </div>

                  <div>
                    <div
                      className={`number xl:text-[34px] text-[24px] ${
                        isMobile ? "!text-[24px]" : ""
                      }`}
                    >
                      AGILE
                    </div>
                    <p className="year border-0 py-[1rem]">Development Team</p>
                  </div>

                  <div>
                    <div
                      className={`number xl:text-[34px] text-[24px] ${
                        isMobile ? "!text-[24px]" : ""
                      }`}
                    >
                      EXPERT
                    </div>
                    <p className="year border-0 py-[1rem]">Knowledge</p>
                  </div>

                  <div>
                    <div
                      className={`number xl:text-[34px] text-[24px] ${
                        isMobile ? "!text-[24px]" : ""
                      }`}
                    >
                      API
                    </div>
                    <p className="year border-0 py-[1rem]">
                      Third-party API Development & Integration
                    </p>
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
                    <img src="/images/right_arrow.png" alt="call" />
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
      <FintechFAQs />
    </>
  );
};

export default Fintech;
