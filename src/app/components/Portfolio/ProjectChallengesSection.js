import React from "react";

const ProjectChallengesSection = ({ projectChallenges }) => {
  return (
    <section
      className="main-section-padding bg-[#fafafa]"
      id="challenges"
    >
      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto">
        <div className="mb-14">
          <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-themeColor inline-block mb-3">
            Challenges
          </span>
          <h2 className="lg:text-[44px] md:text-[36px] text-[30px] font-extrabold leading-[1.1] tracking-[-1px] text-[#0d0f1a]">
What We Had to Solve
          </h2>
        </div>

        {projectChallenges?.ListItem?.length > 0 && (
          <ul className="max-w-[800px] list-none">
            {projectChallenges.ListItem.map(({ Title, Display_text }, index) =>
              Display_text ? (
                <li
                  key={index}
                  className="flex gap-4 items-start py-5 border-b border-gray-200 last:border-b-0"
                >
                  <div className="w-9 h-9 rounded-full bg-[#fef2f2] text-[#dc2626] flex-shrink-0 flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <div>
                    {Title && (
                      <h3 className="text-[17px] font-bold text-[#212121] tracking-[-0.5px] !mb-1">
                        {Title}
                      </h3>
                    )}
                    <p className="text-[15px] text-[#6b7280] leading-[1.6] m-0">
                      {Display_text}
                    </p>
                  </div>
                </li>
              ) : null
            )}
          </ul>
        )}
      </div>
    </section>
  );
};

export default ProjectChallengesSection;
