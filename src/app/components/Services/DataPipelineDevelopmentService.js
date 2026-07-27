"use client";
import dynamic from "next/dynamic";
import {
  Workflow,
  ShieldCheck,
  Layers,
  ClipboardCheck,
  Eye,
  RefreshCw,
  Wrench,
  ArrowRightLeft,
  Bell,
  Gauge,
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
  { value: "60+", label: "Pipelines in production", accent: true },
  { value: "2.4B", label: "Rows processed daily", accent: false },
  { value: "99.8%", label: "Pipeline uptime", accent: false },
  { value: "3 wks", label: "Avg. build time", accent: true },
];

const SERVICES = [
  {
    title: "Data ingestion frameworks",
    body: "The layer that pulls data in from APIs, databases, files, and streams. We build it as a framework, not a pile of one-off scripts, so adding the next source is a config change, not a rebuild.",
    features: [
      "Reusable connectors, not one-off scripts",
      "Handles schema drift without silent failures",
      "Incremental loads, not full reloads every night",
    ],
    image: "/images/v2/databse-integration.webp",
    reverse: false,
  },
  {
    title: "ETL / ELT development",
    body: "The transformation logic that turns raw data into something your business can use. We build on dbt, Airflow, and Spark, and we push transformation into the warehouse where it belongs. Batch and streaming both.",
    features: [
      "dbt-first, tested transformations",
      "ELT into the warehouse, not brittle external ETL",
      "Documented models your team can extend",
    ],
    image: "/images/v2/data_pipeline.webp",
    reverse: true,
  },
  {
    title: "Workflow orchestration",
    body: "The scheduler that runs it all in the right order and tells you the moment something breaks. We build on Airflow or Dagster, with retries, backfills, and alerting that actually reaches a human.",
    features: [
      "Dependency-aware scheduling, no cron spaghetti",
      "Automatic retries and clean backfills",
      "Alerting that reaches a person, not a dead inbox",
    ],
    image: "/images/v2/ci_cd_pipeline.webp",
    reverse: false,
  },
  {
    title: "Pipeline testing and observability",
    body: "The part everyone skips until a bad number reaches the CEO's dashboard. We build data quality tests, freshness checks, and lineage in from the start, so you catch a broken pipeline before your stakeholders do.",
    features: [
      "Data quality tests on every critical model",
      "Freshness and volume checks, not just \"did it run\"",
      "Lineage so you can trace a bad number to its source",
    ],
    image: "/images/v2/quality-assurance.webp",
    reverse: true,
  },
];

const BENEFITS = [
  {
    title: "Built as frameworks",
    tint: "#e8f0fd",
    body: "Reusable ingestion, not a pile of one-off scripts.",
    icon: <Layers size={32} color="#017eeb" />,
  },
  {
    title: "Tested by default",
    tint: "#ede9fe",
    body: "Data quality and freshness checks on every critical model.",
    icon: <ClipboardCheck size={32} color="#4f46e5" />,
  },
  {
    title: "Observable end to end",
    tint: "#d1fae5",
    body: "You see a break before your stakeholders do.",
    icon: <Eye size={32} color="#10b981" />,
  },
  {
    title: "Survives schema drift",
    tint: "#ccfbf1",
    body: "Handles source changes without silent failures.",
    icon: <RefreshCw size={32} color="#0d9488" />,
  },
  {
    title: "Debuggable after handoff",
    tint: "#cffafe",
    body: "Your team can trace and fix it, not just us.",
    icon: <Wrench size={32} color="#0891b2" />,
  },
  {
    title: "Incremental, not brute",
    tint: "#dbeafe",
    body: "Incremental loads, not a full reload every night.",
    icon: <ArrowRightLeft size={32} color="#1e40af" />,
  },
  {
    title: "Alerting that works",
    tint: "#e8f0fd",
    body: "Failures reach a human, not a dead inbox.",
    icon: <Bell size={32} color="#017eeb" />,
  },
  {
    title: "Tuned for real volume",
    tint: "#ede9fe",
    body: "Built for production load, not a sample dataset.",
    icon: <Gauge size={32} color="#4f46e5" />,
  },
];

const TESTIMONIALS = [
  {
    initials: "AC",
    name: "Angela Cruz",
    role: "Head of Data Platform, Logistics",
    quote:
      "We went from a pipeline breaking every other night to 99.9% uptime for two straight quarters.",
  },
  {
    initials: "BF",
    name: "Ben Fischer",
    role: "Director of Analytics, Fintech",
    quote:
      "The freshness check caught a stale feed before it hit the board deck. That alone justified the engagement.",
  },
  {
    initials: "NS",
    name: "Naomi Silva",
    role: "Data Engineering Lead, SaaS",
    quote:
      "They handed it over documented and tested. Our own team was debugging it confidently within a week.",
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
    icon: ShieldCheck,
    name: "Data Quality Assessment",
    href: "/data-engineering-tools/data-quality-assessment/",
  },
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
    icon: Cpu,
    name: "AI Readiness Audit",
    href: "/data-engineering-tools/ai-readiness-audit/",
  },
];

const FAQ = [
  {
    q: "What is data pipeline development?",
    a: "Building the systems that move data from your source systems into a warehouse or lakehouse, transform it along the way, and run on a schedule. Done right, it is ingestion, transformation, orchestration, and testing, not just a script that runs overnight and hopes for the best.",
  },
  {
    q: "What is the difference between ETL and ELT, and which do you build?",
    a: "ETL transforms data before loading it; ELT loads first and transforms inside the warehouse. We default to ELT on modern cloud warehouses because it is cheaper to run and easier to debug. We build ETL when the source or compliance rules require it.",
  },
  {
    q: "My pipelines keep breaking. Can you fix that?",
    a: "Usually, yes. Most breakage traces to a handful of causes: schema drift, no retries, no observability, full reloads that time out. We audit for those, fix the worst first, and build in the testing that stops it recurring.",
  },
  {
    q: "What tools do you build on?",
    a: "dbt for transformation, Airflow or Dagster for orchestration, Spark for heavy or streaming loads, on Snowflake or Databricks. We pick the tool that fits your team, not the one that looks best on a resume.",
  },
  {
    q: "Will my team be able to maintain the pipelines after you leave?",
    a: "That is a design goal, not an afterthought. We build documented, tested, observable pipelines your team can trace and extend. A pipeline only we can run is a liability, not a deliverable.",
  },
  {
    q: "How long does it take to build a pipeline?",
    a: "A first working pipeline in weeks, not quarters. We get real data flowing early, then harden and add testing from there. You get a real timeline after a short scoping call.",
  },
  {
    q: "Do you offer ongoing support after the build?",
    a: "Yes. Many clients keep us on to monitor and extend the pipelines as new sources appear. The build is a one-time cost. Maintenance is not.",
  },
];

const DataPipelineDevelopmentService = () => {
  return (
    <>
      <ServiceHero
        label="Data Pipeline Development"
        labelIcon={<Workflow size={14} color="#2f6bff" />}
        titleLead="Data Pipelines That"
        titleAccent="Do Not Break at 3am"
        subhead="We build and maintain the pipelines that feed your warehouse. Ingestion, ETL/ELT, transformation, and orchestration, tuned to hold up when volume and table count climb, not just on sample data."
        primaryCta={{ label: "Talk to an Engineer", href: "#contact" }}
        secondaryCta={{ label: "See what we build", href: "#services" }}
        trustPoints={[
          "Tested and observable end to end, not fire-and-forget",
          "Built to survive schema drift and volume spikes",
          "Debuggable by your team after handoff",
        ]}
        stats={HERO_STATS}
      />

      <ServiceTrustBar items={TRUST} />

      <ServiceCoreOfferings
        id="services"
        sectionLabel="What We Build"
        heading="Core Data Pipeline Development Services"
        subhead="Everything between your source systems and a warehouse your analysts trust, built so it keeps running after we hand it over."
        items={SERVICES}
      />

      <ServiceMidCta
        headline="Pipelines breaking more than they run?"
        pitch="Most pipeline pain comes from a handful of predictable failure points. Our free pipeline audit finds yours, and tells you what to fix first."
        buttonLabel="Get a Pipeline Audit"
        buttonHref="#contact"
      />

      <ServiceWhyUs
        sectionLabel="Why Brilworks"
        heading="Engineers who build pipelines that stay built"
        subhead="Anyone can wire up a pipeline that works on a demo. We build the ones that hold up at 2 billion rows a day."
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
        subhead="Free calculators and assessments for data teams. Get numbers in minutes, no sales call required."
        tools={TOOLS}
        exploreHref="/data-engineering-tools/"
      />

      <ServiceIndustries
        sectionLabel="Industries We Serve"
        heading="Data Pipelines Built for Your Vertical"
        subhead="Ingestion and transformation patterns differ by industry. We have shipped in each of these."
        items={INDUSTRIES}
      />

      <ServiceFaq
        sectionLabel="Common Questions"
        heading="Data Pipeline Development Services, Answered"
        faqs={FAQ}
        idPrefix="data-pipeline"
      />

      {/* CONTACT FORM */}
      <div id="contact">
        <SolutionContactForm
          title="Ready to stop firefighting your pipelines?"
          description="One conversation is enough to know whether we are the right fit. Tell us where your pipelines break or what you need to build, and we will point you to the first fix."
          messageRequired={false}
          submitLabel="Talk to an Engineer"
          bgClassName="svc-mid-cta-bg"
          benefits={[
            "Free consultation with a senior data engineer",
            "Free pipeline audit that flags the worst breakpoints",
            "Your cloud, your repo — zero lock-in",
            "Certified on Snowflake and Databricks",
            "Response guaranteed within 24 business hours",
          ]}
        />
      </div>
    </>
  );
};

export default DataPipelineDevelopmentService;
