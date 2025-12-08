import React from "react";

const steps = [
  {
    number: "01",
    title: "Discovery & Metrics",
    description:
      "Clarify event goals, audience segments, and ROI success metrics.",
  },
  {
    number: "02",
    title: "UX & Product Design",
    description:
      "Map journeys for attendees and sponsors; design intuitive interfaces.",
  },
  {
    number: "03",
    title: "Architecture",
    description:
      "Define tech stack, data flow, and integrations (CRM, Ticketing).",
  },
  {
    number: "04",
    title: "Agile Development",
    description:
      "Build in sprints with iterative reviews and rigorous testing.",
  },
  {
    number: "05",
    title: "Launch & Support",
    description:
      "App store submission and remote support during critical windows.",
  },
  {
    number: "06",
    title: "Insights & Evolution",
    description: "Analyze data to identify opportunities for future events.",
  },
];

const Process = () => {
  return (
    <section id="process">
      <div className="max-w-7xl mx-auto main-section-padding">
        <div className="text-center !mb-8 md:!mb-12 slg:!mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Our Event App Development Process
          </h2>
          <p className="!mt-4 text-xl text-gray-500">
            Product-led, iterative, and focused on long-term evolution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-8 border border-gray-100 rounded-2xl bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="absolute top-4 right-4 text-4xl font-black text-gray-100 group-hover:text-blue-50 transition-colors">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">
                {step.title}
              </h3>
              <p className="text-gray-600 relative z-10 leading-relaxed">
                {step.description}
              </p>
              <div className="w-12 h-1 bg-blue-600 mt-6 rounded-full group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
