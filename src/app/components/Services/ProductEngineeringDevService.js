"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  Star,
  Sparkles,
  Shield,
  Rocket,
  Users,
  BadgeCheck,
  TrendingUp,
  RefreshCw,
  Clock,
  MessageCircle,
  Award,
  LayoutGrid,
  CreditCard,
  Heart,
  ShoppingCart,
  GraduationCap,
  Factory,
  Truck,
  X,
} from "lucide-react";
import GradientFAQAccordion from "../Common/GradientFAQAccordion";
import Image from "next/image";
import "../../styles/ServiceLightTheme.css";

const SolutionContactForm = dynamic(() =>
  import("../Solution/SolutionContactForm")
);

// ---------- Data ----------
const TRUST = [
  { icon: <Shield size={18} color="#2f6bff" />, label: "AWS Consulting Partner" },
  { icon: <Rocket size={18} color="#2f6bff" />, label: "250+ Products Shipped" },
  { icon: <Users size={18} color="#2f6bff" />, label: "100+ Expert Engineers" },
  { icon: <BadgeCheck size={18} color="#2f6bff" />, label: "98% Client Satisfaction" },
];

const HERO_STATS = [
  { value: "250+", label: "Products Shipped" },
  { value: "20+", label: "Countries Served" },
  { value: "100+", label: "Expert Engineers" },
  { value: "98%", label: "Client Satisfaction" },
];

const BENEFITS = [
  {
    title: "Expert Team",
    tint: "#e8f0fd",
    body: "Skilled engineers with deep experience across product development, ensuring successful delivery from concept to launch.",
    icon: <Users size={32} color="#2f6bff" />,
  },
  {
    title: "Scalable Solutions",
    tint: "#ede9fe",
    body: "We build products designed to grow with your business — adaptable architectures that integrate seamlessly with future needs.",
    icon: <TrendingUp size={32} color="#4f46e5" />,
  },
  {
    title: "Agile Approach",
    tint: "#d1fae5",
    body: "Flexible, iterative process with two-week sprints and demos. You see working software regularly, not promises.",
    icon: <RefreshCw size={32} color="#10b981" />,
  },
  {
    title: "On-Time Delivery",
    tint: "#ccfbf1",
    body: "Efficient processes and clear communication mean your project ships on time and within the agreed budget.",
    icon: <Clock size={32} color="#0d9488" />,
  },
  {
    title: "Quality Focus",
    tint: "#cffafe",
    body: "Rigorous testing across performance, security, and user experience ensures your product is reliable, bug-free, and ready to scale.",
    icon: <Shield size={32} color="#0891b2" />,
  },
  {
    title: "Transparent Communication",
    tint: "#dbeafe",
    body: "We believe in open dialogue throughout development. You're always informed and involved at every step of the journey.",
    icon: <MessageCircle size={32} color="#1e40af" />,
  },
];

const TESTIMONIALS = [
  {
    initials: "SC",
    name: "Sarah Chen",
    role: "Founder & CEO, FinTech Startup",
    quote:
      "Brilworks shipped our MVP in 12 weeks — exactly on schedule. They handled product, design, and engineering as one team. We launched with paying customers in month 4.",
  },
  {
    initials: "MR",
    name: "Michael Rodriguez",
    role: "CTO, B2B SaaS",
    quote:
      "We needed senior engineers fast. Brilworks plugged into our team within a week and contributed code that passed our review on day one. Best engineering partner we've worked with.",
  },
  {
    initials: "PG",
    name: "Priya Gupta",
    role: "VP Product, HealthTech",
    quote:
      "They asked the right questions before writing any code. The product they shipped works exactly the way our customers actually use it — not how we initially imagined.",
  },
];

const HONORS = [
  { label: "AWS Consulting Partner", icon: <Shield size={20} color="#2f6bff" /> },
  { label: "Clutch Top B2B 2024", icon: <Star size={20} color="#2f6bff" /> },
  { label: "GoodFirms Top Developers", icon: <Award size={20} color="#2f6bff" /> },
  { label: "ISO 27001 Certified", icon: <LayoutGrid size={20} color="#2f6bff" /> },
  { label: "Google Cloud Partner", icon: <BadgeCheck size={20} color="#2f6bff" /> },
];

const INDUSTRIES = [
  {
    label: "Fintech",
    href: "/industry/fintech-software-development/",
    icon: <CreditCard size={32} color="#2f6bff" />,
  },
  {
    label: "Healthcare",
    href: "/industry/healthcare-software-development/",
    icon: <Heart size={32} color="#ef4444" />,
  },
  {
    label: "E-commerce",
    href: "/industry/e-commerce-app-development/",
    icon: <ShoppingCart size={32} color="#10b981" />,
  },
  {
    label: "EdTech",
    href: "/industry/edtech-software-development/",
    icon: <GraduationCap size={32} color="#4f46e5" />,
  },
  {
    label: "Manufacturing",
    href: "/industry/manufacturing-software-development-services/",
    icon: <Factory size={32} color="#0d9488" />,
  },
  {
    label: "Logistics",
    href: "/industry/fleet-management-software-development/",
    icon: <Truck size={32} color="#0891b2" />,
  },
];

const FAQ = [
  {
    q: "How long does it take to build an MVP?",
    a: "Most MVPs ship in 10-20 weeks. Timeline depends on scope, integrations, and design complexity. We share a detailed estimate within 48 hours of your first call.",
  },
  {
    q: "What does it cost to build a product with Brilworks?",
    a: "Costs vary based on scope and engagement model. Time & material starts at competitive rates, and fixed-cost projects begin around $25K for focused MVPs. We provide a transparent quote after the initial consultation.",
  },
  {
    q: "Do you sign NDAs before discussing my idea?",
    a: "Yes — we sign mutual NDAs before any project discussion. Your idea, IP, and business details remain fully confidential.",
  },
  {
    q: "How do you handle ownership of the code?",
    a: "You own 100% of the code, designs, and IP. We hand over full repository access, documentation, and deployment credentials at the end of every engagement.",
  },
  {
    q: "Can you work with our existing team?",
    a: "Absolutely. We offer staff augmentation where our engineers join your team, follow your sprint cycles, and use your tools. We also offer dedicated teams for end-to-end ownership.",
  },
  {
    q: "What happens after launch?",
    a: "We offer flexible post-launch support — bug fixes, feature additions, performance monitoring, and scaling. Most clients continue with us for 12+ months after MVP launch.",
  },
  {
    q: "What's your engagement model?",
    a: "We offer four models: Time & Material (pay-as-you-go), Fixed Cost (defined scope), Staff Augmentation (engineers join your team), and Dedicated Team (full team focused on your project).",
  },
];

const SERVICES = [
  {
    title: "Product Conceptualization & Ideation",
    body:
      "Innovation is exciting, but the journey from concept to creation is complex. We turn your vision into a clear, actionable roadmap — analyzing technical feasibility and market trends so your product is viable and successful long-term.",
    features: ["Market and competitor research", "Technical feasibility analysis", "MVP scope definition & prioritization"],
    image:"/images/v2/product_ideation.webp",
    imageBg: "linear-gradient(135deg, #f0f7ff 0%, #e0ecfc 100%)",
    padMockup: true,
    reverse: false,
  },
  {
    title: "Product Design & Engineering",
    body:
      "We combine user-centric design with robust engineering to create intuitive, scalable, and future-proof software. Our designers and engineers collaborate seamlessly to bridge the gap between imagination and reality.",
    features: ["Architecture & system design", "Cloud-native, scalable backends", "Continuous deployment pipelines"],
    image:"/images/v2/product_design_eng.webp",    
    imageBg: "linear-gradient(135deg, #f5f3ff 0%, #ddd6fe 100%)",
    padMockup: true,
    reverse: true,
  },
  {
    title: "Quality Assurance & Testing",
    body:
      "Ship with confidence. We go beyond functionality testing — ensuring exceptional performance, security, and user experience. Our QA process meticulously examines your software, identifying and eliminating bugs before launch.",
    features: ["Automated & manual testing", "Performance & load testing", "Security & penetration testing"],
    image:"/images/v2/qa_testing.webp",    
    imageBg: "linear-gradient(135deg, #ecfdf5 0%, #bbf7d0 100%)",
    padMockup: true,
    reverse: false,
  },
  {
    title: "UI/UX Development",
    body:
      "Don't just build software — create unforgettable experiences. Our UI/UX team transforms ideas into intuitive interfaces and captivating user journeys. We craft UIs that are beautiful, scalable, and adaptable.",
    features: ["User research & persona mapping", "Wireframes, prototypes, design systems", "Accessibility & cross-device testing"],
    image:"/images/v2/ui_ux_design.webp",
    imageBg: "linear-gradient(135deg, #f0fdfa 0%, #99f6e4 100%)",
    padMockup: false,
    reverse: true,
  },
  {
    title: "Application Development",
    body:
      "From concept to creation, we're with you every step of the way. We collaborate closely to understand your vision, translate it into a concrete plan, and deliver a final product that exceeds expectations.",
    features: ["Web, mobile, and cross-platform apps", "API integrations & microservices", "Maintenance & post-launch support"],
    image:"/images/v2/app_development.webp",
    imageBg: "linear-gradient(135deg, #ecfeff 0%, #a5f3fc 100%)",
    padMockup: false,
    reverse: false,
  },
];

// ---------- Page ----------
const ProductEngineeringDevService = () => {
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
                  <Sparkles size={14} color="#2f6bff" /> Product Engineering Services
                </span>
                <h1 className="font-extrabold mb-5" style={{ fontSize: "clamp(34px, 4vw, 54px)", letterSpacing: "-1.5px", lineHeight: 1.1, color: "#0b1e33" }}>
                  Build Products That Scale. <span style={{ color: "#2f6bff" }}>From Concept to Launch</span>
                </h1>
                <p className="mb-8" style={{ fontSize: 18, lineHeight: 1.7, color: "#566678", maxWidth: 580 }}>
                  We partner with founders and product teams to engineer software that ships fast and scales reliably. 250+ products delivered across 20+ countries, MVP in 10-20 weeks, production-ready from day one.
                </p>
                <div className="flex flex-wrap gap-3.5 my-10">
                  <Link href="#contact"
                    className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:opacity-90 hover:-translate-y-0.5"
                    style={{ background: "#2f6bff", color: "#fff", border: "1px solid #2f6bff", padding: "16px 32px", fontSize: 16 }}>
                    Get My Free Product Consultation <ArrowRight size={16} />
                  </Link>
                  <Link href="#services"
                    className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:bg-black/5"
                    style={{ background: "transparent", color: "#0b1e33", border: "1px solid #e4eaf1", padding: "16px 32px", fontSize: 16 }}>
                    See What We Build
                  </Link>
                </div>
                <div className="flex flex-wrap gap-[18px]" style={{ color: "#6b7a8a", fontSize: 14 }}>
                  {["Free 30-min consultation", "48-hour proposal", "No commitment"].map((t) => (
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
            <h2 className="font-extrabold" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0d0f1a" }}>Our Product Development Services</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>End-to-end product engineering — from validating your idea to scaling your launched product to millions of users.</p>
          </div>

          {SERVICES.map((svc) => (
            <div key={svc.title} className="grid items-center gap-8 lg:gap-[60px] py-10 lg:py-12"
              style={{ gridTemplateColumns: "1fr" }}>
              <div className={`grid items-center gap-8 lg:gap-[60px] grid-cols-1 lg:grid-cols-2 ${svc.reverse ? "lg:[direction:rtl]" : ""}`}>
                <div className={`${svc.reverse ? "lg:[direction:ltr]" : ""}`} style={{ direction: "ltr" }}>
                  <div className="w-full overflow-hidden rounded-2xl relative"
                  >
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
          <h3 className="font-extrabold mb-3.5" style={{ fontSize: "clamp(24px, 3vw, 36px)", color: "#fff", lineHeight: 1.2, letterSpacing: "-0.5px" }}>Ready to Build Your Next Product?</h3>
          <p className="mb-7" style={{ color: "rgba(255,255,255,0.85)", fontSize: 16, lineHeight: 1.7 }}>Get a free 30-minute consultation with our engineering team. We&apos;ll review your requirements, map a roadmap, and estimate your timeline, no commitment.</p>
          <Link href="#contact"
            className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:!bg-[#0b1e33] hover:!text-white hover:!border-[#0b1e33] mt-5"
            style={{ background: "#fff", color: "#2f6bff", border: "1px solid #fff", padding: "16px 32px", fontSize: 16 }}>
            Start My Project
          </Link>
        </div>
      </section>

      {/* WHY BRILWORKS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="text-center mx-auto mb-14" style={{ maxWidth: 720 }}>
            <span className="inline-block mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#2f6bff" }}>Why Brilworks</span>
            <h2 className="font-extrabold" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0d0f1a" }}>Built by Engineers Who've Shipped 250+ Products</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>We don't just write code — we partner with you to make hard product decisions, ship faster, and avoid costly mistakes.</p>
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
            <h2 className="font-extrabold" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0b1e33" }}>What Founders &amp; CTOs Say About Us</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#566678" }}>Real outcomes from real partners across SaaS, fintech, healthcare, and e-commerce.</p>
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
            <span className="inline-block mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#2f6bff" }}>Recognized By</span>
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
            <span className="inline-block mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#2f6bff" }}>Industries We Serve</span>
            <h2 className="font-extrabold" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0d0f1a" }}>Deep Domain Expertise Across Verticals</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>We've built products for regulated, complex, and fast-moving industries — bringing both engineering and domain knowledge.</p>
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
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>Everything founders and product teams typically ask before working with us.</p>
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
          title="Ready to Build Your Product?"
          description="You're one conversation away from turning your product idea into shipped software. Tell us what you're building, we'll show you how we can help."
          messageRequired={false}
          submitLabel="Get My Free Product Consultation"
          bgClassName="svc-mid-cta-bg"
          benefits={[
            "Free 30-minute consultation with a senior product engineer",
            "Detailed project proposal within 48 hours",
            "48-hour risk-free trial — no commitment",
            "Response guaranteed within 24 business hours",
            "100+ engineers across web, mobile, AI, and cloud",
          ]}
        />
      </div>
    </>
  );
};

export default ProductEngineeringDevService;
