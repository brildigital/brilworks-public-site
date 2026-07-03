"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import GradientFAQAccordion from "../Common/GradientFAQAccordion";
import {
  Check,
  X,
  ArrowRight,
  Star,
  TrendingUp,
  ShieldCheck,
  LayoutDashboard,
  Award,
  Clock,
  CheckCircle,
  Users,
  Globe,
  Heart,
  Building2,
  Truck,
  CreditCard,
  ShoppingBag,
  Cloud,
  Wrench,
  BarChart2,
} from "lucide-react";
import "../../styles/ServiceLightTheme.css";
import Image from "next/image";

const SolutionContactForm = dynamic(
  () => import("../Solution/SolutionContactForm"),
);

// ---------- Inline icon primitives (duotone) ----------
const IconCheck = ({ size = 16, className = "" }) => (
  <Check
    size={size}
    className={className}
    strokeWidth={2.2}
    aria-hidden="true"
  />
);

const IconArrowRight = ({ size = 16 }) => (
  <ArrowRight size={size} strokeWidth={2} aria-hidden="true" />
);

const IconStarFilled = ({ size = 16 }) => (
  <Star size={size} fill="currentColor" strokeWidth={0} aria-hidden="true" />
);

const IconChartUp = () => <TrendingUp size={14} aria-hidden="true" />;

const IconShield = ({ color = "#2f6bff" }) => (
  <ShieldCheck size={18} color={color} strokeWidth={1.8} aria-hidden="true" />
);

const IconDashboard = ({ color = "#2f6bff" }) => (
  <LayoutDashboard size={18} aria-hidden="true" color={color} />
);

const IconCert = ({ color = "#2f6bff" }) => (
  <Award size={18} aria-hidden="true" color={color} />
);

const IconClock = ({ color = "#2f6bff" }) => (
  <Clock size={18} aria-hidden="true" color={color} />
);

// ---------- Data ----------
const TRUST = [
  { icon: <IconShield />, label: "AWS Consulting Partner" },
  { icon: <IconDashboard />, label: "100+ Dashboards Built" },
  { icon: <IconCert />, label: "Tableau & Power BI Certified" },
  { icon: <IconClock />, label: "Real-Time Analytics" },
];

const HERO_STATS = [
  { value: "100+", label: "Dashboards Shipped" },
  { value: "50+", label: "Data Sources Integrated" },
  { value: "<2s", label: "Query Response Time" },
  { value: "98%", label: "Client Satisfaction" },
];

const BENEFITS = [
  {
    title: "Advanced Analytics",
    tint: "#e8f0fd",
    body: "We go beyond basic reporting — employing machine learning and AI to uncover hidden patterns, predict future trends, and drive proactive decisions.",
    icon: (
      <Clock size={32} color="#2f6bff" strokeWidth={1.8} aria-hidden="true" />
    ),
  },
  {
    title: "Stay Ahead of the Curve",
    tint: "#ede9fe",
    body: "Our team constantly explores and implements the latest BI tools and technologies to ensure you have a future-proof, scalable solution.",
    icon: (
      <TrendingUp
        size={32}
        color="#4f46e5"
        strokeWidth={1.8}
        aria-hidden="true"
      />
    ),
  },
  {
    title: "Real-Time Analytics",
    tint: "#d1fae5",
    body: "Leverage in-memory computing and real-time data pipelines for instant insights that fuel faster, better decision-making at every level.",
    icon: (
      <CheckCircle
        size={32}
        color="#10b981"
        strokeWidth={1.8}
        aria-hidden="true"
      />
    ),
  },
  {
    title: "Exceptional User Experiences",
    tint: "#ccfbf1",
    body: "Our data visualization experts create intuitive, interactive dashboards that bring your data to life for users of all technical abilities.",
    icon: (
      <BarChart2
        size={32}
        color="#0d9488"
        strokeWidth={1.8}
        aria-hidden="true"
      />
    ),
  },
  {
    title: "Data Security & Governance",
    tint: "#cffafe",
    body: "Row-level security, audit logs, data lineage, and compliance frameworks (GDPR, HIPAA, SOC 2) built in from day one — not bolted on later.",
    icon: <IconShield color="#0891b2" />,
  },
  {
    title: "Certified BI Experts",
    tint: "#dbeafe",
    body: "Power BI, Tableau, and Snowflake certified engineers — plus data architects who've scaled warehouses to billions of rows across 20+ verticals.",
    icon: (
      <Users size={32} color="#1e40af" strokeWidth={1.8} aria-hidden="true" />
    ),
  },
];

const TESTIMONIALS = [
  {
    initials: "DM",
    name: "Diana Morales",
    role: "Chief Data Officer, Retail Group",
    quote:
      "Brilworks consolidated 23 data sources into a single Snowflake warehouse and shipped our executive dashboard suite in 9 weeks. Monthly reporting time dropped from 6 days to 20 minutes.",
  },
  {
    initials: "RK",
    name: "Raj Khanna",
    role: "VP Analytics, FinTech Scale-up",
    quote:
      "We went from ad-hoc spreadsheets to a governed Power BI workspace with 40+ dashboards in four months. The churn-prediction model they built now informs every quarterly retention campaign.",
  },
  {
    initials: "EO",
    name: "Elena Osei",
    role: "Director of Data, Healthcare Network",
    quote:
      "Their team handled the hard parts — HIPAA-compliant data lake, role-based security, clinical KPI modeling — and delivered dashboards our operations leads actually adopted. Self-service is real now.",
  },
];

const HONORS = [
  {
    label: "AWS Advanced Tier Partner",
    icon: (
      <ShieldCheck
        size={20}
        color="#2f6bff"
        strokeWidth={1.8}
        aria-hidden="true"
      />
    ),
  },
  {
    label: "Clutch Global Award 2025",
    icon: (
      <Star size={20} color="#2f6bff" strokeWidth={1.8} aria-hidden="true" />
    ),
  },
  {
    label: "GoodFirms Top Software 2025",
    icon: (
      <Award size={20} color="#2f6bff" strokeWidth={1.8} aria-hidden="true" />
    ),
  },
  {
    label: "SelectedFirms Top 10 2026",
    icon: (
      <LayoutDashboard
        size={20}
        color="#2f6bff"
        strokeWidth={1.8}
        aria-hidden="true"
      />
    ),
  },
  {
    label: "Power BI & Tableau Certified",
    icon: (
      <TrendingUp
        size={20}
        color="#2f6bff"
        strokeWidth={1.8}
        aria-hidden="true"
      />
    ),
  },
];

const INDUSTRIES = [
  {
    label: "FinTech",
    href: "/industry/fintech-software-development/",
    icon: (
      <CreditCard
        size={32}
        color="#2f6bff"
        strokeWidth={1.8}
        aria-hidden="true"
      />
    ),
  },
  {
    label: "Retail",
    href: "/industry/e-commerce-app-development/",
    icon: (
      <ShoppingBag
        size={32}
        color="#f59e0b"
        strokeWidth={1.8}
        aria-hidden="true"
      />
    ),
  },
  {
    label: "Healthcare",
    href: "/industry/healthcare-software-development/",
    icon: (
      <Heart size={32} color="#ef4444" strokeWidth={1.8} aria-hidden="true" />
    ),
  },
  {
    label: "Manufacturing",
    href: "/industry/manufacturing-software-development-services/",
    icon: (
      <Wrench size={32} color="#0d9488" strokeWidth={1.8} aria-hidden="true" />
    ),
  },
  {
    label: "Logistics",
    href: "/industry/fleet-management-software-development/",
    icon: (
      <Truck size={32} color="#0891b2" strokeWidth={1.8} aria-hidden="true" />
    ),
  },
  {
    label: "SaaS",
    href: "/saas-application-development-services/",
    icon: (
      <Cloud size={32} color="#4f46e5" strokeWidth={1.8} aria-hidden="true" />
    ),
  },
];

const FAQ = [
  {
    q: "How can your BI services benefit my business?",
    a: "Our BI services improve decision-making with real-time insights, increase efficiency by streamlining processes, enhance customer satisfaction through deeper behavior understanding, reduce costs by surfacing savings opportunities, and give you a competitive advantage through data-driven strategy.",
  },
  {
    q: "Do I need a specific data infrastructure for BI?",
    a: "Not necessarily. While a well-defined data warehouse or data lake accelerates things, many BI solutions can work with your existing data sources. We assess your current infrastructure and propose the best approach for your needs and budget.",
  },
  {
    q: "What kind of data can be used for BI?",
    a: "Almost any data relevant to your business operations — sales, customer, marketing, financial, operational, product usage, third-party APIs, IoT telemetry, and more. We specialize in unifying fragmented sources into a single analytical model.",
  },
  {
    q: "What BI tools do you use?",
    a: "We have deep expertise across Power BI, Tableau, Qlik, Looker, and Metabase — plus cloud warehouses like Snowflake, BigQuery, and Redshift. We choose the right tool combination to fit your stack, skill set, and budget.",
  },
  {
    q: "How long does it take to implement a BI solution?",
    a: "Timelines vary by scope. A focused executive dashboard on existing data ships in 4-6 weeks. A full data warehouse build with dashboards typically takes 3-6 months. We share a realistic timeline after the initial discovery call.",
  },
  {
    q: "Do you offer ongoing support after implementation?",
    a: "Yes. We offer ongoing support and maintenance — training your staff, integrating new data sources, updating dashboards as your business grows, and scaling the warehouse as data volumes increase.",
  },
  {
    q: "What are your fees for BI services?",
    a: "Our fees are tailored to your specific project requirements. We offer fixed-fee projects (starting around $20K for focused dashboards), hourly rates for ongoing work, and retainer agreements for long-term partnerships.",
  },
];

const SERVICES = [
  {
    title: "BI Strategy & Roadmap Development",
    body: "We work collaboratively to define your BI goals, assess your data landscape, and create a customized roadmap for success — aligning KPIs, data sources, and stakeholder priorities into an executable plan.",
    features: [
      "KPI discovery & data landscape audit",
      "Prioritized dashboard roadmap",
      "Tool selection (Power BI / Tableau / Qlik)",
    ],
    image: "/images/v2/bi_strategy_roadmap.webp",
    imageBg: "linear-gradient(135deg, #f0f7ff 0%, #e0ecfc 100%)",
    padMockup: true,
    reverse: false,
  },
  {
    title: "Data Lake & Data Warehouse Architecture",
    body: "We design and implement robust data storage solutions tailored to your specific needs and scalability requirements — Snowflake, Redshift, BigQuery, or lakehouse architectures with dbt, Airflow, and Fivetran.",
    features: [
      "Cloud warehouses: Snowflake, Redshift, BigQuery",
      "ELT pipelines with dbt, Airflow, Fivetran",
      "Data modeling & performance tuning",
    ],
    image: "/images/v2/data_lake_data_warehouse.webp",
    imageBg: "linear-gradient(135deg, #f5f3ff 0%, #ddd6fe 100%)",
    padMockup: true,
    reverse: true,
  },
  {
    title: "Custom Analytics Dashboard Development",
    body: "Our team creates interactive dashboards tailored to your KPIs, providing real-time insights at your fingertips. Executive dashboards, operational dashboards, and embedded analytics — built for the decisions you actually make.",
    features: [
      "Executive, operational & embedded dashboards",
      "Real-time KPIs with sub-second refresh",
      "Role-based views & drill-down analytics",
    ],
    image: "/images/v2/custom_analytics_dashboard.webp",
    imageBg: "linear-gradient(135deg, #ecfdf5 0%, #bbf7d0 100%)",
    padMockup: true,
    reverse: false,
  },
  {
    title: "Self-Service BI & Data Governance",
    body: "We empower your users with self-service BI tools while establishing robust data governance frameworks for data security and quality — so business users get answers fast without compromising on accuracy or compliance.",
    features: [
      "Self-service dashboard authoring & training",
      "Data catalog, lineage & quality monitoring",
      "Row-level security & GDPR / HIPAA compliance",
    ],
    image: "/images/v2/self_service_bi.webp",
    imageBg: "linear-gradient(135deg, #f0fdfa 0%, #99f6e4 100%)",
    padMockup: false,
    reverse: true,
  },
  {
    title: "Predictive Analytics & Machine Learning",
    body: "We leverage advanced analytics and machine learning to uncover hidden patterns, predict future trends, and optimize business processes — churn prediction, demand forecasting, fraud detection, and customer segmentation.",
    features: [
      "Demand forecasting & churn prediction",
      "Customer segmentation & LTV modeling",
      "Production ML pipelines with MLOps",
    ],
    image: "/images/v2/predictive_analytics.webp",
    imageBg: "linear-gradient(135deg, #ecfeff 0%, #a5f3fc 100%)",
    padMockup: true,
    reverse: false,
  },
  {
    title: "Power BI & Tableau Expertise",
    body: "Our team is proficient in leading BI platforms like Power BI, Tableau, and Qlik — and we help you pick the right tool for your stack, cost structure, and team skill. Certified developers, production-grade deployments.",
    features: [
      "Power BI, Tableau, Qlik, Looker implementation",
      "Custom visuals, DAX, calculated fields",
      "Workspace governance & deployment pipelines",
    ],
    image: "/images/v2/power_bi_tableau.webp",
    imageBg: "linear-gradient(135deg, #ecfeff 0%, #a5f3fc 100%)",
    padMockup: false,
    reverse: true,
  },
];

// ---------- Page ----------
const BusinessDevelopmentService = () => {
  return (
    <>
      {/* HERO */}
      <section
        className="relative overflow-hidden svc-hero-bg"
        style={{ padding: "120px 0 80px" }}
      >
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div
            className="grid gap-10 lg:gap-[60px] items-center"
            style={{ gridTemplateColumns: "1fr" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-[60px] items-center">
              <div>
                <span
                  className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-6 text-[12px] font-semibold uppercase border"
                  style={{
                    background: "#ffffff",
                    borderColor: "#e4eaf1",
                    color: "#566678",
                    letterSpacing: "0.1em",
                    boxShadow: "0 1px 2px rgba(11, 30, 51, 0.05)",
                  }}
                >
                  <IconChartUp /> Business Intelligence Services
                </span>
                <h1
                  className="font-extrabold mb-5"
                  style={{
                    fontSize: "clamp(34px, 4vw, 54px)",
                    letterSpacing: "-1.5px",
                    lineHeight: 1.1,
                    color: "#0b1e33",
                  }}
                >
                  Turn Your Data Into{" "}
                  <span style={{ color: "#2f6bff" }}>
                    Decisions That Drive Revenue
                  </span>
                </h1>
                <p
                  className="mb-8"
                  style={{
                    fontSize: 18,
                    lineHeight: 1.7,
                    color: "#566678",
                    maxWidth: 580,
                  }}
                >
                  We design the warehouse, build the pipelines, and ship the
                  dashboards your execs actually open. 100+ dashboards shipped,
                  50+ data sources integrated, sub-second query response across
                  FinTech, Retail, and Healthcare.
                </p>
                <div className="flex flex-wrap gap-3.5 my-10">
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:opacity-90 hover:-translate-y-0.5"
                    style={{
                      background: "#2f6bff",
                      color: "#fff",
                      border: "1px solid #2f6bff",
                      padding: "16px 32px",
                      fontSize: 16,
                    }}
                  >
                    Get My Free BI Consultation <IconArrowRight />
                  </Link>
                  <Link
                    href="#services"
                    className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:bg-black/5"
                    style={{
                      background: "transparent",
                      color: "#0b1e33",
                      border: "1px solid #e4eaf1",
                      padding: "16px 32px",
                      fontSize: 16,
                    }}
                  >
                    See Our BI Capabilities
                  </Link>
                </div>
                <div
                  className="flex flex-wrap gap-[18px]"
                  style={{ color: "#6b7a8a", fontSize: 14 }}
                >
                  {[
                    "Free 30-min data audit",
                    "Dashboard proposal in 48h",
                    "No commitment",
                  ].map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-2"
                      style={{ color: "#6b7a8a" }}
                    >
                      <span style={{ color: "#16a34a" }}>
                        <IconCheck />
                      </span>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="grid grid-cols-2 gap-4">
                  {HERO_STATS.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-2xl transition-all svc-stat-card"
                      style={{ padding: "28px 24px" }}
                    >
                      <div
                        className="font-extrabold leading-none mb-2"
                        style={{
                          color: "#2f6bff",
                          fontSize: "clamp(32px, 3vw, 42px)",
                          letterSpacing: "-1px",
                        }}
                      >
                        {s.value}
                      </div>
                      <div
                        style={{
                          color: "#6b7a8a",
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
        </div>
      </section>

      {/* TRUST BAR */}
      <section
        aria-label="Trust indicators"
        style={{
          background: "#ffffff",
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
        style={{ background: "#f1f5fb" }}
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
                color: "#2f6bff",
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
              Our Business Intelligence Services
            </h2>
            <p
              className="mt-4"
              style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}
            >
              End-to-end BI — from data strategy and warehouse architecture to
              production dashboards, self-service analytics, and predictive ML
              models.
            </p>
          </div>

          {SERVICES.map((svc) => (
            <div
              key={svc.title}
              className="grid items-center gap-8 lg:gap-[60px] py-10 lg:py-12"
              style={{ gridTemplateColumns: "1fr" }}
            >
              <div
                className={`grid items-center gap-8 lg:gap-[60px] grid-cols-1 lg:grid-cols-2 ${svc.reverse ? "lg:[direction:rtl]" : ""}`}
              >
                <div
                  className={`${svc.reverse ? "lg:[direction:ltr]" : ""}`}
                  style={{ direction: "ltr" }}
                >
                  <div className="w-full overflow-hidden rounded-2xl relative">
                    <Image
                      src={svc.image}
                      alt={svc.title}
                      width={200}
                      height={120}
                      className="object-cover"
                    />
                  </div>
                </div>
                <div
                  className={`${svc.reverse ? "lg:[direction:ltr]" : ""}`}
                  style={{ direction: "ltr" }}
                >
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
                    style={{ fontSize: 16, lineHeight: 1.7, color: "#6b7280" }}
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
                            color: "#2f6bff",
                            flexShrink: 0,
                            marginTop: 2,
                          }}
                        >
                          <IconCheck />
                        </span>
                        {f}
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
      <section
        className="relative overflow-hidden text-center svc-mid-cta-bg"
        style={{ padding: "56px 0" }}
      >
        <div className="absolute inset-0 pointer-events-none svc-mid-cta-glow" />
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
            Ready to Unlock Insights From Your Data?
          </h3>
          <p
            className="mb-7"
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: 16,
              lineHeight: 1.7,
            }}
          >
            Get a free 30-minute data audit with our BI team. We&apos;ll review
            your data sources, suggest a dashboard roadmap, and estimate your
            implementation timeline — no commitment.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:!bg-[#0b1e33] hover:!text-white hover:!border-[#0b1e33] mt-5"
            style={{
              background: "#fff",
              color: "#2f6bff",
              border: "1px solid #fff",
              padding: "16px 32px",
              fontSize: 16,
            }}
          >
            Book My Free Data Audit
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
                color: "#2f6bff",
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
              BI Built by Data Engineers Who&apos;ve Shipped 100+ Dashboards
            </h2>
            <p
              className="mt-4"
              style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}
            >
              We don&apos;t just wire up charts — we model your warehouse,
              govern your data, and deliver dashboards your execs actually open
              on Monday mornings.
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

      {/* TESTIMONIALS */}
      <section className="relative overflow-hidden py-16 md:py-24 svc-dark-section-bg">
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
                color: "#2f6bff",
              }}
            >
              Client Stories
            </span>
            <h2
              className="font-extrabold"
              style={{
                fontSize: "clamp(28px, 3.2vw, 42px)",
                letterSpacing: "-1px",
                lineHeight: 1.15,
                color: "#0b1e33",
              }}
            >
              What Data Leaders Say About Us
            </h2>
            <p
              className="mt-4"
              style={{ fontSize: 17, lineHeight: 1.7, color: "#566678" }}
            >
              Real outcomes from CDOs, VPs of Analytics, and Data Directors
              across FinTech, Retail, and Healthcare.
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
                  background: "#ffffff",
                  border: "1px solid #e4eaf1",
                  padding: "32px 28px",
                  boxShadow: "0 1px 2px rgba(11, 30, 51, 0.05)",
                }}
              >
                <div className="flex gap-0.5 mb-4" style={{ color: "#facc15" }}>
                  {[0, 1, 2, 3, 4].map((i) => (
                    <IconStarFilled key={i} />
                  ))}
                </div>
                <p
                  className="mb-6"
                  style={{ color: "#0b1e33", fontSize: 15, lineHeight: 1.7 }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="rounded-full flex items-center justify-center font-bold text-white"
                    style={{
                      width: 44,
                      height: 44,
                      background: "linear-gradient(135deg, #2f6bff, #1e4fd6)",
                      fontSize: 16,
                    }}
                  >
                    {t.initials}
                  </div>
                  <div className="flex flex-col">
                    <span
                      className="font-semibold"
                      style={{ fontSize: 14, color: "#0b1e33" }}
                    >
                      {t.name}
                    </span>
                    <span style={{ color: "#6b7a8a", fontSize: 12 }}>
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
      <section className="py-16" style={{ background: "#f1f5fb" }}>
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
                color: "#2f6bff",
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

      {/* INDUSTRIES */}
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
                color: "#2f6bff",
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
              Data-Heavy Verticals Where BI Drives ROI
            </h2>
            <p
              className="mt-4"
              style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}
            >
              We&apos;ve shipped BI solutions for regulated, data-intensive
              industries — bringing both analytics engineering depth and domain
              knowledge.
            </p>
          </div>
          <div
            className="grid gap-4"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            }}
          >
            {INDUSTRIES.map((ind) => (
              <Link
                key={ind.label}
                href={ind.href}
                className="text-center transition-all hover:-translate-y-0.5"
                style={{
                  background: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: 14,
                  padding: "24px 16px",
                  textDecoration: "none",
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24" style={{ background: "#f1f5fb" }}>
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="text-center mx-auto mb-14" style={{ maxWidth: 720 }}>
            <span
              className="inline-block mb-4"
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#2f6bff",
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
              Frequently Asked Questions
            </h2>
            <p
              className="mt-4"
              style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}
            >
              Everything data leaders typically ask before starting a BI
              engagement.
            </p>
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
          title="Ready to Unlock Your Data?"
          description="You're one conversation away from turning raw data into revenue decisions. Tell us about your data stack — we'll show you how we can help."
          messageRequired={false}
          submitLabel="Get My Free BI Consultation"
          bgClassName="svc-mid-cta-bg"
          benefits={[
            "Free 30-minute data audit with a senior BI engineer",
            "Custom BI roadmap & dashboard proposal in 48 hours",
            "Tool-agnostic recommendation (Power BI / Tableau / Qlik)",
            "NDA signed before any data review",
            "Certified experts across BI, data engineering, and ML",
          ]}
        />
      </div>
    </>
  );
};

export default BusinessDevelopmentService;
