"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import CTASection from "../Common/CTASection";
import {
  faAngular,
  faJs,
  faReact,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";

const IconCheck = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconArrowRight = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12H19M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconWebBadge = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="10" stroke="#00b4d8" strokeWidth="1.5" />
    <path d="M2 12H22M12 2C9.5 5.5 8 8.5 8 12s1.5 6.5 4 10M12 2c2.5 3.5 4 6.5 4 10s-1.5 6.5-4 10" stroke="#00b4d8" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const IconShieldWeb = ({ color = "#017eeb" }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2L4 5V11C4 16 7.5 20.5 12 22C16.5 20.5 20 16 20 11V5L12 2Z" fill={color} opacity="0.15" />
    <path d="M12 2L4 5V11C4 16 7.5 20.5 12 22C16.5 20.5 20 16 20 11V5L12 2Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M9 12L11 14L15 10" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconGlobe = ({ color = "#017eeb" }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="10" fill={color} opacity="0.15" />
    <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1.8" />
    <path d="M2 12H22M12 2C9.5 5.5 8 8.5 8 12s1.5 6.5 4 10M12 2c2.5 3.5 4 6.5 4 10s-1.5 6.5-4 10" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const IconStar = ({ color = "#017eeb" }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2L15 8.5L22 9.3L17 14L18.2 21L12 17.7L5.8 21L7 14L2 9.3L9 8.5L12 2Z" fill={color} opacity="0.15" />
    <path d="M12 2L15 8.5L22 9.3L17 14L18.2 21L12 17.7L5.8 21L7 14L2 9.3L9 8.5L12 2Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
  </svg>
);

const IconChart = ({ color = "#017eeb" }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M3 3H21V21H3V3Z" fill={color} opacity="0.15" />
    <path d="M3 3H21V21H3V3Z" stroke={color} strokeWidth="1.8" />
    <path d="M7 14L10 11L13 14L17 10" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const heroBg = {
  background:
    "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(26,92,204,0.18) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 20% 80%, rgba(0,180,216,0.08) 0%, transparent 60%), linear-gradient(160deg, #0d0f1a 0%, #111428 50%, #0a0c1e 100%)",
};
const heroGridOverlay = {
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
  backgroundSize: "60px 60px",
  opacity: 0.06,
};
const gradientTextStyle = {
  backgroundImage: "linear-gradient(to right, #017eeb, #00ffff)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  color: "transparent",
};
const statValueStyle = {
  backgroundImage: "linear-gradient(to right, #017eeb, #00dbd3)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  color: "transparent",
};

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
        description:
          "We craft bespoke web apps tailored to fit your process. We follow a consultative process to understand your workflow, customer needs, and growth vision before writing a single line of code.",
        imageSrc: "/images/v2/custom-web-application-development.webp",
        imageAlt: "Custom web application development image",
      },
      {
        title: "Frontend and Backend Development",
        value: "web-service-2",
        description:
          "We build structured, maintainable systems across both client and server sides. Everything is designed for clarity, consistency, and long-term use, nothing added without purpose.",
        imageSrc: "/images/v2/frontend-and-backend-development.webp",
        imageAlt: "Frontend and backend development image",
      },
      {
        title: "Progressive Web App (PWA) Development",
        value: "web-service-3",
        description:
          "Give users a native-app-like experience on the web. Our PWA solutions work offline, load instantly, and provide seamless interactions across devices and browsers.",
        imageSrc: "/images/v2/progressive-web-app-pwa-development.webp",
        imageAlt: "PWA development image",
      },
      {
        title: "Enterprise Web Development",
        value: "web-service-4",
        description:
          "For growing organizations and complex ecosystems, we develop enterprise-grade web solutions that scale effortlessly.",
        imageSrc: "/images/v2/enterprise-web-development.webp",
        imageAlt: "Enterprise web development image",
      },
      {
        title: "UI/UX Design for Web Applications",
        value: "web-service-5",
        description:
          "Design drives engagement. Our UI/UX designers create intuitive, user-friendly interfaces that enhance usability and customer satisfaction.",
        imageSrc: "/images/v2/ui-ux-design-for-web-applications.webp",
        imageAlt: "UI/UX web design image",
      },
      {
        title: "Web App Maintenance & Optimization",
        value: "web-service-6",
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
      <section className="relative overflow-hidden" style={{ padding: "120px 0 80px" }}>
        <div className="absolute inset-0 -z-10" style={heroBg} />
        <div className="absolute inset-0 pointer-events-none" style={{ ...heroGridOverlay, zIndex: -1 }} />
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="grid gap-10 lg:gap-[60px] items-center" style={{ gridTemplateColumns: "1fr" }}>
            <div className="lg:grid" style={{ gridTemplateColumns: "1.1fr 0.9fr", display: "grid", gap: "60px", alignItems: "center" }}>
              <div>
                <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-6 text-[12px] font-semibold uppercase"
                  style={{ background: "rgba(26,92,204,0.15)", border: "1px solid rgba(26,92,204,0.3)", color: "#00b4d8", letterSpacing: "0.1em" }}>
                  <IconWebBadge /> Web App Development Services
                </span>
                <h1 className="font-extrabold mb-5 text-white" style={{ fontSize: "clamp(34px, 4vw, 54px)", letterSpacing: "-1.5px", lineHeight: 1.1 }}>
                  Build Web Apps That <span style={gradientTextStyle}>Scale With Your Business</span>
                </h1>
                <p className="mb-8" style={{ fontSize: 18, lineHeight: 1.7, color: "rgba(255,255,255,0.72)", maxWidth: 580 }}>
                  We design, build, and ship scalable, high-performance web applications for startups to enterprises. From custom platforms to enterprise-grade systems — end-to-end development with robust backends and intuitive front-end design.
                </p>
                <div className="flex flex-wrap gap-3.5 my-10">
                  <Link href="#contact"
                    className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all"
                    style={{ background: "#017eeb", color: "#fff", border: "1px solid #017eeb", padding: "16px 32px", fontSize: 16 }}>
                    Get Free Consultation <IconArrowRight />
                  </Link>
                  <Link href="#service-section"
                    className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:bg-white/10"
                    style={{ background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.3)", padding: "16px 32px", fontSize: 16 }}>
                    See What We Build
                  </Link>
                </div>
                <div className="flex flex-wrap gap-[18px]" style={{ color: "rgba(255,255,255,0.65)", fontSize: 14 }}>
                  {["Free 30-min web consultation", "48-hour scope & estimate", "Full-stack coverage"].map((t) => (
                    <span key={t} className="inline-flex items-center gap-2" style={{ color: "rgba(255,255,255,0.65)" }}>
                      <span style={{ color: "#00dbd3" }}><IconCheck /></span>{t}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className="grid grid-cols-2 gap-4">
                  {WEB_HERO_STATS.map((s) => (
                    <div key={s.label} className="rounded-2xl transition-all"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", padding: "28px 24px", backdropFilter: "blur(10px)" }}>
                      <div className="font-extrabold leading-none mb-2" style={{ ...statValueStyle, fontSize: "clamp(32px, 3vw, 42px)", letterSpacing: "-1px" }}>{s.value}</div>
                      <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 13, fontWeight: 500, lineHeight: 1.4 }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section aria-label="Trust indicators" style={{ background: "#fafafa", borderBottom: "1px solid #e5e7eb", padding: "28px 0" }}>
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="flex flex-wrap items-center justify-center" style={{ gap: "12px 40px" }}>
            {WEB_TRUST.map((t) => (
              <div key={t.label} className="inline-flex items-center gap-2 whitespace-nowrap" style={{ fontSize: 13, fontWeight: 600, color: "#212121" }}>
                {t.icon}{t.label}
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
      <ClientReviews />
      <TechStackWeWorkWith active="frontend" techStackList={techStackList} />
      <SeeingBelieving />
      <IndustriesWeServe darkBackground={false} />
      <HomePageBlogs />
      <CTASection
        descriptionClass="md:w-4/5"
        title="Build your next high-impact web application with a trusted partner. Let’s turn your idea into a responsive, secure, and scalable digital experience."
        buttonText="Get a Free Consultation"
      />
      <ServicesFAQ />
    </>
  );
};

export default WebAppDevelopmentService;
