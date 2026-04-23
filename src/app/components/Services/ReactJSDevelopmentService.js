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

// React atom badge icon
const IconReactAtom = ({ size = 14, color = "#00b4d8" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="2" fill={color} />
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke={color} strokeWidth="1.2" fill="none" />
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke={color} strokeWidth="1.2" fill="none" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke={color} strokeWidth="1.2" fill="none" transform="rotate(120 12 12)" />
  </svg>
);

const IconShield = ({ color = "#017eeb" }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2L4 5V11C4 16 7.5 20.5 12 22C16.5 20.5 20 16 20 11V5L12 2Z" fill={color} opacity="0.15" />
    <path d="M12 2L4 5V11C4 16 7.5 20.5 12 22C16.5 20.5 20 16 20 11V5L12 2Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M9 12L11 14L15 10" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconBolt = ({ color = "#017eeb", size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill={color} opacity="0.15" />
    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
  </svg>
);

const IconTeam = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="9" cy="8" r="4" fill="#017eeb" opacity="0.15" />
    <circle cx="17" cy="9" r="3" fill="#017eeb" opacity="0.15" />
    <path d="M2 21V19C2 16.8 3.8 15 6 15H12C14.2 15 16 16.8 16 19V21M16 21V19C16 17 14.5 15.5 12.5 15.2M22 21V19C22 17 20.5 15.5 18.5 15.2" stroke="#017eeb" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="9" cy="8" r="4" stroke="#017eeb" strokeWidth="1.8" />
    <circle cx="17" cy="9" r="3" stroke="#017eeb" strokeWidth="1.8" />
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
  { icon: <IconReactAtom size={18} color="#017eeb" />, label: "150+ React Apps Shipped" },
  { icon: <IconBolt />, label: "Sub-1s Avg Load Time" },
  { icon: <IconTeam />, label: "100+ React Engineers" },
];

const HERO_STATS = [
  { value: "150+", label: "React Apps Shipped" },
  { value: "<1s", label: "Avg Load Time" },
  { value: "5K+", label: "Components Shipped" },
  { value: "98%", label: "Client Satisfaction" },
];

const BENEFITS = [
  {
    title: "Built Around Your Goals",
    tint: "#ede9fe",
    body: "We design interfaces that match your user journey and business needs — not boilerplate dashboards or templates pulled off a shelf.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="2" fill="#4f46e5" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#4f46e5" strokeWidth="1.8" fill="none" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#4f46e5" strokeWidth="1.8" fill="none" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#4f46e5" strokeWidth="1.8" fill="none" transform="rotate(120 12 12)" />
      </svg>
    ),
  },
  {
    title: "Clean, Typed, Testable Code",
    tint: "#e8f0fd",
    body: "Clear component structures, proven state management (Redux, Zustand, Context), TypeScript everywhere, and unit + integration tests as a default.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 4H20V20H4V4Z" fill="#017eeb" opacity="0.15" />
        <path d="M4 4H20V20H4V4ZM9 9L7 12L9 15M15 9L17 12L15 15M13 7L11 17" stroke="#017eeb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Scales Without Rewrites",
    tint: "#d1fae5",
    body: "Modular design, lazy loading, and incremental upgrades so your app grows with your user base — not one that needs a v2 rewrite in 18 months.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 3V21H21M7 14L11 10L15 14L21 8" fill="#10b981" opacity="0.15" />
        <path d="M3 3V21H21M7 14L11 10L15 14L21 8M21 8H17M21 8V12" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "No Time-Zone Limits",
    tint: "#ccfbf1",
    body: "Our React engineers align to your working hours — London, Sydney, or San Francisco. Your standups, your sprints, your calendar.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" fill="#0d9488" opacity="0.15" />
        <path d="M12 7V12L15 14M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Modern Tech Expertise",
    tint: "#ede9fe",
    body: "React 19, Next.js App Router, React Query, React Router, TypeScript, Tailwind, and Vite — we stay on the leading edge without chasing hype.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" fill="#7c3aed" opacity="0.15" stroke="#7c3aed" strokeWidth="1.8" />
        <path d="M12 2V22M2 12H22" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Faster Time to Market",
    tint: "#cffafe",
    body: "Speed with precision. We ship high-quality React code in record time — without cutting corners on accessibility, tests, or type safety.",
    icon: <IconBolt color="#0891b2" size={32} />,
  },
];

const TESTIMONIALS = [
  {
    initials: "LB",
    name: "Liz Bullen",
    role: "Founder, Lyfecoin",
    quote:
      "Brilworks shipped our React MVP in under 4 weeks and delivered a typed, tested codebase our in-house team still builds on today. The best part is they're always available.",
  },
  {
    initials: "DV",
    name: "David Velasquez",
    role: "CEO & CTO, Rastrack",
    quote:
      "We needed senior React engineers fast. Brilworks plugged into our team within a week and their code passed review on day one. Four-plus years in, they're the best engineering partner we've worked with.",
  },
  {
    initials: "ED",
    name: "Edwin",
    role: "Frontend Lead & Founder, Tekstride",
    quote:
      "Their communication is top-notch. They migrated our legacy frontend to React incrementally — zero downtime, three major releases on schedule. Transparent process the whole way.",
  },
];

const HONORS = [
  { label: "AWS Partner · Advanced Tier", icon: <IconShield /> },
  {
    label: "Clutch Global Award 2025",
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
    label: "SelectedFirms Top 10 · 2026",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 3H21V21H3V3Z" stroke="#017eeb" strokeWidth="1.8" />
        <path d="M9 9H15V15H9V9Z" stroke="#017eeb" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    label: "Clutch Global Award 2024",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L15 8.5L22 9.3L17 14L18.2 21L12 17.7L5.8 21L7 14L2 9.3L9 8.5L12 2Z" stroke="#017eeb" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const INDUSTRIES = [
  {
    label: "SaaS",
    href: "/saas-application-development-services/",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="18" height="14" rx="2" fill="#4f46e5" opacity="0.15" />
        <rect x="3" y="4" width="18" height="14" rx="2" stroke="#4f46e5" strokeWidth="1.8" />
        <path d="M3 9H21M8 14H16" stroke="#4f46e5" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Fintech",
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
    label: "EdTech",
    href: "/industry/edtech-software-development/",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M2 8L12 3L22 8L12 13L2 8Z" fill="#7c3aed" opacity="0.15" />
        <path d="M2 8L12 3L22 8L12 13L2 8ZM6 10V16C6 16 8 18 12 18C16 18 18 16 18 16V10" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Media",
    href: "/industry/media-entertainment-software-development/",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2" fill="#0891b2" opacity="0.15" />
        <rect x="2" y="4" width="20" height="16" rx="2" stroke="#0891b2" strokeWidth="1.8" />
        <path d="M10 9L16 12L10 15V9Z" fill="#0891b2" stroke="#0891b2" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const FAQ = [
  {
    q: "Can you integrate React with our current backend stack?",
    a: "Yes. React is backend-agnostic. We integrate with REST, GraphQL, WebSockets, tRPC, and existing microservice APIs — with clear separation between interface and data layers, and typed contracts wherever possible.",
  },
  {
    q: "Do you build React apps with TypeScript?",
    a: "Yes — TypeScript is our default for new React projects. We use it to catch errors early, enforce contract clarity, and dramatically improve long-term maintainability. For existing JS codebases, we incrementally adopt TS file-by-file.",
  },
  {
    q: "How do you handle state management in React?",
    a: "We pick the right pattern per app: React Context and hooks for localized state; Redux Toolkit or Zustand for complex global state; TanStack Query (React Query) for server state. We always tune for minimal boilerplate and clear traceability.",
  },
  {
    q: "Do you work with Next.js, SSR, and server components?",
    a: "Absolutely. Next.js App Router, SSR, SSG, ISR, and React Server Components are all part of our toolkit. We choose the rendering strategy per route based on SEO, performance, and dynamic-data needs.",
  },
  {
    q: "Can you migrate our legacy frontend to React without a big-bang rewrite?",
    a: "Yes. We use the strangler-fig pattern — React components mount inside your existing jQuery, Angular, or Backbone app and incrementally take over routes. Your users never see a big rewrite freeze.",
  },
  {
    q: "How fast can you put senior React developers on our project?",
    a: "Typically within 7 business days. You review profiles, interview shortlisted candidates, and we handle onboarding, contracts, and tooling. Most engagements ship their first PR within the first sprint.",
  },
  {
    q: "What does React performance optimization actually include?",
    a: "We audit render patterns with React Profiler, fix unnecessary re-renders with memoization, add code splitting and route-based chunking, lazy-load images and below-the-fold components, and tune bundle size. Typical result: sub-1s LCP and INP under 200ms on production traffic.",
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

const codeSeg = (cls, w) => {
  const colors = { k: "#c084fc", s: "#86efac", v: "#fbbf24", t: "#67e8f9", x: "#475569" };
  return <span className="inline-block rounded-sm" style={{ height: 7, width: w, background: colors[cls] }} />;
};

// Service 1: Custom React App — Code editor + design canvas (lean)
const MockupCodeCanvas = () => (
  <div className="w-full h-full rounded-xl overflow-hidden flex flex-col bg-white" style={{ boxShadow: "0 8px 24px rgba(13,15,26,0.08)" }}>
    <MockBar label="src/App.tsx · yarn dev" />
    <div className="flex-1 grid grid-cols-2">
      <div className="p-3.5" style={{ background: "#0d1117" }}>
        {[
          [["k", 30], ["t", 18], ["s", 36]],
          [["x", 6]],
          [["k", 22], ["v", 44], ["t", 16]],
          [["x", 14], ["k", 18], ["s", 28]],
          [["x", 14], ["t", 24], ["v", 18]],
          [["x", 22], ["k", 18], ["s", 30]],
          [["x", 6], ["x", 8]],
          [["k", 26], ["s", 38]],
          [["x", 10], ["t", 48]],
        ].map((line, i) => (
          <div key={i} className="flex gap-1.5 items-center mb-[7px]">
            <b className="text-[9px] font-mono min-w-[14px]" style={{ color: "#94a3b8" }}>{i + 1}</b>
            {line.map(([c, w], j) => <span key={j}>{codeSeg(c, w)}</span>)}
          </div>
        ))}
      </div>
      <div className="p-3.5" style={{ background: "#f5f3ff" }}>
        {[
          { color: "#7c3aed", w1: "80%", w2: "60%", hasSecond: true },
          { color: "#a855f7", w1: "70%", w2: "55%", hasSecond: true },
          { color: "#4f46e5", w1: "75%", w2: null, hasSecond: false },
        ].map((c, i) => (
          <div key={i} className="bg-white rounded-md p-2 mb-2" style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.05)", border: "1px solid #e2e8f0" }}>
            <div style={{ height: 6, width: "60%", background: c.color, borderRadius: 2, marginBottom: 5 }} />
            <div style={{ height: 4, width: c.w1, background: "#cbd5e1", borderRadius: 1.5, marginBottom: 3 }} />
            {c.hasSecond && <div style={{ height: 4, width: c.w2, background: "#cbd5e1", borderRadius: 1.5 }} />}
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Service 2: Migration sticky-note board
const MockupMigration = () => (
  <div className="w-full h-full rounded-xl overflow-hidden flex flex-col bg-white" style={{ boxShadow: "0 8px 24px rgba(13,15,26,0.08)" }}>
    <MockBar label="Migration Board · jQuery → React 19" />
    <div className="flex-1 relative p-4" style={{ background: "#fafbfc", backgroundImage: "radial-gradient(#e2e8f0 1px, transparent 1px)", backgroundSize: "14px 14px" }}>
      {[
        { c: "#fee2e2", r: "-5deg", left: "6%", top: "14%", w1: "75%", w2: "55%" },
        { c: "#fef3c7", r: "3deg", left: "38%", top: "8%", w1: "80%", w2: "60%" },
        { c: "#dcfce7", r: "-3deg", left: "68%", top: "18%", w1: "65%", w2: "75%" },
        { c: "#e0e7ff", r: "4deg", left: "14%", top: "55%", w1: "70%", w2: "50%" },
        { c: "#ddd6fe", r: "-2deg", left: "48%", top: "60%", w1: "80%", w2: "55%" },
      ].map((s, i) => (
        <div key={i} className="absolute px-2.5 py-2 rounded-[4px]"
          style={{ width: "28%", background: s.c, transform: `rotate(${s.r})`, left: s.left, top: s.top, boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
          <span className="block h-[5px] w-[60%] rounded-sm mb-[5px]" style={{ background: "rgba(0,0,0,0.35)" }} />
          <span className="block h-[3px] rounded-sm mb-[3px]" style={{ width: s.w1, background: "rgba(0,0,0,0.18)" }} />
          <span className="block h-[3px] rounded-sm" style={{ width: s.w2, background: "rgba(0,0,0,0.18)" }} />
        </div>
      ))}
      <div className="absolute" style={{ left: "34%", top: "30%", width: "10%", height: "1.5px", background: "#017eeb", opacity: 0.5, transform: "rotate(15deg)" }} />
      <div className="absolute" style={{ left: "62%", top: "38%", width: "8%", height: "1.5px", background: "#017eeb", opacity: 0.5, transform: "rotate(45deg)" }} />
    </div>
  </div>
);

// Service 3: PWA Phone
const MockupPhone = () => (
  <div className="flex items-center justify-center gap-[18px] h-full" style={{ background: "linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%)" }}>
    <div className="relative p-2" style={{ width: 110, height: 200, background: "#0d0f1a", borderRadius: 18, boxShadow: "0 12px 40px rgba(13,148,136,0.25)" }}>
      <div className="absolute z-10" style={{ top: 4, left: "50%", transform: "translateX(-50%)", width: 36, height: 4, background: "#0d0f1a", borderRadius: "0 0 6px 6px" }} />
      <div className="h-full rounded-xl overflow-hidden px-2 py-2.5" style={{ background: "linear-gradient(160deg, #ffffff 0%, #f0fdfa 100%)" }}>
        <div style={{ height: 6, width: "50%", background: "#0d9488", borderRadius: 2, marginBottom: 8 }} />
        {[{ w1: "80%", w2: "60%", both: true }, { w1: "70%", w2: "50%", both: true }, { w1: "75%", w2: null, both: false }].map((c, i) => (
          <div key={i} className="bg-white rounded-md p-1.5 mb-1.5" style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
            <div style={{ height: 3, background: "#475569", borderRadius: 1.5, marginBottom: 3, width: "60%" }} />
            <div style={{ height: 3, background: "#cbd5e1", borderRadius: 1.5, marginBottom: 3, width: c.w1 }} />
            {c.both && <div style={{ height: 3, background: "#cbd5e1", borderRadius: 1.5, width: c.w2 }} />}
          </div>
        ))}
        <div className="flex items-center justify-center mt-1.5" style={{ background: "#0d9488", height: 18, borderRadius: 4 }}>
          <span style={{ background: "white", height: 4, width: "40%", borderRadius: 1.5 }} />
        </div>
      </div>
    </div>
    <div className="flex flex-col gap-2 max-[600px]:hidden">
      <div style={{ width: 38, height: 38, borderRadius: 10, background: "linear-gradient(135deg, #0d9488, #14b8a6)", boxShadow: "0 4px 12px rgba(13,148,136,0.15)" }} />
      <div style={{ width: 38, height: 38, borderRadius: 10, background: "linear-gradient(135deg, #017eeb, #00dbd3)", boxShadow: "0 4px 12px rgba(13,148,136,0.15)" }} />
      <div style={{ width: 38, height: 38, borderRadius: 10, background: "linear-gradient(135deg, #8b5cf6, #ec4899)", boxShadow: "0 4px 12px rgba(13,148,136,0.15)" }} />
      <div style={{ width: 38, height: 38, borderRadius: 10, background: "linear-gradient(135deg, #f59e0b, #ef4444)", boxShadow: "0 4px 12px rgba(13,148,136,0.15)" }} />
    </div>
  </div>
);

// Multi-device mockup factory (Design system + Team aug)
const MockupMultiDevice = ({ accent = "#0891b2", bg = "linear-gradient(135deg, #ecfeff 0%, #cffafe 100%)", screenBg = "white", screenGrad = "linear-gradient(160deg, white, #ecfeff)", cellBg = "#ecfeff", cellBorder = "#cffafe" }) => (
  <div className="grid gap-3.5 p-3.5 h-full items-center" style={{ gridTemplateColumns: "2fr 1fr", background: bg }}>
    <div style={{ background: "#0d0f1a", borderRadius: "8px 8px 4px 4px", padding: "6px 6px 0" }}>
      <div className="p-2" style={{ background: screenBg, borderRadius: "4px 4px 0 0", minHeight: 110 }}>
        <div style={{ height: 8, width: "40%", background: accent, borderRadius: 2, marginBottom: 8 }} />
        <div className="grid grid-cols-3 gap-1 mb-2">
          <div style={{ height: 24, borderRadius: 3, background: cellBg, border: `1px solid ${cellBorder}` }} />
          <div style={{ height: 24, borderRadius: 3, background: `linear-gradient(135deg, ${accent}, ${accent})` }} />
          <div style={{ height: 24, borderRadius: 3, background: cellBg, border: `1px solid ${cellBorder}` }} />
        </div>
        {["80%", "65%", "75%", "55%"].map((w, i) => (
          <div key={i} style={{ height: 4, background: "#e2e8f0", borderRadius: 1.5, marginBottom: 3, width: w }} />
        ))}
      </div>
      <div style={{ height: 6, background: "#1e293b", borderRadius: "0 0 8px 8px" }} />
    </div>
    <div style={{ background: "#0d0f1a", borderRadius: 10, padding: 5 }}>
      <div className="p-2" style={{ background: screenGrad, borderRadius: 6, minHeight: 90 }}>
        <div style={{ height: 5, width: "50%", background: accent, borderRadius: 2, marginBottom: 6 }} />
        <div style={{ height: 3, background: "#cbd5e1", borderRadius: 1.5, marginBottom: 3 }} />
        <div style={{ height: 3, background: "#cbd5e1", borderRadius: 1.5, marginBottom: 3, width: "60%" }} />
        <div style={{ height: 3, background: "#cbd5e1", borderRadius: 1.5, marginBottom: 3 }} />
        <div style={{ height: 3, background: "#cbd5e1", borderRadius: 1.5, marginBottom: 3, width: "60%" }} />
        <div style={{ height: 12, width: "50%", background: accent, borderRadius: 3, marginTop: 6 }} />
      </div>
    </div>
  </div>
);

// Service 5: Lighthouse perf dashboard
const MockupPerf = () => (
  <div className="w-full h-full rounded-xl overflow-hidden flex flex-col bg-white" style={{ boxShadow: "0 8px 24px rgba(13,15,26,0.08)" }}>
    <MockBar label="Lighthouse · Perf Audit #128" />
    <div className="flex-1 p-4">
      <div className="grid grid-cols-3 gap-2.5 mb-3">
        <div className="rounded-md py-2.5 px-2 text-center" style={{ background: "#f0fdf4", border: "1px solid #bbf7d0" }}>
          <div className="text-[18px] font-extrabold leading-none" style={{ color: "#047857" }}>96</div>
          <div className="text-[8px] font-semibold mt-1 uppercase tracking-wider" style={{ color: "#64748b" }}>Perf</div>
        </div>
        <div className="rounded-md py-2.5 px-2 text-center" style={{ background: "#f0fdf4", border: "1px solid #bbf7d0" }}>
          <div className="text-[18px] font-extrabold leading-none" style={{ color: "#047857" }}>100</div>
          <div className="text-[8px] font-semibold mt-1 uppercase tracking-wider" style={{ color: "#64748b" }}>A11y</div>
        </div>
        <div className="rounded-md py-2.5 px-2 text-center" style={{ background: "#fef3c7", border: "1px solid #fde68a" }}>
          <div className="text-[18px] font-extrabold leading-none" style={{ color: "#a16207" }}>92</div>
          <div className="text-[8px] font-semibold mt-1 uppercase tracking-wider" style={{ color: "#64748b" }}>SEO</div>
        </div>
      </div>
      <div>
        {[
          { w: "70%" },
          { w: "60%" },
          { w: "80%" },
          { w: "65%" },
          { w: "75%" },
        ].map((row, i, arr) => (
          <div key={i} className="flex items-center gap-2 py-1.5" style={{ borderBottom: i === arr.length - 1 ? "none" : "1px solid #f1f5f9" }}>
            <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#10b981" }}>
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

const SERVICES = [
  {
    title: "Custom React Application Development",
    body:
      "Single-page and multi-page React apps with clean state management, component architecture, and optimized rendering — responsive and maintainable from commit one.",
    features: ["React 19 + TypeScript by default", "Vite, Next.js, and Remix ready", "Redux, Zustand, TanStack Query"],
    mockup: <MockupCodeCanvas />,
    imageBg: "linear-gradient(135deg, #f5f3ff 0%, #ddd6fe 100%)",
    padMockup: false,
    reverse: false,
  },
  {
    title: "React Migration & Modernization",
    body:
      "Move legacy frontends (jQuery, AngularJS, class components) to modern React — hooks, functional components, TypeScript — incrementally, without a risky big-bang rewrite.",
    features: ["Strangler-fig incremental rollout", "Class to hooks refactor", "TypeScript adoption & contracts"],
    mockup: <MockupMigration />,
    imageBg: "linear-gradient(135deg, #f0f7ff 0%, #e0ecfc 100%)",
    padMockup: true,
    reverse: true,
  },
  {
    title: "Progressive Web Apps (PWAs) with React",
    body:
      "Installable, offline-capable web experiences that rival native apps in speed and engagement — without App Store review cycles.",
    features: ["Service workers & offline-first", "Push notifications & background sync", "Lighthouse 95+ scores"],
    mockup: <MockupPhone />,
    imageBg: "linear-gradient(135deg, #f0fdfa 0%, #99f6e4 100%)",
    padMockup: false,
    reverse: false,
  },
  {
    title: "Design System Implementation",
    body:
      "Reusable, accessible React component libraries — tokens, theming, dark mode, Storybook-documented. Consistency across products and velocity on new features.",
    features: ["Tokenized theming & dark mode", "Storybook + visual regression", "WCAG 2.2 AA accessibility"],
    mockup: <MockupMultiDevice />,
    imageBg: "linear-gradient(135deg, #ecfeff 0%, #a5f3fc 100%)",
    padMockup: false,
    reverse: true,
  },
  {
    title: "React Performance Optimization",
    body:
      "Profiling, render tuning, lazy loading, code splitting, memoization, and bundle-size surgery. Sub-1s LCP and INP under 200ms — on real-world networks, not lab conditions.",
    features: ["React Profiler + Lighthouse audit", "Code splitting & route-based chunks", "Core Web Vitals under thresholds"],
    mockup: <MockupPerf />,
    imageBg: "linear-gradient(135deg, #ecfdf5 0%, #bbf7d0 100%)",
    padMockup: true,
    reverse: false,
  },
  {
    title: "Team Augmentation & Staff Extension",
    body:
      "Senior React engineers embed into your existing team — your sprints, your standups, your code review flow. Most hires are contributing PRs within the first week.",
    features: ["7-day senior dev ramp-up", "Time-zone aligned to your hours", "Save up to 60% vs. in-house"],
    mockup: (
      <MockupMultiDevice
        accent="#7c3aed"
        bg="linear-gradient(135deg, #f5f3ff 0%, #ddd6fe 100%)"
        screenGrad="linear-gradient(160deg, white, #f5f3ff)"
        cellBg="#f5f3ff"
        cellBorder="#ddd6fe"
      />
    ),
    imageBg: "linear-gradient(135deg, #f5f3ff 0%, #ddd6fe 100%)",
    padMockup: false,
    reverse: true,
  },
];

// ---------- Page ----------
const ReactJSDevelopmentService = () => {
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
                  <IconReactAtom /> React.js Development Services
                </span>
                <h1 className="font-extrabold mb-5 text-white" style={{ fontSize: "clamp(34px, 4vw, 54px)", letterSpacing: "-1.5px", lineHeight: 1.1 }}>
                  Build Lightning-Fast <span style={gradientTextStyle}>React Apps Users Adore</span>
                </h1>
                <p className="mb-8" style={{ fontSize: 18, lineHeight: 1.7, color: "rgba(255,255,255,0.72)", maxWidth: 580 }}>
                  150+ React apps shipped. Sub-1s load times. 100+ senior React engineers across 20+ countries — ready to plug into your sprint this week and ship clean, typed, testable code from day one.
                </p>
                <div className="flex flex-wrap gap-3.5 my-10">
                  <Link href="#contact"
                    className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all"
                    style={{ background: "#017eeb", color: "#fff", border: "1px solid #017eeb", padding: "16px 32px", fontSize: 16 }}>
                    Get My Free React Consultation <IconArrowRight />
                  </Link>
                  <Link href="#services"
                    className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:bg-white/10"
                    style={{ background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.3)", padding: "16px 32px", fontSize: 16 }}>
                    See What We Build
                  </Link>
                </div>
                <div className="flex flex-wrap gap-[18px]" style={{ color: "rgba(255,255,255,0.65)", fontSize: 14 }}>
                  {["Free 30-min architecture call", "Senior React devs in 7 days", "No commitment"].map((t) => (
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
            <h2 className="font-extrabold" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0d0f1a" }}>Our ReactJS Development Services</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>From custom SPAs to full modernization, design systems, and embedded React pods — we partner with you across the full spectrum of React work.</p>
          </div>

          {SERVICES.map((svc) => (
            <div key={svc.title} className="grid items-center gap-8 lg:gap-[60px] py-10 lg:py-12"
              style={{ gridTemplateColumns: "1fr" }}>
              <div className={`grid items-center gap-8 lg:gap-[60px] grid-cols-1 lg:grid-cols-2 ${svc.reverse ? "lg:[direction:rtl]" : ""}`}>
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
          <h3 className="font-extrabold mb-3.5" style={{ fontSize: "clamp(24px, 3vw, 36px)", color: "#fff", lineHeight: 1.2, letterSpacing: "-0.5px" }}>Ready to Ship Your React App?</h3>
          <p className="mb-7" style={{ color: "rgba(255,255,255,0.85)", fontSize: 16, lineHeight: 1.7 }}>Get a free 30-minute call with a senior React architect. We&apos;ll review your stack, spot quick perf wins, and scope your next release — no commitment.</p>
          <Link href="#contact"
            className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:!bg-[#0d0f1a] hover:!text-white hover:!border-[#0d0f1a] mt-5"
            style={{ background: "#fff", color: "#017eeb", border: "1px solid #fff", padding: "16px 32px", fontSize: 16 }}>
            Start My React Project
          </Link>
        </div>
      </section>

      {/* WHY BRILWORKS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="text-center mx-auto mb-14" style={{ maxWidth: 720 }}>
            <span className="inline-block mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#017eeb" }}>Why Brilworks</span>
            <h2 className="font-extrabold" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0d0f1a" }}>Why 100+ Businesses Choose Our ReactJS Team</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>We make React projects successful by combining frontend depth with engineering discipline — not just &ldquo;another agency that writes JSX.&rdquo;</p>
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
            <h2 className="font-extrabold text-white" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15 }}>What Founders, CTOs &amp; Frontend Leads Say</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "rgba(255,255,255,0.62)" }}>Real outcomes from real partners who trusted us with their React stack.</p>
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
            <span className="inline-block mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#017eeb" }}>Industries We Serve</span>
            <h2 className="font-extrabold" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0d0f1a" }}>React Expertise Across Verticals</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>We&apos;ve built React apps for regulated, transactional, and consumer-scale industries — each with its own performance, accessibility, and compliance demands.</p>
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
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>Everything founders, CTOs, and frontend leads typically ask before engaging a React partner.</p>
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

      {/* CONTACT FORM */}
      <div id="contact">
        <SolutionContactForm
          title="Ready to Build with ReactJS?"
          description="You're one conversation away from shipping faster React. Tell us about your stack, users, and goals — we'll show you exactly how we can help."
          messageRequired={false}
          submitLabel="Get My Free React Consultation"
          benefits={[
            "Free 30-minute call with a senior React architect",
            "Detailed proposal and timeline within 48 hours",
            "Senior React engineers ramped up in 7 days",
            "Flexible engagement: project, dedicated team, or staff augmentation",
            "100+ React engineers across 20+ countries",
          ]}
        />
      </div>
    </>
  );
};

export default ReactJSDevelopmentService;
