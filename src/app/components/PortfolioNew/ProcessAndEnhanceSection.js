import React from "react";

const ProcessAndEnhanceSection = ({ processAndEnhanceBlock }) => {
  return (
    <div className="bg-sectionBG">
      <div className="px-[70px] py-[60px]">
        <div className="container max-w-[1440px] mx-auto">
          <div className="w-full grid grid-cols-3 items-center">
            {processAndEnhanceBlock?.length &&
              processAndEnhanceBlock?.map(
                ({ Key, Value }, index) =>
                  Key &&
                  Value && (
                    <div
                      className="w-[45%] mx-auto flex justify-center flex-col"
                      key={index}
                    >
                      <span className="text-themeColor text-[70px] leading-tight font-bold mb-3 text-center">
                        {Key}
                      </span>
                      <p className="!mb-4 text-xl text-center">{Value}</p>
                    </div>
                  )
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessAndEnhanceSection;
