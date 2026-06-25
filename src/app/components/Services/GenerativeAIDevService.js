"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  Star,
  Sparkles,
  Shield,
  BadgeCheck,
  Compass,
  TrendingUp,
  Globe,
  Users,
  Zap,
  CreditCard,
  Heart,
  GraduationCap,
  ShoppingCart,
  Scale,
  Play,
  Award,
  LayoutGrid,
  X,
} from "lucide-react";
import GradientFAQAccordion from "../Common/GradientFAQAccordion";

const SolutionContactForm = dynamic(() =>
  import("../Solution/SolutionContactForm")
);

// ---------- Style tokens ----------
const heroBg = {
  background:
    "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(124,58,237,0.20) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 20% 80%, rgba(0,180,216,0.08) 0%, transparent 60%), linear-gradient(160deg, #0d0f1a 0%, #111428 50%, #0a0c1e 100%)",
};
const heroGridOverlay = {
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
  backgroundSize: "60px 60px",
  opacity: 0.06,
};
const darkSectionBg = {
  background:
    "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(124,58,237,0.15) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 20% 80%, rgba(0,180,216,0.06) 0%, transparent 60%), #0d0f1a",
};
const gradientTextStyle = {
  backgroundImage: "linear-gradient(to right, #7c3aed, #00ffff)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  color: "transparent",
};
const statValueStyle = {
  backgroundImage: "linear-gradient(to right, #7c3aed, #00dbd3)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  color: "transparent",
};

// ---------- Data ----------
const TRUST = [
  { icon: <Shield size={18} color="#7c3aed" />, label: "AWS Consulting Partner" },
  { icon: <Star size={18} color="#7c3aed" />, label: "30+ GenAI Apps Shipped" },
  { icon: <BadgeCheck size={18} color="#7c3aed" />, label: "OpenAI / Anthropic / Bedrock Experts" },
  { icon: <Compass size={18} color="#7c3aed" />, label: "RAG + Fine-Tuning Specialists" },
];

const HERO_STATS = [
  { value: "30+", label: "GenAI Apps Shipped" },
  { value: "15+", label: "Models Deployed" },
  { value: "50+", label: "Enterprise Integrations" },
  { value: "98%", label: "Client Satisfaction" },
];

const BENEFITS = [
  {
    title: "Beyond Automation, Embrace Innovation",
    tint: "#ede9fe",
    body: "We don't just automate tasks — we empower your AI to generate entirely new content, concepts, and ideas that differentiate your product.",
    icon: <Star size={32} color="#7c3aed" />,
  },
  {
    title: "Scalable AI Solutions",
    tint: "#e0e7ff",
    body: "Your AI shouldn't be left behind as you grow. Our architectures scale across regions, tenants, and usage spikes — without ballooning token bills.",
    icon: <TrendingUp size={32} color="#4f46e5" />,
  },
  {
    title: "We Speak Your Language, and AI's",
    tint: "#ccfbf1",
    body: "Our AI experts bridge the gap between your domain knowledge and the complex world of foundation models. You stay in charge of what; we handle the how.",
    icon: <Globe size={32} color="#0d9488" />,
  },
  {
    title: "AI for Everyone",
    tint: "#cffafe",
    body: "We're not just developers — we're your partners. Clear communication, async-first workflow, and no jargon walls between your team and ours.",
    icon: <Users size={32} color="#0891b2" />,
  },
  {
    title: "Agility at the Core",
    tint: "#fce7f3",
    body: "We track the weekly pace of model releases, agent frameworks, and inference tech — so your project ships on current stacks, not last year's best practices.",
    icon: <Zap size={32} color="#ec4899" />,
  },
  {
    title: "Responsible & Secure AI",
    tint: "#d1fae5",
    body: "NDAs first. Your data stays in your tenancy — VPC, Bedrock, private endpoints. PII redaction, audit logs, and bias checks built in.",
    icon: <Shield size={32} color="#10b981" />,
  },
];

const TESTIMONIALS = [
  {
    initials: "JK",
    name: "James Kim",
    role: "Head of AI, FinTech Lender",
    quote:
      "Brilworks built our RAG-powered underwriting assistant on Bedrock in 9 weeks. It cut analyst review time by 60% and passed our compliance audit on the first pass. They understand finance, not just LLMs.",
  },
  {
    initials: "AR",
    name: "Dr. Anna Reyes",
    role: "CTO, HealthTech Platform",
    quote:
      "We needed a fine-tuned clinical-summary model running inside our HIPAA-compliant VPC. Brilworks delivered — PHI never left our tenancy, and accuracy jumped 14 points over the base model.",
  },
  {
    initials: "LC",
    name: "Laura Chen",
    role: "VP Product, E-commerce Marketplace",
    quote:
      "Their GenAI team built our product-description generator and review summarizer. Conversions on AI-written listings are up 22%, and we cut content ops cost by two-thirds. They delivered a real business outcome, not a demo.",
  },
];

const HONORS = [
  {
    label: "AWS Partner · Advanced Tier",
    icon: <Shield size={20} color="#7c3aed" />,
  },
  {
    label: "Clutch Global Award 2025",
    icon: <Star size={20} color="#7c3aed" />,
  },
  {
    label: "GoodFirms Top 2025-26",
    icon: <Award size={20} color="#7c3aed" />,
  },
  {
    label: "SelectedFirms Top 10 · 2026",
    icon: <LayoutGrid size={20} color="#7c3aed" />,
  },
  {
    label: "Adalo · No-Code Certified",
    icon: <Star size={20} color="#7c3aed" />,
  },
];

const INDUSTRIES = [
  {
    label: "FinTech",
    href: "/use-case/gen-ai-in-fintech/",
    icon: <CreditCard size={32} color="#7c3aed" />,
  },
  {
    label: "HealthTech",
    href: "/use-case/generative-ai-in-healthcare/",
    icon: <Heart size={32} color="#ec4899" />,
  },
  {
    label: "EdTech",
    href: "/industry/edtech-software-development/",
    icon: <GraduationCap size={32} color="#4f46e5" />,
  },
  {
    label: "E-commerce",
    href: "/industry/e-commerce-app-development/",
    icon: <ShoppingCart size={32} color="#10b981" />,
  },
  {
    label: "Legal",
    href: "/industry/fleet-management-software-development/",
    icon: <Scale size={32} color="#0891b2" />,
  },
  {
    label: "Media",
    href: "/use-case/generative-ai-in-media-and-entertainment/",
    icon: <Play size={32} color="#f59e0b" />,
  },
];

const FAQ = [
  {
    q: "How much does it cost to develop a generative AI solution?",
    a: "It depends on complexity, team size, and ongoing maintenance. A basic LLM app typically runs $50K-$150K; feature-rich solutions with agents, RAG, and fine-tuning can reach $400K or more. We offer free consultations to scope your specific need and share a tailored quote.",
  },
  {
    q: "How long does a generative AI project take?",
    a: "Focused LLM apps with RAG can ship in 6-10 weeks. Fine-tuning and multi-agent systems typically take 3-6 months. End-to-end enterprise rollouts including integration and governance run 6-12 months. We share a detailed timeline within 48 hours of your first call.",
  },
  {
    q: "Do you use OpenAI, Anthropic, or open-source models?",
    a: "All of the above. We match the model to the job — GPT-4 class for reasoning, Claude for long context, Llama / Mistral for on-prem or cost-sensitive use cases, Bedrock for AWS-native compliance. We also benchmark multiple options against your actual data before committing.",
  },
  {
    q: "How do you handle data privacy and compliance (HIPAA, SOC 2, GDPR)?",
    a: "Your data stays in your tenancy. We deploy via private endpoints, VPC, or AWS Bedrock with no-training guarantees. We sign NDAs before any discussion and support HIPAA, SOC 2, ISO 27001, and GDPR workflows with audit logging and PII redaction.",
  },
  {
    q: "Should I use RAG or fine-tuning?",
    a: "RAG is best when your knowledge changes often (docs, policies, tickets). Fine-tuning is best for style, format, tone, or specialized reasoning patterns. Most production systems use both. We benchmark both on a sample of your data before recommending.",
  },
  {
    q: "How do you prevent hallucinations and prompt injection?",
    a: "Layered defense: retrieval with citations, structured output parsing, eval harnesses on every deploy, guardrails (topic / PII / jailbreak filters), and production monitoring. We build evaluation in from day one — not as an afterthought.",
  },
  {
    q: "Who owns the model, prompts, and code?",
    a: "You do — 100%. At handover you get full repo access, prompts, eval suites, fine-tuned model weights, documentation, and deployment credentials. No vendor lock-in.",
  },
];

const SERVICES = [
  {
    title: "Generative AI Consulting",
    body:
      "Feeling overwhelmed by GenAI? Our team runs a strategic assessment — mapping your workflows, data, and revenue drivers to the places where GenAI delivers real, measurable impact. You walk away with a prioritized roadmap, not a buzzword list.",
    features: [
      "Use-case discovery & ROI scoring",
      "Model, cost, and data-privacy strategy",
      "Prioritized 90-day GenAI roadmap",
    ],
    image: "/images/ai_consulting.webp",
    imageBg: "linear-gradient(135deg, #f5f3ff 0%, #ddd6fe 100%)",
    reverse: false,
  },
  {
    title: "Generative AI Model Development",
    body:
      "Don't settle for generic chatbots. Our engineers and data scientists build custom LLM applications, RAG pipelines, and multi-agent systems tuned to your domain data, latency budget, and accuracy bar.",
    features: [
      "RAG with vector DBs (Pinecone, pgvector, Weaviate)",
      "Multi-agent orchestration (LangGraph, CrewAI)",
      "Guardrails, evals, and hallucination controls",
    ],
    image: "/images/ai_model_development.webp",
    imageBg: "linear-gradient(135deg, #f5f3ff 0%, #ddd6fe 100%)",
    reverse: true,
  },
  {
    title: "Generative AI Integration",
    body:
      "Get the most from your AI investment with clean, secure integration. We handle the plumbing — auth, streaming, rate limits, observability — so your custom model slots into existing workflows, CRMs, and data stacks without breaking a thing.",
    features: [
      "Secure API gateways & streaming responses",
      "CRM, ERP, Slack, and data-warehouse connectors",
      "Token-cost observability & rate limiting",
    ],
    image: "/images/ai_integration.webp",
    imageBg: "linear-gradient(135deg, #ecfdf5 0%, #bbf7d0 100%)",
    reverse: false,
  },
  {
    title: "Upgrade & Maintenance",
    body:
      "A GenAI model isn't a deploy-and-forget project. We monitor accuracy, latency, and cost in production — catching drift, regressions, and prompt-injection attempts before your users do.",
    features: [
      "Accuracy, latency, and cost dashboards",
      "Drift detection and regression alerts",
      "Prompt-injection and jailbreak monitoring",
    ],
    image: "/images/ai_upgrade_maintenance.webp",
    imageBg: "linear-gradient(135deg, #f0fdfa 0%, #99f6e4 100%)",
    reverse: true,
  },
  {
    title: "AI Model Fine-Tuning",
    body:
      "As your data and business evolve, your model should too. We fine-tune foundation models (Llama, Mistral, GPT, Claude) on your proprietary data — raising accuracy, cutting token cost, and matching your brand voice.",
    features: [
      "Supervised & instruction fine-tuning",
      "LoRA / QLoRA for efficient training",
      "Eval harness & A/B comparison vs. base model",
    ],
    image: "/images/ai_model_fine_tuning.webp",
    imageBg: "linear-gradient(135deg, #ecfeff 0%, #a5f3fc 100%)",
    reverse: false,
  },
  {
    title: "Generative AI Model Replication",
    body:
      "Need your model running in multiple regions, environments, or white-label apps? We replicate and deploy your custom GenAI solution across cloud regions, edge, and on-prem — with consistent behavior and central governance.",
    features: [
      "Multi-region & multi-tenant deployment",
      "On-prem & private-cloud rollout",
      "Central prompt & policy governance",
    ],
    image: "/images/ai_model_replication.webp",
    imageBg: "linear-gradient(135deg, #ecfeff 0%, #a5f3fc 100%)",
    reverse: true,
  },
];

// ---------- Page ----------
const GenerativeAIDevService = () => {
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
                style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)", color: "#c4b5fd", letterSpacing: "0.1em" }}>
                <Sparkles size={14} color="#c4b5fd" /> Generative AI Development
              </span>
              <h1 className="font-extrabold mb-5 text-white" style={{ fontSize: "clamp(30px, 4vw, 54px)", letterSpacing: "-1.5px", lineHeight: 1.1 }}>
                Ship Production-Grade Generative AI — <span style={gradientTextStyle}>In Weeks, Not Quarters</span>
              </h1>
              <p className="mb-4" style={{ fontSize: 17, lineHeight: 1.7, color: "rgba(255,255,255,0.72)", maxWidth: 580 }}>
                We build LLM apps, RAG pipelines, AI agents, and fine-tuned models on OpenAI, Anthropic, and AWS Bedrock. 30+ GenAI apps shipped — production-ready from day one, with guardrails, evals, and cost controls built in.
              </p>
              <p className="mb-8" style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.6)", maxWidth: 580 }}>
                Start by{" "}
                <Link href="/blog/best-artificial-intelligence-platforms/" style={{ color: "rgba(255,255,255,0.9)", textDecoration: "underline", textUnderlineOffset: 4 }}>
                  comparing AI platforms for generative AI workloads
                </Link>{" "}
                — then we&apos;ll match the right model and architecture to your use case.
              </p>
              <div className="flex flex-wrap gap-3 mt-8 mb-8">
                <Link href="#contact"
                  className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all"
                  style={{ background: "#7c3aed", color: "#fff", border: "1px solid #7c3aed", padding: "14px 24px", fontSize: 15 }}>
                  Get My Free AI Consultation <ArrowRight size={16} />
                </Link>
                <Link href="#services"
                  className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:bg-white/10"
                  style={{ background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.3)", padding: "14px 24px", fontSize: 15 }}>
                  See What We Build
                </Link>
              </div>
              <div className="flex flex-wrap gap-x-5 gap-y-2.5" style={{ color: "rgba(255,255,255,0.65)", fontSize: 14 }}>
                {["Free 30-min AI strategy call", "48-hour proposal", "NDA-first, data stays yours"].map((t) => (
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
            <span className="inline-block mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#7c3aed" }}>What We Build</span>
            <h2 className="font-extrabold" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0d0f1a" }}>Our Generative AI Development Services</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>End-to-end GenAI engineering — from strategy and model selection to RAG pipelines, fine-tuning, and scalable deployment.</p>
          </div>

          {SERVICES.map((svc) => (
            <div key={svc.title} className="py-10 lg:py-12">
              <div className="grid items-center gap-8 lg:gap-[60px] grid-cols-1 lg:grid-cols-2">
                <div className={svc.reverse ? "lg:order-2" : ""}>
                  <div className="w-full overflow-hidden rounded-2xl relative"
                  >
                    <Image
                      src={svc.image}
                      alt={svc.title}
                      width={200}
                      height={120}
                      className="object-cover "
                    />
                  </div>
                </div>
                <div className={svc.reverse ? "lg:order-1" : ""}>
                  <h3 className="font-bold mb-4" style={{ fontSize: "clamp(22px, 2.4vw, 28px)", letterSpacing: "-0.3px", lineHeight: 1.3, color: "#0d0f1a" }}>{svc.title}</h3>
                  <p className="mb-5" style={{ fontSize: 16, lineHeight: 1.7, color: "#6b7280" }}>{svc.body}</p>
                  <ul className="list-none">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 mb-2.5" style={{ fontSize: 14, color: "#212121" }}>
                        <span style={{ color: "#7c3aed", flexShrink: 0, marginTop: 2 }}><Check size={16} /></span>{f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>``
      </section>

      {/* MID CTA */}
      <section className="relative overflow-hidden text-center" style={{ padding: "56px 0", background: "linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)" }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(0,219,211,0.2) 0%, transparent 60%)" }} />
        <div className="relative mx-auto px-5 md:px-10" style={{ maxWidth: 700, zIndex: 1 }}>
          <h3 className="font-extrabold mb-3.5" style={{ fontSize: "clamp(22px, 3vw, 36px)", color: "#fff", lineHeight: 1.2, letterSpacing: "-0.5px" }}>Data is the new oil, but AI is the refinery.</h3>
          <p className="mb-7" style={{ color: "rgba(255,255,255,0.85)", fontSize: 16, lineHeight: 1.7 }}>Get a free 30-minute AI strategy call. We&apos;ll review your data, prioritize a GenAI use case, and map a production roadmap — no commitment.</p>
          <Link href="#contact"
            className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:!bg-[#0d0f1a] hover:!text-white hover:!border-[#0d0f1a] mt-5 w-full sm:w-auto"
            style={{ background: "#fff", color: "#7c3aed", border: "1px solid #fff", padding: "16px 32px", fontSize: 16 }}>
            Schedule a Free AI Consultation
          </Link>
        </div>
      </section>

      {/* WHY BRILWORKS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="text-center mx-auto mb-14" style={{ maxWidth: 720 }}>
            <span className="inline-block mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#7c3aed" }}>Why Brilworks</span>
            <h2 className="font-extrabold" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0d0f1a" }}>Here&apos;s What Sets Us Apart</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>We don&apos;t run three-month PoCs that die on a whiteboard. We ship GenAI apps real users use — with guardrails, evals, and cost controls from day one.</p>
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
            <span className="inline-block mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#c4b5fd" }}>Client Stories</span>
            <h2 className="font-extrabold text-white" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15 }}>What Founders &amp; AI Leaders Say About Us</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "rgba(255,255,255,0.62)" }}>Real outcomes from teams that trusted Brilworks to take their GenAI work from idea to production.</p>
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
                    style={{ width: 44, height: 44, background: "linear-gradient(135deg, #7c3aed, #00dbd3)", fontSize: 16 }}>
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
            <span className="inline-block mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#7c3aed" }}>Recognized By</span>
            <h2 className="font-extrabold" style={{ fontSize: "clamp(22px, 2.4vw, 30px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0d0f1a" }}>We&apos;re Pleased to Share Some of the Honors</h2>
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
            <span className="inline-block mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#7c3aed" }}>Industries We Serve</span>
            <h2 className="font-extrabold" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0d0f1a" }}>Deep Domain Expertise Across Verticals</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>Not generalists. We have shipped GenAI solutions with case studies, clients, and production models in each of these verticals.</p>
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
            <span className="inline-block mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#7c3aed" }}>Common Questions</span>
            <h2 className="font-extrabold" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0d0f1a" }}>Frequently Asked Questions</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>Everything AI leaders and founders typically ask before partnering with us on a GenAI project.</p>
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

      {/* CONTACT FORM */}
      <div id="contact">
        <SolutionContactForm
          title="Ready to Ship Your GenAI App?"
          description="Tell us your project idea and get a free AI consultation to turn data into shipped product. No buzzwords — just a real roadmap."
          messageRequired={false}
          submitLabel="Get My Free AI Consultation"
          benefits={[
            "Free 30-minute consultation with a senior AI engineer",
            "Detailed project proposal within 48 hours",
            "NDA signed first — your data and IP stay yours",
            "Response guaranteed within 24 business hours",
            "Expert engineers across RAG, agents, fine-tuning, and MLOps",
          ]}
        />
      </div>
    </>
  );
};

export default GenerativeAIDevService;
