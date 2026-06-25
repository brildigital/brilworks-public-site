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
    image:"/images/v2/cloud_migration.webp",
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
    image:"/images/v2/architecture_design.webp",
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
    image:"/images/v2/cost_optimization.webp",
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
    image:"/images/v2/security_compliance.webp",
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
    image:"/images/v2/development_devops.webp",
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
    image:"/images/v2/aws_managed_services.webp",
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
                    >
                       <Image
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
