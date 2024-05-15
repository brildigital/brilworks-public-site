"use client";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import { scrollEffect, scrollToSection } from "../lib/commonFunction";

const FintechFAQ = dynamic(() => import("./SolutionFAQ"));
const SolutionContactForm = dynamic(() => import("./SolutionContactForm"));
const SoutionHowCanStart = dynamic(() => import("./SoutionHowCanStart"));
const SolutionEngagementModal = dynamic(() =>
  import("./SolutionEngagementModal")
);
const AccordionCustomStyle = dynamic(() =>
  import("../Common/AccordionCustomStyle")
);

const Fintech = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [open, setOpen] = useState(1);
  const [open2, setOpen2] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const handleOpen2 = (value) => setOpen2(open2 === value ? 0 : value);

  const fintechUpperAccordionItems = [
    {
      title: "Custom Fintech Software Developments",
      iconSrc: "/images/Custom-Fintech-Software-Developments.png",
      content:
        "Our custom fintech software development services include application development, custom reporting, and real-time data interaction.",
      imageSrc: "/images/custom-fintech-software-developments.webp",
      imageAlt: "Custom fintech software development",
    },
    {
      title: "Banking App Development",
      iconSrc: "/images/Banking-App-Development.png",
      content:
        "Develop applications such as digital wallets or mobile banking apps with our fintech app development services that let you expand your digital footprint by making it easier for your clients to do banking from any device, at any time.",
      imageSrc: "/images/banking-app-development.webp",
      imageAlt: "Banking App Development",
    },
    {
      title: "Insurance App Development",
      iconSrc: "/images/Insurance-App-Development.png",
      content:
        "We know that customer experience is an essential part of building a successful InsurTech app. Our team specializes in custom insurance application development, with no compromises on quality or usability.",
      imageSrc:
        "https://a.storyblok.com/f/219851/693x771/11cc51501f/insurance-app.webp",
      imageAlt: "Insurance App Development",
    },
    {
      title: "Wallet App Development",
      iconSrc: "/images/Wallet-App-Development.png",
      content:
        "Giving customers the ability to pay with a smartphone-specific digital wallet is an easy way to encourage loyalty and ensure customer satisfaction.",
      imageSrc: "/images/wallet-app-development.webp",
      imageAlt: "Wallet App Development",
    },
    {
      title: "Fintech Software Security",
      iconSrc: "/images/Fintech-Software-Security-Compliance.png",
      content:
        "We work with you to ensure your application remains up and running. Whether it’s in server management, data security, or continuous monitoring.",
      imageSrc:
        "https://a.storyblok.com/f/219851/693x771/d32e55e62e/fintech-software-security-compliance.webp",
      imageAlt: "Fintech Software Security",
    },
    {
      title: "FinOps Services",
      iconSrc: "/images/FinOps-Services.png",
      content:
        "With the right cloud cost management, your business can scale effectively and avoid cost overheads. From managing your cloud custodian services to proactive detection of technology costs to constructing agile, scalable solutions for you, our fintech software developers manage it all.",
      imageSrc:
        "https://a.storyblok.com/f/219851/693x771/dc9f2c8c32/finops-services-1.webp",
      imageAlt: "FinOps Services",
    },
  ];

  const fintechLowerAccordionItems = [
    {
      title: "Wealth Management",
      iconSrc: "/images/Wealth-Management.png",
      content:
        "We build fintech apps to better manage financial assets, seek insight into consumer trends and improve communication.",
      imageSrc:
        "https://a.storyblok.com/f/219851/693x771/6b6231f495/wealth-mgmt.webp",
      imageAlt: "Wealth Management",
    },
    {
      title: "Lending",
      iconSrc: "/images/Lending.png",
      content:
        "We build technology solutions to enhance your operations and automate and improve your lending processes to facilitate instant loan approval, KYC verification, and consumer eligibility checks.",
      imageSrc: "/images/Lending.webp",
      imageAlt: "Lending",
    },
    {
      title: "Consumer Banking",
      iconSrc: "/images/Consumer-Banking.png",
      content:
        "We create and deploy the most advanced and secure banking solutions that enable customers to help customer service, predict the future, and smoothen out operations.",
      imageSrc: "/images/Consumer-banking.webp",
      imageAlt: "Consumer Banking",
    },
    {
      title: " Personal Finance",
      iconSrc: "/images/Personal-Finance.png",
      content:
        "We develop software for personal finance, in a way that’s both simple and powerful. Our goal is to help users better manage their savings and investments.",
      imageSrc: "/images/Personal-Finance.webp",
      imageAlt: "Personal Finance",
    },
    {
      title: "Payment",
      iconSrc: "/images/Payment.png",
      content:
        "Our portfolio encompasses a suite of financial technology that is designed to bring transparency, safety, and control to the payments system.",
      imageSrc: "/images/payment.webp",
      imageAlt: "Payment",
    },
    {
      title: "Insurance",
      iconSrc: "/images/Wealth-Management.png",
      content:
        "Fintech is changing the insurance industry, so we’re changing the way it works for you. Our fintech products help insurance companies improve customer engagement, underwriting process, claims processing, and fraud detection.",
      imageSrc: "/images/insurance.webp",
      imageAlt: "Insurance",
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
                src="https://a.storyblok.com/f/219851/1398x780/a844d90b96/fintech-1.webp"
                alt="Fintech Software Development services"
              />
            </p>
            <div className="service_sec1_position">
              <div className="flex self-end justify-between w-[96%] mx-auto">
                <div className="txt">
                  <div className="how-we flex items-center gap-[1rem]">
                    <h1 className="font-style-solution-head uppercase xl:text-[70px] lg:text-[66px] md:text-[50px] sm:text-[55px] text-[30px]">
                      FINTECH SOFTWARE
                      <br />
                      DEVELOPMENT COMPANY
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
                <p className="uppercase !p-0 !ml-[0] !w-full">
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
                          <img
                            decoding="async"
                            loading="lazy"
                            src="/images/right_arrow.png"
                            alt="arrow"
                          />
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
        </div>

        <div className="mx-auto service_width md:py-[6rem] sm:py-[4rem] py-[2rem] workpadd_borderTop end-to-end reveal">
          <div className="end-To-end">
            <div className="endTO_text home_sec2_txt3 solutions lg:!mb-[3rem] !mb-0">
              <h2 className="!w-full p-0">
                OUR END-TO-END FINTECH SOFTWARE
                <br />
                DEVELOPMENT SERVICES
              </h2>
            </div>
          </div>

          <div className="mx-auto pt-[32px]">
            <div>
              <div className="flex flex-wrap">
                <div className="lg:w-6/12 w-full mb-[10px]">
                  <div className="accordion !mb-0 lg:w-[90%] w-full">
                    {fintechUpperAccordionItems.map(
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

                <div className="lg:w-6/12 w-full mt-[0px]">
                  <div>
                    {fintechUpperAccordionItems.map(
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

                <div className="w-full mt-[3rem]">
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
                          />
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

        <div className="mx-auto service_width md:pt-[6rem] pt-[4rem] workpadd_borderTop end-to-end reveal">
          <div className="end-To-end">
            <div className="endTO_text home_sec2_txt3 solutions lg:!mb-[3rem] !mb-0">
              <h2 className="!w-full p-0">
                INDUSTRY-SPECIFIC
                <br />
                FINTECH SOFTWARE DEVELOPMENT
              </h2>
            </div>
          </div>
          <div className="mx-auto pt-[32px]">
            <div className="accordion-tab-section">
              <div className="flex flex-wrap ">
                <div className="lg:w-6/12 w-full md:mt-[0px] mb-12 lg:mb-0 mt-[30px]">
                  <div>
                    {fintechLowerAccordionItems.map(
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
                    {fintechLowerAccordionItems.map(
                      ({ title, content, iconSrc }, index) => (
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

                <div className="w-full md:my-[6rem] mb-12">
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
                            alt="arrow"
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
            </div>
          </div>
        </div>

        <div className="mx-auto service_width md:pt-[6rem] pt-[4rem] workpadd_borderTop end-to-end">
          <div className="end-To-end">
            <div className="endTO_text home_sec2_txt3 solutions">
              <h2 className="!w-full p-0">
                HOW OUR INNOVATIVE PRODUCTS HELP
                <br />
                FINTECH SOLUTION COMPANIES
              </h2>
            </div>
          </div>

          <div className="service_grid_img reveal">
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[40px] gap-[20px]">
              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    decoding="async"
                    loading="lazy"
                    src="/images/Fraud-Detection-Software.png"
                    alt="Fraud-Detection-Software"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 01.</div>
                  <div className="service_title">
                    <h3>Fraud Detection Software</h3>
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
                    decoding="async"
                    loading="lazy"
                    src="/images/Financial-Reporting-Software.png"
                    alt="Financial-Reporting-Software"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 02.</div>
                  <div className="service_title">
                    <h3>Financial Reporting Software</h3>
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
                    decoding="async"
                    loading="lazy"
                    className=""
                    src="/images/Financial-Risk-Management.png"
                    alt="Financial-Risk-Management"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 03.</div>
                  <div className="service_title">
                    <h3>Financial Risk Management</h3>
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
                    decoding="async"
                    loading="lazy"
                    className="alignnone wp-image-285 size-full"
                    src="/images/Financial-CRM-software.png"
                    alt="Financial-CRM-software"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 04.</div>
                  <div className="service_title">
                    <h3>Financial CRM software</h3>
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
                    decoding="async"
                    loading="lazy"
                    className="alignnone wp-image-285 size-full"
                    src="/images/Background-Check-Software.png"
                    alt="Background-Check-Software"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 05.</div>
                  <div className="service_title">
                    <h3>Background Check Software</h3>
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
                    decoding="async"
                    loading="lazy"
                    className="alignnone wp-image-285 size-full"
                    src="/images/Sales-Forecasting-Softwaref.png"
                    alt="Sales-Forecasting-Softwaref"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 06.</div>
                  <div className="service_title">
                    <h3>Sales Forecasting Software</h3>
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
                        decoding="async"
                        loading="lazy"
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

          <div className="mx-auto md:pt-[6rem] pt-[4rem] workpadd_borderTop end-to-end reveal">
            <div className="portfolio_health_sec1 w-full">
              <div className="flex md:flex-row flex-col gap-[2rem] align-middle mb-0 ">
                <div className="health_sec1_flex_40 order_2">
                  <div className="solutions">
                    <h2>OUR PORTFOLIO</h2>
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
                    <Link
                      href="/portfolio/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="btn_flex">
                        <div className="arrow_icon">
                          <Image
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
                    <Image
                      className="alignnone"
                      src="/images/reliant-img.png"
                      alt="Reliant Business Valuations Software Development"
                      width="815"
                      height="523"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:py-[6rem] md:py-[4rem] py-[2rem] reveal">
            <div className="sec9_service_style xl:px-[12rem] sm:px-[4rem] px-[1rem]">
              <div>
                <div className="end-To-end pt-8">
                  <div className="endTO_text home_sec2_txt3 solutions mt-[4rem] mb-0 md:pt-[1rem] lg:pt-[2rem]">
                    <h2 className="!w-full md:p-0 p-3">
                      WHY SHOULD YOU CHOOSE US FOR FINTECH SOFTWARE DEVELOPMENT?
                    </h2>
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
                    <p className="year !border-0 py-[1rem]">
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
                    <p className="year !border-0 py-[1rem]">
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
                    <p className="year !border-0 py-[1rem]">
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
                    <p className="year !border-0 py-[1rem]">Development Team</p>
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
                      API
                    </div>
                    <p className="year !border-0 py-[1rem]">
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
                    <img
                      decoding="async"
                      loading="lazy"
                      src="/images/right_arrow.png"
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
      <FintechFAQ />
    </>
  );
};

export default Fintech;
