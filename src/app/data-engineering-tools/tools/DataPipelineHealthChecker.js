"use client";
import React, { useState } from "react";
import { ArrowRight, ArrowLeft, CheckCircle, XCircle, AlertTriangle, Activity } from "lucide-react";
import Link from "next/link";

const questions = [
  { id: 1, question: "Do you have real-time monitoring on all production pipelines?", category: "Monitoring", riskIfNo: "Undetected failures lead to stale data reaching dashboards and downstream systems" },
  { id: 2, question: "Are pipeline SLAs defined and tracked?", category: "SLAs", riskIfNo: "Without SLAs, there is no objective measure of pipeline reliability or degradation trends" },
  { id: 3, question: "Do you have automated alerting when a pipeline fails or is late?", category: "Alerting", riskIfNo: "Manual failure detection delays incident response by hours or even days" },
  { id: 4, question: "Is there a documented runbook for each critical pipeline?", category: "Documentation", riskIfNo: "Team members cannot troubleshoot incidents without tribal knowledge" },
  { id: 5, question: "Do pipelines have automated retry and dead-letter queue handling?", category: "Resilience", riskIfNo: "Transient failures become permanent data gaps without retry mechanisms" },
  { id: 6, question: "Are data quality checks (row counts, schema validation) built into pipelines?", category: "Data Quality", riskIfNo: "Bad data propagates silently, corrupting reports and ML model inputs" },
  { id: 7, question: "Do you have a staging or test environment for pipeline changes?", category: "Testing", riskIfNo: "Untested pipeline changes risk production outages and data loss" },
  { id: 8, question: "Is pipeline lineage tracked (which sources feed which outputs)?", category: "Lineage", riskIfNo: "Impact analysis is impossible — a source change can break unknown downstream consumers" },
];

const DataPipelineHealthChecker = ({ onClose }) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const handleAnswer = (value) => {
    const newAnswers = { ...answers, [currentQ]: value };
    setAnswers(newAnswers);

    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (ans) => {
    const yesCount = Object.values(ans).filter((v) => v === "yes").length;
    const score = Math.round((yesCount / questions.length) * 100);

    const risks = questions
      .filter((q, i) => ans[i] === "no")
      .sort((a, b) => {
        const priority = ["Monitoring", "Alerting", "Data Quality", "SLAs", "Resilience", "Documentation", "Lineage", "Testing"];
        return priority.indexOf(a.category) - priority.indexOf(b.category);
      })
      .slice(0, 3)
      .map((q) => ({ category: q.category, risk: q.riskIfNo }));

    setResult({ score, yesCount, risks });
  };

  if (result) {
    let scoreColor, scoreBg, scoreBorder, scoreLabel;
    if (result.score >= 80) {
      scoreColor = "text-green-600"; scoreBg = "bg-green-50"; scoreBorder = "border-green-200"; scoreLabel = "Healthy";
    } else if (result.score >= 50) {
      scoreColor = "text-yellow-600"; scoreBg = "bg-yellow-50"; scoreBorder = "border-yellow-200"; scoreLabel = "At Risk";
    } else {
      scoreColor = "text-red-600"; scoreBg = "bg-red-50"; scoreBorder = "border-red-200"; scoreLabel = "Critical";
    }

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-navyBlue">Pipeline Health Report</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-sm">Close</button>
        </div>

        <div className={`rounded-xl p-6 border ${scoreBg} ${scoreBorder} text-center`}>
          <Activity className={`w-10 h-10 mx-auto mb-3 ${scoreColor}`} />
          <p className="text-5xl font-bold text-navyBlue">{result.score}</p>
          <p className="text-sm text-gray-500 mt-1">Pipeline Health Score</p>
          <span className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-semibold ${scoreColor} ${scoreBg}`}>
            {scoreLabel}
          </span>
          <p className="text-sm text-gray-500 mt-2">
            {result.yesCount} of {questions.length} best practices in place
          </p>
        </div>

        {result.risks.length > 0 && (
          <div className="space-y-3">
            <h4 className="font-semibold text-navyBlue">Top {result.risks.length} Risks to Production Stability</h4>
            {result.risks.map((r, i) => (
              <div key={i} className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-600 text-xs font-bold shrink-0">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-medium text-navyBlue">{r.category}</p>
                    <p className="text-sm text-gray-500 mt-1">{r.risk}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <Link
            href="/contact-us/"
            className="c-button c-btn-primary c-btn-medium inline-flex items-center justify-center gap-2"
          >
            Get a Pipeline Audit <ArrowRight className="w-4 h-4" />
          </Link>
          <button
            onClick={() => { setResult(null); setCurrentQ(0); setAnswers({}); }}
            className="text-themeColor font-medium text-sm hover:underline"
          >
            Retake Checklist
          </button>
        </div>
      </div>
    );
  }

  const q = questions[currentQ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-navyBlue">Data Pipeline Health Checker</h3>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-sm">Close</button>
      </div>

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

      <div className="bg-white rounded-xl p-6 border border-gray-200 min-h-[150px] flex flex-col justify-center">
        <p className="text-lg font-semibold text-navyBlue">{q.question}</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => handleAnswer("yes")}
          className="flex items-center justify-center gap-2 p-4 rounded-lg border-2 border-green-200 text-green-600 hover:bg-green-50 transition-all font-medium"
        >
          <CheckCircle className="w-5 h-5" /> Yes
        </button>
        <button
          onClick={() => handleAnswer("no")}
          className="flex items-center justify-center gap-2 p-4 rounded-lg border-2 border-red-200 text-red-600 hover:bg-red-50 transition-all font-medium"
        >
          <XCircle className="w-5 h-5" /> No
        </button>
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

export default DataPipelineHealthChecker;
