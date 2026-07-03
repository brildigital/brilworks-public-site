"use client";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { scrollEffect } from "../lib/commonFunction";
import {
  ShieldAlert,
  Laptop,
  AlertTriangle,
  Building2,
  UserCheck,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ButtonV2 from "../Common/ButtonV2";
import ServicesSection from "../Common/ServicesSection";
import "../../styles/ServiceLightTheme.css";

const MultipleKeyValueWithBG = dynamic(
  () => import("../Common/MultipleKeyValueWithBG"),
);
const MultipleCardInGrid = dynamic(
  () => import("../Common/MultipleCardInGrid"),
);
const FintechFAQ = dynamic(() => import("./SolutionFAQ"));
const SeeingBelieving = dynamic(() => import("../Homepage/SeeingBelieving"));
const SolutionContactForm = dynamic(() => import("./SolutionContactForm"));
const SolutionEngagementAndHowCanStart = dynamic(
  () => import("./SolutionEngagementAndHowCanStart"),
);

const Fintech = () => {
  const fintechServices1 = {
    title: "Our End-to-End Fintech Software Development Services",
    desc: "Our services drive sustainable growth.",
    buttonText: "Build My Fintech App",
    servicesList: [
      {
        title: "Custom Fintech Software Developments",
        value: "fintech-service1-1",
        description:
          "Our custom fintech software development services include application development, custom reporting, and real-time data interaction.",
        imageSrc: "/images/v2/custon-fintech-dev.webp",
        imageAlt: "Custom fintech software development",
      },
      {
        title: "Banking App Development",
        value: "fintech-service1-2",
        description:
          "Develop applications such as digital wallets or mobile banking apps with our fintech app development services that let you expand your digital footprint by making it easier for your clients to do banking from any device, at any time.",
        imageSrc: "/images/v2/banking-app-development.webp",
        imageAlt: "Banking App Development",
      },
      {
        title: "Insurance App Development",
        value: "fintech-service1-3",
        description:
          "We know that customer experience is an essential part of building a successful InsurTech app. Our team specializes in custom insurance application development, with no compromises on quality or usability.",
        imageSrc: "/images/v2/insurance-app-development.webp",
        imageAlt: "Insurance App Development",
      },
      {
        title: "Wallet App Development",
        value: "fintech-service1-4",
        description:
          "Giving customers the ability to pay with a smartphone-specific digital wallet is an easy way to encourage loyalty and ensure customer satisfaction.",
        imageSrc: "/images/v2/wallet-app-development.webp",
        imageAlt: "Wallet App Development",
      },
      {
        title: "Fintech Software Security",
        value: "fintech-service1-5",
        description:
          "We work with you to ensure your application remains up and running. Whether it’s in server management, data security, or continuous monitoring.",
        imageSrc: "/images/v2/fintech-software-security.webp",
        imageAlt: "Fintech Software Security",
      },
      {
        title: "FinOps Services",
        value: "fintech-service1-6",
        description:
          "With the right cloud cost management, your business can scale effectively and avoid cost overheads. From managing your cloud custodian services to proactive detection of technology costs to constructing agile, scalable solutions for you, our fintech software developers manage it all.",
        imageSrc: "/images/v2/finops-services.webp",
        imageAlt: "FinOps Services",
      },
    ],
  };
  const fintechServices2 = {
    title: "Industry-specific Fintech Software Development",
    buttonText: "Speak With Our Experts",
    servicesList: [
      {
        title: "Wealth Management",
        value: "fintech-service2-1",
        description:
          "We build fintech apps to better manage financial assets, seek insight into consumer trends and improve communication.",
        imageSrc: "/images/v2/wealth-management.webp",
        imageAlt: "Wealth Management",
      },
      {
        title: "Lending",
        value: "fintech-service2-2",
        description:
          "We build technology solutions to enhance your operations and automate and improve your lending processes to facilitate instant loan approval, KYC verification, and consumer eligibility checks.",
        imageSrc: "/images/v2/lending.webp",
        imageAlt: "Lending",
      },
      {
        title: "Consumer Banking",
        value: "fintech-service2-3",
        description:
          "We create and deploy the most advanced and secure banking solutions that enable customers to help customer service, predict the future, and smoothen out operations.",
        imageSrc: "/images/v2/consumer-banking.webp",
        imageAlt: "Consumer Banking",
      },
      {
        title: " Personal Finance",
        value: "fintech-service2-4",
        description:
          "We develop software for personal finance, in a way that’s both simple and powerful. Our goal is to help users better manage their savings and investments.",
        imageSrc: "/images/v2/personal-finance.webp",
        imageAlt: "Personal Finance",
      },
      {
        title: "Payment",
        value: "fintech-service2-5",
        description:
          "Our portfolio encompasses a suite of financial technology that is designed to bring transparency, safety, and control to the payments system.",
        imageSrc: "/images/v2/payment.webp",
        imageAlt: "Payment",
      },
      {
        title: "Insurance",
        value: "fintech-service2-6",
        description:
          "Fintech is changing the insurance industry, so we’re changing the way it works for you. Our fintech products help insurance companies improve customer engagement, underwriting process, claims processing, and fraud detection.",
        imageSrc: "/images/v2/insurance-app-development.webp",
        imageAlt: "Insurance",
      },
    ],
  };

  const why100PlusCompaniesTrust = [
    {
      title: "Fraud Detection Software",
      icon: <ShieldAlert size={32} color="#1A5CCC" strokeWidth={1.75} />,
      description:
        "Our financial fraud detection software is designed to screen users, accounts, transactions, and reports for money laundering, counterfeiting, embezzlement, and all forms of abuse.",
    },
    {
      title: "Financial Reporting Software",
      icon: <Laptop size={32} color="#1A5CCC" strokeWidth={1.75} />,
      description:
        "It helps organizations to complete financial tasks more efficiently by reducing the time taken for manual work by replacing it with automation and providing accurate reports for management decision-making.",
    },
    {
      title: "Financial Risk Management",
      icon: <AlertTriangle size={32} color="#1A5CCC" strokeWidth={1.75} />,
      description:
        "Risk Management software increases the focus on the risk of financial losses to the institution and helps its management mitigate these risks through accurate and timely decisions.",
    },
    {
      title: "Financial CRM Software",
      icon: <Building2 size={32} color="#1A5CCC" strokeWidth={1.75} />,
      description:
        "It is used by insurance companies and banks to streamline customer communications. Financial CRM software includes features like business intelligence, analytics, dashboards, reports, and much more.",
    },
    {
      title: "Background Check Software",
      icon: <UserCheck size={32} color="#1A5CCC" strokeWidth={1.75} />,
      description:
        "It provides fast and accurate information on the authenticity of confidential information provided by individuals to process any applications like a credit card, mortgage loan, insurance etc.",
    },
    {
      title: "Sales Forecasting Software",
      icon: <TrendingUp size={32} color="#1A5CCC" strokeWidth={1.75} />,
      description:
        "It is a powerful tool used by sales managers and business owners to estimate and predict expenses with analysis and modeling tools including, expense reports, customer profitability analysis etc.",
    },
  ];

  const fintechExperienceShowCase = [
    {
      value: "100%",
      description: "Safe & Secure Products",
      color: "#E5F4FF",
    },
    {
      value: "30+",
      description: "Fintech Developers",
      color: "#FFE2E5",
    },

    {
      value: "100%",
      description: "Compliance with Financial Standards",
      color: "#E9FFE2",
    },
    {
      value: "Agile",
      description: "Development Team",
      color: "#FFE8FC",
    },
    {
      value: "Expert",
      description: "Knowledge",
      color: "#F4ECFF",
    },
    {
      value: "API",
      description: "Third-party API Development & Integration",
      color: "#FCFFE3",
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
      <section
        className="relative overflow-hidden svc-hero-bg"
        style={{ padding: "120px 0 80px" }}
      >
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-[60px] items-center">
            <div>
              <span
                className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-6 text-[12px] font-semibold uppercase border"
                style={{
                  background: "#ffffff",
                  borderColor: "#e4eaf1",
                  color: "#566678",
                  letterSpacing: "0.1em",
                  boxShadow: "0 1px 2px rgba(11, 30, 51, 0.05)",
                }}
              >
                Fintech Software Development Company
              </span>
              <h1
                className="font-extrabold mb-5"
                style={{
                  fontSize: "clamp(34px, 4vw, 54px)",
                  letterSpacing: "-1.5px",
                  lineHeight: 1.1,
                  color: "#0b1e33",
                }}
              >
                Delivering Secure Fintech Software Development Services
              </h1>
              <p
                className="mb-8"
                style={{
                  fontSize: 18,
                  lineHeight: 1.7,
                  color: "#566678",
                  maxWidth: 580,
                }}
              >
                Step into a new era of financial flexibility with our
                sophisticated, intuitive &amp; highly-secure fintech
                applications. Our fintech software development services are
                built to drive business transformation and maximize ROI.
              </p>
              <div className="flex flex-wrap gap-3.5 my-10">
                <ButtonV2
                  size="large"
                  label="Hire Fintech Developer"
                  redirect="#section-contact-form"
                  scrollingButton
                  className="hover:!text-themeColor"
                />
                <Link
                  href="/portfolio/"
                  className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:bg-black/5"
                  style={{
                    background: "transparent",
                    color: "#0b1e33",
                    border: "1px solid #e4eaf1",
                    padding: "16px 32px",
                    fontSize: 16,
                  }}
                >
                  View Case Studies
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div
                className="w-full rounded-2xl overflow-hidden"
                style={{
                  background: "#ffffff",
                  border: "1px solid #e4eaf1",
                  boxShadow: "0 4px 24px rgba(11,30,51,0.08)",
                  padding: 8,
                }}
              >
                <Image
                  className="rounded-xl object-cover w-full"
                  src="/images/v2/fintech-banner.webp"
                  alt="Fintech Software Development Company"
                  width={565}
                  height={650}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ServicesSection
        sectionId="services-one"
        serviceData={fintechServices1}
      />
      <ServicesSection
        bgClass="bg-themeLight"
        sectionId="services-two"
        imageOnLeft={true}
        serviceData={fintechServices2}
      />
      <MultipleCardInGrid
        title="How Our Innovative Products Help Fintech Solution Companies"
        cardData={why100PlusCompaniesTrust}
      />
      <SeeingBelieving buttonText="Work With Us" title="Our Portfolio" />
      <MultipleKeyValueWithBG
        bgClass="bg-white"
        title="Why Should You Hire AWS Developers from Brilworks?"
        description="We offer next-gen fintech solutions, which allow you to embrace innovation, improve efficiency, and comply with regulations. Our fintech software developers are always ready to help develop innovative solutions that optimize your customers’ experience and better manage risk in the financial industry."
        keyValueData={fintechExperienceShowCase}
      />
      <SolutionEngagementAndHowCanStart />
      <SolutionContactForm bgClassName="svc-mid-cta-bg" />
      <FintechFAQ />
    </>
  );
};

export default Fintech;
