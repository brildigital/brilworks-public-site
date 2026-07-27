"use client";
import dynamic from "next/dynamic";
import {
  Compass,
  Map,
  Layers,
  Scale,
  CircleDollarSign,
  Users,
  ShieldCheck,
  Clock,
  Lock,
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
  { value: "35+", label: "Strategies set", accent: true },
  { value: "50+", label: "Companies advised", accent: false },
  { value: "12", label: "Countries", accent: false },
  { value: "4–6", label: "Weeks to roadmap", accent: true },
];

const SERVICES = [
  {
    title: "Data platform assessment",
    body: "Before we recommend anything, we audit what you already run. Where pipelines break, where cost leaks, where the same number means two things in two dashboards.",
    features: [
      "Ranked by what it costs you, not by fix difficulty",
      "Written assessment, not a verbal readout",
      "A clear yes or no on whether you need the full engagement",
    ],
    image: "/images/v2/data_platform.webp",
    reverse: false,
  },
  {
    title: "Enterprise data strategy",
    body: "We build the strategy backward from the decision you are actually trying to make. Migrate off legacy. Consolidate silos. Get ready for AI. You get a prioritized plan.",
    features: [
      "What to fix first, what to leave alone",
      "Costs attached to every recommendation",
      "A first step small enough to start next week",
    ],
    image: "/images/v2/bi_strategy_roadmap.webp",
    reverse: true,
  },
  {
    title: "Data architecture design",
    body: "The blueprint for how data moves through your company. Sources, storage, transformation, access. Designed to fit your team's real skill level, not an ideal one.",
    features: [
      "Fits the team that has to run it after handoff",
      "Governance and access built in from day one",
      "Platform-neutral, mapped to your budget",
    ],
    image: "/images/v2/architecture_design.webp",
    reverse: false,
  },
  {
    title: "Data modernization strategy",
    body: "If you are on a legacy stack, this is the sequenced plan to get off it without stopping the business. We plan the migration here. Our engineering team executes it.",
    features: [
      "What moves first, what runs in parallel",
      "Risk mapped per phase, no big-bang cutovers",
      "Hands off cleanly to a build we can deliver",
    ],
    image: "/images/v2/data_modernization.webp",
    reverse: true,
  },
];

const BENEFITS = [
  {
    title: "Roadmap, not a deck",
    tint: "#e8f0fd",
    body: "Sequenced plan with owners and costs, not a vision doc.",
    icon: <Map size={32} color="#017eeb" />,
  },
  {
    title: "We build what we plan",
    tint: "#ede9fe",
    body: "Certified on Snowflake and Databricks. One firm, strategy to build.",
    icon: <Layers size={32} color="#4f46e5" />,
  },
  {
    title: "Vendor-neutral",
    tint: "#d1fae5",
    body: "We recommend the platform that fits, not the one we resell.",
    icon: <Scale size={32} color="#10b981" />,
  },
  {
    title: "Priced, not ranged",
    tint: "#ccfbf1",
    body: "Real costs on every recommendation, not a $10k-$200k shrug.",
    icon: <CircleDollarSign size={32} color="#0d9488" />,
  },
  {
    title: "Fits your team",
    tint: "#cffafe",
    body: "Architecture your people can run six months after handoff.",
    icon: <Users size={32} color="#0891b2" />,
  },
  {
    title: "Honest scoping",
    tint: "#dbeafe",
    body: "If a script solves it, we will not sell you a platform.",
    icon: <ShieldCheck size={32} color="#1e40af" />,
  },
  {
    title: "A first step in weeks",
    tint: "#e8f0fd",
    body: "You leave the first engagement with something to start now.",
    icon: <Clock size={32} color="#017eeb" />,
  },
  {
    title: "Governance from day one",
    tint: "#ede9fe",
    body: "Access and quality designed in, not bolted on later.",
    icon: <Lock size={32} color="#4f46e5" />,
  },
];

const TESTIMONIALS = [
  {
    initials: "PN",
    name: "Priya Nair",
    role: "VP Data, Fintech Scale-up",
    quote:
      "The roadmap did not sit in a drive. Brilworks picked it up and built it, so we finally consolidated three regional data marts instead of debating it for another quarter.",
  },
  {
    initials: "DO",
    name: "David Okonkwo",
    role: "Head of Analytics, E-Commerce",
    quote:
      "The assessment caught it in week one: two teams paying to pull the same customer data from different sources. That finding alone paid for the engagement.",
  },
  {
    initials: "ER",
    name: "Elena Roth",
    role: "CTO, Healthcare SaaS",
    quote:
      "One firm from the strategy deck to the build. We never had to re-explain the architecture to a second vendor.",
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
    q: "What is an enterprise data strategy?",
    a: "The plan for how your company collects, stores, governs, and uses data to hit a specific business goal. A good one is a sequenced roadmap, not a vision document: what to fix first, who owns it, what it costs, how you know it worked.",
  },
  {
    q: "What do I actually walk away with?",
    a: "A written assessment of your current stack, the strategy itself, an architecture blueprint, and a modernization roadmap with owners and costs. Documents your team can execute, not a slide deck.",
  },
  {
    q: "How long does a strategy engagement take?",
    a: "4 to 6 weeks for the assessment and roadmap, depending on stack size and number of data sources. You get a real timeline after a short scoping call, not a range.",
  },
  {
    q: "Do you build the strategy after you write it?",
    a: "Yes, that is the point. We are certified on Snowflake and Databricks, so the same firm that sets the strategy executes the build. No handoff to a second vendor.",
  },
  {
    q: "What if I only need a fix, not a full strategy?",
    a: "We will tell you. If a two-week fix solves it, we are not going to sell you an engagement you do not need. Start with the assessment and we will be straight with you.",
  },
  {
    q: "Which platforms do you work with?",
    a: "Snowflake and Databricks primarily, and we stay vendor-neutral on the recommendation. We advise the platform that fits your team and budget, not the one we prefer to sell.",
  },
  {
    q: "Do you offer support after the roadmap is delivered?",
    a: "Yes. Most clients move straight from strategy into the build with the same team, and we stay on through execution and beyond.",
  },
];

const EnterpriseDataStrategyService = () => {
  return (
    <>
      <ServiceHero
        label="Enterprise Data Strategy"
        labelIcon={<Compass size={14} color="#2f6bff" />}
        titleLead="Enterprise Data Strategy That Your Team Can"
        titleAccent="Actually Execute"
        subhead="We map where your data breaks, what to fix first, and what it costs, then hand you a sequenced roadmap your team can start on Monday. Not another vision deck."
        primaryCta={{ label: "Talk to a Strategist", href: "#contact" }}
        secondaryCta={{ label: "See what we do", href: "#services" }}
        trustPoints={[
          "A roadmap with owners and costs, not a wish list",
          "Vendor-neutral, we recommend what fits not what we resell",
          "Certified on Snowflake and Databricks",
        ]}
        stats={HERO_STATS}
      />

      <ServiceTrustBar items={TRUST} />

      <ServiceCoreOfferings
        id="services"
        sectionLabel="What We Do"
        heading="Core Enterprise Data Strategy Services"
        subhead="The full path from “our data is a mess” to a plan you can build from, sequenced so the business never stops."
        items={SERVICES}
      />

      <ServiceMidCta
        headline="Not sure if you need a strategy or just a fix?"
        pitch="Start with an assessment. We audit your stack, rank what is actually costing you, and tell you straight whether you need a full engagement or a two-week fix."
        buttonLabel="Get a Data Assessment"
        buttonHref="#contact"
      />

      <ServiceWhyUs
        sectionLabel="Why Brilworks"
        heading="Strategists who plan it, then build it"
        subhead="We do not hand you a deck and leave. We stay on to execute the roadmap we wrote."
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
        subhead="Free assessments and calculators. Get a read in minutes, no sales call required."
        tools={TOOLS}
        exploreHref="/data-engineering-tools/"
      />

      <ServiceIndustries
        sectionLabel="Industries We Serve"
        heading="Data Strategy Built for Your Vertical"
        subhead="Data problems differ by industry. We set strategy in each of these."
        items={INDUSTRIES}
      />

      <ServiceFaq
        sectionLabel="Common Questions"
        heading="Enterprise Data Strategy, Answered"
        faqs={FAQ}
        idPrefix="data-strategy"
      />

      {/* CONTACT FORM */}
      <div id="contact">
        <SolutionContactForm
          title="Ready to turn your data into a decision?"
          description="One conversation is enough to know whether you need a full strategy or a quick fix. Tell us what you are building or what is costing you, and we will point you to the first step that fits."
          messageRequired={false}
          submitLabel="Talk to a Strategist"
          bgClassName="svc-mid-cta-bg"
          benefits={[
            "Free consultation with a senior data strategist",
            "Vendor-neutral recommendation, not a resale pitch",
            "Your cloud, your repo — zero lock-in",
            "Certified on Snowflake and Databricks",
            "Response guaranteed within 24 business hours",
          ]}
        />
      </div>
    </>
  );
};

export default EnterpriseDataStrategyService;
