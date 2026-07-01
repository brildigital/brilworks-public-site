import IndustryPageTemplate from "./IndustryPageTemplate";

const DATA = {
  hero: {
    tag: "Data engineering for fintech",
    h1: [
      { text: "Data engineering for " },
      { text: "Fintech.", accent: true },
    ],
    lede: "We unify transaction, payments, KYC, and fraud data into one platform, with lineage compliance can trace from ingestion to report without touching production.",
    ctas: [
      { label: "Talk to a data engineer →", href: "/contact-us/", primary: true },
      { label: "See the build", href: "#proof", primary: false },
    ],
    micro: [
      { star: true, text: "★★★★★ 5.0 on Clutch" },
      { sep: true },
      { text: "Snowflake & Databricks partner" },
      { sep: true },
      { text: "Audit-ready lineage" },
    ],
    stats: [
      { v: "180+", l: "Projects delivered" },
      { v: "99%", l: "Client satisfaction" },
      { v: "18+", l: "Countries served" },
      { v: "5 → 1", l: "Source systems consolidated into one platform", nowrap: true },
    ],
  },

  trustmarks: [
    { ic: "❄", bold: "Snowflake Partner", label: "Certified" },
    { ic: "⚙", bold: "Databricks Partner", label: "Certified" },
    { ic: "★", bold: "5.0 Rating", label: "Verified on Clutch" },
    { ic: "🔒", bold: "Audit-Ready Lineage", label: "Ingestion to reporting" },
    { ic: "⚡", bold: "180+ Projects", label: "Delivered across 18+ countries" },
  ],

  proof: {
    tag: "The build",
    h2: "One platform. Every transaction traced.",
    build: {
      dom: "Fintech · Digital payments",
      pill: "5 systems → 1 platform",
      h3: "Unified transaction data platform for a digital payments provider",
      desc: "Transaction data was spread across Postgres, payment gateways, KYC systems, fraud monitoring, and support tools. Investigations were slow and regulatory reporting pulled from different datasets depending on who was asking. We built one platform with complete lineage from ingestion to report.",
      spec: [
        ["Sources", "PostgreSQL · Stripe · Plaid · Salesforce"],
        ["Streaming", "Kafka, real-time event ingestion"],
        ["Powers", "Fraud investigations · compliance reporting · exec analytics"],
        ["Platform", "Snowflake + dbt"],
      ],
      stk: ["PostgreSQL", "Stripe", "Plaid", "Salesforce", "Kafka", "Snowflake", "dbt", "Power BI"],
      stance: {
        pre: "Our default: ",
        bold: "stream fraud signals over Kafka, not batch them overnight.",
        post: " A fraud pattern loses its value by morning.",
      },
      outcome: "compliance investigation time down, one trusted reporting layer for finance, fraud analysts fed in near real time without touching production systems.",
    },
  },

  approach: {
    tag: "What we do",
    h2: "The same approach, applied to what's specific to your stack.",
    caps: [
      {
        cn: "01",
        h3: "Audit-ready data pipelines",
        cd: "Full lineage from ingestion to report, so compliance stops digging through production databases.",
        chips: ["data lineage", "audit trails"],
      },
      {
        cn: "02",
        h3: "Fraud & risk data feeds",
        cd: "Signals streamed to analysts in near real time, without touching operational systems.",
        chips: ["Kafka streaming", "fraud signals"],
      },
      {
        cn: "03",
        h3: "Low-latency transaction data",
        cd: "Event-driven pipelines, not an overnight batch job pretending to be real time.",
        chips: ["event streaming", "real-time ingestion"],
      },
      {
        cn: "04",
        h3: "Compliance & regulatory reporting",
        cd: "One reporting layer finance, risk, and compliance all pull from — no reconciliation required.",
        chips: ["compliance reporting", "dbt modeling"],
      },
    ],
  },

  cta: {
    tag: "✦ Start here",
    h2: "Tell us what your transaction data is costing you.",
    p: "30 minutes tells you whether the fix is a config change or a rebuild. We'll tell you which, even if it's not a project for us.",
    ctas: [
      { label: "Talk to a data engineer →", href: "/contact-us/", primary: true },
      { label: "Review the build", href: "#proof", primary: false },
    ],
    ticks: ["30-minute call", "Audit-ready by design", "No obligation"],
  },
};

const DataEngineeringFintech = () => <IndustryPageTemplate data={DATA} />;
export default DataEngineeringFintech;
