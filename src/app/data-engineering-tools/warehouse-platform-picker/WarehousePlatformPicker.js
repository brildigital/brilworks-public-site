"use client";
import React, { useEffect, useMemo, useState } from "react";
import Heading from "../../components/HTMLComponents/Heading";
import GradientFAQAccordion from "../../components/Common/GradientFAQAccordion";
import Link from "next/link";
import { getCalApi } from "@calcom/embed-react";
import "../../styles/ServiceLightTheme.css";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Database,
  AlertTriangle,
  Lightbulb,
  RotateCcw,
} from "lucide-react";
import {
  DEF_PRICES,
  defaultPrices,
  PLAT,
  ETLN,
  BIN,
  WORK,
  SKILLS,
  COMP,
  WTS,
  FRESHNESS,
  CLOUDS,
  BI_OPTIONS,
  ETL_OPTIONS,
  PRESETS,
  INFO,
  ETLI,
  BII,
  CHECK,
  LADDER,
  FAQ_DATA,
  evaluate,
  explain,
  pickETL,
  etlCost,
  biCost,
  indian,
  bytes,
  usd,
  inr,
} from "./warehousePickerLogic";

const PAGE_PATH = "/data-engineering-tools/warehouse-platform-picker/";
const INPUTS_KEY = "pp-v3";
const CHECK_KEY = "pp-ck";

const COST_COLORS = {
  c: "#017eeb",
  s: "#93c5fd",
  e: "#f59e0b",
  b: "#8b5cf6",
};

const JUMP_LINKS = [
  ["planner", "Planner"],
  ["costs", "Cost calculator"],
  ["stack", "ETL & BI"],
  ["security", "Security & compliance"],
  ["platforms", "Platform guide"],
  ["growth", "Growth path"],
];

const fromPreset = (p) => ({
  rowsLog: p.rows,
  rowkb: p.rowkb,
  growth: p.growth,
  churn: p.churn,
  src: p.src,
  fresh: p.fresh,
  viewers: p.viewers,
  authors: p.authors,
  cloud: p.cloud,
  bi: p.bi,
  etl: p.etl,
  work: [...p.work],
  skills: [...p.skills],
  comp: [...p.comp],
  w: { ...p.w },
  scan: p.scan ?? 3,
  hours: p.hours ?? null,
});

const openCal = async () => {
  const cal = await getCalApi({});
  cal("modal", {
    calLink: "vikas-singh-bril/30-min-product-eng-review",
    config: { theme: "light" },
  });
};

const scrollToId = (e, id) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

/* ---------- small presentational pieces ---------- */

const Panel = ({ title, label, children }) => (
  <div className="bg-white border border-gray-200 rounded-2xl p-5 md:p-6 shadow-sm space-y-5">
    <div className="flex flex-wrap items-baseline justify-between gap-2">
      <h3 className="text-lg font-semibold text-navyBlue">{title}</h3>
      {label && (
        <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-gray-400">
          {label}
        </span>
      )}
    </div>
    {children}
  </div>
);

const Slider = ({ id, label, value, display, min, max, step, onChange, hint }) => (
  <div className="min-w-0">
    <div className="flex items-baseline justify-between gap-3 mb-2">
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <span className="text-sm font-bold text-themeColor tabular-nums whitespace-nowrap">
        {display}
      </span>
    </div>
    <input
      id={id}
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(+e.target.value)}
      className="w-full accent-themeColor"
    />
    {hint && <p className="text-xs text-gray-400 mt-1">{hint}</p>}
  </div>
);

const Select = ({ id, label, value, options, onChange }) => (
  <div className="min-w-0">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    <select
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-3 py-2.5 rounded-lg border-2 border-gray-200 bg-white text-sm font-medium text-navyBlue focus:outline-none focus:border-themeColor"
    >
      {options.map(([v, t]) => (
        <option key={v} value={v}>
          {t}
        </option>
      ))}
    </select>
  </div>
);

const Chips = ({ name, options, selected, onToggle }) => (
  <div className="flex flex-wrap gap-2">
    {options.map(([v, t]) => {
      const on = selected.includes(v);
      return (
        <label
          key={v}
          className={`cursor-pointer rounded-full border-2 px-3.5 py-1.5 text-sm transition-all focus-within:ring-2 focus-within:ring-themeColor/40 ${
            on
              ? "border-themeColor bg-blue-50 text-themeColor font-semibold"
              : "border-gray-200 text-navyBlue hover:border-themeColor/40"
          }`}
        >
          <input
            type="checkbox"
            name={name}
            value={v}
            checked={on}
            onChange={() => onToggle(v)}
            className="sr-only"
          />
          {t}
        </label>
      );
    })}
  </div>
);

const SectionHead = ({ eyebrow, title, children }) => (
  <div className="mb-8">
    <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-themeColor block mb-3">
      {eyebrow}
    </span>
    <Heading type="h2" className="!font-extrabold text-gray-900" text={title} />
    {children && (
      <p className="text-[16.5px] text-gray-500 leading-relaxed mt-3 max-w-3xl">
        {children}
      </p>
    )}
  </div>
);

const Table = ({ head, minW = "min-w-[860px]", children }) => (
  <div className="overflow-x-auto bg-white border border-gray-200 rounded-2xl shadow-sm">
    <table className={`w-full text-sm ${minW}`}>
      <thead>
        <tr className="bg-gray-50">
          {head.map((h) => (
            <th
              key={h}
              scope="col"
              className="text-left px-4 py-3 text-[11px] font-bold tracking-wider uppercase text-gray-500 border-b border-gray-200 whitespace-nowrap"
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="[&_td]:px-4 [&_td]:py-3 [&_td]:align-top [&_td]:border-b [&_td]:border-gray-100 [&_tr:last-child_td]:border-0 [&_td:first-child]:font-semibold [&_td:first-child]:text-navyBlue text-gray-600">
        {children}
      </tbody>
    </table>
  </div>
);

const Pill = ({ children }) => (
  <span className="inline-block ml-1.5 align-middle bg-blue-50 text-themeColor text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
    {children}
  </span>
);

/* ---------- main component ---------- */

const WarehousePlatformPicker = () => {
  const [inp, setInp] = useState(() => fromPreset(PRESETS.erp));
  const [preset, setPreset] = useState("erp");
  const [P, setP] = useState(defaultPrices);
  const [priceText, setPriceText] = useState(() =>
    Object.fromEntries(Object.entries(defaultPrices()).map(([k, v]) => [k, String(v)])),
  );
  const [checks, setChecks] = useState(() => CHECK.map(() => false));
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [leadState, setLeadState] = useState("idle"); // idle | sending | sent
  const [hydrated, setHydrated] = useState(false);

  // Restore saved inputs and checklist after mount (avoids hydration mismatch).
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(INPUTS_KEY) || "null");
      if (saved && saved.w && saved.comp) {
        setInp(fromPreset(saved));
        setPreset(null);
      }
      const ck = JSON.parse(localStorage.getItem(CHECK_KEY) || "[]");
      if (Array.isArray(ck) && ck.length)
        setChecks(CHECK.map((_, i) => !!ck[i]));
    } catch (e) {}
    setHydrated(true);
  }, []);

  const a = useMemo(() => ({ ...inp, rows: Math.round(10 ** inp.rowsLog) }), [inp]);
  const ev = useMemo(() => evaluate(a, P), [a, P]);
  const { d, res } = ev;
  const top = res[0];
  const runnerUp = res[1];
  const gap = top.score - runnerUp.score;
  const story = useMemo(() => explain(a, ev, P), [a, ev, P]);

  useEffect(() => {
    if (!hydrated) return;
    try {
      // Stored in the original page's shape: `rows` is the slider position.
      const { rowsLog, ...rest } = inp;
      localStorage.setItem(INPUTS_KEY, JSON.stringify({ ...rest, rows: rowsLog }));
    } catch (e) {}
  }, [inp, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(CHECK_KEY, JSON.stringify(checks));
    } catch (e) {}
  }, [checks, hydrated]);

  const set = (key, value) => {
    setPreset(null);
    setInp((s) => ({ ...s, [key]: value }));
  };
  const toggle = (key, value) => {
    setPreset(null);
    setInp((s) => ({
      ...s,
      [key]: s[key].includes(value)
        ? s[key].filter((x) => x !== value)
        : [...s[key], value],
    }));
  };
  const setWeight = (key, value) => {
    setPreset(null);
    setInp((s) => ({ ...s, w: { ...s.w, [key]: value } }));
  };
  const applyPreset = (key) => {
    setInp(fromPreset(PRESETS[key]));
    setPreset(key);
  };

  const setPrice = (key, text) => {
    setPriceText((s) => ({ ...s, [key]: text }));
    const v = parseFloat(text);
    setP((s) => ({ ...s, [key]: isFinite(v) && v >= 0 ? v : DEF_PRICES[key].v }));
  };
  const resetPrices = () => {
    const def = defaultPrices();
    setP(def);
    setPriceText(Object.fromEntries(Object.entries(def).map(([k, v]) => [k, String(v)])));
  };

  const money = (v) => `${usd(v)} (${inr(v, P.fx)})`;
  const confidence =
    gap >= 12
      ? "Clear winner"
      : gap >= 5
        ? `Moderate lead over ${runnerUp.name}`
        : `Close call with ${runnerUp.name}`;

  const byCost = [...res].sort(
    (x, y) => (x.cost.ok ? x.cost.t : 1e15) - (y.cost.ok ? y.cost.t : 1e15),
  );
  const maxT = Math.max(...res.filter((r) => r.cost.ok).map((r) => r.cost.t), 1);
  const barScale = (v) => Math.sqrt(v / maxT) * 100; // keeps small bills visible
  const pickE = pickETL(a);
  const doneCount = checks.filter(Boolean).length;
  const ladderIdx = LADDER.findIndex(
    (s, i) => a.rows > (i ? LADDER[i - 1].max : 0) && a.rows <= s.max,
  );

  let lastGroup = "";
  const priceFields = Object.entries(DEF_PRICES).map(([k, x]) => {
    const header = x.g !== lastGroup ? x.g : null;
    lastGroup = x.g;
    return { k, x, header };
  });

  const submitLead = async (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setEmailError("Please enter a valid email address");
      return;
    }
    setEmailError("");
    setLeadState("sending");
    try {
      await fetch("/api/tool-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          page: PAGE_PATH,
          toolFormData: {
            Recommendation: top.name,
            "Fit score": `${top.score}/100 (${confidence})`,
            "Estimated monthly cost": money(top.cost.t),
            "Runner-up": `${runnerUp.name} (${runnerUp.score}/100)`,
            Records: indian(a.rows),
            "Data size": bytes(d.gb),
            "Yearly growth": `${a.growth}%`,
            "Data sources": a.src,
            Freshness: FRESHNESS.find(([v]) => v === a.fresh)?.[1],
            "Viewers / builders": `${a.viewers} / ${a.authors}`,
            "Current cloud": CLOUDS.find(([v]) => v === a.cloud)?.[1],
            Workloads: a.work.join(", ") || "none",
            Skills: a.skills.join(", ") || "none",
            Compliance: a.comp.join(", ") || "none",
            "ETL / BI": `${ETLN[top.cost.etl]} / ${BIN[top.cost.bi]}`,
          },
        }),
      });
    } catch (err) {
      console.error("Failed to submit lead:", err);
    }
    setLeadState("sent");
  };

  return (
    <>
      {/* Hero */}
      <section className="svc-hero-bg relative overflow-hidden">
        <div className="container max-w-[1280px] mx-auto md:px-10 px-5 relative z-10 pt-28 pb-16 md:pt-32 md:pb-20">
          <span
            className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-widest uppercase mb-7"
            style={{
              background: "#ffffff",
              border: "1px solid #e4eaf1",
              color: "#566678",
              boxShadow: "0 1px 2px rgba(11, 30, 51, 0.05)",
            }}
          >
            <Star className="w-3.5 h-3.5" style={{ color: "#2f6bff" }} />
            FREE TOOL
          </span>
          <Heading
            type="h1"
            className="!font-extrabold max-w-[760px] text-[#0b1e33]"
            text="Data Warehouse Platform Picker"
          />
          <p
            className="lg:text-lg md:text-base text-base !mt-6 max-w-[640px] leading-relaxed"
            style={{ color: "#566678" }}
          >
            Which analytics platform should you use? Compare eight setups across
            AWS, Snowflake, Databricks, Google, Microsoft and ClickHouse. Set
            your data size, team skills, priorities and compliance needs to get
            a ranked recommendation, architecture, monthly cost, and ETL and BI
            picks.
          </p>
          <div className="mt-8">
            <a
              href="#planner"
              className="w-fit c-button c-btn-primary c-btn-medium inline-flex items-center gap-2 hover:!text-themeColor"
              onClick={(e) => scrollToId(e, "planner")}
            >
              Start Picking <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div
            className="flex flex-wrap gap-5 mt-8 pt-6"
            style={{ borderTop: "1px solid #e4eaf1" }}
          >
            {[
              "No signup required",
              "8 platforms compared live",
              "Editable cost assumptions",
              "DPDP & security checklist",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm font-medium"
                style={{ color: "#6b7a8a" }}
              >
                <CheckCircle
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: "#16a34a" }}
                />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white">
        <div className="container max-w-[1280px] mx-auto md:px-10 px-5 py-3">
          <nav className="text-sm" style={{ color: "#6b7a8a" }} aria-label="Breadcrumb">
            <Link href="/" style={{ color: "#2f6bff" }} className="hover:underline">
              Home
            </Link>
            <span className="mx-1.5">/</span>
            <Link
              href="/data-engineering-tools/"
              style={{ color: "#2f6bff" }}
              className="hover:underline"
            >
              Data Engineering Tools
            </Link>
            <span className="mx-1.5">/</span>
            <span className="font-medium" style={{ color: "#0b1e33" }}>
              Warehouse Platform Picker
            </span>
          </nav>
        </div>
      </div>

      {/* Planner */}
      <section id="planner" className="bg-[#f8f9ff] py-12 md:py-16 scroll-mt-24">
        <div className="container max-w-[1280px] mx-auto md:px-10 px-5">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5 md:p-6 mb-6">
            <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Presets">
              <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-gray-400 mr-1">
                Start from
              </span>
              {Object.entries(PRESETS).map(([k, p]) => (
                <button
                  key={k}
                  type="button"
                  aria-pressed={preset === k}
                  onClick={() => applyPreset(k)}
                  className={`rounded-lg border-2 px-3.5 py-2 text-sm transition-all ${
                    preset === k
                      ? "border-themeColor bg-blue-50 text-themeColor font-semibold"
                      : "border-gray-200 text-navyBlue hover:border-themeColor/40"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
            <nav
              aria-label="Tool sections"
              className="flex flex-wrap gap-x-5 gap-y-2 mt-4 pt-4 border-t border-gray-100 text-sm"
            >
              {JUMP_LINKS.map(([id, t]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => scrollToId(e, id)}
                  className="text-themeColor font-medium hover:underline"
                >
                  {t}
                </a>
              ))}
            </nav>
          </div>

          <div className="grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] gap-6 items-start">
            <form className="space-y-6 min-w-0" onSubmit={(e) => e.preventDefault()}>
              <Panel title="Your data" label="Size & shape">
                <Slider
                  id="rows"
                  label="Total records"
                  value={inp.rowsLog}
                  display={indian(a.rows)}
                  min={4}
                  max={10.5}
                  step={0.05}
                  onChange={(v) => set("rowsLog", v)}
                  hint={`≈ ${bytes(d.gb)} today · ≈ ${indian(d.r3)} records (${bytes((d.gb * d.r3) / a.rows)}) in 3 years`}
                />
                <div className="grid sm:grid-cols-3 gap-5">
                  <Slider id="rowkb" label="Avg record size" value={inp.rowkb} display={`${inp.rowkb.toFixed(1)} KB`} min={0.2} max={10} step={0.1} onChange={(v) => set("rowkb", v)} />
                  <Slider id="growth" label="Yearly growth" value={inp.growth} display={`${inp.growth}%`} min={0} max={300} step={10} onChange={(v) => set("growth", v)} />
                  <Slider id="churn" label="Rows changed / month" value={inp.churn} display={`${inp.churn}%`} min={0} max={100} step={5} onChange={(v) => set("churn", v)} />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Slider id="src" label="Data sources" value={inp.src} display={inp.src} min={1} max={25} step={1} onChange={(v) => set("src", v)} />
                  <Select id="fresh" label="Data freshness needed" value={inp.fresh} options={FRESHNESS} onChange={(v) => set("fresh", v)} />
                </div>
              </Panel>

              <Panel title="People & usage" label="Who uses it">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Slider id="viewers" label="Dashboard viewers" value={inp.viewers} display={inp.viewers} min={1} max={500} step={1} onChange={(v) => set("viewers", v)} />
                  <Slider id="authors" label="Report builders" value={inp.authors} display={inp.authors} min={1} max={50} step={1} onChange={(v) => set("authors", v)} />
                </div>
                <fieldset>
                  <legend className="text-sm font-medium text-gray-700 mb-2">Workloads</legend>
                  <Chips name="work" options={WORK} selected={inp.work} onToggle={(v) => toggle("work", v)} />
                </fieldset>
                <fieldset>
                  <legend className="text-sm font-medium text-gray-700 mb-2">Team skills available</legend>
                  <Chips name="skill" options={SKILLS} selected={inp.skills} onToggle={(v) => toggle("skills", v)} />
                </fieldset>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Select id="cloud" label="Current cloud" value={inp.cloud} options={CLOUDS} onChange={(v) => set("cloud", v)} />
                  <Select id="bi" label="BI tool" value={inp.bi} options={BI_OPTIONS} onChange={(v) => set("bi", v)} />
                </div>
                <Select id="etl" label="ETL / sync tool" value={inp.etl} options={ETL_OPTIONS} onChange={(v) => set("etl", v)} />
              </Panel>

              <Panel title="Security & compliance" label="What you must have">
                <Chips name="comp" options={COMP} selected={inp.comp} onToggle={(v) => toggle("comp", v)} />
                <p className="text-xs text-gray-400">
                  Data stays in India: every option here has a Mumbai (or
                  Indian) region, so this doesn&apos;t change the ranking. It
                  does decide which region you deploy in.
                </p>
              </Panel>

              <Panel title="What matters to you" label="0 = ignore · 5 = critical">
                <div className="grid sm:grid-cols-2 gap-5">
                  {WTS.map(([k, t]) => (
                    <Slider key={k} id={`w-${k}`} label={t} value={inp.w[k]} display={inp.w[k]} min={0} max={5} step={1} onChange={(v) => setWeight(k, v)} />
                  ))}
                </div>
              </Panel>
            </form>

            {/* Verdict */}
            <aside
              aria-live="polite"
              className="bg-white border border-gray-200 rounded-2xl shadow-lg shadow-gray-200/60 overflow-hidden lg:sticky lg:top-[110px] lg:max-h-[calc(100vh-130px)] lg:overflow-y-auto min-w-0"
            >
              <div className="relative svc-mid-cta-bg px-6 py-5 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none svc-mid-cta-glow" />
                <div className="relative z-10">
                  <p className="text-white/60 text-xs font-semibold tracking-wider uppercase">
                    Recommended
                  </p>
                  <p className="text-white text-3xl font-extrabold tracking-tight mt-1">
                    {top.name}
                  </p>
                  <p className="text-white/70 text-sm mt-1">
                    {INFO[top.id].sub} · about {money(top.cost.t)} a month
                  </p>
                  <span className="inline-block mt-3 bg-white/10 border border-white/20 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                    {confidence}
                  </span>
                </div>
              </div>

              <div className="px-6 py-6 space-y-6">
                <div>
                  <div className="grid grid-cols-[minmax(0,1fr)_80px_32px_64px] gap-3 text-[11px] font-bold tracking-wider uppercase text-gray-400 mb-2">
                    <span>Option</span>
                    <span>Fit</span>
                    <span className="text-right">/100</span>
                    <span className="text-right">$/mo</span>
                  </div>
                  <div className="space-y-2">
                    {res.map((r, i) => (
                      <div
                        key={r.id}
                        className="grid grid-cols-[minmax(0,1fr)_80px_32px_64px] gap-3 items-center text-sm"
                      >
                        <span className={`truncate ${i === 0 ? "font-semibold text-navyBlue" : "text-gray-600"}`}>
                          {r.name}
                          <span className="text-[11px] text-gray-400 ml-1">{r.fam}</span>
                        </span>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-300 motion-reduce:transition-none ${i === 0 ? "bg-themeColor" : "bg-blue-200"}`}
                            style={{ width: `${Math.max(3, r.score)}%` }}
                          />
                        </div>
                        <span className="text-right tabular-nums text-xs text-gray-500">{r.score}</span>
                        <span className="text-right tabular-nums text-xs text-gray-500">
                          {r.cost.ok ? usd(r.cost.t) : "n/a"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                    Suggested architecture
                  </h3>
                  <pre className="font-mono text-[12.5px] leading-relaxed bg-[#f8f9ff] border border-gray-200 rounded-xl p-4 overflow-x-auto whitespace-pre text-navyBlue">
                    {story.arch}
                  </pre>
                </div>

                <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                  <h3 className="flex items-center gap-1.5 text-sm font-bold text-navyBlue mb-2">
                    <Lightbulb className="w-4 h-4 text-themeColor" /> Why this one
                  </h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                    {story.why.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                  <h3 className="flex items-center gap-1.5 text-sm font-bold text-amber-900 mb-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600" /> Watch out for
                  </h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-amber-800">
                    {story.watch.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>

          {/* Lead gen CTA */}
          <div className="relative svc-mid-cta-bg rounded-2xl p-7 md:p-9 overflow-hidden mt-8">
            <div className="absolute inset-0 pointer-events-none svc-mid-cta-glow" />
            <div className="relative z-10 grid md:grid-cols-[minmax(0,1fr)_minmax(0,420px)] gap-6 items-center">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Want a data engineer to sanity-check this plan?
                </h3>
                <p className="text-white/60 text-[15px] leading-relaxed">
                  Share your email and our team will review your{" "}
                  {top.name} recommendation, costs and architecture, then
                  get back to you with what we&apos;d change.
                </p>
              </div>
              {leadState === "sent" ? (
                <div className="flex items-start gap-3 bg-white/10 border border-white/20 rounded-xl p-4">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold">Thanks, we&apos;ve got it.</p>
                    <p className="text-white/60 text-sm mt-0.5">
                      Our data team will reach out shortly. Prefer to talk now?{" "}
                      <button type="button" onClick={openCal} className="text-white underline">
                        Book a 30-min call
                      </button>
                      .
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={submitLead} noValidate>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <label htmlFor="lead-email" className="sr-only">
                      Work email
                    </label>
                    <input
                      id="lead-email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (emailError) setEmailError("");
                      }}
                      placeholder="you@company.com"
                      className={`flex-1 min-w-0 px-4 py-3 rounded-lg border-2 text-sm font-medium text-navyBlue focus:outline-none focus:border-themeColor ${emailError ? "border-red-400 bg-red-50" : "border-transparent bg-white"}`}
                    />
                    <button
                      type="submit"
                      disabled={leadState === "sending"}
                      className="c-button c-btn-primary c-btn-medium outline-none overflow-hidden whitespace-nowrap transition-all duration-300 border inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {leadState === "sending" ? "Sending..." : "Get Expert Review"}
                      {leadState !== "sending" && <ArrowRight className="w-4 h-4" />}
                    </button>
                  </div>
                  {emailError && <p className="text-red-300 text-xs mt-2">{emailError}</p>}
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Costs */}
      <section id="costs" className="bg-white py-12 md:py-16 scroll-mt-24">
        <div className="container max-w-[1280px] mx-auto md:px-10 px-5">
          <SectionHead eyebrow="Cost calculator" title="Estimated Monthly Cost by Platform">
            Each bar is compute + storage + ETL + BI for the inputs above.
            Change any unit price below and every figure updates. Prices are
            list rates (mostly US regions) checked in October 2026; Mumbai
            rates are often a little higher.
          </SectionHead>

          <div className="grid lg:grid-cols-[minmax(0,1fr)_340px] gap-6 items-start">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5 md:p-6 space-y-4 min-w-0">
              <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                {[["c", "Compute"], ["s", "Storage"], ["e", "ETL"], ["b", "BI"]].map(([k, t]) => (
                  <span key={k} className="inline-flex items-center gap-1.5">
                    <i className="inline-block w-2.5 h-2.5 rounded-sm" style={{ background: COST_COLORS[k] }} />
                    {t}
                  </span>
                ))}
              </div>
              <div className="divide-y divide-gray-100">
                {byCost.map((r, i) => {
                  const k = r.cost;
                  if (!k.ok)
                    return (
                      <div key={r.id} className="grid grid-cols-[1fr_100px] sm:grid-cols-[150px_minmax(0,1fr)_108px] gap-3 items-center py-2.5 text-sm">
                        <span className="text-gray-600">{r.name}</span>
                        <div
                          className="h-4 rounded order-3 col-span-2 sm:order-none sm:col-span-1"
                          style={{ background: "repeating-linear-gradient(45deg,#f3f4f6,#f3f4f6 6px,#e5e7eb 6px,#e5e7eb 7px)" }}
                        />
                        <span className="text-right tabular-nums leading-tight">
                          n/a
                          <small className="block text-[11px] text-gray-400">{k.note}</small>
                        </span>
                      </div>
                    );
                  const tot = barScale(k.t);
                  const f = (v) => (k.t ? (v / k.t) * tot : 0);
                  return (
                    <div key={r.id} className="grid grid-cols-[1fr_100px] sm:grid-cols-[150px_minmax(0,1fr)_108px] gap-3 items-center py-2.5 text-sm">
                      <span className={i === 0 ? "font-semibold text-themeColor" : "text-gray-600"}>
                        {r.name}
                      </span>
                      <div
                        className="flex h-4 rounded overflow-hidden bg-gray-50 order-3 col-span-2 sm:order-none sm:col-span-1"
                        title={`Compute ${usd(k.c)} · Storage ${usd(k.s)} · ETL ${usd(k.e)} · BI ${usd(k.b)}`}
                      >
                        {["c", "s", "e", "b"].map((part) => (
                          <span key={part} className="h-full" style={{ width: `${f(k[part])}%`, background: COST_COLORS[part] }} />
                        ))}
                      </div>
                      <span className="text-right tabular-nums font-semibold text-navyBlue leading-tight">
                        {usd(k.t)}
                        <small className="block text-[11px] font-normal text-gray-400">{inr(k.t, P.fx)}</small>
                      </span>
                    </div>
                  );
                })}
              </div>
              <p className="text-xs text-gray-400">
                Bar length uses a square-root scale so small bills stay visible next to large ones.
              </p>
              <Table head={["Platform", "Compute", "Storage", "ETL", "BI", "Total $", "Total ₹", "ETL / BI used"]} minW="min-w-[680px]">
                {byCost.map((r) => {
                  const k = r.cost;
                  return k.ok ? (
                    <tr key={r.id}>
                      <td>{r.name}</td>
                      <td className="text-right tabular-nums">{usd(k.c)}</td>
                      <td className="text-right tabular-nums">{usd(k.s)}</td>
                      <td className="text-right tabular-nums">{usd(k.e)}</td>
                      <td className="text-right tabular-nums">{usd(k.b)}</td>
                      <td className="text-right tabular-nums font-bold text-navyBlue">{usd(k.t)}</td>
                      <td className="text-right tabular-nums">{inr(k.t, P.fx)}</td>
                      <td>{ETLN[k.etl]} / {BIN[k.bi]}</td>
                    </tr>
                  ) : (
                    <tr key={r.id}>
                      <td>{r.name}</td>
                      <td colSpan={7} className="text-gray-400">{k.note}</td>
                    </tr>
                  );
                })}
              </Table>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5 md:p-6 space-y-5">
              <h3 className="text-lg font-semibold text-navyBlue">Usage drivers</h3>
              <div>
                <Slider
                  id="hours"
                  label="Warehouse active hours / day"
                  value={inp.hours == null ? +d.autoH.toFixed(1) : inp.hours}
                  display={`${d.H.toFixed(1)} h`}
                  min={0.1}
                  max={24}
                  step={0.1}
                  onChange={(v) => set("hours", v)}
                  hint={
                    inp.hours == null
                      ? `Estimated from freshness and users: ${d.autoH.toFixed(1)} h/day. Drag to override.`
                      : `Overridden. The estimate from your inputs is ${d.autoH.toFixed(1)} h/day.`
                  }
                />
                {inp.hours != null && (
                  <button
                    type="button"
                    onClick={() => set("hours", null)}
                    className="text-themeColor font-medium text-sm hover:underline mt-2"
                  >
                    Use the estimate from my inputs
                  </button>
                )}
              </div>
              <Slider
                id="scan"
                label="Data scanned per query"
                value={inp.scan}
                display={`${inp.scan}%`}
                min={1}
                max={100}
                step={1}
                onChange={(v) => set("scan", v)}
                hint="Share of the data each query reads. Parquet, partitions and summary tables keep this low."
              />
              <dl className="text-sm divide-y divide-gray-100 border-t border-gray-100">
                {[
                  ["Queries per month", Math.round(d.queries).toLocaleString("en-IN")],
                  ["Rows changed per month (ETL)", indian(d.mar)],
                  ["Users total", d.users],
                  ["Data today", bytes(d.gb)],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-3 py-2">
                    <dt className="text-gray-500">{k}</dt>
                    <dd className="font-semibold text-navyBlue tabular-nums">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <details className="mt-6 bg-white border border-gray-200 rounded-2xl shadow-sm px-5 md:px-6 py-4">
            <summary className="cursor-pointer font-semibold text-navyBlue">
              Edit unit prices (assumptions)
            </summary>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
              {priceFields.map(({ k, x, header }) => (
                <React.Fragment key={k}>
                  {header && (
                    <div className="col-span-full text-[11px] font-bold tracking-[0.1em] uppercase text-gray-400 border-t border-gray-100 pt-3 first:border-0 first:pt-0">
                      {header}
                    </div>
                  )}
                  <div>
                    <label htmlFor={`p-${k}`} className="block text-xs font-medium text-gray-600 mb-1">
                      {x.r ? "≈ " : ""}
                      {x.l}
                    </label>
                    <input
                      id={`p-${k}`}
                      type="number"
                      step="any"
                      min="0"
                      value={priceText[k]}
                      onChange={(e) => setPrice(k, e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 text-sm tabular-nums text-navyBlue focus:outline-none focus:border-themeColor"
                    />
                  </div>
                </React.Fragment>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-5">
              Rough or unverified rates are marked &ldquo;≈&rdquo;. Fivetran and
              Airbyte Cloud billing is usage-based and hard to predict; check
              their calculators with your real row counts.{" "}
              <button
                type="button"
                onClick={resetPrices}
                className="inline-flex items-center gap-1 text-themeColor font-medium hover:underline"
              >
                <RotateCcw className="w-3 h-3" /> Reset prices to defaults
              </button>
            </p>
          </details>
        </div>
      </section>

      {/* ETL & BI */}
      <section id="stack" className="bg-[#f8f9ff] py-12 md:py-16 scroll-mt-24">
        <div className="container max-w-[1280px] mx-auto md:px-10 px-5">
          <SectionHead eyebrow="Whole stack" title="ETL and BI Tool Choices">
            The warehouse is only one part of the bill. With small data, the BI
            licences are often the biggest line.
          </SectionHead>
          <h3 className="text-lg font-semibold text-navyBlue mb-3">
            Getting data out of your systems (ETL / sync)
          </h3>
          <Table head={["Tool", "Pricing", "Est. for you", "Best for", "Effort", "Watch out"]}>
            {Object.keys(ETLI).map((e) => {
              const i = ETLI[e];
              return (
                <tr key={e}>
                  <td>
                    {ETLN[e]}
                    {e === pickE && <Pill>pick</Pill>}
                  </td>
                  <td>{i.price}</td>
                  <td className="text-right tabular-nums whitespace-nowrap">{usd(etlCost(e, a, d, P))}/mo</td>
                  <td>{i.best}</td>
                  <td>{i.eff}</td>
                  <td>{i.w}</td>
                </tr>
              );
            })}
          </Table>
          <h3 className="text-lg font-semibold text-navyBlue mt-10 mb-3">
            Dashboards and reports (BI)
          </h3>
          <Table head={["Tool", "Pricing", "Est. for you", "Best for", "Works well with", "Watch out"]}>
            {Object.keys(BII).map((b) => {
              const i = BII[b];
              return (
                <tr key={b}>
                  <td>
                    {BIN[b]}
                    {b === top.cost.bi && <Pill>pick</Pill>}
                  </td>
                  <td>{i.price}</td>
                  <td className="text-right tabular-nums whitespace-nowrap">{usd(biCost(b, a, d, P, top.id))}/mo</td>
                  <td>{i.best}</td>
                  <td>{i.with}</td>
                  <td>{i.w}</td>
                </tr>
              );
            })}
          </Table>
        </div>
      </section>

      {/* Security */}
      <section id="security" className="bg-white py-12 md:py-16 scroll-mt-24">
        <div className="container max-w-[1280px] mx-auto md:px-10 px-5">
          <SectionHead eyebrow="Security & compliance" title="Protecting Your Data in Analytics">
            Business data usually includes customer names, phone numbers,
            addresses, tax IDs and payment details. Copying it into an analytics
            system creates a second place that must be secured.
          </SectionHead>
          <Table head={["Platform", "India region", "Sign-in / SSO", "Row & column control", "Audit logs", "Own encryption keys", "Private network"]}>
            {PLAT.map((p) => (
              <tr key={p.id}>
                <td>{p.name}</td>
                {INFO[p.id].sec.map((s, i) => (
                  <td key={i}>{s}</td>
                ))}
              </tr>
            ))}
          </Table>
          <p className="text-xs text-gray-400 mt-3">
            Many of these features depend on the edition or tier you buy (for
            example Snowflake Enterprise or Business Critical, Databricks
            Enterprise, ClickHouse Enterprise). Confirm with the vendor before
            relying on one.
          </p>

          <div className="grid lg:grid-cols-2 gap-8 mt-12">
            <div>
              <h3 className="text-xl font-bold text-navyBlue mb-4">
                India&apos;s DPDP Act: where things stand
              </h3>
              <ol className="border-l-2 border-gray-200 space-y-1">
                {[
                  ["13 Nov 2025", "DPDP Rules notified. The Data Protection Board is set up and the phased rollout begins.", true],
                  ["Nov 2026", "Consent manager registration rules take effect.", false],
                  ["May 2027", "Most obligations apply: notice and consent, security safeguards, breach notification, data principal rights, retention and erasure, and cross-border transfer rules.", false],
                ].map(([date, text, done]) => (
                  <li key={date} className="relative pl-6 py-2.5">
                    <span
                      className={`absolute -left-[7px] top-4 w-3 h-3 rounded-full border-2 border-themeColor ${done ? "bg-themeColor" : "bg-white"}`}
                      aria-hidden="true"
                    />
                    <span className="block text-sm font-bold text-navyBlue">{date}</span>
                    <span className="block text-[15px] text-gray-500 leading-relaxed">{text}</span>
                  </li>
                ))}
              </ol>
              <p className="text-xs text-gray-400 mt-3">
                This is a summary, not legal advice. Check the final rules with
                your legal advisor, especially for retention periods and
                cross-border transfers.
              </p>
            </div>

            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
                <h3 className="text-xl font-bold text-navyBlue">Analytics security checklist</h3>
                <span className="text-sm font-semibold text-themeColor">
                  {doneCount} of {CHECK.length} done
                </span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden mb-4">
                <div
                  className="bg-themeColor h-full transition-all duration-300"
                  style={{ width: `${(doneCount / CHECK.length) * 100}%` }}
                />
              </div>
              <div className="space-y-2">
                {CHECK.map((t, i) => (
                  <label
                    key={i}
                    className={`flex items-start gap-3 rounded-xl border-2 p-3 text-sm cursor-pointer transition-all ${
                      checks[i] ? "border-themeColor/40 bg-blue-50/50" : "border-gray-200 hover:border-themeColor/30"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={checks[i]}
                      onChange={() => setChecks((s) => s.map((v, j) => (j === i ? !v : v)))}
                      className="mt-0.5 accent-themeColor"
                    />
                    <span className={checks[i] ? "text-navyBlue" : "text-gray-600"}>{t}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform guide */}
      <section id="platforms" className="bg-[#f8f9ff] py-12 md:py-16 scroll-mt-24">
        <div className="container max-w-[1280px] mx-auto md:px-10 px-5">
          <SectionHead eyebrow="Platform guide" title="When Each Data Platform Is the Right Call" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PLAT.map((p) => {
              const i = INFO[p.id];
              const isTop = p.id === top.id;
              return (
                <div
                  key={p.id}
                  className={`flex flex-col bg-white rounded-xl border-2 p-5 transition-all ${isTop ? "border-themeColor shadow-md" : "border-gray-200"}`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[11px] font-bold tracking-wider uppercase text-gray-400">{p.fam}</span>
                    {isTop && <Pill>your pick</Pill>}
                  </div>
                  <h3 className="text-lg font-semibold text-navyBlue mb-3">{p.name}</h3>
                  <ul className="space-y-1.5 text-sm text-gray-600 flex-1">
                    {i.when.map((w) => (
                      <li key={w} className="flex gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        {w}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[13px] text-gray-400 border-t border-dashed border-gray-200 pt-3 mt-4">
                    {i.avoid}
                  </p>
                </div>
              );
            })}
          </div>
          <h3 className="text-lg font-semibold text-navyBlue mt-10 mb-3">Side by side</h3>
          <Table head={["Platform", "Pricing model", "Sweet spot", "Maintenance", "Skills", "ML / AI", "Lock-in"]}>
            {PLAT.map((p) => {
              const i = INFO[p.id];
              return (
                <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>{i.price}</td>
                  <td>{i.sweet}</td>
                  <td>{i.maint}</td>
                  <td>{i.skills}</td>
                  <td>{i.ml}</td>
                  <td>{i.lock}</td>
                </tr>
              );
            })}
          </Table>
        </div>
      </section>

      {/* Growth path */}
      <section id="growth" className="bg-white py-12 md:py-16 scroll-mt-24">
        <div className="container max-w-[1280px] mx-auto md:px-10 px-5">
          <SectionHead eyebrow="Growth path" title="What to Use as Your Data Grows" />
          <ol className="border-l-2 border-gray-200">
            {LADDER.map((s, i) => {
              const here = i === ladderIdx;
              return (
                <li key={s.vol} className="relative grid sm:grid-cols-[170px_1fr] gap-1 sm:gap-4 pl-6 py-3">
                  <span
                    className={`absolute -left-[7px] top-[18px] w-3 h-3 rounded-full border-2 border-themeColor ${here ? "bg-themeColor" : "bg-white"}`}
                    aria-hidden="true"
                  />
                  <span className="text-sm font-bold text-navyBlue">{s.vol}</span>
                  <span className="text-[15px] text-gray-500 leading-relaxed">
                    {s.text}
                    {here && <Pill>you are here</Pill>}
                  </span>
                </li>
              );
            })}
          </ol>
          <p className="text-xs text-gray-400 mt-4">
            Keep reports in standard SQL so moving up a step means changing the
            database connection, not rebuilding dashboards. Scores are a guide
            built on common rules of thumb, not a benchmark.
          </p>
        </div>
      </section>

      {/* SEO Content */}
      <section className="bg-[#f8f9ff] py-12 md:py-16">
        <div className="container max-w-[1280px] mx-auto md:px-10 px-5">
          <div className="mb-12">
            <Heading
              type="h2"
              className="!font-extrabold text-gray-900 mb-4"
              text="How the Warehouse Platform Picker Works"
            />
            <p className="text-[16.5px] text-gray-500 leading-relaxed">
              Choosing a data warehouse is rarely about raw features. The right
              analytics platform depends on how much data you have, how fast it
              grows, how many people read dashboards, which cloud you already
              pay for and what your team can run. This picker scores PostgreSQL
              + Metabase, Amazon S3 + Athena, Redshift Serverless, Snowflake,
              Databricks, Google BigQuery, Microsoft Fabric and ClickHouse Cloud
              against those inputs, then ranks them on the priorities you
              weight.
            </p>
            <p className="text-[16.5px] text-gray-500 leading-relaxed mt-4">
              Every recommendation comes with a monthly cost estimate that
              covers the whole stack: warehouse compute, storage, the ETL tool
              that syncs your data and the BI tool your team uses for
              dashboards. For deeper, single-platform estimates, try the{" "}
              <Link href="/data-engineering-tools/snowflake-cost-calculator/" className="text-themeColor hover:underline">
                Snowflake cost calculator
              </Link>
              , the{" "}
              <Link href="/data-engineering-tools/databricks-cost-calculator/" className="text-themeColor hover:underline">
                Databricks cost calculator
              </Link>{" "}
              or the{" "}
              <Link href="/data-engineering-tools/snowflake-vs-databricks-advisor/" className="text-themeColor hover:underline">
                Snowflake vs Databricks advisor
              </Link>
              .
            </p>
          </div>
          <div>
            <Heading
              type="h2"
              className="!font-extrabold text-gray-900 mb-4"
              text="How to Choose the Right Data Warehouse"
            />
            <ul className="space-y-0">
              {[
                {
                  title: "Start with your data size, not the hype",
                  text: "Under about 1 crore rows, a single PostgreSQL server or BigQuery's free tier often beats an enterprise warehouse on both cost and simplicity.",
                },
                {
                  title: "Stay close to your current cloud",
                  text: "Redshift and Athena fit AWS, BigQuery fits Google Cloud and Fabric fits Microsoft 365. Staying in one cloud means one bill, one sign-in and no cross-cloud transfer fees.",
                },
                {
                  title: "Count the BI and ETL licences",
                  text: "With small data, per-user BI licences and usage-based ETL tools like Fivetran are often a bigger line on the bill than the warehouse itself.",
                },
                {
                  title: "Match the platform to your team's skills",
                  text: "SQL teams get productive fastest on Snowflake, BigQuery or Redshift. Databricks pays off when you have Python and Spark skills and ML or streaming workloads.",
                },
                {
                  title: "Check security and residency early",
                  text: "Row and column masking, audit logs, customer-managed keys and private networking often depend on the edition you buy, so confirm them before you commit.",
                },
              ].map((item) => (
                <li key={item.title} className="relative pl-7 py-3 border-b border-gray-100 last:border-0">
                  <span className="absolute left-0.5 top-[18px] w-2 h-2 rounded-sm bg-themeColor" aria-hidden="true" />
                  <span className="text-[16.5px]">
                    <strong className="text-navyBlue">{item.title}.</strong>{" "}
                    <span className="text-gray-500">{item.text}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <div className="text-center mx-auto mb-14" style={{ maxWidth: 720 }}>
            <span
              className="inline-block mb-4"
              style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#017eeb" }}
            >
              Common Questions
            </span>
            <h2
              className="font-extrabold"
              style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0d0f1a" }}
            >
              Frequently Asked Questions
            </h2>
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>
              Everything you need to know about choosing a data warehouse or
              analytics platform.
            </p>
          </div>
          <div className="mx-auto" style={{ maxWidth: 860 }}>
            {FAQ_DATA.map((item, i) => (
              <GradientFAQAccordion key={i + 1} id={`wpp-faq-${i + 1}`} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white pb-16 md:pb-20">
        <div className="container max-w-[1280px] mx-auto md:px-10 px-5">
          <div className="bg-[#f2f9fe] border border-gray-200 rounded-2xl py-14 px-6 md:px-12 text-center">
            <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-themeColor flex items-center justify-center gap-1.5 mb-4">
              <Database className="w-3.5 h-3.5" /> PLATFORM SELECTION
            </span>
            <Heading type="h2" className="!font-extrabold text-gray-900 mb-3" text="Not Sure Which Platform to Commit To?" />
            <p className="text-[17px] text-gray-500 max-w-[560px] mx-auto">
              Our data engineers build on Snowflake, Databricks, BigQuery and
              AWS. We&apos;ll help you validate the choice and plan the
              migration before you spend a rupee.
            </p>
            <div className="flex justify-center gap-4 flex-wrap mt-7">
              <button
                onClick={openCal}
                className="c-button c-btn-primary c-btn-medium outline-none overflow-hidden whitespace-nowrap transition-all duration-300 border hover:!text-themeColor"
              >
                <span>Talk to Our Expert</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
              <Link
                href="/data-engineering-tools/"
                className="c-button c-btn-medium outline-none overflow-hidden whitespace-nowrap transition-all duration-300 border border-themeColor text-themeColor hover:bg-themeColor hover:text-white"
              >
                Explore All Tools
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WarehousePlatformPicker;
