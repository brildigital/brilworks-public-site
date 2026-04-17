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

const IconScreen = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="4" width="18" height="14" rx="2" fill="#017eeb" opacity="0.15" />
    <rect x="3" y="4" width="18" height="14" rx="2" stroke="#017eeb" strokeWidth="1.8" />
    <path d="M8 10L11 13L16 8" stroke="#017eeb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconBolt = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="#017eeb" opacity="0.15" />
    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#017eeb" strokeWidth="1.8" strokeLinejoin="round" />
  </svg>
);

const IconClock = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" fill="#017eeb" opacity="0.15" />
    <path d="M12 7V12L15 14M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z" stroke="#017eeb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconStarOutline = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2L15 8.5L22 9.3L17 14L18.2 21L12 17.7L5.8 21L7 14L2 9.3L9 8.5L12 2Z" fill="#017eeb" opacity="0.15" />
    <path d="M12 2L15 8.5L22 9.3L17 14L18.2 21L12 17.7L5.8 21L7 14L2 9.3L9 8.5L12 2Z" stroke="#017eeb" strokeWidth="1.8" strokeLinejoin="round" />
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
  { icon: <IconScreen />, label: "180+ Web Apps Shipped" },
  { icon: <IconBolt />, label: "Sub-1s Core Web Vitals" },
  { icon: <IconClock />, label: "99.9% Production Uptime" },
  { icon: <IconStarOutline />, label: "Clutch Global Award 2025" },
];

const HERO_STATS = [
  { value: "180+", label: "Web Apps Shipped" },
  { value: "99.9%", label: "Production Uptime" },
  { value: "<1s", label: "Avg Page Load Time" },
  { value: "98%", label: "Client Satisfaction" },
];

const BENEFITS = [
  {
    title: "Full-Cycle Delivery",
    tint: "#e8f0fd",
    body: "Discovery, design, engineering, QA, launch, and post-launch support — one accountable team from strategy to scale.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 3V21H21" stroke="#017eeb" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M7 17L11 13L15 15L21 9" fill="#017eeb" opacity="0.15" />
        <path d="M7 17L11 13L15 15L21 9M21 9H17M21 9V13" stroke="#017eeb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Scalable Architecture",
    tint: "#ede9fe",
    body: "From MVP to millions of users — we architect for horizontal scale, so you won't rewrite in 18 months when traffic spikes.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 12L6 9L12 15L18 9L21 12" stroke="#4f46e5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 18L6 15L12 21L18 15L21 18" stroke="#4f46e5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
      </svg>
    ),
  },
  {
    title: "Modern Tech Stack",
    tint: "#d1fae5",
    body: "ReactJS, Next.js, Node.js, Java, Python, AWS, Azure, GCP. Battle-tested tools your next engineering hire will already know.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M13 2L4 14H11L10 22L20 10H13L13 2Z" fill="#10b981" opacity="0.15" />
        <path d="M13 2L4 14H11L10 22L20 10H13L13 2Z" stroke="#10b981" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Agile & Transparent",
    tint: "#ccfbf1",
    body: "Weekly sprints, live demos, and a shared board. You see working software every Friday — never surprised, never in the dark.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" fill="#0d9488" opacity="0.15" />
        <path d="M12 7V12L15 14M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Security & Performance",
    tint: "#cffafe",
    body: "Sub-1s load times, OWASP-hardened APIs, encrypted data at rest and in transit. Security and speed are engineered in, not bolted on.",
    icon: <IconShield color="#0891b2" />,
  },
  {
    title: "On-Time, On-Budget",
    tint: "#dbeafe",
    body: "94% of our projects launch on or before the estimated date. Clear scope, clean estimates, and proactive communication throughout.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="18" height="16" rx="2" fill="#1e40af" opacity="0.15" />
        <path d="M3 4H21V20H3V4ZM8 2V6M16 2V6M3 10H21" stroke="#1e40af" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const TESTIMONIALS = [
  {
    initials: "DV",
    name: "David Velasquez",
    role: "CEO, Rastrack",
    quote:
      "Our web platform went from 4-second page loads to under 900ms after Brilworks re-architected the frontend. Signup conversion jumped 38% in the first month. Four-year partnership and counting.",
  },
  {
    initials: "LB",
    name: "Liz Bullen",
    role: "Founder, Lyfecoin",
    quote:
      "Brilworks shipped our MVP web app in under 4 weeks. It handled the launch traffic without a single error, and the architecture scaled cleanly when we hit 10x usage in month three.",
  },
  {
    initials: "GO",
    name: "Golan",
    role: "Director of R&D, Trackimo",
    quote:
      "The team hit 99.9% API uptime across three years of production traffic. Deep expertise in Java, Spring Boot, and DevOps. Communication is excellent — I strongly recommend Brilworks.",
  },
];

const HONORS = [
  { label: "AWS Advanced Tier Partner", icon: <IconShield /> },
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
    label: "Healthcare · HIPAA",
    href: "/industry/healthcare-software-development/",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 21C12 21 4 14 4 8.5C4 5.5 6.5 3 9.5 3C11 3 12 4 12 4C12 4 13 3 14.5 3C17.5 3 20 5.5 20 8.5C20 14 12 21 12 21Z" fill="#ef4444" opacity="0.15" />
        <path d="M12 21C12 21 4 14 4 8.5C4 5.5 6.5 3 9.5 3C11 3 12 4 12 4C12 4 13 3 14.5 3C17.5 3 20 5.5 20 8.5C20 14 12 21 12 21Z" stroke="#ef4444" strokeWidth="1.8" strokeLinejoin="round" />
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
    label: "E-Commerce",
    href: "/industry/e-commerce-app-development/",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 3H5L8 16H19L21 7H6" fill="#10b981" opacity="0.15" />
        <path d="M3 3H5L8 16H19L21 7H6M9 20C9 20.55 8.55 21 8 21C7.45 21 7 20.55 7 20C7 19.45 7.45 19 8 19C8.55 19 9 19.45 9 20ZM18 20C18 20.55 17.55 21 17 21C16.45 21 16 20.55 16 20C16 19.45 16.45 19 17 19C17.55 19 18 19.45 18 20Z" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "SaaS",
    href: "#contact",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="18" height="14" rx="2" fill="#0d9488" opacity="0.15" />
        <rect x="3" y="4" width="18" height="14" rx="2" stroke="#0d9488" strokeWidth="1.8" />
        <path d="M8 21H16M12 18V21" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Logistics",
    href: "/industry/fleet-management-software-development/",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M1 3H15V16H1V3Z M15 8H21L23 11V16H15V8Z" fill="#0891b2" opacity="0.15" />
        <path d="M1 3H15V16H1V3ZM15 8H21L23 11V16H15V8ZM7 19C7 20.1 6.1 21 5 21C3.9 21 3 20.1 3 19C3 17.9 3.9 17 5 17C6.1 17 7 17.9 7 19ZM19 19C19 20.1 18.1 21 17 21C15.9 21 15 20.1 15 19C15 17.9 15.9 17 17 17C18.1 17 19 17.9 19 19Z" stroke="#0891b2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const FAQ = [
  {
    q: "What's the difference between a website and a web app?",
    a: "A website is primarily informational — pages, content, maybe a contact form. A web app is a functional tool: it has user logins, dynamic data, business logic, integrations, and complex workflows. Think of web apps as software you use in a browser instead of a downloadable program.",
  },
  {
    q: "Which tech stack do you use for web app development?",
    a: "Frontend: ReactJS, Next.js, Angular, Vue, TypeScript. Backend: Node.js, Java (Spring Boot), Python, .NET. Databases: PostgreSQL, MongoDB, MySQL, Redis. Cloud: AWS (preferred), Azure, GCP. We pick the stack based on your performance, team, and scaling needs — not based on what's trendy.",
  },
  {
    q: "How long does it take to build a custom web app?",
    a: "Most MVPs ship in 10-16 weeks. Enterprise-grade platforms typically take 4-9 months. A simple internal tool can be delivered in as little as 6 weeks. We share a detailed timeline and milestone plan within 48 hours of your first consultation call.",
  },
  {
    q: "How much does a custom web app cost?",
    a: "Focused MVPs start around $20K. Mid-size SaaS web apps typically range $40K-$120K. Enterprise platforms with compliance and integrations range $60K-$250K+. We provide a transparent, itemized quote after a free consultation — no hidden fees.",
  },
  {
    q: "Do you offer post-launch support and maintenance?",
    a: "Yes. We offer flexible monthly retainers covering uptime monitoring, bug fixes, performance tuning, security patches, dependency upgrades, and feature additions. Most clients continue with us for 12+ months after launch with SLA-backed response times.",
  },
  {
    q: "Can you help modernize legacy web applications?",
    a: "Absolutely. We re-platform outdated systems (old PHP monoliths, jQuery frontends, on-prem servers) to modern, cloud-native architectures without disrupting operations. Typical outcomes: 3-5x faster load times, 30-50% lower infra costs, and a codebase your current team can actually extend.",
  },
  {
    q: "Who owns the code, designs, and IP?",
    a: "You own 100% of the code, designs, database, and intellectual property. We sign mutual NDAs before any project discussion and hand over full repository access, documentation, and deployment credentials at every engagement milestone.",
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

const MockupCodeCanvas = ({ label = "src/app/page.tsx · custom build", canvasBg = "#f8fafc", canvasColors = ["#4f46e5", "#017eeb", "#00b4d8"] }) => (
  <div className="w-full h-full rounded-xl overflow-hidden flex flex-col bg-white" style={{ boxShadow: "0 8px 24px rgba(13,15,26,0.08)" }}>
    <MockBar label={label} />
    <div className="flex-1 grid grid-cols-2">
      <div className="p-3.5" style={{ background: "#0d1117" }}>
        {[
          [["k", 22], ["t", 38], ["x", 6]],
          [["x", 8], ["k", 26], ["s", 46]],
          [["x", 8], ["v", 20], ["s", 32], ["t", 16]],
          [["x", 16], ["k", 28], ["v", 24]],
          [["x", 8], ["t", 44], ["x", 6]],
          [["k", 18], ["s", 42]],
          [["x", 24], ["v", 28]],
          [["t", 20], ["s", 34]],
        ].map((line, i) => (
          <div key={i} className="flex gap-1.5 items-center mb-[7px]">
            <b className="text-[9px] font-mono min-w-[14px]" style={{ color: "#94a3b8" }}>{i + 1}</b>
            {line.map(([c, w], j) => <span key={j}>{codeSeg(c, w)}</span>)}
          </div>
        ))}
      </div>
      <div className="p-3.5" style={{ background: canvasBg }}>
        {[
          { color: canvasColors[0], w1: "80%", w2: "60%", hasSecond: true },
          { color: canvasColors[1], w1: "75%", w2: "55%", hasSecond: true },
          { color: canvasColors[2], w1: "70%", w2: null, hasSecond: false },
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

const MockupStickyBoard = () => (
  <div className="w-full h-full rounded-xl overflow-hidden flex flex-col bg-white" style={{ boxShadow: "0 8px 24px rgba(13,15,26,0.08)" }}>
    <MockBar label="API Contract · FE ↔ BE" />
    <div className="flex-1 relative p-4" style={{ background: "#fafbfc", backgroundImage: "radial-gradient(#e2e8f0 1px, transparent 1px)", backgroundSize: "14px 14px" }}>
      {[
        { c: "#dbeafe", r: "-4deg", left: "6%", top: "12%", w1: "75%", w2: "55%" },
        { c: "#ede9fe", r: "3deg", left: "38%", top: "8%", w1: "80%", w2: "60%" },
        { c: "#fce7f3", r: "-2deg", left: "68%", top: "18%", w1: "65%", w2: "75%" },
        { c: "#dcfce7", r: "4deg", left: "14%", top: "55%", w1: "70%", w2: "50%" },
        { c: "#e0e7ff", r: "-3deg", left: "48%", top: "60%", w1: "80%", w2: "55%" },
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

const MockupStatsDashboard = ({ label, stats, rows }) => (
  <div className="w-full h-full rounded-xl overflow-hidden flex flex-col bg-white" style={{ boxShadow: "0 8px 24px rgba(13,15,26,0.08)" }}>
    <MockBar label={label} />
    <div className="flex-1 p-4">
      <div className="grid grid-cols-3 gap-2.5 mb-3">
        {stats.map((s, i) => (
          <div key={i} className="rounded-md py-2.5 px-2 text-center"
            style={{ background: s.tone === "warn" ? "#fef3c7" : s.tone === "err" ? "#fee2e2" : "#f0fdf4", border: `1px solid ${s.tone === "warn" ? "#fde68a" : s.tone === "err" ? "#fecaca" : "#bbf7d0"}` }}>
            <div className="text-[18px] font-extrabold leading-none" style={{ color: s.tone === "warn" ? "#a16207" : s.tone === "err" ? "#b91c1c" : "#047857" }}>{s.n}</div>
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

const MockupMultiDevice = () => (
  <div className="grid gap-3.5 p-3.5 h-full items-center" style={{ gridTemplateColumns: "2fr 1fr", background: "linear-gradient(135deg, #ecfeff 0%, #cffafe 100%)" }}>
    <div style={{ background: "#0d0f1a", borderRadius: "8px 8px 4px 4px", padding: "6px 6px 0" }}>
      <div className="bg-white p-2" style={{ borderRadius: "4px 4px 0 0", minHeight: 110 }}>
        <div style={{ height: 8, width: "40%", background: "#0891b2", borderRadius: 2, marginBottom: 8 }} />
        <div className="grid grid-cols-3 gap-1 mb-2">
          <div style={{ height: 24, borderRadius: 3, background: "linear-gradient(135deg, #0891b2, #06b6d4)" }} />
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
        <div style={{ height: 5, width: "50%", background: "#0891b2", borderRadius: 2, marginBottom: 6 }} />
        <div style={{ height: 3, background: "#cbd5e1", borderRadius: 1.5, marginBottom: 3 }} />
        <div style={{ height: 3, background: "#cbd5e1", borderRadius: 1.5, marginBottom: 3, width: "60%" }} />
        <div style={{ height: 3, background: "#cbd5e1", borderRadius: 1.5, marginBottom: 3 }} />
        <div style={{ height: 3, background: "#cbd5e1", borderRadius: 1.5, marginBottom: 3, width: "60%" }} />
        <div style={{ height: 12, width: "50%", background: "#0891b2", borderRadius: 3, marginTop: 6 }} />
      </div>
    </div>
  </div>
);

const SERVICES = [
  {
    title: "Custom Web Application Development",
    body:
      "We craft bespoke web apps tailored to how your team actually works. Consultative discovery, validated workflows, and production-ready code — no bloat, no boilerplate, no copy-paste templates.",
    features: [
      "Workflow discovery and user journey mapping",
      "Modular architecture you can extend",
      "100% code ownership and handover",
    ],
    mockup: <MockupCodeCanvas />,
    imageBg: "linear-gradient(135deg, #f0f7ff 0%, #e0ecfc 100%)",
    padMockup: true,
    reverse: false,
  },
  {
    title: "Frontend and Backend Development",
    body:
      "Structured, maintainable systems across client and server. Clean API contracts, consistent component libraries, and backends that stay performant as your data and traffic grow.",
    features: [
      "React, Next.js, Angular, Vue frontends",
      "Node.js, Java, Python, .NET APIs",
      "REST, GraphQL, event-driven architectures",
    ],
    mockup: <MockupStickyBoard />,
    imageBg: "linear-gradient(135deg, #f5f3ff 0%, #ddd6fe 100%)",
    padMockup: true,
    reverse: true,
  },
  {
    title: "Progressive Web App (PWA) Development",
    body:
      "Native-app feel in the browser. Our PWAs load instantly, work offline, send push notifications, and install straight to the home screen — with none of the app store friction or cost.",
    features: [
      "Service workers and offline-first data sync",
      "Lighthouse scores 90+ out of the box",
      "Push notifications and installable manifests",
    ],
    mockup: (
      <MockupStatsDashboard
        label="Lighthouse · PWA Audit"
        stats={[
          { n: "98", lb: "Performance" },
          { n: "100", lb: "PWA Score" },
          { n: "0.8s", lb: "LCP", tone: "warn" },
        ]}
        rows={[
          { w: "70%" },
          { w: "60%" },
          { w: "80%" },
          { w: "65%" },
          { w: "75%" },
        ]}
      />
    ),
    imageBg: "linear-gradient(135deg, #ecfdf5 0%, #bbf7d0 100%)",
    padMockup: true,
    reverse: false,
  },
  {
    title: "Enterprise Web Development",
    body:
      "For complex ecosystems with thousands of users, strict compliance, and legacy systems to integrate. We deliver web platforms that scale horizontally, meet SOC 2 and HIPAA, and plug into your existing stack.",
    features: [
      "Microservices and event-driven scaling",
      "SSO, RBAC, audit logs, data residency",
      "Legacy modernization without downtime",
    ],
    mockup: <MockupCodeCanvas label="infra/services.yaml · prod" canvasBg="#f0fdfa" canvasColors={["#0d9488", "#14b8a6", "#2dd4bf"]} />,
    imageBg: "linear-gradient(135deg, #f0fdfa 0%, #99f6e4 100%)",
    padMockup: true,
    reverse: true,
  },
  {
    title: "UI/UX Design for Web Applications",
    body:
      "Beautiful, intuitive interfaces engineered for engagement and conversion. User research, wireframes, and pixel-perfect designs that make first-time users feel like they've used your app for years.",
    features: [
      "User research, personas, journey maps",
      "Design systems and component libraries",
      "Responsive, accessible (WCAG 2.1 AA)",
    ],
    mockup: <MockupMultiDevice />,
    imageBg: "linear-gradient(135deg, #ecfeff 0%, #a5f3fc 100%)",
    padMockup: false,
    reverse: false,
  },
  {
    title: "Web App Maintenance & Optimization",
    body:
      "Launch is the start, not the finish line. We run ongoing monitoring, performance tuning, dependency updates, and feature work so your web app keeps improving instead of decaying.",
    features: [
      "24/7 uptime monitoring and alerting",
      "Core Web Vitals tuning and cost optimization",
      "Security patches and dependency upgrades",
    ],
    mockup: (
      <MockupStatsDashboard
        label="Uptime Monitor · Last 30d"
        stats={[
          { n: "99.98%", lb: "Uptime" },
          { n: "142ms", lb: "Avg Resp" },
          { n: "2", lb: "Alerts", tone: "warn" },
        ]}
        rows={[
          { w: "70%" },
          { w: "65%" },
          { w: "80%" },
          { w: "70%" },
          { w: "75%" },
        ]}
      />
    ),
    imageBg: "linear-gradient(135deg, #f0f7ff 0%, #e0ecfc 100%)",
    padMockup: true,
    reverse: true,
  },
];

// ---------- Page ----------
const WebAppDevelopmentService = () => {
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
                  <IconSparkle /> Web App Development Services
                </span>
                <h1 className="font-extrabold mb-5 text-white" style={{ fontSize: "clamp(34px, 4vw, 54px)", letterSpacing: "-1.5px", lineHeight: 1.1 }}>
                  Build Web Apps That <span style={gradientTextStyle}>Convert and Scale</span>
                </h1>
                <p className="mb-8" style={{ fontSize: 18, lineHeight: 1.7, color: "rgba(255,255,255,0.72)", maxWidth: 580 }}>
                  We engineer fast, secure, and user-friendly web applications for startups and enterprises. 180+ web apps shipped, 99.9% uptime, sub-1 second load times — production-ready from day one.
                </p>
                <div className="flex flex-wrap gap-3.5 my-10">
                  <Link href="#contact"
                    className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all"
                    style={{ background: "#017eeb", color: "#fff", border: "1px solid #017eeb", padding: "16px 32px", fontSize: 16 }}>
                    Get My Free Web App Consultation <IconArrowRight />
                  </Link>
                  <Link href="#services"
                    className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:bg-white/10"
                    style={{ background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.3)", padding: "16px 32px", fontSize: 16 }}>
                    See What We Build
                  </Link>
                </div>
                <div className="flex flex-wrap gap-[18px]" style={{ color: "rgba(255,255,255,0.65)", fontSize: 14 }}>
                  {["Free 30-min consultation", "48-hour proposal", "NDA on request"].map((t) => (
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
            <h2 className="font-extrabold" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0d0f1a" }}>Our Web Application Development Services</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>End-to-end web app engineering — from a focused MVP to enterprise platforms handling millions of requests per day.</p>
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
          <h3 className="font-extrabold mb-3.5" style={{ fontSize: "clamp(24px, 3vw, 36px)", color: "#fff", lineHeight: 1.2, letterSpacing: "-0.5px" }}>Ready to Ship Your Next Web App?</h3>
          <p className="mb-7" style={{ color: "rgba(255,255,255,0.85)", fontSize: 16, lineHeight: 1.7 }}>Get a free 30-minute consultation with a senior web engineer. We&apos;ll review your requirements, sketch the architecture, and estimate a timeline — no commitment, no sales pressure.</p>
          <Link href="#contact"
            className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:!bg-[#0d0f1a] hover:!text-white hover:!border-[#0d0f1a] mt-5"
            style={{ background: "#fff", color: "#017eeb", border: "1px solid #fff", padding: "16px 32px", fontSize: 16 }}>
            Start My Web App Project
          </Link>
        </div>
      </section>

      {/* WHY BRILWORKS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="text-center mx-auto mb-14" style={{ maxWidth: 720 }}>
            <span className="inline-block mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#017eeb" }}>Why Brilworks</span>
            <h2 className="font-extrabold" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0d0f1a" }}>Built by Web Engineers Who&apos;ve Shipped 180+ Apps</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>We don&apos;t just write code — we partner with you to make product decisions, ship faster, and avoid the costly mistakes that stall most web projects.</p>
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
            <h2 className="font-extrabold text-white" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15 }}>What Founders &amp; CTOs Say About Our Web Apps</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "rgba(255,255,255,0.62)" }}>Real outcomes from real partners who ship with us every week — load times, conversion lifts, and uptime numbers straight from production.</p>
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
            <h2 className="font-extrabold" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0d0f1a" }}>Deep Domain Expertise Across Verticals</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>Not generalists. We have case studies, clients, and production web apps in every vertical below — complete with compliance, data models, and workflows we already understand.</p>
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
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>Everything founders and product teams typically ask before starting a web app project with us.</p>
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
          title="Ready to Build Your Web App?"
          description="You're one conversation away from turning your idea into a fast, secure, and scalable web application. Tell us what you're building — we'll show you how we can help ship it."
          messageRequired={false}
          submitLabel="Get My Free Web App Consultation"
          benefits={[
            "Free 30-minute consultation with a senior web engineer",
            "Detailed project proposal within 48 hours",
            "Mutual NDA available before scoping calls",
            "Response guaranteed within 24 business hours",
            "180+ web apps shipped across SaaS, fintech, and healthcare",
          ]}
        />
      </div>
    </>
  );
};

export default WebAppDevelopmentService;
