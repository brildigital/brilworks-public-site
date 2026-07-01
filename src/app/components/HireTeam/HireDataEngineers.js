import ServicePageTemplate from "../ServicePage/ServicePageTemplate";

const DATA = {
  hero: {
    tag: "Data Engineering · Pipeline Architecture · Cloud Data Platforms",
    h1: [
      { text: "Hire " },
      { text: "Data Engineers", accent: true },
    ],
    lede: "Senior data engineers who design, build, and operate production pipelines — not proof-of-concepts. Ingestion, transformation, orchestration, and delivery on whatever cloud stack you run.",
    ctas: [
      { label: "Book a scoping call →", cal: true, calLink: "vikas-singh-bril/30-min-product-eng-review", primary: true },
      { label: "See how we work", href: "#capabilities", primary: false },
    ],
    micro: [
      { star: true, text: "★★★★★ 5.0 on Clutch" },
      { sep: true },
      { text: "Snowflake & Databricks Partner" },
      { sep: true },
      { text: "180+ data projects delivered" },
    ],
    stats: [
      { v: "180+", l: "Data Projects Delivered" },
      { v: "18+", l: "Countries Served" },
      { v: "99%", l: "Client Satisfaction" },
      { v: "50ms", l: "Streaming Latency Achieved in Production" },
    ],
  },

  proof: {
    tag: "Core data engineering stack",
    items: [
      { bold: "Apache Spark" },
      { bold: "dbt Core" },
      { bold: "Airflow", label: "orchestration" },
      { bold: "Kafka", label: "streaming" },
      { bold: "Snowflake" },
      { bold: "Databricks" },
      { bold: "BigQuery" },
      { bold: "Redshift" },
      { bold: "Delta Lake" },
      { bold: "Fivetran" },
      { bold: "Airbyte" },
      { bold: "dbt Cloud" },
      { bold: "Terraform", label: "IaC" },
      { bold: "Flink", label: "streaming" },
    ],
    note: "Technologies deployed on production data platforms — not a checklist.",
  },

  capabilities: {
    tag: "What we build",
    h2: "Our data engineering services.",
    p: "Every layer of the modern data stack — ingestion, transformation, orchestration, and delivery — built for production reliability.",
    list: [
      {
        n: "01",
        icon: "Cloud",
        h3: "Data pipeline design & build",
        p: "Design and implement batch and streaming pipelines that move data from source systems into your warehouse or lakehouse reliably. Proper error handling, retries, alerting, and lineage from day one.",
        chips: ["Batch pipelines", "Streaming", "Kafka", "Airflow", "dbt"],
      },
      {
        n: "02",
        icon: "Layers",
        h3: "Data warehouse & lakehouse architecture",
        p: "Architect Snowflake, Databricks, BigQuery, or Redshift environments sized for your query patterns and team. Medallion architecture, schema design, and partition strategies built before data moves.",
        chips: ["Snowflake", "Databricks", "BigQuery", "Medallion architecture"],
      },
      {
        n: "03",
        icon: "RefreshCw",
        h3: "ELT / ETL modernisation",
        p: "Replace legacy ETL tools and fragile scripts with a version-controlled, tested transformation layer using dbt. Documented models, data quality tests, and CI/CD for data built in.",
        chips: ["dbt Core", "dbt Cloud", "Legacy ETL migration", "Data quality tests"],
      },
      {
        n: "04",
        icon: "Zap",
        h3: "Real-time & streaming pipelines",
        p: "Build event-driven pipelines using Kafka, Flink, or Spark Structured Streaming for use cases where stale data costs money — fraud signals, personalisation, operational dashboards.",
        chips: ["Kafka", "Flink", "Structured Streaming", "Sub-minute latency"],
      },
      {
        n: "05",
        icon: "ShieldCheck",
        h3: "Data quality & observability",
        p: "Instrument your data platform with automated quality checks, freshness SLAs, anomaly detection, and lineage tracking so your analytics team knows what to trust.",
        chips: ["dbt tests", "Great Expectations", "Lineage", "Freshness SLAs"],
      },
    ],
  },

  why: {
    tag: "Why Brilworks",
    h2: "Why engineering teams choose our data engineers.",
    p: "Data engineering done badly produces brittle pipelines that analytics teams work around. We build the kind of infrastructure that becomes a foundation, not a liability.",
    cards: [
      {
        h4: "Production-first, not notebook-first",
        p: "We write modular, tested, CI/CD-deployed pipeline code — not ad hoc scripts that work once on a laptop and break in production on Monday.",
      },
      {
        h4: "Snowflake & Databricks Partner depth",
        p: "Certified engineers across the two dominant cloud data platforms. We recommend the right tool for your use case, not the one we happen to know.",
      },
      {
        h4: "Full-stack data — not just pipelines",
        p: "Ingestion, transformation, orchestration, governance, and BI layer. We design the whole stack so handoffs between layers don't create blind spots.",
      },
      {
        h4: "Flexible teams, fast ramp",
        p: "Dedicated data engineering team, engineers embedded in yours, or a fixed-scope pipeline build. All three models have been used by our clients at different stages.",
      },
    ],
  },

  work: {
    tag: "Selected work",
    h2: "Data pipelines running in production.",
    p: "Real pipelines built for analytics teams who need to trust what they're querying.",
    builds: [
      {
        href: "#case-saas",
        dom: "SaaS · Product analytics",
        h3: "Unified event pipeline replacing 11 disconnected sources",
        desc: "Consolidated 11 source systems — product events, CRM, billing, support, and ad spend — into a single Snowflake warehouse using Airflow-orchestrated ingestion and a dbt transformation layer. Analytics team went from 3-day report cycles to sub-minute dashboard refresh.",
        spec: [
          ["Sources", "11 systems"],
          ["Warehouse", "Snowflake"],
          ["Transform", "dbt Core"],
          ["Orchestration", "Airflow on AWS MWAA"],
        ],
        stk: ["Fivetran", "custom connectors", "dbt tests", "CI/CD for data"],
      },
      {
        href: "#case-fintech",
        dom: "Fintech · Risk & compliance",
        h3: "Real-time transaction pipeline for fraud signal delivery",
        desc: "Built a Kafka-based streaming pipeline feeding fraud risk scores to downstream decisioning systems in under 50ms. Replaced an overnight batch job that was missing fraud patterns by morning.",
        spec: [
          ["Broker", "Kafka on MSK"],
          ["Processing", "Flink"],
          ["Latency", "< 50ms p99"],
          ["Throughput", "12k events/sec peak"],
        ],
        stk: ["Structured Streaming", "Delta Lake", "schema registry", "dead-letter queues"],
      },
    ],
    quotes: [
      {
        stars: 5,
        text: "They replaced a tangle of Airflow DAGs and custom scripts with a clean dbt layer our analysts can actually own. The documentation alone was worth the engagement.",
        cite: "Head of Data, SaaS",
      },
      {
        stars: 5,
        text: "The streaming pipeline they designed cut our fraud signal latency from hours to under a minute. The impact on detection rate was visible in the first week.",
        cite: "VP Engineering, Fintech",
      },
    ],
  },

  engage: {
    tag: "How we work",
    h2: "Our engagement models.",
    p: "Flexible models for teams at any stage — whether you need a dedicated data engineering function, extra pipeline hands, or a scoped build.",
    models: [
      {
        icon: "Users",
        h3: "Dedicated Data Engineering Team",
        md: "A cross-functional team of pipeline engineers, analytics engineers, and data architects working exclusively on your data platform. Best for companies building their core data infrastructure from scratch or modernising a legacy stack.",
        bill: "dedicated team, monthly.",
      },
      {
        icon: "UserPlus",
        h3: "Team Extension",
        md: "Embed experienced data engineers into your existing team. They join your repo, standups, and sprint ceremonies and contribute to production from day one. Best for scaling capacity without a full hiring cycle.",
        bill: "per engineer, monthly.",
      },
      {
        icon: "Package",
        h3: "Project-Based Build",
        md: "Fixed-scope pipeline build, warehouse migration, or dbt layer implementation. We own the delivery end to end and hand over documented, production-ready code. Best for well-defined data initiatives.",
        bill: "fixed-scope, quoted per project.",
      },
    ],
    quote: {
      text: "Their data engineers integrated with our team immediately. They understood our existing architecture, proposed sensible improvements, and delivered pipelines our team could maintain.",
      cite: "Principal Data Engineer",
    },
  },

  process: {
    tag: "How it runs",
    h2: "How we deliver data engineering projects.",
    p: "Structured from discovery to handoff — no black-box builds.",
    steps: [
      {
        n: "01",
        h4: "Discover",
        p: "Map source systems, data volumes, latency requirements, and current pain points.",
      },
      {
        n: "02",
        h4: "Architect",
        p: "Agree pipeline design, warehouse structure, orchestration strategy, and data model before build begins.",
      },
      {
        n: "03",
        h4: "Build",
        p: "Pipeline development, transformation layer, orchestration wiring, and incremental data onboarding.",
      },
      {
        n: "04",
        h4: "Validate",
        p: "Data quality checks, SLA testing, load testing, and reconciliation against source systems.",
      },
      {
        n: "05",
        h4: "Hand off",
        p: "Documented pipelines, runbooks, and knowledge transfer. Your team owns everything we built.",
      },
    ],
    quote: {
      text: "The architecture review before build meant we didn't pivot mid-project. They asked the right questions about our data volumes and SLAs before writing a line of code.",
      cite: "CTO",
    },
  },

  industries: {
    tag: "Industries we serve",
    h2: "Where we've built data pipelines.",
    items: [
      { label: "Fintech & Financial Services", lead: true },
      { label: "SaaS & Product Analytics", lead: true },
      { label: "Healthtech & Life Sciences" },
      { label: "eCommerce & Retail" },
      { label: "Media & Publishing" },
      { label: "Manufacturing & Industrial" },
      { label: "Logistics & Supply Chain" },
    ],
  },

  faq: {
    tag: "Before you call",
    h2: "The questions we get most.",
    items: [
      {
        q: "What data stacks do your engineers work with?",
        a: "Our data engineers work across the full modern data stack. Cloud warehouses: Snowflake, Databricks, BigQuery, Redshift. Orchestration: Airflow, Prefect, Dagster. Transformation: dbt Core and dbt Cloud. Streaming: Kafka, Flink, Spark Structured Streaming. Ingestion: Fivetran, Airbyte, and custom connectors. Infrastructure: Terraform, AWS, GCP, Azure.",
      },
      {
        q: "Can you migrate our legacy ETL to a modern stack?",
        a: "Yes. ETL modernisation is one of our most common engagements. We assess your existing pipelines, identify which logic is worth preserving, and rebuild using dbt, Airflow, and your chosen warehouse — with tests, documentation, and CI/CD that didn't exist before.",
      },
      {
        q: "Do you build streaming pipelines or only batch?",
        a: "Both. We build batch pipelines for analytics and reporting use cases, and streaming pipelines using Kafka, Flink, or Spark Structured Streaming for latency-sensitive use cases — fraud signals, personalisation, operational dashboards. Most of our larger engagements involve both.",
      },
      {
        q: "How do you ensure data quality?",
        a: "We build data quality into the pipeline, not as a dashboard someone checks after the fact. dbt tests on every model, freshness SLAs in Airflow, anomaly detection on key metrics, and alerting when things break. Lineage is tracked so when something does go wrong, the root cause is findable.",
      },
      {
        q: "Who owns the pipeline code at the end?",
        a: "You do. All pipeline code, dbt models, Airflow DAGs, Terraform configurations, and documentation transfer to you at handoff. Your team inherits a production-grade system they can extend.",
      },
    ],
  },

  cta: {
    tag: "✦ Start here",
    h2: "Let's build your data platform.",
    p: "Whether you're replacing legacy ETL, consolidating scattered sources, or building streaming infrastructure from scratch — we'll help you design the right architecture before any code is written.",
    ctas: [
      { label: "Book a scoping call →", cal: true, calLink: "vikas-singh-bril/30-min-product-eng-review", primary: true },
      { label: "See how we work first", href: "#capabilities", primary: false },
    ],
    ticks: ["30-minute discovery call", "Snowflake & Databricks Partner", "No obligation"],
  },
};

const HireDataEngineers = () => <ServicePageTemplate data={DATA} />;

export default HireDataEngineers;
