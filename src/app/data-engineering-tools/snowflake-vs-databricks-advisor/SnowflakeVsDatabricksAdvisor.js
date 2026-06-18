"use client";
import React, { useState } from "react";
import Heading from "../../components/HTMLComponents/Heading";
import GradientFAQAccordion from "../../components/Common/GradientFAQAccordion";
import Link from "next/link";
import { getCalApi } from "@calcom/embed-react";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Star,
  Snowflake,
  Zap,
} from "lucide-react";

const QUESTIONS = [
  {
    question: "What is your primary workload?",
    options: [
      { label: "SQL analytics & BI dashboards", snowflake: 3, databricks: 1 },
      { label: "Machine learning & data science", snowflake: 1, databricks: 3 },
      { label: "ETL / data transformation", snowflake: 2, databricks: 2 },
      { label: "Real-time streaming", snowflake: 1, databricks: 3 },
    ],
  },
  {
    question: "What does your team know best?",
    options: [
      { label: "SQL (analysts, BI engineers)", snowflake: 3, databricks: 1 },
      {
        label: "Python / Spark (data engineers, ML engineers)",
        snowflake: 1,
        databricks: 3,
      },
      { label: "Mix of both", snowflake: 2, databricks: 2 },
    ],
  },
  {
    question: "How important is data sharing with partners or customers?",
    options: [
      {
        label: "Critical — we share data externally",
        snowflake: 3,
        databricks: 1,
      },
      { label: "Nice to have", snowflake: 2, databricks: 1 },
      { label: "Not needed", snowflake: 1, databricks: 2 },
    ],
  },
  {
    question: "Do you need a unified platform for data + ML?",
    options: [
      { label: "Yes — lakehouse approach", snowflake: 1, databricks: 3 },
      { label: "Separate tools are fine", snowflake: 3, databricks: 1 },
      { label: "Exploring options", snowflake: 2, databricks: 2 },
    ],
  },
  {
    question: "What is your preferred pricing model?",
    options: [
      {
        label: "Pay per query (consumption-based)",
        snowflake: 3,
        databricks: 1,
      },
      {
        label: "Pay per cluster (always-on compute)",
        snowflake: 1,
        databricks: 3,
      },
      { label: "No strong preference", snowflake: 2, databricks: 2 },
    ],
  },
  {
    question: "How much unstructured data do you process?",
    options: [
      { label: "Mostly structured (tables, CSV)", snowflake: 3, databricks: 1 },
      {
        label: "Mix of structured and unstructured",
        snowflake: 2,
        databricks: 2,
      },
      {
        label: "Mostly unstructured / semi-structured",
        snowflake: 1,
        databricks: 3,
      },
    ],
  },
];

const FAQ_DATA = [
  {
    q: "What is the difference between Snowflake and Databricks?",
    a: "The biggest difference is their primary focus. Snowflake is a cloud data warehouse built for analytics and SQL workloads, while Databricks is a lakehouse platform designed for data engineering, machine learning, and AI. Both support analytics, but they excel in different areas.",
  },
  {
    q: "Which platform performs better?",
    a: "There is no universal answer. Snowflake vs Databricks performance depends on your workload. Snowflake typically performs well for analytical queries and reporting, while Databricks is optimized for large-scale data processing, streaming, and machine learning.",
  },
  {
    q: "Is Snowflake better than Databricks for business intelligence?",
    a: "Snowflake is often the preferred choice for business intelligence because of its strong SQL capabilities, governance features, and seamless integration with BI tools. However, the right choice depends on your broader data strategy.",
  },
  {
    q: "Can Snowflake and Databricks be used together?",
    a: "Yes. Many organizations use both platforms. Snowflake serves as the governed analytics layer, while Databricks handles data engineering, machine learning, and AI workloads. Together, they can support a modern data platform.",
  },
  {
    q: "How do I choose between Snowflake and Databricks?",
    a: "The right decision depends on your workloads, team skills, data architecture, and long-term business goals. This advisor helps you compare both platforms based on your specific requirements instead of relying on a generic Snowflake vs Databricks comparison.",
  },
];

const SnowflakeVsDatabricksAdvisor = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [showEmail, setShowEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const isValidEmail = (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());

  const handleAnswer = (optionIndex) => {
    setSelectedOption(optionIndex);
    const newAnswers = { ...answers, [currentQ]: optionIndex };
    setAnswers(newAnswers);

    setTimeout(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        if (currentQ < QUESTIONS.length - 1) {
          setCurrentQ(currentQ + 1);
        } else {
          setShowEmail(true);
        }
        setSelectedOption(null);
        setIsTransitioning(false);
      }, 300);
    }, 400);
  };

  const calculateResult = async () => {
    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    setEmailError("");
    setIsSubmitting(true);

    let snowflakeTotal = 0;
    let databricksTotal = 0;

    Object.entries(answers).forEach(([qIndex, optIndex]) => {
      const option = QUESTIONS[qIndex].options[optIndex];
      snowflakeTotal += option.snowflake;
      databricksTotal += option.databricks;
    });

    const total = snowflakeTotal + databricksTotal;
    const snowflakePct = Math.round((snowflakeTotal / total) * 100);
    const databricksPct = Math.round((databricksTotal / total) * 100);

    let recommendation, reasoning;
    const diff = Math.abs(snowflakeTotal - databricksTotal);

    if (diff <= 2) {
      recommendation = "Either platform works";
      reasoning =
        "Your use case fits both platforms well. The decision may come down to existing team skills, vendor relationships, or pricing negotiations. Consider running a proof-of-concept on both.";
    } else if (snowflakeTotal > databricksTotal) {
      recommendation = "Snowflake";
      reasoning =
        "Your workload leans toward structured analytics, SQL-heavy teams, and consumption-based pricing — areas where Snowflake excels. Its data sharing and separation of compute/storage make it strong for BI-focused teams.";
    } else {
      recommendation = "Databricks";
      reasoning =
        "Your workload leans toward ML/data science, Python/Spark teams, and unified lakehouse architecture — areas where Databricks excels. Its notebook-first approach and MLflow integration make it strong for ML-focused teams.";
    }

    const answerSummary = {};
    QUESTIONS.forEach((q, i) => {
      if (answers[i] !== undefined) {
        answerSummary[`Q${i + 1}: ${q.question}`] = q.options[answers[i]].label;
      }
    });

    try {
      await fetch("/api/tool-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          page: "/data-engineering-tools/snowflake-vs-databricks-advisor/",
          toolFormData: {
            Recommendation: recommendation,
            "Snowflake Score": `${snowflakePct}%`,
            "Databricks Score": `${databricksPct}%`,
            ...answerSummary,
          },
        }),
      });
    } catch (err) {
      console.error("Failed to submit lead:", err);
    }

    setIsSubmitting(false);
    setResult({
      snowflakeTotal,
      databricksTotal,
      snowflakePct,
      databricksPct,
      recommendation,
      reasoning,
    });
  };

  const resetAdvisor = () => {
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
              "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(61,123,255,0.18) 0%, transparent 70%)",
          }}
        />
        <div className="container max-w-[1280px] mx-auto md:px-10 px-5 relative z-10 pt-28 pb-16 md:pt-32 md:pb-20">
          <span className="inline-flex items-center gap-2 bg-[rgba(26,92,204,0.15)] border border-[rgba(26,92,204,0.3)] rounded-full px-3.5 py-1.5 text-[#00b4d8] text-xs font-semibold tracking-widest uppercase mb-7">
            <Star className="w-3.5 h-3.5" />
            FREE TOOL
          </span>
          <Heading
            type="h1"
            className="text-white !font-extrabold max-w-[720px]"
            text="Snowflake vs Databricks Advisor"
          />
          <p className="text-gray-400 lg:text-lg md:text-base text-base !mt-6 max-w-[600px] leading-relaxed">
            Compare Snowflake and Databricks based on your workload, team, and
            business goals. Answer a few questions to get a personalized
            recommendation with clear reasoning.
          </p>
          <div className="mt-8">
            <a
              href="#calculator"
              className="w-fit c-button c-btn-primary c-btn-medium inline-flex items-center gap-2 hover:!text-colorWhite"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("calculator")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Start Advisor <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="flex flex-wrap gap-5 mt-8 pt-6 border-t border-white/10">
            {[
              "No signup required",
              "6 questions, under 2 min",
              "Clear recommendation with reasoning",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-white/50 text-sm font-medium"
              >
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                {item}
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
              href="/data-engineering-tools/"
              className="text-themeColor hover:underline"
            >
              Data Engineering Tools
            </Link>
            <span className="mx-1.5">/</span>
            <span className="text-gray-600 font-medium">
              Snowflake vs Databricks Advisor
            </span>
          </nav>
        </div>
      </div>

      {/* Advisor */}
      <section id="calculator" className="bg-[#f8f9ff] py-12 md:py-16">
        <div className="container max-w-[1280px] mx-auto md:px-10 px-5">
          {!result ? (
            <div className="bg-white border border-gray-200 rounded-2xl shadow-lg shadow-gray-200/60 overflow-hidden">
              <div className="bg-navyBlue px-6 md:px-10 py-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/60 text-xs font-semibold tracking-wider uppercase">
                      {showEmail
                        ? "Last step"
                        : `Question ${currentQ + 1} of ${QUESTIONS.length}`}
                    </p>
                    <p className="text-white font-semibold text-lg mt-0.5">
                      {showEmail
                        ? "Get Your Recommendation"
                        : "Platform Comparison"}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {[...Array(QUESTIONS.length + 1)].map((_, i) => (
                      <div
                        key={i}
                        className={`h-2 rounded-full transition-all duration-300 ${i <= (showEmail ? QUESTIONS.length : currentQ) ? "bg-themeColor w-3" : "bg-white/20 w-2"}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 md:px-10 py-8">
                {showEmail ? (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-navyBlue">
                      Enter your work email to see your platform recommendation.
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
                  </div>
                ) : (
                  <div
                    className={`space-y-5 transition-opacity duration-300 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
                  >
                    <p className="text-lg font-semibold text-navyBlue">
                      {q.question}
                    </p>
                    <div className="space-y-3">
                      {q.options.map((opt, i) => {
                        const isSelected = selectedOption === i;
                        return (
                          <button
                            key={i}
                            onClick={() =>
                              !selectedOption &&
                              selectedOption !== 0 &&
                              handleAnswer(i)
                            }
                            disabled={selectedOption !== null}
                            className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                              isSelected
                                ? "border-themeColor bg-blue-50 scale-[1.02] shadow-md"
                                : selectedOption !== null
                                  ? "opacity-40 cursor-default border-gray-200"
                                  : "border-gray-200 hover:border-themeColor/40"
                            }`}
                          >
                            <span
                              className={`font-medium ${isSelected ? "text-themeColor" : "text-navyBlue"}`}
                            >
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
                    onClick={calculateResult}
                    disabled={isSubmitting}
                    className="c-button c-btn-primary c-btn-medium hover:!bg-navyBlue hover:!text-white inline-flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Analyzing..." : "See Recommendation"}{" "}
                    {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-navyBlue">
                  Platform Recommendation
                </h2>
                <button
                  onClick={resetAdvisor}
                  className="text-themeColor font-medium text-sm hover:underline flex items-center gap-1"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Retake
                </button>
              </div>

              {/* Recommendation card */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-md text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500" />
                <p className="text-sm font-medium text-gray-500 mb-2">
                  Our recommendation
                </p>
                <p className="text-4xl font-extrabold text-navyBlue tracking-tight">
                  {result.recommendation}
                </p>
              </div>

              {/* Score bar */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="flex justify-between text-sm font-semibold mb-3">
                  <span className="flex items-center gap-1.5 text-blue-600">
                    <Snowflake className="w-4 h-4" /> Snowflake{" "}
                    {result.snowflakePct}%
                  </span>
                  <span className="flex items-center gap-1.5 text-orange-600">
                    Databricks {result.databricksPct}%{" "}
                    <Zap className="w-4 h-4" />
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-4 flex overflow-hidden">
                  <div
                    className="bg-blue-500 h-full transition-all duration-700"
                    style={{ width: `${result.snowflakePct}%` }}
                  />
                  <div
                    className="bg-orange-500 h-full transition-all duration-700"
                    style={{ width: `${result.databricksPct}%` }}
                  />
                </div>
              </div>

              {/* Reasoning */}
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                <h3 className="text-sm font-bold text-navyBlue mb-2">
                  Why this recommendation?
                </h3>
                <p className="text-[15px] text-gray-600 leading-relaxed">
                  {result.reasoning}
                </p>
              </div>

              {/* Lead gen CTA */}
              <div className="relative bg-navyBlue rounded-2xl p-7 md:p-9 overflow-hidden">
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse 60% 80% at 80% 20%, rgba(61,123,255,0.2) 0%, transparent 60%)",
                  }}
                />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Still deciding between platforms?
                  </h3>
                  <p className="text-white/60 text-[15px] max-w-3xl leading-relaxed">
                    Choosing the wrong platform can be expensive. We&apos;ll
                    help you validate your decision before you invest.
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
                      <span>Talk to Our Expert</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
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
              text="How the Snowflake vs Databricks Advisor Works"
            />
            <p className="text-[16.5px] text-gray-500 leading-relaxed">
              This Snowflake vs Databricks Advisor recommends the platform that
              best fits your requirements based on factors such as workload
              type, team expertise, data volume, analytics needs, and AI or
              machine learning use cases. Instead of comparing features in
              isolation, it evaluates how each platform aligns with your
              specific business requirements.
            </p>
            <p className="text-[16.5px] text-gray-500 leading-relaxed mt-4">
              There is no single winner in the Snowflake vs Databricks debate
              because each platform is designed for different workloads.
              Snowflake is widely adopted for analytics, business intelligence,
              and governed data sharing, while Databricks is often preferred for
              data engineering, large-scale data processing, and AI development.
              This advisor helps you make an informed decision based on your
              priorities rather than generic feature comparisons.
            </p>
          </div>
          <div>
            <Heading
              type="h2"
              className="!font-extrabold text-gray-900 mb-4"
              text="When to Choose Snowflake or Databricks"
            />
            <p className="text-[16.5px] text-gray-500 leading-relaxed mb-6">
              Choosing the right platform depends on your business goals and
              technical requirements.
            </p>
            <ul className="space-y-0">
              {[
                {
                  title: "Choose Snowflake for analytics",
                  text: "If your primary focus is SQL analytics, reporting, and business intelligence, Snowflake provides a simple and highly scalable platform.",
                },
                {
                  title: "Choose Databricks for AI and machine learning",
                  text: "Databricks is well suited for organizations building machine learning models, data science workflows, and large-scale data engineering pipelines.",
                },
                {
                  title: "Consider team expertise",
                  text: "SQL-focused teams often become productive faster with Snowflake, while organizations with Spark and Python expertise may benefit more from Databricks.",
                },
                {
                  title: "Evaluate performance for your workloads",
                  text: "In many Snowflake vs Databricks performance comparisons, the better choice depends on whether you're running analytical queries or distributed data processing jobs.",
                },
                {
                  title: "Plan for future growth",
                  text: "If your roadmap includes advanced AI, streaming, or large-scale data engineering, your long-term requirements should influence your platform decision.",
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
              Everything you need to know about choosing between Snowflake and
              Databricks.
            </p>
          </div>
          <div className="mx-auto" style={{ maxWidth: 860 }}>
            {FAQ_DATA.map((item, i) => (
              <GradientFAQAccordion
                key={i + 1}
                id={`svd-faq-${i + 1}`}
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
              PLATFORM COMPARISON
            </span>
            <Heading
              type="h2"
              className="!font-extrabold text-gray-900 mb-3"
              text="Need a Second Opinion?"
            />
            <p className="text-[17px] text-gray-500 max-w-[560px] mx-auto">
              Compare your requirements with guidance from data engineers who
              build on both Snowflake and Databricks.
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
                <span>Compare Now</span>
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

export default SnowflakeVsDatabricksAdvisor;
