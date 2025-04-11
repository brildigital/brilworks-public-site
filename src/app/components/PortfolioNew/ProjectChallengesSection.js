import React from "react";
import Heading from "../HTMLComponents/Heading";
import Image from "next/image";

const ProjectChallengesSection = ({ projectChallenges }) => {
  return (
    <>
      <div className="bg-sectionBG">
        <div className="container max-w-[1280px] main-section-padding mx-auto li-tick-mark reveal">
          <div className="flex md:flex-row flex-col lg:gap-16 md:gap-10 gap-6">
            <div className="md:w-1/2 w-full">
              <Heading
                type="h2"
                className="lg:!text-[34px] md:!text-3xl !text-2xl mb-4"
                text={projectChallenges?.[0]?.Title}
              />
              {projectChallenges?.[0]?.Description1 && (
                <p
                  className={`md:text-lg text-base ${
                    projectChallenges?.[0]?.Description2
                      ? "!mb-5"
                      : "md:!mb-8 !mb-5"
                  }`}
                >
                  {projectChallenges?.[0]?.Description1}
                </p>
              )}
              {projectChallenges?.[0]?.Description2 && (
                <p className="md:text-lg text-base md:!mb-8 !mb-5">
                  {projectChallenges?.[0]?.Description2}
                </p>
              )}
              {projectChallenges?.[0]?.ListItem?.length ? (
                <ul>
                  {projectChallenges?.[0]?.ListItem?.map(
                    ({ Display_text }, index) =>
                      Display_text && (
                        <li
                          className="md:text-base text-sm mb-3 last:mb-0"
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
            <div className="md:w-1/2 w-full">
              <Image
                className="rounded-2xl"
                src="/images/v2/challenges-img.webp"
                alt="img-c"
                width="565"
                height="620"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Portfolio Solution Section */}
      {projectChallenges?.[1]?.Title && (
        <div className="container max-w-[1280px] main-section-padding mx-auto li-tick-mark reveal">
          <div className="flex md:flex-row flex-col-reverse lg:gap-16 md:gap-10 gap-6">
            <div className="md:w-1/2 w-full">
              <Image
                className="rounded-2xl"
                src="/images/v2/solution-img.webp"
                alt="img-c"
                width="565"
                height="620"
              />
            </div>
            <div className="md:w-1/2 w-full">
              <Heading
                type="h2"
                className="lg:!text-[34px] md:!text-3xl !text-2xl mb-4"
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
              {projectChallenges?.[1]?.ListItem?.length ? (
                <ul>
                  {projectChallenges?.[1]?.ListItem?.map(
                    ({ Display_text }, index) =>
                      Display_text && (
                        <li
                          className="md:text-base text-sm mb-3 last:mb-0 green"
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
        </div>
      )}
    </>
  );
};

export default ProjectChallengesSection;
