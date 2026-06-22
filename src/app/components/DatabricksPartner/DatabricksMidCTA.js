import React from "react";
import ButtonV2 from "../Common/ButtonV2";

const DatabricksMidCTA = () => {
  return (
    <div className="bg-white">
      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto py-16">
        <div
          className="relative rounded-2xl overflow-hidden min-h-[240px] flex items-center reveal"
          style={{
            background:
              "radial-gradient(700px 400px at 85% 0%, rgba(41,181,232,.16), transparent 60%), #0B1020",
          }}
        >
          <div className="p-10 md:p-12">
            <h2
              className="font-Figtree font-extrabold tracking-[-0.02em] leading-[1.1] text-white mb-3"
              style={{ fontSize: "clamp(23px, 3vw, 32px)" }}
            >
              Build your data intelligence platform on Databricks.
            </h2>
            <p className="font-Figtree text-white/70 text-[15.5px] leading-[1.55]">
              Unify analytics and AI on one lakehouse, give every team the same
              governed data, and scale ML built for the modern enterprise.
            </p>
            <ButtonV2
              size="large"
              label="Let's connect"
              className={"w-fit mt-6"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatabricksMidCTA;
