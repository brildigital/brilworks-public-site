"use client";
import dynamic from "next/dynamic";
import {
  LayoutDashboard,
  ShieldCheck,
  Target,
  Hash,
  Users,
  Zap,
  Scale,
  FileCheck,
  CheckCircle2,
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
  { value: "150+", label: "Dashboards shipped", accent: true },
  { value: "40+", label: "Companies", accent: false },
  { value: "35+", label: "BI tools deployed", accent: false },
  { value: "92%", label: "Report adoption", accent: true },
];

const SERVICES = [
  {
    title: "Dashboard development",
    body: "The dashboards your team runs decisions on, built in Power BI, Tableau, or Looker. We design for the question being asked, not for how many charts fit on a screen, so people find the answer instead of scrolling past it.",
    features: [
      "Built around the decision, not the chart count",
      "One agreed number per metric, no dueling dashboards",
      "Fast to load, even on real data volume",
    ],
    image: "/images/v2/dashboard-development.webp",
    reverse: false,
  },
  {
    title: "Self-service BI",
    body: "The setup that lets business teams answer their own questions without filing a ticket to data. We model the data and build the guardrails so self-serve does not turn into forty conflicting versions of the truth.",
    features: [
      "Business teams answer their own questions",
      "Governed models, so self-serve stays consistent",
      "Fewer tickets to the data team, not more chaos",
    ],
    image: "/images/v2/self_service_bi.webp",
    reverse: true,
  },
  {
    title: "Executive and operational reporting",
    body: "The reports leadership actually reads: the KPIs that matter, refreshed automatically, with the one number per metric that everyone agrees on. No more three teams bringing three different revenue figures to the same meeting.",
    features: [
      "KPIs leadership agreed on, refreshed automatically",
      "One revenue number, one churn number, company-wide",
      "Scheduled delivery, no manual spreadsheet assembly",
    ],
    image: "/images/v2/custom_analytics_dashboard.webp",
    reverse: false,
  },
  {
    title: "Data modeling and semantic layer",
    body: "The layer between your warehouse and your dashboards that defines what every metric means. This is why the numbers agree. We build it so a metric is defined once and used everywhere, not redefined in every report.",
    features: [
      "Metrics defined once, used everywhere",
      "The reason your dashboards finally agree",
      "Built on your warehouse, governed and documented",
    ],
    image: "/images/v2/data_lake_data_warehouse.webp",
    reverse: true,
  },
];

const BENEFITS = [
  {
    title: "Built for adoption",
    tint: "#e8f0fd",
    body: "Designed around the decision, not the chart count.",
    icon: <Target size={32} color="#017eeb" />,
  },
  {
    title: "One number, one meaning",
    tint: "#ede9fe",
    body: "A semantic layer so dashboards finally agree.",
    icon: <Hash size={32} color="#4f46e5" />,
  },
  {
    title: "On trustworthy data",
    tint: "#d1fae5",
    body: "BI is only as good as the pipeline under it. We build both.",
    icon: <ShieldCheck size={32} color="#10b981" />,
  },
  {
    title: "Self-serve, governed",
    tint: "#ccfbf1",
    body: "Business teams answer their own questions, safely.",
    icon: <Users size={32} color="#0d9488" />,
  },
  {
    title: "Fast on real volume",
    tint: "#cffafe",
    body: "Loads quickly even on production-scale data.",
    icon: <Zap size={32} color="#0891b2" />,
  },
  {
    title: "Tool-neutral",
    tint: "#dbeafe",
    body: "Power BI, Tableau, or Looker, whatever fits your team.",
    icon: <Scale size={32} color="#1e40af" />,
  },
  {
    title: "Owned by your team",
    tint: "#e8f0fd",
    body: "Documented models your analysts can extend.",
    icon: <FileCheck size={32} color="#017eeb" />,
  },
  {
    title: "Fewer meetings about numbers",
    tint: "#ede9fe",
    body: "Everyone brings the same figure to the room.",
    icon: <CheckCircle2 size={32} color="#4f46e5" />,
  },
];

const TESTIMONIALS = [
  {
    initials: "LB",
    name: "Lena Brooks",
    role: "VP Operations, Logistics",
    quote:
      "Our ops dashboard went from a screenshot nobody opened to the thing the whole floor checks every morning.",
  },
  {
    initials: "OF",
    name: "Omar Farouk",
    role: "Head of BI, Fintech",
    quote:
      "Finance and sales stopped bringing two different revenue numbers to the same meeting. One semantic layer fixed a year of arguments.",
  },
  {
    initials: "GL",
    name: "Grace Lin",
    role: "Data Team Lead, E-Commerce",
    quote:
      "Our ticket queue for ad-hoc reports dropped by half. Marketing just builds what they need now.",
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
    q: "What is business intelligence development?",
    a: "Building the dashboards, reports, and self-service analytics your company uses to make decisions, on top of a data layer where the numbers are trustworthy and consistent. The dashboards are the visible part. The modeling underneath is what makes them agree.",
  },
  {
    q: "Why do so many dashboards go unused?",
    a: "Usually a trust problem, not a tool problem. If two dashboards show two revenue numbers, people stop trusting both and go back to their own spreadsheet. We fix it with a semantic layer that defines each metric once, so the numbers agree and people come back.",
  },
  {
    q: "Which BI tools do you build in?",
    a: "Power BI, Tableau, and Looker. We are tool-neutral and recommend the one that fits your team's skills and budget, not the one we would prefer to sell. Sometimes you already own the right one and just need it built properly.",
  },
  {
    q: "Do I need my data platform sorted before BI?",
    a: "To a point, yes. BI is only as good as the data under it, and a dashboard on broken pipelines just shows wrong numbers faster. If the foundation is not there, we can build both, the pipeline and the reporting on top of it.",
  },
  {
    q: "What is a semantic layer and do I need one?",
    a: "It is the layer that defines what every metric means, sitting between your warehouse and your dashboards. You need it the moment two reports disagree on the same number. It is the single biggest fix for the \"whose figure is right\" problem.",
  },
  {
    q: "Can our business teams build their own reports?",
    a: "That is what self-service BI is for. We model the data and set guardrails so business teams answer their own questions without creating forty conflicting versions of the truth, and without every request landing on the data team.",
  },
  {
    q: "Do you offer ongoing support after the build?",
    a: "Yes. Reporting needs change as the business does. Many clients keep us on to add metrics, build new dashboards, and extend the model as they grow.",
  },
];

const BusinessIntelligenceDevelopmentService = () => {
  return (
    <>
      <ServiceHero
        label="Business Intelligence Development"
        labelIcon={<LayoutDashboard size={14} color="#2f6bff" />}
        titleLead="Dashboards Your Team"
        titleAccent="Actually Opens"
        subhead="Most BI ends as forty dashboards no one looks at. We build reporting people use, on a data layer where the same number means one thing everywhere, so decisions run on trust, not on a spreadsheet someone kept on the side."
        primaryCta={{ label: "Talk to a BI Engineer", href: "#contact" }}
        secondaryCta={{ label: "See what we build", href: "#services" }}
        trustPoints={[
          "Built on data you can trust, one number, one meaning",
          "Designed for adoption, not just delivery",
          "Self-serve, so people stop queuing for reports",
        ]}
        stats={HERO_STATS}
      />

      <ServiceTrustBar items={TRUST} />

      <ServiceCoreOfferings
        id="services"
        sectionLabel="What We Build"
        heading="Core Business Intelligence Development Services"
        subhead="The reporting layer that sits on your data platform, built so people trust the numbers and actually use what we ship."
        items={SERVICES}
      />

      <ServiceMidCta
        headline="Drowning in dashboards nobody opens?"
        pitch="Most BI problems are not a tool problem, they are a trust problem. Our free BI audit finds why your reports go unused and what to fix first."
        buttonLabel="Get a BI Audit"
        buttonHref="#contact"
      />

      <ServiceWhyUs
        sectionLabel="Why Brilworks"
        heading="BI engineers who build reports people use"
        subhead="Anyone can ship a dashboard. Shipping one your team opens next quarter, on numbers they trust, is the part most BI work gets wrong."
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
        heading="Size Up Your BI Stack Before You Commit"
        subhead="Free assessments for data and BI teams. Get a read in minutes, no sales call required."
        tools={TOOLS}
        exploreHref="/data-engineering-tools/"
      />

      <ServiceIndustries
        sectionLabel="Industries We Serve"
        heading="Business Intelligence Built for Your Vertical"
        subhead="The metrics that matter differ by industry. We have built reporting for teams in each of these."
        items={INDUSTRIES}
      />

      <ServiceFaq
        sectionLabel="Common Questions"
        heading="Business Intelligence Development Services, Answered"
        faqs={FAQ}
        idPrefix="bi-development"
      />

      {/* CONTACT FORM */}
      <div id="contact">
        <SolutionContactForm
          title="Ready to build BI your team actually uses?"
          description="One conversation is enough to know whether we are the right fit. Tell us where your reporting falls down, and we will point you to what to fix first."
          messageRequired={false}
          submitLabel="Talk to a BI Engineer"
          bgClassName="svc-mid-cta-bg"
          benefits={[
            "Free consultation with a senior BI engineer",
            "Free BI audit that flags why reports go unused",
            "Tool-neutral — Power BI, Tableau, or Looker",
            "Certified on Snowflake and Databricks",
            "Response guaranteed within 24 business hours",
          ]}
        />
      </div>
    </>
  );
};

export default BusinessIntelligenceDevelopmentService;
