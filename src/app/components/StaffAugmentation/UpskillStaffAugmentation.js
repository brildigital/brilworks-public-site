"use client";
import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

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

const ServiceItem = ({ image, title }) => (
  <div className="flex flex-col gap-3 p-4 rounded-lg border cursor-pointer service_item_card hover:text-white">
    <Svgs name={image} />
    <p className="text-2xl font-bold">{title}</p>
  </div>
);

const UpskillStaffAugmentation = () => {
  return (
    <div className="md:py-24 end-to-end">
      <div className="endTO_text solutions">
        <h2 className="!w-full md:!w-2/3 p-0 mx-auto">
          Upskill Your Workforce with IT Staff Augmentation Service
        </h2>
      </div>
      <div className="reveal">
        <div className="endTO_text_content home_sec2_txt4 mb-20">
          <p className="!text-[1.2rem] !text-[#504F4F] md:!text-center !text-left">
            With our tailored staff augmentation solutions, you can quickly fill
            skill gaps and tackle critical projects.
            <br />
            Our pre-vetted engineers seamlessly integrate with your existing
            team.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-10 gap-4">
          {serviceItems.map((item) => (
            <ServiceItem
              key={item.title}
              title={item.title}
              image={item.image}
            />
          ))}
        </div>
        <div className="mt-20 flex w-full justify-center">
          <Link
            href="/contact-us/"
            className="linear-gradient-background w-fit p-[2px]"
          >
            <button className="bg-white px-[14px] py-[10px] !text-base uppercase hover:shadow-lg">
              Schedule a Developer Interview
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpskillStaffAugmentation;
