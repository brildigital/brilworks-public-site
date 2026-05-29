"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import GradientFAQAccordion from "../Common/GradientFAQAccordion";
import {
  Check,
  ArrowRight,
  Star,
  Users,
  ShieldCheck,
  Clock,
  CircleCheck,
  DollarSign,
  MessageCircle,
  Zap,
  Maximize2,
  Award,
  BadgeCheck,
  CreditCard,
  Heart,
  ShoppingCart,
  Layers,
  Truck,
  GraduationCap,
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
  { icon: <ShieldCheck size={18} color="#017eeb" />, label: "AWS Consulting Partner" },
  { icon: <Users size={18} color="#017eeb" />, label: "100+ Engineers Ready" },
  { icon: <Clock size={18} color="#017eeb" />, label: "7-Day Team Setup" },
  { icon: <CircleCheck size={18} color="#017eeb" />, label: "98% Engineer Retention" },
];

const HERO_STATS = [
  { value: "50+", label: "Dedicated Teams Deployed" },
  { value: "7 Days", label: "Average Team Setup" },
  { value: "98%", label: "Engineer Retention" },
  { value: "98%", label: "Client Satisfaction" },
];

const BENEFITS = [
  {
    title: "Tailored Expertise",
    tint: "#e8f0fd",
    body:
      "A team custom-built to your exact roadmap — not a rotating pool. Every member is vetted against your stack, domain, and seniority needs before you interview.",
    icon: <Star size={32} color="#017eeb" />,
  },
  {
    title: "Cost-Efficient Scaling",
    tint: "#ede9fe",
    body:
      "40-60% lower cost than hiring full-time — with the flexibility to scale up or down with 30 days notice. No recruiting fees, benefits overhead, or severance exposure.",
    icon: <DollarSign size={32} color="#4f46e5" />,
  },
  {
    title: "Streamlined Communication",
    tint: "#d1fae5",
    body:
      "A single delivery manager is your point of contact — translating priorities, removing blockers, and running weekly reviews. You escalate once; we resolve.",
    icon: <MessageCircle size={32} color="#10b981" />,
  },
  {
    title: "Quality Assurance",
    tint: "#ccfbf1",
    body:
      "Rigorous testing, code review gates, and security audits are built into every sprint — so the code your team ships is production-ready, not \u201Cdone-ish\u201D.",
    icon: <ShieldCheck size={32} color="#0d9488" />,
  },
  {
    title: "Faster Time-to-Market",
    tint: "#cffafe",
    body:
      "Your dedicated team ships only your backlog — no context-switching across clients. Expect 2-3x velocity over freelance or offshore pool models.",
    icon: <Zap size={32} color="#0891b2" />,
  },
  {
    title: "Scalability & Flexibility",
    tint: "#dbeafe",
    body:
      "Ramp up for a launch, scale down after stabilization — all with 30 days notice. 100+ engineers across web, mobile, AI, cloud, and data available on demand.",
    icon: <Maximize2 size={32} color="#1e40af" />,
  },
];

const TESTIMONIALS = [
  {
    initials: "DK",
    name: "Daniel Kim",
    role: "CTO, B2B FinTech",
    quote:
      "We went from a 5-month recruiting pipeline to a 7-engineer team in 9 days. The Brilworks team shipped our payments rewrite in the same quarter — same quality bar as my in-house team.",
  },
  {
    initials: "AS",
    name: "Amara Singh",
    role: "VP Engineering, HealthTech SaaS",
    quote:
      "Our Brilworks pod has been with us 18 months — same four engineers. That retention is why our velocity doubled. They know our codebase better than half my in-house team.",
  },
  {
    initials: "LM",
    name: "Laura Martinez",
    role: "Product Director, E-commerce Platform",
    quote:
      "Predictable delivery is rare with vendors. Brilworks hits every milestone, runs clean sprints, and their delivery manager flags risks before they become problems. My roadmap is finally reliable.",
  },
];

const HONORS = [
  { label: "AWS Consulting Partner", icon: <ShieldCheck size={20} color="#017eeb" /> },
  { label: "Clutch Top B2B 2024", icon: <Star size={20} color="#017eeb" /> },
  { label: "GoodFirms Top Developers", icon: <Award size={20} color="#017eeb" /> },
  { label: "ISO 27001 Certified", icon: <BadgeCheck size={20} color="#017eeb" /> },
  { label: "Google Cloud Partner", icon: <Star size={20} color="#017eeb" /> },
];

const INDUSTRIES = [
  { label: "Fintech", href: "/industry/fintech-software-development/", icon: <CreditCard size={32} color="#017eeb" /> },
  { label: "Healthcare", href: "/industry/healthcare-software-development/", icon: <Heart size={32} color="#ef4444" /> },
  { label: "E-commerce", href: "/industry/e-commerce-app-development/", icon: <ShoppingCart size={32} color="#10b981" /> },
  { label: "SaaS", href: "/saas-application-development-services/", icon: <Layers size={32} color="#4f46e5" /> },
  { label: "Logistics", href: "/industry/fleet-management-software-development/", icon: <Truck size={32} color="#0891b2" /> },
  { label: "EdTech", href: "/industry/edtech-software-development/", icon: <GraduationCap size={32} color="#0d9488" /> },
];

const FAQ = [
  {
    q: "How fast can you stand up a dedicated team?",
    a: "Most teams are assembled in 7 days and integrated into your sprint within 14. For niche stacks (Rust, Elixir, specialized ML), add 3-5 days for vetting. We send curated profiles within 48 hours of the kickoff call.",
  },
  {
    q: "Can we scale the team up or down based on project needs?",
    a: "Yes. Our flexible engagement model lets you scale headcount up or down with 30 days notice. We also support surge teams for launches — adding 3-5 engineers for 4-8 weeks without long-term commitment.",
  },
  {
    q: "What if an engineer isn't the right fit?",
    a: "We replace any engineer at no cost within the first 30 days if they aren't meeting your bar. Our 98% retention rate means this rarely happens — but the guarantee removes the risk of committing.",
  },
  {
    q: "Who manages the team day to day?",
    a: "You have full day-to-day control over the team — they run standups, write code, and ship in your cadence. We provide a dedicated delivery manager as a single point of escalation, plus weekly velocity reports.",
  },
  {
    q: "How do you ensure the security of our project and IP?",
    a: "Mutual NDAs are signed before any team profile is shared. We follow ISO 27001 controls, secure coding practices, encrypted data handling, and regular security audits. You own 100% of the code, designs, and IP.",
  },
  {
    q: "What level of involvement will we have in the development process?",
    a: "As much as you want. Most clients join daily standups, own the backlog, and review every PR. We can also run in managed-delivery mode where we own delivery end-to-end and report against milestones.",
  },
  {
    q: "What happens if we encounter issues post-launch?",
    a: "Our dedicated teams provide ongoing support and maintenance after launch — bug fixes, feature work, performance monitoring, and scaling. Most clients continue with the same team for 12-24 months post go-live.",
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

// Mockup 1: Sticky-note board — Team planning
const MockupStickyBoard = () => (
  <div className="w-full h-full rounded-xl overflow-hidden flex flex-col bg-white" style={{ boxShadow: "0 8px 24px rgba(13,15,26,0.08)" }}>
    <MockBar label="Sprint Planning · Your Team" />
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

// Mockup 2: Code + Canvas — Cross-functional team
const MockupCodeCanvas = () => (
  <div className="w-full h-full rounded-xl overflow-hidden flex flex-col bg-white" style={{ boxShadow: "0 8px 24px rgba(13,15,26,0.08)" }}>
    <MockBar label="dev + design + QA · shared workspace" />
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

// Mockup 3: Stats dashboard — Team velocity
const MockupVelocity = () => (
  <div className="w-full h-full rounded-xl overflow-hidden flex flex-col bg-white" style={{ boxShadow: "0 8px 24px rgba(13,15,26,0.08)" }}>
    <MockBar label="Team Velocity · Sprint 14" />
    <div className="flex-1 p-4">
      <div className="grid grid-cols-3 gap-2.5 mb-3">
        <div className="rounded-md py-2.5 px-2 text-center" style={{ background: "#f0fdf4", border: "1px solid #bbf7d0" }}>
          <div className="text-[18px] font-extrabold leading-none" style={{ color: "#047857" }}>94%</div>
          <div className="text-[8px] font-semibold mt-1 uppercase tracking-wider" style={{ color: "#64748b" }}>On-Time Delivery</div>
        </div>
        <div className="rounded-md py-2.5 px-2 text-center" style={{ background: "#fef3c7", border: "1px solid #fde68a" }}>
          <div className="text-[18px] font-extrabold leading-none" style={{ color: "#a16207" }}>48h</div>
          <div className="text-[8px] font-semibold mt-1 uppercase tracking-wider" style={{ color: "#64748b" }}>Avg Cycle</div>
        </div>
        <div className="rounded-md py-2.5 px-2 text-center" style={{ background: "#f0fdf4", border: "1px solid #bbf7d0" }}>
          <div className="text-[18px] font-extrabold leading-none" style={{ color: "#047857" }}>98%</div>
          <div className="text-[8px] font-semibold mt-1 uppercase tracking-wider" style={{ color: "#64748b" }}>Retention</div>
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
              <Check size={10} color="white" strokeWidth={3} />
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
    title: "Team Composition & Sprint Planning",
    body:
      "Tell us your stack, your goals, and your sprint cadence. Within 48 hours we send curated engineer profiles — developers, designers, PMs, and QAs — assembled to match your roadmap, not just keywords on a JD.",
    features: [
      "Curated engineer profiles in 48 hours",
      "Sprint rituals aligned to your cadence",
      "Time-zone overlap of 4+ hours guaranteed",
    ],
    mockup: <MockupStickyBoard />,
    imageBg: "linear-gradient(135deg, #f0fdfa 0%, #99f6e4 100%)",
    padMockup: true,
    reverse: false,
  },
  {
    title: "Cross-Functional Team Collaboration",
    body:
      "Your dedicated team works as one unit — engineers, designers, and QAs sharing context, tooling, and Slack channels. They plug into your repos, your CI/CD, and your standups on day one. No hand-offs. No agency walls.",
    features: [
      "Your tools, your repos, your process",
      "Dev + design + QA in one pod",
      "Multi-domain expertise across 100+ experts",
    ],
    mockup: <MockupCodeCanvas />,
    imageBg: "linear-gradient(135deg, #f5f3ff 0%, #ddd6fe 100%)",
    padMockup: true,
    reverse: true,
  },
  {
    title: "Delivery Management & Velocity Tracking",
    body:
      "A dedicated delivery manager owns velocity, quality, and escalation. You get real-time dashboards on sprint health, cycle time, and retention — plus weekly reviews so there are never any surprises.",
    features: [
      "Real-time velocity & progress tracking",
      "Dedicated delivery manager included",
      "24/7 support & production monitoring",
    ],
    mockup: <MockupVelocity />,
    imageBg: "linear-gradient(135deg, #ecfdf5 0%, #bbf7d0 100%)",
    padMockup: true,
    reverse: false,
  },
];

// ---------- Page ----------
const DedicatedTeam = () => {
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
                  <Users size={14} color="#00b4d8" /> Dedicated Development Teams
                </span>
                <h1 className="font-extrabold mb-5 text-white" style={{ fontSize: "clamp(34px, 4vw, 54px)", letterSpacing: "-1.5px", lineHeight: 1.1 }}>
                  Your Dedicated Dev Team — <span style={gradientTextStyle}>Up and Running in 7 Days</span>
                </h1>
                <p className="mb-8" style={{ fontSize: 18, lineHeight: 1.7, color: "rgba(255,255,255,0.72)", maxWidth: 580 }}>
                  Scale engineering capacity without the 4-month hiring cycle. 100+ vetted developers, designers, PMs and QA specialists — assembled into your dedicated team in 7 days, plugged into your sprint within 14.
                </p>
                <div className="flex flex-wrap gap-3.5 my-10">
                  <Link href="#contact"
                    className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all"
                    style={{ background: "#017eeb", color: "#fff", border: "1px solid #017eeb", padding: "16px 32px", fontSize: 16 }}>
                    Get My Team Proposal <ArrowRight size={16} />
                  </Link>
                  <Link href="#services"
                    className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:bg-white/10"
                    style={{ background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.3)", padding: "16px 32px", fontSize: 16 }}>
                    See How It Works
                  </Link>
                </div>
                <div className="flex flex-wrap gap-[18px]" style={{ color: "rgba(255,255,255,0.65)", fontSize: 14 }}>
                  {["7-day team setup", "30-day replacement guarantee", "Scale up or down anytime"].map((t) => (
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
            <span className="inline-block mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#017eeb" }}>How It Works</span>
            <h2 className="font-extrabold" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0d0f1a" }}>How Our Dedicated Team Engagement Works</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>From team composition to sprint integration — a predictable ramp-up designed for engineering leaders who need velocity without the recruiting overhead.</p>
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
          <h3 className="font-extrabold mb-3.5" style={{ fontSize: "clamp(24px, 3vw, 36px)", color: "#fff", lineHeight: 1.2, letterSpacing: "-0.5px" }}>Ready to Assemble Your Dedicated Team?</h3>
          <p className="mb-7" style={{ color: "rgba(255,255,255,0.85)", fontSize: 16, lineHeight: 1.7 }}>Tell us your stack and team size. We&apos;ll send curated engineer profiles within 48 hours — interview who you want, onboard in a week, scale as you grow. No commitment.</p>
          <Link href="#contact"
            className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:!bg-[#0d0f1a] hover:!text-white hover:!border-[#0d0f1a] mt-5"
            style={{ background: "#fff", color: "#017eeb", border: "1px solid #fff", padding: "16px 32px", fontSize: 16 }}>
            Get My Team Proposal
          </Link>
        </div>
      </section>

      {/* WHY BRILWORKS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="text-center mx-auto mb-14" style={{ maxWidth: 720 }}>
            <span className="inline-block mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#017eeb" }}>Why Brilworks</span>
            <h2 className="font-extrabold" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0d0f1a" }}>Why Hire Your Dedicated Team From Brilworks</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>We&apos;re the engineering partner for CTOs and VPs who need predictable velocity — not a staffing agency hoping their resume filters caught a keyword.</p>
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
            <h2 className="font-extrabold text-white" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15 }}>What CTOs &amp; VPs of Engineering Say</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "rgba(255,255,255,0.62)" }}>Real outcomes from engineering leaders who&apos;ve scaled with dedicated Brilworks teams.</p>
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
            <h2 className="font-extrabold" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0d0f1a" }}>Industries We Staff Dedicated Teams For</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>Our engineers come with domain context — so you skip the 3-month ramp on compliance, regulations, and industry-specific workflows.</p>
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
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>The real questions engineering leaders ask before hiring a dedicated development team.</p>
          </div>
          <div className="mx-auto" style={{ maxWidth: 860 }}>
            {FAQ.map((item, i) => (
              <GradientFAQAccordion
                key={i + 1}
                id={i + 1}
                question={item.q}
                answer={item.a}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM (preserved component) */}
      <div id="contact">
        <SolutionContactForm
          title="Ready to Assemble Your Team?"
          description="One conversation, one team proposal, one decision away from engineering velocity you can plan around. Tell us what you need — we'll handle the rest."
          messageRequired={true}
          submitLabel="Get My Team Proposal"
          benefits={[
            "Curated engineer profiles within 48 hours",
            "Team stood up in 7 days, integrated in 14",
            "30-day no-cost replacement guarantee",
            "Scale headcount up or down with 30 days notice",
            "100+ engineers across web, mobile, AI, cloud & data",
          ]}
        />
      </div>
    </>
  );
};

export default DedicatedTeam;
