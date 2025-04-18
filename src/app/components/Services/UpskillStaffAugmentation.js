"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { scrollEffect } from "../lib/commonFunction";
import Heading from "../HTMLComponents/Heading";
import ButtonV2 from "../Common/ButtonV2";

const Svgs = dynamic(() => import("../Svgs"));

const serviceItems = [
  {
    title: "React.js Developers",
    image: "react-icon",
  },
  {
    title: "Java Developers",
    image: "java-icon",
  },
  {
    title: "Node.js Developers",
    image: "javascript-icon",
  },
  {
    title: "React Native Developers",
    image: "react-icon",
  },
  {
    title: "AWS Developers",
    image: "aws-icon",
  },
  {
    title: "UI/UX Developer",
    image: "ui-ux-icon",
  },
  {
    title: "Blockchain Developer",
    image: "blockchain-icon",
  },
  {
    title: "Python Developers",
    image: "python-icon",
  },
  {
    title: "AI/ML Developer",
    image: "ai-ml-icon",
  },
  {
    title: "Project Manager",
    image: "project-manager-icon",
  },
  {
    title: "DevOps Engineers",
    image: "devops-engineer-icon",
  },
  {
    title: "QA & Test Automation Engineers",
    image: "qa-test-engineer-icon",
  },
];

const UpskillStaffAugmentation = () => {
  useEffect(() => {
    scrollEffect();
    window.addEventListener("scroll", scrollEffect);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);
  return (
    <div className="container max-w-[1280px] main-section-padding mx-auto">
      <Heading
        type="h2"
        className="text-colorBlack lg:!text-[34px] md:!text-3xl !text-2xl"
        text="Upskill Your Workforce with IT Staff Augmentation Service"
      />
      <p className="md:text-lg text-base md:!mt-2.5 !mt-2">
        With our tailored staff augmentation solutions, you can quickly fill
        skill gaps and tackle critical projects. Our pre-vetted engineers
        seamlessly integrate with your existing team.
      </p>

      <div className="grid lg:grid-cols-3 grid-cols-2 lg:gap-10 md:gap-7.5 gap-5 sxl:py-10 md:py-7.5 py-5 reveal">
        {serviceItems.map((item) => (
          <div
            className="bg-white flex flex-col justify-between items-start border rounded-2xl border-borderGray md:p-7.5 p-5 hover:-translate-y-2 shadow-none hover:shadow-lg duration-500"
            key={item.title}
          >
            <div>
              <div className="w-fit brilliant-icon rounded-md mb-5">
                <div className="flex items-center justify-start sxl:p-[11px] md:p-1 p-0 bg-white rounded-md">
                  <div className="sxl:scale-[84%] md:scale-[70%] scale-50">
                    <Svgs name={item.image} />
                  </div>
                </div>
              </div>
              <Heading
                type="h3"
                className="text-colorBlack md:!text-xl !text-lg font-medium"
                text={item.title}
              />
            </div>
          </div>
        ))}
      </div>
      <ButtonV2
        label="Schedule a Developer Interview"
        className="w-fit mx-auto hover:text-themeColor"
      />
    </div>
  );
};

export default UpskillStaffAugmentation;
