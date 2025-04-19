import React from "react";
import { useEffect, useState } from "react";
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
      icon: "/images/v2/image_name",
      description:
        "We map your unique path to digital success, defining goals, user personas, and a winning roadmap.",
      imageSrc: "/images/digital-ex-img.webp",
      imageAlt: "Digital experience img",
    },
    {
      title: "Experience Design & Development",
      icon: "/images/v2/image_name",
      description:
        "Craft seamless and captivating interfaces across web, mobile, and emerging platforms.",
      imageSrc: "/images/digital-experience-dev.webp",
      imageAlt: "Experience design dev img",
    },
    {
      title: "Content Management & Personalization",
      icon: "/images/v2/image_name",
      description:
        "Deliver dynamic, targeted content that resonates with every individual.",
      imageSrc: "/images/content-mgmt.webp",
      imageAlt: "Content Mgmt img",
    },
    {
      title: "Marketing Automation & Analytics",
      icon: "/images/v2/image_name",
      description:
        "Streamline your campaigns and measure impact with data-driven insights.",
      imageSrc: "/images/marketing-automation.webp",
      imageAlt: "Marketing Automation img",
    },
    {
      title: "Commerce & Payment Integration",
      icon: "/images/v2/image_name",
      description:
        "Build frictionless shopping experiences that convert every click.",
      imageSrc: "/images/e-commerce-payment.webp",
      imageAlt: "Commerce Payment img",
    },
    {
      title: "Integration & API Development",
      icon: "/images/v2/image_name",
      description:
        "Connect your systems seamlessly for a unified customer journey.",
      imageSrc: "/images/integartion-api-dev.webp",
      imageAlt: "Integration API img",
    },
  ];

  const SaaSApplicationDevAccordionData = [
    {
      title: "Idea productization and brand design",
      icon: "/images/v2/image_name",
      description:
        "We help you refine your concept, develop a compelling brand identity, and create a clear roadmap for your SaaS.",
      imageSrc: "/images/saas-1.webp",
      imageAlt: "Idea productization img",
    },
    {
      title: "SaaS consulting",
      icon: "/images/v2/image_name",
      description:
        "Expert guidance throughout your SaaS journey, from initial concept to market launch. We help you define your product strategy, identify market fit, and create a winning business model.",
      imageSrc:
        "https://a.storyblok.com/f/219851/640x505/0ccd54d3d2/saas-2.webp",
      imageAlt: "SaaS consulting img",
    },
    {
      title: "SaaS architecture design",
      icon: "/images/v2/image_name",
      description:
        "We design scalable and secure architectures that can support your growth and ensure a reliable user experience.",
      imageSrc: "/images/saas-3.webp",
      imageAlt: "SaaS architecture img",
    },
    {
      title: "SaaS application development",
      icon: "/images/v2/image_name",
      description:
        "Our skilled developers leverage cutting-edge technologies to build high-performing and secure SaaS applications.",
      imageSrc: "/images/saas-4.webp",
      imageAlt: "SaaS application dev img",
    },
    {
      title: "SaaS Support and maintenance",
      icon: "/images/v2/image_name",
      description:
        "Bug fixes, updates, and ongoing optimization - we've got you covered. We keep your software optimized and up-to-date, ensuring peak performance and a seamless user experience.",
      imageSrc: "/images/saas-5.webp",
      imageAlt: "SaaS Support img",
    },
    {
      title: "SaaS Platform migration",
      icon: "/images/v2/image_name",
      description:
        "We ensure a smooth transition to your new SaaS home. Our team seamlessly migrates your software from on-premise servers or another platform, minimizing downtime and ensuring a successful move to the cloud.",
      imageSrc: "/images/saas-6.webp",
      imageAlt: "SaaS Platform migration img",
    },
    {
      title: "API development",
      icon: "/images/v2/image_name",
      description:
        "We connect your software to the world. Our developers build robust APIs that allow your software to communicate with other applications, fostering data exchange and creating a more integrated ecosystem for your business.",
      imageSrc: "/images/saas-7.webp",
      imageAlt: "API development img",
    },
  ];

  const ApplicationDevAccordionData = [
    {
      title: "Web application development",
      icon: "/images/v2/image_name",
      description:
        "Build secure, scalable web apps that streamline your operations and enhance user experiences.",
      imageSrc: "/images/app-dev-1.webp",
      imageAlt: "Web dev img",
    },
    {
      title: "Mobile Application development",
      icon: "/images/v2/image_name",
      description:
        "Build secure, scalable web apps that streamline your operations and enhance user experiences.",
      imageSrc: "/images/app-dev-2.webp",
      imageAlt: "Mobile Application dev img",
    },
    {
      title: "Enterprise application development",
      icon: "/images/v2/image_name",
      description:
        "Robust enterprise-grade solutions to improve efficiency and collaboration within your organization",
      imageSrc: "/images/app-dev-3.webp",
      imageAlt: "Enterprise application dev img",
    },
    {
      title: "Saas Platform Migration & Support",
      icon: "/images/v2/image_name",
      description:
        "Migrate your software smoothly and securely to the cloud with our expert migration services.",
      imageSrc: "/images/app-dev-4.webp",
      imageAlt: "Saas application dev img",
    },
  ];

  const LowCodeNoCodeAccordionData = [
    {
      title: "Low-Code App Development",
      icon: "/images/v2/image_name",
      description:
        "Build powerful applications using intuitive visual interfaces and pre-built components.",
      imageSrc: "/images/low-code-1.webp",
      imageAlt: "Web dev img",
    },
    {
      title: "No-Code Development",
      icon: "/images/v2/image_name",
      description:
        "Simplify app creation for business users with drag-and-drop functionality and pre-configured workflows.",
      imageSrc: "/images/low-code-2.webp",
      imageAlt: "Mobile Application dev img",
    },
    {
      title: "Low-Code No-Code Platform",
      icon: "/images/v2/image_name",
      description:
        "Leverage our comprehensive platform with everything you need to design, develop, and deploy apps seamlessly.",
      imageSrc: "/images/low-code-3.webp",
      imageAlt: "Enterprise application dev img",
    },
    {
      title: "Low-Code No-Code Solutions",
      icon: "/images/v2/image_name",
      description:
        "We craft tailored solutions that address your unique business challenges, from process automation to data management.",
      imageSrc: "/images/low-code-4.webp",
      imageAlt: "Saas application dev img",
    },
    {
      title: "Low-Code No-Code Software Development Services",
      icon: "/images/v2/image_name",
      description:
        "Our expert developers can bridge the gap between your vision and reality, using code when necessary.",
      imageSrc: "/images/low-code-5.webp",
      imageAlt: "Saas application dev img",
    },
  ];

  const ERPNextDevAccordionData = [
    {
      title: "Custom Module Development",
      icon: "/images/v2/image_name",
      description:
        "Build functionalities unique to your business processes that go beyond ERPNext's default features.",
      imageSrc: "/images/erp-next-1.webp",
      imageAlt: "Custom Module Development img",
    },
    {
      title: "Workflow Automation",
      icon: "/images/v2/image_name",
      description:
        "Streamline complex workflows and eliminate repetitive tasks with custom automation solutions.",
      imageSrc: "/images/erp-next-2.webp",
      imageAlt: "Automation img",
    },
    {
      title: "Seamless Integrations",
      icon: "/images/v2/image_name",
      description:
        "Connect ERPNext to your existing CRM, e-commerce platform, or accounting software for a unified data flow.",
      imageSrc: "/images/erp-next-3.webp",
      imageAlt: "Seamless Integrations img",
    },
    {
      title: "Data Migration & Security",
      icon: "/images/v2/image_name",
      description:
        "Migrate your data smoothly from legacy systems and implement robust security measures to safeguard your information.",
      imageSrc: "/images/erp-next-4.webp",
      imageAlt: "Data Migration img",
    },
    {
      title: "Custom Reporting & Dashboards",
      icon: "/images/v2/image_name",
      description:
        "Gain deeper business insights with custom reports and dashboards tailored to your specific needs.",
      imageSrc: "/images/erp-next-5.webp",
      imageAlt: "Custom Reporting img",
    },
    {
      title: "Comprehensive Support & Maintenance",
      icon: "/images/v2/image_name",
      description:
        "Benefit from expert guidance during implementation, ongoing technical support, and regular system maintenance for optimal performance.",
      imageSrc: "/images/erp-next-6.webp",
      imageAlt: "Comprehensive Support dev img",
    },
  ];

  const BusinessIntelligenceAccordionData = [
    {
      title: "BI Strategy & Roadmap Development",
      icon: "/images/v2/image_name",
      description:
        "We work collaboratively to define your BI goals, assess your data landscape, and create a customized roadmap for success.",
      imageSrc: "/images/bi-1.webp",
      imageAlt: "Custom Module Development img",
    },
    {
      title: "Data Lake & Data Warehouse Architecture",
      icon: "/images/v2/image_name",
      description:
        "We design and implement robust data storage solutions tailored to your specific needs and scalability requirements.",
      imageSrc: "/images/bi-2.webp",
      imageAlt: "Automation img",
    },
    {
      title: "Advanced Data Integration & Cleansing",
      icon: "/images/v2/image_name",
      description:
        "Our experts ensure your data is accurate, consistent, and ready for analysis through cutting-edge integration and cleansing techniques.",
      imageSrc: "https://a.storyblok.com/f/219851/640x505/f19d442ca9/bi-3.webp",
      imageAlt: "Seamless Integrations img",
    },
    {
      title: "Self-Service BI & Data Governance",
      icon: "/images/v2/image_name",
      description:
        "We empower your users with self-service BI tools while establishing robust data governance frameworks for data security and quality.",
      imageSrc: "/images/bi-4.webp",
      imageAlt: "Data Migration img",
    },
    {
      title: "Custom Analytics Dashboard Development",
      icon: "/images/v2/image_name",
      description:
        "Our team creates interactive dashboards tailored to your KPIs, providing real-time insights at your fingertips.",
      imageSrc: "/images/bi-5.webp",
      imageAlt: "Custom Reporting img",
    },
    {
      title: "Predictive Analytics & Machine Learning",
      icon: "/images/v2/image_name",
      description:
        "We leverage advanced analytics and machine learning to uncover hidden patterns, predict future trends, and optimize business processes.",
      imageSrc: "/images/bi-6.webp",
      imageAlt: "Comprehensive Support dev img",
    },
    {
      title: "Power BI & Tableau Expertise",
      icon: "/images/v2/image_name",
      description:
        "Our team is proficient in leading BI platforms like Power BI and Tableau to deliver the best solution for your organization.",
      imageSrc: "/images/bi-7.webp",
      imageAlt: "Comprehensive Support dev img",
    },
  ];

  const FrappeDevAccordionData = [
    {
      title: "Custom Frappe Application Development",
      icon: "/images/v2/image_name",
      description:
        "Our services cover everything you need for Frappe application development. This includes analyzing your needs, designing custom apps, testing them thoroughly, deploying them smoothly, and providing ongoing support. We'll work closely with you to make sure everything fits your needs perfectly, giving your business efficient and reliable solutions.",
      imageSrc: "/images/frapee-1.webp",
      imageAlt: "Custom Frappe Application Development img",
    },
    {
      title: "Frappe ERP Customization",
      icon: "/images/v2/image_name",
      description:
        "Our experts then customize and configure your ERP to match your unique workflows and data requirements. If needed, we'll securely migrate your data from your existing system. Finally, we ensure that your tailored ERP is both secure and optimized for top performance, guaranteeing smooth operations for your business.",
      imageSrc: "/images/frapee-2.webp",
      imageAlt: "Frappe ERP customization img",
    },
    {
      title: "Frappe Module Development",
      icon: "/images/v2/image_name",
      description:
        "Our comprehensive services start with a Functionality Gap Analysis, where we identify any missing features in your Frappe setup. Our skilled developers then design and develop a custom Frappe module to fill these gaps and meet your specific needs.",
      imageSrc: "/images/frapee-3.webp",
      imageAlt: "Frappe Module Dev img",
    },
    {
      title: "Frappe Integration Services",
      icon: "/images/v2/image_name",
      description:
        "Our team focuses on Seamless Integration Development, building secure and effective connections between your Frappe system and chosen applications. We handle Data Mapping & Synchronization to guarantee seamless data flow, eradicating redundancy and silos.",
      imageSrc: "/images/frapee-4.webp",
      imageAlt: "Frappe Integration img",
    },
    {
      title: "Frappe Support and Maintenance",
      icon: "/images/v2/image_name",
      description:
        "Our services include proactive System Monitoring & Updates to maintain performance and security of your Frappe system, with timely implementation of updates. For any issues, our team offers prompt Bug Fixes & Troubleshooting to ensure smooth operation.",
      imageSrc: "/images/frapee-5.webp",
      imageAlt: "Frappe Support and Maintenance mg",
    },
  ];
  const FlutteFlowDevAccordionData = [
    {
      title: "Flutter web development",
      icon: "/images/v2/image_name",
      description:
        "Our experts leverage Flutterflow, a visual development platform, to create stunning and feature-rich web apps with an expedited development process.",
      imageSrc: "/images/flutterflow-1.webp",
      imageAlt: "Flutter Flutter img",
    },
    {
      title: "Flutterflow app development",
      icon: "/images/v2/image_name",
      description:
        "We provide access to a dedicated team of highly skilled Flutter developers who possess in-depth knowledge and experience to bring your web app vision to life.",
      imageSrc: "/images/flutterflow-2.webp",
      imageAlt: "Flutterflow app img",
    },
    {
      title: "Hire dedicated Flutter developers",
      icon: "/images/v2/image_name",
      description:
        "Get access to dedicated developers with proven experience in building successful Flutter projects. Our team is comprised of highly skilled developers who can tackle any development challenge.",
      imageSrc: "/images/flutterflow-3.webp",
      imageAlt: "Hire Flutter developer img",
    },
    {
      title: "MVP development",
      icon: "/images/v2/image_name",
      description:
        "Validate your app concept quickly and efficiently by leveraging our expertise in creating minimum viable products (MVPs).",
      imageSrc: "/images/flutterflow-4.webp",
      imageAlt: "Frappe Integration img",
    },
    {
      title: "Custom app development",
      icon: "/images/v2/image_name",
      description:
        "We don't believe in a one-size-fits-all approach. Our team will craft a bespoke web app tailored to your specific needs and functionalities.",
      imageSrc: "/images/flutterflow-5.webp",
      imageAlt: "Frappe Support and Maintenance img",
    },
    {
      title: "Advanced integrations",
      icon: "/images/v2/image_name",
      description:
        "Seamlessly integrate your web app with essential services like Firebase, Stripe, and third-party APIs to unlock powerful features and functionalities.",
      imageSrc: "/images/flutterflow-6.webp",
      imageAlt: "Advanced integrations img",
    },
  ];
  const AdaloDevAccordionData = [
    {
      title: "Custom Adalo App Development",
      icon: "/images/v2/image_name",
      description:
        "Our experts leverage Adalo, a visual development platform, to create stunning and feature-rich web apps with an expedited development process.",
      imageSrc: "/images/adalo-1.webp",
      imageAlt: "Custom Adalo App Development img",
    },
    {
      title: "UI/UX Design",
      icon: "/images/v2/image_name",
      description:
        "Engaging and user-friendly interfaces that enhance the overall app experience.",
      imageSrc: "/images/adalo-2.webp",
      imageAlt: "UI/UX Design img",
    },
    {
      title: "Integration Services",
      icon: "/images/v2/image_name",
      description:
        "Seamlessly integrate third-party services to enhance functionality.",
      imageSrc: "/images/adalo-3.webp",
      imageAlt: "Integration Services img",
    },
    {
      title: "Maintenance and Support",
      icon: "/images/v2/image_name",
      description:
        "Continuous support is needed to ensure your app remains up-to-date and optimized.",
      imageSrc: "/images/adalo-4.webp",
      imageAlt: "Maintenance and Support img",
    },
  ];

  const showDataBasedOnPathname = {
    "/digital-experience-services/": DigitalExperienceAccordionData,
    "/application-development-services/": ApplicationDevAccordionData,
    "/saas-application-development-services/": SaaSApplicationDevAccordionData,
    "/low-code-no-code-development-services/": LowCodeNoCodeAccordionData,
    "/erp-next-development-services/": ERPNextDevAccordionData,
    "/business-intelligence-services/": BusinessIntelligenceAccordionData,
    "/frappe-development-services/": FrappeDevAccordionData,
    "/flutterflow-development-services/": FlutteFlowDevAccordionData,
    "/adalo-development-services/": AdaloDevAccordionData,
  };

  const showTitleBasedOnPathname = {
    "/application-development-services/": "Our offerings",
    "/adalo-development-services/": "Our offerings",
    "/business-intelligence-services/":
      "Business Intelligence Services by Brilworks",
    "/frappe-development-services/": "Frappe Development Services We Offer",
    "/flutterflow-development-services/":
      "Flutterflow Development Services We Offer",
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
