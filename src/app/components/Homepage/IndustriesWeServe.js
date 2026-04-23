import React from "react";
import Link from "next/link";

const industries = [
  {
    name: "/fintech",
    tags: "payments · lending · neobanking",
    items: ["kyc & onboarding", "fraud-detection agents", "ledger migration", "realtime dashboards"],
    href: "/industry/fintech-software-development/",
  },
  {
    name: "/healthcare",
    tags: "hipaa · ehr · telehealth",
    items: ["patient portals", "triage chatbots", "hl7/fhir", "wearables"],
    href: "/industry/healthcare-software-development/",
  },
  {
    name: "/edtech",
    tags: "lms · assessments · tutoring",
    items: ["adaptive learning", "proctoring agents", "content authoring", "analytics"],
    href: "/industry/edtech-software-development/",
  },
  {
    name: "/e-commerce",
    tags: "marketplaces · d2c · oms",
    items: ["recommenders", "checkout opt", "catalog ingest", "whatsapp store"],
    href: "/industry/e-commerce-app-development/",
  },
  {
    name: "/media",
    tags: "streaming · publishing · creators",
    items: ["moderation", "gen-ai editing", "metadata agents", "paywall"],
  },
  {
    name: "/fleet-gps",
    tags: "logistics · last-mile · telematics",
    items: ["route opt", "driver apps", "gps pipelines", "compliance"],
    href: "/industry/fleet-management-software-development/",
  },
  {
    name: "/hr-tech",
    tags: "ats · onboarding · payroll",
    items: ["resume parsing", "interview copilots", "onboarding", "compliance"],
  },
  {
    name: "/manufacturing",
    tags: "iot · mes · quality",
    items: ["predictive maint", "vision qa", "shop-floor dash", "supply agents"],
  },
];

const IndustryCard = ({ industry }) => {
  const content = (
    <div className="p-6 sm:p-7 flex flex-col h-full">
      <h3 className="font-Figtree text-[20px] sm:text-[22px] font-bold text-white tracking-[-0.5px]">
        {industry.name}
      </h3>
      <p className="font-Figtree text-[13px] text-[#9ca3af] mt-1.5 mb-5">
        {industry.tags}
      </p>
      <ul className="space-y-2.5 mt-auto">
        {industry.items.map((item, i) => (
          <li key={i} className="font-Figtree text-[14px] text-[#d1d5db] flex items-center gap-2">
            <span className="text-themeColor text-[13px]">→</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  const className =
    "border border-[#2a2d35] rounded-xl transition-all duration-300 hover:border-[#4a4d55] hover:bg-[#1a1d25] h-full";

  return industry.href ? (
    <Link href={industry.href} className={className}>
      {content}
    </Link>
  ) : (
    <div className={className}>
      {content}
    </div>
  );
};

const IndustriesWeServe = () => {
  return (
    <div className="bg-[#0d0f14]">
      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto main-section-padding">
        <div className="mb-12 reveal">
          <h2 className="text-[clamp(32px,4.5vw,56px)] font-extrabold tracking-[-2px] leading-[1.05] text-white">
            Eight industries. One senior<br className="hidden sm:block" /> pod.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 reveal">
          {industries.map((industry, index) => (
            <IndustryCard key={index} industry={industry} />
          ))}
        </div>

        <div className="flex items-center justify-center gap-6 mt-8 reveal">
          <Link
            href="/industry/"
            className="font-Figtree text-themeColor font-semibold text-sm inline-flex items-center gap-1.5 hover:gap-2.5 transition-all duration-200"
          >
            See all industries →
          </Link>
          <span className="text-[#2a2d35]">|</span>
          <Link
            href="/contact-us/"
            className="font-Figtree text-[#9ca3af] font-semibold text-sm inline-flex items-center gap-1.5 hover:text-white transition-colors duration-200"
          >
            Tell us your industry →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IndustriesWeServe;
