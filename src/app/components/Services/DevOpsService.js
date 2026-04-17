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

const IconShield = ({ color = "#017eeb", size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2L4 5V11C4 16 7.5 20.5 12 22C16.5 20.5 20 16 20 11V5L12 2Z" fill={color} opacity="0.15" />
    <path d="M12 2L4 5V11C4 16 7.5 20.5 12 22C16.5 20.5 20 16 20 11V5L12 2Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M9 12L11 14L15 10" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconRocket = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M3 12L7 8L11 12L21 2M21 2H15M21 2V8" fill="#017eeb" opacity="0.15" />
    <path d="M3 12L7 8L11 12L21 2M21 2H15M21 2V8M3 19L7 15L11 19L21 9" stroke="#017eeb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconUptime = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" fill="#017eeb" opacity="0.15" />
    <path d="M9 12L11 14L15 10M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z" stroke="#017eeb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconPipeline = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="4" width="18" height="6" rx="1" fill="#017eeb" opacity="0.15" />
    <rect x="3" y="14" width="18" height="6" rx="1" fill="#017eeb" opacity="0.15" />
    <rect x="3" y="4" width="18" height="6" rx="1" stroke="#017eeb" strokeWidth="1.8" />
    <rect x="3" y="14" width="18" height="6" rx="1" stroke="#017eeb" strokeWidth="1.8" />
    <circle cx="7" cy="7" r="0.8" fill="#017eeb" />
    <circle cx="7" cy="17" r="0.8" fill="#017eeb" />
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
  { icon: <IconRocket />, label: "10x Faster Deployments" },
  { icon: <IconUptime />, label: "99.99% Uptime" },
  { icon: <IconPipeline />, label: "100+ Pipelines Built" },
];

const HERO_STATS = [
  { value: "100+", label: "Pipelines Built" },
  { value: "10x", label: "Faster Deploy Time" },
  { value: "99.99%", label: "Production Uptime" },
  { value: "98%", label: "Client Satisfaction" },
];

const BENEFITS = [
  {
    title: "Streamlined Workflows",
    tint: "#e8f0fd",
    body: "We automate manual tasks and build CI/CD pipelines that slash cycle times, reduce errors, and let engineers focus on shipping features.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 4H10V10H4V4Z" fill="#017eeb" opacity="0.15" />
        <path d="M14 4H20V10H14V4Z" fill="#017eeb" opacity="0.15" />
        <path d="M4 14H10V20H4V14Z" fill="#017eeb" opacity="0.15" />
        <path d="M4 4H10V10H4V4ZM14 4H20V10H14V4ZM4 14H10V20H4V14ZM14 17L16 19L20 15" stroke="#017eeb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Scalability & Flexibility",
    tint: "#ede9fe",
    body: "Your infrastructure adapts to traffic spikes, new markets, and product pivots — with IaC-driven architecture designed to scale on demand.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 3V21H21M7 14L11 10L15 14L21 8" fill="#4f46e5" opacity="0.15" />
        <path d="M3 3V21H21M7 14L11 10L15 14L21 8M21 8H17M21 8V12" stroke="#4f46e5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Expertise Across Technologies",
    tint: "#d1fae5",
    body: "AWS, GCP, Azure, Kubernetes, Terraform, Jenkins, GitHub Actions — we bring deep, battle-tested expertise across the entire DevOps toolchain.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" fill="#10b981" opacity="0.15" />
        <path d="M8 12L11 15L16 9M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Cost Optimization",
    tint: "#ccfbf1",
    body: "We tune your cloud spend with right-sizing, auto-scaling, and FinOps practices — cutting bills by 30-50% without sacrificing performance.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" fill="#0d9488" opacity="0.15" />
        <path d="M12 7V12L15 14M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Improved Collaboration",
    tint: "#cffafe",
    body: "We break down silos between Dev, Ops, QA, and Security teams — aligning everyone on shared goals, shared metrics, and shared accountability.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="9" cy="8" r="4" fill="#0891b2" opacity="0.15" />
        <circle cx="17" cy="9" r="3" fill="#0891b2" opacity="0.15" />
        <path d="M2 21V19C2 16.8 3.8 15 6 15H12C14.2 15 16 16.8 16 19V21M16 21V19C16 17 14.5 15.5 12.5 15.2M22 21V19C22 17 20.5 15.5 18.5 15.2" stroke="#0891b2" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="9" cy="8" r="4" stroke="#0891b2" strokeWidth="1.8" />
        <circle cx="17" cy="9" r="3" stroke="#0891b2" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: "Proven Track Record",
    tint: "#dbeafe",
    body: "100+ production pipelines shipped across SaaS, fintech, and enterprise. Track record of successful DevOps transformations, not just tooling swaps.",
    icon: <IconShield color="#1e40af" size={32} />,
  },
];

const TESTIMONIALS = [
  {
    initials: "JM",
    name: "James Mitchell",
    role: "CTO, SaaS Platform",
    quote:
      "Brilworks rebuilt our CI/CD from scratch. Deploys went from 2 hours to 9 minutes, rollbacks are one click, and our team actually trusts the pipeline now. Best DevOps partner we've worked with.",
  },
  {
    initials: "AK",
    name: "Anita Krishnan",
    role: "DevOps Lead, Fintech",
    quote:
      "Our Kubernetes setup was on fire — cost spiraling, pods crashing nightly. Brilworks stabilized everything in 6 weeks, cut our AWS bill by 41%, and documented every runbook. Genuine experts.",
  },
  {
    initials: "DS",
    name: "David Schwartz",
    role: "VP Engineering, HealthTech",
    quote:
      "The team shifted our culture, not just our tooling. They trained our engineers, ran blameless retros, and helped us hit 99.99% uptime in two quarters. A true force multiplier.",
  },
];

const HONORS = [
  { label: "AWS Consulting Partner", icon: <IconShield /> },
  {
    label: "Clutch Top DevOps 2024",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L15 8.5L22 9.3L17 14L18.2 21L12 17.7L5.8 21L7 14L2 9.3L9 8.5L12 2Z" stroke="#017eeb" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "GoodFirms Top DevOps",
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
    label: "SaaS",
    href: "/industry/saas/",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12" fill="#4f46e5" opacity="0.15" />
        <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 2V22M2 12H22" stroke="#4f46e5" strokeWidth="1.8" strokeLinecap="round" />
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
    label: "Media & Streaming",
    href: "/industry/media-entertainment-software-development/",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="5" width="20" height="14" rx="2" fill="#0d9488" opacity="0.15" />
        <rect x="2" y="5" width="20" height="14" rx="2" stroke="#0d9488" strokeWidth="1.8" />
        <path d="M10 9V15L15 12L10 9Z" stroke="#0d9488" strokeWidth="1.8" strokeLinejoin="round" />
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
    q: "What is DevOps consulting, and how can it benefit my business?",
    a: "DevOps consulting bridges the gap between development and operations teams. Our experts implement automation, collaboration tooling, and cultural change to shorten release cycles, improve software quality, and boost innovation — translating to faster time to market, reduced costs, and happier customers.",
  },
  {
    q: "I'm already using DevOps tools. Do I still need consulting?",
    a: "Absolutely. Tools automate tasks, but real DevOps success requires the right processes, people, and culture. Our consultants analyze your existing setup, identify bottlenecks, and design a customized strategy that integrates with your workflow — unlocking more value from the tools you already own.",
  },
  {
    q: "What types of DevOps engagements do you offer?",
    a: "We offer flexible engagement models: short-term audits and recommendations, ongoing DevOps coaching and support, and full-scale implementation of your strategy. We also specialize in cloud migration, CI/CD pipelines, Kubernetes orchestration, and IaC rollouts.",
  },
  {
    q: "How long does a typical DevOps engagement take?",
    a: "An initial audit and quick-win roadmap takes 2-4 weeks. A full CI/CD and IaC implementation typically runs 8-16 weeks depending on scope. Ongoing managed DevOps engagements are month-to-month, with most clients continuing for 12+ months after initial transformation.",
  },
  {
    q: "How much does your DevOps consulting cost?",
    a: "Cost depends on scope and complexity. We offer transparent pricing models: hourly rates, fixed-price engagements, or hybrid. After the initial free audit, we'll share a tailored quote that delivers maximum value within your budget — most audits reveal 30-50% cloud cost savings that self-fund the engagement.",
  },
  {
    q: "Which cloud platforms and tools do you specialize in?",
    a: "We're cloud-agnostic with deep expertise in AWS (Consulting Partner), GCP, and Azure. Our toolchain includes Terraform, Jenkins, GitHub Actions, GitLab CI, Docker, Kubernetes, ArgoCD, Prometheus, Grafana, Datadog, and the full AWS DevOps stack (CodePipeline, ECS, EKS, Lambda).",
  },
  {
    q: "How do you ensure security and compliance in our pipelines?",
    a: "We embed shift-left security into every pipeline — SAST, SCA, DAST, secrets scanning, and container image scanning on every commit. We follow SOC 2, ISO 27001, HIPAA, and PCI-DSS best practices, and build audit-ready pipelines with immutable artifacts, signed builds, and full traceability.",
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

// Stats dashboard mockup — used for DevOps pipelines/monitoring (DORA, K8s health, CI/CD pipeline)
const MockupStatsDashboard = ({ label, stats, rows }) => (
  <div className="w-full h-full rounded-xl overflow-hidden flex flex-col bg-white" style={{ boxShadow: "0 8px 24px rgba(13,15,26,0.08)" }}>
    <MockBar label={label} />
    <div className="flex-1 p-4">
      <div className="grid grid-cols-3 gap-2.5 mb-3">
        {stats.map((s, i) => {
          const tone = s.tone || "ok";
          const bg = tone === "warn" ? "#fef3c7" : tone === "err" ? "#fee2e2" : "#f0fdf4";
          const border = tone === "warn" ? "#fde68a" : tone === "err" ? "#fecaca" : "#bbf7d0";
          const color = tone === "warn" ? "#a16207" : tone === "err" ? "#b91c1c" : "#047857";
          return (
            <div key={i} className="rounded-md py-2.5 px-2 text-center" style={{ background: bg, border: `1px solid ${border}` }}>
              <div className="text-[18px] font-extrabold leading-none" style={{ color }}>{s.n}</div>
              <div className="text-[8px] font-semibold mt-1 uppercase tracking-wider" style={{ color: "#64748b" }}>{s.lb}</div>
            </div>
          );
        })}
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

const codeSeg = (cls, w, override) => {
  const colors = { k: "#c084fc", s: "#86efac", v: "#fbbf24", t: "#67e8f9", x: "#475569" };
  return <span className="inline-block rounded-sm" style={{ height: 7, width: w, background: override || colors[cls] }} />;
};

// Code+canvas mockup — used for DevOps pipelines (yaml/IaC) and release management
const MockupCodeCanvas = ({ label, codeBg = "#0d1117", canvasBg = "#f8fafc", canvasColors, codeOverride, lines }) => (
  <div className="w-full h-full rounded-xl overflow-hidden flex flex-col bg-white" style={{ boxShadow: "0 8px 24px rgba(13,15,26,0.08)" }}>
    <MockBar label={label} />
    <div className="flex-1 grid grid-cols-2">
      <div className="p-3.5" style={{ background: codeBg }}>
        {lines.map((line, i) => (
          <div key={i} className="flex gap-1.5 items-center mb-[7px]">
            <b className="text-[9px] font-mono min-w-[14px]" style={{ color: "#94a3b8" }}>{i + 1}</b>
            {line.map(([c, w], j) => <span key={j}>{codeSeg(c, w, codeOverride && (c === "k" || c === "t") ? codeOverride[c] : undefined)}</span>)}
          </div>
        ))}
      </div>
      <div className="p-3.5" style={{ background: canvasBg }}>
        {canvasColors.map((c, i) => (
          <div key={i} className="bg-white rounded-md p-2 mb-2" style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.05)", border: "1px solid #e2e8f0" }}>
            <div style={{ height: 6, width: "60%", background: c.color, borderRadius: 2, marginBottom: 5 }} />
            <div style={{ height: 4, width: c.w1, background: "#cbd5e1", borderRadius: 1.5, marginBottom: 3 }} />
            {c.w2 && <div style={{ height: 4, width: c.w2, background: "#cbd5e1", borderRadius: 1.5 }} />}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const SERVICES = [
  {
    title: "DevOps Implementation",
    body:
      "A proven transformation roadmap to modernize your software delivery lifecycle — with efficiency, reliability, and measurable DORA outcomes. We guide your team from ad-hoc releases to a fully automated, observable engineering machine.",
    features: [
      "DevOps maturity assessment & roadmap",
      "Tooling selection & architecture design",
      "Team enablement & knowledge transfer",
    ],
    mockup: (
      <MockupStatsDashboard
        label="DORA Metrics · Last 30 days"
        stats={[
          { n: "47", lb: "Deploys/Day" },
          { n: "8m", lb: "Lead Time" },
          { n: "0.4%", lb: "Change Fail", tone: "warn" },
        ]}
        rows={[{ w: "70%" }, { w: "80%" }, { w: "65%" }, { w: "75%" }]}
      />
    ),
    imageBg: "linear-gradient(135deg, #f0f7ff 0%, #e0ecfc 100%)",
    padMockup: true,
    reverse: false,
  },
  {
    title: "DevOps Automation",
    body:
      "Accelerate testing, deployments, and feedback loops with robust CI/CD pipelines we design and implement end-to-end. Every commit flows through automated gates — so you ship value to customers in minutes, not weeks.",
    features: [
      "GitHub Actions, GitLab CI, Jenkins pipelines",
      "Terraform IaC & config management",
      "Automated quality & security gates",
    ],
    mockup: (
      <MockupCodeCanvas
        label=".github/workflows/deploy.yml · terraform.tf"
        canvasColors={[
          { color: "#4f46e5", w1: "80%", w2: "60%" },
          { color: "#7c3aed", w1: "75%", w2: "55%" },
          { color: "#a855f7", w1: "70%" },
        ]}
        lines={[
          [["k", 24], ["t", 40]],
          [["x", 8], ["k", 20], ["s", 48]],
          [["x", 16], ["v", 22], ["s", 34]],
          [["x", 16], ["k", 26], ["t", 26]],
          [["x", 24], ["s", 50]],
          [["k", 22], ["v", 38]],
          [["x", 24], ["t", 30]],
          [["x", 32], ["s", 28]],
        ]}
      />
    ),
    imageBg: "linear-gradient(135deg, #f5f3ff 0%, #ddd6fe 100%)",
    padMockup: true,
    reverse: true,
  },
  {
    title: "Cloud & Containerization Services",
    body:
      "Solve your hardest infrastructure challenges — from IaC and Kubernetes to cloud-native adoption on AWS, GCP, or Azure. We architect scalable, self-healing systems tailored to your workload and budget.",
    features: [
      "Docker & Kubernetes orchestration",
      "AWS, GCP, Azure cloud migration",
      "FinOps & cloud cost optimization",
    ],
    mockup: (
      <MockupStatsDashboard
        label="Kubernetes Cluster · prod-us-east-1"
        stats={[
          { n: "24/24", lb: "Pods Healthy" },
          { n: "99.99%", lb: "Uptime" },
          { n: "62%", lb: "CPU", tone: "warn" },
        ]}
        rows={[{ w: "70%" }, { w: "75%" }, { w: "85%" }, { w: "60%" }, { w: "70%" }]}
      />
    ),
    imageBg: "linear-gradient(135deg, #ecfdf5 0%, #bbf7d0 100%)",
    padMockup: true,
    reverse: false,
  },
  {
    title: "DevOps Release Management",
    body:
      "Streamline every release with automated deployments, blue/green strategies, canary rollouts, and instant rollback plans. Your team gains confidence — and customers get zero-downtime releases, every single time.",
    features: [
      "Blue/green & canary deployments",
      "Automated rollback & feature flags",
      "Release orchestration across environments",
    ],
    mockup: (
      <MockupCodeCanvas
        label="release-v2.14.0 · Blue/Green"
        codeBg="#0a1a1a"
        canvasBg="#f0fdfa"
        codeOverride={{ k: "#14b8a6", t: "#5eead4" }}
        canvasColors={[
          { color: "#0d9488", w1: "80%", w2: "60%" },
          { color: "#14b8a6", w1: "70%", w2: "55%" },
          { color: "#5eead4", w1: "65%" },
        ]}
        lines={[
          [["k", 28], ["t", 32]],
          [["x", 8], ["v", 22], ["s", 44]],
          [["x", 16], ["k", 18], ["t", 30]],
          [["x", 16], ["s", 44]],
          [["x", 8], ["v", 26], ["t", 36]],
          [["k", 22], ["s", 40]],
          [["x", 20], ["t", 34]],
          [["x", 28], ["s", 32]],
        ]}
      />
    ),
    imageBg: "linear-gradient(135deg, #f0fdfa 0%, #99f6e4 100%)",
    padMockup: true,
    reverse: true,
  },
  {
    title: "Continuous Integration & Delivery (CI/CD)",
    body:
      "Construct a seamless CI/CD pipeline that integrates testing, builds, artifact management, and deployments into a single source of truth. Build a culture of continuous improvement that accelerates every release cycle.",
    features: [
      "Multi-stage build & test orchestration",
      "Artifact registries & environment promotion",
      "Shift-left security (SAST, SCA, DAST)",
    ],
    mockup: (
      <MockupStatsDashboard
        label="Pipeline · main → production"
        stats={[
          { n: "4m 12s", lb: "Build" },
          { n: "312", lb: "Tests" },
          { n: "Pass", lb: "Status" },
        ]}
        rows={[{ w: "70%" }, { w: "75%" }, { w: "85%" }, { w: "70%" }, { w: "80%" }]}
      />
    ),
    imageBg: "linear-gradient(135deg, #ecfeff 0%, #a5f3fc 100%)",
    padMockup: true,
    reverse: false,
  },
  {
    title: "Deployment Services",
    body:
      "Eliminate manual deployments and ensure consistent, reliable rollouts across dev, staging, and production. Gain peace of mind knowing every release is executed flawlessly with automated pre-flight checks, smoke tests, and observability baked in.",
    features: [
      "Zero-downtime production deployments",
      "Monitoring & alerting integration",
      "Environment parity & secrets management",
    ],
    mockup: (
      <MockupCodeCanvas
        label="deploy.yaml · helm release"
        canvasColors={[
          { color: "#4f46e5", w1: "80%", w2: "60%" },
          { color: "#017eeb", w1: "75%", w2: "55%" },
          { color: "#00b4d8", w1: "70%" },
        ]}
        lines={[
          [["k", 32], ["t", 28]],
          [["x", 8], ["k", 24], ["s", 42]],
          [["x", 8], ["v", 20], ["t", 36]],
          [["x", 16], ["k", 28], ["v", 22]],
          [["x", 8], ["t", 38]],
          [["k", 18], ["s", 44]],
          [["x", 24], ["v", 32]],
          [["t", 16], ["s", 40]],
        ]}
      />
    ),
    imageBg: "linear-gradient(135deg, #f0f7ff 0%, #e0ecfc 100%)",
    padMockup: true,
    reverse: true,
  },
];

// ---------- Page ----------
const DevOpsService = () => {
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
                  <IconSparkle /> DevOps Consulting Services
                </span>
                <h1 className="font-extrabold mb-5 text-white" style={{ fontSize: "clamp(34px, 4vw, 54px)", letterSpacing: "-1.5px", lineHeight: 1.1 }}>
                  Ship Faster With <span style={gradientTextStyle}>Bulletproof CI/CD</span>
                </h1>
                <p className="mb-8" style={{ fontSize: 18, lineHeight: 1.7, color: "rgba(255,255,255,0.72)", maxWidth: 580 }}>
                  We build high-performance CI/CD pipelines and cloud automation that cut your deploy time by 10x — so your team ships features daily, not quarterly. 100+ pipelines delivered, 99.99% uptime guaranteed.
                </p>
                <div className="flex flex-wrap gap-3.5 my-10">
                  <Link href="#contact"
                    className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all"
                    style={{ background: "#017eeb", color: "#fff", border: "1px solid #017eeb", padding: "16px 32px", fontSize: 16 }}>
                    Get My Free DevOps Audit <IconArrowRight />
                  </Link>
                  <Link href="#services"
                    className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:bg-white/10"
                    style={{ background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.3)", padding: "16px 32px", fontSize: 16 }}>
                    See What We Automate
                  </Link>
                </div>
                <div className="flex flex-wrap gap-[18px]" style={{ color: "rgba(255,255,255,0.65)", fontSize: 14 }}>
                  {["Free pipeline audit", "48-hour roadmap", "No commitment"].map((t) => (
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
            <span className="inline-block mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#017eeb" }}>What We Automate</span>
            <h2 className="font-extrabold" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0d0f1a" }}>Our DevOps Consulting Services</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>End-to-end DevOps — from CI/CD pipelines and IaC to Kubernetes, release management, and zero-downtime deployments.</p>
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
          <h3 className="font-extrabold mb-3.5" style={{ fontSize: "clamp(24px, 3vw, 36px)", color: "#fff", lineHeight: 1.2, letterSpacing: "-0.5px" }}>Ready to Ship 10x Faster?</h3>
          <p className="mb-7" style={{ color: "rgba(255,255,255,0.85)", fontSize: 16, lineHeight: 1.7 }}>Get a free 30-minute DevOps audit. We&apos;ll review your current pipeline, spot the top 3 bottlenecks, and map your path to daily deploys — no commitment.</p>
          <Link href="#contact"
            className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:!bg-[#0d0f1a] hover:!text-white hover:!border-[#0d0f1a] mt-5"
            style={{ background: "#fff", color: "#017eeb", border: "1px solid #fff", padding: "16px 32px", fontSize: 16 }}>
            Book My Free DevOps Audit
          </Link>
        </div>
      </section>

      {/* WHY BRILWORKS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="text-center mx-auto mb-14" style={{ maxWidth: 720 }}>
            <span className="inline-block mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#017eeb" }}>Why Brilworks</span>
            <h2 className="font-extrabold" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0d0f1a" }}>DevOps Engineers Who&apos;ve Shipped 100+ Production Pipelines</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>We don&apos;t just set up Jenkins — we partner with you to reshape how your team ships software, measure outcomes, and scale confidently.</p>
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
            <h2 className="font-extrabold text-white" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15 }}>What DevOps Leaders &amp; CTOs Say About Us</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "rgba(255,255,255,0.62)" }}>Real outcomes from real partners across SaaS, fintech, healthcare, and e-commerce.</p>
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
            <h2 className="font-extrabold" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0d0f1a" }}>DevOps Expertise Across Regulated &amp; High-Scale Verticals</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>We&apos;ve delivered DevOps transformations for compliance-heavy, high-throughput, and global industries — bringing infrastructure and domain knowledge together.</p>
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
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>Everything CTOs, DevOps leads, and VPs of Engineering typically ask before engaging.</p>
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
          title="Ready to Ship 10x Faster?"
          description="You're one conversation away from a bulletproof pipeline. Tell us what's slowing your releases — we'll audit it for free and show you exactly what to fix first."
          messageRequired={false}
          submitLabel="Get My Free DevOps Audit"
          benefits={[
            "Free 30-minute DevOps audit with a senior engineer",
            "Detailed roadmap & estimate within 48 hours",
            "No commitment — actionable insights either way",
            "Response guaranteed within 24 business hours",
            "AWS-certified engineers across CI/CD, IaC, and Kubernetes",
          ]}
        />
      </div>
    </>
  );
};

export default DevOpsService;
