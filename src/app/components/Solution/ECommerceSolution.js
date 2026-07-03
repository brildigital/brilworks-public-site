"use client";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { scrollEffect } from "../lib/commonFunction";
import Image from "next/image";
import Link from "next/link";
import ButtonV2 from "../Common/ButtonV2";
import ServicesSection from "../Common/ServicesSection";
import CTASection from "../Common/CTASection";
import "../../styles/ServiceLightTheme.css";
const TechStackWeWorkWith = dynamic(
  () => import("../Technologies/TechStackWeWorkWith"),
  { ssr: false },
);
import { faReact, faPhp } from "@fortawesome/free-brands-svg-icons";
import SolutionCostAndTimeLine from "./SolutionCostAndTimeLine";
import IndustryMidCTA from "./IndustryMidCTA";
import IndustryTrustBar from "./IndustryTrustBar";
import {
  ShieldCheck,
  ShoppingBag,
  DollarSign,
  Lock,
  Award,
  Target,
  Smile,
  LifeBuoy,
  RefreshCw,
  Rocket,
  Building2,
  Landmark,
} from "lucide-react";

const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));

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

const ECommerceSolution = () => {
  const trustBarItems = [
    { icon: ShieldCheck, label: "AWS Consulting Partner" },
    { icon: ShoppingBag, label: "50+ E-Commerce Apps" },
    { icon: DollarSign, label: "$10M+ Revenue Generated" },
    { icon: Lock, label: "PCI DSS & GDPR Ready" },
  ];

  const eCommerceService = {
    title: "Our Comprehensive eCommerce App Development Services",
    desc: "We offer a full suite of services designed to power your growth in the competitive online marketplace:",
    buttonText: "Build E-Commerce App",
    servicesList: [
      {
        title: "Mobile and Web App Development",
        iconSrc: "/images/v2/interactive-ui-icon.svg",
        value: "fintech-service1-1",
        description:
          "Crafting bespoke applications for iOS and Android, alongside responsive web solutions, to meet your unique business requirements and ensure increased engagement.",
        imageSrc: "/images/v2/mobile-app-web-app.webp",
        imageAlt: "mobile-app-dev-banner",
      },
      {
        title: "UI/UX Design and Development",
        iconSrc: "/images/v2/developer-icon.svg",
        value: "fintech-service1-2",
        description:
          "Developing visually appealing and intuitive designs that provide seamless navigation, enhance user satisfaction, and set your application apart.",
        imageSrc: "/images/v2/ui-ux-design-and-development.webp",
        imageAlt: "ui-ux-design-dev-banner",
      },
      {
        title: "Platform-Specific Solutions",
        iconSrc: "/images/v2/software-as-service-icon.svg",
        value: "fintech-service1-3",
        description:
          "Specialising in development for leading eCommerce platforms such as Magento, Shopify, WooCommerce, Adobe Commerce, BigCommerce, and Shopware, to build scalable and customisable online stores.",
        imageSrc: "/images/v2/Platform-Specific-Solutions.webp",
        imageAlt: "platform-specific-banner",
      },
      {
        title: "Advanced API Integrations",
        iconSrc: "/images/v2/api-integration-icon.svg",
        value: "fintech-service1-4",
        description:
          "Seamlessly integrating third-party APIs for payment gateways, shipping, analytics, and other critical functionalities to streamline operations and enhance user convenience.",
        imageSrc: "/images/v2/advanced-api-integrations.webp",
        imageAlt: "adv-api-banner",
      },
      {
        title: "Strategic Consulting and Digital Transformation",
        iconSrc: "/images/v2/consultant-icon.svg",
        value: "fintech-service1-5",
        description:
          "Providing advisory services to help elaborate on long-term eCommerce roadmaps, including headless commerce architecture, microservices, and AI-driven personalisation.",
        imageSrc:
          "/images/v2/strategic-consulting-and-digital-transformation.webp",
        imageAlt: "strategy-consulting-banner",
      },
      {
        title: "Backend and Frontend Development",
        iconSrc: "/images/v2/cloud-based-icon.svg",
        value: "fintech-service1-6",
        description:
          "Building robust and unified digital experiences from the ground up, ensuring high security, data privacy, speed, and efficient inventory management.",
        imageSrc: "/images/v2/backend-and-frontend-development.webp",
        imageAlt: "ongoing-maintenance-banner",
      },
      {
        title: "Ongoing Maintenance and Support",
        iconSrc: "/images/v2/ongoing-support-icon.svg",
        value: "fintech-service1-7",
        description:
          "Delivering continuous 24/7 support, timely updates, and performance monitoring to ensure your eCommerce application remains secure, stable, and up-to-date.",
        imageSrc: "/images/v2/ongoing-maintenance-and-support.webp",
        imageAlt: "ongoing-maintenance-banner",
      },
    ],
  };

  const why100PlusCompaniesTrust = [
    {
      title: "Proven Expertise and Experience",
      icon: <Award size={32} color="#1A5CCC" strokeWidth={1.75} />,
      description:
        "We bring extensive experience in mobile app implementation and eCommerce IT, ensuring your project is handled by qualified, experienced specialists.",
    },
    {
      title: "Customised, Goal-Oriented Solutions",
      icon: <Target size={32} color="#1A5CCC" strokeWidth={1.75} />,
      description:
        "Our services are meticulously designed to future-proof your retail strategy and build bespoke applications that precisely align with your specific business goals.",
    },
    {
      title: "Enhanced User Experience and Engagement",
      icon: <Smile size={32} color="#1A5CCC" strokeWidth={1.75} />,
      description:
        "We specialize in creating visually appealing, intuitive, conversion-driven designs, ensuring  seamless navigation, engagement, and a personalized shopping experience.",
    },
    {
      title: "Robust Security and Performance",
      icon: <ShieldCheck size={32} color="#1A5CCC" strokeWidth={1.75} />,
      description:
        "We prioritize the confidentiality and integrity of your data. Our development with ISO 27001-approved security processes and GDPR standards ensures secure data exchange.",
    },
    {
      title: "Comprehensive Service and Support",
      icon: <LifeBuoy size={32} color="#1A5CCC" strokeWidth={1.75} />,
      description:
        "From initial strategy and research to design, integration, and deployment, we offer a full suite of end-to-end services, with 24/7 support and maintenance.",
    },
    {
      title: "Agile Methodology and Transparency",
      icon: <RefreshCw size={32} color="#1A5CCC" strokeWidth={1.75} />,
      description:
        "We leverage agile development practices to deliver solutions within stipulated timelines without compromising on quality.",
    },
  ];

  const fintechExperienceShowCase = [
    {
      value: "100%",
      description: "Safe & Secure Products",
      color: "#E5F4FF",
    },
    {
      value: "25+",
      description: "E-Commerce Developers",
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

  const techStackList = [
    {
      title: "Mobile Development",
      value: "mobile-development",
      items: [
        { label: "Java", iconifyIcon: "/images/java.svg" },
        { label: "Kotlin", iconifyIcon: "/images/kotlin-icon.svg" },
        { label: "Swift", iconifyIcon: "/images/swift-language.svg" },
        { label: "React Native", icon: faReact, color: "#61DBFB" },
        { label: "Android Studio", iconifyIcon: "/images/android-studio.svg" },
        { label: "Flutter", iconifyIcon: "/images/flutter.svg" },
      ],
    },
    {
      title: "Android Development Tools",
      value: "android",
      items: [
        { label: "XCode", iconifyIcon: "/images/xcode.svg" },
        { label: "Appcode", iconifyIcon: "/images/android-code.svg" },
        { label: "Android UI", iconifyIcon: "/images/android-ui.svg" },
        { label: "Jetpack Compose", iconifyIcon: "/images/jetpackcompose.svg" },
        { label: "UIKit", iconifyIcon: "/images/uikit.svg" },
        { label: "SwiftUI", iconifyIcon: "/images/swiftui.svg" },
      ],
    },
    {
      title: "Web Front End",
      value: "frontend",
      items: [
        { label: "AngularJS", iconifyIcon: "/images/angular-icon.svg" },
        { label: "ReactJS", icon: faReact, color: "#61DBFB" },
        { label: "Figma", iconifyIcon: "/images/figma-icon.svg" },
      ],
    },
    {
      title: "Back-end",
      value: "baclend",
      items: [
        { label: "Java", iconifyIcon: "/images/java.svg" },
        { label: "NodeJS", iconifyIcon: "/images/node-icon.svg" },
        { label: "Python", iconifyIcon: "/images/python.svg" },
        { label: "PHP", icon: faPhp, color: "#777BB4" },
        { label: "Golang", iconifyIcon: "/images/golang.svg" },
        { label: ".Net", iconifyIcon: "/images/dot-net.svg" },
        { label: "Hapi.js", iconifyIcon: "/images/hapi.svg" },
        { label: "Meteor.js", iconifyIcon: "/images/meteor-icon.svg" },
        { label: "Socket.io", iconifyIcon: "/images/socket-io.svg" },
        { label: "Spring", iconifyIcon: "/images/spring-3.svg" },
      ],
    },
  ];
  const eCommerceCostAndTimeline = {
    title: "Ecommerce App Development Cost & Timeline",
    description:
      "We offer scalable development tiers designed to balance cost, speed, and feature depth.",
    listItems: [
      {
        title: "For Solo Founders and Startups",
        icon: <Rocket size={32} color="#1A5CCC" strokeWidth={1.75} />,
        budgetRange: "$15K – $55K",
        includes: [
          "Mobile-friendly storefront design",
          "Standard cart, checkout, and payment integration (Stripe, Razorpay)",
          "Lightweight admin dashboard for catalog and orders",
        ],
        timeline: "10–16 weeks",
        engagementModel: "Fixed scope / Agile with capped T&M",
      },
      {
        title: "For Mid-Sized Businesses",
        icon: <Building2 size={32} color="#1A5CCC" strokeWidth={1.75} />,
        budgetRange: "$55K – $190K",
        includes: [
          "Multi-vendor or personalized catalog logic",
          "POS system sync and stock management",
          "Loyalty engine and promo campaigns",
          "Traffic handling for seasonal sales",
          "Optional mobile apps (PWA or native)",
        ],
        timeline: "4–8 months",
        engagementModel: "Agile / T&M with milestone-based billing",
      },
      {
        title: "For Enterprises",
        icon: <Landmark size={32} color="#1A5CCC" strokeWidth={1.75} />,
        budgetRange: "$190K+",
        includes: [
          "Unified web + mobile platforms",
          "Multi-language and currency support",
          "CRM/ERP integration for operations",
          "Product search, AI-powered recommendations",
          "Omnichannel readiness (chatbots, WhatsApp, voice search)",
        ],
        timeline: "8–14 months",
        engagementModel: "Dedicated squad / Phased rollout strategy",
      },
    ],
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
                E-Commerce App Development
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
                Elevate Your Online Retail: Custom{" "}
                <span style={{ color: "#2f6bff" }}>
                  E-Commerce App Development
                </span>
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
                Revolutionise your digital presence with cutting-edge mobile and
                web solutions tailored for superior performance and growth. Our
                expert ecommerce app development services empower businesses to
                connect with customers seamlessly, driving conversions and
                fostering lasting brand loyalty.
              </p>
              <div className="flex flex-wrap gap-3.5 my-10">
                <ButtonV2
                  size="large"
                  label="Hire E-Commerce Developer"
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
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { value: "120+", label: "Products Shipped" },
                  { value: "50+", label: "E-Commerce Apps" },
                  { value: "$10M+", label: "Revenue Generated" },
                  { value: "98%", label: "Client Retention" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl transition-all svc-stat-card text-center"
                    style={{ padding: "18px 12px" }}
                  >
                    <div
                      className="font-extrabold leading-none"
                      style={{ color: "#2f6bff", fontSize: 26 }}
                    >
                      {s.value}
                    </div>
                    <div
                      style={{ color: "#6b7a8a", fontSize: 12, marginTop: 6 }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
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
                  src="/images/v2/e-commerce-industry-banner.webp"
                  alt="E-Commerce App Development"
                  width={565}
                  height={650}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <IndustryTrustBar items={trustBarItems} />
      <ServicesSection
        sectionId="services-one"
        serviceData={eCommerceService}
      />

      <IndustryMidCTA
        title="Ready to Build an E-Commerce App?"
        description="Get a free consultation and project estimate. We respond within 24 hours."
      />

      <MultipleCardInGrid
        title="Why Partner with Us for Your eCommerce App Development?"
        cardData={why100PlusCompaniesTrust}
      />
      <CTASection
        title="Partner with us to transform your vision into a highly effective and successful eCommerce application that propels your brand forward."
        buttonText="Let's Build"
        darkBackground
      />
      <TechStackWeWorkWith
        active="mobile-development"
        techStackList={techStackList}
      />
      <SeeingBelieving buttonText="Work With Us" title="Our Portfolio" />
      <SolutionCostAndTimeLine costData={eCommerceCostAndTimeline} />
      <MultipleKeyValueWithBG
        bgClass="bg-white"
        title="Why Should You Hire E-Commerce Developers from Brilworks?"
        description="We offer next-gen fintech solutions, which allow you to embrace innovation, improve efficiency, and comply with regulations. Our fintech software developers are always ready to help develop innovative solutions that optimize your customers' experience and better manage risk in the financial industry."
        keyValueData={fintechExperienceShowCase}
      />

      <ClientReviews light />
      <SolutionEngagementAndHowCanStart />
      <FintechFAQ />
      <SolutionContactForm
        title="Ready to Launch Your E-Commerce Store?"
        description="Connect with our eCommerce experts to discuss your project requirements and get a detailed proposal within 48 hours."
        submitLabel="Get My Free Estimate"
        benefits={[
          "Custom storefront tailored to your brand",
          "PCI-DSS compliance built in",
          "Scalable architecture for growth",
          "24/7 post-launch support",
        ]}
        bgClassName="svc-mid-cta-bg"
      />
    </>
  );
};

export default ECommerceSolution;
