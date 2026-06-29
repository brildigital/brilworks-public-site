import React from "react";
import {
  Headphones,
  UserCheck,
  FileText,
  Workflow,
  Code2,
  Tag,
  ArrowRight,
} from "lucide-react";

const ICON_MAP = {
  support: Headphones,
  lead: UserCheck,
  document: FileText,
  workflow: Workflow,
  coding: Code2,
  whitelabel: Tag,
};

const aiSolutions = [
  {
    iconKey: "support",
    proof: "Handles 80% of queries automatically",
    title: "Customer Support Agent",
    description:
      "24/7 support on WhatsApp, website chat, and email. Your AI handles the routine — humans get the complex 20%.",
    link: "/ai-tools/ai-chatbot-knowledge-base/",
  },
  {
    iconKey: "lead",
    proof: "Responds to leads in under 2 minutes",
    title: "Lead Qualification Agent",
    description:
      "New leads get a response before your competitor does. AI qualifies, scores, and books calls automatically.",
    link: "/ai-tools/ai-chatbot-conversational-solution/",
  },
  {
    iconKey: "document",
    proof: "Processes invoices in 5 seconds",
    title: "Document Processing Agent",
    description:
      "Invoices, contracts, receipts — extracted and pushed into your CRM or spreadsheet without human input.",
    link: "/ai-tools/ai-document-compliance-review/",
  },
  {
    iconKey: "workflow",
    proof: "Eliminates 20+ hrs/week of manual work",
    title: "Workflow Automation Agent",
    description:
      "Multi-step business processes on autopilot. Reporting, data entry, CRM updates, email sequences.",
    link: "/ai-tools/ai-insights-and-automation/",
  },
  {
    iconKey: "coding",
    proof: "One client cut dev time by 50%",
    title: "AI Coding Accelerator",
    description:
      "Custom AI skills baked into your dev workflow. Ship features faster without growing the team.",
    link: "/ai-agents/tech/",
  },
  {
    iconKey: "whitelabel",
    proof: "Your brand. Your margin.",
    title: "White-Label for Agencies",
    description:
      "Your clients want AI. You can't build it. We can. You brand it, you bill it, you keep the margin.",
    link: "/ai-tools/pre-build-solutions/",
  },
];

const DataScienceAgentsBand = () => {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(700px 400px at 85% 0%, rgba(26,92,204,.16), transparent 60%), #0A0D14",
      }}
      id="agents"
    >
      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto main-section-padding">
        <div className="mb-9 reveal">
          <span className="flex items-center gap-[9px] font-mono text-[12px] font-semibold tracking-[0.16em] uppercase text-themeColor mb-4">
            The payoff
          </span>
          <h2
            className="font-Figtree font-extrabold tracking-[-0.02em] leading-[1.06] text-white mb-3"
            style={{ fontSize: "clamp(28px, 4vw, 46px)", maxWidth: "16ch" }}
          >
            30+ AI agents.{" "}
            <span className="text-themeColor">Running live.</span> Right now.
          </h2>
          <p
            className="font-Figtree text-white/60 leading-[1.55]"
            style={{ fontSize: "17px", maxWidth: "48ch" }}
          >
            They run because the data underneath them is clean. Most teams hire
            an AI agent development company and skip that part. We build the
            pipeline before the agent.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {aiSolutions.map((agent, i) => {
            const Icon = ICON_MAP[agent.iconKey];
            return (
              <a
                key={i}
                href={agent.link}
                className="border border-white/[0.08] rounded-2xl p-[22px] bg-white/[0.025] hover:-translate-y-1 hover:border-[#1A5CCC]/40 transition-[transform,border-color] duration-300 reveal flex flex-col"
              >
                <div className="flex items-center justify-start gap-4 mb-3">
                  {Icon && (
                    <div className="w-9 h-9 rounded-lg bg-[#1A5CCC]/10 flex items-center justify-center">
                      <Icon className="w-[18px] h-[18px] text-themeColor" />
                    </div>
                  )}
                  <div className="flex items-center gap-[7px] font-mono text-xs font-semibold text-themeColor tracking-[0.06em]">
                    <span className="w-[7px] h-[7px] rounded-full bg-themeColor hero-blink shrink-0"></span>
                    {agent.proof}
                  </div>
                </div>
                <h3 className="font-Figtree font-semibold text-[16px] text-white tracking-[-0.01em] mb-2">
                  {agent.title}
                </h3>
                <p className="font-Figtree text-[13px] text-white/60 leading-[1.55] m-0">
                  {agent.description}
                </p>
                <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-themeColor group-hover:gap-2 transition-[gap] duration-200 mt-auto">
                  Explore Agent <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DataScienceAgentsBand;
