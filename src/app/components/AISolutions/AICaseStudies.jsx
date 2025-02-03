import Image from "next/image";
import Link from "next/link";
import React from "react";
import Heading from "../HTMLComponents/Heading";

const AICaseStudies = () => {
  const caseStudies = [
    {
      title: "How TechTeckGeek Achieved 80% Faster Reporting",
      description:
        "TechTeckGeek revamped their data workflow, reducing the need for developer intervention and gaining quicker, more accurate insights with our SQL Chatbot.",
      linkText: "Learn More",
    },
    {
      title: "TechNovis Cut Data Analysis Time by 50%",
      description:
        "Thanks to the SQL Chatbot, TechNovis streamlined their data retrieval and reporting, freeing up their team to focus on strategic tasks.",
      linkText: "Learn More",
    },
    {
      title: "GreenTech reduced SQL expert dependency by 75%",
      description:
        "GreenTech Innovators reduced SQL expert dependency significantly, empowering their teams to make faster, data-driven decisions across the board.",
      linkText: "Learn More",
    },
  ];
  return (
    <section className="bg-sectionBG md:py-10 lg:py-[60px] py-6">
      <div className="flex flex-col gap-6 md:gap-8 container max-w-[1440px] mx-auto px-6 md:px-14 xl:px-28">
        <Heading
          className="text-center"
          type="h2"
          data={`<span class="h1-border-b">Case Studies</span>`}
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl shadow-md border border-borderGray flex flex-col justify-between bg-colorWhite"
            >
              <div>
                <h3 className="text-xl font-semibold mb-4">{study.title}</h3>
                <p className="!mb-4">{study.description}</p>
              </div>
              <Link
                href="#"
                className="text-themeColor font-medium flex items-center hover:underline"
              >
                {study.linkText}
                <Image
                  className="w-4 ml-2"
                  src="/images/arrow-blue.svg"
                  width={13}
                  height={16}
                  alt="right-arrow"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AICaseStudies;
