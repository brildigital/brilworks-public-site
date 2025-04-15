import React from "react";
import Heading from "../HTMLComponents/Heading";
import Image from "next/image";
import ButtonV2 from "../Common/ButtonV2";
import { usePathname } from "next/navigation";

const HireDevelopersInThreeSteps = ({ title, bgClass = "bg-sectionBG" }) => {
  const pathname = usePathname();
  const threeStepsListData = [
    {
      name: "Tell Us Your Requirements",
      description:
        "Schedule a call with our expert to tell us exactly what skills you need, what experience you’re looking for, and what your objectives and expectations are.",
    },
    {
      name: "Screen & Shortlist the Right Fit",
      description:
        "Get introduced to the individuals you like, conduct interviews, and assess their confidence to get matched with a suitable talent.",
    },
    {
      name: "Onboard Talent",
      description: `We match you with a ${title.split(" ")?.[0]} ${
        pathname === "/hire-ui-ux-designer/" ? "Designer" : "Developer"
      } from our network within 48 to 72 hours.`,
    },
  ];

  return (
    <div className={bgClass}>
      <div className="container max-w-[1280px] main-section-padding mx-auto li-tick-mark reveal">
        <div className="flex md:flex-row flex-col items-center lg:gap-16 md:gap-10 gap-6">
          <div className="md:w-1/2 w-full">
            <Heading
              type="h2"
              className="lg:!text-[34px] md:!text-3xl !text-2xl mb-3"
              text={`Hire ${title}`}
            />
            <p className="md:text-lg text-base md:!mb-7.5 !mb-5">
              In 3 Simple Steps
            </p>

            <ul>
              {threeStepsListData?.map(({ name, description }, index) => (
                <li
                  className="md:text-base text-sm mb-5 last:mb-7.5 blue"
                  key={index}
                >
                  <p className="lg:text-xl md:text-lg text-base font-medium !mb-4">
                    {name}
                  </p>
                  {description}
                </li>
              ))}
            </ul>
            <ButtonV2
              label="Schedule a Developer Interview"
              className="w-fit hover:text-themeColor"
            />
          </div>
          <div className="md:w-1/2 w-full">
            <Image
              className="rounded-2xl"
              src={
                pathname === "/hire-ui-ux-designer/"
                  ? "/images/v2/ui-ux-three-steps.webp"
                  : "/images/v2/three-steps.webp"
              }
              alt="img-c"
              width="565"
              height="620"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireDevelopersInThreeSteps;
