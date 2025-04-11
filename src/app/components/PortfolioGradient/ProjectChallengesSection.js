import React from "react";
import Heading from "../HTMLComponents/Heading";

const ProjectChallengesSection = () => {
  const projectChallenges = [
    {
      Title: "Challenges",
      Description1:
        "Our client approached us to develop a referral platform for the recruitment industry that would assist HR professionals and organizations in transforming the hiring process. The client wanted a solution with features including a referral rewards program, automation capabilities, and integration with existing HR solutions.",
      Description2: "",
      ListItem: [
        {
          Display_text:
            "Developing automation features and integration with HR solutions",
        },
        {
          Display_text:
            "Building a Centralize referral management into one intuitive platform",
        },
        {
          Display_text: "Applicant tracking system and reward system",
        },
      ],
    },
    {
      Title: "Solution",
      Description1:
        "Our team chose ReactJS for the dynamic user interface and component-based architecture and Nodejs for server-side rendering and real-time communication. The combination of these technologies helped us build a powerful and flexible platform for modern web development.",
      Description2: "",
      ListItem: [
        {
          Display_text:
            "ReactJS for building a dynamic and interactive user interface.",
        },
        {
          Display_text:
            "Node.js for handling server-side logic, database interactions, and API endpoints.",
        },
        {
          Display_text:
            "Facilitate communication and track candidate interactions using various channels and a CRM system.",
        },
        {
          Display_text:
            "Provide comprehensive analytics and reporting capabilities to evaluate the referral program's effectiveness.",
        },
      ],
    },
  ];

  return (
    <>
      <div className="bg-sectionBG">
        <div className="container max-w-[1440px] md:px-[60px] px-[20px] lg:px-[100px] 3xl:px-[120px] lg:py-[60px] md:py-[40px] py-[30px] mx-auto li-tick-mark">
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
        <div className="container max-w-[1440px] md:px-[60px] px-[20px] lg:px-[100px] 3xl:px-[120px] lg:py-[60px] md:py-[40px] py-[30px] mx-auto li-tick-mark">
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
