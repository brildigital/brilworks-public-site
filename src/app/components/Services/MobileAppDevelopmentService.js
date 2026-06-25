"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  Star,
  Smartphone,
  Shield,
  ShieldCheck,
  TrendingUp,
  Users,
  Cpu,
  Clock,
  Activity,
  Award,
  LayoutGrid,
  ShoppingCart,
  CreditCard,
  Heart,
  GraduationCap,
  Plane,
} from "lucide-react";
import GradientFAQAccordion from "../Common/GradientFAQAccordion";
import Image from "next/image";

const SolutionContactForm = dynamic(() =>
  import("../Solution/SolutionContactForm")
);

// ---------- Style tokens ----------
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
const darkSectionBg = {
  background:
    "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(26,92,204,0.12) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 20% 80%, rgba(0,180,216,0.06) 0%, transparent 60%), #0d0f1a",
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

// ---------- Data ----------
const TRUST = [
  { icon: <Shield size={18} color="#017eeb" />, label: "AWS Consulting Partner" },
  { icon: <Smartphone size={18} color="#017eeb" />, label: "100+ Apps on App Store & Play Store" },
  { icon: <Star size={18} color="#017eeb" />, label: "4.8★ Average App Store Rating" },
  { icon: <TrendingUp size={18} color="#017eeb" />, label: "10M+ Downloads Driven" },
];

const HERO_STATS = [
  { value: "100+", label: "Mobile Apps Shipped" },
  { value: "10M+", label: "App Downloads" },
  { value: "4.8\u2605", label: "Avg. App Store Rating" },
  { value: "98%", label: "Client Satisfaction" },
];

const BENEFITS = [
  {
    title: "Top 3% Mobile Talent",
    tint: "#e8f0fd",
    body: "Senior iOS, Android, React Native, and Flutter engineers filtered for clarity, shipping discipline, and problem-solving — not for time zone convenience.",
    icon: <Users size={32} color="#017eeb" />,
  },
  {
    title: "4.8★ Average Rating",
    tint: "#ede9fe",
    body: "Our apps earn real user love on the App Store and Play Store — thanks to accessibility, onboarding, and post-launch optimization built into every sprint.",
    icon: <Star size={32} color="#4f46e5" />,
  },
  {
    title: "100+ Mobile Projects Delivered",
    tint: "#d1fae5",
    body: "A decade of shipping iOS and Android apps gives us pattern recognition — we anticipate App Store rejection reasons, Android fragmentation, and scaling traps before you hit them.",
    icon: <Smartphone size={32} color="#10b981" />,
  },
  {
    title: "AI-Driven Development",
    tint: "#ccfbf1",
    body: "We use AI to accelerate code review, crash triage, and QA — so engineering cycles stay focused on the product decisions that actually shape user retention.",
    icon: <Cpu size={32} color="#0d9488" />,
  },
  {
    title: "Real 24/7 Availability",
    tint: "#cffafe",
    body: "Overlapping time zones mean your build doesn’t sit idle. Crash in production at 2AM? Someone on our team is already on it before you wake up.",
    icon: <Clock size={32} color="#0891b2" />,
  },
  {
    title: "App Store Compliance, Done Right",
    tint: "#dbeafe",
    body: "Privacy manifests, ATT prompts, data safety disclosures, App Tracking Transparency — we handle the policy landmines so your submission sails through on round one.",
    icon: <ShieldCheck size={32} color="#1e40af" />,
  },
];

const TESTIMONIALS = [
  {
    initials: "DV",
    name: "David Velasquez",
    role: "CEO, Rastrack \u00B7 4+ year partnership",
    quote:
      "Brilworks shipped our iOS and Android app in 14 weeks and both hit 4.9 stars on day one. App Store approval on first submission, Play Store rollout without a single rejection. They get mobile.",
  },
  {
    initials: "LB",
    name: "Liz Bullen",
    role: "Founder, Lyfecoin \u00B7 2+ year partnership",
    quote:
      "Our React Native MVP went from Figma to TestFlight in under 4 weeks. We hit 250K downloads in the first 90 days and 72% day-7 retention. Their sense for what to build first saved us 6 months of rework.",
  },
  {
    initials: "GO",
    name: "Golan",
    role: "Director of R&D, Trackimo \u00B7 3+ year partnership",
    quote:
      "They rebuilt our legacy Objective-C app into Swift + Kotlin natives — crash rate dropped from 3.1% to 0.12%, cold-start time cut in half. The app store reviews flipped from 2.8 to 4.7 inside a quarter.",
  },
];

const HONORS = [
  { label: "AWS Partner — Advanced Tier", icon: <Shield size={20} color="#017eeb" /> },
  { label: "Clutch Global Award Spring 2025", icon: <Star size={20} color="#017eeb" /> },
  { label: "Clutch Global Award Fall 2024", icon: <Star size={20} color="#017eeb" /> },
  { label: "GoodFirms Top Software 2025-26", icon: <Award size={20} color="#017eeb" /> },
  { label: "SelectedFirms Top 10 Agency 2026", icon: <LayoutGrid size={20} color="#017eeb" /> },
];

const INDUSTRIES = [
  {
    label: "E-commerce",
    href: "/industry/e-commerce-app-development/",
    icon: <ShoppingCart size={32} color="#10b981" />,
  },
  {
    label: "FinTech",
    href: "/industry/fintech-software-development/",
    icon: <CreditCard size={32} color="#017eeb" />,
  },
  {
    label: "Healthcare",
    href: "/industry/healthcare-software-development/",
    icon: <Heart size={32} color="#ef4444" />,
  },
  {
    label: "EdTech",
    href: "/industry/edtech-software-development/",
    icon: <GraduationCap size={32} color="#4f46e5" />,
  },
  {
    label: "Travel",
    href: "/contact-us/",
    icon: <Plane size={32} color="#0891b2" />,
  },
  {
    label: "Fitness",
    href: "/fitness-app-development-services/",
    icon: <Activity size={32} color="#0d9488" />,
  },
];

const FAQ = [
  {
    q: "What platforms do you build mobile apps for?",
    a: "We build for both iOS and Android using native (Swift, Kotlin) and cross-platform (React Native, Flutter) technologies. We select the approach that best fits your product requirements, performance needs, and long-term roadmap — and we tell you honestly when one approach will serve you better than the other.",
  },
  {
    q: "How do you decide between native and cross-platform development?",
    a: "We evaluate your feature set, performance expectations, integration needs, and roadmap. Heavy use of device capabilities (ARKit, complex camera, biometrics, background processing) usually points to native. If speed-to-market and shared code economics dominate, React Native or Flutter wins. We document the tradeoffs before you commit.",
  },
  {
    q: "How long does it take to build a mobile app?",
    a: "A focused mobile MVP ships in 12-16 weeks. Mid-complexity apps with multi-role workflows, payments, or real-time sync land in 4-6 months. Enterprise apps with deep integrations run 6-9+ months. You get a precise estimate within 48 hours of our first call.",
  },
  {
    q: "Do you handle UI/UX design for the app?",
    a: "Yes. Our designers ship user flows, wireframes, interactive prototypes, and pixel-perfect screens in Figma — tuned to Apple Human Interface Guidelines and Material 3. Onboarding, empty states, error states, accessibility, and dark mode are in scope from day one.",
  },
  {
    q: "Will you help with App Store and Google Play submission?",
    a: "Yes. We prepare builds, write descriptions, generate screenshots, handle privacy manifests, App Tracking Transparency prompts, and Data Safety forms. We manage the entire App Store Connect and Play Console submission — and handle rejection rebuttals if they happen.",
  },
  {
    q: "Can you upgrade or rewrite an existing app?",
    a: "Yes. We audit your current codebase, surface crash hotspots and architectural debt, and either modernize in place (Objective-C \u2192 Swift, Java \u2192 Kotlin) or rebuild cleanly on a new stack. We've cut crash rates by 20x and cold-start times in half on legacy rebuilds.",
  },
  {
    q: "Do you offer post-launch maintenance and feature updates?",
    a: "Absolutely. We provide ongoing support covering bug fixes, OS compatibility updates (iOS 18, Android 15), performance optimization, crash monitoring via Sentry or Firebase Crashlytics, and continuous feature delivery. Most clients stay with us 12+ months post-launch.",
  },
];

const SERVICES = [
  {
    title: "Native iOS & Android App Development",
    body:
      "Swift and Kotlin builds that feel like they belong on the platform. Full access to cameras, sensors, biometrics, ARKit, widgets, and Haptics — with strict adherence to Apple HIG and Material 3 for App Store approval on the first submission.",
    features: [
      "Swift, SwiftUI, Kotlin, Jetpack Compose",
      "Biometrics, camera, sensors, push, offline",
      "First-submit App Store & Play Store approval",
    ],
    image:"/images/v2/ios_android_app.webp",
    imageBg: "linear-gradient(135deg, #f0f7ff 0%, #e0ecfc 100%)",
    padMockup: false,
    reverse: false,
  },
  {
    title: "Cross-Platform App Development",
    body:
      "Ship iOS and Android from a single codebase with React Native and Flutter — cut your build budget by up to 40% without sacrificing 60fps performance. Shared business logic, platform-tuned UI, and zero compromise on polish.",
    features: [
      "React Native + Flutter expertise",
      "1 codebase \u2192 2 platforms, 40% faster launch",
      "OTA updates via CodePush & Expo EAS",
    ],
    image:"/images/v2/cross_platform_app.webp",
    imageBg: "linear-gradient(135deg, #f5f3ff 0%, #ddd6fe 100%)",
    padMockup: false,
    reverse: true,
  },
  {
    title: "Progressive Web App (PWA) Development",
    body:
      "Skip the app stores when you need speed-to-install. PWAs deliver app-grade experiences — push notifications, offline support, home-screen install — through the browser, while cutting distribution cost to zero.",
    features: [
      "Installable, offline-first, push-enabled",
      "Service workers, manifest, Lighthouse 95+",
      "No App Store friction, instant updates",
    ],
    image:"/images/v2/pwa.webp",
    imageBg: "linear-gradient(135deg, #ecfdf5 0%, #bbf7d0 100%)",
    padMockup: true,
    reverse: false,
  },
  {
    title: "IoT Mobile App Development",
    body:
      "Turn connected devices into polished mobile experiences. We architect BLE, MQTT, and Wi-Fi pairing flows, real-time telemetry dashboards, OTA firmware triggers, and secure remote control — the complete mobile layer for your hardware product.",
    features: [
      "BLE, MQTT, Wi-Fi, Matter, Zigbee",
      "Real-time dashboards & OTA firmware",
      "End-to-end encrypted device pairing",
    ],
    image:"/images/v2/iot_mobile_app.webp",
    imageBg: "linear-gradient(135deg, #f0fdfa 0%, #99f6e4 100%)",
    padMockup: true,
    reverse: true,
  },
  {
    title: "Wearable App Development",
    body:
      "Glanceable, thumb-free experiences for Apple Watch, Wear OS, and fitness bands. We design around short sessions, tiny canvases, and sensor-rich contexts — so users get exactly what they need, right when they raise their wrist.",
    features: [
      "watchOS, Wear OS, HealthKit, Google Fit",
      "Complications, tiles, quick actions",
      "Battery-aware sensor & sync strategy",
    ],
    image:"/images/v2/wearable_app.webp",
    imageBg: "linear-gradient(135deg, #ecfeff 0%, #a5f3fc 100%)",
    padMockup: true,
    reverse: false,
  },
];

// ---------- Page ----------
const MobileAppDevelopmentService = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ padding: "120px 0 80px" }}>
        <div className="absolute inset-0 -z-10" style={heroBg} />
        <div className="absolute inset-0 pointer-events-none" style={{ ...heroGridOverlay, zIndex: -1 }} />
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="grid gap-10 lg:gap-[60px] items-center" style={{ gridTemplateColumns: "1fr" }}>
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-[60px] items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-6 text-[12px] font-semibold uppercase"
                  style={{ background: "rgba(26,92,204,0.15)", border: "1px solid rgba(26,92,204,0.3)", color: "#00b4d8", letterSpacing: "0.1em" }}>
                  <Smartphone size={14} color="#00b4d8" /> Mobile App Development Services
                </span>
                <h1 className="font-extrabold mb-5 text-white" style={{ fontSize: "clamp(34px, 4vw, 54px)", letterSpacing: "-1.5px", lineHeight: 1.1 }}>
                  Launch iOS &amp; Android Apps <span style={gradientTextStyle}>Users Love</span>
                </h1>
                <p className="mb-8" style={{ fontSize: 18, lineHeight: 1.7, color: "rgba(255,255,255,0.72)", maxWidth: 580 }}>
                  We design, build, and ship native and cross-platform mobile apps that hit the App Store and Google Play with velocity. 100+ apps delivered across healthcare, fintech, retail, and enterprise — MVP in 12-16 weeks, production-ready from day one.
                </p>
                <div className="flex flex-wrap gap-3.5 my-10">
                  <Link href="#contact"
                    className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all"
                    style={{ background: "#017eeb", color: "#fff", border: "1px solid #017eeb", padding: "16px 32px", fontSize: 16 }}>
                    Start Your App Journey <ArrowRight size={16} />
                  </Link>
                  <Link href="#services"
                    className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:bg-white/10"
                    style={{ background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.3)", padding: "16px 32px", fontSize: 16 }}>
                    See What We Build
                  </Link>
                </div>
                <div className="flex flex-wrap gap-[18px]" style={{ color: "rgba(255,255,255,0.65)", fontSize: 14 }}>
                  {["Free 30-min app consultation", "48-hour scope & estimate", "iOS + Android coverage"].map((t) => (
                    <span key={t} className="inline-flex items-center gap-2" style={{ color: "rgba(255,255,255,0.65)" }}>
                      <span style={{ color: "#00dbd3" }}><Check size={16} /></span>{t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="grid grid-cols-2 gap-4">
                  {HERO_STATS.map((s) => (
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
            {TRUST.map((t) => (
              <div key={t.label} className="inline-flex items-center gap-2 whitespace-nowrap" style={{ fontSize: 13, fontWeight: 600, color: "#212121" }}>
                {t.icon}{t.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 md:py-24" style={{ background: "#f2f9fe" }}>
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="text-center mx-auto mb-14" style={{ maxWidth: 720 }}>
            <span className="inline-block mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#017eeb" }}>What We Build</span>
            <h2 className="font-extrabold" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0d0f1a" }}>Core Mobile App Development Services</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>Full-lifecycle mobile engineering — from the first Figma frame to a five-star app store listing and every release after.</p>
          </div>

          {SERVICES.map((svc) => (
            <div key={svc.title} className="grid items-center gap-8 lg:gap-[60px] py-10 lg:py-12"
              style={{ gridTemplateColumns: "1fr" }}>
              <div className={`grid items-center gap-8 lg:gap-[60px] grid-cols-1 lg:grid-cols-2 ${svc.reverse ? "lg:[direction:rtl]" : ""}`}>
                <div className={`${svc.reverse ? "lg:[direction:ltr]" : ""}`} style={{ direction: "ltr" }}>
                  <div className="w-full overflow-hidden rounded-2xl relative"
                   >
                   <Image
                      src={svc.image}
                      alt={svc.title}
                      width={200}
                      height={120}
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className={`${svc.reverse ? "lg:[direction:ltr]" : ""}`} style={{ direction: "ltr" }}>
                  <h3 className="font-bold mb-4" style={{ fontSize: "clamp(22px, 2.4vw, 28px)", letterSpacing: "-0.3px", lineHeight: 1.3, color: "#0d0f1a" }}>{svc.title}</h3>
                  <p className="mb-5" style={{ fontSize: 16, lineHeight: 1.7, color: "#6b7280" }}>{svc.body}</p>
                  <ul className="list-none">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 mb-2.5" style={{ fontSize: 14, color: "#212121" }}>
                        <span style={{ color: "#017eeb", flexShrink: 0, marginTop: 2 }}><Check size={16} /></span>{f}
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
      <section className="relative overflow-hidden text-center" style={{ padding: "56px 0", background: "linear-gradient(135deg, #017eeb 0%, #0061c4 100%)" }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(0,219,211,0.2) 0%, transparent 60%)" }} />
        <div className="relative mx-auto px-5 md:px-10" style={{ maxWidth: 700, zIndex: 1 }}>
          <h3 className="font-extrabold mb-3.5" style={{ fontSize: "clamp(24px, 3vw, 36px)", color: "#fff", lineHeight: 1.2, letterSpacing: "-0.5px" }}>Ready to Launch Your Mobile App?</h3>
          <p className="mb-7" style={{ color: "rgba(255,255,255,0.85)", fontSize: 16, lineHeight: 1.7 }}>Get a free 30-minute consultation with a senior mobile engineer. We&apos;ll scope your app, choose native vs. cross-platform, and send you a timeline and quote within 48 hours — no commitment.</p>
          <Link href="#contact"
            className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:!bg-[#0d0f1a] hover:!text-white hover:!border-[#0d0f1a] mt-5"
            style={{ background: "#fff", color: "#017eeb", border: "1px solid #fff", padding: "16px 32px", fontSize: 16 }}>
            Start My App Project
          </Link>
        </div>
      </section>

      {/* WHY BRILWORKS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="text-center mx-auto mb-14" style={{ maxWidth: 720 }}>
            <span className="inline-block mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#017eeb" }}>Why Brilworks</span>
            <h2 className="font-extrabold" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0d0f1a" }}>Mobile Engineers Who Ship Apps Users Actually Keep</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>We don&apos;t just push builds — we partner on every product decision that makes an app retain, monetize, and earn five-star reviews.</p>
          </div>
          <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {BENEFITS.map((b) => (
              <div key={b.title} className="rounded-2xl transition-all hover:-translate-y-0.5"
                style={{ background: "#fff", border: "1px solid #e5e7eb", padding: "32px 28px" }}>
                <div className="rounded-[14px] flex items-center justify-center mb-5" style={{ width: 64, height: 64, background: b.tint }}>
                  {b.icon}
                </div>
                <h3 className="font-bold mb-3" style={{ fontSize: 18, color: "#0d0f1a" }}>{b.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "#6b7280" }}>{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS (dark) */}
      <section className="relative overflow-hidden py-16 md:py-24" style={darkSectionBg}>
        <div className="relative mx-auto px-5 md:px-10" style={{ maxWidth: 1280, zIndex: 1 }}>
          <div className="text-center mx-auto mb-14" style={{ maxWidth: 720 }}>
            <span className="inline-block mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#00b4d8" }}>Client Stories</span>
            <h2 className="font-extrabold text-white" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15 }}>What Mobile Founders &amp; Product Leaders Say</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "rgba(255,255,255,0.62)" }}>Not curated marketing quotes. Real words from real people who shipped real apps with us.</p>
          </div>
          <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="rounded-2xl"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", padding: "32px 28px", backdropFilter: "blur(10px)" }}>
                <div className="flex gap-0.5 mb-4" style={{ color: "#facc15" }}>
                  {[0, 1, 2, 3, 4].map((i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="mb-6" style={{ color: "rgba(255,255,255,0.85)", fontSize: 15, lineHeight: 1.7 }}>&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="rounded-full flex items-center justify-center font-bold text-white"
                    style={{ width: 44, height: 44, background: "linear-gradient(135deg, #017eeb, #00dbd3)", fontSize: 16 }}>
                    {t.initials}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-semibold" style={{ fontSize: 14 }}>{t.name}</span>
                    <span style={{ color: "rgba(255,255,255,0.55)", fontSize: 12 }}>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HONORS */}
      <section className="py-16" style={{ background: "#f8f9ff" }}>
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="text-center mx-auto" style={{ maxWidth: 720, marginBottom: 32 }}>
            <span className="inline-block mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#017eeb" }}>Recognition</span>
            <h2 className="font-extrabold" style={{ fontSize: "clamp(22px, 2.4vw, 30px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0d0f1a" }}>Trusted &amp; Awarded by Industry Leaders</h2>
          </div>
          <div className="flex flex-wrap items-center justify-center" style={{ gap: "32px 56px", opacity: 0.85 }}>
            {HONORS.map((h) => (
              <div key={h.label} className="flex items-center gap-2.5" style={{ color: "#6b7280", fontWeight: 600, fontSize: 14 }}>
                {h.icon}{h.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="text-center mx-auto mb-14" style={{ maxWidth: 720 }}>
            <span className="inline-block mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#017eeb" }}>Industries We Serve</span>
            <h2 className="font-extrabold" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0d0f1a" }}>Mobile Apps Built for Regulated &amp; Fast-Moving Verticals</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>Real case studies, shipped apps, and production code across the sectors that move fastest on mobile.</p>
          </div>
          <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))" }}>
            {INDUSTRIES.map((ind) => (
              <Link key={ind.label} href={ind.href}
                className="text-center transition-all hover:-translate-y-0.5"
                style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, padding: "24px 16px", textDecoration: "none" }}>
                <div className="mx-auto mb-3 flex items-center justify-center">{ind.icon}</div>
                <span style={{ fontSize: 13, fontWeight: 600, color: "#212121" }}>{ind.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24" style={{ background: "#f8f9ff" }}>
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="text-center mx-auto mb-14" style={{ maxWidth: 720 }}>
            <span className="inline-block mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#017eeb" }}>Common Questions</span>
            <h2 className="font-extrabold" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0d0f1a" }}>Frequently Asked Questions</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>Everything founders and product teams typically ask before kicking off a mobile build with us.</p>
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
          title="Ready to Build Your Mobile App?"
          description="You're one conversation away from a mobile app that users actually download, open, and rate five stars. Tell us what you're building — we'll show you how we'd ship it."
          messageRequired={false}
          submitLabel="Start My App Journey"
          benefits={[
            "Free 30-minute consultation with a senior mobile engineer",
            "Detailed app scope, timeline, and quote within 48 hours",
            "Honest native-vs-cross-platform recommendation for your use case",
            "Mutual NDA before any project details are shared",
            "iOS, Android, React Native, Flutter, Swift, Kotlin under one roof",
          ]}
        />
      </div>
    </>
  );
};

export default MobileAppDevelopmentService;
