"use client";
import React, { useState } from "react";
import { Sparkles, Loader2, Cpu } from "lucide-react";
import { generateEventFeatures } from "../../lib/geminiService";

const AiFeatureDemo = () => {
  const [eventType, setEventType] = useState("Tech Conference");
  const [audienceSize, setAudienceSize] = useState("5000");
  const [suggestion, setSuggestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);

  const handleGenerate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuggestion("");

    const result = await generateEventFeatures(eventType, audienceSize);

    setSuggestion(result);
    setLoading(false);
    setHasGenerated(true);
  };

  return (
    <section className="bg-gray-900 text-white relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600 rounded-full blur-[100px] -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[100px] translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto main-section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-sm font-medium mb-6">
              <Cpu className="w-4 h-4" />
              Advanced Technology
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl !mb-6">
              Advanced Capabilities for Modern Events
            </h2>
            <p className="text-gray-300 text-lg !mb-8">
              For enterprises and high-stakes events, we extend your app with
              cutting-edge integrations and security.
            </p>

            <div className="space-y-6">
              {[
                {
                  title: "Deep Integrations",
                  desc: "Ticketing, Payments, CRMs, and Marketing Automation.",
                },
                {
                  title: "IoT & Location Features",
                  desc: "Beacon-based venue navigation and proximity alerts.",
                },
                {
                  title: "AI-Assisted Personalization",
                  desc: "Session recommendations and smart agendas.",
                },
                {
                  title: "Security & Compliance",
                  desc: "Role-based access, data encryption, and audit logs.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-blue-400">
                      {i + 1}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive AI Demo Card */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-2xl">
            <div className="mb-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Sparkles className="text-yellow-400" />
                AI Event Feature Generator
              </h3>
              <p className="text-sm text-gray-400 !mt-2">
                See how AI can enhance your specific event type. Try it out:
              </p>
            </div>

            <form onSubmit={handleGenerate} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">
                  Event Type
                </label>
                <select
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option>Tech Conference</option>
                  <option>Medical Summit</option>
                  <option>Trade Show</option>
                  <option>Music Festival</option>
                  <option>Corporate Townhall</option>
                  <option>Hybrid Event</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">
                  Audience Size
                </label>
                <select
                  value={audienceSize}
                  onChange={(e) => setAudienceSize(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option>100-500</option>
                  <option>500-2000</option>
                  <option>2000-10000</option>
                  <option>10000+</option>
                </select>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 rounded-lg transition-all flex items-center justify-center gap-2"
              >
                {loading ? (
                  <Loader2 className="animate-spin w-5 h-5" />
                ) : (
                  <Sparkles className="w-5 h-5" />
                )}
                {loading ? "Analyzing..." : "Generate AI Ideas"}
              </button>
            </form>

            {hasGenerated && (
              <div className="mt-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700 animate-fade-in">
                <h4 className="text-sm font-semibold text-blue-400 mb-2">
                  Suggested Innovations:
                </h4>
                <div className="text-sm text-gray-300 leading-relaxed whitespace-pre-wrap">
                  {suggestion}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiFeatureDemo;
