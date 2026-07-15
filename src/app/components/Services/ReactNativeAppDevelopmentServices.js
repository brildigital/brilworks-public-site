"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import GradientFAQAccordion from "../Common/GradientFAQAccordion";
import {
  Check,
  X,
  ArrowRight,
  Star,
  Smartphone,
  ShieldCheck,
  Phone,
  Zap,
  UserCheck,
  TrendingUp,
  Clock,
  Award,
  LayoutDashboard,
  Heart,
  Building2,
  Layers,
  ShoppingCart,
  Truck,
  CheckCircle,
  Radio,
} from "lucide-react";
import "../../styles/ServiceLightTheme.css";
import Image from "next/image";

const SolutionContactForm = dynamic(
  () => import("../Solution/SolutionContactForm"),
);

// ---------- Inline icon primitives ----------
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

const IconStarFilled = ({ size = 16 }) => (
  <Star size={size} fill="currentColor" strokeWidth={0} aria-hidden="true" />
);

const IconRNBadge = () => <Smartphone size={14} aria-hidden="true" />;

const IconShield = ({ color = "#2f6bff", size = 18 }) => (
  <ShieldCheck size={size} color={color} strokeWidth={1.8} aria-hidden="true" />
);

const IconPhoneSingle = ({ color = "#2f6bff", size = 18 }) => (
  <Radio size={size} color={color} aria-hidden="true" />
);

const IconDualPhone = ({ color = "#2f6bff", size = 18 }) => (
  <Smartphone size={size} color={color} aria-hidden="true" />
);

const IconBolt = ({ color = "#2f6bff", size = 18 }) => (
  <Zap size={size} color={color} aria-hidden="true" />
);

// ---------- Data ----------
const TRUST = [
  { icon: <IconShield />, label: "AWS Partner" },
  { icon: <IconPhoneSingle />, label: "80+ RN Apps Live" },
  { icon: <IconDualPhone />, label: "iOS + Android in One Build" },
  { icon: <IconBolt />, label: "60fps Native UX" },
];

const HERO_STATS = [
  { value: "80+", label: "RN Apps Shipped" },
  { value: "95%", label: "Code Reuse iOS + Android" },
  { value: "4.7★", label: "Avg App Store Rating" },
  { value: "98%", label: "Client Satisfaction" },
];

const BENEFITS = [
  {
    title: "Top 3% RN Talent",
    tint: "#ccfbf1",
    body: "You work with developers who've shipped multiple RN apps end-to-end — filtered for clarity, discipline, and mobile fluency.",
    icon: (
      <UserCheck
        size={32}
        color="#0d9488"
        strokeWidth={1.8}
        aria-hidden="true"
      />
    ),
  },
  {
    title: "5-Star Rating",
    tint: "#dbeafe",
    body: "Our rating comes from consistent behaviour: clear communication, steady delivery, and fixing issues before they turn into excuses.",
    icon: (
      <Star size={32} color="#2f6bff" strokeWidth={1.8} aria-hidden="true" />
    ),
  },
  {
    title: "80+ RN Apps Shipped",
    tint: "#d1fae5",
    body: "Enough mileage across stores to understand submission patterns, avoid rejection traps, and ship without surprises.",
    icon: (
      <Smartphone
        size={32}
        color="#10b981"
        strokeWidth={1.8}
        aria-hidden="true"
      />
    ),
  },
  {
    title: "AI-Driven Workflow",
    tint: "#ede9fe",
    body: "We use AI to cut slow review cycles, surface issues earlier, and keep engineering focused on the decisions that actually shape your app.",
    icon: (
      <CheckCircle
        size={32}
        color="#7c3aed"
        strokeWidth={1.8}
        aria-hidden="true"
      />
    ),
  },
  {
    title: "Real 24/7 Availability",
    tint: "#cffafe",
    body: "Overlapping time zones mean your app project doesn't sit idle — progress continues even when you're offline.",
    icon: (
      <Clock size={32} color="#0891b2" strokeWidth={1.8} aria-hidden="true" />
    ),
  },
  {
    title: "Native Feel, Guaranteed",
    tint: "#e8f0fd",
    body: "We follow platform guidelines and use the right native modules so iOS users feel at home in iOS, and Android users feel at home in Android.",
    icon: <IconShield color="#2f6bff" size={32} />,
  },
];

const TESTIMONIALS = [
  {
    initials: "LB",
    name: "Liz Bullen",
    role: "Founder, Lyfecoin",
    quote:
      "Brilworks shipped our React Native MVP on both stores in under 4 weeks. One codebase, zero dropped frames, and a design my iOS users swore was a native build.",
  },
  {
    initials: "DV",
    name: "David Velasquez",
    role: "CEO, Rastrack",
    quote:
      "We were maintaining two native codebases and bleeding engineering hours. Brilworks migrated us to React Native without a single outage. Release velocity doubled overnight.",
  },
  {
    initials: "ED",
    name: "Edwin",
    role: "Founder, Tekstride",
    quote:
      "They profiled our RN app frame-by-frame, rewrote two critical screens with the New Architecture, and cut our crash-free rate issues to near zero. Scaled past 10K daily active users without breaking a sweat.",
  },
];

const HONORS = [
  { label: "AWS Partner (Advanced Tier)", icon: <IconShield /> },
  {
    label: "Clutch Global 2025",
    icon: (
      <Star size={20} color="#2f6bff" strokeWidth={1.8} aria-hidden="true" />
    ),
  },
  {
    label: "GoodFirms Top Software",
    icon: (
      <Award size={20} color="#2f6bff" strokeWidth={1.8} aria-hidden="true" />
    ),
  },
  {
    label: "Top 10 Agency 2026",
    icon: (
      <LayoutDashboard
        size={20}
        color="#2f6bff"
        strokeWidth={1.8}
        aria-hidden="true"
      />
    ),
  },
  {
    label: "Adalo No-Code Certified",
    icon: (
      <Star size={20} color="#2f6bff" strokeWidth={1.8} aria-hidden="true" />
    ),
  },
];

const INDUSTRIES = [
  {
    label: "Healthcare",
    href: "/industry/healthcare-software-development/",
    icon: (
      <Heart size={32} color="#ef4444" strokeWidth={1.8} aria-hidden="true" />
    ),
  },
  {
    label: "Fintech",
    href: "/industry/fintech-software-development/",
    icon: (
      <Building2
        size={32}
        color="#2f6bff"
        strokeWidth={1.8}
        aria-hidden="true"
      />
    ),
  },
  {
    label: "EdTech",
    href: "/industry/edtech-software-development/",
    icon: (
      <Layers size={32} color="#4f46e5" strokeWidth={1.8} aria-hidden="true" />
    ),
  },
  {
    label: "E-Commerce",
    href: "/industry/e-commerce-app-development/",
    icon: (
      <ShoppingCart
        size={32}
        color="#10b981"
        strokeWidth={1.8}
        aria-hidden="true"
      />
    ),
  },
  {
    label: "SaaS",
    href: "#",
    icon: (
      <LayoutDashboard
        size={32}
        color="#7c3aed"
        strokeWidth={1.8}
        aria-hidden="true"
      />
    ),
  },
  {
    label: "Logistics",
    href: "/industry/fleet-management-software-development/",
    icon: (
      <Truck size={32} color="#0891b2" strokeWidth={1.8} aria-hidden="true" />
    ),
  },
];

const FAQ = [
  {
    q: "Is React Native suitable for my mobile app idea?",
    a: "Most business applications work well with React Native. If your idea relies heavily on advanced hardware or complex animations, we give you honest guidance on whether React Native or native code fits better.",
  },
  {
    q: "Will the app look and feel like a native application?",
    a: "Yes. We follow platform guidelines and use the right native modules so the experience feels smooth and aligned with iOS and Android expectations — gestures, haptics, navigation patterns, and 60fps interactions.",
  },
  {
    q: "Can React Native scale for large user bases?",
    a: "Yes. With the right architecture, backend setup, and optimization strategy, React Native supports apps at scale. We've shipped RN apps running with tens of thousands of daily active users with no performance regressions.",
  },
  {
    q: "Do you support both iOS and Android app store submissions?",
    a: "We handle the full submission process, including builds, configuration, metadata, screenshots, compliance reviews, and any reviewer responses. You keep developer account ownership throughout.",
  },
  {
    q: "Can you work with an existing React Native codebase?",
    a: "Yes. We can take over existing projects, run a technical audit, and stabilize or extend the app. Most takeovers start with a 1-2 week audit followed by a clear stabilization roadmap.",
  },
  {
    q: "What if I need a native module React Native doesn't support?",
    a: "We write custom native modules in Swift / Kotlin and bridge them into your RN app. Our team has built native integrations for Bluetooth, camera pipelines, biometrics, AR, and hardware SDKs.",
  },
  {
    q: "How long does a React Native MVP take?",
    a: "Most RN MVPs ship in 8-16 weeks on both stores. Timeline depends on scope, integrations, and design complexity. We share a detailed estimate within 48 hours of your first call.",
  },
];

const SERVICES = [
  {
    title: "End-to-End App Development",
    body: "We handle the complete journey. Discovery, UI and UX, development, integrations, testing, deployment, and post-launch support. The result is a stable React Native app designed for growth.",
    features: [
      "Discovery, UX, development & QA",
      "App Store & Play Store submission",
      "Post-launch monitoring & iteration",
    ],
    image: "/images/v2/end_to_end_app.webp",
    imageBg: "linear-gradient(135deg, #f0fdfa 0%, #99f6e4 100%)",
    padMockup: false,
    reverse: false,
  },
  {
    title: "Custom React Native Features",
    body: "From chat and live tracking to in-app purchases, notifications, and media handling, we build features that require more than basic boilerplate.",
    features: [
      "Real-time chat, video & live tracking",
      "In-app purchases & subscriptions",
      "Push notifications & deep linking",
    ],
    image: "/images/v2/cutom_react_native.webp",
    imageBg: "linear-gradient(135deg, #ecfeff 0%, #a5f3fc 100%)",
    padMockup: false,
    reverse: true,
  },
  {
    title: "React Native Optimization",
    body: "If you already have an app but it feels slow, outdated, or inconsistent, we audit the codebase, fix performance issues, and bring it up to a modern standard.",
    features: [
      "Startup time & 60fps tuning",
      "Bundle size & memory profiling",
      "New Architecture (Fabric + TurboModules)",
    ],
    image: "/images/v2/react_native_optimization.webp",
    imageBg: "linear-gradient(135deg, #ecfdf5 0%, #bbf7d0 100%)",
    padMockup: true,
    reverse: false,
  },
  {
    title: "React Native Migration",
    body: "We help teams move from legacy stacks or outdated frameworks into a React Native environment that's easier to maintain and scale.",
    features: [
      "Native iOS / Android to RN migration",
      "Cordova / Ionic / Xamarin modernization",
      "Incremental migration with zero downtime",
    ],
    image: "/images/v2/react_native_migration.webp",
    imageBg: "linear-gradient(135deg, #f0fdfa 0%, #99f6e4 100%)",
    padMockup: false,
    reverse: true,
  },
  {
    title: "API Integration",
    body: "Our team integrates your backend systems, payment gateways, analytics, auth flows, and third-party services into a stable React Native architecture.",
    features: [
      "REST, GraphQL & WebSocket clients",
      "Stripe, Firebase, Auth0, OneSignal",
      "Offline-first & sync architecture",
    ],
    image: "/images/v2/api_integration.webp",
    imageBg: "linear-gradient(135deg, #f5f3ff 0%, #ddd6fe 100%)",
    padMockup: true,
    reverse: false,
  },
  {
    title: "Ongoing Maintenance and Support",
    body: "We update OS compatibility, patch issues, maintain libraries, and help you iterate on new features without disrupting live users.",
    features: [
      "iOS & Android OS version support",
      "OTA updates via CodePush / EAS",
      "Crash monitoring & library upgrades",
    ],
    image: "/images/v2/ongoing_maintenance.webp",
    imageBg: "linear-gradient(135deg, #ecfeff 0%, #a5f3fc 100%)",
    padMockup: false,
    reverse: true,
  },
];

// ---------- Page ----------
const ReactNativeAppDevelopmentServices = () => {
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
                  <IconRNBadge /> React Native App Development
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
                  Cross-Platform Apps with Native Feel.{" "}
                  <span style={{ color: "#2f6bff" }}>
                    One Codebase, iOS + Android
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
                  We ship React Native apps that launch on both stores from a
                  single codebase. 80+ RN apps live, 95% code reuse across iOS
                  and Android, and a 4.7 average app store rating, without
                  doubling your engineering spend.
                </p>
                <div className="flex flex-wrap gap-3.5 my-10">
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:opacity-90 hover:-translate-y-0.5"
                    style={{
                      background: "#2f6bff",
                      color: "#fff",
                      border: "1px solid #2f6bff",
                      padding: "16px 32px",
                      fontSize: 16,
                    }}
                  >
                    Start Your App Journey <IconArrowRight />
                  </Link>
                  <Link
                    href="#services"
                    className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:bg-black/5"
                    style={{
                      background: "transparent",
                      color: "#0b1e33",
                      border: "1px solid #e4eaf1",
                      padding: "16px 32px",
                      fontSize: 16,
                    }}
                  >
                    See Our RN Services
                  </Link>
                </div>
                <div
                  className="flex flex-wrap gap-[18px]"
                  style={{ color: "#6b7a8a", fontSize: 14 }}
                >
                  {[
                    "Free 30-min consultation",
                    "48-hour app roadmap",
                    "No commitment",
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
                  {HERO_STATS.map((s) => (
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
            {TRUST.map((t) => (
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

      {/* SERVICES */}
      <section
        id="services"
        className="py-16 md:py-24"
        style={{ background: "#f1f5fb" }}
      >
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="text-center mx-auto mb-14" style={{ maxWidth: 720 }}>
            <span
              className="inline-block mb-4"
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#2f6bff",
              }}
            >
              What We Build
            </span>
            <h2
              className="font-extrabold"
              style={{
                fontSize: "clamp(28px, 3.2vw, 42px)",
                letterSpacing: "-1px",
                lineHeight: 1.15,
                color: "#0d0f1a",
              }}
            >
              Our React Native Development Services
            </h2>
            <p
              className="mt-4"
              style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}
            >
              End-to-end React Native engineering — from first prototype to App
              Store and Google Play, and everything after.
            </p>
          </div>

          {SERVICES.map((svc) => (
            <div
              key={svc.title}
              className="grid items-center gap-8 lg:gap-[60px] py-10 lg:py-12"
              style={{ gridTemplateColumns: "1fr" }}
            >
              <div
                className={`grid items-center gap-8 lg:gap-[60px] grid-cols-1 lg:grid-cols-2 ${svc.reverse ? "lg:[direction:rtl]" : ""}`}
              >
                <div
                  className={`${svc.reverse ? "lg:[direction:ltr]" : ""}`}
                  style={{ direction: "ltr" }}
                >
                  <div className="w-full overflow-hidden rounded-2xl relative">
                    <Image
                      src={svc.image}
                      alt={svc.title}
                      width={200}
                      height={120}
                      className="object-cover"
                    />
                  </div>
                </div>
                <div
                  className={`${svc.reverse ? "lg:[direction:ltr]" : ""}`}
                  style={{ direction: "ltr" }}
                >
                  <h3
                    className="font-bold mb-4"
                    style={{
                      fontSize: "clamp(22px, 2.4vw, 28px)",
                      letterSpacing: "-0.3px",
                      lineHeight: 1.3,
                      color: "#0d0f1a",
                    }}
                  >
                    {svc.title}
                  </h3>
                  <p
                    className="mb-5"
                    style={{ fontSize: 16, lineHeight: 1.7, color: "#6b7280" }}
                  >
                    {svc.body}
                  </p>
                  <ul className="list-none">
                    {svc.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2.5 mb-2.5"
                        style={{ fontSize: 14, color: "#212121" }}
                      >
                        <span
                          style={{
                            color: "#2f6bff",
                            flexShrink: 0,
                            marginTop: 2,
                          }}
                        >
                          <IconCheck />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MID CTA */}
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
            Ready to Ship Your App on Both Stores?
          </h3>
          <p
            className="mb-7"
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: 16,
              lineHeight: 1.7,
            }}
          >
            Get a free 30-minute consultation with our React Native team. We'll
            review your idea, map a cross-platform roadmap, and estimate your
            timeline, no commitment.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:!bg-[#0b1e33] hover:!text-white hover:!border-[#0b1e33] mt-5"
            style={{
              background: "#fff",
              color: "#2f6bff",
              border: "1px solid #fff",
              padding: "16px 32px",
              fontSize: 16,
            }}
          >
            Start My App Project
          </Link>
        </div>
      </section>

      {/* WHY BRILWORKS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="text-center mx-auto mb-14" style={{ maxWidth: 720 }}>
            <span
              className="inline-block mb-4"
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#2f6bff",
              }}
            >
              Why Brilworks
            </span>
            <h2
              className="font-extrabold"
              style={{
                fontSize: "clamp(28px, 3.2vw, 42px)",
                letterSpacing: "-1px",
                lineHeight: 1.15,
                color: "#0d0f1a",
              }}
            >
              Why Teams Choose Brilworks for React Native
            </h2>
            <p
              className="mt-4"
              style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}
            >
              We don't just write cross-platform code — we partner with you to
              make the hard mobile decisions and ship faster on both stores.
            </p>
          </div>
          <div
            className="grid gap-6"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            }}
          >
            {BENEFITS.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl transition-all hover:-translate-y-0.5"
                style={{
                  background: "#fff",
                  border: "1px solid #e5e7eb",
                  padding: "32px 28px",
                }}
              >
                <div
                  className="rounded-[14px] flex items-center justify-center mb-5"
                  style={{ width: 64, height: 64, background: b.tint }}
                >
                  {b.icon}
                </div>
                <h3
                  className="font-bold mb-3"
                  style={{ fontSize: 18, color: "#0d0f1a" }}
                >
                  {b.title}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "#6b7280" }}>
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative overflow-hidden py-16 md:py-24 svc-dark-section-bg">
        <div
          className="relative mx-auto px-5 md:px-10"
          style={{ maxWidth: 1280, zIndex: 1 }}
        >
          <div className="text-center mx-auto mb-14" style={{ maxWidth: 720 }}>
            <span
              className="inline-block mb-4"
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#2f6bff",
              }}
            >
              Client Stories
            </span>
            <h2
              className="font-extrabold"
              style={{
                fontSize: "clamp(28px, 3.2vw, 42px)",
                letterSpacing: "-1px",
                lineHeight: 1.15,
                color: "#0b1e33",
              }}
            >
              What Mobile Leaders Say About Us
            </h2>
            <p
              className="mt-4"
              style={{ fontSize: 17, lineHeight: 1.7, color: "#566678" }}
            >
              Real outcomes from founders and mobile leads shipping
              cross-platform apps with our team.
            </p>
          </div>
          <div
            className="grid gap-6"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            }}
          >
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl"
                style={{
                  background: "#ffffff",
                  border: "1px solid #e4eaf1",
                  padding: "32px 28px",
                  boxShadow: "0 1px 2px rgba(11, 30, 51, 0.05)",
                }}
              >
                <div className="flex gap-0.5 mb-4" style={{ color: "#facc15" }}>
                  {[0, 1, 2, 3, 4].map((i) => (
                    <IconStarFilled key={i} />
                  ))}
                </div>
                <p
                  className="mb-6"
                  style={{ color: "#0b1e33", fontSize: 15, lineHeight: 1.7 }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="rounded-full flex items-center justify-center font-bold text-white"
                    style={{
                      width: 44,
                      height: 44,
                      background: "linear-gradient(135deg, #2f6bff, #1e4fd6)",
                      fontSize: 16,
                    }}
                  >
                    {t.initials}
                  </div>
                  <div className="flex flex-col">
                    <span
                      className="font-semibold"
                      style={{ fontSize: 14, color: "#0b1e33" }}
                    >
                      {t.name}
                    </span>
                    <span style={{ color: "#6b7a8a", fontSize: 12 }}>
                      {t.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HONORS */}
      <section className="py-16" style={{ background: "#f1f5fb" }}>
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div
            className="text-center mx-auto"
            style={{ maxWidth: 720, marginBottom: 32 }}
          >
            <span
              className="inline-block mb-4"
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#2f6bff",
              }}
            >
              Recognized By
            </span>
            <h2
              className="font-extrabold"
              style={{
                fontSize: "clamp(22px, 2.4vw, 30px)",
                letterSpacing: "-1px",
                lineHeight: 1.15,
                color: "#0d0f1a",
              }}
            >
              Trusted &amp; Awarded by Industry Leaders
            </h2>
          </div>
          <div
            className="flex flex-wrap items-center justify-center"
            style={{ gap: "32px 56px", opacity: 0.85 }}
          >
            {HONORS.map((h) => (
              <div
                key={h.label}
                className="flex items-center gap-2.5"
                style={{ color: "#6b7280", fontWeight: 600, fontSize: 14 }}
              >
                {h.icon}
                {h.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="text-center mx-auto mb-14" style={{ maxWidth: 720 }}>
            <span
              className="inline-block mb-4"
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#2f6bff",
              }}
            >
              Industries We Serve
            </span>
            <h2
              className="font-extrabold"
              style={{
                fontSize: "clamp(28px, 3.2vw, 42px)",
                letterSpacing: "-1px",
                lineHeight: 1.15,
                color: "#0d0f1a",
              }}
            >
              Mobile-Ready Expertise Across Verticals
            </h2>
            <p
              className="mt-4"
              style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}
            >
              We&apos;ve shipped React Native apps into regulated, high-volume,
              and consumer-heavy categories.
            </p>
          </div>
          <div
            className="grid gap-4"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            }}
          >
            {INDUSTRIES.map((ind) => (
              <Link
                key={ind.label}
                href={ind.href}
                className="text-center transition-all hover:-translate-y-0.5"
                style={{
                  background: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: 14,
                  padding: "24px 16px",
                  textDecoration: "none",
                }}
              >
                <div className="mx-auto mb-3 flex items-center justify-center">
                  {ind.icon}
                </div>
                <span
                  style={{ fontSize: 13, fontWeight: 600, color: "#212121" }}
                >
                  {ind.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24" style={{ background: "#f1f5fb" }}>
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="text-center mx-auto mb-14" style={{ maxWidth: 720 }}>
            <span
              className="inline-block mb-4"
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#2f6bff",
              }}
            >
              Common Questions
            </span>
            <h2
              className="font-extrabold"
              style={{
                fontSize: "clamp(28px, 3.2vw, 42px)",
                letterSpacing: "-1px",
                lineHeight: 1.15,
                color: "#0d0f1a",
              }}
            >
              Frequently Asked Questions
            </h2>
            <p
              className="mt-4"
              style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}
            >
              Everything founders and mobile leads typically ask before starting
              a React Native build.
            </p>
          </div>
          <div className="mx-auto" style={{ maxWidth: 860 }}>
            {FAQ.map((item, i) => (
              <GradientFAQAccordion
                key={i + 1}
                id={i + 1}
                question={item.q}
                answer={item.a}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM (preserved component) */}
      <div id="contact">
        <SolutionContactForm
          title="Ready to Ship Your React Native App?"
          description="You're one conversation away from turning your mobile idea into a shipped cross-platform app. Tell us what you're building, we'll show you how React Native can get you there faster."
          messageRequired={false}
          submitLabel="Start My App Journey"
          bgClassName="svc-mid-cta-bg"
          benefits={[
            "Free 30-minute consultation with a senior RN engineer",
            "Cross-platform roadmap within 48 hours",
            "Honest guidance — RN vs native, no forced fit",
            "Response guaranteed within 24 business hours",
            "RN specialists across UI, native modules, and CI/CD",
          ]}
        />
      </div>
    </>
  );
};

export default ReactNativeAppDevelopmentServices;
