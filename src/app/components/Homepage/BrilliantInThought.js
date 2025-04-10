import React from "react";
import ButtonV2 from "../Common/ButtonV2";
import Heading from "../HTMLComponents/Heading";

const BrilliantInThought = () => {
  const brilliantData = [
    {
      value: "60%",
      description: "Professional Employee",
      color: "#F2F9FE",
    },
    {
      value: "98%",
      description: "Project Success Rate",
      color: "#FEF2FD",
    },
    {
      value: "120+",
      description: "Projects Completed",
      color: "#F5FEF2",
    },
    {
      value: "8+",
      description: "Years of Experience",
      color: "#FEF2F2",
    },
  ];

  return (
    <div className="container max-w-[1280px] main-section-padding mx-auto">
      <div className="flex lg:gap-10 gap-5 lg:flex-row flex-col items-center reveal">
        <div className="lg:w-1/2 w-full flex flex-col justify-center">
          <Heading
            type="h2"
            className="lg:!text-[34px] md:!text-3xl !text-2xl mb-4"
            text="Brilliant in Thoughts, Action & Results"
          />
          <p className="md:text-lg text-base">
            Welcome to Brilworks – a tech-first company with a passion to create
            great products for businesses around the world. We’re agile and
            transparent in our processes, take care of our customers like
            they’re part of the team, and we believe in giving back to the
            community around us.
          </p>
          <ButtonV2
            redirect="/about-us/"
            label="About Us"
            variant="secondary"
            className="w-fit mt-7.5"
          />
        </div>

        <div className="lg:w-1/2 w-full h-full">
          <div className="grid grid-cols-2 md:gap-10 gap-5">
            {brilliantData.map((data, index) => (
              <div
                key={index}
                className="flex flex-col items-start justify-center p-6 rounded-2xl"
                style={{ background: data.color }}
              >
                <p className="pb-2 lg:!text-[34px] md:!text-3xl !text-2xl">
                  {data.value}
                </p>

                <span className="md:text-lg text-base">{data.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrilliantInThought;
