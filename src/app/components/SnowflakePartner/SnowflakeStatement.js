import React from "react";

const SnowflakeStatement = () => {
  return (
    <div className="bg-white" id="statement">
      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto main-section-padding">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <div className="reveal">
            <span className="block font-Figtree font-semibold text-[#525a6b] tracking-[-0.01em] mb-1" style={{ fontSize: "clamp(18px, 2.5vw, 26px)" }}>
              From raw data to
            </span>
            <h2
              className="font-Figtree font-extrabold tracking-[-0.02em] leading-[1.04] text-[#0B1020]"
              style={{ fontSize: "clamp(30px, 4vw, 50px)" }}
            >
              <span className="relative inline">
                Production AI.
                <span className="absolute left-[-2px] right-[-2px] bottom-[0.05em] h-[0.30em] bg-[#dce7ff] -z-[1] rounded-[1px]"></span>
              </span>
            </h2>
          </div>

          <div className="reveal">
            <p className="font-Figtree text-[17px] text-[#525a6b] leading-[1.65] mb-4">
              Brilworks pairs certified Snowflake engineers with a data
              engineering practice built on real production work. We break down
              the silos that keep your data trapped in separate systems and turn
              it into something your teams can query, trust, and act on.
            </p>
            <p className="font-Figtree text-[17px] text-[#525a6b] leading-[1.65] m-0">
              From there we build the pipelines, governance, and modeling that
              move data from raw to production cleanly, then put AI on top of a
              foundation solid enough to hold it. One platform, one version of
              the truth, and data that does more than sit in a warehouse.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnowflakeStatement;
