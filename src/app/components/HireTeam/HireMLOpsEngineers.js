import ServicePageTemplate from "../ServicePage/ServicePageTemplate";

const DATA = {
  hero: {
    tag: "MLOps · ML Platform Engineering · Model Deployment · Monitoring",
    h1: [{ text: "Hire " }, { text: "MLOps Engineers", accent: true }],
    lede: "MLOps engineers who operationalise machine learning — building the pipelines, platforms, and infrastructure that take models from notebook to production and keep them reliable after launch.",
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
      { text: "AWS & Databricks Partner" },
      { sep: true },
      { text: "ML platforms in production" },
    ],
    stats: [
      { v: "60+", l: "MLOps & ML Platform Projects" },
      { v: "18+", l: "Countries Served" },
      { v: "99%", l: "Client Satisfaction" },
      { v: "8×", l: "Faster Model Deployment vs Manual Handoff Process" },
    ],
  },

  proof: {
    tag: "Core MLOps stack",
    items: [
      { bold: "MLflow" },
      { bold: "Kubeflow" },
      { bold: "SageMaker Pipelines" },
      { bold: "Databricks Workflows" },
      { bold: "Airflow", label: "ML orchestration" },
      { bold: "Kubernetes" },
      { bold: "Docker" },
      { bold: "Triton", label: "inference server" },
      { bold: "BentoML" },
      { bold: "Feature Store" },
      { bold: "Evidently", label: "drift detection" },
      { bold: "Terraform", label: "IaC" },
      { bold: "GitHub Actions", label: "CI/CD for ML" },
      { bold: "Prometheus / Grafana" },
    ],
    note: "Technologies deployed on production ML platforms — not a checklist.",
  },

  capabilities: {
    tag: "What we build",
    h2: "Our MLOps engineering services.",
    p: "The infrastructure, pipelines, and platforms that make ML reliable in production — not just reproducible in a notebook.",
    list: [
      {
        n: "01",
        icon: "RefreshCw",
        h3: "Training pipelines & CI/CD for ML",
        p: "Automate model training, evaluation, and promotion with reproducible, version-controlled pipelines. CI/CD workflows that run on code change, data drift trigger, or schedule — without manual handoffs from data science to engineering.",
        chips: [
          "CI/CD for ML",
          "Training automation",
          "Model versioning",
          "GitHub Actions",
        ],
      },
      {
        n: "02",
        icon: "Cloud",
        h3: "Model serving & inference infrastructure",
        p: "Deploy models to production with optimised serving infrastructure. Batch scoring pipelines, real-time REST endpoints, and GPU inference setups using Triton, BentoML, or managed endpoints on AWS SageMaker, Databricks, or GCP Vertex.",
        chips: [
          "Triton",
          "BentoML",
          "SageMaker Endpoints",
          "Batch scoring",
          "GPU serving",
        ],
      },
      {
        n: "03",
        icon: "Layers",
        h3: "Feature store & feature pipeline engineering",
        p: "Build a feature store that separates feature computation from model training — so features are consistent between training and serving, shareable across models, and not recomputed from scratch for every experiment.",
        chips: [
          "Feast",
          "Databricks Feature Store",
          "Vertex AI Feature Store",
          "Point-in-time correctness",
        ],
      },
      {
        n: "04",
        icon: "ShieldCheck",
        h3: "Model monitoring & drift detection",
        p: "Instrument models in production with data drift detection, prediction distribution monitoring, and performance degradation alerting — so you know when a model needs retraining before stakeholders do.",
        chips: [
          "Evidently",
          "WhyLabs",
          "Data drift",
          "Concept drift",
          "SLA alerting",
        ],
      },
      {
        n: "05",
        icon: "Brain",
        h3: "ML experiment tracking & model registry",
        p: "Set up MLflow or equivalent to give data scientists reproducible experiments, tracked metrics, versioned artifacts, and a model registry with promotion workflows — so no model ever reaches production without a known lineage.",
        chips: [
          "MLflow",
          "Model registry",
          "Experiment tracking",
          "Artifact management",
        ],
      },
    ],
  },

  why: {
    tag: "Why Brilworks",
    h2: "Why ML teams choose our MLOps engineers.",
    p: "Data science teams build models. MLOps engineers make them work in production — and stay working. That's a different skillset, and most teams don't have it in-house until after the first production outage.",
    cards: [
      {
        h4: "Platform engineers who understand ML",
        p: "We're not DevOps engineers who picked up MLflow. Our MLOps engineers have ML backgrounds and understand the full model lifecycle — why training/serving skew happens, what triggers drift, and how to design pipelines that avoid it.",
      },
      {
        h4: "Serving infrastructure that scales",
        p: "We design serving infrastructure for real load — autoscaling, batching, caching, and GPU utilisation management. The first production spike shouldn't be the thing that breaks your model endpoint.",
      },
      {
        h4: "Monitoring before the model ships",
        p: "Drift detection and performance monitoring are designed alongside the serving infrastructure — not bolted on after the first complaint. You know when models degrade before users tell you.",
      },
      {
        h4: "Stack-agnostic across cloud providers",
        p: "AWS SageMaker, Databricks, GCP Vertex AI, or self-managed Kubernetes. We recommend based on your existing stack and team familiarity, not on what we prefer to build with.",
      },
    ],
  },

  work: {
    tag: "Selected work",
    h2: "ML platforms and pipelines built for production.",
    p: "MLOps systems that keep models reliable after the data science team moves on to the next experiment.",
    builds: [
      {
        href: "#case-retail",
        dom: "Retail · Recommendation system",
        h3: "Weekly retraining pipeline for product recommendation model",
        desc: "Built an automated retraining and deployment pipeline for a collaborative filtering recommendation model. Feature pipeline on Databricks, MLflow experiment tracking and model registry, and a SageMaker serving endpoint with A/B traffic splitting for safe rollouts. Model deployment time dropped from 3 days to 2 hours.",
        spec: [
          ["Platform", "Databricks · SageMaker"],
          ["Tracking", "MLflow"],
          ["Retraining", "Weekly automated trigger"],
          ["Deploy time", "3 days → 2 hours"],
        ],
        stk: [
          "Feature Store",
          "A/B traffic splitting",
          "Evidently drift monitoring",
          "CI/CD for ML",
        ],
      },
      {
        href: "#case-fintech",
        dom: "Fintech · Credit risk",
        h3: "Real-time serving infrastructure for credit scoring model",
        desc: "Migrated a credit scoring model from batch nightly scoring to a sub-200ms real-time endpoint serving 5,000 requests per minute. Triton inference server on Kubernetes with feature serving from a Redis feature store and Evidently-based drift alerting.",
        spec: [
          ["Serving", "Triton on Kubernetes"],
          ["Features", "Redis feature store"],
          ["Latency", "< 200ms p99"],
          ["Throughput", "5k req/min peak"],
        ],
        stk: [
          "Kubernetes autoscaling",
          "drift alerting",
          "shadow mode testing",
          "model canary rollout",
        ],
      },
    ],
    quotes: [
      {
        stars: 5,
        text: "They turned our model deployment process from a 3-day manual handoff into a 2-hour automated pipeline. Our data scientists can now deploy their own models without a ticket to engineering.",
        cite: "Head of Engineering, Retail",
      },
      {
        stars: 5,
        text: "The monitoring setup they built caught a data pipeline failure before it impacted credit decisions. That's exactly the kind of production safety net we didn't have before.",
        cite: "VP Risk, Fintech",
      },
    ],
  },

  engage: {
    tag: "How we work",
    h2: "Our engagement models.",
    p: "Whether you need a dedicated MLOps function, embedded platform engineers, or a scoped ML platform build.",
    models: [
      {
        icon: "Users",
        h3: "Dedicated MLOps Team",
        md: "A team of MLOps and ML platform engineers working exclusively on your model infrastructure. Best for companies with active data science teams who need a production ML platform to support multiple models and experiments.",
        bill: "dedicated team, monthly.",
      },
      {
        icon: "UserPlus",
        h3: "Team Extension",
        md: "Embed MLOps engineers into your existing ML or data engineering team. They join sprints from day one, ramp on your stack quickly, and own the platform work while data scientists focus on models. Best for scaling without hiring.",
        bill: "per engineer, monthly.",
      },
      {
        icon: "Package",
        h3: "Project-Based Build",
        md: "Fixed-scope ML platform build — training pipelines, serving infrastructure, feature store, or monitoring setup. We own the delivery and hand over documented, production-ready infrastructure. Best for defined MLOps initiatives.",
        bill: "fixed-scope, quoted per project.",
      },
    ],
    quote: {
      text: "Their MLOps engineers understood ML deeply enough to ask the right questions about our training setup. The feature store design they proposed solved a training/serving skew problem we'd been fighting for months.",
      cite: "Lead ML Engineer",
    },
  },

  process: {
    tag: "How it runs",
    h2: "How we deliver MLOps projects.",
    steps: [
      {
        n: "01",
        h4: "Assess",
        p: "Audit model lifecycle, current deployment process, infrastructure, and pain points in the path from experiment to production.",
      },
      {
        n: "02",
        h4: "Design",
        p: "Agree training pipeline design, feature store architecture, serving setup, and monitoring strategy before build begins.",
      },
      {
        n: "03",
        h4: "Build",
        p: "Pipeline implementation, serving infrastructure, feature store setup, experiment tracking, and model registry configuration.",
      },
      {
        n: "04",
        h4: "Validate",
        p: "Load testing for serving endpoints, drift detection calibration, pipeline failure mode testing, and canary rollout verification.",
      },
      {
        n: "05",
        h4: "Hand off",
        p: "Runbooks, monitoring dashboards, retraining trigger documentation, and knowledge transfer. Your team owns the platform.",
      },
    ],
    quote: {
      text: "The platform they built gave our data scientists a self-service deployment path. For the first time, a model can go from 'approved in review' to 'serving traffic' without an ops ticket.",
      cite: "Director of ML Platform",
    },
  },

  industries: {
    tag: "Industries we serve",
    h2: "Where we've built ML platforms.",
    items: [
      { label: "Fintech & Financial Services", lead: true },
      { label: "eCommerce & Retail", lead: true },
      { label: "Healthtech & Life Sciences" },
      { label: "SaaS & B2B Products" },
      { label: "Logistics & Supply Chain" },
      { label: "Media & Content" },
      { label: "Industrial & Manufacturing" },
    ],
  },

  faq: {
    tag: "Before you call",
    h2: "The questions we get most.",
    items: [
      {
        q: "What's the difference between an ML engineer and an MLOps engineer?",
        a: "ML engineers build and train models. MLOps engineers build the infrastructure that makes those models production-ready — training pipelines, serving endpoints, feature stores, drift monitoring, and CI/CD for ML. In practice, the boundary overlaps. Our MLOps engineers have ML backgrounds and can contribute to both sides, but their primary focus is the platform and operational reliability.",
      },
      {
        q: "Which ML platforms do you work with?",
        a: "We work across AWS SageMaker, Databricks, GCP Vertex AI, Azure ML, and self-managed Kubernetes setups. For experiment tracking and model registry we use MLflow. For serving we use Triton, BentoML, and managed endpoints depending on your infrastructure. We recommend based on your existing stack, not our preferences.",
      },
      {
        q: "Can you help us build a feature store?",
        a: "Yes. Feature store engineering is a core part of our MLOps offering. We implement Feast, Databricks Feature Store, or Vertex AI Feature Store depending on your stack — with proper point-in-time correctness so training and serving features are consistent.",
      },
      {
        q: "How do you set up model monitoring?",
        a: "We instrument model serving endpoints with data drift detection, prediction distribution monitoring, and latency tracking using Evidently, WhyLabs, or custom monitoring pipelines. Alerts fire before problems compound. We also design retraining triggers tied to drift thresholds so models don't silently degrade.",
      },
      {
        q: "Who owns the ML platform infrastructure at the end?",
        a: "You do. All pipeline code, Terraform configurations, Kubernetes manifests, MLflow setup, monitoring dashboards, and runbooks transfer to your team at handoff. Your ML engineers and data scientists can operate and extend everything we built.",
      },
    ],
  },

  cta: {
    tag: "✦ Start here",
    h2: "Let's operationalise your ML.",
    p: "Whether you're struggling to get models into production, dealing with serving infrastructure that can't scale, or monitoring drift after the fact — we'll help you design the right MLOps architecture before writing a line of infrastructure code.",
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
      "AWS & Databricks Partner",
      "No obligation",
    ],
  },
};

const HireMLOpsEngineers = () => <ServicePageTemplate data={DATA} />;

export default HireMLOpsEngineers;
