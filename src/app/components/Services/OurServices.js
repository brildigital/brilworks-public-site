import React, { useEffect, useState } from "react";
import { scrollEffect } from "../lib/commonFunction";
import Image from "next/image";
import AccordionCustomIcon from "../Common/AccordionCustomIcon";
import { usePathname } from "next/navigation";
import Heading from "../HTMLComponents/Heading";

const OurServices = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  useEffect(() => {
    scrollEffect();
    window.addEventListener("scroll", scrollEffect);
    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);

  const DigitalExperienceAccordionData = [
    {
      title: "Digital Experience Strategy",
      value: "value-1",
      description:
        "We map your unique path to digital success, defining goals, user personas, and a winning roadmap.",
      imageSrc: "/images/digital-ex-img.webp",
      imageAlt: "Digital experience img",
    },
    {
      title: "Experience Design & Development",
      value: "value-1",
      description:
        "Craft seamless and captivating interfaces across web, mobile, and emerging platforms.",
      imageSrc: "/images/digital-experience-dev.webp",
      imageAlt: "Experience design dev img",
    },
    {
      title: "Content Management & Personalization",
      value: "value-1",
      description:
        "Deliver dynamic, targeted content that resonates with every individual.",
      imageSrc: "/images/content-mgmt.webp",
      imageAlt: "Content Mgmt img",
    },
    {
      title: "Marketing Automation & Analytics",
      value: "value-1",
      description:
        "Streamline your campaigns and measure impact with data-driven insights.",
      imageSrc: "/images/marketing-automation.webp",
      imageAlt: "Marketing Automation img",
    },
    {
      title: "Commerce & Payment Integration",
      value: "value-1",
      description:
        "Build frictionless shopping experiences that convert every click.",
      imageSrc: "/images/e-commerce-payment.webp",
      imageAlt: "Commerce Payment img",
    },
    {
      title: "Integration & API Development",
      value: "value-1",
      description:
        "Connect your systems seamlessly for a unified customer journey.",
      imageSrc: "/images/integartion-api-dev.webp",
      imageAlt: "Integration API img",
    },
  ];

  const LowCodeNoCodeAccordionData = [
    {
      title: "Low-Code App Development",
      value: "value-1",
      description:
        "Build powerful applications using intuitive visual interfaces and pre-built components.",
      imageSrc: "/images/low-code-1.webp",
      imageAlt: "Web dev img",
    },
    {
      title: "No-Code Development",
      value: "value-1",
      description:
        "Simplify app creation for business users with drag-and-drop functionality and pre-configured workflows.",
      imageSrc: "/images/low-code-2.webp",
      imageAlt: "Mobile Application dev img",
    },
    {
      title: "Low-Code No-Code Platform",
      value: "value-1",
      description:
        "Leverage our comprehensive platform with everything you need to design, develop, and deploy apps seamlessly.",
      imageSrc: "/images/low-code-3.webp",
      imageAlt: "Enterprise application dev img",
    },
    {
      title: "Low-Code No-Code Solutions",
      value: "value-1",
      description:
        "We craft tailored solutions that address your unique business challenges, from process automation to data management.",
      imageSrc: "/images/low-code-4.webp",
      imageAlt: "Saas application dev img",
    },
    {
      title: "Low-Code No-Code Software Development Services",
      value: "value-1",
      description:
        "Our expert developers can bridge the gap between your vision and reality, using code when necessary.",
      imageSrc: "/images/low-code-5.webp",
      imageAlt: "Saas application dev img",
    },
  ];

  const ERPNextDevAccordionData = [
    {
      title: "Custom Module Development",
      value: "value-1",
      description:
        "Build functionalities unique to your business processes that go beyond ERPNext's default features.",
      imageSrc: "/images/erp-next-1.webp",
      imageAlt: "Custom Module Development img",
    },
    {
      title: "Workflow Automation",
      value: "value-1",
      description:
        "Streamline complex workflows and eliminate repetitive tasks with custom automation solutions.",
      imageSrc: "/images/erp-next-2.webp",
      imageAlt: "Automation img",
    },
    {
      title: "Seamless Integrations",
      value: "value-1",
      description:
        "Connect ERPNext to your existing CRM, e-commerce platform, or accounting software for a unified data flow.",
      imageSrc: "/images/erp-next-3.webp",
      imageAlt: "Seamless Integrations img",
    },
    {
      title: "Data Migration & Security",
      value: "value-1",
      description:
        "Migrate your data smoothly from legacy systems and implement robust security measures to safeguard your information.",
      imageSrc: "/images/erp-next-4.webp",
      imageAlt: "Data Migration img",
    },
    {
      title: "Custom Reporting & Dashboards",
      value: "value-1",
      description:
        "Gain deeper business insights with custom reports and dashboards tailored to your specific needs.",
      imageSrc: "/images/erp-next-5.webp",
      imageAlt: "Custom Reporting img",
    },
    {
      title: "Comprehensive Support & Maintenance",
      value: "value-1",
      description:
        "Benefit from expert guidance during implementation, ongoing technical support, and regular system maintenance for optimal performance.",
      imageSrc: "/images/erp-next-6.webp",
      imageAlt: "Comprehensive Support dev img",
    },
  ];

  const BusinessIntelligenceAccordionData = [
    {
      title: "BI Strategy & Roadmap Development",
      value: "value-1",
      description:
        "We work collaboratively to define your BI goals, assess your data landscape, and create a customized roadmap for success.",
      imageSrc: "/images/bi-1.webp",
      imageAlt: "Custom Module Development img",
    },
    {
      title: "Data Lake & Data Warehouse Architecture",
      value: "value-1",
      description:
        "We design and implement robust data storage solutions tailored to your specific needs and scalability requirements.",
      imageSrc: "/images/bi-2.webp",
      imageAlt: "Automation img",
    },
    {
      title: "Advanced Data Integration & Cleansing",
      value: "value-1",
      description:
        "Our experts ensure your data is accurate, consistent, and ready for analysis through cutting-edge integration and cleansing techniques.",
      imageSrc: "https://a.storyblok.com/f/219851/640x505/f19d442ca9/bi-3.webp",
      imageAlt: "Seamless Integrations img",
    },
    {
      title: "Self-Service BI & Data Governance",
      value: "value-1",
      description:
        "We empower your users with self-service BI tools while establishing robust data governance frameworks for data security and quality.",
      imageSrc: "/images/bi-4.webp",
      imageAlt: "Data Migration img",
    },
    {
      title: "Custom Analytics Dashboard Development",
      value: "value-1",
      description:
        "Our team creates interactive dashboards tailored to your KPIs, providing real-time insights at your fingertips.",
      imageSrc: "/images/bi-5.webp",
      imageAlt: "Custom Reporting img",
    },
    {
      title: "Predictive Analytics & Machine Learning",
      value: "value-1",
      description:
        "We leverage advanced analytics and machine learning to uncover hidden patterns, predict future trends, and optimize business processes.",
      imageSrc: "/images/bi-6.webp",
      imageAlt: "Comprehensive Support dev img",
    },
    {
      title: "Power BI & Tableau Expertise",
      value: "value-1",
      description:
        "Our team is proficient in leading BI platforms like Power BI and Tableau to deliver the best solution for your organization.",
      imageSrc: "/images/bi-7.webp",
      imageAlt: "Comprehensive Support dev img",
    },
  ];

  const showDataBasedOnPathname = {
    "/digital-experience-services/": DigitalExperienceAccordionData,
    "/low-code-no-code-development-services/": LowCodeNoCodeAccordionData,
    "/erp-next-development-services/": ERPNextDevAccordionData,
    "/business-intelligence-services/": BusinessIntelligenceAccordionData,
  };

  const showTitleBasedOnPathname = {
    "/business-intelligence-services/":
      "Business Intelligence Services by Brilworks",
  };

  const title = showTitleBasedOnPathname[pathname] || "Our Services";
  const servicesAccordionData = showDataBasedOnPathname[pathname] || {};

  return (
    <div className="container max-w-[1280px] main-section-padding mx-auto">
      <div className="reveal">
        <Heading
          type="h2"
          className={`lg:!text-[34px] md:!text-3xl !text-2xl mb-4 md:!leading-snug w-full !text-center`}
          text={title}
        />
        <div className="homepage-work-domain">
          <div className="flex flex-wrap">
            <div className="lg:w-6/12 w-full">
              <div className="tab-content d-flex justify-content-center align-items-center h-100">
                <div>
                  <div className="services_img md:pt-8">
                    {servicesAccordionData?.map(
                      ({ imageSrc, imageAlt }, index) => (
                        <div
                          key={index}
                          className={`fade-image ${
                            (index === 0 && (open === 1 || open === 0)) ||
                            (index !== 0 && open === index + 1)
                              ? "active"
                              : "hidden"
                          }`}
                        >
                          <div className="solutions_img">
                            <Image
                              className="alignnone wp-image-32 size-full"
                              src={imageSrc}
                              alt={imageAlt}
                              width="640"
                              height="505"
                              sizes="(min-width: 1040px) 42.35vw, (min-width: 640px) 91.84vw, calc(100vw - 30px)"
                            />
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-6/12 w-full">
              {servicesAccordionData?.map(({ title, content }, index) => (
                <AccordionCustomIcon
                  index={index + 1}
                  key={index + 1}
                  title={title}
                  content={content}
                  handleOpen={handleOpen}
                  open={open}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
