import React from "react";
import ButtonV2 from "../Common/ButtonV2";

const MidPageCTA = () => {
  return (
    <div className="bg-[#0d0f1a] py-16">
      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto text-center reveal">
        <h3 className="font-[family-name:var(--font-heading)] text-white text-2xl md:text-3xl lg:text-[40px] font-extrabold tracking-[-1px] !leading-tight mb-3">
          Seen enough? Let&apos;s build something.
        </h3>
        <p className="font-[family-name:var(--font-body)] text-white/[0.55] text-base mb-8 max-w-xl mx-auto">
          Tell us what you&apos;re working on &mdash; we&apos;ll respond within
          24 hours with a practical plan, not a sales pitch.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <ButtonV2
            size="large"
            label="Start a conversation"
          />
          <ButtonV2
            size="large"
            label="MVP in 48 hrs"
            variant="secondary"
            redirect="/mvp-in-48-hours/"
            icon={<span>⚡</span>}
          />
        </div>
      </div>
    </div>
  );
};

export default MidPageCTA;
