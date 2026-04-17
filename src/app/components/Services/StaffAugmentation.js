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

const IconTeam = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="9" cy="8" r="4" fill="#017eeb" opacity="0.15" />
    <circle cx="17" cy="9" r="3" fill="#017eeb" opacity="0.15" />
    <path d="M2 21V19C2 16.8 3.8 15 6 15H12C14.2 15 16 16.8 16 19V21M16 21V19C16 17 14.5 15.5 12.5 15.2M22 21V19C22 17 20.5 15.5 18.5 15.2" stroke="#017eeb" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="9" cy="8" r="4" stroke="#017eeb" strokeWidth="1.8" />
    <circle cx="17" cy="9" r="3" stroke="#017eeb" strokeWidth="1.8" />
  </svg>
);

const IconClock = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" fill="#017eeb" opacity="0.15" />
    <path d="M12 7V12L15 14M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z" stroke="#017eeb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconBadge = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M9 12L11 14L15 10M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z" fill="#017eeb" opacity="0.15" />
    <path d="M9 12L11 14L15 10M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z" stroke="#017eeb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
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
  { icon: <IconTeam />, label: "100+ Pre-Vetted Engineers" },
  { icon: <IconClock />, label: "7-Day Onboarding" },
  { icon: <IconBadge />, label: "98% Client Retention" },
];

const HERO_STATS = [
  { value: "100+", label: "Pre-Vetted Engineers" },
  { value: "7 Days", label: "Average Time to Onboard" },
  { value: "95%", label: "Engineer Retention" },
  { value: "98%", label: "Client Satisfaction" },
];

const BENEFITS = [
  {
    title: "Cost-Effective",
    tint: "#e8f0fd",
    body: "Access top talent without the overhead of traditional hiring — no recruiter fees, no benefits admin, no bench cost. Pay only for the hours you use.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2V22M17 5H9.5C7.57 5 6 6.57 6 8.5C6 10.43 7.57 12 9.5 12H14.5C16.43 12 18 13.57 18 15.5C18 17.43 16.43 19 14.5 19H6" fill="#017eeb" opacity="0.15" />
        <path d="M12 2V22M17 5H9.5C7.57 5 6 6.57 6 8.5C6 10.43 7.57 12 9.5 12H14.5C16.43 12 18 13.57 18 15.5C18 17.43 16.43 19 14.5 19H6" stroke="#017eeb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Seamless Staffing",
    tint: "#ede9fe",
    body: "Pre-vetted, highly skilled professionals who integrate with your existing team, tools, and sprint cadence — contributing code from day one.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 22S2 16 2 9C2 5.13 5.13 2 9 2C10.93 2 12.68 2.84 13.9 4.2C15.12 2.84 16.87 2 18.8 2C22.67 2 22 5.13 22 9C22 16 12 22 12 22Z" fill="#4f46e5" opacity="0.15" />
        <path d="M12 22S2 16 2 9C2 5.13 5.13 2 9 2C10.93 2 12.68 2.84 13.9 4.2C15.12 2.84 16.87 2 18.8 2C22.67 2 22 5.13 22 9C22 16 12 22 12 22Z" stroke="#4f46e5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Highly Skilled Developers",
    tint: "#d1fae5",
    body: "Access senior developers, software engineers, business analysts, Scrum Masters, and QA specialists — all tested on real-world problem sets before joining the bench.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="9" cy="8" r="4" fill="#10b981" opacity="0.15" />
        <circle cx="17" cy="9" r="3" fill="#10b981" opacity="0.15" />
        <path d="M2 21V19C2 16.8 3.8 15 6 15H12C14.2 15 16 16.8 16 19V21M16 21V19C16 17 14.5 15.5 12.5 15.2M22 21V19C22 17 20.5 15.5 18.5 15.2" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="9" cy="8" r="4" stroke="#10b981" strokeWidth="1.8" />
        <circle cx="17" cy="9" r="3" stroke="#10b981" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: "Flexibility & Scalability",
    tint: "#ccfbf1",
    body: "Scale your IT team up or down seamlessly — add engineers in a week, reduce scope in the next sprint. No hiring freezes, no severance, no drama.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 12H7L10 6L14 18L17 12H21" fill="#0d9488" opacity="0.15" />
        <path d="M3 12H7L10 6L14 18L17 12H21" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Domain Expertise",
    tint: "#cffafe",
    body: "Whether you operate in fintech, healthcare, e-commerce, or SaaS, we have engineers who've shipped in your domain — faster ramp, fewer mistakes.",
    icon: <IconShield color="#0891b2" />,
  },
  {
    title: "Dedicated Support",
    tint: "#dbeafe",
    body: "A dedicated account manager, weekly check-ins, and 48-hour replacement guarantee if an engineer isn't the right fit. Client satisfaction is our priority.",
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
    initials: "DK",
    name: "David Kim",
    role: "CTO, B2B SaaS Platform",
    quote:
      "We needed two senior React engineers and one AWS specialist — on a tight deadline. Brilworks delivered CVs in 36 hours and all three were onboarded within a week. They've been with us for 14 months now.",
  },
  {
    initials: "AP",
    name: "Anna Patel",
    role: "VP Engineering, HealthTech",
    quote:
      "Our internal hiring pipeline was 4 months deep — we couldn't wait. Brilworks plugged four engineers into our sprint within two weeks. Their engineers passed our code review on day one. Best staff-aug partner we've worked with.",
  },
  {
    initials: "RM",
    name: "Rafael Mendes",
    role: "Engineering Manager, Fintech Scale-up",
    quote:
      "I manage a cross-functional team of 12. Brilworks' engineers follow our sprint rituals, write the kind of code we'd ship, and communicate proactively. Zero babysitting required — that's the real ROI.",
  },
];

const HONORS = [
  { label: "AWS Consulting Partner", icon: <IconShield /> },
  {
    label: "Clutch Top Staffing 2024",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L15 8.5L22 9.3L17 14L18.2 21L12 17.7L5.8 21L7 14L2 9.3L9 8.5L12 2Z" stroke="#017eeb" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "GoodFirms Top Developers",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="8" r="6" stroke="#017eeb" strokeWidth="1.8" />
        <path d="M9 14L7 22L12 19L17 22L15 14" stroke="#017eeb" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "ISO 27001 Certified",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 3H21V21H3V3Z" stroke="#017eeb" strokeWidth="1.8" />
        <path d="M9 9H15V15H9V9Z" stroke="#017eeb" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    label: "Google Cloud Partner",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L15 8.5L22 9.3L17 14L18.2 21L12 17.7L5.8 21L7 14L2 9.3L9 8.5L12 2Z" stroke="#017eeb" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const INDUSTRIES = [
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
    label: "SaaS",
    href: "/saas-application-development-services/",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M18 10H6C4.9 10 4 10.9 4 12V18C4 19.1 4.9 20 6 20H18C19.1 20 20 19.1 20 18V12C20 10.9 19.1 10 18 10Z" fill="#4f46e5" opacity="0.15" />
        <path d="M18 10H6C4.9 10 4 10.9 4 12V18C4 19.1 4.9 20 6 20H18C19.1 20 20 19.1 20 18V12C20 10.9 19.1 10 18 10ZM8 10V7C8 4.79 9.79 3 12 3C14.21 3 16 4.79 16 7V10" stroke="#4f46e5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "EdTech",
    href: "/industry/edtech-software-development/",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M2 8L12 3L22 8L12 13L2 8Z" fill="#0d9488" opacity="0.15" />
        <path d="M2 8L12 3L22 8L12 13L2 8ZM6 10V16C6 16 8 18 12 18C16 18 18 16 18 16V10" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
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
    q: "What is IT staff augmentation?",
    a: "IT staff augmentation is the practice of supplementing your existing IT team with temporary or dedicated IT professionals. It helps you address specific skill gaps, manage workload fluctuations, and complete projects on time and within budget — without the overhead of full-time hiring.",
  },
  {
    q: "How fast can you onboard engineers?",
    a: "We share matched CVs within 48 hours of your role brief. After you select and interview candidates, most engineers onboard in 5-7 business days — including access setup, code review walkthroughs, and first-sprint integration.",
  },
  {
    q: "What are the costs associated with IT staff augmentation?",
    a: "Cost varies based on the experience level of the professionals you need, the duration of engagement, and the skill stack. Hourly rates typically range from $35 (mid) to $75+ (principal). We provide a transparent quote within 24 hours of your role brief.",
  },
  {
    q: "What staff augmentation models and pricing options do you offer?",
    a: "We offer three flexible models: Dedicated Developer (monthly basis for long-term projects), Hourly Basis (pay-as-you-go for short sprints), and Time and Material (T&M) with transparent cost estimation for evolving scopes.",
  },
  {
    q: "Can I interview candidates before hiring?",
    a: "Yes — every candidate is available for technical and cultural-fit interviews. You can run your own coding challenges, system-design interviews, or pair-programming sessions. We only bill when you say \u201cgo.\u201d",
  },
  {
    q: "What if an engineer isn't the right fit?",
    a: "We offer a 48-hour replacement guarantee. If an engineer isn't performing or doesn't fit your team culture within the first two weeks, we'll replace them at no cost — no lengthy off-boarding, no penalties.",
  },
  {
    q: "Do you sign NDAs and handle IP ownership?",
    a: "Yes — we sign mutual NDAs before any engineer is assigned. All code, IP, and deliverables are 100% owned by you. Engineers sign IP-assignment agreements as a condition of joining the bench.",
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

// Mockup 1: Sticky-note skill-match board
const MockupSkillBoard = () => (
  <div className="w-full h-full rounded-xl overflow-hidden flex flex-col bg-white" style={{ boxShadow: "0 8px 24px rgba(13,15,26,0.08)" }}>
    <MockBar label="Skill Match · Open Roles" />
    <div className="flex-1 relative p-4" style={{ background: "#fafbfc", backgroundImage: "radial-gradient(#e2e8f0 1px, transparent 1px)", backgroundSize: "14px 14px" }}>
      {[
        { c: "#dbeafe", r: "-4deg", left: "4%", top: "10%", w1: "75%", w2: "55%" },
        { c: "#fef3c7", r: "3deg", left: "36%", top: "6%", w1: "80%", w2: "60%" },
        { c: "#dcfce7", r: "-2deg", left: "68%", top: "14%", w1: "65%", w2: "75%" },
        { c: "#e0e7ff", r: "4deg", left: "12%", top: "52%", w1: "70%", w2: "50%" },
        { c: "#fce7f3", r: "-3deg", left: "46%", top: "58%", w1: "80%", w2: "55%" },
        { c: "#cffafe", r: "2deg", left: "70%", top: "62%", w1: "70%", w2: "60%" },
      ].map((s, i) => (
        <div key={i} className="absolute px-2.5 py-2 rounded-[4px]"
          style={{ width: "28%", background: s.c, transform: `rotate(${s.r})`, left: s.left, top: s.top, boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
          <span className="block h-[5px] w-[60%] rounded-sm mb-[5px]" style={{ background: "rgba(0,0,0,0.35)" }} />
          <span className="block h-[3px] rounded-sm mb-[3px]" style={{ width: s.w1, background: "rgba(0,0,0,0.18)" }} />
          <span className="block h-[3px] rounded-sm" style={{ width: s.w2, background: "rgba(0,0,0,0.18)" }} />
        </div>
      ))}
      <div className="absolute" style={{ left: "32%", top: "28%", width: "10%", height: "1.5px", background: "#017eeb", opacity: 0.5, transform: "rotate(15deg)" }} />
      <div className="absolute" style={{ left: "60%", top: "34%", width: "8%", height: "1.5px", background: "#017eeb", opacity: 0.5, transform: "rotate(45deg)" }} />
    </div>
  </div>
);

// Mockup 2: Engineer bench / availability stats dashboard
const MockupBenchStats = () => (
  <div className="w-full h-full rounded-xl overflow-hidden flex flex-col bg-white" style={{ boxShadow: "0 8px 24px rgba(13,15,26,0.08)" }}>
    <MockBar label="Engineer Bench · Availability" />
    <div className="flex-1 p-4">
      <div className="grid grid-cols-3 gap-2.5 mb-3">
        <div className="rounded-md py-2.5 px-2 text-center" style={{ background: "#f0fdf4", border: "1px solid #bbf7d0" }}>
          <div className="text-[18px] font-extrabold leading-none" style={{ color: "#047857" }}>42</div>
          <div className="text-[8px] font-semibold mt-1 uppercase tracking-wider" style={{ color: "#64748b" }}>Available</div>
        </div>
        <div className="rounded-md py-2.5 px-2 text-center" style={{ background: "#fef3c7", border: "1px solid #fde68a" }}>
          <div className="text-[18px] font-extrabold leading-none" style={{ color: "#a16207" }}>18</div>
          <div className="text-[8px] font-semibold mt-1 uppercase tracking-wider" style={{ color: "#64748b" }}>Interviewing</div>
        </div>
        <div className="rounded-md py-2.5 px-2 text-center" style={{ background: "#ede9fe", border: "1px solid #ddd6fe" }}>
          <div className="text-[18px] font-extrabold leading-none" style={{ color: "#4f46e5" }}>100+</div>
          <div className="text-[8px] font-semibold mt-1 uppercase tracking-wider" style={{ color: "#64748b" }}>On Bench</div>
        </div>
      </div>
      <div>
        {[{ w: "70%" }, { w: "60%" }, { w: "80%" }, { w: "65%" }, { w: "75%" }].map((row, i, arr) => (
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

// Mockup 3: Pricing tier dashboard (green theme)
const MockupBillingRates = () => (
  <div className="w-full h-full rounded-xl overflow-hidden flex flex-col bg-white" style={{ boxShadow: "0 8px 24px rgba(13,15,26,0.08)" }}>
    <MockBar label="Billing Rates · Transparent" />
    <div className="flex-1 p-4">
      <div className="grid grid-cols-3 gap-2.5 mb-3">
        <div className="rounded-md py-2.5 px-2 text-center" style={{ background: "#f0fdf4", border: "1px solid #bbf7d0" }}>
          <div className="text-[18px] font-extrabold leading-none" style={{ color: "#047857" }}>$35</div>
          <div className="text-[8px] font-semibold mt-1 uppercase tracking-wider" style={{ color: "#64748b" }}>Mid</div>
        </div>
        <div className="rounded-md py-2.5 px-2 text-center" style={{ background: "#fef3c7", border: "1px solid #fde68a" }}>
          <div className="text-[18px] font-extrabold leading-none" style={{ color: "#a16207" }}>$55</div>
          <div className="text-[8px] font-semibold mt-1 uppercase tracking-wider" style={{ color: "#64748b" }}>Senior</div>
        </div>
        <div className="rounded-md py-2.5 px-2 text-center" style={{ background: "#ede9fe", border: "1px solid #ddd6fe" }}>
          <div className="text-[18px] font-extrabold leading-none" style={{ color: "#4f46e5" }}>$75</div>
          <div className="text-[8px] font-semibold mt-1 uppercase tracking-wider" style={{ color: "#64748b" }}>Principal</div>
        </div>
      </div>
      <div>
        {[{ w: "70%" }, { w: "60%" }, { w: "80%" }, { w: "70%" }, { w: "75%" }].map((row, i, arr) => (
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

// Mockup 4: Phone + swatch onboarding (DevOps/QA)
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

// Mockup 5: Multi-device team scaling (cyan)
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
    title: "Frontend Engineers: React.js, React Native, UI/UX",
    body:
      "Hire senior frontend talent who ship pixel-perfect, accessible UIs. Our React, React Native, and UI/UX engineers plug into your product team and own features end-to-end — from Figma handoff to production release.",
    features: [
      "React.js & React Native developers (Mid to Principal)",
      "UI/UX designers with design-system experience",
      "3+ years minimum, domain-vetted, portfolio-reviewed",
    ],
    mockup: <MockupSkillBoard />,
    imageBg: "linear-gradient(135deg, #f0f7ff 0%, #e0ecfc 100%)",
    padMockup: true,
    reverse: false,
  },
  {
    title: "Backend & Cloud: Node.js, Java, Python, AWS",
    body:
      "Senior backend engineers who own architecture, APIs, and data layers. Our Node, Java, Python, and AWS developers ship scalable systems — comfortable with microservices, message queues, and cloud-native patterns.",
    features: [
      "Node.js, Java, Python backend engineers",
      "AWS Certified cloud & serverless developers",
      "Real-world system-design and scaling experience",
    ],
    mockup: <MockupBenchStats />,
    imageBg: "linear-gradient(135deg, #f5f3ff 0%, #ddd6fe 100%)",
    padMockup: true,
    reverse: true,
  },
  {
    title: "AI/ML, Blockchain, & Data Engineers",
    body:
      "Niche specialists without the 6-month hiring cycle. Our AI/ML engineers ship production models, our blockchain developers ship smart contracts, and our data engineers architect pipelines that scale.",
    features: [
      "AI/ML engineers (LLM, CV, NLP, MLOps)",
      "Blockchain & smart-contract developers",
      "Transparent hourly, monthly, and T&M pricing",
    ],
    mockup: <MockupBillingRates />,
    imageBg: "linear-gradient(135deg, #ecfdf5 0%, #bbf7d0 100%)",
    padMockup: true,
    reverse: false,
  },
  {
    title: "DevOps & QA Engineers",
    body:
      "Ship faster, ship safer. Our DevOps engineers build CI/CD and infrastructure-as-code that pays for itself in week one. Our QA and test-automation engineers catch regressions before they reach customers.",
    features: [
      "DevOps engineers (AWS, K8s, Terraform, CI/CD)",
      "QA & test automation specialists (Cypress, Playwright)",
      "Onboarded in 5-7 business days",
    ],
    mockup: <MockupPhone />,
    imageBg: "linear-gradient(135deg, #f0fdfa 0%, #99f6e4 100%)",
    padMockup: false,
    reverse: true,
  },
  {
    title: "Project Managers & Scrum Masters",
    body:
      "Augment beyond code. Our PMs and Scrum Masters run sprints, own roadmaps, and keep distributed teams aligned across time zones. They slot into your rituals — daily stand-ups, retros, planning — from day one.",
    features: [
      "Certified Scrum Masters & Project Managers",
      "Business analysts for requirements & discovery",
      "Seamless integration with your existing SDLC",
    ],
    mockup: <MockupMultiDevice />,
    imageBg: "linear-gradient(135deg, #ecfeff 0%, #a5f3fc 100%)",
    padMockup: false,
    reverse: false,
  },
];

// ---------- Page ----------
const StaffAugmentation = () => {
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
                  <IconSparkle /> IT Staff Augmentation Services
                </span>
                <h1 className="font-extrabold mb-5 text-white" style={{ fontSize: "clamp(34px, 4vw, 54px)", letterSpacing: "-1.5px", lineHeight: 1.1 }}>
                  Hire Senior Engineers in 7 Days — <span style={gradientTextStyle}>Scale Your Team On Demand</span>
                </h1>
                <p className="mb-8" style={{ fontSize: 18, lineHeight: 1.7, color: "rgba(255,255,255,0.72)", maxWidth: 580 }}>
                  Pre-vetted senior engineers across React, Node, Java, Python, AWS, and AI/ML. 100+ engineers on the bench — onboarded in days, not months. 98% client satisfaction, 95% engineer retention.
                </p>
                <div className="flex flex-wrap gap-3.5 my-10">
                  <Link href="#contact"
                    className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all"
                    style={{ background: "#017eeb", color: "#fff", border: "1px solid #017eeb", padding: "16px 32px", fontSize: 16 }}>
                    Schedule a Developer Interview <IconArrowRight />
                  </Link>
                  <Link href="#services"
                    className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:bg-white/10"
                    style={{ background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.3)", padding: "16px 32px", fontSize: 16 }}>
                    View Available Roles
                  </Link>
                </div>
                <div className="flex flex-wrap gap-[18px]" style={{ color: "rgba(255,255,255,0.65)", fontSize: 14 }}>
                  {["CVs within 48 hours", "7-day onboarding", "No long-term lock-in"].map((t) => (
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
            <span className="inline-block mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#017eeb" }}>Who You Can Hire</span>
            <h2 className="font-extrabold" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0d0f1a" }}>Upskill Your Workforce with Staff Augmentation</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>With our tailored staff augmentation solutions, you can quickly fill skill gaps and tackle critical projects. Our pre-vetted engineers seamlessly integrate with your existing team.</p>
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
          <h3 className="font-extrabold mb-3.5" style={{ fontSize: "clamp(24px, 3vw, 36px)", color: "#fff", lineHeight: 1.2, letterSpacing: "-0.5px" }}>Need Senior Engineers This Sprint?</h3>
          <p className="mb-7" style={{ color: "rgba(255,255,255,0.85)", fontSize: 16, lineHeight: 1.7 }}>Schedule a free 30-minute call with our staffing team. Share your role brief — get 3 matched CVs within 48 hours and start interviewing within days.</p>
          <Link href="#contact"
            className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:!bg-[#0d0f1a] hover:!text-white hover:!border-[#0d0f1a] mt-5"
            style={{ background: "#fff", color: "#017eeb", border: "1px solid #fff", padding: "16px 32px", fontSize: 16 }}>
            Schedule a Developer Interview
          </Link>
        </div>
      </section>

      {/* WHY BRILWORKS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="text-center mx-auto mb-14" style={{ maxWidth: 720 }}>
            <span className="inline-block mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#017eeb" }}>Why Brilworks</span>
            <h2 className="font-extrabold" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0d0f1a" }}>Why Brilworks For IT Staff Augmentation</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>Speed, quality, and zero overhead — we handle vetting, payroll, HR, and retention, so you focus on shipping.</p>
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
            <h2 className="font-extrabold text-white" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15 }}>What Engineering Leaders Say About Us</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "rgba(255,255,255,0.62)" }}>Real outcomes from CTOs, VPs of Engineering, and Engineering Managers scaling their teams.</p>
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
            <span className="inline-block mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#017eeb" }}>Industries We Staff</span>
            <h2 className="font-extrabold" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0d0f1a" }}>Engineers With Domain Experience</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>Our engineers don&apos;t just know the stack — they know your industry. That means faster onboarding and fewer compliance surprises.</p>
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
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>Everything engineering leaders typically ask before scaling their team with Brilworks.</p>
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
          title="Ready to Scale Your Engineering Team?"
          description="You're one conversation away from a senior engineer in your sprint. Tell us the role — we'll match 3 CVs in 48 hours and you can start interviewing this week."
          messageRequired={false}
          submitLabel="Schedule a Developer Interview"
          benefits={[
            "Free 30-minute call with our staffing team",
            "3 matched CVs delivered within 48 hours",
            "Interview candidates yourself — bill only when you say go",
            "Engineers onboarded in 5-7 business days",
            "48-hour replacement guarantee if not the right fit",
          ]}
        />
      </div>
    </>
  );
};

export default StaffAugmentation;
