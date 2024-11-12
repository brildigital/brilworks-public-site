import React from "react";
import Heading from "../HTMLComponents/Heading";

const ProjectChallengesSection = ({ projectChallenges }) => {
  return (
    <>
      <div className="bg-sectionBG">
        <div className="container max-w-[1440px] md:px-[60px] px-[20px] lg:px-[100px] 3xl:px-[120px] lg:py-[60px] md:py-[40px] py-[30px] mx-auto blue-tick-icon">
          <div className="flex md:flex-row flex-col">
            <div className="w-full">
              <Heading
                type="h2"
                className="mb-6 h2-bg-border-b w-fit"
                text={projectChallenges?.[0]?.Title}
              />
              {projectChallenges?.[0]?.Description1 && (
                <p
                  className={`md:text-lg text-base ${
                    projectChallenges?.[0]?.Description2
                      ? "!mb-6"
                      : "md:!mb-8 !mb-6"
                  }`}
                >
                  {projectChallenges?.[0]?.Description1}
                </p>
              )}
              {projectChallenges?.[0]?.Description2 && (
                <p className="md:text-lg text-base md:!mb-12 !mb-6">
                  {projectChallenges?.[0]?.Description2}
                </p>
              )}
            </div>
          </div>
          {projectChallenges?.[0]?.ListItem?.length ? (
            <ul>
              {projectChallenges?.[0]?.ListItem?.map(
                ({ Display_text }, index) =>
                  Display_text && (
                    <li
                      className="md:text-xl text-lg mb-3 last:mb-0"
                      key={index}
                    >
                      {Display_text}
                    </li>
                  )
              )}
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
      {projectChallenges?.[1]?.Title && (
        <div className="container max-w-[1440px] md:px-[60px] px-[20px] lg:px-[100px] 3xl:px-[120px] lg:py-[60px] md:py-[40px] py-[30px] mx-auto blue-tick-icon">
          <div className="flex md:flex-row flex-col">
            <div className="w-full">
              <Heading
                type="h2"
                className="mb-6 h1-border-b w-fit"
                text={projectChallenges?.[1]?.Title}
              />
              {projectChallenges?.[1]?.Description1 && (
                <p
                  className={`md:text-lg text-base ${
                    projectChallenges?.[1]?.Description2
                      ? "!mb-6"
                      : "md:!mb-8 !mb-6"
                  }`}
                >
                  {projectChallenges?.[1]?.Description1}
                </p>
              )}
              {projectChallenges?.[1]?.Description2 && (
                <p className="md:text-lg text-base md:!mb-12 !mb-6">
                  {projectChallenges?.[1]?.Description2}
                </p>
              )}
            </div>
          </div>
          {projectChallenges?.[1]?.ListItem?.length ? (
            <ul>
              {projectChallenges?.[1]?.ListItem?.map(
                ({ Display_text }, index) =>
                  Display_text && (
                    <li
                      className="md:text-xl text-lg mb-3  last:mb-0"
                      key={index}
                    >
                      {Display_text}
                    </li>
                  )
              )}
            </ul>
          ) : (
            ""
          )}
        </div>
      )}
    </>
  );
};

export default ProjectChallengesSection;
