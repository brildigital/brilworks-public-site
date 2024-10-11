import React from "react";
import Heading from "../HTMLComponents/Heading";
import Image from "next/image";

const ProjectChallengesSection = ({ projectChallenges }) => {
  return (
    <div className="bg-sectionBG">
      <div className="lg:px-[70px] md:px-8 px-4 lg:py-[60px] md:py-16 py-8">
        <div className="container max-w-[1440px] mx-auto our-work-list-icon">
          <div className="flex md:flex-row flex-col">
            <div className="lg:w-3/4 w-full">
              <Heading
                type="h2"
                className="mb-6"
                text={projectChallenges?.[0]?.Title}
              />
              {projectChallenges?.[0]?.Description1 && (
                <p
                  className={`text-colorGray md:text-xl text-lg ${
                    projectChallenges?.[0]?.Description2
                      ? "!mb-6"
                      : "md:!mb-8 !mb-6"
                  }`}
                >
                  {projectChallenges?.[0]?.Description1}
                </p>
              )}
              {projectChallenges?.[0]?.Description2 && (
                <p className="text-colorGray md:text-xl text-lg md:!mb-12 !mb-6">
                  {projectChallenges?.[0]?.Description2}
                </p>
              )}
            </div>
            <div className="lg:w-[15%] md:w-2/5 w-4/5 mx-auto md:my-auto">
              <Image
                className="lg:w-auto w-full md:!mb-0 mb-6"
                src={projectChallenges?.[0]?.Image?.filename}
                alt={projectChallenges?.[0]?.Image?.alt || "project-challenges"}
                width="280"
                height="248"
              />
            </div>
          </div>
          <ul>
            {projectChallenges?.[0]?.ListItem?.length &&
              projectChallenges?.[0]?.ListItem?.map(
                ({ Display_text }, index) =>
                  Display_text && (
                    <li
                      className="text-colorGray md:text-xl text-lg"
                      key={index}
                    >
                      {Display_text}
                    </li>
                  )
              )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectChallengesSection;
