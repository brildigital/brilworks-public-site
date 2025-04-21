"use client";
import React from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const Svgs = dynamic(() => import("../Svgs"));

const ServiceCard = ({ title, description }) => (
  <div className="service_detail_card_border p-[1px] rounded-lg">
    <div className="flex flex-col gap-2 border border-transparent p-4 rounded-lg cursor-pointer bg-white">
      <div className="text-2xl font-bold">{title}</div>
      <p className="text-base text-colorGray">{description}</p>
    </div>
  </div>
);

const ServicesWhyChooseUs = () => {
  const pathname = usePathname();

  const whyChooseUscontent = [
    {
      title: "Cost-Effective Excellence",
      icon: "/images/v2/fi_18810346.svg",
      description:
        "Cost-effective e-solutions that deliver maximum value for your investment.",
    },
    {
      title: "Proven Expertise",
      icon: "/images/v2/fi_18810346.svg",
      description:
        "Proven expertise from our seasoned professionals with over 8 years of experience.",
    },
    {
      title: "Innovative Solution",
      icon: "/images/v2/fi_18810346.svg",
      description:
        "Innovative solutions that leverage emerging technologies to exceed industry standards.",
    },
    {
      title: "Diverse Portfolio",
      icon: "/images/v2/fi_18810346.svg",
      description:
        "A diverse portfolio of over 120 successfully developed applications across various industries.",
    },
    {
      title: "Client-Centric Approach",
      icon: "/images/v2/fi_18810346.svg",
      description:
        " A client-centric approach that prioritizes your unique needs and fosters long-term partnerships.",
    },
    {
      title: "Dedicated Support",
      icon: "/images/v2/fi_18810346.svg",
      description:
        "  Dedicated support to ensure smooth integration, troubleshooting and updates for optimal software performance.",
    },
  ];

  const whyChooseUsDigitalExperience = [
    {
      title: "Award-Winning Expertise",
      icon: "/images/v2/fi_18810346.svg",
      description:
        "Recognized for innovation and excellence by Clutch, Techreviewer, and more.",
    },
    {
      title: "Human-Centered Approach",
      icon: "/images/v2/fi_18810346.svg",
      description:
        "We prioritize understanding your unique needs and building solutions that resonate.",
    },
    {
      title: "Agile & Collaborative",
      icon: "/images/v2/fi_18810346.svg",
      description:
        "We work closely with your team, ensuring open communication and swift adjustments.",
    },
    {
      title: "End-to-End Support",
      icon: "/images/v2/fi_18810346.svg",
      description:
        "We offer a full spectrum of services, from ideation to implementation and ongoing maintenance.",
    },
    {
      title: "Scalable & Secure",
      icon: "/images/v2/fi_18810346.svg",
      description:
        "Our solutions are built with future growth and industry-leading security standards in mind.",
    },
  ];

  const whyChooseUsLowCodeNoCode = [
    {
      title: "Unmatched Expertise",
      icon: "/images/v2/fi_18810346.svg",
      description:
        "Our team boasts seasoned professionals with deep experience in Low-Code No-Code development.",
    },
    {
      title: "Agility and Speed",
      icon: "/images/v2/fi_18810346.svg",
      description:
        "Get your applications up and running faster than ever before, with minimal coding requirements.",
    },
    {
      title: "Cost-Effectiveness",
      icon: "/images/v2/fi_18810346.svg",
      description:
        "Eliminate the high costs associated with traditional software development projects.",
    },
    {
      title: "Scalability and Flexibility",
      icon: "/images/v2/fi_18810346.svg",
      description:
        "Build applications that adapt and grow alongside your business needs.",
    },
    {
      title: "User-Friendly Platform",
      icon: "/images/v2/fi_18810346.svg",
      description:
        "Our intuitive platform empowers both technical and non-technical users to create powerful applications.",
    },
  ];

  const whyChooseUsERPNextDev = [
    {
      title: "Expert Storytellers",
      icon: "/images/v2/fi_18810346.svg",
      description:
        "We're not just data visualization developers; we're data storytellers. We go beyond creating charts and graphs; we craft compelling narratives that resonate with your audience and drive action.",
    },
    {
      title: "Unmatched Tool Expertise",
      icon: "/images/v2/fi_18810346.svg",
      description:
        "We are well-versed in industry-leading platforms like Power BI and Tableau, allowing us to tailor solutions that perfectly match your specific needs and data ecosystem.",
    },
    {
      title: "Actionable Insights, Delivered",
      icon: "/images/v2/fi_18810346.svg",
      description:
        "Our focus is on delivering actionable insights, not just beautiful dashboards. We work closely with you to understand your business goals and translate data into clear, actionable recommendations.",
    },
    {
      title: "Data Visualization with Impact",
      icon: "/images/v2/fi_18810346.svg",
      description:
        "We don't just develop dashboards; we design them for impact. Our team creates visually stunning and interactive dashboards that are easy to understand and navigate, ensuring maximum user engagement.",
    },
    {
      title: "Agile & Collaborative Approach",
      icon: "/images/v2/fi_18810346.svg",
      description:
        "We believe in a collaborative approach, working closely with your team throughout the development process to ensure your vision comes to life.",
    },
  ];

  const whyChooseUsBusinessIntelligence = [
    {
      title: "Advanced Analytics",
      icon: "/images/v2/fi_18810346.svg",
      description:
        "We go beyond basic reporting, employing machine learning and artificial intelligence (AI) to uncover hidden patterns and predict future trends.",
    },
    {
      title: "Stay Ahead of the Curve",
      icon: "/images/v2/fi_18810346.svg",
      description:
        "Our team constantly explores and implements the latest BI tools and technologies to ensure you have a future-proof solution.",
    },
    {
      title: "Real-Time Analytics",
      icon: "/images/v2/fi_18810346.svg",
      description:
        "Leverage the power of in-memory computing and real-time data pipelines for instant insights that fuel faster decision-making.",
    },
    {
      title: "Exceptional User Experiences",
      icon: "/images/v2/fi_18810346.svg",
      description:
        "Our data visualization experts create intuitive and interactive dashboards that bring your data to life for users of all technical abilities.",
    },
  ];
  const whyChooseUsFrappee = [
    {
      title: "Develop custom solutions",
      icon: "/images/v2/fi_18810346.svg",
      description:
        "We build custom applications tailored precisely to your workflows, giving your business a leg up.",
    },
    {
      title: "Frappe integrations",
      icon: "/images/v2/fi_18810346.svg",
      description:
        "We will break down data silos and streamline information flow by integrating your Frappe system with other applications.",
    },
    {
      title: "Round-the-clock support",
      icon: "/images/v2/fi_18810346.svg",
      description:
        "We'll handle ongoing Frappe support and maintenance so you can focus on running your business with peace of mind.",
    },
    {
      title: "Expertise",
      icon: "/images/v2/fi_18810346.svg",
      description:
        "Our team comprises expert Frappe developers with extensive experience in delivering high-quality solutions.",
    },
    {
      title: "Client-Centric Approach",
      icon: "/images/v2/fi_18810346.svg",
      description:
        "We prioritize client satisfaction and work closely with you to ensure that our solutions meet your expectations.",
    },
    {
      title: "Personalized Attention",
      icon: "/images/v2/fi_18810346.svg",
      description:
        "Receive personalized attention from our dedicated support team, who are committed to understanding your specific needs and providing tailored solutions to meet them.",
    },
  ];

  const showDataBasedOnPathname = {
    "/ai-ml-development-services/": whyChooseUscontent,
    "/digital-experience-services/": whyChooseUsDigitalExperience,
    "/low-code-no-code-development-services/": whyChooseUsLowCodeNoCode,
    "/erp-next-development-services/": whyChooseUsERPNextDev,
    "/business-intelligence-services/": whyChooseUsBusinessIntelligence,
  };

  const data = showDataBasedOnPathname[pathname];

  const firstThree = data?.slice(0, data?.length === 4 ? 2 : 3);
  const remainingThree = data?.slice(data?.length === 4 ? 2 : 3, data?.length);

  return (
    <div className="container max-w-[1280px] main-section-padding mx-auto">
      <div className="endTO_text solutions">
        {pathname === "/application-development-services/" ? (
          <h2 className="text-center w-2/3 mx-auto">
            Why Choose Brilworks for your App Development Needs?
          </h2>
        ) : (
          <>
            {pathname === "/saas-application-development-services/" ? (
              <h2 className="text-center w-2/3 mx-auto">
                Here's what sets us apart
              </h2>
            ) : (
              <>
                {pathname === "/frappe-development-services/" ? (
                  <h2 className="text-center w-full">
                    Why Choose Brilworks for Frappe Development?
                  </h2>
                ) : (
                  <>
                    {pathname === "/staff-augmentation/" ? (
                      <h2 className="!w-full p-0">
                        Why Brilworks For IT Staff Augmentation Service
                      </h2>
                    ) : (
                      <h2 className="text-center w-full">
                        Why Choose Brilworks?
                      </h2>
                    )}
                  </>
                )}
              </>
            )}
          </>
        )}
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-5 md:mt-16 mt-8 reveal">
        <div className="flex flex-col md:gap-20">
          {firstThree?.map(({ title, description }) => (
            <ServiceCard key={title} title={title} description={description} />
          ))}
        </div>
        <div className="m-auto why_staff_augmentation md:py-0 py-4">
          <Svgs name="staff-augmentation-service" />
        </div>

        <div className="flex flex-col md:gap-20">
          {remainingThree?.map(({ title, description }) => (
            <ServiceCard key={title} title={title} description={description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesWhyChooseUs;
