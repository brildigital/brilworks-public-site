import { usePathname } from "next/navigation";
import React from "react";
import Heading from "../HTMLComponents/Heading";
import Image from "next/image";

const reactJsBenefits = {
  title: "Why ReactJS? A Strategic Choice for Modern Development",
  description: "",
  benefits: [
    {
      title: "Optimized Performance with Virtual DOM",
      description:
        "React’s virtual DOM transforms front-end development by updating only specific User Interface elements instead of entire pages. This precision cuts load times by 40% in data-heavy apps while keeping animations at 60fps. For mobile-first users, this leads to 3x lower bounce rates—crucial since 75% of users abandon sites that take over 3 seconds to load.",
      icon: "/images/v2/why-n-7.svg",

      iconbg: "bg-[#E5F4FF]",
    },
    {
      title: "Cross-Platform Consistency",
      description:
        "React Native ensures a unified UI across platforms, sharing 90% of the code between iOS, Android, and web. This reduces development costs by $78K per year for a mid-sized project and keeps branding consistent. Shopify cut customer training costs by 22% using identical UX patterns.",
      icon: "/images/v2/cross-platform.svg",
      iconbg: "bg-[#E9FFE2]",
    },
    {
      title: "SEO-Friendly Architecture",
      description:
        "React’s server-side rendering (Next.js) improves search rankings by boosting Google crawl speeds 20-35% compared to client-side SPAs. A luxury retailer increased organic traffic by 48% after moving from an AJAX-heavy user interface to React/Next.js.",
      icon: "/images/v2/seo-friendly.svg",
      iconbg: "bg-[#FFE8FC]",
    },
    {
      title: "Long-Term Scalability",
      description:
        "React’s component-based architecture allows Airbnb to handle 100M+ users smoothly. We design UI elements as reusable modules—update a profile card once, deploy globally. Redux Toolkit reduces enterprise app bugs by 63%, ensuring scalable front-end development.",
      icon: "/images/v2/scale-project.svg",
      iconbg: "bg-[#FFE2E5]",
    },
    {
      title: "Future-Proof Maintenance",
      description:
        "React’s one-way data flow keeps codebases easy to manage. A fintech client onboarded 12 developers in 3 days (down from 3 weeks pre-React) using self-documenting UI components, ensuring long-term front-end stability.",
      icon: "/images/v2/future-proof.svg",
      iconbg: "bg-[#EAFFFD]",
    },
    {
      title: "Talent Availability",
      description:
        "React is the standard for 72% of Fortune 500 teams. We access this global talent pool to staff projects 3x faster than Vue or Angular specialists, ensuring expert front-end execution.",
      icon: "/images/v2/talent-availability.svg",
      iconbg: "bg-[#F4ECFF]",
    },
  ],
};
const nodeJsBenefits = {
  title: "Why Choose Node.js Development?",
  description:
    "Node.js is widely used for real-time applications and scalable microservices, but scaling it properly requires careful management. Our Node.js developers help you navigate these challenges, ensuring smooth performance as your application grows.",
  benefits: [
    {
      title: "Non-Blocking Architecture for Speed",
      description:
        "Node.js processes requests asynchronously, eliminating delays in web applications like real-time chat, live streaming, or RESTful APIs. This ensures fast response times and seamless user experiences.",
      icon: "/images/v2/why-n-1.svg",
      iconbg: "bg-[#E5F4FF]",
    },
    {
      title: "Lightweight & Resource-Efficient",
      description:
        "Its event-driven model minimizes server load, making it ideal for building scalable systems without excessive hardware costs. Perfect for startups and enterprises alike.",
      icon: "/images/v2/why-n-2.svg",
      iconbg: "bg-[#E9FFE2]",
    },
    {
      title: "Microservices-Ready Ecosystem",
      description:
        "Node.js simplifies splitting monolithic apps into modular microservices, enabling independent scaling, faster updates, and easier maintenance in software development cycles.",
      icon: "/images/v2/why-n-3.svg",
      iconbg: "bg-[#FFE8FC]",
    },
    {
      title: "High Concurrency Handling",
      description:
        "Designed to manage thousands of simultaneous connections, Node.js excels in high-quality platforms like gaming, IoT, or collaborative tools with heavy real-time traffic.",
      icon: "/images/v2/why-n-4.svg",
      iconbg: "bg-[#FFE2E5]",
    },
    {
      title: "Optimized for RESTful API Development",
      description:
        "Node.js streamlines creating RESTful APIs, ensuring smooth communication between frontend and backend systems for data-driven web applications.",
      icon: "/images/v2/why-n-5.svg",
      iconbg: "bg-[#EAFFFD]",
    },
    {
      title: "Unmatched Scalability",
      description:
        "Built for horizontal and vertical scaling, Node.js supports building scalable architectures that grow with user demand, from startups to global enterprises.",
      icon: "/images/v2/scale-project.svg",
      iconbg: "bg-[#F4ECFF]",
    },
    {
      title: "Performance-Centric Design",
      description:
        "Node.js prioritizes performance optimization out of the box, reducing latency and CPU bottlenecks even in compute-heavy tasks like data analytics or real-time dashboards.",
      icon: "/images/v2/why-n-7.svg",
      iconbg: "bg-[#FCFFE3]",
    },
    {
      title: "JavaScript Everywhere",
      description:
        "Leverage a unified programming language (JavaScript/TypeScript) across frontend and backend, streamlining software development and reducing context-switching for teams.",
      icon: "/images/v2/why-n-8.svg",
      iconbg: "bg-[#FEF3E6]",
    },
  ],
};
const blockchainBenefits = {
  title: "Why Blockchain? Strategic Advantages for Modern Enterprises",
  description: "",
  benefits: [
    {
      title: "Unbreakable Security",
      description:
        "Immutable ledgers and cryptographic hashing reduce breaches by 99%. Ideal for sectors handling sensitive data.",
      icon: "/images/v2/adv-security.svg",
      iconbg: "bg-[#E5F4FF]",
    },
    {
      title: "Transparent Operations",
      description:
        "Every transaction is auditable, building stakeholder trust. Supply chain clients report 40% faster dispute resolution.",
      icon: "/images/v2/transparent.svg",
      iconbg: "bg-[#E9FFE2]",
    },
    {
      title: "Cost Efficiency",
      description:
        "Automate middlemen processes. Banks using smart contracts cut operational costs by 30%.",
      icon: "/images/v2/cost-efficient.svg",
      iconbg: "bg-[#FFE8FC]",
    },
    {
      title: "Future-Proof Scalability",
      description:
        "Layer-2 solutions and sharding enable networks to handle 10,000+ TPS, ready for global adoption.",
      icon: "/images/v2/future-proof-scalability.svg",
      iconbg: "bg-[#FFE2E5]",
    },
    {
      title: "Regulatory Compliance",
      description:
        "Built-in KYC/AML modules and automated reporting ensure adherence to evolving global standards.",
      icon: "/images/v2/regular-compliance.svg",
      iconbg: "bg-[#EAFFFD]",
    },
    {
      title: "Ecosystem Growth",
      description:
        "Join a $30B+ industry with interoperability standards like Cosmos and Polkadot, ensuring long-term relevance.",
      icon: "/images/v2/growth.svg",
      iconbg: "bg-[#F4ECFF]",
    },
  ],
};

const WhyThisTech = () => {
  const pathname = usePathname();
  const mapToRender = {
    "/hire-reactjs-developer/": reactJsBenefits,
    "/hire-nodejs-developer/": nodeJsBenefits,
    "/hire-blockchain-developer/": blockchainBenefits,
  };
  const currentData = mapToRender[pathname];
  return (
    <section className="">
      <div className="container max-w-[1280px] main-section-padding mx-auto flex flex-col">
        <Heading
          type="h2"
          className="text-colorBlack lg:!text-[34px] md:!text-3xl !text-2xl"
          text={currentData.title}
        />
        {currentData.description && (
          <p className="md:text-lg text-base md:!mt-2.5 !mt-2">
            {currentData.description}
          </p>
        )}
        <div className="grid md:grid-cols-2 grid-cols-1 sxl:gap-10 md:gap-7.5 gap-5 lg:pt-10 md:pt-7.5 pt-5 reveal">
          {currentData.benefits.map(
            ({ title, description, icon, iconbg }, index) => (
              <div
                key={index}
                className="md:pb-7.5 pb-5 border-b border-b-borderGray"
              >
                <div
                  className={`w-fit flex items-center justify-start p-4 rounded-md ${iconbg} mb-5`}
                >
                  <Image
                    className="sxl:w-12 md:w-8 sxl:h-12 md:h-8 w-6 h-6"
                    src={icon}
                    alt={`${title}-icon`}
                    width={52}
                    height={52}
                  />
                </div>
                <Heading
                  type="h3"
                  className="text-colorBlack md:!text-xl !text-lg font-medium"
                  text={title}
                />
                <p className="md:!text-base !text-sm !pt-4">{description}</p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default WhyThisTech;
