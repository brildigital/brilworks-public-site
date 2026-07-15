import ServicePageTemplate from "../ServicePage/ServicePageTemplate";

const DATA = {
  hero: {
    tag: "ML Engineering · GenAI · LLM Applications · AI Agents",
    h1: [{ text: "Hire " }, { text: "ML / AI Engineers", accent: true }],
    lede: "Senior ML and AI engineers who build production models, GenAI applications, and agentic systems — not demos. From feature engineering and model training to deployment, monitoring, and LLM-powered products.",
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
      { text: "AWS GenAI Competency" },
      { sep: true },
      { text: "Models running in production" },
    ],
    stats: [
      { v: "80+", l: "ML & AI Projects Delivered" },
      { v: "18+", l: "Countries Served" },
      { v: "99%", l: "Client Satisfaction" },
      { v: "4×", l: "Average Inference Cost Reduction Post-Optimisation" },
    ],
  },

  proof: {
    tag: "Core ML / AI stack",
    items: [
      { bold: "PyTorch" },
      { bold: "TensorFlow" },
      { bold: "scikit-learn" },
      { bold: "LangChain" },
      { bold: "LlamaIndex" },
      { bold: "OpenAI API" },
      { bold: "Anthropic Claude" },
      { bold: "AWS Bedrock" },
      { bold: "MLflow" },
      { bold: "Feature Store" },
      { bold: "RAG", label: "retrieval-augmented generation" },
      { bold: "RLHF", label: "fine-tuning" },
      { bold: "Kubernetes", label: "model serving" },
      { bold: "Triton", label: "inference server" },
    ],
    note: "Technologies deployed on production ML and AI systems — not a checklist.",
  },

  capabilities: {
    tag: "What we build",
    h2: "Our ML / AI engineering services.",
    p: "From classical ML pipelines to LLM-powered products and autonomous AI agents — designed for production from the first sprint.",
    list: [
      {
        n: "01",
        icon: "Brain",
        h3: "ML model development & training",
        p: "End-to-end model development — feature engineering, training pipelines, hyperparameter tuning, and evaluation frameworks for classification, regression, recommendation, and time-series forecasting problems.",
        chips: [
          "PyTorch",
          "scikit-learn",
          "Feature engineering",
          "Model evaluation",
          "AutoML",
        ],
      },
      {
        n: "02",
        icon: "Layers",
        h3: "GenAI applications & LLM integration",
        p: "Build LLM-powered products using OpenAI, Anthropic, or open-source models. RAG pipelines, prompt engineering, structured output, multi-turn conversation, and tool-use patterns for real product use cases.",
        chips: [
          "LangChain",
          "LlamaIndex",
          "RAG",
          "Prompt engineering",
          "OpenAI",
          "Claude",
        ],
      },
      {
        n: "03",
        icon: "Zap",
        h3: "AI agents & agentic systems",
        p: "Design and build multi-step AI agents with tool use, memory, planning, and decision loops. Agentic workflows that automate knowledge work reliably enough to put in front of real users.",
        chips: [
          "Agentic workflows",
          "Tool use",
          "Memory",
          "Multi-agent systems",
        ],
      },
      {
        n: "04",
        icon: "Cloud",
        h3: "Model deployment & serving",
        p: "Deploy models to production using optimised serving infrastructure — Triton, TorchServe, or managed endpoints on AWS, GCP, or Azure. Latency optimisation, batching, quantisation, and cost-per-inference management.",
        chips: [
          "Triton",
          "TorchServe",
          "AWS Bedrock",
          "Quantisation",
          "A/B testing",
        ],
      },
      {
        n: "05",
        icon: "ShieldCheck",
        h3: "ML platform & MLOps foundation",
        p: "Build the experiment tracking, model registry, feature store, and deployment pipeline your ML team needs to move from notebook to production faster. Built on MLflow, Databricks, or SageMaker depending on your stack.",
        chips: ["MLflow", "Feature Store", "Model registry", "CI/CD for ML"],
      },
    ],
  },

  why: {
    tag: "Why Brilworks",
    h2: "Why product teams choose our ML / AI engineers.",
    p: "Most AI demos work once in a notebook. Production AI is a different problem. We engineer systems that behave reliably under real user load and real data drift.",
    cards: [
      {
        h4: "Production AI, not demos",
        p: "We build systems that handle edge cases, degrade gracefully, monitor for drift, and can be retrained. Demos work once. Production systems work every day.",
      },
      {
        h4: "GenAI and classical ML in the same team",
        p: "We don't force LLMs into problems that don't need them. We pick the right approach — classical ML, fine-tuned models, or LLM-based systems — based on your use case and data.",
      },
      {
        h4: "Data engineering depth underneath",
        p: "ML is only as good as the features feeding it. Our ML engineers work alongside our data engineering team so the feature pipeline, model training, and serving infrastructure are designed together.",
      },
      {
        h4: "Cost-aware from the start",
        p: "Inference costs and LLM token spend can surprise teams that don't plan for them. We design with cost-per-prediction in mind from the architecture phase.",
      },
    ],
  },

  work: {
    tag: "Selected work",
    h2: "ML & AI systems running in production.",
    p: "Real models and AI products — not conference demos or internal prototypes.",
    builds: [
      {
        href: "#case-rag",
        dom: "B2B SaaS · Knowledge assistant",
        h3: "Enterprise RAG pipeline for internal knowledge search",
        desc: "Built a production RAG system over 40,000 internal documents — product docs, support tickets, and runbooks. Chunking strategy, embedding pipeline, retrieval tuning, and guardrails for hallucination reduction. Answer accuracy improved from 43% to 91% in blind evaluation vs keyword search baseline.",
        spec: [
          ["LLM", "Claude 3.5 Sonnet"],
          ["Framework", "LangChain · LlamaIndex"],
          ["Vector DB", "Pinecone"],
          ["Accuracy", "91% on internal eval set"],
        ],
        stk: ["RAG", "hybrid retrieval", "re-ranking", "citation grounding"],
      },
      {
        href: "#case-fraud",
        dom: "Fintech · Risk scoring",
        h3: "Real-time fraud risk model with streaming feature pipeline",
        desc: "Trained a gradient boosting model on 3 years of transaction history with 180 engineered features. Deployed to a sub-100ms serving endpoint backed by a Kafka streaming feature pipeline. False positive rate dropped 38% vs the previous rule-based system.",
        spec: [
          ["Model", "XGBoost · SHAP"],
          ["Features", "180 engineered features"],
          ["Latency", "< 100ms p99"],
          ["FPR reduction", "38%"],
        ],
        stk: ["MLflow", "Feature Store", "Kafka", "Triton serving"],
      },
    ],
    quotes: [
      {
        stars: 5,
        text: "The RAG system they built handles queries our previous keyword search couldn't touch. The accuracy improvement was measured, not just claimed.",
        cite: "VP Product, B2B SaaS",
      },
      {
        stars: 5,
        text: "They designed the feature pipeline and the model together. That end-to-end ownership meant no gaps between what the model expected and what production data looked like.",
        cite: "Head of Risk, Fintech",
      },
    ],
  },

  engage: {
    tag: "How we work",
    h2: "Our engagement models.",
    p: "Flexible models for ML and AI projects at any stage — from an initial proof-of-concept to a production AI platform.",
    models: [
      {
        icon: "Users",
        h3: "Dedicated ML / AI Team",
        md: "A cross-functional team of ML engineers, AI engineers, and data engineers working exclusively on your AI product or platform. Best for companies building AI as a core product capability.",
        bill: "dedicated team, monthly.",
      },
      {
        icon: "UserPlus",
        h3: "Team Extension",
        md: "Embed ML or AI engineers into your existing product or data team. They contribute to sprints from day one and ramp on your codebase, data, and product context quickly. Best for scaling specialist capacity.",
        bill: "per engineer, monthly.",
      },
      {
        icon: "Package",
        h3: "Project-Based Build",
        md: "Fixed-scope model development, GenAI integration, or agentic system build. We own the delivery end to end and hand over documented, production-ready code and models. Best for defined AI initiatives.",
        bill: "fixed-scope, quoted per project.",
      },
    ],
    quote: {
      text: "Their ML engineers understood the product problem, not just the model problem. That made a real difference in what they chose to build and how they evaluated success.",
      cite: "CPO",
    },
  },

  process: {
    tag: "How it runs",
    h2: "How we deliver ML / AI projects.",
    steps: [
      {
        n: "01",
        h4: "Discover",
        p: "Understand the business problem, available data, latency requirements, and success criteria. Decide whether ML, GenAI, or a rules-based system is actually the right fit.",
      },
      {
        n: "02",
        h4: "Baseline",
        p: "Establish a measurable evaluation framework and a simple baseline before investing in complex models.",
      },
      {
        n: "03",
        h4: "Build",
        p: "Feature engineering, model training or LLM integration, evaluation runs, and iterative improvement against the baseline.",
      },
      {
        n: "04",
        h4: "Deploy",
        p: "Production serving infrastructure, monitoring setup, A/B testing framework, and cost measurement.",
      },
      {
        n: "05",
        h4: "Hand off",
        p: "Model documentation, retraining runbooks, monitoring dashboards, and knowledge transfer to your team.",
      },
    ],
    quote: {
      text: "They started by establishing an evaluation framework before touching the model. That rigour is what separated them from the previous team who just iterated until it felt good.",
      cite: "Head of AI, Product Company",
    },
  },

  industries: {
    tag: "Industries we serve",
    h2: "Where we've shipped ML and AI in production.",
    items: [
      { label: "Fintech & Financial Services", lead: true },
      { label: "SaaS & B2B Products", lead: true },
      { label: "Healthtech & Life Sciences" },
      { label: "eCommerce & Retail" },
      { label: "Media & Content" },
      { label: "Logistics & Supply Chain" },
      { label: "Industrial & Manufacturing" },
    ],
  },

  faq: {
    tag: "Before you call",
    h2: "The questions we get most.",
    items: [
      {
        q: "Do you build with LLMs or classical ML?",
        a: "Both — and we'll tell you honestly which fits your use case. Many problems are better served by a well-tuned XGBoost model or a regression than by an LLM. We scope based on the problem, the data, and the latency and cost constraints, not on what's newest.",
      },
      {
        q: "Can you build RAG pipelines and GenAI applications?",
        a: "Yes. GenAI product engineering is a core part of our AI offering. We build RAG pipelines, LLM-powered assistants, structured extraction systems, and agentic workflows using LangChain, LlamaIndex, OpenAI, Anthropic Claude, and AWS Bedrock.",
      },
      {
        q: "How do you evaluate whether an AI system is actually working?",
        a: "We establish a measurable evaluation framework before build starts — not after. For GenAI systems this means human evaluation sets, automated LLM-as-judge scoring, and retrieval metrics like NDCG. For classical ML it means agreed-on business metrics and holdout evaluation. We don't accept 'it feels better' as a success criterion.",
      },
      {
        q: "Can you help with a model that's already in production but underperforming?",
        a: "Yes. We assess the full pipeline — data quality, feature engineering, training setup, serving infrastructure, and monitoring. Underperforming production models usually have a diagnosable root cause: training/serving skew, stale features, label noise, or distribution shift. We find it and fix it.",
      },
      {
        q: "Who owns the models and code at the end?",
        a: "You do. All model weights, training code, inference code, evaluation scripts, and documentation transfer to you at handoff. No lock-in to our infrastructure or tooling.",
      },
    ],
  },

  cta: {
    tag: "✦ Start here",
    h2: "Let's build your AI product.",
    p: "Whether you're building a GenAI feature, training a production ML model, or standing up an agentic system — we'll help you scope the right architecture before writing a line of code.",
    ctas: [
      {
        label: "Book a scoping call →",
        cal: true,
        calLink: "vikas-singh-bril/30-min-product-eng-review",
        primary: true,
      },
      { label: "See how we work first", href: "#capabilities", primary: false },
    ],
    ticks: [
      "30-minute discovery call",
      "AWS GenAI Competency",
      "No obligation",
    ],
  },
};

const HireMLAIEngineers = () => <ServicePageTemplate data={DATA} />;

export default HireMLAIEngineers;
