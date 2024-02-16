"use client";
import { Card, CardBody } from "@material-tailwind/react";
import { usePathname } from "next/navigation";
import React from "react";

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

  const whyChooseUsDevOps = [
    {
      title: "Streamlined Workflows",
      description:
        "Brilworks helps you automate manual tasks and set up CI/CD pipelines, leading to faster development cycles and fewer errors.",
    },
    {
      title: "Expertise Across Technologies",
      description:
        "Regardless of your tools – cloud platforms, containers, IaC – we have the expertise to handle your specific DevOps needs.",
    },
    {
      title: "Improved Collaboration",
      description:
        "We break down silos between Dev, Ops, and Security teams for smooth collaboration and enhanced efficiency.",
    },
    {
      title: "Scalability and Flexibility",
      description:
        "Adapt your infrastructure and processes to dynamic requirements with ease and confidence.",
    },
    {
      title: "Cost Optimization",
      description:
        "Streamline your DevOps practices for reduced waste and improved profitability, maximizing your bottom line.",
    },
    {
      title: "Proven Track Record",
      description:
        "Our expertise delivers demonstrably successful DevOps implementations, giving you peace of mind.",
    },
  ];

  const whyChooseUsDigitalExperience = [
    {
      title: "Award-Winning Expertise",
      description:
        "Recognized for innovation and excellence by Clutch, Techreviewer, and more.",
    },
    {
      title: "Human-Centered Approach",
      description:
        "We prioritize understanding your unique needs and building solutions that resonate.",
    },
    {
      title: "Agile & Collaborative",
      description:
        "We work closely with your team, ensuring open communication and swift adjustments.",
    },
    {
      title: "End-to-End Support",
      description:
        "We offer a full spectrum of services, from ideation to implementation and ongoing maintenance.",
    },
    {
      title: "Scalable & Secure",
      description:
        "Our solutions are built with future growth and industry-leading security standards in mind.",
    },
  ];

  return (
    <div
      className={`container mx-auto w-[90%] ${
        pathname === "/" ? "md:pt-24 pt-12" : "md:py-12 pt-12 pb-8"
      }`}
    >
      <div className="background !rounded-2xl md:px-8 lg:px-12 md:!pb-8 lg:!pb-12 px-4 pb-4 reveal">
        <div className="solutions md:py-8 py-6 flex md:items-center md:justify-center justify-start items-start">
          <h2>Why Choose Us?</h2>
        </div>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-6 gap-4 !pt-0">
          {(pathname === "/" || pathname === "/ai-ml-development-services/") &&
            whyChooseUscontent.map(({ title, description }, index) => (
              <Card className="shadow-lg shadow-black-500/50" key={index}>
                <h4 className="text-xl why_text font-bold leading-snug text-black p-4 pb-0">
                  {title}
                </h4>
                <CardBody className="p-4 why_text lg:w-4/5">
                  {description}
                </CardBody>
              </Card>
            ))}
          {pathname === "/devops-consulting-services/" &&
            whyChooseUsDevOps.map(({ title, description }, index) => (
              <Card className="shadow-lg shadow-black-500/50" key={index}>
                <h4 className="text-xl why_text font-bold leading-snug text-black p-4 pb-0">
                  {title}
                </h4>
                <CardBody className="p-4 why_text lg:w-4/5 ">
                  {description}
                </CardBody>
              </Card>
            ))}
          {pathname === "/digital-experience-services/" &&
            whyChooseUsDigitalExperience.map(
              ({ title, description }, index) => (
                <Card className="shadow-lg shadow-black-500/50" key={index}>
                  <h4 className="text-xl why_text font-bold leading-snug text-black p-4 pb-0">
                    {title}
                  </h4>
                  <CardBody className="p-4 why_text lg:w-4/5 ">
                    {description}
                  </CardBody>
                </Card>
              )
            )}
        </div>
      </div>
    </div>
  );
};

export default HomepageWhyChooseUs;
