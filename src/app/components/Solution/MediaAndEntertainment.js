"use client";
import dynamic from "next/dynamic";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import { scrollEffect } from "../lib/commonFunction";
import Image from "next/image";
import Button from "../Common/Button";

const MediaNEntertainmentFAQs = dynamic(() => import("./SolutionFAQ"));
const SolutionContactForm = dynamic(() => import("./SolutionContactForm"));
const SoutionHowCanStart = dynamic(() => import("./SoutionHowCanStart"));
const SolutionEngagementModal = dynamic(() =>
  import("./SolutionEngagementModal")
);
const AccordionCustomStyle = dynamic(() =>
  import("../Common/AccordionCustomStyle")
);

const MediaAndEntertainment = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const mediaEntertainmentAccordionItems = [
    {
      title: "OTT Streaming Apps",
      iconSrc: "/images/OTT-Streaming-Apps.png",
      content:
        "Leverage our proven domain expertise along with cutting-edge technologies to create a streaming service that is as fast as it is instantly accessible.",
      imageSrc: "/images/ott-streaming-apps-bg.webp",
      imageAlt: "OTT Streaming Apps",
    },
    {
      title: "Music Streaming Apps",
      iconSrc: "/images/Music-Streaming-Apps.png",
      content:
        "Make the way to the melodies of your music streaming app. Our powerful backend helps you manage thousands of active listeners without any interruption or issue.",
      imageSrc: "/images/Music-Streaming-Apps.jpg",
      imageAlt: "Music Streaming Apps",
    },
    {
      title: " Photo Editing & Sharing Apps",
      iconSrc: "/images/Photo-Editing-Sharing-Apps.png",
      content:
        "Become one of the most used photo editing and sharing apps. We help you create an Instagram-like app with your own photo editing and sharing features.",
      imageSrc: "/images/photoediting.jpg",
      imageAlt: "Photo Editing & Sharing Apps",
    },
    {
      title: "Ticket Booking Portals",
      iconSrc: "/images/Ticket-Booking-Portals.png",
      content:
        "We develop ticket booking portals for all kinds of events including movie theatres, live concerts, sports matches, etc. Our team is focused on providing a seamless ticket-booking experience to eager fans.",
      imageSrc: "/images/tickets-booking-portal.jpg",
      imageAlt: "Ticket Booking Portals",
    },
    {
      title: "Gaming apps",
      iconSrc: "/images/Gaming-apps.png",
      content:
        "We create gaming apps across platforms and genres. In the world of gaming, we are known for our stable infrastructure, technical speed, efficient development process, and cutting-edge technology.",
      imageSrc: "/images/gaming-apps.jpg",
      imageAlt: "Gaming apps",
    },
    {
      title: "Content Aggregation Apps",
      iconSrc: "/images/Content-Aggregation-Apps.png",
      content:
        "These apps are the new way to get quality content and videos. We are a trusted app aggregator providing a one-stop solution for customers and businesses to quickly find high-quality databases on any topic or industry.",
      imageSrc: "/images/Content-Aggregation-Apps.jpg",
      imageAlt: "Content Aggregation Apps",
    },
  ];

  const comprehensiveSolution = [
    {
      image: "/images/Subscription-Management.png",
      title: "Subscription Management",
    },
    {
      image: "/images/Multichannel-Distribution.png",
      title: "Multichannel Distribution",
    },
    {
      image: "/images/Digital-Asset-Management.png",
      title: "Digital Asset Management",
    },
    {
      image: "/images/OTT-Content.png",
      title: "OTT Content Delivery Solutions",
    },
    {
      image: "/images/Data-Management-Solution.png",
      title: "Data Management Solution",
    },
    {
      image: "/images/Media-Streaming-Services-Solutions.png",
      title: "Media Streaming Services & Solutions",
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
                src="/images/media-1.webp"
                alt="Media and Entertainments banner"
                priority
                width="1398"
                height="780"
                sizes="(min-width: 1040px) 80vw, (min-width: 640px) 91.84vw, calc(100vw - 30px)"
                media="(min-width: 768px)"
              />
              <Image
                className="h-[300px] block md:hidden rounded-[20px]"
                src="/images/media-mobile.webp"
                alt="Media and Entertainments banner"
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
                      MEDIA AND ENTERTAINMENT SOFTWARE
                      <br />
                      DEVELOPMENT COMPANY
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto service_width  xl:py-[6rem] md:py-[4rem] py-[2rem]">
          <div className="flex !flex-col lg:!flex-row gap-[1.5rem]">
            <div className="basis-[50%]">
              <div className="home_sec2_txt3 like_text">
                <p className="uppercase !p-0 !ml-[0] !w-full">
                  MEDIA AND ENTERTAINMENT APP DEVELOPMENT SERVICES FOR THE
                  ULTIMATE USER EXPERIENCE.
                </p>
              </div>
            </div>
            <div className="basis-[55%]">
              <div className="home_sec2_txt4">
                <p className="!text-left !text-base lg:!text-xl pb-8">
                  We take your customers on a visual delight with our
                  entertainment software solutions. Create an immersive
                  experience for your users and earn a competitive edge in the
                  entertainment & media industry.
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
                OUR MEDIA AND ENTERTAINMENT <br />
                SOFTWARE SOLUTIONS
              </h2>
            </div>
          </div>

          <div className="mx-auto pt-[32px] reveal">
            <div className="accordion-tab-section">
              <div className="flex flex-wrap justify-center">
                <div className="lg:w-6/12 w-full mb-[10px]">
                  <div className="accordion !mb-0 lg:w-[90%] w-full">
                    {mediaEntertainmentAccordionItems.map(
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
                    {mediaEntertainmentAccordionItems.map(
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
                    label="Build My Entertainment App"
                    icon="right-arrow"
                    scrollingButton
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto service_width xl:pt-[6rem] md:pt-[4rem] pt-[2rem] workpadd_borderTop end-to-end reveal">
          <div className="end-To-end">
            <div className="endTO_text home_sec2_txt3 solutions">
              <h2 className="!w-full p-0">
                LEVERAGE OUR COMPREHENSIVE SOLUTIONS TO
                {!isMobile && <br />}
                DEVELOP MEDIA & ENTERTAINMENT APPS
              </h2>
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
              decoding="async"
              loading="lazy"
              src={
                "https://a.storyblok.com/f/219851/1401x701/1bb92f5739/image-3-1.webp"
              }
              alt="MEDIA &amp; ENTERTAINMENT APPS"
            />
          </div>

          <div className="grid xl:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-[4rem]">
            {comprehensiveSolution.map(({ image, title }) => (
              <div className="text-center" key={title}>
                <img
                  decoding="async"
                  loading="lazy"
                  src={image}
                  alt={title}
                  className="w-[50px] mx-auto"
                />
                <p className="mt-[20px] lg:text-[20px] text-[14px]">{title}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center xl:my-[6rem] md:my-[4rem] my-[2rem]">
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

        <div className="mx-auto service_width xl:pt-[6rem] md:pt-[4rem] pt-[2rem] workpadd_borderTop end-to-end ">
          <div className="end-To-end">
            <div className="endTO_text home_sec2_txt3 solutions">
              <h2 className="!w-full p-0">
                FEATURES THAT ELEVATE OUR MEDIA
                <br className="md:block hidden" />
                AND ENTERTAINMENT SOFTWARE
              </h2>
            </div>
          </div>

          <div className="service_grid_img reveal">
            <div className="grid grid-cols-2 md:gap-[40px] gap-[20px]">
              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    decoding="async"
                    loading="lazy"
                    src="/images/Real-time-Content-Feeds.png"
                    alt="Real-time Content Feeds"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 01.</div>
                  <div className="service_title">
                    <h3>Real-time Content Feeds</h3>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    decoding="async"
                    loading="lazy"
                    src="/images/Multilingual-Support.png"
                    alt="Multilingual Support"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 02.</div>
                  <div className="service_title">
                    <h3>Multilingual Support</h3>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    decoding="async"
                    loading="lazy"
                    className=""
                    src="/images/Live-Chatting.png"
                    alt="Live Chatting"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 03.</div>
                  <div className="service_title">
                    <h3>Live {isMobile ? <br /> : ""}Chatting</h3>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    decoding="async"
                    loading="lazy"
                    className="alignnone wp-image-285 size-full"
                    src="/images/Secure-Payment-Gateways.png"
                    alt="Secure Payment Gateways"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 04.</div>
                  <div className="service_title">
                    <h3>Secure Payment Gateways</h3>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    decoding="async"
                    loading="lazy"
                    className="alignnone wp-image-285 size-full"
                    src="/images/IoT-Integration.png"
                    alt="IoT Integration"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 05.</div>
                  <div className="service_title">
                    <h3>IoT Integration</h3>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    decoding="async"
                    loading="lazy"
                    className="alignnone wp-image-285 size-full"
                    src="/images/Push-Notifications.png"
                    alt="Push Notifications"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 06.</div>
                  <div className="service_title">
                    <h3>Push Notifications</h3>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    decoding="async"
                    loading="lazy"
                    className="alignnone wp-image-285 size-full"
                    src="/images/Interactive-UIUX.png"
                    alt="Interactive UI/UX"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 07.</div>
                  <div className="service_title">
                    <h3>Interactive {isMobile ? <br /> : ""}UI/UX</h3>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    decoding="async"
                    loading="lazy"
                    className="alignnone wp-image-285 size-full"
                    src="/images/Social-Media-Integration.png"
                    alt="Social Media Integration"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 08.</div>
                  <div className="service_title">
                    <h3>Social Media Integration</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="xl:py-[6rem] md:py-[4rem] py-[2rem] reveal">
            <div className="sec9_service_style xl:px-[12rem] md:px-[4rem] px-[1rem]">
              <div>
                <div className="end-To-end pt-8">
                  <div className="endTO_text home_sec2_txt3 solutions mt-[4rem] mb-0">
                    <h2 className="!w-full md:p-0 p-3 !text-colorWhite">
                      WHAT MAKES BRILWORKS THE BEST ENTERTAINMENT APP
                      DEVELOPMENT COMPANY?
                    </h2>
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
                    <p className="year !border-0 py-[1rem]">Compliant Apps</p>
                  </div>

                  <div>
                    <div
                      className={`number xl:text-[34px] text-[24px] ${
                        isMobile ? "!text-[20px]" : ""
                      }`}
                    >
                      APPEALING
                    </div>
                    <p className="year !border-0 py-[1rem]">UI/UX Experience</p>
                  </div>

                  <div>
                    <div
                      className={`number xl:text-[34px] text-[24px] ${
                        isMobile ? "!text-[20px]" : ""
                      }`}
                    >
                      EXPERT
                    </div>
                    <p className="year !border-0 py-[1rem]">Knowledge</p>
                  </div>

                  <div>
                    <div
                      className={`number xl:text-[34px] text-[24px] ${
                        isMobile ? "!text-[20px]" : ""
                      }`}
                    >
                      AGILE
                    </div>
                    <p className="year !border-0 py-[1rem]">Centric Model</p>
                  </div>

                  <div>
                    <div
                      className={`number xl:text-[34px] text-[24px] ${
                        isMobile ? "!text-[20px]" : ""
                      }`}
                    >
                      SECURITY
                    </div>
                    <p className="year !border-0 py-[1rem]">First Approach</p>
                  </div>

                  <div>
                    <div
                      className={`number xl:text-[34px] text-[24px] ${
                        isMobile ? "!text-[20px]" : ""
                      }`}
                    >
                      UNPARALLELED
                    </div>
                    <p className="year !border-0 py-[1rem]">Code Quality</p>
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
      <MediaNEntertainmentFAQs />
    </>
  );
};

export default MediaAndEntertainment;
