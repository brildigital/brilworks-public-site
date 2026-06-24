import React from "react";
import {
  Landmark,
  HeartPulse,
  ShoppingCart,
  Truck,
  BarChart3,
  Factory,
} from "lucide-react";

const industries = [
  {
    name: "Fintech",
    icon: Landmark,
    desc: "Real-time payments analytics, fraud detection, and governed data for regulated financial workloads.",
  },
  {
    name: "Healthcare",
    icon: HeartPulse,
    desc: "Patient and operational analytics with HIPAA-aware governance and secure data sharing.",
  },
  {
    name: "E-Commerce",
    icon: ShoppingCart,
    desc: "Unified Shopify, marketplace, and ad data into one source of truth for merchandising and growth.",
  },
  {
    name: "Logistics",
    icon: Truck,
    desc: "Pipelines that turn fleet, route, and warehouse data into real-time operational visibility.",
  },
  {
    name: "SaaS",
    icon: BarChart3,
    desc: "Product, billing, and usage analytics consolidated so every team works from the same metrics.",
  },
  {
    name: "Manufacturing",
    icon: Factory,
    desc: "Sensor, supply-chain, and production data unified for forecasting and operational efficiency.",
  },
];

const DataEngineeringIndustries = () => {
  return (
    <div className="bg-[#f5f7fb]" id="industries">
      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto main-section-padding">
        <div className="text-center max-w-[60ch] mx-auto mb-12 reveal">
          <span className="flex items-center justify-center gap-[9px] font-mono text-[12px] font-semibold tracking-[0.16em] uppercase text-themeColor mb-4">
            <span className="w-[22px] h-[1px] bg-themeColor inline-block"></span>
            Industries we serve
          </span>
          <h2
            className="font-Figtree font-extrabold tracking-[-0.02em] leading-[1.06] text-[#0B1020] mb-3"
            style={{ fontSize: "clamp(28px, 4vw, 46px)" }}
          >
            Data engineering built for your vertical
          </h2>
          <p className="font-Figtree text-[16px] text-[#525a6b] leading-[1.55] m-0">
            Pipeline patterns differ by industry. We have shipped in each of
            these.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <div
                key={i}
                className="rounded-[14px] p-6 bg-white border border-[#e4e8f0] transition-all duration-300 hover:-translate-y-1 hover:border-themeColor reveal"
              >
                <div className="w-10 h-10 rounded-lg bg-[#f5f7fb] border border-[#e4e8f0] flex items-center justify-center mb-4">
                  <Icon
                    className="w-5 h-5 text-themeColor"
                    strokeWidth={1.7}
                  />
                </div>
                <h3 className="font-Figtree font-semibold text-[16px] text-[#0B1020] mb-2 m-0">
                  {ind.name}
                </h3>
                <p className="font-Figtree text-[14px] text-[#525a6b] leading-[1.55] m-0">
                  {ind.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DataEngineeringIndustries;
