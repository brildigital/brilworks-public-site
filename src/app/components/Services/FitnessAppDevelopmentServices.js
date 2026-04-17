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

const IconHeartBadge = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M20.8 4.6C19.5 3.3 17.5 3.3 16.2 4.6L12 8.8L7.8 4.6C6.5 3.3 4.5 3.3 3.2 4.6C1.9 5.9 1.9 7.9 3.2 9.2L12 18L20.8 9.2C22.1 7.9 22.1 5.9 20.8 4.6Z" fill="#00b4d8" opacity="0.3" />
    <path d="M20.8 4.6C19.5 3.3 17.5 3.3 16.2 4.6L12 8.8L7.8 4.6C6.5 3.3 4.5 3.3 3.2 4.6C1.9 5.9 1.9 7.9 3.2 9.2L12 18L20.8 9.2C22.1 7.9 22.1 5.9 20.8 4.6Z" stroke="#00b4d8" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const IconShield = ({ color = "#017eeb" }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2L4 5V11C4 16 7.5 20.5 12 22C16.5 20.5 20 16 20 11V5L12 2Z" fill={color} opacity="0.15" />
    <path d="M12 2L4 5V11C4 16 7.5 20.5 12 22C16.5 20.5 20 16 20 11V5L12 2Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M9 12L11 14L15 10" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconChart = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M20 7L13 14L9 10L4 15" fill="#017eeb" opacity="0.15" />
    <path d="M20 7L13 14L9 10L4 15M20 7H15M20 7V12" stroke="#017eeb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconWatch = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="7" y="3" width="10" height="18" rx="2" fill="#017eeb" opacity="0.15" />
    <rect x="7" y="3" width="10" height="18" rx="2" stroke="#017eeb" strokeWidth="1.8" />
    <path d="M10 7H14M11 17H13" stroke="#017eeb" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const IconStar = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2L15 8.5L22 9.3L17 14L18.2 21L12 17.7L5.8 21L7 14L2 9.3L9 8.5L12 2Z" fill="#017eeb" opacity="0.15" />
    <path d="M12 2L15 8.5L22 9.3L17 14L18.2 21L12 17.7L5.8 21L7 14L2 9.3L9 8.5L12 2Z" stroke="#017eeb" strokeWidth="1.8" strokeLinejoin="round" />
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
  { icon: <IconShield />, label: "AWS Advanced Tier Partner" },
  { icon: <IconChart />, label: "30+ Fitness Apps Launched" },
  { icon: <IconWatch />, label: "Apple Health + Wearable Integrations" },
  { icon: <IconStar />, label: "4.8\u2605 App Store Average" },
];

const HERO_STATS = [
  { value: "30+", label: "Fitness Apps Launched" },
  { value: "2M+", label: "Active Users Served" },
  { value: "68%", label: "D30 Retention (Best Case)" },
  { value: "98%", label: "Client Satisfaction" },
];

const BENEFITS = [
  {
    title: "Fitness-Specialist Team",
    tint: "#e8f0fd",
    body: "Engineers and designers with deep experience across workout, nutrition, yoga, and wearable app domains.",
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
    title: "Retention-First Architecture",
    tint: "#ede9fe",
    body: "We design for D7, D30, and D90 retention from day one — gamification, streaks, and push at the core.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 3V21H21M7 14L11 10L15 14L21 8" fill="#4f46e5" opacity="0.15" />
        <path d="M3 3V21H21M7 14L11 10L15 14L21 8M21 8H17M21 8V12" stroke="#4f46e5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Wearable & Health Integrations",
    tint: "#d1fae5",
    body: "Apple Watch, Fitbit, Garmin, Samsung, Whoop — plus Apple Health and Google Fit. We've shipped them all.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="2" width="10" height="20" rx="2" fill="#10b981" opacity="0.15" />
        <rect x="4" y="2" width="10" height="20" rx="2" stroke="#10b981" strokeWidth="1.8" />
        <path d="M16 8H20V16H16M7 6H11M8 18H10" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Cross-Platform Native Feel",
    tint: "#ccfbf1",
    body: "iOS and Android delivered from a single codebase — React Native and Flutter — without sacrificing native UX.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="7" height="16" rx="1" fill="#0d9488" opacity="0.15" />
        <rect x="3" y="4" width="7" height="16" rx="1" stroke="#0d9488" strokeWidth="1.8" />
        <rect x="14" y="4" width="7" height="16" rx="1" stroke="#0d9488" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: "HIPAA-Ready & Secure",
    tint: "#cffafe",
    body: "Health data protection built in — encryption at rest and in transit, HIPAA-compliant infrastructure, audit logs.",
    icon: <IconShield color="#0891b2" />,
  },
  {
    title: "Post-Launch Support",
    tint: "#dbeafe",
    body: "OS updates, bug fixes, new features, performance tuning — we stay long after launch day.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M21 11.5C21 16.75 16.75 21 11.5 21C10 21 8.5 20.6 7.2 19.9L3 21L4.1 16.8C3.4 15.5 3 14 3 12.5C3 7.25 7.25 3 12.5 3C17.75 3 21 6.75 21 11.5Z" fill="#1e40af" opacity="0.15" />
        <path d="M21 11.5C21 16.75 16.75 21 11.5 21C10 21 8.5 20.6 7.2 19.9L3 21L4.1 16.8C3.4 15.5 3 14 3 12.5C3 7.25 7.25 3 12.5 3C17.75 3 21 6.75 21 11.5Z" stroke="#1e40af" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const TESTIMONIALS = [
  {
    initials: "AM",
    name: "Alex Morgan",
    role: "Founder & CEO, Fitness Startup",
    quote:
      "Brilworks shipped our workout app MVP in 14 weeks with Apple Watch sync and streak-based retention built in. We hit 52% D30 retention in month two — 3x our category benchmark.",
  },
  {
    initials: "JL",
    name: "Jordan Lee",
    role: "Product Lead, Wellness App",
    quote:
      "They pushed back on features that looked pretty but wouldn't move retention, and championed the ones that did. Our D30 numbers are the highest our investors have ever seen in the wellness space.",
  },
  {
    initials: "RK",
    name: "Raj Kapoor",
    role: "CTO, HealthTech Platform",
    quote:
      "We needed Apple Health, Google Fit, Garmin and Fitbit sync in one codebase. Brilworks delivered it without the flakiness we'd seen from three prior vendors. HIPAA-ready infra was a bonus.",
  },
];

const HONORS = [
  {
    label: "AWS Advanced Tier Partner",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L4 5V11C4 16 7.5 20.5 12 22C16.5 20.5 20 16 20 11V5L12 2Z" stroke="#017eeb" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Clutch Global Award 2025",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L15 8.5L22 9.3L17 14L18.2 21L12 17.7L5.8 21L7 14L2 9.3L9 8.5L12 2Z" stroke="#017eeb" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "GoodFirms Top Companies 2025-26",
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
  {
    label: "Adalo Certified Expert",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L15 8.5L22 9.3L17 14L18.2 21L12 17.7L5.8 21L7 14L2 9.3L9 8.5L12 2Z" stroke="#017eeb" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const INDUSTRIES = [
  {
    label: "Health & Wellness",
    href: "/industry/healthcare-software-development/",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 21C12 21 4 14 4 8.5C4 5.5 6.5 3 9.5 3C11 3 12 4 12 4C12 4 13 3 14.5 3C17.5 3 20 5.5 20 8.5C20 14 12 21 12 21Z" fill="#ef4444" opacity="0.15" />
        <path d="M12 21C12 21 4 14 4 8.5C4 5.5 6.5 3 9.5 3C11 3 12 4 12 4C12 4 13 3 14.5 3C17.5 3 20 5.5 20 8.5C20 14 12 21 12 21Z" stroke="#ef4444" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Gyms & Studios",
    href: "#services",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="8" width="4" height="8" rx="1" fill="#017eeb" opacity="0.15" />
        <rect x="3" y="8" width="4" height="8" rx="1" stroke="#017eeb" strokeWidth="1.8" />
        <rect x="17" y="8" width="4" height="8" rx="1" stroke="#017eeb" strokeWidth="1.8" />
        <path d="M7 12H17M9 10V14M15 10V14" stroke="#017eeb" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Corporate Wellness",
    href: "#services",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 21H21V10H3V21Z" fill="#4f46e5" opacity="0.15" />
        <path d="M3 21H21V10H3V21ZM8 10V6C8 4 9.5 3 12 3C14.5 3 16 4 16 6V10" stroke="#4f46e5" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Nutrition & Diet",
    href: "#services",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3C8 3 5 6 5 10V14C5 18 8 21 12 21C16 21 19 18 19 14V10C19 6 16 3 12 3Z" fill="#10b981" opacity="0.15" />
        <path d="M12 3C8 3 5 6 5 10V14C5 18 8 21 12 21C16 21 19 18 19 14V10C19 6 16 3 12 3ZM12 3V21M5 12H19" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Sports & Athletics",
    href: "#services",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="7" r="3" fill="#0d9488" opacity="0.15" />
        <circle cx="12" cy="7" r="3" stroke="#0d9488" strokeWidth="1.8" />
        <path d="M8 21L10 14H14L16 21M10 14L7 11M14 14L17 11" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Mental Health & Mindfulness",
    href: "#services",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 22C8 18 4 14 4 9C4 5 7 3 10 3C11 3 12 4 12 4C12 4 13 3 14 3C17 3 20 5 20 9C20 14 16 18 12 22Z" fill="#8b5cf6" opacity="0.15" />
        <path d="M12 22C8 18 4 14 4 9C4 5 7 3 10 3C11 3 12 4 12 4C12 4 13 3 14 3C17 3 20 5 20 9C20 14 16 18 12 22Z" stroke="#8b5cf6" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const FAQ = [
  {
    q: "How long does it take to develop a fitness app?",
    a: "Development time varies based on complexity and features. A basic fitness app typically takes 3-4 months, while more complex apps with advanced features like AI coaching, social networking, or wearable integration may take 6-9 months.",
  },
  {
    q: "What is the cost of developing a fitness app?",
    a: "Costs depend on features, platform, design complexity, and integrations. Basic apps start around $30,000-$50,000, while comprehensive fitness platforms can range from $80,000-$200,000+. We provide detailed quotes after understanding your specific requirements.",
  },
  {
    q: "Can you integrate wearable devices and fitness trackers?",
    a: "Yes, we specialize in integrating popular wearables and fitness trackers including Apple Watch, Fitbit, Garmin, Samsung Galaxy Watch, and more. We can sync data like heart rate, steps, calories, and sleep patterns directly into your app.",
  },
  {
    q: "Do you provide app maintenance and updates?",
    a: "Absolutely — we offer comprehensive maintenance packages including bug fixes, OS updates, feature enhancements, security patches, and technical support to ensure your app stays current and performs optimally.",
  },
  {
    q: "Can you add monetization features to the app?",
    a: "Yes, we implement various monetization strategies including subscription models, in-app purchases, premium features, ad integration, and payment gateway integration for personal training services or product sales.",
  },
  {
    q: "Is your infrastructure HIPAA-compliant for health data?",
    a: "Yes. For apps handling protected health information, we design HIPAA-ready infrastructure — encryption at rest and in transit, role-based access, audit logs, BAA-eligible cloud providers, and secure data pipelines for Apple Health and Google Fit sync.",
  },
  {
    q: "How do you improve user retention in fitness apps?",
    a: "Retention is engineered from day one: streaks and habit loops, smart push notifications, social challenges and leaderboards, personalized plans, wearable sync, and data-informed onboarding. Our top-performing fitness apps hit 60%+ D30 retention — 3x category average.",
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

// Phone device mockup (used heavily for fitness UI)
const MockupPhone = ({
  bg = "linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%)",
  screenBg = "linear-gradient(160deg, #ffffff 0%, #f0fdfa 100%)",
  accent = "#0d9488",
  shadow = "rgba(13,148,136,0.25)",
  swatchOrder = ["s1", "s2", "s3", "s4"],
}) => {
  const swatchMap = {
    s1: "linear-gradient(135deg, #0d9488, #14b8a6)",
    s2: "linear-gradient(135deg, #017eeb, #00dbd3)",
    s3: "linear-gradient(135deg, #f59e0b, #ef4444)",
    s4: "linear-gradient(135deg, #8b5cf6, #ec4899)",
  };
  return (
    <div className="flex items-center justify-center gap-[18px] h-full" style={{ background: bg }}>
      <div className="relative p-2" style={{ width: 110, height: 200, background: "#0d0f1a", borderRadius: 18, boxShadow: `0 12px 40px ${shadow}` }}>
        <div className="absolute z-10" style={{ top: 4, left: "50%", transform: "translateX(-50%)", width: 36, height: 4, background: "#0d0f1a", borderRadius: "0 0 6px 6px" }} />
        <div className="h-full rounded-xl overflow-hidden px-2 py-2.5" style={{ background: screenBg }}>
          <div style={{ height: 6, width: "50%", background: accent, borderRadius: 2, marginBottom: 8 }} />
          {[
            { w1: "80%", w2: "55%", both: true },
            { w1: "70%", w2: "45%", both: true },
            { w1: "75%", w2: "60%", both: true },
          ].map((c, i) => (
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
        {swatchOrder.map((s, i) => (
          <div key={i} style={{ width: 38, height: 38, borderRadius: 10, background: swatchMap[s], boxShadow: `0 4px 12px ${shadow}` }} />
        ))}
      </div>
    </div>
  );
};

// Stats dashboard mockup (fitness tracking style)
const MockupStatsDashboard = ({ label, stats, rows, accent = "#10b981" }) => (
  <div className="w-full h-full rounded-xl overflow-hidden flex flex-col bg-white" style={{ boxShadow: "0 8px 24px rgba(13,15,26,0.08)" }}>
    <MockBar label={label} />
    <div className="flex-1 p-4">
      <div className="grid grid-cols-3 gap-2.5 mb-3">
        {stats.map((s, i) => (
          <div key={i} className="rounded-md py-2.5 px-2 text-center" style={{ background: s.bg, border: `1px solid ${s.border}` }}>
            <div className="text-[18px] font-extrabold leading-none" style={{ color: s.color }}>{s.n}</div>
            <div className="text-[8px] font-semibold mt-1 uppercase tracking-wider" style={{ color: "#64748b" }}>{s.lb}</div>
          </div>
        ))}
      </div>
      <div>
        {rows.map((row, i) => (
          <div key={i} className="flex items-center gap-2 py-1.5" style={{ borderBottom: i === rows.length - 1 ? "none" : "1px solid #f1f5f9" }}>
            <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: row.fail ? "#ef4444" : accent }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" style={{ color: "white" }}>
                {row.fail
                  ? <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  : <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />}
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

const SERVICES = [
  {
    title: "Workout Training Apps",
    body:
      "Comprehensive workout planning and tracking applications with exercise libraries, video demonstrations, customizable routines, progress tracking, and personalized training plans tailored to individual fitness goals.",
    features: [
      "Exercise library with HD video demos",
      "AI-powered personalized training plans",
      "Real-time progress tracking & streaks",
    ],
    mockup: <MockupPhone />,
    imageBg: "linear-gradient(135deg, #f0fdfa 0%, #99f6e4 100%)",
    padMockup: false,
    reverse: false,
  },
  {
    title: "Nutrition & Diet Apps",
    body:
      "Complete nutrition tracking solutions featuring calorie counters, meal planning, recipe databases, macro tracking, barcode scanning, and personalized dietary recommendations based on user goals.",
    features: [
      "Barcode & photo food recognition",
      "Macro, hydration & micronutrient tracking",
      "Personalized AI meal plans",
    ],
    mockup: (
      <MockupStatsDashboard
        label="Daily Nutrition · Today"
        stats={[
          { n: "1,842", lb: "Cal In", bg: "#f0fdf4", border: "#bbf7d0", color: "#047857" },
          { n: "128g", lb: "Carbs", bg: "#fef3c7", border: "#fde68a", color: "#a16207" },
          { n: "94g", lb: "Protein", bg: "#f0fdf4", border: "#bbf7d0", color: "#047857" },
        ]}
        rows={[{ w: "70%" }, { w: "60%" }, { w: "80%" }, { w: "65%" }, { w: "75%" }]}
        accent="#10b981"
      />
    ),
    imageBg: "linear-gradient(135deg, #ecfdf5 0%, #bbf7d0 100%)",
    padMockup: true,
    reverse: true,
  },
  {
    title: "Yoga & Meditation Apps",
    body:
      "Mindfulness and wellness platforms offering guided meditation sessions, yoga routines, breathing exercises, sleep stories, stress management tools, and progress tracking for mental health.",
    features: [
      "Audio-led guided sessions & sleep stories",
      "Breathing exercises & HRV tracking",
      "Mood journaling & progress insights",
    ],
    mockup: (
      <MockupPhone
        bg="linear-gradient(135deg, #f5f3ff 0%, #ddd6fe 100%)"
        screenBg="linear-gradient(160deg, #ffffff 0%, #f5f3ff 100%)"
        accent="#8b5cf6"
        shadow="rgba(139,92,246,0.25)"
        swatchOrder={["s4", "s2", "s1", "s3"]}
      />
    ),
    imageBg: "linear-gradient(135deg, #f5f3ff 0%, #ddd6fe 100%)",
    padMockup: false,
    reverse: false,
  },
  {
    title: "Running & Cycling Apps",
    body:
      "GPS-enabled tracking apps for runners and cyclists with route mapping, distance tracking, pace monitoring, elevation tracking, social challenges, and integration with wearable devices.",
    features: [
      "GPS route mapping & elevation",
      "Apple Watch, Fitbit, Garmin sync",
      "Social challenges & leaderboards",
    ],
    mockup: (
      <MockupStatsDashboard
        label="Run · 10.4 km · 52:18"
        stats={[
          { n: "10.4", lb: "KM", bg: "#f0fdf4", border: "#bbf7d0", color: "#047857" },
          { n: "5:02", lb: "Pace", bg: "#cffafe", border: "#a5f3fc", color: "#0e7490" },
          { n: "148", lb: "Avg BPM", bg: "#fef3c7", border: "#fde68a", color: "#a16207" },
        ]}
        rows={[{ w: "70%" }, { w: "75%" }, { w: "85%" }, { w: "65%" }, { w: "70%" }]}
        accent="#06b6d4"
      />
    ),
    imageBg: "linear-gradient(135deg, #ecfeff 0%, #a5f3fc 100%)",
    padMockup: true,
    reverse: true,
  },
  {
    title: "Personal Training Apps",
    body:
      "Connect trainers with clients through virtual training platforms featuring live sessions, on-demand workouts, progress monitoring, communication tools, payment processing, and scheduling systems.",
    features: [
      "Live & on-demand video sessions",
      "In-app payments & subscriptions",
      "Booking, scheduling & client chat",
    ],
    mockup: (
      <MockupPhone
        bg="linear-gradient(135deg, #f0f7ff 0%, #e0ecfc 100%)"
        screenBg="linear-gradient(160deg, #ffffff 0%, #f0f7ff 100%)"
        accent="#017eeb"
        shadow="rgba(1,126,235,0.25)"
        swatchOrder={["s2", "s1", "s4", "s3"]}
      />
    ),
    imageBg: "linear-gradient(135deg, #f0f7ff 0%, #e0ecfc 100%)",
    padMockup: false,
    reverse: false,
  },
  {
    title: "Gym Management Apps",
    body:
      "All-in-one solutions for fitness centers including member management, class scheduling, attendance tracking, billing and payments, staff management, and equipment maintenance tracking.",
    features: [
      "Member check-in & attendance tracking",
      "Automated billing & renewals",
      "Class scheduling & staff management",
    ],
    mockup: (
      <MockupStatsDashboard
        label="Gym Admin · Members & Classes"
        stats={[
          { n: "1,284", lb: "Members", bg: "#dbeafe", border: "#bfdbfe", color: "#1e40af" },
          { n: "42", lb: "Classes Today", bg: "#f0fdf4", border: "#bbf7d0", color: "#047857" },
          { n: "18", lb: "Renewals", bg: "#fef3c7", border: "#fde68a", color: "#a16207" },
        ]}
        rows={[{ w: "70%" }, { w: "70%" }, { w: "85%" }, { w: "55%", fail: true }, { w: "75%" }]}
        accent="#017eeb"
      />
    ),
    imageBg: "linear-gradient(135deg, #f0f7ff 0%, #e0ecfc 100%)",
    padMockup: true,
    reverse: true,
  },
];

// ---------- Page ----------
const FitnessAppDevelopmentServices = () => {
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
                  <IconHeartBadge /> Fitness App Development Services
                </span>
                <h1 className="font-extrabold mb-5 text-white" style={{ fontSize: "clamp(34px, 4vw, 54px)", letterSpacing: "-1.5px", lineHeight: 1.1 }}>
                  Build Fitness Apps That <span style={gradientTextStyle}>Keep Users Coming Back</span>
                </h1>
                <p className="mb-8" style={{ fontSize: 18, lineHeight: 1.7, color: "rgba(255,255,255,0.72)", maxWidth: 580 }}>
                  We partner with fitness founders, gyms, and wellness brands to engineer apps that actually retain users. 30+ fitness apps shipped — Apple Health, wearable integrations, and HIPAA-ready infrastructure, from MVP in 12-20 weeks.
                </p>
                <div className="flex flex-wrap gap-3.5 my-10">
                  <Link href="#contact"
                    className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all"
                    style={{ background: "#017eeb", color: "#fff", border: "1px solid #017eeb", padding: "16px 32px", fontSize: 16 }}>
                    Get My Free Fitness App Consultation <IconArrowRight />
                  </Link>
                  <Link href="#services"
                    className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:bg-white/10"
                    style={{ background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.3)", padding: "16px 32px", fontSize: 16 }}>
                    See What We Build
                  </Link>
                </div>
                <div className="flex flex-wrap gap-[18px]" style={{ color: "rgba(255,255,255,0.65)", fontSize: 14 }}>
                  {["Free 30-min consultation", "48-hour proposal", "NDA signed upfront"].map((t) => (
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
            <h2 className="font-extrabold" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0d0f1a" }}>Types of Fitness Apps We Develop</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>From workout trackers to gym management platforms — we build fitness apps that users actually stick with.</p>
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
          <h3 className="font-extrabold mb-3.5" style={{ fontSize: "clamp(24px, 3vw, 36px)", color: "#fff", lineHeight: 1.2, letterSpacing: "-0.5px" }}>Ready to Build Your Fitness App?</h3>
          <p className="mb-7" style={{ color: "rgba(255,255,255,0.85)", fontSize: 16, lineHeight: 1.7 }}>Get a free 30-minute consultation with our fitness app team. We&apos;ll scope features, estimate cost, and map your MVP timeline — no commitment.</p>
          <Link href="#contact"
            className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:!bg-[#0d0f1a] hover:!text-white hover:!border-[#0d0f1a] mt-5"
            style={{ background: "#fff", color: "#017eeb", border: "1px solid #fff", padding: "16px 32px", fontSize: 16 }}>
            Start My Fitness App
          </Link>
        </div>
      </section>

      {/* WHY BRILWORKS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="text-center mx-auto mb-14" style={{ maxWidth: 720 }}>
            <span className="inline-block mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#017eeb" }}>Why Brilworks</span>
            <h2 className="font-extrabold" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0d0f1a" }}>Built by Engineers Who&apos;ve Shipped 30+ Fitness Apps</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>We don&apos;t just write code — we&apos;ve already solved retention, wearable data sync, and health compliance at scale.</p>
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
            <h2 className="font-extrabold text-white" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15 }}>What Fitness Founders &amp; CTOs Say About Us</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "rgba(255,255,255,0.62)" }}>Real outcomes from real partners across workout, wellness, and gym-management apps.</p>
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
            <span className="inline-block mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#017eeb" }}>Recognized By</span>
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
            <span className="inline-block mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#017eeb" }}>Verticals We Serve</span>
            <h2 className="font-extrabold" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0d0f1a" }}>Deep Domain Expertise Across Fitness &amp; Wellness</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>Not generalists. We have case studies, clients, and production code in each of these verticals.</p>
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
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>Everything fitness founders and product teams typically ask before working with us.</p>
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
          title="Ready to Build Your Fitness App?"
          description="You're one conversation away from turning your fitness idea into a shipped, retaining app. Tell us what you're building — we'll show you how we can help."
          messageRequired={false}
          submitLabel="Get My Free Fitness App Consultation"
          benefits={[
            "Free 30-minute consultation with a senior fitness app engineer",
            "Detailed project proposal within 48 hours",
            "NDA signed before any idea discussion",
            "Response guaranteed within 24 business hours",
            "Apple Health, Google Fit & wearable integrations included",
          ]}
        />
      </div>
    </>
  );
};

export default FitnessAppDevelopmentServices;
