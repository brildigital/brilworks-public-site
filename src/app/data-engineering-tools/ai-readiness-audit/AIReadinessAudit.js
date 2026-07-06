"use client";
import React, { useState } from "react";
import Heading from "../../components/HTMLComponents/Heading";
import ButtonV2 from "../../components/Common/ButtonV2";
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
    category: "Data Quality",
    question: "Do you have a centralized, documented data catalog?",
    weight: 12,
  },
  {
    id: 2,
    category: "Data Quality",
    question: "Is your data deduplicated and validated before use?",
    weight: 10,
  },
  {
    id: 3,
    category: "Data Quality",
    question: "Do you have automated data quality checks in your pipelines?",
    weight: 10,
  },
  {
    id: 4,
    category: "Infrastructure",
    question: "Are your data pipelines monitored with alerting?",
    weight: 10,
  },
  {
    id: 5,
    category: "Infrastructure",
    question:
      "Can you reprocess failed pipeline runs without manual intervention?",
    weight: 8,
  },
  {
    id: 6,
    category: "Infrastructure",
    question: "Do you have CI/CD for your data pipelines?",
    weight: 10,
  },
  {
    id: 7,
    category: "Governance",
    question: "Do you have clear data ownership and stewardship roles?",
    weight: 10,
  },
  {
    id: 8,
    category: "Governance",
    question: "Are PII and sensitive data fields tagged and access-controlled?",
    weight: 12,
  },
  {
    id: 9,
    category: "AI Readiness",
    question: "Do you have labeled training data available for ML models?",
    weight: 10,
  },
  {
    id: 10,
    category: "AI Readiness",
    question:
      "Is your team skilled in Python, SQL, and at least one ML framework?",
    weight: 8,
  },
];

const getScoreLabel = (score) => {
  if (score >= 80)
    return {
      label: "AI-Ready",
      color: "text-green-600",
      bg: "bg-green-50",
      border: "border-green-200",
    };
  if (score >= 60)
    return {
      label: "Getting Close",
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-200",
    };
  if (score >= 40)
    return {
      label: "Foundational Gaps",
      color: "text-yellow-600",
      bg: "bg-yellow-50",
      border: "border-yellow-200",
    };
  return {
    label: "Not Ready Yet",
    color: "text-red-600",
    bg: "bg-red-50",
    border: "border-red-200",
  };
};

const FAQ_DATA = [
  {
    q: "What is an AI readiness score?",
    a: "An AI readiness score measures how prepared an organization is to adopt AI based on factors such as data quality, technology, governance, and business processes. It helps identify strengths, weaknesses, and areas that need improvement before launching AI initiatives.",
  },
  {
    q: "What does AI readiness mean?",
    a: "AI readiness refers to an organization's ability to successfully implement and scale AI solutions. It includes having reliable data, the right technology, skilled teams, and business processes that support AI adoption.",
  },
  {
    q: "How accurate is this AI readiness audit?",
    a: "The audit provides an assessment based on your responses and accepted AI readiness principles. While it cannot replace a detailed consulting engagement, it offers a practical benchmark for evaluating your current level of preparedness.",
  },
  {
    q: "Why is AI readiness important?",
    a: "Organizations that assess their readiness before investing in AI are more likely to avoid costly implementation challenges. Understanding existing gaps helps prioritize improvements and increases the likelihood of successful AI adoption.",
  },
  {
    q: "How can I improve my AI readiness score?",
    a: "Improving your score typically involves strengthening data quality, integrating disconnected systems, establishing governance policies, modernizing infrastructure, and identifying business use cases where AI can deliver measurable value.",
  },
];

const AIReadinessAudit = () => {
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
    const categoryScores = {};

    QUESTIONS.forEach((q, i) => {
      const answer = answers[i];
      const points =
        answer === "yes" ? q.weight : answer === "partial" ? q.weight * 0.5 : 0;
      totalScore += points;

      if (!categoryScores[q.category]) {
        categoryScores[q.category] = { earned: 0, total: 0, gaps: [] };
      }
      categoryScores[q.category].earned += points;
      categoryScores[q.category].total += q.weight;
      if (answer !== "yes") {
        categoryScores[q.category].gaps.push(q.question);
      }
    });

    const score = Math.round(totalScore);
    const blockers = Object.entries(categoryScores)
      .filter(([, v]) => v.earned / v.total < 0.5)
      .map(([k]) => k);

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
          page: "/data-engineering-tools/ai-readiness-audit/",
          toolFormData: {
            "AI Readiness Score": `${score}/100`,
            Rating: getScoreLabel(score).label,
            Blockers: blockers.length > 0 ? blockers.join(", ") : "None",
            ...answerSummary,
          },
        }),
      });
    } catch (err) {
      console.error("Failed to submit lead:", err);
    }

    setIsSubmitting(false);
    setResult({ score, categoryScores, blockers });
  };

  const resetAudit = () => {
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
            text="AI Readiness Audit"
          />
          <p
            className="lg:text-lg md:text-base text-base !mt-6 max-w-[600px] leading-relaxed"
            style={{ color: "#566678" }}
          >
            Assess how prepared your business is for AI adoption. Answer a few
            questions about your data, processes, and technology to receive your
            AI readiness score and practical recommendations.
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
              Start Audit <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div
            className="flex flex-wrap gap-5 mt-8 pt-6"
            style={{ borderTop: "1px solid #e4eaf1" }}
          >
            {[
              "No signup required",
              "10 questions, under 2 min",
              "Instant score & recommendations",
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
              AI Readiness Audit
            </span>
          </nav>
        </div>
      </div>

      {/* Audit */}
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
                      Enter your work email to see your score and category
                      breakdown.{" "}
                    </h3>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (emailError) setEmailError("");
                      }}
                      placeholder="you@company.com"
                      className={`w-full px-4 py-3 rounded-lg border-2 text-sm font-medium transition-colors focus:outline-none focus:border-themeColor ${
                        emailError
                          ? "border-red-400 bg-red-50"
                          : "border-gray-200 bg-white"
                      }`}
                    />
                    {emailError && (
                      <p className="text-red-500 text-xs mt-1.5">
                        {emailError}
                      </p>
                    )}
                  </div>
                ) : (
                  <div
                    className={`space-y-6 transition-opacity duration-300 ${
                      isTransitioning ? "opacity-0" : "opacity-100"
                    }`}
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
                              className={`w-6 h-6 transition-transform duration-200 ${
                                isSelected ? "scale-110" : ""
                              }`}
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
                    if (showEmail) {
                      setShowEmail(false);
                    } else if (currentQ > 0) {
                      setCurrentQ(currentQ - 1);
                    }
                  }}
                  className={`flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-navyBlue transition-colors ${
                    currentQ === 0 && !showEmail ? "invisible" : ""
                  }`}
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
                  Your AI Readiness Score
                </h2>
                <button
                  onClick={resetAudit}
                  className="text-themeColor font-medium text-sm hover:underline flex items-center gap-1"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Retake Audit
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
                    ([category, data]) => {
                      const pct = Math.round((data.earned / data.total) * 100);
                      return (
                        <div key={category}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-semibold text-navyBlue">
                              {category}
                            </span>
                            <span
                              className={`text-sm font-bold ${
                                pct >= 70
                                  ? "text-green-600"
                                  : pct >= 40
                                    ? "text-yellow-600"
                                    : "text-red-600"
                              }`}
                            >
                              {pct}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-100 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full transition-all ${
                                pct >= 70
                                  ? "bg-green-500"
                                  : pct >= 40
                                    ? "bg-yellow-500"
                                    : "bg-red-500"
                              }`}
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                          {data.gaps.length > 0 && (
                            <div className="mt-2 space-y-1">
                              {data.gaps.map((gap, i) => (
                                <p
                                  key={i}
                                  className="text-xs text-gray-500 flex items-start gap-1.5"
                                >
                                  <XCircle className="w-3 h-3 text-red-400 mt-0.5 shrink-0" />
                                  {gap}
                                </p>
                              ))}
                            </div>
                          )}
                          {category !==
                            Object.keys(result.categoryScores).at(-1) && (
                            <div className="border-t border-gray-100 mt-4" />
                          )}
                        </div>
                      );
                    },
                  )}
                </div>
              </div>

              {/* Blockers */}
              {result.blockers.length > 0 && (
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-bold text-amber-900">
                        {result.blockers.length} area
                        {result.blockers.length > 1 ? "s" : ""} blocking AI
                        initiatives
                      </p>
                      <p className="text-sm text-amber-700 mt-1 leading-relaxed">
                        Focus on <strong>{result.blockers.join(", ")}</strong>{" "}
                        before investing in ML/AI projects.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Lead gen CTA */}
              <div className="relative svc-mid-cta-bg rounded-2xl p-7 md:p-9 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none svc-mid-cta-glow" />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Ready to put AI to work?
                  </h3>
                  <p className="text-white/60 text-[15px] max-w-3xl leading-relaxed">
                    A strong AI strategy starts with the right foundation.
                    We&apos;ll review your results, identify the biggest gaps,
                    and show you what to fix first.
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
                      <span>Talk AI</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>

              <p className="text-xs text-gray-400 text-center pt-1">
                This assessment is based on your responses and general AI
                readiness principles. It is intended for planning purposes and
                should not replace a detailed consulting engagement.
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
              text="How the AI Readiness Audit Works"
            />
            <p className="text-[16.5px] text-gray-500 leading-relaxed">
              This AI readiness audit evaluates the key factors that determine
              whether your organization is prepared to successfully adopt AI. It
              looks at areas such as data quality, infrastructure, governance,
              business processes, and team readiness to generate an overall AI
              readiness score. Rather than focusing on a single metric, the
              audit provides a balanced view of the strengths and weaknesses
              that could affect your AI initiatives.
            </p>
            <p className="text-[16.5px] text-gray-500 leading-relaxed mt-4">
              Your AI readiness score is intended to guide planning, not
              guarantee project success. AI projects rely on much more than
              selecting the right model. Clean, accessible data, well-defined
              processes, and clear business objectives are often the biggest
              factors behind successful AI adoption. This audit helps you
              understand where you stand and what to improve before investing
              further.
            </p>
          </div>

          <div>
            <Heading
              type="h2"
              className="!font-extrabold text-gray-900 mb-4"
              text="What Usually Blocks AI Readiness"
            />
            <p className="text-[16.5px] text-gray-500 leading-relaxed mb-6">
              Organizations often struggle with AI adoption because of a few
              common challenges.
            </p>
            <ul className="space-y-0">
              {[
                {
                  title: "Poor data quality",
                  text: "AI systems are only as reliable as the data they learn from. Incomplete, inconsistent, or outdated data leads to unreliable outcomes.",
                },
                {
                  title: "Disconnected data sources",
                  text: "Information spread across multiple systems makes it difficult to build AI solutions with a complete view of the business.",
                },
                {
                  title: "Lack of governance",
                  text: "Without clear policies around data ownership, security, and compliance, scaling AI becomes much more difficult.",
                },
                {
                  title: "Unclear business goals",
                  text: "Many AI projects begin without a clearly defined problem, making it difficult to measure success or deliver value.",
                },
                {
                  title: "Limited technical readiness",
                  text: "Outdated infrastructure or manual workflows can slow AI implementation and increase project complexity.",
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
              Everything you need to know about AI readiness and how to assess
              it.
            </p>
          </div>
          <div className="mx-auto" style={{ maxWidth: 860 }}>
            {FAQ_DATA.map((item, i) => (
              <GradientFAQAccordion
                key={i + 1}
                id={`ai-faq-${i + 1}`}
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
              AI READINESS
            </span>
            <Heading
              type="h2"
              className="!font-extrabold text-gray-900 mb-3"
              text="Your Score Is Just the Start."
            />
            <p className="text-[17px] text-gray-500 max-w-[560px] mx-auto">
              Our AI experts help you turn audit results into a practical
              roadmap for successful AI adoption.
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
                <span>View Roadmap</span>
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

export default AIReadinessAudit;
