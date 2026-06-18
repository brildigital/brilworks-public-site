"use client";
import React, { useState } from "react";
import { ArrowRight, ArrowLeft, Snowflake, Zap } from "lucide-react";
import Link from "next/link";

const questions = [
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
      { label: "Python / Spark (data engineers, ML engineers)", snowflake: 1, databricks: 3 },
      { label: "Mix of both", snowflake: 2, databricks: 2 },
    ],
  },
  {
    question: "How important is data sharing with partners/customers?",
    options: [
      { label: "Critical — we share data externally", snowflake: 3, databricks: 1 },
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
      { label: "Pay per query (consumption-based)", snowflake: 3, databricks: 1 },
      { label: "Pay per cluster (always-on compute)", snowflake: 1, databricks: 3 },
      { label: "No strong preference", snowflake: 2, databricks: 2 },
    ],
  },
  {
    question: "How much unstructured data (images, logs, text) do you process?",
    options: [
      { label: "Mostly structured (tables, CSV)", snowflake: 3, databricks: 1 },
      { label: "Mix of structured and unstructured", snowflake: 2, databricks: 2 },
      { label: "Mostly unstructured / semi-structured", snowflake: 1, databricks: 3 },
    ],
  },
];

const SnowflakeVsDatabricksPicker = ({ onClose }) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const handleAnswer = (optionIndex) => {
    const newAnswers = { ...answers, [currentQ]: optionIndex };
    setAnswers(newAnswers);

    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (ans) => {
    let snowflakeTotal = 0;
    let databricksTotal = 0;

    Object.entries(ans).forEach(([qIndex, optIndex]) => {
      const option = questions[qIndex].options[optIndex];
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
      reasoning = "Your use case fits both platforms well. The decision may come down to existing team skills, vendor relationships, or pricing negotiations. Consider running a proof-of-concept on both.";
    } else if (snowflakeTotal > databricksTotal) {
      recommendation = "Snowflake";
      reasoning = "Your workload leans toward structured analytics, SQL-heavy teams, and consumption-based pricing — areas where Snowflake excels. Its data sharing and separation of compute/storage make it strong for BI-focused teams.";
    } else {
      recommendation = "Databricks";
      reasoning = "Your workload leans toward ML/data science, Python/Spark teams, and unified lakehouse architecture — areas where Databricks excels. Its notebook-first approach and MLflow integration make it strong for ML-focused teams.";
    }

    setResult({ snowflakeTotal, databricksTotal, snowflakePct, databricksPct, recommendation, reasoning });
  };

  if (result) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-navyBlue">Platform Recommendation</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-sm">Close</button>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
          <p className="text-sm text-gray-500 mb-2">Our recommendation</p>
          <p className="text-3xl font-bold text-navyBlue">{result.recommendation}</p>
        </div>

        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <div className="flex justify-between text-sm font-medium mb-3">
            <span className="flex items-center gap-1 text-blue-600">
              <Snowflake className="w-4 h-4" /> Snowflake {result.snowflakePct}%
            </span>
            <span className="flex items-center gap-1 text-orange-600">
              Databricks {result.databricksPct}% <Zap className="w-4 h-4" />
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4 flex overflow-hidden">
            <div
              className="bg-blue-500 h-full transition-all"
              style={{ width: `${result.snowflakePct}%` }}
            />
            <div
              className="bg-orange-500 h-full transition-all"
              style={{ width: `${result.databricksPct}%` }}
            />
          </div>
        </div>

        <div className="bg-themeLight rounded-xl p-5 border border-themeColor/20">
          <h4 className="font-semibold text-navyBlue mb-2">Why?</h4>
          <p className="text-sm text-gray-600 leading-relaxed">{result.reasoning}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <Link
            href="/contact-us/"
            className="c-button c-btn-primary c-btn-medium inline-flex items-center justify-center gap-2"
          >
            Get Help Implementing <ArrowRight className="w-4 h-4" />
          </Link>
          <button
            onClick={() => { setResult(null); setCurrentQ(0); setAnswers({}); }}
            className="text-themeColor font-medium text-sm hover:underline"
          >
            Retake Quiz
          </button>
        </div>
      </div>
    );
  }

  const q = questions[currentQ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-navyBlue">Snowflake vs Databricks Picker</h3>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-sm">Close</button>
      </div>

      <div>
        <div className="flex justify-between text-xs text-gray-400 mb-1">
          <span>Question {currentQ + 1}</span>
          <span>{currentQ + 1} of {questions.length}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="h-2 rounded-full bg-themeColor transition-all"
            style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <p className="text-lg font-semibold text-navyBlue mb-4">{q.question}</p>
        <div className="space-y-3">
          {q.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(i)}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                answers[currentQ] === i
                  ? "border-themeColor bg-themeLight"
                  : "border-gray-200 hover:border-themeColor/40"
              }`}
            >
              <span className="font-medium text-navyBlue">{opt.label}</span>
            </button>
          ))}
        </div>
      </div>

      {currentQ > 0 && (
        <button
          onClick={() => setCurrentQ(currentQ - 1)}
          className="flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-navyBlue"
        >
          <ArrowLeft className="w-4 h-4" /> Previous question
        </button>
      )}
    </div>
  );
};

export default SnowflakeVsDatabricksPicker;
