import ServicePageTemplate from "../ServicePage/ServicePageTemplate";

const DATA = {
  hero: {
    tag: "Snowflake Partner · Data Warehouse · Analytics Engineering",
    h1: [{ text: "Hire " }, { text: "Snowflake Developers", accent: true }],
    lede: "Certified Snowflake engineers who design, migrate, and optimise your data warehouse. Company-wide Snowflake Partner accreditation — certified engineers on every engagement, not just the pitch.",
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
      { text: "Snowflake Partner" },
      { sep: true },
      { text: "Certified engineers on every project" },
    ],
    stats: [
      { v: "50+", l: "Snowflake Projects Delivered" },
      { v: "100%", l: "Certified Engineers on Every Engagement" },
      { v: "18+", l: "Countries Served" },
      { v: "3×", l: "Average Query Performance Improvement" },
    ],
  },

  proof: {
    tag: "Core Snowflake stack",
    items: [
      { bold: "Snowflake" },
      { bold: "dbt Core", label: "analytics engineering" },
      { bold: "Snowpipe", label: "continuous ingest" },
      { bold: "Dynamic Tables" },
      { bold: "Tasks & Streams" },
      { bold: "Zero-Copy Cloning" },
      { bold: "Iceberg Tables" },
      { bold: "Cortex AI" },
      { bold: "Delta Sharing" },
      { bold: "Fivetran" },
      { bold: "Airbyte" },
      { bold: "Terraform", label: "IaC" },
      { bold: "Python Worksheets" },
      { bold: "SnowSQL" },
    ],
    note: "Technologies deployed on production Snowflake environments — not a checklist.",
  },

  capabilities: {
    tag: "What we build",
    h2: "Our Snowflake engineering services.",
    p: "From first-load migration to cost-optimised, governed data platforms that analytics teams actually trust.",
    list: [
      {
        n: "01",
        icon: "Cloud",
        h3: "Data warehouse design & cloud migration",
        p: "Architect Snowflake environments fit for your data volumes, query patterns, and team structure. Migrate from on-prem, Redshift, BigQuery, or Synapse with zero data loss and minimal downtime.",
        chips: [
          "Cloud migration",
          "Schema design",
          "Redshift migration",
          "Multi-cluster warehouses",
        ],
      },
      {
        n: "02",
        icon: "Layers",
        h3: "dbt analytics engineering",
        p: "Build a modular, version-controlled transformation layer with dbt Core or Cloud. Staging, intermediate, and mart layers with full lineage, tests, and documentation built in.",
        chips: [
          "dbt Core",
          "dbt Cloud",
          "Data modelling",
          "Lineage",
          "CI/CD for data",
        ],
      },
      {
        n: "03",
        icon: "Zap",
        h3: "Performance tuning & cost optimisation",
        p: "Identify expensive queries, rationalise warehouse sizes, implement clustering keys, materialisation strategies, and query result caching to cut costs without touching your logic.",
        chips: [
          "Clustering keys",
          "Materialisation",
          "Query profiling",
          "Credit reduction",
        ],
      },
      {
        n: "04",
        icon: "ShieldCheck",
        h3: "Data governance & security",
        p: "Implement role-based access control, column-level masking, row-level access policies, and dynamic data masking using Snowflake's native governance features.",
        chips: [
          "RBAC",
          "Column masking",
          "Row access policies",
          "Data sharing",
        ],
      },
      {
        n: "05",
        icon: "Brain",
        h3: "Cortex AI & ML pipelines",
        p: "Bring ML and LLM capabilities directly into Snowflake using Cortex AI functions, Python Worksheets, and Snowpark — so your data stays in one place.",
        chips: ["Cortex AI", "Snowpark", "Python Worksheets", "ML inference"],
      },
    ],
  },

  why: {
    tag: "Why Brilworks",
    h2: "Why data teams choose us for Snowflake.",
    p: "Plenty of vendors claim Snowflake expertise. Company-wide partner accreditation and certified engineers on every project — not just a badge in a footer.",
    cards: [
      {
        h4: "Certified on every engagement, not just the sales call",
        p: "Every Snowflake project is staffed with certified engineers. We don't put one certified person on the pitch and swap them out for generalists.",
      },
      {
        h4: "Data engineering depth, not just DBA skills",
        p: "We build pipelines, transformation layers, and ML-ready platforms — not just schemas and user grants. Snowflake is one tool in a complete data stack.",
      },
      {
        h4: "Cost accountability built in",
        p: "We architect with Snowflake credit consumption in mind from day one. Query efficiency and warehouse sizing decisions are part of every design review.",
      },
      {
        h4: "Flexible teams that fit your organisation",
        p: "Dedicated Snowflake team, embedded engineers inside yours, or a fixed-scope build. We match the engagement model to your stage and structure.",
      },
    ],
  },

  work: {
    tag: "Selected work",
    h2: "Snowflake platforms running in production.",
    p: "Real data platforms built for analytics teams who need to trust what they're looking at.",
    builds: [
      {
        href: "#case-fintech",
        dom: "Fintech · Multi-source consolidation",
        h3: "Unified financial data warehouse on Snowflake",
        desc: "Migrated six disparate data sources — core banking, CRM, payment processors, and third-party enrichment APIs — into a single Snowflake environment with a dbt transformation layer powering regulatory and executive reporting.",
        spec: [
          ["Platform", "Snowflake Enterprise"],
          ["Transform", "dbt Core"],
          ["Ingest", "Fivetran · custom Snowpipe"],
          ["Governance", "RBAC · column masking"],
        ],
        stk: [
          "Dynamic Tables",
          "Zero-copy cloning",
          "CI/CD for data",
          "Row-level security",
        ],
      },
      {
        href: "#case-saas",
        dom: "SaaS · B2B product analytics",
        h3: "Multi-tenant analytics platform with row-level security",
        desc: "Designed a Snowflake-backed analytics platform where each customer can safely query their own data through a shared warehouse. Row-access policies and column masking ensure strict tenant isolation without schema-per-tenant complexity.",
        spec: [
          ["Platform", "Snowflake Business Critical"],
          ["Transform", "dbt Cloud"],
          ["Security", "Row access policies"],
          ["Latency", "sub-2s dashboard queries"],
        ],
        stk: [
          "Multi-tenant isolation",
          "Clustering keys",
          "Cortex AI",
          "Delta Sharing",
        ],
      },
    ],
    quotes: [
      {
        stars: 5,
        text: "They came in with a clear migration strategy, handled all the complexity of moving our legacy warehouse to Snowflake, and left us with a dbt layer our analysts can actually own.",
        cite: "Head of Data, Fintech",
      },
      {
        stars: 5,
        text: "The performance gains were measurable within the first week. Clustering key recommendations alone cut our biggest dashboard's query time from 40 seconds to under 3.",
        cite: "VP Engineering, SaaS",
      },
    ],
  },

  engage: {
    tag: "How we work",
    h2: "Our engagement models.",
    p: "Flexible models whether you need a dedicated Snowflake team, embedded engineers, or a fixed-scope data warehouse build.",
    models: [
      {
        icon: "Users",
        h3: "Dedicated Snowflake Team",
        md: "A cross-functional team of Snowflake architects, dbt engineers, data pipeline engineers, and analytics engineers working exclusively on your data platform. Best for companies building or rebuilding their core data warehouse.",
        bill: "dedicated team, monthly.",
      },
      {
        icon: "UserPlus",
        h3: "Team Extension",
        md: "Embed certified Snowflake engineers into your existing data team to accelerate delivery. They join your repo, standups, and sprint ceremonies and ramp quickly. Best for scaling capacity without a full hiring cycle.",
        bill: "per engineer, monthly.",
      },
      {
        icon: "Package",
        h3: "Project-Based Build",
        md: "Fixed-scope engagement covering migration, schema design, transformation layer, and governance setup. Delivered, tested, documented, and handed over. Best for well-defined warehouse projects.",
        bill: "fixed-scope, quoted per project.",
      },
    ],
    quote: {
      text: "Their Snowflake engineers integrated seamlessly with our team. They understood our data model quickly, proposed sensible architecture decisions, and delivered on schedule.",
      cite: "Data Engineering Lead",
    },
  },

  process: {
    tag: "How it runs",
    h2: "How we deliver Snowflake projects.",
    p: "From audit to handoff, no surprises at any stage.",
    steps: [
      {
        n: "01",
        h4: "Assess",
        p: "Audit current data infrastructure, query patterns, ingestion sources, and reporting requirements.",
      },
      {
        n: "02",
        h4: "Architect",
        p: "Design Snowflake environment, warehouse strategy, data model, and transformation layer before any migration begins.",
      },
      {
        n: "03",
        h4: "Build & migrate",
        p: "Pipeline engineering, schema migration, dbt model development, and incremental data loads.",
      },
      {
        n: "04",
        h4: "Optimise",
        p: "Clustering, materialisation strategy, warehouse sizing, and credit consumption review.",
      },
      {
        n: "05",
        h4: "Hand off",
        p: "Documented models, runbooks, and knowledge transfer so your team owns what we built.",
      },
    ],
    quote: {
      text: "The process was structured and collaborative. We reviewed architecture decisions together before build started — which meant no expensive pivots mid-project.",
      cite: "CTO",
    },
  },

  industries: {
    tag: "Industries we serve",
    h2: "Where we've deployed Snowflake.",
    p: "Snowflake delivers the most value where data volumes are high, regulatory requirements are strict, or analytics teams need to move fast.",
    items: [
      { label: "Fintech & Financial Services", lead: true },
      { label: "SaaS & Product Analytics", lead: true },
      { label: "Healthtech & Life Sciences" },
      { label: "Retail & eCommerce" },
      { label: "Media & Publishing" },
      { label: "Manufacturing" },
      { label: "Logistics & Supply Chain" },
    ],
  },

  faq: {
    tag: "Before you call",
    h2: "The questions we get most.",
    items: [
      {
        q: "Are your engineers actually Snowflake certified?",
        a: "Yes. We hold company-wide Snowflake Partner accreditation and staff every project with certified SnowPro Core or Advanced engineers — not just account managers. You can ask to see certifications before the engagement starts.",
      },
      {
        q: "Can you migrate our existing data warehouse to Snowflake?",
        a: "That's one of our most common engagements. We handle migrations from Redshift, BigQuery, Azure Synapse, on-prem SQL Server, and legacy MPP warehouses. We include a migration strategy, schema translation, pipeline rebuild, and validation against your existing reports.",
      },
      {
        q: "Do you build dbt alongside Snowflake?",
        a: "Always. We architect the transformation layer with dbt Core or dbt Cloud from the start. That gives your analytics team a version-controlled, tested, documented model layer they can own and extend.",
      },
      {
        q: "How long does a typical Snowflake project take?",
        a: "Scope determines timeline. A focused migration from a single source with a defined data model takes 4–8 weeks. A full data platform rebuild with multiple ingestion pipelines, a dbt transformation layer, and governance setup typically runs 3–6 months.",
      },
      {
        q: "Can you help reduce our Snowflake costs?",
        a: "Yes. Cost optimisation is a common standalone engagement. We audit your warehouse configuration, query patterns, clustering strategies, and materialisation choices. Most clients see 30–60% credit reduction without changing business logic.",
      },
      {
        q: "Who owns the code and data models at the end?",
        a: "You do. All dbt models, pipeline code, Terraform configurations, and documentation transfer to you at handoff. No lock-in — your team can extend everything we build.",
      },
    ],
  },

  cta: {
    tag: "✦ Start here",
    h2: "Let's build your Snowflake data platform.",
    p: "Whether you're migrating an existing warehouse, building your first analytics layer, or optimising a platform that's grown too expensive — we'll help you define the right architecture before any code is written.",
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
      "Certified engineers on every project",
      "No obligation",
    ],
  },
};

const HireSnowflakeDevelopers = () => <ServicePageTemplate data={DATA} />;

export default HireSnowflakeDevelopers;
