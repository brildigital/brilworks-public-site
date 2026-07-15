"use client";
import React, { useEffect, useState } from "react";
import {
  Sparkles,
  Hammer,
  Dumbbell,
  Heart,
  Calendar,
  Utensils,
  Plane,
  GraduationCap,
  PenTool,
  DollarSign,
  Shirt,
  Sprout,
  PawPrint,
  Clapperboard,
  Briefcase,
  Cpu,
  Users,
  Search,
  Baby,
  Moon,
  Languages,
  Sofa,
  Apple,
  Rocket,
  CheckCircle,
  Music,
  Laugh,
  TrendingUp,
  BarChart3,
  Brain,
  Activity,
  Eye,
  Star,
  Zap,
  Cloud,
  ArrowRight,
} from "lucide-react";

import Link from "next/link";
import GradientFAQAccordion from "../Common/GradientFAQAccordion";
import AIAgentLayout from "./AIAgentLayout";
import { ModuleType } from "../../lib/enums";
import "../../styles/ServiceLightTheme.css";

const categories = {
  "Core Systems": [
    ModuleType.ASTROLOGY,
    ModuleType.MATCHMAKING,
    ModuleType.FITNESS,
    ModuleType.NUTRITION,
    ModuleType.HABIT,
    ModuleType.WELLNESS,
    ModuleType.DREAMS,
    ModuleType.SCHEDULING,
  ],
  "Lifestyle Modules": [
    ModuleType.MEME,
    ModuleType.MUSIC,
    ModuleType.COOKING,
    ModuleType.TRAVEL,
    ModuleType.FASHION,
    ModuleType.MOVIES,
    ModuleType.PARENTING,
    ModuleType.LANGUAGE,
  ],
  "Habitat & Bio": [
    ModuleType.DIY,
    ModuleType.GARDENING,
    ModuleType.INTERIOR,
    ModuleType.PETS,
    ModuleType.FINANCE,
    ModuleType.WEALTH,
  ],
  "Mind & Science": [
    ModuleType.VISION,
    ModuleType.NEURO,
    ModuleType.PSYCH,
    ModuleType.LEARNING,
    ModuleType.WRITING,
    ModuleType.CAREER,
    ModuleType.STARTUP,
    ModuleType.TECH,
    ModuleType.TRENDS,
  ],
};

const featuredIds = [ModuleType.FITNESS, ModuleType.FINANCE, ModuleType.CAREER];

const allModules = [
  {
    id: ModuleType.ASTROLOGY,
    name: "Astro Core",
    icon: Sparkles,
    color: "text-purple-400",
    desc: "Cosmic analysis & Kundli charts",
    path: "/astrology",
  },
  {
    id: ModuleType.MATCHMAKING,
    name: "Union Sync",
    icon: Users,
    color: "text-rose-400",
    desc: "AI-powered compatibility matching",
    path: "/matchmaking",
  },
  {
    id: ModuleType.DIY,
    name: "Repair Bot",
    icon: Hammer,
    color: "text-orange-400",
    desc: "DIY home repairs & fix guidance",
    path: "/diy",
  },
  {
    id: ModuleType.FITNESS,
    name: "Bio-Coach",
    icon: Dumbbell,
    color: "text-red-400",
    desc: "Personalized workout & fitness plans",
    path: "/fitness",
  },
  {
    id: ModuleType.NUTRITION,
    name: "Nutri-Sci",
    icon: Apple,
    color: "text-green-500",
    desc: "Smart dietary plans & meal recommendations",
    path: "/nutrition",
  },
  {
    id: ModuleType.HABIT,
    name: "Habit Loop",
    icon: CheckCircle,
    color: "text-cyan-400",
    desc: "Goal tracking & habit building",
    path: "/habit",
  },
  {
    id: ModuleType.WELLNESS,
    name: "Mind Link",
    icon: Heart,
    color: "text-teal-400",
    desc: "Mental wellness & mindfulness guidance",
    path: "/wellness",
  },
  {
    id: ModuleType.DREAMS,
    name: "Dream State",
    icon: Moon,
    color: "text-indigo-300",
    desc: "Dream interpretation & analysis",
    path: "/dreams",
  },
  {
    id: ModuleType.SCHEDULING,
    name: "Chronos",
    icon: Calendar,
    color: "text-blue-400",
    desc: "AI-powered scheduling & time management",
    path: "/scheduling",
  },
  {
    id: ModuleType.MUSIC,
    name: "Sonic",
    icon: Music,
    color: "text-fuchsia-400",
    desc: "Music discovery & playlist creation",
    path: "/music",
  },
  {
    id: ModuleType.MEME,
    name: "Meme Gen",
    icon: Laugh,
    color: "text-pink-500",
    desc: "Viral meme & humor generation",
    path: "/meme",
  },
  {
    id: ModuleType.COOKING,
    name: "Synthesis",
    icon: Utensils,
    color: "text-yellow-400",
    desc: "Recipe creation & culinary guidance",
    path: "/cooking",
  },
  {
    id: ModuleType.TRAVEL,
    name: "Teleport",
    icon: Plane,
    color: "text-sky-400",
    desc: "Travel planning & itinerary builder",
    path: "/travel",
  },
  {
    id: ModuleType.LEARNING,
    name: "Cortex",
    icon: GraduationCap,
    color: "text-green-400",
    desc: "Accelerated learning & knowledge tools",
    path: "/learning",
  },
  {
    id: ModuleType.WRITING,
    name: "Scribe",
    icon: PenTool,
    color: "text-indigo-400",
    desc: "Writing assistance & content generation",
    path: "/writing",
  },
  {
    id: ModuleType.LANGUAGE,
    name: "Babel",
    icon: Languages,
    color: "text-blue-500",
    desc: "Multilingual learning & translation",
    path: "/language",
  },
  {
    id: ModuleType.FINANCE,
    name: "Credits",
    icon: DollarSign,
    color: "text-emerald-400",
    desc: "Personal budgeting & financial planning",
    path: "/finance",
  },
  {
    id: ModuleType.WEALTH,
    name: "Wealth",
    icon: BarChart3,
    color: "text-amber-500",
    desc: "Investment strategy & portfolio analysis",
    path: "/wealth",
  },
  {
    id: ModuleType.FASHION,
    name: "Aesthetics",
    icon: Shirt,
    color: "text-pink-400",
    desc: "Personal style & fashion recommendations",
    path: "/fashion",
  },
  {
    id: ModuleType.INTERIOR,
    name: "Habitat",
    icon: Sofa,
    color: "text-orange-300",
    desc: "Interior design & space planning",
    path: "/interior",
  },
  {
    id: ModuleType.GARDENING,
    name: "Flora",
    icon: Sprout,
    color: "text-lime-400",
    desc: "Plant care & gardening advice",
    path: "/gardening",
  },
  {
    id: ModuleType.PETS,
    name: "Fauna",
    icon: PawPrint,
    color: "text-amber-400",
    desc: "Pet care & veterinary guidance",
    path: "/pets",
  },
  {
    id: ModuleType.PARENTING,
    name: "Guardian",
    icon: Baby,
    color: "text-teal-300",
    desc: "Child guidance & parenting support",
    path: "/parenting",
  },
  {
    id: ModuleType.MOVIES,
    name: "Media",
    icon: Clapperboard,
    color: "text-rose-400",
    desc: "Movie & entertainment recommendations",
    path: "/movies",
  },
  {
    id: ModuleType.CAREER,
    name: "Guild",
    icon: Briefcase,
    color: "text-slate-300",
    desc: "Career guidance & professional growth",
    path: "/career",
  },
  {
    id: ModuleType.STARTUP,
    name: "Founder",
    icon: Rocket,
    color: "text-purple-400",
    desc: "Startup strategy & venture scaling",
    path: "/startup",
  },
  {
    id: ModuleType.TECH,
    name: "Sys-Admin",
    icon: Cpu,
    color: "text-cyan-400",
    desc: "Technical support & troubleshooting",
    path: "/tech",
  },
  {
    id: ModuleType.TRENDS,
    name: "Trends",
    icon: TrendingUp,
    color: "text-orange-400",
    desc: "Viral trend analysis & market insights",
    path: "/trends",
  },
  {
    id: ModuleType.NEURO,
    name: "Neuro",
    icon: Brain,
    color: "text-indigo-400",
    desc: "Brain science & cognitive training",
    path: "/neuro",
  },
  {
    id: ModuleType.PSYCH,
    name: "Psyche",
    icon: Activity,
    color: "text-teal-400",
    desc: "Behavioral science & psychology insights",
    path: "/psych",
  },
  {
    id: ModuleType.VISION,
    name: "Vision",
    icon: Eye,
    color: "text-cyan-300",
    desc: "Image analysis & visual recognition",
    path: "/vision",
  },
];

const trustStats = [
  { number: "30+", label: "AI Agents Live" },
  { number: "120+", label: "Projects Delivered" },
  { number: "50+", label: "Happy Clients" },
  { number: "12+", label: "Countries Served" },
];

const whyCards = [
  {
    icon: Zap,
    title: "Custom AI Agents",
    desc: "We build domain-specific AI agents tailored to your industry, workflow, and data — not generic chatbots.",
  },
  {
    icon: Cloud,
    title: "AWS Consulting Partner",
    desc: "Production-grade infrastructure on AWS. Scalable, secure, and built to handle enterprise workloads from day one.",
  },
  {
    icon: Rocket,
    title: "Ship in Weeks, Not Months",
    desc: "Our team has shipped 120+ projects. We move fast — from concept to deployed AI agents in as few as 4 weeks.",
  },
];

const faqs = [
  {
    q: "What are AI agents and how are they different from chatbots?",
    a: "AI agents are intelligent systems that can reason, plan, and take actions autonomously. Unlike simple chatbots that follow scripts, AI agents understand context, make decisions, and execute multi-step tasks — like creating a personalized fitness plan or analyzing your investment portfolio.",
  },
  {
    q: "Can Brilworks build custom AI agents for my product?",
    a: "Yes. These 30+ agents are live demos of what we build. We design and deploy custom AI agents tailored to your industry, data, and user workflows. Our team handles everything from architecture to deployment on AWS infrastructure.",
  },
  {
    q: "How long does it take to build a custom AI agent?",
    a: "Typically 4-8 weeks from kickoff to production deployment, depending on complexity. We've delivered 120+ projects and our process is built for speed without sacrificing quality.",
  },
  {
    q: "What technologies power these AI agents?",
    a: "Our agents are powered by Neural Gemini AI with production-grade infrastructure on AWS. We use a modern stack including Next.js, React, and serverless architecture — built for scale and reliability.",
  },
  {
    q: "Are the demo agents free to use?",
    a: "Yes, all 30+ agents on this page are free to explore. They're a showcase of what's possible. When you're ready to build custom agents for your product, book a free consultation to discuss your project.",
  },
];

const contactUrl = "/contact-us/";
const portfolioUrl = "/portfolio/";

const AiAgentHome = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [stickyVisible, setStickyVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setStickyVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const term = searchTerm.trim().toLowerCase();
  const matches = (mod) =>
    mod.name.toLowerCase().includes(term) ||
    mod.desc.toLowerCase().includes(term);
  const filteredModules = allModules.filter(matches);
  const featuredModules = featuredIds
    .map((id) => allModules.find((m) => m.id === id))
    .filter(Boolean);

  return (
    <AIAgentLayout>
      <div className="flex flex-col min-h-screen">
        {/* ==================== HERO ==================== */}
        <section className="relative overflow-hidden svc-hero-bg">
          <div className="container max-w-[1280px] md:px-10 px-5 mx-auto relative z-[2]">
            <div
              className="grid items-center gap-10 lg:gap-[60px] pt-[100px] pb-20"
              style={{ gridTemplateColumns: "1fr" }}
            >
              <div className="grid items-center gap-10 grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  {/* Breadcrumb */}
                  <nav className="mb-8" aria-label="Breadcrumb">
                    <ol className="flex items-center gap-2 text-xs">
                      <li>
                        <Link
                          href="/"
                          className="transition-colors"
                          style={{ color: "#6b7a8a" }}
                        >
                          Home
                        </Link>
                      </li>
                      <li style={{ color: "#6b7a8a" }}>/</li>
                      <li
                        className="font-semibold"
                        style={{ color: "#566678" }}
                      >
                        AI Agents
                      </li>
                    </ol>
                  </nav>

                  {/* Badge */}
                  <div
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-7 border"
                    style={{
                      background: "#ffffff",
                      borderColor: "#e4eaf1",
                      boxShadow: "0 1px 2px rgba(11, 30, 51, 0.05)",
                    }}
                  >
                    <span className="relative flex h-2 w-2">
                      <span
                        className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                        style={{ background: "#2f6bff" }}
                      ></span>
                      <span
                        className="relative inline-flex rounded-full h-2 w-2"
                        style={{ background: "#2f6bff" }}
                      ></span>
                    </span>
                    <span
                      className="text-xs font-semibold tracking-widest"
                      style={{ color: "#566678" }}
                    >
                      30+ AGENTS LIVE
                    </span>
                  </div>

                  {/* Headline */}
                  <h1
                    className="font-extrabold tracking-[-1.5px] leading-[1.1] mb-6"
                    style={{
                      fontSize: "clamp(28px, 3.4vw, 54px)",
                      color: "#0b1e33",
                    }}
                  >
                    AI Agents That Actually <br />
                    <span style={{ color: "#2f6bff" }}>
                      Work for Your Business
                    </span>
                  </h1>

                  <p
                    className="text-base md:text-lg !mb-6 max-w-xl leading-relaxed"
                    style={{ color: "#566678" }}
                  >
                    Brilworks builds and deploys custom AI agents for startups
                    and enterprise teams. Explore our live demos — then let's
                    build yours.
                  </p>
                  <p
                    className="text-sm md:text-base !mb-10 max-w-xl leading-relaxed"
                    style={{ color: "#6b7a8a" }}
                  >
                    Want a no-signup taste? Try our viral{" "}
                    <Link
                      href="/ai-agents/meme/"
                      className="underline underline-offset-4"
                      style={{ color: "#2f6bff" }}
                    >
                      AI Meme Generator
                    </Link>{" "}
                    — same Gemini image stack, zero forms. Curious what models
                    power agents like these? See{" "}
                    <Link
                      href="/blog/best-artificial-intelligence-platforms/"
                      className="underline underline-offset-4"
                      style={{ color: "#2f6bff" }}
                    >
                      our shortlist of the best AI platforms for 2026
                    </Link>
                    .
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <Link
                      href={contactUrl}
                      className="inline-flex items-center justify-center gap-2 rounded-md px-8 py-4 font-semibold text-white transition-all hover:opacity-90 hover:-translate-y-0.5"
                      style={{
                        background: "#2f6bff",
                      }}
                    >
                      Build AI Agents for My Product <ArrowRight size={18} />
                    </Link>
                    <a
                      href="#explore"
                      className="inline-flex items-center justify-center rounded-md px-8 py-4 font-semibold transition-all hover:bg-black/5"
                      style={{ color: "#0b1e33", border: "1px solid #e4eaf1" }}
                    >
                      Explore the Demos
                    </a>
                  </div>
                </div>

                {/* Trust stats grid */}
                <div className="grid grid-cols-2 gap-4 max-lg:hidden">
                  {trustStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl transition-all svc-stat-card"
                      style={{ padding: "28px 24px" }}
                    >
                      <div
                        className="font-extrabold leading-none mb-2"
                        style={{
                          color: "#2f6bff",
                          fontSize: "clamp(28px, 2.8vw, 40px)",
                          letterSpacing: "-1px",
                        }}
                      >
                        {stat.number}
                      </div>
                      <div
                        style={{
                          color: "#6b7a8a",
                          fontSize: 13,
                          fontWeight: 500,
                          lineHeight: 1.4,
                        }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== AGENT GRID (Light) ==================== */}
        <section
          id="explore"
          className="pt-16 pb-20"
          style={{ background: "#ffffff" }}
        >
          <div className="container max-w-[1280px] md:px-10 px-5 mx-auto w-full">
            {/* Search */}
            <div className="relative mb-12 group">
              <div className="relative bg-white border border-[#e5e7eb] focus-within:border-[#2f6bff] rounded-full flex items-center overflow-hidden transition-colors shadow-sm">
                <div className="pl-5 text-[#94a3b8]">
                  <Search size={18} />
                </div>
                <input
                  type="text"
                  placeholder="Search agents — try 'fitness', 'finance', 'travel'..."
                  className="w-full pl-3 pr-5 py-3.5 bg-transparent text-[#0f172a] placeholder-[#94a3b8] outline-none text-[14px]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  aria-label="Search AI agents"
                />
              </div>
            </div>

            {term ? (
              filteredModules.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filteredModules.map((mod) => (
                    <ModuleCard key={mod.id} mod={mod} />
                  ))}
                </div>
              ) : (
                <p className="text-center text-[#475569] py-12">
                  No agents match "{searchTerm}". Try a different search.
                </p>
              )
            ) : (
              <div className="space-y-14">
                {/* Featured */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <span
                      className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.12em] whitespace-nowrap"
                      style={{ color: "#2f6bff" }}
                    >
                      <Star size={14} fill="currentColor" /> Start Here
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-r from-[#e5e7eb] to-transparent"></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {featuredModules.map((mod) => (
                      <ModuleCard key={`featured-${mod.id}`} mod={mod} />
                    ))}
                  </div>
                </div>

                {Object.entries(categories).map(([catName, modIds]) => (
                  <div key={catName}>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#475569] whitespace-nowrap">
                        {catName}
                      </span>
                      <div className="h-px flex-1 bg-gradient-to-r from-[#e5e7eb] to-transparent"></div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {modIds.map((id) => {
                        const mod = allModules.find((m) => m.id === id);
                        return mod ? <ModuleCard key={id} mod={mod} /> : null;
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ==================== WHY BRILWORKS (Light) ==================== */}
        <section className="py-20 px-6" style={{ background: "#f1f5fb" }}>
          <div className="container max-w-[1280px] md:px-10 px-5 mx-auto">
            <span
              className="block text-[11px] font-bold tracking-[0.12em] uppercase mb-3"
              style={{ color: "#2f6bff" }}
            >
              Why Brilworks
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f172a] mb-12 tracking-tight leading-tight max-w-2xl">
              We Don't Just Demo AI Agents.
              <br />
              We Build Them for You.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {whyCards.map((c) => (
                <div
                  key={c.title}
                  className="rounded-2xl p-7 bg-white border border-[#e5e7eb] hover:border-[#2f6bff] hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                    style={{ background: "rgba(47,107,255,0.12)" }}
                  >
                    <c.icon size={18} style={{ color: "#2f6bff" }} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0f172a] mb-2 tracking-tight">
                    {c.title}
                  </h3>
                  <p className="text-[15px] text-[#475569] leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== CTA ==================== */}
        <section className="relative overflow-hidden py-20 px-6 text-center svc-mid-cta-bg">
          <div className="absolute inset-0 pointer-events-none svc-mid-cta-glow" />
          <div className="relative max-w-3xl mx-auto" style={{ zIndex: 1 }}>
            <span
              className="block text-[11px] font-bold tracking-[0.12em] uppercase mb-3"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              Ready to Build?
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight leading-tight">
              Let's Build AI Agents
              <br />
              for Your Product
            </h2>
            <p
              className="text-[17px] max-w-xl mx-auto !mb-9 leading-relaxed"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              You've seen what's possible. Now let our team build custom AI
              agents designed for your business — tailored to your data, your
              workflows, and your users.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href={contactUrl}
                className="inline-flex items-center justify-center gap-2 rounded-md px-8 py-4 font-semibold transition-all hover:!bg-[#0b1e33] hover:!text-white hover:!border-[#0b1e33]"
                style={{
                  background: "#fff",
                  color: "#2f6bff",
                  border: "1px solid #fff",
                }}
              >
                Book a Free AI Consultation <ArrowRight size={18} />
              </Link>
              <a
                href={portfolioUrl}
                className="inline-flex items-center justify-center rounded-md px-8 py-4 font-semibold text-white border border-white/25 hover:bg-white/5 hover:border-white/50 transition-all"
              >
                View Our Portfolio
              </a>
            </div>
            <p
              className="!mt-5 text-[13px]"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              We take on{" "}
              <strong style={{ color: "#fff" }}>
                5 new AI agent projects per month
              </strong>{" "}
              — limited availability.
            </p>
          </div>
        </section>

        {/* ==================== FAQ (Light) ==================== */}
        <section className="py-20 px-6" style={{ background: "#f1f5fb" }}>
          <div className="container max-w-[1280px] md:px-10 px-5 mx-auto">
            <div className="max-w-3xl mx-auto">
              <span
                className="text-center block text-[11px] font-bold tracking-[0.12em] uppercase mb-3"
                style={{ color: "#2f6bff" }}
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

        {/* Main site Footer is rendered at the app layout level for the landing page */}

        {/* ==================== STICKY BAR ==================== */}
        <div
          className={`fixed bottom-0 inset-x-0 z-40 backdrop-blur-md border-t border-white/10 flex items-center justify-center gap-4 flex-wrap md:flex-nowrap transition-transform duration-500 ${
            stickyVisible ? "translate-y-0" : "translate-y-full"
          }`}
          style={{
            background: "rgba(11, 30, 51, 0.92)",
            padding: "12px 20px",
          }}
        >
          <span className="text-sm text-white/70 text-center md:text-left">
            <strong className="text-white">Impressed?</strong> Let's build AI
            agents for your business.
          </span>
          <Link
            href={contactUrl}
            className="inline-flex items-center gap-2 rounded-md px-6 py-2 text-sm font-semibold text-white transition-all hover:opacity-90"
            style={{
              background: "#2f6bff",
            }}
          >
            Talk to Us <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </AIAgentLayout>
  );
};

const ModuleCard = ({ mod }) => (
  <Link
    href={`/ai-agents${mod.path}`}
    className="group relative flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-white border border-[#e5e7eb] hover:border-[#2f6bff] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(47,107,255,0.08)] transition-all duration-300 min-h-[160px]"
    style={{ textDecoration: "none" }}
  >
    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3.5 bg-[#f1f5fb] border border-[#e5e7eb] group-hover:scale-110 group-hover:border-[#2f6bff]/30 transition-all duration-300">
      <mod.icon size={22} className={mod.color} />
    </div>
    <span className="text-base font-bold text-[#0f172a] mb-1 tracking-tight">
      {mod.name}
    </span>
    <span className="text-xs text-[#64748b] leading-snug group-hover:text-[#2f6bff] transition-colors">
      {mod.desc}
    </span>
  </Link>
);

export default AiAgentHome;
