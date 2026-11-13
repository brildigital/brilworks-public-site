// Definitions and comparison tables for core service pages. Every statement
// here restates facts already published elsewhere on the same page (FAQ,
// pricing, partner details). Keep them in sync when that copy changes.

export const DATA_ENGINEERING_SUMMARY = {
  id: "what-is-data-engineering",
  eyebrow: "At a glance",
  heading: "Data engineering services, explained",
  definition:
    "Data engineering services cover the pipelines, warehouse and data modelling that move data from raw sources into something your teams can query and trust. Brilworks delivers them on Snowflake and Databricks, in your own AWS, Azure or GCP account, and you own the code and the stack when the work ends.",
  table: {
    caption: "Ways to work with Brilworks on data engineering",
    columns: ["Engagement", "What you get", "Pricing", "Best for"],
    rows: [
      [
        "Cost-optimization audit",
        "A review of your warehouse, pipelines and spend, with a prioritized list of fixes",
        "Fixed price",
        "Teams whose warehouse bill keeps growing",
      ],
      [
        "Build or migration project",
        "Pipelines, warehouse and modelling delivered in fixed, scoped phases; migrations reconciled table by table before cutover",
        "Scoped per project",
        "New data platforms or moving off legacy systems",
      ],
      [
        "Embedded data engineers",
        "Certified Snowflake and Databricks engineers working in your team, repo and standups",
        "Monthly per engineer",
        "Teams that need more capacity on an existing platform",
      ],
      [
        "Managed services",
        "Monitoring, performance tuning and cost control after launch",
        "Ongoing",
        "Keeping the platform fast and affordable to run",
      ],
    ],
  },
};

export const AI_AGENT_SUMMARY = {
  id: "what-is-an-ai-agent",
  eyebrow: "At a glance",
  heading: "What is an AI agent?",
  definition:
    "An AI agent is software that reasons through a task, decides what to do and then acts across your systems. A chatbot follows a script and answers the questions it was programmed for; an agent completes the work, for example qualifying a lead and pushing it to your CRM, or extracting data from a document into your database.",
  table: {
    caption: "AI agent compared with a chatbot",
    columns: ["Compared on", "Chatbot", "AI agent"],
    rows: [
      [
        "How it works",
        "Follows a predefined script",
        "Reasons through the situation and decides the next step",
      ],
      [
        "What it does",
        "Answers questions",
        "Takes action: updates records, triggers workflows, hands off to people",
      ],
      [
        "Systems it touches",
        "Usually one chat channel",
        "CRM, documents, databases and messaging tools such as HubSpot, Salesforce, Slack and WhatsApp",
      ],
      [
        "With Brilworks",
        "We build agents rather than scripted chatbots",
        "Working prototype in 7 days; full deployment in 2–4 weeks for most agents",
      ],
    ],
  },
};

export const SNOWFLAKE_SUMMARY = {
  id: "snowflake-vs-databricks",
  eyebrow: "At a glance",
  heading: "What does a Snowflake partner do?",
  definition:
    "A Snowflake partner is a firm certified to design, build and optimize on the Snowflake platform. Brilworks' certified engineers handle Snowflake migrations, data pipelines, governance and cost optimization on AWS, Azure or GCP. We are also a Databricks partner, so we recommend the platform that fits your workload rather than the one we would rather sell.",
  table: {
    caption: "Snowflake compared with Databricks",
    columns: ["Compared on", "Snowflake", "Databricks"],
    rows: [
      [
        "Core design",
        "Cloud data warehouse built around SQL",
        "Lakehouse built on Apache Spark and Delta Lake",
      ],
      [
        "Strongest for",
        "BI, reporting, SQL analytics and data sharing",
        "Large-scale data engineering, streaming, machine learning and AI",
      ],
      [
        "How you pay",
        "Credits for compute, plus storage",
        "Databricks Units (DBUs) for compute, plus your cloud costs",
      ],
      ["Clouds", "AWS, Azure and GCP", "AWS, Azure and GCP"],
    ],
  },
  note: "Many teams run both: Databricks for engineering and ML, Snowflake for analytics.",
};

export const DATABRICKS_SUMMARY = {
  id: "what-is-a-databricks-partner",
  eyebrow: "At a glance",
  heading: "What does a Databricks partner do?",
  definition:
    "A Databricks partner is a firm certified to design, build and run workloads on the Databricks lakehouse. Brilworks is a certified Databricks partner whose engineers have shipped Spark, Delta Lake and machine learning in production on AWS, Azure and GCP.",
  table: {
    caption: "Databricks engagements Brilworks delivers",
    columns: ["Engagement", "What it covers", "Typical shape"],
    rows: [
      [
        "Migration to Databricks",
        "Moving pipelines and downstream systems onto the lakehouse, with the old platform running in parallel until you trust the new one",
        "8–16 weeks, delivered in phases",
      ],
      [
        "MLOps",
        "Taking models to production with MLflow, feature stores and serving pipelines, so they stay monitored and reproducible",
        "Scoped per model portfolio",
      ],
      [
        "GenAI and RAG",
        "Agents, RAG and LLM applications on Mosaic AI, grounded in your governed data through Unity Catalog",
        "Scoped per use case",
      ],
      [
        "Cost control",
        "Right-sizing clusters, tuning Spark jobs, auto-termination and removing idle compute",
        "Audit, then ongoing tuning",
      ],
    ],
  },
};
