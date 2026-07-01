import Link from "next/link";
import "../../styles/EnterpriseHome.css";

const ROLES = [
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

          {/* Right panel — mirrors the landing page panel */}
          <div className="rv d2">
            <div className="panel">
              <div className="ph">
                <span style={{ fontWeight: 600 }}>How hiring works</span>
                <span className="up">share → match → interview → build</span>
              </div>
              {STEPS.map((s) => (
                <div className="stage" key={s.n}>
                  <span className="ic">{s.n}</span>
                  <div>
                    <div className="nm">{s.title}</div>
                    <div className="meta">{s.body}</div>
                  </div>
                </div>
              ))}
              <div className="pf">
                <div>
                  <div className="l">Available for</div>
                  <div className="v">Full-time · Part-time · Contract</div>
                </div>
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
          <p className="eyebrow">All roles</p>
          <h2 className="sec">Pick the engineer you need.</h2>
          <p className="sub">
            Every engineer is vetted for technical skill, communication, and
            delivery — before you ever speak to them.
          </p>
          <div className="hire-roles">
            {ROLES.map((r) => (
              <Link className="hrole" key={r.href} href={r.href}>
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
          <p className="eyebrow">Process</p>
          <h2 className="sec">From requirement to onboarded in a week.</h2>
          <div className="steps">
            {STEPS.map((s) => (
              <div className="step" key={s.n}>
                <span className="n">{s.n}</span>
                <h4>{s.title}</h4>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── alt bg (slight blue) */}
      <section className="alt">
        <div className="wrap">
          <div className="final">
            <h2>Tell us who you need.</h2>
            <p>
              Share your requirements — you&apos;ll get back matched developer
              profiles in 48 hours, not a sales pitch.
            </p>
            <div className="ctas mt-4">
              <Link className="btn btn-primary" href="/contact-us/">
                Get matched now
              </Link>
            </div>
            <div className="ticks">
              <span>NDA on request</span>
              <span>No obligation</span>
              <span>Profiles in 48 hours</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HireEngineers;
