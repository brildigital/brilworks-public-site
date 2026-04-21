"use client";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { scrollEffect } from "../lib/commonFunction";
import { ShieldCheck, Landmark, Lock, BadgeCheck } from "lucide-react";
import SolutionHeroSection from "./SolutionHeroSection";
import ServicesSection from "../Common/ServicesSection";
import MultipleCardWithIconBG from "../Common/MultipleCardWithIconBG";
import IndustryMidCTA from "./IndustryMidCTA";
import IndustryTrustBar from "./IndustryTrustBar";

const FintechFAQ = dynamic(() => import("./SolutionFAQ"));
const SeeingBelieving = dynamic(() => import("../Homepage/SeeingBelieving"));
const SolutionContactForm = dynamic(() => import("./SolutionContactForm"));
const SolutionEngagementAndHowCanStart = dynamic(() =>
  import("./SolutionEngagementAndHowCanStart")
);
const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));

const Fintech = () => {
  const heroStats = [
    { value: "120+", label: "Products Shipped" },
    { value: "30+", label: "Fintech Developers" },
    { value: "100%", label: "Compliance Rate" },
    { value: "98%", label: "Client Retention" },
  ];

  const trustBarItems = [
    { icon: ShieldCheck, label: "AWS Consulting Partner" },
    { icon: Landmark, label: "30+ Fintech Developers" },
    { icon: Lock, label: "PCI DSS, SOC 2 & GDPR Ready" },
    { icon: BadgeCheck, label: "100% Compliance Rate" },
  ];

  const fintechServices1 = {
    title: "Our End-to-End Fintech Software Development Services",
    desc: "Our services drive sustainable growth.",
    buttonText: "Build My Fintech App",
    servicesList: [
      {
        title: "Custom Fintech Software Developments",
        iconSrc: "/images/v2/developer-icon.svg",
        value: "fintech-service1-1",
        description:
          "Our custom fintech software development services include application development, custom reporting, and real-time data interaction.",
        imageSrc: "/images/v2/custon-fintech-dev.webp",
        imageAlt: "Custom fintech software development",
      },
      {
        title: "Banking App Development",
        iconSrc: "/images/v2/secure-pymt-icon.svg",
        value: "fintech-service1-2",
        description:
          "Develop applications such as digital wallets or mobile banking apps with our fintech app development services that let you expand your digital footprint by making it easier for your clients to do banking from any device, at any time.",
        imageSrc: "/images/v2/banking-app-development.webp",
        imageAlt: "Banking App Development",
      },
      {
        title: "Insurance App Development",
        iconSrc: "/images/v2/financial-risk-icon.svg",
        value: "fintech-service1-3",
        description:
          "We know that customer experience is an essential part of building a successful InsurTech app. Our team specializes in custom insurance application development, with no compromises on quality or usability.",
        imageSrc: "/images/v2/insurance-app-development.webp",
        imageAlt: "Insurance App Development",
      },
      {
        title: "Wallet App Development",
        iconSrc: "/images/v2/crm-icon.svg",
        value: "fintech-service1-4",
        description:
          "Giving customers the ability to pay with a smartphone-specific digital wallet is an easy way to encourage loyalty and ensure customer satisfaction.",
        imageSrc: "/images/v2/wallet-app-development.webp",
        imageAlt: "Wallet App Development",
      },
      {
        title: "Fintech Software Security",
        iconSrc: "/images/v2/fraud-detection-icon.svg",
        value: "fintech-service1-5",
        description:
          "We work with you to ensure your application remains up and running. Whether it's in server management, data security, or continuous monitoring.",
        imageSrc: "/images/v2/fintech-software-security.webp",
        imageAlt: "Fintech Software Security",
      },
      {
        title: "FinOps Services",
        iconSrc: "/images/v2/cloud-based-icon.svg",
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
        iconSrc: "/images/v2/sales-forcating-icon.svg",
        value: "fintech-service2-1",
        description:
          "We build fintech apps to better manage financial assets, seek insight into consumer trends and improve communication.",
        imageSrc: "/images/v2/wealth-management.webp",
        imageAlt: "Wealth Management",
      },
      {
        title: "Lending",
        iconSrc: "/images/v2/realtime-icon.svg",
        value: "fintech-service2-2",
        description:
          "We build technology solutions to enhance your operations and automate and improve your lending processes to facilitate instant loan approval, KYC verification, and consumer eligibility checks.",
        imageSrc: "/images/v2/lending.webp",
        imageAlt: "Lending",
      },
      {
        title: "Consumer Banking",
        iconSrc: "/images/v2/analytics-reporting-icon.svg",
        value: "fintech-service2-3",
        description:
          "We create and deploy the most advanced and secure banking solutions that enable customers to help customer service, predict the future, and smoothen out operations.",
        imageSrc: "/images/v2/consumer-banking.webp",
        imageAlt: "Consumer Banking",
      },
      {
        title: " Personal Finance",
        iconSrc: "/images/v2/software-as-service-icon.svg",
        value: "fintech-service2-4",
        description:
          "We develop software for personal finance, in a way that's both simple and powerful. Our goal is to help users better manage their savings and investments.",
        imageSrc: "/images/v2/personal-finance.webp",
        imageAlt: "Personal Finance",
      },
      {
        title: "Payment",
        iconSrc: "/images/v2/api-integration-icon.svg",
        value: "fintech-service2-5",
        description:
          "Our portfolio encompasses a suite of financial technology that is designed to bring transparency, safety, and control to the payments system.",
        imageSrc: "/images/v2/payment.webp",
        imageAlt: "Payment",
      },
      {
        title: "Insurance",
        iconSrc: "/images/v2/scalable-architecture-icon.svg",
        value: "fintech-service2-6",
        description:
          "Fintech is changing the insurance industry, so we're changing the way it works for you. Our fintech products help insurance companies improve customer engagement, underwriting process, claims processing, and fraud detection.",
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

  const whyChooseUs = {
    title: "Why Fintech Companies Choose Us",
    benefits: why100PlusCompaniesTrust,
  };

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
        title='Build Secure <span class="bg-gradient-to-r from-[#017eeb] to-[#00ffff] bg-clip-text" style="--tw-gradient-from:#017eeb;--tw-gradient-to:#00ffff;-webkit-background-clip:text;-webkit-text-fill-color:transparent">Fintech Software</span> — Drive Business ROI'
        description="Step into a new era of financial flexibility with our sophisticated, intuitive & highly-secure fintech applications. Our fintech software development services are built to drive business transformation and maximize ROI."
        buttonText="Hire Fintech Developer"
        imageSrc="/images/v2/fintech-banner.webp"
        stats={heroStats}
      />
      <IndustryTrustBar items={trustBarItems} />
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
      <IndustryMidCTA
        title="Ready to Build a Fintech App?"
        description="Get a free consultation and project estimate. We respond within 24 hours."
      />
      <MultipleCardWithIconBG data={whyChooseUs} />
      <ClientReviews />
      <SeeingBelieving buttonText="Work With Us" title="Our Portfolio" />
      <SolutionEngagementAndHowCanStart />
      <FintechFAQ />
      <SolutionContactForm
        title="Ready to Build Your Fintech Platform?"
        description="You're one conversation away from turning your fintech idea into a secure, scalable platform."
        messageRequired={false}
        submitLabel="Get My Free Fintech Consultation"
        benefits={[
          "Free 30-minute consultation with a fintech specialist",
          "Detailed project proposal within 48 hours",
          "48-hour risk-free trial — no commitment",
          "Response guaranteed within 24 business hours",
          "PCI-DSS & financial compliance built in",
        ]}
      />
    </>
  );
};

export default Fintech;
