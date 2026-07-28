"use client";
import dynamic from "next/dynamic";
import {
  Cloud,
  ShieldCheck,
  Activity,
  CircleDollarSign,
  Layers,
  Scale,
  Lock,
  Clock,
  Zap,
  Cpu,
  BadgeCheck,
  Star,
  Award,
  Landmark,
  HeartPulse,
  ShoppingCart,
  Truck,
  Factory,
  BarChart3,
  Calculator,
  GitCompare,
  ArrowRightLeft,
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
  { value: "45+", label: "Platforms built", accent: true },
  { value: "2.4B", label: "Rows processed daily", accent: false },
  { value: "99.8%", label: "Pipeline uptime", accent: false },
  { value: "20–40%", label: "Cost cut", accent: true },
];

const SERVICES = [
  {
    title: "Cloud data warehousing",
    body: "The single source of truth your BI and analytics run on. We build it on Snowflake or Databricks SQL, model it so the same number means one thing everywhere, and tune it so the query bill does not surprise you.",
    features: [
      "Modeled once, trusted everywhere",
      "Warehouse right-sizing and cost tuning built in",
      "Governed access from day one",
    ],
    image: "/images/v2/data_lake_data_warehouse.webp",
    reverse: false,
  },
  {
    title: "Data lakehouse implementation",
    body: "One platform for both raw and structured data, so your team stops copying data between a lake and a warehouse. We build it on Databricks, tuned for the workloads you actually run.",
    features: [
      "Batch and streaming on one platform",
      "Delta / open-table format, no lock-in",
      "Built to scale without a re-architecture",
    ],
    image: "/images/v2/data_lakehouse.webp",
    reverse: true,
  },
  {
    title: "Real-time data platforms",
    body: "When batch is too slow, we build streaming pipelines that feed your warehouse on Spark, Flink, or Kafka. Tuned to hold up when volume and table count climb, not just on sample data.",
    features: [
      "Streaming ingestion that survives real load",
      "Debugged and observable end to end",
      "Built so your team can run it after handoff",
    ],
    image: "/images/v2/data_pipeline.webp",
    reverse: false,
  },
  {
    title: "Multi-cloud data solutions",
    body: "If your data lives across AWS, Azure, and GCP, we build the platform that spans them without turning into a maze. One place to govern, one place to see cost.",
    features: [
      "Vendor-neutral, no forced consolidation",
      "Unified governance across clouds",
      "Cost visibility in one place, not three bills",
    ],
    image: "/images/v2/cloud_migration.webp",
    reverse: true,
  },
];

const BENEFITS = [
  {
    title: "Certified on both platforms",
    tint: "#e8f0fd",
    body: "Snowflake and Databricks certified, with production shipping history.",
    icon: <ShieldCheck size={32} color="#017eeb" />,
  },
  {
    title: "Built to survive volume",
    tint: "#ede9fe",
    body: "Tuned for real load and table count, not a demo dataset.",
    icon: <Activity size={32} color="#4f46e5" />,
  },
  {
    title: "Cost-tuned from day one",
    tint: "#d1fae5",
    body: "Right-sizing and spend tuning built in, not bolted on later.",
    icon: <CircleDollarSign size={32} color="#10b981" />,
  },
  {
    title: "Full scope, one team",
    tint: "#ccfbf1",
    body: "Ingestion, pipelines, warehouse, governance. No handoff between vendors.",
    icon: <Layers size={32} color="#0d9488" />,
  },
  {
    title: "Vendor-neutral",
    tint: "#cffafe",
    body: "We build on the platform that fits, not the one we resell.",
    icon: <Scale size={32} color="#0891b2" />,
  },
  {
    title: "Governance from day one",
    tint: "#dbeafe",
    body: "Access and quality designed in, not patched in month six.",
    icon: <Lock size={32} color="#1e40af" />,
  },
  {
    title: "Ships in weeks",
    tint: "#e8f0fd",
    body: "Built in weeks, not quarters. You see working data early.",
    icon: <Clock size={32} color="#017eeb" />,
  },
  {
    title: "Real-time when it matters",
    tint: "#ede9fe",
    body: "Streaming for the workloads that cannot wait for a nightly batch.",
    icon: <Zap size={32} color="#4f46e5" />,
  },
];

const TESTIMONIALS = [
  {
    initials: "RP",
    name: "Raj Patel",
    role: "Director of Engineering, Logistics Platform",
    quote:
      "The platform held up the first time our peak-season volume hit it. No 2am pages, no manual intervention.",
  },
  {
    initials: "MT",
    name: "Michelle Tan",
    role: "VP Data, E-Commerce",
    quote:
      "Our Databricks bill dropped 32% the month after the build finished. Nothing our analysts touched changed.",
  },
  {
    initials: "TR",
    name: "Tom Reyes",
    role: "CTO, Fintech SaaS",
    quote:
      "Six weeks from kickoff to a working warehouse. One team the whole way, ingestion through governance.",
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
    icon: ArrowRightLeft,
    name: "Migration Cost Calculator",
    href: "/data-engineering-tools/data-migration-cost-calculator/",
  },
  {
    icon: GitCompare,
    name: "Snowflake vs Databricks Advisor",
    href: "/data-engineering-tools/snowflake-vs-databricks-advisor/",
  },
  {
    icon: ShieldCheck,
    name: "Data Quality Assessment",
    href: "/data-engineering-tools/data-quality-assessment/",
  },
  {
    icon: Cpu,
    name: "AI Readiness Audit",
    href: "/data-engineering-tools/ai-readiness-audit/",
  },
];

const FAQ = [
  {
    q: "What is cloud data engineering?",
    a: "Building and running the data platform your company lives on in the cloud: the pipelines that move data in, the warehouse or lakehouse that stores it, and the tuning that keeps it fast and affordable. We build it on Snowflake and Databricks.",
  },
  {
    q: "Do you work on Snowflake, Databricks, or both?",
    a: "Both, and we are certified on each. We recommend the one that fits your workloads and budget, not the one we would prefer to sell. Sometimes the answer is both.",
  },
  {
    q: "How much does a cloud data platform cost to build?",
    a: "It depends on sources, volume, and how much needs to be real-time. We give you a real number after a short scoping call, not a range. The cost audit is a good first step.",
  },
  {
    q: "How long does a build take?",
    a: "Weeks, not quarters, for a first working platform. You see real data flowing early, then we harden and tune from there rather than disappearing for a quarter.",
  },
  {
    q: "Can you cut our existing cloud data bill?",
    a: "Usually. Overspend of 20 to 40 percent is common from oversized warehouses and untuned queries. The free cost audit finds where, and often pays for itself.",
  },
  {
    q: "Which cloud do you build on?",
    a: "AWS, Azure, or GCP, and multi-cloud where your data already spans them. We stay vendor-neutral and build where your data and budget make sense.",
  },
  {
    q: "Do you offer ongoing support after the build?",
    a: "Yes. Most clients keep us on to run and tune the platform after launch. The build is a one-time cost. Keeping it healthy is not, and we stay on for that.",
  },
];

const CloudDataEngineeringService = () => {
  return (
    <>
      <ServiceHero
        label="Cloud Data Engineering"
        labelIcon={<Cloud size={14} color="#2f6bff" />}
        titleLead="Next-Gen Cloud Data Platform"
        titleAccent="Built for Performance"
        subhead="We design, build, and run cloud data platforms on Snowflake and Databricks. Warehousing, lakehouse, and real-time pipelines, tuned to hold up under real volume and stay cheap to run."
        primaryCta={{ label: "Talk to an Engineer", href: "#contact" }}
        secondaryCta={{ label: "See what we build", href: "#services" }}
        trustPoints={[
          "Certified on Snowflake and Databricks",
          "Built to survive real volume, not a demo",
          "Cost-tuned from day one, not after the first bill",
        ]}
        stats={HERO_STATS}
      />

      <ServiceTrustBar items={TRUST} />

      <ServiceCoreOfferings
        id="services"
        sectionLabel="What We Build"
        heading="Core Cloud Data Engineering Services"
        subhead="The cloud data layer, from raw sources to a warehouse your analysts trust, built to run on top of Snowflake and Databricks."
        items={SERVICES}
      />

      <ServiceMidCta
        headline="Overpaying on Snowflake or Databricks?"
        pitch="Your cloud data spend is probably 20 to 40 percent higher than it needs to be. Our free cost audit finds where, and usually pays for itself."
        buttonLabel="Get a Cost Audit"
        buttonHref="#contact"
      />

      <ServiceWhyUs
        sectionLabel="Why Brilworks"
        heading="Engineers who build it, then keep it running"
        subhead="We do not hand over a diagram. We ship the platform and stand behind the numbers it produces."
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
        heading="Cloud Data Engineering Built for Your Vertical"
        subhead="Pipeline and platform patterns differ by industry. We have shipped in each of these."
        items={INDUSTRIES}
      />

      <ServiceFaq
        sectionLabel="Common Questions"
        heading="Cloud Data Engineering Services, Answered"
        faqs={FAQ}
        idPrefix="cloud-data-eng"
      />

      {/* CONTACT FORM */}
      <div id="contact">
        <SolutionContactForm
          title="Ready to put your data to work?"
          description="One conversation is enough to know whether we are the right fit. Tell us what you are building or what is costing too much, and we will point you to the offer that fits."
          messageRequired={false}
          submitLabel="Talk to an Engineer"
          bgClassName="svc-mid-cta-bg"
          benefits={[
            "Free consultation with a senior data engineer",
            "Free cost audit that usually pays for itself",
            "Your cloud, your repo — zero lock-in",
            "Certified on Snowflake and Databricks",
            "Response guaranteed within 24 business hours",
          ]}
        />
      </div>
    </>
  );
};

export default CloudDataEngineeringService;
