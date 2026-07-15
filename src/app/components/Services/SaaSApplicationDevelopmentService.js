"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  Star,
  Sparkles,
  Shield,
  Layers,
  Network,
  BadgeCheck,
  Zap,
  Palette,
  TrendingUp,
  Users,
  ShieldCheck,
  RefreshCw,
  Award,
  LayoutGrid,
  CreditCard,
  Heart,
  GraduationCap,
} from "lucide-react";
import GradientFAQAccordion from "../Common/GradientFAQAccordion";
import Image from "next/image";
import "../../styles/ServiceLightTheme.css";

const SolutionContactForm = dynamic(() =>
  import("../Solution/SolutionContactForm")
);

// ---------- Data ----------
const TRUST = [
  { icon: <Shield size={18} color="#2f6bff" />, label: "AWS Advanced Tier Partner" },
  { icon: <Layers size={18} color="#2f6bff" />, label: "30+ SaaS Products Live" },
  { icon: <Network size={18} color="#2f6bff" />, label: "Multi-Tenant Architecture" },
  { icon: <BadgeCheck size={18} color="#2f6bff" />, label: "99.9% Uptime SLA" },
];

const HERO_STATS = [
  { value: "30+", label: "SaaS Apps Shipped" },
  { value: "$40M+", label: "MRR Served on Our Platforms" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "98%", label: "Client Satisfaction" },
];

const BENEFITS = [
  {
    title: "Fast-Track Your Idea",
    tint: "#e8f0fd",
    body: "We don't just code, we co-create. Our SaaS experts refine your vision and propel it through efficient development — all under one roof.",
    icon: <Zap size={32} color="#2f6bff" />,
  },
  {
    title: "UX-Obsessed Design",
    tint: "#ede9fe",
    body: "We craft interfaces that captivate users while building fortresses around your data. Your SaaS will be both stunning and secure.",
    icon: <Palette size={32} color="#4f46e5" />,
  },
  {
    title: "Scalable Architecture from Day One",
    tint: "#d1fae5",
    body: "Forget costly overhauls. Your application seamlessly adapts to your ever-expanding tenant base. We design your SaaS to flex with your growth.",
    icon: <TrendingUp size={32} color="#10b981" />,
  },
  {
    title: "Collaborative Development",
    tint: "#ccfbf1",
    body: "We're not just developers — we're your partners in success. Clear communication and two-week sprint reviews ensure your vision becomes reality.",
    icon: <Users size={32} color="#0d9488" />,
  },
  {
    title: "Future-Proof Tech Stack",
    tint: "#cffafe",
    body: "We stay ahead of the curve, leveraging cutting-edge SaaS technology to create platforms that never go out of style. Stay competitive.",
    icon: <ShieldCheck size={32} color="#0891b2" />,
  },
  {
    title: "Continuous Innovation",
    tint: "#dbeafe",
    body: "We offer ongoing support and maintenance — constantly evolving your SaaS to meet changing customer needs and emerging user demands.",
    icon: <RefreshCw size={32} color="#1e40af" />,
  },
];

const TESTIMONIALS = [
  {
    initials: "LB",
    name: "Liz Bullen",
    role: "Founder, Lyfecoin",
    quote:
      "Team Brilworks was an absolute delight to work with. They took my list of prioritized needs and shipped our SaaS MVP in under 4 weeks — we had paying customers by month two.",
  },
  {
    initials: "GO",
    name: "Golan",
    role: "Director of R&D / CTO, Trackimo",
    quote:
      "Excellent knowledge of Java, Spring Boot, DB, and DevOps. We hit 99.9% API uptime across our SaaS platform in year one. Dedicated, available — I strongly recommend Brilworks.",
  },
  {
    initials: "OR",
    name: "Orokii Team",
    role: "VP Product, Marketplace SaaS",
    quote:
      "Brilworks treats our SaaS platform as if it were their own. Exceptional communication, on-time delivery, and they always go the extra mile. We onboarded 3,200 customers in our first 60 days.",
  },
];

const HONORS = [
  { label: "AWS Partner · Advanced Tier", icon: <Shield size={20} color="#2f6bff" /> },
  { label: "Clutch Global Spring 2025", icon: <Star size={20} color="#2f6bff" /> },
  { label: "Clutch Global Fall 2024", icon: <Star size={20} color="#2f6bff" /> },
  { label: "GoodFirms Top 2025–26", icon: <Award size={20} color="#2f6bff" /> },
  { label: "SelectedFirms Top 10 2026", icon: <LayoutGrid size={20} color="#2f6bff" /> },
];

const INDUSTRIES = [
  {
    label: "FinTech SaaS",
    href: "/industry/fintech-software-development/",
    icon: <CreditCard size={32} color="#2f6bff" />,
  },
  {
    label: "HRTech SaaS",
    href: "/industry/hr-software-development/",
    icon: <Users size={32} color="#4f46e5" />,
  },
  {
    label: "MarTech SaaS",
    href: "/saas-application-development-services/",
    icon: <TrendingUp size={32} color="#10b981" />,
  },
  {
    label: "EdTech SaaS",
    href: "/industry/edtech-software-development/",
    icon: <GraduationCap size={32} color="#0d9488" />,
  },
  {
    label: "HealthTech SaaS",
    href: "/industry/healthcare-software-development/",
    icon: <Heart size={32} color="#ef4444" />,
  },
  {
    label: "B2B SaaS",
    href: "#",
    icon: <LayoutGrid size={32} color="#0891b2" />,
  },
];

const FAQ = [
  {
    q: "How long does it take to develop a SaaS product?",
    a: "The development timeframe depends on the complexity of your product. A focused SaaS MVP typically ships in 10-16 weeks; a full multi-tenant platform with billing, RBAC, and admin console in 16-24 weeks. We share a detailed estimate within 48 hours.",
  },
  {
    q: "What's included in your SaaS development services?",
    a: "Our services cover the entire SaaS lifecycle — ideation, brand design, architecture, development, subscription billing integration, testing, deployment, and ongoing 24/7 support.",
  },
  {
    q: "How much does it cost to develop a SaaS product?",
    a: "Cost varies with features, complexity, and timeline. Focused SaaS MVPs start around $30K; full multi-tenant platforms range $75K-$250K+. We offer flexible engagement models (T&M, Fixed Cost, Dedicated Team) to suit your budget.",
  },
  {
    q: "How do you ensure my SaaS product is secure?",
    a: "Security is built in, not bolted on. We implement SOC 2 / GDPR-ready patterns — encryption at rest and in transit, RBAC, audit logs, dependency scanning, and regular penetration testing. We also sign NDAs before any discussion.",
  },
  {
    q: "How do you handle multi-tenancy and data isolation?",
    a: "We choose the tenancy model (pooled, siloed, or hybrid) based on your compliance, performance, and cost requirements. Every decision is documented and reviewed with your team before we build.",
  },
  {
    q: "Can you integrate my SaaS with other applications?",
    a: "Yes — we have deep expertise in integrating SaaS with Stripe, Chargebee, HubSpot, Salesforce, Slack, and hundreds of third-party APIs. We also build robust webhook and public API layers so your customers can integrate too.",
  },
  {
    q: "What happens after my SaaS product launches?",
    a: "We offer ongoing support and maintenance — 24/7 monitoring, bug fixes, feature additions, security patches, and performance optimization. Most clients continue with us 12+ months post-launch as their SaaS scales.",
  },
];

const SERVICES = [
  {
    title: "Idea Productization & Brand Design",
    body:
      "We help you refine your SaaS concept, develop a compelling brand identity, and create a clear go-to-market roadmap — so your first investor pitch, landing page, and MVP all tell the same story.",
    features: ["Value proposition & positioning", "Brand identity & design system", "MVP scope & launch roadmap"],
    image:"/images/v2/idea_brand_design.webp",
    imageBg: "linear-gradient(135deg, #f0f7ff 0%, #e0ecfc 100%)",
    padMockup: true,
    reverse: false,
  },
  {
    title: "SaaS Consulting",
    body:
      "Expert guidance throughout your SaaS journey — from initial concept to market launch. We help you define product strategy, identify market fit, choose a pricing model, and design a winning go-to-market motion.",
    features: ["Product-market fit discovery", "Pricing & packaging strategy", "Technology stack selection"],
    image:"/images/v2/saas_consulting.webp", 
    imageBg: "linear-gradient(135deg, #f5f3ff 0%, #ddd6fe 100%)",
    padMockup: true,
    reverse: true,
  },
  {
    title: "SaaS Architecture Design",
    body:
      "We design scalable, secure, multi-tenant architectures engineered for the workloads you'll have at 10,000 customers — not just your first 100. Reliable user experience, enterprise-ready from day one.",
    features: ["Multi-tenant data isolation patterns", "Auto-scaling cloud infrastructure", "SOC 2 / GDPR security by design"],
    image:"/images/v2/saas_architecture_design.webp",
    imageBg: "linear-gradient(135deg, #ecfdf5 0%, #bbf7d0 100%)",
    padMockup: true,
    reverse: false,
  },
  {
    title: "SaaS Application Development",
    body:
      "Our skilled developers leverage modern frameworks — Next.js, Node, Python, AWS — to build high-performing, secure SaaS applications with subscription billing, role-based access, and admin consoles ready out of the gate.",
    features: ["Stripe / Chargebee subscription billing", "SSO, RBAC, audit logging", "Admin console & tenant onboarding flows"],
    image:"/images/v2/saas_application_development.webp",
    imageBg: "linear-gradient(135deg, #f0fdfa 0%, #99f6e4 100%)",
    padMockup: false,
    reverse: true,
  },
  {
    title: "SaaS Support & Maintenance",
    body:
      "Bug fixes, feature updates, and ongoing optimization — we keep your SaaS optimized and up-to-date, ensuring peak performance, enterprise-grade uptime, and a seamless user experience as your tenant count scales.",
    features: ["24/7 monitoring & on-call", "Security patches & dependency upgrades", "Performance tuning & cost optimization"],
    image:"/images/v2/saas_support_maintenance.webp",
    imageBg: "linear-gradient(135deg, #ecfeff 0%, #a5f3fc 100%)",
    padMockup: true,
    reverse: false,
  },
  {
    title: "SaaS Platform Migration",
    body:
      "A smooth transition to your new SaaS home. We seamlessly migrate your software from on-premise servers or another platform, minimizing downtime and ensuring a successful move to the cloud without losing a single customer.",
    features: ["Zero-downtime cutover planning", "Data migration & validation", "Legacy-to-cloud rearchitecture"],
    image:"/images/v2/saas_platform_migration.webp",
    imageBg: "linear-gradient(135deg, #f0f7ff 0%, #e0ecfc 100%)",
    padMockup: false,
    reverse: true,
  },
];

// ---------- Page ----------
const SaaSApplicationDevelopmentService = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden svc-hero-bg" style={{ padding: "120px 0 80px" }}>
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="grid gap-10 lg:gap-[60px] items-center" style={{ gridTemplateColumns: "1fr" }}>
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-[60px] items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-6 text-[12px] font-semibold uppercase border"
                  style={{ background: "#ffffff", borderColor: "#e4eaf1", color: "#566678", letterSpacing: "0.1em", boxShadow: "0 1px 2px rgba(11, 30, 51, 0.05)" }}>
                  <Sparkles size={14} color="#2f6bff" /> SaaS Application Development
                </span>
                <h1 className="font-extrabold mb-5" style={{ fontSize: "clamp(34px, 4vw, 54px)", letterSpacing: "-1.5px", lineHeight: 1.1, color: "#0b1e33" }}>
                  Build SaaS Products That Scale to MRR. <span style={{ color: "#2f6bff" }}>From First Signup to Enterprise</span>
                </h1>
                <p className="mb-8" style={{ fontSize: 18, lineHeight: 1.7, color: "#566678", maxWidth: 580 }}>
                  We engineer multi-tenant SaaS platforms that onboard paying customers in weeks, not quarters. 30+ SaaS products live across FinTech, HRTech, and B2B, 99.9% uptime SLA, subscription billing ready on day one.
                </p>
                <div className="flex flex-wrap gap-3.5 my-10">
                  <Link href="#contact"
                    className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:opacity-90 hover:-translate-y-0.5"
                    style={{ background: "#2f6bff", color: "#fff", border: "1px solid #2f6bff", padding: "16px 32px", fontSize: 16 }}>
                    Get a Quote <ArrowRight size={16} />
                  </Link>
                  <Link href="#services"
                    className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:bg-black/5"
                    style={{ background: "transparent", color: "#0b1e33", border: "1px solid #e4eaf1", padding: "16px 32px", fontSize: 16 }}>
                    Explore Our SaaS Services
                  </Link>
                </div>
                <div className="flex flex-wrap gap-[18px]" style={{ color: "#6b7a8a", fontSize: 14 }}>
                  {["Multi-tenant from day one", "Subscription billing ready", "NDA before first call"].map((t) => (
                    <span key={t} className="inline-flex items-center gap-2" style={{ color: "#6b7a8a" }}>
                      <span style={{ color: "#16a34a" }}><Check size={16} /></span>{t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="grid grid-cols-2 gap-4">
                  {HERO_STATS.map((s) => (
                    <div key={s.label} className="rounded-2xl transition-all svc-stat-card" style={{ padding: "28px 24px" }}>
                      <div className="font-extrabold leading-none mb-2" style={{ color: "#2f6bff", fontSize: "clamp(32px, 3vw, 42px)", letterSpacing: "-1px" }}>{s.value}</div>
                      <div style={{ color: "#6b7a8a", fontSize: 13, fontWeight: 500, lineHeight: 1.4 }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section aria-label="Trust indicators" style={{ background: "#ffffff", borderBottom: "1px solid #e5e7eb", padding: "28px 0" }}>
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
      <section id="services" className="py-16 md:py-24" style={{ background: "#f1f5fb" }}>
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="text-center mx-auto mb-14" style={{ maxWidth: 720 }}>
            <span className="inline-block mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#2f6bff" }}>What We Build</span>
            <h2 className="font-extrabold" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0d0f1a" }}>Our SaaS Development Services</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>End-to-end SaaS engineering — from validating the idea to migrating enterprise customers off legacy platforms.</p>
          </div>

          {SERVICES.map((svc) => (
            <div key={svc.title} className="grid items-center gap-8 lg:gap-[60px] py-10 lg:py-12"
              style={{ gridTemplateColumns: "1fr" }}>
              <div className={`grid items-center gap-8 lg:gap-[60px] grid-cols-1 lg:grid-cols-2 ${svc.reverse ? "lg:[direction:rtl]" : ""}`}>
                <div className={`${svc.reverse ? "lg:[direction:ltr]" : ""}`} style={{ direction: "ltr" }}>
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
                <div className={`${svc.reverse ? "lg:[direction:ltr]" : ""}`} style={{ direction: "ltr" }}>
                  <h3 className="font-bold mb-4" style={{ fontSize: "clamp(22px, 2.4vw, 28px)", letterSpacing: "-0.3px", lineHeight: 1.3, color: "#0d0f1a" }}>{svc.title}</h3>
                  <p className="mb-5" style={{ fontSize: 16, lineHeight: 1.7, color: "#6b7280" }}>{svc.body}</p>
                  <ul className="list-none">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 mb-2.5" style={{ fontSize: 14, color: "#212121" }}>
                        <span style={{ color: "#2f6bff", flexShrink: 0, marginTop: 2 }}><Check size={16} /></span>{f}
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
      <section className="relative overflow-hidden text-center svc-mid-cta-bg" style={{ padding: "56px 0" }}>
        <div className="absolute inset-0 pointer-events-none svc-mid-cta-glow" />
        <div className="relative mx-auto px-5 md:px-10" style={{ maxWidth: 700, zIndex: 1 }}>
          <h3 className="font-extrabold mb-3.5" style={{ fontSize: "clamp(24px, 3vw, 36px)", color: "#fff", lineHeight: 1.2, letterSpacing: "-0.5px" }}>Ready to Turn Your SaaS Idea Into Monthly Recurring Revenue?</h3>
          <p className="mb-7" style={{ color: "rgba(255,255,255,0.85)", fontSize: 16, lineHeight: 1.7 }}>Get a free 30-minute consultation with our SaaS architects. We&apos;ll review your product, map a multi-tenant roadmap, and estimate your MVP timeline, no commitment.</p>
          <Link href="#contact"
            className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:!bg-[#0b1e33] hover:!text-white hover:!border-[#0b1e33] mt-5"
            style={{ background: "#fff", color: "#2f6bff", border: "1px solid #fff", padding: "16px 32px", fontSize: 16 }}>
            Let&apos;s Discuss
          </Link>
        </div>
      </section>

      {/* WHY BRILWORKS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="text-center mx-auto mb-14" style={{ maxWidth: 720 }}>
            <span className="inline-block mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#2f6bff" }}>Why Brilworks</span>
            <h2 className="font-extrabold" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0d0f1a" }}>Built by Engineers Who&apos;ve Shipped 30+ SaaS Products</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>We don&apos;t just code — we co-create. From first wireframe to enterprise tenant #500, we partner with you through every SaaS growth stage.</p>
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

      {/* TESTIMONIALS */}
      <section className="relative overflow-hidden py-16 md:py-24 svc-dark-section-bg">
        <div className="relative mx-auto px-5 md:px-10" style={{ maxWidth: 1280, zIndex: 1 }}>
          <div className="text-center mx-auto mb-14" style={{ maxWidth: 720 }}>
            <span className="inline-block mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#2f6bff" }}>Client Stories</span>
            <h2 className="font-extrabold" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0b1e33" }}>What SaaS Founders, CTOs &amp; Product Leaders Say</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#566678" }}>Real outcomes from real SaaS partners, not curated marketing quotes.</p>
          </div>
          <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="rounded-2xl"
                style={{ background: "#ffffff", border: "1px solid #e4eaf1", padding: "32px 28px", boxShadow: "0 1px 2px rgba(11, 30, 51, 0.05)" }}>
                <div className="flex gap-0.5 mb-4" style={{ color: "#facc15" }}>
                  {[0, 1, 2, 3, 4].map((i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="mb-6" style={{ color: "#0b1e33", fontSize: 15, lineHeight: 1.7 }}>&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="rounded-full flex items-center justify-center font-bold text-white"
                    style={{ width: 44, height: 44, background: "linear-gradient(135deg, #2f6bff, #1e4fd6)", fontSize: 16 }}>
                    {t.initials}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold" style={{ fontSize: 14, color: "#0b1e33" }}>{t.name}</span>
                    <span style={{ color: "#6b7a8a", fontSize: 12 }}>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HONORS */}
      <section className="py-16" style={{ background: "#f1f5fb" }}>
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="text-center mx-auto" style={{ maxWidth: 720, marginBottom: 32 }}>
            <span className="inline-block mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#2f6bff" }}>Recognition</span>
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
            <span className="inline-block mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#2f6bff" }}>SaaS Verticals</span>
            <h2 className="font-extrabold" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0d0f1a" }}>Deep Domain Expertise Across SaaS Verticals</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>Not generalists. We have case studies, clients, and production code live in each of these SaaS verticals.</p>
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
      <section className="py-16 md:py-24" style={{ background: "#f1f5fb" }}>
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="text-center mx-auto mb-14" style={{ maxWidth: 720 }}>
            <span className="inline-block mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#2f6bff" }}>Common Questions</span>
            <h2 className="font-extrabold" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0d0f1a" }}>Frequently Asked Questions</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>Everything SaaS founders and product teams typically ask before working with us.</p>
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
          title="Ready to Build Your SaaS Product?"
          description="Connect with our SaaS architects for a no-obligation discussion about your vision, and how we can help you ship it to paying customers."
          messageRequired={false}
          submitLabel="Get a Quote"
          bgClassName="svc-mid-cta-bg"
          benefits={[
            "Free 30-minute consultation with a senior SaaS architect",
            "Detailed multi-tenant roadmap within 48 hours",
            "NDA signed before first conversation",
            "Response guaranteed within 24 business hours",
            "30+ SaaS products shipped across 6 verticals",
          ]}
        />
      </div>
    </>
  );
};

export default SaaSApplicationDevelopmentService;
