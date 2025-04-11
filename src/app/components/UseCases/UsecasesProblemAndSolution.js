import React from "react";
import SolutionFAQ from "../Solution/SolutionFAQ";

const UsecasesProblemAndSolution = () => {
  const AWSUseCase = [
    {
      problem:
        "Lorem ipsum dolor sit amet consectetur. Lorem lobortis elementum arcu feugiat risus. Quam vitae risus mauris amet. Amet faucibus vivamus aliquet facilisis duis. Lacus duis sollicitudin nibh venenatis ante tortor blandit phasellus laoreet.",
      solution:
        "Lorem ipsum dolor sit amet consectetur. Lorem lobortis elementum arcu feugiat risus. Quam vitae risus mauris amet. Amet faucibus vivamus aliquet facilisis duis. Lacus duis sollicitudin nibh venenatis ante tortor blandit phasellus laoreet.",
    },
    {
      problem:
        "Lorem ipsum dolor sit amet consectetur. Lorem lobortis elementum arcu feugiat risus. Quam vitae risus mauris amet. Amet faucibus vivamus aliquet facilisis duis. Lacus duis sollicitudin nibh venenatis ante tortor blandit phasellus laoreet.",
      solution:
        "Lorem ipsum dolor sit amet consectetur. Lorem lobortis elementum arcu feugiat risus. Quam vitae risus mauris amet. Amet faucibus vivamus aliquet facilisis duis. Lacus duis sollicitudin nibh venenatis ante tortor blandit phasellus laoreet.",
    },
    {
      problem:
        "Lorem ipsum dolor sit amet consectetur. Lorem lobortis elementum arcu feugiat risus. Quam vitae risus mauris amet. Amet faucibus vivamus aliquet facilisis duis. Lacus duis sollicitudin nibh venenatis ante tortor blandit phasellus laoreet.",
      solution:
        "Lorem ipsum dolor sit amet consectetur. Lorem lobortis elementum arcu feugiat risus. Quam vitae risus mauris amet. Amet faucibus vivamus aliquet facilisis duis. Lacus duis sollicitudin nibh venenatis ante tortor blandit phasellus laoreet.",
    },
    {
      problem:
        "Lorem ipsum dolor sit amet consectetur. Lorem lobortis elementum arcu feugiat risus. Quam vitae risus mauris amet. Amet faucibus vivamus aliquet facilisis duis. Lacus duis sollicitudin nibh venenatis ante tortor blandit phasellus laoreet.",
      solution:
        "Lorem ipsum dolor sit amet consectetur. Lorem lobortis elementum arcu feugiat risus. Quam vitae risus mauris amet. Amet faucibus vivamus aliquet facilisis duis. Lacus duis sollicitudin nibh venenatis ante tortor blandit phasellus laoreet.",
    },
    {
      problem:
        "Lorem ipsum dolor sit amet consectetur. Lorem lobortis elementum arcu feugiat risus. Quam vitae risus mauris amet. Amet faucibus vivamus aliquet facilisis duis. Lacus duis sollicitudin nibh venenatis ante tortor blandit phasellus laoreet.",
      solution:
        "Lorem ipsum dolor sit amet consectetur. Lorem lobortis elementum arcu feugiat risus. Quam vitae risus mauris amet. Amet faucibus vivamus aliquet facilisis duis. Lacus duis sollicitudin nibh venenatis ante tortor blandit phasellus laoreet.",
    },
  ];

  return (
    <>
      <h2 className="text-center mb-8">Use Cases of AWS</h2>
      <div className="w-full">
        {AWSUseCase.map(({ problem, solution }, index) => (
          <div
            className={`${
              index % 2 === 0
                ? "bg-colorLightGray flex-row"
                : "bg-themeColor flex-row-reverse md:translate-x-[calc(100%_-_94%)]"
            } lg:py-20 py-10 lg:px-24 px-8 md:w-[95%] flex`}
            key={index}
          >
            <div className="lg:block hidden flex-[0.25]">
              <p
                className={`xl:!text-[590px] !text-[100px] big-number opacity-[8%] font-[900] xl:!leading-[296px] scale-y-[0.9] scale-x-[1.2] translate-y-[35%] ${
                  index % 2 === 0 ? "text-left lg:!mr-24" : "text-right"
                }`}
              >
                {index + 1}
              </p>
            </div>
            <div className="lg:flex-[0.75] relative">
              <div className="block lg:hidden absolute scale-[2] -top-8 right-0">
                <p
                  className={`!text-[50px] big-number opacity-[15%] font-[900] ${
                    index % 2 === 0 ? "text-left lg:!mr-24" : "text-right"
                  }`}
                >
                  {index + 1}
                </p>
              </div>
              <h3 className="lg::mb-4 mb-2">Problem</h3>
              <p className="lg:!text-[32px] !text-xl  lg:!leading-[52px] !font-medium lg:!mb-8 !mb-4 text-colorGray">
                {problem}
              </p>
              <h3 className="lg:mb-4 mb-2">Solution</h3>
              <p className="lg:!text-[32px] !text-xl  lg:!leading-[52px] font-medium text-colorGray">
                {solution}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default UsecasesProblemAndSolution;
