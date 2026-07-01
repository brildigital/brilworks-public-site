import ServicePageTemplate from "./ServicePageTemplate";

const DATA = {
  hero: {
    tag: "Connected devices · Industrial IoT · Embedded systems",
    h1: [
      { text: "Embedded Software " },
      { text: "Development Services", accent: true },
    ],
    lede: "Production firmware for connected and industrial hardware that has to work every day, not just during the demo. Hire us as a dedicated team, or embed our engineers in yours.",
    ctas: [
      { label: "Book a scoping call →", cal: true, calLink: "vikas-singh-bril/30-min-product-eng-review", primary: true },
      { label: "See the work", href: "#work", primary: false },
    ],
    micro: [
      { star: true, text: "★★★★★ 5.0 on Clutch" },
      { sep: true },
      { text: "Live in production today" },
      { sep: true },
      { text: "You own the code" },
    ],
    stats: [
      { v: "180+", l: "Projects delivered" },
      { v: "99%", l: "Client satisfaction" },
      { v: "18+", l: "Countries served" },
      { v: "24/7", l: "Firmware built for continuous operation" },
    ],
  },

  proof: {
    tag: "Core technology stack",
    items: [
      { bold: "STM32", label: "STM32F4" },
      { bold: "FreeRTOS", label: "task design" },
      { bold: "Modbus", label: "RTU / TCP · RS485" },
      { bold: "MQTT", label: "→ AWS IoT" },
      { bold: "Watchdog", label: "recovery" },
      { bold: "PCB", label: "bring-up" },
      { bold: "OTA", label: "fail-safe updates" },
      { bold: "Embedded C" },
      { bold: "Edge AI", label: "TinyML" },
    ],
    note: "Technologies deployed on production firmware — not a checklist.",
  },

  capabilities: {
    tag: "What we build",
    h2: "Our Embedded Software Development Services.",
    p: "From board bring-up to long-term reliability, built to scale with your product.",
    visual: {
      title: "How watchdog recovery works",
      ok: "Illustrative",
      svgPoints:
        "0,70 20,68 40,70 60,20 80,18 100,66 120,64 140,68 160,66 180,20 200,18 220,64 240,66 260,68 280,18 300,16",
      footer: [
        "Fault detected",
        "Auto-recovered, no manual intervention",
        "Stable",
      ],
    },
    list: [
      {
        n: "01",
        icon: "Cpu",
        h3: "Board support packages & OS porting",
        p: "BSP development and OS porting that bring up your hardware cleanly and reliably.",
        chips: ["BSP Development", "OS Porting", "Bootloader"],
      },
      {
        n: "02",
        icon: "Cloud",
        h3: "IoT cloud connectivity & integration",
        p: "Secure device connectivity using MQTT, CoAP and cloud platforms like AWS IoT Core, Azure IoT Hub and GCP.",
        chips: ["MQTT", "AWS IoT Core", "Secure Telemetry"],
      },
      {
        n: "03",
        icon: "Brain",
        h3: "Edge AI & TinyML implementation",
        p: "Run ML models on-device for faster decisions, lower latency and smarter products.",
        chips: ["Model Compression", "TinyML", "Edge Inference"],
      },
      {
        n: "04",
        icon: "RefreshCw",
        h3: "Secure over-the-air update systems",
        p: "Reliable OTA update pipelines with rollback, integrity checks and fleet-safe rollouts.",
        chips: ["OTA Updates", "Rollback", "Integrity Checks"],
      },
      {
        n: "05",
        icon: "ShieldCheck",
        h3: "Hardware-in-the-loop testing & compliance",
        p: "Automated HIL testing and compliance readiness for safety, performance and reliability.",
        chips: ["HIL Testing", "Compliance", "Stress Testing"],
      },
    ],
  },

  why: {
    tag: "Why Brilworks",
    h2: "Why engineering teams choose us.",
    p: "Plenty of firms can write embedded C. Fewer build embedded software development services around the thing that actually matters: code that holds up after you've moved on.",
    cards: [
      {
        h4: "Firmware designed for production, not prototypes",
        p: "We build for the device that ships and runs for years, not the demo that works once on a bench.",
      },
      {
        h4: "Hardware and software expertise under one roof",
        p: "We solve problems across firmware, electronics, and connectivity instead of pointing at the other side of the line.",
      },
      {
        h4: "Modular code your team can maintain",
        p: "Documented, modular architecture your engineers can read and extend six months later. You keep the source.",
      },
      {
        h4: "Flexible engagement, no long hiring cycle",
        p: "Take a dedicated team, or embed our engineers in yours. Start with one and grow into the other.",
      },
    ],
  },

  work: {
    tag: "Selected work",
    h2: "Two builds, both running right now.",
    p: "Every project below is running in production today. These aren't proof-of-concepts or demo firmware — they're systems people rely on every day.",
    builds: [
      {
        href: "#case-ventilation",
        dom: "Connected HVAC · Europe",
        h3: "Intelligent residential ventilation",
        desc: "Read five environmental sensor types and make autonomous, zone-by-zone airflow decisions in real time, on constrained hardware running non-stop in people's homes.",
        spec: [
          ["MCU", "STM32F4"],
          ["Link", "ESP32 · MQTT"],
          ["Senses", "CO₂ · VOC · PM"],
          ["Cloud", "AWS IoT Core"],
        ],
        stk: ["FreeRTOS", "Embedded C", "multi-zone control"],
        // open: "Read the build",
      },
      {
        href: "#case-gateway",
        dom: "Industrial automation · Factory floor",
        h3: "Industrial IoT edge gateway",
        desc: "Legacy machinery with no path to the cloud. A gateway that speaks industrial protocols, buffers through network outages, and runs untouched on the floor for the long haul.",
        spec: [
          ["MCU", "STM32"],
          ["Bus", "Modbus · RS485"],
          ["Resilience", "offline buffer"],
          ["Cloud", "AWS IoT Core"],
        ],
        stk: ["FreeRTOS", "watchdog recovery", "secure MQTT"],
        // open: "Read the build",
      },
    ],
    quotes: [
      {
        stars: 5,
        text: "Strong expertise with STM32, FreeRTOS, and MQTT, with clear communication throughout. They delivered high-quality work and adapted as requirements evolved.",
        cite: "Director of Engineering",
      },
      {
        stars: 5,
        text: "What stood out was their focus on building for production, not just making features work. Maintainability, fault recovery, and reliability from the very beginning.",
        cite: "Head of Product Development",
      },
    ],
  },

  engage: {
    tag: "How we work",
    h2: "Our engagement models.",
    p: "Flexible models to match your stage, whether you need a full firmware team, extra embedded hands, or a fixed build delivered end to end.",
    models: [
      {
        icon: "⚙",
        h3: "Dedicated Development Team",
        md: "A full embedded team of firmware engineers, hardware integration specialists, and QA, working only on your product. Best for companies building a core connected platform.",
        bill: "dedicated team, monthly.",
      },
      {
        icon: "👥",
        h3: "Team Extension",
        md: "Add our embedded engineers to your existing team. They join your repo, standups, and processes and read your platform fast. Best for scaling without the hiring cycle.",
        bill: "per engineer, monthly.",
      },
      {
        icon: "📦",
        h3: "Project-Based Model",
        md: "Fixed scope, fixed deliverable. We own the firmware from board bring-up to cloud, tested and documented. Best for a defined product or a well-scoped build.",
        bill: "fixed-scope, quoted per project.",
      },
    ],
    quote: {
      text: "Finding engineers who can quickly understand an existing embedded platform isn't easy. They onboarded quickly, worked independently, and stayed aligned with our processes. We would gladly work with them again.",
      cite: "Embedded Systems Lead",
    },
  },

  process: {
    tag: "How it runs",
    h2: "How we deliver production-ready firmware.",
    p: "No mystery, no disappearing act — whether we build it or join you.",
    steps: [
      {
        n: "01",
        h4: "Scope",
        p: "Map the hardware, constraints, and what 'done' means before any number.",
      },
      {
        n: "02",
        h4: "Architect",
        p: "Tasks, scheduling, fault model agreed up front. The expensive-to-change decisions.",
      },
      {
        n: "03",
        h4: "Build",
        p: "Firmware on real hardware. Drivers up, debugged across the hardware line.",
      },
      {
        n: "04",
        h4: "Validate",
        p: "We test the bad day: network loss, faults, continuous operation.",
      },
      {
        n: "05",
        h4: "Hand off",
        p: "Documented, modular code. You keep the source. No lock-in.",
      },
    ],
    quote: {
      text: "Their engineers integrated from day one. They took the time to understand our product architecture and quickly became a trusted extension of our engineering department.",
      cite: "Engineering Manager",
    },
  },

  industries: {
    tag: "Industries we serve",
    h2: "Where our firmware runs.",
    p: "Connected HVAC and industrial automation anchor the work above. Tell us your domain on the call.",
    items: [
      { label: "HVAC & Building Systems", lead: true },
      { label: "Industrial Automation", lead: true },
      { label: "Consumer IoT & Smart Home" },
      { label: "Energy" },
      { label: "Medical & Health Devices" },
      { label: "Automotive & Mobility" },
      { label: "Aerospace & Avionics" },
    ],
  },

  faq: {
    tag: "Before you call",
    h2: "The questions we get most.",
    items: [
      {
        q: "Who owns the firmware?",
        a: "You do. Source code, documentation, and the repository transfer to you at handoff. No lock-in.",
      },
      {
        q: "Can you work with our existing hardware?",
        a: "Yes, most of our work is exactly that. We build to your schematics alongside your EE team.",
      },
      {
        q: "What does it cost?",
        a: "Too device-dependent for a number here. Fixed-scope work is quoted per project; staffing is monthly per engineer.",
      },
    ],
  },

  cta: {
    tag: "Start here",
    h2: "Tell us what you're building.",
    p: "Whether you're starting from a new board or improving an existing platform, we'll help you define the right approach before any code is written.",
    ctas: [
      { label: "Book a scoping call →", cal: true, calLink: "vikas-singh-bril/30-min-product-eng-review", primary: true },
      { label: "See the work first", href: "#work", primary: false },
    ],
    ticks: ["30-minute call", "You own the code", "No obligation"],
  },
};

const EmbeddedSoftwareDevelopment = () => <ServicePageTemplate data={DATA} />;

export default EmbeddedSoftwareDevelopment;
