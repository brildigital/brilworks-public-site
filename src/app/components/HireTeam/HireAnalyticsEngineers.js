import ServicePageTemplate from "../ServicePage/ServicePageTemplate";

const DATA = {
  hero: {
    tag: "Analytics Engineering · dbt · Data Modelling · BI",
    h1: [{ text: "Hire " }, { text: "Analytics Engineers", accent: true }],
    lede: "Analytics engineers who sit between raw data and business decisions — building the transformation layer, semantic layer, and data models that make dashboards trustworthy and self-serve possible.",
    ctas: [
      {
        label: "Book a scoping call →",
        cal: true,
        calLink: "vikas-singh-bril/30-min-product-eng-review",
        primary: true,
      },
    ],
    micro: [
      { star: true, text: "★★★★★ 5.0 on Clutch" },
      { sep: true },
      { text: "Snowflake & Databricks Partner" },
      { sep: true },
      { text: "dbt Core & dbt Cloud certified" },
    ],
    stats: [
      { v: "100+", l: "Analytics Engineering Projects" },
      { v: "18+", l: "Countries Served" },
      { v: "99%", l: "Client Satisfaction" },
      { v: "5×", l: "Average Reduction in Analyst SQL Query Time" },
    ],
  },

  proof: {
    tag: "Core analytics engineering stack",
    items: [
      { bold: "dbt Core" },
      { bold: "dbt Cloud" },
      { bold: "Snowflake" },
      { bold: "Databricks" },
      { bold: "BigQuery" },
      { bold: "Redshift" },
      { bold: "Looker", label: "LookML" },
      { bold: "Tableau" },
      { bold: "Power BI" },
      { bold: "Metabase" },
      { bold: "dbt Semantic Layer" },
      { bold: "dbt Mesh" },
      { bold: "SQL", label: "advanced" },
      { bold: "Jinja", label: "macros" },
    ],
    note: "Technologies used in production analytics stacks — not a checklist.",
  },

  capabilities: {
    tag: "What we build",
    h2: "Our analytics engineering services.",
    p: "Transformation layers, semantic layers, and data models that give analysts and stakeholders data they can trust.",
    list: [
      {
        n: "01",
        icon: "Layers",
        h3: "dbt transformation layer",
        p: "Build a modular, tested, version-controlled transformation layer using dbt Core or Cloud. Staging, intermediate, and mart layers with full lineage, data quality tests, and documentation your analysts can navigate.",
        chips: [
          "dbt Core",
          "dbt Cloud",
          "Staging / marts",
          "CI/CD for data",
          "dbt docs",
        ],
      },
      {
        n: "02",
        icon: "Cloud",
        h3: "Data modelling & warehouse design",
        p: "Design dimensional models, one big table strategies, or wide denormalised marts that match how your business asks questions — not just what was easiest to load.",
        chips: [
          "Dimensional modelling",
          "Star schema",
          "OBT",
          "Slowly changing dimensions",
        ],
      },
      {
        n: "03",
        icon: "Zap",
        h3: "Semantic layer & metrics definitions",
        p: "Define a single source of truth for metrics — revenue, activation, churn — using dbt Semantic Layer or LookML so every dashboard and data consumer works from the same numbers.",
        chips: [
          "dbt Semantic Layer",
          "LookML",
          "Metrics definitions",
          "Single source of truth",
        ],
      },
      {
        n: "04",
        icon: "FlaskConical",
        h3: "BI layer & dashboard engineering",
        p: "Build dashboards and self-serve analytics on top of a well-modelled data layer using Looker, Tableau, Power BI, or Metabase. Designed for business stakeholders who don't need to write SQL.",
        chips: ["Looker", "Tableau", "Power BI", "Metabase", "Self-serve"],
      },
      {
        n: "05",
        icon: "ShieldCheck",
        h3: "Data quality & observability",
        p: "Instrument models with dbt tests, source freshness checks, and anomaly detection so your analytics team stops second-guessing numbers and starts making decisions.",
        chips: [
          "dbt tests",
          "Source freshness",
          "Anomaly detection",
          "Data SLAs",
        ],
      },
    ],
  },

  why: {
    tag: "Why Brilworks",
    h2: "Why analytics teams choose us.",
    p: "Most analytics teams inherit a warehouse full of raw tables and no transformation layer. We build the layer that turns it into something analysts can use without a data engineer beside them.",
    cards: [
      {
        h4: "dbt-first from day one",
        p: "We don't bolt dbt on at the end. Transformation logic, tests, documentation, and CI/CD are designed as one system — not separate concerns handed to different people.",
      },
      {
        h4: "Modelling for business questions, not source systems",
        p: "We design marts that match how your business asks questions, not how the source data happens to be structured. Analysts find what they need without hunting through 200 tables.",
      },
      {
        h4: "Metrics that mean the same thing everywhere",
        p: "We define metrics once in the semantic layer so Revenue in Tableau matches Revenue in the board deck. No more metric discrepancy meetings.",
      },
      {
        h4: "Handover that actually transfers knowledge",
        p: "dbt docs, model READMEs, and a walkthrough your analysts can return to. We don't build black boxes.",
      },
    ],
  },

  work: {
    tag: "Selected work",
    h2: "Analytics stacks built for self-serve.",
    p: "Transformation layers and BI environments that analytics teams actually use daily.",
    builds: [
      {
        href: "#case-saas",
        dom: "SaaS · Product & revenue analytics",
        h3: "dbt transformation layer for 8-source SaaS warehouse",
        desc: "Designed and built a full dbt project consolidating product events, Stripe billing, Salesforce CRM, Zendesk support, and ad spend into named marts. Analysts went from writing custom SQL against raw tables to clicking into documented marts with freshness indicators.",
        spec: [
          ["Warehouse", "Snowflake"],
          ["Transform", "dbt Core"],
          ["Models", "140+ documented models"],
          ["Tests", "800+ data quality tests"],
        ],
        stk: [
          "Staging / intermediate / marts",
          "dbt docs",
          "CI/CD via GitHub Actions",
          "Metabase",
        ],
      },
      {
        href: "#case-ecom",
        dom: "eCommerce · Merchandising analytics",
        h3: "Semantic layer & LookML rebuild for merchandising team",
        desc: "Rebuilt a Looker instance where metric definitions had drifted across 60 Explores. Unified revenue, margin, and returns metrics in a single LookML semantic layer. One source of truth across 12 dashboards consumed by the merchandising, marketing, and finance teams.",
        spec: [
          ["Warehouse", "BigQuery"],
          ["Semantic", "LookML"],
          ["Metrics", "Unified across 60 Explores"],
          ["BI", "Looker"],
        ],
        stk: ["dbt Core", "LookML", "dbt Semantic Layer", "Google Cloud"],
      },
    ],
    quotes: [
      {
        stars: 5,
        text: "Before this engagement, every analyst had their own version of the revenue formula. Now we have one definition, documented in dbt, tested daily, and trusted by the CFO.",
        cite: "Head of Analytics, SaaS",
      },
      {
        stars: 5,
        text: "The dbt layer they built is the first thing our new analysts learn. It's documented well enough that they can be productive in a week without needing to ask the data team.",
        cite: "Director of Data, eCommerce",
      },
    ],
  },

  engage: {
    tag: "How we work",
    h2: "Our engagement models.",
    p: "Whether you need a dedicated analytics engineering function, embedded expertise, or a scoped dbt build.",
    models: [
      {
        icon: "Users",
        h3: "Dedicated Analytics Engineering Team",
        md: "A team of analytics engineers working exclusively on your transformation layer, semantic layer, and BI stack. Best for companies that need to build or rebuild a complete analytics foundation.",
        bill: "dedicated team, monthly.",
      },
      {
        icon: "UserPlus",
        h3: "Team Extension",
        md: "Embed analytics engineers into your existing data team. They join your dbt project, standups, and sprint ceremonies from day one. Best for scaling without a full hiring cycle.",
        bill: "per engineer, monthly.",
      },
      {
        icon: "Package",
        h3: "Project-Based Build",
        md: "Fixed-scope dbt layer, data model redesign, or semantic layer implementation. We own the delivery and hand over documented, tested, production-ready work. Best for defined analytics projects.",
        bill: "fixed-scope, quoted per project.",
      },
    ],
    quote: {
      text: "Their analytics engineers understood our data model within days. The dbt project they delivered is the cleanest thing in our entire data stack and our analysts say it daily.",
      cite: "VP Data & Analytics",
    },
  },

  process: {
    tag: "How it runs",
    h2: "How we deliver analytics engineering projects.",
    steps: [
      {
        n: "01",
        h4: "Discover",
        p: "Audit source systems, existing SQL logic, key business metrics, and how analysts currently work.",
      },
      {
        n: "02",
        h4: "Model",
        p: "Design staging, intermediate, and mart layers. Agree metric definitions and semantic layer structure before build.",
      },
      {
        n: "03",
        h4: "Build",
        p: "dbt model development, test coverage, documentation, and CI/CD pipeline setup.",
      },
      {
        n: "04",
        h4: "Validate",
        p: "Data reconciliation against existing reports, quality test runs, and stakeholder review of marts.",
      },
      {
        n: "05",
        h4: "Hand off",
        p: "dbt docs walkthrough, model READMEs, and onboarding session. Your analysts own what we built.",
      },
    ],
    quote: {
      text: "They modelled the data around how our business asks questions, not how our source systems happen to be structured. That difference is why analysts actually use it.",
      cite: "Head of Data",
    },
  },

  industries: {
    tag: "Industries we serve",
    h2: "Where we've built analytics layers.",
    items: [
      { label: "SaaS & Product Analytics", lead: true },
      { label: "eCommerce & Retail", lead: true },
      { label: "Fintech & Financial Services" },
      { label: "Healthtech & Life Sciences" },
      { label: "Media & Publishing" },
      { label: "Logistics & Supply Chain" },
      { label: "Manufacturing" },
    ],
  },

  faq: {
    tag: "Before you call",
    h2: "The questions we get most.",
    items: [
      {
        q: "What's the difference between a data engineer and an analytics engineer?",
        a: "Data engineers build the pipelines that move and load raw data. Analytics engineers build the transformation layer between raw data and the dashboards — the dbt models, metric definitions, and data marts that make data trustworthy and self-serve. In practice, our engagements often involve both, but the analytics engineering layer is what analysts interact with daily.",
      },
      {
        q: "Do you build with dbt Core or dbt Cloud?",
        a: "Both. We're proficient with dbt Core for teams running their own orchestration (Airflow, Dagster) and dbt Cloud for teams who want a managed environment with the IDE, job scheduler, and built-in docs. We'll recommend based on your existing infrastructure and team size.",
      },
      {
        q: "Can you audit and fix an existing dbt project?",
        a: "Yes. Audit-and-refactor is a common engagement. We review model structure, test coverage, documentation, CI/CD setup, and performance, then prioritise what to fix based on impact. Many teams come to us with a dbt project that grew organically and needs structural work.",
      },
      {
        q: "Which BI tools do you work with?",
        a: "Looker (LookML), Tableau, Power BI, Metabase, and Redash. We design the data model to serve the BI tool, not the other way around. If you're using dbt Semantic Layer or a metrics store, we can integrate that with your BI layer as well.",
      },
      {
        q: "Who owns the dbt project and models at the end?",
        a: "You do. All dbt models, tests, documentation, macros, and CI/CD configuration transfer to your team at handoff. Your analysts and data engineers inherit a production-grade project they can extend without coming back to us.",
      },
    ],
  },

  cta: {
    tag: "✦ Start here",
    h2: "Let's build a data layer your analysts trust.",
    p: "Whether you're starting a dbt project from scratch, refactoring an existing one, or rebuilding metrics that mean different things in different dashboards — we'll help you design the right model before any SQL is written.",
    ctas: [
      {
        label: "Book a scoping call →",
        cal: true,
        calLink: "vikas-singh-bril/30-min-product-eng-review",
        primary: true,
      },
      { label: "See how we work first", href: "#capabilities", primary: false },
    ],
    ticks: [
      "30-minute discovery call",
      "Snowflake & Databricks Partner",
      "No obligation",
    ],
  },
};

const HireAnalyticsEngineers = () => <ServicePageTemplate data={DATA} />;

export default HireAnalyticsEngineers;
