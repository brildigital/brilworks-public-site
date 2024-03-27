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
        "Craft seamless and captivating interfaces across web, mobile, and emerging platforms.",
      imageSrc: "/images/digital-experience-dev.webp",
      imageAlt: "Experience design dev img",
    },
    {
      title: "3. Content Management & Personalization",
      content:
        "Deliver dynamic, targeted content that resonates with every individual.",
      imageSrc: "/images/content-mgmt.webp",
      imageAlt: "Content Mgmt img",
    },
    {
      title: "4. Marketing Automation & Analytics",
      content:
        "Streamline your campaigns and measure impact with data-driven insights.",
      imageSrc: "/images/marketing-automation.webp",
      imageAlt: "Marketing Automation img",
    },
    {
      title: "5. Commerce & Payment Integration",
      content:
        "Build frictionless shopping experiences that convert every click.",
      imageSrc: "/images/e-commerce-payment.webp",
      imageAlt: "Commerce Payment img",
    },
    {
      title: "6. Integration & API Development",
      content:
        "Connect your systems seamlessly for a unified customer journey.",
      imageSrc: "/images/integartion-api-dev.webp",
      imageAlt: "Integration API img",
    },
  ];

  const AWSConsultingAccordionData = [
    {
      title: "1. Expert Guidance",
      content:
        "Our team of certified AWS professionals possesses deep technical expertise and industry knowledge, enabling us to tailor solutions that meet your unique needs and objectives.",
      imageSrc: "/images/expert-guidance.webp",
      imageAlt: "Expert guidance img",
    },
    {
      title: "2. Cloud Migration & Modernization",
      content:
        "Leverage our proven methodologies to seamlessly migrate your on-premises workloads to the cloud, modernize legacy applications, and optimize your existing cloud infrastructure.",
      imageSrc: "/images/cloud-migration.webp",
      imageAlt: "Cloud migration img",
    },
    {
      title: "3. Architecture & Design",
      content:
        "We craft secure, scalable, and cost-effective architectures that align with your business goals and ensure long-term success on AWS.",
      imageSrc: "/images/architec-design.webp",
      imageAlt: "Architect design img",
    },
    {
      title: "4. Development & DevOps",
      content:
        "Our skilled developers and DevOps engineers build, deploy, and manage your cloud applications with best practices and automation to streamline operations.",
      imageSrc: "/images/development-devops.webp",
      imageAlt: "Development DevOps img",
    },
    {
      title: "5. Security & Compliance",
      content:
        "We prioritize your data security and regulatory compliance with robust security solutions and expert guidance on navigating complex compliance requirements.",
      imageSrc: "/images/security-compliance.webp",
      imageAlt: "Security compliance img",
    },
    {
      title: "6. Cost Optimization",
      content:
        "Achieve optimal cloud spending with our cost optimization strategies, helping you identify and eliminate cost inefficiencies and maximize your ROI.",
      imageSrc: "/images/cost-optimize.webp",
      imageAlt: "Cost Optimization img",
    },
    {
      title: "7. Managed Services",
      content:
        "Let us handle the ongoing management of your AWS environment, freeing you to focus on your core business while we ensure performance and security.",
      imageSrc: "/images/managed-services.webp",
      imageAlt: "Managed Services img",
    },
  ];

  const KubernatesConsultingAccordionData = [
    {
      title: "1. Kubernetes Consultation",
      content:
        "Our expert consultants guide you through every stage, from assessing your readiness to optimizing your deployment. We plan a tailored roadmap, whether it's modernizing legacy apps or building scalable cloud-native solutions.",
      imageSrc: "/images/kubernate-consultation.webp",
      imageAlt: "Kubernetes consultation img",
    },
    {
      title: "2. Kubernetes Application Development & Migration",
      content:
        "Build and deploy containerized applications on Kubernetes with expert guidance. Streamline your development process and optimize delivery for efficiency.",
      imageSrc: "/images/kubernate-app-dev.webp",
      imageAlt: "Kubernetes Application img",
    },
    {
      title: "3. DevSecOps - Enabling Security & Compliance",
      content:
        "Integrate security and compliance into your DevOps pipeline. Develop secure applications and meet industry regulations with expert assistance, ensuring peace of mind.",
      imageSrc: "/images/kubernates-devsec.webp",
      imageAlt: "DevSecOps img",
    },
    {
      title: "4. Kubernetes Professional Support",
      content:
        "Get 24/7 support from certified Kubernetes professionals. Keep your clusters running smoothly, troubleshoot issues swiftly, and optimize deployments for peak performance.",
      imageSrc: "/images/kubernate-professional.webp",
      imageAlt: "Development DevOps img",
    },
    {
      title: "5. Kubernetes Training",
      content:
        "Equip your developers with the knowledge and skills to master Kubernetes. Comprehensive training programs cover all aspects, from fundamental concepts to advanced topics, fostering success with the platform.",
      imageSrc: "/images/kubernate-training.webp",
      imageAlt: "Security compliance img",
    },
  ];

  const ProductEngineeringAccordionData = [
    {
      title: "1. Product Conceptualization and Ideation",
      content:
        "Innovation is exciting, but the journey from concept to creation can be complex. We'll partner with you to transform your vision into a clear, actionable plan. We analyze technical feasibility and market trends, ensuring your product is viable and successful in the long run.",
      imageSrc: "/images/pd-1.webp",
      imageAlt: "Product Conceptualization img",
    },
    {
      title: "2. Prototype Development",
      content:
        "Have a groundbreaking idea for a software product? Don't get stuck in the planning stage. Our rapid prototyping service brings your vision to life – quickly and affordably. We work efficiently to deliver prototypes in a matter of days, not months.",
      imageSrc: "/images/pd-2.webp",
      imageAlt: "Prototype Development img",
    },
    {
      title: "3. Product Design and Engineering",
      content:
        "We combine user-centric design with robust engineering to create intuitive, scalable, and future-proof software solutions. Our expert designers and engineers collaborate seamlessly to bridge the gap between imagination and innovation.",
      imageSrc: "/images/pd-3.webp",
      imageAlt: "Product Design img",
    },
    {
      title: "4. Quality Assurance and Testing",
      content:
        "Ship with confidence.  We go beyond functionality testing, ensuring exceptional performance, security, and user experience. Our QA and Testing services meticulously examine your software, identifying and eliminating bugs.",
      imageSrc: "/images/pd-4.webp",
      imageAlt: "Quality Assurance img",
    },
    {
      title: "5. Post-Launch Support and Maintenance",
      content:
        "Bug fixes, updates, and ongoing optimization - we've got you covered. We keep your software optimized and up-to-date, ensuring peak performance and a seamless user experience.",
      imageSrc: "/images/pd-5.webp",
      imageAlt: "Post-Launch Support img",
    },
    {
      title: "6. UI/UX development services",
      content:
        "Don't just build software, create unforgettable experiences. Our UI/UX design alchemists transform ideas into intuitive interfaces and captivating user journeys. We stay ahead of design trends, crafting UIs that are not only beautiful but scalable and adaptable.",
      imageSrc: "/images/pd-6.webp",
      imageAlt: "UI/UX development img",
    },
    {
      title: "7. Application development services",
      content:
        "From concept to creation, we're with you every step of the way. We collaborate closely with you to understand your vision, translate it into a concrete plan, and deliver a final product that exceeds expectations.",
      imageSrc: "/images/pd-7.webp",
      imageAlt: "Application development img",
    },
  ];

  const SaaSApplicationDevAccordionData = [
    {
      title: "1. Idea productization and brand design",
      content:
        "We help you refine your concept, develop a compelling brand identity, and create a clear roadmap for your SaaS.",
      imageSrc: "/images/saas-1.webp",
      imageAlt: "Idea productization img",
    },
    {
      title: "2. SaaS consulting",
      content:
        "Expert guidance throughout your SaaS journey, from initial concept to market launch. We help you define your product strategy, identify market fit, and create a winning business model.",
      imageSrc: "/images/saas-2.webp",
      imageAlt: "SaaS consulting img",
    },
    {
      title: "3. SaaS architecture design",
      content:
        "We design scalable and secure architectures that can support your growth and ensure a reliable user experience.",
      imageSrc: "/images/saas-3.webp",
      imageAlt: "SaaS architecture img",
    },
    {
      title: "4. SaaS application development",
      content:
        "Our skilled developers leverage cutting-edge technologies to build high-performing and secure SaaS applications.",
      imageSrc: "/images/saas-4.webp",
      imageAlt: "SaaS application dev img",
    },
    {
      title: "5. SaaS Support and maintenance",
      content:
        "Bug fixes, updates, and ongoing optimization - we've got you covered. We keep your software optimized and up-to-date, ensuring peak performance and a seamless user experience.",
      imageSrc: "/images/saas-5.webp",
      imageAlt: "SaaS Support img",
    },
    {
      title: "6. SaaS Platform migration",
      content:
        "We ensure a smooth transition to your new SaaS home. Our team seamlessly migrates your software from on-premise servers or another platform, minimizing downtime and ensuring a successful move to the cloud.",
      imageSrc: "/images/saas-6.webp",
      imageAlt: "SaaS Platform migration img",
    },
    {
      title: "7. API development",
      content:
        "We connect your software to the world. Our developers build robust APIs that allow your software to communicate with other applications, fostering data exchange and creating a more integrated ecosystem for your business.",
      imageSrc: "/images/saas-7.webp",
      imageAlt: "API development img",
    },
  ];

  const ApplicationDevAccordionData = [
    {
      title: "1. Web application development",
      content:
        "Build secure, scalable web apps that streamline your operations and enhance user experiences.",
      imageSrc: "/images/app-dev-1.webp",
      imageAlt: "Web dev img",
    },
    {
      title: "2. Mobile Application development",
      content:
        "Build secure, scalable web apps that streamline your operations and enhance user experiences.",
      imageSrc: "/images/app-dev-2.webp",
      imageAlt: "Mobile Application dev img",
    },
    {
      title: "3. Enterprise application development",
      content:
        "Robust enterprise-grade solutions to improve efficiency and collaboration within your organization",
      imageSrc: "/images/app-dev-3.webp",
      imageAlt: "Enterprise application dev img",
    },
    {
      title: "4. Saas Platform Migration & Support",
      content:
        "Migrate your software smoothly and securely to the cloud with our expert migration services.",
      imageSrc: "/images/app-dev-4.webp",
      imageAlt: "Saas application dev img",
    },
  ];

  const showDataBasedOnPathname = {
    "/ai-ml-development-services/": AIMLAccordionData,
    "/devops-consulting-services/": DevOpsAccordionData,
    "/digital-experience-services/": DigitalExperienceAccordionData,
    "/aws-consulting-services/": AWSConsultingAccordionData,
    "/kubernates-consulting-services/": KubernatesConsultingAccordionData,
    "/product-engineering-development-services/":
      ProductEngineeringAccordionData,
    "/application-development-services/": ApplicationDevAccordionData,
    "/saas-application-development-services/": SaaSApplicationDevAccordionData,
  };

  return (
    <div
      className={`container mx-auto sm:w-[90%] w-[100%] lg:mt-5 ${
        pathname === "/digital-experience-services/" ||
        pathname === "/aws-consulting-services/" ||
        pathname === "/kubernates-consulting-services/" ||
        pathname === "/product-enginnering-development-services/"
          ? "xl:!-mt-[15%]"
          : ""
      }`}
    >
      <div className="px-[15px] md:pb-[52px] pb-10 reveal">
        <h2 className="md:text-center text-left ml-4 md:py-10 py-6">
          {pathname === "/kubernates-consulting-services/" ? (
            "Kubernetes Consulting Services by Brilworks"
          ) : (
            <>
              {pathname === "/product-engineering-development-services/" ||
              pathname === "/saas-application-development-services/" ? (
                "Our Product Development Services"
              ) : (
                <>
                  {pathname === "/application-development-services/"
                    ? "Our offerings"
                    : "Our Services"}
                </>
              )}
            </>
          )}
        </h2>
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
