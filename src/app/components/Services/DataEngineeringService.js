"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  Star,
  Layers,
  AlignLeft,
  CircleDollarSign,
  Cpu,
  ShieldCheck,
  BarChart3,
  Lock,
  Plus,
  Clock,
  Activity,
  Award,
  BadgeCheck,
  Landmark,
  HeartPulse,
  ShoppingCart,
  Truck,
  Factory,
  Calculator,
  ArrowRightLeft,
  GitCompare,
} from "lucide-react";
import GradientFAQAccordion from "../Common/GradientFAQAccordion";

const SolutionContactForm = dynamic(
  () => import("../Solution/SolutionContactForm"),
);

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
const TRUST = [
  {
    icon: <ShieldCheck size={18} color="#017eeb" />,
    label: "Snowflake Partner",
  },
  { icon: <Cpu size={18} color="#017eeb" />, label: "Databricks Partner" },
  { icon: <BadgeCheck size={18} color="#017eeb" />, label: "AWS Partner" },
  { icon: <Star size={18} color="#017eeb" />, label: "5.0 on Clutch" },
];

const HERO_STATS = [
  { value: "20–40%", label: "Typical cost cut", accent: true },
  { value: "40+", label: "Pipelines in production", accent: false },
  { value: "2.1B", label: "Rows processed daily", accent: false },
  { value: "99.7%", label: "Pipeline uptime", accent: true },
];

const SERVICES = [
  {
    icon: Layers,
    title: "Platform migration",
    body: "Move off Teradata, SQL Server, Hadoop, or legacy warehouses onto a Snowflake or Databricks lakehouse. Migrated in phases, reconciled table by table, with the old system live until you trust the new one.",
    features: [
      "Legacy warehouse and Hadoop migration",
      "Reconciled row-by-row, zero silent loss",
      "Phased cutover, no big-bang risk",
    ],
    imageBg: "linear-gradient(135deg, #f0f7ff 0%, #e0ecfc 100%)",
    reverse: false,
  },
  {
    icon: AlignLeft,
    title: "Data pipeline & ELT engineering",
    body: "Build and maintain the pipelines that feed your warehouse on dbt, Fivetran, Airflow, and Spark. Tuned to hold up when volume and table count climb, not just on sample data.",
    features: [
      "Batch and streaming pipelines",
      "dbt-first, tested transformations",
      "Built to be debugged and owned by your team",
    ],
    imageBg: "linear-gradient(135deg, #ecfdf5 0%, #bbf7d0 100%)",
    reverse: true,
  },
  {
    icon: CircleDollarSign,
    title: "Cost optimization",
    body: "Cut Snowflake and Databricks spend 20 to 40% through warehouse right-sizing, auto-suspend, and query tuning. A fixed-price engagement that usually pays for itself in weeks.",
    features: [
      "Fixed-price audit, fast payback",
      "Warehouse right-sizing and tuning",
      "Itemized plan, not vague advice",
    ],
    imageBg: "linear-gradient(135deg, #f5f3ff 0%, #ddd6fe 100%)",
    reverse: false,
  },
  {
    icon: Cpu,
    title: "AI/ML data foundation",
    body: "Prepare clean, governed data so the AI, agents, and models you build hold up in production instead of breaking on bad inputs. Plus the governance, lineage, and modeling that keep it compliant as you scale.",
    features: [
      "Clean, governed, AI-ready data",
      "MLOps and feature pipelines",
      "Access control and lineage built in",
    ],
    imageBg: "linear-gradient(135deg, #ecfeff 0%, #a5f3fc 100%)",
    reverse: true,
  },
];

const BENEFITS = [
  {
    title: "Certified on both platforms",
    tint: "#e8f0fd",
    body: "Snowflake and Databricks certified, with production shipping history, not just training badges.",
    icon: <ShieldCheck size={32} color="#017eeb" />,
  },
  {
    title: "Cost built into delivery",
    tint: "#ede9fe",
    body: "We size, tune, and cut idle spend as part of the work, so what you launch already runs lean.",
    icon: <CircleDollarSign size={32} color="#4f46e5" />,
  },
  {
    title: "Full scope, one team",
    tint: "#d1fae5",
    body: "Migration, pipelines, governance, and the AI layer. No handoff between three vendors.",
    icon: <Layers size={32} color="#10b981" />,
  },
  {
    title: "Measurable outcomes",
    tint: "#ccfbf1",
    body: "Faster queries, lower bills, AI in production. Numbers you can point to, not adoption slides.",
    icon: <BarChart3 size={32} color="#0d9488" />,
  },
  {
    title: "Governance from day one",
    tint: "#cffafe",
    body: "Access control and lineage early, so fintech and healthcare pass audit without a retrofit.",
    icon: <Lock size={32} color="#0891b2" />,
  },
  {
    title: "Zero lock-in",
    tint: "#dbeafe",
    body: "We build on your cloud and your repo. You own the whole stack when we leave.",
    icon: <Plus size={32} color="#1e40af" />,
  },
  {
    title: "Results in weeks",
    tint: "#e8f0fd",
    body: "A first trustworthy dashboard or a measured cost cut lands in weeks, not quarters.",
    icon: <Clock size={32} color="#017eeb" />,
  },
  {
    title: "Real-time when it matters",
    tint: "#ede9fe",
    body: "Streaming pipelines for the workloads that cannot wait for a nightly batch.",
    icon: <Activity size={32} color="#4f46e5" />,
  },
];

const TESTIMONIALS = [
  {
    initials: "ML",
    name: "Marcus Lee",
    role: "Director of Data Engineering, HealthTech",
    quote:
      "They cut our warehouse spend the month after they finished. Nothing our analysts touched changed.",
  },
  {
    initials: "SP",
    name: "Sofia Petrova",
    role: "Chief Data Officer, Logistics Platform",
    quote:
      "They fixed the data foundation first instead of selling us an AI demo. The agent worked because of it.",
  },
  {
    initials: "JT",
    name: "James Thornton",
    role: "VP Engineering, E-Commerce",
    quote:
      "Two days of weekly reporting turned into four minutes. The ops team got a day back.",
  },
];

const HONORS = [
  {
    label: "Snowflake Partner",
    icon: <ShieldCheck size={20} color="#017eeb" />,
  },
  { label: "Databricks Partner", icon: <Cpu size={20} color="#017eeb" /> },
  { label: "AWS Partner", icon: <BadgeCheck size={20} color="#017eeb" /> },
  { label: "Clutch 5.0", icon: <Star size={20} color="#017eeb" /> },
  {
    label: "Top Data Engineering 2026",
    icon: <Award size={20} color="#017eeb" />,
  },
];

const INDUSTRIES = [
  { label: "Fintech", icon: <Landmark size={32} color="#017eeb" /> },
  { label: "Healthcare", icon: <HeartPulse size={32} color="#ef4444" /> },
  { label: "E-Commerce", icon: <ShoppingCart size={32} color="#10b981" /> },
  { label: "Logistics", icon: <Truck size={32} color="#4f46e5" /> },
  { label: "SaaS", icon: <BarChart3 size={32} color="#0d9488" /> },
  { label: "Manufacturing", icon: <Factory size={32} color="#0891b2" /> },
];

const TOOLS = [
  {
    icon: Calculator,
    name: "Snowflake Cost Estimator",
    href: "/data-engineering-tools/snowflake-cost-calculator/",
  },
  {
    icon: BarChart3,
    name: "Databricks Cost Estimator",
    href: "/data-engineering-tools/databricks-cost-calculator/",
  },
  {
    icon: Cpu,
    name: "AI Readiness Audit",
    href: "/data-engineering-tools/ai-readiness-audit/",
  },
  {
    icon: ArrowRightLeft,
    name: "Migration Cost Calculator",
    href: "/data-engineering-tools/data-migration-cost-calculator/",
  },
  {
    icon: ShieldCheck,
    name: "Data Quality Assessment",
    href: "/data-engineering-tools/data-quality-assessment/",
  },
  {
    icon: GitCompare,
    name: "Snowflake vs Databricks Advisor",
    href: "/data-engineering-tools/snowflake-vs-databricks-advisor/",
  },
];

const FAQ = [
  {
    q: "What are data engineering services?",
    a: "Data engineering services cover the pipelines, warehouse, and modeling that move data from raw sources into something your teams can query and trust. Brilworks delivers this on Snowflake and Databricks, including migration, cost optimization, and the AI-ready data layer that sits on top.",
  },
  {
    q: "How much do data engineering services cost?",
    a: "It depends on scope. Our Cost-Optimization Audit is fixed-price and usually pays for itself. Larger builds and migrations are scoped per project, and staff augmentation is monthly per engineer. We give you a clear price before any work starts.",
  },
  {
    q: "How long does a pipeline or migration take?",
    a: "Most work runs in fixed, scoped phases rather than one open-ended project. A first trustworthy result often lands in weeks, and migrations are reconciled table by table before cutover so nothing is lost.",
  },
  {
    q: "Do you work on Snowflake, Databricks, or both?",
    a: "Both. Our engineers are certified on each, and we pick the platform that fits your workload rather than the one we would rather sell. Many clients run both.",
  },
  {
    q: "Which cloud do you build on?",
    a: "Yours. We work on your existing AWS, Azure, or GCP environment, and you own the whole stack and the repo when the engagement ends.",
  },
  {
    q: "Do you offer ongoing support after the build?",
    a: "Yes. Beyond the initial build or migration, we offer managed services: monitoring, performance tuning, and proactive cost control, so the platform stays fast and cheap to run.",
  },
];

const DataEngineeringService = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-20 pb-14 md:pt-[120px] md:pb-[80px]">
        <div className="absolute inset-0 -z-10" style={heroBg} />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ ...heroGridOverlay, zIndex: -1 }}
        />
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-[60px] items-center">
            <div>
              <span
                className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-6 text-[12px] font-semibold uppercase"
                style={{
                  background: "rgba(26,92,204,0.15)",
                  border: "1px solid rgba(26,92,204,0.3)",
                  color: "#00b4d8",
                  letterSpacing: "0.1em",
                }}
              >
                <Layers size={14} color="#00b4d8" /> Data Engineering Services
              </span>
              <h1
                className="font-extrabold mb-5 text-white"
                style={{
                  fontSize: "clamp(30px, 4vw, 54px)",
                  letterSpacing: "-1.5px",
                  lineHeight: 1.1,
                }}
              >
                Data Engineering Services that{" "}
                <span style={{ color: "#3D7BFF" }}>Cut Cost and Ship AI.</span>
              </h1>
              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.72)",
                  maxWidth: 580,
                }}
              >
                Brilworks unifies your data on Snowflake and Databricks, cuts
                what you overspend to run it, and gets AI into production on
                data your teams can trust.
              </p>
              <div className="flex flex-wrap gap-3 my-8">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all"
                  style={{
                    background: "#017eeb",
                    color: "#fff",
                    border: "1px solid #017eeb",
                    padding: "14px 24px",
                    fontSize: 15,
                  }}
                >
                  Talk to an Expert <ArrowRight size={16} />
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:bg-white/10"
                  style={{
                    background: "transparent",
                    color: "#fff",
                    border: "1px solid rgba(255,255,255,0.3)",
                    padding: "14px 24px",
                    fontSize: 15,
                  }}
                >
                  See what we do
                </Link>
              </div>
              <div
                className="flex flex-wrap gap-x-5 gap-y-2.5"
                style={{ color: "rgba(255,255,255,0.65)", fontSize: 14 }}
              >
                {[
                  "Fixed-price cost audit that pays for itself",
                  "Your cloud, your repo, no lock-in",
                  "Certified on Snowflake and Databricks",
                ].map((t) => (
                  <span key={t} className="inline-flex items-center gap-2">
                    <span style={{ color: "#00dbd3" }}>
                      <Check size={16} />
                    </span>
                    {t}
                  </span>
                ))}
              </div>


            </div>
            <div>
              <div className="grid grid-cols-2 gap-4">
                {HERO_STATS.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl transition-all"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      padding: "24px 20px",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <div
                      className="font-extrabold leading-none mb-2"
                      style={{
                        color: s.accent ? "#34E5A0" : "#fff",
                        fontSize: "clamp(28px, 3vw, 42px)",
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

      {/* TRUST BAR */}
      <section
        aria-label="Trust indicators"
        style={{
          background: "#fafafa",
          borderBottom: "1px solid #e5e7eb",
          padding: "28px 0",
        }}
      >
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div
            className="flex flex-wrap items-center justify-center"
            style={{ gap: "12px 40px" }}
          >
            {TRUST.map((t) => (
              <div
                key={t.label}
                className="inline-flex items-center gap-2 whitespace-nowrap"
                style={{ fontSize: 13, fontWeight: 600, color: "#212121" }}
              >
                {t.icon}
                {t.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="py-16 md:py-24"
        style={{ background: "#f2f9fe" }}
      >
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="text-center mx-auto mb-14" style={{ maxWidth: 720 }}>
            <span
              className="inline-block mb-4"
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#017eeb",
              }}
            >
              What We Build
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
              Core Data Engineering Services
            </h2>
            <p
              className="mt-4"
              style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}
            >
              Full-lifecycle data engineering, from the pipeline that ingests
              raw data to the AI layer that runs on top of it.
            </p>
          </div>

          {SERVICES.map((svc) => {
            const Icon = svc.icon;
            return (
              <div key={svc.title} className="py-10 lg:py-12">
                <div className="grid items-center gap-8 lg:gap-[60px] grid-cols-1 lg:grid-cols-2">
                  <div className={svc.reverse ? "lg:order-2" : ""}>
                    <div
                      className="w-full overflow-hidden rounded-2xl relative flex items-center justify-center"
                      style={{
                        aspectRatio: "4 / 3",
                        background: svc.imageBg,
                        border: "1px solid #e5e7eb",
                      }}
                    >
                      <Icon
                        size={74}
                        color="#017eeb"
                        strokeWidth={1.3}
                        style={{ opacity: 0.85 }}
                      />
                    </div>
                  </div>
                  <div className={svc.reverse ? "lg:order-1" : ""}>
                    <h3
                      className="font-bold mb-4"
                      style={{
                        fontSize: "clamp(22px, 2.4vw, 28px)",
                        letterSpacing: "-0.3px",
                        lineHeight: 1.3,
                        color: "#0d0f1a",
                      }}
                    >
                      {svc.title}
                    </h3>
                    <p
                      className="mb-5"
                      style={{
                        fontSize: 16,
                        lineHeight: 1.7,
                        color: "#6b7280",
                      }}
                    >
                      {svc.body}
                    </p>
                    <ul className="list-none">
                      {svc.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2.5 mb-2.5"
                          style={{ fontSize: 14, color: "#212121" }}
                        >
                          <span
                            style={{
                              color: "#017eeb",
                              flexShrink: 0,
                              marginTop: 2,
                            }}
                          >
                            <Check size={16} />
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* MID CTA */}
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
            Not sure where to start? Start with the bill.
          </h3>
          <p
            className="mb-7"
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: 16,
              lineHeight: 1.7,
            }}
          >
            Your Snowflake or Databricks spend is probably 20 to 40% higher than
            it needs to be. Our fixed-price Cost-Optimization Audit finds where,
            and usually pays for itself.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:!bg-[#0d0f1a] hover:!text-white hover:!border-[#0d0f1a] mt-5 w-full sm:w-auto"
            style={{
              background: "#fff",
              color: "#017eeb",
              border: "1px solid #fff",
              padding: "16px 32px",
              fontSize: 16,
            }}
          >
            Get a Cost Audit
          </Link>
        </div>
      </section>

      {/* WHY BRILWORKS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="text-center mx-auto mb-14" style={{ maxWidth: 720 }}>
            <span
              className="inline-block mb-4"
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#017eeb",
              }}
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
              Data engineers who ship, then stay accountable
            </h2>
            <p
              className="mt-4"
              style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}
            >
              We do not just hand over a diagram. We engineer the platform and
              stand behind the numbers it produces.
            </p>
          </div>
          <div
            className="grid gap-6"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            }}
          >
            {BENEFITS.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl transition-all hover:-translate-y-0.5"
                style={{
                  background: "#fff",
                  border: "1px solid #e5e7eb",
                  padding: "32px 28px",
                }}
              >
                <div
                  className="rounded-[14px] flex items-center justify-center mb-5"
                  style={{ width: 64, height: 64, background: b.tint }}
                >
                  {b.icon}
                </div>
                <h3
                  className="font-bold mb-3"
                  style={{ fontSize: 18, color: "#0d0f1a" }}
                >
                  {b.title}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "#6b7280" }}>
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS (dark) */}
      <section
        className="relative overflow-hidden py-16 md:py-24"
        style={darkSectionBg}
      >
        <div
          className="relative mx-auto px-5 md:px-10"
          style={{ maxWidth: 1280, zIndex: 1 }}
        >
          <div className="text-center mx-auto mb-14" style={{ maxWidth: 720 }}>
            <span
              className="inline-block mb-4"
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#00b4d8",
              }}
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
              What Data Leaders Say
            </h2>
            <p
              className="mt-4"
              style={{
                fontSize: 17,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.62)",
              }}
            >
              Real words from people who ran our work in production.
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
                key={t.role}
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
                    <Star key={i} size={16} fill="currentColor" />
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
                      fontSize: 16,
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
        </div>
      </section>

      {/* HONORS */}
      <section className="py-16">
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div
            className="text-center mx-auto"
            style={{ maxWidth: 720, marginBottom: 32 }}
          >
            <span
              className="inline-block mb-4"
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#017eeb",
              }}
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

      {/* FREE TOOLS */}
      <section className="py-16 md:py-24" style={{ background: "#f8f9ff" }}>
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="text-center mx-auto mb-14" style={{ maxWidth: 720 }}>
            <span
              className="inline-block mb-4"
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#017eeb",
              }}
            >
              Free Tools
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
              Size Up Your Data Stack Before You Commit
            </h2>
            <p
              className="mt-4"
              style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}
            >
              Free calculators and assessments for Snowflake and Databricks
              teams. Get numbers in minutes, no sales call required.
            </p>
          </div>
          <div
            className="grid gap-4"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            }}
          >
            {TOOLS.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={tool.name}
                  href={tool.href}
                  className="flex items-center gap-4 rounded-2xl transition-all hover:-translate-y-0.5 bg-white"
                  style={{
                    border: "1px solid #e5e7eb",
                    padding: "20px 24px",
                    textDecoration: "none",
                  }}
                >
                  <div
                    className="rounded-[10px] flex items-center justify-center flex-shrink-0"
                    style={{
                      width: 44,
                      height: 44,
                      background: "#fff",
                      border: "1px solid #e5e7eb",
                    }}
                  >
                    <Icon size={20} color="#017eeb" strokeWidth={1.7} />
                  </div>
                  <span
                    style={{ fontSize: 15, fontWeight: 600, color: "#0d0f1a" }}
                  >
                    {tool.name}
                  </span>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/data-engineering-tools/"
              className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all"
              style={{
                background: "#017eeb",
                color: "#fff",
                border: "1px solid #017eeb",
                padding: "14px 28px",
                fontSize: 15,
              }}
            >
              Explore All Tools <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-16 md:py-24">
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="text-center mx-auto mb-14" style={{ maxWidth: 720 }}>
            <span
              className="inline-block mb-4"
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#017eeb",
              }}
            >
              Industries We Serve
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
              Data Engineering Built for Your Vertical
            </h2>
            <p
              className="mt-4"
              style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}
            >
              Pipeline patterns differ by industry. We have shipped in each of
              these.
            </p>
          </div>
          <div
            className="grid gap-4"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            }}
          >
            {INDUSTRIES.map((ind) => (
              <div
                key={ind.label}
                className="text-center transition-all hover:-translate-y-0.5"
                style={{
                  background: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: 14,
                  padding: "24px 16px",
                }}
              >
                <div className="mx-auto mb-3 flex items-center justify-center">
                  {ind.icon}
                </div>
                <span
                  style={{ fontSize: 13, fontWeight: 600, color: "#212121" }}
                >
                  {ind.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24" style={{ background: "#f8f9ff" }}>
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="text-center mx-auto mb-14" style={{ maxWidth: 720 }}>
            <span
              className="inline-block mb-4"
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#017eeb",
              }}
            >
              Common Questions
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
              Data Engineering Services, Answered
            </h2>
          </div>
          <div className="mx-auto" style={{ maxWidth: 860 }}>
            {FAQ.map((item, i) => (
              <GradientFAQAccordion
                key={i + 1}
                id={`data-eng-${i + 1}`}
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
          title="Ready to Put Your Data to Work?"
          description="One conversation is enough to know whether we are the right fit. Tell us what you are building or what is costing too much, and we will point you to the offer that fits."
          messageRequired={false}
          submitLabel="Talk to an Expert"
          benefits={[
            "Free consultation with a senior data engineer",
            "Fixed-price cost audit that usually pays for itself",
            "Your cloud, your repo — zero lock-in",
            "Certified on Snowflake and Databricks",
            "Response guaranteed within 24 business hours",
          ]}
        />
      </div>
    </>
  );
};

export default DataEngineeringService;
