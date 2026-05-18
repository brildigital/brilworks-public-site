"use client";

import { useEffect, useState } from "react";
import { trackEvent, installScrollDepth } from "../lib/tracking";

const PAGE_KEY = "ai_tools_audit";

const BOOKING_URL =
  process.env.NEXT_PUBLIC_AI_AUDIT_BOOKING_URL ||
  "mailto:hitesh.u@brilworks.com?subject=AI%20Tools%20Audit%20%E2%80%94%20%24999";

const PAYMENT_URL =
  process.env.NEXT_PUBLIC_AI_AUDIT_PAYMENT_URL ||
  "mailto:hitesh.u@brilworks.com?subject=AI%20Tools%20Audit%20%E2%80%94%20payment%20link%20request";

const FAQS = [
  {
    q: "What if I don't get 5 hours back?",
    a: "Full refund. Not store credit. Not partial. Full.",
  },
  {
    q: "How long does this take?",
    a: "About 2 hours of your time across two calls. We do the rest in 4 days.",
  },
  {
    q: "Will you try to upsell me?",
    a: "Only if you ask. Implementation is opt-in. The audit stands on its own.",
  },
  {
    q: "What tools will you recommend?",
    a: "Whatever fits your workflow. We're tool-agnostic. We pick what works, not what we sell.",
  },
  {
    q: "Do you sign an NDA?",
    a: "Yes, on request. Discovery transcripts stay in our private workspace.",
  },
  {
    q: "What if I don't have any AI tools yet?",
    a: "That's fine. Most of our clients start from zero. The whole point is you don't need to know the landscape — that's our job.",
  },
];

const DELIVERABLES = [
  {
    icon: "🎙️",
    text: "A 45-minute recorded discovery call — your time sinks, in your own words.",
  },
  {
    icon: "📄",
    text: "A custom report with 3-7 specific tool recommendations, tied to YOUR workflows.",
  },
  {
    icon: "🗓️",
    text: "A 4-day quick-start plan — not a 200-page strategy doc.",
  },
  {
    icon: "🎬",
    text: "A 30-minute walkthrough call where we demo each tool live.",
  },
  {
    icon: "✅",
    text: "The guarantee: 5+ hours/week returned, or full refund.",
    bold: true,
  },
];

const STEPS = [
  {
    day: "Day 0",
    title: "Book",
    body: "Pick a slot on Calendly. Pay $999.",
  },
  {
    day: "Day 1",
    title: "Discover",
    body: "45-minute Zoom. Recorded by Fathom. We pull the time sinks.",
  },
  {
    day: "Day 2-3",
    title: "Analyze + Report",
    body: "We process the call and deliver the report (PDF + Gamma).",
  },
  {
    day: "Day 4",
    title: "Walkthrough",
    body: "30-min call. Demo each tool. Hand off the 4-day plan.",
  },
];

const WHO_FOR = [
  "Owners of 10–50-person businesses who know AI should help but don't know where to start.",
  "Teams paying for ChatGPT/Claude already, but only using them for one-off questions.",
  "Owners who've bought 3+ AI tools that nobody on the team actually uses.",
];

function CTAButton({ slot, children, primary = true }) {
  const onClick = () => {
    trackEvent(`${PAGE_KEY}_book_click`, { slot });
  };
  const base =
    "inline-flex items-center justify-center font-semibold rounded-lg px-7 py-4 text-base md:text-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500";
  const styles = primary
    ? "bg-blue-600 text-white hover:bg-blue-700"
    : "bg-white text-blue-700 border border-blue-600 hover:bg-blue-50";
  return (
    <a
      href={BOOKING_URL}
      onClick={onClick}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles}`}
      data-cta-slot={slot}
    >
      {children}
    </a>
  );
}

function PayLink({ slot, className = "" }) {
  const onClick = () => {
    trackEvent(`${PAGE_KEY}_pay_click`, { slot });
  };
  return (
    <a
      href={PAYMENT_URL}
      onClick={onClick}
      target="_blank"
      rel="noopener noreferrer"
      className={`underline underline-offset-2 hover:no-underline text-blue-700 ${className}`}
      data-pay-slot={slot}
    >
      Pay $999 directly
    </a>
  );
}

const AIToolsAudit = () => {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    trackEvent(`${PAGE_KEY}_view`);
    const cleanup = installScrollDepth(PAGE_KEY);
    return cleanup;
  }, []);

  return (
    <main className="bg-white text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">
        <div className="mx-auto max-w-5xl px-5 py-16 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
            AI Tools Audit · $999 · 48-hour turnaround
          </p>
          <h1 className="mt-4 text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            Stop guessing which AI tool to buy. Get a custom plan for your
            business in 48 hours.
          </h1>
          <p className="mt-5 text-lg md:text-xl text-slate-700 max-w-3xl">
            A 45-minute audit, a personalized 3–7 tool recommendation report,
            and a 4-day implementation plan. $999. 5+ hours/week returned, or
            full refund.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <CTAButton slot="hero">Book my audit — $999</CTAButton>
            <PayLink
              slot="hero"
              className="self-center text-sm text-slate-600"
            />
          </div>
          <p className="mt-6 text-sm text-slate-600">
            Built by Brilworks — 12 years building software for SMBs.
          </p>
        </div>
      </section>

      {/* Who this is for */}
      <section className="mx-auto max-w-5xl px-5 py-14 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold">Who this is for</h2>
        <ul className="mt-6 grid gap-5 md:grid-cols-3">
          {WHO_FOR.map((line) => (
            <li
              key={line}
              className="rounded-xl border border-slate-200 bg-white p-5 text-slate-700 shadow-sm"
            >
              {line}
            </li>
          ))}
        </ul>
      </section>

      {/* What you get */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-5 py-14 md:py-20">
          <h2 className="text-2xl md:text-3xl font-bold">What you get</h2>
          <ul className="mt-6 space-y-4">
            {DELIVERABLES.map((d) => (
              <li
                key={d.text}
                className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm border border-slate-200"
              >
                <span className="text-2xl leading-none" aria-hidden="true">
                  {d.icon}
                </span>
                <p
                  className={
                    d.bold
                      ? "font-semibold text-slate-900"
                      : "text-slate-700"
                  }
                >
                  {d.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* The 4-step process */}
      <section className="mx-auto max-w-5xl px-5 py-14 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold">The 4-step process</h2>
        <ol className="mt-8 grid gap-5 md:grid-cols-4">
          {STEPS.map((s, i) => (
            <li
              key={s.day}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-bold">
                  {i + 1}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-700">
                  {s.day}
                </span>
              </div>
              <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-slate-700 text-sm leading-relaxed">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Pricing */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-3xl px-5 py-14 md:py-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center">
            Pricing — single tier, transparent
          </h2>
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex items-baseline justify-between gap-4 flex-wrap">
              <h3 className="text-xl font-bold">AI Tools Assessment</h3>
              <p className="text-3xl font-bold">$999</p>
            </div>
            <p className="mt-2 text-slate-700">
              Everything above. One flat fee. No subscription.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <CTAButton slot="pricing">Book my audit — $999</CTAButton>
              <PayLink slot="pricing" className="self-center text-sm" />
            </div>
          </div>
          <p className="mt-6 text-sm text-slate-600 text-center">
            <strong>Want us to build it for you?</strong> Most clients (about
            60%) ask Brilworks to implement after the audit. Implementation
            projects start at $3,000. We'll quote separately if you want it.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-5 py-14 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold">FAQ</h2>
        <ul className="mt-6 divide-y divide-slate-200 border-y border-slate-200">
          {FAQS.map((item, idx) => {
            const open = openFaq === idx;
            return (
              <li key={item.q}>
                <button
                  type="button"
                  className="w-full text-left py-4 flex items-start justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                  aria-expanded={open}
                  onClick={() => {
                    setOpenFaq(open ? null : idx);
                    if (!open) {
                      trackEvent(`${PAGE_KEY}_faq_open`, { question: item.q });
                    }
                  }}
                >
                  <span className="font-semibold text-slate-900">
                    {item.q}
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-slate-500 text-xl leading-none"
                  >
                    {open ? "−" : "+"}
                  </span>
                </button>
                {open ? (
                  <p className="pb-5 text-slate-700">{item.a}</p>
                ) : null}
              </li>
            );
          })}
        </ul>
      </section>

      {/* About Brilworks */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-3xl px-5 py-14 md:py-20">
          <h2 className="text-2xl md:text-3xl font-bold">About Brilworks</h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            12 years of custom software for SMBs and startups. The team has
            shipped Next.js, mobile, and AI-agent systems for clients across
            the US, UK, and India. The audit is delivered by senior engineers,
            not interns.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-3xl px-5 py-16 md:py-24 text-center">
        <h2 className="text-2xl md:text-4xl font-bold">
          Book your audit now — $999.
        </h2>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <CTAButton slot="footer">Book my audit — $999</CTAButton>
          <PayLink
            slot="footer"
            className="self-center text-sm text-slate-600"
          />
        </div>
        <p className="mt-6 text-slate-600">
          Or email{" "}
          <a
            href="mailto:hitesh.u@brilworks.com"
            className="text-blue-700 underline underline-offset-2 hover:no-underline"
            onClick={() => trackEvent(`${PAGE_KEY}_email_click`)}
          >
            hitesh.u@brilworks.com
          </a>{" "}
          if you want to talk first.
        </p>
      </section>
    </main>
  );
};

export default AIToolsAudit;
