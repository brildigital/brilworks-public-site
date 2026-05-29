"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  Star,
  Diamond,
  ShieldCheck,
  DollarSign,
  TrendingUp,
  Clock,
  RefreshCw,
  MessageSquare,
  Award,
  BadgeCheck,
  CreditCard,
  Heart,
  ShoppingCart,
  Server,
  Factory,
  Monitor,
} from "lucide-react";

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
  { icon: <ShieldCheck size={18} color="#017eeb" />, label: "AWS Advanced Consulting Partner" },
  { icon: <DollarSign size={18} color="#017eeb" />, label: "$2M+ Saved for Clients" },
  { icon: <TrendingUp size={18} color="#017eeb" />, label: "100+ Migrations Delivered" },
  { icon: <Clock size={18} color="#017eeb" />, label: "99.99% Uptime SLA" },
];

const HERO_STATS = [
  { value: "100+", label: "AWS Migrations Delivered" },
  { value: "$2M+", label: "Client Cloud Savings" },
  { value: "99.99%", label: "Uptime SLA" },
  { value: "98%", label: "Client Satisfaction" },
];

const BENEFITS = [
  {
    title: "AWS Advanced Partner",
    tint: "#e8f0fd",
    body: "Certified Solutions Architects, DevOps Engineers, and Security specialists — with real production scars, not just exam badges.",
    icon: <ShieldCheck size={32} color="#017eeb" />,
  },
  {
    title: "Measurable Savings",
    tint: "#ede9fe",
    body: "Average client sees 25-40% AWS bill reduction in the first 60 days. Every engagement ends with a documented savings report.",
    icon: <TrendingUp size={32} color="#4f46e5" />,
  },
  {
    title: "Zero-Downtime Migrations",
    tint: "#d1fae5",
    body: "Battle-tested playbooks, blue/green cutovers, and fallback plans mean your users never notice the move — even at production scale.",
    icon: <RefreshCw size={32} color="#10b981" />,
  },
  {
    title: "24/7 Managed Ops",
    tint: "#ccfbf1",
    body: "Our global on-call team watches your environment around the clock. 99.99% uptime SLA, mean-time-to-respond under 15 minutes.",
    icon: <Clock size={32} color="#0d9488" />,
  },
  {
    title: "Compliance-Ready",
    tint: "#cffafe",
    body: "SOC 2, HIPAA, PCI-DSS, and GDPR landing zones deployed as code. Auditors ask for evidence — we hand it over, already organized.",
    icon: <ShieldCheck size={32} color="#0891b2" />,
  },
  {
    title: "Transparent Reporting",
    tint: "#dbeafe",
    body: "Monthly dashboards with cost, performance, security posture, and Well-Architected scores. No black boxes. No surprises.",
    icon: <MessageSquare size={32} color="#1e40af" />,
  },
];

const TESTIMONIALS = [
  {
    initials: "DK",
    name: "Daniel Kim",
    role: "CTO, SaaS Platform",
    quote:
      "Brilworks cut our AWS bill by 37% in the first quarter — and we didn't even touch our workload count. Their Savings Plans portfolio and right-sizing strategy paid for the engagement in under 45 days.",
  },
  {
    initials: "EM",
    name: "Elena Martinez",
    role: "VP Engineering, FinTech",
    quote:
      "They migrated 120+ workloads from on-prem to AWS with zero business-hour downtime. Every cutover went exactly as rehearsed. I've never worked with a migration partner this disciplined.",
  },
  {
    initials: "RO",
    name: "Rahul Oberoi",
    role: "DevOps Lead, HealthTech",
    quote:
      "We turned over 24/7 ops to Brilworks a year ago and haven't been paged since. Their runbooks, observability stack, and incident response are genuinely better than what we had in-house.",
  },
];

const HONORS = [
  { label: "AWS Advanced Consulting Partner", icon: <ShieldCheck size={20} color="#017eeb" /> },
  { label: "Clutch Top B2B 2024", icon: <Star size={20} color="#017eeb" /> },
  { label: "GoodFirms Top Cloud Partner", icon: <Award size={20} color="#017eeb" /> },
  { label: "ISO 27001 Certified", icon: <BadgeCheck size={20} color="#017eeb" /> },
  { label: "AWS Well-Architected Partner", icon: <Star size={20} color="#017eeb" /> },
];

const INDUSTRIES = [
  {
    label: "FinTech",
    href: "/industry/fintech-software-development/",
    icon: <CreditCard size={32} color="#017eeb" />,
  },
  {
    label: "Healthcare",
    href: "/use-case/aws-in-healthcare/",
    icon: <Heart size={32} color="#ef4444" />,
  },
  {
    label: "E-commerce",
    href: "/use-case/aws-in-ecommerce/",
    icon: <ShoppingCart size={32} color="#10b981" />,
  },
  {
    label: "SaaS",
    href: "/saas-application-development-services/",
    icon: <Server size={32} color="#4f46e5" />,
  },
  {
    label: "Manufacturing",
    href: "/industry/manufacturing-software-development-services/",
    icon: <Factory size={32} color="#0d9488" />,
  },
  {
    label: "Media",
    href: "/industry/media-entertainment-software-development/",
    icon: <Monitor size={32} color="#0891b2" />,
  },
];

const FAQ = [
  {
    q: "How much can AWS consulting save on my cloud bill?",
    a: "Most clients see a 25-40% reduction in monthly AWS spend within 60 days. Savings come from right-sizing, Savings Plans, Reserved Instances, storage tier migration, architecture refactoring, and eliminating idle resources. We provide a free cost audit that quantifies your specific savings before any engagement.",
  },
  {
    q: "How long does an AWS migration take?",
    a: "Typical migrations run 8-16 weeks depending on workload count, complexity, and compliance requirements. We follow the AWS Migration Acceleration Program (MAP) — assess, mobilize, migrate — and share a detailed wave plan within the first two weeks.",
  },
  {
    q: "Are you an official AWS Partner?",
    a: "Yes. Brilworks is an AWS Advanced Consulting Partner with certified Solutions Architects, DevOps Engineers, and Security specialists. We also participate in AWS Well-Architected Framework reviews and MAP-funded migrations.",
  },
  {
    q: "Can you help with compliance — HIPAA, SOC 2, PCI-DSS, GDPR?",
    a: "Yes. We deploy compliance-ready landing zones as infrastructure-as-code, implement AWS Security Hub, GuardDuty, Config rules, and audit-ready logging mapped to your framework. We've guided clients through SOC 2 Type II, HIPAA, PCI-DSS, and GDPR audits.",
  },
  {
    q: "What's the difference between AWS Consulting and AWS Managed Services?",
    a: "Consulting is project-based — migrations, architecture design, cost optimization, security hardening. Managed Services is ongoing — 24/7 monitoring, patching, incident response, scaling, and backups with a 99.99% uptime SLA. Most clients start with consulting and move into managed services post-launch.",
  },
  {
    q: "How do you handle data handover and code ownership?",
    a: "You own 100% of your AWS accounts, infrastructure-as-code, runbooks, and documentation. We deliver everything in your repositories, your AWS Organization, and your secrets manager. At any point you can take the keys back and run everything in-house.",
  },
  {
    q: "Do you offer a free AWS Well-Architected Review?",
    a: "Yes. As an AWS Partner, we run free Well-Architected Reviews across all six pillars — operational excellence, security, reliability, performance, cost, and sustainability. You receive a detailed report with prioritized remediation and potential AWS funding credits.",
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

const StatPill = ({ value, label, tone = "ok" }) => {
  const tones = {
    ok: { bg: "#f0fdf4", border: "#bbf7d0", color: "#047857" },
    warn: { bg: "#fef3c7", border: "#fde68a", color: "#a16207" },
    err: { bg: "#fee2e2", border: "#fecaca", color: "#b91c1c" },
  };
  const t = tones[tone];
  return (
    <div className="rounded-md py-2.5 px-2 text-center" style={{ background: t.bg, border: `1px solid ${t.border}` }}>
      <div className="text-[18px] font-extrabold leading-none" style={{ color: t.color }}>{value}</div>
      <div className="text-[8px] font-semibold mt-1 uppercase tracking-wider" style={{ color: "#64748b" }}>{label}</div>
    </div>
  );
};

const CheckRow = ({ width, pass = true }) => (
  <div className="flex items-center gap-2 py-1.5" style={{ borderBottom: "1px solid #f1f5f9" }}>
    <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: pass ? "#10b981" : "#ef4444" }}>
      <Check size={10} color="white" strokeWidth={3} />
    </div>
    <b style={{ display: "block", height: 5, width, background: "#475569", borderRadius: 2 }} />
    <span style={{ display: "block", height: 4, width: "30%", background: "#cbd5e1", borderRadius: 1.5, marginLeft: "auto" }} />
  </div>
);

const MockupMigration = () => (
  <div className="w-full h-full rounded-xl overflow-hidden flex flex-col bg-white" style={{ boxShadow: "0 8px 24px rgba(13,15,26,0.08)" }}>
    <MockBar label="Migration Tracker · Wave 3" />
    <div className="flex-1 p-4">
      <div className="grid grid-cols-3 gap-2.5 mb-3">
        <StatPill value="87" label="Migrated" tone="ok" />
        <StatPill value="6" label="In Progress" tone="warn" />
        <StatPill value="100%" label="Uptime" tone="ok" />
      </div>
      <div>
        <CheckRow width="70%" />
        <CheckRow width="60%" />
        <CheckRow width="80%" />
        <CheckRow width="75%" />
      </div>
    </div>
  </div>
);

const codeSeg = (cls, w) => {
  const colors = { k: "#c084fc", s: "#86efac", v: "#fbbf24", t: "#67e8f9", x: "#475569" };
  return <span className="inline-block rounded-sm" style={{ height: 7, width: w, background: colors[cls] }} />;
};

const MockupCodeCanvas = () => (
  <div className="w-full h-full rounded-xl overflow-hidden flex flex-col bg-white" style={{ boxShadow: "0 8px 24px rgba(13,15,26,0.08)" }}>
    <MockBar label="main.tf · architecture.drawio" />
    <div className="flex-1 grid grid-cols-2">
      <div className="p-3.5" style={{ background: "#0d1117" }}>
        {[
          [["k", 36], ["t", 42]],
          [["x", 8], ["k", 24], ["s", 48]],
          [["x", 16], ["v", 28], ["s", 38]],
          [["x", 16], ["k", 30], ["v", 24]],
          [["x", 8], ["t", 42]],
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

const MockupCostExplorer = () => (
  <div className="w-full h-full rounded-xl overflow-hidden flex flex-col bg-white" style={{ boxShadow: "0 8px 24px rgba(13,15,26,0.08)" }}>
    <MockBar label="AWS Cost Explorer · Last 30 Days" />
    <div className="flex-1 p-4">
      <div className="grid grid-cols-3 gap-2.5 mb-3">
        <StatPill value="-38%" label="Bill Reduction" tone="ok" />
        <StatPill value="$47k" label="Monthly Saved" tone="ok" />
        <StatPill value="12" label="Right-Size" tone="warn" />
      </div>
      <div>
        <CheckRow width="70%" />
        <CheckRow width="80%" />
        <CheckRow width="65%" />
        <CheckRow width="75%" />
      </div>
    </div>
  </div>
);

const MockupSecurityPhone = () => (
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

const MockupDevOpsMulti = () => (
  <div className="grid gap-3.5 p-3.5 h-full items-center" style={{ gridTemplateColumns: "2fr 1fr", background: "linear-gradient(135deg, #ecfeff 0%, #cffafe 100%)" }}>
    <div style={{ background: "#0d0f1a", borderRadius: "8px 8px 4px 4px", padding: "6px 6px 0" }}>
      <div className="bg-white p-2" style={{ borderRadius: "4px 4px 0 0", minHeight: 110 }}>
        <div style={{ height: 8, width: "40%", background: "#0891b2", borderRadius: 2, marginBottom: 8 }} />
        <div className="grid grid-cols-3 gap-1 mb-2">
          <div style={{ height: 24, borderRadius: 3, background: "linear-gradient(135deg, #0891b2, #06b6d4)" }} />
          <div style={{ height: 24, borderRadius: 3, background: "linear-gradient(135deg, #0891b2, #06b6d4)" }} />
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

const MockupOpsBoard = () => (
  <div className="w-full h-full rounded-xl overflow-hidden flex flex-col bg-white" style={{ boxShadow: "0 8px 24px rgba(13,15,26,0.08)" }}>
    <MockBar label="Ops Board · 24/7 On-Call" />
    <div className="flex-1 relative p-4" style={{ background: "#fafbfc", backgroundImage: "radial-gradient(#e2e8f0 1px, transparent 1px)", backgroundSize: "14px 14px" }}>
      {[
        { c: "#dcfce7", r: "-4deg", left: "6%", top: "14%", w1: "75%", w2: "55%" },
        { c: "#dbeafe", r: "3deg", left: "38%", top: "8%", w1: "80%", w2: "60%" },
        { c: "#fef3c7", r: "-3deg", left: "68%", top: "18%", w1: "65%", w2: "75%" },
        { c: "#e0e7ff", r: "4deg", left: "14%", top: "55%", w1: "70%", w2: "50%" },
        { c: "#fce7f3", r: "-2deg", left: "48%", top: "60%", w1: "80%", w2: "55%" },
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

const SERVICES = [
  {
    title: "Cloud Migration & Modernization",
    body:
      "Lift-and-shift, re-platform, or full re-architect — we guide your workload to AWS with zero downtime and a proven playbook. Modernize monoliths into microservices, containers, and serverless on your timeline.",
    features: [
      "AWS MAP (Migration Acceleration Program) framework",
      "7 Rs assessment — rehost, replatform, refactor",
      "Zero-downtime cutover with fallback plan",
    ],
    mockup: <MockupMigration />,
    imageBg: "linear-gradient(135deg, #f0f7ff 0%, #e0ecfc 100%)",
    padMockup: true,
    reverse: false,
  },
  {
    title: "Architecture & Design",
    body:
      "We design multi-account landing zones, Well-Architected reference architectures, and cloud-native patterns that balance security, cost, and scale. Every design is infrastructure-as-code on day one.",
    features: [
      "AWS Well-Architected Framework reviews",
      "Terraform & CloudFormation IaC",
      "Multi-AZ, multi-region DR design",
    ],
    mockup: <MockupCodeCanvas />,
    imageBg: "linear-gradient(135deg, #f5f3ff 0%, #ddd6fe 100%)",
    padMockup: true,
    reverse: true,
  },
  {
    title: "Cost Optimization",
    body:
      "Most cloud bills carry 25-40% waste. We find it — right-sizing, Savings Plans, Reserved Instances, Spot, storage tiering, and architecture refactoring — and deliver measurable monthly savings within 60 days.",
    features: [
      "AWS Cost Explorer & Compute Optimizer audit",
      "Savings Plans & RI portfolio management",
      "FinOps governance & chargeback models",
    ],
    mockup: <MockupCostExplorer />,
    imageBg: "linear-gradient(135deg, #ecfdf5 0%, #bbf7d0 100%)",
    padMockup: true,
    reverse: false,
  },
  {
    title: "Security & Compliance",
    body:
      "Ship to regulated markets with confidence. We implement AWS Security Hub, GuardDuty, IAM boundaries, encryption everywhere, and audit-ready logging — mapped to SOC 2, HIPAA, PCI-DSS, and GDPR.",
    features: [
      "SOC 2, HIPAA, PCI-DSS, GDPR frameworks",
      "Security Hub, GuardDuty, Config rules",
      "Zero-trust IAM & secrets management",
    ],
    mockup: <MockupSecurityPhone />,
    imageBg: "linear-gradient(135deg, #f0fdfa 0%, #99f6e4 100%)",
    padMockup: false,
    reverse: true,
  },
  {
    title: "Development & DevOps",
    body:
      "Ship faster with battle-tested CI/CD, observability, and automated infrastructure. Our DevOps engineers build pipelines on CodePipeline, Jenkins, or GitHub Actions — and hand over full runbooks at the end.",
    features: [
      "CodePipeline, Jenkins, GitHub Actions",
      "ECS, EKS, Lambda serverless deployments",
      "CloudWatch, X-Ray observability stack",
    ],
    mockup: <MockupDevOpsMulti />,
    imageBg: "linear-gradient(135deg, #ecfeff 0%, #a5f3fc 100%)",
    padMockup: false,
    reverse: false,
  },
  {
    title: "AWS Managed Services",
    body:
      "Hand the keys over. Our 24/7 AWS Managed Services team monitors, patches, scales, and optimizes your environment — so your team can focus on product, not pagers. Backed by measurable 99.99% uptime SLAs.",
    features: [
      "24/7 monitoring & incident response",
      "Automated patching & backup management",
      "Monthly Well-Architected health reports",
    ],
    mockup: <MockupOpsBoard />,
    imageBg: "linear-gradient(135deg, #f0f7ff 0%, #e0ecfc 100%)",
    padMockup: true,
    reverse: true,
  },
];

// ---------- Page ----------
const AWSService = () => {
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
                  <Diamond size={14} color="#00b4d8" /> AWS Advanced Consulting Partner
                </span>
                <h1 className="font-extrabold mb-5 text-white" style={{ fontSize: "clamp(34px, 4vw, 54px)", letterSpacing: "-1.5px", lineHeight: 1.1 }}>
                  Cut Cloud Costs, <span style={gradientTextStyle}>Scale Without Limits</span>
                </h1>
                <p className="mb-8" style={{ fontSize: 18, lineHeight: 1.7, color: "rgba(255,255,255,0.72)", maxWidth: 580 }}>
                  AWS-certified architects help you migrate, modernize, and optimize — $2M+ in client cloud savings, 99.99% uptime SLAs, and migrations completed 40% faster than industry average.
                </p>
                <div className="flex flex-wrap gap-3.5 my-10">
                  <Link href="#contact"
                    className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all"
                    style={{ background: "#017eeb", color: "#fff", border: "1px solid #017eeb", padding: "16px 32px", fontSize: 16 }}>
                    Get My Free AWS Assessment <ArrowRight size={16} />
                  </Link>
                  <Link href="#services"
                    className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:bg-white/10"
                    style={{ background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.3)", padding: "16px 32px", fontSize: 16 }}>
                    Explore Services
                  </Link>
                </div>
                <div className="flex flex-wrap gap-[18px]" style={{ color: "rgba(255,255,255,0.65)", fontSize: 14 }}>
                  {["Free AWS Well-Architected review", "48-hour cost analysis", "No commitment"].map((t) => (
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
            <span className="inline-block mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#017eeb" }}>What We Deliver</span>
            <h2 className="font-extrabold" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0d0f1a" }}>AWS Services That Move Your Cloud Forward</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>End-to-end AWS consulting — from migration strategy to managed operations. Every engagement is led by certified Solutions Architects with real production experience.</p>
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
          <h3 className="font-extrabold mb-3.5" style={{ fontSize: "clamp(24px, 3vw, 36px)", color: "#fff", lineHeight: 1.2, letterSpacing: "-0.5px" }}>Ready to Cut Your AWS Bill?</h3>
          <p className="mb-7" style={{ color: "rgba(255,255,255,0.85)", fontSize: 16, lineHeight: 1.7 }}>Book a free 30-minute AWS assessment. We'll review your current spend, identify top 3 cost-reduction opportunities, and give you an action plan — no commitment required.</p>
          <Link href="#contact"
            className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:!bg-[#0d0f1a] hover:!text-white hover:!border-[#0d0f1a] mt-5"
            style={{ background: "#fff", color: "#017eeb", border: "1px solid #fff", padding: "16px 32px", fontSize: 16 }}>
            Get My Free AWS Assessment
          </Link>
        </div>
      </section>

      {/* WHY BRILWORKS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="text-center mx-auto mb-14" style={{ maxWidth: 720 }}>
            <span className="inline-block mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#017eeb" }}>Why Brilworks</span>
            <h2 className="font-extrabold" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0d0f1a" }}>Why AWS Teams Choose Brilworks</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>We don't just move workloads — we partner with your engineering team to make every AWS dollar, second, and watt count.</p>
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
            <h2 className="font-extrabold text-white" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15 }}>What CTOs &amp; DevOps Leaders Say</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "rgba(255,255,255,0.62)" }}>Real outcomes from real AWS partners across SaaS, FinTech, Healthcare, and E-commerce.</p>
          </div>
          <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="rounded-2xl"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", padding: "32px 28px", backdropFilter: "blur(10px)" }}>
                <div className="flex gap-0.5 mb-4" style={{ color: "#facc15" }}>
                  {[0, 1, 2, 3, 4].map((i) => <Star key={i} size={16} fill="currentColor" strokeWidth={0} />)}
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
            <h2 className="font-extrabold" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0d0f1a" }}>Industries We Power on AWS</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>We've built AWS workloads for regulated, data-heavy, and fast-moving industries — bringing both cloud depth and domain knowledge.</p>
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
            <h2 className="font-extrabold" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0d0f1a" }}>AWS Consulting FAQs</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>Everything CTOs, DevOps leaders, and cloud architects typically ask before an AWS engagement.</p>
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
          title="Get Your Free AWS Assessment"
          description="You're one conversation away from a leaner, faster, more reliable AWS environment. Tell us about your workload — we'll show you exactly where you can save and scale."
          messageRequired={false}
          submitLabel="Get My Free AWS Assessment"
          benefits={[
            "Free 30-minute assessment with an AWS-certified architect",
            "Top 3 cost-reduction opportunities identified within 48 hours",
            "Well-Architected health score across all six pillars",
            "Response guaranteed within 24 business hours",
            "AWS-funded migration credits where eligible",
          ]}
        />
      </div>
    </>
  );
};

export default AWSService;
