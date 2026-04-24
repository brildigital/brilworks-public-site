import React from "react";
import Link from "next/link";

const offerings = [
  {
    number: "01",
    title: "Product engineering",
    description:
      "SaaS, web and mobile apps. React, Node, React Native, Flutter. From 0→1 to scale, with product-team rigor.",
    href: "/services/product-engineering/",
  },
  {
    number: "02",
    title: "AI agents & Gen-AI",
    description:
      "Production agents for support, ops and data. RAG, tool-use, evals. Wired to HubSpot, Stripe, your database.",
    href: "/services/generative-ai-development/",
  },
  {
    number: "03",
    title: "DevOps & cloud",
    description:
      "AWS, Kubernetes, CI/CD. We design the infra, harden it and stay on-call. Certified AWS & Kubernetes consultants.",
    href: "/services/devops-consulting/",
  },
  {
    number: "04",
    title: "Rapid digitalization",
    description:
      "MVP in 48 hours. Low-code (Frappe, FlutterFlow, Adalo) where it fits, custom code where it counts.",
  },
  {
    number: "05",
    title: "Hire-a-team",
    description:
      "Dedicated pods or staff-aug. React, Node, Java, AWS, React Native, Blockchain. Onboarded in a week.",
    href: "/hire-developers/",
  },
  {
    number: "06",
    title: "AI solutions",
    description:
      "Ready-to-ship: SQL & MongoDB chatbots, website chat, CSV/Excel chat, WhatsApp automation, PRD generator.",
    href: "/services/generative-ai-development/",
  },
];

const WhatWeShip = () => {
  return (
    <div className="bg-white">
      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto main-section-padding">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-14 reveal">
          <div className="lg:max-w-[480px]">
            <span className="text-[11px] font-bold tracking-[0.12em] uppercase block mb-3 text-themeColor">
              What We Ship
            </span>
            <h2 className="text-[clamp(30px,4vw,48px)] font-extrabold tracking-[-1.5px] leading-[1.08] text-[#0d0f1a]">
              Six ways we work,
              <br />
              one delivery team.
            </h2>
          </div>
          <p className="text-[16px] leading-[1.65] text-[#6b7280] lg:max-w-[440px] lg:pt-8">
            We don&apos;t do &ldquo;strategy decks.&rdquo; We ship real software into
            production&nbsp;&mdash; apps, agents, infra&nbsp;&mdash; and stay on to keep it
            good. Pick any surface; the team, tooling and process come
            with it.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 reveal">
          {offerings.map((item) => {
            const content = (
              <div className="border border-[#e5e7eb] rounded-xl p-7 sm:p-8 flex flex-col h-full transition-all duration-300 hover:border-[#c7cad1] hover:shadow-sm">
                <span className="font-Figtree text-[13px] text-[#9ca3af] mb-5 block">
                  {item.number}
                </span>
                <h3 className="font-Figtree text-[19px] sm:text-[20px] font-bold text-[#0d0f1a] tracking-[-0.3px] mb-3">
                  {item.title}
                </h3>
                <p className="font-Figtree text-[14px] leading-[1.65] text-[#6b7280] mb-6 flex-grow">
                  {item.description}
                </p>
                <span className="font-Figtree text-[14px] font-semibold text-[#0d0f1a] inline-flex items-center gap-1.5 hover:gap-2.5 transition-all duration-200">
                  Learn more →
                </span>
              </div>
            );

            return item.href ? (
              <Link key={item.number} href={item.href} className="block h-full">
                {content}
              </Link>
            ) : (
              <div key={item.number} className="h-full">
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhatWeShip;
