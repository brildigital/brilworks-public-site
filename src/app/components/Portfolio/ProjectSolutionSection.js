import React from "react";
import Heading from "../HTMLComponents/Heading";
import Image from "next/image";

const ProjectSolutionSection = ({ projectSolutions }) => {
  return (
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
            text={projectSolutions.Title}
          />
          {projectSolutions.Description1 && (
            <p
              className={`md:text-lg text-base ${
                projectSolutions.Description2 ? "!mb-6" : "md:!mb-8 !mb-6"
              }`}
            >
              {projectSolutions.Description1}
            </p>
          )}
          {projectSolutions.Description2 && (
            <p className="md:text-lg text-base md:!mb-12 !mb-6">
              {projectSolutions.Description2}
            </p>
          )}
          {projectSolutions.ListItem?.length ? (
            <ul>
              {projectSolutions.ListItem?.map(
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
  );
};

export default ProjectSolutionSection;
