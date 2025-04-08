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
    title: "Non-Blocking Architecture for Speed",
    description:
      "Node.js processes requests asynchronously, eliminating delays in web applications like real-time chat, live streaming, or RESTful APIs. This ensures fast response times and seamless user experiences.",
  },
  {
    title: "Lightweight & Resource-Efficient",
    description:
      "Its event-driven model minimizes server load, making it ideal for building scalable systems without excessive hardware costs. Perfect for startups and enterprises alike.",
  },
  {
    title: "Microservices-Ready Ecosystem",
    description:
      "Node.js simplifies splitting monolithic apps into modular microservices, enabling independent scaling, faster updates, and easier maintenance in software development cycles.",
  },
  {
    title: "High Concurrency Handling",
    description:
      "Designed to manage thousands of simultaneous connections, Node.js excels in high-quality platforms like gaming, IoT, or collaborative tools with heavy real-time traffic.",
  },
  {
    title: "Optimized for RESTful API Development",
    description:
      "Node.js streamlines creating RESTful APIs, ensuring smooth communication between frontend and backend systems for data-driven web applications.",
  },
  {
    title: "Unmatched Scalability",
    description:
      "Built for horizontal and vertical scaling, Node.js supports building scalable architectures that grow with user demand, from startups to global enterprises.",
  },
  {
    title: "Performance-Centric Design",
    description:
      "Node.js prioritizes performance optimization out of the box, reducing latency and CPU bottlenecks even in compute-heavy tasks like data analytics or real-time dashboards.",
  },
  {
    title: "JavaScript Everywhere",
    description:
      "Leverage a unified programming language (JavaScript/TypeScript) across frontend and backend, streamlining software development and reducing context-switching for teams.",
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
    <section className="bg-sectionBG main-section-padding">
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
