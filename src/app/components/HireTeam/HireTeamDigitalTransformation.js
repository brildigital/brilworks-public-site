"use client";
import React, { useState } from "react";
import Heading from "../HTMLComponents/Heading";
import { useMediaQuery } from "react-responsive";
import TabAccordionDark from "../Common/TabAccordionDark";
import TabVerticalSticky from "../Common/TabVerticalSticky";

const HireTeamDigitalTransformation = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const nodeJSDigitalTranformationData = [
    {
      title: "Future-Proof Solutions",
      value: "node-digital-trasndormation-1",
      description:
        "We develop cloud-native applications and AI-enhanced platforms that solve today’s challenges and prepare you for tomorrow’s opportunities. Our agile, scalable solutions evolve with your business needs.",
      imageSrc: "/images/v2/future-proof-solution.webp",
      imageAlt: "Future-Proof Solutions img",
    },
    {
      title: "Sustainable Scaling",
      value: "node-digital-trasndormation-2",
      description:
        "Even after launch, our dedicated success teams work to optimize performance, strengthen security, and maintain scalability—providing 24/7 monitoring, regular updates, and strategic adjustments.",
      imageSrc: "/images/v2/sustainable-scaling.webp",
      imageAlt: "Sustainable Scaling img",
    },
    {
      title: "Expert-Development",
      value: "node-digital-trasndormation-3",
      description:
        "Collaborate with a team that combines your industry insights with our technical expertise. Through structured workshops and regular feedback, we create solutions aligned with your objectives to drive measurable ROI.",
      imageSrc: "/images/v2/expert-development.webp",
      imageAlt: "Expert-Development img",
    },
    {
      title: "Transparent Delivery",
      value: "node-digital-trasndormation-4",
      description:
        "Our sprint-driven approach, regular progress reviews, and clear workflows ensure you remain informed and in control throughout the project lifecycle.",
      imageSrc: "/images/v2/transparent-delivery.webp",
      imageAlt: "Integration of RESTful APIs img",
    },

    {
      title: "Holistic Transformation",
      value: "node-digital-trasndormation-5",
      description:
        "From initial planning to enterprise-scale execution, we provide the tools, talent, and know-how to transform your vision into a lasting competitive advantage.",
      imageSrc: "/images/v2/holistic-transformation.webp",
      imageAlt: "Holistic Transformation img",
    },
  ];

  return (
    <div className="bg-navyBlue">
      <div className="border-b border-b-[#2B3138] reveal">
        <div className="container max-w-[1280px] mx-auto main-section-padding !pb-0">
          <div className="lg:mb-10 md:mb-8 mb-6">
            <Heading
              type="h2"
              className="lg:!text-[34px] md:!text-3xl !text-2xl text-white"
              text="Empowering Your Digital Transformation"
            />
          </div>
        </div>
      </div>
      <div
        className={`container max-w-[1280px] mx-auto reveal ${
          isMobile ? "main-section-padding !px-0" : ""
        }`}
      >
        {isMobile ? (
          nodeJSDigitalTranformationData?.map((data, index) => (
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
            sectionId="empower-digital-tranformation"
            initialTabValue="node-digital-trasndormation-1"
            data={nodeJSDigitalTranformationData}
          />
        )}
      </div>
    </div>
  );
};

export default HireTeamDigitalTransformation;
