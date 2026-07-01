import ServicePageTemplate from "./ServicePageTemplate";

const DATA = {
  hero: {
    tag: "Edge AI · TinyML · Intelligent Embedded Systems",
    h1: [
      { text: "Edge AI " },
      { text: "Development Services", accent: true },
    ],
    lede: "Deploy machine learning directly on embedded devices, industrial equipment, and connected products. We engineer Edge AI systems that deliver real-time inference, reduce cloud dependency, and make intelligent decisions exactly where the data is created.",
    ctas: [
      { label: "Book a scoping call →", cal: true, calLink: "vikas-singh-bril/30-min-product-eng-review", primary: true },
      { label: "See the work", href: "#work", primary: false },
    ],
    micro: [
      { star: true, text: "★★★★★ 5.0 on Clutch" },
      { sep: true },
      { text: "Running on production devices" },
      { sep: true },
      { text: "You own the models & code" },
    ],
    stats: [
      { v: "20+", l: "Edge AI Deployments" },
      { v: "99%", l: "Client Satisfaction" },
      { v: "18+", l: "Countries Served" },
      { v: "24/7", l: "Real-Time Edge Inference" },
    ],
  },

  proof: {
    tag: "Core technology stack",
    items: [
      { bold: "TensorFlow Lite" },
      { bold: "TF Lite Micro" },
      { bold: "Edge Impulse" },
      { bold: "STM32" },
      { bold: "ESP32-S3" },
      { bold: "NVIDIA Jetson" },
      { bold: "OpenCV" },
      { bold: "ONNX Runtime" },
      { bold: "Model Quantization" },
      { bold: "TinyML" },
      { bold: "MQTT" },
      { bold: "AWS IoT Greengrass" },
    ],
    note: "Technologies deployed on production Edge AI devices — not a checklist.",
  },

  capabilities: {
    tag: "What we build",
    h2: "Everything required to deploy AI beyond the cloud.",
    p: "Most AI projects stop at a trained model. Production Edge AI starts where model training ends — optimized, integrated, and running on real hardware.",
    list: [
      {
        n: "01",
        icon: "Brain",
        h3: "On-device machine learning deployment",
        p: "Optimize trained models for embedded processors using quantization, pruning, and compression. Designed to run on devices with limited memory and compute.",
        chips: ["TensorFlow Lite Micro", "ONNX Runtime", "Model optimization"],
      },
      {
        n: "02",
        icon: "Zap",
        h3: "Computer vision at the edge",
        p: "Deploy vision models directly on embedded devices for object detection, image classification, quality inspection, and visual monitoring — no cloud required.",
        chips: ["OpenCV", "Object Detection", "Embedded Vision"],
      },
      {
        n: "03",
        icon: "Layers",
        h3: "Intelligent sensor fusion",
        p: "Combine vibration, temperature, pressure, audio, and motion inputs into edge applications capable of detecting anomalies and making autonomous decisions.",
        chips: ["Sensor Fusion", "Predictive Analytics", "Edge Intelligence"],
      },
      {
        n: "04",
        icon: "Cpu",
        h3: "AI for resource-constrained hardware",
        p: "Build AI systems for microcontrollers and edge processors where memory, power consumption, and inference latency matter as much as model accuracy.",
        chips: ["TinyML", "ARM Cortex-M", "STM32 · ESP32-S3"],
      },
      {
        n: "05",
        icon: "Cloud",
        h3: "Edge-to-cloud AI integration",
        p: "Devices perform local inference while synchronizing events, telemetry, and model updates with cloud platforms for fleet-wide intelligence.",
        chips: ["MQTT", "AWS IoT Greengrass", "Secure Synchronization"],
      },
    ],
  },

  why: {
    tag: "Why Brilworks",
    h2: "Why engineering teams choose us.",
    p: "Building an AI model is one challenge. Running that model reliably on production hardware is another. We combine embedded engineering and machine learning expertise to deliver Edge AI systems that work outside the lab.",
    cards: [
      {
        h4: "AI designed for production devices",
        p: "We build models that run efficiently on real hardware with limited memory, processing power, and battery life — not just high-performance cloud servers.",
      },
      {
        h4: "Embedded and AI expertise together",
        p: "Our engineers understand firmware, hardware interfaces, embedded Linux, and machine learning — solving problems across the entire Edge AI stack.",
      },
      {
        h4: "Optimized for performance and reliability",
        p: "Inference speed, memory usage, and power consumption are optimized alongside model accuracy to ensure reliable operation in production environments.",
      },
      {
        h4: "Flexible engineering engagements",
        p: "Whether you're exploring a proof of concept or scaling an existing Edge AI product, our engineers integrate with your team or deliver complete solutions independently.",
      },
    ],
  },

  work: {
    tag: "Selected work",
    h2: "Intelligent devices making decisions in real time.",
    p: "These systems perform inference directly on embedded hardware where milliseconds matter. Built for production — not demonstrations.",
    builds: [
      {
        href: "#case-occupancy",
        dom: "Smart Buildings · Europe",
        h3: "AI-powered occupancy detection platform",
        desc: "Edge AI solution combining environmental sensor data with TinyML models to determine room occupancy locally, dynamically optimizing HVAC without sending raw sensor data to the cloud.",
        spec: [
          ["MCU", "ESP32-S3"],
          ["Framework", "TF Lite Micro"],
          ["Comms", "MQTT · AWS IoT Core"],
          ["Sensors", "Environmental"],
        ],
        stk: ["TinyML", "on-device inference", "occupancy detection"],
      },
      {
        href: "#case-predictive",
        dom: "Industrial Manufacturing",
        h3: "Predictive maintenance edge gateway",
        desc: "Intelligent industrial gateway that analyzes vibration and temperature data on-device to detect abnormal machine behavior before transmitting summarized events to the cloud.",
        spec: [
          ["Hardware", "NVIDIA Jetson"],
          ["Vision", "OpenCV"],
          ["Comms", "MQTT · AWS IoT Greengrass"],
          ["Sensors", "Industrial"],
        ],
        stk: ["Edge AI", "predictive maintenance", "sensor fusion"],
      },
    ],
    quotes: [
      {
        stars: 5,
        text: "Their team successfully translated our cloud-based AI model into an optimized Edge AI solution that runs reliably on production hardware. They balanced accuracy with real-world hardware constraints exceptionally well.",
        cite: "Director of AI Engineering",
      },
      {
        stars: 5,
        text: "What impressed us most was their understanding of both embedded systems and machine learning. They delivered an efficient deployment that met our latency and power requirements without compromising model performance.",
        cite: "Head of Product Development",
      },
    ],
  },

  engage: {
    tag: "How we work",
    h2: "Our engagement models.",
    p: "Flexible engagement models for companies building intelligent connected products, whether you need dedicated Edge AI specialists or an end-to-end engineering partner.",
    models: [
      {
        icon: "Users",
        h3: "Dedicated Edge AI Team",
        md: "A cross-functional team of embedded engineers, machine learning specialists, and software developers focused exclusively on your product. Best for long-term intelligent product development.",
        bill: "dedicated team, monthly.",
      },
      {
        icon: "UserPlus",
        h3: "Team Extension",
        md: "Integrate experienced Edge AI engineers into your existing embedded or AI team to accelerate delivery without disrupting your development process. Best for scaling existing engineering teams.",
        bill: "per engineer, monthly.",
      },
      {
        icon: "Package",
        h3: "Project-Based Model",
        md: "Fixed-scope engagement covering model optimization, embedded deployment, hardware integration, and production validation. Best for well-defined Edge AI initiatives.",
        bill: "fixed-scope, quoted per project.",
      },
    ],
    quote: {
      text: "Their engineers integrated quickly, understood both our embedded platform and machine learning pipeline, and delivered production-ready software without requiring constant oversight.",
      cite: "Engineering Manager",
    },
  },

  process: {
    tag: "How it runs",
    h2: "How we deliver production-ready Edge AI.",
    p: "Moving AI from the cloud to embedded hardware requires more than exporting a model. We optimize every stage for deployment.",
    steps: [
      {
        n: "01",
        h4: "Discover",
        p: "Understand the product, hardware, latency targets, memory constraints, and deployment environment.",
      },
      {
        n: "02",
        h4: "Optimize",
        p: "Compress, quantize, and adapt machine learning models for embedded processors.",
      },
      {
        n: "03",
        h4: "Integrate",
        p: "Deploy models alongside firmware, device drivers, sensors, and communication stacks.",
      },
      {
        n: "04",
        h4: "Validate",
        p: "Benchmark inference speed, memory usage, accuracy, power, and long-term reliability on physical hardware.",
      },
      {
        n: "05",
        h4: "Deploy",
        p: "Deliver production-ready software with complete documentation, source code, and deployment guidance.",
      },
    ],
    quote: {
      text: "They quickly understood our product architecture and transformed a research prototype into an efficient production deployment running reliably on embedded hardware.",
      cite: "Engineering Manager",
    },
  },

  industries: {
    tag: "Industries we serve",
    h2: "Where intelligent edge devices create value.",
    p: "Edge AI delivers the greatest value where low latency, privacy, and offline operation matter most.",
    items: [
      { label: "Industrial Automation", lead: true },
      { label: "Smart Buildings", lead: true },
      { label: "Manufacturing" },
      { label: "Healthcare Devices" },
      { label: "Automotive & Mobility" },
      { label: "Agriculture Technology" },
      { label: "Robotics" },
      { label: "Retail Technology" },
      { label: "Energy & Utilities" },
    ],
  },

  faq: {
    tag: "Before you call",
    h2: "The questions we get most.",
    items: [
      {
        q: "Can you deploy our existing AI model onto embedded hardware?",
        a: "Yes. We optimize trained models for embedded processors, reduce memory requirements, and integrate them into production firmware. Send us your model architecture and target hardware and we'll assess what's needed on the scoping call.",
      },
      {
        q: "Which Edge AI platforms do you support?",
        a: "We work across STM32, ESP32-S3, NVIDIA Jetson, Raspberry Pi CM4, and ARM Cortex-M platforms using TensorFlow Lite, TensorFlow Lite Micro, ONNX Runtime, and Edge Impulse. If your platform isn't on that list, tell us on the call — most of the optimization work transfers regardless of silicon.",
      },
      {
        q: "Who owns the trained models and deployment code?",
        a: "You do. All models, source code, deployment artifacts, and documentation are transferred to you at project completion. No licensing fees, no dependency on us to run your own inference.",
      },
    ],
  },

  cta: {
    tag: "Start here",
    h2: "Tell us what you're building.",
    p: "Send us the problem — you'll get back a practical plan, not a sales pitch. Start a project, or bring our certified engineers onto your team.",
    ctas: [
      { label: "Book a scoping call →", cal: true, calLink: "vikas-singh-bril/30-min-product-eng-review", primary: true },
      { label: "See the work first", href: "#work", primary: false },
    ],
    ticks: ["30-minute discovery call", "100% IP ownership", "No obligation"],
  },
};

const EdgeAIDevelopment = () => <ServicePageTemplate data={DATA} />;

export default EdgeAIDevelopment;
