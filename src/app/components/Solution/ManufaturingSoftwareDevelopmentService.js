"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import {
  ShieldCheck,
  Factory,
  BarChart3,
  Wrench,
  Clock,
  DollarSign,
  Users,
  Building2,
  Star,
  Award,
  RefreshCw,
  MessageCircle,
  LifeBuoy,
  ArrowRight,
} from "lucide-react";
import MultipleCardInGrid from "../Common/MultipleCardInGrid";
import SolutionContactForm from "./SolutionContactForm";
import IndustryMidCTA from "./IndustryMidCTA";
import IndustryTrustBar from "./IndustryTrustBar";
import "../../styles/ServiceLightTheme.css";

const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));

const ServicesSection = dynamic(() => import("../Common/ServicesSection"));

const MultipleCardWithIconBG = dynamic(
  () => import("../Common/MultipleCardWithIconBG"),
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
      icon: <Clock size={32} color="#1A5CCC" strokeWidth={1.75} />,
      description:
        "Pay for the hours we work. Good for projects where requirements will evolve as you learn what works.",
    },
    {
      title: "Fixed Cost",
      icon: <DollarSign size={32} color="#1A5CCC" strokeWidth={1.75} />,
      description:
        "One price for defined deliverables. We estimate the work, agree on what you'll get, and deliver it for that budget.",
    },
    {
      title: "Staff Augmentation",
      icon: <Users size={32} color="#1A5CCC" strokeWidth={1.75} />,
      description:
        "Our developers join your team and work your hours using your tools and processes.",
    },
    {
      title: "Dedicated Development Team",
      icon: <Building2 size={32} color="#1A5CCC" strokeWidth={1.75} />,
      description:
        "A full team focused exclusively on your project, including developers, designers, QA testers, and a project manager.",
    },
  ];

  const whyChooseUsDevelopmentData = {
    title: "Why Manufacturers Choose Brilworks",
    benefits: [
      {
        title: "Top-Rated Developers",
        icon: <Star size={28} color="#1A5CCC" strokeWidth={1.75} />,
        description:
          "Our team members consistently earn top ratings for their technical skills and communication.",
      },
      {
        title: "Manufacturing Experience",
        icon: <Award size={28} color="#1A5CCC" strokeWidth={1.75} />,
        description:
          "We've built software for brick manufacturers, seat makers, and other production companies.",
      },
      {
        title: "Agile & Transparent",
        icon: <RefreshCw size={28} color="#1A5CCC" strokeWidth={1.75} />,
        description:
          "You see progress regularly through sprints and working software, not after months of silence.",
      },
      {
        title: "Clear Communication",
        icon: <MessageCircle size={28} color="#1A5CCC" strokeWidth={1.75} />,
        description:
          "We explain technical decisions in plain language without overwhelming you with jargon.",
      },
      {
        title: "Post-Launch Support",
        icon: <LifeBuoy size={28} color="#1A5CCC" strokeWidth={1.75} />,
        description:
          "We provide training, fix bugs, make adjustments, and add features as your needs evolve.",
      },
    ],
  };

  return (
    <>
      {/* HERO */}
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
                Manufacturing Software Development Services
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
                Custom{" "}
                <span style={{ color: "#2f6bff" }}>
                  Manufacturing Software
                </span>{" "}
                Development
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
                Custom software for production companies. We build order
                management systems, inventory tracking, shop floor
                applications, and integrations that connect your existing
                tools.
              </p>
              <div className="flex flex-wrap gap-3.5 my-10">
                <Link
                  href="#section-contact-form"
                  className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:opacity-90 hover:-translate-y-0.5"
                  style={{
                    background: "#2f6bff",
                    color: "#fff",
                    border: "1px solid #2f6bff",
                    padding: "16px 32px",
                    fontSize: 16,
                  }}
                >
                  Start Your App Journey <ArrowRight size={16} strokeWidth={2} />
                </Link>
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
                  See Our Work
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                {heroStats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl transition-all svc-stat-card"
                    style={{ padding: "28px 24px" }}
                  >
                    <div
                      className="font-extrabold leading-none mb-2"
                      style={{
                        color: "#2f6bff",
                        fontSize: "clamp(32px, 3vw, 42px)",
                        letterSpacing: "-1px",
                      }}
                    >
                      {s.value}
                    </div>
                    <div
                      style={{
                        color: "#6b7a8a",
                        fontSize: 13,
                        fontWeight: 500,
                        lineHeight: 1.4,
                      }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
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
        light
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
      <ClientReviews light />
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
        bgClassName="svc-mid-cta-bg"
      />
      <HomePageBlogs />
    </>
  );
};

export default ManufaturingSoftwareDevelopmentService;
