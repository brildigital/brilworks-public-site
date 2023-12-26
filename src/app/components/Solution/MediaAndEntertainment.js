"use client";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import { scrollEffect, scrollToSection } from "../lib/commonfunction";
import AccordionItem from "./AccordionItem";

const MediaNEntertainmentFAQs = dynamic(() => import("./SolutionFAQ"));
const SolutionContactForm = dynamic(() => import("./SolutionContactForm"));
const SoutionHowCanStart = dynamic(() => import("./SoutionHowCanStart"));
const SolutionEngagementModal = dynamic(() =>
  import("./SolutionEngagementModal")
);

const MediaAndEntertainment = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const mediaEntertainmentAccordionItems = [
    {
      index: 1,
      title: "OTT Streaming Apps",
      imageSrc: "/images/OTT-Streaming-Apps.png",
      content:
        "Leverage our proven domain expertise along with cutting-edge technologies to create a streaming service that is as fast as it is instantly accessible.",
    },
    {
      index: 2,
      title: "Music Streaming Apps",
      imageSrc: "/images/Music-Streaming-Apps.png",
      content:
        "Make the way to the melodies of your music streaming app. Our powerful backend helps you manage thousands of active listeners without any interruption or issue.",
    },
    {
      index: 3,
      title: " Photo Editing & Sharing Apps",
      imageSrc: "/images/Photo-Editing-Sharing-Apps.png",
      content:
        "Become one of the most used photo editing and sharing apps. We help you create an Instagram-like app with your own photo editing and sharing features.",
    },
    {
      index: 4,
      title: "Ticket Booking Portals",
      imageSrc: "/images/Ticket-Booking-Portals.png",
      content:
        "We develop ticket booking portals for all kinds of events including movie theatres, live concerts, sports matches, etc. Our team is focused on providing a seamless ticket-booking experience to eager fans.",
    },
    {
      index: 5,
      title: "Gaming apps",
      imageSrc: "/images/Gaming-apps.png",
      content:
        "We create gaming apps across platforms and genres. In the world of gaming, we are known for our stable infrastructure, technical speed, efficient development process, and cutting-edge technology.",
    },
    {
      index: 6,
      title: "Content Aggregation Apps",
      imageSrc: "/images/Content-Aggregation-Apps.png",
      content:
        "These apps are the new way to get quality content and videos. We are a trusted app aggregator providing a one-stop solution for customers and businesses to quickly find high-quality databases on any topic or industry.",
    },
  ];

  const mediaEntertainmentImageSources = [
    {
      imageSource:
        "https://a.storyblok.com/f/219851/693x770/2763b15915/ott-streaming-apps-bg.png",
      imageAlt: "OTT Streaming Apps",
    },
    {
      imageSource: "/images/Music-Streaming-Apps.jpg",
      imageAlt: "Music Streaming Apps",
    },
    {
      imageSource: "/images/photoediting.jpg",
      imageAlt: "Photo Editing & Sharing Apps",
    },
    {
      imageSource: "/images/tickets-booking-portal.jpg",
      imageAlt: "Ticket Booking Portals",
    },
    {
      imageSource: "/images/gaming-apps.jpg",
      imageAlt: "Gaming apps",
    },
    {
      imageSource: "/images/Content-Aggregation-Apps.jpg",
      imageAlt: "Content Aggregation Apps",
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
              <img
                decoding="async"
                loading="lazy"
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

        <div className="mx-auto service_width  lg:py-[6rem] sm:py-[4rem] py-[2rem]">
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
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/images/right_arrow.png"
                          alt="arrow"
                        />
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
            <div className="endTO_text home_sec2_txt3 solutions lg:!mb-[3rem] !mb-0">
              <h2 className="!w-full p-0">
                OUR MEDIA AND ENTERTAINMENT <br />
                SOFTWARE SOLUTIONS
              </h2>
            </div>
          </div>

          <div className="mx-auto pt-[32px] reveal">
            <div className="accordion-tab-section">
              <div className="flex flex-wrap">
                <div className="lg:w-6/12 w-full mb-[10px]">
                  <div className="accordion !mb-0 lg:w-[90%] w-full">
                    {mediaEntertainmentAccordionItems.map((item) => (
                      <AccordionItem
                        key={item.index}
                        index={item.index}
                        title={item.title}
                        imageSrc={item.imageSrc}
                        content={item.content}
                        handleOpen={handleOpen}
                        open={open}
                      />
                    ))}
                  </div>
                </div>
                <div className="lg:w-6/12 w-full">
                  <div>
                    {mediaEntertainmentImageSources.map((imageItem, index) => (
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
                            src={imageItem.imageSource}
                            alt={imageItem.imageAlt}
                          />
                        </div>
                      </div>
                    ))}
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
                          <img
                            decoding="async"
                            loading="lazy"
                            src="/images/right_arrow.png"
                            alt="arrow"
                          />{" "}
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

        <div className="mx-auto service_width md:pt-[6rem] pt-[4rem] workpadd_borderTop end-to-end reveal">
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
            <div className="text-center">
              <img
                decoding="async"
                loading="lazy"
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
                decoding="async"
                loading="lazy"
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
                decoding="async"
                loading="lazy"
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
                decoding="async"
                loading="lazy"
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
                decoding="async"
                loading="lazy"
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
                decoding="async"
                loading="lazy"
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
                    <img
                      decoding="async"
                      loading="lazy"
                      src="/images/icons2-04.png"
                      alt="call"
                    />
                  </p>
                </div>

                <p className="xl:!text-[20px] lg:!text-[18px]">
                  Speak with Our Experts
                </p>
              </div>
            </Link>
          </div>
        </div>

        <div className="mx-auto service_width md:pt-[6rem] pt-[4rem] workpadd_borderTop end-to-end ">
          <div className="end-To-end">
            <div className="endTO_text home_sec2_txt3 solutions">
              <h2 className="!w-full p-0">
                FEATURES THAT ELEVATE OUR MEDIA
                {!isMobile && <br />}
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

          <div className="lg:py-[6rem] md:py-[6rem] py-[4rem] reveal">
            <div className="sec9_service_style xl:px-[12rem] sm:px-[4rem] px-[1rem]">
              <div>
                <div className="end-To-end pt-8">
                  <div className="endTO_text home_sec2_txt3 solutions mt-[4rem] mb-0">
                    <h2 className="!w-full md:p-0 p-3">
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

          <div className="w-full">
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
                      src="/images/icons2-04.png"
                      alt="call"
                    />
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
