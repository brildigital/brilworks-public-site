import IndustryPageTemplate from "./IndustryPageTemplate";

const DATA = {
  hero: {
    tag: "Data engineering for healthtech",
    h1: [
      { text: "Data engineering for " },
      { text: "Healthtech.", accent: true },
    ],
    lede: "We unify patient records, labs, billing, and appointments across every clinic into one warehouse, with identifiers and data quality checks that make the numbers trustworthy enough to report from.",
    ctas: [
      { label: "Talk to a data engineer →", href: "/contact-us/", primary: true },
      { label: "See the build", href: "#proof", primary: false },
    ],
    micro: [
      { star: true, text: "★★★★★ 5.0 on Clutch" },
      { sep: true },
      { text: "Snowflake & Databricks partner" },
      { sep: true },
      { text: "Governed patient data pipelines" },
    ],
    stats: [
      { v: "180+", l: "Projects delivered" },
      { v: "99%", l: "Client satisfaction" },
      { v: "18+", l: "Countries served" },
      { v: "5 → 1", l: "Clinic data sources consolidated into one platform", nowrap: true },
    ],
  },

  trustmarks: [
    { ic: "❄", bold: "Snowflake Partner", label: "Certified" },
    { ic: "⚙", bold: "Databricks Partner", label: "Certified" },
    { ic: "★", bold: "5.0 Rating", label: "Verified on Clutch" },
    { ic: "🔒", bold: "Governed Patient Data", label: "Validated at ingestion" },
    { ic: "⚡", bold: "180+ Projects", label: "Delivered across 18+ countries" },
  ],

  proof: {
    tag: "The build",
    h2: "One platform. Every clinic reporting the same numbers.",
    build: {
      dom: "Healthtech · Multi-clinic provider",
      pill: "5 systems → 1 platform",
      h3: "Unified patient data platform for a multi-clinic healthcare provider",
      desc: "Clinics ran on separate systems for EHR, appointments, billing, labs, and patient communications. Clinical and operations teams had no unified view of the patient journey, and reporting meant manual reconciliation across every source. We built one governed warehouse with standardized patient identifiers and automated data quality checks.",
      spec: [
        ["Sources", "Epic / Cerner · PostgreSQL · HL7 · FHIR"],
        ["Pipelines", "Incremental, synced with operational systems"],
        ["Powers", "Patient outcomes · appointment utilization · revenue reporting"],
        ["Platform", "Snowflake + dbt"],
      ],
      stk: ["Epic", "Cerner", "HL7", "FHIR", "PostgreSQL", "Snowflake", "dbt", "Power BI"],
      stance: {
        pre: "Our default: ",
        bold: "validate patient identifiers at ingestion, not in the dashboard.",
        post: " A mismatched record is cheap to catch in the pipeline and expensive to catch after a clinician is already looking at it.",
      },
      outcome: "unified reporting across every clinic, far less manual reconciliation, and higher confidence in the numbers finance and leadership report from.",
    },
  },

  approach: {
    tag: "What we do",
    h2: "The same approach, applied to what's specific to your stack.",
    caps: [
      {
        cn: "01",
        h3: "EHR & records integration",
        cd: "HL7 and FHIR pipelines that pull structured data out of Epic, Cerner, or whatever your clinics run.",
        chips: ["HL7", "FHIR"],
      },
      {
        cn: "02",
        h3: "Patient identity resolution",
        cd: "One patient, one identifier, across every clinic and every source system.",
        chips: ["identity resolution", "data quality"],
      },
      {
        cn: "03",
        h3: "Governed, auditable pipelines",
        cd: "Validation and lineage built in from day one, not reconstructed after an audit request.",
        chips: ["data governance", "lineage"],
      },
      {
        cn: "04",
        h3: "Connected device & monitoring data",
        cd: "Device and remote monitoring feeds landing in the same warehouse patient records already live in.",
        chips: ["device data", "remote monitoring"],
      },
    ],
  },

  cta: {
    tag: "✦ Start here",
    h2: "Tell us what your clinic data is costing you.",
    p: "30 minutes tells you whether the fix is a config change or a rebuild. We'll tell you which, even if it's not a project for us.",
    ctas: [
      { label: "Talk to a data engineer →", href: "/contact-us/", primary: true },
      { label: "Review the build", href: "#proof", primary: false },
    ],
    ticks: ["30-minute call", "Governed by design", "No obligation"],
  },
};

const DataEngineeringHealthtech = () => <IndustryPageTemplate data={DATA} />;
export default DataEngineeringHealthtech;
