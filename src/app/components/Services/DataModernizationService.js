"use client";
import dynamic from "next/dynamic";
import {
  RefreshCw,
  ShieldCheck,
  ListOrdered,
  Database,
  CheckCircle,
  RotateCcw,
  GitCompare,
  CircleDollarSign,
  FileCheck,
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
  { value: "30+", label: "Migrations delivered", accent: true },
  { value: "8B+", label: "Rows migrated", accent: false },
  { value: "100%", label: "Reconciliation match", accent: false },
  { value: "20–35%", label: "Cost cut post-migration", accent: true },
];

const SERVICES = [
  {
    title: "Legacy data migration",
    body: "Moving your data off Teradata, on-prem SQL Server, Oracle, or Hadoop onto Snowflake or Databricks. We migrate in phases, reconcile every table row-by-row, and keep the old system live until the new one has earned your trust.",
    features: [
      "Phased, not big-bang",
      "Row-by-row reconciliation, zero silent loss",
      "Old system stays up until cutover is proven",
    ],
    image: "/images/v2/data_platform_migration.webp",
    reverse: false,
  },
  {
    title: "Data warehouse modernization",
    body: "Replacing a legacy or self-managed warehouse with a cloud-native one. Not a lift-and-shift that carries the old problems across, but a re-model that fixes what was broken before.",
    features: [
      "Re-modeled, not lifted-and-shifted",
      "The old design flaws get fixed, not copied",
      "Cost-tuned so the new bill is lower, not higher",
    ],
    image: "/images/v2/data_warehouse.webp",
    reverse: true,
  },
  {
    title: "Pipeline and workload re-platforming",
    body: "Your ETL jobs, stored procedures, and scheduled workloads rebuilt on modern tooling. We translate legacy logic into dbt, Airflow, and Spark, tested against the old outputs so nothing silently changes.",
    features: [
      "Legacy logic rebuilt, not just relocated",
      "Tested against old outputs, number for number",
      "Documented so your team owns it afterward",
    ],
    image: "/images/v2/migration-and-updation-services.webp",
    reverse: false,
  },
  {
    title: "Migration de-risking and cutover",
    body: "The part that keeps CTOs up at night. We run old and new in parallel, reconcile continuously, and only cut over when the numbers match. Rollback stays possible until you say go.",
    features: [
      "Parallel run before any cutover",
      "Continuous reconciliation, not a one-time check",
      "Rollback available until you are ready",
    ],
    image: "/images/v2/data_migration.webp",
    reverse: true,
  },
];

const BENEFITS = [
  {
    title: "Phased, never big-bang",
    tint: "#e8f0fd",
    body: "We migrate in stages, not one terrifying weekend.",
    icon: <ListOrdered size={32} color="#017eeb" />,
  },
  {
    title: "Old system stays live",
    tint: "#ede9fe",
    body: "The legacy stack runs until the new one is proven.",
    icon: <Database size={32} color="#4f46e5" />,
  },
  {
    title: "Reconciled row-by-row",
    tint: "#d1fae5",
    body: "Every table matched number for number, no silent loss.",
    icon: <CheckCircle size={32} color="#10b981" />,
  },
  {
    title: "Rollback until go",
    tint: "#ccfbf1",
    body: "You can roll back until you say the cutover is done.",
    icon: <RotateCcw size={32} color="#0d9488" />,
  },
  {
    title: "Re-modeled, not lifted",
    tint: "#cffafe",
    body: "We fix the old design flaws, not carry them across.",
    icon: <RefreshCw size={32} color="#0891b2" />,
  },
  {
    title: "Tested against old outputs",
    tint: "#dbeafe",
    body: "New logic matches old numbers before anything switches.",
    icon: <GitCompare size={32} color="#1e40af" />,
  },
  {
    title: "Cost cut, not carried",
    tint: "#e8f0fd",
    body: "The new bill comes in lower, tuned from the start.",
    icon: <CircleDollarSign size={32} color="#017eeb" />,
  },
  {
    title: "Handed over clean",
    tint: "#ede9fe",
    body: "Documented so your team runs it after we leave.",
    icon: <FileCheck size={32} color="#4f46e5" />,
  },
];

const TESTIMONIALS = [
  {
    initials: "CM",
    name: "Carlos Mendez",
    role: "VP Infrastructure, Manufacturing",
    quote:
      "We moved off Teradata with zero downtime. Our ops team did not notice cutover day happened.",
  },
  {
    initials: "JO",
    name: "Julia Owens",
    role: "Data Platform Lead, Healthcare",
    quote:
      "Reconciliation caught a rounding mismatch in a finance table before cutover. We would have gone live with wrong numbers otherwise.",
  },
  {
    initials: "MW",
    name: "Marcus Webb",
    role: "CTO, Insurance SaaS",
    quote:
      "Our new Snowflake bill came in 28% below what we paid for the Hadoop cluster it replaced.",
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
    icon: ArrowRightLeft,
    name: "Migration Cost Calculator",
    href: "/data-engineering-tools/data-migration-cost-calculator/",
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
    icon: Cpu,
    name: "AI Readiness Audit",
    href: "/data-engineering-tools/ai-readiness-audit/",
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
];

const FAQ = [
  {
    q: "What is data modernization?",
    a: "Moving your data off legacy or self-managed systems onto a modern cloud platform, and fixing what was broken in the process. It covers the migration itself, re-modeling the warehouse, and rebuilding the pipelines and workloads that ran on the old stack.",
  },
  {
    q: "What is the difference between data migration and data modernization?",
    a: "Migration is moving the data. Modernization is migration plus fixing the design: a re-model instead of a lift-and-shift, tuned so the new platform is cheaper and cleaner than the old one. We do modernization, because a lift-and-shift just carries the old problems across.",
  },
  {
    q: "How do you migrate without taking the business offline?",
    a: "We run the old and new systems in parallel, migrate in phases, and reconcile every table row-by-row. The legacy system stays live until the new one has proven itself, and rollback stays available until you call the cutover done. No big-bang weekend.",
  },
  {
    q: "What legacy systems do you migrate off?",
    a: "Teradata, on-prem SQL Server, Oracle, Hadoop, and older cloud warehouses. Onto Snowflake or Databricks, whichever fits your workloads and budget.",
  },
  {
    q: "How much does a data migration cost?",
    a: "It depends on data volume, number of workloads, and how much legacy logic needs rebuilding. We give you a real number and a phased plan after a migration assessment, not a scary range with no explanation.",
  },
  {
    q: "How long does a migration take?",
    a: "A phased migration shows working data early and cuts over in stages, so you see progress in weeks, not at the end of a quarter-long black box. Full timeline depends on scope, and you get a real one after assessment.",
  },
  {
    q: "Will our cloud bill go up after modernization?",
    a: "It usually goes down. We tune the new platform from the start rather than carrying the oversized legacy footprint across. If we cannot make the case that the new bill is lower, we will tell you.",
  },
];

const DataModernizationService = () => {
  return (
    <>
      <ServiceHero
        label="Data Modernization"
        labelIcon={<RefreshCw size={14} color="#2f6bff" />}
        titleLead="Move Off Legacy Data Systems"
        titleAccent="Without Stopping the Business"
        subhead="Teradata, on-prem SQL Server, Hadoop, or a legacy warehouse holding you back. We migrate you onto Snowflake or Databricks in phases, with the old system live until you trust the new one."
        primaryCta={{ label: "Talk to an Engineer", href: "#contact" }}
        secondaryCta={{ label: "See how we migrate", href: "#services" }}
        trustPoints={[
          "Phased migration, no big-bang cutover",
          "Old system stays live until you trust the new one",
          "Reconciled row-by-row, zero silent data loss",
        ]}
        stats={HERO_STATS}
      />

      <ServiceTrustBar items={TRUST} />

      <ServiceCoreOfferings
        id="services"
        sectionLabel="What We Do"
        heading="Core Data Modernization Services"
        subhead="The full path off a legacy stack onto a modern cloud platform, sequenced so the business keeps running the whole way."
        items={SERVICES}
      />

      <ServiceMidCta
        headline="Not sure what your migration will cost?"
        pitch="Legacy migrations get quoted with a scary range and no explanation. Our free migration assessment gives you a real number and a phased plan, not a guess."
        buttonLabel="Get a Migration Assessment"
        buttonHref="#contact"
      />

      <ServiceWhyUs
        sectionLabel="Why Brilworks"
        heading="Engineers who migrate without the horror story"
        subhead="Every CTO has heard the migration that took the business offline for a weekend. We build the kind that does not."
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
        heading="Size Up Your Migration Before You Commit"
        subhead="Free calculators and assessments for teams moving off legacy. Get numbers in minutes, no sales call required."
        tools={TOOLS}
        exploreHref="/data-engineering-tools/"
      />

      <ServiceIndustries
        sectionLabel="Industries We Serve"
        heading="Data Modernization Built for Your Vertical"
        subhead="Legacy stacks and migration risks differ by industry. We have migrated teams in each of these."
        items={INDUSTRIES}
      />

      <ServiceFaq
        sectionLabel="Common Questions"
        heading="Data Modernization Services, Answered"
        faqs={FAQ}
        idPrefix="data-modernization"
      />

      {/* CONTACT FORM */}
      <div id="contact">
        <SolutionContactForm
          title="Ready to get off your legacy stack?"
          description="One conversation is enough to know whether we are the right fit. Tell us what you are migrating off and where the risk sits, and we will give you a phased plan and a real number."
          messageRequired={false}
          submitLabel="Talk to an Engineer"
          bgClassName="svc-mid-cta-bg"
          benefits={[
            "Free consultation with a senior migration engineer",
            "Free migration assessment with a real number, not a range",
            "Phased migration — old system stays live until proven",
            "Certified on Snowflake and Databricks",
            "Response guaranteed within 24 business hours",
          ]}
        />
      </div>
    </>
  );
};

export default DataModernizationService;
