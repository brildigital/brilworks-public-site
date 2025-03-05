import { usePathname } from "next/navigation";
import React from "react";

const reactJsBenefits = [
  {
    title: "Optimized Performance with Virtual DOM",
    description:
      "React’s virtual DOM transforms front-end development by updating only specific User Interface elements instead of entire pages. This precision cuts load times by 40% in data-heavy apps while keeping animations at 60fps. For mobile-first users, this leads to 3x lower bounce rates—crucial since 75% of users abandon sites that take over 3 seconds to load.",
  },
  {
    title: "Cross-Platform Consistency",
    description:
      "React Native ensures a unified UI across platforms, sharing 90% of the code between iOS, Android, and web. This reduces development costs by $78K per year for a mid-sized project and keeps branding consistent. Shopify cut customer training costs by 22% using identical UX patterns.",
  },
  {
    title: "SEO-Friendly Architecture",
    description:
      "React’s server-side rendering (Next.js) improves search rankings by boosting Google crawl speeds 20-35% compared to client-side SPAs. A luxury retailer increased organic traffic by 48% after moving from an AJAX-heavy user interface to React/Next.js.",
  },
  {
    title: "Long-Term Scalability",
    description:
      "React’s component-based architecture allows Airbnb to handle 100M+ users smoothly. We design UI elements as reusable modules—update a profile card once, deploy globally. Redux Toolkit reduces enterprise app bugs by 63%, ensuring scalable front-end development.",
  },
  {
    title: "Future-Proof Maintenance",
    description:
      "React’s one-way data flow keeps codebases easy to manage. A fintech client onboarded 12 developers in 3 days (down from 3 weeks pre-React) using self-documenting UI components, ensuring long-term front-end stability.",
  },
  {
    title: "Talent Availability",
    description:
      "React is the standard for 72% of Fortune 500 teams. We access this global talent pool to staff projects 3x faster than Vue or Angular specialists, ensuring expert front-end execution.",
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
