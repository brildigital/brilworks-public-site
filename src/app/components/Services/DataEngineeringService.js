"use client";
import dynamic from "next/dynamic";
import {
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
  Star,
  Landmark,
  HeartPulse,
  ShoppingCart,
  Truck,
  Factory,
  Calculator,
  ArrowRightLeft,
  GitCompare,
} from "lucide-react";
import ServiceHero from "./common/ServiceHero";
import ServiceTrustBar from "./common/ServiceTrustBar";
import ServiceCoreOfferings from "./common/ServiceCoreOfferings";
import ServiceMidCta from "./common/ServiceMidCta";
import ServiceWhyUs from "./common/ServiceWhyUs";
import ServiceTestimonials from "./common/ServiceTestimonials";
import ServiceHonors from "./common/ServiceHonors";
import ServiceFreeTools from "./common/ServiceFreeTools";
import ServiceIndustries from "./common/ServiceIndustries";
import ServiceFaq from "./common/ServiceFaq";
import "../../styles/ServiceLightTheme.css";

const SolutionContactForm = dynamic(
  () => import("../Solution/SolutionContactForm"),
);

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
    image: "/images/v2/data_platform_migration.webp",
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
    image: "/images/v2/data_pipeline.webp",
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
    image: "/images/v2/data_cost_optimization.webp",
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
    image: "/images/v2/aiml_data_foundation.webp",
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
      <ServiceHero
        label="Data Engineering Services"
        labelIcon={<Layers size={14} color="#2f6bff" />}
        titleLead="Data Engineering Services that"
        titleAccent="Cut Cost and Ship AI."
        subhead="Brilworks unifies your data on Snowflake and Databricks, cuts what you overspend to run it, and gets AI into production on data your teams can trust."
        primaryCta={{ label: "Talk to an Expert", href: "#contact" }}
        secondaryCta={{ label: "See what we do", href: "#services" }}
        trustPoints={[
          "Fixed-price cost audit that pays for itself",
          "Your cloud, your repo, no lock-in",
          "Certified on Snowflake and Databricks",
        ]}
        stats={HERO_STATS}
      />

      <ServiceTrustBar items={TRUST} />

      <ServiceCoreOfferings
        id="services"
        sectionLabel="What We Build"
        heading="Core Data Engineering Services"
        subhead="Full-lifecycle data engineering, from the pipeline that ingests raw data to the AI layer that runs on top of it."
        items={SERVICES}
      />

      <ServiceMidCta
        headline="Not sure where to start? Start with the bill."
        pitch="Your Snowflake or Databricks spend is probably 20 to 40% higher than it needs to be. Our fixed-price Cost-Optimization Audit finds where, and usually pays for itself."
        buttonLabel="Get a Cost Audit"
        buttonHref="#contact"
      />

      <ServiceWhyUs
        sectionLabel="Why Brilworks"
        heading="Data engineers who ship, then stay accountable"
        subhead="We do not just hand over a diagram. We engineer the platform and stand behind the numbers it produces."
        items={BENEFITS}
      />

      <ServiceTestimonials
        sectionLabel="Client Stories"
        heading="What Data Leaders Say"
        subhead="Real words from people who ran our work in production."
        items={TESTIMONIALS}
      />

      <ServiceHonors items={HONORS} />

      <ServiceFreeTools
        sectionLabel="Free Tools"
        heading="Size Up Your Data Stack Before You Commit"
        subhead="Free calculators and assessments for Snowflake and Databricks teams. Get numbers in minutes, no sales call required."
        tools={TOOLS}
        exploreHref="/data-engineering-tools/"
      />

      <ServiceIndustries
        sectionLabel="Industries We Serve"
        heading="Data Engineering Built for Your Vertical"
        subhead="Pipeline patterns differ by industry. We have shipped in each of these."
        items={INDUSTRIES}
      />

      <ServiceFaq
        sectionLabel="Common Questions"
        heading="Data Engineering Services, Answered"
        faqs={FAQ}
        idPrefix="data-eng"
      />

      {/* CONTACT FORM */}
      <div id="contact">
        <SolutionContactForm
          title="Ready to Put Your Data to Work?"
          description="One conversation is enough to know whether we are the right fit. Tell us what you are building or what is costing too much, and we will point you to the offer that fits."
          messageRequired={false}
          submitLabel="Talk to an Expert"
          bgClassName="svc-mid-cta-bg"
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
