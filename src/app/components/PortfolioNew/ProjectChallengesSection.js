import React from "react";
import Heading from "../HTMLComponents/Heading";
import Image from "next/image";

const ProjectChallengesSection = ({ projectChallenges }) => {
  return (
    <div className="bg-sectionBG">
      <div className="px-[70px] py-[60px]">
        <div className="container max-w-[1440px] mx-auto our-work-list-icon">
          <div className="flex flex-row">
            <div className="w-3/4">
              <Heading
                type="h2"
                className="mb-6"
                text={projectChallenges?.[0]?.Title}
              />
              {projectChallenges?.[0]?.Description1 && (
                <p className="text-colorGray text-2xl !mb-16">
                  {projectChallenges?.[0]?.Description1}
                </p>
              )}
              {projectChallenges?.[0]?.Description2 && (
                <p className="text-colorGray text-2xl">
                  {projectChallenges?.[0]?.Description2}
                </p>
              )}
            </div>
            <div>
              <Image
                className="w-auto"
                src={projectChallenges?.[0]?.Image?.filename}
                alt={projectChallenges?.[0]?.Image?.alt || "project-challenges"}
                width="300"
                height="268"
              />
            </div>
          </div>
          <ul>
            {projectChallenges?.[0]?.ListItem?.length &&
              projectChallenges?.[0]?.ListItem?.map(
                ({ Display_text }, index) =>
                  Display_text && (
                    <li className="text-colorGray text-2xl" key={index}>
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
