"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import GradientFAQAccordion from "../Common/GradientFAQAccordion";
import {
  Check,
  X,
  ArrowRight,
  Star,
  Zap,
  ShieldCheck,
  Award,
  Server,
  Activity,
  Globe,
  TrendingUp,
  LayoutDashboard,
  CreditCard,
  ShoppingCart,
  Heart,
  Building2,
  Layers,
  RefreshCw,
  Blend,
} from "lucide-react";
import "../../styles/ServiceLightTheme.css";

const SolutionContactForm = dynamic(
  () => import("../Solution/SolutionContactForm"),
);

// ---------- Inline icon primitives ----------
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

const IconSparkle = () => <Zap size={14} aria-hidden="true" />;

const IconShield = ({ color = "#017eeb", size = 18 }) => (
  <ShieldCheck size={size} color={color} strokeWidth={1.8} aria-hidden="true" />
);

const IconCertified = ({ color = "#017eeb", size = 18 }) => (
  <Award size={size} color={color} aria-hidden="true" />
);

const IconClusters = ({ color = "#017eeb", size = 18 }) => (
  <Server size={size} color={color} aria-hidden="true" />
);

const IconUptime = ({ color = "#017eeb", size = 18 }) => (
  <Activity size={size} color={color} aria-hidden="true" />
);

// ---------- Style tokens ----------
const heroBg = {
  background:
    "radial-gradient(900px 420px at 78% -8%, rgba(47,107,255,0.12) 0%, transparent 60%), radial-gradient(700px 360px at 8% 6%, rgba(47,107,255,0.06) 0%, transparent 55%), #f7f9fc",
};
const darkSectionBg = {
  background:
    "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(47,107,255,0.06) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 20% 80%, rgba(47,107,255,0.04) 0%, transparent 60%), #f1f5fb",
};
const gradientTextStyle = { color: "#2f6bff" };
const statValueStyle = { color: "#2f6bff" };

// ---------- Data ----------
const TRUST = [
  { icon: <IconShield />, label: "AWS Consulting Partner" },
  { icon: <IconCertified />, label: "CKA-Certified Engineers" },
  { icon: <IconClusters />, label: "100+ Clusters Deployed" },
  { icon: <IconUptime />, label: "99.99% Uptime SLA" },
];

const HERO_STATS = [
  { value: "100+", label: "Clusters Deployed" },
  { value: "500+", label: "Microservices Orchestrated" },
  { value: "99.99%", label: "Uptime SLA" },
  { value: "98%", label: "Client Satisfaction" },
];

const BENEFITS = [
  {
    title: "Transparency & Support",
    tint: "#e8f0fd",
    body: "Clear, constant communication at every step. You always know cluster state, risk posture, and what's shipping next.",
    icon: (
      <Blend size={32} color="#017eeb" strokeWidth={1.8} aria-hidden="true" />
    ),
  },
  {
    title: "Scalable Team",
    tint: "#ede9fe",
    body: "Flex team structure — from a lead SRE on retainer to a full platform squad. We right-size to your roadmap, not a fixed contract.",
    icon: (
      <Layers size={32} color="#4f46e5" strokeWidth={1.8} aria-hidden="true" />
    ),
  },
  {
    title: "Proven Track Record",
    tint: "#d1fae5",
    body: "Tailored Kubernetes solutions have delivered an average 30% performance lift and 40% reduction in downtime for clients across verticals.",
    icon: (
      <TrendingUp
        size={32}
        color="#10b981"
        strokeWidth={1.8}
        aria-hidden="true"
      />
    ),
  },
  {
    title: "Domain Expertise",
    tint: "#ccfbf1",
    body: "Engineers who specialize in architecting, deploying, and optimizing Kubernetes for SaaS, fintech, e-commerce, media, gaming, and IoT.",
    icon: (
      <Globe size={32} color="#0d9488" strokeWidth={1.8} aria-hidden="true" />
    ),
  },
  {
    title: "Certified Team",
    tint: "#cffafe",
    body: "CKA, CKAD, CKS, and AWS/GCP/Azure certified engineers. Real credentials, real cluster operation experience behind every engagement.",
    icon: <IconShield color="#0891b2" size={32} />,
  },
  {
    title: "Agile Development",
    tint: "#dbeafe",
    body: "Two-week sprints with demos and working clusters — so you realize value from your Kubernetes investment in weeks, not quarters.",
    icon: (
      <RefreshCw
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
    initials: "GO",
    name: "Golan",
    role: "CTO / Director of R&D, Trackimo",
    quote:
      "Brilworks architected our EKS platform and cut infrastructure spend by 38% while lifting uptime to 99.99%. They run our clusters like owners, not vendors — four years in and still my best infra partner.",
  },
  {
    initials: "DV",
    name: "David Velasquez",
    role: "DevOps Lead, Rastrack",
    quote:
      "Their DevOps crew migrated 40+ microservices to Kubernetes without a single customer-facing incident. Helm charts, GitOps, observability — every piece was production-grade from day one.",
  },
  {
    initials: "ED",
    name: "Edwin",
    role: "Platform Engineer, Tekstride",
    quote:
      "They built our internal platform on Kubernetes — self-service environments, GitOps pipelines, Prometheus-backed SLOs. Deploy velocity 3x, on-call pages down 60%. Exactly what a platform team needs.",
  },
];

const HONORS = [
  { label: "AWS Partner · Advanced Tier", icon: <IconShield /> },
  {
    label: "Clutch Global Award 2025",
    icon: (
      <Star size={20} color="#017eeb" strokeWidth={1.8} aria-hidden="true" />
    ),
  },
  {
    label: "GoodFirms Top Software 2025-26",
    icon: (
      <Award size={20} color="#017eeb" strokeWidth={1.8} aria-hidden="true" />
    ),
  },
  {
    label: "SelectedFirms Top 10 · 2026",
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
    label: "Clutch Global Fall 2024",
    icon: (
      <Star size={20} color="#017eeb" strokeWidth={1.8} aria-hidden="true" />
    ),
  },
];

const INDUSTRIES = [
  {
    label: "SaaS",
    href: "#contact",
    icon: (
      <Globe size={32} color="#017eeb" strokeWidth={1.8} aria-hidden="true" />
    ),
  },
  {
    label: "FinTech",
    href: "/industry/fintech-software-development/",
    icon: (
      <CreditCard
        size={32}
        color="#10b981"
        strokeWidth={1.8}
        aria-hidden="true"
      />
    ),
  },
  {
    label: "E-commerce",
    href: "/industry/e-commerce-app-development/",
    icon: (
      <ShoppingCart
        size={32}
        color="#4f46e5"
        strokeWidth={1.8}
        aria-hidden="true"
      />
    ),
  },
  {
    label: "Media & Streaming",
    href: "#contact",
    icon: (
      <Activity
        size={32}
        color="#ef4444"
        strokeWidth={1.8}
        aria-hidden="true"
      />
    ),
  },
  {
    label: "Gaming",
    href: "#contact",
    icon: (
      <Zap size={32} color="#8b5cf6" strokeWidth={1.8} aria-hidden="true" />
    ),
  },
  {
    label: "IoT & Edge",
    href: "#contact",
    icon: (
      <Server size={32} color="#0891b2" strokeWidth={1.8} aria-hidden="true" />
    ),
  },
];

const FAQ = [
  {
    q: "What is Kubernetes and why do we need it?",
    a: "Kubernetes is a production-grade container orchestration platform originally built by Google. It lets your team deploy containers across fleets of servers, fine-tune resource usage, schedule and scale workloads on demand, and build multi-container applications with predictable availability. If you run more than a handful of services and care about uptime, cost control, and deploy velocity, Kubernetes is the industry-standard foundation.",
  },
  {
    q: "Do you work with EKS, GKE, and AKS?",
    a: "Yes — we have certified engineers and production experience on all three managed Kubernetes services (AWS EKS, Google GKE, Azure AKS), plus bare-metal and on-prem distributions like Rancher, OpenShift, and k3s. We'll recommend the right platform based on your workloads, compliance needs, and existing cloud footprint.",
  },
  {
    q: "How long does a Kubernetes migration take?",
    a: "Typical migrations range from 8-16 weeks depending on microservice count, stateful workloads, and compliance scope. We start with a 2-week readiness audit, then run parallel environments so cutover is a zero-downtime switchover rather than a risky big-bang.",
  },
  {
    q: "How do you secure our clusters?",
    a: "Our DevSecOps baseline includes RBAC hardening, NetworkPolicies, OPA/Kyverno admission control, image scanning (Trivy/Snyk), runtime security (Falco), encrypted secrets (Sealed Secrets or Vault), and continuous CIS benchmark scanning. We map controls to SOC 2, HIPAA, and PCI-DSS where required.",
  },
  {
    q: "Can you help us cut Kubernetes costs?",
    a: "Yes. Typical FinOps engagements deliver 25-45% cloud spend reduction within 60 days through right-sizing, HPA/VPA tuning, Karpenter/Cluster Autoscaler configuration, spot instance strategies, and identifying idle or over-provisioned workloads. You keep the ongoing savings.",
  },
  {
    q: "Do you provide 24/7 SRE support?",
    a: "Yes — we offer managed Kubernetes operations with tiered SLAs (standard business hours through 24/7 follow-the-sun on-call). Coverage includes incident response, patching, upgrades, observability, and continuous optimization with a 99.99% uptime SLA available.",
  },
  {
    q: "How do we engage you — staff augmentation or managed service?",
    a: "Both. You can bring our engineers into your team (staff augmentation, your sprints and tooling), hire a dedicated platform squad for an end-to-end build, or hand over day-2 operations under a managed service contract. Most clients start with a consultation then pick the model that fits their in-house capability.",
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

// Stats-dashboard mockup (for cluster metrics & monitoring)
const MockupStatsDashboard = ({ label, stats, rows }) => (
  <div
    className="w-full h-full rounded-xl overflow-hidden flex flex-col bg-white"
    style={{ boxShadow: "0 8px 24px rgba(13,15,26,0.08)" }}
  >
    <MockBar label={label} />
    <div className="flex-1 p-4">
      <div className="grid grid-cols-3 gap-2.5 mb-3">
        {stats.map((s, i) => {
          const palette =
            s.tone === "warn"
              ? { bg: "#fef3c7", border: "#fde68a", color: "#a16207" }
              : s.tone === "err"
                ? { bg: "#fee2e2", border: "#fecaca", color: "#b91c1c" }
                : { bg: "#f0fdf4", border: "#bbf7d0", color: "#047857" };
          return (
            <div
              key={i}
              className="rounded-md py-2.5 px-2 text-center"
              style={{
                background: palette.bg,
                border: `1px solid ${palette.border}`,
              }}
            >
              <div
                className="text-[18px] font-extrabold leading-none"
                style={{ color: palette.color }}
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

// Code + canvas mockup (for YAML manifests)
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
    <MockBar label="deployment.yaml · service-mesh.yaml" />
    <div className="flex-1 grid grid-cols-2">
      <div className="p-3.5" style={{ background: "#0d1117" }}>
        {[
          [
            ["k", 28],
            ["t", 32],
          ],
          [
            ["k", 18],
            ["s", 54],
          ],
          [
            ["x", 8],
            ["k", 22],
            ["v", 30],
          ],
          [
            ["x", 8],
            ["k", 28],
            ["s", 40],
          ],
          [
            ["x", 16],
            ["v", 18],
            ["s", 32],
          ],
          [
            ["k", 20],
            ["t", 42],
          ],
          [
            ["x", 8],
            ["k", 32],
            ["v", 24],
          ],
          [
            ["x", 16],
            ["s", 52],
          ],
          [
            ["x", 8],
            ["k", 24],
            ["v", 18],
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
          { color: "#4f46e5", w1: "70%", w2: "50%", hasSecond: true },
          { color: "#7c3aed", w1: "80%", w2: "60%", hasSecond: true },
          { color: "#a855f7", w1: "65%", w2: null, hasSecond: false },
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

// Multi-device mockup (for training labs)
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
        </div>
        {["80%", "68%", "55%", "72%"].map((w, i) => (
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
    title: "Kubernetes Consultation",
    body: "Our expert consultants guide you through every stage — from readiness assessment to optimized deployment. We map a tailored roadmap whether you're modernizing legacy apps or building scalable cloud-native platforms.",
    features: [
      "Cluster-readiness & architecture audit",
      "EKS, GKE, AKS & on-prem strategy",
      "Migration roadmap & TCO modeling",
    ],
    mockup: (
      <MockupStatsDashboard
        label="cluster-readiness · audit v2.1"
        stats={[
          { n: "24", lb: "Nodes" },
          { n: "187", lb: "Pods", tone: "warn" },
          { n: "68%", lb: "CPU" },
        ]}
        rows={[
          { pass: true, w: "70%" },
          { pass: true, w: "62%" },
          { pass: false, w: "75%" },
          { pass: true, w: "80%" },
          { pass: true, w: "58%" },
        ]}
      />
    ),
    imageBg: "linear-gradient(135deg, #f0f7ff 0%, #e0ecfc 100%)",
    padMockup: true,
    reverse: false,
  },
  {
    title: "Kubernetes Application Development & Migration",
    body: "Build and deploy containerized applications on Kubernetes with expert guidance. We author production-grade manifests, Helm charts, and Terraform modules — streamlining your delivery and cutting migration time in half.",
    features: [
      "Containerization & Helm chart authoring",
      "GitOps with ArgoCD / Flux",
      "Service mesh (Istio, Linkerd) integration",
    ],
    mockup: <MockupCodeCanvas />,
    imageBg: "linear-gradient(135deg, #f5f3ff 0%, #ddd6fe 100%)",
    padMockup: true,
    reverse: true,
  },
  {
    title: "DevSecOps — Enabling Security & Compliance",
    body: "Integrate security and compliance directly into your delivery pipeline. We harden clusters with OPA/Kyverno policies, image scanning, runtime protection, and audit-ready controls for SOC 2, HIPAA, and PCI-DSS.",
    features: [
      "RBAC, secrets & network policies",
      "Image scanning & runtime protection",
      "SOC 2, HIPAA & PCI compliance mapping",
    ],
    mockup: (
      <MockupStatsDashboard
        label="security scan · policies · CVE feed"
        stats={[
          { n: "312", lb: "Policies Pass" },
          { n: "7", lb: "Warnings", tone: "warn" },
          { n: "0", lb: "Critical CVE", tone: "err" },
        ]}
        rows={[
          { pass: true, w: "70%" },
          { pass: true, w: "66%" },
          { pass: true, w: "78%" },
          { pass: true, w: "58%" },
          { pass: true, w: "72%" },
        ]}
      />
    ),
    imageBg: "linear-gradient(135deg, #ecfdf5 0%, #bbf7d0 100%)",
    padMockup: true,
    reverse: false,
  },
  {
    title: "Kubernetes Professional Support",
    body: "Get 24/7 support from certified Kubernetes professionals. We keep your clusters running smoothly, resolve incidents swiftly, and continuously tune deployments for peak performance and cost efficiency.",
    features: [
      "24/7 SRE coverage & on-call",
      "Prometheus / Grafana observability",
      "FinOps & autoscaling cost tuning",
    ],
    mockup: (
      <MockupStatsDashboard
        label="prod-cluster · live · 24/7 SRE"
        stats={[
          { n: "99.99%", lb: "Uptime 30d" },
          { n: "187/187", lb: "Pods Ready" },
          { n: "2", lb: "Alerts", tone: "warn" },
        ]}
        rows={[
          { pass: true, w: "70%" },
          { pass: true, w: "72%" },
          { pass: true, w: "64%" },
          { pass: true, w: "80%" },
          { pass: true, w: "56%" },
        ]}
      />
    ),
    imageBg: "linear-gradient(135deg, #f0fdfa 0%, #99f6e4 100%)",
    padMockup: true,
    reverse: true,
  },
  {
    title: "Kubernetes Training",
    body: "Equip your engineers with the skills to own Kubernetes in production. Hands-on labs cover fundamentals, Helm, GitOps, observability, and advanced topics — bridging the gap between certification and real-world cluster ownership.",
    features: [
      "CKA & CKAD exam prep tracks",
      "Hands-on production scenario labs",
      "Custom curriculum for your stack",
    ],
    mockup: <MockupMultiDevice />,
    imageBg: "linear-gradient(135deg, #ecfeff 0%, #a5f3fc 100%)",
    padMockup: false,
    reverse: false,
  },
];

// ---------- Page ----------
const KubernetesConsultingService = () => {
  return (
    <>
      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{ padding: "120px 0 80px" }}
      >
        <div className="absolute inset-0 -z-10" style={heroBg} />
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
                    background: "#ffffff",
                    border: "1px solid #e4eaf1",
                    color: "#566678",
                    letterSpacing: "0.1em",
                    boxShadow: "0 1px 2px rgba(11, 30, 51, 0.05)",
                  }}
                >
                  <IconSparkle /> Kubernetes Consulting Services
                </span>
                <h1
                  className="font-extrabold mb-5"
                  style={{
                    fontSize: "clamp(34px, 4vw, 54px)",
                    letterSpacing: "-1.5px",
                    lineHeight: 1.1,
                    color: "#0b1e33",
                  }}
                >
                  Scale Without Outages —{" "}
                  <span style={gradientTextStyle}>
                    Production-Grade Kubernetes
                  </span>
                </h1>
                <p
                  className="mb-8"
                  style={{
                    fontSize: 18,
                    lineHeight: 1.7,
                    color: "#566678",
                    maxWidth: 580,
                  }}
                >
                  CKA-certified engineers plan, deploy, and run your Kubernetes
                  platform so releases ship faster and 3 AM incidents stop. 100+
                  production clusters delivered across EKS, GKE, and AKS —
                  resilient, cost-tuned, and audit-ready from day one.
                </p>
                <div className="flex flex-wrap gap-3.5 my-10">
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:opacity-90 hover:-translate-y-0.5"
                    style={{
                      background: "#2f6bff",
                      color: "#fff",
                      border: "1px solid #2f6bff",
                      padding: "16px 32px",
                      fontSize: 16,
                    }}
                  >
                    Get My Free Cluster Audit <IconArrowRight />
                  </Link>
                  <Link
                    href="#services"
                    className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all hover:bg-black/5"
                    style={{
                      background: "transparent",
                      color: "#0b1e33",
                      border: "1px solid #e4eaf1",
                      padding: "16px 32px",
                      fontSize: 16,
                    }}
                  >
                    See What We Deploy
                  </Link>
                </div>
                <div
                  className="flex flex-wrap gap-[18px]"
                  style={{ color: "#6b7a8a", fontSize: 14 }}
                >
                  {[
                    "Free 45-min cluster audit",
                    "48-hour architecture review",
                    "No commitment",
                  ].map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-2"
                      style={{ color: "#6b7a8a" }}
                    >
                      <span style={{ color: "#16a34a" }}>
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
                      className="rounded-2xl transition-all svc-stat-card"
                      style={{
                        padding: "28px 24px",
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
                          color: "#6b7a8a",
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
              What We Deliver
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
              Kubernetes Consulting Services by Brilworks
            </h2>
            <p
              className="mt-4"
              style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}
            >
              From cluster-readiness audits to 24/7 SRE — we plan, build,
              secure, and run your Kubernetes platform end-to-end.
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
            Ready to Stabilize &amp; Scale Your Clusters?
          </h3>
          <p
            className="mb-7"
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: 16,
              lineHeight: 1.7,
            }}
          >
            Get a free 45-minute cluster audit with a CKA-certified engineer.
            We&apos;ll review your architecture, flag outage risks, and map a
            resilience roadmap — no commitment.
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
            Book My Cluster Audit
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
              Built by Engineers Who&apos;ve Deployed 100+ Production Clusters
            </h2>
            <p
              className="mt-4"
              style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}
            >
              We don&apos;t just install Kubernetes — we partner with your team
              to run it reliably, securely, and cost-effectively in production.
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

      {/* TESTIMONIALS */}
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
                color: "#2f6bff",
              }}
            >
              Client Stories
            </span>
            <h2
              className="font-extrabold"
              style={{
                fontSize: "clamp(28px, 3.2vw, 42px)",
                letterSpacing: "-1px",
                lineHeight: 1.15,
                color: "#0b1e33",
              }}
            >
              What CTOs, DevOps Leads &amp; Platform Engineers Say
            </h2>
            <p
              className="mt-4"
              style={{
                fontSize: 17,
                lineHeight: 1.7,
                color: "#566678",
              }}
            >
              Real outcomes from teams running production Kubernetes at scale.
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
                  background: "#ffffff",
                  border: "1px solid #e4eaf1",
                  padding: "32px 28px",
                  boxShadow: "0 1px 2px rgba(11, 30, 51, 0.05)",
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
                    color: "#0b1e33",
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
                      background: "linear-gradient(135deg, #2f6bff, #00b4d8)",
                      fontSize: 16,
                    }}
                  >
                    {t.initials}
                  </div>
                  <div className="flex flex-col">
                    <span
                      className="font-semibold"
                      style={{ fontSize: 14, color: "#0b1e33" }}
                    >
                      {t.name}
                    </span>
                    <span
                      style={{ color: "#6b7a8a", fontSize: 12 }}
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
              Recognition
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
              Kubernetes Expertise Across High-Scale Verticals
            </h2>
            <p
              className="mt-4"
              style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}
            >
              We&apos;ve run production clusters for workloads with strict
              uptime, latency, and compliance demands.
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
              Everything CTOs, DevOps leads, and platform engineers typically
              ask before engaging us.
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
          title="Ready to Tame Your Kubernetes Infrastructure?"
          description="You're one conversation away from a resilient, cost-tuned Kubernetes platform. Tell us what you're running — we'll show you how to make it scale."
          messageRequired={false}
          submitLabel="Get My Free Cluster Audit"
          benefits={[
            "Free 45-minute cluster audit with a CKA-certified engineer",
            "Architecture review & resilience roadmap in 48 hours",
            "Risk-free trial — no commitment",
            "Response guaranteed within 24 business hours",
            "CKA, CKAD & CKS certified engineers on every project",
          ]}
          bgClassName="svc-mid-cta-bg"
        />
      </div>
    </>
  );
};

export default KubernetesConsultingService;
