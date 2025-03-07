import React, { useState } from "react";
import AccordionCustomStyle from "../Common/AccordionCustomStyle";
import { usePathname } from "next/navigation";

const nodeJsAccordionData = [
  {
    title: "Digital Transformation",
    iconSrc: "/images/Content-Aggregation-Apps.png",
    content:
      "We go beyond traditional development to become your trusted innovation partner—supporting your journey from concept through continuous growth.",
    imageSrc: "/images/hire_nodejs_accordion_1.webp",
    imageAlt: "Digital Transformation img",
  },
  {
    title: "Future-Proof Solutions",
    iconSrc: "/images/future.svg",
    content:
      "We develop cloud-native applications and AI-enhanced platforms that solve today’s challenges and prepare you for tomorrow’s opportunities. Our agile, scalable solutions evolve with your business needs.",
    imageSrc: "/images/hire_nodejs_accordion_2.webp",
    imageAlt: "Future-Proof Solutions img",
  },
  {
    title: "Expert-Development",
    iconSrc: "/images/Development-black.svg",
    content:
      "Collaborate with a team that combines your industry insights with our technical expertise. Through structured workshops and regular feedback, we create solutions aligned with your objectives to drive measurable ROI.",
    imageSrc: "/images/hire_nodejs_accordion_3.webp",
    imageAlt: "Expert-Development img",
  },
  {
    title: "Transparent Delivery",
    iconSrc: "/images/delivery.svg",
    content:
      "Our sprint-driven approach, regular progress reviews, and clear workflows ensure you remain informed and in control throughout the project lifecycle.",
    imageSrc: "/images/hire_nodejs_accordion_4.webp",
    imageAlt: "Integration of RESTful APIs img",
  },
  {
    title: "Sustainable Scaling",
    iconSrc: "/images/scalable-black.svg",
    content:
      "Even after launch, our dedicated success teams work to optimize performance, strengthen security, and maintain scalability—providing 24/7 monitoring, regular updates, and strategic adjustments.",
    imageSrc: "/images/hire_nodejs_accordion_5.webp",
    imageAlt: "Sustainable Scaling img",
  },
  {
    title: "Holistic Transformation",
    iconSrc: "/images/transformation.svg",
    content:
      "From initial planning to enterprise-scale execution, we provide the tools, talent, and know-how to transform your vision into a lasting competitive advantage.",
    imageSrc: "/images/hire_nodejs_accordion_6.webp",
    imageAlt: "Holistic Transformation img",
  },
];

export default function PerformanceOptAccordion() {
  const pathname = usePathname();
  const [open, setOpen] = useState(1);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const mapToRender = {
    "/hire-nodejs-developer/": {
      title: "Empowering Your Digital Transformation",
      description: "",
      accordionData: nodeJsAccordionData,
    },
  };
  const currentData = mapToRender[pathname];

  return (
    <div className="container mx-auto service_width xl:pb-[6rem] md:pb-[4rem] pb-[2rem] end-to-end reveal flex flex-col xs:gap-4 md:gap-6">
      <div className="end-To-end">
        <div className="endTO_text home_sec2_txt3 solutions lg:!mb-[3rem] !mb-0">
          <h2 className="!w-full p-0">{currentData?.title}</h2>
        </div>
      </div>
      <div className="mx-auto">
        <div className="accordion-tab-section">
          <div className="flex flex-wrap justify-center">
            <div className="lg:w-6/12 w-full md:mt-[0px] mb-12 lg:mb-0 mt-[30px]">
              <div className="lg:h-full">
                {currentData?.accordionData?.map(
                  ({ imageSrc, imageAlt }, index) => (
                    <div
                      key={index}
                      className={`fade-image lg:h-full ${
                        (index === 0 && (open === 1 || open === 0)) ||
                        (index !== 0 && open === index + 1)
                          ? "active"
                          : "hidden"
                      }`}
                    >
                      <div className="team_img lg:h-full">
                        <img
                          className="lg:h-[80%]"
                          decoding="async"
                          loading="lazy"
                          src={imageSrc}
                          alt={imageAlt}
                        />
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="lg:w-6/12 w-full mb-[10px]">
              <div className="accordion !mb-0 lg:ml-8 w-full">
                {currentData?.accordionData?.map(
                  ({ title, content, iconSrc }, index) => (
                    <AccordionCustomStyle
                      key={index}
                      index={index + 1}
                      title={title}
                      iconSrc={iconSrc}
                      content={content}
                      handleOpen={handleOpen}
                      open={open}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
