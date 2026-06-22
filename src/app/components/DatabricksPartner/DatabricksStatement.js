import React from "react";

const DatabricksStatement = () => {
  return (
    <div className="bg-white" id="statement">
      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto main-section-padding">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <div className="reveal">
            <span
              className="block font-Figtree font-semibold text-[#525a6b] tracking-[-0.01em] mb-1"
              style={{ fontSize: "clamp(18px, 2.5vw, 26px)" }}
            >
              One lakehouse for
            </span>
            <h2
              className="font-Figtree font-extrabold tracking-[-0.02em] leading-[1.04] text-[#0B1020]"
              style={{ fontSize: "clamp(30px, 4vw, 50px)" }}
            >
              <span className="relative inline">
                Data &amp; AI.
                <span className="absolute left-[-2px] right-[-2px] bottom-[0.05em] h-[0.30em] bg-[#ffe0dc] -z-[1] rounded-[1px]"></span>
              </span>
            </h2>
          </div>

          <div className="reveal">
            <p className="font-Figtree text-[17px] text-[#525a6b] leading-[1.65] mb-4">
              Brilworks pairs certified Databricks engineers with a data
              engineering practice built on real production work. We bring your
              data, analytics, and ML onto a single lakehouse, so the same
              governed data feeds your pipelines, your dashboards, and your
              models.
            </p>
            <p className="font-Figtree text-[17px] text-[#525a6b] leading-[1.65] m-0">
              From there we build the Spark pipelines, Unity Catalog governance,
              and Delta architecture that move data from raw to production
              cleanly, then put ML and GenAI on top of a foundation solid enough
              to hold it. No silos between your warehouse and your data science,
              no copies drifting out of sync.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatabricksStatement;
