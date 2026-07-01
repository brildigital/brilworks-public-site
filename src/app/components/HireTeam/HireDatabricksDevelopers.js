import ServicePageTemplate from "../ServicePage/ServicePageTemplate";

const DATA = {
  hero: {
    tag: "Databricks Partner · Lakehouse · Data Engineering · ML",
    h1: [
      { text: "Hire " },
      { text: "Databricks Developers", accent: true },
    ],
    lede: "Certified Databricks engineers building production lakehouses, streaming pipelines, and ML platforms. Company-wide Databricks Partner status with certified engineers on every engagement — not just the credential on a website.",
    ctas: [
      { label: "Book a scoping call →", cal: true, calLink: "vikas-singh-bril/30-min-product-eng-review", primary: true },
      { label: "See how we work", href: "#capabilities", primary: false },
    ],
    micro: [
      { star: true, text: "★★★★★ 5.0 on Clutch" },
      { sep: true },
      { text: "Databricks Partner" },
      { sep: true },
      { text: "Certified engineers on every project" },
    ],
    stats: [
      { v: "40+", l: "Databricks Projects Delivered" },
      { v: "100%", l: "Certified Engineers on Every Engagement" },
      { v: "18+", l: "Countries Served" },
      { v: "10×", l: "Typical Pipeline Performance Gain vs Legacy ETL" },
    ],
  },

  proof: {
    tag: "Core Databricks stack",
    items: [
      { bold: "Databricks" },
      { bold: "Delta Lake" },
      { bold: "Apache Spark" },
      { bold: "MLflow" },
      { bold: "Unity Catalog" },
      { bold: "Delta Live Tables" },
      { bold: "Auto Loader" },
      { bold: "Photon Engine" },
      { bold: "DBSQL", label: "serverless" },
      { bold: "Feature Store" },
      { bold: "Databricks Workflows" },
      { bold: "PySpark" },
      { bold: "Structured Streaming" },
      { bold: "Lakehouse Monitoring" },
    ],
    note: "Technologies deployed on production Databricks platforms — not a checklist.",
  },

  capabilities: {
    tag: "What we build",
    h2: "Our Databricks engineering services.",
    p: "From lakehouse design to production ML — the full data and AI stack inside a single Databricks environment.",
    list: [
      {
        n: "01",
        icon: "Layers",
        h3: "Lakehouse architecture & Delta Lake",
        p: "Design medallion architectures (bronze, silver, gold) on Delta Lake that handle batch and streaming in one place. We architect for reliability, schema evolution, and time-travel from day one.",
        chips: ["Medallion architecture", "Delta Lake", "Schema evolution", "Time travel"],
      },
      {
        n: "02",
        icon: "RefreshCw",
        h3: "Spark pipelines & streaming",
        p: "Build production-grade batch and streaming pipelines using PySpark, Structured Streaming, Delta Live Tables, and Auto Loader. Designed for operational reliability, not just throughput benchmarks.",
        chips: ["PySpark", "Structured Streaming", "Delta Live Tables", "Auto Loader"],
      },
      {
        n: "03",
        icon: "Brain",
        h3: "ML platforms with MLflow & Feature Store",
        p: "Stand up end-to-end ML platforms on Databricks — experiment tracking with MLflow, feature engineering and serving with Feature Store, and model deployment via Databricks Model Serving.",
        chips: ["MLflow", "Feature Store", "Model Serving", "Experiment tracking"],
      },
      {
        n: "04",
        icon: "ShieldCheck",
        h3: "Unity Catalog & data governance",
        p: "Implement Unity Catalog for centralised access control, data lineage, and auditing across all Databricks workspaces. Column masking, row filters, and tag-based governance built in.",
        chips: ["Unity Catalog", "Column masking", "Row filters", "Lineage"],
      },
      {
        n: "05",
        icon: "Zap",
        h3: "DBSQL analytics & BI acceleration",
        p: "Configure Databricks SQL warehouses and serverless endpoints for BI workloads. Query optimisation, Photon acceleration, and caching strategies that make dashboards responsive at data warehouse scale.",
        chips: ["DBSQL", "Photon Engine", "BI acceleration", "Serverless SQL"],
      },
    ],
  },

  why: {
    tag: "Why Brilworks",
    h2: "Why data & ML teams choose us for Databricks.",
    p: "Databricks spans data engineering, ML, and analytics. Most vendors cover one layer. We engineer the full lakehouse.",
    cards: [
      {
        h4: "Certified on every project, every time",
        p: "Every Databricks engagement is staffed with certified engineers — Databricks Certified Data Engineer or ML Professional. Not one specialist on the pitch deck and generalists on the ground.",
      },
      {
        h4: "Data engineering and ML under one team",
        p: "Most shops treat pipelines and ML as separate workstreams. We build them together — Feature Store integration, lineage, and model training pipelines designed as one system.",
      },
      {
        h4: "Production-first, not notebook-first",
        p: "We build modular, tested, CI/CD-deployed pipelines — not notebooks that work once in a sandbox. Production reliability is the design constraint, not an afterthought.",
      },
      {
        h4: "Migration and greenfield both in scope",
        p: "Whether you're migrating from legacy ETL, consolidating warehouses into a lakehouse, or building net-new — we've done both and can advise on which path fits your situation.",
      },
    ],
  },

  work: {
    tag: "Selected work",
    h2: "Databricks platforms running in production.",
    p: "Lakehouses and ML platforms built for teams that rely on them every day.",
    builds: [
      {
        href: "#case-healthtech",
        dom: "Healthtech · Clinical data platform",
        h3: "Clinical data lakehouse for multi-site EHR analytics",
        desc: "Built a HIPAA-compliant Delta Lake lakehouse consolidating HL7 FHIR feeds, HL7 v2 messages, and device telemetry from five hospital sites. A medallion architecture with PII masking at the silver layer powers compliance reporting and clinical ML models.",
        spec: [
          ["Platform", "Databricks on AWS"],
          ["Ingest", "Auto Loader · Kafka"],
          ["Govern", "Unity Catalog · column masking"],
          ["ML", "MLflow · Feature Store"],
        ],
        stk: ["Delta Live Tables", "Structured Streaming", "PySpark", "HIPAA compliance"],
      },
      {
        href: "#case-ecommerce",
        dom: "eCommerce · Real-time personalisation",
        h3: "Real-time feature pipeline for recommendation ML",
        desc: "Replaced a batch ETL process that fed recommendation models with a Structured Streaming pipeline updating features in near real-time. Model latency dropped from hours to under 90 seconds, improving personalisation hit rate measurably within weeks of launch.",
        spec: [
          ["Platform", "Databricks on Azure"],
          ["Streaming", "Structured Streaming · Kafka"],
          ["ML", "Feature Store · Model Serving"],
          ["Latency", "< 90s feature freshness"],
        ],
        stk: ["Delta Lake", "Photon Engine", "MLflow", "Databricks Workflows"],
      },
    ],
    quotes: [
      {
        stars: 5,
        text: "They designed a lakehouse architecture that finally unified our fragmented data sources. Their MLflow setup gave our data science team the experiment tracking they'd been asking for for two years.",
        cite: "Head of Data Science, Healthtech",
      },
      {
        stars: 5,
        text: "The streaming pipeline they built replaced a batch job that was already causing model staleness complaints. The improvement in recommendation quality was visible in the metrics within the first sprint post-launch.",
        cite: "Director of Engineering, eCommerce",
      },
    ],
  },

  engage: {
    tag: "How we work",
    h2: "Our engagement models.",
    p: "Flexible models whether you need a dedicated lakehouse team, engineers embedded in yours, or a fixed-scope Databricks build.",
    models: [
      {
        icon: "Users",
        h3: "Dedicated Databricks Team",
        md: "A cross-functional team of Databricks data engineers, ML engineers, and platform architects working exclusively on your lakehouse or ML platform. Best for companies building core data infrastructure from the ground up.",
        bill: "dedicated team, monthly.",
      },
      {
        icon: "UserPlus",
        h3: "Team Extension",
        md: "Embed certified Databricks engineers into your existing data or ML team. They join your workspace, standups, and sprint ceremonies and contribute from day one. Best for scaling capacity without a hiring cycle.",
        bill: "per engineer, monthly.",
      },
      {
        icon: "Package",
        h3: "Project-Based Build",
        md: "Fixed-scope engagement for a defined lakehouse migration, pipeline rebuild, or ML platform setup. We own the delivery end to end and hand over documented, production-ready code. Best for scoped initiatives.",
        bill: "fixed-scope, quoted per project.",
      },
    ],
    quote: {
      text: "Their Databricks engineers worked like they'd been on our team for months. Unity Catalog implementation, Delta Live Tables pipelines, and the MLflow setup all landed in one well-structured sprint cycle.",
      cite: "Principal Data Engineer",
    },
  },

  process: {
    tag: "How it runs",
    h2: "How we deliver Databricks projects.",
    p: "Structured delivery from architecture design to production handoff.",
    steps: [
      {
        n: "01",
        h4: "Assess",
        p: "Audit data sources, current pipeline architecture, ML maturity, and governance requirements.",
      },
      {
        n: "02",
        h4: "Design",
        p: "Agree medallion architecture, Unity Catalog structure, streaming vs batch strategy, and ML platform design before build begins.",
      },
      {
        n: "03",
        h4: "Build",
        p: "Pipeline development, Delta Lake setup, ML platform engineering, and incremental data onboarding.",
      },
      {
        n: "04",
        h4: "Validate",
        p: "Data quality checks, schema evolution testing, ML model pipeline validation, and load testing.",
      },
      {
        n: "05",
        h4: "Hand off",
        p: "Documented pipelines, Unity Catalog setup, runbooks, and knowledge transfer. Your team owns what we built.",
      },
    ],
    quote: {
      text: "We appreciated the upfront architecture review. Having Delta Lake and Unity Catalog designed correctly from the start saved us from the kind of rework that kills platform projects.",
      cite: "VP of Data",
    },
  },

  industries: {
    tag: "Industries we serve",
    h2: "Where we've deployed Databricks.",
    p: "Databricks delivers the most value where data volumes are high, ML matters, or batch ETL has become a bottleneck.",
    items: [
      { label: "Healthtech & Life Sciences", lead: true },
      { label: "Fintech & Financial Services", lead: true },
      { label: "eCommerce & Retail" },
      { label: "SaaS & Product Analytics" },
      { label: "Media & Streaming" },
      { label: "Manufacturing & Industrial" },
      { label: "Logistics & Supply Chain" },
    ],
  },

  faq: {
    tag: "Before you call",
    h2: "The questions we get most.",
    items: [
      {
        q: "Are your engineers actually Databricks certified?",
        a: "Yes. We hold company-wide Databricks Partner accreditation and assign Databricks Certified Data Engineer or ML Professional engineers to every project. You can ask to see certifications before the engagement begins.",
      },
      {
        q: "Can you migrate our existing ETL or data warehouse to Databricks?",
        a: "That's one of our most common engagements. We handle migrations from legacy ETL tools, Spark clusters, Hadoop, and traditional warehouses into a Delta Lake lakehouse on Databricks. We include migration strategy, data model redesign, pipeline rebuild, and validation.",
      },
      {
        q: "Do you work with both batch and streaming pipelines?",
        a: "Yes. We build both, often within the same project. Structured Streaming with Kafka or Auto Loader for real-time ingest, Delta Live Tables for declarative batch pipelines, and Delta Lake underneath both — so your batch and streaming data lives in one consistent place.",
      },
      {
        q: "Can you also build the ML platform inside Databricks?",
        a: "Yes. ML platform engineering is a core part of our Databricks offering — MLflow experiment tracking, Feature Store for feature engineering and serving, and Databricks Model Serving for deployment. We design the pipeline from raw data ingestion through to a model in production.",
      },
      {
        q: "How long does a typical Databricks project take?",
        a: "Scope determines timeline. A focused pipeline migration or ML platform setup takes 6–10 weeks. A full lakehouse build with streaming pipelines, Unity Catalog governance, and an ML platform typically runs 3–6 months.",
      },
      {
        q: "Who owns the code at the end?",
        a: "You do. All pipeline code, Unity Catalog configurations, MLflow projects, and documentation transfer to you at handoff. No lock-in — your team inherits a production-grade system, not a black box.",
      },
    ],
  },

  cta: {
    tag: "✦ Start here",
    h2: "Let's build your Databricks lakehouse.",
    p: "Whether you're migrating legacy ETL, building a net-new lakehouse, or standing up a production ML platform — we'll help you design the right architecture before any code is written.",
    ctas: [
      { label: "Book a scoping call →", cal: true, calLink: "vikas-singh-bril/30-min-product-eng-review", primary: true },
      { label: "See how we work first", href: "#capabilities", primary: false },
    ],
    ticks: ["30-minute discovery call", "Certified engineers on every project", "No obligation"],
  },
};

const HireDatabricksDevelopers = () => <ServicePageTemplate data={DATA} />;

export default HireDatabricksDevelopers;
