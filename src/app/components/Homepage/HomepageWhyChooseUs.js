"use client";
import React from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { WhyChooseText } from "./BigText";

const Card = dynamic(() =>
  import("@material-tailwind/react").then((mod) => mod.Card)
);
const CardBody = dynamic(() =>
  import("@material-tailwind/react").then((mod) => mod.CardBody)
);

const HomepageWhyChooseUs = () => {
  const pathname = usePathname();
  const whyChooseUscontent = [
    {
      title: "Cost-Effective Excellence",
      description:
        "Cost-effective e-solutions that deliver maximum value for your investment.",
    },
    {
      title: "Proven Expertise",
      description:
        "Proven expertise from our seasoned professionals with over 8 years of experience.",
    },
    {
      title: "Innovative Solution",
      description:
        "Innovative solutions that leverage emerging technologies to exceed industry standards.",
    },
    {
      title: "Diverse Portfolio",
      description:
        "A diverse portfolio of over 120 successfully developed applications across various industries.",
    },
    {
      title: "Client-Centric Approach",
      description:
        " A client-centric approach that prioritizes your unique needs and fosters long-term partnerships.",
    },
    {
      title: "Dedicated Support",
      description:
        "  Dedicated support to ensure smooth integration, troubleshooting and updates for optimal software performance.",
    },
  ];

  return (
    <div className="container mx-auto max-w-[1440px] main-section-padding">
      <div className="reveal">
        <WhyChooseText />
        <div className="w-full mx-auto grid slg:grid-cols-2 grid-cols-1 md:gap-6 gap-4 !pt-0 xl:grid-cols-2">
          {whyChooseUscontent?.map(({ title, description }, index) => (
            <div
              className="rounded-[30px] border border-borderGray overflow-visible h-auto"
              key={index}
            >
              <Card className="why-card rounded-[30px] border-none shadow-none xl:px-16 px-6 xl:py-12 py-6  hover:-rotate-[0.1rad] transition-all duration-[0.5s]">
                <h4 className="md:text-[26px] text-xl font-bold leading-snug p-4 pb-0">
                  {title}
                </h4>
                <CardBody className="desc md:text-xl text-base p-4 lg:w-11/12">
                  {description}
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomepageWhyChooseUs;
