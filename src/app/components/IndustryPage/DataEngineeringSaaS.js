import IndustryPageTemplate from "./IndustryPageTemplate";

const DATA = {
  hero: {
    tag: "Data engineering for SaaS",
    h1: [
      { text: "Data engineering for " },
      { text: "SaaS.", accent: true },
    ],
    lede: "We pull data scattered across your CRM, billing, product, and support tools into one warehouse, without one tenant ever seeing another tenant's numbers.",
    ctas: [
      { label: "Talk to a data engineer →", href: "/contact-us/", primary: true },
      { label: "See the build", href: "#proof", primary: false },
    ],
    micro: [
      { star: true, text: "★★★★★ 5.0 on Clutch" },
      { sep: true },
      { text: "Snowflake & Databricks partner" },
      { sep: true },
      { text: "You own the pipeline" },
    ],
    stats: [
      { v: "180+", l: "Projects delivered" },
      { v: "99%", l: "Client satisfaction" },
      { v: "18+", l: "Countries served" },
      { v: "11 → 1", l: "Source systems consolidated into one warehouse", nowrap: true },
    ],
  },

  trustmarks: [
    { ic: "❄", bold: "Snowflake Partner", label: "Certified" },
    { ic: "⚙", bold: "Databricks Partner", label: "Certified" },
    { ic: "★", bold: "5.0 Rating", label: "Verified on Clutch" },
    { ic: "🔒", bold: "100% Pipeline Ownership", label: "No lock-in, ever" },
    { ic: "⚡", bold: "180+ Projects", label: "Delivered across 18+ countries" },
  ],

  proof: {
    tag: "The build",
    h2: "One warehouse. Every tenant isolated.",
    build: {
      dom: "B2B SaaS · Data consolidation",
      pill: "11 systems → 1 warehouse",
      h3: "11 source systems, one Snowflake warehouse, zero cross-tenant leaks",
      desc: "A growing B2B SaaS platform had customer, billing, product, and support data spread across 11 operational systems. We consolidated it into a single Snowflake warehouse with tenant isolation enforced at the warehouse layer.",
      spec: [
        ["Sources", "CRM · billing · product · support"],
        ["Isolation", "Row-level security, warehouse layer"],
        ["Powers", "Exec reporting · health scores · self-serve analytics"],
        ["Platform", "Snowflake"],
      ],
      stk: ["Snowflake", "row-level security", "ELT", "multi-tenant warehouse design"],
      stance: {
        pre: "Our default: ",
        bold: "row-level security over schema-per-tenant.",
        post: " Schema-per-tenant means re-running every migration across a thousand schemas. RLS scales with your customer count, not against it.",
      },
    },
  },

  approach: {
    tag: "What we do",
    h2: "The same approach, applied to what's specific to your stack.",
    caps: [
      {
        cn: "01",
        h3: "Multi-tenant warehouse design",
        cd: "Isolation enforced at the data layer, not hoped for at the app layer.",
        chips: ["row-level security", "schema design"],
      },
      {
        cn: "02",
        h3: "Product analytics pipelines",
        cd: "One number, everywhere it shows up.",
        chips: ["event pipelines", "warehouse modeling"],
      },
      {
        cn: "03",
        h3: "Usage & billing data",
        cd: "Metering that matches the invoice, every time.",
        chips: ["metering accuracy", "revenue reconciliation"],
      },
      {
        cn: "04",
        h3: "Snowflake & Databricks migrations",
        cd: "Certified on both. We tell you which fits before we start.",
        chips: ["migration", "cost optimization"],
      },
    ],
  },

  cta: {
    tag: "✦ Start here",
    h2: "Tell us what your data stack is costing you.",
    p: "30 minutes tells you whether the fix is a config change or a rebuild. We'll tell you which, even if it's not a project for us.",
    ctas: [
      { label: "Talk to a data engineer →", href: "/contact-us/", primary: true },
      { label: "Review the build", href: "#proof", primary: false },
    ],
    ticks: ["30-minute call", "You own the pipeline", "No obligation"],
  },
};

const DataEngineeringSaaS = () => <IndustryPageTemplate data={DATA} />;
export default DataEngineeringSaaS;
