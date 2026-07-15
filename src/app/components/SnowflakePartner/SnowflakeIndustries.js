import React from "react";
import {
  Landmark,
  HeartPulse,
  ShoppingCart,
  Truck,
  BarChart3,
  Factory,
  UtensilsCrossed,
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
    desc: "Patient and operational analytics on Snowflake with HIPAA-aware governance and secure data sharing.",
  },
  {
    name: "Retail & E-Commerce",
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
  {
    name: "Food & Beverage",
    icon: UtensilsCrossed,
    desc: "Manufacturing and distribution data engineered for traceability, demand, and yield insight.",
  },
];

const SnowflakeIndustries = () => {
  return (
    <div className="bg-[#f5f7fb]" id="industries">
      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto main-section-padding">
        <div className="mb-10 reveal">
          <span className="flex items-center gap-[9px] font-mono text-[12px] font-semibold tracking-[0.16em] uppercase text-themeColor mb-4">
            Deep domain expertise
          </span>
          <h2
            className="font-Figtree font-extrabold tracking-[-0.02em] leading-[1.06] text-[#0B1020]"
            style={{ fontSize: "clamp(28px, 4vw, 46px)" }}
          >
            Snowflake expertise across industries
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <div
                key={i}
                className="rounded-[14px] p-6 bg-white border border-[#e4e8f0] reveal"
              >
                <div className="w-10 h-10 rounded-lg bg-[#f5f7fb] border border-[#e4e8f0] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-themeColor" strokeWidth={1.7} />
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

export default SnowflakeIndustries;
