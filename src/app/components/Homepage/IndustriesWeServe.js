import React from "react";
import Link from "next/link";

const SvgIcon = ({ color, children }) => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
);

const industries = [
  {
    icon: <SvgIcon color="#dc2626"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></SvgIcon>,
    name: "Healthcare", count: "8 projects · HIPAA", href: "/industry/healthcare-software-development/",
  },
  {
    icon: <SvgIcon color="#1A5CCC"><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></SvgIcon>,
    name: "Fintech", count: "12 projects", href: "/industry/fintech-software-development/",
  },
  {
    icon: <SvgIcon color="#7c3aed"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></SvgIcon>,
    name: "EdTech", count: "7 projects", href: "/industry/edtech-software-development/",
  },
  {
    icon: <SvgIcon color="#ea580c"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></SvgIcon>,
    name: "E-Commerce", count: "15 projects", href: "/industry/e-commerce-app-development/",
  },
  {
    icon: <SvgIcon color="#0891b2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" /></SvgIcon>,
    name: "SaaS", count: "20+ projects",
  },
  {
    icon: <SvgIcon color="#16a34a"><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></SvgIcon>,
    name: "Logistics", count: "6 projects", href: "/industry/fleet-management-software-development/",
  },
];

const IndustriesWeServe = () => {
  return (
    <div className="bg-white">
      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto main-section-padding">
        {/* Section Header */}
        <div className="mb-14 reveal">
          <span className="text-[11px] font-bold tracking-[0.12em] uppercase block mb-3 text-themeColor">
            Industries We Serve
          </span>
          <h2 className="text-[clamp(30px,3.5vw,44px)] font-extrabold tracking-[-1px] leading-[1.1] text-[#0d0f1a]">
            Deep Domain Expertise
          </h2>
          <p className="text-[17px] text-[#6b7280] mt-3 max-w-[560px]">
            Not generalists. We have case studies, clients, and production code
            in each of these verticals.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((item, index) => {
            const content = (
              <>
                <div className="mb-2.5 flex justify-center">{item.icon}</div>
                <div className="font-Figtree text-[13px] font-bold text-[#0d0f1a] mb-1">
                  {item.name}
                </div>
                <div className="font-Figtree text-[11px] text-[#6b7280]">
                  {item.count}
                </div>
              </>
            );

            const className =
              "border border-[#e5e7eb] rounded-xl py-6 px-4 text-center cursor-pointer transition-all duration-300 hover:border-themeColor hover:bg-[#e8f0fd] hover:-translate-y-1 reveal";

            return item.href ? (
              <Link href={item.href} key={index} className={className}>
                {content}
              </Link>
            ) : (
              <div key={index} className={className}>
                {content}
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-6 mt-7 reveal">
          <Link
            href="/industry/"
            className="font-Figtree text-themeColor font-semibold text-sm inline-flex items-center gap-1.5 hover:gap-2.5 transition-all duration-200"
          >
            +9 more industries we have shipped in →
          </Link>
          <span className="text-[#e5e7eb]">|</span>
          <Link
            href="/contact-us/"
            className="font-Figtree text-[#374151] font-semibold text-sm inline-flex items-center gap-1.5 hover:text-themeColor transition-colors duration-200"
          >
            Tell us your industry →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IndustriesWeServe;
