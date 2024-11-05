"use client";
import dynamic from "next/dynamic";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import { scrollEffect } from "../lib/commonFunction";
import Image from "next/image";
import Button from "../Common/Button";

const FleetManagmentFAQs = dynamic(() => import("./SolutionFAQ"));
const SolutionContactForm = dynamic(() => import("./SolutionContactForm"));
const SoutionHowCanStart = dynamic(() => import("./SoutionHowCanStart"));
const SolutionEngagementModal = dynamic(() =>
  import("./SolutionEngagementModal")
);
const AccordionCustomStyle = dynamic(() =>
  import("../Common/AccordionCustomStyle")
);

const FleetManagementNGPS = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const [open, setOpen] = useState(1);
  const [open2, setOpen2] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const handleOpen2 = (value) => setOpen2(open2 === value ? 0 : value);

  const fleetUpperAccordionItems = [
    {
      title: "Fleet Telematics Solutions",
      iconSrc: "/images/Fleet-Telematics-Solutions-1.png",
      content:
        "Our extensive fleet telematics solution is designed for large vehicle fleets and uses real-time sensor data, video analytics, and in-car computers to help you optimize the driving efficiency of your vehicles.",
      imageSrc: "/images/Fleet-Telematics-Solutions.jpg",
      imageAlt: "Fleet Telematics Solutions",
    },
    {
      title: "GPS Fleet Tracking",
      iconSrc: "/images/GPS-Fleet-Tracking.png",
      content:
        "We’re smarter than most fleet managers. Our software developers have extensive experience in fleet-tracking solutions. Through a combination of real-time GPS tracking, route optimization, and manual regrouping, our proprietary software allows you to easily monitor your fleet anywhere, while on the move.",
      imageSrc: "/images/Delivery-Management-Software.jpg",
      imageAlt: "Delivery Management Software",
    },
    {
      title: "Fuel Consumption Control Apps",
      iconSrc: "/images/Fuel-Consumption-Control-Apps.png",
      content:
        "Our fuel consumption control apps can collect and analyze data from your fleet to help you optimize fuel efficiency. Integrations with telematics and vehicle tracking systems let organizations ensure compliance with corporate policies, knowing that the whole supply chain has been accounted for.",
      imageSrc: "/images/Fuel-Consumption-Control-Apps.jpg",
      imageAlt: "Fuel Consumption Control Apps",
    },
    {
      title: "Fleet Management Integration",
      iconSrc: "/images/Fleet-Management-Integration.png",
      content:
        "Easily generate reports on mileage to prevent the occurrence of vehicle downtime due to lack of maintenance. CFMS also allows you to record daily expenses, track accurate vehicle utilization history, and promote ride-sharing incentives available in various cities across the country.",
      imageSrc: "/images/Fleet-Management-Integration.jpg",
      imageAlt: "Fleet Management Integration",
    },
    {
      title: "Driver Management & Safety",
      iconSrc: "/images/Driver-Management-Safety.png",
      content:
        "With its in-vehicle monitoring and reporting system, you can monitor driving behavior, boost safety and efficiency by reducing tailgating, assist drivers to reduce fatigue, and minimize idle-time.",
      imageSrc: "/images/Driver-Management-Safety.jpg",
      imageAlt: "Driver Management Safety",
    },
    {
      title: "Fleet Maintenance & Predictions",
      iconSrc: "/images/Fleet-Maintenance-Predictions.png",
      content:
        "Aggregate, monitor, and analyze data to trigger timely maintenance reminders, optimize service visits and simplify scheduling routine repairs.",
      imageSrc: "/images/Fleet-Maintenance-Predictions.jpg",
      imageAlt: "Fleet Maintenance Predictions",
    },
  ];

  const fleetLowerAccordionItems = [
    {
      title: "Traffic Management Software",
      iconSrc: "/images/Traffic-Management-Software.png",
      content:
        "Never be caught out by unexpected road conditions. Our traffic management software lets your team stay informed and updated by providing real-time visibility, insight, and control.",
      imageSrc: "/images/Traffic-Management-Software.jpg",
      imageAlt: "Traffic-Management-Software",
    },
    {
      title: "Delivery Management Software",
      iconSrc: "/images/Delivery-Management-Software.png",
      content:
        "Our online POS system makes managing consignment paperwork, sending real-time notifications, and creating delivery records easy!",
      imageSrc: "/images/GPS-Fleet-Tracking.jpg",
      imageAlt: "GPS-Fleet-Tracking",
    },
    {
      title: "Transportation Software",
      iconSrc: "/images/Transportation-Software.png",
      content:
        "Let our software will deliver information about the fastest, cheapest, and most convenient for you to transport goods. We bring you the greatest value in pricing and cost savings every time you move goods.",
      imageSrc: "/images/Transportation-Software.jpg",
      imageAlt: "Transportation-Software",
    },
    {
      title: "Supply Chain Management Software",
      iconSrc: "/images/Supply-Chain-Management-Software.png",
      content:
        "Our supply chain tracking services make it easy to track, manage and maintain the movement of all your inventory, making sure that you’re aware of its location at all times.",
      imageSrc: "/images/Supply-Chain-Management-Software.jpg",
      imageAlt: "Supply-Chain-Management-Software",
    },
  ];

  useEffect(() => {
    scrollEffect();
    window.addEventListener("scroll", scrollEffect);

    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);

  return (
    <>
      <section className="portfolio mt-[6rem] solution-accordion">
        <div className="mx-auto service_width">
          <div className="relative">
            <p>
              <Image
                className="h-[46vh] md:block hidden rounded-[20px]"
                src="https://a.storyblok.com/f/219851/1398x780/6e268b3e22/banner-with-radius.webp"
                alt="Fleet Management services"
                priority
                width="1398"
                height="780"
                sizes="(min-width: 1040px) 80vw, (min-width: 640px) 91.84vw, calc(100vw - 30px)"
                media="(min-width: 768px)"
              />
              <Image
                className="h-[300px] block md:hidden rounded-[20px]"
                src="/images/banner-with-radius.webp"
                alt="Fleet Management services"
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
                      FLEET MANAGEMENT SOFTWARE
                      <br />
                      DEVELOPMENT COMPANY
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto service_width xl:py-[6rem] md:py-[4rem] py-[2rem]">
          <div className="flex !flex-col lg:!flex-row gap-[1.5rem]">
            <div className="basis-[50%]">
              <div className="home_sec2_txt3 like_text">
                <p className="uppercase !p-0 !ml-[0] !w-full">
                  SCALE YOUR BUSINESS WITH FLEET MANAGEMENT SOFTWARE DEVELOPMENT
                  SERVICES.
                </p>
              </div>
            </div>
            <div className="basis-[55%]">
              <div className="home_sec2_txt4">
                <p className="!text-left !text-base lg:!text-xl pb-8">
                  Improve your fleet’s productivity, visibility, and knowledge
                  with the help of our custom fleet management app software
                  development services
                </p>
                <div>
                  <Button
                    innerClassName="flex items-center justify-center gap-1"
                    className="!pr-5"
                    redirect="#section10_service"
                    label="Request For Proposal"
                    icon="right-arrow"
                    scrollingButton
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto service_width xl:py-[6rem] md:py-[4rem] py-[2rem] workpadd_borderTop end-to-end ">
          <div className="end-To-end">
            <div className="endTO_text home_sec2_txt3 solutions lg:!mb-[3rem] !mb-0">
              <h2 className="!w-full p-0">
                INCREASE YOUR FLEET’S EFFICIENCY WITH OUR
                <br />
                FLEET MANAGEMENT SOFTWARE SOLUTIONS
              </h2>
            </div>
          </div>

          <div className="mx-auto pt-[32px] reveal">
            <div className="accordion-tab-section">
              <div className="flex flex-wrap justify-center">
                <div className="lg:w-6/12 w-full mb-[10px]">
                  <div className="accordion !mb-0 lg:w-[90%] w-full">
                    {fleetUpperAccordionItems.map(
                      ({ title, iconSrc, content }, index) => (
                        <AccordionCustomStyle
                          key={index}
                          index={index + 1}
                          title={title}
                          iconSrc={iconSrc}
                          content={content}
                          handleOpen={handleOpen}
                          open={open}
                        />
                      )
                    )}
                  </div>
                </div>
                <div className="lg:w-6/12 w-full">
                  <div>
                    {fleetUpperAccordionItems.map(
                      ({ imageSrc, imageAlt }, index) => (
                        <div
                          key={index}
                          className={`fade-image ${
                            (index === 0 && (open === 1 || open === 0)) ||
                            (index !== 0 && open === index + 1)
                              ? "active"
                              : "hidden"
                          }`}
                        >
                          <div className="team_img">
                            <img
                              decoding="async"
                              loading="lazy"
                              src={imageSrc}
                              alt={imageAlt}
                            />
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>

                <div className="xl:mt-[6rem] md:mt-[4rem] mt-[2rem]">
                  <Button
                    innerClassName="flex items-center justify-center gap-1"
                    className="!pr-5"
                    redirect="#section10_service"
                    label="Build My Fleet Management Software"
                    icon="right-arrow"
                    scrollingButton
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto service_width xl:pt-[6rem] md:pt-[4rem] pt-[2rem] workpadd_borderTop end-to-end">
          <div className="end-To-end">
            <div className="endTO_text home_sec2_txt3 solutions">
              <h2 className="!w-full p-0">
                CUSTOM FLEET MANAGEMENT SOFTWARE
                <br />
                SERVICES
              </h2>
            </div>
          </div>
          <div className="mx-auto pt-[32px] reveal">
            <div className="accordion-tab-section">
              <div className="flex flex-wrap justify-center">
                <div className="lg:w-6/12 w-full mb-12 lg:mb-0">
                  <div>
                    {fleetLowerAccordionItems.map(
                      ({ imageSrc, imageAlt }, index) => (
                        <div
                          key={index}
                          className={`fade-image ${
                            (index === 0 && (open2 === 1 || open2 === 0)) ||
                            (index !== 0 && open2 === index + 1)
                              ? "active"
                              : "hidden"
                          }`}
                        >
                          <div className="team_img">
                            <img
                              decoding="async"
                              loading="lazy"
                              src={imageSrc}
                              alt={imageAlt}
                            />
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
                <div className="lg:w-6/12 w-full mb-[10px] ">
                  <div className="accordion !mb-0 lg:ml-8 w-full">
                    {fleetLowerAccordionItems.map(
                      ({ title, iconSrc, content }, index) => (
                        <AccordionCustomStyle
                          key={index}
                          index={index + 1}
                          title={title}
                          iconSrc={iconSrc}
                          content={content}
                          handleOpen={handleOpen2}
                          open={open2}
                        />
                      )
                    )}
                  </div>
                </div>

                <div className="xl:my-[6rem] md:my-[4rem] my-[2rem]">
                  <Button
                    innerClassName="flex items-center justify-center gap-1"
                    className="!pr-5"
                    redirect="#section10_service"
                    label="Speak with Our Experts"
                    scrollingButton
                    icon={
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        height="24px"
                        width="24px"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="none"
                          stroke-miterlimit="10"
                          strokeWidth="32"
                          d="M451 374c-15.88-16-54.34-39.35-73-48.76-24.3-12.24-26.3-13.24-45.4.95-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48 5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160.15 160.15 0 0 0 83 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64 54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159.09 159.09 0 0 0 13.8-25.8C465 391.17 468 391.17 451 374z"
                        ></path>
                      </svg>
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto xl:pt-[6rem] md:pt-[4rem] pt-[2rem] workpadd_borderTop end-to-end reveal">
            <div className="end-To-end">
              <div className="endTO_text home_sec2_txt3 solutions">
                <h2 className="!w-full p-0">
                  THE BENEFITS OF HAVING FLEET
                  <br />
                  MANAGEMENT SOFTWARE
                </h2>
              </div>
            </div>

            <div className="my-[40px]">
              <img
                decoding="async"
                loading="lazy"
                src="https://a.storyblok.com/f/219851/1401x701/00f12955d1/benefit-fleet-mgmt.webp"
                alt="MEDIA &amp; ENTERTAINMENT APPS"
              />
            </div>

            <div className="grid xl:grid-cols-6 md:grid-cols-3 grid-cols-2 md:gap-[2rem] gap-[4rem]">
              <div className="text-center">
                <img
                  decoding="async"
                  loading="lazy"
                  src="/images/Streamlines-Business-Processes.png"
                  alt="Streamlines-Business-Processes"
                  className="w-[32%] md:w-[24%] lg:w-[32%] mx-auto"
                />
                <p className="mt-[20px] lg:text-[20px] text-[14px]">
                  Streamlines Business Processes
                </p>
              </div>

              <div className="text-center">
                <img
                  decoding="async"
                  loading="lazy"
                  src="/images/Generates-Valuable-Insights.png"
                  alt="Generates-Valuable-Insights"
                  className="w-[32%] md:w-[24%] lg:w-[32%] mx-auto"
                />
                <p className="mt-[20px] lg:text-[20px] text-[14px]">
                  Generates Valuable Insights
                </p>
              </div>

              <div className="text-center">
                <img
                  decoding="async"
                  loading="lazy"
                  src="/images/Lowers-Operational-Costs.png"
                  alt="Lowers Operational Costs"
                  className="w-[32%] md:w-[24%] lg:w-[32%] mx-auto"
                />
                <p className="mt-[20px] lg:text-[20px] text-[14px]">
                  Lowers Operational Costs
                </p>
              </div>

              <div className="text-center">
                <img
                  decoding="async"
                  loading="lazy"
                  src="/images/Improves-Fleet-Efficiency.png"
                  alt="Imporoves Fleet Efficiency"
                  className="w-[50px] mx-auto"
                />
                <p className="mt-[20px] lg:text-[20px] text-[14px]">
                  Imporoves Fleet Efficiency
                </p>
              </div>

              <div className="text-center">
                <img
                  decoding="async"
                  loading="lazy"
                  src="/images/Extends-Vehicle-Lifeline.png"
                  alt="Extends Vehicle Lifeline"
                  className="w-[50px] mx-auto"
                />
                <p className="mt-[20px] lg:text-[20px] text-[14px]">
                  Extends Vehicle Lifeline
                </p>
              </div>

              <div className="text-center">
                <img
                  decoding="async"
                  loading="lazy"
                  src="/images/Maximizes-Driver-Safety.png"
                  alt="Maximizes Driver Safety"
                  className="w-[50px] mx-auto"
                />
                <p className="mt-[20px] lg:text-[20px] text-[14px]">
                  Maximizes Driver Safety
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto xl:pt-[6rem] md:pt-[4rem] pt-[2rem] end-to-end">
            <div className="end-To-end">
              <div className="endTO_text home_sec2_txt3 solutions">
                <h2 className="!w-full p-0">
                  COUNT ON US TO BUILD FEATURE-RICH
                  <br />
                  FLEET TRACKING SYSTEM
                </h2>
              </div>
            </div>

            <div className="grid xl:grid-cols-6 md:grid-cols-3 grid-cols-2 md:gap-[2rem] gap-[4rem] reveal">
              <div className="text-center">
                <img
                  decoding="async"
                  loading="lazy"
                  src="/images/Real-time-GPS-vehicle-tracking.png"
                  alt="Real-time GPS vehicle tracking"
                  className="w-[32%] md:w-[24%] lg:w-[32%] mx-auto"
                />
                <p className="mt-[20px] lg:text-[20px] text-[14px]">
                  Real-time GPS vehicle tracking
                </p>
              </div>

              <div className="text-center">
                <img
                  decoding="async"
                  loading="lazy"
                  src="/images/Route-History-Optimization.png"
                  alt="Route History & Optimization"
                  className="w-[32%] md:w-[24%] lg:w-[32%] mx-auto"
                />
                <p className="mt-[20px] lg:text-[20px] text-[14px]">
                  Route History &<br /> Optimization
                </p>
              </div>

              <div className="text-center">
                <img
                  decoding="async"
                  loading="lazy"
                  src="/images/Accident-Detection-Management.png"
                  alt="Lowers Operational Costs"
                  className="w-[32%] md:w-[24%] lg:w-[32%] mx-auto"
                />
                <p className="mt-[20px] lg:text-[20px] text-[14px]">
                  Accident <br />
                  Detection & <br />
                  Management
                </p>
              </div>

              <div className="text-center">
                <img
                  decoding="async"
                  loading="lazy"
                  src="/images/Automated-Alerts.png"
                  alt=" Automated Alerts"
                  className="w-[50px] mx-auto"
                />
                <p className="mt-[20px] lg:text-[20px] text-[14px]">
                  Automated Alerts
                </p>
              </div>

              <div className="text-center">
                <img
                  decoding="async"
                  loading="lazy"
                  src="/images/Historical-Fleet-Data.png"
                  alt="Historical Fleet Data"
                  className="w-[50px] mx-auto"
                />
                <p className="mt-[20px] lg:text-[20px] text-[14px]">
                  Historical Fleet Data
                </p>
              </div>

              <div className="text-center">
                <img
                  decoding="async"
                  loading="lazy"
                  src="/images/Engine-Diagnostics.png"
                  alt="Maximizes Driver Safety"
                  className="w-[50px] mx-auto"
                />
                <p className="mt-[20px] lg:text-[20px] text-[14px]">
                  Engine Diagnostics
                </p>
              </div>

              <div className="text-center">
                <img
                  decoding="async"
                  loading="lazy"
                  src="/images/Offline-Tracking.png"
                  alt="Offline Tracking"
                  className="w-[50px] mx-auto"
                />
                <p className="mt-[20px] lg:text-[20px] text-[14px]">
                  Offline Tracking
                </p>
              </div>

              <div className="text-center">
                <img
                  decoding="async"
                  loading="lazy"
                  src="/images/Trend-Analysis.png"
                  alt="Trend Analysis"
                  className="w-[50px] mx-auto"
                />
                <p className="mt-[20px] lg:text-[20px] text-[14px]">
                  Trend Analysis
                </p>
              </div>
              <div className="text-center">
                <img
                  decoding="async"
                  loading="lazy"
                  src="/images/Cloud-Based.png"
                  alt="Cloud Based                  "
                  className="w-[50px] mx-auto"
                />
                <p className="mt-[20px] lg:text-[20px] text-[14px]">
                  Cloud Based
                </p>
              </div>
              <div className="text-center">
                <img
                  decoding="async"
                  loading="lazy"
                  src="/images/API-Integration.png"
                  alt="API Integration"
                  className="w-[50px] mx-auto"
                />
                <p className="mt-[20px] lg:text-[20px] text-[14px]">
                  API Integration
                </p>
              </div>
              <div className="text-center">
                <img
                  decoding="async"
                  loading="lazy"
                  src="/images/Analytics-Reporting.png"
                  alt="Analytics & Reporting"
                  className="w-[50px] mx-auto"
                />
                <p className="mt-[20px] lg:text-[20px] text-[14px]">
                  Analytics & Reporting
                </p>
              </div>
            </div>
          </div>

          <div className="xl:py-[6rem] md:py-[4rem] py-[2rem]">
            <div className="sec9_service_style xl:px-[12rem] sm:px-[4rem] px-[1rem] reveal">
              <div>
                <div className="end-To-end pt-8">
                  <div className="endTO_text home_sec2_txt3 solutions mt-[4rem] mb-0 md:pt-[1rem] lg:pt-[2rem]">
                    <h2 className="!w-full md:p-0 p-3 !text-colorWhite">
                      WHY CHOOSE US FOR FLEET <br className="md:block hidden" />
                      MANAGEMENT SOFTWARE <br className="md:block hidden" />
                      DEVELOPMENT?
                    </h2>
                  </div>
                </div>

                <p
                  className={`p-font md:text-center text-left ${
                    isMobile ? "!text-[1rem]" : ""
                  } md:my-[2rem] mt-[1rem] p-3`}
                >
                  We know it can be frustrating to keep track of all your
                  vehicles on the road, but with our fleet management software
                  and GPS tracking system, we make it easier than ever to keep
                  track of all your moves.
                </p>

                <div className="grid lg:grid-cols-3 grid-cols-2 xl:gap-[3.5rem] gap-[2rem] p-4">
                  <div>
                    <div
                      className={`number xl:text-[34px] text-[24px] ${
                        isMobile ? "!text-[24px]" : ""
                      }`}
                    >
                      ROUND
                    </div>
                    <p className="year !border-0 py-[1rem]">
                      The-Clock
                      <br />
                      Availability
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
                    <p className="year !border-0 py-[1rem]">
                      Development
                      <br />
                      Team
                    </p>
                  </div>

                  <div>
                    <div
                      className={`number xl:text-[34px] text-[24px] ${
                        isMobile ? "!text-[24px]" : ""
                      }`}
                    >
                      EXPERT
                    </div>
                    <p className="year !border-0 py-[1rem]">Knowledge</p>
                  </div>

                  <div>
                    <div
                      className={`number xl:text-[34px] text-[24px] ${
                        isMobile ? "!text-[24px]" : ""
                      }`}
                    >
                      USER
                    </div>
                    <p className="year !border-0 py-[1rem]">
                      Oriented <br />
                      Solutions
                    </p>
                  </div>

                  <div>
                    <div
                      className={`number xl:text-[34px] text-[24px] ${
                        isMobile ? "!text-[24px]" : ""
                      }`}
                    >
                      ON TIME
                    </div>
                    <p className="year !border-0 py-[1rem]">Delivery</p>
                  </div>

                  <div>
                    <div
                      className={`number xl:text-[34px] text-[24px] ${
                        isMobile ? "!text-[24px]" : ""
                      }`}
                    >
                      SECURITY
                    </div>
                    <p className="year !border-0 py-[1rem]">
                      First <br />
                      Approarch
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center xl:pb-[6rem] md:pb-[4rem] pb-[2rem]">
            <Button
              innerClassName="flex items-center justify-center gap-1"
              className="!pr-5"
              redirect="#section10_service"
              label="Work with us"
              icon="right-arrow"
              scrollingButton
            />
          </div>
        </div>
      </section>

      <SolutionEngagementModal />
      <SoutionHowCanStart />
      <SolutionContactForm />
      <FleetManagmentFAQs />
    </>
  );
};

export default FleetManagementNGPS;
