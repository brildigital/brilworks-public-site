import "../../styles/Homepage.scss";
import React from "react";
import { useEffect, useState } from "react";
import { scrollEffect } from "../lib/commonfunction";
import Image from "next/image";
import AccordionCustomIcon from "../Common/AccordionCustomIcon";
import { usePathname } from "next/navigation";

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

  const AIMLAccordionData = [
    {
      title: "1. Generative AI Solutions",
      content:
        "With years of experience in Generative AI Development, our team has worked across various industies. At Brilworks, we utilize state-of-the-art tools in generative AI development with one goal in mind: to revolutionize how businesses operate and innovate.",
      imageSrc: "/images/generative-ai.webp",
      imageAlt: "Generative AI img",
    },
    {
      title: "2. AI-Based Product Development",
      content:
        "Optimize operations, drive growth, and stay ahead of the curve with our top-tier AI solutions. Our advanced software, powered by cutting-edge Generative AI Development, solves complex problems and provides invaluable insights.",
      imageSrc: "/images/ai-based-product.webp",
      imageAlt: "AI-Based Product dev img",
    },
    {
      title: "3. Machine Learning Expertise",
      content:
        "Move beyond conventional machine learning approaches. We understand that each business is unique, which is why we collaborate closely with you to develop customized ML models that align with your specific objectives and challenges.",
      imageSrc: "/images/ml-expertise.webp",
      imageAlt: "ML expertise img",
    },
    {
      title: "4. Computer Vision Solutions",
      content:
        "With our intelligent computer vision solutions object detection, tracking, and image classification are seamlessly integrated to provide your company with unparalleled vision capabilities.",
      imageSrc: "/images/computer-vision.webp",
      imageAlt: "Computer vision img",
    },
    {
      title: "5. Natural Language Processing (NLP)",
      content:
        "Our advanced NLP solutions bridge the gap between systems and humans, automate processes. Leverage cutting-edge AI to gain a competitive edge through data-driven insights powered by our sophisticated NLP technologies.",
      imageSrc: "/images/nlp.webp",
      imageAlt: "Natural lan. processing img",
    },
    {
      title: "6. AI Chatbot Development",
      content:
        "Enhance your customer support experience effortlessly with AI-powered advanced chatbots. Provide round-the-clock support using state-of-the-art AI technology to ensure personalized assistance and heightened customer satisfaction.",
      imageSrc: "/images/ai-chatbot-dev.webp",
      imageAlt: "AI-chatbot-dev img",
    },
  ];

  const DevOpsAccordionData = [
    {
      title: "1. DevOps Implementation",
      content:
        "At Brilworks, our DevOps services are designed to guide you through a successful transformation, ensuring efficiency and reliability in your software development lifecycle.",
      imageSrc: "/images/devops-concept-software-development.webp",
      imageAlt: "Devops service img",
    },
    {
      title: "2. DevOps Automation",
      content:
        "Accelerate your testing, deployments, and feedback loops by designing and implementing robust CI/CD pipelines. Our expertise ensures you deliver value to your customers faster than ever before.",
      imageSrc: "/images/devops-automatic.webp",
      imageAlt: "Devops Automatic img",
    },
    {
      title: "3. DevOps Services",
      content:
        "Address your specific challenges, from infrastructure as code to containerization and cloud adoption. Our expert team deploys tailored solutions that drive tangible results for your unique requirements.",
      imageSrc: "/images/devops-service.webp",
      imageAlt: "Devops services img",
    },
    {
      title: "4. DevOps Release Management",
      content:
        "Streamline your release process with automated deployments, rollback plans, and robust testing strategies. We assist you in achieving efficient and reliable releases.",
      imageSrc: "/images/devops-release-mgmt.webp",
      imageAlt: "Devops release mgmt img",
    },
    {
      title: "5. Continuous Integration & Delivery (CI/CD)",
      content:
        "Construct a seamless CI/CD pipeline integrating testing, builds, and deployments. Foster a culture of continuous improvement, accelerating your release cycles.",
      imageSrc: "/images/devops-ci-cd-delivery.webp",
      imageAlt: "Devops CICD delivery img",
    },
    {
      title: "6. Deployment Services",
      content:
        "Eliminate manual deployments and ensure consistent, reliable rollouts across all environments. Gain peace of mind knowing that every release is executed flawlessly with our expert guidance.",
      imageSrc: "/images/devops-deployment.webp",
      imageAlt: "Devops service img",
    },
  ];

  const DigitalExperienceAccordionData = [
    {
      title: "1. Digital Experience Strategy",
      content:
        "We map your unique path to digital success, defining goals, user personas, and a winning roadmap.",
      imageSrc: "/images/digital-ex-img.webp",
      imageAlt: "Digital experience img",
    },
    {
      title: "2. Experience Design & Development",
      content:
        "We map your unique path to digital success, defining goals, user personas, and a winning roadmap.",
      imageSrc: "/images/digital-ex-img.webp",
      imageAlt: "Digital experience img",
    },
    {
      title: "3. Content Management & Personalization",
      content:
        "We map your unique path to digital success, defining goals, user personas, and a winning roadmap.",
      imageSrc: "/images/digital-ex-img.webp",
      imageAlt: "Digital experience img",
    },
    {
      title: "4. Marketing Automation & Analytics",
      content:
        "We map your unique path to digital success, defining goals, user personas, and a winning roadmap.",
      imageSrc: "/images/digital-ex-img.webp",
      imageAlt: "Digital experience img",
    },
    {
      title: "5. Commerce & Payment Integration",
      content:
        "We map your unique path to digital success, defining goals, user personas, and a winning roadmap.",
      imageSrc: "/images/digital-ex-img.webp",
      imageAlt: "Digital experience img",
    },
    {
      title: "6. Integration & API Development",
      content:
        "We map your unique path to digital success, defining goals, user personas, and a winning roadmap.",
      imageSrc: "/images/digital-ex-img.webp",
      imageAlt: "Digital experience img",
    },
  ];

  const showDataBasedOnPathname = {
    "/ai-ml-development-services/": AIMLAccordionData,
    "/devops-consulting-services/": DevOpsAccordionData,
    "/digital-experience-services/": DigitalExperienceAccordionData,
  };

  return (
    <div className="container mx-auto sm:w-[90%] w-[100%] lg:mt-5">
      <h2 className="md:text-center text-left ml-4 md:py-10 py-6">
        Our Services
      </h2>
      <div className="px-[15px] md:pb-[52px] pb-10 reveal">
        <div className="homepage-work-domain">
          <div className="flex flex-wrap">
            <div className="lg:w-6/12 w-full">
              <div className="tab-content d-flex justify-content-center align-items-center h-100">
                <div>
                  <div className="services_img md:pt-8">
                    {showDataBasedOnPathname[pathname].map(
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
              {showDataBasedOnPathname[pathname].map(
                ({ title, content }, index) => (
                  <AccordionCustomIcon
                    index={index + 1}
                    key={index + 1}
                    title={title}
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
  );
};

export default OurServices;
