"use client";
import { useEffect, useState } from "react";
import { scrollEffect } from "../lib/commonFunction";
import Heading from "../HTMLComponents/Heading";

const PortfolioBanner = () => {
  const words = ["Empower. ", "Create. ", "Progress"];
  const colorSequences = [
    ["gradient-text2", "text-colorWhite", "text-colorWhite"],
    ["text-colorWhite", "gradient-text2", "text-colorWhite"],
    ["text-colorWhite", "text-colorWhite", "gradient-text2"],
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
    <div className="case-study-section">
      <div className="banner-layer">
        <div className="container max-w-[1280px] main-section-padding mx-auto min-h-[650px] !h-[60vh] flex items-center justify-center">
          <div className="w-full flex items-center justify-center pt-[7%]">
            <div>
              <p className="text-colorWhite uppercase md:text-2xl text-xl">
                Case Studies
              </p>
              <Heading
                type="h1"
                className="text-white lg:mt-7.5 my-5 lg:mb-5"
                text={words.map((word, index) => (
                  <span
                    key={index}
                    className={`${colorClasses[index]} transition-all duration-700`}
                  >
                    {word}
                  </span>
                ))}
              />
              <h2 className="sxl:text-2xl md:text-xl text-lg text-white my-5">
                Discover how our innovative solutions empower businesses across
                various industries, helping them achieve excellence, enhance
                efficiency, and drive success.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioBanner;
