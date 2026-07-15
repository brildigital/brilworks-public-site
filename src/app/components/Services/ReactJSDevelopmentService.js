"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  Code2,
  ShieldCheck,
  Star,
  TrendingUp,
  RefreshCw,
  AppWindow,
  Component,
  Gauge,
  Users,
} from "lucide-react";
import "../../styles/ServiceLightTheme.css";

const Honors = dynamic(() => import("../Homepage/Honors"));
const ServicesSection = dynamic(() => import("../Common/ServicesSection"));
const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));
const MultipleCardWithIconBG = dynamic(
  () => import("../Common/MultipleCardWithIconBG"),
);
const MultipleCardInGrid = dynamic(
  () => import("../Common/MultipleCardInGrid"),
);
const HireTeamSolutions = dynamic(
  () => import("../Technologies/HireTeamSolutions"),
);
const SeeingBelieving = dynamic(() => import("../Homepage/SeeingBelieving"));
const HomePageBlogs = dynamic(() => import("../Homepage/HomePageBlogs"));
const ServicesFAQ = dynamic(() => import("./ServicesFAQ"));

const IconCheck = ({ size = 16, className = "" }) => (
  <Check
    size={size}
    className={className}
    strokeWidth={2.2}
    aria-hidden="true"
  />
);

const IconArrowRight = ({ size = 16 }) => (
  <ArrowRight size={size} strokeWidth={2} aria-hidden="true" />
);

const IconReactBadge = () => <Code2 size={14} aria-hidden="true" />;

const REACT_TRUST = [
  {
    icon: <ShieldCheck size={18} color="#2f6bff" strokeWidth={1.8} aria-hidden="true" />,
    label: "Clean, Maintainable Code",
  },
  {
    icon: <Star size={18} color="#2f6bff" strokeWidth={1.8} aria-hidden="true" />,
    label: "4.9★ on Clutch & GoodFirms",
  },
  {
    icon: <TrendingUp size={18} color="#2f6bff" strokeWidth={1.8} aria-hidden="true" />,
    label: "Faster Time to Market",
  },
  {
    icon: <Code2 size={18} color="#2f6bff" strokeWidth={1.8} aria-hidden="true" />,
    label: "100+ Businesses Choose Us",
  },
];

const REACT_HERO_STATS = [
  { value: "100+", label: "Businesses Served" },
  { value: "60%", label: "Avg. Cost Savings" },
  { value: "4.9★", label: "Avg. Clutch Rating" },
  { value: "24/7", label: "Expert Support" },
];

const ReactJSDevelopmentService = () => {
  const reactJSDevelopmentServices = {
    title: "Our ReactJS Development Services",
    desc: "We partner with you across the full spectrum of ReactJS needs:",
    servicesList: [
      {
        title: "Custom React Application Development",
        value: "web-service-1",
        icon: <Code2 size={24} strokeWidth={1.75} />,
        description:
          "Crafting single-page and multi-page React applications with clean state management, component architecture, and optimized rendering to ensure responsiveness and maintainability.",
        imageSrc: "/images/v2/mobile-app-img.webp",
        imageAlt: "Custom reactjs application dev image",
      },
      {
        title: "React Migration & Modernization",
        value: "web-service-2",
        icon: <RefreshCw size={24} strokeWidth={1.75} />,
        description:
          "Updating legacy frontends to modern React stacks (including hooks, functional components, and TypeScript integration) to improve developer velocity and performance.",
        imageSrc: "/images/v2/react-modernization.webp",
        imageAlt: "Reactjs migration and modernization image",
      },
      {
        title: "Progressive Web Apps (PWAs) with React",
        value: "web-service-3",
        icon: <AppWindow size={24} strokeWidth={1.75} />,
        description:
          "Building installable, offline-capable web experiences that rival native apps in speed and engagement.",
        imageSrc: "/images/v2/progressive-web-app-pwa-development.webp",
        imageAlt: "PWA development image",
      },
      {
        title: "Design System Implementation",
        value: "web-service-4",
        icon: <Component size={24} strokeWidth={1.75} />,
        description:
          "Creating reusable, accessible component libraries in React to ensure consistency across products while enabling rapid feature development.",
        imageSrc: "/images/v2/reactjs-dev-design-system.webp",
        imageAlt: "ReactJS design system image",
      },
      {
        title: "React Performance Optimization",
        value: "web-service-5",
        icon: <Gauge size={24} strokeWidth={1.75} />,
        description:
          "Profiling and tuning render patterns, lazy loading, code splitting, memoization, and minimizing bundle size for real-world speed.",
        imageSrc: "/images/v2/reactjs-dev-performance-optimization.webp",
        imageAlt: "ReactJS performance optimization image",
      },
      {
        title: "Team Augmentation / Staff Extension",
        value: "web-service-6",
        icon: <Users size={24} strokeWidth={1.75} />,
        description:
          "Seamlessly embed our experienced ReactJS developers into your existing team to accelerate delivery or fill specific capability gaps.",
        imageSrc: "/images/v2/reactjs-dev-team-augmentation.webp",
        imageAlt: "Reactjs team augmentation image",
      },
    ],
  };

  const whyChooseUsReactJsDevelopmentData = {
    title: "Why Choose Our ReactJS Development Services?",
    description:
      "We make ReactJS projects successful by combining business understanding with strong technical execution.",
    benefits: [
      {
        title: "Built Around Your Goals",
        icon: "/images/v2/fi_8099605.svg",
        description:
          "We design interfaces that match your user journey and business needs, not just templates or boilerplate code.",
      },
      {
        title: "Clean, Maintainable Code",
        icon: "/images/v2/fi_780477.svg",
        description:
          "Our ReactJS developers follow clear component structures, proven state management (Redux, Zustand, or Context API), and thorough testing.",
      },
      {
        title: "Scalable Solution",
        icon: "/images/v2/fi_8109512.svg",
        description:
          "We use modular design, lazy loading, and incremental upgrades so your app can grow without costly rewrites.",
      },
      {
        title: "Flexible Engagement",
        icon: "/images/v2/fi_2907826.svg",
        description:
          "You can hire ReactJS developers to work alongside your team or let us handle the full development.",
      },
      {
        title: "Modern Tech Expertise",
        icon: "/images/v2/security.svg",
        description:
          "From React Router and React Query to TypeScript and backend integration, we use best practices that keep your app fast and reliable.",
      },
    ],
  };

  const why100PlusBusinessChooseUs = [
    {
      title: "No Time Zone Limits",
      description:
        "Our ReactJS developers align with your working hours, whether you’re in London, Sydney, or San Francisco. Your schedule, your pace.",
      icon: "/images/v2/clock.svg",
    },
    {
      title: "Cross-Platform Expertise",
      description:
        "From web apps to mobile-friendly dashboards, we make ReactJS work seamlessly across platforms. Build once, deploy everywhere.",
      icon: "/images/v2/laptop.svg",
    },
    {
      title: "Save Up to 60% on Costs",
      description:
        "Access senior-level React talent at a fraction of in-house costs, no overhead, no hiring hassles.",
      icon: "/images/v2/dollar-black.svg",
    },
    {
      title: "Flexible Engagement Options",
      description:
        "Choose project-based delivery, dedicated ReactJS teams, or on-demand developers, tailored to your needs.",
      icon: "/images/v2/partnership.png",
    },
    {
      title: "24/7 Expert Support",
      description:
        "Round-the-clock assistance from experienced ReactJS professionals to keep your project on track and performing at its best.",
      icon: "/images/v2/24-7-support.svg",
    },
    {
      title: "Faster Time to Market",
      description:
        "We combine speed with precision, shipping high-quality ReactJS code in record time without cutting corners.",
      icon: "/images/v2/growth-midset-img.png",
    },
  ];

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
                <IconReactBadge /> ReactJS Development Services
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
                End-to-End{" "}
                <span style={{ color: "#2f6bff" }}>ReactJS Development</span>{" "}
                Services
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
                Looking for a ReactJS development company that delivers fast,
                scalable, and user-friendly web applications? Our team
                combines deep frontend expertise with engineering discipline
                to deliver responsive, performant, and maintainable React
                solutions.
              </p>
              <div className="flex flex-wrap gap-3.5 my-10">
                <Link
                  href="/contact-us/"
                  className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:opacity-90 hover:-translate-y-0.5"
                  style={{
                    background: "#2f6bff",
                    color: "#fff",
                    border: "1px solid #2f6bff",
                    padding: "16px 32px",
                    fontSize: 16,
                  }}
                >
                  Get Free Consultation <IconArrowRight />
                </Link>
                <Link
                  href="/hire-reactjs-developer/"
                  className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:bg-black/5"
                  style={{
                    background: "transparent",
                    color: "#0b1e33",
                    border: "1px solid #e4eaf1",
                    padding: "16px 32px",
                    fontSize: 16,
                  }}
                >
                  Hire ReactJS Developer
                </Link>
              </div>
              <div
                className="flex flex-wrap gap-[18px]"
                style={{ color: "#6b7a8a", fontSize: 14 }}
              >
                {[
                  "Free 30-min consultation",
                  "48-hour scope & estimate",
                  "Modern React stack (Hooks, TS)",
                ].map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-2"
                    style={{ color: "#6b7a8a" }}
                  >
                    <span style={{ color: "#16a34a" }}>
                      <IconCheck />
                    </span>
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                {REACT_HERO_STATS.map((s) => (
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

      {/* TRUST BAR */}
      <section
        aria-label="Trust indicators"
        style={{
          background: "#ffffff",
          borderBottom: "1px solid #e5e7eb",
          padding: "28px 0",
        }}
      >
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div
            className="flex flex-wrap items-center justify-center"
            style={{ gap: "12px 40px" }}
          >
            {REACT_TRUST.map((t) => (
              <div
                key={t.label}
                className="inline-flex items-center gap-2 whitespace-nowrap"
                style={{ fontSize: 13, fontWeight: 600, color: "#212121" }}
              >
                {t.icon}
                {t.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <MultipleCardInGrid
        title="Why 100+ Businesses Choose Our ReactJS Development Services"
        description="We craft interfaces that keep users coming back. Here’s why clients stick with us."
        cardData={why100PlusBusinessChooseUs}
      />
      <ServicesSection
        bgClass="bg-themeLight"
        sectionId="service-section"
        serviceData={reactJSDevelopmentServices}
      />

      <MultipleCardWithIconBG
        bgClass="bg-sectionBG"
        data={whyChooseUsReactJsDevelopmentData}
      />

      <Honors />
      <ClientReviews light />
      <SeeingBelieving />
      <HireTeamSolutions />
      <HomePageBlogs />
      <ServicesFAQ />

      <section
        className="relative overflow-hidden text-center svc-mid-cta-bg"
        style={{ padding: "56px 0" }}
      >
        <div className="absolute inset-0 pointer-events-none svc-mid-cta-glow" />
        <div
          className="relative mx-auto px-5 md:px-10"
          style={{ maxWidth: 700, zIndex: 1 }}
        >
          <h3
            className="font-extrabold mb-3.5"
            style={{
              fontSize: "clamp(24px, 3vw, 36px)",
              color: "#fff",
              lineHeight: 1.2,
              letterSpacing: "-0.5px",
            }}
          >
            Ready to Build with ReactJS?
          </h3>
          <p
            className="mb-7"
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: 16,
              lineHeight: 1.7,
            }}
          >
            If you’re evaluating modern frontend approaches or looking to
            accelerate with React, let’s talk. Get a free consultation to
            discover how our ReactJS development services can turn your
            interface into a competitive advantage.
          </p>
          <Link
            href="/contact-us/"
            className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:!bg-[#0b1e33] hover:!text-white hover:!border-[#0b1e33] mt-5"
            style={{
              background: "#fff",
              color: "#2f6bff",
              border: "1px solid #fff",
              padding: "16px 32px",
              fontSize: 16,
            }}
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
};

export default ReactJSDevelopmentService;
