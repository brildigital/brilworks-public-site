"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { WhyChooseText } from "./BigText";
import TabAccordionDark from "../Common/TabAccordionDark";
import TabVerticalDark from "../Common/TabVerticalDark";
import Heading from "../HTMLComponents/Heading";
import { valid } from "uuid4";
import { useMediaQuery } from "react-responsive";
import TabVerticalSticky from "../Common/TabVerticalSticky";

const Card = dynamic(() =>
  import("@material-tailwind/react").then((mod) => mod.Card)
);
const CardBody = dynamic(() =>
  import("@material-tailwind/react").then((mod) => mod.CardBody)
);

const HomepageWhyChooseUs = () => {
  const pathname = usePathname();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const whyChooseUscontent = [
    {
      title: "Cost-Effective Excellence",
      value: "why-choose-1",
      imageSrc: "/images/v2/Cost-Effective-Excellence.png",
      description:
        "Cost-effective e-solutions that deliver maximum value for your investment.",
    },
    {
      title: "Proven Expertise",
      value: "why-choose-2",
      imageSrc: "/images/v2/Proven-Expertise.png",
      description:
        "Proven expertise from our seasoned professionals with over 8 years of experience.",
    },
    {
      title: "Innovative Solution",
      value: "why-choose-3",
      imageSrc: "/images/v2/Innovative-Solution.png",
      description:
        "Innovative solutions that leverage emerging technologies to exceed industry standards.",
    },
    {
      title: "Diverse Portfolio",
      value: "why-choose-4",
      imageSrc: "/images/v2/Diverse-Portfolio.png",
      description:
        "A diverse portfolio of over 120 successfully developed applications across various industries.",
    },
    {
      title: "Client-Centric Approach",
      value: "why-choose-5",
      imageSrc: "/images/v2/Client-Centric-Approach.png",
      description:
        " A client-centric approach that prioritizes your unique needs and fosters long-term partnerships.",
    },
    {
      title: "Dedicated Support",
      value: "why-choose-6",
      imageSrc: "/images/v2/Dedicated-Support.png",
      description:
        "  Dedicated support to ensure smooth integration, troubleshooting and updates for optimal software performance.",
    },
  ];

  return (
    <div className="bg-navyBlue">
      <div className="reveal">
        <div className="container max-w-[1280px] mx-auto main-section-padding !pb-0">
          <div>
            <Heading
              type="h2"
              className="lg:!text-[34px] md:!text-3xl !text-2xl text-white"
              text="Why Choose Brilworks?"
            />
          </div>
        </div>
        <div
          className={`container max-w-[1280px] mx-auto ${
            isMobile ? "main-section-padding !px-0" : ""
          }`}
        >
          {isMobile ? (
            whyChooseUscontent?.map((data, index) => (
              <div key={data.value}>
                <TabAccordionDark
                  index={index + 1}
                  key={data?.value}
                  data={data}
                  handleOpen={handleOpen}
                  open={open}
                />
              </div>
            ))
          ) : (
            <TabVerticalSticky
              sectionId="why-choose-brilworks"
              data={whyChooseUscontent}
              borderRight={false}
              rightSideOnlyImage={true}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HomepageWhyChooseUs;
