import React from "react";
import ButtonV2 from "../Common/ButtonV2";

const DataEngineeringMidCTA = () => {
  return (
    <div className="bg-white">
      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto py-16">
        <div
          className="relative rounded-2xl overflow-hidden min-h-[240px] flex items-center reveal"
          style={{
            background:
              "radial-gradient(700px 400px at 85% 0%, rgba(26,92,204,.16), transparent 60%), #0B1020",
          }}
        >
          <div className="p-10 md:p-12">
            <h2
              className="font-Figtree font-extrabold tracking-[-0.02em] leading-[1.1] text-white mb-3"
              style={{ fontSize: "clamp(23px, 3vw, 32px)" }}
            >
              Not sure where to start? Start with the bill.
            </h2>
            <p className="font-Figtree text-white/70 text-[15.5px] leading-[1.55] max-w-[54ch]">
              Your Snowflake or Databricks spend is probably 20 to 40% higher
              than it needs to be. Our fixed-price Cost-Optimization Audit finds
              where, and usually pays for itself.
            </p>
            <ButtonV2
              size="large"
              label="Get a Cost Audit"
              className={"w-fit mt-6"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataEngineeringMidCTA;
