"use client";
import dynamic from "next/dynamic";
import { ShieldCheck, Factory, BarChart3, Wrench } from "lucide-react";
import SolutionHeroSection from "./SolutionHeroSection";
import MultipleCardInGrid from "../Common/MultipleCardInGrid";
import SolutionContactForm from "./SolutionContactForm";
import IndustryMidCTA from "./IndustryMidCTA";
import IndustryTrustBar from "./IndustryTrustBar";

const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));

const ServicesSection = dynamic(() => import("../Common/ServicesSection"));

const MultipleCardWithIconBG = dynamic(() =>
  import("../Common/MultipleCardWithIconBG")
);
const SeeingBelieving = dynamic(() => import("../Homepage/SeeingBelieving"));
const HomePageBlogs = dynamic(() => import("../Homepage/HomePageBlogs"));

const ManufaturingSoftwareDevelopmentService = () => {
  const trustBarItems = [
    { icon: ShieldCheck, label: "AWS Consulting Partner" },
    { icon: Factory, label: "8+ Years Manufacturing Software" },
    { icon: BarChart3, label: "98% Project Success Rate" },
    { icon: Wrench, label: "ERP & Shop Floor Integrations" },
  ];

  const heroStats = [
    { value: "120+", label: "Products Shipped" },
    { value: "15+", label: "Manufacturing Apps" },
    { value: "99.9%", label: "Uptime" },
    { value: "98%", label: "Client Retention" },
  ];

  const manufacturingServices1 = {
    title: "What We Build for Manufacturers",
    servicesList: [
      {
        title: "Order Management Platforms",
        iconSrc: "/images/v2/manufaturing-icon.svg",
        value: "mfg-service-1",
        description:
          "Track customer orders from quote to delivery, with automatic production scheduling and material allocation.",
        imageSrc: "/images/v2/order-management-platforms.webp",
        imageAlt: "Order Management Platforms image",
      },
      {
        title: "Inventory Tracking Systems",
        iconSrc: "/images/v2/realtime-icon.svg",
        value: "mfg-service-2",
        description:
          "Real-time stock levels across multiple locations, with barcode scanning and automated reorder alerts.",
        imageSrc: "/images/v2/inventory-tracking-systems.webp",
        imageAlt: "Inventory Tracking Systems image",
      },
      {
        title: "Shop Floor Applications",
        iconSrc: "/images/v2/developer-icon.svg",
        value: "mfg-service-3",
        description:
          "Digital work instructions, machine monitoring, production counts, and downtime tracking captured in real-time.",
        imageSrc: "/images/v2/shop-floor-applications.webp",
        imageAlt: "Shop Floor Applications image",
      },
      {
        title: "Quality Control Software",
        iconSrc: "/images/v2/quality-project-mgmt-icon.svg",
        value: "mfg-service-4",
        description:
          "Digital inspection checklists, defect tracking, non-conformance management, and statistical process control.",
        imageSrc: "/images/v2/quality-control-software.webp",
        imageAlt: "Quality Control Software image",
      },
      {
        title: "Mobile Apps for Production",
        iconSrc: "/images/v2/interactive-ui-icon.svg",
        value: "mfg-service-5",
        description:
          "Native iOS and Android apps that work offline for warehouse operations, job tracking, and inspections.",
        imageSrc: "/images/v2/mobile-apps-for-production.webp",
        imageAlt: "Mobile Apps for Production image",
      },
    ],
  };
  const manufaturingServices2 = {
    title: "Digital Tools We Build for Manufacturers",
    servicesList: [
      {
        title: "Manufacturing Execution Systems (MES)",
        iconSrc: "/images/v2/cloud-based-icon.svg",
        value: "mfg-service-6",
        description:
          "Connect machines and operators to capture production data, monitor OEE, and identify bottlenecks.",
        imageSrc: "/images/v2/manufacturing-execution-systems-mes.webp",
        imageAlt: "Manufacturing Execution Systems image",
      },
      {
        title: "Custom Web Dashboards",
        iconSrc: "/images/v2/scalable-architecture-icon.svg",
        value: "mfg-service-7",
        description:
          "Browser-based reporting and management interfaces accessible from any device.",
        imageSrc: "/images/v2/custom-web-dashboards.webp",
        imageAlt: "Custom Web Dashboards image",
      },
      {
        title: "Warehouse Management Solutions",
        iconSrc: "/images/v2/logistic-icon.svg",
        value: "mfg-service-8",
        description:
          "Receiving, putaway, picking, and shipping workflows with lot and serial number traceability.",
        imageSrc: "/images/v2/warehouse-management-solutions.webp",
        imageAlt: "Warehouse Management Solutions image",
      },
      {
        title: "Production Planning Tools",
        iconSrc: "/images/v2/calendar-icon.svg",
        value: "mfg-service-9",
        description:
          "Schedule production runs, calculate material requirements, and manage capacity across your facility.",
        imageSrc: "/images/v2/production-planning-tools.webp",
        imageAlt: "Production Planning Tools image",
      },
    ],
  };

  const manufaturingHowWeWorkWithYou = [
    {
      title: "Time & Material",
      icon: "/images/Quick-Turnaround-Time.png",
      description:
        "Pay for the hours we work. Good for projects where requirements will evolve as you learn what works.",
    },
    {
      title: "Fixed Cost",
      icon: "/images/v2/budget-estimate.svg",
      description:
        "One price for defined deliverables. We estimate the work, agree on what you'll get, and deliver it for that budget.",
    },
    {
      title: "Staff Augmentation",
      icon: "/images/v2/dedicated-dev-team.svg",
      description:
        "Our developers join your team and work your hours using your tools and processes.",
    },
    {
      title: "Dedicated Development Team",
      icon: "/images/v2/dedicated-dev-team.svg",
      description:
        "A full team focused exclusively on your project, including developers, designers, QA testers, and a project manager.",
    },
  ];

  const whyChooseUsDevelopmentData = {
    title: "Why Manufacturers Choose Brilworks",
    benefits: [
      {
        title: "Top-Rated Developers",
        icon: "/images/v2/Senior_talent_at_competitive_rates.svg",
        description:
          "Our team members consistently earn top ratings for their technical skills and communication.",
      },
      {
        title: "Manufacturing Experience",
        icon: "/images/v2/proven-expertise.svg",
        description:
          "We've built software for brick manufacturers, seat makers, and other production companies.",
      },
      {
        title: "Agile & Transparent",
        icon: "/images/v2/Agile_Development_Excellence.svg",
        description:
          "You see progress regularly through sprints and working software, not after months of silence.",
      },
      {
        title: "Clear Communication",
        icon: "/images/v2/transparent-comm.svg",
        description:
          "We explain technical decisions in plain language without overwhelming you with jargon.",
      },
      {
        title: "Post-Launch Support",
        icon: "/images/v2/ongoing-support-icon.svg",
        description:
          "We provide training, fix bugs, make adjustments, and add features as your needs evolve.",
      },
    ],
  };

  return (
    <>
      <SolutionHeroSection
        technologyText="Manufacturing Software Development Services"
        title='Custom <span class="bg-gradient-to-r from-[#017eeb] to-[#00ffff] bg-clip-text" style="--tw-gradient-from:#017eeb;--tw-gradient-to:#00ffff;-webkit-background-clip:text;-webkit-text-fill-color:transparent">Manufacturing Software</span> Development'
        description="Custom software for production companies. We build order management systems, inventory tracking, shop floor applications, and integrations that connect your existing tools."
        imageSrc="/images/v2/manufacturing-software-development-services.webp"
        buttonText="Start Your App Journey"
        stats={heroStats}
      />
      <IndustryTrustBar items={trustBarItems} />
      <ServicesSection
        bgClass="bg-themeLight"
        sectionId="services-one"
        serviceData={manufacturingServices1}
      />
      <ServicesSection
        bgClass="bg-sectionBG"
        sectionId="services-two"
        imageOnLeft={true}
        serviceData={manufaturingServices2}
      />
      <IndustryMidCTA
        title="Ready to Build Your Manufacturing App?"
        description="Get a free consultation and project estimate. We respond within 24 hours."
      />
      <MultipleCardInGrid
        title="How We Work With You"
        cardData={manufaturingHowWeWorkWithYou}
        buttonText="Know More"
        redirect="/contact-us/"
      />
      <MultipleCardWithIconBG
        bgClass="bg-sectionBG"
        data={whyChooseUsDevelopmentData}
      />
      <ClientReviews />
      <SeeingBelieving />
      <SolutionContactForm
        title="Ready to Build Your Manufacturing Platform?"
        description="You're one conversation away from streamlining your manufacturing processes and eliminating manual bottlenecks."
        submitLabel="Get My Free Manufacturing Consultation"
        benefits={[
          "Free 30-minute consultation with a manufacturing tech specialist",
          "Detailed project proposal within 48 hours",
          "48-hour risk-free trial — no commitment",
          "Response guaranteed within 24 business hours",
          "ERP and shop floor integration guidance included",
        ]}
      />
      <HomePageBlogs />
    </>
  );
};

export default ManufaturingSoftwareDevelopmentService;
