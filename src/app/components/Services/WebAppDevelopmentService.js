"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import {
  faAngular,
  faJs,
  faReact,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";
import {
  Check,
  ArrowRight,
  Globe,
  ShieldCheck,
  Star,
  TrendingUp,
  Code2,
  Layers,
  AppWindow,
  Building2,
  Palette,
  Wrench,
} from "lucide-react";
import "../../styles/ServiceLightTheme.css";

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

const IconWebBadge = () => <Globe size={14} aria-hidden="true" />;

const IconShieldWeb = ({ color = "#2f6bff" }) => (
  <ShieldCheck size={18} color={color} strokeWidth={1.8} aria-hidden="true" />
);

const IconGlobe = ({ color = "#2f6bff" }) => (
  <Globe size={18} color={color} strokeWidth={1.8} aria-hidden="true" />
);

const IconStar = ({ color = "#2f6bff" }) => (
  <Star size={18} color={color} strokeWidth={1.8} aria-hidden="true" />
);

const IconChart = ({ color = "#2f6bff" }) => (
  <TrendingUp size={18} color={color} strokeWidth={1.8} aria-hidden="true" />
);

const WEB_TRUST = [
  { icon: <IconShieldWeb />, label: "AWS Consulting Partner" },
  { icon: <IconGlobe />, label: "150+ Web Apps Delivered" },
  { icon: <IconStar />, label: "4.9★ on Clutch & GoodFirms" },
  { icon: <IconChart />, label: "Startups to Fortune 500" },
];

const WEB_HERO_STATS = [
  { value: "150+", label: "Web Apps Delivered" },
  { value: "12wk", label: "MVP to Launch" },
  { value: "4.9★", label: "Avg. Clutch Rating" },
  { value: "98%", label: "Client Satisfaction" },
];

const Honors = dynamic(() => import("../Homepage/Honors"));
const ServicesSection = dynamic(() => import("../Common/ServicesSection"));
const IndustriesWeServe = dynamic(
  () => import("../Homepage/IndustriesWeServe"),
);
const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));
const MultipleCardWithIconBG = dynamic(
  () => import("../Common/MultipleCardWithIconBG"),
);
const TechStackWeWorkWith = dynamic(
  () => import("../Technologies/TechStackWeWorkWith"),
);
const SeeingBelieving = dynamic(() => import("../Homepage/SeeingBelieving"));
const HomePageBlogs = dynamic(() => import("../Homepage/HomePageBlogs"));
const ServicesFAQ = dynamic(() => import("./ServicesFAQ"));

const WebAppDevelopmentService = () => {
  const webAppServices = {
    title: "Our Web Application Development Services",
    servicesList: [
      {
        title: "Custom Web Application Development",
        value: "web-service-1",
        icon: <Code2 size={24} strokeWidth={1.75} />,
        description:
          "We craft bespoke web apps tailored to fit your process. We follow a consultative process to understand your workflow, customer needs, and growth vision before writing a single line of code.",
        imageSrc: "/images/v2/custom-web-application-development.webp",
        imageAlt: "Custom web application development image",
      },
      {
        title: "Frontend and Backend Development",
        value: "web-service-2",
        icon: <Layers size={24} strokeWidth={1.75} />,
        description:
          "We build structured, maintainable systems across both client and server sides. Everything is designed for clarity, consistency, and long-term use, nothing added without purpose.",
        imageSrc: "/images/v2/frontend-and-backend-development.webp",
        imageAlt: "Frontend and backend development image",
      },
      {
        title: "Progressive Web App (PWA) Development",
        value: "web-service-3",
        icon: <AppWindow size={24} strokeWidth={1.75} />,
        description:
          "Give users a native-app-like experience on the web. Our PWA solutions work offline, load instantly, and provide seamless interactions across devices and browsers.",
        imageSrc: "/images/v2/progressive-web-app-pwa-development.webp",
        imageAlt: "PWA development image",
      },
      {
        title: "Enterprise Web Development",
        value: "web-service-4",
        icon: <Building2 size={24} strokeWidth={1.75} />,
        description:
          "For growing organizations and complex ecosystems, we develop enterprise-grade web solutions that scale effortlessly.",
        imageSrc: "/images/v2/enterprise-web-development.webp",
        imageAlt: "Enterprise web development image",
      },
      {
        title: "UI/UX Design for Web Applications",
        value: "web-service-5",
        icon: <Palette size={24} strokeWidth={1.75} />,
        description:
          "Design drives engagement. Our UI/UX designers create intuitive, user-friendly interfaces that enhance usability and customer satisfaction.",
        imageSrc: "/images/v2/ui-ux-design-for-web-applications.webp",
        imageAlt: "UI/UX web design image",
      },
      {
        title: "Web App Maintenance & Optimization",
        value: "web-service-6",
        icon: <Wrench size={24} strokeWidth={1.75} />,
        description:
          "We provide ongoing support, performance monitoring, updates, and enhancements to ensure your web application runs smoothly and adapts to changing user needs.",
        imageSrc: "/images/v2/web-app-maintenance-optimization.webp",
        imageAlt: "Web app maintenance and optimization image",
      },
    ],
  };

  const whyChooseUsDevelopmentData = {
    title: "Why Choose Us for Your Web Application Development?",
    benefits: [
      {
        title: "Full-Cycle Development",
        icon: "/images/v2/fi_8099605.svg",
        description:
          "We handle everything from ideation and design to development and post-launch support. You get a dedicated partner throughout your digital journey.",
      },
      {
        title: "Scalable Architecture",
        icon: "/images/v2/fi_8109512.svg",
        description:
          "We architect web apps to grow with your business. From MVP to enterprise-grade scale, our solutions remain adaptable and future-proof.",
      },
      {
        title: "Expertise in Modern Tech",
        icon: "/images/v2/fi_780477.svg",
        description:
          "We bring deep expertise in modern frameworks and tools including ReactJS, Node.js, and cloud platforms, ensuring your web app is built on reliable, battle-tested technology.",
      },
      {
        title: "Agile & Transparent Process",
        icon: "/images/v2/fi_2907826.svg",
        description:
          "We follow agile methodologies with weekly sprints, demos, and continuous feedback cycles. You stay in control while we stay accountable.",
      },
      {
        title: "Focus on Security & Performance",
        icon: "/images/v2/security.svg",
        description:
          "Our development practices include robust data protection, authentication systems, and performance optimization from the ground up.",
      },
      {
        title: "On-Time, On-Budget Delivery",
        icon: "/images/v2/on-timeicon.svg",
        description:
          "With clear timelines and proactive communication, we ensure your project progresses without delays or surprises.",
      },
    ],
  };

  const techStackList = [
    {
      title: "Frontend",
      value: "frontend",
      items: [
        { label: "ReactJS", icon: faReact, color: "#61DBFB" },
        { label: "AngularJS", icon: faAngular, color: "#DD0031" },
        { label: "VueJS", icon: faVuejs, color: "#42B883" },
        { label: "JavaScript", icon: faJs, color: "#F7DF1E" },
      ],
    },
    {
      title: "Backend",
      value: "backend",
      items: [
        { label: "Java", iconifyIcon: "/images/java.svg" },
        { label: "NodeJS", iconifyIcon: "/images/node-icon.svg" },
        { label: "Python", iconifyIcon: "/images/python.svg" },
        { label: ".Net", iconifyIcon: "/images/dot-net.svg" },
      ],
    },
    {
      title: "Mobile",
      value: "mobile",
      items: [
        { label: "Android", iconifyIcon: "/images/android-ui.svg" },
        { label: "React Native", icon: faReact, color: "#61DBFB" },
        { label: "Flutter", iconifyIcon: "/images/flutter.svg" },
      ],
    },
    {
      title: "Cloud",
      value: "cloud",
      items: [
        { label: "AWS", iconifyIcon: "/images/aws.svg" },
        { label: "Azure", iconifyIcon: "/images/azure.svg" },
        {
          label: "Google Cloud Platform",
          iconifyIcon: "/images/v2/google-cloud-icon.svg",
        },
      ],
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
          <div
            className="grid gap-10 lg:gap-[60px] items-center"
            style={{ gridTemplateColumns: "1fr" }}
          >
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
                  <IconWebBadge /> Web App Development Services
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
                  Build Web Apps That{" "}
                  <span style={{ color: "#2f6bff" }}>
                    Scale With Your Business
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
                  We design, build, and ship scalable, high-performance web
                  applications for startups to enterprises. From custom
                  platforms to enterprise-grade systems, end-to-end development
                  with robust backends and intuitive front-end design.
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
                    href="#service-section"
                    className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:bg-black/5"
                    style={{
                      background: "transparent",
                      color: "#0b1e33",
                      border: "1px solid #e4eaf1",
                      padding: "16px 32px",
                      fontSize: 16,
                    }}
                  >
                    See What We Build
                  </Link>
                </div>
                <div
                  className="flex flex-wrap gap-[18px]"
                  style={{ color: "#6b7a8a", fontSize: 14 }}
                >
                  {[
                    "Free 30-min web consultation",
                    "48-hour scope & estimate",
                    "Full-stack coverage",
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
                  {WEB_HERO_STATS.map((s) => (
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
            {WEB_TRUST.map((t) => (
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
      <ServicesSection
        bgClass="bg-themeLight"
        sectionId="service-section"
        serviceData={webAppServices}
      />
      <MultipleCardWithIconBG
        bgClass="bg-sectionBG"
        data={whyChooseUsDevelopmentData}
      />
      <Honors />
      <ClientReviews light />
      <TechStackWeWorkWith active="frontend" techStackList={techStackList} />
      <SeeingBelieving />
      <IndustriesWeServe darkBackground={false} />
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
            Ready to Build Your Web App?
          </h3>
          <p
            className="mb-7"
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: 16,
              lineHeight: 1.7,
            }}
          >
            Build your next high-impact web application with a trusted partner.
            Let&apos;s turn your idea into a responsive, secure, and scalable
            digital experience.
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

export default WebAppDevelopmentService;
