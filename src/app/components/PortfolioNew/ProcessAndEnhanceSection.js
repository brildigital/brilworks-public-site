import React from "react";

const ProcessAndEnhanceSection = ({ processAndEnhanceBlock }) => {
  function getGridColClass(num) {
    switch (num) {
      case 2:
        return {
          grid: "md:grid-cols-2 grid-cols-1",
          width: "lg:w-[40%] w-[80%]",
        };
      case 3:
        return {
          grid: "lg:grid-cols-3 md:grid-cols-2 grid-cols-1",
          width: "lg:w-[50%] w-[60%]",
        };
      case 4:
        return {
          grid: "lg:grid-cols-4 md:grid-cols-2 grid-cols-1",
          width: "lg:w-[60%] w-[60%]",
        };
      case 5:
        return { grid: "lg:grid-cols-5", width: "lg:w-[65%] w-[60%]" };
      case 6:
        return { grid: "lg:grid-cols-6", width: "lg:w-[70%] w-[80%]" };
      default:
        return { grid: "lg:grid-cols-2", width: "lg:w-[40%] w-[80%]" };
    }
  }

  const dynamicCSS = getGridColClass(processAndEnhanceBlock?.length);

  return (
    <div className="bg-sectionBG">
      <div className="lg:px-[70px] px-4 lg:py-[30px] py-8">
        <div className="container max-w-[1440px] mx-auto">
          <div
            className={`w-full items-center grid ${dynamicCSS.grid} md:gap-6 lg:gap-0`}
          >
            {processAndEnhanceBlock?.length &&
              processAndEnhanceBlock?.map(
                ({ Key, Value }, index) =>
                  Key &&
                  Value && (
                    <div
                      className={`w-full md:pl-4 lg:pl-6 mx-auto flex justify-start items-start h-full flex-col ${
                        index === processAndEnhanceBlock?.length - 1
                          ? "!border-r-0 md:!border-b-2 lg:!border-b-0"
                          : "lg:!border-r-1 lg:!border-b-0"
                      } border-themeColor`}
                      key={index}
                    >
                      <span className="text-themeColor lg:text-5xl text-[40px] leading-tight font-bold lg:mb-4 mt-4">
                        {Key}
                      </span>
                      <p
                        className={`!mb-4 md:text-xl text-lg text-left text-colorGray ${dynamicCSS.width}`}
                      >
                        {Value}
                      </p>
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
