"use client";
import dynamic from "next/dynamic";
import {
  Gavel,
  ShieldCheck,
  Layers,
  Scale,
  GitBranch,
  Eye,
  FileCheck,
  Lock,
  CheckCircle2,
  Cpu,
  BadgeCheck,
  Star,
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
  { value: "120+", label: "Models governed in production", accent: true },
  {
    value: "42",
    label: "Data platforms shipped across 31 companies",
    accent: false,
  },
  { value: "9", label: "Countries served", accent: false },
  { value: "3 wks", label: "Governance baseline stood up", accent: true },
];

const SERVICES = [
  {
    title: "Responsible AI",
    body: "Responsible AI isn't a policy document. It's the checks that catch a biased or harmful outcome before it reaches a user. We test your models and the data behind them for the failure modes that turn into complaints, lawsuits, and headlines, while they're still fixable.",
    features: [
      "Bias and fairness testing across the groups your model affects",
      "Data privacy and consent checked at the source",
      "Harmful-output testing before the model reaches real users",
    ],
    image: "/images/v2/responsible_ai_readiness.webp",
    reverse: false,
  },
  {
    title: "Model governance",
    body: "You can't govern what you can't see. We build the record of which model version is live, what data trained it, who approved it, and what it's been doing. So when someone asks how a decision was made, you have an answer instead of a shrug.",
    features: [
      "Model registry with version, lineage, and approval trail",
      "Access and change controls, so no model ships unreviewed",
      "Audit-ready records for regulators and internal review",
    ],
    image: "/images/v2/model_governance.webp",
    reverse: true,
  },
  {
    title: "Explainable AI",
    body: '"The model said so" is not an answer a regulator accepts. Explainable AI gives you the why behind a prediction, in terms a person can follow. It\'s the difference between defending a decision and being unable to. We build it in where the stakes, or the rules, demand it.',
    features: [
      "Prediction-level explanations a non-technical reviewer can read",
      "Explanations tied to the features that actually drove the decision",
      "Documentation that stands up in an audit or a dispute",
    ],
    image: "/images/v2/quality-assurance.webp",
    reverse: false,
  },
];

const BENEFITS = [
  {
    title: "Built into the model",
    tint: "#e8f0fd",
    body: "Governance lives in the pipeline and registry, not in a document nobody enforces.",
    icon: <Layers size={32} color="#017eeb" />,
  },
  {
    title: "Bias caught early",
    tint: "#ede9fe",
    body: "Fairness tested before launch, while a problem is still cheap to fix.",
    icon: <Scale size={32} color="#4f46e5" />,
  },
  {
    title: "Full lineage",
    tint: "#d1fae5",
    body: "We can show what data trained a model and who signed off on it.",
    icon: <GitBranch size={32} color="#10b981" />,
  },
  {
    title: "Explainable by design",
    tint: "#ccfbf1",
    body: "Predictions come with a why a non-technical reviewer can follow.",
    icon: <Eye size={32} color="#0d9488" />,
  },
  {
    title: "Audit-ready",
    tint: "#cffafe",
    body: "Records built for the questions a regulator or board will actually ask.",
    icon: <FileCheck size={32} color="#0891b2" />,
  },
  {
    title: "Privacy at the source",
    tint: "#dbeafe",
    body: "Consent and data-use checked where the data enters, not at the end.",
    icon: <Lock size={32} color="#1e40af" />,
  },
  {
    title: "No model ships unreviewed",
    tint: "#e8f0fd",
    body: "Access and change controls, so nothing goes live without approval.",
    icon: <ShieldCheck size={32} color="#017eeb" />,
  },
  {
    title: "Practical, not theatrical",
    tint: "#ede9fe",
    body: "Governance scoped to your real risk and rules, not a compliance checkbox.",
    icon: <CheckCircle2 size={32} color="#4f46e5" />,
  },
];

// NOTE: Real client quotes and attribution still needed — these are
// unreviewed placeholders drafted from the outcome briefs supplied.
const TESTIMONIALS = [
  {
    initials: "—",
    name: "[Name pending]",
    role: "[Title, Company — pending]",
    quote:
      "We had a compliance requirement that model decisions be explainable. The explainability layer they built let us answer that without a scramble.",
  },
  {
    initials: "—",
    name: "[Name pending]",
    role: "[Title, Company — pending]",
    quote:
      "Bias testing caught a fairness problem before launch that would have been a public issue if it shipped.",
  },
  {
    initials: "—",
    name: "[Name pending]",
    role: "[Title, Company — pending]",
    quote:
      "The model registry and lineage turned our audit from a scramble into a straightforward answer.",
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
];

const INDUSTRIES = [
  { label: "F&B Manufacturing", icon: <Factory size={32} color="#0891b2" /> },
  { label: "Fintech", icon: <Landmark size={32} color="#017eeb" /> },
  { label: "E-Commerce", icon: <ShoppingCart size={32} color="#10b981" /> },
  { label: "Logistics", icon: <Truck size={32} color="#4f46e5" /> },
  { label: "SaaS", icon: <BarChart3 size={32} color="#0d9488" /> },
  { label: "Healthcare", icon: <HeartPulse size={32} color="#ef4444" /> },
];

const TOOLS = [
  {
    icon: Cpu,
    name: "AI Readiness Audit",
    href: "/data-engineering-tools/ai-readiness-audit/",
  },
  {
    icon: ShieldCheck,
    name: "Data Quality Assessment",
    href: "/data-engineering-tools/data-quality-assessment/",
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
    q: "What is AI governance?",
    a: "The controls that let you show what your AI did, why, and that it was allowed to. It covers responsible AI, model governance, and explainability, so a model decision is something you can trace, defend, and prove was approved.",
  },
  {
    q: "What's the difference between responsible AI and model governance?",
    a: "Responsible AI is about the outcomes, testing for bias, privacy, and harm before they reach users. Model governance is about the record, which version is live, what trained it, who approved it. You need both. One keeps the model fair, the other keeps you accountable.",
  },
  {
    q: "Why does explainable AI matter?",
    a: "Because \"the model said so\" doesn't hold up with a regulator, a customer, or a court. Explainable AI gives you the reasoning behind a prediction in terms a person can follow. Where the stakes or the rules are high, it's not optional.",
  },
  {
    q: "Do we need this if we're not in a regulated industry?",
    a: "Often yes. Even without a regulator, a biased or unexplainable decision becomes a customer complaint or a public problem. Governance is cheaper than the incident it prevents. That said, if your models are low-stakes and internal, we'll tell you where lighter controls are enough.",
  },
  {
    q: "How long does it take to stand up governance?",
    a: "Weeks, not quarters. A governance baseline for existing models runs 3 to 5 weeks, depending on how many models and how much lineage already exists.",
  },
  {
    q: "Can you add governance to models we already have in production?",
    a: "Yes. Most of our governance work is retrofitting controls onto models that shipped without them. We build the registry, testing, and explainability around what's already live.",
  },
  {
    q: "Will my team be able to run this after you leave?",
    a: "Yes. We hand over the registry, testing, and documentation so your team maintains governance without us.",
  },
];

const AiGovernanceService = () => {
  return (
    <>
      <ServiceHero
        label="AI Governance"
        labelIcon={<Gavel size={14} color="#2f6bff" />}
        titleLead="When Your AI Gets It Wrong,"
        titleAccent="Someone Has to Answer"
        subhead="Every model makes decisions you'll eventually have to defend, to a regulator, a customer, or your own board. We build the governance layer that lets you show what your AI did, why it did it, and that it was allowed to. Before you need it, not after."
        primaryCta={{ label: "Book a Governance Review", href: "#contact" }}
        secondaryCta={{ label: "See What We Build", href: "#services" }}
        trustPoints={[
          "Every model decision traceable and explainable",
          "Bias and risk checked before launch, not after a complaint",
          "Governance built in, not bolted on",
        ]}
        stats={HERO_STATS}
      />

      <ServiceTrustBar items={TRUST} />

      <ServiceCoreOfferings
        id="services"
        sectionLabel="What We Do"
        heading="Core AI Governance Services"
        subhead="The controls that turn a model you hope behaves into one you can prove behaved. Most teams add this after an incident. It's far cheaper before."
        items={SERVICES}
      />

      <ServiceMidCta
        headline="Could you explain how your AI made its last decision?"
        pitch="A governance review tells you where you're exposed, bias, traceability, or explainability, and what it takes to close the gap."
        buttonLabel="Book a Governance Review"
        buttonHref="#contact"
      />

      <ServiceWhyUs
        sectionLabel="Why Brilworks"
        heading="Governance that holds up when someone asks"
        subhead="Plenty of firms will write you an AI policy. Fewer can wire the controls into the actual models. We're a data engineering team, so governance goes into the pipeline, not into a PDF."
        items={BENEFITS}
      />

      <ServiceTestimonials
        sectionLabel="Client Stories"
        heading="What Business Leaders Say"
        subhead="Real words from people who ran our work in production."
        items={TESTIMONIALS}
      />

      <ServiceHonors items={HONORS} />

      <ServiceFreeTools
        sectionLabel="Free Tools"
        heading="Check Your AI Governance Before a Regulator Does"
        subhead="Free assessments for teams running models in production. Real answers in minutes, no signup."
        tools={TOOLS}
        exploreHref="/data-engineering-tools/"
      />

      <ServiceIndustries
        sectionLabel="Industries We Serve"
        heading="AI Governance Built for Your Vertical"
        subhead="A fintech credit model and a healthtech triage tool answer to different rules. We've built governance for both."
        items={INDUSTRIES}
      />

      <ServiceFaq
        sectionLabel="Common Questions"
        heading="AI Governance, Answered"
        faqs={FAQ}
        idPrefix="ai-governance"
      />

      {/* CONTACT FORM */}
      <div id="contact">
        <SolutionContactForm
          title="Ready to make your AI decisions defensible?"
          description="One conversation is enough to know where you're exposed, bias, traceability, or explainability, and what it takes to close the gap."
          messageRequired={false}
          submitLabel="Book a Governance Review"
          bgClassName="svc-mid-cta-bg"
          benefits={[
            "Free consultation with a senior AI governance engineer",
            "Bias and risk checked before launch, not after a complaint",
            "Audit-ready records for regulators and internal review",
            "Certified on Snowflake and Databricks",
            "Response guaranteed within 24 business hours",
          ]}
        />
      </div>
    </>
  );
};

export default AiGovernanceService;
