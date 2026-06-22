import React from "react";
import ButtonV2 from "../Common/ButtonV2";

const DatabricksCTA = () => {
  return (
    <div
      className="text-center text-white"
      style={{
        background:
          "radial-gradient(800px 400px at 50% 120%, rgba(41,181,232,.22), transparent 60%), #0B1020",
      }}
      id="cta"
    >
      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto main-section-padding">
        <div className="reveal">
          <h2
            className="font-Figtree font-extrabold tracking-[-0.02em] leading-[1.1] text-white max-w-[22ch] mx-auto mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 46px)" }}
          >
            Put a certified Databricks partner on your data.
          </h2>
          <p className="font-Figtree text-white/70 text-[16px] leading-[1.55] max-w-[48ch] mx-auto">
            Wherever you are — migration, pipelines, ML, or GenAI — our team can
            help. Start with a conversation.
          </p>
          <ButtonV2
            size="large"
            label="Let's connect"
            className={"w-fit mt-7 mx-auto"}
          />
        </div>
      </div>
    </div>
  );
};

export default DatabricksCTA;
