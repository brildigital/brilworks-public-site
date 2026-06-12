"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import GradientFAQAccordion from "../Common/GradientFAQAccordion";
import {
  Check,
  ArrowRight,
  Star,
  Sparkles,
  ShieldCheck,
  Rocket,
  CircleCheck,
  Layers,
  TrendingUp,
  Workflow,
  Clock,
  Users,
  Award,
  BadgeCheck,
  CreditCard,
  Globe,
  Heart,
  ShoppingCart,
  Monitor,
  Truck,
} from "lucide-react";
import Image from "next/image";

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
  { icon: <Rocket size={18} color="#017eeb" />, label: "10x Faster Deployments" },
  { icon: <CircleCheck size={18} color="#017eeb" />, label: "99.99% Uptime" },
  { icon: <Layers size={18} color="#017eeb" />, label: "100+ Pipelines Built" },
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
    icon: <Workflow size={32} color="#017eeb" />,
  },
  {
    title: "Scalability & Flexibility",
    tint: "#ede9fe",
    body: "Your infrastructure adapts to traffic spikes, new markets, and product pivots — with IaC-driven architecture designed to scale on demand.",
    icon: <TrendingUp size={32} color="#4f46e5" />,
  },
  {
    title: "Expertise Across Technologies",
    tint: "#d1fae5",
    body: "AWS, GCP, Azure, Kubernetes, Terraform, Jenkins, GitHub Actions — we bring deep, battle-tested expertise across the entire DevOps toolchain.",
    icon: <CircleCheck size={32} color="#10b981" />,
  },
  {
    title: "Cost Optimization",
    tint: "#ccfbf1",
    body: "We tune your cloud spend with right-sizing, auto-scaling, and FinOps practices — cutting bills by 30-50% without sacrificing performance.",
    icon: <Clock size={32} color="#0d9488" />,
  },
  {
    title: "Improved Collaboration",
    tint: "#cffafe",
    body: "We break down silos between Dev, Ops, QA, and Security teams — aligning everyone on shared goals, shared metrics, and shared accountability.",
    icon: <Users size={32} color="#0891b2" />,
  },
  {
    title: "Proven Track Record",
    tint: "#dbeafe",
    body: "100+ production pipelines shipped across SaaS, fintech, and enterprise. Track record of successful DevOps transformations, not just tooling swaps.",
    icon: <ShieldCheck size={32} color="#1e40af" />,
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
  { label: "AWS Consulting Partner", icon: <ShieldCheck size={20} color="#017eeb" /> },
  { label: "Clutch Top DevOps 2024", icon: <Star size={20} color="#017eeb" /> },
  { label: "GoodFirms Top DevOps", icon: <Award size={20} color="#017eeb" /> },
  { label: "ISO 27001 Certified", icon: <BadgeCheck size={20} color="#017eeb" /> },
  { label: "Google Cloud Partner", icon: <Star size={20} color="#017eeb" /> },
];

const INDUSTRIES = [
  {
    label: "Fintech",
    href: "/industry/fintech-software-development/",
    icon: <CreditCard size={32} color="#017eeb" />,
  },
  {
    label: "SaaS",
    href: "/saas-application-development-services/",
    icon: <Globe size={32} color="#4f46e5" />,
  },
  {
    label: "Healthcare",
    href: "/industry/healthcare-software-development/",
    icon: <Heart size={32} color="#ef4444" />,
  },
  {
    label: "E-commerce",
    href: "/industry/e-commerce-app-development/",
    icon: <ShoppingCart size={32} color="#10b981" />,
  },
  {
    label: "Media & Streaming",
    href: "/industry/media-entertainment-software-development/",
    icon: <Monitor size={32} color="#0d9488" />,
  },
  {
    label: "Logistics",
    href: "/industry/fleet-management-software-development/",
    icon: <Truck size={32} color="#0891b2" />,
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
    image:"/images/v2/devops_implementation.webp",
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
    image:"/images/v2/devops_automation.webp",
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
    image:"/images/v2/cloud_containerization_services.webp",
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
    image:"/images/v2/devops_release_management.webp",
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
    image:"/images/v2/ci_cd_pipeline.webp",
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
    image:"/images/v2/deployment_services.webp",
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
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-[60px] items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-6 text-[12px] font-semibold uppercase"
                  style={{ background: "rgba(26,92,204,0.15)", border: "1px solid rgba(26,92,204,0.3)", color: "#00b4d8", letterSpacing: "0.1em" }}>
                  <Sparkles size={14} color="#00b4d8" /> DevOps Consulting Services
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
                    Get My Free DevOps Audit <ArrowRight size={16} />
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
                   > <Image
                      src={svc.image}
                      alt={svc.title}
                      width={200}
                      height={120}
                      className="object-cover"
                    />
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
