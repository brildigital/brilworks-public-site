"use client";
import dynamic from "next/dynamic";
import {
  Compass,
  ShieldCheck,
  Database,
  Flag,
  BarChart3,
  Layers,
  Scale,
  Rocket,
  Lock,
  FileCheck,
  Cpu,
  BadgeCheck,
  Star,
  Landmark,
  HeartPulse,
  ShoppingCart,
  Truck,
  Factory,
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
  { value: "50+", label: "AI & data engagements delivered", accent: true },
  {
    value: "42",
    label: "Data platforms shipped across 31 companies",
    accent: false,
  },
  { value: "9", label: "Countries served", accent: false },
  { value: "4 wks", label: "Assessment to roadmap", accent: true },
];

const SERVICES = [
  {
    title: "AI opportunity assessment",
    body: "We map where AI can actually earn its keep in your operation, and where a script would do the same job cheaper. The bad ideas die here. That's the cheapest they'll ever be to kill.",
    features: [
      "Workflow audit of where time and money leak today",
      "Impact scored against effort, not a wish list",
      'A "not yet" list, so you stop funding what the data can\'t support',
    ],
    image: "/images/v2/aptitude-assessment.webp",
    reverse: false,
  },
  {
    title: "AI use case discovery",
    body: "The best use cases don't come from the leadership deck. They come from the person doing the workaround every day. We pull candidates from the people closest to the work, then test each against feasibility and return.",
    features: [
      "Interviews with the teams who feel the problem, not just approve budgets",
      "Every candidate scored on data readiness and payback",
      "A shortlist you can defend to a CFO, not just a CTO",
    ],
    image: "/images/v2/ai-insights-and-automation.webp",
    reverse: true,
  },
  {
    title: "AI roadmap",
    body: "A roadmap answers what the demos never do: what we build first, and what has to be true before we can. We sequence the shortlist so early wins fund the harder work, and nothing gets scheduled before its data is ready.",
    features: [
      "Phased sequence tied to dependencies, not hype cycles",
      "Data and platform prerequisites named per phase",
      "A first build small enough to ship in weeks and prove the model",
    ],
    image: "/images/v2/ai_roadmap.webp",
    reverse: false,
  },
  {
    title: "AI strategy grounded in your stack",
    body: "We're a data engineering team first. So when we hand you a strategy, we've already checked whether your pipelines, models, and governance can carry it, and told you where they can't.",
    features: [
      "Build-vs-buy calls made on real cost, not vendor optimism",
      "Strategy scoped to what your current stack can actually run",
      "A plan the same team can help you execute",
    ],
    image: "/images/v2/aiml_data_foundation.webp",
    reverse: true,
  },
];

const BENEFITS = [
  {
    title: "Data checked first",
    tint: "#e8f0fd",
    body: 'Every use case tested against whether the data exists and is clean. Most "great ideas" die here.',
    icon: <Database size={32} color="#017eeb" />,
  },
  {
    title: "We say when not to",
    tint: "#ede9fe",
    body: "If your problem needs a script, not a model, that's in the report.",
    icon: <Flag size={32} color="#4f46e5" />,
  },
  {
    title: "Scored, not sold",
    tint: "#d1fae5",
    body: "Effort against payback on every candidate. Numbers, not enthusiasm.",
    icon: <BarChart3 size={32} color="#10b981" />,
  },
  {
    title: "Built by the same team",
    tint: "#ccfbf1",
    body: "Whoever writes your roadmap can engineer what's under it.",
    icon: <Layers size={32} color="#0d9488" />,
  },
  {
    title: "No vendor bias",
    tint: "#cffafe",
    body: "We don't resell a platform. The recommendation is yours, not a quota's.",
    icon: <Scale size={32} color="#0891b2" />,
  },
  {
    title: "Small first build",
    tint: "#dbeafe",
    body: "Phase one ships in weeks and proves the model before you scale spend.",
    icon: <Rocket size={32} color="#1e40af" />,
  },
  {
    title: "Governance from day one",
    tint: "#e8f0fd",
    body: "Responsible-AI and data risk flagged in the plan, not after launch.",
    icon: <Lock size={32} color="#017eeb" />,
  },
  {
    title: "A plan you own",
    tint: "#ede9fe",
    body: "You leave with the ranked list and the sequence, whether or not we build it.",
    icon: <FileCheck size={32} color="#4f46e5" />,
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
      "We came in with a long list of AI ideas. We left with a ranked roadmap and a clear first build to start on.",
  },
  {
    initials: "—",
    name: "[Name pending]",
    role: "[Title, Company — pending]",
    quote:
      "The assessment killed two expensive ideas early and pointed us at the one that actually paid back fastest.",
  },
  {
    initials: "—",
    name: "[Name pending]",
    role: "[Title, Company — pending]",
    quote:
      "They told us plainly our data wasn't ready before we spent a rupee on a model. That was worth more than the roadmap itself.",
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
    q: "What is AI strategy and advisory?",
    a: "The work before the build. It decides which problems are worth solving with AI, in what order, and whether the data behind them is ready. You leave with a ranked use case list and a sequenced plan.",
  },
  {
    q: "What's the difference between opportunity assessment and use case discovery?",
    a: "Assessment looks top-down at where AI could pay off across your operation. Discovery works bottom-up, pulling real candidates from the people doing the work. You want both. One finds the territory, the other finds the specific build.",
  },
  {
    q: "How long does an engagement take?",
    a: "Weeks, not quarters. A focused assessment and roadmap for a mid-sized team runs 3 to 5 weeks, depending on how many teams and data sources are in scope.",
  },
  {
    q: "Do we need this if we already know what to build?",
    a: "Sometimes not. One clear use case, clean data, obvious return, start building. Advisory earns its place when several ideas compete for one budget, or when a use case sounds good but nobody's checked the data yet.",
  },
  {
    q: "Will you tell us AI is the wrong call?",
    a: "Yes. If a problem needs a script or a process fix instead of a model, that's in the report. It's cheaper to hear now.",
  },
  {
    q: "Can you build what you recommend?",
    a: "Yes, and that's the point. We're a data engineering team that does strategy, not a strategy firm that outsources the build.",
  },
  {
    q: "Do you offer support after the roadmap?",
    a: "Yes. Most clients move straight into the first build with the same team. You can also take the plan and run it yourself.",
  },
];

const AiStrategyAdvisoryService = () => {
  return (
    <>
      <ServiceHero
        label="AI Strategy & Advisory"
        labelIcon={<Compass size={14} color="#2f6bff" />}
        titleLead="AI Strategy That"
        titleAccent="Ships, Not Just Slides"
        subhead="Most AI projects don't break in production. They break in the planning, funded on a hunch, built on data nobody checked. We find the use cases worth backing and turn them into a plan your team can build."
        primaryCta={{ label: "Book a Strategy Call", href: "#contact" }}
        secondaryCta={{ label: "See How It Works", href: "#services" }}
        trustPoints={[
          "We check the data before we recommend the build",
          "Every use case scored on effort and payback, not hype",
          "The team that scopes it can build it",
        ]}
        stats={HERO_STATS}
      />

      <ServiceTrustBar items={TRUST} />

      <ServiceCoreOfferings
        id="services"
        sectionLabel="What We Do"
        heading="Core AI Strategy & Advisory Services"
        subhead="Everything that has to happen before you spend a rupee on a model. We work backward from your business to the smallest set of builds that move a real number."
        items={SERVICES}
      />

      <ServiceMidCta
        headline="Bring your list of AI ideas. Leave with the two worth funding."
        pitch="A 30-minute call tells us whether you need a full assessment or a second opinion on the use case you already have."
        buttonLabel="Book a Strategy Call"
        buttonHref="#contact"
      />

      <ServiceWhyUs
        sectionLabel="Why Brilworks"
        heading="Advisors who have to live with the plan they sell"
        subhead="The problem with most AI advisory: the people writing the strategy never build it. We do both. We can't hide a hard problem inside a nice slide."
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
        heading="Size Up Your AI Readiness Before You Commit"
        subhead="Free assessments for teams weighing an AI build. Real answers in minutes, no signup."
        tools={TOOLS}
        exploreHref="/data-engineering-tools/"
      />

      <ServiceIndustries
        sectionLabel="Industries We Serve"
        heading="AI Strategy Built for Your Vertical"
        subhead="A roadmap for a food manufacturer looks nothing like one for a fintech. We've shipped across both."
        items={INDUSTRIES}
      />

      <ServiceFaq
        sectionLabel="Common Questions"
        heading="AI Strategy & Advisory, Answered"
        faqs={FAQ}
        idPrefix="ai-strategy"
      />

      {/* CONTACT FORM */}
      <div id="contact">
        <SolutionContactForm
          title="Ready to find the AI use cases worth funding?"
          description="One conversation is enough to know whether you need a full assessment or a second opinion on the use case you already have."
          messageRequired={false}
          submitLabel="Book a Strategy Call"
          bgClassName="svc-mid-cta-bg"
          benefits={[
            "Free consultation with a senior AI strategist",
            "Every use case scored on effort and payback, not hype",
            "The team that scopes it can build it",
            "Certified on Snowflake and Databricks",
            "Response guaranteed within 24 business hours",
          ]}
        />
      </div>
    </>
  );
};

export default AiStrategyAdvisoryService;
