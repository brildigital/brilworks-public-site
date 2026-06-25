"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  Star,
  Sparkles,
  Shield,
  Cpu,
  Users,
  BadgeCheck,
  TrendingUp,
  RefreshCw,
  Clock,
  LayoutGrid,
  Award,
  CreditCard,
  Heart,
  ShoppingCart,
  Play,
  GraduationCap,
  Truck,
  X,
} from "lucide-react";
import GradientFAQAccordion from "../Common/GradientFAQAccordion";
import Image from "next/image";

const SolutionContactForm = dynamic(() =>
  import("../Solution/SolutionContactForm")
);

// ---------- Style tokens (inline so nothing shared is touched) ----------
const heroBg = {
  background:
    "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(26,92,204,0.18) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 20% 80%, rgba(0,180,216,0.08) 0%, transparent 60%), linear-gradient(160deg, #0d0f1a 0%, #111428 50%, #0a0c1e 100%)",
};
const heroGridOverlay = {
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
  backgroundSize: "60px 60px",
  opacity: 0.06,
};
const darkSectionBg = {
  background:
    "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(26,92,204,0.12) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 20% 80%, rgba(0,180,216,0.06) 0%, transparent 60%), #0d0f1a",
};
const gradientTextStyle = {
  backgroundImage: "linear-gradient(to right, #017eeb, #00ffff)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  color: "transparent",
};
const statValueStyle = {
  backgroundImage: "linear-gradient(to right, #017eeb, #00dbd3)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  color: "transparent",
};

// ---------- Data ----------
const TRUST = [
  { icon: <Shield size={18} color="#017eeb" />, label: "AWS Consulting Partner" },
  { icon: <Cpu size={18} color="#017eeb" />, label: "50+ AI Models Deployed" },
  { icon: <Users size={18} color="#017eeb" />, label: "100+ AI Engineers" },
  { icon: <BadgeCheck size={18} color="#017eeb" />, label: "98% Client Satisfaction" },
];

const HERO_STATS = [
  { value: "50+", label: "AI Models Deployed" },
  { value: "30+", label: "NLP & GenAI Solutions" },
  { value: "20+", label: "Industries Served" },
  { value: "98%", label: "Client Satisfaction" },
];

const BENEFITS = [
  {
    title: "Customized AI Solutions",
    tint: "#e8f0fd",
    body: "We collaborate closely with your team to understand unique challenges and build tailored AI/ML models engineered for your data and objectives.",
    icon: <Shield size={32} color="#017eeb" />,
  },
  {
    title: "Predictive Advantage",
    tint: "#ede9fe",
    body: "Our models analyze historical data to predict risks, trends, and opportunities — positioning you for proactive, data-driven decisions.",
    icon: <TrendingUp size={32} color="#4f46e5" />,
  },
  {
    title: "Scalable & Adaptable",
    tint: "#d1fae5",
    body: "Our AI/ML systems are built to grow — adapting to new data, new use cases, and new infrastructure as your business evolves.",
    icon: <RefreshCw size={32} color="#10b981" />,
  },
  {
    title: "Ethical & Transparent",
    tint: "#ccfbf1",
    body: "We follow strict guidelines on bias testing, data privacy, and model explainability — so you can deploy AI with confidence.",
    icon: <Clock size={32} color="#0d9488" />,
  },
  {
    title: "Dedicated AI Expertise",
    tint: "#cffafe",
    body: "100+ engineers specializing in ML, LLMs, computer vision, and MLOps — with deep experience across 20+ industries.",
    icon: <Users size={32} color="#0891b2" />,
  },
  {
    title: "MLOps & Post-Launch Support",
    tint: "#dbeafe",
    body: "Deployment is just the start. We monitor drift, retrain models, optimize inference costs, and iterate on your AI as your data changes.",
    icon: <LayoutGrid size={32} color="#1e40af" />,
  },
];

const TESTIMONIALS = [
  {
    initials: "DR",
    name: "Daniel Rossi",
    role: "Founder & CEO, Fintech Scale-up",
    quote:
      "Brilworks shipped our fraud-detection model in 8 weeks — 94% precision, 12% higher than our in-house baseline. They productionized the entire pipeline, including monitoring and retraining.",
  },
  {
    initials: "AK",
    name: "Amara Khan",
    role: "CTO, B2B SaaS",
    quote:
      "We needed a GenAI partner who understood RAG, evaluation, and MLOps — not just prompt engineering. Brilworks delivered a knowledge assistant that cut our support handle time by 40% in the first quarter.",
  },
  {
    initials: "HS",
    name: "Henrik Sørensen",
    role: "VP Engineering, Industrial IoT",
    quote:
      "Their computer vision team rebuilt our defect-detection pipeline from scratch. Accuracy jumped from 78% to 96%, and they deployed it on edge devices across 14 of our facilities.",
  },
];

const HONORS = [
  { label: "AWS Consulting Partner", icon: <Shield size={20} color="#017eeb" /> },
  { label: "Clutch Global Award 2025", icon: <Star size={20} color="#017eeb" /> },
  { label: "GoodFirms Top AI Developers", icon: <Award size={20} color="#017eeb" /> },
  { label: "ISO 27001 Certified", icon: <LayoutGrid size={20} color="#017eeb" /> },
  { label: "Google Cloud AI Partner", icon: <BadgeCheck size={20} color="#017eeb" /> },
];

const INDUSTRIES = [
  {
    label: "Fintech",
    href: "/industry/fintech-software-development/",
    icon: <CreditCard size={32} color="#017eeb" />,
  },
  {
    label: "Healthcare",
    href: "/industry/healthcare-software-development/",
    icon: <Heart size={32} color="#ef4444" />,
  },
  {
    label: "Retail & E-commerce",
    href: "/industry/e-commerce-app-development/",
    icon: <ShoppingCart size={32} color="#10b981" />,
  },
  {
    label: "Media & Entertainment",
    href: "/industry/media-entertainment-software-development/",
    icon: <Play size={32} color="#4f46e5" />,
  },
  {
    label: "Education",
    href: "/industry/edtech-software-development/",
    icon: <GraduationCap size={32} color="#0d9488" />,
  },
  {
    label: "Logistics",
    href: "/industry/fleet-management-software-development/",
    icon: <Truck size={32} color="#0891b2" />,
  },
];

const AI_STACK = [
  {
    title: "LLMs & Generative AI",
    tint: "#e8f0fd",
    icon: <Sparkles size={20} color="#017eeb" />,
    tools: ["OpenAI GPT-4o", "Claude 3.5", "Llama 3", "Mistral", "Gemini", "Mixtral"],
  },
  {
    title: "Orchestration & RAG",
    tint: "#ede9fe",
    icon: <LayoutGrid size={20} color="#4f46e5" />,
    tools: ["LangChain", "LlamaIndex", "AutoGen", "CrewAI", "Haystack"],
  },
  {
    title: "ML Frameworks",
    tint: "#d1fae5",
    icon: <Cpu size={20} color="#10b981" />,
    tools: ["PyTorch", "TensorFlow", "scikit-learn", "XGBoost", "Hugging Face"],
  },
  {
    title: "Cloud AI Platforms",
    tint: "#dbeafe",
    icon: <Shield size={20} color="#1e40af" />,
    tools: ["AWS SageMaker", "Google Vertex AI", "Azure ML", "AWS Bedrock"],
  },
  {
    title: "Vector Databases",
    tint: "#ccfbf1",
    icon: <RefreshCw size={20} color="#0d9488" />,
    tools: ["Pinecone", "Weaviate", "ChromaDB", "pgvector", "Qdrant"],
  },
  {
    title: "MLOps & Monitoring",
    tint: "#cffafe",
    icon: <TrendingUp size={20} color="#0891b2" />,
    tools: ["MLflow", "Weights & Biases", "Kubeflow", "Prometheus", "Grafana"],
  },
];

const HOW_WE_WORK = [
  {
    num: "01",
    title: "Discovery call",
    meta: "30 min · free",
    body: "We map your use case, data availability, existing systems, and compliance constraints. At the end of the call, you get a real scope estimate — not a range. About one in four discovery calls ends with us recommending the client doesn't build at all, usually because an off-the-shelf tool already does what they need.",
  },
  {
    num: "02",
    title: "POC",
    meta: "3–4 weeks · from $5k",
    body: "We build a working proof-of-concept against your actual data. Not a mock. Not a slide deck. A system you can run and evaluate. For most clients, this is also the go/no-go decision point before committing to the full build.",
  },
  {
    num: "03",
    title: "Production build",
    meta: "6–8 weeks · $15k–$40k typical",
    body: "Error handling, edge cases, monitoring, load testing, security review. This is what separates a demo from a system. Weekly check-ins — because scope drifts on AI projects more than on traditional software builds, and weekly is the right frequency to catch it.",
  },
  {
    num: "04",
    title: "Handoff",
    meta: "1 week · included",
    body: "Documentation, walkthrough session, and operator-accessible controls. Your team can update prompts and swap data sources without coming back to us.",
  },
  {
    num: "05",
    title: "Support",
    meta: "30-day window · then optional retainer",
    body: "Every project includes 30 days of post-launch support. After that, clients who want ongoing development move to a monthly retainer. Most don't need to — they take the documentation and run it themselves. That outcome is fine with us.",
  },
];

const FAQ = [
  {
    q: "What services does Brilworks offer in AI/ML development?",
    a: "We offer end-to-end AI/ML development: generative AI solutions, AI-based product development, custom machine learning, computer vision, natural language processing (NLP), and AI chatbot development — along with full MLOps and post-deployment support.",
  },
  {
    q: "How long does an AI pilot take to ship?",
    a: "Most AI pilots ship in 6-10 weeks depending on data readiness, model complexity, and integration scope. We share a detailed estimate and pilot roadmap within 48 hours of your first call.",
  },
  {
    q: "Can Brilworks customize AI/ML models for specific business objectives?",
    a: "Yes. We collaborate closely with your team to build custom ML models tailored to your data, objectives, and constraints — whether that's accuracy, latency, explainability, or cost of inference.",
  },
  {
    q: "How does Brilworks ensure ethical AI development practices?",
    a: "We uphold strict guidelines on bias testing, data privacy, fairness auditing, and model explainability. Every model we ship includes documentation on training data, known limitations, and monitoring procedures.",
  },
  {
    q: "Do you handle MLOps and model monitoring after deployment?",
    a: "Yes. We offer ongoing MLOps services including drift detection, automated retraining pipelines, performance monitoring, A/B testing of model versions, and cost optimization of inference infrastructure.",
  },
  {
    q: "What does it cost to build an AI solution with Brilworks?",
    a: "Costs vary by scope and engagement model. Focused AI pilots typically start around $30K, while full product-grade AI systems with MLOps generally range from $75K-$250K+. We provide a transparent quote after our initial consultation.",
  },
  {
    q: "Can your AI/ML solutions be adapted to different industries?",
    a: "Yes. Our AI/ML solutions are designed for various industries including finance, healthcare, media & entertainment, retail & e-commerce, education, logistics, and marketing — with domain-specific model tuning for each.",
  },
];

// ---------- Service Mockups ----------
const MockBar = ({ label }) => (
  <div className="flex items-center gap-1.5 px-3.5 py-2.5" style={{ background: "#f8fafc", borderBottom: "1px solid #eef2f7" }}>
    <span className="inline-block w-2 h-2 rounded-full" style={{ background: "#ef4444" }} />
    <span className="inline-block w-2 h-2 rounded-full" style={{ background: "#facc15" }} />
    <span className="inline-block w-2 h-2 rounded-full" style={{ background: "#10b981" }} />
    <em className="not-italic ml-3 text-[11px] font-semibold" style={{ color: "#94a3b8", letterSpacing: "0.02em" }}>{label}</em>
  </div>
);

const SERVICES = [
  {
    title: "Generative AI Solutions",
    body:
      "Turn unstructured data and creative workflows into scalable automation. We build custom GenAI applications — RAG systems, agentic workflows, content generators — tuned to your domain using state-of-the-art LLMs and vector databases.",
    features: ["Custom LLM fine-tuning & RAG pipelines", "Agentic workflows & tool-using agents", "Prompt engineering & evaluation frameworks"],
    image: "/images/v2/generative_ai_solutions.webp",
    imageBg: "linear-gradient(135deg, #f0f7ff 0%, #e0ecfc 100%)",
    padMockup: true,
    reverse: false,
  },
  {
    title: "AI-Based Product Development",
    body:
      "Embed AI into your product where it moves the metric. We engineer full-stack AI features — inference APIs, model-serving infrastructure, and user-facing UX — that solve complex problems and surface predictive insights in your customers' hands.",
    features: ["AI-first product architecture & APIs", "Model-serving infrastructure & scaling", "Full-stack AI UX integration"],
    image: "/images/v2/ai_product_development.webp",
    imageBg: "linear-gradient(135deg, #f5f3ff 0%, #ddd6fe 100%)",
    padMockup: true,
    reverse: true,
  },
  {
    title: "Machine Learning Expertise",
    body:
      "Move beyond off-the-shelf ML. We collaborate with your team to build custom models tailored to your data and business objectives — predictive analytics, recommendation engines, anomaly detection, forecasting — all engineered for accuracy and explainability.",
    features: ["Custom ML model development & training", "MLOps, monitoring & drift detection", "Predictive analytics & forecasting"],
   image: "/images/v2/machine_learning_expertise.webp",
    imageBg: "linear-gradient(135deg, #ecfdf5 0%, #bbf7d0 100%)",
    padMockup: true,
    reverse: false,
  },
  {
    title: "Computer Vision Solutions",
    body:
      "Give your product eyes. We build computer vision systems that perform object detection, tracking, image classification, and visual quality control — deployed at the edge or in the cloud, optimized for the real-world conditions your data lives in.",
    features: ["Object detection, tracking & OCR", "Image classification & segmentation", "Edge deployment & real-time inference"],
   image: "/images/v2/computer_vision_solutions.webp",
    imageBg: "linear-gradient(135deg, #f0fdfa 0%, #99f6e4 100%)",
    padMockup: true,
    reverse: true,
  },
  {
    title: "Natural Language Processing (NLP)",
    body:
      "Bridge the gap between systems and humans. Our NLP solutions power intelligent search, semantic analysis, sentiment detection, entity extraction, and summarization — turning millions of documents into structured, actionable insight.",
    features: ["Semantic search & entity extraction", "Sentiment analysis & topic modeling", "Document summarization & classification"],
    image: "/images/v2/nlp.webp",
    imageBg: "linear-gradient(135deg, #ecfeff 0%, #a5f3fc 100%)",
    padMockup: false,
    reverse: false,
  },
  {
    title: "AI Chatbot Development",
    body:
      "Deliver 24/7 support without the 24/7 headcount. Our AI chatbots combine large language models with your knowledge base and business systems to provide personalized, context-aware conversations that actually resolve customer issues — not deflect them.",
    features: ["LLM-powered conversational agents", "Knowledge base grounding & RAG", "CRM & helpdesk integrations"],
    image: "/images/v2/chatbot_development.webp",    
    imageBg: "linear-gradient(135deg, #f0fdfa 0%, #99f6e4 100%)",
    padMockup: false,
    reverse: true,
  },
];

// ---------- Page ----------
const AIMLService = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-20 pb-14 md:pt-[120px] md:pb-[80px]">
        <div className="absolute inset-0 -z-10" style={heroBg} />
        <div className="absolute inset-0 pointer-events-none" style={{ ...heroGridOverlay, zIndex: -1 }} />
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-[60px] items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-6 text-[12px] font-semibold uppercase"
                style={{ background: "rgba(26,92,204,0.15)", border: "1px solid rgba(26,92,204,0.3)", color: "#00b4d8", letterSpacing: "0.1em" }}>
                <Sparkles size={14} color="#00b4d8" /> AI / ML Development Services
              </span>
              <h1 className="font-extrabold mb-5 text-white" style={{ fontSize: "clamp(30px, 4vw, 54px)", letterSpacing: "-1.5px", lineHeight: 1.1 }}>
                Ship Production-Ready AI — <span style={gradientTextStyle}>From Model to Measurable ROI</span>
              </h1>
              <p className="mb-4" style={{ fontSize: 17, lineHeight: 1.7, color: "rgba(255,255,255,0.72)", maxWidth: 580 }}>
                We build, deploy, and scale AI/ML systems for founders and data teams. 50+ production models shipped across 20+ industries — pilot in 6 weeks, with measurable ROI from day one.
              </p>
              <p className="mb-8" style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.6)", maxWidth: 580 }}>
                Not sure{" "}
                <Link href="/blog/best-artificial-intelligence-platforms/" style={{ color: "rgba(255,255,255,0.9)", textDecoration: "underline", textUnderlineOffset: 4 }}>
                  which AI platform fits your stack
                </Link>
                ? Compare the leading options before we scope your pilot.
              </p>
              <div className="flex flex-wrap gap-3 mt-8 mb-8">
                <Link href="#contact"
                  className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all"
                  style={{ background: "#017eeb", color: "#fff", border: "1px solid #017eeb", padding: "14px 24px", fontSize: 15 }}>
                  Book My Free AI Strategy Call <ArrowRight size={16} />
                </Link>
                <Link href="#services"
                  className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:bg-white/10"
                  style={{ background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.3)", padding: "14px 24px", fontSize: 15 }}>
                  See What We Build
                </Link>
              </div>
              <div className="flex flex-wrap gap-x-5 gap-y-2.5" style={{ color: "rgba(255,255,255,0.65)", fontSize: 14 }}>
                {["Free 30-min AI strategy call", "Pilot scope in 48 hours", "No commitment"].map((t) => (
                  <span key={t} className="inline-flex items-center gap-2" style={{ color: "rgba(255,255,255,0.65)" }}>
                    <span style={{ color: "#00dbd3" }}><Check size={16} /></span>{t}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-4">
                {HERO_STATS.map((s) => (
                  <div key={s.label} className="rounded-2xl transition-all"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", padding: "24px 20px", backdropFilter: "blur(10px)" }}>
                    <div className="font-extrabold leading-none mb-2" style={{ ...statValueStyle, fontSize: "clamp(28px, 3vw, 42px)", letterSpacing: "-1px" }}>{s.value}</div>
                    <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 13, fontWeight: 500, lineHeight: 1.4 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section aria-label="Trust indicators" style={{ background: "#fafafa", borderBottom: "1px solid #e5e7eb", padding: "28px 0" }}>
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="flex flex-wrap items-center justify-center" style={{ gap: "12px 40px" }}>
            {TRUST.map((t) => (
              <div key={t.label} className="inline-flex items-center gap-2 whitespace-nowrap" style={{ fontSize: 13, fontWeight: 600, color: "#212121" }}>
                {t.icon}{t.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 md:py-24" style={{ background: "#f2f9fe" }}>
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="text-center mx-auto mb-14" style={{ maxWidth: 720 }}>
            <span className="inline-block mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#017eeb" }}>What We Build</span>
            <h2 className="font-extrabold" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0d0f1a" }}>Our AI/ML Development Services</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>End-to-end AI delivery — from identifying the right use case to deploying production models that drive measurable business outcomes.</p>
          </div>

          {SERVICES.map((svc) => (
            <div key={svc.title} className="py-10 lg:py-12">
              <div className="grid items-center gap-8 lg:gap-[60px] grid-cols-1 lg:grid-cols-2">
                <div className={svc.reverse ? "lg:order-2" : ""}>
                  <div className="w-full overflow-hidden rounded-2xl relative">
                   <Image
                      src={svc.image}
                      alt={svc.title}
                      width={200}
                      height={120}
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className={svc.reverse ? "lg:order-1" : ""}>
                  <h3 className="font-bold mb-4" style={{ fontSize: "clamp(22px, 2.4vw, 28px)", letterSpacing: "-0.3px", lineHeight: 1.3, color: "#0d0f1a" }}>{svc.title}</h3>
                  <p className="mb-5" style={{ fontSize: 16, lineHeight: 1.7, color: "#6b7280" }}>{svc.body}</p>
                  <ul className="list-none">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 mb-2.5" style={{ fontSize: 14, color: "#212121" }}>
                        <span style={{ color: "#017eeb", flexShrink: 0, marginTop: 2 }}><Check size={16} /></span>{f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MID CTA */}
      <section className="relative overflow-hidden text-center" style={{ padding: "56px 0", background: "linear-gradient(135deg, #017eeb 0%, #0061c4 100%)" }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(0,219,211,0.2) 0%, transparent 60%)" }} />
        <div className="relative mx-auto px-5 md:px-10" style={{ maxWidth: 700, zIndex: 1 }}>
          <h3 className="font-extrabold mb-3.5" style={{ fontSize: "clamp(24px, 3vw, 36px)", color: "#fff", lineHeight: 1.2, letterSpacing: "-0.5px" }}>Ready to Turn AI Into Revenue?</h3>
          <p className="mb-7" style={{ color: "rgba(255,255,255,0.85)", fontSize: 16, lineHeight: 1.7 }}>Get a free 30-minute AI strategy call with a senior ML engineer. We'll evaluate your data, recommend the right model approach, and map a 6-week pilot — no commitment.</p>
          <Link href="#contact"
            className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:!bg-[#0d0f1a] hover:!text-white hover:!border-[#0d0f1a] mt-5 w-full sm:w-auto"
            style={{ background: "#fff", color: "#017eeb", border: "1px solid #fff", padding: "16px 32px", fontSize: 16 }}>
            Start My AI Pilot
          </Link>
        </div>
      </section>

      {/* AI STACK */}
      <section className="py-16 md:py-24" style={{ background: "#f8f9ff" }}>
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="text-center mx-auto mb-14" style={{ maxWidth: 720 }}>
            <span className="inline-block mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#017eeb" }}>Our AI Stack</span>
            <h2 className="font-extrabold" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0d0f1a" }}>The Tools We've Actually Run in Production</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>We pick the stack based on your compliance requirements, existing infrastructure, and budget — not on what we want to learn this quarter. Below is what we've shipped, not what we've read about.</p>
          </div>
          <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {AI_STACK.map((category) => (
              <div key={category.title} className="rounded-2xl" style={{ background: "#fff", border: "1px solid #e5e7eb", padding: "28px 24px" }}>
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="rounded-[10px] flex items-center justify-center flex-shrink-0" style={{ width: 40, height: 40, background: category.tint }}>
                    {category.icon}
                  </div>
                  <h3 className="font-bold" style={{ fontSize: 16, color: "#0d0f1a" }}>{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.tools.map((tool) => (
                    <span key={tool} className="inline-flex items-center rounded-full px-3 py-1" style={{ background: "#f1f5f9", fontSize: 13, fontWeight: 500, color: "#374151", border: "1px solid #e2e8f0" }}>
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="text-center mx-auto mb-6" style={{ maxWidth: 720 }}>
            <span className="inline-block mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#017eeb" }}>How We Work</span>
            <h2 className="font-extrabold" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0d0f1a" }}>Five Steps From &ldquo;Interested&rdquo; to &ldquo;In Production&rdquo;</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280", maxWidth: 660, margin: "16px auto 0" }}>
              The most common place AI projects fail is scope. Not the model. Not the infrastructure. The scope. We front-load the hard questions so the build doesn&apos;t stall in week six.
            </p>
          </div>
          <div className="mt-14 mx-auto" style={{ maxWidth: 860 }}>
            {HOW_WE_WORK.map((step, i) => (
              <div key={step.num} className="flex gap-6 md:gap-10"
                style={{ paddingBottom: i < HOW_WE_WORK.length - 1 ? 0 : undefined }}>
                <div className="flex flex-col items-center" style={{ flexShrink: 0 }}>
                  <div className="flex items-center justify-center rounded-full font-extrabold"
                    style={{
                      width: 52, height: 52, flexShrink: 0,
                      background: "linear-gradient(135deg, #017eeb, #00dbd3)",
                      color: "#fff", fontSize: 14, letterSpacing: "-0.5px",
                    }}>
                    {step.num}
                  </div>
                  {i < HOW_WE_WORK.length - 1 && (
                    <div style={{ width: 2, flex: 1, minHeight: 32, background: "linear-gradient(to bottom, #017eeb22, transparent)", marginTop: 6 }} />
                  )}
                </div>
                <div style={{ paddingBottom: i < HOW_WE_WORK.length - 1 ? 36 : 0, paddingTop: 10 }}>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
                    <h3 className="font-bold" style={{ fontSize: 20, color: "#0d0f1a", margin: 0 }}>{step.title}</h3>
                    {/* <span className="rounded-full px-3 py-0.5" style={{ fontSize: 12, fontWeight: 600, color: "#017eeb", background: "#e8f0fd", border: "1px solid #c7dcfb", whiteSpace: "nowrap" }}>{step.meta}</span> */}
                  </div>
                  <p style={{ fontSize: 15, lineHeight: 1.75, color: "#6b7280", margin: 0 }}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY BRILWORKS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="text-center mx-auto mb-14" style={{ maxWidth: 720 }}>
            <span className="inline-block mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#017eeb" }}>Why Brilworks</span>
            <h2 className="font-extrabold" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0d0f1a" }}>Built by AI Engineers Who&apos;ve Shipped 50+ Production Models</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>We don&apos;t chase demos. We partner with you to pick the right use case, build the right model, and ship AI that actually moves your metrics.</p>
          </div>
          <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {BENEFITS.map((b) => (
              <div key={b.title} className="rounded-2xl transition-all hover:-translate-y-0.5"
                style={{ background: "#fff", border: "1px solid #e5e7eb", padding: "32px 28px" }}>
                <div className="rounded-[14px] flex items-center justify-center mb-5" style={{ width: 64, height: 64, background: b.tint }}>
                  {b.icon}
                </div>
                <h3 className="font-bold mb-3" style={{ fontSize: 18, color: "#0d0f1a" }}>{b.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "#6b7280" }}>{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS (dark) */}
      <section className="relative overflow-hidden py-16 md:py-24" style={darkSectionBg}>
        <div className="relative mx-auto px-5 md:px-10" style={{ maxWidth: 1280, zIndex: 1 }}>
          <div className="text-center mx-auto mb-14" style={{ maxWidth: 720 }}>
            <span className="inline-block mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#00b4d8" }}>Client Stories</span>
            <h2 className="font-extrabold text-white" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15 }}>What Founders &amp; Data Leaders Say About Us</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "rgba(255,255,255,0.62)" }}>Real outcomes from real partners shipping AI across fintech, healthcare, retail, and logistics.</p>
          </div>
          <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="rounded-2xl"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", padding: "32px 28px", backdropFilter: "blur(10px)" }}>
                <div className="flex gap-0.5 mb-4" style={{ color: "#facc15" }}>
                  {[0, 1, 2, 3, 4].map((i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="mb-6" style={{ color: "rgba(255,255,255,0.85)", fontSize: 15, lineHeight: 1.7 }}>&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="rounded-full flex items-center justify-center font-bold text-white"
                    style={{ width: 44, height: 44, background: "linear-gradient(135deg, #017eeb, #00dbd3)", fontSize: 16 }}>
                    {t.initials}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-semibold" style={{ fontSize: 14 }}>{t.name}</span>
                    <span style={{ color: "rgba(255,255,255,0.55)", fontSize: 12 }}>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HONORS */}
      <section className="py-16" style={{ background: "#f8f9ff" }}>
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="text-center mx-auto" style={{ maxWidth: 720, marginBottom: 32 }}>
            <span className="inline-block mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#017eeb" }}>Recognized By</span>
            <h2 className="font-extrabold" style={{ fontSize: "clamp(22px, 2.4vw, 30px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0d0f1a" }}>Trusted &amp; Awarded by Industry Leaders</h2>
          </div>
          <div className="flex flex-wrap items-center justify-center" style={{ gap: "32px 56px", opacity: 0.85 }}>
            {HONORS.map((h) => (
              <div key={h.label} className="flex items-center gap-2.5" style={{ color: "#6b7280", fontWeight: 600, fontSize: 14 }}>
                {h.icon}{h.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="text-center mx-auto mb-14" style={{ maxWidth: 720 }}>
            <span className="inline-block mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#017eeb" }}>Industries We Serve with AI</span>
            <h2 className="font-extrabold" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0d0f1a" }}>Deep Domain Expertise Across Verticals</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>We&apos;ve deployed AI/ML systems in regulated, data-heavy, and fast-moving industries — bringing both model engineering and domain knowledge to every engagement.</p>
          </div>
          <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))" }}>
            {INDUSTRIES.map((ind) => (
              <Link key={ind.label} href={ind.href}
                className="text-center transition-all hover:-translate-y-0.5"
                style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, padding: "24px 16px", textDecoration: "none" }}>
                <div className="mx-auto mb-3 flex items-center justify-center">{ind.icon}</div>
                <span style={{ fontSize: 13, fontWeight: 600, color: "#212121" }}>{ind.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24" style={{ background: "#f8f9ff" }}>
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="text-center mx-auto mb-14" style={{ maxWidth: 720 }}>
            <span className="inline-block mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#017eeb" }}>Common Questions</span>
            <h2 className="font-extrabold" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0d0f1a" }}>Frequently Asked Questions</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>Everything founders and data leaders typically ask before partnering with us on AI.</p>
          </div>
          <div className="mx-auto" style={{ maxWidth: 860 }}>
            {FAQ.map((item, i) => (
              <GradientFAQAccordion
                key={i + 1}
                id={i + 1}
                question={item.q}
                answer={item.a}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM (preserved component) */}
      <div id="contact">
        <SolutionContactForm
          title="Ready to Build Your AI Solution?"
          description="You're one conversation away from turning your data into a deployed AI product. Tell us what you're trying to solve — we'll show you how we'd model it."
          messageRequired={false}
          submitLabel="Get My Free AI Strategy Call"
          benefits={[
            "Free 30-minute AI strategy call with a senior ML engineer",
            "Custom pilot proposal & ROI estimate within 48 hours",
            "NDA signed before sharing any data or IP",
            "Response guaranteed within 24 business hours",
            "100+ engineers across ML, GenAI, computer vision & MLOps",
          ]}
        />
      </div>
    </>
  );
};

export default AIMLService;
