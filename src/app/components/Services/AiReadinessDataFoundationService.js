"use client";
import dynamic from "next/dynamic";
import {
  Gauge,
  ShieldCheck,
  Target,
  Wrench,
  RefreshCw,
  Repeat,
  Lock,
  Eye,
  TrendingUp,
  Settings2,
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
  {
    value: "42",
    label: "Data platforms shipped across 31 companies",
    accent: true,
  },
  { value: "75+", label: "Readiness assessments run", accent: false },
  { value: "9", label: "Countries served", accent: false },
  { value: "2 wks", label: "Assessment to fix plan", accent: true },
];

const SERVICES = [
  {
    title: "Data readiness assessment",
    body: 'We take the use case you want to build and trace it back to the data behind it. Is it there, is it clean, is it fresh enough. Most "we\'re ready for AI" claims fall apart in this step. Better here than in production.',
    features: [
      "Source-by-source audit of coverage, quality, and freshness",
      "Gaps mapped to the exact use case they block",
      "A fix list ranked by what unblocks the most value",
    ],
    image: "/images/v2/aptitude-assessment.webp",
    reverse: false,
  },
  {
    title: "AI platform readiness",
    body: "A model needs somewhere to run, somewhere to pull features, somewhere to log what it did. We check whether your platform can serve data at the speed and scale your use case needs, and where it can't yet.",
    features: [
      "Serving latency and scale checked against real use-case load",
      "Storage, compute, and retrieval layers assessed together",
      "Clear read on build-vs-upgrade for your current stack",
    ],
    image: "/images/v2/data_lake_data_warehouse.webp",
    reverse: true,
  },
  {
    title: "Data foundation for AI",
    body: "The layer that turns raw tables into something a model can learn from. We build the pipelines, features, and structure that sit under every AI build, so the model isn't fighting the data on day one.",
    features: [
      "Clean, documented pipelines feeding the AI layer",
      "Feature engineering frameworks so the same features get reused, not rebuilt",
      "A foundation that holds up when the second and third use cases arrive",
    ],
    image: "/images/v2/aiml_data_foundation.webp",
    reverse: false,
  },
  {
    title: "Responsible AI readiness",
    body: "The risk work that's cheapest to do before launch. We check where your data and use cases could create bias, privacy, or compliance problems, and flag them while they're still easy to fix.",
    features: [
      "Data privacy and consent checked at the source",
      "Bias and fairness risks surfaced per use case",
      "A governance baseline you can build on, not bolt on later",
    ],
    image: "/images/v2/responsible_ai_readiness.webp",
    reverse: true,
  },
];

const BENEFITS = [
  {
    title: "We trace it to the use case",
    tint: "#e8f0fd",
    body: "Every readiness gap tied to the specific build it blocks. No abstract scorecards.",
    icon: <Target size={32} color="#017eeb" />,
  },
  {
    title: "Gaps come with fixes",
    tint: "#ede9fe",
    body: "We don't hand you a list of problems. We hand you the plan to close them.",
    icon: <Wrench size={32} color="#4f46e5" />,
  },
  {
    title: "Freshness, not just presence",
    tint: "#d1fae5",
    body: "Data that exists isn't data that's ready. We check whether it's current enough to trust.",
    icon: <RefreshCw size={32} color="#10b981" />,
  },
  {
    title: "Features built to reuse",
    tint: "#ccfbf1",
    body: "Feature frameworks so your third use case doesn't rebuild the first one's work.",
    icon: <Repeat size={32} color="#0d9488" />,
  },
  {
    title: "Governance up front",
    tint: "#cffafe",
    body: "Privacy, bias, and compliance flagged before launch, when they're cheap to fix.",
    icon: <Lock size={32} color="#0891b2" />,
  },
  {
    title: "Platform-honest",
    tint: "#dbeafe",
    body: "We tell you when your current stack is enough, and when it isn't.",
    icon: <Eye size={32} color="#1e40af" />,
  },
  {
    title: "Built to scale past one",
    tint: "#e8f0fd",
    body: "A foundation that holds when the next use cases land, not just the first.",
    icon: <TrendingUp size={32} color="#017eeb" />,
  },
  {
    title: "We can do the fix",
    tint: "#ede9fe",
    body: "The team that runs the audit can engineer the pipelines that resolve it.",
    icon: <Settings2 size={32} color="#4f46e5" />,
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
      "We thought we were AI-ready. The audit found the data gaps that would have sunk the build, and we fixed them before we spent a rupee on the model.",
  },
  {
    initials: "—",
    name: "[Name pending]",
    role: "[Title, Company — pending]",
    quote:
      "The feature framework meant our next use case shipped in half the time. The foundation was already there.",
  },
  {
    initials: "—",
    name: "[Name pending]",
    role: "[Title, Company — pending]",
    quote:
      "The responsible-AI check caught a privacy risk before launch that we hadn't even considered.",
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
    q: "What does AI readiness actually mean?",
    a: "It means the data, platform, and governance behind your use case can support a model today. Not in theory. We check coverage, quality, freshness, serving speed, and risk against the specific build you have in mind.",
  },
  {
    q: "How is this different from AI strategy work?",
    a: "Strategy decides which use cases to build. Readiness checks whether you can. Strategy hands you the roadmap, readiness tells you what has to be fixed before phase one can start. Teams usually do them back to back.",
  },
  {
    q: "What is a data foundation for AI?",
    a: "The pipelines, features, and structure that sit under every AI build. Raw tables aren't enough. A model needs clean, current, well-shaped data, and the foundation is what turns one into the other.",
  },
  {
    q: "How long does a readiness assessment take?",
    a: "Weeks, not quarters. A focused assessment runs 2 to 3 weeks, depending on how many data sources and use cases are in scope.",
  },
  {
    q: "What if the audit finds we're not ready?",
    a: "Then you've saved the cost of a model built on data that couldn't carry it. You get a ranked fix list, and if you want, the same team closes the gaps.",
  },
  {
    q: "Do you handle the responsible-AI side too?",
    a: "Yes. Privacy, bias, and compliance risks are part of the readiness check, flagged before launch when they're still cheap to fix.",
  },
  {
    q: "Can you build the foundation, not just assess it?",
    a: "Yes. The team that runs the audit can engineer the pipelines and feature frameworks that fix what it finds.",
  },
];

const AiReadinessDataFoundationService = () => {
  return (
    <>
      <ServiceHero
        label="AI Readiness & Data Foundation"
        labelIcon={<Gauge size={14} color="#2f6bff" />}
        titleLead="Get Your Data Ready"
        titleAccent="Before the Model Arrives"
        subhead="Most failed AI projects share one cause. The data underneath was never ready. We check your data, your platform, and your governance, then tell you exactly what to fix before a model touches any of it."
        primaryCta={{ label: "Book a Readiness Audit", href: "#contact" }}
        secondaryCta={{ label: "See How It Works", href: "#services" }}
        trustPoints={[
          "We test the data your model will actually depend on",
          "Every gap comes with a fix, not just a flag",
          "Governance and quality checked before, not after launch",
        ]}
        stats={HERO_STATS}
      />

      <ServiceTrustBar items={TRUST} />

      <ServiceCoreOfferings
        id="services"
        sectionLabel="What We Do"
        heading="Core AI Readiness & Data Foundation Services"
        subhead="The unglamorous work that decides whether your AI project ships or stalls. We look at what your model will need and check whether you can supply it today."
        items={SERVICES}
      />

      <ServiceMidCta
        headline="Think you're ready for AI? Let's check the data first."
        pitch="A readiness audit tells you what's buildable today and what has to be fixed before you spend on a model."
        buttonLabel="Book a Readiness Audit"
        buttonHref="#contact"
      />

      <ServiceWhyUs
        sectionLabel="Why Brilworks"
        heading="The team that fixes the foundation, not just names it"
        subhead="Plenty of firms will tell you your data isn't ready. Fewer can fix it. We're a data engineering team, so the same people who find the gap can close it."
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
        heading="Check Your AI Readiness Before You Commit"
        subhead="Free assessments for teams weighing an AI build. Real answers in minutes, no signup."
        tools={TOOLS}
        exploreHref="/data-engineering-tools/"
      />

      <ServiceIndustries
        sectionLabel="Industries We Serve"
        heading="AI Foundations Built for Your Vertical"
        subhead={`What "ready" means for a fintech is not what it means for a food manufacturer. We've built the foundation for both.`}
        items={INDUSTRIES}
      />

      <ServiceFaq
        sectionLabel="Common Questions"
        heading="AI Readiness & Data Foundation, Answered"
        faqs={FAQ}
        idPrefix="ai-readiness"
      />

      {/* CONTACT FORM */}
      <div id="contact">
        <SolutionContactForm
          title="Ready to find out what needs fixing before you build?"
          description="One conversation is enough to know whether your data, platform, and governance can carry the AI use case you have in mind."
          messageRequired={false}
          submitLabel="Book a Readiness Audit"
          bgClassName="svc-mid-cta-bg"
          benefits={[
            "Free consultation with a senior data engineer",
            "Every gap comes with a fix, not just a flag",
            "Governance and quality checked before, not after launch",
            "Certified on Snowflake and Databricks",
            "Response guaranteed within 24 business hours",
          ]}
        />
      </div>
    </>
  );
};

export default AiReadinessDataFoundationService;
