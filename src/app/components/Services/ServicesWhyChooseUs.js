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

  const showDataBasedOnPathname = {
    "/digital-experience-services/": whyChooseUsDigitalExperience,
    "/erp-next-development-services/": whyChooseUsERPNextDev,
    "/business-intelligence-services/": whyChooseUsBusinessIntelligence,
  };

  const data = showDataBasedOnPathname[pathname];

  const firstThree = data?.slice(0, data?.length === 4 ? 2 : 3);
  const remainingThree = data?.slice(data?.length === 4 ? 2 : 3, data?.length);

  return (
    <div className="container max-w-[1280px] main-section-padding mx-auto">
      <div className="endTO_text solutions">
        <h2 className="text-center w-full">Why Choose Brilworks?</h2>
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
