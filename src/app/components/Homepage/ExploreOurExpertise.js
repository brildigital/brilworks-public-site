"use client";
import React, { useState } from "react";
import Heading from "../HTMLComponents/Heading";
import { useMediaQuery } from "react-responsive";
import TabAccordionDark from "../Common/TabAccordionDark";
import TabVerticalSticky from "../Common/TabVerticalSticky";

const ExploreOurExpertise = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const ourExpertiseData = [
    {
      title: "Cloud Services",
      value: "cloud-service",
      imageSrc: "/images/v2/cloud-img.webp",
      description:
        "Optimise your infrastructure with our cloud services, streamlining operations and enhancing scalability to meet the demands of your evolving business landscape.",
      service: [
        {
          title: "AWS Development Services",
          redirect: "/hire-aws-developer/",
        },
      ],
    },
    {
      title: "Backend Developer",
      value: "backend",
      imageSrc: "/images/v2/backend-img.webp",
      description:
        "Engineer the backbone of your digital presence with our backend development expertise, ensuring reliable and efficient functionality for your applications.",
      service: [
        {
          title: "Java",
          redirect: "/hire-java-developer/",
        },
        {
          title: "NodeJS",
          redirect: "/hire-nodejs-developer/",
        },
      ],
    },
    {
      title: "Frontend Developer",
      value: "frontend",
      imageSrc: "/images/v2/frontend-img.webp",
      description:
        "Translate your vision into an intuitive and visually compelling user interface as our front-end developers prioritize seamless user interactions and responsive design.",
      service: [
        {
          title: "ReactJS",
          redirect: "/hire-reactjs-developer/",
        },
      ],
    },
    {
      title: "Mobile App Developer",
      value: "mobile-app",
      imageSrc: "/images/v2/mobile-app-img.webp",
      description:
        "As a top-rated mobile app development company, we specialize in transforming your unique ideas into vibrant, functional mobile experiences through our dedicated team of expert developers.",
      service: [
        {
          title: "React Native",
          redirect: "/hire-react-native-developer/",
        },
        {
          title: "Blockchain And Solidity",
          redirect: "/hire-blockchain-developer/",
        },
      ],
    },
    {
      title: "UI UX Design",
      value: "ui-ux",
      imageSrc: "/images/v2/ui-ux-img.webp",
      description:
        "Enhance user experience and satisfaction through thoughtful design with our UI/UX experts, ensuring that every digital interaction aligns seamlessly with your business objectives.",
      service: [
        {
          title: "UI/UX Designer",
          redirect: "/hire-ui-ux-designer/",
        },
      ],
    },
  ];

  return (
    <div className="bg-navyBlue">
      <div className="border-b border-b-[#2B3138]">
        <div className="container max-w-[1280px] mx-auto main-section-padding !pb-0">
          <div className="lg:mb-10 md:mb-8 mb-6">
            <Heading
              type="h2"
              className="lg:!text-[34px] md:!text-3xl !text-2xl text-white"
              text="Explore our Expertise"
            />
            <p className="md:text-lg text-base text-white">
              Our services drive sustainable growth.
            </p>
          </div>
        </div>
      </div>
      <div
        className={`container max-w-[1280px] mx-auto ${
          isMobile ? "main-section-padding !px-0" : ""
        }`}
      >
        {isMobile ? (
          ourExpertiseData?.map((data, index) => (
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
            sectionId="explore-our-expertise"
            initialTabValue="cloud-service"
            data={ourExpertiseData}
          />
          // <TabVerticalDark
          //   initialTabValue={"cloud-service"}
          //   data={ourExpertiseData}
          // />
        )}
      </div>
    </div>
  );
};

export default ExploreOurExpertise;
