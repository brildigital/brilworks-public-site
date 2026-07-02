import Link from "next/link";
import FinalCTA from "../Common/FinalCTA";
import "../../styles/EnterpriseHome.css";

const ROLES = [
  {
    title: "Snowflake Developer",
    body: "Data warehouse design, dbt analytics engineering, migration & performance tuning.",
    tags: ["Data Warehousing", "dbt", "Performance Tuning"],
    href: "/hire-snowflake-developer/",
  },
  {
    title: "Databricks Developer",
    body: "Lakehouse architecture, Delta Lake pipelines & MLflow ML platforms.",
    tags: ["Delta Lake", "PySpark", "MLflow"],
    href: "/hire-databricks-developer/",
  },
  {
    title: "Data Engineer",
    body: "Production pipelines — ingestion, dbt transformation, streaming & orchestration.",
    tags: ["Airflow", "Kafka", "dbt"],
    href: "/hire-data-engineer/",
  },
  {
    title: "Analytics Engineer",
    body: "dbt transformation layer, semantic models & dashboards teams can trust.",
    tags: ["dbt Core", "Dimensional Modelling", "CI/CD for data"],
    href: "/hire-analytics-engineer/",
  },
  {
    title: "ML / AI Engineer",
    body: "Production ML models, GenAI apps, RAG pipelines & agentic systems.",
    tags: ["LLM Integration", "RAG", "MLOps-ready"],
    href: "/hire-ml-ai-engineer/",
  },
  {
    title: "MLOps Engineer",
    body: "Training pipelines, model serving, feature stores & drift monitoring.",
    tags: ["Model Serving", "CI/CD for ML", "Monitoring"],
    href: "/hire-mlops-engineer/",
  },
  {
    title: "Java Developer",
    body: "Enterprise backend, Spring Boot, microservices & REST APIs.",
    tags: ["Spring Boot", "Microservices", "REST APIs"],
    href: "/hire-java-developer/",
  },
  {
    title: "Node.js Developer",
    body: "Scalable server-side apps, real-time systems & GraphQL APIs.",
    tags: ["Express", "GraphQL", "Real-time"],
    href: "/hire-nodejs-developer/",
  },
  {
    title: "React.js Developer",
    body: "Fast, accessible web UIs and SPA/SSR apps with modern React.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    href: "/hire-reactjs-developer/",
  },
  {
    title: "React Native Developer",
    body: "Cross-platform iOS & Android apps with native performance.",
    tags: ["iOS", "Android", "Expo"],
    href: "/hire-react-native-developer/",
  },
  {
    title: "AWS Developer",
    body: "Cloud architecture, serverless, DevOps & infrastructure as code.",
    tags: ["Lambda", "ECS", "Terraform"],
    href: "/hire-aws-developer/",
  },
  {
    title: "UI/UX Designer",
    body: "Product design, Figma prototypes, design systems & user research.",
    tags: ["Figma", "Design Systems", "Prototyping"],
    href: "/hire-ui-ux-designer/",
  },
  {
    title: "Blockchain Developer",
    body: "Smart contracts, DeFi protocols, NFT platforms & Web3 integrations.",
    tags: ["Solidity", "Ethereum", "Web3"],
    href: "/hire-blockchain-developer/",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Share Requirements",
    body: "Tell us the tech stack, experience level, and timeline. NDA signed on request.",
  },
  {
    n: "02",
    title: "Get Matched Profiles",
    body: "Receive 3–5 hand-picked developer profiles within 48 hours.",
  },
  {
    n: "03",
    title: "Interview Developers",
    body: "Run technical interviews at your own pace. No pressure, no pushy follow-ups.",
  },
  {
    n: "04",
    title: "Start Building",
    body: "Pick your engineer. We handle contracts and onboarding. Start within a week.",
  },
];

const STATS = [
  { v: "120+", l: "Projects shipped" },
  { v: "5.0★", l: "Clutch rating" },
  { v: "48 hr", l: "First profiles" },
  { v: "20+", l: "Countries served" },
];

const HireEngineers = () => {
  return (
    <div className="bw-home">
      {/* ── Hero ── identical structure to EnterpriseHero */}
      <section className="hero">
        <div className="wrap">
          <div>
            <span className="pill rv">
              <b>Dedicated hiring</b> · Pre-vetted engineers, all stacks
            </span>
            <h1 className="rv d1">Hire dedicated engineers.</h1>
            <p className="lede rv d2">
              Java, Node.js, React, React Native, AWS, UI/UX, and Blockchain —
              on-demand or long-term engagement.
            </p>
            <div className="ctas rv mt-4">
              <Link className="btn btn-primary" href="/contact-us/">
                Talk to our team
              </Link>
              <Link className="btn btn-ghost" href="#roles">
                See all roles
              </Link>
            </div>
            <div className="trust rv d3">
              <span>
                <span className="star">★★★★★</span> 22 verified reviews on
                Clutch
              </span>
              <span>NDA on request</span>
              <span>Profiles within 48 hours</span>
            </div>
          </div>

          {/* Right panel — progress-ring stat variant, distinct from the landing page panel */}
          <div className="rv d2">
            <div className="hire-panel">
              <div className="hp-head">
                <span className="t">How hiring works</span>
                <span className="up">share → match → interview → build</span>
              </div>
              <div className="hp-focus">
                <div className="hp-ring">
                  <div className="hp-ring-inner">
                    <div className="hp-ring-v">48hr</div>
                    <div className="hp-ring-l">first profiles</div>
                  </div>
                </div>
                <div>
                  <div className="hp-focus-t">Fast-tracked matching</div>
                  <div className="hp-focus-d">
                    Most clients get 3–5 vetted profiles within two business
                    days of sharing requirements.
                  </div>
                </div>
              </div>
              <div className="hp-steps-mini">
                {STEPS.map((s) => (
                  <div className="hp-mini" key={s.n}>
                    <span className="hp-mini-n">{s.n}</span>
                    <span className="hp-mini-t">{s.title}</span>
                  </div>
                ))}
              </div>
              <div className="hp-foot">
                <div className="l">Available for</div>
                <span className="chip">Full-time</span>
                <span className="chip">Part-time</span>
                <span className="chip">Contract</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── white bg (default) */}
      {/* <section>
        <div className="wrap">
          <div className="nums">
            {STATS.map((s) => (
              <div className="num" key={s.l}>
                <div className="v">{s.v}</div>
                <div className="l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── Roles ── alt bg (slight blue) */}
      <section className="alt" id="roles">
        <div className="wrap">
          <p className="eyebrow rv">All roles</p>
          <h2 className="sec rv d1">Pick the engineer you need.</h2>
          <p className="sub rv d2">
            Every engineer is vetted for technical skill, communication, and
            delivery — before you ever speak to them.
          </p>
          <div className="hire-roles">
            {ROLES.map((r, i) => (
              <Link
                className="hrole rv"
                key={r.href}
                href={r.href}
                style={{ transitionDelay: `${0.06 + i * 0.06}s` }}
              >
                <h4>{r.title}</h4>
                <p>{r.body}</p>
                <div className="hchips">
                  {r.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <span className="harrow">View details →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── white bg */}
      <section>
        <div className="wrap">
          <p className="eyebrow rv">Process</p>
          <h2 className="sec rv d1">
            From requirement to onboarded in a week.
          </h2>
          <div className="steps">
            {STEPS.map((s, i) => (
              <div
                className="step rv"
                key={s.n}
                style={{ transitionDelay: `${0.06 + i * 0.08}s` }}
              >
                <span className="n">{s.n}</span>
                <h4>{s.title}</h4>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── alt bg (slight blue) */}
      <FinalCTA
        tag={null}
        h2="Tell us who you need."
        p="Share your requirements — you'll get back matched developer profiles in 48 hours, not a sales pitch."
        ctas={[
          { label: "Get matched now", href: "/contact-us/", primary: true },
        ]}
        ticks={["NDA on request", "No obligation", "Profiles in 48 hours"]}
        altBg
      />
    </div>
  );
};

export default HireEngineers;
