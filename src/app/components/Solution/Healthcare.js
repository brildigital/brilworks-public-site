"use client";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import { scrollEffect, scrollToSection } from "../lib/commonFunction";
import Button from "../Common/Button";

const HealthcareFAQs = dynamic(() => import("./SolutionFAQ"));
const SolutionContactForm = dynamic(() => import("./SolutionContactForm"));
const SoutionHowCanStart = dynamic(() => import("./SoutionHowCanStart"));
const SolutionEngagementModal = dynamic(() =>
  import("./SolutionEngagementModal")
);
const AccordionCustomStyle = dynamic(() =>
  import("../Common/AccordionCustomStyle")
);

const HealthCare = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const [open, setOpen] = useState(1);
  const [open2, setOpen2] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const handleOpen2 = (value) => setOpen2(open2 === value ? 0 : value);

  const healthcareUpperAccordionItems = [
    {
      title: "Telemedicine Software Developments",
      iconSrc: "/images/healthcare-03.png",
      content:
        "Our custom healthcare software development services include application development, custom reporting, and real-time data interaction.",
      imageSrc: "/images/Telemedicine-Software-Developments.jpg",
      imageAlt: "Telemedicine-Software-Developments",
    },
    {
      title: "Remote Patient Monitoring Software",
      iconSrc: "/images/healthcare-06.png",
      content:
        "With remote monitoring software, doctors can monitor patients’ health remotely via virtual care or vitals captured through wearable devices and IoT sensors. This improves patient outcomes by providing healthcare professionals with better tools to provide superior care at the most appropriate time.",
      imageSrc: "/images/Remote-Patient-Monitoring-Software.jpg",
      imageAlt: "Remote-Patient-Monitoring-Software",
    },
    {
      title: "mPrescription App Development",
      iconSrc: "/images/healthcare-09.png",
      content:
        "We help simplify medication management by providing prescription mobile apps to store patient data, medical history, allergies, and prescriptions. Our apps are trusted by both doctors and patients alike.",
      imageSrc: "/images/mPrescription-App-Development.jpg",
      imageAlt: "mPrescription-App-Development.jpg",
    },
    {
      title: "Patient Engagement Solutions",
      iconSrc: "/images/healthcare-08.png",
      content:
        "Your patients are a priority and we’ll help you create systems that deliver great care, improve patient satisfaction and increase revenue. Our patient engagement solutions allow patients and healthcare providers to connect anywhere and anytime with great ease.",
      imageSrc: "/images/Patient-Engagement-Solutions.jpg",
      imageAlt: "Patient-Engagement-Solutions",
    },
    {
      title: "IoT Healthcare Software",
      iconSrc: "/images/healthcare-10.png",
      content:
        "Our IoT software helps doctors make better decisions faster. It captures relevant patient information through smart sensors, then analyses it in real-time to generate valuable insights. We develop applications that empower doctors and medical staff with accurate and valuable patient data.",
    },
    {
      title: "Electronic Medical Record Software",
      iconSrc: "/images/healthcare-04.png",
      content:
        "Growing patient expectations requires doctors to not just interact with their patients, but also provide them with efficient and comprehensive care. With our software, you can leverage your existing EMR/EHR platform to maximize clinical productivity and interact with patients via patient portals.",
      imageSrc: "/images/Electronic-Medical-Record-Software.jpg",
      imageAlt: "Electronic-Medical-Record-Software",
    },
  ];

  const healthcareLowerAccordionItems = [
    {
      title: "Healthcare Providers",
      iconSrc: "/images/healthcare-05.png",
      content:
        "We assist healthcare providers to automate medical workflows, simplify tedious tasks and increase patient satisfaction. Improve your hospital efficiency and uptime while streamlining daily processes.",
      imageSrc: "/images/burgerAsset-50.jpg",
      imageAlt: "Healthacre Provider",
    },
    {
      title: "Pharmaceutical Companies",
      iconSrc: "/images/healthcare-02.png",
      content:
        "We believe that bringing together the best software options for pharma research and development can help you achieve your goals. Our team assists you from the outset of your drug development projects to the end of each phase in your clinical trial.",
      imageSrc: "/images/Pharmaceutical-Companies.jpg",
      imageAlt: "Pharmaceutical Companies",
    },
    {
      title: "Medical Device Manufacturers",
      iconSrc: "/images/healthcare-11.png",
      content:
        "Medical device manufacturers are at the forefront of innovation, rapidly transforming how healthcare is delivered. Our software helps medical device manufacturers bring new functionality to their products.",
      imageSrc: "/images/Medical-Device-Manufacturers.jpg",
      imageAlt: "Medical Device Manufacturers",
    },
    {
      title: "Healthcare Startups",
      iconSrc: "/images/healthcare-07.png",
      content:
        "We’re committed to helping healthcare startups bring their incredible ideas to life. From medicine to medicine delivery, health technology is changing at an exponential rate. Our team of experts uses their experience and expertise to deliver software solutions that are agile, scalable, reliable, and secure.",
      imageSrc: "/images/Healthcare-Startups.jpg",
      imageAlt: "Healthcare Startups",
    },
  ];

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
      <section className="portfolio mt-[6rem] solution-accordion">
        <div className="mx-auto service_width">
          <div className="relative">
            <p>
              <Image
                className="h-[46vh] md:block hidden rounded-[20px]"
                src="/images/Types-of-Healthcare-Apps-2.webp"
                alt="Healthcare Software Development Services"
                priority
                width="1398"
                height="780"
                sizes="(min-width: 1040px) 80vw, (min-width: 640px) 91.84vw, calc(100vw - 30px)"
              />
              <Image
                className="h-[300px] block md:hidden rounded-[20px]"
                src="/images/Types-of-Healthcare-Apps-2.webp"
                alt="Healthcare Software Development Services"
                priority
                width="320"
                height="250"
                sizes="(min-width: 1040px) 80vw, (min-width: 640px) 91.84vw, calc(100vw - 30px)"
              />
            </p>
            <div className="service_sec1_position">
              <div className="flex self-end justify-between w-[96%] mx-auto">
                <div className="txt">
                  <div className="how-we flex items-center gap-[1rem]">
                    <h1 className="font-style-solution-head line-height-normal uppercase xl:text-[4.5rem] lg:text-[66px] md:text-[50px] sm:text-[55px] text-[30px]">
                      <div className="flex items-center">
                        <Image
                          className="w-[auto]"
                          src="/images/1.png"
                          alt="curly bracket"
                          width="24"
                          height="94"
                        />
                        HEALTHCARE
                        <Image
                          className="w-[auto]"
                          src="/images/2.png"
                          alt="curly bracket"
                          width="24"
                          height="94"
                        />
                      </div>
                      SOFTWARE
                      <br />
                      DEVELOPMENT SERVICES
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
                  CUSTOM HEALTHCARE SOFTWARE DEVELOPMENT THAT{" "}
                  {isMobile ? <br /> : null}
                  PUTS YOUR PATIENTS FIRST.
                </p>
              </div>
            </div>
            <div className="basis-[55%]">
              <div className="home_sec2_txt4">
                <p className="!text-left pb-8">
                  Leverage our healthcare software development services to
                  improve processes and patient experience. Resolve
                  accessibility issues by offering remote consultations and
                  telehealth solutions.
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

        <div className="mx-auto service_width xl:py-[6rem] md:py-[4rem] py-[2rem] workpadd_borderTop end-to-end">
          <div className="end-To-end">
            <div className="endTO_text home_sec2_txt3 solutions lg:!mb-[3rem] !mb-0">
              <h2 className="!w-full p-0">
                LEVERAGE THE POWER OF TECHNOLOGY WITH
                <br />
                OUR HEALTHCARE SOFTWARE DEVELOPMENT
                <br />
                SERVICES
              </h2>
            </div>
          </div>

          <div className="mx-auto pt-[32px] reveal">
            <div className="accordion-tab-section">
              <div className="flex flex-wrap justify-center">
                <div className="lg:w-6/12 w-full mb-[10px]">
                  <div className="accordion !mb-0 lg:w-[90%] w-full">
                    {healthcareUpperAccordionItems.map(
                      ({ title, content, iconSrc }, index) => (
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
                    {healthcareUpperAccordionItems.map(
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
                    label="Build My Healthcare App"
                    icon="right-arrow"
                    scrollingButton
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto service_width xl:py-[6rem] md:py-[4rem] py-[2rem] workpadd_borderTop end-to-end">
          <div className="end-To-end">
            <div className="endTO_text home_sec2_txt3 solutions">
              <h2 className="!w-full p-0">
                MEDICAL SOFTWARE DEVELOPMENT SERVICES CATERING
                <br />
                TO THE ENTIRE HEALTHCARE ECOSYSTEM
              </h2>
            </div>
          </div>
          <div className="mx-auto sm:pt-[32px] pt-[0px] reveal">
            <div className="accordion-tab-section">
              <div className="flex flex-wrap justify-center">
                <div className="lg:w-6/12 w-full md:mt-[0px] mt-[30px] mb-12 lg:mb-0">
                  <div>
                    {healthcareLowerAccordionItems.map(
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
                <div className="lg:w-6/12 w-full mb-[10px]">
                  <div className="accordion !mb-0 lg:ml-8 w-full">
                    {healthcareLowerAccordionItems.map(
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

                <div className="xl:mt-[6rem] md:mt-[4rem] mt-[2rem]">
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
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        height="24px"
                        width="24px"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="none"
                          stroke-miterlimit="10"
                          stroke-width="32"
                          d="M451 374c-15.88-16-54.34-39.35-73-48.76-24.3-12.24-26.3-13.24-45.4.95-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48 5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160.15 160.15 0 0 0 83 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64 54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159.09 159.09 0 0 0 13.8-25.8C465 391.17 468 391.17 451 374z"
                        ></path>
                      </svg>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto service_width xl:pt-[6rem] md:pt-[4rem] pt-[2rem] workpadd_borderTop end-to-end reveal">
          <div className="lg:pl-[8rem] md:pl-0 lg:w-[90%] md:w-full">
            <div className="end-To-end">
              <div className="endTO_text home_sec2_txt3 solutions">
                <h2 className="!w-full p-0">
                  TYPES OF HEALTHCARE APPS WE DEVELOP
                </h2>
              </div>
            </div>

            <div className="endTO_text_content home_sec2_txt4">
              <p className="md:!text-[1.5rem] md:!text-center !text-[1rem] !text-left">
                By utilizing our expertise in working with various players in
                the healthcare industry, we provide healthcare application
                development services that make your product a crucial part of
                the overall healthcare ecosystem. Our services encompass the
                development of custom apps, designed to meet your business
                needs.
              </p>
            </div>
          </div>

          <div className="my-[40px]">
            <img
              decoding="async"
              loading="lazy"
              src="/images/Types-of-Healthcare-Apps.png"
              alt="Healthcare App We Develop"
            />
          </div>

          <div className="grid xl:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-[2rem]">
            <div className="text-center">
              <img
                decoding="async"
                loading="lazy"
                src="/images/Appointment-scheduling-applications.png"
                alt="Appointment scheduling applications"
                className="w-[32%] md:w-[24%] lg:w-[32%] mx-auto"
              />
              <p className="mt-[20px] lg:text-[20px] text-[14px]">
                Appointment scheduling applications
              </p>
            </div>

            <div className="text-center">
              <img
                decoding="async"
                loading="lazy"
                src="/images/Medication-intake-tracking-apps.png"
                alt="Medication intake tracking apps"
                className="w-[32%] md:w-[24%] lg:w-[32%] mx-auto"
              />
              <p className="mt-[20px] lg:text-[20px] text-[14px]">
                Medication intake tracking apps
              </p>
            </div>

            <div className="text-center">
              <img
                decoding="async"
                loading="lazy"
                src="/images/Home-health-monitoring-apps.png"
                alt="Home health monitoring apps"
                className="w-[32%] md:w-[24%] lg:w-[32%] mx-auto"
              />
              <p className="mt-[20px] lg:text-[20px] text-[14px]">
                Home health monitoring apps
              </p>
            </div>

            <div className="text-center">
              <img
                decoding="async"
                loading="lazy"
                src="/images/Caregiver-management-apps.png"
                alt="Caregiver management apps"
                className="w-[32%] md:w-[24%] lg:w-[32%] mx-auto"
              />
              <p className="mt-[20px] lg:text-[20px] text-[14px]">
                Caregiver management apps
              </p>
            </div>

            <div className="text-center">
              <img
                decoding="async"
                loading="lazy"
                src="/images/Drug-inventory-tracking-apps.png"
                alt="Drug inventory tracking apps"
                className="w-[32%] md:w-[24%] lg:w-[32%] mx-auto"
              />
              <p className="mt-[20px] lg:text-[20px] text-[14px]">
                Drug inventory tracking apps
              </p>
            </div>

            <div className="text-center">
              <img
                decoding="async"
                loading="lazy"
                src="/images/Wearable-tech-apps.png"
                alt="Wearable tech apps"
                className="w-[32%] md:w-[24%] lg:w-[32%] mx-auto"
              />
              <p className="mt-[20px] lg:text-[20px] text-[14px]">
                Wearable tech apps
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center xl:py-[6rem] md:py-[4rem] py-[2rem]">
            <Button
              innerClassName="flex items-center justify-center gap-2"
              className="!pr-5"
              redirect="#section10_service"
              label="Let's get in touch"
              scrollingButton
              icon={
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
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

          <div className="lg:pt-[8rem] lg:pb-[6rem] md:py-[6rem] py-[4rem] workpadd_borderTop">
            <div className="sec9_service_style xl:px-[12rem] sm:px-[4rem] px-[1rem] reveal">
              <div>
                <div className="end-To-end pt-8">
                  <div className="endTO_text home_sec2_txt3 solutions mt-[4rem] mb-0">
                    <h2 className="!w-full md:p-0 p-3 !text-colorWhite">
                      WHAT MAKES BRILWORKS THE{" "}
                      <br className="md:block hidden" />
                      BEST HEALTHCARE SOFTWARE{" "}
                      <br className="md:block hidden" />
                      COMPANY?
                    </h2>
                  </div>
                </div>

                <p
                  className={`p-font md:text-center text-left md:my-[2rem] p-3 ${
                    isMobile ? "!text-[1rem]" : ""
                  } `}
                >
                  It is no secret that innovation and technology play important
                  roles in the healthcare industry. We help healthcare
                  organizations innovate and transform their business in a way
                  that makes them more responsive to the evolving needs of their
                  patients.
                </p>

                <div className="grid lg:grid-cols-3 grid-cols-2 xl:gap-[3.5rem] gap-[2rem] p-2">
                  <div>
                    <div className="number xl:!text-[34px] !text-[20px]">
                      HIPAA & GDPR
                    </div>
                    <p className="year !border-0 py-[1rem]">Compliant Apps</p>
                  </div>

                  <div>
                    <div className="number xl:!text-[34px] !text-[20px]">
                      EXPERIENCE
                    </div>
                    <p className="year !border-0 py-[1rem]">Proven mHealth</p>
                  </div>

                  <div>
                    <div className="number xl:!text-[34px] !text-[20px]">
                      AGILE
                    </div>
                    <p className="year !border-0 py-[1rem]">Centric Model</p>
                  </div>

                  <div>
                    <div className="number xl:!text-[34px] !text-[20px]">
                      SECURITY
                    </div>
                    <p className="year !border-0 py-[1rem]">First Approach</p>
                  </div>

                  <div>
                    <div className="number xl:!text-[34px] !text-[20px]">
                      UNPARALLELED
                    </div>
                    <p className="year !border-0 py-[1rem]">Code Quality</p>
                  </div>

                  <div>
                    <div className="number xl:!text-[34px] !text-[20px]">
                      &nbsp; &nbsp;WELL-PLANNED
                    </div>
                    <p className="year !border-0 py-[1rem]">Architecture</p>
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

        <div className="mx-auto xl:py-[6rem] md:py-[4rem] py-[2rem] workpadd_borderTop service_width end-to-end reveal">
          <div className="flex md:flex-row flex-col md:gap-[2rem] align-middle mb-0">
            <div className="health_sec1_flex_40 order_2">
              <div className="solutions">
                <h2>OUR PORTFOLIO</h2>
              </div>
              <br />
              <div className="fintech-portfolio-sec">
                <p>
                  Endometriose
                  <br />
                  App Development
                </p>
              </div>

              <div>
                <p className="w-3/4 pt-6 text-lg">
                  Endometriosis free consultation app for patients to easily
                  reach out to expert doctors in the field.
                </p>
              </div>
              <div className="w-fit pt-[2rem]">
                <Button
                  innerClassName="flex items-center justify-center gap-1"
                  className="!pr-5"
                  redirect="/portfolio/"
                  label="Know More"
                  icon="right-arrow"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
            <div className="health_sec1_flex_60 order_1">
              <div className="about_sec1_img1">
                <Image
                  className="alignnone rounded-3xl"
                  src="/images/endo-app-ab-sofort-1-1500x630-1.jpg"
                  alt="Endometriose App Development"
                  width="815"
                  height="523"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SolutionEngagementModal />
      <SoutionHowCanStart />
      <SolutionContactForm />
      <HealthcareFAQs />
    </>
  );
};

export default HealthCare;
