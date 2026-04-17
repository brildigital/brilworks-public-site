"use client";
import dynamic from "next/dynamic";
import Link from "next/link";

const SolutionContactForm = dynamic(() =>
  import("../Solution/SolutionContactForm")
);

// ---------- Inline icon primitives ----------
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

const IconStarFilled = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2L15 8.5L22 9.3L17 14L18.2 21L12 17.7L5.8 21L7 14L2 9.3L9 8.5L12 2Z" />
  </svg>
);

const IconPhoneBadge = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="6" y="2" width="12" height="20" rx="2" stroke="#00b4d8" strokeWidth="1.5" />
    <path d="M11 18H13" stroke="#00b4d8" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const IconShield = ({ color = "#017eeb" }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2L4 5V11C4 16 7.5 20.5 12 22C16.5 20.5 20 16 20 11V5L12 2Z" fill={color} opacity="0.15" />
    <path d="M12 2L4 5V11C4 16 7.5 20.5 12 22C16.5 20.5 20 16 20 11V5L12 2Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M9 12L11 14L15 10" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconPhone = ({ color = "#017eeb" }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="6" y="2" width="12" height="20" rx="2" fill={color} opacity="0.15" />
    <rect x="6" y="2" width="12" height="20" rx="2" stroke={color} strokeWidth="1.8" />
    <path d="M11 18H13" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const IconStarOutline = ({ color = "#017eeb" }) => (
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
  { icon: <IconShield />, label: "AWS Consulting Partner" },
  { icon: <IconPhone />, label: "100+ Apps on App Store & Play Store" },
  { icon: <IconStarOutline />, label: "4.8\u2605 Average App Store Rating" },
  { icon: <IconChart />, label: "10M+ Downloads Driven" },
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
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="9" cy="8" r="4" fill="#017eeb" opacity="0.15" />
        <path d="M9 12C12.31 12 15 9.31 15 6C15 4.69 14.59 3.47 13.91 2.5M3 21V19C3 16.79 4.79 15 7 15H11C13.21 15 15 16.79 15 19V21" stroke="#017eeb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="8" r="4" stroke="#017eeb" strokeWidth="1.8" />
        <path d="M17 11L19 13L23 9" stroke="#017eeb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "4.8\u2605 Average Rating",
    tint: "#ede9fe",
    body: "Our apps earn real user love on the App Store and Play Store — thanks to accessibility, onboarding, and post-launch optimization built into every sprint.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L15 8.5L22 9.3L17 14L18.2 21L12 17.7L5.8 21L7 14L2 9.3L9 8.5L12 2Z" fill="#4f46e5" opacity="0.15" />
        <path d="M12 2L15 8.5L22 9.3L17 14L18.2 21L12 17.7L5.8 21L7 14L2 9.3L9 8.5L12 2Z" stroke="#4f46e5" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "100+ Mobile Projects Delivered",
    tint: "#d1fae5",
    body: "A decade of shipping iOS and Android apps gives us pattern recognition — we anticipate App Store rejection reasons, Android fragmentation, and scaling traps before you hit them.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="6" y="2" width="12" height="20" rx="2" fill="#10b981" opacity="0.15" />
        <rect x="6" y="2" width="12" height="20" rx="2" stroke="#10b981" strokeWidth="1.8" />
        <path d="M11 18H13" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "AI-Driven Development",
    tint: "#ccfbf1",
    body: "We use AI to accelerate code review, crash triage, and QA — so engineering cycles stay focused on the product decisions that actually shape user retention.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" fill="#0d9488" opacity="0.15" />
        <path d="M12 2A10 10 0 0 1 22 12M12 22A10 10 0 0 1 2 12M12 8V16M8 12H16" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Real 24/7 Availability",
    tint: "#cffafe",
    body: "Overlapping time zones mean your build doesn't sit idle. Crash in production at 2AM? Someone on our team is already on it before you wake up.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" fill="#0891b2" opacity="0.15" />
        <path d="M12 7V12L15 14M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z" stroke="#0891b2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "App Store Compliance, Done Right",
    tint: "#dbeafe",
    body: "Privacy manifests, ATT prompts, data safety disclosures, App Tracking Transparency — we handle the policy landmines so your submission sails through on round one.",
    icon: <IconShield color="#1e40af" />,
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
  { label: "AWS Partner — Advanced Tier", icon: <IconShield /> },
  {
    label: "Clutch Global Award Spring 2025",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L15 8.5L22 9.3L17 14L18.2 21L12 17.7L5.8 21L7 14L2 9.3L9 8.5L12 2Z" stroke="#017eeb" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Clutch Global Award Fall 2024",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L15 8.5L22 9.3L17 14L18.2 21L12 17.7L5.8 21L7 14L2 9.3L9 8.5L12 2Z" stroke="#017eeb" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "GoodFirms Top Software 2025-26",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="8" r="6" stroke="#017eeb" strokeWidth="1.8" />
        <path d="M9 14L7 22L12 19L17 22L15 14" stroke="#017eeb" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "SelectedFirms Top 10 Agency 2026",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 3H21V21H3V3Z" stroke="#017eeb" strokeWidth="1.8" />
        <path d="M9 9H15V15H9V9Z" stroke="#017eeb" strokeWidth="1.8" />
      </svg>
    ),
  },
];

const INDUSTRIES = [
  {
    label: "E-commerce",
    href: "/industry/e-commerce-app-development/",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 3H5L8 16H19L21 7H6" fill="#10b981" opacity="0.15" />
        <path d="M3 3H5L8 16H19L21 7H6M9 20C9 20.55 8.55 21 8 21C7.45 21 7 20.55 7 20C7 19.45 7.45 19 8 19C8.55 19 9 19.45 9 20ZM18 20C18 20.55 17.55 21 17 21C16.45 21 16 20.55 16 20C16 19.45 16.45 19 17 19C17.55 19 18 19.45 18 20Z" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "FinTech",
    href: "/industry/fintech-software-development/",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="6" width="20" height="12" rx="2" fill="#017eeb" opacity="0.15" />
        <rect x="2" y="6" width="20" height="12" rx="2" stroke="#017eeb" strokeWidth="1.8" />
        <path d="M2 10H22" stroke="#017eeb" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    label: "Healthcare",
    href: "/industry/healthcare-software-development/",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 21C12 21 4 14 4 8.5C4 5.5 6.5 3 9.5 3C11 3 12 4 12 4C12 4 13 3 14.5 3C17.5 3 20 5.5 20 8.5C20 14 12 21 12 21Z" fill="#ef4444" opacity="0.15" />
        <path d="M12 21C12 21 4 14 4 8.5C4 5.5 6.5 3 9.5 3C11 3 12 4 12 4C12 4 13 3 14.5 3C17.5 3 20 5.5 20 8.5C20 14 12 21 12 21Z" stroke="#ef4444" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "EdTech",
    href: "/industry/edtech-software-development/",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M2 8L12 3L22 8L12 13L2 8Z" fill="#4f46e5" opacity="0.15" />
        <path d="M2 8L12 3L22 8L12 13L2 8ZM6 10V16C6 16 8 18 12 18C16 18 18 16 18 16V10" stroke="#4f46e5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Travel",
    href: "/industry/travel-app-development/",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2C10.67 2 10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z" fill="#0891b2" opacity="0.15" />
        <path d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2C10.67 2 10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z" stroke="#0891b2" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Fitness",
    href: "/industry/fitness-app-development/",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M6 5V19M18 5V19M2 8V16M22 8V16M6 12H18" fill="#0d9488" opacity="0.15" />
        <path d="M6 5V19M18 5V19M2 8V16M22 8V16M6 12H18" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
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

// ---------- Service Mockups ----------
const MockBar = ({ label }) => (
  <div className="flex items-center gap-1.5 px-3.5 py-2.5" style={{ background: "#f8fafc", borderBottom: "1px solid #eef2f7" }}>
    <span className="inline-block w-2 h-2 rounded-full" style={{ background: "#ef4444" }} />
    <span className="inline-block w-2 h-2 rounded-full" style={{ background: "#facc15" }} />
    <span className="inline-block w-2 h-2 rounded-full" style={{ background: "#10b981" }} />
    <em className="not-italic ml-3 text-[11px] font-semibold" style={{ color: "#94a3b8", letterSpacing: "0.02em" }}>{label}</em>
  </div>
);

// Phone mockup – tinted to a chosen accent color (used for Native iOS/Android)
const MockupPhone = ({ accent = "#017eeb", bg = "linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%)", screenBg = "linear-gradient(160deg, #ffffff 0%, #f0fdfa 100%)", swatches }) => {
  const sw = swatches || [
    "linear-gradient(135deg, #017eeb, #00dbd3)",
    "linear-gradient(135deg, #0d0f1a, #475569)",
    "linear-gradient(135deg, #34c759, #30d158)",
    "linear-gradient(135deg, #ff9500, #ff3b30)",
  ];
  return (
    <div className="flex items-center justify-center gap-[18px] h-full" style={{ background: bg }}>
      <div className="relative p-2" style={{ width: 110, height: 200, background: "#0d0f1a", borderRadius: 18, boxShadow: `0 12px 40px ${accent}40` }}>
        <div className="absolute z-10" style={{ top: 4, left: "50%", transform: "translateX(-50%)", width: 36, height: 4, background: "#0d0f1a", borderRadius: "0 0 6px 6px" }} />
        <div className="h-full rounded-xl overflow-hidden px-2 py-2.5" style={{ background: screenBg }}>
          <div style={{ height: 6, width: "50%", background: accent, borderRadius: 2, marginBottom: 8 }} />
          {[{ w1: "80%", w2: "60%", both: true }, { w1: "70%", w2: "55%", both: true }, { w1: "75%", w2: null, both: false }].map((c, i) => (
            <div key={i} className="bg-white rounded-md p-1.5 mb-1.5" style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
              <div style={{ height: 3, background: "#475569", borderRadius: 1.5, marginBottom: 3, width: "60%" }} />
              <div style={{ height: 3, background: "#cbd5e1", borderRadius: 1.5, marginBottom: 3, width: c.w1 }} />
              {c.both && <div style={{ height: 3, background: "#cbd5e1", borderRadius: 1.5, width: c.w2 }} />}
            </div>
          ))}
          <div className="flex items-center justify-center mt-1.5" style={{ background: accent, height: 18, borderRadius: 4 }}>
            <span style={{ background: "white", height: 4, width: "40%", borderRadius: 1.5 }} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 max-[600px]:hidden">
        {sw.map((g, i) => (
          <div key={i} style={{ width: 38, height: 38, borderRadius: 10, background: g, boxShadow: `0 4px 12px ${accent}26` }} />
        ))}
      </div>
    </div>
  );
};

// Multi-device mockup – laptop + tablet, tinted
const MockupMultiDevice = ({ accent = "#0891b2", accent2 = "#06b6d4", bg = "linear-gradient(135deg, #ecfeff 0%, #cffafe 100%)", screenTint = "#ecfeff" }) => (
  <div className="grid gap-3.5 p-3.5 h-full items-center" style={{ gridTemplateColumns: "2fr 1fr", background: bg }}>
    <div style={{ background: "#0d0f1a", borderRadius: "8px 8px 4px 4px", padding: "6px 6px 0" }}>
      <div className="bg-white p-2" style={{ borderRadius: "4px 4px 0 0", minHeight: 110 }}>
        <div style={{ height: 8, width: "40%", background: accent, borderRadius: 2, marginBottom: 8 }} />
        <div className="grid grid-cols-3 gap-1 mb-2">
          <div style={{ height: 24, borderRadius: 3, background: `linear-gradient(135deg, ${accent}, ${accent2})` }} />
          <div style={{ height: 24, borderRadius: 3, background: `linear-gradient(135deg, ${accent2}, ${accent})` }} />
          <div style={{ height: 24, borderRadius: 3, background: screenTint, border: "1px solid #cffafe" }} />
        </div>
        {["80%", "65%", "75%", "55%"].map((w, i) => (
          <div key={i} style={{ height: 4, background: "#e2e8f0", borderRadius: 1.5, marginBottom: 3, width: w }} />
        ))}
      </div>
      <div style={{ height: 6, background: "#1e293b", borderRadius: "0 0 8px 8px" }} />
    </div>
    <div style={{ background: "#0d0f1a", borderRadius: 10, padding: 5 }}>
      <div className="p-2" style={{ background: `linear-gradient(160deg, white, ${screenTint})`, borderRadius: 6, minHeight: 90 }}>
        <div style={{ height: 5, width: "50%", background: accent, borderRadius: 2, marginBottom: 6 }} />
        <div style={{ height: 3, background: "#cbd5e1", borderRadius: 1.5, marginBottom: 3 }} />
        <div style={{ height: 3, background: "#cbd5e1", borderRadius: 1.5, marginBottom: 3, width: "60%" }} />
        <div style={{ height: 3, background: "#cbd5e1", borderRadius: 1.5, marginBottom: 3 }} />
        <div style={{ height: 12, width: "50%", background: accent, borderRadius: 3, marginTop: 6 }} />
      </div>
    </div>
  </div>
);

// Code + canvas mockup – tinted
const MockupCodeCanvas = ({ canvasBg = "#f0fdf4", cardColors = ["#10b981", "#059669", "#047857"], keyColor = "#86efac" }) => (
  <div className="w-full h-full rounded-xl overflow-hidden flex flex-col bg-white" style={{ boxShadow: "0 8px 24px rgba(13,15,26,0.08)" }}>
    <MockBar label="app.manifest \u00B7 sw.js" />
    <div className="flex-1 grid grid-cols-2">
      <div className="p-3.5" style={{ background: "#0d1117" }}>
        {[
          [["k", 22], ["t", 36]],
          [["x", 8], ["s", 48]],
          [["x", 8], ["v", 18], ["s", 30]],
          [["x", 16], ["k", 30], ["v", 24]],
          [["x", 8], ["t", 42]],
          [["k", 20], ["s", 40]],
          [["x", 24], ["v", 30]],
          [["t", 18], ["s", 36]],
        ].map((line, i) => {
          const colors = { k: keyColor, s: "#86efac", v: "#fbbf24", t: "#67e8f9", x: "#475569" };
          return (
            <div key={i} className="flex gap-1.5 items-center mb-[7px]">
              <b className="text-[9px] font-mono min-w-[14px]" style={{ color: "#94a3b8" }}>{i + 1}</b>
              {line.map(([c, w], j) => (
                <span key={j} className="inline-block rounded-sm" style={{ height: 7, width: w, background: colors[c] }} />
              ))}
            </div>
          );
        })}
      </div>
      <div className="p-3.5" style={{ background: canvasBg }}>
        {cardColors.map((color, i) => (
          <div key={i} className="bg-white rounded-md p-2 mb-2" style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.05)", border: "1px solid #e2e8f0" }}>
            <div style={{ height: 6, width: "60%", background: color, borderRadius: 2, marginBottom: 5 }} />
            <div style={{ height: 4, width: i < 2 ? "80%" : "70%", background: "#cbd5e1", borderRadius: 1.5, marginBottom: 3 }} />
            {i < 2 && <div style={{ height: 4, width: "60%", background: "#cbd5e1", borderRadius: 1.5 }} />}
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Stats / device-mesh dashboard – tinted (used for IoT)
const MockupDashboard = ({ pillBg = "#f0fdfa", pillBorder = "#99f6e4", numColor = "#0f766e", checkColor = "#14b8a6", label = "Dashboard" }) => (
  <div className="w-full h-full rounded-xl overflow-hidden flex flex-col bg-white" style={{ boxShadow: "0 8px 24px rgba(13,15,26,0.08)" }}>
    <MockBar label={label} />
    <div className="flex-1 p-4">
      <div className="grid grid-cols-3 gap-2.5 mb-3">
        <div className="rounded-md py-2.5 px-2 text-center" style={{ background: pillBg, border: `1px solid ${pillBorder}` }}>
          <div className="text-[18px] font-extrabold leading-none" style={{ color: numColor }}>248</div>
          <div className="text-[8px] font-semibold mt-1 uppercase tracking-wider" style={{ color: "#64748b" }}>Online</div>
        </div>
        <div className="rounded-md py-2.5 px-2 text-center" style={{ background: "#fef3c7", border: "1px solid #fde68a" }}>
          <div className="text-[18px] font-extrabold leading-none" style={{ color: "#a16207" }}>4</div>
          <div className="text-[8px] font-semibold mt-1 uppercase tracking-wider" style={{ color: "#64748b" }}>Syncing</div>
        </div>
        <div className="rounded-md py-2.5 px-2 text-center" style={{ background: "#ecfdf5", border: "1px solid #a7f3d0" }}>
          <div className="text-[18px] font-extrabold leading-none" style={{ color: "#047857" }}>99.8%</div>
          <div className="text-[8px] font-semibold mt-1 uppercase tracking-wider" style={{ color: "#64748b" }}>Uptime</div>
        </div>
      </div>
      <div>
        {[{ w: "70%" }, { w: "60%" }, { w: "80%" }, { w: "70%" }, { w: "75%" }].map((row, i, arr) => (
          <div key={i} className="flex items-center gap-2 py-1.5" style={{ borderBottom: i === arr.length - 1 ? "none" : "1px solid #f1f5f9" }}>
            <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: checkColor }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" style={{ color: "white" }}>
                <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <b style={{ display: "block", height: 5, width: row.w, background: "#475569", borderRadius: 2 }} />
            <span style={{ display: "block", height: 4, width: "30%", background: "#cbd5e1", borderRadius: 1.5, marginLeft: "auto" }} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Sticky-board mockup – tinted (used for Wearable)
const MockupBoard = ({ label = "Board", boardBg = "#ecfeff", dotColor = "#a5f3fc", arrowColor = "#06b6d4" }) => {
  const stickies = [
    { c: "#cffafe", r: "-4deg", left: "8%", top: "14%", barRgba: "rgba(6,182,212,0.6)", lineRgba: "rgba(6,182,212,0.3)", w1: "75%", w2: "55%" },
    { c: "#a5f3fc", r: "3deg", left: "38%", top: "8%", barRgba: "rgba(14,116,144,0.6)", lineRgba: "rgba(14,116,144,0.3)", w1: "80%", w2: "60%" },
    { c: "#67e8f9", r: "-3deg", left: "68%", top: "18%", barRgba: "rgba(255,255,255,0.7)", lineRgba: "rgba(255,255,255,0.4)", w1: "65%", w2: "75%" },
    { c: "#cffafe", r: "4deg", left: "14%", top: "55%", barRgba: "rgba(6,182,212,0.6)", lineRgba: "rgba(6,182,212,0.3)", w1: "70%", w2: "50%" },
    { c: "#a5f3fc", r: "-2deg", left: "48%", top: "60%", barRgba: "rgba(14,116,144,0.6)", lineRgba: "rgba(14,116,144,0.3)", w1: "80%", w2: "55%" },
  ];
  return (
    <div className="w-full h-full rounded-xl overflow-hidden flex flex-col bg-white" style={{ boxShadow: "0 8px 24px rgba(13,15,26,0.08)" }}>
      <MockBar label={label} />
      <div className="flex-1 relative p-4" style={{ background: boardBg, backgroundImage: `radial-gradient(${dotColor} 1px, transparent 1px)`, backgroundSize: "14px 14px" }}>
        {stickies.map((s, i) => (
          <div key={i} className="absolute px-2.5 py-2 rounded-[4px]"
            style={{ width: "28%", background: s.c, transform: `rotate(${s.r})`, left: s.left, top: s.top, boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
            <span className="block h-[5px] w-[60%] rounded-sm mb-[5px]" style={{ background: s.barRgba }} />
            <span className="block h-[3px] rounded-sm mb-[3px]" style={{ width: s.w1, background: s.lineRgba }} />
            <span className="block h-[3px] rounded-sm" style={{ width: s.w2, background: s.lineRgba }} />
          </div>
        ))}
        <div className="absolute" style={{ left: "34%", top: "30%", width: "10%", height: "1.5px", background: arrowColor, opacity: 0.7, transform: "rotate(15deg)" }} />
        <div className="absolute" style={{ left: "62%", top: "38%", width: "8%", height: "1.5px", background: arrowColor, opacity: 0.7, transform: "rotate(45deg)" }} />
      </div>
    </div>
  );
};

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
    mockup: (
      <MockupPhone
        accent="#017eeb"
        bg="linear-gradient(135deg, #f0f7ff 0%, #e0ecfc 100%)"
        screenBg="linear-gradient(160deg, #ffffff 0%, #f0f7ff 100%)"
      />
    ),
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
    mockup: (
      <MockupMultiDevice
        accent="#4f46e5"
        accent2="#7c3aed"
        bg="linear-gradient(135deg, #f5f3ff 0%, #ddd6fe 100%)"
        screenTint="#f5f3ff"
      />
    ),
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
    mockup: <MockupCodeCanvas canvasBg="#f0fdf4" cardColors={["#10b981", "#059669", "#047857"]} keyColor="#86efac" />,
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
    mockup: <MockupDashboard label="IoT Device Mesh \u00B7 248 connected" pillBg="#f0fdfa" pillBorder="#99f6e4" numColor="#0f766e" checkColor="#14b8a6" />,
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
    mockup: <MockupBoard label="watchOS \u00B7 Wear OS \u00B7 Fitness Band" boardBg="#ecfeff" dotColor="#a5f3fc" arrowColor="#06b6d4" />,
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
            <div className="lg:grid" style={{ gridTemplateColumns: "1.1fr 0.9fr", display: "grid", gap: "60px", alignItems: "center" }}>
              <div>
                <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-6 text-[12px] font-semibold uppercase"
                  style={{ background: "rgba(26,92,204,0.15)", border: "1px solid rgba(26,92,204,0.3)", color: "#00b4d8", letterSpacing: "0.1em" }}>
                  <IconPhoneBadge /> Mobile App Development Services
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
                    Start Your App Journey <IconArrowRight />
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
                      <span style={{ color: "#00dbd3" }}><IconCheck /></span>{t}
                    </span>
                  ))}
                </div>
              </div>
              <div>
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
              <div className={`grid items-center gap-8 lg:gap-[60px] ${svc.reverse ? "lg:[direction:rtl]" : ""}`}
                style={{ gridTemplateColumns: typeof window === "undefined" ? "1fr 1fr" : undefined }}>
                <div className={`${svc.reverse ? "lg:[direction:ltr]" : ""}`} style={{ direction: "ltr" }}>
                  <div className="w-full overflow-hidden rounded-2xl relative"
                    style={{
                      aspectRatio: "4 / 3",
                      padding: svc.padMockup ? 24 : 0,
                      background: svc.imageBg,
                      border: "1px solid #e5e7eb",
                    }}>
                    {svc.mockup}
                  </div>
                </div>
                <div className={`${svc.reverse ? "lg:[direction:ltr]" : ""}`} style={{ direction: "ltr" }}>
                  <h3 className="font-bold mb-4" style={{ fontSize: "clamp(22px, 2.4vw, 28px)", letterSpacing: "-0.3px", lineHeight: 1.3, color: "#0d0f1a" }}>{svc.title}</h3>
                  <p className="mb-5" style={{ fontSize: 16, lineHeight: 1.7, color: "#6b7280" }}>{svc.body}</p>
                  <ul className="list-none">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 mb-2.5" style={{ fontSize: 14, color: "#212121" }}>
                        <span style={{ color: "#017eeb", flexShrink: 0, marginTop: 2 }}><IconCheck /></span>{f}
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
                  {[0, 1, 2, 3, 4].map((i) => <IconStarFilled key={i} />)}
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
              <details key={i} className="group overflow-hidden mb-3 transition-all"
                style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12 }}>
                <summary className="list-none flex items-center justify-between gap-4 cursor-pointer"
                  style={{ padding: "22px 28px", fontWeight: 600, fontSize: 16, color: "#0d0f1a" }}>
                  <span>{item.q}</span>
                  <span className="transition-transform group-open:rotate-45" style={{ color: "#017eeb", fontSize: 24, fontWeight: 400, lineHeight: 1 }}>+</span>
                </summary>
                <div style={{ padding: "0 28px 24px", color: "#6b7280", fontSize: 15, lineHeight: 1.7 }}>{item.a}</div>
              </details>
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
