import React from "react";

const benefits = [
  {
    title: "Optimized Performance with Virtual DOM",
    description:
      "React’s virtual DOM efficiently updates only the parts of the UI that change, reducing unnecessary re-renders. This results in faster load times (up to 40% improvement in complex apps) and smoother user experiences, critical for retaining mobile-first audiences.",
  },
  {
    title: "Cross-Platform Consistency",
    description:
      "Share up to 90% of code between web and mobile apps using React Native. Ideal for teams needing unified UX across platforms without doubling development costs or timelines.",
  },
  {
    title: "Long-Term Scalability",
    description:
      "React’s component-based structure simplifies scaling. Companies like Airbnb and Asana use it to manage apps with 10M+ monthly users, thanks to reusable components and predictable state management.",
  },
  {
    title: "Enterprise-Grade Ecosystem",
    description:
      "Access 50,000+ pre-built libraries (React Query, Redux) and a community of 17M developers. Reduces 'reinventing the wheel' costs and accelerates time-to-market for complex features.",
  },
  {
    title: "Future-Proof Maintenance",
    description:
      "Explicit one-way data flow and modular design cut legacy code risks. Teams report 30-50% faster onboarding for new developers compared to unstructured codebases.",
  },
  {
    title: "Talent Availability",
    description:
      "As the most in-demand front-end framework, React simplifies hiring. 72% of Fortune 500 companies now standardize on React for faster team ramp-up.",
  },
];

const WhyReact = () => {
  return (
    <section className="bg-sectionBG section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 reveal">
          Why ReactJS? A Strategic Choice for Modern Development
        </h2>
        <div className="grid md:grid-cols-2 gap-6 reveal">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-lg rounded-2xl border border-gray-200 hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {index + 1}. {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyReact;
