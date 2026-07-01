import ServicePageTemplate from "./ServicePageTemplate";

const DATA = {
  hero: {
    tag: "Connected Products • IoT Engineering • Edge to Cloud",
    h1: [
      { text: "IoT Product " },
      { text: "Engineering Services", accent: true },
    ],
    lede: "Build connected products that collect, process, and act on real world data. From embedded firmware and wireless connectivity to cloud platforms and user applications, we engineer IoT products that are designed for production from day one.",
    ctas: [
      { label: "Book a scoping call →", cal: true, calLink: "vikas-singh-bril/30-min-product-eng-review", primary: true },
      { label: "See the work", href: "#work", primary: false },
    ],
    micro: [
      { star: true, text: "★★★★★ 5.0 on Clutch" },
      { sep: true },
      { text: "Devices running in production today" },
      { sep: true },
      { text: "You own the IP" },
    ],
    stats: [
      { v: "35+", l: "Connected Products Delivered" },
      { v: "99%", l: "Client Satisfaction" },
      { v: "18+", l: "Countries Served" },
      { v: "24/7", l: "Systems Built for Continuous Operation" },
    ],
  },

  proof: {
    tag: "Core technology stack",
    items: [
      { bold: "STM32" },
      { bold: "ESP32" },
      { bold: "Nordic" },
      { bold: "BLE" },
      { bold: "LoRaWAN" },
      { bold: "LTE-M" },
      { bold: "MQTT" },
      { bold: "AWS IoT Core" },
      { bold: "Azure IoT" },
      { bold: "OTA Updates" },
      { bold: "FreeRTOS" },
      { bold: "Embedded Linux" },
      { bold: "Edge AI" },
      { bold: "Secure Device Provisioning" },
    ],
    note: "Technologies deployed on production IoT devices — not a checklist.",
  },

  capabilities: {
    tag: "What we build",
    h2: "Our IoT engineering services.",
    p: "Every layer required to take an IoT product from prototype to production.",
    list: [
      {
        n: "01",
        icon: "Cpu",
        h3: "Connected device engineering",
        p: "Embedded software and firmware powering intelligent connected products built around STM32, ESP32, Nordic, and other embedded platforms. Designed for reliable operation, long-term maintainability, and production deployment.",
        chips: ["Embedded firmware", "STM32", "ESP32", "FreeRTOS"],
      },
      {
        n: "02",
        icon: "Wifi",
        h3: "Wireless connectivity & device communication",
        p: "Reliable communication between devices and the cloud using modern IoT protocols and wireless technologies. Built for products that must stay connected in real-world environments.",
        chips: ["BLE", "WiFi", "LoRaWAN", "LTE-M", "MQTT", "Device provisioning"],
      },
      {
        n: "03",
        icon: "Cloud",
        h3: "IoT cloud platforms & device management",
        p: "Cloud infrastructure that securely manages connected devices, telemetry, remote diagnostics, OTA firmware updates, and lifecycle management at scale.",
        chips: ["AWS IoT Core", "Azure IoT", "Device management", "Secure telemetry"],
      },
      {
        n: "04",
        icon: "Layers",
        h3: "Mobile & web applications",
        p: "Applications that allow operators and customers to monitor, configure, control, and manage connected devices from anywhere.",
        chips: ["Dashboards", "Mobile apps", "Remote monitoring", "Alerts"],
      },
      {
        n: "05",
        icon: "Brain",
        h3: "Edge intelligence & analytics",
        p: "Deploy intelligence where it matters. From local decision making and sensor fusion to TinyML inference, we help devices respond instantly without depending entirely on cloud connectivity.",
        chips: ["Edge AI", "TinyML", "On-device inference", "Real-time analytics"],
      },
    ],
  },

  why: {
    tag: "Why Brilworks",
    h2: "Why product companies choose us.",
    p: "Most vendors build one part of an IoT system. We engineer the complete product — from embedded firmware running on the device to cloud platforms processing millions of events.",
    cards: [
      {
        h4: "Complete product engineering",
        p: "Hardware integration, firmware, connectivity, cloud infrastructure, and applications delivered as one engineering effort.",
      },
      {
        h4: "Production before scale",
        p: "We build systems designed for manufacturing, deployment, and long-term operation — not proof-of-concepts that need to be rewritten later.",
      },
      {
        h4: "Embedded, cloud & AI under one roof",
        p: "Connected products generate valuable data. Our embedded, data engineering, and AI teams work together to help you use it.",
      },
      {
        h4: "Flexible engineering teams",
        p: "Whether you need a dedicated IoT team or specialists joining your existing engineering organization, we integrate into your workflow without disrupting it.",
      },
    ],
  },

  work: {
    tag: "Selected work",
    h2: "Connected products running in production today.",
    p: "These aren't demonstrations built for conferences. They're production systems deployed in homes and industrial environments where reliability matters every day.",
    builds: [
      {
        href: "#case-ventilation",
        dom: "Smart Building · Europe",
        h3: "Intelligent residential ventilation platform",
        desc: "Developed the embedded software and cloud connectivity powering an intelligent ventilation system capable of monitoring indoor air quality and automatically adjusting airflow across multiple residential zones.",
        spec: [
          ["MCU", "STM32F4 · ESP32"],
          ["Cloud", "AWS IoT Core"],
          ["Comms", "MQTT"],
          ["Sensors", "CO₂ · VOC · Humidity · PM"],
        ],
        stk: ["FreeRTOS", "Embedded C", "Multi-zone control", "Cloud monitoring"],
      },
      {
        href: "#case-gateway",
        dom: "Industrial Manufacturing",
        h3: "Industrial IoT edge gateway",
        desc: "Developed an industrial gateway that connects legacy manufacturing equipment to cloud infrastructure through secure telemetry, protocol translation, and intelligent edge processing.",
        spec: [
          ["MCU", "STM32"],
          ["Comms", "Modbus RTU · RS485"],
          ["Protocol", "MQTT"],
          ["Cloud", "AWS IoT Core"],
        ],
        stk: ["FreeRTOS", "Offline buffering", "Watchdog recovery", "Industrial IoT"],
      },
    ],
    quotes: [
      {
        stars: 5,
        text: "Their team demonstrated strong expertise across embedded software, cloud connectivity, and IoT architecture. They consistently delivered high quality work while adapting quickly as project requirements evolved.",
        cite: "Director of Engineering",
      },
      {
        stars: 5,
        text: "Beyond writing firmware, they understood the complete connected product. Their engineering recommendations improved both device reliability and long-term scalability.",
        cite: "Head of Product Development",
      },
    ],
  },

  engage: {
    tag: "How we work",
    h2: "Our engagement models.",
    p: "Flexible engagement models for companies building connected products, whether you need a dedicated IoT team or an end-to-end engineering partner.",
    models: [
      {
        icon: "Users",
        h3: "Dedicated IoT Engineering Team",
        md: "A cross-functional team of firmware engineers, cloud engineers, backend developers, QA specialists, and IoT architects focused exclusively on your product. Best for long-term connected product development.",
        bill: "dedicated team, monthly.",
      },
      {
        icon: "UserPlus",
        h3: "Team Extension",
        md: "Integrate experienced IoT engineers into your existing team to accelerate delivery without disrupting your development process. Best for scaling existing engineering teams.",
        bill: "per engineer, monthly.",
      },
      {
        icon: "Package",
        h3: "Project-Based Model",
        md: "Fixed-scope engagement covering firmware, connectivity, cloud infrastructure, and production validation. Best for well-defined IoT product initiatives.",
        bill: "fixed-scope, quoted per project.",
      },
    ],
    quote: {
      text: "Their team integrated quickly, understood both our hardware platform and cloud requirements, and consistently delivered reliable firmware and backend software on schedule.",
      cite: "VP of Engineering",
    },
  },

  process: {
    tag: "How it runs",
    h2: "How we deliver production-ready IoT products.",
    p: "From initial architecture to production deployment, every stage is built for reliability.",
    steps: [
      {
        n: "01",
        h4: "Discover",
        p: "Product vision, hardware architecture, connectivity strategy, manufacturing goals.",
      },
      {
        n: "02",
        h4: "Engineer",
        p: "Firmware, connectivity, cloud infrastructure, and application architecture.",
      },
      {
        n: "03",
        h4: "Build",
        p: "Devices, dashboards, cloud services, and APIs developed together.",
      },
      {
        n: "04",
        h4: "Validate",
        p: "Real hardware testing, cloud validation, security testing, OTA verification.",
      },
      {
        n: "05",
        h4: "Launch",
        p: "Production deployment, monitoring, documentation, and ongoing engineering support.",
      },
    ],
    quote: {
      text: "Their process was structured and transparent. They moved from architecture to working hardware faster than any partner we'd worked with before.",
      cite: "CTO",
    },
  },

  industries: {
    tag: "Industries we serve",
    h2: "Where connected products create value.",
    p: "IoT delivers the greatest impact where real-time data, remote control, and continuous operation matter most.",
    items: [
      { label: "Smart Buildings", lead: true },
      { label: "Industrial Automation", lead: true },
      { label: "Energy & Utilities" },
      { label: "Consumer IoT" },
      { label: "Healthcare" },
      { label: "Agriculture" },
      { label: "Logistics & Asset Tracking" },
      { label: "Smart Cities" },
      { label: "Retail Technology" },
    ],
  },

  faq: {
    tag: "Before you call",
    h2: "The questions we get most.",
    items: [
      {
        q: "Can you build an IoT product from scratch?",
        a: "Yes. We can take your idea from concept to production. Our team handles product architecture, hardware selection, PCB design support, embedded firmware, cloud infrastructure, mobile or web applications, device provisioning, testing, and deployment. Whether you're building a proof of concept or a production-ready connected product, we can support the entire development lifecycle.",
      },
      {
        q: "Can you work with our existing hardware?",
        a: "Absolutely. Many clients already have custom hardware or a prototype when they engage us. We can develop firmware for your existing boards, optimize performance, add new features, integrate cloud connectivity, or modernize legacy firmware without requiring a complete hardware redesign.",
      },
      {
        q: "Do you develop both firmware and cloud software?",
        a: "Yes. We build the complete IoT software stack. This includes embedded firmware running on the device, cloud backends, APIs, databases, dashboards, mobile applications, and system integrations. Our goal is to ensure every part of the connected ecosystem works together reliably.",
      },
      {
        q: "Which wireless technologies do you support?",
        a: "We work with a wide range of communication technologies based on your product requirements. These include Wi-Fi, Bluetooth Low Energy (BLE), Zigbee, LoRaWAN, NB-IoT, LTE-M, Cellular (4G/5G), Ethernet, MQTT, Modbus, CAN Bus, and other industry-standard communication protocols.",
      },
      {
        q: "Can you integrate AI into connected products?",
        a: "Yes. We build AI-powered IoT solutions that go beyond simple data collection. Depending on your use case, we can integrate predictive maintenance, anomaly detection, computer vision, edge AI, intelligent automation, demand forecasting, and AI-powered analytics to help devices make smarter decisions.",
      },
      {
        q: "Who owns the IP?",
        a: "You do. Once the project is completed and contractual obligations are met, all source code, documentation, firmware, cloud software, and intellectual property developed specifically for your project belong to your organization. We never reuse your proprietary code or product logic for other clients.",
      },
    ],
  },

  cta: {
    tag: "✦ Start here",
    h2: "Let's build your next connected product.",
    p: "Whether you're building a new IoT device, modernizing an existing product, or scaling an entire connected platform, we'll help you define the right architecture before development begins.",
    ctas: [
      { label: "Book a scoping call →", cal: true, calLink: "vikas-singh-bril/30-min-product-eng-review", primary: true },
      { label: "See the work first", href: "#work", primary: false },
    ],
    ticks: ["30-minute discovery call", "100% IP ownership", "No obligation"],
  },
};

const IoTProductEngineering = () => <ServicePageTemplate data={DATA} />;

export default IoTProductEngineering;
