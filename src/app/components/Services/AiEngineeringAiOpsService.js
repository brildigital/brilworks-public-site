"use client";
import dynamic from "next/dynamic";
import {
  Cpu,
  ShieldCheck,
  GitCompare,
  RotateCcw,
  TrendingDown,
  RefreshCw,
  Code2,
  Bell,
  Layers,
  FileCheck,
  BadgeCheck,
  Star,
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
  { value: "85+", label: "Models in production", accent: true },
  {
    value: "42",
    label: "Data platforms shipped across 31 companies",
    accent: false,
  },
  { value: "99.9%", label: "Production uptime", accent: false },
  { value: "9", label: "Countries served", accent: true },
];

const SERVICES = [
  {
    title: "Feature stores",
    body: "The most common bug we're called in to fix: the model saw one thing in training and something different in production. A feature store closes that gap. It serves the same features, computed the same way, to both sides. Boring infrastructure. It saves you from the worst kind of silent failure.",
    features: [
      "One definition of each feature, used in training and serving",
      "Point-in-time correctness, so you don't leak future data into training",
      "Reuse across models, so the next project starts ahead",
    ],
    image: "/images/v2/custom-feature-integration.webp",
    reverse: false,
  },
  {
    title: "Model deployment",
    body: "A deploy button isn't a deployment strategy. We ship models with the parts that matter when something goes wrong: versioning, staged rollout, and a rollback that works. So a bad model version is an inconvenience, not an incident.",
    features: [
      "Versioned deploys with staged rollout, not all-at-once",
      "Rollback that actually reverts, tested before you need it",
      "Serving built for your latency and scale, not a generic default",
    ],
    image: "/images/v2/deployment-services.webp",
    reverse: true,
  },
  {
    title: "Model monitoring",
    body: "A model doesn't crash when it goes wrong. It just gets quietly worse while everyone assumes it's fine. We monitor for drift, degraded accuracy, and the slow rot that comes as the world stops matching the training data. You hear about it before your users do.",
    features: [
      "Data and prediction drift tracked continuously",
      "Accuracy and performance watched against a live baseline",
      "Alerts that reach a person, not a dashboard nobody checks",
    ],
    image: "/images/v2/ai-powered-dashboard-banner.webp",
    reverse: false,
  },
  {
    title: "AIOps",
    body: "The operational layer that keeps all of it running. AIOps is the difference between a model your team babysits and one that mostly runs itself, with retraining, pipelines, and incident response wired in. So your data scientists build the next model instead of nursing the last one.",
    features: [
      "Automated retraining triggered by drift, not by the calendar",
      "Pipelines and infrastructure managed as code",
      "Incident response and on-call playbooks built in",
    ],
    image: "/images/v2/devops-automation.webp",
    reverse: true,
  },
];

const BENEFITS = [
  {
    title: "Training-serving parity",
    tint: "#e8f0fd",
    body: "Feature stores so the model sees the same thing in production it saw in training.",
    icon: <GitCompare size={32} color="#017eeb" />,
  },
  {
    title: "Rollback that works",
    tint: "#ede9fe",
    body: "Tested before you need it, not discovered mid-incident.",
    icon: <RotateCcw size={32} color="#4f46e5" />,
  },
  {
    title: "Drift caught early",
    tint: "#d1fae5",
    body: "We alert on quiet degradation before your users feel it.",
    icon: <TrendingDown size={32} color="#10b981" />,
  },
  {
    title: "Retraining on triggers",
    tint: "#ccfbf1",
    body: "Models retrain when drift demands it, not on an arbitrary schedule.",
    icon: <RefreshCw size={32} color="#0d9488" />,
  },
  {
    title: "Infra as code",
    tint: "#cffafe",
    body: "Your ML infrastructure is versioned and reproducible, not hand-configured.",
    icon: <Code2 size={32} color="#0891b2" />,
  },
  {
    title: "Alerts reach a person",
    tint: "#dbeafe",
    body: "Monitoring that pages someone, not a graph nobody opens.",
    icon: <Bell size={32} color="#1e40af" />,
  },
  {
    title: "Built on your platform",
    tint: "#e8f0fd",
    body: "Deployed on Snowflake, Databricks, or your cloud, not a stack you'll fight later.",
    icon: <Layers size={32} color="#017eeb" />,
  },
  {
    title: "Handed over clean",
    tint: "#ede9fe",
    body: "Your team can run it after we leave, with playbooks and docs.",
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
      "We had a model degrading silently in production. Monitoring caught the drift before our customers noticed anything was wrong.",
  },
  {
    initials: "—",
    name: "[Name pending]",
    role: "[Title, Company — pending]",
    quote:
      "Training-serving skew was causing bad predictions for months. The feature store fixed it in one build.",
  },
  {
    initials: "—",
    name: "[Name pending]",
    role: "[Title, Company — pending]",
    quote:
      "AIOps automation freed our data science team from babysitting deploys. They're building the next model instead.",
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
    q: "What is AI engineering, and how is it different from data science?",
    a: "Data science builds the model. AI engineering makes it a production system, deploying it, serving its features, monitoring it, and keeping it running as things change. A model that works in a notebook still needs all of that before it's a product.",
  },
  {
    q: "What is AIOps?",
    a: "The operational layer for machine learning in production. It covers automated retraining, infrastructure managed as code, monitoring, and incident response, the work that keeps models running without a person babysitting them.",
  },
  {
    q: "Why do we need a feature store?",
    a: "Because the most common production bug is a model seeing different data in serving than it saw in training. A feature store serves the same features, computed the same way, to both. It also lets your next model reuse them instead of rebuilding.",
  },
  {
    q: "How do you catch a model that's getting worse?",
    a: "Monitoring for drift and degraded accuracy against a live baseline. A model rarely fails loudly, it degrades quietly. We alert on that before your users notice.",
  },
  {
    q: "Can you fix a model that already works in testing but fails in production?",
    a: "Usually yes. That gap is almost always feature skew, deployment issues, or unmonitored drift. We find which one and fix it.",
  },
  {
    q: "Do you work on our existing cloud and platform?",
    a: "Yes. We deploy on Snowflake, Databricks, or your existing cloud, and build the infrastructure to fit what you already run.",
  },
  {
    q: "Will my team be able to maintain it after you leave?",
    a: "Yes. We hand over with infrastructure as code, monitoring, and on-call playbooks so your team runs it without us.",
  },
];

const AiEngineeringAiOpsService = () => {
  return (
    <>
      <ServiceHero
        label="AI Engineering (AIOps)"
        labelIcon={<Cpu size={14} color="#2f6bff" />}
        titleLead="A Model in a Notebook"
        titleAccent="Isn't in Production"
        subhead="Getting a model to work once is the easy part. Keeping it working, as data drifts and traffic climbs and something breaks at 2am, is the job. We build the deployment, monitoring, and feature infrastructure that turns a trained model into a system you can trust."
        primaryCta={{ label: "Talk to an Engineer", href: "#contact" }}
        secondaryCta={{ label: "See What We Build", href: "#services" }}
        trustPoints={[
          "Models deployed with rollback, not just a deploy button",
          "Drift caught before your users catch it",
          "Features served the same in training and production",
        ]}
        stats={HERO_STATS}
      />

      <ServiceTrustBar items={TRUST} />

      <ServiceCoreOfferings
        id="services"
        sectionLabel="What We Do"
        heading="Core AI Engineering Services"
        subhead="The infrastructure between a trained model and a working product. Most teams underbuild this and pay for it later. We build it once, properly."
        items={SERVICES}
      />

      <ServiceMidCta
        headline="Got a model that works in testing but not in production?"
        pitch="A short call is enough to find where it's breaking, drift, features, or deployment, and what it takes to fix."
        buttonLabel="Talk to an Engineer"
        buttonHref="#contact"
      />

      <ServiceWhyUs
        sectionLabel="Why Brilworks"
        heading="Engineers who keep models running after launch"
        subhead="Anyone can deploy a model on a good day. We build the infrastructure that keeps it working on the bad ones, when the data shifts and the traffic spikes and nobody's watching."
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
        heading="Check Your ML Infrastructure Before It Breaks"
        subhead="Free assessments for teams running models in production. Real answers in minutes, no signup."
        tools={TOOLS}
        exploreHref="/data-engineering-tools/"
      />

      <ServiceIndustries
        sectionLabel="Industries We Serve"
        heading="AI Engineering Built for Your Vertical"
        subhead="A fraud model for a fintech and a demand-forecasting model for a manufacturer fail in different ways. We've kept both running."
        items={INDUSTRIES}
      />

      <ServiceFaq
        sectionLabel="Common Questions"
        heading="AI Engineering & AIOps, Answered"
        faqs={FAQ}
        idPrefix="ai-engineering"
      />

      {/* CONTACT FORM */}
      <div id="contact">
        <SolutionContactForm
          title="Ready to make your model production-grade?"
          description="One conversation is enough to know where it's breaking, drift, features, or deployment, and what it takes to fix."
          messageRequired={false}
          submitLabel="Talk to an Engineer"
          bgClassName="svc-mid-cta-bg"
          benefits={[
            "Free consultation with a senior AI/ML engineer",
            "Drift caught before your users catch it",
            "Rollback tested before you need it",
            "Certified on Snowflake and Databricks",
            "Response guaranteed within 24 business hours",
          ]}
        />
      </div>
    </>
  );
};

export default AiEngineeringAiOpsService;
