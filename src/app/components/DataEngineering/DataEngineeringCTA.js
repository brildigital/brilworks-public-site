import React from "react";
import ButtonV2 from "../Common/ButtonV2";

const DataEngineeringCTA = () => {
  return (
    <div
      className="text-center text-white"
      style={{
        background:
          "radial-gradient(800px 400px at 50% 120%, rgba(26,92,204,.22), transparent 60%), #0B1020",
      }}
      id="cta"
    >
      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto main-section-padding">
        <div className="reveal">
          <h2
            className="font-Figtree font-extrabold tracking-[-0.02em] leading-[1.1] text-white max-w-[22ch] mx-auto mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 46px)" }}
          >
            Ready to put your data to work?
          </h2>
          <p className="font-Figtree text-white/70 text-[16px] leading-[1.55] max-w-[48ch] mx-auto">
            One conversation is enough to know whether we are the right fit.
            Tell us what you are building or what is costing too much, and we
            will point you to the offer that fits.
          </p>
          <ButtonV2
            size="large"
            label="Talk to an Expert"
            className={"w-fit mt-7 mx-auto"}
          />
        </div>
      </div>
    </div>
  );
};

export default DataEngineeringCTA;
