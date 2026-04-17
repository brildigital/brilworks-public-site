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
    <path d="M12 2L15 8L21 9L17 14L18 21L12 18L6 21L7 14L3 9L9 8L12 2Z" fill="#c4b5fd" opacity="0.3" />
    <path d="M12 2L15 8L21 9L17 14L18 21L12 18L6 21L7 14L3 9L9 8L12 2Z" stroke="#c4b5fd" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const IconShield = ({ color = "#7c3aed" }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2L4 5V11C4 16 7.5 20.5 12 22C16.5 20.5 20 16 20 11V5L12 2Z" fill={color} opacity="0.15" />
    <path d="M12 2L4 5V11C4 16 7.5 20.5 12 22C16.5 20.5 20 16 20 11V5L12 2Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M9 12L11 14L15 10" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconStarOutline = ({ color = "#7c3aed" }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2L15 8L21 9L17 14L18 21L12 18L6 21L7 14L3 9L9 8L12 2Z" fill={color} opacity="0.15" />
    <path d="M12 2L15 8L21 9L17 14L18 21L12 18L6 21L7 14L3 9L9 8L12 2Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
  </svg>
);

const IconBadgeCircle = ({ color = "#7c3aed" }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" fill={color} opacity="0.15" />
    <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.8" />
    <path d="M8 12L11 15L16 9" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconCompass = ({ color = "#7c3aed" }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2C13 6 17 10 22 11C17 12 13 16 12 22C11 16 7 12 2 11C7 10 11 6 12 2Z" fill={color} opacity="0.15" />
    <path d="M12 2C13 6 17 10 22 11C17 12 13 16 12 22C11 16 7 12 2 11C7 10 11 6 12 2Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
  </svg>
);

// ---------- Style tokens ----------
const heroBg = {
  background:
    "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(124,58,237,0.20) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 20% 80%, rgba(0,180,216,0.08) 0%, transparent 60%), linear-gradient(160deg, #0d0f1a 0%, #111428 50%, #0a0c1e 100%)",
};
const heroGridOverlay = {
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
  backgroundSize: "60px 60px",
  opacity: 0.06,
};
const darkSectionBg = {
  background:
    "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(124,58,237,0.15) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 20% 80%, rgba(0,180,216,0.06) 0%, transparent 60%), #0d0f1a",
};
const gradientTextStyle = {
  backgroundImage: "linear-gradient(to right, #7c3aed, #00ffff)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  color: "transparent",
};
const statValueStyle = {
  backgroundImage: "linear-gradient(to right, #7c3aed, #00dbd3)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  color: "transparent",
};

// ---------- Data ----------
const TRUST = [
  { icon: <IconShield />, label: "AWS Consulting Partner" },
  { icon: <IconStarOutline />, label: "30+ GenAI Apps Shipped" },
  { icon: <IconBadgeCircle />, label: "OpenAI / Anthropic / Bedrock Experts" },
  { icon: <IconCompass />, label: "RAG + Fine-Tuning Specialists" },
];

const HERO_STATS = [
  { value: "30+", label: "GenAI Apps Shipped" },
  { value: "15+", label: "Models Deployed" },
  { value: "50+", label: "Enterprise Integrations" },
  { value: "98%", label: "Client Satisfaction" },
];

const BENEFITS = [
  {
    title: "Beyond Automation, Embrace Innovation",
    tint: "#ede9fe",
    body: "We don't just automate tasks — we empower your AI to generate entirely new content, concepts, and ideas that differentiate your product.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L15 8L21 9L17 14L18 21L12 18L6 21L7 14L3 9L9 8L12 2Z" fill="#7c3aed" opacity="0.15" />
        <path d="M12 2L15 8L21 9L17 14L18 21L12 18L6 21L7 14L3 9L9 8L12 2Z" stroke="#7c3aed" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Scalable AI Solutions",
    tint: "#e0e7ff",
    body: "Your AI shouldn't be left behind as you grow. Our architectures scale across regions, tenants, and usage spikes — without ballooning token bills.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 3V21H21M7 14L11 10L15 14L21 8" fill="#4f46e5" opacity="0.15" />
        <path d="M3 3V21H21M7 14L11 10L15 14L21 8M21 8H17M21 8V12" stroke="#4f46e5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "We Speak Your Language, and AI's",
    tint: "#ccfbf1",
    body: "Our AI experts bridge the gap between your domain knowledge and the complex world of foundation models. You stay in charge of what; we handle the how.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" fill="#0d9488" opacity="0.15" />
        <path d="M8 12H16M12 8V16M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "AI for Everyone",
    tint: "#cffafe",
    body: "We're not just developers — we're your partners. Clear communication, async-first workflow, and no jargon walls between your team and ours.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="9" cy="8" r="4" fill="#0891b2" opacity="0.15" />
        <path d="M9 12C12.31 12 15 9.31 15 6C15 4.69 14.59 3.47 13.91 2.5M3 21V19C3 16.79 4.79 15 7 15H11C13.21 15 15 16.79 15 19V21" stroke="#0891b2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="8" r="4" stroke="#0891b2" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: "Agility at the Core",
    tint: "#fce7f3",
    body: "We track the weekly pace of model releases, agent frameworks, and inference tech — so your project ships on current stacks, not last year's best practices.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="#ec4899" opacity="0.15" />
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#ec4899" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Responsible & Secure AI",
    tint: "#d1fae5",
    body: "NDAs first. Your data stays in your tenancy — VPC, Bedrock, private endpoints. PII redaction, audit logs, and bias checks built in.",
    icon: <IconShield color="#10b981" />,
  },
];

const TESTIMONIALS = [
  {
    initials: "JK",
    name: "James Kim",
    role: "Head of AI, FinTech Lender",
    quote:
      "Brilworks built our RAG-powered underwriting assistant on Bedrock in 9 weeks. It cut analyst review time by 60% and passed our compliance audit on the first pass. They understand finance, not just LLMs.",
  },
  {
    initials: "AR",
    name: "Dr. Anna Reyes",
    role: "CTO, HealthTech Platform",
    quote:
      "We needed a fine-tuned clinical-summary model running inside our HIPAA-compliant VPC. Brilworks delivered — PHI never left our tenancy, and accuracy jumped 14 points over the base model.",
  },
  {
    initials: "LC",
    name: "Laura Chen",
    role: "VP Product, E-commerce Marketplace",
    quote:
      "Their GenAI team built our product-description generator and review summarizer. Conversions on AI-written listings are up 22%, and we cut content ops cost by two-thirds. They delivered a real business outcome, not a demo.",
  },
];

const HONORS = [
  {
    label: "AWS Partner · Advanced Tier",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L4 5V11C4 16 7.5 20.5 12 22C16.5 20.5 20 16 20 11V5L12 2Z" stroke="#7c3aed" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Clutch Global Award 2025",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L15 8.5L22 9.3L17 14L18.2 21L12 17.7L5.8 21L7 14L2 9.3L9 8.5L12 2Z" stroke="#7c3aed" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "GoodFirms Top 2025-26",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="8" r="6" stroke="#7c3aed" strokeWidth="1.8" />
        <path d="M9 14L7 22L12 19L17 22L15 14" stroke="#7c3aed" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "SelectedFirms Top 10 · 2026",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 3H21V21H3V3Z" stroke="#7c3aed" strokeWidth="1.8" />
        <path d="M9 9H15V15H9V9Z" stroke="#7c3aed" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    label: "Adalo · No-Code Certified",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L15 8.5L22 9.3L17 14L18.2 21L12 17.7L5.8 21L7 14L2 9.3L9 8.5L12 2Z" stroke="#7c3aed" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const INDUSTRIES = [
  {
    label: "FinTech",
    href: "/use-case/gen-ai-in-fintech/",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="6" width="20" height="12" rx="2" fill="#7c3aed" opacity="0.15" />
        <rect x="2" y="6" width="20" height="12" rx="2" stroke="#7c3aed" strokeWidth="1.8" />
        <path d="M2 10H22" stroke="#7c3aed" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    label: "HealthTech",
    href: "/use-case/generative-ai-in-healthcare/",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 21C12 21 4 14 4 8.5C4 5.5 6.5 3 9.5 3C11 3 12 4 12 4C12 4 13 3 14.5 3C17.5 3 20 5.5 20 8.5C20 14 12 21 12 21Z" fill="#ec4899" opacity="0.15" />
        <path d="M12 21C12 21 4 14 4 8.5C4 5.5 6.5 3 9.5 3C11 3 12 4 12 4C12 4 13 3 14.5 3C17.5 3 20 5.5 20 8.5C20 14 12 21 12 21Z" stroke="#ec4899" strokeWidth="1.8" strokeLinejoin="round" />
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
    label: "Legal",
    href: "/industry/legal/",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3V21M5 8L12 5L19 8M3 11H9M15 11H21M4 18C4 18 6 16 6 13H2C2 16 4 18 4 18ZM20 18C20 18 22 16 22 13H18C18 16 20 18 20 18Z" fill="#0891b2" opacity="0.15" />
        <path d="M12 3V21M5 8L12 5L19 8M3 11H9M15 11H21M4 18C4 18 6 16 6 13H2C2 16 4 18 4 18ZM20 18C20 18 22 16 22 13H18C18 16 20 18 20 18Z" stroke="#0891b2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Media",
    href: "/use-case/generative-ai-in-media-and-entertainment/",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2" fill="#f59e0b" opacity="0.15" />
        <rect x="2" y="4" width="20" height="16" rx="2" stroke="#f59e0b" strokeWidth="1.8" />
        <path d="M10 9L16 12L10 15V9Z" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const FAQ = [
  {
    q: "How much does it cost to develop a generative AI solution?",
    a: "It depends on complexity, team size, and ongoing maintenance. A basic LLM app typically runs $50K-$150K; feature-rich solutions with agents, RAG, and fine-tuning can reach $400K or more. We offer free consultations to scope your specific need and share a tailored quote.",
  },
  {
    q: "How long does a generative AI project take?",
    a: "Focused LLM apps with RAG can ship in 6-10 weeks. Fine-tuning and multi-agent systems typically take 3-6 months. End-to-end enterprise rollouts including integration and governance run 6-12 months. We share a detailed timeline within 48 hours of your first call.",
  },
  {
    q: "Do you use OpenAI, Anthropic, or open-source models?",
    a: "All of the above. We match the model to the job — GPT-4 class for reasoning, Claude for long context, Llama / Mistral for on-prem or cost-sensitive use cases, Bedrock for AWS-native compliance. We also benchmark multiple options against your actual data before committing.",
  },
  {
    q: "How do you handle data privacy and compliance (HIPAA, SOC 2, GDPR)?",
    a: "Your data stays in your tenancy. We deploy via private endpoints, VPC, or AWS Bedrock with no-training guarantees. We sign NDAs before any discussion and support HIPAA, SOC 2, ISO 27001, and GDPR workflows with audit logging and PII redaction.",
  },
  {
    q: "Should I use RAG or fine-tuning?",
    a: "RAG is best when your knowledge changes often (docs, policies, tickets). Fine-tuning is best for style, format, tone, or specialized reasoning patterns. Most production systems use both. We benchmark both on a sample of your data before recommending.",
  },
  {
    q: "How do you prevent hallucinations and prompt injection?",
    a: "Layered defense: retrieval with citations, structured output parsing, eval harnesses on every deploy, guardrails (topic / PII / jailbreak filters), and production monitoring. We build evaluation in from day one — not as an afterthought.",
  },
  {
    q: "Who owns the model, prompts, and code?",
    a: "You do — 100%. At handover you get full repo access, prompts, eval suites, fine-tuned model weights, documentation, and deployment credentials. No vendor lock-in.",
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

// Mockup 1: Sticky note discovery board (Consulting)
const MockupBoard = () => (
  <div className="w-full h-full rounded-xl overflow-hidden flex flex-col bg-white" style={{ boxShadow: "0 8px 24px rgba(13,15,26,0.08)" }}>
    <MockBar label="AI Opportunity Map · Discovery" />
    <div className="flex-1 relative p-4" style={{ background: "#fafbfc", backgroundImage: "radial-gradient(#e2e8f0 1px, transparent 1px)", backgroundSize: "14px 14px" }}>
      {[
        { c: "#fef3c7", r: "-5deg", left: "6%", top: "14%", w1: "75%", w2: "55%" },
        { c: "#ede9fe", r: "3deg", left: "38%", top: "8%", w1: "80%", w2: "60%" },
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
      <div className="absolute" style={{ left: "34%", top: "30%", width: "10%", height: "1.5px", background: "#7c3aed", opacity: 0.5, transform: "rotate(15deg)" }} />
      <div className="absolute" style={{ left: "62%", top: "38%", width: "8%", height: "1.5px", background: "#7c3aed", opacity: 0.5, transform: "rotate(45deg)" }} />
    </div>
  </div>
);

// Mockup 2: Code + Canvas (RAG / LLM Model Development)
const codeSeg = (cls, w) => {
  const colors = { k: "#c084fc", s: "#86efac", v: "#fbbf24", t: "#67e8f9", x: "#475569" };
  return <span className="inline-block rounded-sm" style={{ height: 7, width: w, background: colors[cls] }} />;
};

const MockupCodeCanvas = () => (
  <div className="w-full h-full rounded-xl overflow-hidden flex flex-col bg-white" style={{ boxShadow: "0 8px 24px rgba(13,15,26,0.08)" }}>
    <MockBar label="rag_pipeline.py · retriever.ts" />
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

// Mockup 3: Multi-device (Integration)
const MockupMultiDevice = () => (
  <div className="grid gap-3.5 p-3.5 h-full items-center" style={{ gridTemplateColumns: "2fr 1fr", background: "linear-gradient(135deg, #ecfdf5 0%, #bbf7d0 100%)" }}>
    <div style={{ background: "#0d0f1a", borderRadius: "8px 8px 4px 4px", padding: "6px 6px 0" }}>
      <div className="bg-white p-2" style={{ borderRadius: "4px 4px 0 0", minHeight: 110 }}>
        <div style={{ height: 8, width: "40%", background: "#0d9488", borderRadius: 2, marginBottom: 8 }} />
        <div className="grid grid-cols-3 gap-1 mb-2">
          <div style={{ height: 24, borderRadius: 3, background: "linear-gradient(135deg, #0d9488, #14b8a6)" }} />
          <div style={{ height: 24, borderRadius: 3, background: "#ecfdf5", border: "1px solid #bbf7d0" }} />
          <div style={{ height: 24, borderRadius: 3, background: "#ecfdf5", border: "1px solid #bbf7d0" }} />
        </div>
        {["80%", "65%", "75%", "55%"].map((w, i) => (
          <div key={i} style={{ height: 4, background: "#e2e8f0", borderRadius: 1.5, marginBottom: 3, width: w }} />
        ))}
      </div>
      <div style={{ height: 6, background: "#1e293b", borderRadius: "0 0 8px 8px" }} />
    </div>
    <div style={{ background: "#0d0f1a", borderRadius: 10, padding: 5 }}>
      <div className="p-2" style={{ background: "linear-gradient(160deg, white, #ecfdf5)", borderRadius: 6, minHeight: 90 }}>
        <div style={{ height: 5, width: "50%", background: "#0d9488", borderRadius: 2, marginBottom: 6 }} />
        <div style={{ height: 3, background: "#cbd5e1", borderRadius: 1.5, marginBottom: 3 }} />
        <div style={{ height: 3, background: "#cbd5e1", borderRadius: 1.5, marginBottom: 3, width: "60%" }} />
        <div style={{ height: 3, background: "#cbd5e1", borderRadius: 1.5, marginBottom: 3 }} />
        <div style={{ height: 3, background: "#cbd5e1", borderRadius: 1.5, marginBottom: 3, width: "60%" }} />
        <div style={{ height: 12, width: "50%", background: "#0d9488", borderRadius: 3, marginTop: 6 }} />
      </div>
    </div>
  </div>
);

// Mockup 4: Stats dashboard (Model Performance / Monitoring & Fine-Tuning)
const MockupStatsDashboard = ({ stats, rows, label }) => (
  <div className="w-full h-full rounded-xl overflow-hidden flex flex-col bg-white" style={{ boxShadow: "0 8px 24px rgba(13,15,26,0.08)" }}>
    <MockBar label={label} />
    <div className="flex-1 p-4">
      <div className="grid grid-cols-3 gap-2.5 mb-3">
        {stats.map((s, i) => (
          <div key={i} className="rounded-md py-2.5 px-2 text-center"
            style={{
              background: s.tone === "warn" ? "#fef3c7" : s.tone === "err" ? "#fee2e2" : "#f0fdf4",
              border: `1px solid ${s.tone === "warn" ? "#fde68a" : s.tone === "err" ? "#fecaca" : "#bbf7d0"}`,
            }}>
            <div className="text-[16px] font-extrabold leading-none"
              style={{ color: s.tone === "warn" ? "#a16207" : s.tone === "err" ? "#b91c1c" : "#047857" }}>{s.n}</div>
            <div className="text-[8px] font-semibold mt-1 uppercase tracking-wider" style={{ color: "#64748b" }}>{s.lb}</div>
          </div>
        ))}
      </div>
      <div>
        {rows.map((row, i, arr) => (
          <div key={i} className="flex items-center gap-2 py-1.5" style={{ borderBottom: i === arr.length - 1 ? "none" : "1px solid #f1f5f9" }}>
            <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: row.pass ? "#10b981" : "#ef4444" }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" style={{ color: "white" }}>
                {row.pass
                  ? <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  : <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />}
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

// Mockup 5: Phone (Chat / Replication UI)
const MockupPhone = () => (
  <div className="flex items-center justify-center gap-[18px] h-full" style={{ background: "linear-gradient(135deg, #ecfeff 0%, #a5f3fc 100%)" }}>
    <div className="relative p-2" style={{ width: 110, height: 200, background: "#0d0f1a", borderRadius: 18, boxShadow: "0 12px 40px rgba(124,58,237,0.25)" }}>
      <div className="absolute z-10" style={{ top: 4, left: "50%", transform: "translateX(-50%)", width: 36, height: 4, background: "#0d0f1a", borderRadius: "0 0 6px 6px" }} />
      <div className="h-full rounded-xl overflow-hidden px-2 py-2.5" style={{ background: "linear-gradient(160deg, #ffffff 0%, #f5f3ff 100%)" }}>
        <div style={{ height: 6, width: "50%", background: "#7c3aed", borderRadius: 2, marginBottom: 8 }} />
        {[{ w1: "80%", w2: "60%", both: true }, { w1: "70%", w2: "50%", both: true }, { w1: "75%", w2: null, both: false }].map((c, i) => (
          <div key={i} className="bg-white rounded-md p-1.5 mb-1.5" style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
            <div style={{ height: 3, background: "#475569", borderRadius: 1.5, marginBottom: 3, width: "60%" }} />
            <div style={{ height: 3, background: "#cbd5e1", borderRadius: 1.5, marginBottom: 3, width: c.w1 }} />
            {c.both && <div style={{ height: 3, background: "#cbd5e1", borderRadius: 1.5, width: c.w2 }} />}
          </div>
        ))}
        <div className="flex items-center justify-center mt-1.5" style={{ background: "#7c3aed", height: 18, borderRadius: 4 }}>
          <span style={{ background: "white", height: 4, width: "40%", borderRadius: 1.5 }} />
        </div>
      </div>
    </div>
    <div className="flex flex-col gap-2 max-[600px]:hidden">
      <div style={{ width: 38, height: 38, borderRadius: 10, background: "linear-gradient(135deg, #7c3aed, #a855f7)", boxShadow: "0 4px 12px rgba(124,58,237,0.15)" }} />
      <div style={{ width: 38, height: 38, borderRadius: 10, background: "linear-gradient(135deg, #017eeb, #00dbd3)", boxShadow: "0 4px 12px rgba(124,58,237,0.15)" }} />
      <div style={{ width: 38, height: 38, borderRadius: 10, background: "linear-gradient(135deg, #f59e0b, #ef4444)", boxShadow: "0 4px 12px rgba(124,58,237,0.15)" }} />
      <div style={{ width: 38, height: 38, borderRadius: 10, background: "linear-gradient(135deg, #8b5cf6, #ec4899)", boxShadow: "0 4px 12px rgba(124,58,237,0.15)" }} />
    </div>
  </div>
);

const SERVICES = [
  {
    title: "Generative AI Consulting",
    body:
      "Feeling overwhelmed by GenAI? Our team runs a strategic assessment — mapping your workflows, data, and revenue drivers to the places where GenAI delivers real, measurable impact. You walk away with a prioritized roadmap, not a buzzword list.",
    features: [
      "Use-case discovery & ROI scoring",
      "Model, cost, and data-privacy strategy",
      "Prioritized 90-day GenAI roadmap",
    ],
    mockup: <MockupBoard />,
    imageBg: "linear-gradient(135deg, #f5f3ff 0%, #ddd6fe 100%)",
    padMockup: true,
    reverse: false,
  },
  {
    title: "Generative AI Model Development",
    body:
      "Don't settle for generic chatbots. Our engineers and data scientists build custom LLM applications, RAG pipelines, and multi-agent systems tuned to your domain data, latency budget, and accuracy bar.",
    features: [
      "RAG with vector DBs (Pinecone, pgvector, Weaviate)",
      "Multi-agent orchestration (LangGraph, CrewAI)",
      "Guardrails, evals, and hallucination controls",
    ],
    mockup: <MockupCodeCanvas />,
    imageBg: "linear-gradient(135deg, #f5f3ff 0%, #ddd6fe 100%)",
    padMockup: true,
    reverse: true,
  },
  {
    title: "Generative AI Integration",
    body:
      "Get the most from your AI investment with clean, secure integration. We handle the plumbing — auth, streaming, rate limits, observability — so your custom model slots into existing workflows, CRMs, and data stacks without breaking a thing.",
    features: [
      "Secure API gateways & streaming responses",
      "CRM, ERP, Slack, and data-warehouse connectors",
      "Token-cost observability & rate limiting",
    ],
    mockup: <MockupMultiDevice />,
    imageBg: "linear-gradient(135deg, #ecfdf5 0%, #bbf7d0 100%)",
    padMockup: false,
    reverse: false,
  },
  {
    title: "Upgrade & Maintenance",
    body:
      "A GenAI model isn't a deploy-and-forget project. We monitor accuracy, latency, and cost in production — catching drift, regressions, and prompt-injection attempts before your users do.",
    features: [
      "Accuracy, latency, and cost dashboards",
      "Drift detection and regression alerts",
      "Prompt-injection and jailbreak monitoring",
    ],
    mockup: (
      <MockupStatsDashboard
        label="Model Monitor · Prod · LLM-v2.3"
        stats={[
          { n: "96.4%", lb: "Accuracy" },
          { n: "842ms", lb: "P95 Latency", tone: "warn" },
          { n: "$0.41", lb: "Avg Cost" },
        ]}
        rows={[
          { pass: true, w: "70%" },
          { pass: true, w: "60%" },
          { pass: true, w: "80%" },
          { pass: false, w: "65%" },
          { pass: true, w: "75%" },
        ]}
      />
    ),
    imageBg: "linear-gradient(135deg, #f0fdfa 0%, #99f6e4 100%)",
    padMockup: true,
    reverse: true,
  },
  {
    title: "AI Model Fine-Tuning",
    body:
      "As your data and business evolve, your model should too. We fine-tune foundation models (Llama, Mistral, GPT, Claude) on your proprietary data — raising accuracy, cutting token cost, and matching your brand voice.",
    features: [
      "Supervised & instruction fine-tuning",
      "LoRA / QLoRA for efficient training",
      "Eval harness & A/B comparison vs. base model",
    ],
    mockup: (
      <MockupStatsDashboard
        label="Fine-Tune Job · Llama-3-8B · Epoch 4/5"
        stats={[
          { n: "+18%", lb: "Accuracy" },
          { n: "0.09", lb: "Loss", tone: "warn" },
          { n: "4/5", lb: "Epochs" },
        ]}
        rows={[
          { pass: true, w: "70%" },
          { pass: true, w: "60%" },
          { pass: true, w: "55%" },
          { pass: true, w: "80%" },
          { pass: true, w: "65%" },
        ]}
      />
    ),
    imageBg: "linear-gradient(135deg, #ecfeff 0%, #a5f3fc 100%)",
    padMockup: true,
    reverse: false,
  },
  {
    title: "Generative AI Model Replication",
    body:
      "Need your model running in multiple regions, environments, or white-label apps? We replicate and deploy your custom GenAI solution across cloud regions, edge, and on-prem — with consistent behavior and central governance.",
    features: [
      "Multi-region & multi-tenant deployment",
      "On-prem & private-cloud rollout",
      "Central prompt & policy governance",
    ],
    mockup: <MockupPhone />,
    imageBg: "linear-gradient(135deg, #ecfeff 0%, #a5f3fc 100%)",
    padMockup: false,
    reverse: true,
  },
];

// ---------- Page ----------
const GenerativeAIDevService = () => {
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
                  style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)", color: "#c4b5fd", letterSpacing: "0.1em" }}>
                  <IconSparkle /> Generative AI Development
                </span>
                <h1 className="font-extrabold mb-5 text-white" style={{ fontSize: "clamp(34px, 4vw, 54px)", letterSpacing: "-1.5px", lineHeight: 1.1 }}>
                  Ship Production-Grade Generative AI — <span style={gradientTextStyle}>In Weeks, Not Quarters</span>
                </h1>
                <p className="mb-8" style={{ fontSize: 18, lineHeight: 1.7, color: "rgba(255,255,255,0.72)", maxWidth: 580 }}>
                  We build LLM apps, RAG pipelines, AI agents, and fine-tuned models on OpenAI, Anthropic, and AWS Bedrock. 30+ GenAI apps shipped — production-ready from day one, with guardrails, evals, and cost controls built in.
                </p>
                <div className="flex flex-wrap gap-3.5 my-10">
                  <Link href="#contact"
                    className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all"
                    style={{ background: "#7c3aed", color: "#fff", border: "1px solid #7c3aed", padding: "16px 32px", fontSize: 16 }}>
                    Get My Free AI Consultation <IconArrowRight />
                  </Link>
                  <Link href="#services"
                    className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:bg-white/10"
                    style={{ background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.3)", padding: "16px 32px", fontSize: 16 }}>
                    See What We Build
                  </Link>
                </div>
                <div className="flex flex-wrap gap-[18px]" style={{ color: "rgba(255,255,255,0.65)", fontSize: 14 }}>
                  {["Free 30-min AI strategy call", "48-hour proposal", "NDA-first, data stays yours"].map((t) => (
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
            <span className="inline-block mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#7c3aed" }}>What We Build</span>
            <h2 className="font-extrabold" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0d0f1a" }}>Our Generative AI Development Services</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>End-to-end GenAI engineering — from strategy and model selection to RAG pipelines, fine-tuning, and scalable deployment.</p>
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
                        <span style={{ color: "#7c3aed", flexShrink: 0, marginTop: 2 }}><IconCheck /></span>{f}
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
      <section className="relative overflow-hidden text-center" style={{ padding: "56px 0", background: "linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)" }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(0,219,211,0.2) 0%, transparent 60%)" }} />
        <div className="relative mx-auto px-5 md:px-10" style={{ maxWidth: 700, zIndex: 1 }}>
          <h3 className="font-extrabold mb-3.5" style={{ fontSize: "clamp(24px, 3vw, 36px)", color: "#fff", lineHeight: 1.2, letterSpacing: "-0.5px" }}>Data is the new oil, but AI is the refinery.</h3>
          <p className="mb-7" style={{ color: "rgba(255,255,255,0.85)", fontSize: 16, lineHeight: 1.7 }}>Get a free 30-minute AI strategy call. We&apos;ll review your data, prioritize a GenAI use case, and map a production roadmap — no commitment.</p>
          <Link href="#contact"
            className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:!bg-[#0d0f1a] hover:!text-white hover:!border-[#0d0f1a]"
            style={{ background: "#fff", color: "#7c3aed", border: "1px solid #fff", padding: "16px 32px", fontSize: 16 }}>
            Schedule a Free AI Consultation
          </Link>
        </div>
      </section>

      {/* WHY BRILWORKS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="text-center mx-auto mb-14" style={{ maxWidth: 720 }}>
            <span className="inline-block mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#7c3aed" }}>Why Brilworks</span>
            <h2 className="font-extrabold" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0d0f1a" }}>Here&apos;s What Sets Us Apart</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>We don&apos;t run three-month PoCs that die on a whiteboard. We ship GenAI apps real users use — with guardrails, evals, and cost controls from day one.</p>
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
            <span className="inline-block mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#c4b5fd" }}>Client Stories</span>
            <h2 className="font-extrabold text-white" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15 }}>What Founders &amp; AI Leaders Say About Us</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "rgba(255,255,255,0.62)" }}>Real outcomes from teams that trusted Brilworks to take their GenAI work from idea to production.</p>
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
                    style={{ width: 44, height: 44, background: "linear-gradient(135deg, #7c3aed, #00dbd3)", fontSize: 16 }}>
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
            <span className="inline-block mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#7c3aed" }}>Recognized By</span>
            <h2 className="font-extrabold" style={{ fontSize: "clamp(22px, 2.4vw, 30px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0d0f1a" }}>We&apos;re Pleased to Share Some of the Honors</h2>
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
            <span className="inline-block mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#7c3aed" }}>Industries We Serve</span>
            <h2 className="font-extrabold" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0d0f1a" }}>Deep Domain Expertise Across Verticals</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>Not generalists. We have shipped GenAI solutions with case studies, clients, and production models in each of these verticals.</p>
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
            <span className="inline-block mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#7c3aed" }}>Common Questions</span>
            <h2 className="font-extrabold" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0d0f1a" }}>Frequently Asked Questions</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>Everything AI leaders and founders typically ask before partnering with us on a GenAI project.</p>
          </div>
          <div className="mx-auto" style={{ maxWidth: 860 }}>
            {FAQ.map((item, i) => (
              <details key={i} className="group overflow-hidden mb-3 transition-all"
                style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12 }}>
                <summary className="list-none flex items-center justify-between gap-4 cursor-pointer"
                  style={{ padding: "22px 28px", fontWeight: 600, fontSize: 16, color: "#0d0f1a" }}>
                  <span>{item.q}</span>
                  <span className="transition-transform group-open:rotate-45" style={{ color: "#7c3aed", fontSize: 24, fontWeight: 400, lineHeight: 1 }}>+</span>
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
          title="Ready to Ship Your GenAI App?"
          description="Tell us your project idea and get a free AI consultation to turn data into shipped product. No buzzwords — just a real roadmap."
          messageRequired={false}
          submitLabel="Get My Free AI Consultation"
          benefits={[
            "Free 30-minute consultation with a senior AI engineer",
            "Detailed project proposal within 48 hours",
            "NDA signed first — your data and IP stay yours",
            "Response guaranteed within 24 business hours",
            "Expert engineers across RAG, agents, fine-tuning, and MLOps",
          ]}
        />
      </div>
    </>
  );
};

export default GenerativeAIDevService;
