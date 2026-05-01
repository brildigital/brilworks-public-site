"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import {
  ArrowRight,
  UserCheck,
  MessageCircle,
  Smartphone,
  FileText,
  GitBranch,
  Eye,
  Rocket,
  BarChart3,
  Settings,
  Dumbbell,
  DollarSign,
  Briefcase,
  Plane,
  GraduationCap,
  Zap,
  Check,
  Headphones,
  Tag,
  Heart,
  CreditCard,
  ShoppingCart,
  Factory,
  Building2,
  Award,
  Shield,
  Star,
  Clock,
  Layers,
  Cpu,
} from "lucide-react";
import Link from "next/link";
import GradientFAQAccordion from "../Common/GradientFAQAccordion";

const SolutionContactForm = dynamic(
  () => import("../Solution/SolutionContactForm"),
);

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const trustItems = [
  { number: "30+", label: "AI Agents Built" },
  { number: "Trusted by", label: "Startups & Enterprises" },
  { number: "8+", label: "Years in Software Dev" },
  { number: "End-to-End", label: "Implementation & Support" },
];

const agentTypes = [
  {
    icon: MessageCircle,
    color: "text-green-500",
    bg: "rgba(34,197,94,0.10)",
    title: "WhatsApp AI Agents",
    desc: "Turn conversations into conversions. Instantly engage inbound messages, qualify leads, and book appointments — without your team touching it.",
    handles: [
      "Instant response to inbound messages",
      "Lead capture and qualification",
      "Appointment booking and follow-ups",
    ],
  },
  {
    icon: UserCheck,
    color: "text-blue-500",
    bg: "rgba(1,126,235,0.10)",
    title: "Lead Qualification Agents",
    desc: "Your sales team shouldn't filter leads. This agent captures, scores, and routes only high-intent prospects to the right people.",
    handles: [
      "Real-time lead qualification",
      "Lead scoring based on behavior",
      "CRM integration and auto-routing",
    ],
  },
  {
    icon: Headphones,
    color: "text-teal-500",
    bg: "rgba(0,180,216,0.10)",
    title: "Customer Support Agents",
    desc: "24/7 support without growing headcount. Handles common queries, resolves requests, and reduces response time across every channel.",
    handles: [
      "24/7 automated support",
      "Multi-channel (chat, email, WhatsApp)",
      "Ticket handling and resolution",
    ],
  },
  {
    icon: FileText,
    color: "text-orange-500",
    bg: "rgba(249,115,22,0.10)",
    title: "Document Processing Agents",
    desc: "Manual document handling slows everything. This agent extracts, processes, and structures data from invoices, forms, and PDFs automatically.",
    handles: [
      "Data extraction from PDFs and invoices",
      "Structured data output",
      "Faster internal processing",
    ],
  },
  {
    icon: GitBranch,
    color: "text-purple-500",
    bg: "rgba(168,85,247,0.10)",
    title: "Workflow Automation Agents",
    desc: "Connect your tools and automate multi-step workflows without manual intervention. Reduces operational overhead and improves consistency.",
    handles: [
      "Automating repetitive workflows",
      "Triggering actions across tools",
      "Managing multi-step processes",
    ],
  },
  {
    icon: Tag,
    color: "text-sky-500",
    bg: "rgba(14,165,233,0.10)",
    title: "White-Label Agents for Agencies",
    desc: "Offer AI agents to your clients under your brand. We handle the build, infrastructure, and maintenance while you keep the margin.",
    handles: [
      "Fully white-labeled delivery",
      "Scalable across multiple clients",
      "Ongoing technical support included",
    ],
  },
];

const steps = [
  {
    week: "Week 1",
    title: "Working Prototype",
    desc: "A functional AI agent built for your exact use case. Test it with real inputs before committing to anything.",
    icon: Cpu,
  },
  {
    week: "Week 2",
    title: "Core Logic Setup",
    desc: "We define how the agent thinks, responds, and handles your key business workflows.",
    icon: Settings,
  },
  {
    week: "Week 3",
    title: "Integrations",
    desc: "Connect the agent to your tools, CRM, communication channels, and internal systems.",
    icon: Layers,
  },
  {
    week: "Week 4",
    title: "Testing & Deployment",
    desc: "Test with real scenarios, optimize performance, and deploy into your live operations.",
    icon: Rocket,
  },
];

const showcaseAgents = [
  {
    icon: Dumbbell,
    color: "text-red-400",
    bg: "rgba(248,113,113,0.10)",
    name: "Bio-Coach",
    desc: "Personalized workout & fitness plans",
    path: "/ai-agents/fitness",
  },
  {
    icon: DollarSign,
    color: "text-emerald-400",
    bg: "rgba(52,211,153,0.10)",
    name: "Credits",
    desc: "Personal budgeting & financial planning",
    path: "/ai-agents/finance",
  },
  {
    icon: Briefcase,
    color: "text-slate-500",
    bg: "rgba(100,116,139,0.10)",
    name: "Guild",
    desc: "Career guidance & professional growth",
    path: "/ai-agents/career",
  },
  {
    icon: Plane,
    color: "text-sky-400",
    bg: "rgba(56,189,248,0.10)",
    name: "Teleport",
    desc: "Travel planning & itinerary builder",
    path: "/ai-agents/travel",
  },
  {
    icon: GraduationCap,
    color: "text-green-500",
    bg: "rgba(34,197,94,0.10)",
    name: "Cortex",
    desc: "Accelerated learning & knowledge tools",
    path: "/ai-agents/learning",
  },
  {
    icon: Rocket,
    color: "text-purple-500",
    bg: "rgba(168,85,247,0.10)",
    name: "Founder",
    desc: "Startup strategy & venture scaling",
    path: "/ai-agents/startup",
  },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "Starting at $2,000",
    maintenance: "$500/month maintenance",
    features: [
      "1 AI agent",
      "1 workflow",
      "Basic setup and deployment",
      "Week 1 prototype",
    ],
    highlight: false,
    cta: "Get Started",
  },
  {
    name: "Pro",
    price: "Starting at $5,000",
    maintenance: "$1,500/month maintenance",
    features: [
      "2–3 AI agents",
      "Multi-channel support",
      "CRM and API integrations",
      "Week 1 prototype",
    ],
    highlight: true,
    cta: "Most Popular",
  },
  {
    name: "Custom",
    price: "$10K–$25K",
    maintenance: "$3,000–$5,000/month",
    features: [
      "Multi-agent systems",
      "Complex workflows & integrations",
      "Enterprise-grade deployment",
      "Dedicated account manager",
    ],
    highlight: false,
    cta: "Talk to Us",
  },
];

const whyCards = [
  {
    icon: Settings,
    tint: "#e8f0fd",
    iconColor: "#017eeb",
    title: "Built Around Your Workflow",
    desc: "We don't give generic solutions. Every agent is tailored to your operations, your data, and the specific problems your team faces daily.",
  },
  {
    icon: Eye,
    tint: "#ede9fe",
    iconColor: "#7c3aed",
    title: "Prototype Before Commitment",
    desc: "You see a working version in Week 1 — tested against your real use cases — before making a full investment.",
  },
  {
    icon: Rocket,
    tint: "#d1fae5",
    iconColor: "#10b981",
    title: "End-to-End Execution",
    desc: "From idea to deployment to scaling — we handle design, development, integration, and ongoing maintenance.",
  },
  {
    icon: BarChart3,
    tint: "#cffafe",
    iconColor: "#0891b2",
    title: "Real Business Impact",
    desc: "Our agents don't just respond. They qualify leads, process data, trigger actions, and automate workflows that actually move metrics.",
  },
  {
    icon: Shield,
    tint: "#dbeafe",
    iconColor: "#1e40af",
    title: "Secure & Compliant",
    desc: "Every agent is built with data privacy and security in mind. We follow strict guidelines on data handling, access control, and compliance.",
  },
  {
    icon: Clock,
    tint: "#fef3c7",
    iconColor: "#d97706",
    title: "Fast Time to Value",
    desc: "Most AI projects take months. Ours take weeks. A working prototype in 7 days means your business benefits sooner.",
  },
];

const TESTIMONIALS = [
  {
    initials: "RM",
    name: "Ravi Mehta",
    role: "Founder, D2C eCommerce Brand",
    quote:
      "They delivered a working WhatsApp lead qualification agent in the first week. We didn't believe it until we tested it ourselves. Now it handles 80% of our inbound qualification automatically.",
  },
  {
    initials: "ST",
    name: "Sarah Thompson",
    role: "Operations Manager, Logistics SaaS",
    quote:
      "The document processing agent they built cut our invoice processing time by 70%. The 4-week timeline was accurate and the team communicated clearly throughout the entire build.",
  },
  {
    initials: "JL",
    name: "James Liu",
    role: "CTO, B2B Sales Platform",
    quote:
      "We needed a lead qualification agent that integrated with our CRM. Brilworks had it running in two weeks and it's now handling qualification for over 500 leads a day without any manual input.",
  },
];

const HONORS = [
  {
    label: "AWS Consulting Partner",
    icon: <Shield size={20} style={{ color: "#017eeb" }} />,
  },
  {
    label: "Clutch Global Award 2025",
    icon: <Award size={20} style={{ color: "#017eeb" }} />,
  },
  {
    label: "GoodFirms Top AI Developers",
    icon: <Star size={20} style={{ color: "#017eeb" }} />,
  },
  {
    label: "ISO 27001 Certified",
    icon: <Shield size={20} style={{ color: "#017eeb" }} />,
  },
  // {
  //   label: "Google Cloud AI Partner",
  //   icon: <Zap size={20} style={{ color: "#017eeb" }} />,
  // },
];

const industries = [
  {
    label: "Healthcare",
    icon: Heart,
    color: "text-red-500",
    bg: "rgba(239,68,68,0.10)",
  },
  {
    label: "Fintech",
    icon: CreditCard,
    color: "text-blue-500",
    bg: "rgba(1,126,235,0.10)",
  },
  {
    label: "eCommerce",
    icon: ShoppingCart,
    color: "text-green-500",
    bg: "rgba(34,197,94,0.10)",
  },
  {
    label: "EdTech",
    icon: GraduationCap,
    color: "text-teal-500",
    bg: "rgba(0,180,216,0.10)",
  },
  {
    label: "Manufacturing",
    icon: Factory,
    color: "text-orange-500",
    bg: "rgba(249,115,22,0.10)",
  },
  {
    label: "Agencies",
    icon: Building2,
    color: "text-purple-500",
    bg: "rgba(168,85,247,0.10)",
  },
];

const faqs = [
  {
    q: "How much does it cost to build a custom AI agent?",
    a: "Custom AI agents start at $2,000 setup with $500/month maintenance. More advanced multi-agent systems range from $10,000–$25,000 setup with $3,000–$5,000/month. We offer a working prototype in Week 1 so you can evaluate the agent before committing to the full build.",
  },
  {
    q: "How long does it take to build an AI agent?",
    a: "You get a working prototype in 7 days. Full production deployment takes 2–4 weeks depending on complexity. Simple agents can go live in Week 1. Multi-system integrations typically take 4–6 weeks.",
  },
  {
    q: "What's the difference between an AI agent and a chatbot?",
    a: "A chatbot follows scripted responses. An AI agent reasons, makes decisions, and takes actions across your business systems. Our agents qualify leads, process documents, generate reports, and automate multi-step workflows — not just answer FAQs.",
  },
  {
    q: "Can I test the agent before paying?",
    a: "Yes. We build a working prototype specifically for your business in Week 1 — free. You can test the AI agent with your real queries before committing. We also have 30+ live agents at brilworks.com/ai-agents you can try right now.",
  },
  {
    q: "Do you offer white-label AI agents for agencies?",
    a: "Yes. We build AI agents under your agency's brand. You sell to your clients, keep the margin, and we handle all technical work and maintenance. Minimum 3 clients to start the white-label program.",
  },
  {
    q: "Which tools and systems can AI agents integrate with?",
    a: "We integrate with most common business tools — HubSpot, Salesforce, WhatsApp Business API, Slack, Notion, Google Workspace, Zoho, and custom APIs. If you use a specific tool, mention it in the consultation and we'll confirm compatibility.",
  },
  {
    q: "What happens after deployment — do you offer support?",
    a: "All plans include monthly maintenance. This covers performance monitoring, bug fixes, model updates, and minor workflow adjustments. For major feature additions, we quote separately. You're never left managing infrastructure on your own.",
  },
];

const contactUrl = "/contact-us/";
const agentsUrl = "/ai-agents/";

const darkSectionBg = {
  background:
    "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(26,92,204,0.12) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 20% 80%, rgba(0,180,216,0.06) 0%, transparent 60%), #0d0f1a",
};

/* ─────────────────────────────────────────
   COMPONENT
───────────────────────────────────────── */
const AiAgentServicePage = () => {
  const [stickyVisible, setStickyVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setStickyVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* ==================== HERO ==================== */}
      <section
        className="relative overflow-hidden"
        style={{ background: "#000d1e" }}
      >
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(26,92,204,0.18) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 20% 80%, rgba(0,180,216,0.08) 0%, transparent 60%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="container max-w-[1280px] md:px-10 px-5 mx-auto relative z-[2]">
          <div
            className="grid items-center gap-10 lg:gap-[60px] pt-[100px] pb-20"
            style={{ gridTemplateColumns: "1fr" }}
          >
            <div
              className="grid items-center gap-10"
              style={{ gridTemplateColumns: "1.1fr 0.9fr" }}
            >
              <div>
                {/* Breadcrumb */}
                <nav className="mb-8" aria-label="Breadcrumb">
                  <ol className="flex items-center gap-2 text-xs">
                    <li>
                      <Link
                        href="/"
                        className="text-white/70 hover:text-white transition-colors"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="text-white/50">/</li>
                    <li className="text-white/70 font-semibold">
                      AI Agent Development
                    </li>
                  </ol>
                </nav>

                {/* Badge */}
                <div
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-7 border"
                  style={{
                    background: "rgba(26,92,204,0.15)",
                    borderColor: "rgba(26,92,204,0.3)",
                  }}
                >
                  <span className="relative flex h-2 w-2">
                    <span
                      className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                      style={{ background: "#00dbd3" }}
                    />
                    <span
                      className="relative inline-flex rounded-full h-2 w-2"
                      style={{ background: "#00dbd3" }}
                    />
                  </span>
                  <span
                    className="text-xs font-semibold tracking-widest"
                    style={{ color: "#00b4d8" }}
                  >
                    30+ AI AGENTS SHIPPED ACROSS 12 INDUSTRIES
                  </span>
                </div>

                {/* H1 */}
                <h1
                  className="font-extrabold text-white tracking-[-1.5px] leading-[1.1] mb-6"
                  style={{ fontSize: "clamp(28px, 3.4vw, 54px)" }}
                >
                  Custom AI Agent
                  <br />
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #017eeb, #00dbd3)",
                    }}
                  >
                    Development Services
                  </span>
                </h1>

                <p className="text-base md:text-lg text-white/60 !mb-10 max-w-xl leading-relaxed">
                  We build AI agents that take over specific business operations
                  — so your team can stop doing repetitive work and start doing
                  work that actually matters.
                </p>

                <div className="flex flex-wrap gap-4 mb-10">
                  <Link
                    href={contactUrl}
                    className="inline-flex items-center justify-center gap-2 rounded-md px-8 py-4 font-semibold text-white transition-all hover:opacity-90 hover:-translate-y-0.5"
                    style={{
                      background:
                        "linear-gradient(159.52deg, #007aeb -3.23%, #008ce7 33.69%, #00dbd3 85.35%)",
                    }}
                  >
                    Book Free AI Consultation <ArrowRight size={18} />
                  </Link>
                  <Link
                    href={agentsUrl}
                    className="inline-flex items-center justify-center rounded-md px-8 py-4 font-semibold text-white border border-white/25 hover:bg-white/5 hover:border-white/50 transition-all"
                  >
                    See 30+ Live Agents
                  </Link>
                </div>

                <div className="flex flex-wrap gap-5">
                  {[
                    "Working prototype in 7 days",
                    "Starting at $2,000",
                    "Full deployment in 2–4 weeks",
                  ].map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-2 text-sm text-white/60"
                    >
                      <Check size={14} style={{ color: "#00dbd3" }} />
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4 max-lg:hidden">
                {[
                  { value: "30+", label: "AI Agents Built & Deployed" },
                  { value: "7 Days", label: "Prototype Delivery" },
                  { value: "12+", label: "Industries Served" },
                  { value: "98%", label: "Client Satisfaction" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl transition-all"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      padding: "28px 24px",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <div
                      className="font-extrabold leading-none mb-2"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, #017eeb, #00dbd3)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        color: "transparent",
                        fontSize: "clamp(28px, 2.8vw, 40px)",
                        letterSpacing: "-1px",
                      }}
                    >
                      {s.value}
                    </div>
                    <div
                      style={{
                        color: "rgba(255,255,255,0.65)",
                        fontSize: 13,
                        fontWeight: 500,
                        lineHeight: 1.4,
                      }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TRUST BAR ==================== */}
      <section
        aria-label="Trust indicators"
        style={{
          background: "#fafafa",
          borderBottom: "1px solid #e5e7eb",
          padding: "24px 0",
        }}
      >
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div
            className="flex flex-wrap items-center justify-center"
            style={{ gap: "12px 40px" }}
          >
            {HONORS.map((h) => (
              <div
                key={h.label}
                className="inline-flex items-center gap-2 whitespace-nowrap"
                style={{ fontSize: 13, fontWeight: 600, color: "#212121" }}
              >
                {h.icon}
                {h.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHAT WE BUILD ==================== */}
      <section className="py-20" style={{ background: "#ffffff" }}>
        <div className="container max-w-[1280px] md:px-10 px-5 mx-auto">
          <div className="text-center mx-auto mb-12" style={{ maxWidth: 720 }}>
            <span
              className="block text-[11px] font-bold tracking-[0.12em] uppercase mb-3"
              style={{ color: "#017eeb" }}
            >
              What We Build
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-4">
              AI agents built for real business functions
            </h2>
            <p className="text-[#475569] text-base md:text-lg leading-relaxed">
              Most businesses don&apos;t need &quot;AI.&quot; They need specific
              parts of their operations handled automatically. Here&apos;s what
              we build.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {agentTypes.map((agent) => (
              <div
                key={agent.title}
                className="rounded-2xl p-7 bg-white border border-[#e5e7eb] hover:border-[#017eeb] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(1,126,235,0.08)] transition-all duration-200 flex flex-col"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: agent.bg }}
                >
                  <agent.icon size={20} className={agent.color} />
                </div>
                <h3 className="text-[17px] font-bold text-[#0f172a] mb-2 tracking-tight">
                  {agent.title}
                </h3>
                <p className="text-[14px] text-[#475569] leading-relaxed mb-4">
                  {agent.desc}
                </p>
                <ul className="flex flex-col gap-2 mt-auto">
                  {agent.handles.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-2 text-[12.5px] text-[#64748b]"
                    >
                      <span
                        className="w-1 h-1 rounded-full flex-shrink-0"
                        style={{ background: "#94a3b8" }}
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== HOW IT WORKS ==================== */}
      <section className="py-20" style={{ background: "#f8f9ff" }}>
        <div className="container max-w-[1280px] md:px-10 px-5 mx-auto">
          <div className="text-center mx-auto mb-12" style={{ maxWidth: 720 }}>
            <span
              className="block text-[11px] font-bold tracking-[0.12em] uppercase mb-3"
              style={{ color: "#017eeb" }}
            >
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-4">
              From kickoff to live in 4 weeks
            </h2>
            <p className="text-[#475569] text-base leading-relaxed">
              Most AI projects take too long to show results. We get something
              working in Week 1 and improve from there.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 mb-10">
            {steps.map((step, i) => (
              <div
                key={step.week}
                className="relative p-6 bg-white border border-[#e5e7eb] flex flex-col"
                style={{
                  borderRadius:
                    i === 0
                      ? "16px 0 0 16px"
                      : i === steps.length - 1
                        ? "0 16px 16px 0"
                        : "0",
                  borderLeft: i > 0 ? "none" : undefined,
                }}
              >
                <span
                  className="text-[11px] font-bold tracking-[0.08em] uppercase mb-3"
                  style={{ color: "#017eeb" }}
                >
                  {step.week}
                </span>
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center mb-3"
                  style={{
                    background: "linear-gradient(135deg, #017eeb, #00dbd3)",
                  }}
                >
                  <step.icon size={16} className="text-white" />
                </div>
                <h3 className="text-[15px] font-bold text-[#0f172a] mb-2 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-[13px] text-[#475569] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div
            className="rounded-2xl px-7 py-5 border flex items-center justify-between gap-6 flex-wrap"
            style={{
              background: "rgba(1,126,235,0.05)",
              borderColor: "rgba(1,126,235,0.2)",
            }}
          >
            <p className="text-[15px] font-semibold text-[#0f172a] leading-relaxed">
              You don&apos;t wait months to see results.{" "}
              <span style={{ color: "#017eeb" }}>
                You see it working in the first week.
              </span>
            </p>
            <Link
              href={contactUrl}
              className="inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold text-white transition-all hover:opacity-90 flex-shrink-0"
              style={{
                background:
                  "linear-gradient(159.52deg, #007aeb -3.23%, #008ce7 33.69%, #00dbd3 85.35%)",
              }}
            >
              Get Your Prototype in Week 1 <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== TRY REAL AI AGENTS ==================== */}
      <section className="py-20" style={{ background: "#ffffff" }}>
        <div className="container max-w-[1280px] md:px-10 px-5 mx-auto">
          <div className="text-center mx-auto mb-10" style={{ maxWidth: 720 }}>
            <span
              className="block text-[11px] font-bold tracking-[0.12em] uppercase mb-3"
              style={{ color: "#017eeb" }}
            >
              Live Demos
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight leading-tight mb-4">
              Don&apos;t just read about it.{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #017eeb, #00dbd3)",
                }}
              >
                See it in action.
              </span>
            </h2>
            <p className="text-white/55 text-base md:text-lg leading-relaxed">
              We&apos;ve already built 30+ AI agents across industries and use
              cases. Instead of guessing how it works, test real implementations
              right now.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {showcaseAgents.map((agent) => (
              <Link
                key={agent.name}
                href={agent.path}
                className="group flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-white border border-[#e5e7eb] hover:border-[#017eeb] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(1,126,235,0.08)] transition-all duration-200"
                style={{ minHeight: 160, borderColor: "#e5e7eb" }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: agent.bg }}
                >
                  <agent.icon size={20} className={agent.color} />
                </div>
                <span className="text-[15px] font-bold text-[#0f172a] mb-1 tracking-tight">
                  {agent.name}
                </span>
                <span className="text-xs text-[#475569] leading-snug group-hover:text-[#0f172a] transition-colors">
                  {agent.desc}
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href={agentsUrl}
              className="inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 font-semibold text-[#017eeb] transition-all hover:opacity-90 hover:-translate-y-0.5 bg-[rgba(1,126,235,0.05)] border border-[#017eeb90]"
            >
              Explore All 30+ AI Agents <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== MID CTA BANNER ==================== */}
      <section
        className="relative overflow-hidden text-center"
        style={{
          padding: "56px 0",
          background: "linear-gradient(135deg, #017eeb 0%, #0061c4 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0,219,211,0.2) 0%, transparent 60%)",
          }}
        />
        <div
          className="relative mx-auto px-5 md:px-10"
          style={{ maxWidth: 700, zIndex: 1 }}
        >
          <h3
            className="font-extrabold mb-3.5"
            style={{
              fontSize: "clamp(24px, 3vw, 36px)",
              color: "#fff",
              lineHeight: 1.2,
              letterSpacing: "-0.5px",
            }}
          >
            Ready to Automate Your Business?
          </h3>
          <p
            className="mb-7"
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: 16,
              lineHeight: 1.7,
            }}
          >
            Get a working AI agent prototype tailored to your operations in 7
            days. No commitment until you&apos;ve tested it with your real use
            cases.
          </p>
          <Link
            href={contactUrl}
            className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:!bg-[#0d0f1a] hover:!text-white hover:!border-[#0d0f1a] mt-5"
            style={{
              background: "#fff",
              color: "#017eeb",
              border: "1px solid #fff",
              padding: "16px 32px",
              fontSize: 16,
            }}
          >
            Book Free AI Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* ==================== WHY BRILWORKS ==================== */}
      <section className="py-20 bg-white">
        <div className="container max-w-[1280px] md:px-10 px-5 mx-auto">
          <div className="text-center mx-auto mb-14" style={{ maxWidth: 720 }}>
            <span
              className="block text-[11px] font-bold tracking-[0.12em] uppercase mb-3"
              style={{ color: "#017eeb" }}
            >
              Why Brilworks
            </span>
            <h2
              className="font-extrabold"
              style={{
                fontSize: "clamp(28px, 3.2vw, 42px)",
                letterSpacing: "-1px",
                lineHeight: 1.15,
                color: "#0d0f1a",
              }}
            >
              Most agencies stop at &quot;building.&quot; We focus on making it
              work inside your business.
            </h2>
            <p
              className="mt-4"
              style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}
            >
              We don&apos;t chase demos. We partner with you to pick the right
              use case, build the right agent, and ship AI that actually moves
              your metrics.
            </p>
          </div>
          <div
            className="grid gap-6"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            }}
          >
            {whyCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl transition-all hover:-translate-y-0.5"
                style={{
                  background: "#fff",
                  border: "1px solid #e5e7eb",
                  padding: "32px 28px",
                }}
              >
                <div
                  className="rounded-[14px] flex items-center justify-center mb-5"
                  style={{ width: 56, height: 56, background: card.tint }}
                >
                  <card.icon size={24} style={{ color: card.iconColor }} />
                </div>
                <h3
                  className="font-bold mb-3"
                  style={{ fontSize: 18, color: "#0d0f1a" }}
                >
                  {card.title}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "#6b7280" }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PRICING ==================== */}
      <section className="py-20" style={{ background: "#f8f9ff" }}>
        <div className="container max-w-[1280px] md:px-10 px-5 mx-auto">
          <div className="text-center mx-auto mb-14" style={{ maxWidth: 720 }}>
            <span
              className="block text-[11px] font-bold tracking-[0.12em] uppercase mb-3"
              style={{ color: "#017eeb" }}
            >
              Pricing
            </span>
            <h2
              className="font-extrabold"
              style={{
                fontSize: "clamp(28px, 3.2vw, 42px)",
                letterSpacing: "-1px",
                lineHeight: 1.15,
                color: "#0d0f1a",
              }}
            >
              Transparent pricing — no surprises
            </h2>
            <p
              className="mt-4"
              style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}
            >
              We keep pricing clear upfront so you know what to expect. All
              plans include a working prototype in Week 1.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className="rounded-2xl p-7 flex flex-col"
                style={{
                  background: tier.highlight ? "#000d1e" : "#ffffff",
                  border: tier.highlight
                    ? "1.5px solid #017eeb"
                    : "1px solid #e5e7eb",
                  boxShadow: tier.highlight
                    ? "0 0 0 4px rgba(1,126,235,0.08)"
                    : "none",
                }}
              >
                {tier.highlight && (
                  <span
                    className="inline-block text-[11px] font-bold tracking-widest uppercase rounded-full px-3 py-1 mb-4 self-start"
                    style={{
                      background: "rgba(1,126,235,0.15)",
                      color: "#00b4d8",
                    }}
                  >
                    Most Popular
                  </span>
                )}
                <h3
                  className="text-xl font-extrabold mb-1 tracking-tight"
                  style={{ color: tier.highlight ? "#ffffff" : "#0f172a" }}
                >
                  {tier.name}
                </h3>
                <p
                  className="text-2xl font-extrabold mb-1"
                  style={{ color: tier.highlight ? "#00dbd3" : "#017eeb" }}
                >
                  {tier.price}
                </p>
                <p
                  className="text-[13px] mb-6"
                  style={{
                    color: tier.highlight
                      ? "rgba(255,255,255,0.45)"
                      : "#94a3b8",
                  }}
                >
                  {tier.maintenance}
                </p>
                <ul className="space-y-2.5 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check
                        size={15}
                        className="mt-0.5 shrink-0"
                        style={{
                          color: tier.highlight ? "#00dbd3" : "#017eeb",
                        }}
                      />
                      <span
                        className="text-[14px] leading-snug"
                        style={{
                          color: tier.highlight
                            ? "rgba(255,255,255,0.7)"
                            : "#475569",
                        }}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={contactUrl}
                  className="mt-7 inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-all hover:opacity-90"
                  style={
                    tier.highlight
                      ? {
                          background:
                            "linear-gradient(159.52deg, #007aeb -3.23%, #008ce7 33.69%, #00dbd3 85.35%)",
                          color: "#ffffff",
                        }
                      : { background: "rgba(1,126,235,0.08)", color: "#017eeb" }
                  }
                >
                  Get Started <ArrowRight size={15} />
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-[13px] text-[#94a3b8]">
            Final pricing depends on your use case, integrations, and scale.
          </p>
        </div>
      </section>

      {/* ==================== CLIENT STORIES ==================== */}
      <section className="relative overflow-hidden py-20" style={darkSectionBg}>
        <div
          className="relative container max-w-[1280px] md:px-10 px-5 mx-auto"
          style={{ zIndex: 1 }}
        >
          <div className="text-center mx-auto mb-14" style={{ maxWidth: 720 }}>
            <span
              className="block text-[11px] font-bold tracking-[0.12em] uppercase mb-3"
              style={{ color: "#00b4d8" }}
            >
              Client Stories
            </span>
            <h2
              className="font-extrabold text-white"
              style={{
                fontSize: "clamp(28px, 3.2vw, 42px)",
                letterSpacing: "-1px",
                lineHeight: 1.15,
              }}
            >
              What Our Clients Say
            </h2>
            <p
              className="mt-4"
              style={{
                fontSize: 17,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.62)",
              }}
            >
              Rated 4.8★ on Clutch across 40+ verified reviews. Real outcomes
              from real businesses.
            </p>
          </div>
          <div
            className="grid gap-6"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            }}
          >
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  padding: "32px 28px",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div className="flex gap-0.5 mb-4" style={{ color: "#facc15" }}>
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <p
                  className="mb-6"
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    fontSize: 15,
                    lineHeight: 1.7,
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="rounded-full flex items-center justify-center font-bold text-white"
                    style={{
                      width: 44,
                      height: 44,
                      background: "linear-gradient(135deg, #017eeb, #00dbd3)",
                      fontSize: 15,
                    }}
                  >
                    {t.initials}
                  </div>
                  <div className="flex flex-col">
                    <span
                      className="text-white font-semibold"
                      style={{ fontSize: 14 }}
                    >
                      {t.name}
                    </span>
                    <span
                      style={{ color: "rgba(255,255,255,0.55)", fontSize: 12 }}
                    >
                      {t.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Proof stats */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            {[
              { num: "4.8★", lbl: "Clutch Rating" },
              { num: "40+", lbl: "Verified Reviews" },
              { num: "4.9", lbl: "Upwork Score" },
            ].map((s) => (
              <div
                key={s.lbl}
                className="text-center rounded-xl py-5"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="text-2xl font-extrabold mb-1"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #017eeb, #00dbd3)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                  }}
                >
                  {s.num}
                </div>
                <div className="text-xs text-white/50">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== RECOGNIZED BY ==================== */}
      <section className="py-16" style={{ background: "#f8f9ff" }}>
        <div className="container max-w-[1280px] md:px-10 px-5 mx-auto">
          <div
            className="text-center mx-auto"
            style={{ maxWidth: 720, marginBottom: 32 }}
          >
            <span
              className="block text-[11px] font-bold tracking-[0.12em] uppercase mb-3"
              style={{ color: "#017eeb" }}
            >
              Recognized By
            </span>
            <h2
              className="font-extrabold"
              style={{
                fontSize: "clamp(22px, 2.4vw, 30px)",
                letterSpacing: "-1px",
                lineHeight: 1.15,
                color: "#0d0f1a",
              }}
            >
              Trusted &amp; Awarded by Industry Leaders
            </h2>
          </div>
          <div
            className="flex flex-wrap items-center justify-center"
            style={{ gap: "32px 56px", opacity: 0.85 }}
          >
            {HONORS.map((h) => (
              <div
                key={h.label}
                className="flex items-center gap-2.5"
                style={{ color: "#6b7280", fontWeight: 600, fontSize: 14 }}
              >
                {h.icon}
                {h.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== INDUSTRIES ==================== */}
      <section className="py-20 bg-white">
        <div className="container max-w-[1280px] md:px-10 px-5 mx-auto">
          <div className="text-center mx-auto mb-10" style={{ maxWidth: 720 }}>
            <span
              className="block text-[11px] font-bold tracking-[0.12em] uppercase mb-3"
              style={{ color: "#017eeb" }}
            >
              Industries
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-4">
              Industries we&apos;ve worked in
            </h2>
            <p className="text-[#475569] text-base leading-relaxed">
              We&apos;ve shipped AI agents across a range of verticals. If your
              industry isn&apos;t here, chances are we&apos;ve solved an
              adjacent problem.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry) => (
              <div
                key={industry.label}
                className="flex flex-col items-center justify-center text-center rounded-2xl p-5 border border-[#e5e7eb] hover:border-[#017eeb] hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200 cursor-default"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: industry.bg }}
                >
                  <industry.icon size={22} className={industry.color} />
                </div>
                <span className="text-[13px] font-semibold text-[#0f172a]">
                  {industry.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section className="py-20" style={{ background: "#f8f9ff" }}>
        <div className="container max-w-[1280px] md:px-10 px-5 mx-auto">
          <div
            className="max-w-3xl mx-auto"
            itemScope
            itemType="https://schema.org/FAQPage"
          >
            <span
              className="text-center block text-[11px] font-bold tracking-[0.12em] uppercase mb-3"
              style={{ color: "#017eeb" }}
            >
              Frequently Asked Questions
            </span>
            <h2 className="text-center text-3xl md:text-4xl font-extrabold text-[#0f172a] mb-10 tracking-tight leading-tight">
              Common Questions About AI Agents
            </h2>
            <div>
              {faqs.map((f, i) => (
                <GradientFAQAccordion
                  key={i + 1}
                  id={i + 1}
                  question={f.q}
                  answer={f.a}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CONTACT FORM ==================== */}
      <div id="contact">
        <SolutionContactForm
          title="Ready to Build Your AI Agent?"
          description="You're one conversation away from automating a key part of your business. Tell us what you need — we'll show you how we'd build it and have a working prototype ready in Week 1."
          messageRequired={false}
          submitLabel="Book My Free AI Agent Consultation"
          benefits={[
            "Working prototype in 7 days — test before you commit",
            "Starting at $2,000 setup, transparent pricing",
            "30+ AI agents already built across 12 industries",
            "Full deployment in 2–4 weeks, not months",
            "Ongoing maintenance and support included",
          ]}
        />
      </div>

      {/* ==================== STICKY BAR ==================== */}
      <div
        className={`fixed bottom-0 inset-x-0 z-40 backdrop-blur-md border-t border-white/10 flex items-center justify-center gap-4 flex-wrap md:flex-nowrap transition-transform duration-500 ${
          stickyVisible ? "translate-y-0" : "translate-y-full"
        }`}
        style={{
          background: "rgba(13, 15, 26, 0.92)",
          padding: "12px 20px",
        }}
      >
        <span className="text-sm text-white/70 text-center md:text-left">
          <strong className="text-white">Impressed?</strong> Let&apos;s build AI
          agents for your business.
        </span>
        <Link
          href={contactUrl}
          className="inline-flex items-center gap-2 rounded-md px-6 py-2 text-sm font-semibold text-white transition-all hover:opacity-90"
          style={{
            background:
              "linear-gradient(159.52deg, #007aeb -3.23%, #008ce7 33.69%, #00dbd3 85.35%)",
          }}
        >
          Talk to Us <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default AiAgentServicePage;
