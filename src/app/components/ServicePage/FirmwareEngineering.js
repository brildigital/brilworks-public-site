import ServicePageTemplate from "./ServicePageTemplate";

const DATA = {
  hero: {
    tag: "Bare-metal · RTOS · Board bring-up",
    h1: [
      { text: "Embedded Firmware " },
      { text: "Development Services", accent: true },
    ],
    lede: "We provide embedded firmware development services for hardware that has to run untouched for years, not just survive a demo. From bootloader to board bring-up, we write the code your product boots on.",
    ctas: [
      {
        label: "Book a scoping call →",
        cal: true,
        calLink: "vikas-singh-bril/30-min-product-eng-review",
        primary: true,
      },
    ],
    micro: [
      { star: true, text: "★★★★★ 5.0 on Clutch" },
      { sep: true },
      { text: "Live in production today" },
      { sep: true },
      { text: "You own the source" },
    ],
    stats: [
      { v: "40+", l: "Firmware Projects Delivered" },
      { v: "8+", l: "Years of Engineering Excellence" },
      { v: "18+", l: "Countries Served" },
      { v: "15+", l: "MCU Platforms & Technologies" },
    ],
  },

  proof: {
    tag: "Core technology stack",
    items: [
      { bold: "Bare-metal C" },
      { bold: "Bootloader design" },
      { bold: "OTA updates" },
      { bold: "FreeRTOS", label: "Zephyr" },
      { bold: "I2C", label: "SPI · UART" },
      { bold: "JTAG", label: "SWD debug" },
      { bold: "Register-level drivers" },
      { bold: "Power optimization" },
      { bold: "Watchdog", label: "fault recovery" },
      { bold: "Board bring-up" },
    ],
    note: "Technologies deployed on production firmware — not a checklist.",
  },

  capabilities: {
    tag: "What we build",
    h2: "Our firmware engineering services.",
    p: "The work that decides whether firmware survives production, not just testing.",
    list: [
      {
        n: "01",
        icon: "Cpu",
        h3: "Microarchitecture selection",
        p: "Picking the right MCU or SoC based on what the product has to do — cost, headroom, and longevity — not what's popular on a forum.",
        chips: ["MCU selection", "SoC evaluation", "Cost modeling"],
      },
      {
        n: "02",
        icon: "Layers",
        h3: "Board support packages",
        p: "BSP layer, bootloader, drivers, and device tree that get Linux or your RTOS running on hardware nobody's shipped before.",
        chips: ["BSP", "Bootloader", "Device tree"],
      },
      {
        n: "03",
        icon: "Brain",
        h3: "Edge AI development",
        p: "Quantize and deploy ML models onto the device itself, so the product keeps working when the network doesn't.",
        chips: ["TinyML", "Model quantization", "Offline inference"],
      },
      {
        n: "04",
        icon: "RefreshCw",
        h3: "Fleet device management & OTA",
        p: "Staged rollout, rollback, and delta patching built before the first device leaves the factory, not after the first field failure.",
        chips: ["OTA pipeline", "Staged rollout", "Delta patching"],
      },
      {
        n: "05",
        icon: "ShieldCheck",
        h3: "Silicon-to-cloud security",
        p: "Root-of-trust from the bootloader up — secure boot, hardware-accelerated encryption, signed firmware — so a stolen device isn't a stolen private key.",
        chips: ["Secure boot", "Root-of-trust", "Encrypted firmware"],
      },
    ],
  },

  why: {
    tag: "Why Brilworks",
    h2: "Why engineering teams choose us.",
    p: "Plenty of firms can write C that compiles. Fewer build firmware around what actually breaks it in the field — timing, power, and the update path.",
    cards: [
      {
        h4: "Firmware built for the field, not the bench",
        p: "We design for the failure that happens after eight months of uptime, not the demo that works once with a lab power supply.",
      },
      {
        h4: "We work at the register level when the framework isn't enough",
        p: "When a vendor HAL can't hit your timing budget or a chip errata rules out the standard library, we go to the datasheet, not around the problem.",
      },
      {
        h4: "Code your team can maintain after we leave",
        p: "Documented, modular firmware your engineers can read and extend six months later. You keep the source. No lock-in.",
      },
      {
        h4: "Flexible engagement, no long hiring cycle",
        p: "Take a dedicated firmware team, or embed our engineers in yours. Start with one and scale into the other as scope grows.",
      },
    ],
  },

  work: {
    tag: "Selected work",
    h2: "Two builds, both running right now.",
    p: "Every project below is running in production today. These aren't proof-of-concepts or demo firmware — they're systems people rely on every day.",
    builds: [
      {
        href: "#case-bms",
        dom: "Electric Mobility · Battery Systems",
        h3: "Smart battery management system",
        desc: "Firmware for a lithium-ion BMS in light electric vehicles — continuous cell voltage and temperature monitoring, active balancing, and fault detection running on hardware people trust with their battery pack.",
        spec: [
          ["MCU", "STM32F4"],
          ["RTOS", "FreeRTOS"],
          ["Comms", "CAN · UART · SPI"],
          ["Scope", "Balancing + fault detection"],
        ],
        stk: ["CAN bus", "cell balancing", "bootloader"],
      },
      {
        href: "#case-meter",
        dom: "Utility Tech · Smart Metering",
        h3: "Smart water meter firmware platform",
        desc: "Bare-metal firmware for a connected water meter — pulse counting, leak detection, and LoRaWAN reporting tuned for years of battery life on a custom PCB in the field.",
        spec: [
          ["MCU", "STM32L4"],
          ["RTOS", "Bare Metal"],
          ["Comms", "LoRaWAN · UART · SPI"],
          ["Power", "Multi-year battery life"],
        ],
        stk: ["LoRaWAN", "low-power", "leak detection"],
      },
    ],
    quotes: [
      {
        stars: 5,
        text: "Their firmware engineers demonstrated a strong understanding of safety-critical embedded systems. The code quality, documentation, and engineering discipline exceeded our expectations.",
        cite: "Head of Embedded Systems",
      },
      {
        stars: 5,
        text: "Their engineers quickly understood our hardware platform and delivered stable firmware that was well structured and easy for our internal team to maintain.",
        cite: "Engineering Manager",
      },
    ],
  },

  engage: {
    tag: "How we work",
    h2: "Our engagement models.",
    p: "Flexible models to match your stage, whether you need a full firmware team, extra embedded hands, or a fixed build delivered end to end.",
    models: [
      {
        icon: "Users",
        h3: "Dedicated Firmware Team",
        md: "A full team — firmware engineers, hardware integration, QA — working only on your product. Best for companies building a core connected platform.",
        bill: "dedicated team, monthly.",
      },
      {
        icon: "UserPlus",
        h3: "Team Extension",
        md: "Add our embedded engineers to your existing team. They join your sprints, standups, and process, and read your platform fast. Best for scaling without the hiring cycle.",
        bill: "per engineer, monthly.",
      },
      {
        icon: "Package",
        h3: "Project-Based Model",
        md: "Fixed scope, fixed deliverable. We own the firmware from board bring-up to cloud, tested and documented. Best for a defined build or a well-scoped feature.",
        bill: "fixed-scope, quoted per project.",
      },
    ],
    quote: {
      text: "Finding engineers who could quickly understand an existing firmware platform isn't easy. They onboarded fast, worked independently, and stayed aligned with our processes. We would gladly work with them again.",
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
        p: "Map the hardware, constraints, and what 'done' means — before any number goes on paper.",
      },
      {
        n: "02",
        h4: "Architect",
        p: "Task scheduling, fault model, and update path agreed up front — the expensive decisions, made early.",
      },
      {
        n: "03",
        h4: "Build",
        p: "Firmware on real hardware from day one. Drivers written against your board, not a dev kit.",
      },
      {
        n: "04",
        h4: "Validate",
        p: "We test the last day — network loss, faults, continuous operation — not just the first boot.",
      },
      {
        n: "05",
        h4: "Hand off",
        p: "Documented, modular code. You keep the source. No lock-in.",
      },
    ],
    quote: {
      text: "Their engineers integrated from day one. They took the time to understand our board and quickly became a trusted extension of our engineering department.",
      cite: "Engineering Manager",
    },
  },

  industries: {
    tag: "Industries we serve",
    h2: "Where our firmware runs.",
    p: "Connected HVAC and industrial automation anchor the work above. The rest are spaces we've built in or are equipped for — tell us your domain on the call.",
    items: [
      { label: "Automotive & Mobility", lead: true },
      { label: "Energy & Utilities", lead: true },
      { label: "Industrial Automation" },
      { label: "Consumer IoT & Smart Home" },
      { label: "Medical & Health Devices" },
      { label: "HVAC & Building Systems" },
      { label: "Aerospace & Avionics Systems" },
    ],
  },

  faq: {
    tag: "Answers to top questions",
    h2: "Before you get on the call.",
    items: [
      {
        q: "Do you work with our existing hardware, or do we need a finished board first?",
        a: "Either. We've picked up firmware on boards we didn't design and taken projects from a bare schematic through bring-up. If hardware exists, we start with the datasheets and the errata sheet, not a demo.",
      },
      {
        q: "Who owns the firmware source code after the project ends?",
        a: "You do. Full source, build scripts, and documentation transfer at handoff. No licensing fees, no dependency on us to compile your own firmware.",
      },
      {
        q: "What MCU platforms and toolchains do you support?",
        a: "STM32, ESP32, Nordic nRF, NXP, and TI MSP430 across FreeRTOS, Zephyr, and bare-metal builds. If your platform isn't on that list, tell us on the scoping call — most of the work transfers regardless of silicon.",
      },
      {
        q: "Do you help with FCC, CE, or UL certification?",
        a: "We don't run the certification process, but we build with it in mind — clean power states, documented RF behavior, and fault handling that won't surprise a test lab. We've supported clients through certification cycles by fixing what testing surfaces.",
      },
      {
        q: "How do you handle firmware updates after the product ships?",
        a: "If the product needs OTA, we build staged rollout and rollback into the bootloader from day one, not bolted on after a field failure. For products without connectivity, we hand over a versioned build process your team can run without us.",
      },
    ],
  },

  cta: {
    tag: "✦ Start here",
    h2: "Tell us what you're building.",
    p: "Send us the problem — you'll get back a practical plan, not a sales pitch. Start a project, or bring our certified engineers onto your team.",
    ctas: [
      {
        label: "Book a scoping call →",
        cal: true,
        calLink: "vikas-singh-bril/30-min-product-eng-review",
        primary: true,
      },
      { label: "See the work first", href: "#work", primary: false },
    ],
    ticks: ["30-minute call", "You own the code", "No obligation"],
  },
};

const FirmwareEngineering = () => <ServicePageTemplate data={DATA} />;

export default FirmwareEngineering;
