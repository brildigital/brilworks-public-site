import React from "react";
import Link from "next/link";

const SvgIcon = ({ color, children }) => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
);

const aiIcons = {
  support: <SvgIcon color="#0891b2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /><path d="M8 10h.01" /><path d="M12 10h.01" /><path d="M16 10h.01" /></SvgIcon>,
  lead: <SvgIcon color="#16a34a"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></SvgIcon>,
  document: <SvgIcon color="#ea580c"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></SvgIcon>,
  workflow: <SvgIcon color="#eab308"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></SvgIcon>,
  coding: <SvgIcon color="#7c3aed"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /><line x1="14" y1="4" x2="10" y2="20" /></SvgIcon>,
  whitelabel: <SvgIcon color="#1A5CCC"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></SvgIcon>,
};

const aiSolutions = [
  {
    iconKey: "support",
    proof: "Handles 80% of queries automatically",
    title: "Customer Support Agent",
    description:
      "24/7 support on WhatsApp, website chat, and email. Your AI handles the routine — humans get the complex 20%.",
    link: "/ai-solutions/",
  },
  {
    iconKey: "lead",
    proof: "Responds to leads in under 2 minutes",
    title: "Lead Qualification Agent",
    description:
      "New leads get a response before your competitor does. AI qualifies, scores, and books calls automatically.",
    link: "/ai-solutions/",
  },
  {
    iconKey: "document",
    proof: "Processes invoices in 5 seconds",
    title: "Document Processing Agent",
    description:
      "Invoices, contracts, receipts — extracted and pushed into your CRM or spreadsheet without human input.",
    link: "/ai-solutions/",
  },
  {
    iconKey: "workflow",
    proof: "Eliminates 20+ hrs/week of manual work",
    title: "Workflow Automation Agent",
    description:
      "Multi-step business processes on autopilot. Reporting, data entry, CRM updates, email sequences.",
    link: "/ai-solutions/",
  },
  {
    iconKey: "coding",
    proof: "One client cut dev time by 50%",
    title: "AI Coding Accelerator",
    description:
      "Custom AI skills baked into your dev workflow. Ship features faster without growing the team.",
    link: "/ai-solutions/",
  },
  {
    iconKey: "whitelabel",
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

              <div className="mb-4">{aiIcons[solution.iconKey]}</div>

              <div className="flex items-center gap-1.5 bg-blue-50 rounded-md px-2.5 py-1.5 mb-4 w-fit">
                <span className="text-themeColor text-xs font-semibold">
                  ✓ {solution.proof}
                </span>
              </div>

              <h4 className="font-Figtree text-base font-bold text-gray-900 mb-2">
                {solution.title}
              </h4>
              <p className="font-Figtree text-[13px] text-colorGray leading-[1.65] mb-4">
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
