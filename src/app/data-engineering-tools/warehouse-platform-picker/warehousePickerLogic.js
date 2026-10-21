// Pricing data, platform reference content, and scoring logic for the
// Warehouse Platform Picker. Pure functions only, so the UI can recompute
// on every input change without side effects.

export const DEF_PRICES = {
  fx: { v: 88, l: "₹ per US$", g: "General" },
  lsS: { v: 12, l: "Small server, 2 GB ($/mo)", g: "Self-hosted (Lightsail / VPS)" },
  lsM: { v: 44, l: "Medium server, 8 GB ($/mo)", g: "Self-hosted (Lightsail / VPS)", r: 1 },
  lsL: { v: 164, l: "Large server, 32 GB ($/mo)", g: "Self-hosted (Lightsail / VPS)", r: 1 },
  s3: { v: 0.025, l: "S3 storage ($/GB-mo)", g: "AWS" },
  athTB: { v: 5, l: "Athena ($/TB scanned)", g: "AWS" },
  rpuH: { v: 0.375, l: "Redshift ($/RPU-hour)", g: "AWS" },
  rpuMin: { v: 4, l: "Redshift min RPUs", g: "AWS" },
  rsGB: { v: 0.024, l: "Redshift storage ($/GB-mo)", g: "AWS", r: 1 },
  snowCr: { v: 2, l: "Snowflake ($/credit, Standard)", g: "Snowflake" },
  snowTB: { v: 40, l: "Snowflake storage ($/TB-mo)", g: "Snowflake" },
  dbu: { v: 0.7, l: "Databricks SQL Serverless ($/DBU)", g: "Databricks", r: 1 },
  dbuH: { v: 4, l: "DBUs/hour, smallest warehouse", g: "Databricks", r: 1 },
  bqTB: { v: 6.25, l: "BigQuery ($/TiB scanned)", g: "Google" },
  bqFreeTB: { v: 1, l: "BigQuery free TiB / month", g: "Google" },
  bqGB: { v: 0.023, l: "BigQuery storage ($/GB-mo)", g: "Google" },
  f2: { v: 263, l: "Fabric F2 pay-as-you-go ($/mo)", g: "Microsoft", r: 1 },
  fGB: { v: 0.023, l: "OneLake storage ($/GB-mo)", g: "Microsoft", r: 1 },
  chU: { v: 0.42, l: "ClickHouse ($/unit-hour, Mumbai)", g: "ClickHouse" },
  chMin: { v: 2, l: "ClickHouse min units", g: "ClickHouse", r: 1 },
  chTB: { v: 27.5, l: "ClickHouse storage ($/TB-mo)", g: "ClickHouse" },
  ftFree: { v: 500000, l: "Fivetran free rows / month", g: "ETL" },
  ftConn: { v: 5, l: "Fivetran $ per connection", g: "ETL" },
  ftM: { v: 800, l: "Fivetran $ for first million rows (rate falls with volume)", g: "ETL", r: 1 },
  abcBase: { v: 20, l: "Airbyte Cloud base ($/mo)", g: "ETL", r: 1 },
  abcM: { v: 15, l: "Airbyte Cloud $ per million rows", g: "ETL", r: 1 },
  aboSrv: { v: 44, l: "Airbyte OSS server ($/mo)", g: "ETL", r: 1 },
  mbsBase: { v: 100, l: "Metabase Starter ($/mo, 5 users)", g: "BI" },
  mbsU: { v: 6, l: "Metabase Starter extra user ($)", g: "BI" },
  pbi: { v: 14, l: "Power BI Pro ($/user)", g: "BI" },
  qsA: { v: 24, l: "QuickSight author ($/user)", g: "BI" },
  qsR: { v: 3, l: "QuickSight reader ($/user)", g: "BI" },
  lsp: { v: 9, l: "Looker Studio Pro ($/user)", g: "BI" },
};

export const defaultPrices = () =>
  Object.fromEntries(Object.entries(DEF_PRICES).map(([k, x]) => [k, x.v]));

export const PLAT = [
  { id: "pg", name: "PostgreSQL + Metabase", fam: "Self-hosted" },
  { id: "athena", name: "S3 + Athena", fam: "AWS" },
  { id: "redshift", name: "Redshift Serverless", fam: "AWS" },
  { id: "snow", name: "Snowflake", fam: "Snowflake" },
  { id: "dbx", name: "Databricks", fam: "Databricks" },
  { id: "bq", name: "BigQuery", fam: "Google Cloud" },
  { id: "fabric", name: "Microsoft Fabric", fam: "Microsoft" },
  { id: "ch", name: "ClickHouse Cloud", fam: "ClickHouse" },
];

export const ETLN = {
  script: "Custom script",
  abo: "Airbyte OSS",
  abc: "Airbyte Cloud",
  ft: "Fivetran",
};
export const BIN = {
  mbo: "Metabase OSS",
  mbs: "Metabase Starter",
  pbi: "Power BI Pro",
  qs: "QuickSight",
  ls: "Looker Studio",
  lsp: "Looker Studio Pro",
};

export const WORK = [
  ["dash", "Dashboards & reports"],
  ["adhoc", "Ad-hoc SQL"],
  ["ml", "ML / forecasting"],
  ["stream", "Streaming / IoT"],
  ["files", "Files, logs, JSON"],
  ["share", "Share data with partners"],
];
export const SKILLS = [
  ["sql", "SQL"],
  ["linux", "Linux / servers"],
  ["python", "Python"],
  ["spark", "Spark"],
  ["cloudops", "Cloud admin"],
];
export const COMP = [
  ["pii", "Contains personal data (PII)"],
  ["india", "Data must stay in India"],
  ["sso", "Company SSO required"],
  ["mask", "Hide columns/rows per user"],
  ["audit", "Audit trail of who saw what"],
  ["cmk", "Our own encryption keys"],
  ["private", "No public internet access"],
];
export const WTS = [
  ["cost", "Low cost"],
  ["ops", "Low maintenance"],
  ["scale", "Scale & speed"],
  ["ml", "ML / AI readiness"],
  ["simple", "Simple setup"],
  ["lock", "Avoid lock-in"],
  ["security", "Security features"],
];
export const FRESHNESS = [
  ["daily", "Once a day"],
  ["hourly", "Every hour"],
  ["15m", "Every 15 minutes"],
  ["rt", "Near real-time"],
];
export const CLOUDS = [
  ["none", "None / on-prem"],
  ["aws", "AWS"],
  ["azure", "Azure / Microsoft 365"],
  ["gcp", "Google Cloud / Workspace"],
];
export const BI_OPTIONS = [
  ["auto", "Pick the best fit for me"],
  ["mbo", "Metabase (open source)"],
  ["mbs", "Metabase Cloud Starter"],
  ["pbi", "Power BI Pro"],
  ["qs", "Amazon QuickSight"],
  ["ls", "Looker Studio (free)"],
  ["lsp", "Looker Studio Pro"],
];
export const ETL_OPTIONS = [
  ["auto", "Pick the best fit for me"],
  ["script", "Custom script / cron"],
  ["abo", "Airbyte (open source, self-hosted)"],
  ["abc", "Airbyte Cloud"],
  ["ft", "Fivetran"],
];

// `rows` in presets is the log10 slider position, not the row count.
export const PRESETS = {
  erp: {
    label: "Small business app · 1 lakh rows",
    rows: 5, rowkb: 1, growth: 30, churn: 20, src: 1, fresh: "daily",
    viewers: 10, authors: 1, cloud: "none", bi: "auto", etl: "auto",
    work: ["dash"], skills: ["sql", "linux"], comp: ["pii", "india"],
    w: { cost: 5, ops: 2, scale: 1, ml: 0, simple: 3, lock: 2, security: 2 },
  },
  mid: {
    label: "Growing business · 50 lakh",
    rows: Math.log10(5e6), rowkb: 1.5, growth: 60, churn: 20, src: 4, fresh: "hourly",
    viewers: 60, authors: 5, cloud: "aws", bi: "auto", etl: "auto",
    work: ["dash", "adhoc"], skills: ["sql", "cloudops"], comp: ["pii", "india", "sso"],
    w: { cost: 4, ops: 3, scale: 2, ml: 1, simple: 3, lock: 2, security: 3 },
  },
  ms: {
    label: "Microsoft shop · 2 crore",
    rows: Math.log10(2e7), rowkb: 1, growth: 50, churn: 15, src: 5, fresh: "hourly",
    viewers: 120, authors: 8, cloud: "azure", bi: "pbi", etl: "auto",
    work: ["dash", "adhoc"], skills: ["sql"], comp: ["pii", "india", "sso", "mask"],
    w: { cost: 3, ops: 4, scale: 2, ml: 1, simple: 4, lock: 1, security: 3 },
  },
  ent: {
    label: "Multi-source · 20 crore",
    rows: Math.log10(2e8), rowkb: 1, growth: 80, churn: 10, src: 12, fresh: "hourly",
    viewers: 300, authors: 25, cloud: "none", bi: "auto", etl: "auto",
    work: ["dash", "adhoc", "share"], skills: ["sql"], comp: ["pii", "india", "sso", "mask", "audit"],
    w: { cost: 2, ops: 5, scale: 4, ml: 1, simple: 3, lock: 1, security: 4 },
  },
  ml: {
    label: "ML-heavy · TBs",
    rows: Math.log10(3e9), rowkb: 2, growth: 150, churn: 5, src: 15, fresh: "rt",
    viewers: 100, authors: 20, cloud: "aws", bi: "auto", etl: "auto",
    work: ["dash", "ml", "stream", "files"], skills: ["sql", "python", "spark", "cloudops"],
    comp: ["pii", "india", "sso", "mask", "audit", "cmk"],
    w: { cost: 2, ops: 2, scale: 5, ml: 5, simple: 1, lock: 3, security: 4 },
  },
};

export const INFO = {
  pg: {
    sub: "One small server: PostgreSQL + Metabase",
    when: ["Under ~1 crore rows", "Mostly dashboards and reports", "Someone can look after a Linux server", "Lowest, flat monthly cost; unlimited users"],
    avoid: "Skip for many sources, TBs of data, or strict audit needs without extra work.",
    watch: ["You own backups, updates and security patches", "Run analytics on a copy, never the live production database", "Add summary tables as data grows"],
    price: "Flat server price", sweet: "Up to ~1 crore rows", maint: "Medium", skills: "Linux, SQL", ml: "Basic", lock: "Very low",
    sec: ["Any host; Lightsail Mumbai", "Google & LDAP sign-in free; SAML on paid Metabase", "PostgreSQL roles + row-level security; Metabase sandboxing on Pro", "pgaudit; Metabase usage logs on Pro", "Disk/backup encryption you set up", "Your firewall or VPN"],
  },
  athena: {
    sub: "Serverless SQL on files in S3",
    when: ["Small to large data, spiky or light querying", "You want nothing to keep running", "Already on AWS", "Files, logs and app exports in one place"],
    avoid: "Skip if dashboards query raw data constantly without summary tables; scans add up.",
    watch: ["Store data as Parquet and partition it, or scan costs climb", "Each query is billed at least 10 MB", "QuickSight or Metabase still needed for dashboards"],
    price: "Per TB scanned", sweet: "Lakh to 100s of crore rows, light use", maint: "Low–medium", skills: "SQL, AWS basics", ml: "Via SageMaker", lock: "Low (open files)",
    sec: ["Mumbai (ap-south-1)", "IAM Identity Center", "Lake Formation row & column filters", "CloudTrail", "KMS keys", "VPC endpoints"],
  },
  redshift: {
    sub: "AWS's managed data warehouse",
    when: ["Crores of rows, steady SQL workload", "Committed to AWS", "Many concurrent dashboard users", "Want a warehouse without leaving AWS billing"],
    avoid: "Skip for tiny data: the 4 RPU minimum bills at least 60 s per query.",
    watch: ["Set a max RPU limit to cap spend", "Each query bills a minimum of 60 seconds", "Tuning (sort/dist keys) helps at large scale"],
    price: "Per RPU-hour (serverless)", sweet: "1 – 100s of crore rows", maint: "Low", skills: "SQL", ml: "Redshift ML", lock: "Medium",
    sec: ["Mumbai (ap-south-1)", "IAM Identity Center", "Role-based access, row-level security, dynamic masking", "CloudTrail + audit logging", "KMS keys", "VPC"],
  },
  snow: {
    sub: "Managed SQL warehouse, multi-cloud",
    when: ["Crores to billions of rows, many sources", "SQL analysts, many concurrent users", "Near-zero maintenance", "Sharing data with partners"],
    avoid: "Skip for tiny data with frequent refreshes. Each wake-up bills at least a minute.",
    watch: ["Set auto-suspend to 60 s and resource monitors", "Masking and access history need Enterprise edition", "Credit price is higher in Mumbai than US East"],
    price: "Per-second credits + storage", sweet: "Crores to billions of rows", maint: "Very low", skills: "SQL", ml: "Snowpark, Cortex", lock: "Medium",
    sec: ["AWS Mumbai (GA)", "SAML SSO", "Masking & row access policies (Enterprise+)", "Access History (Enterprise+)", "Tri-Secret Secure (Business Critical)", "PrivateLink (Business Critical)"],
  },
  dbx: {
    sub: "Lakehouse for data engineering and ML",
    when: ["TBs of data, streaming, files and logs", "Machine learning and AI on your data", "Python / Spark team", "Complex multi-step pipelines"],
    avoid: "Skip for plain reporting on small data. Highest cost and effort here.",
    watch: ["Classic compute adds separate cloud VM bills", "Auto-stop idle warehouses and clusters", "Needs Unity Catalog set up properly for governance"],
    price: "DBUs (+ VMs on classic)", sweet: "Billions of rows, TBs, ML", maint: "Medium–high", skills: "Python, Spark, SQL", ml: "Best in class", lock: "Medium (open Delta format)",
    sec: ["AWS Mumbai (ap-south-1)", "SSO on all tiers", "Unity Catalog row filters & column masks", "System audit logs", "Customer-managed keys (Enterprise)", "PrivateLink (Enterprise)"],
  },
  bq: {
    sub: "Google's serverless warehouse",
    when: ["Already on Google Workspace or GCP", "Small data: 1 TiB queries and 10 GiB storage free each month", "Large data with no servers to run", "Looker Studio dashboards for free"],
    avoid: "Skip if you're deep in AWS or Azure; moving data across clouds adds cost.",
    watch: ["Set per-user and per-project query quotas", "Partition and cluster tables to cut scans", "SELECT * on big tables is expensive"],
    price: "Per TiB scanned, or slots", sweet: "Lakh to billions of rows", maint: "Very low", skills: "SQL", ml: "BigQuery ML, Vertex AI", lock: "Medium–high",
    sec: ["Mumbai & Delhi", "Google / SAML via Cloud Identity", "Column-level security, data masking, row-level security", "Cloud Audit Logs", "CMEK", "VPC Service Controls"],
  },
  fabric: {
    sub: "Microsoft's all-in-one analytics with Power BI",
    when: ["Company runs on Microsoft 365 / Azure", "Power BI is the standard", "Mixed team of analysts and low-code users", "One bill for lakehouse, pipelines and BI"],
    avoid: "Skip for small data on a tight budget; F2 capacity bills all month unless paused.",
    watch: ["Below F64, every viewer needs a Power BI Pro licence", "Capacity gets throttled when overloaded", "Pause the capacity outside office hours to save"],
    price: "Capacity per hour + storage", sweet: "Crores of rows, Microsoft shops", maint: "Low", skills: "SQL, Power BI", ml: "Notebooks, Azure ML", lock: "High",
    sec: ["Central India (check)", "Entra ID", "Row & object-level security in models; OneLake security", "Purview audit", "Customer-managed keys (check)", "Private links"],
  },
  ch: {
    sub: "Very fast analytics database, managed",
    when: ["Event, log and IoT data", "Sub-second dashboards on huge tables", "Real-time analytics", "Open-source engine, easy to move off"],
    avoid: "Skip if you need heavy joins across many normalised business tables.",
    watch: ["Joins and updates work differently from PostgreSQL", "Model tables around query patterns", "Scales to zero when idle; first query wakes it"],
    price: "Compute unit-hours + storage", sweet: "Crores to 1000s of crore rows", maint: "Low", skills: "SQL", ml: "Limited", lock: "Low (open source)",
    sec: ["AWS Mumbai (ap-south-1)", "SAML SSO (higher tiers)", "Role-based access & row policies", "Audit logs", "CMEK (Enterprise)", "PrivateLink (Enterprise)"],
  },
};

export const ETLI = {
  script: { price: "Free", best: "One source database, simple daily copy", eff: "Low to set up, you maintain it", w: "No retries or monitoring unless you add them" },
  abo: { price: "Free software + a server (~8 GB RAM)", best: "Several sources on a budget", eff: "Medium: run and upgrade it yourself", w: "Needs a bigger server than the database itself" },
  abc: { price: "From ≈$10–20/mo, then usage credits", best: "Several sources, no servers to run", eff: "Low", w: "Usage-based bill grows with rows synced" },
  ft: { price: "Free under 500k changed rows/mo; then per row + $5/connection", best: "Many sources, zero maintenance", eff: "Very low", w: "Gets expensive fast at millions of changed rows" },
};

export const BII = {
  mbo: { price: "Free + server", best: "Lowest cost, unlimited users", with: "PostgreSQL, Athena, Snowflake, BigQuery, Redshift, ClickHouse", w: "You host it; SAML and audit need a paid plan" },
  mbs: { price: "$100/mo for 5 users + $6/user", best: "Metabase without hosting", with: "Same as Metabase", w: "Per-user cost adds up beyond ~50 users" },
  pbi: { price: "$14/user/mo", best: "Microsoft 365 companies, Excel users", with: "Fabric, SQL Server, Snowflake, Databricks", w: "Every viewer needs a licence (below Fabric F64)" },
  qs: { price: "$24/author + $3/reader per month", best: "AWS shops with many viewers", with: "Athena, Redshift, RDS", w: "Less flexible than Metabase or Power BI" },
  ls: { price: "Free", best: "Google users, simple dashboards", with: "BigQuery, Google Sheets", w: "Weak for non-Google sources; limited sharing controls" },
  lsp: { price: "$9/user/mo", best: "Google teams needing admin controls", with: "BigQuery", w: "Still Google-centric" },
};

export const CHECK = [
  "Analytics copy uses a read replica or sync, not the live production database",
  "Personal data (phones, emails, tax IDs) is masked or removed where not needed",
  "Each person sees only the rows and columns their role needs",
  "SSO or strong passwords with 2-factor for every user",
  "Encryption at rest and in transit (TLS) is on",
  "Daily backups are tested by restoring them",
  "Access logs are kept and reviewed",
  "A retention rule deletes old personal data",
  "A written plan exists for reporting a data breach",
  "Data is stored in an Indian region (Mumbai / Delhi / Central India)",
];

export const LADDER = [
  { max: 1e6, vol: "≤ 10 lakh rows", text: "PostgreSQL + Metabase on one small server. BigQuery free tier if you're on Google." },
  { max: 1e7, vol: "10 lakh – 1 crore", text: "Same setup with incremental sync and summary tables, or S3 + Athena / BigQuery." },
  { max: 1e9, vol: "1 – 100 crore", text: "Snowflake, BigQuery, Redshift Serverless or Fabric, matched to your cloud. Add Airbyte or Fivetran for many sources." },
  { max: 1e99, vol: "100 crore+ / ML", text: "Databricks, or Snowflake / BigQuery with a separate ML stack. ClickHouse for very fast dashboards on huge event data." },
];

const clamp = (v, a = 0, b = 10) => Math.max(a, Math.min(b, v));

export function derive(a) {
  const gb = (a.rows * a.rowkb) / 1048576;
  const r3 = a.rows * (1 + a.growth / 100) ** 3;
  const big = Math.log10(Math.max(r3, 1e4));
  const users = a.viewers + a.authors;
  const fm = { daily: 1, hourly: 1.3, "15m": 2, rt: 3 }[a.fresh];
  const queries = (a.viewers * 20 + a.authors * 200) * fm;
  const autoH = Math.min(
    24,
    { daily: 0.2, hourly: 0.8, "15m": 3.2, rt: 24 }[a.fresh] +
      a.authors * 0.5 +
      a.viewers * 0.05,
  );
  const H = a.hours == null ? autoH : a.hours;
  const mar = a.rows * (a.churn / 100 + a.growth / 1200);
  return { gb, r3, big, users, queries, autoH, H, mar };
}

export function pickETL(a) {
  if (a.etl !== "auto") return a.etl;
  const lx = a.skills.some((k) => k === "linux" || k === "python" || k === "cloudops");
  if (a.src === 1) return "script";
  if (a.src <= 6) return lx ? "abo" : "abc";
  return lx ? "abo" : "ft";
}

export function pickBI(p, a, d) {
  if (p === "fabric") return "pbi";
  if (a.bi !== "auto") return a.bi;
  const lx = a.skills.includes("linux");
  const sso = a.comp.includes("sso");
  if (a.cloud === "azure") return "pbi";
  if (a.cloud === "aws" && !(lx && !sso)) return "qs";
  if (p === "bq" || a.cloud === "gcp") return sso && d.users > 50 ? "lsp" : "ls";
  if ((p === "athena" || p === "redshift") && !lx) return "qs";
  if (lx && !sso) return "mbo";
  return d.users <= 40 ? "mbs" : p === "athena" || p === "redshift" ? "qs" : "pbi";
}

export function etlCost(e, a, d, P) {
  if (e === "script") return 0;
  if (e === "abo") return P.aboSrv;
  if (e === "abc") return P.abcBase + (d.mar / 1e6) * P.abcM;
  if (e === "ft")
    return d.mar <= P.ftFree ? 0 : a.src * P.ftConn + P.ftM * Math.pow(d.mar / 1e6, 0.75);
  return 0;
}

export function biCost(b, a, d, P, p) {
  if (b === "mbo") return p === "pg" ? 0 : d.users > 150 ? P.lsM : P.lsS;
  if (b === "mbs") return P.mbsBase + Math.max(0, d.users - 5) * P.mbsU;
  if (b === "pbi") return d.users * P.pbi;
  if (b === "qs") return a.authors * P.qsA + a.viewers * P.qsR;
  if (b === "ls") return 0;
  if (b === "lsp") return d.users * P.lsp;
  return 0;
}

function cost(p, a, d, P) {
  const H30 = d.H * 30;
  const tier = d.gb < 1024 ? 1 : d.gb < 8192 ? 2 : 4;
  const scanTB = (d.queries * Math.max((d.gb * a.scan) / 100, 0.01)) / 1024;
  let c = 0;
  let s = 0;
  let ok = true;
  let note = "";
  switch (p) {
    case "pg":
      if (d.gb < 5 && a.rows < 2e7) c = d.users > 150 ? P.lsM : P.lsS;
      else if (d.gb < 40) c = P.lsM;
      else if (d.gb < 250) c = P.lsL;
      else {
        ok = false;
        note = "Too large for one server";
      }
      if (a.fresh === "rt" && ok) note = "Near real-time needs logical replication";
      break;
    case "athena":
      c = scanTB * P.athTB + 1;
      s = d.gb * P.s3;
      break;
    case "redshift":
      c = Math.max(P.rpuMin, 4 * tier) * P.rpuH * H30;
      s = d.gb * P.rsGB;
      break;
    case "snow":
      c = tier * P.snowCr * H30;
      s = (d.gb / 1024) * P.snowTB;
      break;
    case "dbx":
      c = P.dbuH * tier * P.dbu * H30;
      s = d.gb * P.s3;
      break;
    case "bq":
      c = Math.max(0, scanTB - P.bqFreeTB) * P.bqTB;
      s = Math.max(0, d.gb - 10) * P.bqGB;
      break;
    case "fabric":
      c = P.f2 * (d.gb > 2048 ? 4 : d.gb > 512 ? 2 : 1);
      s = d.gb * P.fGB;
      note = "Capacity runs all month unless paused";
      break;
    case "ch":
      c = P.chMin * tier * P.chU * H30;
      s = (d.gb / 1024) * P.chTB;
      break;
  }
  const e = pickETL(a);
  const b = pickBI(p, a, d);
  const et = etlCost(e, a, d, P);
  const bt = biCost(b, a, d, P, p);
  return { ok, c, s, e: et, b: bt, t: c + s + et + bt, etl: e, bi: b, note };
}

function crit(p, a, d) {
  const sk = (k) => a.skills.includes(k);
  const big = d.big;
  const T = {
    ops: { pg: 4 + (sk("linux") ? 2 : -2), athena: 7, redshift: 7, snow: 9.5, dbx: 5 + (sk("spark") ? 2 : 0), bq: 9.5, fabric: 8, ch: 8 },
    scale: {
      pg: big < 6.5 ? 9 : big < 7.3 ? 7 : big < 8 ? 4 : 1,
      athena: big < 9 ? 8 : 6,
      redshift: big < 7 ? 7 : 9,
      snow: big < 6 ? 7 : 9.5,
      dbx: big < 8 ? 6 : 10,
      bq: big < 6 ? 7 : 9.5,
      fabric: big < 7 ? 7 : 8.5,
      ch: big < 6 ? 7 : 9.5,
    },
    ml: { pg: 2, athena: 4, redshift: 5, snow: 6 + (sk("python") ? 1 : 0), dbx: 10, bq: 7, fabric: 7, ch: 3 },
    simple: { pg: 6 - (a.src > 5 ? 2 : 0), athena: 5, redshift: 6, snow: 9, dbx: 4 + (sk("spark") ? 2 : 0), bq: 8, fabric: 7, ch: 7 },
    lock: { pg: 10, athena: 7, redshift: 5, snow: 5, dbx: 7, bq: 4, fabric: 3, ch: 8 },
    security: { pg: 5 + (sk("linux") ? 1 : 0), athena: 8, redshift: 8, snow: 9, dbx: 9, bq: 9, fabric: 8, ch: 7 },
  };
  const o = {};
  for (const k in T) o[k] = clamp(T[k][p]);
  return o;
}

export function evaluate(a, P) {
  const d = derive(a);
  const costs = {};
  PLAT.forEach((x) => (costs[x.id] = cost(x.id, a, d, P)));
  const okT = PLAT.filter((x) => costs[x.id].ok).map((x) => costs[x.id].t);
  const minT = Math.max(1, Math.min(...okT));
  const wsum = Object.values(a.w).reduce((x, y) => x + y, 0) || 1;
  const has = (k) => a.work.includes(k);
  const sk = (k) => a.skills.includes(k);
  const cp = (k) => a.comp.includes(k);
  const res = PLAT.map((x) => {
    const p = x.id;
    const k = costs[p];
    const cr = crit(p, a, d);
    cr.cost = k.ok ? clamp(10 - 2.5 * Math.log2((k.t + 25) / (minT + 25))) : 0;
    const s =
      (Object.keys(a.w).reduce((acc, key) => acc + (cr[key] || 0) * a.w[key], 0) / wsum) * 10;
    let j = 0;
    const awsF = p === "athena" || p === "redshift";
    if (a.cloud === "aws") {
      if (awsF || p === "pg") j += 6;
      if (p === "snow" || p === "dbx") j += 2;
      if (p === "ch") j += 1;
      if (p === "bq" || p === "fabric") j -= 6;
    }
    if (a.cloud === "azure") {
      if (p === "fabric") j += 12;
      if (p === "snow" || p === "dbx") j += 3;
      if (awsF) j -= 8;
      if (p === "bq") j -= 6;
    }
    if (a.cloud === "gcp") {
      if (p === "bq") j += 10;
      if (p === "snow" || p === "dbx") j += 3;
      if (awsF) j -= 8;
      if (p === "fabric") j -= 6;
    }
    if (a.cloud === "none" && p === "pg") j += 2;
    if (has("ml")) j += { dbx: 10, bq: 4, fabric: 4, snow: 2, pg: -4, ch: -3 }[p] || 0;
    if (has("stream")) j += { dbx: 8, ch: 6, bq: 3, pg: -3, athena: -2 }[p] || 0;
    if (has("files")) j += { dbx: 6, athena: 4, snow: 2, bq: 2, fabric: 2 }[p] || 0;
    if (has("share")) j += { snow: 8, dbx: 4, bq: 3 }[p] || 0;
    if (has("adhoc") && d.users > 50) j += { snow: 4, bq: 4, ch: 3, pg: -3 }[p] || 0;
    if (a.src >= 8) j += p === "pg" ? -4 : p === "ch" ? 0 : 2;
    if (!sk("python") && !sk("spark") && p === "dbx") j -= 8;
    if (!sk("linux") && p === "pg") j -= 8;
    if (!sk("sql")) j += p === "fabric" ? 3 : -3;
    if (d.big < 6.5) j += { snow: -4, dbx: -12, redshift: -6, fabric: -4, ch: -3 }[p] || 0;
    if (d.big > 9 && p === "pg") j -= 20;
    if (a.bi === "pbi" && p === "fabric") j += 7;
    if (a.bi === "qs" && awsF) j += 3;
    if ((a.bi === "ls" || a.bi === "lsp") && p === "bq") j += 4;
    if (cp("sso") && p === "pg") j -= 3;
    if (cp("mask")) j += { snow: 3, dbx: 3, bq: 3, fabric: 2, redshift: 2, pg: -2 }[p] || 0;
    if (cp("cmk")) j += { athena: 2, redshift: 2, bq: 2, dbx: 2, pg: -1 }[p] || 0;
    if (cp("audit") && p === "pg") j -= 4;
    if (cp("private")) j += p === "pg" ? 1 : 0;
    if (!k.ok) j -= 40;
    return { ...x, raw: s + j, cost: k, crit: cr };
  });
  const mx = Math.max(100, ...res.map((r) => r.raw));
  res.forEach((r) => (r.score = Math.round(clamp((r.raw * 100) / mx, 0, 100))));
  res.sort((x, y) => y.raw - x.raw || x.cost.t - y.cost.t);
  return { d, res, minT };
}

// Formatting helpers (Indian numbering: lakh / crore).
export const indian = (n) =>
  n >= 1e7
    ? (n / 1e7).toLocaleString("en-IN", { maximumFractionDigits: n >= 1e9 ? 0 : 1 }) + " crore"
    : n >= 1e5
      ? (n / 1e5).toLocaleString("en-IN", { maximumFractionDigits: 1 }) + " lakh"
      : Math.round(n).toLocaleString("en-IN");
export const bytes = (gb) =>
  gb < 1
    ? (gb * 1024).toFixed(gb * 1024 < 10 ? 1 : 0) + " MB"
    : gb < 1024
      ? gb.toFixed(gb < 10 ? 1 : 0) + " GB"
      : (gb / 1024).toFixed(1) + " TB";
export const usd = (v) =>
  "$" + (v < 10 ? v.toFixed(v < 1 && v > 0 ? 2 : 1) : Math.round(v).toLocaleString("en-IN"));
export const inr = (v, fx) => "₹" + Math.round(v * fx).toLocaleString("en-IN");

// Builds the architecture sketch and the "why" / "watch out" bullets for the winner.
export function explain(a, ev, P) {
  const { d, res } = ev;
  const top = res[0];
  const has = (k) => a.work.includes(k);
  const E = ETLN[top.cost.etl];
  const B = BIN[top.cost.bi];
  const fr = { daily: "nightly", hourly: "hourly", "15m": "every 15 min", rt: "continuous" }[a.fresh];
  const A = {
    pg: `Source DB → ${a.fresh === "rt" ? "logical replication" : E + " (" + fr + ")"} → PostgreSQL\n  → ${B}\n  (one ${top.cost.c >= P.lsL ? "32 GB" : top.cost.c >= P.lsM ? "8 GB" : "2 GB"} Lightsail / VPS in Mumbai)`,
    athena: `Source DB → ${E} (${fr}) → S3 (Parquet, partitioned)\n  → Glue Data Catalog → Athena → ${B}`,
    redshift: `Sources → ${E} / AWS DMS (${fr})\n  → Redshift Serverless (${Math.max(P.rpuMin, 4)} RPU base, max limit set) → ${B}`,
    snow: `Source DB${a.src > 1 ? " + " + (a.src - 1) + " source" + (a.src > 2 ? "s" : "") : ""} → ${E} (${fr})\n  → Snowflake (X-Small, auto-suspend 60 s) → ${B}${has("share") ? "\n  + Secure Data Sharing to partners" : ""}`,
    dbx: `Sources → ${E} / Auto Loader${has("stream") ? " + Structured Streaming" : ""}\n  → Delta tables (bronze → silver → gold, Unity Catalog)\n  → Databricks SQL Serverless → ${B}${has("ml") ? "\n  → MLflow models" : ""}`,
    bq: `Source DB → ${E} (${fr}) → BigQuery (Mumbai, partitioned)\n  → ${B}${has("ml") ? "\n  → BigQuery ML / Vertex AI" : ""}`,
    fabric: `Sources → Fabric Data Factory / ${E}\n  → OneLake lakehouse / warehouse (F2+, pause off-hours)\n  → Power BI${has("ml") ? "\n  → Fabric notebooks" : ""}`,
    ch: `App data + events → ${E}${has("stream") ? " / Kafka" : ""} (${fr})\n  → ClickHouse Cloud (Mumbai) → ${B}`,
  };

  const why = [];
  const cr = top.crit;
  const money = (v) => `${usd(v)} (${inr(v, P.fx)})`;
  const cheapest = res.filter((r) => r.cost.ok).sort((x, y) => x.cost.t - y.cost.t)[0];
  if (cheapest.id === top.id)
    why.push(`Cheapest option for your inputs at about ${money(top.cost.t)} a month.`);
  else
    why.push(`${cheapest.name} is cheaper (${usd(cheapest.cost.t)}), but ${top.name} fits your other priorities better.`);
  if (d.big < 7)
    why.push(
      `${indian(a.rows)} records (≈ ${bytes(d.gb)}) is small; ${
        top.id === "pg" || top.id === "bq" || top.id === "athena"
          ? "no need to pay for a big warehouse"
          : "this pick is driven by your other answers, not size"
      }.`,
    );
  else if (d.big < 9)
    why.push(`Heading to ${indian(d.r3)} records in 3 years, which suits a managed warehouse.`);
  else why.push(`${indian(d.r3)} records within 3 years needs a distributed engine.`);
  if (
    a.cloud !== "none" &&
    { aws: ["athena", "redshift", "pg"], azure: ["fabric"], gcp: ["bq"] }[a.cloud].includes(top.id)
  )
    why.push("Stays inside the cloud you already use, with one bill and one sign-in.");
  if (has("ml") && top.id === "dbx") why.push("Strongest option for ML and forecasting.");
  if (has("share") && top.id === "snow") why.push("Sharing live data with partners is built in.");
  if (has("stream") && (top.id === "dbx" || top.id === "ch")) why.push("Handles streaming data well.");
  if (a.comp.includes("mask") && cr.security >= 8) why.push("Supports row and column-level access control.");
  if (a.w.ops >= 4 && cr.ops >= 8) why.push("Fully managed, so there's little to maintain.");
  if (top.cost.bi === "mbo") why.push("Free Metabase keeps BI cost flat however many users you add.");

  const watch = [...INFO[top.id].watch];
  if (top.cost.note) watch.unshift(top.cost.note);
  if (a.comp.includes("pii"))
    watch.push("Mask or drop personal data you don't need in reports (see the checklist below).");

  return { arch: A[top.id], why: why.slice(0, 5), watch: watch.slice(0, 4) };
}

// Shared by the visible FAQ and the FAQPage JSON-LD in page.js.
export const FAQ_DATA = [
  {
    q: "Which data warehouse is best for a small business?",
    a: "For under about 1 crore (10 million) rows and mostly dashboards, a single PostgreSQL server with Metabase is usually the cheapest and simplest option. If you already use Google Workspace or GCP, BigQuery's free tier is a strong alternative. Managed warehouses like Snowflake or Redshift start paying off once data, sources or concurrent users grow.",
  },
  {
    q: "How does the Warehouse Platform Picker choose a recommendation?",
    a: "It scores eight platforms against the priorities you weight (cost, maintenance, scale, ML readiness, simplicity, lock-in and security), then adjusts for your current cloud, team skills, workloads, data size and compliance needs. Platforms that cannot handle your data size are ruled out, and the estimated monthly cost feeds into the cost score.",
  },
  {
    q: "How accurate are the monthly cost estimates?",
    a: "They are planning estimates built from public list prices (mostly US regions, checked in October 2026) and simple usage assumptions. Mumbai and other regions are often slightly higher, and negotiated discounts, query patterns and ETL volumes can change the real bill. You can edit every unit price in the calculator to match your quote.",
  },
  {
    q: "Snowflake vs BigQuery vs Redshift: which should I pick?",
    a: "Pick the one that matches your cloud first. BigQuery suits Google Cloud teams and spiky querying, Redshift Serverless suits AWS-committed teams with steady SQL workloads, and Snowflake suits multi-source, multi-cloud setups with many SQL analysts and partner data sharing. The picker shows how each one ranks and costs for your specific inputs.",
  },
  {
    q: "When should I choose Databricks over a data warehouse?",
    a: "Choose Databricks when you have terabytes of data, streaming or file-based workloads, machine learning or AI on your data, and a team comfortable with Python or Spark. For plain reporting on small or medium data, a SQL warehouse is usually cheaper and easier to run.",
  },
  {
    q: "Can I keep analytics data in India for DPDP compliance?",
    a: "Yes. Every platform in this tool offers a Mumbai or other Indian region, so data residency does not change the ranking, but it does decide where you deploy. Most DPDP Act obligations apply from May 2027; confirm retention and cross-border transfer rules with your legal advisor.",
  },
];
