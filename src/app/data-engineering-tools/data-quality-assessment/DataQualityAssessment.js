"use client";
import React, { useState } from "react";
import Heading from "../../components/HTMLComponents/Heading";
import GradientFAQAccordion from "../../components/Common/GradientFAQAccordion";
import Link from "next/link";
import { getCalApi } from "@calcom/embed-react";
import "../../styles/ServiceLightTheme.css";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Star,
} from "lucide-react";

const QUESTIONS = [
  {
    id: 1,
    category: "Accuracy",
    question:
      "Do you validate incoming data against expected formats and business rules?",
    weight: 10,
    riskIfNo:
      "Unvalidated data leads to inaccurate reports and unreliable analytics",
  },
  {
    id: 2,
    category: "Accuracy",
    question: "Are data corrections tracked and auditable?",
    weight: 8,
    riskIfNo:
      "Without audit trails, it is difficult to identify when and why data changed",
  },
  {
    id: 3,
    category: "Completeness",
    question: "Do you monitor for missing or null values in critical fields?",
    weight: 10,
    riskIfNo:
      "Missing values reduce the reliability of dashboards and downstream systems",
  },
  {
    id: 4,
    category: "Completeness",
    question: "Are all expected data sources consistently delivering data?",
    weight: 8,
    riskIfNo:
      "Gaps in data delivery create incomplete views of business performance",
  },
  {
    id: 5,
    category: "Consistency",
    question: "Are naming conventions and formats standardized across systems?",
    weight: 10,
    riskIfNo:
      "Inconsistent formats make it difficult to combine and compare data accurately",
  },
  {
    id: 6,
    category: "Consistency",
    question:
      "Do you deduplicate records before they reach production systems?",
    weight: 10,
    riskIfNo:
      "Duplicate records create inflated metrics and conflicting information",
  },
  {
    id: 7,
    category: "Timeliness",
    question:
      "Is data refreshed frequently enough to support business decisions?",
    weight: 8,
    riskIfNo: "Stale data leads to decisions based on outdated information",
  },
  {
    id: 8,
    category: "Timeliness",
    question: "Are SLAs defined for how quickly data should be available?",
    weight: 8,
    riskIfNo: "Without SLAs, delays go unnoticed until they affect operations",
  },
  {
    id: 9,
    category: "Governance",
    question: "Do you have clear data ownership for each dataset?",
    weight: 10,
    riskIfNo:
      "Lack of ownership means quality issues are rarely prioritized or resolved",
  },
  {
    id: 10,
    category: "Governance",
    question: "Are data quality metrics tracked and reviewed regularly?",
    weight: 10,
    riskIfNo:
      "Without measurement, data quality degrades gradually without anyone noticing",
  },
  {
    id: 11,
    category: "Governance",
    question: "Are sensitive fields classified and access-controlled?",
    weight: 8,
    riskIfNo:
      "Unclassified sensitive data creates compliance and security risks",
  },
];

const getScoreLabel = (score) => {
  if (score >= 80)
    return {
      label: "Strong",
      color: "text-green-600",
      bg: "bg-green-50",
      border: "border-green-200",
    };
  if (score >= 60)
    return {
      label: "Moderate",
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-200",
    };
  if (score >= 40)
    return {
      label: "Needs Improvement",
      color: "text-yellow-600",
      bg: "bg-yellow-50",
      border: "border-yellow-200",
    };
  return {
    label: "Critical",
    color: "text-red-600",
    bg: "bg-red-50",
    border: "border-red-200",
  };
};

const FAQ_DATA = [
  {
    q: "What is data quality?",
    a: "Data quality refers to how accurate, complete, consistent, timely, and reliable your data is for its intended purpose. High-quality data supports better decision making, reporting, and business operations.",
  },
  {
    q: "Why is data quality important?",
    a: "Poor data quality can lead to inaccurate reports, operational inefficiencies, compliance issues, and unreliable AI outcomes. Maintaining high-quality data helps organizations make better business decisions with confidence.",
  },
  {
    q: "What is a data quality assessment?",
    a: "A Data Quality Assessment evaluates the condition of your data and identifies issues that may affect business performance. The results are often documented in a data quality assessment report with recommendations for improvement.",
  },
  {
    q: "What is a data quality assessment framework?",
    a: "A data quality assessment framework is a structured approach for measuring and improving data quality using defined standards, metrics, and governance practices. It helps organizations monitor data quality consistently over time.",
  },
  {
    q: "How can I improve data quality?",
    a: "Improving data quality typically involves establishing governance policies, validating incoming data, removing duplicates, standardizing formats, monitoring quality metrics, and regularly reviewing data against business rules.",
  },
];

const DataQualityAssessment = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [showEmail, setShowEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const isValidEmail = (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());

  const handleAnswer = (value) => {
    setSelectedAnswer(value);
    const newAnswers = { ...answers, [currentQ]: value };
    setAnswers(newAnswers);

    setTimeout(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        if (currentQ < QUESTIONS.length - 1) {
          setCurrentQ(currentQ + 1);
        } else {
          setShowEmail(true);
        }
        setSelectedAnswer(null);
        setIsTransitioning(false);
      }, 300);
    }, 400);
  };

  const calculateScore = async () => {
    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    setEmailError("");
    setIsSubmitting(true);

    let totalScore = 0;
    let maxScore = 0;
    const categoryScores = {};

    QUESTIONS.forEach((q, i) => {
      const answer = answers[i];
      const points =
        answer === "yes" ? q.weight : answer === "partial" ? q.weight * 0.5 : 0;
      totalScore += points;
      maxScore += q.weight;

      if (!categoryScores[q.category]) {
        categoryScores[q.category] = { earned: 0, total: 0, risks: [] };
      }
      categoryScores[q.category].earned += points;
      categoryScores[q.category].total += q.weight;
      if (answer !== "yes") {
        categoryScores[q.category].risks.push({
          question: q.question,
          risk: q.riskIfNo,
        });
      }
    });

    const score = Math.round((totalScore / maxScore) * 100);
    const topRisks = QUESTIONS.filter((q, i) => answers[i] === "no")
      .slice(0, 3)
      .map((q) => ({ category: q.category, risk: q.riskIfNo }));

    const answerSummary = {};
    QUESTIONS.forEach((q, i) => {
      answerSummary[`Q${i + 1}: ${q.question}`] = answers[i] || "skipped";
    });

    try {
      await fetch("/api/tool-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          page: "/data-engineering-tools/data-quality-assessment/",
          toolFormData: {
            "Data Quality Score": `${score}/100`,
            Rating: getScoreLabel(score).label,
            "Top Risks": topRisks.map((r) => r.category).join(", ") || "None",
            ...answerSummary,
          },
        }),
      });
    } catch (err) {
      console.error("Failed to submit lead:", err);
    }

    setIsSubmitting(false);
    setResult({ score, categoryScores, topRisks });
  };

  const resetAssessment = () => {
    setResult(null);
    setShowEmail(false);
    setCurrentQ(0);
    setAnswers({});
    setEmail("");
    setEmailError("");
  };

  const q = QUESTIONS[currentQ];

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
            className="!font-extrabold max-w-[720px] text-[#0b1e33]"
            text="Data Quality Assessment"
          />
          <p
            className="lg:text-lg md:text-base text-base !mt-6 max-w-[600px] leading-relaxed"
            style={{ color: "#566678" }}
          >
            Evaluate the quality of your data across accuracy, completeness,
            consistency, and reliability. Get a clear picture of your data
            health and identify the biggest risks affecting analytics and AI.
          </p>
          <div className="mt-8">
            <a
              href="#calculator"
              className="w-fit c-button c-btn-primary c-btn-medium inline-flex items-center gap-2 hover:!text-themeColor"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("calculator")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Start Assessment <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div
            className="flex flex-wrap gap-5 mt-8 pt-6"
            style={{ borderTop: "1px solid #e4eaf1" }}
          >
            {[
              "No signup required",
              "11 questions, under 2 min",
              "Score + risk analysis",
            ].map((item, i) => (
              <div
                key={i}
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
          <nav
            className="text-sm"
            style={{ color: "#6b7a8a" }}
            aria-label="Breadcrumb"
          >
            <Link
              href="/"
              style={{ color: "#2f6bff" }}
              className="hover:underline"
            >
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
              Data Quality Assessment
            </span>
          </nav>
        </div>
      </div>

      {/* Assessment */}
      <section id="calculator" className="bg-[#f8f9ff] py-12 md:py-16">
        <div className="container max-w-[1280px] mx-auto md:px-10 px-5">
          {!result ? (
            <div className="bg-white border border-gray-200 rounded-2xl shadow-lg shadow-gray-200/60 overflow-hidden">
              <div className="svc-mid-cta-bg px-6 md:px-10 py-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/60 text-xs font-semibold tracking-wider uppercase">
                      {showEmail
                        ? "Last step"
                        : `Question ${currentQ + 1} of ${QUESTIONS.length}`}
                    </p>
                    <p className="text-white font-semibold text-lg mt-0.5">
                      {showEmail ? "Get Your Score" : q.category}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {[...Array(QUESTIONS.length + 1)].map((_, i) => (
                      <div
                        key={i}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          i <= (showEmail ? QUESTIONS.length : currentQ)
                            ? "bg-themeColor w-3"
                            : "bg-white/20 w-2"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 md:px-10 py-8">
                {showEmail ? (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-navyBlue">
                      Enter your work email to see your data quality report.
                    </h3>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (emailError) setEmailError("");
                      }}
                      placeholder="you@company.com"
                      className={`w-full px-4 py-3 rounded-lg border-2 text-sm font-medium transition-colors focus:outline-none focus:border-themeColor ${emailError ? "border-red-400 bg-red-50" : "border-gray-200 bg-white"}`}
                    />
                    {emailError && (
                      <p className="text-red-500 text-xs mt-1.5">
                        {emailError}
                      </p>
                    )}
                    <p className="text-xs text-gray-400">
                      We&apos;ll only use this to send your report. No spam.
                    </p>
                  </div>
                ) : (
                  <div
                    className={`space-y-6 transition-opacity duration-300 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
                  >
                    <div className="bg-white rounded-xl p-6 border border-gray-200 min-h-[120px] flex flex-col justify-center">
                      <p className="text-lg font-semibold text-navyBlue">
                        {q.question}
                      </p>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        {
                          value: "yes",
                          label: "Yes",
                          icon: CheckCircle,
                          selectedBg: "bg-green-100",
                          selectedBorder: "border-green-500",
                          cls: "text-green-600 border-green-200 hover:bg-green-50",
                        },
                        {
                          value: "partial",
                          label: "Partially",
                          icon: AlertTriangle,
                          selectedBg: "bg-yellow-100",
                          selectedBorder: "border-yellow-500",
                          cls: "text-yellow-600 border-yellow-200 hover:bg-yellow-50",
                        },
                        {
                          value: "no",
                          label: "No",
                          icon: XCircle,
                          selectedBg: "bg-red-100",
                          selectedBorder: "border-red-500",
                          cls: "text-red-600 border-red-200 hover:bg-red-50",
                        },
                      ].map((opt) => {
                        const isSelected = selectedAnswer === opt.value;
                        return (
                          <button
                            key={opt.value}
                            onClick={() =>
                              !selectedAnswer && handleAnswer(opt.value)
                            }
                            disabled={!!selectedAnswer}
                            className={`flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-all duration-200 ${
                              isSelected
                                ? `${opt.selectedBg} ${opt.selectedBorder} scale-105 shadow-md`
                                : selectedAnswer
                                  ? "opacity-40 cursor-default border-gray-200"
                                  : opt.cls
                            }`}
                          >
                            <opt.icon
                              className={`w-6 h-6 transition-transform duration-200 ${isSelected ? "scale-110" : ""}`}
                            />
                            <span className="font-medium text-sm">
                              {opt.label}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex justify-between items-center px-6 md:px-10 py-5 bg-gray-50 border-t border-gray-100">
                <button
                  onClick={() => {
                    if (showEmail) setShowEmail(false);
                    else if (currentQ > 0) setCurrentQ(currentQ - 1);
                  }}
                  className={`flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-navyBlue transition-colors ${currentQ === 0 && !showEmail ? "invisible" : ""}`}
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                {showEmail && (
                  <button
                    onClick={calculateScore}
                    disabled={isSubmitting}
                    className="c-button c-btn-primary c-btn-medium hover:!bg-navyBlue hover:!text-white inline-flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Calculating..." : "See My Score"}{" "}
                    {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-navyBlue">
                  Your Data Quality Score
                </h2>
                <button
                  onClick={resetAssessment}
                  className="text-themeColor font-medium text-sm hover:underline flex items-center gap-1"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Retake Assessment
                </button>
              </div>

              {/* Score card */}
              {(() => {
                const scoreInfo = getScoreLabel(result.score);
                return (
                  <div
                    className={`rounded-2xl p-8 border ${scoreInfo.bg} ${scoreInfo.border} text-center relative overflow-hidden`}
                  >
                    <div
                      className={`absolute top-0 left-0 w-full h-1 ${
                        result.score >= 80
                          ? "bg-gradient-to-r from-green-500 to-emerald-400"
                          : result.score >= 60
                            ? "bg-gradient-to-r from-blue-500 to-cyan-400"
                            : result.score >= 40
                              ? "bg-gradient-to-r from-yellow-500 to-amber-400"
                              : "bg-gradient-to-r from-red-500 to-orange-400"
                      }`}
                    />
                    <p className="text-6xl font-extrabold text-navyBlue tracking-tight">
                      {result.score}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">out of 100</p>
                    <span
                      className={`inline-block mt-3 px-4 py-1.5 rounded-full text-sm font-semibold ${scoreInfo.color} ${scoreInfo.bg} border ${scoreInfo.border}`}
                    >
                      {scoreInfo.label}
                    </span>
                  </div>
                );
              })()}

              {/* Category breakdown */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">
                  Category Breakdown
                </h3>
                <div className="space-y-4">
                  {Object.entries(result.categoryScores).map(
                    ([category, data], idx, arr) => {
                      const pct = Math.round((data.earned / data.total) * 100);
                      return (
                        <div key={category}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-semibold text-navyBlue">
                              {category}
                            </span>
                            <span
                              className={`text-sm font-bold ${pct >= 70 ? "text-green-600" : pct >= 40 ? "text-yellow-600" : "text-red-600"}`}
                            >
                              {pct}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-100 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full transition-all ${pct >= 70 ? "bg-green-500" : pct >= 40 ? "bg-yellow-500" : "bg-red-500"}`}
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                          {data.risks.length > 0 && (
                            <div className="mt-2 space-y-1">
                              {data.risks.map((r, i) => (
                                <p
                                  key={i}
                                  className="text-xs text-gray-500 flex items-start gap-1.5"
                                >
                                  <XCircle className="w-3 h-3 text-red-400 mt-0.5 shrink-0" />
                                  {r.risk}
                                </p>
                              ))}
                            </div>
                          )}
                          {idx < arr.length - 1 && (
                            <div className="border-t border-gray-100 mt-4" />
                          )}
                        </div>
                      );
                    },
                  )}
                </div>
              </div>

              {/* Top risks */}
              {result.topRisks.length > 0 && (
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-bold text-amber-900">
                        Top risks to your data quality
                      </p>
                      <div className="mt-2 space-y-2">
                        {result.topRisks.map((r, i) => (
                          <p key={i} className="text-sm text-amber-700">
                            <strong>{r.category}:</strong> {r.risk}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Lead gen CTA */}
              <div className="relative svc-mid-cta-bg rounded-2xl p-7 md:p-9 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none svc-mid-cta-glow" />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Can you trust your data?
                  </h3>
                  <p className="text-white/60 text-[15px] max-w-3xl leading-relaxed">
                    We&apos;ll help you identify the quality issues affecting
                    reporting, analytics, and AI before they become business
                    problems.
                  </p>
                  <div className="flex flex-wrap gap-3 mt-6">
                    <button
                      onClick={async () => {
                        const cal = await getCalApi({});
                        cal("modal", {
                          calLink: "vikas-singh-bril/30-min-product-eng-review",
                          config: { theme: "light" },
                        });
                      }}
                      className="c-button c-btn-primary c-btn-medium outline-none overflow-hidden whitespace-nowrap transition-all duration-300 border"
                    >
                      <span>Fix Quality</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>

              <p className="text-xs text-gray-400 text-center pt-1">
                This assessment is based on your responses and general data
                quality principles. It is intended for planning purposes.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* SEO Content */}
      <section className="bg-white py-12 md:py-16">
        <div className="container max-w-[1280px] mx-auto md:px-10 px-5">
          <div className="mb-12">
            <Heading
              type="h2"
              className="!font-extrabold text-gray-900 mb-4"
              text="How a Data Quality Assessment Works"
            />
            <p className="text-[16.5px] text-gray-500 leading-relaxed">
              This Data Quality Assessment evaluates the key characteristics
              that determine whether your data is fit for business use. It
              reviews factors such as accuracy, completeness, consistency,
              timeliness, and governance to generate an overall assessment of
              your data quality. The results help identify weaknesses that could
              affect reporting, operational decisions, and AI performance.
            </p>
            <p className="text-[16.5px] text-gray-500 leading-relaxed mt-4">
              The assessment provides an overall view of your current data
              quality rather than auditing every dataset individually. It is
              designed to highlight common risks and provide a starting point
              for improvement. The findings can also support a broader data
              quality assessment framework and help guide future data governance
              initiatives.
            </p>
          </div>

          <div>
            <Heading
              type="h2"
              className="!font-extrabold text-gray-900 mb-4"
              text="The Most Common Data Quality Problems"
            />
            <p className="text-[16.5px] text-gray-500 leading-relaxed mb-6">
              Poor data quality often develops gradually as systems and teams
              grow. These are some of the most common issues organizations face.
            </p>
            <ul className="space-y-0">
              {[
                {
                  title: "Incomplete data",
                  text: "Missing values make reports less reliable and reduce the effectiveness of analytics and AI models.",
                },
                {
                  title: "Duplicate records",
                  text: "Multiple versions of the same customer, product, or transaction create inconsistencies across systems.",
                },
                {
                  title: "Inconsistent data formats",
                  text: "Different naming conventions, formats, or standards make it difficult to combine and analyze data accurately.",
                },
                {
                  title: "Outdated information",
                  text: "Stale data leads to inaccurate reporting and poor business decisions when critical information is no longer current.",
                },
                {
                  title: "Lack of data governance",
                  text: "Without clear ownership and quality standards, data issues become harder to detect and resolve over time.",
                },
              ].map((item, i) => (
                <li
                  key={i}
                  className="relative pl-7 py-3 border-b border-gray-100 last:border-0"
                >
                  <span
                    className="absolute left-0.5 top-[18px] w-2 h-2 rounded-sm bg-themeColor"
                    aria-hidden="true"
                  />
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
              Everything you need to know about data quality and how to assess
              it.
            </p>
          </div>
          <div className="mx-auto" style={{ maxWidth: 860 }}>
            {FAQ_DATA.map((item, i) => (
              <GradientFAQAccordion
                key={i + 1}
                id={`dq-faq-${i + 1}`}
                question={item.q}
                answer={item.a}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white py-16 md:py-20">
        <div className="container max-w-[1280px] mx-auto md:px-10 px-5">
          <div className="bg-[#f2f9fe] border border-gray-200 rounded-2xl py-14 px-6 md:px-12 text-center">
            <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-themeColor block mb-4">
              DATA QUALITY
            </span>
            <Heading
              type="h2"
              className="!font-extrabold text-gray-900 mb-3"
              text="Bad Data Costs More Than You Think."
            />
            <p className="text-[17px] text-gray-500 max-w-[560px] mx-auto">
              Our data engineers pinpoint the issues reducing confidence in your
              data and recommend the fastest improvements.
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
                <span>Get Audit</span>
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

export default DataQualityAssessment;
