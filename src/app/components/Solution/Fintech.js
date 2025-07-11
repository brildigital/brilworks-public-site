"use client";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { scrollEffect } from "../lib/commonFunction";
import SolutionHeroSection from "./SolutionHeroSection";
import ServicesSection from "../Common/ServicesSection";

const MultipleKeyValueWithBG = dynamic(() =>
  import("../Common/MultipleKeyValueWithBG")
);
const MultipleCardInGrid = dynamic(() =>
  import("../Common/MultipleCardInGrid")
);
const FintechFAQ = dynamic(() => import("./SolutionFAQ"));
const SeeingBelieving = dynamic(() => import("../Homepage/SeeingBelieving"));
const SolutionContactForm = dynamic(() => import("./SolutionContactForm"));
const SolutionEngagementAndHowCanStart = dynamic(() =>
  import("./SolutionEngagementAndHowCanStart")
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
      icon: "/images/v2/fraud-detection-icon.svg",
      description:
        "Our financial fraud detection software is designed to screen users, accounts, transactions, and reports for money laundering, counterfeiting, embezzlement, and all forms of abuse.",
    },
    {
      title: "Financial Reporting Software",
      icon: "/images/v2/laptop.svg",
      description:
        "It helps organizations to complete financial tasks more efficiently by reducing the time taken for manual work by replacing it with automation and providing accurate reports for management decision-making.",
    },
    {
      title: "Financial Risk Management",
      icon: "/images/v2/financial-risk-icon.svg",
      description:
        "Risk Management software increases the focus on the risk of financial losses to the institution and helps its management mitigate these risks through accurate and timely decisions.",
    },
    {
      title: "Financial CRM Software",
      icon: "/images/v2/crm-icon.svg",
      description:
        "It is used by insurance companies and banks to streamline customer communications. Financial CRM software includes features like business intelligence, analytics, dashboards, reports, and much more.",
    },
    {
      title: "Background Check Software",
      icon: "/images/v2/dedicates-no-distraction.svg",
      description:
        "It provides fast and accurate information on the authenticity of confidential information provided by individuals to process any applications like a credit card, mortgage loan, insurance etc.",
    },
    {
      title: "Sales Forecasting Software",
      icon: "/images/v2/sales-forcating-icon.svg",
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
      <SolutionHeroSection
        technologyText="Fintech Software Development Company"
        title="Delivering Secure Fintech Software Development Services"
        description="Step into a new era of financial flexibility with our sophisticated, intuitive & highly-secure fintech applications. Our fintech software development services are built to drive business transformation and maximize ROI."
        buttonText="Hire Fintech Developer"
        imageSrc="/images/v2/fintech-banner.webp"
      />
      <ServicesSection
        sectionId="fintech-services-one"
        serviceData={fintechServices1}
      />
      <ServicesSection
        bgClass="bg-themeLight"
        sectionId="fintech-services-two"
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
      <SolutionContactForm />
      <FintechFAQ />
    </>
  );
};

export default Fintech;
