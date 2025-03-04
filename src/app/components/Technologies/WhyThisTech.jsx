import { usePathname } from "next/navigation";
import React from "react";

const reactJsBenefits = [
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
const nodeJsBenefits = [
  {
    title: "Fast & Non-Blocking",
    description:
      "Node.js handles multiple connections efficiently with its non-blocking I/O model. Ideal for chat apps, streaming services, and high-performance APIs, ensuring minimal latency and maximum responsiveness.",
  },
  {
    title: "Lightweight & Scalable",
    description:
      "Its event-driven architecture supports high concurrency, reducing server load while efficiently managing thousands of simultaneous connections.",
  },
  {
    title: "Microservices-Friendly",
    description:
      "Node.js seamlessly integrates with microservices architectures, enabling modular, scalable, and maintainable backend solutions for large-scale applications.",
  },
  {
    title: "Challenges at Scale",
    description:
      "Managing memory leaks, maintaining real-time performance, and handling intensive computations require expertise. Proper optimization and best practices are crucial for sustained performance at scale.",
  },
];
const blockchainBenefits = [
  {
    title: "Unbreakable Security",
    description:
      "Immutable ledgers and cryptographic hashing reduce breaches by 99%. Ideal for sectors handling sensitive data.",
  },
  {
    title: "Transparent Operations",
    description:
      "Every transaction is auditable, building stakeholder trust. Supply chain clients report 40% faster dispute resolution.",
  },
  {
    title: "Cost Efficiency",
    description:
      "Automate middlemen processes. Banks using smart contracts cut operational costs by 30%.",
  },
  {
    title: "Future-Proof Scalability",
    description:
      "Layer-2 solutions and sharding enable networks to handle 10,000+ TPS, ready for global adoption.",
  },
  {
    title: "Regulatory Compliance",
    description:
      "Built-in KYC/AML modules and automated reporting ensure adherence to evolving global standards.",
  },
  {
    title: "Ecosystem Growth",
    description:
      "Join a $30B+ industry with interoperability standards like Cosmos and Polkadot, ensuring long-term relevance.",
  },
];

const WhyThisTech = () => {
  const pathname = usePathname();
  const mapToRender = {
    "/hire-reactjs-developer/": {
      title: "Why ReactJS? A Strategic Choice for Modern Development",
      description: "",
      benefits: reactJsBenefits,
    },
    "/hire-nodejs-developer/": {
      title: "Why Choose Node.js Development?",
      description:
        "Node.js is widely used for real-time applications and scalable microservices, but scaling it properly requires careful management. Our Node.js developers help you navigate these challenges, ensuring smooth performance as your application grows.",
      benefits: nodeJsBenefits,
    },
    "/hire-blockchain-developer/": {
      title: "Why Blockchain? Strategic Advantages for Modern Enterprises",
      description: "",
      benefits: blockchainBenefits,
    },
  };
  const currentData = mapToRender[pathname];
  return (
    <section className="bg-sectionBG section-padding">
      <div className="container mx-auto flex flex-col">
        <div className="endTO_text solutions flex flex-col gap-3">
          <h2 className="!w-full uppercase reveal">{currentData.title}</h2>
          <p className="reveal text-left md:text-center">
            {currentData.description}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 reveal">
          {currentData.benefits.map((benefit, index) => (
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

export default WhyThisTech;
