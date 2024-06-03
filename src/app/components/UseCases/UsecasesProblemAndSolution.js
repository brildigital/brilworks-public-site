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
                : "bg-themePrimary flex-row-reverse translate-x-[calc(100%_-_94%)]"
            } py-20 px-24 w-[95%] flex`}
            key={index}
          >
            <div className="flex-[0.25]">
              <p
                className={`!text-[590px] big-number opacity-[8%] font-[900] leading-[296px] scale-y-[0.9] scale-x-[1.2] translate-y-[35%] ${
                  index % 2 === 0 ? "text-left" : "text-right"
                }`}
              >
                {index + 1}
              </p>
            </div>
            <div className="flex-[0.75]">
              <h3 className="mb-4">Problem</h3>
              <p className="!text-[32px] leading-[52px] !font-medium !mb-8 text-colorGray">
                {problem}
              </p>
              <h3 className="mb-4">Solution</h3>
              <p className="!text-[32px] leading-[52px] font-medium text-colorGray">
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
