import React from "react";
import { Activity, CreditCard, BookOpen, ShoppingCart, Cloud, Truck } from "lucide-react";
import Link from "next/link";

const industries = [
  {
    icon: <Activity size={32} color="#dc2626" strokeWidth={1.75} />,
    name: "Healthcare",
    count: "8 projects · HIPAA",
    href: "/industry/healthcare-software-development/",
  },
  {
    icon: <CreditCard size={32} color="#1A5CCC" strokeWidth={1.75} />,
    name: "Fintech",
    count: "12 projects",
    href: "/industry/fintech-software-development/",
  },
  {
    icon: <BookOpen size={32} color="#7c3aed" strokeWidth={1.75} />,
    name: "EdTech",
    count: "7 projects",
    href: "/industry/edtech-software-development/",
  },
  {
    icon: <ShoppingCart size={32} color="#ea580c" strokeWidth={1.75} />,
    name: "E-Commerce",
    count: "15 projects",
    href: "/industry/e-commerce-app-development/",
  },
  {
    icon: <Cloud size={32} color="#0891b2" strokeWidth={1.75} />,
    name: "SaaS",
    count: "20+ projects",
    href: "/saas-application-development-services/",
  },
  {
    icon: <Truck size={32} color="#16a34a" strokeWidth={1.75} />,
    name: "Logistics",
    count: "6 projects",
    href: "/industry/fleet-management-software-development/",
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
          <span className="font-Figtree text-themeColor font-semibold text-sm">
            +9 more industries we have shipped in
          </span>
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
