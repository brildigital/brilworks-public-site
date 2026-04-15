import React from "react";

const IndustryTrustBar = ({ items }) => {
  if (!items?.length) return null;

  return (
    <section
      className="bg-[#fafafa] border-b border-[#e5e7eb] py-8"
      aria-label="Trust indicators"
    >
      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 md:gap-x-10">
          {items.map((item, i) => {
            const Icon = item.icon;
            const isRenderable =
              typeof Icon === "function" ||
              (typeof Icon === "object" && Icon !== null && "$$typeof" in Icon);
            return (
              <div
                key={i}
                className="flex items-center gap-2 text-[12px] md:text-sm font-semibold text-[#212121] whitespace-nowrap"
              >
                <span className="text-[#017eeb] flex items-center" aria-hidden="true">
                  {isRenderable ? (
                    <Icon size={18} strokeWidth={2} />
                  ) : React.isValidElement(Icon) ? (
                    Icon
                  ) : null}
                </span>
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustryTrustBar;
