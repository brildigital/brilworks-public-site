import React from "react";
import "../../styles/Services.scss";

const TechStack = () => {
  const languages = [
    "Python",
    "Java",
    "Python",
    "SQL",
    "C++",
    "LISP",
    "PROLOG",
    "RUST",
    "SWIFT",
    "C#",
    "BASH",
  ];
  const framework = [
    "Python",
    "Java",
    "Python",
    "SQL",
    "C++",
    "LISP",
    "PROLOG",
    "RUST",
    "SWIFT",
  ];
  const dataEngineering = [
    "Python",
    "Java",
    "Python",
    "SQL",
    "C++",
    "LISP",
    "PROLOG",
  ];
  const neuralNetwork = ["Python", "Java", "Python", "SQL", "C++"];

  return (
    <div className="container w-[90%] mx-auto md:py-12 py-10">
      <div className="!rounded-2xl">
        <h2 className="md:text-center text-left ml-4 !mb-8">Tech Stack We Use</h2>
        <div className="reveal">
          <div className="!mb-5">
            <p className="text-2xl !mb-5">Languages</p>
            <div className="flex flex-wrap md:gap-5 gap-3">
              {languages.map((language, index) => (
                <div
                  className="tech-stack-circle flex items-center flex-row justify-center"
                  key={index}
                >
                  <span className="text-center">{language}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="!mb-5">
            <p className="text-2xl !mb-5">Frameworks</p>
            <div className="flex flex-wrap md:gap-5 gap-3">
              {framework.map((language, index) => (
                <div
                  className="tech-stack-circle flex items-center flex-row justify-center"
                  key={index}
                >
                  <span className="text-center">{language}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="!mb-5">
            <p className="text-2xl !mb-5">Data Engineering</p>
            <div className="flex flex-wrap md:gap-5 gap-3">
              {dataEngineering.map((language, index) => (
                <div
                  className="tech-stack-circle flex items-center flex-row justify-center"
                  key={index}
                >
                  <span className="text-center">{language}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="!mb-5">
            <p className="text-2xl !mb-5">Neural Networks</p>
            <div className="flex flex-wrap md:gap-5 gap-3">
              {neuralNetwork.map((language, index) => (
                <div
                  className="tech-stack-circle flex items-center flex-row justify-center"
                  key={index}
                >
                  <span className="text-center">{language}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
