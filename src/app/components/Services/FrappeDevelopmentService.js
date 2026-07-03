"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import GradientFAQAccordion from "../Common/GradientFAQAccordion";
import {
  Check,
  X,
  ArrowRight,
  Star,
  Layers,
  ShieldCheck,
  Database,
  Award,
  Code2,
  LayoutDashboard,
  Users,
  CheckCircle,
  Clock,
  MessageSquare,
  Truck,
  ShoppingCart,
  Building2,
  Heart,
  Briefcase,
  Blocks,
  Hospital,
} from "lucide-react";

const SolutionContactForm = dynamic(
  () => import("../Solution/SolutionContactForm"),
);

// ---------- Inline icon primitives (duotone) ----------
const IconCheck = ({ size = 16, className = "" }) => (
  <Check
    size={size}
    className={className}
    strokeWidth={2.2}
    aria-hidden="true"
  />
);

const IconArrowRight = ({ size = 16 }) => (
  <ArrowRight size={size} strokeWidth={2} aria-hidden="true" />
);

const IconStarFilled = ({ size = 16 }) => (
  <Star size={size} fill="currentColor" strokeWidth={0} aria-hidden="true" />
);

const IconStack = () => <Layers size={14} aria-hidden="true" />;

const IconShield = ({ color = "#017eeb" }) => (
  <ShieldCheck size={18} color={color} strokeWidth={1.8} aria-hidden="true" />
);

const IconDatabase = ({ color = "#017eeb" }) => (
  <Database size={18} aria-hidden="true" color={color} />
);

const IconCertificate = ({ color = "#017eeb" }) => (
  <Award size={18} aria-hidden="true" color={color} />
);

const IconOpenSource = ({ color = "#017eeb" }) => (
  <Code2 size={18} aria-hidden="true" color={color} />
);

// ---------- Style tokens ----------
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
  { icon: <IconShield />, label: "AWS Consulting Partner" },
  { icon: <IconDatabase />, label: "50+ ERPNext Implementations" },
  { icon: <IconCertificate />, label: "Certified Frappe Partner" },
  { icon: <IconOpenSource />, label: "Open-Source Advantage" },
];

const HERO_STATS = [
  { value: "50+", label: "ERPNext Implementations" },
  { value: "120+", label: "Custom Modules Built" },
  { value: "30+", label: "ERP Migrations Delivered" },
  { value: "98%", label: "Client Satisfaction" },
];

const BENEFITS = [
  {
    title: "Custom-Fit Solutions",
    tint: "#e8f0fd",
    body: "We build custom applications and DocTypes precisely to your workflows — giving you an ERP that matches your business, not the other way around.",
    icon: (
      <LayoutDashboard
        size={32}
        color="#017eeb"
        strokeWidth={1.8}
        aria-hidden="true"
      />
    ),
  },
  {
    title: "Frappe Expertise",
    tint: "#ede9fe",
    body: "Our team is deep in Frappe and ERPNext — with 50+ implementations and 120+ modules shipped across manufacturing, retail, services, and healthcare.",
    icon: (
      <Users size={32} color="#4f46e5" strokeWidth={1.8} aria-hidden="true" />
    ),
  },
  {
    title: "Seamless Integrations",
    tint: "#d1fae5",
    body: "We break data silos by connecting your Frappe system to payment, logistics, CRM, tax, and BI platforms — with bidirectional sync and audit trails.",
    icon: (
      <Blocks size={32} color="#10b981" strokeWidth={1.8} aria-hidden="true" />
    ),
  },
  {
    title: "Client-Centric Delivery",
    tint: "#ccfbf1",
    body: "We work closely with your operations, finance, and IT stakeholders to ensure the ERP actually gets adopted — not just deployed and forgotten.",
    icon: (
      <CheckCircle
        size={32}
        color="#0d9488"
        strokeWidth={1.8}
        aria-hidden="true"
      />
    ),
  },
  {
    title: "Round-the-Clock Support",
    tint: "#cffafe",
    body: "Handle ongoing Frappe support and maintenance with named engineers and defined SLAs — so you can focus on running your business.",
    icon: (
      <Clock size={32} color="#0891b2" strokeWidth={1.8} aria-hidden="true" />
    ),
  },
  {
    title: "Personalized Attention",
    tint: "#dbeafe",
    body: "A dedicated support team that understands your industry, your reports, and your customizations — not a revolving-door ticket queue.",
    icon: (
      <MessageSquare
        size={32}
        color="#1e40af"
        strokeWidth={1.8}
        aria-hidden="true"
      />
    ),
  },
];

const TESTIMONIALS = [
  {
    initials: "DV",
    name: "David Velasquez",
    role: "CEO, Distribution & Logistics Group",
    quote:
      "Brilworks moved us off a crumbling legacy ERP onto ERPNext in 14 weeks with zero downtime. Our cross-branch inventory visibility went from next-day to real-time. Best strategic decision we made this year.",
  },
  {
    initials: "LB",
    name: "Liz Bullen",
    role: "CFO, Mid-Market Manufacturer",
    quote:
      "We were paying six figures a year in NetSuite licenses for features we didn't use. Brilworks rebuilt our finance stack on ERPNext, matched every custom report, and cut our ERP TCO by 62% in year one.",
  },
  {
    initials: "PG",
    name: "Priya Gupta",
    role: "Operations Director, Manufacturing Group",
    quote:
      "The custom manufacturing module they built handles our BOMs, subcontracting, and multi-warehouse stock the way we actually work. Order-to-shipment time dropped 34% and our floor team adopted it on week one.",
  },
];

const HONORS = [
  { label: "AWS Consulting Partner", icon: <IconShield /> },
  {
    label: "Clutch Global Award 2025",
    icon: (
      <Star size={20} color="#017eeb" strokeWidth={1.8} aria-hidden="true" />
    ),
  },
  {
    label: "GoodFirms Top 2025-26",
    icon: (
      <Award size={20} color="#017eeb" strokeWidth={1.8} aria-hidden="true" />
    ),
  },
  {
    label: "SelectedFirms Top 10 Agency",
    icon: (
      <LayoutDashboard
        size={20}
        color="#017eeb"
        strokeWidth={1.8}
        aria-hidden="true"
      />
    ),
  },
  {
    label: "Certified Frappe Partner",
    icon: (
      <Star size={20} color="#017eeb" strokeWidth={1.8} aria-hidden="true" />
    ),
  },
];

const INDUSTRIES = [
  {
    label: "Manufacturing",
    href: "/industry/manufacturing-software-development-services/",
    icon: (
      <Building2
        size={32}
        color="#0d9488"
        strokeWidth={1.8}
        aria-hidden="true"
      />
    ),
  },
  {
    label: "Retail",
    href: "/industry/e-commerce-app-development/",
    icon: (
      <ShoppingCart
        size={32}
        color="#10b981"
        strokeWidth={1.8}
        aria-hidden="true"
      />
    ),
  },
  {
    label: "Distribution",
    href: "/industry/fleet-management-software-development/",
    icon: (
      <Truck size={32} color="#0891b2" strokeWidth={1.8} aria-hidden="true" />
    ),
  },
  {
    label: "Professional Services",
    href: "/contact-us/",
    icon: (
      <Briefcase
        size={32}
        color="#4f46e5"
        strokeWidth={1.8}
        aria-hidden="true"
      />
    ),
  },
  {
    label: "Non-Profit",
    href: "/application-development-services/",
    icon: (
      <Heart size={32} color="#f59e0b" strokeWidth={1.8} aria-hidden="true" />
    ),
  },
  {
    label: "Healthcare",
    href: "/industry/healthcare-software-development/",
    icon: (
      <Hospital
        size={32}
        color="#ef4444"
        strokeWidth={1.8}
        aria-hidden="true"
      />
    ),
  },
];

const FAQ = [
  {
    q: "What is Frappe and how does it relate to ERPNext?",
    a: "Frappe is a full-stack, open-source framework for rapid application development. ERPNext is the flagship ERP built on Frappe — covering accounting, inventory, manufacturing, HR, CRM, and more. We build both: custom Frappe applications and extensions on top of ERPNext.",
  },
  {
    q: "Can you migrate us off SAP, NetSuite, Tally, or QuickBooks?",
    a: "Yes — we have delivered 30+ ERP migrations including SAP Business One, NetSuite, Tally, QuickBooks, and Odoo. Our migration playbook covers data mapping, reconciliation, parallel-run validation, and a zero-downtime cutover. Typical migrations complete in 8-16 weeks.",
  },
  {
    q: "Self-hosted, Frappe Cloud, or AWS — which hosting should we pick?",
    a: "Depends on scale, compliance, and IT capacity. We help you choose between self-hosted (max control), Frappe Cloud (zero-ops managed), or a private AWS deployment we architect end-to-end. Most of our clients run on AWS under our managed hosting.",
  },
  {
    q: "How do you customize ERPNext without breaking future upgrades?",
    a: "We never fork the core. All customizations ship as separate Frappe apps with their own DocTypes, hooks, and migrations. This means every ERPNext community release applies cleanly — your customizations survive upgrades and can be versioned, tested, and rolled back independently.",
  },
  {
    q: "What does total cost of ownership look like vs. SAP/NetSuite?",
    a: "ERPNext has no per-user licensing. You pay for implementation, customization, hosting, and support. Most mid-market clients see 50-70% lower year-one TCO vs. SAP B1 or NetSuite, and 3-5 year TCO savings are even larger because licensing doesn't scale with headcount.",
  },
  {
    q: "What kind of support do you offer after go-live?",
    a: "We offer continuous 24x7 support with defined SLAs, named engineers, monthly health checks, backups, ERPNext version upgrades, and incremental module enhancements as your business evolves. Most clients stay on a monthly support retainer for 12+ months post go-live.",
  },
  {
    q: "How do you ensure security and data ownership?",
    a: "You own 100% of your code, data, and infrastructure. We follow Frappe security best practices — role-based permissions, field-level access, audit trails, encrypted backups, and secure API gateways. For regulated industries (healthcare, finance) we add HIPAA, SOC 2, or GDPR controls on request.",
  },
];

// ---------- Service Mockups ----------
const MockBar = ({ label }) => (
  <div
    className="flex items-center gap-1.5 px-3.5 py-2.5"
    style={{ background: "#f8fafc", borderBottom: "1px solid #eef2f7" }}
  >
    <span
      className="inline-block w-2 h-2 rounded-full"
      style={{ background: "#ef4444" }}
    />
    <span
      className="inline-block w-2 h-2 rounded-full"
      style={{ background: "#facc15" }}
    />
    <span
      className="inline-block w-2 h-2 rounded-full"
      style={{ background: "#10b981" }}
    />
    <em
      className="not-italic ml-3 text-[11px] font-semibold"
      style={{ color: "#94a3b8", letterSpacing: "0.02em" }}
    >
      {label}
    </em>
  </div>
);

// Stats dashboard mockup (used for ERPNext dashboards: Inventory, P&L, etc.)
const MockupStatsDashboard = ({ label, stats, rows }) => (
  <div
    className="w-full h-full rounded-xl overflow-hidden flex flex-col bg-white"
    style={{ boxShadow: "0 8px 24px rgba(13,15,26,0.08)" }}
  >
    <MockBar label={label} />
    <div className="flex-1 p-4">
      <div className="grid grid-cols-3 gap-2.5 mb-3">
        {stats.map((s, i) => {
          const themes = {
            ok: { bg: "#f0fdf4", border: "#bbf7d0", color: "#047857" },
            warn: { bg: "#fef3c7", border: "#fde68a", color: "#a16207" },
            err: { bg: "#fee2e2", border: "#fecaca", color: "#b91c1c" },
          };
          const t = themes[s.tone || "ok"];
          return (
            <div
              key={i}
              className="rounded-md py-2.5 px-2 text-center"
              style={{ background: t.bg, border: `1px solid ${t.border}` }}
            >
              <div
                className="text-[16px] font-extrabold leading-none"
                style={{ color: t.color }}
              >
                {s.n}
              </div>
              <div
                className="text-[8px] font-semibold mt-1 uppercase tracking-wider"
                style={{ color: "#64748b" }}
              >
                {s.lb}
              </div>
            </div>
          );
        })}
      </div>
      <div>
        {rows.map((row, i, arr) => (
          <div
            key={i}
            className="flex items-center gap-2 py-1.5"
            style={{
              borderBottom: i === arr.length - 1 ? "none" : "1px solid #f1f5f9",
            }}
          >
            <div
              className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: row.pass ? "#10b981" : "#ef4444" }}
            >
              {row.pass ? (
                <Check size={10} color="white" strokeWidth={3} />
              ) : (
                <X size={10} color="white" strokeWidth={3} />
              )}
            </div>
            <b
              style={{
                display: "block",
                height: 5,
                width: row.w,
                background: "#475569",
                borderRadius: 2,
              }}
            />
            <span
              style={{
                display: "block",
                height: 4,
                width: "30%",
                background: "#cbd5e1",
                borderRadius: 1.5,
                marginLeft: "auto",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Code + Canvas mockup (used for DocType engineering)
const codeSeg = (cls, w) => {
  const colors = {
    k: "#c084fc",
    s: "#86efac",
    v: "#fbbf24",
    t: "#67e8f9",
    x: "#475569",
  };
  return (
    <span
      className="inline-block rounded-sm"
      style={{ height: 7, width: w, background: colors[cls] }}
    />
  );
};

const MockupCodeCanvas = () => (
  <div
    className="w-full h-full rounded-xl overflow-hidden flex flex-col bg-white"
    style={{ boxShadow: "0 8px 24px rgba(13,15,26,0.08)" }}
  >
    <MockBar label="doctype/sales_order.json · form.py" />
    <div className="flex-1 grid grid-cols-2">
      <div className="p-3.5" style={{ background: "#0d1117" }}>
        {[
          [
            ["k", 18],
            ["t", 36],
            ["x", 8],
          ],
          [
            ["x", 8],
            ["k", 24],
            ["s", 48],
          ],
          [
            ["x", 8],
            ["v", 18],
            ["s", 30],
            ["t", 18],
          ],
          [
            ["x", 16],
            ["k", 30],
            ["v", 24],
          ],
          [
            ["x", 8],
            ["t", 42],
            ["x", 6],
          ],
          [
            ["k", 20],
            ["s", 40],
          ],
          [
            ["x", 24],
            ["v", 30],
          ],
          [
            ["t", 18],
            ["s", 36],
          ],
          [
            ["k", 22],
            ["v", 20],
            ["s", 26],
          ],
        ].map((line, i) => (
          <div key={i} className="flex gap-1.5 items-center mb-[7px]">
            <b
              className="text-[9px] font-mono min-w-[14px]"
              style={{ color: "#94a3b8" }}
            >
              {i + 1}
            </b>
            {line.map(([c, w], j) => (
              <span key={j}>{codeSeg(c, w)}</span>
            ))}
          </div>
        ))}
      </div>
      <div className="p-3.5" style={{ background: "#f8fafc" }}>
        {[
          { color: "#4f46e5", w1: "80%", w2: "60%", hasSecond: true },
          { color: "#7c3aed", w1: "75%", w2: "55%", hasSecond: true },
          { color: "#a855f7", w1: "70%", w2: null, hasSecond: false },
          { color: "#4f46e5", w1: "65%", w2: null, hasSecond: false },
        ].map((c, i) => (
          <div
            key={i}
            className="bg-white rounded-md p-2 mb-2"
            style={{
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
              border: "1px solid #e2e8f0",
            }}
          >
            <div
              style={{
                height: 6,
                width: "60%",
                background: c.color,
                borderRadius: 2,
                marginBottom: 5,
              }}
            />
            <div
              style={{
                height: 4,
                width: c.w1,
                background: "#cbd5e1",
                borderRadius: 1.5,
                marginBottom: 3,
              }}
            />
            {c.hasSecond && (
              <div
                style={{
                  height: 4,
                  width: c.w2,
                  background: "#cbd5e1",
                  borderRadius: 1.5,
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Phone mockup (used for integrations / mobile)
const MockupPhone = () => (
  <div
    className="flex items-center justify-center gap-[18px] h-full"
    style={{ background: "linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%)" }}
  >
    <div
      className="relative p-2"
      style={{
        width: 110,
        height: 200,
        background: "#0d0f1a",
        borderRadius: 18,
        boxShadow: "0 12px 40px rgba(13,148,136,0.25)",
      }}
    >
      <div
        className="absolute z-10"
        style={{
          top: 4,
          left: "50%",
          transform: "translateX(-50%)",
          width: 36,
          height: 4,
          background: "#0d0f1a",
          borderRadius: "0 0 6px 6px",
        }}
      />
      <div
        className="h-full rounded-xl overflow-hidden px-2 py-2.5"
        style={{
          background: "linear-gradient(160deg, #ffffff 0%, #f0fdfa 100%)",
        }}
      >
        <div
          style={{
            height: 6,
            width: "50%",
            background: "#0d9488",
            borderRadius: 2,
            marginBottom: 8,
          }}
        />
        {[
          { w1: "78%", w2: "58%", both: true },
          { w1: "70%", w2: "50%", both: true },
          { w1: "75%", w2: null, both: false },
        ].map((c, i) => (
          <div
            key={i}
            className="bg-white rounded-md p-1.5 mb-1.5"
            style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}
          >
            <div
              style={{
                height: 3,
                background: "#475569",
                borderRadius: 1.5,
                marginBottom: 3,
                width: "60%",
              }}
            />
            <div
              style={{
                height: 3,
                background: "#cbd5e1",
                borderRadius: 1.5,
                marginBottom: 3,
                width: c.w1,
              }}
            />
            {c.both && (
              <div
                style={{
                  height: 3,
                  background: "#cbd5e1",
                  borderRadius: 1.5,
                  width: c.w2,
                }}
              />
            )}
          </div>
        ))}
        <div
          className="flex items-center justify-center mt-1.5"
          style={{ background: "#0d9488", height: 18, borderRadius: 4 }}
        >
          <span
            style={{
              background: "white",
              height: 4,
              width: "40%",
              borderRadius: 1.5,
            }}
          />
        </div>
      </div>
    </div>
    <div className="flex flex-col gap-2 max-[600px]:hidden">
      <div
        style={{
          width: 38,
          height: 38,
          borderRadius: 10,
          background: "linear-gradient(135deg, #0d9488, #14b8a6)",
          boxShadow: "0 4px 12px rgba(13,148,136,0.15)",
        }}
      />
      <div
        style={{
          width: 38,
          height: 38,
          borderRadius: 10,
          background: "linear-gradient(135deg, #017eeb, #00dbd3)",
          boxShadow: "0 4px 12px rgba(13,148,136,0.15)",
        }}
      />
      <div
        style={{
          width: 38,
          height: 38,
          borderRadius: 10,
          background: "linear-gradient(135deg, #f59e0b, #ef4444)",
          boxShadow: "0 4px 12px rgba(13,148,136,0.15)",
        }}
      />
      <div
        style={{
          width: 38,
          height: 38,
          borderRadius: 10,
          background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
          boxShadow: "0 4px 12px rgba(13,148,136,0.15)",
        }}
      />
    </div>
  </div>
);

// Multi-device mockup (laptop + tablet) for support / multi-channel
const MockupMultiDevice = () => (
  <div
    className="grid gap-3.5 p-3.5 h-full items-center"
    style={{
      gridTemplateColumns: "2fr 1fr",
      background: "linear-gradient(135deg, #ecfeff 0%, #cffafe 100%)",
    }}
  >
    <div
      style={{
        background: "#0d0f1a",
        borderRadius: "8px 8px 4px 4px",
        padding: "6px 6px 0",
      }}
    >
      <div
        className="bg-white p-2"
        style={{ borderRadius: "4px 4px 0 0", minHeight: 110 }}
      >
        <div
          style={{
            height: 8,
            width: "40%",
            background: "#0891b2",
            borderRadius: 2,
            marginBottom: 8,
          }}
        />
        <div className="grid grid-cols-3 gap-1 mb-2">
          <div
            style={{
              height: 24,
              borderRadius: 3,
              background: "linear-gradient(135deg, #0891b2, #06b6d4)",
            }}
          />
          <div
            style={{
              height: 24,
              borderRadius: 3,
              background: "#ecfeff",
              border: "1px solid #cffafe",
            }}
          />
          <div
            style={{
              height: 24,
              borderRadius: 3,
              background: "#ecfeff",
              border: "1px solid #cffafe",
            }}
          />
        </div>
        {["80%", "65%", "75%", "55%"].map((w, i) => (
          <div
            key={i}
            style={{
              height: 4,
              background: "#e2e8f0",
              borderRadius: 1.5,
              marginBottom: 3,
              width: w,
            }}
          />
        ))}
      </div>
      <div
        style={{
          height: 6,
          background: "#1e293b",
          borderRadius: "0 0 8px 8px",
        }}
      />
    </div>
    <div style={{ background: "#0d0f1a", borderRadius: 10, padding: 5 }}>
      <div
        className="p-2"
        style={{
          background: "linear-gradient(160deg, white, #ecfeff)",
          borderRadius: 6,
          minHeight: 90,
        }}
      >
        <div
          style={{
            height: 5,
            width: "50%",
            background: "#0891b2",
            borderRadius: 2,
            marginBottom: 6,
          }}
        />
        <div
          style={{
            height: 3,
            background: "#cbd5e1",
            borderRadius: 1.5,
            marginBottom: 3,
          }}
        />
        <div
          style={{
            height: 3,
            background: "#cbd5e1",
            borderRadius: 1.5,
            marginBottom: 3,
            width: "60%",
          }}
        />
        <div
          style={{
            height: 3,
            background: "#cbd5e1",
            borderRadius: 1.5,
            marginBottom: 3,
          }}
        />
        <div
          style={{
            height: 3,
            background: "#cbd5e1",
            borderRadius: 1.5,
            marginBottom: 3,
            width: "60%",
          }}
        />
        <div
          style={{
            height: 12,
            width: "50%",
            background: "#0891b2",
            borderRadius: 3,
            marginTop: 6,
          }}
        />
      </div>
    </div>
  </div>
);

const SERVICES = [
  {
    title: "Frappe Application Development",
    body: "From requirements analysis to custom app design, thorough testing, smooth deployment, and ongoing support — we deliver production-grade Frappe apps tailored exactly to how your business actually operates.",
    features: [
      "Custom DocTypes, workflows, and dashboards",
      "Role-based permissions & multi-company",
      "Upgrade-safe architecture — no forked core",
    ],
    mockup: (
      <MockupStatsDashboard
        label="ERPNext · Stock & Inventory"
        stats={[
          { n: "14,820", lb: "SKUs", tone: "ok" },
          { n: "42", lb: "Low Stock", tone: "warn" },
          { n: "3", lb: "Out of Stock", tone: "err" },
        ]}
        rows={[
          { pass: true, w: "70%" },
          { pass: true, w: "70%" },
          { pass: true, w: "82%" },
          { pass: false, w: "60%" },
          { pass: true, w: "75%" },
        ]}
      />
    ),
    imageBg: "linear-gradient(135deg, #f0f7ff 0%, #e0ecfc 100%)",
    padMockup: true,
    reverse: false,
  },
  {
    title: "Frappe ERP Customization",
    body: "We tune ERPNext to match your workflows, data, and reporting — safely migrating from legacy systems and optimizing for performance. No forked core, no broken upgrades. Just a custom ERP that still takes every community release cleanly.",
    features: [
      "Custom DocType & field engineering",
      "Secure data migration from SAP / Tally / QuickBooks",
      "Performance tuning & database indexing",
    ],
    mockup: <MockupCodeCanvas />,
    imageBg: "linear-gradient(135deg, #f5f3ff 0%, #ddd6fe 100%)",
    padMockup: true,
    reverse: true,
  },
  {
    title: "Frappe Module Development",
    body: "Missing a feature? We fill the gap. We start with a Functionality Gap Analysis, then design, build, and ship a custom Frappe module — from manufacturing BOMs and subscription billing to multi-branch inventory and compliance reporting.",
    features: [
      "Gap analysis against your as-is workflow",
      "Custom reports, print formats, dashboards",
      "Published as a Frappe app — versioned & upgrade-safe",
    ],
    mockup: (
      <MockupStatsDashboard
        label="ERPNext · Profit & Loss · FY 2026"
        stats={[
          { n: "$4.8M", lb: "Revenue", tone: "ok" },
          { n: "$3.1M", lb: "Expenses", tone: "warn" },
          { n: "$1.7M", lb: "Net Profit", tone: "ok" },
        ]}
        rows={[
          { pass: true, w: "70%" },
          { pass: true, w: "68%" },
          { pass: true, w: "78%" },
          { pass: true, w: "55%" },
          { pass: true, w: "72%" },
        ]}
      />
    ),
    imageBg: "linear-gradient(135deg, #ecfdf5 0%, #bbf7d0 100%)",
    padMockup: true,
    reverse: false,
  },
  {
    title: "Frappe Integration Services",
    body: "We connect Frappe to your tax engines, payment gateways, logistics APIs, eCommerce platforms, and BI tools. Secure, observable integrations with data mapping and synchronization that eliminate silos and double-entry.",
    features: [
      "Shopify, Stripe, QuickBooks, Zoho, HubSpot",
      "Tax & compliance APIs (GST, VAT, Avalara)",
      "Two-way sync, retry queues, audit logs",
    ],
    mockup: <MockupPhone />,
    imageBg: "linear-gradient(135deg, #f0fdfa 0%, #99f6e4 100%)",
    padMockup: false,
    reverse: true,
  },
  {
    title: "Frappe Support & Maintenance",
    body: "Proactive system monitoring, timely updates, and prompt bug fixes keep your ERP fast, secure, and always up-to-date. Round-the-clock support with named engineers — not tickets lost in a queue.",
    features: [
      "24x7 monitoring, backups, version upgrades",
      "Priority bug fixes with defined SLAs",
      "Continuous module enhancements as you grow",
    ],
    mockup: <MockupMultiDevice />,
    imageBg: "linear-gradient(135deg, #ecfeff 0%, #a5f3fc 100%)",
    padMockup: false,
    reverse: false,
  },
];

// ---------- Page ----------
const FrappeDevelopmentService = () => {
  return (
    <>
      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{ padding: "120px 0 80px" }}
      >
        <div className="absolute inset-0 -z-10" style={heroBg} />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ ...heroGridOverlay, zIndex: -1 }}
        />
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div
            className="grid gap-10 lg:gap-[60px] items-center"
            style={{ gridTemplateColumns: "1fr" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-[60px] items-center">
              <div>
                <span
                  className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-6 text-[12px] font-semibold uppercase"
                  style={{
                    background: "rgba(26,92,204,0.15)",
                    border: "1px solid rgba(26,92,204,0.3)",
                    color: "#00b4d8",
                    letterSpacing: "0.1em",
                  }}
                >
                  <IconStack /> Frappe &amp; ERPNext Development
                </span>
                <h1
                  className="font-extrabold mb-5 text-white"
                  style={{
                    fontSize: "clamp(34px, 4vw, 54px)",
                    letterSpacing: "-1.5px",
                    lineHeight: 1.1,
                  }}
                >
                  Custom ERP Built on Frappe —{" "}
                  <span style={gradientTextStyle}>
                    No Vendor Lock-in, No Per-User Fees
                  </span>
                </h1>
                <p
                  className="mb-8"
                  style={{
                    fontSize: 18,
                    lineHeight: 1.7,
                    color: "rgba(255,255,255,0.72)",
                    maxWidth: 580,
                  }}
                >
                  We design, build, and deploy production-grade ERP systems on
                  Frappe and ERPNext. 50+ implementations, 120+ custom DocTypes
                  and modules shipped, and clean migrations off QuickBooks,
                  Tally, SAP B1, and Odoo — delivered in 8-16 weeks.
                </p>
                <div className="flex flex-wrap gap-3.5 my-10">
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all"
                    style={{
                      background: "#017eeb",
                      color: "#fff",
                      border: "1px solid #017eeb",
                      padding: "16px 32px",
                      fontSize: 16,
                    }}
                  >
                    Get My Free Frappe Consultation <IconArrowRight />
                  </Link>
                  <Link
                    href="#services"
                    className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:bg-white/10"
                    style={{
                      background: "transparent",
                      color: "#fff",
                      border: "1px solid rgba(255,255,255,0.3)",
                      padding: "16px 32px",
                      fontSize: 16,
                    }}
                  >
                    See What We Build
                  </Link>
                </div>
                <div
                  className="flex flex-wrap gap-[18px]"
                  style={{ color: "rgba(255,255,255,0.65)", fontSize: 14 }}
                >
                  {[
                    "Free 30-min ERP assessment",
                    "48-hour scoping proposal",
                    "You own the code",
                  ].map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-2"
                      style={{ color: "rgba(255,255,255,0.65)" }}
                    >
                      <span style={{ color: "#00dbd3" }}>
                        <IconCheck />
                      </span>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="grid grid-cols-2 gap-4">
                  {HERO_STATS.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-2xl transition-all"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        padding: "28px 24px",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      <div
                        className="font-extrabold leading-none mb-2"
                        style={{
                          ...statValueStyle,
                          fontSize: "clamp(32px, 3vw, 42px)",
                          letterSpacing: "-1px",
                        }}
                      >
                        {s.value}
                      </div>
                      <div
                        style={{
                          color: "rgba(255,255,255,0.65)",
                          fontSize: 13,
                          fontWeight: 500,
                          lineHeight: 1.4,
                        }}
                      >
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section
        aria-label="Trust indicators"
        style={{
          background: "#fafafa",
          borderBottom: "1px solid #e5e7eb",
          padding: "28px 0",
        }}
      >
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div
            className="flex flex-wrap items-center justify-center"
            style={{ gap: "12px 40px" }}
          >
            {TRUST.map((t) => (
              <div
                key={t.label}
                className="inline-flex items-center gap-2 whitespace-nowrap"
                style={{ fontSize: 13, fontWeight: 600, color: "#212121" }}
              >
                {t.icon}
                {t.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="py-16 md:py-24"
        style={{ background: "#f2f9fe" }}
      >
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="text-center mx-auto mb-14" style={{ maxWidth: 720 }}>
            <span
              className="inline-block mb-4"
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#017eeb",
              }}
            >
              What We Build
            </span>
            <h2
              className="font-extrabold"
              style={{
                fontSize: "clamp(28px, 3.2vw, 42px)",
                letterSpacing: "-1px",
                lineHeight: 1.15,
                color: "#0d0f1a",
              }}
            >
              Frappe Development Services We Offer
            </h2>
            <p
              className="mt-4"
              style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}
            >
              End-to-end Frappe and ERPNext engineering — from custom DocTypes
              and modules to full ERP rollouts, migrations, and post-launch
              support.
            </p>
          </div>

          {SERVICES.map((svc) => (
            <div
              key={svc.title}
              className="grid items-center gap-8 lg:gap-[60px] py-10 lg:py-12"
              style={{ gridTemplateColumns: "1fr" }}
            >
              <div
                className={`grid items-center gap-8 lg:gap-[60px] grid-cols-1 lg:grid-cols-2 ${svc.reverse ? "lg:[direction:rtl]" : ""}`}
              >
                <div
                  className={`${svc.reverse ? "lg:[direction:ltr]" : ""}`}
                  style={{ direction: "ltr" }}
                >
                  <div
                    className="w-full overflow-hidden rounded-2xl relative"
                    style={{
                      aspectRatio: "4 / 3",
                      padding: svc.padMockup ? 24 : 0,
                      background: svc.imageBg,
                      border: "1px solid #e5e7eb",
                    }}
                  >
                    {svc.mockup}
                  </div>
                </div>
                <div
                  className={`${svc.reverse ? "lg:[direction:ltr]" : ""}`}
                  style={{ direction: "ltr" }}
                >
                  <h3
                    className="font-bold mb-4"
                    style={{
                      fontSize: "clamp(22px, 2.4vw, 28px)",
                      letterSpacing: "-0.3px",
                      lineHeight: 1.3,
                      color: "#0d0f1a",
                    }}
                  >
                    {svc.title}
                  </h3>
                  <p
                    className="mb-5"
                    style={{ fontSize: 16, lineHeight: 1.7, color: "#6b7280" }}
                  >
                    {svc.body}
                  </p>
                  <ul className="list-none">
                    {svc.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2.5 mb-2.5"
                        style={{ fontSize: 14, color: "#212121" }}
                      >
                        <span
                          style={{
                            color: "#017eeb",
                            flexShrink: 0,
                            marginTop: 2,
                          }}
                        >
                          <IconCheck />
                        </span>
                        {f}
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
      <section
        className="relative overflow-hidden text-center"
        style={{
          padding: "56px 0",
          background: "linear-gradient(135deg, #017eeb 0%, #0061c4 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0,219,211,0.2) 0%, transparent 60%)",
          }}
        />
        <div
          className="relative mx-auto px-5 md:px-10"
          style={{ maxWidth: 700, zIndex: 1 }}
        >
          <h3
            className="font-extrabold mb-3.5"
            style={{
              fontSize: "clamp(24px, 3vw, 36px)",
              color: "#fff",
              lineHeight: 1.2,
              letterSpacing: "-0.5px",
            }}
          >
            Ready to Launch Your ERP on Frappe?
          </h3>
          <p
            className="mb-7"
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: 16,
              lineHeight: 1.7,
            }}
          >
            Get a free 30-minute assessment with a senior Frappe engineer.
            We&apos;ll review your workflows, scope your implementation, and map
            a migration path — no commitment.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:!bg-[#0d0f1a] hover:!text-white hover:!border-[#0d0f1a] mt-5"
            style={{
              background: "#fff",
              color: "#017eeb",
              border: "1px solid #fff",
              padding: "16px 32px",
              fontSize: 16,
            }}
          >
            Start My ERP Project
          </Link>
        </div>
      </section>

      {/* WHY BRILWORKS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="text-center mx-auto mb-14" style={{ maxWidth: 720 }}>
            <span
              className="inline-block mb-4"
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#017eeb",
              }}
            >
              Why Brilworks
            </span>
            <h2
              className="font-extrabold"
              style={{
                fontSize: "clamp(28px, 3.2vw, 42px)",
                letterSpacing: "-1px",
                lineHeight: 1.15,
                color: "#0d0f1a",
              }}
            >
              Why Choose Brilworks for Frappe Development?
            </h2>
            <p
              className="mt-4"
              style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}
            >
              We don&apos;t just install ERPNext — we engineer ERPs that fit how
              your business really runs, and we keep them running long after
              go-live.
            </p>
          </div>
          <div
            className="grid gap-6"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            }}
          >
            {BENEFITS.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl transition-all hover:-translate-y-0.5"
                style={{
                  background: "#fff",
                  border: "1px solid #e5e7eb",
                  padding: "32px 28px",
                }}
              >
                <div
                  className="rounded-[14px] flex items-center justify-center mb-5"
                  style={{ width: 64, height: 64, background: b.tint }}
                >
                  {b.icon}
                </div>
                <h3
                  className="font-bold mb-3"
                  style={{ fontSize: 18, color: "#0d0f1a" }}
                >
                  {b.title}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "#6b7280" }}>
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS (dark) */}
      <section
        className="relative overflow-hidden py-16 md:py-24"
        style={darkSectionBg}
      >
        <div
          className="relative mx-auto px-5 md:px-10"
          style={{ maxWidth: 1280, zIndex: 1 }}
        >
          <div className="text-center mx-auto mb-14" style={{ maxWidth: 720 }}>
            <span
              className="inline-block mb-4"
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#00b4d8",
              }}
            >
              Client Stories
            </span>
            <h2
              className="font-extrabold text-white"
              style={{
                fontSize: "clamp(28px, 3.2vw, 42px)",
                letterSpacing: "-1px",
                lineHeight: 1.15,
              }}
            >
              What Our Clients Say
            </h2>
            <p
              className="mt-4"
              style={{
                fontSize: 17,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.62)",
              }}
            >
              Real outcomes from CEOs, CFOs, and Ops Directors who run their
              businesses on ERPs we built.
            </p>
          </div>
          <div
            className="grid gap-6"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            }}
          >
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  padding: "32px 28px",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div className="flex gap-0.5 mb-4" style={{ color: "#facc15" }}>
                  {[0, 1, 2, 3, 4].map((i) => (
                    <IconStarFilled key={i} />
                  ))}
                </div>
                <p
                  className="mb-6"
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    fontSize: 15,
                    lineHeight: 1.7,
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="rounded-full flex items-center justify-center font-bold text-white"
                    style={{
                      width: 44,
                      height: 44,
                      background: "linear-gradient(135deg, #017eeb, #00dbd3)",
                      fontSize: 16,
                    }}
                  >
                    {t.initials}
                  </div>
                  <div className="flex flex-col">
                    <span
                      className="text-white font-semibold"
                      style={{ fontSize: 14 }}
                    >
                      {t.name}
                    </span>
                    <span
                      style={{ color: "rgba(255,255,255,0.55)", fontSize: 12 }}
                    >
                      {t.role}
                    </span>
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
          <div
            className="text-center mx-auto"
            style={{ maxWidth: 720, marginBottom: 32 }}
          >
            <span
              className="inline-block mb-4"
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#017eeb",
              }}
            >
              Recognized By
            </span>
            <h2
              className="font-extrabold"
              style={{
                fontSize: "clamp(22px, 2.4vw, 30px)",
                letterSpacing: "-1px",
                lineHeight: 1.15,
                color: "#0d0f1a",
              }}
            >
              Trusted &amp; Awarded by Industry Leaders
            </h2>
          </div>
          <div
            className="flex flex-wrap items-center justify-center"
            style={{ gap: "32px 56px", opacity: 0.85 }}
          >
            {HONORS.map((h) => (
              <div
                key={h.label}
                className="flex items-center gap-2.5"
                style={{ color: "#6b7280", fontWeight: 600, fontSize: 14 }}
              >
                {h.icon}
                {h.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="text-center mx-auto mb-14" style={{ maxWidth: 720 }}>
            <span
              className="inline-block mb-4"
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#017eeb",
              }}
            >
              Industries We Serve
            </span>
            <h2
              className="font-extrabold"
              style={{
                fontSize: "clamp(28px, 3.2vw, 42px)",
                letterSpacing: "-1px",
                lineHeight: 1.15,
                color: "#0d0f1a",
              }}
            >
              Deep Domain Expertise Across ERP Verticals
            </h2>
            <p
              className="mt-4"
              style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}
            >
              Not generalists. We have case studies, clients, and production
              code in each of these verticals.
            </p>
          </div>
          <div
            className="grid gap-4"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            }}
          >
            {INDUSTRIES.map((ind) => (
              <Link
                key={ind.label}
                href={ind.href}
                className="text-center transition-all hover:-translate-y-0.5"
                style={{
                  background: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: 14,
                  padding: "24px 16px",
                  textDecoration: "none",
                }}
              >
                <div className="mx-auto mb-3 flex items-center justify-center">
                  {ind.icon}
                </div>
                <span
                  style={{ fontSize: 13, fontWeight: 600, color: "#212121" }}
                >
                  {ind.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24" style={{ background: "#f8f9ff" }}>
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="text-center mx-auto mb-14" style={{ maxWidth: 720 }}>
            <span
              className="inline-block mb-4"
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#017eeb",
              }}
            >
              Common Questions
            </span>
            <h2
              className="font-extrabold"
              style={{
                fontSize: "clamp(28px, 3.2vw, 42px)",
                letterSpacing: "-1px",
                lineHeight: 1.15,
                color: "#0d0f1a",
              }}
            >
              Frequently Asked Questions
            </h2>
            <p
              className="mt-4"
              style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}
            >
              Everything operations leaders, CFOs, and CIOs typically ask before
              starting an ERPNext engagement.
            </p>
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
          title="Ready to Launch Your ERP?"
          description="You're one conversation away from a modern, open-source ERP that fits your business. Tell us about your workflows — we'll map a realistic implementation or migration plan."
          messageRequired={false}
          submitLabel="Get My Free Frappe Consultation"
          benefits={[
            "Free 30-minute assessment with a senior Frappe engineer",
            "Detailed implementation proposal within 48 hours",
            "You own 100% of code, data, and infrastructure",
            "Response guaranteed within 24 business hours",
            "50+ ERPNext implementations · Certified Frappe Partner",
          ]}
          bgClassName="svc-mid-cta-bg"
        />
      </div>
    </>
  );
};

export default FrappeDevelopmentService;
