import Link from "next/link";
import FinalCTA from "../Common/FinalCTA";
import "../../styles/EnterpriseHome.css";

const SERVICES = [
  {
    title: "Embedded Software Development",
    body: "Production firmware for connected and industrial hardware that runs for years, not just a proof of concept.",
    tags: ["FreeRTOS", "STM32", "OTA Updates"],
    href: "/embedded-software-development-services/",
  },
  {
    title: "Firmware Engineering",
    body: "Bare-metal and RTOS firmware across MCUs that survives real timing, power, and update paths. You own the source.",
    tags: ["RTOS", "Board Bring-up", "BSP Development"],
    href: "/firmware-engineering-services/",
  },
  {
    title: "Edge AI / On-Device ML",
    body: "Machine learning deployed directly on embedded devices for real-time inference, no cloud dependency required.",
    tags: ["TinyML", "TensorFlow Lite Micro", "Edge Vision"],
    href: "/edge-ai-development-services/",
  },
  {
    title: "IoT Product Engineering",
    body: "Device to cloud: embedded firmware, wireless connectivity, and apps engineered into one production-ready product.",
    tags: ["BLE / LoRaWAN", "AWS IoT Core", "Device to Cloud"],
    href: "/iot-product-engineering-services/",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Share Requirements",
    body: "Tell us the hardware, protocols, and constraints you're working with.",
  },
  {
    n: "02",
    title: "Get a Scoped Plan",
    body: "Receive an architecture and fixed-scope estimate within days.",
  },
  {
    n: "03",
    title: "Build & Validate",
    body: "We build, test on real hardware, and validate against your requirements.",
  },
  {
    n: "04",
    title: "Ship to Production",
    body: "You own the source and the IP. We stay on for support if you need it.",
  },
];

const IoTEmbeddedServices = () => {
  return (
    <div className="bw-home">
      {/* ── Hero ── identical structure to HireEngineers */}
      <section className="hero">
        <div className="wrap">
          <div>
            <span className="pill rv">
              <b>IoT &amp; Embedded</b> · Device to cloud engineering
            </span>
            <h1 className="rv d1">
              IoT &amp; Embedded engineering, device to cloud.
            </h1>
            <p className="lede rv d2">
              Embedded software, firmware, edge AI, and full IoT product
              engineering. One team across the stack, from silicon to the cloud
              dashboard.
            </p>
            <div className="ctas rv mt-4">
              <Link className="btn btn-primary" href="/contact-us/">
                Talk to our team
              </Link>
              <Link className="btn btn-ghost" href="#services">
                See our services
              </Link>
            </div>
            <div className="trust rv d3">
              <span>
                <span className="star">★★★★★</span> Verified reviews on Clutch
              </span>
              <span>NDA on request</span>
              <span>You own the IP</span>
            </div>
          </div>

          {/* Right panel — engagement panel, same structure as the hire-panel variant */}
          <div className="rv d2">
            <div className="hire-panel">
              <div className="hp-head">
                <span className="t">How we engage</span>
                <span className="up">scope → prototype → build → ship</span>
              </div>
              <div className="hp-focus">
                <div className="hp-ring">
                  <div className="hp-ring-inner">
                    <div className="hp-ring-v !text-base">6–12 wk</div>
                    <div className="hp-ring-l">to production</div>
                  </div>
                </div>
                <div>
                  <div className="hp-focus-t">Fixed-scope delivery</div>
                  <div className="hp-focus-d">
                    Most embedded and IoT builds ship a production-ready first
                    release in 6 to 12 weeks, depending on hardware complexity.
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
                <div className="l">Engaged for</div>
                <span className="chip">Full builds</span>
                <span className="chip">Firmware only</span>
                <span className="chip">Ongoing support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── alt bg (slight blue) */}
      <section className="alt" id="services">
        <div className="wrap">
          <p className="eyebrow rv">All services</p>
          <h2 className="sec rv d1">Pick the piece you need.</h2>
          <p className="sub rv d2">
            Every engagement is scoped to real hardware and real constraints —
            before you ever sign anything.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
            {SERVICES.map((s, i) => (
              <Link
                className="hrole rv"
                key={s.href}
                href={s.href}
                style={{ transitionDelay: `${0.06 + i * 0.06}s` }}
              >
                <h4>{s.title}</h4>
                <p>{s.body}</p>
                <div className="hchips">
                  {s.tags.map((t) => (
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
        h2="Tell us what you're building."
        p="Share your hardware, protocols, and constraints — you'll get back a scoped plan, not a sales pitch."
        ctas={[
          { label: "Talk to our team", href: "/contact-us/", primary: true },
        ]}
        ticks={["NDA on request", "You own the IP", "Scoped plan within days"]}
        altBg
      />
    </div>
  );
};

export default IoTEmbeddedServices;
