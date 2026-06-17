"use client";
import React, { useState } from "react";
import { ArrowRight, ArrowLeft, CheckCircle, XCircle, AlertTriangle } from "lucide-react";
import Link from "next/link";

const questions = [
  { id: 1, category: "Data Quality", question: "Do you have a centralized, documented data catalog?", weight: 12 },
  { id: 2, category: "Data Quality", question: "Is your data deduplicated and validated before use?", weight: 10 },
  { id: 3, category: "Data Quality", question: "Do you have automated data quality checks in your pipelines?", weight: 10 },
  { id: 4, category: "Pipeline Maturity", question: "Are your data pipelines monitored with alerting?", weight: 10 },
  { id: 5, category: "Pipeline Maturity", question: "Can you reprocess failed pipeline runs without manual intervention?", weight: 8 },
  { id: 6, category: "Pipeline Maturity", question: "Do you have CI/CD for your data pipelines?", weight: 10 },
  { id: 7, category: "Governance", question: "Do you have clear data ownership and stewardship roles?", weight: 10 },
  { id: 8, category: "Governance", question: "Are PII and sensitive data fields tagged and access-controlled?", weight: 12 },
  { id: 9, category: "AI Readiness", question: "Do you have labeled training data available for ML models?", weight: 10 },
  { id: 10, category: "AI Readiness", question: "Is your team skilled in Python, SQL, and at least one ML framework?", weight: 8 },
];

const getScoreLabel = (score) => {
  if (score >= 80) return { label: "AI-Ready", color: "text-green-600", bg: "bg-green-50", border: "border-green-200" };
  if (score >= 60) return { label: "Getting Close", color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-200" };
  if (score >= 40) return { label: "Foundational Gaps", color: "text-yellow-600", bg: "bg-yellow-50", border: "border-yellow-200" };
  return { label: "Not Ready Yet", color: "text-red-600", bg: "bg-red-50", border: "border-red-200" };
};

const AIReadinessScore = ({ onClose }) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const handleAnswer = (value) => {
    const newAnswers = { ...answers, [currentQ]: value };
    setAnswers(newAnswers);

    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      calculateScore(newAnswers);
    }
  };

  const calculateScore = (ans) => {
    let totalScore = 0;
    const categoryScores = {};

    questions.forEach((q, i) => {
      const answer = ans[i];
      const points = answer === "yes" ? q.weight : answer === "partial" ? q.weight * 0.5 : 0;
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

    const blockers = Object.entries(categoryScores)
      .filter(([, v]) => v.earned / v.total < 0.5)
      .map(([k]) => k);

    setResult({ score: Math.round(totalScore), categoryScores, blockers });
  };

  if (result) {
    const scoreInfo = getScoreLabel(result.score);
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-navyBlue">AI Readiness Score</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-sm">Close</button>
        </div>

        <div className={`rounded-xl p-6 border ${scoreInfo.bg} ${scoreInfo.border} text-center`}>
          <p className="text-6xl font-bold text-navyBlue">{result.score}</p>
          <p className="text-sm text-gray-500 mt-1">out of 100</p>
          <span className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-semibold ${scoreInfo.color} ${scoreInfo.bg}`}>
            {scoreInfo.label}
          </span>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-navyBlue">Category Breakdown</h4>
          {Object.entries(result.categoryScores).map(([category, data]) => {
            const pct = Math.round((data.earned / data.total) * 100);
            return (
              <div key={category} className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-navyBlue">{category}</span>
                  <span className={`text-sm font-semibold ${pct >= 70 ? "text-green-600" : pct >= 40 ? "text-yellow-600" : "text-red-600"}`}>
                    {pct}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all ${pct >= 70 ? "bg-green-500" : pct >= 40 ? "bg-yellow-500" : "bg-red-500"}`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
                {data.gaps.length > 0 && (
                  <div className="mt-2 space-y-1">
                    {data.gaps.map((gap, i) => (
                      <p key={i} className="text-xs text-gray-500 flex items-start gap-1">
                        <XCircle className="w-3 h-3 text-red-400 mt-0.5 shrink-0" />
                        {gap}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {result.blockers.length > 0 && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-amber-800">
                  {result.blockers.length} area{result.blockers.length > 1 ? "s" : ""} blocking AI initiatives
                </p>
                <p className="text-sm text-amber-700 mt-1">
                  Focus on <strong>{result.blockers.join(", ")}</strong> before investing in ML/AI projects.
                  We can help you build a roadmap in a free 30-min session.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <Link
            href="/contact-us/"
            className="c-button c-btn-primary c-btn-medium inline-flex items-center justify-center gap-2"
          >
            Get an AI Readiness Roadmap <ArrowRight className="w-4 h-4" />
          </Link>
          <button
            onClick={() => { setResult(null); setCurrentQ(0); setAnswers({}); }}
            className="text-themeColor font-medium text-sm hover:underline"
          >
            Retake Assessment
          </button>
        </div>
      </div>
    );
  }

  const q = questions[currentQ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-navyBlue">AI Readiness Score</h3>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-sm">Close</button>
      </div>

      {/* Progress */}
      <div>
        <div className="flex justify-between text-xs text-gray-400 mb-1">
          <span>{q.category}</span>
          <span>{currentQ + 1} of {questions.length}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="h-2 rounded-full bg-themeColor transition-all"
            style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 border border-gray-200 min-h-[180px] flex flex-col justify-center">
        <p className="text-lg font-semibold text-navyBlue">{q.question}</p>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {[
          { value: "yes", label: "Yes", icon: CheckCircle, color: "text-green-600 border-green-200 hover:bg-green-50" },
          { value: "partial", label: "Partially", icon: AlertTriangle, color: "text-yellow-600 border-yellow-200 hover:bg-yellow-50" },
          { value: "no", label: "No", icon: XCircle, color: "text-red-600 border-red-200 hover:bg-red-50" },
        ].map((opt) => (
          <button
            key={opt.value}
            onClick={() => handleAnswer(opt.value)}
            className={`flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-all ${opt.color} ${
              answers[currentQ] === opt.value ? "ring-2 ring-themeColor/30" : ""
            }`}
          >
            <opt.icon className="w-6 h-6" />
            <span className="font-medium text-sm">{opt.label}</span>
          </button>
        ))}
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

export default AIReadinessScore;
