"use client";
import dynamic from "next/dynamic";
import Link from "next/link";

const SolutionContactForm = dynamic(() =>
  import("../Solution/SolutionContactForm")
);

// ---------- Inline icon primitives ----------
const IconCheck = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconArrowRight = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12H19M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconStarFilled = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2L15 8.5L22 9.3L17 14L18.2 21L12 17.7L5.8 21L7 14L2 9.3L9 8.5L12 2Z" />
  </svg>
);

const IconBolt = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="#5eead4" opacity="0.3" />
    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#5eead4" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const IconShield = ({ color = "#0d9488" }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2L4 5V11C4 16 7.5 20.5 12 22C16.5 20.5 20 16 20 11V5L12 2Z" fill={color} opacity="0.15" />
    <path d="M12 2L4 5V11C4 16 7.5 20.5 12 22C16.5 20.5 20 16 20 11V5L12 2Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M9 12L11 14L15 10" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconBoltSmall = ({ color = "#0d9488" }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill={color} opacity="0.15" />
    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
  </svg>
);

const IconPhone = ({ color = "#0d9488" }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="6" y="2" width="12" height="20" rx="2" fill={color} opacity="0.15" />
    <rect x="6" y="2" width="12" height="20" rx="2" stroke={color} strokeWidth="1.8" />
    <path d="M10 18H14" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const IconClock = ({ color = "#0d9488" }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" fill={color} opacity="0.15" />
    <path d="M12 7V12L15 14M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ---------- Style tokens ----------
const heroBg = {
  background:
    "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(13,148,136,0.22) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 20% 80%, rgba(94,234,212,0.10) 0%, transparent 60%), linear-gradient(160deg, #0d0f1a 0%, #0f1f24 50%, #0a0c1e 100%)",
};
const heroGridOverlay = {
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
  backgroundSize: "60px 60px",
  opacity: 0.06,
};
const darkSectionBg = {
  background:
    "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(13,148,136,0.16) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 20% 80%, rgba(94,234,212,0.08) 0%, transparent 60%), #0d0f1a",
};
const gradientTextStyle = {
  backgroundImage: "linear-gradient(to right, #017eeb, #00ffff)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  color: "transparent",
};
const statValueStyle = {
  backgroundImage: "linear-gradient(to right, #0d9488, #5eead4)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  color: "transparent",
};

// ---------- Data ----------
const TRUST = [
  { icon: <IconShield />, label: "AWS Consulting Partner" },
  { icon: <IconBoltSmall />, label: "Adalo Expert Partner" },
  { icon: <IconPhone />, label: "20+ Apps Shipped" },
  { icon: <IconClock />, label: "4-Week MVPs" },
];

const HERO_STATS = [
  { value: "20+", label: "Adalo Apps Shipped" },
  { value: "4 wks", label: "Average Time to MVP" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "15+", label: "Third-Party Integrations" },
];

const BENEFITS = [
  {
    title: "Certified Adalo Experts",
    tint: "#ccfbf1",
    body: "Our team is Adalo-certified and builds exclusively on the platform. We know every component, quirk, and performance limit — and how to design around them.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="9" cy="8" r="4" fill="#0d9488" opacity="0.15" />
        <path d="M9 12C12.31 12 15 9.31 15 6C15 4.69 14.59 3.47 13.91 2.5M3 21V19C3 16.79 4.79 15 7 15H11C13.21 15 15 16.79 15 19V21" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="8" r="4" stroke="#0d9488" strokeWidth="1.8" />
        <path d="M17 11L19 13L23 9" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "4-Week MVPs",
    tint: "#dcfce7",
    body: "We've shipped MVPs in as little as 28 days. Our sprint-based delivery model gets you in front of users — and into revenue — faster than any code-first agency.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="#16a34a" opacity="0.15" />
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#16a34a" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Founder-First Approach",
    tint: "#ede9fe",
    body: "We speak product, not just tech. You get strategic input on scope, priorities, and monetization — not a team that just ticks off tickets.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" fill="#7c3aed" opacity="0.15" />
        <path d="M12 8V12L14 14M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Scale-Ready Builds",
    tint: "#cffafe",
    body: "We architect Adalo apps with scale in mind — data modeling, lazy-loaded lists, and external-collection patterns that survive past 10K users.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 3V21H21M7 14L11 10L15 14L21 8" fill="#0891b2" opacity="0.15" />
        <path d="M3 3V21H21M7 14L11 10L15 14L21 8M21 8H17M21 8V12" stroke="#0891b2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Fixed-Scope Pricing",
    tint: "#fef3c7",
    body: "Transparent, milestone-based pricing. Know your MVP cost on day one — with no hourly surprises and no scope creep.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M9 12L11 14L15 10M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z" fill="#d97706" opacity="0.15" />
        <path d="M9 12L11 14L15 10M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z" stroke="#d97706" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "You Own Everything",
    tint: "#fce7f3",
    body: "Full ownership of your Adalo app, database, and accounts on handover. We train your team and stay on as long as you need — not a day more.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M21 11.5C21 16.75 16.75 21 11.5 21C10 21 8.5 20.6 7.2 19.9L3 21L4.1 16.8C3.4 15.5 3 14 3 12.5C3 7.25 7.25 3 12.5 3C17.75 3 21 6.75 21 11.5Z" fill="#be185d" opacity="0.15" />
        <path d="M21 11.5C21 16.75 16.75 21 11.5 21C10 21 8.5 20.6 7.2 19.9L3 21L4.1 16.8C3.4 15.5 3 14 3 12.5C3 7.25 7.25 3 12.5 3C17.75 3 21 6.75 21 11.5Z" stroke="#be185d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const TESTIMONIALS = [
  {
    initials: "LB",
    name: "Liz Bullen",
    role: "Founder, Lyfecoin",
    metric: "MVP shipped in under 4 weeks",
    quote:
      "Team Brilworks has been an absolute delight to work with. They took my prioritized list and shipped the most pressing features quickly. Our MVP was live in under 4 weeks.",
  },
  {
    initials: "OT",
    name: "Orokii Team",
    role: "Product Lead, Art Marketplace",
    metric: "3.2K artists onboarded in 60 days",
    quote:
      "Orokii has a special relationship with Brilworks. They treated our marketplace like their own product — exceptional communication, on-time delivery, and they always go the extra mile.",
  },
  {
    initials: "DV",
    name: "David Velasquez",
    role: "Non-Technical Founder, Rastrack",
    metric: "Scaled to 10K+ active users",
    quote:
      "I've worked with Brilworks for 4+ years and could not be happier. They're always available, the quality is consistent, and they helped us scale from a no-code MVP to 10K+ active users.",
  },
];

const HONORS = [
  { label: "AWS Consulting Partner", icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2L4 5V11C4 16 7.5 20.5 12 22C16.5 20.5 20 16 20 11V5L12 2Z" stroke="#0d9488" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  ) },
  { label: "Adalo Expert Partner", icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#0d9488" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  ) },
  { label: "Clutch Global Award 2025", icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2L15 8.5L22 9.3L17 14L18.2 21L12 17.7L5.8 21L7 14L2 9.3L9 8.5L12 2Z" stroke="#0d9488" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  ) },
  { label: "GoodFirms Top Developers", icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="6" stroke="#0d9488" strokeWidth="1.8" />
      <path d="M9 14L7 22L12 19L17 22L15 14" stroke="#0d9488" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  ) },
  { label: "SelectedFirms Top 10 · 2026", icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2L15 8.5L22 9.3L17 14L18.2 21L12 17.7L5.8 21L7 14L2 9.3L9 8.5L12 2Z" stroke="#0d9488" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  ) },
];

const INDUSTRIES = [
  {
    label: "Startups",
    href: "#contact",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="#0d9488" opacity="0.15" />
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#0d9488" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "MVPs",
    href: "#contact",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="3" fill="#0d9488" opacity="0.15" />
        <rect x="4" y="4" width="16" height="16" rx="3" stroke="#0d9488" strokeWidth="1.8" />
        <path d="M9 12L11 14L15 10" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Marketplaces",
    href: "#contact",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 21H21L19 11H5L3 21Z" fill="#0d9488" opacity="0.15" />
        <path d="M3 21H21L19 11H5L3 21Z M8 11V7C8 4.8 9.8 3 12 3C14.2 3 16 4.8 16 7V11" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Directories",
    href: "#contact",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 6H20M4 12H20M4 18H14" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="4" cy="6" r="1.5" fill="#0d9488" />
        <circle cx="4" cy="12" r="1.5" fill="#0d9488" />
        <circle cx="4" cy="18" r="1.5" fill="#0d9488" />
      </svg>
    ),
  },
  {
    label: "Internal Tools",
    href: "#contact",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="18" height="14" rx="2" fill="#0d9488" opacity="0.15" />
        <rect x="3" y="4" width="18" height="14" rx="2" stroke="#0d9488" strokeWidth="1.8" />
        <path d="M8 20H16M12 18V20" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M7 9H11M7 13H15" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "SMB",
    href: "#contact",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 21V9L12 3L21 9V21H3Z" fill="#0d9488" opacity="0.15" />
        <path d="M3 21V9L12 3L21 9V21H3ZM9 21V13H15V21" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const FAQ = [
  {
    q: "What is Adalo, and why should I use it instead of traditional code?",
    a: "Adalo is a no-code platform for building native mobile and web apps visually — no developers required. For MVPs, marketplaces, directories, and internal tools, Adalo ships 3-5x faster than traditional code and costs a fraction. Ideal when speed and iteration matter more than millisecond-level performance.",
  },
  {
    q: "How long does it take to build an Adalo app?",
    a: "Most MVPs ship in 4-8 weeks. Larger apps with complex integrations and custom logic take 8-12 weeks. We share a detailed timeline and fixed-scope quote within 48 hours of your first call.",
  },
  {
    q: "Can my Adalo app be published to the App Store and Google Play?",
    a: "Yes. Adalo publishes true native iOS and Android apps via Apple's App Store and Google Play. We handle the full submission pipeline — signing certificates, App Store Connect, Play Console, store listings, and review-board responses.",
  },
  {
    q: "Will my Adalo app scale as we grow?",
    a: "Adalo apps scale well into the 10K-50K user range with proper architecture — data collections, external databases (Xano, Airtable, Supabase), and caching patterns. We design every build with scale in mind, so you don't hit walls at growth stage.",
  },
  {
    q: "Do you provide ongoing maintenance and support?",
    a: "Yes. We offer monthly retainers that include feature releases, bug fixes, performance tuning, and A/B tests. Most clients continue with us for 12+ months after launch, iterating on user feedback.",
  },
  {
    q: "Can you integrate third-party services into Adalo?",
    a: "Absolutely. We integrate Stripe, Airtable, Zapier, Xano, Supabase, Twilio, SendGrid, OneSignal, Algolia, and any REST or webhook API. If Adalo doesn't support it natively, we build a custom action or API bridge.",
  },
  {
    q: "Who owns the Adalo app and data once delivered?",
    a: "You own 100% of it — the Adalo account, database, published apps, and App Store / Play Store listings. We hand over full admin access, documentation, and record a training video for your team at the end of every engagement.",
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

const codeSeg = (cls, w) => {
  const colors = { k: "#c084fc", s: "#86efac", v: "#fbbf24", t: "#67e8f9", x: "#475569" };
  return <span className="inline-block rounded-sm" style={{ height: 7, width: w, background: colors[cls] }} />;
};

const MockupCodeCanvas = () => (
  <div className="w-full h-full rounded-xl overflow-hidden flex flex-col bg-white" style={{ boxShadow: "0 8px 24px rgba(13,15,26,0.08)" }}>
    <MockBar label="adalo.com · screens · builder" />
    <div className="flex-1 grid grid-cols-2">
      <div className="p-3.5" style={{ background: "#0d1117" }}>
        {[
          [["k", 18], ["t", 36], ["x", 8]],
          [["x", 8], ["k", 24], ["s", 48]],
          [["x", 8], ["v", 18], ["s", 30], ["t", 18]],
          [["x", 16], ["k", 30], ["v", 24]],
          [["x", 8], ["t", 42], ["x", 6]],
          [["k", 20], ["s", 40]],
          [["x", 24], ["v", 30]],
          [["t", 18], ["s", 36]],
        ].map((line, i) => (
          <div key={i} className="flex gap-1.5 items-center mb-[7px]">
            <b className="text-[9px] font-mono min-w-[14px]" style={{ color: "#94a3b8" }}>{i + 1}</b>
            {line.map(([c, w], j) => <span key={j}>{codeSeg(c, w)}</span>)}
          </div>
        ))}
      </div>
      <div className="p-3.5" style={{ background: "#f8fafc" }}>
        {[
          { color: "#0d9488", w1: "80%", w2: "60%", hasSecond: true },
          { color: "#14b8a6", w1: "75%", w2: "55%", hasSecond: true },
          { color: "#5eead4", w1: "70%", w2: null, hasSecond: false },
        ].map((c, i) => (
          <div key={i} className="bg-white rounded-md p-2 mb-2" style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.05)", border: "1px solid #e2e8f0" }}>
            <div style={{ height: 6, width: "60%", background: c.color, borderRadius: 2, marginBottom: 5 }} />
            <div style={{ height: 4, width: c.w1, background: "#cbd5e1", borderRadius: 1.5, marginBottom: 3 }} />
            {c.hasSecond && <div style={{ height: 4, width: c.w2, background: "#cbd5e1", borderRadius: 1.5 }} />}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const MockupPhone = () => (
  <div className="flex items-center justify-center gap-[18px] h-full" style={{ background: "linear-gradient(135deg, #f5f3ff 0%, #ddd6fe 100%)" }}>
    <div className="relative p-2" style={{ width: 110, height: 200, background: "#0d0f1a", borderRadius: 18, boxShadow: "0 12px 40px rgba(13,148,136,0.25)" }}>
      <div className="absolute z-10" style={{ top: 4, left: "50%", transform: "translateX(-50%)", width: 36, height: 4, background: "#0d0f1a", borderRadius: "0 0 6px 6px" }} />
      <div className="h-full rounded-xl overflow-hidden px-2 py-2.5" style={{ background: "linear-gradient(160deg, #ffffff 0%, #f0fdfa 100%)" }}>
        <div style={{ height: 6, width: "50%", background: "#0d9488", borderRadius: 2, marginBottom: 8 }} />
        {[{ w1: "80%", w2: "60%", both: true }, { w1: "70%", w2: "50%", both: true }, { w1: "75%", w2: null, both: false }].map((c, i) => (
          <div key={i} className="bg-white rounded-md p-1.5 mb-1.5" style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
            <div style={{ height: 3, background: "#475569", borderRadius: 1.5, marginBottom: 3, width: "60%" }} />
            <div style={{ height: 3, background: "#cbd5e1", borderRadius: 1.5, marginBottom: 3, width: c.w1 }} />
            {c.both && <div style={{ height: 3, background: "#cbd5e1", borderRadius: 1.5, width: c.w2 }} />}
          </div>
        ))}
        <div className="flex items-center justify-center mt-1.5" style={{ background: "#0d9488", height: 18, borderRadius: 4 }}>
          <span style={{ background: "white", height: 4, width: "40%", borderRadius: 1.5 }} />
        </div>
      </div>
    </div>
    <div className="flex flex-col gap-2 max-[600px]:hidden">
      <div style={{ width: 38, height: 38, borderRadius: 10, background: "linear-gradient(135deg, #0d9488, #14b8a6)", boxShadow: "0 4px 12px rgba(13,148,136,0.15)" }} />
      <div style={{ width: 38, height: 38, borderRadius: 10, background: "linear-gradient(135deg, #017eeb, #00dbd3)", boxShadow: "0 4px 12px rgba(13,148,136,0.15)" }} />
      <div style={{ width: 38, height: 38, borderRadius: 10, background: "linear-gradient(135deg, #f59e0b, #ef4444)", boxShadow: "0 4px 12px rgba(13,148,136,0.15)" }} />
      <div style={{ width: 38, height: 38, borderRadius: 10, background: "linear-gradient(135deg, #8b5cf6, #ec4899)", boxShadow: "0 4px 12px rgba(13,148,136,0.15)" }} />
    </div>
  </div>
);

const MockupIntegrations = () => (
  <div className="w-full h-full rounded-xl overflow-hidden flex flex-col bg-white" style={{ boxShadow: "0 8px 24px rgba(13,15,26,0.08)" }}>
    <MockBar label="Integrations · 14 connected" />
    <div className="flex-1 p-4">
      <div className="grid grid-cols-3 gap-2.5 mb-3">
        <div className="rounded-md py-2.5 px-2 text-center" style={{ background: "#f0fdf4", border: "1px solid #bbf7d0" }}>
          <div className="text-[18px] font-extrabold leading-none" style={{ color: "#047857" }}>14</div>
          <div className="text-[8px] font-semibold mt-1 uppercase tracking-wider" style={{ color: "#64748b" }}>Connected</div>
        </div>
        <div className="rounded-md py-2.5 px-2 text-center" style={{ background: "#fef3c7", border: "1px solid #fde68a" }}>
          <div className="text-[18px] font-extrabold leading-none" style={{ color: "#a16207" }}>2</div>
          <div className="text-[8px] font-semibold mt-1 uppercase tracking-wider" style={{ color: "#64748b" }}>Pending</div>
        </div>
        <div className="rounded-md py-2.5 px-2 text-center" style={{ background: "#f0fdf4", border: "1px solid #bbf7d0" }}>
          <div className="text-[18px] font-extrabold leading-none" style={{ color: "#047857" }}>99%</div>
          <div className="text-[8px] font-semibold mt-1 uppercase tracking-wider" style={{ color: "#64748b" }}>Uptime</div>
        </div>
      </div>
      <div>
        {[
          { w: "70%" },
          { w: "60%" },
          { w: "80%" },
          { w: "65%" },
          { w: "75%" },
        ].map((row, i, arr) => (
          <div key={i} className="flex items-center gap-2 py-1.5" style={{ borderBottom: i === arr.length - 1 ? "none" : "1px solid #f1f5f9" }}>
            <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#10b981" }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" style={{ color: "white" }}>
                <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <b style={{ display: "block", height: 5, width: row.w, background: "#475569", borderRadius: 2 }} />
            <span style={{ display: "block", height: 4, width: "30%", background: "#cbd5e1", borderRadius: 1.5, marginLeft: "auto" }} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const MockupDualPhone = () => (
  <div className="flex items-center justify-center gap-[14px] h-full" style={{ background: "linear-gradient(135deg, #f0fdfa 0%, #99f6e4 100%)" }}>
    {[
      { headBg: "#0891b2", btnBg: "#0891b2", screenBg: "linear-gradient(160deg, #ffffff 0%, #f0fdfa 100%)", cards: [{ w: "75%" }, { w: "60%" }] },
      { headBg: "#0d9488", btnBg: "#0d9488", screenBg: "linear-gradient(160deg, #ffffff 0%, #ecfeff 100%)", cards: [{ w: "80%", w2: "60%" }, { w: "70%" }, { w: "65%" }] },
    ].map((p, idx) => (
      <div key={idx} className="relative p-2" style={{ width: 100, height: 190, background: "#0d0f1a", borderRadius: 18, boxShadow: "0 12px 40px rgba(13,148,136,0.25)" }}>
        <div className="absolute z-10" style={{ top: 4, left: "50%", transform: "translateX(-50%)", width: 32, height: 4, background: "#0d0f1a", borderRadius: "0 0 6px 6px" }} />
        <div className="h-full rounded-xl overflow-hidden px-2 py-2.5" style={{ background: p.screenBg }}>
          <div style={{ height: 6, width: "50%", background: p.headBg, borderRadius: 2, marginBottom: 8 }} />
          {p.cards.map((c, i) => (
            <div key={i} className="bg-white rounded-md p-1.5 mb-1.5" style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
              <div style={{ height: 3, background: "#475569", borderRadius: 1.5, marginBottom: 3, width: "60%" }} />
              <div style={{ height: 3, background: "#cbd5e1", borderRadius: 1.5, marginBottom: 3, width: c.w }} />
              {c.w2 && <div style={{ height: 3, background: "#cbd5e1", borderRadius: 1.5, width: c.w2 }} />}
            </div>
          ))}
          <div className="flex items-center justify-center mt-1.5" style={{ background: p.btnBg, height: 16, borderRadius: 4 }}>
            <span style={{ background: "white", height: 4, width: "40%", borderRadius: 1.5 }} />
          </div>
        </div>
      </div>
    ))}
  </div>
);

const SERVICES = [
  {
    title: "Custom Adalo App Development",
    body:
      "We leverage Adalo's visual builder to ship feature-rich mobile and web apps on an expedited timeline. From database schema to publish-ready builds — we handle the full build while you stay focused on customers.",
    features: ["Native iOS & Android app publishing", "Custom actions & database design", "Performance-tuned screen logic"],
    mockup: <MockupCodeCanvas />,
    imageBg: "linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%)",
    padMockup: true,
    reverse: false,
  },
  {
    title: "UI/UX Design for Adalo",
    body:
      "Engaging, conversion-ready interfaces built inside Adalo's component system. Our designers hand over pixel-perfect flows, reusable components, and a brand system your app can grow with — all native to the Adalo editor.",
    features: ["Mobile-first wireframes & prototypes", "Adalo-native component library", "User testing & iteration loops"],
    mockup: <MockupPhone />,
    imageBg: "linear-gradient(135deg, #f5f3ff 0%, #ddd6fe 100%)",
    padMockup: false,
    reverse: true,
  },
  {
    title: "Integration Services",
    body:
      "Seamlessly connect Adalo to the tools that run your business — Stripe, Airtable, Zapier, custom APIs, SMS, email, push. We build reliable integrations that don't break when your user count triples.",
    features: ["Stripe, Airtable, Zapier, Xano", "Custom REST APIs & webhooks", "Push notifications & SMS flows"],
    mockup: <MockupIntegrations />,
    imageBg: "linear-gradient(135deg, #ecfdf5 0%, #bbf7d0 100%)",
    padMockup: true,
    reverse: false,
  },
  {
    title: "Maintenance & Support",
    body:
      "Your app doesn't stop at launch. We monitor, iterate, and ship new features on a monthly cadence — so your Adalo app stays fast, stable, and ahead of user expectations.",
    features: ["Dedicated Adalo support engineer", "Monthly feature releases & A/B tests", "App Store & Play Store compliance"],
    mockup: <MockupDualPhone />,
    imageBg: "linear-gradient(135deg, #f0fdfa 0%, #99f6e4 100%)",
    padMockup: false,
    reverse: true,
  },
];

// ---------- Page ----------
const AdaloDevelopmentService = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ padding: "120px 0 80px" }}>
        <div className="absolute inset-0 -z-10" style={heroBg} />
        <div className="absolute inset-0 pointer-events-none" style={{ ...heroGridOverlay, zIndex: -1 }} />
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="grid gap-10 lg:gap-[60px] items-center" style={{ gridTemplateColumns: "1fr" }}>
            <div className="lg:grid" style={{ gridTemplateColumns: "1.1fr 0.9fr", display: "grid", gap: "60px", alignItems: "center" }}>
              <div>
                <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-6 text-[12px] font-semibold uppercase"
                  style={{ background: "rgba(13,148,136,0.18)", border: "1px solid rgba(94,234,212,0.35)", color: "#5eead4", letterSpacing: "0.1em" }}>
                  <IconBolt /> Adalo No-Code Development
                </span>
                <h1 className="font-extrabold mb-5 text-white" style={{ fontSize: "clamp(34px, 4vw, 54px)", letterSpacing: "-1.5px", lineHeight: 1.1 }}>
                  Launch No-Code Apps <span style={gradientTextStyle}>in Weeks — Not Months</span>
                </h1>
                <p className="mb-8" style={{ fontSize: 18, lineHeight: 1.7, color: "rgba(255,255,255,0.72)", maxWidth: 580 }}>
                  Brilworks-certified Adalo experts build and ship production-ready mobile and web apps in 4-8 weeks. 20+ apps launched for founders, marketplaces, and SMBs — no engineering team required.
                </p>
                <div className="flex flex-wrap gap-3.5 my-10">
                  <Link href="#contact"
                    className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all"
                    style={{ background: "#017eeb", color: "#fff", border: "1px solid #017eeb", padding: "16px 32px", fontSize: 16 }}>
                    Get My Free Adalo Consultation <IconArrowRight />
                  </Link>
                  <Link href="#services"
                    className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:bg-white/10"
                    style={{ background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.3)", padding: "16px 32px", fontSize: 16 }}>
                    See What We Build
                  </Link>
                </div>
                <div className="flex flex-wrap gap-[18px]" style={{ color: "rgba(255,255,255,0.65)", fontSize: 14 }}>
                  {["Free 30-min strategy call", "48-hour proposal", "4-week MVP"].map((t) => (
                    <span key={t} className="inline-flex items-center gap-2" style={{ color: "rgba(255,255,255,0.65)" }}>
                      <span style={{ color: "#5eead4" }}><IconCheck /></span>{t}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className="grid grid-cols-2 gap-4">
                  {HERO_STATS.map((s) => (
                    <div key={s.label} className="rounded-2xl transition-all"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", padding: "28px 24px", backdropFilter: "blur(10px)" }}>
                      <div className="font-extrabold leading-none mb-2" style={{ ...statValueStyle, fontSize: "clamp(32px, 3vw, 42px)", letterSpacing: "-1px" }}>{s.value}</div>
                      <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 13, fontWeight: 500, lineHeight: 1.4 }}>{s.label}</div>
                    </div>
                  ))}
                </div>
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
            <span className="inline-block mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#017eeb" }}>Our Adalo Offerings</span>
            <h2 className="font-extrabold" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0d0f1a" }}>Your Adalo Partner — From Idea to App Store</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>Tailored Adalo development for founders and product teams who want to ship fast without writing code — backed by engineers who know both worlds.</p>
          </div>

          {SERVICES.map((svc) => (
            <div key={svc.title} className="grid items-center gap-8 lg:gap-[60px] py-10 lg:py-12"
              style={{ gridTemplateColumns: "1fr" }}>
              <div className={`grid items-center gap-8 lg:gap-[60px] grid-cols-1 lg:grid-cols-2 ${svc.reverse ? "lg:[direction:rtl]" : ""}`}>
                <div className={`${svc.reverse ? "lg:[direction:ltr]" : ""}`} style={{ direction: "ltr" }}>
                  <div className="w-full overflow-hidden rounded-2xl relative"
                    style={{
                      aspectRatio: "4 / 3",
                      padding: svc.padMockup ? 24 : 0,
                      background: svc.imageBg,
                      border: "1px solid #e5e7eb",
                    }}>
                    {svc.mockup}
                  </div>
                </div>
                <div className={`${svc.reverse ? "lg:[direction:ltr]" : ""}`} style={{ direction: "ltr" }}>
                  <h3 className="font-bold mb-4" style={{ fontSize: "clamp(22px, 2.4vw, 28px)", letterSpacing: "-0.3px", lineHeight: 1.3, color: "#0d0f1a" }}>{svc.title}</h3>
                  <p className="mb-5" style={{ fontSize: 16, lineHeight: 1.7, color: "#6b7280" }}>{svc.body}</p>
                  <ul className="list-none">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 mb-2.5" style={{ fontSize: 14, color: "#212121" }}>
                        <span style={{ color: "#017eeb", flexShrink: 0, marginTop: 2 }}><IconCheck /></span>{f}
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
          <h3 className="font-extrabold mb-3.5" style={{ fontSize: "clamp(24px, 3vw, 36px)", color: "#fff", lineHeight: 1.2, letterSpacing: "-0.5px" }}>Your App, Launched in 4 Weeks. Let&apos;s Start Today.</h3>
          <p className="mb-7" style={{ color: "rgba(255,255,255,0.85)", fontSize: 16, lineHeight: 1.7 }}>Book a free 30-minute Adalo consultation. We&apos;ll map your MVP, share a fixed-scope quote, and outline a timeline — no commitment.</p>
          <Link href="#contact"
            className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:!bg-[#0d0f1a] hover:!text-white hover:!border-[#0d0f1a] mt-5"
            style={{ background: "#fff", color: "#017eeb", border: "1px solid #fff", padding: "16px 32px", fontSize: 16 }}>
            Let&apos;s Get Started
          </Link>
        </div>
      </section>

      {/* WHY BRILWORKS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="text-center mx-auto mb-14" style={{ maxWidth: 720 }}>
            <span className="inline-block mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#017eeb" }}>Why Brilworks</span>
            <h2 className="font-extrabold" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0d0f1a" }}>Built by Adalo Experts Who&apos;ve Shipped 20+ Apps</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>We combine deep Adalo expertise with engineering rigor — so your no-code app ships fast and scales when users show up.</p>
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
            <span className="inline-block mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#5eead4" }}>Client Stories</span>
            <h2 className="font-extrabold text-white" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15 }}>What Founders Say About Working With Us</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "rgba(255,255,255,0.62)" }}>Real words from founders, product managers, and non-technical builders who launched with Brilworks.</p>
          </div>
          <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="rounded-2xl"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", padding: "32px 28px", backdropFilter: "blur(10px)" }}>
                <div className="flex gap-0.5 mb-4" style={{ color: "#facc15" }}>
                  {[0, 1, 2, 3, 4].map((i) => <IconStarFilled key={i} />)}
                </div>
                <p className="mb-6" style={{ color: "rgba(255,255,255,0.85)", fontSize: 15, lineHeight: 1.7 }}>&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="rounded-full flex items-center justify-center font-bold text-white"
                    style={{ width: 44, height: 44, background: "linear-gradient(135deg, #0d9488, #5eead4)", fontSize: 16 }}>
                    {t.initials}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-semibold" style={{ fontSize: 14 }}>{t.name}</span>
                    <span style={{ color: "rgba(255,255,255,0.55)", fontSize: 12 }}>{t.role}</span>
                    <span className="mt-1.5" style={{ fontSize: 12, fontWeight: 600, color: "#5eead4" }}>{t.metric}</span>
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
            <span className="inline-block mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#017eeb" }}>Industries We Serve</span>
            <h2 className="font-extrabold" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0d0f1a" }}>Adalo Apps Built for No-Code-Native Verticals</h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>Not generalists — we ship Adalo apps for founders and teams in the spaces where no-code wins: speed, iteration, and focused scope.</p>
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
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>Everything founders typically ask before kicking off an Adalo build with us.</p>
          </div>
          <div className="mx-auto" style={{ maxWidth: 860 }}>
            {FAQ.map((item, i) => (
              <details key={i} className="group overflow-hidden mb-3 transition-all"
                style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12 }}>
                <summary className="list-none flex items-center justify-between gap-4 cursor-pointer"
                  style={{ padding: "22px 28px", fontWeight: 600, fontSize: 16, color: "#0d0f1a" }}>
                  <span>{item.q}</span>
                  <span className="transition-transform group-open:rotate-45" style={{ color: "#017eeb", fontSize: 24, fontWeight: 400, lineHeight: 1 }}>+</span>
                </summary>
                <div style={{ padding: "0 28px 24px", color: "#6b7280", fontSize: 15, lineHeight: 1.7 }}>{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM (preserved component) */}
      <div id="contact">
        <SolutionContactForm
          title="Ready to Launch Your App?"
          description="You're one conversation away from turning your idea into a shipped Adalo app. Tell us what you're building — we'll map an MVP, timeline, and fixed quote."
          messageRequired={false}
          submitLabel="Get My Free Adalo Consultation"
          benefits={[
            "Free 30-min strategy call with a senior Adalo expert",
            "Detailed MVP scope & fixed quote within 48 hours",
            "4-week MVP delivery model",
            "NDA-ready, full IP ownership on handover",
            "Adalo Expert Partner · AWS Consulting Partner",
          ]}
        />
      </div>
    </>
  );
};

export default AdaloDevelopmentService;
