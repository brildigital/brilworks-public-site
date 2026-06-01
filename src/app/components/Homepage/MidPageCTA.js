import React from "react";
import { Bot } from "lucide-react";
import ButtonV2 from "../Common/ButtonV2";

const MidPageCTA = () => {
  return (
    <div className="bg-[#0d0f1a] py-16">
      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto text-center reveal">
        <h3 className="font-Figtree text-white text-2xl md:text-3xl lg:text-[40px] font-extrabold tracking-[-1px] !leading-tight mb-3">
          Seen enough? Let&apos;s build something.
        </h3>
        <p className="font-Figtree text-white/[0.55] text-base max-w-xl mx-auto">
          Custom software, AI agents, or both &mdash; tell us what you need.
          We&apos;ll respond within 24 hours with a practical plan.
        </p>
        <div className="flex justify-center gap-4 flex-wrap mt-8">
          <ButtonV2
            size="large"
            label="Start a conversation"
          />
          <ButtonV2
            size="large"
            label="Explore AI Agents"
            variant="secondary"
            redirect="/ai-agents/"
            icon={<Bot size={16} strokeWidth={2} className="mr-1" />}
          />
        </div>
      </div>
    </div>
  );
};

export default MidPageCTA;
