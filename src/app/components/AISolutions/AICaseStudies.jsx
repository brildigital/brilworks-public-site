import Link from "next/link";
import React from "react";

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
    <section className="p-8 flex flex-col gap-6 md:gap-8 container max-w-[1440px] mx-auto px-6 md:px-14 xl:px-28">
      <h2 className="text-2xl sm:text-3xl md:text-5xl text-center font-semibold">
        Case Studies
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((study, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl shadow-md border border-gray-200 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
              <p className="text-gray-600 mb-4">{study.description}</p>
            </div>
            <Link
              href="#"
              className="text-blue-500 font-medium flex items-center hover:underline"
            >
              {study.linkText} <span className="ml-2">&rarr;</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AICaseStudies;
