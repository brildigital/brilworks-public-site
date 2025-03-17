"use client";
import { useEffect, useState } from "react";
import { scrollEffect } from "../lib/commonFunction";

const PortfolioBanner = () => {
  const words = ["Empower. ", "Create. ", "Progress"];
  const colorSequences = [
    ["text-colorWhite", "text-colorBlack", "text-colorBlack"],
    ["text-colorBlack", "text-colorWhite", "text-colorBlack"],
    ["text-colorBlack", "text-colorBlack", "text-colorWhite"],
  ];

  const [colorClasses, setColorClasses] = useState(colorSequences[0]);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prevStep) => {
        const nextStep = (prevStep + 1) % colorSequences.length;
        setColorClasses(colorSequences[nextStep]);
        return nextStep;
      });
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    scrollEffect();
    window.addEventListener("scroll", scrollEffect);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);
  return (
    <div className="service_width relative flex items-center justify-center">
      <div className="!bg-gradient-custom md:h-[46vh] h-[40vh] rounded-[30px] w-full flex items-center justify-center">
        <div className="text-center">
          <p className="font-bold text-colorWhite xl:text-3xl md:text-[26px] text-2xl">
            Case Studies
          </p>
          <h1
            className={`font-bold xl:text-[4.5rem] lg:text-[66px] md:text-[50px] sm:text-[55px] text-[30px]`}
          >
            {words.map((word, index) => (
              <span
                key={index}
                className={`${colorClasses[index]} transition-all duration-700`}
              >
                {word}
              </span>
            ))}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PortfolioBanner;
