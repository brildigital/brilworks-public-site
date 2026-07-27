"use client";
import dynamic from "next/dynamic";
import {
  ShieldCheck,
  Wrench,
  Zap,
  Scale,
  Users,
  ClipboardCheck,
  BookOpen,
  Lock,
  Layers,
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
  { value: "25+", label: "Governance programs built", accent: true },
  { value: "40+", label: "Companies", accent: false },
  { value: "500+", label: "Data sources cataloged", accent: false },
  { value: "95%", label: "Quality-check coverage", accent: true },
];

const SERVICES = [
  {
    title: "Data governance framework",
    body: "The policies, roles, and ownership model for how data gets managed across your company. We build it to fit how your team actually works, then wire it into the stack so it is enforced, not just written down.",
    features: [
      "Ownership and stewardship your team will actually follow",
      "Wired into the platform, not filed in a drive",
      "Sized to your company, not a Fortune 500 template",
    ],
    image: "/images/v2/architecture_design.webp",
    reverse: false,
  },
  {
    title: "Data quality and observability",
    body: "The rules and checks that stop bad data before it reaches a dashboard. We build quality tests, freshness checks, and anomaly alerts directly into your pipelines, so governance runs on every load, not once a quarter.",
    features: [
      "Quality rules enforced on every pipeline run",
      "Freshness and anomaly alerts, not manual audits",
      "A quality score you can actually report on",
    ],
    image: "/images/v2/quality-assurance.webp",
    reverse: true,
  },
  {
    title: "Data catalog and metadata management",
    body: 'The searchable inventory of what data you have, what it means, and who owns it. We stand up a catalog with lineage and business definitions, so people stop asking "which table is the real one."',
    features: [
      "Searchable catalog with business definitions",
      "Lineage so a bad number traces to its source",
      "One agreed definition per metric, company-wide",
    ],
    image: "/images/v2/data_catalog.webp",
    reverse: false,
  },
  {
    title: "Data security and compliance",
    body: "Access controls, masking, and audit trails that satisfy GDPR, HIPAA, or SOC 2 without grinding work to a halt. We build least-privilege access into the platform, not on top of it.",
    features: [
      "Role-based, least-privilege access by design",
      "Masking and audit trails built in",
      "Mapped to GDPR, HIPAA, or SOC 2 as you need",
    ],
    image: "/images/v2/data_security.webp",
    reverse: true,
  },
];

const BENEFITS = [
  {
    title: "Implemented, not filed",
    tint: "#e8f0fd",
    body: "Wired into your stack, not written into a PDF.",
    icon: <Wrench size={32} color="#017eeb" />,
  },
  {
    title: "Enforced automatically",
    tint: "#ede9fe",
    body: "Rules run on every load, not on good intentions.",
    icon: <Zap size={32} color="#4f46e5" />,
  },
  {
    title: "Right-sized",
    tint: "#d1fae5",
    body: "Built for your company, not a Fortune 500 template.",
    icon: <Scale size={32} color="#10b981" />,
  },
  {
    title: "Owned by your team",
    tint: "#ccfbf1",
    body: "Documented and handed over, not consultant-locked.",
    icon: <Users size={32} color="#0d9488" />,
  },
  {
    title: "Quality on every run",
    tint: "#cffafe",
    body: "Checks on each pipeline, not a quarterly audit.",
    icon: <ClipboardCheck size={32} color="#0891b2" />,
  },
  {
    title: "One definition per metric",
    tint: "#dbeafe",
    body: 'The "which table is real" question, answered.',
    icon: <BookOpen size={32} color="#1e40af" />,
  },
  {
    title: "Compliance built in",
    tint: "#e8f0fd",
    body: "GDPR, HIPAA, SOC 2 mapped into access from day one.",
    icon: <Lock size={32} color="#017eeb" />,
  },
  {
    title: "We build the stack too",
    tint: "#ede9fe",
    body: "Certified on Snowflake and Databricks, so we implement where your data lives.",
    icon: <Layers size={32} color="#4f46e5" />,
  },
];

const TESTIMONIALS = [
  {
    initials: "SK",
    name: "Sarah Kim",
    role: "Chief Data Officer, SaaS",
    quote:
      "Two teams stopped arguing about whose revenue number was right. One catalog, one definition, done.",
  },
  {
    initials: "DH",
    name: "Derek Hall",
    role: "Director of Data, E-Commerce",
    quote:
      "The anomaly alert caught a broken currency conversion before it hit the exec dashboard. That check paid for itself in one incident.",
  },
  {
    initials: "PM",
    name: "Priya Menon",
    role: "VP Engineering, Healthtech",
    quote:
      "We walked into our HIPAA audit with access logs and masking already in place. The auditor had almost nothing to flag.",
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
];

const FAQ = [
  {
    q: "What is data governance consulting?",
    a: "Help defining and implementing how your company manages, secures, and trusts its data. Done properly it is not a policy document. It is a framework wired into your stack: ownership, quality rules, a catalog, and access controls that run automatically.",
  },
  {
    q: "Why do most data governance programs fail?",
    a: "They fail at enforcement, not design. A consultant writes a beautiful policy, leaves, and nothing changes because nothing was built into the stack to enforce it. We fix that by implementing the rules where your data lives, so governance runs without anyone remembering to run it.",
  },
  {
    q: "What do I walk away with?",
    a: "A governance framework sized to your company, quality checks running on your pipelines, a data catalog with lineage and definitions, and access controls mapped to your compliance needs. Working systems, not just a document.",
  },
  {
    q: "Do you help with GDPR, HIPAA, or SOC 2 compliance?",
    a: "Yes. We build least-privilege access, masking, and audit trails into the platform and map them to the regulation you answer to. We are not a law firm, so we implement the controls; your compliance team signs off on the policy.",
  },
  {
    q: "Can you implement governance, or only advise on it?",
    a: "Both, and implementation is the point. We are certified on Snowflake and Databricks, so the same team that designs the governance builds it into your platform. Advice without implementation is where most governance dies.",
  },
  {
    q: "Will this slow my team down?",
    a: "Done badly, governance is friction. Done right, it is invisible: rules run automatically, access is role-based, and people find data faster because it is cataloged. If governance is grinding your team to a halt, it was designed wrong.",
  },
  {
    q: "Do you offer ongoing support after implementation?",
    a: "Yes. Governance is not a one-time project; new data sources and rules keep appearing. Many clients keep us on to extend the framework as they grow.",
  },
];

const DataGovernanceConsultingService = () => {
  return (
    <>
      <ServiceHero
        label="Data Governance Consulting"
        labelIcon={<ShieldCheck size={14} color="#2f6bff" />}
        titleLead="Data Governance That Actually Gets"
        titleAccent="Enforced"
        subhead="Most governance work ends as a policy document no one follows. We build governance into your data stack, framework, quality rules, catalog, and access, so it runs automatically instead of sitting in a shared drive."
        primaryCta={{ label: "Talk to a Consultant", href: "#contact" }}
        secondaryCta={{ label: "See how we implement", href: "#services" }}
        trustPoints={[
          "Implemented in your stack, not written into a PDF",
          "Rules enforced automatically, not by good intentions",
          "Built so your team owns it after we leave",
        ]}
        stats={HERO_STATS}
      />

      <ServiceTrustBar items={TRUST} />

      <ServiceCoreOfferings
        id="services"
        sectionLabel="What We Do"
        heading="Core Data Governance Consulting Services"
        subhead="The four things that turn governance from a document into a system that runs itself, built into the platform you already use."
        items={SERVICES}
      />

      <ServiceMidCta
        headline="Governance policy no one actually follows?"
        pitch="Most governance fails at enforcement, not design. Our free governance assessment finds where yours breaks down and what to wire in first."
        buttonLabel="Get a Governance Assessment"
        buttonHref="#contact"
      />

      <ServiceWhyUs
        sectionLabel="Why Brilworks"
        heading="Consultants who implement it, not just document it"
        subhead="A governance deck is easy. Governance that runs on every pipeline load, without your team thinking about it, is the hard part. That is the part we do."
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
        heading="Size Up Your Data Governance Before You Commit"
        subhead="Free assessments for data teams. Get a read in minutes, no sales call required."
        tools={TOOLS}
        exploreHref="/data-engineering-tools/"
      />

      <ServiceIndustries
        sectionLabel="Industries We Serve"
        heading="Data Governance Built for Your Vertical"
        subhead="Compliance and governance needs differ by industry. We have implemented in each of these."
        items={INDUSTRIES}
      />

      <ServiceFaq
        sectionLabel="Common Questions"
        heading="Data Governance Consulting Services, Answered"
        faqs={FAQ}
        idPrefix="data-governance"
      />

      {/* CONTACT FORM */}
      <div id="contact">
        <SolutionContactForm
          title="Ready to make governance something your team actually uses?"
          description="One conversation is enough to know whether we are the right fit. Tell us where your data governance breaks down, and we will point you to what to wire in first."
          messageRequired={false}
          submitLabel="Talk to a Consultant"
          bgClassName="svc-mid-cta-bg"
          benefits={[
            "Free consultation with a senior data governance consultant",
            "Free governance assessment that flags where enforcement breaks down",
            "Implemented into your stack, not left as a document",
            "Certified on Snowflake and Databricks",
            "Response guaranteed within 24 business hours",
          ]}
        />
      </div>
    </>
  );
};

export default DataGovernanceConsultingService;
