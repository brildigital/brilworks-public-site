import React from "react";
import { Target, Layers, PlugZap, RefreshCw } from "lucide-react";

const reasons = [
  {
    title: "Outcome-First Mindset",
    description:
      "Features and roadmap are tied to concrete metrics like app adoption, engagement actions, and sponsor lead volume.",
    icon: <Target className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Platform-Level Capabilities",
    description:
      "Apps built to support multiple events, communities, and formats from a single, scalable technical foundation.",
    icon: <Layers className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Integration-Ready",
    description:
      "Deep experience connecting apps with CRMs, marketing tools, and ticketing stacks so data flows where you work.",
    icon: <PlugZap className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Long-Term Partnership",
    description:
      "Continuous enhancements based on event performance data, feedback, and new formats you want to test.",
    icon: <RefreshCw className="w-8 h-8 text-blue-600" />,
  },
];

const WhyChoose = () => {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto main-section-padding">
        <div className="">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-blue-600 font-bold uppercase tracking-wide text-sm">
              Differentiation
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-6 mt-2 text-gray-900">
              Why Teams Choose Brilworks
            </h2>
            <p className="text-gray-600 text-lg !mb-8 leading-relaxed">
              We treat each event app as an evolving product rather than a
              one-off project, ensuring your investment grows in value over
              time.
            </p>
          </div>
          <div className="grid sm:grid-cols-4 gap-8">
            {reasons.map((r, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
              >
                <div className="bg-blue-50 p-3 rounded-lg inline-block mb-4">
                  {r.icon}
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  {r.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {r.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
