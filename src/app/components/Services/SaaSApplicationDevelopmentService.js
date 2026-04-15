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

const IconSparkle = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2L15 8L21 9L17 14L18 21L12 18L6 21L7 14L3 9L9 8L12 2Z" fill="#00b4d8" opacity="0.3" />
    <path d="M12 2L15 8L21 9L17 14L18 21L12 18L6 21L7 14L3 9L9 8L12 2Z" stroke="#00b4d8" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const IconShield = ({ color = "#017eeb" }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2L4 5V11C4 16 7.5 20.5 12 22C16.5 20.5 20 16 20 11V5L12 2Z" fill={color} opacity="0.15" />
    <path d="M12 2L4 5V11C4 16 7.5 20.5 12 22C16.5 20.5 20 16 20 11V5L12 2Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M9 12L11 14L15 10" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconStack = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M3 3H21V21H3V3Z" fill="#017eeb" opacity="0.15" />
    <path d="M3 3H21V21H3V3ZM9 9H15V15H9V9Z" stroke="#017eeb" strokeWidth="1.8" strokeLinejoin="round" />
  </svg>
);

const IconNetwork = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="6" cy="12" r="3" fill="#017eeb" opacity="0.15" />
    <circle cx="18" cy="6" r="3" fill="#017eeb" opacity="0.15" />
    <circle cx="18" cy="18" r="3" fill="#017eeb" opacity="0.15" />
    <circle cx="6" cy="12" r="3" stroke="#017eeb" strokeWidth="1.8" />
    <circle cx="18" cy="6" r="3" stroke="#017eeb" strokeWidth="1.8" />
    <circle cx="18" cy="18" r="3" stroke="#017eeb" strokeWidth="1.8" />
    <path d="M8.6 10.5L15.4 7.5M8.6 13.5L15.4 16.5" stroke="#017eeb" strokeWidth="1.8" />
  </svg>
);

const IconUptime = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M9 12L11 14L15 10M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z" fill="#017eeb" opacity="0.15" />
    <path d="M9 12L11 14L15 10M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z" stroke="#017eeb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ---------- Style tokens (inline so nothing shared is touched) ----------
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
  { icon: <IconStack />, label: "30+ SaaS Products Live" },
  { icon: <IconNetwork />, label: "Multi-Tenant Architecture" },
  { icon: <IconUptime />, label: "99.9% Uptime SLA" },
];

const HERO_STATS = [
  { value: "30+", label: "SaaS Apps Shipped" },
  { value: "$40M+", label: "MRR Served on Our Platforms" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "98%", label: "Client Satisfaction" },
];

const BENEFITS = [
  {
    title: "Fast-Track Your Idea",
    tint: "#e8f0fd",
    body: "We don't just code, we co-create. Our SaaS experts refine your vision and propel it through efficient development — all under one roof.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="#017eeb" opacity="0.15" />
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#017eeb" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "UX-Obsessed Design",
    tint: "#ede9fe",
    body: "We craft interfaces that captivate users while building fortresses around your data. Your SaaS will be both stunning and secure.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="8" r="4" fill="#4f46e5" opacity="0.15" />
        <path d="M12 2C7.58 2 4 5.58 4 10C4 13.5 6.5 16.5 10 17.5V22H14V17.5C17.5 16.5 20 13.5 20 10C20 5.58 16.42 2 12 2Z" stroke="#4f46e5" strokeWidth="1.8" strokeLinejoin="round" />
        <circle cx="12" cy="8" r="4" stroke="#4f46e5" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: "Scalable Architecture from Day One",
    tint: "#d1fae5",
    body: "Forget costly overhauls. Your application seamlessly adapts to your ever-expanding tenant base. We design your SaaS to flex with your growth.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 3V21H21M7 14L11 10L15 14L21 8" fill="#10b981" opacity="0.15" />
        <path d="M3 3V21H21M7 14L11 10L15 14L21 8M21 8H17M21 8V12" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Collaborative Development",
    tint: "#ccfbf1",
    body: "We're not just developers — we're your partners in success. Clear communication and two-week sprint reviews ensure your vision becomes reality.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="9" cy="8" r="4" fill="#0d9488" opacity="0.15" />
        <circle cx="17" cy="9" r="3" fill="#0d9488" opacity="0.15" />
        <path d="M2 21V19C2 16.8 3.8 15 6 15H12C14.2 15 16 16.8 16 19V21M16 21V19C16 17 14.5 15.5 12.5 15.2M22 21V19C22 17 20.5 15.5 18.5 15.2" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="9" cy="8" r="4" stroke="#0d9488" strokeWidth="1.8" />
        <circle cx="17" cy="9" r="3" stroke="#0d9488" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: "Future-Proof Tech Stack",
    tint: "#cffafe",
    body: "We stay ahead of the curve, leveraging cutting-edge SaaS technology to create platforms that never go out of style. Stay competitive.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L2 7V12C2 16.5 6.5 20.5 12 22C17.5 20.5 22 16.5 22 12V7L12 2Z" fill="#0891b2" opacity="0.15" />
        <path d="M12 2L2 7V12C2 16.5 6.5 20.5 12 22C17.5 20.5 22 16.5 22 12V7L12 2Z" stroke="#0891b2" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M8 12L11 15L16 9" stroke="#0891b2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Continuous Innovation",
    tint: "#dbeafe",
    body: "We offer ongoing support and maintenance — constantly evolving your SaaS to meet changing customer needs and emerging user demands.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M21 4V10H15M3 20V14H9M21 12C21 16.97 16.97 21 12 21C9.5 21 7.27 20 5.65 18.4M3 12C3 7.03 7.03 3 12 3C14.5 3 16.73 4 18.35 5.6" fill="#1e40af" opacity="0.15" />
        <path d="M21 4V10H15M3 20V14H9M21 12C21 16.97 16.97 21 12 21C9.5 21 7.27 20 5.65 18.4L3 16M3 12C3 7.03 7.03 3 12 3C14.5 3 16.73 4 18.35 5.6L21 8" stroke="#1e40af" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const TESTIMONIALS = [
  {
    initials: "LB",
    name: "Liz Bullen",
    role: "Founder, Lyfecoin",
    quote:
      "Team Brilworks was an absolute delight to work with. They took my list of prioritized needs and shipped our SaaS MVP in under 4 weeks — we had paying customers by month two.",
  },
  {
    initials: "GO",
    name: "Golan",
    role: "Director of R&D / CTO, Trackimo",
    quote:
      "Excellent knowledge of Java, Spring Boot, DB, and DevOps. We hit 99.9% API uptime across our SaaS platform in year one. Dedicated, available — I strongly recommend Brilworks.",
  },
  {
    initials: "OR",
    name: "Orokii Team",
    role: "VP Product, Marketplace SaaS",
    quote:
      "Brilworks treats our SaaS platform as if it were their own. Exceptional communication, on-time delivery, and they always go the extra mile. We onboarded 3,200 customers in our first 60 days.",
  },
];

const HONORS = [
  { label: "AWS Partner · Advanced Tier", icon: <IconShield /> },
  {
    label: "Clutch Global Spring 2025",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L15 8.5L22 9.3L17 14L18.2 21L12 17.7L5.8 21L7 14L2 9.3L9 8.5L12 2Z" stroke="#017eeb" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Clutch Global Fall 2024",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L15 8.5L22 9.3L17 14L18.2 21L12 17.7L5.8 21L7 14L2 9.3L9 8.5L12 2Z" stroke="#017eeb" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "GoodFirms Top 2025\u201326",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="8" r="6" stroke="#017eeb" strokeWidth="1.8" />
        <path d="M9 14L7 22L12 19L17 22L15 14" stroke="#017eeb" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "SelectedFirms Top 10 2026",
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
    label: "FinTech SaaS",
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
    label: "HRTech SaaS",
    href: "/industry/hr-software-development/",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="9" cy="8" r="4" fill="#4f46e5" opacity="0.15" />
        <circle cx="17" cy="9" r="3" fill="#4f46e5" opacity="0.15" />
        <circle cx="9" cy="8" r="4" stroke="#4f46e5" strokeWidth="1.8" />
        <circle cx="17" cy="9" r="3" stroke="#4f46e5" strokeWidth="1.8" />
        <path d="M2 21V19C2 16.8 3.8 15 6 15H12C14.2 15 16 16.8 16 19V21M22 21V19C22 17 20.5 15.5 18.5 15.2" stroke="#4f46e5" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "MarTech SaaS",
    href: "/industry/martech-software-development/",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 3V21H21M7 14L11 10L15 14L21 8" fill="#10b981" opacity="0.15" />
        <path d="M3 3V21H21M7 14L11 10L15 14L21 8M21 8H17M21 8V12" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "EdTech SaaS",
    href: "/industry/edtech-software-development/",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M2 8L12 3L22 8L12 13L2 8Z" fill="#0d9488" opacity="0.15" />
        <path d="M2 8L12 3L22 8L12 13L2 8ZM6 10V16C6 16 8 18 12 18C16 18 18 16 18 16V10" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "HealthTech SaaS",
    href: "/industry/healthcare-software-development/",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 21C12 21 4 14 4 8.5C4 5.5 6.5 3 9.5 3C11 3 12 4 12 4C12 4 13 3 14.5 3C17.5 3 20 5.5 20 8.5C20 14 12 21 12 21Z" fill="#ef4444" opacity="0.15" />
        <path d="M12 21C12 21 4 14 4 8.5C4 5.5 6.5 3 9.5 3C11 3 12 4 12 4C12 4 13 3 14.5 3C17.5 3 20 5.5 20 8.5C20 14 12 21 12 21Z" stroke="#ef4444" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "B2B SaaS",
    href: "#",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1" fill="#0891b2" opacity="0.15" />
        <rect x="14" y="3" width="7" height="7" rx="1" fill="#0891b2" opacity="0.15" />
        <rect x="3" y="14" width="7" height="7" rx="1" fill="#0891b2" opacity="0.15" />
        <rect x="14" y="14" width="7" height="7" rx="1" fill="#0891b2" opacity="0.15" />
        <rect x="3" y="3" width="7" height="7" rx="1" stroke="#0891b2" strokeWidth="1.8" />
        <rect x="14" y="3" width="7" height="7" rx="1" stroke="#0891b2" strokeWidth="1.8" />
        <rect x="3" y="14" width="7" height="7" rx="1" stroke="#0891b2" strokeWidth="1.8" />
        <rect x="14" y="14" width="7" height="7" rx="1" stroke="#0891b2" strokeWidth="1.8" />
      </svg>
    ),
  },
];

const FAQ = [
  {
    q: "How long does it take to develop a SaaS product?",
    a: "The development timeframe depends on the complexity of your product. A focused SaaS MVP typically ships in 10-16 weeks; a full multi-tenant platform with billing, RBAC, and admin console in 16-24 weeks. We share a detailed estimate within 48 hours.",
  },
  {
    q: "What's included in your SaaS development services?",
    a: "Our services cover the entire SaaS lifecycle — ideation, brand design, architecture, development, subscription billing integration, testing, deployment, and ongoing 24/7 support.",
  },
  {
    q: "How much does it cost to develop a SaaS product?",
    a: "Cost varies with features, complexity, and timeline. Focused SaaS MVPs start around $30K; full multi-tenant platforms range $75K-$250K+. We offer flexible engagement models (T&M, Fixed Cost, Dedicated Team) to suit your budget.",
  },
  {
    q: "How do you ensure my SaaS product is secure?",
    a: "Security is built in, not bolted on. We implement SOC 2 / GDPR-ready patterns — encryption at rest and in transit, RBAC, audit logs, dependency scanning, and regular penetration testing. We also sign NDAs before any discussion.",
  },
  {
    q: "How do you handle multi-tenancy and data isolation?",
    a: "We choose the tenancy model (pooled, siloed, or hybrid) based on your compliance, performance, and cost requirements. Every decision is documented and reviewed with your team before we build.",
  },
  {
    q: "Can you integrate my SaaS with other applications?",
    a: "Yes — we have deep expertise in integrating SaaS with Stripe, Chargebee, HubSpot, Salesforce, Slack, and hundreds of third-party APIs. We also build robust webhook and public API layers so your customers can integrate too.",
  },
  {
    q: "What happens after my SaaS product launches?",
    a: "We offer ongoing support and maintenance — 24/7 monitoring, bug fixes, feature additions, security patches, and performance optimization. Most clients continue with us 12+ months post-launch as their SaaS scales.",
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

const MockupStickyBoard = ({ label }) => (
  <div className="w-full h-full rounded-xl overflow-hidden flex flex-col bg-white" style={{ boxShadow: "0 8px 24px rgba(13,15,26,0.08)" }}>
    <MockBar label={label} />
    <div className="flex-1 relative p-4" style={{ background: "#fafbfc", backgroundImage: "radial-gradient(#e2e8f0 1px, transparent 1px)", backgroundSize: "14px 14px" }}>
      {[
        { c: "#fef3c7", r: "-5deg", left: "6%", top: "14%", w1: "75%", w2: "55%" },
        { c: "#dbeafe", r: "3deg", left: "38%", top: "8%", w1: "80%", w2: "60%" },
        { c: "#dcfce7", r: "-3deg", left: "68%", top: "18%", w1: "65%", w2: "75%" },
        { c: "#fce7f3", r: "4deg", left: "14%", top: "55%", w1: "70%", w2: "50%" },
        { c: "#e0e7ff", r: "-2deg", left: "48%", top: "60%", w1: "80%", w2: "55%" },
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

const codeSeg = (cls, w) => {
  const colors = { k: "#c084fc", s: "#86efac", v: "#fbbf24", t: "#67e8f9", x: "#475569" };
  return <span className="inline-block rounded-sm" style={{ height: 7, width: w, background: colors[cls] }} />;
};

const MockupCodeCanvas = ({ label }) => (
  <div className="w-full h-full rounded-xl overflow-hidden flex flex-col bg-white" style={{ boxShadow: "0 8px 24px rgba(13,15,26,0.08)" }}>
    <MockBar label={label} />
    <div className="flex-1 grid grid-cols-2">
      <div className="p-3.5" style={{ background: "#0d1117" }}>
        {[
          [["k", 18], ["t", 36], ["x", 8]],
          [["x", 8], ["k", 24], ["s", 48]],
          [["x", 8], ["v", 18], ["s", 30], ["t", 18]],
          [["x", 16], ["k", 30], ["v", 24]],
          [["x", 8], ["t", 42], ["x", 6]],
          [["k", 20], ["s", 40]],
          [["x", 24], ["v", 30]],
          [["t", 18], ["s", 36]],
        ].map((line, i) => (
          <div key={i} className="flex gap-1.5 items-center mb-[7px]">
            <b className="text-[9px] font-mono min-w-[14px]" style={{ color: "#94a3b8" }}>{i + 1}</b>
            {line.map(([c, w], j) => <span key={j}>{codeSeg(c, w)}</span>)}
          </div>
        ))}
      </div>
      <div className="p-3.5" style={{ background: "#f8fafc" }}>
        {[
          { color: "#4f46e5", w1: "80%", w2: "60%", hasSecond: true },
          { color: "#7c3aed", w1: "75%", w2: "55%", hasSecond: true },
          { color: "#a855f7", w1: "70%", w2: null, hasSecond: false },
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

const MockupStatsDashboard = ({ label, stats, rows }) => (
  <div className="w-full h-full rounded-xl overflow-hidden flex flex-col bg-white" style={{ boxShadow: "0 8px 24px rgba(13,15,26,0.08)" }}>
    <MockBar label={label} />
    <div className="flex-1 p-4">
      <div className="grid grid-cols-3 gap-2.5 mb-3">
        {stats.map((s, i) => (
          <div key={i} className="rounded-md py-2.5 px-2 text-center"
            style={{ background: s.warn ? "#fef3c7" : "#f0fdf4", border: s.warn ? "1px solid #fde68a" : "1px solid #bbf7d0" }}>
            <div className="text-[18px] font-extrabold leading-none" style={{ color: s.warn ? "#a16207" : "#047857" }}>{s.n}</div>
            <div className="text-[8px] font-semibold mt-1 uppercase tracking-wider" style={{ color: "#64748b" }}>{s.lb}</div>
          </div>
        ))}
      </div>
      <div>
        {rows.map((row, i, arr) => (
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
      <div style={{ width: 38, height: 38, borderRadius: 10, background: "linear-gradient(135deg, #f59e0b, #ef4444)", boxShadow: "0 4px 12px rgba(13,148,136,0.15)" }} />
      <div style={{ width: 38, height: 38, borderRadius: 10, background: "linear-gradient(135deg, #8b5cf6, #ec4899)", boxShadow: "0 4px 12px rgba(13,148,136,0.15)" }} />
    </div>
  </div>
);

const MockupMultiDevice = () => (
  <div className="grid gap-3.5 p-3.5 h-full items-center" style={{ gridTemplateColumns: "2fr 1fr", background: "linear-gradient(135deg, #f0f7ff 0%, #e0ecfc 100%)" }}>
    <div style={{ background: "#0d0f1a", borderRadius: "8px 8px 4px 4px", padding: "6px 6px 0" }}>
      <div className="bg-white p-2" style={{ borderRadius: "4px 4px 0 0", minHeight: 110 }}>
        <div style={{ height: 8, width: "40%", background: "#017eeb", borderRadius: 2, marginBottom: 8 }} />
        <div className="grid grid-cols-3 gap-1 mb-2">
          <div style={{ height: 24, borderRadius: 3, background: "linear-gradient(135deg, #017eeb, #06b6d4)" }} />
          <div style={{ height: 24, borderRadius: 3, background: "#ecfeff", border: "1px solid #cffafe" }} />
          <div style={{ height: 24, borderRadius: 3, background: "#ecfeff", border: "1px solid #cffafe" }} />
        </div>
        {["80%", "65%", "75%", "55%"].map((w, i) => (
          <div key={i} style={{ height: 4, background: "#e2e8f0", borderRadius: 1.5, marginBottom: 3, width: w }} />
        ))}
      </div>
      <div style={{ height: 6, background: "#1e293b", borderRadius: "0 0 8px 8px" }} />
    </div>
    <div style={{ background: "#0d0f1a", borderRadius: 10, padding: 5 }}>
      <div className="p-2" style={{ background: "linear-gradient(160deg, white, #ecfeff)", borderRadius: 6, minHeight: 90 }}>
        <div style={{ height: 5, width: "50%", background: "#017eeb", borderRadius: 2, marginBottom: 6 }} />
        <div style={{ height: 3, background: "#cbd5e1", borderRadius: 1.5, marginBottom: 3 }} />
        <div style={{ height: 3, background: "#cbd5e1", borderRadius: 1.5, marginBottom: 3, width: "60%" }} />
        <div style={{ height: 3, background: "#cbd5e1", borderRadius: 1.5, marginBottom: 3 }} />
        <div style={{ height: 3, background: "#cbd5e1", borderRadius: 1.5, marginBottom: 3, width: "60%" }} />
        <div style={{ height: 12, width: "50%", background: "#017eeb", borderRadius: 3, marginTop: 6 }} />
      </div>
    </div>
  </div>
);

const SERVICES = [
  {
    title: "Idea Productization & Brand Design",
    body:
      "We help you refine your SaaS concept, develop a compelling brand identity, and create a clear go-to-market roadmap — so your first investor pitch, landing page, and MVP all tell the same story.",
    features: ["Value proposition & positioning", "Brand identity & design system", "MVP scope & launch roadmap"],
    mockup: <MockupStickyBoard label="Product Roadmap · v1" />,
    imageBg: "linear-gradient(135deg, #f0f7ff 0%, #e0ecfc 100%)",
    padMockup: true,
    reverse: false,
  },
  {
    title: "SaaS Consulting",
    body:
      "Expert guidance throughout your SaaS journey — from initial concept to market launch. We help you define product strategy, identify market fit, choose a pricing model, and design a winning go-to-market motion.",
    features: ["Product-market fit discovery", "Pricing & packaging strategy", "Technology stack selection"],
    mockup: <MockupCodeCanvas label="strategy.md · business-model.fig" />,
    imageBg: "linear-gradient(135deg, #f5f3ff 0%, #ddd6fe 100%)",
    padMockup: true,
    reverse: true,
  },
  {
    title: "SaaS Architecture Design",
    body:
      "We design scalable, secure, multi-tenant architectures engineered for the workloads you'll have at 10,000 customers — not just your first 100. Reliable user experience, enterprise-ready from day one.",
    features: ["Multi-tenant data isolation patterns", "Auto-scaling cloud infrastructure", "SOC 2 / GDPR security by design"],
    mockup: (
      <MockupStatsDashboard
        label="Tenant Admin · MRR Dashboard"
        stats={[{ n: "$42K", lb: "MRR" }, { n: "$504K", lb: "ARR" }, { n: "2.1%", lb: "Churn", warn: true }]}
        rows={[{ w: "72%" }, { w: "64%" }, { w: "80%" }, { w: "58%" }]}
      />
    ),
    imageBg: "linear-gradient(135deg, #ecfdf5 0%, #bbf7d0 100%)",
    padMockup: true,
    reverse: false,
  },
  {
    title: "SaaS Application Development",
    body:
      "Our skilled developers leverage modern frameworks — Next.js, Node, Python, AWS — to build high-performing, secure SaaS applications with subscription billing, role-based access, and admin consoles ready out of the gate.",
    features: ["Stripe / Chargebee subscription billing", "SSO, RBAC, audit logging", "Admin console & tenant onboarding flows"],
    mockup: <MockupPhone />,
    imageBg: "linear-gradient(135deg, #f0fdfa 0%, #99f6e4 100%)",
    padMockup: false,
    reverse: true,
  },
  {
    title: "SaaS Support & Maintenance",
    body:
      "Bug fixes, feature updates, and ongoing optimization — we keep your SaaS optimized and up-to-date, ensuring peak performance, enterprise-grade uptime, and a seamless user experience as your tenant count scales.",
    features: ["24/7 monitoring & on-call", "Security patches & dependency upgrades", "Performance tuning & cost optimization"],
    mockup: (
      <MockupStatsDashboard
        label="SRE Console · Live"
        stats={[{ n: "247", lb: "Checks Passed" }, { n: "2", lb: "Warnings", warn: true }, { n: "24/7", lb: "On-Call" }]}
        rows={[{ w: "70%" }, { w: "60%" }, { w: "80%" }, { w: "65%" }, { w: "75%" }]}
      />
    ),
    imageBg: "linear-gradient(135deg, #ecfeff 0%, #a5f3fc 100%)",
    padMockup: true,
    reverse: false,
  },
  {
    title: "SaaS Platform Migration",
    body:
      "A smooth transition to your new SaaS home. We seamlessly migrate your software from on-premise servers or another platform, minimizing downtime and ensuring a successful move to the cloud without losing a single customer.",
    features: ["Zero-downtime cutover planning", "Data migration & validation", "Legacy-to-cloud rearchitecture"],
    mockup: <MockupMultiDevice />,
    imageBg: "linear-gradient(135deg, #f0f7ff 0%, #e0ecfc 100%)",
    padMockup: false,
    reverse: true,
  },
];

// ---------- Page ----------
const SaaSApplicationDevelopmentService = () => {
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
                  <IconSparkle /> SaaS Application Development
                </span>
                <h1 className="font-extrabold mb-5 text-white" style={{ fontSize: "clamp(34px, 4vw, 54px)", letterSpacing: "-1.5px", lineHeight: 1.1 }}>
                  Build SaaS Products That Scale to MRR — <span style={gradientTextStyle}>From First Signup to Enterprise</span>
                </h1>
                <p className="mb-8" style={{ fontSize: 18, lineHeight: 1.7, color: "rgba(255,255,255,0.72)", maxWidth: 580 }}>
                  We engineer multi-tenant SaaS platforms that onboard paying customers in weeks, not quarters. 30+ SaaS products live across FinTech, HRTech, and B2B — 99.9% uptime SLA, subscription billing ready on day one.
                </p>
                <div className="flex flex-wrap gap-3.5 mb-10">
                  <Link href="#contact"
                    className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all"
                    style={{ background: "#017eeb", color: "#fff", border: "1px solid #017eeb", padding: "16px 32px", fontSize: 16 }}>
                    Get a Quote <IconArrowRight />
                  </Link>
                  <Link href="#services"
                    className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:bg-white/10"
                    style={{ background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.3)", padding: "16px 32px", fontSize: 16 }}>
                    Explore Our SaaS Services
                  </Link>
                </div>
                <div className="flex flex-wrap gap-[18px]" style={{ color: "rgba(255,255,255,0.65)", fontSize: 14 }}>
                  {["Multi-tenant from day one", "Subscription billing ready", "NDA before first call"].map((t) => (
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
            <h2 className="font-extrabold" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0d0f1a" }}>Our SaaS Development Services</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>End-to-end SaaS engineering — from validating the idea to migrating enterprise customers off legacy platforms.</p>
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
          <h3 className="font-extrabold mb-3.5" style={{ fontSize: "clamp(24px, 3vw, 36px)", color: "#fff", lineHeight: 1.2, letterSpacing: "-0.5px" }}>Ready to Turn Your SaaS Idea Into Monthly Recurring Revenue?</h3>
          <p className="mb-7" style={{ color: "rgba(255,255,255,0.85)", fontSize: 16, lineHeight: 1.7 }}>Get a free 30-minute consultation with our SaaS architects. We&apos;ll review your product, map a multi-tenant roadmap, and estimate your MVP timeline — no commitment.</p>
          <Link href="#contact"
            className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:!bg-[#0d0f1a] hover:!text-white hover:!border-[#0d0f1a]"
            style={{ background: "#fff", color: "#017eeb", border: "1px solid #fff", padding: "16px 32px", fontSize: 16 }}>
            Let&apos;s Discuss
          </Link>
        </div>
      </section>

      {/* WHY BRILWORKS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="text-center mx-auto mb-14" style={{ maxWidth: 720 }}>
            <span className="inline-block mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#017eeb" }}>Why Brilworks</span>
            <h2 className="font-extrabold" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0d0f1a" }}>Built by Engineers Who&apos;ve Shipped 30+ SaaS Products</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>We don&apos;t just code — we co-create. From first wireframe to enterprise tenant #500, we partner with you through every SaaS growth stage.</p>
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
            <h2 className="font-extrabold text-white" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15 }}>What SaaS Founders, CTOs &amp; Product Leaders Say</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "rgba(255,255,255,0.62)" }}>Real outcomes from real SaaS partners — not curated marketing quotes.</p>
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
            <span className="inline-block mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#017eeb" }}>SaaS Verticals</span>
            <h2 className="font-extrabold" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0d0f1a" }}>Deep Domain Expertise Across SaaS Verticals</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>Not generalists. We have case studies, clients, and production code live in each of these SaaS verticals.</p>
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
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>Everything SaaS founders and product teams typically ask before working with us.</p>
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
          title="Ready to Build Your SaaS Product?"
          description="Connect with our SaaS architects for a no-obligation discussion about your vision — and how we can help you ship it to paying customers."
          messageRequired={false}
          submitLabel="Get a Quote"
          benefits={[
            "Free 30-minute consultation with a senior SaaS architect",
            "Detailed multi-tenant roadmap within 48 hours",
            "NDA signed before first conversation",
            "Response guaranteed within 24 business hours",
            "30+ SaaS products shipped across 6 verticals",
          ]}
        />
      </div>
    </>
  );
};

export default SaaSApplicationDevelopmentService;
