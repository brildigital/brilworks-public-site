import React from "react";

const ProcessAndEnhanceSection = ({ processAndEnhanceBlock }) => {
  function getGridColClass(num) {
    switch (num) {
      case 2:
        return { grid: "grid-cols-2", width: "w-[40%]" };
      case 3:
        return { grid: "grid-cols-3", width: "w-[45%]" };
      case 4:
        return { grid: "grid-cols-4", width: "w-[60%]" };
      case 5:
        return { grid: "grid-cols-5", width: "w-[70%]" };
      case 6:
        return { grid: "grid-cols-6", width: "w-[80%]" };
      default:
        return { grid: "grid-cols-2", width: "w-[40%]" };
    }
  }

  const dynamicCSS = getGridColClass(processAndEnhanceBlock?.length);

  return (
    <div className="bg-sectionBG">
      <div className="px-[70px] py-[60px]">
        <div className="container max-w-[1440px] mx-auto">
          <div className={`w-full items-center grid ${dynamicCSS.grid} `}>
            {processAndEnhanceBlock?.length &&
              processAndEnhanceBlock?.map(
                ({ Key, Value }, index) =>
                  Key &&
                  Value && (
                    <div
                      className={`${dynamicCSS.width} mx-auto flex justify-center flex-col`}
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
