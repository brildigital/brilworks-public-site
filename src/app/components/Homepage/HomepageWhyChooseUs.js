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

  const whyChooseUsAWSConsulting = [
    {
      title: "Proven Track Record",
      description:
        "We have a successful history of delivering value to businesses of all sizes across diverse industries.",
    },
    {
      title: "Customer-Centric Approach",
      description:
        "We prioritize close collaboration and open communication, ensuring your satisfaction every step of the way.",
    },
    {
      title: "Innovation & Expertise",
      description:
        "Our team stays ahead of the curve with the latest AWS technologies and best practices, bringing continuous value to your cloud journey.",
    },
    {
      title: "Scalability & Flexibility",
      description:
        "We adapt to your evolving needs, readily scaling our services to support your growth and changing priorities.",
    },
  ];

  const whyChooseUsKubernatesConsulting = [
    {
      title: "Transparency and support",
      description:
        "We prioritize clear and constant communication throughout the entire process, ensuring you are involved and informed in every step. ",
    },
    {
      title: "Proven track record",
      description:
        "We have empowered businesses across several domains with tailored Kubernetes solutions, helping them achieve an average 30% improvement and 40% reduction in downtime.",
    },
    {
      title: "Certified team",
      description:
        "As a leading Kubernetes consulting service provider, we house a team of certified experts who hold certification from reputed organizations.",
    },
    {
      title: "Scalable team",
      description:
        "Gain the advantage of a flexible team structure that allows Brilworks to adjust resource allocation based on your specific project requirements.",
    },
    {
      title: "Domain Expertise",
      description:
        "Our engineers specialize in architecting, deploying, and optimizing Kubernetes solutions tailored to meet the unique needs of our clients across industries.",
    },
    {
      title: "Agile Development",
      description:
        "Our agile approach to Kubernetes implementation breaks down projects into smaller, interactive cycles, enabling you to gain value from your investment sooner.",
    },
  ];

  const whyChooseUsProductEngineering = [
    {
      title: "Expert Team",
      description:
        "Skilled engineers with a wealth of experience to every project, ensuring successful product development from concept to launch.",
    },
    {
      title: "Agile Approach",
      description:
        "We use a flexible, iterative development process to adapt to your needs and deliver high-quality results quickly.",
    },
    {
      title: "Quality Focus",
      description:
        "We are committed to delivering exceptional products. Our rigorous testing processes ensure your product is reliable, bug-free, and exceeds expectations.",
    },
    {
      title: "Scalable Solutions",
      description:
        "We build products that can grow with your business. Our solutions are designed to be adaptable and integrate seamlessly with future needs.",
    },
    {
      title: "On-Time Delivery",
      description:
        "Our efficient processes and clear communication ensure your project is delivered on time and within budget.",
    },
    {
      title: "Transparent Communication",
      description:
        "We believe in open communication throughout the development process. You'll always be informed and involved in every step of the product's journey.",
    },
  ];

  const whyChooseUsApplicationDev = [
    {
      title: "Experienced Team",
      description:
        "Our team of skilled developers possesses a deep understanding of diverse technologies and platforms.",
    },
    {
      title: "Client-Centric Approach",
      description:
        "We collaborate closely with you to understand your unique vision and business goals.",
    },
    {
      title: "Scalable Solutions",
      description:
        "We build applications that grow with your business, ensuring long-term value.",
    },
    {
      title: "Transparent Communication",
      description:
        "We keep you informed throughout the development process, fostering trust and collaboration.",
    },
    {
      title: "Proven Track Record",
      description:
        "We have a history of successful project completions, delivering exceptional results for clients across various industries.",
    },
    {
      title: "Competitive Rates",
      description:
        "We offer competitive pricing models to fit your budget and project requirements.",
    },
  ];

  const whyChooseUsSaasApplicationDev = [
    {
      title: "Fast Track Your Idea",
      description:
        "We don't just code, we co-create. Our experts refine your vision and propel it through efficient development, all under one roof.",
    },
    {
      title: "UX Obsessed Design",
      description:
        "We craft interfaces that captivate users while building fortresses around your data. Your SaaS will be both stunning and secure.",
    },
    {
      title: "Scalable Architecture from Day One",
      description:
        "Forget costly overhauls – your application seamlessly adapts to your ever-expanding needs. We design your SaaS to flex with your growth.",
    },
    {
      title: "Future-Proof Tech Stack Expertise",
      description:
        "We stay ahead of the curve, leveraging cutting-edge technology to create a future-proof SaaS. Stay competitive with a solution that never goes out of style.",
    },
    {
      title: "Collaborative Development for Success",
      description:
        "We're not just developers; we're your partners in success. Clear communication and collaboration ensure your vision becomes a reality.",
    },
    {
      title: "Continuous Innovation for Your SaaS",
      description:
        "We offer ongoing support and maintenance, constantly evolving it to meet changing needs and user demands.",
    },
  ];

  const showDataBasedOnPathname = {
    "/ai-ml-development-services/": whyChooseUscontent,
    "/devops-consulting-services/": whyChooseUsDevOps,
    "/digital-experience-services/": whyChooseUsDigitalExperience,
    "/aws-consulting-services/": whyChooseUsAWSConsulting,
    "/kubernates-consulting-services/": whyChooseUsKubernatesConsulting,
    "/product-engineering-development-services/": whyChooseUsProductEngineering,
    "/application-development-services/": whyChooseUsApplicationDev,
    "/saas-application-development-services/": whyChooseUsSaasApplicationDev,
  };

  return (
    <div
      className={`container mx-auto w-[90%] ${
        pathname === "/" ? "md:pt-24 pt-12" : "md:py-12 pt-12 pb-8"
      }`}
    >
      <div className="background !rounded-2xl md:px-8 lg:px-12 md:!pb-8 lg:!pb-12 px-4 pb-4 reveal">
        <div className="solutions md:py-8 py-6 flex md:items-center md:justify-center justify-start items-start">
          {pathname === "/application-development-services/" ? (
            <h2 className="text-center w-2/3">
              Why Choose Brilworks for your App Development Needs?
            </h2>
          ) : (
            <>
              {pathname === "/saas-application-development-services/" ? (
                <h2 className="text-center w-2/3">Here's what sets us apart</h2>
              ) : (
                <h2>Why Choose Us?</h2>
              )}
            </>
          )}
        </div>
        <div
          className={`grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-4 !pt-0 ${
            pathname === "/aws-consulting-services/"
              ? "xl:grid-cols-2 lg:w-2/3 mx-auto"
              : "xl:grid-cols-3"
          } `}
        >
          {pathname === "/" &&
            whyChooseUscontent?.map(({ title, description }, index) => (
              <Card className="shadow-lg shadow-black-500/50" key={index}>
                <h4 className="text-xl why_text font-bold leading-snug text-black p-4 pb-0">
                  {title}
                </h4>
                <CardBody className="p-4 why_text lg:w-11/12">
                  {description}
                </CardBody>
              </Card>
            ))}
          {showDataBasedOnPathname[pathname]?.map(
            ({ title, description }, index) => (
              <Card className="shadow-lg shadow-black-500/50" key={index}>
                <h4 className="text-xl why_text font-bold leading-snug text-black p-4 pb-0">
                  {title}
                </h4>
                <CardBody className="p-4 why_text lg:w-11/12">
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
