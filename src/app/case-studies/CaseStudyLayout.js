"use client";
import React from "react";
import Image from "next/image";
import Heading from "../components/HTMLComponents/Heading";
import Link from "next/link";
import { getCalApi } from "@calcom/embed-react";
import { ArrowRight, ArrowLeft } from "lucide-react";

const CaseStudyLayout = ({
  kicker,
  title,
  subtitle,
  heroImage,
  proofBar,
  situation,
  findings,
  pullQuote,
  whatWeBuilt,
  outcome,
  clientQuote,
  projectFacts,
  ctaHeading,
  ctaBody,
  ctaButton,
}) => {
  return (
    <>
      {/* Hero */}
      <section className="bg-navyBlue relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(900px 480px at 82% -10%, rgba(61,123,255,0.22), transparent 60%), radial-gradient(640px 380px at 5% 8%, rgba(52,229,160,0.10), transparent 55%)",
          }}
        />
        <div className="container max-w-[1280px] mx-auto md:px-10 px-5 relative z-10 pt-28 pb-16 md:pt-32 md:pb-20">
          <div className="mb-4">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-white/50 text-sm font-medium hover:text-white/80 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> All case studies
            </Link>
          </div>

          <div className="grid lg:grid-cols-[1fr_420px] gap-8 lg:gap-12 items-center">
            <div>
              <span
                className="inline-block mb-4"
                style={{
                  fontFamily: "monospace",
                  fontSize: 12,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#34d399",
                  fontWeight: 600,
                }}
              >
                {kicker}
              </span>
              <Heading
                type="h1"
                className="text-white !font-extrabold max-w-[720px]"
                text={title}
              />
              <p className="text-white/60 lg:text-lg md:text-base text-base !mt-6 max-w-[600px] leading-relaxed">
                {subtitle}
              </p>
            </div>

            {heroImage && (
              <div className="hidden lg:block relative">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <Image
                    src={heroImage}
                    alt={title}
                    fill
                    // sizes="420px"
                    className="object-fill"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navyBlue/30 to-transparent" />
                </div>
              </div>
            )}
          </div>

          {/* Proof bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-xl overflow-hidden border border-white/10 mt-10">
            {proofBar.map((stat, i) => (
              <div key={i} className="bg-white/[0.03] p-5 text-center">
                <div
                  className={`text-2xl md:text-[28px] font-extrabold pb-1 ${
                    stat.highlight ? "text-[#34d399]" : "text-white"
                  }`}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white">
        <div className="container max-w-[1280px] mx-auto md:px-10 px-5 py-3">
          <nav className="text-sm text-gray-400" aria-label="Breadcrumb">
            <Link href="/" className="text-themeColor hover:underline">
              Home
            </Link>
            <span className="mx-1.5">/</span>
            <Link
              href="/case-studies/"
              className="text-themeColor hover:underline"
            >
              Case Studies
            </Link>
            <span className="mx-1.5">/</span>
            <span className="text-gray-600 font-medium">{kicker}</span>
          </nav>
        </div>
      </div>

      {/* Body */}
      <section className="bg-white py-12 md:py-16">
        <div className="container max-w-[1280px] mx-auto md:px-10 px-5">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12 items-start">
            {/* Main content */}
            <div>
              {/* Situation */}
              <div className="mb-12">
                <h2 className="flex items-baseline gap-3 mb-5">
                  <span className="text-themeColor font-mono text-sm font-semibold">
                    01
                  </span>
                  <span
                    className="font-extrabold tracking-tight text-navyBlue"
                    style={{ fontSize: "clamp(23px, 2.9vw, 30px)" }}
                  >
                    {situation.heading || "The situation"}
                  </span>
                </h2>
                {situation.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className={`text-[16.5px] leading-relaxed mb-4 ${
                      i === 0
                        ? "text-navyBlue text-[19px] leading-[1.55]"
                        : "text-gray-500"
                    }`}
                  >
                    {p}
                  </p>
                ))}
              </div>

              {/* Findings */}
              {findings && (
                <div className="mb-12">
                  <h2 className="flex items-baseline gap-3 mb-5">
                    <span className="text-themeColor font-mono text-sm font-semibold">
                      02
                    </span>
                    <span
                      className="font-extrabold tracking-tight text-navyBlue"
                      style={{ fontSize: "clamp(23px, 2.9vw, 30px)" }}
                    >
                      {findings.heading || "What we found"}
                    </span>
                  </h2>
                  {findings.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      className="text-[16.5px] text-gray-500 leading-relaxed mb-4"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              )}

              {/* Pull quote */}
              {pullQuote && (
                <blockquote className="border-l-[3px] border-[#34d399] pl-6 py-1 my-10">
                  <p
                    className="font-extrabold text-navyBlue leading-snug"
                    style={{ fontSize: "clamp(20px, 2.5vw, 25px)" }}
                  >
                    {pullQuote}
                  </p>
                </blockquote>
              )}

              {/* What we built */}
              <div className="mb-12">
                <h2 className="flex items-baseline gap-3 mb-5">
                  <span className="text-themeColor font-mono text-sm font-semibold">
                    {findings ? "03" : "02"}
                  </span>
                  <span
                    className="font-extrabold tracking-tight text-navyBlue"
                    style={{ fontSize: "clamp(23px, 2.9vw, 30px)" }}
                  >
                    {whatWeBuilt.heading || "What we built"}
                  </span>
                </h2>
                <div className="space-y-0">
                  {whatWeBuilt.items.map((item, i) => (
                    <div
                      key={i}
                      className="py-5 border-b border-gray-100 last:border-0"
                    >
                      <h3 className="text-themeColor font-semibold text-[16px] mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-[16px] text-gray-500 leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outcome */}
              <div className="mb-12">
                <h2 className="flex items-baseline gap-3 mb-5">
                  <span className="text-themeColor font-mono text-sm font-semibold">
                    {findings ? "04" : "03"}
                  </span>
                  <span
                    className="font-extrabold tracking-tight text-navyBlue"
                    style={{ fontSize: "clamp(23px, 2.9vw, 30px)" }}
                  >
                    {outcome.heading || "The outcome"}
                  </span>
                </h2>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="border border-gray-200 rounded-xl overflow-hidden">
                    <div className="bg-red-50 text-red-700 font-mono text-[11px] font-semibold tracking-wider uppercase px-4 py-3">
                      Before
                    </div>
                    {outcome.before.map((row, i) => (
                      <div
                        key={i}
                        className="px-4 py-3 border-t border-gray-100"
                      >
                        <div className="font-mono text-[11px] text-gray-400 mb-0.5">
                          {row.label}
                        </div>
                        <div className="text-sm text-gray-500">{row.value}</div>
                      </div>
                    ))}
                  </div>
                  <div className="border border-gray-200 rounded-xl overflow-hidden">
                    <div className="bg-green-50 text-green-700 font-mono text-[11px] font-semibold tracking-wider uppercase px-4 py-3">
                      After
                    </div>
                    {outcome.after.map((row, i) => (
                      <div
                        key={i}
                        className="px-4 py-3 border-t border-gray-100"
                      >
                        <div className="font-mono text-[11px] text-gray-400 mb-0.5">
                          {row.label}
                        </div>
                        <div className="text-sm font-semibold text-navyBlue">
                          {row.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {outcome.summary && (
                  <p className="text-[16.5px] text-gray-500 leading-relaxed">
                    {outcome.summary}
                  </p>
                )}
              </div>

              {/* Client quote */}
              {clientQuote && (
                <div className="bg-navyBlue rounded-xl p-8 mb-12">
                  <p
                    className="font-extrabold text-white leading-snug mb-3"
                    style={{ fontSize: "clamp(19px, 2.4vw, 24px)" }}
                  >
                    &ldquo;{clientQuote.text}&rdquo;
                  </p>
                  <span className="font-mono text-[12.5px] text-white/50">
                    {clientQuote.attribution}
                  </span>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-24 border border-gray-200 rounded-xl p-6 bg-[#f8f9ff]">
              <h4 className="font-mono text-[11px] font-semibold tracking-widest uppercase text-gray-400 mb-4">
                Project at a glance
              </h4>
              {projectFacts.map((fact, i) => (
                <div
                  key={i}
                  className={`py-3 ${i > 0 ? "border-t border-gray-200" : ""}`}
                >
                  <div className="font-mono text-[11px] text-gray-400 mb-1">
                    {fact.label}
                  </div>
                  {fact.chips ? (
                    <div className="flex flex-wrap gap-1.5">
                      {fact.chips.map((chip, j) => (
                        <span
                          key={j}
                          className="font-mono text-[11.5px] border border-gray-200 rounded-md px-2 py-1 text-gray-500 bg-white"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <div className="text-sm font-semibold text-navyBlue">
                      {fact.value}
                    </div>
                  )}
                </div>
              ))}
            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 md:py-20">
        <div className="container max-w-[1280px] mx-auto md:px-10 px-5">
          <div className="bg-[#f2f9fe] border border-gray-200 rounded-2xl py-14 px-6 md:px-12 text-center">
            <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-themeColor block mb-4">
              YOUR PROJECT, NEXT
            </span>
            <Heading
              type="h2"
              className="!font-extrabold text-gray-900 mb-3"
              text={ctaHeading}
            />
            <p className="text-[17px] text-gray-500 max-w-[520px] mx-auto">
              {ctaBody}
            </p>
            <div className="flex justify-center gap-4 flex-wrap mt-7">
              <button
                onClick={async () => {
                  const cal = await getCalApi({});
                  cal("modal", {
                    calLink: "vikas-singh-bril/30-min-product-eng-review",
                    config: { theme: "light" },
                  });
                }}
                className="c-button c-btn-primary c-btn-medium outline-none overflow-hidden whitespace-nowrap transition-all duration-300 border hover:!text-themeColor"
              >
                <span>{ctaButton || "Get a Cost Audit"}</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
              <Link
                href="/data/"
                className="c-button c-btn-medium outline-none overflow-hidden whitespace-nowrap transition-all duration-300 border border-themeColor text-themeColor hover:bg-themeColor hover:text-white"
              >
                Our Data Engineering Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudyLayout;
