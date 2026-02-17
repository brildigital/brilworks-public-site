"use client";
import dynamic from "next/dynamic";
import ServiceHeroSection from "../Services/ServiceHeroSection";
import AboutOurExpertise from "../Services/AboutOurExpertise";
import MultipleCardInGrid from "../Common/MultipleCardInGrid";
import SolutionContactForm from "./SolutionContactForm";

const ServicesSection = dynamic(() => import("../Common/ServicesSection"));

const MultipleCardWithIconBG = dynamic(() =>
  import("../Common/MultipleCardWithIconBG")
);
const SeeingBelieving = dynamic(() => import("../Homepage/SeeingBelieving"));
const HomePageBlogs = dynamic(() => import("../Homepage/HomePageBlogs"));

const ManufaturingSoftwareDevelopmentService = () => {
  const manufacturingServices1 = {
    title: "What We Build for Manufacturers",
    servicesList: [
      {
        title: "Order Management Platforms",
        value: "mfg-service-1",
        description:
          "Track customer orders from quote to delivery, with automatic production scheduling and material allocation.",
        imageSrc: "/images/v2/order-management-platforms.webp",
        imageAlt: "Order Management Platforms image",
      },
      {
        title: "Inventory Tracking Systems",
        value: "mfg-service-2",
        description:
          "Real-time stock levels across multiple locations, with barcode scanning and automated reorder alerts.",
        imageSrc: "/images/v2/inventory-tracking-systems.webp",
        imageAlt: "Inventory Tracking Systems image",
      },
      {
        title: "Shop Floor Applications",
        value: "mfg-service-3",
        description:
          "Digital work instructions, machine monitoring, production counts, and downtime tracking captured in real-time.",
        imageSrc: "/images/v2/shop-floor-applications.webp",
        imageAlt: "Shop Floor Applications image",
      },
      {
        title: "Quality Control Software",
        value: "mfg-service-4",
        description:
          "Digital inspection checklists, defect tracking, non-conformance management, and statistical process control.",
        imageSrc: "/images/v2/quality-control-software.webp",
        imageAlt: "Quality Control Software image",
      },
      {
        title: "Mobile Apps for Production",
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
        value: "mfg-service-6",
        description:
          "Connect machines and operators to capture production data, monitor OEE, and identify bottlenecks.",
        imageSrc: "/images/v2/manufacturing-execution-systems-mes.webp",
        imageAlt: "Manufacturing Execution Systems image",
      },
      {
        title: "Custom Web Dashboards",
        value: "mfg-service-7",
        description:
          "Browser-based reporting and management interfaces accessible from any device.",
        imageSrc: "/images/v2/custom-web-dashboards.webp",
        imageAlt: "Custom Web Dashboards image",
      },
      {
        title: "Warehouse Management Solutions",
        value: "mfg-service-8",
        description:
          "Receiving, putaway, picking, and shipping workflows with lot and serial number traceability.",
        imageSrc: "/images/v2/warehouse-management-solutions.webp",
        imageAlt: "Warehouse Management Solutions image",
      },
      {
        title: "Production Planning Tools",
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
      <ServiceHeroSection
        title="Manufacturing Software Development Services"
        description="Custom software for production companies. We build order management systems, inventory tracking, shop floor applications, and integrations that connect your existing tools.."
        buttonText="Start Your App Journey"
        imageSrc="/images/v2/manufacturing-software-development-services.webp"
      />
      <AboutOurExpertise
        title="About Brilworks Manufacturing Solutions"
        description1="We've spent 8 years building software for businesses that make physical products.  We work with SME manufacturers who've outgrown spreadsheets but don't need (or want) a massive enterprise system. Our developers have delivered over 120 projects with a 98% success rate. We're rated as top developers because we listen first, then build what actually solves the problem."
      />

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

      <SeeingBelieving />
      <SolutionContactForm
        title="Let's Talk About Your Project"
        description={
          <>
            Tell us which HR processes are eating up your team's time. We'll
            explain what we'd build, how long it would take, and what it would
            cost. Most conversations start with "our current process is..." and
            we go from there. No pressure, no sales pitch. Just a straight
            discussion about whether custom software makes sense for your
            situation. Contact us to start the conversation. We respond within
            one business day.
          </>
        }
      />
      <HomePageBlogs />
    </>
  );
};

export default ManufaturingSoftwareDevelopmentService;
