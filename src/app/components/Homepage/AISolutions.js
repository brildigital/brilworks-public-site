import React from "react";
import Link from "next/link";

const aiSolutions = [
  {
    icon: "/images/v2/ai-agent-icon.svg",
    fallbackIcon: "🤖",
    proof: "Handles 80% of queries automatically",
    title: "Customer Support Agent",
    description:
      "24/7 support on WhatsApp, website chat, and email. Your AI handles the routine — humans get the complex 20%.",
    link: "/ai-solutions/",
  },
  {
    icon: "/images/v2/lead-icon.svg",
    fallbackIcon: "📈",
    proof: "Responds to leads in under 2 minutes",
    title: "Lead Qualification Agent",
    description:
      "New leads get a response before your competitor does. AI qualifies, scores, and books calls automatically.",
    link: "/ai-solutions/",
  },
  {
    icon: "/images/v2/document-icon.svg",
    fallbackIcon: "📄",
    proof: "Processes invoices in 5 seconds",
    title: "Document Processing Agent",
    description:
      "Invoices, contracts, receipts — extracted and pushed into your CRM or spreadsheet without human input.",
    link: "/ai-solutions/",
  },
  {
    icon: "/images/v2/workflow-icon.svg",
    fallbackIcon: "⚡",
    proof: "Eliminates 20+ hrs/week of manual work",
    title: "Workflow Automation Agent",
    description:
      "Multi-step business processes on autopilot. Reporting, data entry, CRM updates, email sequences.",
    link: "/ai-solutions/",
  },
  {
    icon: "/images/v2/coding-icon.svg",
    fallbackIcon: "💻",
    proof: "One client cut dev time by 50%",
    title: "AI Coding Accelerator",
    description:
      "Custom AI skills baked into your dev workflow. Ship features faster without growing the team.",
    link: "/ai-solutions/",
  },
  {
    icon: "/images/v2/whitelabel-icon.svg",
    fallbackIcon: "🏢",
    proof: "Your brand. Your margin.",
    title: "White-Label for Agencies",
    description:
      "Your clients want AI. You can't build it. We can. You brand it, you bill it, you keep the margin.",
    link: "/ai-solutions/",
  },
];

const AISolutions = () => {
  return (
    <div className="bg-[#f8f9ff] relative overflow-hidden">
      {/* Top gradient line — blue to teal */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-themeColor via-[#00b4d8] to-transparent"></div>

      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto main-section-padding">
        <div className="mb-14 reveal">
          <span className="text-[11px] font-bold tracking-[0.12em] uppercase block mb-3 text-themeColor">
            Our AI Solutions
          </span>
          <h2 className="text-[clamp(30px,3.5vw,44px)] font-extrabold tracking-[-1px] leading-[1.1] text-[#0d0f1a]">
            30+ AI Agents. Running Live. Right Now.
          </h2>
          <p className="text-[17px] text-[#6b7280] mt-3 max-w-[560px]">
            While other companies talk about AI, we ship it. Custom agents built
            for your exact workflow — not off-the-shelf tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {aiSolutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-themeColor relative overflow-hidden group reveal"
            >
              {/* Top gradient bar on hover */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-themeColor to-[#00b4d8] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="text-3xl mb-4">{solution.fallbackIcon}</div>

              <div className="flex items-center gap-1.5 bg-blue-50 rounded-md px-2.5 py-1.5 mb-4 w-fit">
                <span className="text-themeColor text-xs font-semibold">
                  ✓ {solution.proof}
                </span>
              </div>

              <h4 className="font-[family-name:var(--font-heading)] text-base font-bold text-gray-900 mb-2">
                {solution.title}
              </h4>
              <p className="font-[family-name:var(--font-body)] text-[13px] text-colorGray leading-[1.65] mb-4">
                {solution.description}
              </p>

              <Link
                href={solution.link}
                className="text-sm font-semibold text-themeColor inline-flex items-center gap-1.5 hover:gap-2.5 transition-all duration-200"
              >
                Explore agent →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AISolutions;
