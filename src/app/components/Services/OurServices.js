import React from "react";
import { useEffect, useState } from "react";
import { scrollEffect } from "../lib/commonFunction";
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
      title: "Generative AI Solutions",
      content:
        "With years of experience in Generative AI Development, our team has worked across various industies. At Brilworks, we utilize state-of-the-art tools in generative AI development with one goal in mind: to revolutionize how businesses operate and innovate.",
      imageSrc: "/images/generative-ai.webp",
      imageAlt: "Generative AI img",
    },
    {
      title: "AI-Based Product Development",
      content:
        "Optimize operations, drive growth, and stay ahead of the curve with our top-tier AI solutions. Our advanced software, powered by cutting-edge Generative AI Development, solves complex problems and provides invaluable insights.",
      imageSrc: "/images/ai-based-product.webp",
      imageAlt: "AI-Based Product dev img",
    },
    {
      title: "Machine Learning Expertise",
      content:
        "Move beyond conventional machine learning approaches. We understand that each business is unique, which is why we collaborate closely with you to develop customized ML models that align with your specific objectives and challenges.",
      imageSrc: "/images/ml-expertise.webp",
      imageAlt: "ML expertise img",
    },
    {
      title: "Computer Vision Solutions",
      content:
        "With our intelligent computer vision solutions object detection, tracking, and image classification are seamlessly integrated to provide your company with unparalleled vision capabilities.",
      imageSrc:
        "https://a.storyblok.com/f/219851/640x562/c8e4275951/computer-vision.webp",
      imageAlt: "Computer vision img",
    },
    {
      title: "Natural Language Processing (NLP)",
      content:
        "Our advanced NLP solutions bridge the gap between systems and humans, automate processes. Leverage cutting-edge AI to gain a competitive edge through data-driven insights powered by our sophisticated NLP technologies.",
      imageSrc: "/images/nlp.webp",
      imageAlt: "Natural lan. processing img",
    },
    {
      title: "AI Chatbot Development",
      content:
        "Enhance your customer support experience effortlessly with AI-powered advanced chatbots. Provide round-the-clock support using state-of-the-art AI technology to ensure personalized assistance and heightened customer satisfaction.",
      imageSrc: "/images/ai-chatbot-dev.webp",
      imageAlt: "AI-chatbot-dev img",
    },
  ];

  const DevOpsAccordionData = [
    {
      title: "DevOps Implementation",
      content:
        "At Brilworks, our DevOps services are designed to guide you through a successful transformation, ensuring efficiency and reliability in your software development lifecycle.",
      imageSrc: "/images/devops-concept-software-development.webp",
      imageAlt: "Devops service img",
    },
    {
      title: "DevOps Automation",
      content:
        "Accelerate your testing, deployments, and feedback loops by designing and implementing robust CI/CD pipelines. Our expertise ensures you deliver value to your customers faster than ever before.",
      imageSrc: "/images/devops-automatic.webp",
      imageAlt: "Devops Automatic img",
    },
    {
      title: "DevOps Services",
      content:
        "Address your specific challenges, from infrastructure as code to containerization and cloud adoption. Our expert team deploys tailored solutions that drive tangible results for your unique requirements.",
      imageSrc: "/images/devops-service.webp",
      imageAlt: "Devops services img",
    },
    {
      title: "DevOps Release Management",
      content:
        "Streamline your release process with automated deployments, rollback plans, and robust testing strategies. We assist you in achieving efficient and reliable releases.",
      imageSrc: "/images/devops-release-mgmt.webp",
      imageAlt: "Devops release mgmt img",
    },
    {
      title: "Continuous Integration & Delivery (CI/CD)",
      content:
        "Construct a seamless CI/CD pipeline integrating testing, builds, and deployments. Foster a culture of continuous improvement, accelerating your release cycles.",
      imageSrc: "/images/devops-ci-cd-delivery.webp",
      imageAlt: "Devops CICD delivery img",
    },
    {
      title: "Deployment Services",
      content:
        "Eliminate manual deployments and ensure consistent, reliable rollouts across all environments. Gain peace of mind knowing that every release is executed flawlessly with our expert guidance.",
      imageSrc: "/images/devops-deployment.webp",
      imageAlt: "Devops service img",
    },
  ];

  const DigitalExperienceAccordionData = [
    {
      title: "Digital Experience Strategy",
      content:
        "We map your unique path to digital success, defining goals, user personas, and a winning roadmap.",
      imageSrc: "/images/digital-ex-img.webp",
      imageAlt: "Digital experience img",
    },
    {
      title: "Experience Design & Development",
      content:
        "Craft seamless and captivating interfaces across web, mobile, and emerging platforms.",
      imageSrc: "/images/digital-experience-dev.webp",
      imageAlt: "Experience design dev img",
    },
    {
      title: "Content Management & Personalization",
      content:
        "Deliver dynamic, targeted content that resonates with every individual.",
      imageSrc: "/images/content-mgmt.webp",
      imageAlt: "Content Mgmt img",
    },
    {
      title: "Marketing Automation & Analytics",
      content:
        "Streamline your campaigns and measure impact with data-driven insights.",
      imageSrc: "/images/marketing-automation.webp",
      imageAlt: "Marketing Automation img",
    },
    {
      title: "Commerce & Payment Integration",
      content:
        "Build frictionless shopping experiences that convert every click.",
      imageSrc: "/images/e-commerce-payment.webp",
      imageAlt: "Commerce Payment img",
    },
    {
      title: "Integration & API Development",
      content:
        "Connect your systems seamlessly for a unified customer journey.",
      imageSrc: "/images/integartion-api-dev.webp",
      imageAlt: "Integration API img",
    },
  ];

  const AWSConsultingAccordionData = [
    {
      title: "AWS Consulting",
      content:
        "Our team of certified AWS professionals possesses deep technical expertise and industry knowledge, enabling us to tailor solutions that meet your unique needs and objectives.",
      imageSrc: "/images/expert-guidance.webp",
      imageAlt: "AWS Consulting img",
    },
    {
      title: "Cloud Migration & Modernization",
      content:
        "Leverage our proven methodologies to seamlessly migrate your on-premises workloads to the cloud, modernize legacy applications, and optimize your existing cloud infrastructure.",
      imageSrc: "/images/cloud-migration.webp",
      imageAlt: "Cloud migration img",
    },
    {
      title: "Architecture & Design",
      content:
        "We craft secure, scalable, and cost-effective architectures that align with your business goals and ensure long-term success on AWS.",
      imageSrc: "/images/architec-design.webp",
      imageAlt: "Architect design img",
    },
    {
      title: "Development & DevOps",
      content:
        "Our skilled developers and DevOps engineers build, deploy, and manage your cloud applications with best practices and automation to streamline operations.",
      imageSrc: "/images/development-devops.webp",
      imageAlt: "Development DevOps img",
    },
    {
      title: "Security & Compliance",
      content:
        "We prioritize your data security and regulatory compliance with robust security solutions and expert guidance on navigating complex compliance requirements.",
      imageSrc: "/images/security-compliance.webp",
      imageAlt: "Security compliance img",
    },
    {
      title: "Cost Optimization",
      content:
        "Achieve optimal cloud spending with our cost optimization strategies, helping you identify and eliminate cost inefficiencies and maximize your ROI.",
      imageSrc: "/images/cost-optimize.webp",
      imageAlt: "Cost Optimization img",
    },
    {
      title: "Managed Services",
      content:
        "Let us handle the ongoing management of your AWS environment, freeing you to focus on your core business while we ensure performance and security.",
      imageSrc: "/images/managed-services.webp",
      imageAlt: "Managed Services img",
    },
    {
      title: "AWS Advisory services",
      content:
        "Focus on innovation while we manage your AWS environment, ensuring peak performance, security, and reliability at all times.",
      imageSrc: "/images/aws-advisory-service.webp",
      imageAlt: "AWS Advisory Services img",
    },
  ];

  const KubernetesConsultingAccordionData = [
    {
      title: "Kubernetes Consultation",
      content:
        "Our expert consultants guide you through every stage, from assessing your readiness to optimizing your deployment. We plan a tailored roadmap, whether it's modernizing legacy apps or building scalable cloud-native solutions.",
      imageSrc: "/images/kubernetes-consultation.webp",
      imageAlt: "Kubernetes consultation img",
    },
    {
      title: "Kubernetes Application Development & Migration",
      content:
        "Build and deploy containerized applications on Kubernetes with expert guidance. Streamline your development process and optimize delivery for efficiency.",
      imageSrc: "/images/kubernetes-app-dev.webp",
      imageAlt: "Kubernetes Application img",
    },
    {
      title: "DevSecOps - Enabling Security & Compliance",
      content:
        "Integrate security and compliance into your DevOps pipeline. Develop secure applications and meet industry regulations with expert assistance, ensuring peace of mind.",
      imageSrc:
        "https://a.storyblok.com/f/219851/640x505/4a2aa5f423/kubernetes-devsec.webp",
      imageAlt: "DevSecOps img",
    },
    {
      title: "Kubernetes Professional Support",
      content:
        "Get 24/7 support from certified Kubernetes professionals. Keep your clusters running smoothly, troubleshoot issues swiftly, and optimize deployments for peak performance.",
      imageSrc: "/images/kubernetes-professional.webp",
      imageAlt: "Development DevOps img",
    },
    {
      title: "Kubernetes Training",
      content:
        "Equip your developers with the knowledge and skills to master Kubernetes. Comprehensive training programs cover all aspects, from fundamental concepts to advanced topics, fostering success with the platform.",
      imageSrc: "/images/kubernetes-training.webp",
      imageAlt: "Security compliance img",
    },
  ];

  const ProductEngineeringAccordionData = [
    {
      title: "Product Conceptualization and Ideation",
      content:
        "Innovation is exciting, but the journey from concept to creation can be complex. We'll partner with you to transform your vision into a clear, actionable plan. We analyze technical feasibility and market trends, ensuring your product is viable and successful in the long run.",
      imageSrc: "/images/pd-1.webp",
      imageAlt: "Product Conceptualization img",
    },
    {
      title: "Prototype Development",
      content:
        "Have a groundbreaking idea for a software product? Don't get stuck in the planning stage. Our rapid prototyping service brings your vision to life – quickly and affordably. We work efficiently to deliver prototypes in a matter of days, not months.",
      imageSrc: "/images/pd-2.webp",
      imageAlt: "Prototype Development img",
    },
    {
      title: "Product Design and Engineering",
      content:
        "We combine user-centric design with robust engineering to create intuitive, scalable, and future-proof software solutions. Our expert designers and engineers collaborate seamlessly to bridge the gap between imagination and innovation.",
      imageSrc: "/images/pd-3.webp",
      imageAlt: "Product Design img",
    },
    {
      title: "Quality Assurance and Testing",
      content:
        "Ship with confidence.  We go beyond functionality testing, ensuring exceptional performance, security, and user experience. Our QA and Testing services meticulously examine your software, identifying and eliminating bugs.",
      imageSrc: "/images/pd-4.webp",
      imageAlt: "Quality Assurance img",
    },
    {
      title: "Post-Launch Support and Maintenance",
      content:
        "Bug fixes, updates, and ongoing optimization - we've got you covered. We keep your software optimized and up-to-date, ensuring peak performance and a seamless user experience.",
      imageSrc: "/images/pd-5.webp",
      imageAlt: "Post-Launch Support img",
    },
    {
      title: "UI/UX development services",
      content:
        "Don't just build software, create unforgettable experiences. Our UI/UX design alchemists transform ideas into intuitive interfaces and captivating user journeys. We stay ahead of design trends, crafting UIs that are not only beautiful but scalable and adaptable.",
      imageSrc: "/images/pd-6.webp",
      imageAlt: "UI/UX development img",
    },
    {
      title: "Application development services",
      content:
        "From concept to creation, we're with you every step of the way. We collaborate closely with you to understand your vision, translate it into a concrete plan, and deliver a final product that exceeds expectations.",
      imageSrc: "/images/pd-7.webp",
      imageAlt: "Application development img",
    },
  ];

  const SaaSApplicationDevAccordionData = [
    {
      title: "Idea productization and brand design",
      content:
        "We help you refine your concept, develop a compelling brand identity, and create a clear roadmap for your SaaS.",
      imageSrc: "/images/saas-1.webp",
      imageAlt: "Idea productization img",
    },
    {
      title: "SaaS consulting",
      content:
        "Expert guidance throughout your SaaS journey, from initial concept to market launch. We help you define your product strategy, identify market fit, and create a winning business model.",
      imageSrc:
        "https://a.storyblok.com/f/219851/640x505/0ccd54d3d2/saas-2.webp",
      imageAlt: "SaaS consulting img",
    },
    {
      title: "SaaS architecture design",
      content:
        "We design scalable and secure architectures that can support your growth and ensure a reliable user experience.",
      imageSrc: "/images/saas-3.webp",
      imageAlt: "SaaS architecture img",
    },
    {
      title: "SaaS application development",
      content:
        "Our skilled developers leverage cutting-edge technologies to build high-performing and secure SaaS applications.",
      imageSrc: "/images/saas-4.webp",
      imageAlt: "SaaS application dev img",
    },
    {
      title: "SaaS Support and maintenance",
      content:
        "Bug fixes, updates, and ongoing optimization - we've got you covered. We keep your software optimized and up-to-date, ensuring peak performance and a seamless user experience.",
      imageSrc: "/images/saas-5.webp",
      imageAlt: "SaaS Support img",
    },
    {
      title: "SaaS Platform migration",
      content:
        "We ensure a smooth transition to your new SaaS home. Our team seamlessly migrates your software from on-premise servers or another platform, minimizing downtime and ensuring a successful move to the cloud.",
      imageSrc: "/images/saas-6.webp",
      imageAlt: "SaaS Platform migration img",
    },
    {
      title: "API development",
      content:
        "We connect your software to the world. Our developers build robust APIs that allow your software to communicate with other applications, fostering data exchange and creating a more integrated ecosystem for your business.",
      imageSrc: "/images/saas-7.webp",
      imageAlt: "API development img",
    },
  ];

  const ApplicationDevAccordionData = [
    {
      title: "Web application development",
      content:
        "Build secure, scalable web apps that streamline your operations and enhance user experiences.",
      imageSrc: "/images/app-dev-1.webp",
      imageAlt: "Web dev img",
    },
    {
      title: "Mobile Application development",
      content:
        "Build secure, scalable web apps that streamline your operations and enhance user experiences.",
      imageSrc: "/images/app-dev-2.webp",
      imageAlt: "Mobile Application dev img",
    },
    {
      title: "Enterprise application development",
      content:
        "Robust enterprise-grade solutions to improve efficiency and collaboration within your organization",
      imageSrc: "/images/app-dev-3.webp",
      imageAlt: "Enterprise application dev img",
    },
    {
      title: "Saas Platform Migration & Support",
      content:
        "Migrate your software smoothly and securely to the cloud with our expert migration services.",
      imageSrc: "/images/app-dev-4.webp",
      imageAlt: "Saas application dev img",
    },
  ];

  const GenerativeAIAccordionData = [
    {
      title: "Generative AI Consulting",
      content:
        "Feeling overwhelmed by the possibilities of generative AI? Our team of experts can help. We will guide you through a strategic assesment, identifying areas where generative AI can deliver most significant impact for your business.",
      imageSrc: "/images/generative-ai-1.webp",
      imageAlt: "Generative ai img",
    },
    {
      title: "Generative AI Model Development",
      content:
        "Don't settle for generic solutions.  Our team of engineers and data scientists builds custom generative AI models designed to address your unique challenges.",
      imageSrc: "/images/generative-ai-2.webp",
      imageAlt: "Mobile Application dev img",
    },
    {
      title: "Generative AI Integration",
      content:
        "Get the most out of your AI investment with seamless integration.  Our team takes care of the technical complexities, ensuring your custom generative AI model integrates smoothly into your existing workflows and systems.",
      imageSrc: "/images/generative-ai-3.webp",
      imageAlt: "Generative AI Integration img",
    },
    {
      title: "Upgrade and maintenance",
      content:
        "Your generative AI model is an investment that needs nurturing.  Our team provides ongoing support and maintenance to ensure your model continues to function at peak performance.",
      imageSrc: "/images/generative-ai-4.webp",
      imageAlt: "Upgrade and maintenance img",
    },
    {
      title: "AI Model fine tuning",
      content:
        "As your business evolves, so should your AI model.  Our experts offer AI model fine-tuning services, meticulously adjusting the model to adapt to new data, user feedback, or changing business objectives.",
      imageSrc: "/images/generative-ai-5.webp",
      imageAlt: "Saas application dev img",
    },
    {
      title: "Generative AI model replication ",
      content:
        "Need your groundbreaking AI model in multiple locations or applications?  Our team can handle generative AI model replication, ensuring your custom solution is efficiently deployed across your entire organization. ",
      imageSrc: "/images/generative-ai-6.webp",
      imageAlt: "Generative replication img",
    },
  ];

  const LowCodeNoCodeAccordionData = [
    {
      title: "Low-Code App Development",
      content:
        "Build powerful applications using intuitive visual interfaces and pre-built components.",
      imageSrc: "/images/low-code-1.webp",
      imageAlt: "Web dev img",
    },
    {
      title: "No-Code Development",
      content:
        "Simplify app creation for business users with drag-and-drop functionality and pre-configured workflows.",
      imageSrc: "/images/low-code-2.webp",
      imageAlt: "Mobile Application dev img",
    },
    {
      title: "Low-Code No-Code Platform",
      content:
        "Leverage our comprehensive platform with everything you need to design, develop, and deploy apps seamlessly.",
      imageSrc: "/images/low-code-3.webp",
      imageAlt: "Enterprise application dev img",
    },
    {
      title: "Low-Code No-Code Solutions",
      content:
        "We craft tailored solutions that address your unique business challenges, from process automation to data management.",
      imageSrc: "/images/low-code-4.webp",
      imageAlt: "Saas application dev img",
    },
    {
      title: "Low-Code No-Code Software Development Services",
      content:
        "Our expert developers can bridge the gap between your vision and reality, using code when necessary.",
      imageSrc: "/images/low-code-5.webp",
      imageAlt: "Saas application dev img",
    },
  ];

  const ERPNextDevAccordionData = [
    {
      title: "Custom Module Development",
      content:
        "Build functionalities unique to your business processes that go beyond ERPNext's default features.",
      imageSrc: "/images/erp-next-1.webp",
      imageAlt: "Custom Module Development img",
    },
    {
      title: "Workflow Automation",
      content:
        "Streamline complex workflows and eliminate repetitive tasks with custom automation solutions.",
      imageSrc: "/images/erp-next-2.webp",
      imageAlt: "Automation img",
    },
    {
      title: "Seamless Integrations",
      content:
        "Connect ERPNext to your existing CRM, e-commerce platform, or accounting software for a unified data flow.",
      imageSrc: "/images/erp-next-3.webp",
      imageAlt: "Seamless Integrations img",
    },
    {
      title: "Data Migration & Security",
      content:
        "Migrate your data smoothly from legacy systems and implement robust security measures to safeguard your information.",
      imageSrc: "/images/erp-next-4.webp",
      imageAlt: "Data Migration img",
    },
    {
      title: "Custom Reporting & Dashboards",
      content:
        "Gain deeper business insights with custom reports and dashboards tailored to your specific needs.",
      imageSrc: "/images/erp-next-5.webp",
      imageAlt: "Custom Reporting img",
    },
    {
      title: "Comprehensive Support & Maintenance",
      content:
        "Benefit from expert guidance during implementation, ongoing technical support, and regular system maintenance for optimal performance.",
      imageSrc: "/images/erp-next-6.webp",
      imageAlt: "Comprehensive Support dev img",
    },
  ];

  const BusinessIntelligenceAccordionData = [
    {
      title: "BI Strategy & Roadmap Development",
      content:
        "We work collaboratively to define your BI goals, assess your data landscape, and create a customized roadmap for success.",
      imageSrc: "/images/bi-1.webp",
      imageAlt: "Custom Module Development img",
    },
    {
      title: "Data Lake & Data Warehouse Architecture",
      content:
        "We design and implement robust data storage solutions tailored to your specific needs and scalability requirements.",
      imageSrc: "/images/bi-2.webp",
      imageAlt: "Automation img",
    },
    {
      title: "Advanced Data Integration & Cleansing",
      content:
        "Our experts ensure your data is accurate, consistent, and ready for analysis through cutting-edge integration and cleansing techniques.",
      imageSrc: "https://a.storyblok.com/f/219851/640x505/f19d442ca9/bi-3.webp",
      imageAlt: "Seamless Integrations img",
    },
    {
      title: "Self-Service BI & Data Governance",
      content:
        "We empower your users with self-service BI tools while establishing robust data governance frameworks for data security and quality.",
      imageSrc: "/images/bi-4.webp",
      imageAlt: "Data Migration img",
    },
    {
      title: "Custom Analytics Dashboard Development",
      content:
        "Our team creates interactive dashboards tailored to your KPIs, providing real-time insights at your fingertips.",
      imageSrc: "/images/bi-5.webp",
      imageAlt: "Custom Reporting img",
    },
    {
      title: "Predictive Analytics & Machine Learning",
      content:
        "We leverage advanced analytics and machine learning to uncover hidden patterns, predict future trends, and optimize business processes.",
      imageSrc: "/images/bi-6.webp",
      imageAlt: "Comprehensive Support dev img",
    },
    {
      title: "Power BI & Tableau Expertise",
      content:
        "Our team is proficient in leading BI platforms like Power BI and Tableau to deliver the best solution for your organization.",
      imageSrc: "/images/bi-7.webp",
      imageAlt: "Comprehensive Support dev img",
    },
  ];

  const FrappeDevAccordionData = [
    {
      title: "Custom Frappe Application Development",
      content:
        "Our services cover everything you need for Frappe application development. This includes analyzing your needs, designing custom apps, testing them thoroughly, deploying them smoothly, and providing ongoing support. We'll work closely with you to make sure everything fits your needs perfectly, giving your business efficient and reliable solutions.",
      imageSrc: "/images/frapee-1.webp",
      imageAlt: "Custom Frappe Application Development img",
    },
    {
      title: "Frappe ERP Customization",
      content:
        "Our experts then customize and configure your ERP to match your unique workflows and data requirements. If needed, we'll securely migrate your data from your existing system. Finally, we ensure that your tailored ERP is both secure and optimized for top performance, guaranteeing smooth operations for your business.",
      imageSrc: "/images/frapee-2.webp",
      imageAlt: "Frappe ERP customization img",
    },
    {
      title: "Frappe Module Development",
      content:
        "Our comprehensive services start with a Functionality Gap Analysis, where we identify any missing features in your Frappe setup. Our skilled developers then design and develop a custom Frappe module to fill these gaps and meet your specific needs.",
      imageSrc: "/images/frapee-3.webp",
      imageAlt: "Frappe Module Dev img",
    },
    {
      title: "Frappe Integration Services",
      content:
        "Our team focuses on Seamless Integration Development, building secure and effective connections between your Frappe system and chosen applications. We handle Data Mapping & Synchronization to guarantee seamless data flow, eradicating redundancy and silos.",
      imageSrc: "/images/frapee-4.webp",
      imageAlt: "Frappe Integration img",
    },
    {
      title: "Frappe Support and Maintenance",
      content:
        "Our services include proactive System Monitoring & Updates to maintain performance and security of your Frappe system, with timely implementation of updates. For any issues, our team offers prompt Bug Fixes & Troubleshooting to ensure smooth operation.",
      imageSrc: "/images/frapee-5.webp",
      imageAlt: "Frappe Support and Maintenance mg",
    },
  ];
  const FlutteFlowDevAccordionData = [
    {
      title: "Flutter web development",
      content:
        "Our experts leverage Flutterflow, a visual development platform, to create stunning and feature-rich web apps with an expedited development process.",
      imageSrc: "/images/flutterflow-1.webp",
      imageAlt: "Flutter Flutter img",
    },
    {
      title: "Flutterflow app development",
      content:
        "We provide access to a dedicated team of highly skilled Flutter developers who possess in-depth knowledge and experience to bring your web app vision to life.",
      imageSrc: "/images/flutterflow-2.webp",
      imageAlt: "Flutterflow app img",
    },
    {
      title: "Hire dedicated Flutter developers",
      content:
        "Get access to dedicated developers with proven experience in building successful Flutter projects. Our team is comprised of highly skilled developers who can tackle any development challenge.",
      imageSrc: "/images/flutterflow-3.webp",
      imageAlt: "Hire Flutter developer img",
    },
    {
      title: "MVP development",
      content:
        "Validate your app concept quickly and efficiently by leveraging our expertise in creating minimum viable products (MVPs).",
      imageSrc: "/images/flutterflow-4.webp",
      imageAlt: "Frappe Integration img",
    },
    {
      title: "Custom app development",
      content:
        "We don't believe in a one-size-fits-all approach. Our team will craft a bespoke web app tailored to your specific needs and functionalities.",
      imageSrc: "/images/flutterflow-5.webp",
      imageAlt: "Frappe Support and Maintenance img",
    },
    {
      title: "Advanced integrations",
      content:
        "Seamlessly integrate your web app with essential services like Firebase, Stripe, and third-party APIs to unlock powerful features and functionalities.",
      imageSrc: "/images/flutterflow-6.webp",
      imageAlt: "Advanced integrations img",
    },
  ];
  const AdaloDevAccordionData = [
    {
      title: "Custom Adalo App Development",
      content:
        "Our experts leverage Adalo, a visual development platform, to create stunning and feature-rich web apps with an expedited development process.",
      imageSrc: "/images/adalo-1.webp",
      imageAlt: "Custom Adalo App Development img",
    },
    {
      title: "UI/UX Design",
      content:
        "Engaging and user-friendly interfaces that enhance the overall app experience.",
      imageSrc: "/images/adalo-2.webp",
      imageAlt: "UI/UX Design img",
    },
    {
      title: "Integration Services",
      content:
        "Seamlessly integrate third-party services to enhance functionality.",
      imageSrc: "/images/adalo-3.webp",
      imageAlt: "Integration Services img",
    },
    {
      title: "Maintenance and Support",
      content:
        "Continuous support is needed to ensure your app remains up-to-date and optimized.",
      imageSrc: "/images/adalo-4.webp",
      imageAlt: "Maintenance and Support img",
    },
  ];

  const showDataBasedOnPathname = {
    "/ai-ml-development-services/": AIMLAccordionData,
    "/devops-consulting-services/": DevOpsAccordionData,
    "/digital-experience-services/": DigitalExperienceAccordionData,
    "/aws-consulting-services/": AWSConsultingAccordionData,
    "/kubernetes-consulting-services/": KubernetesConsultingAccordionData,
    "/product-engineering-development-services/":
      ProductEngineeringAccordionData,
    "/application-development-services/": ApplicationDevAccordionData,
    "/saas-application-development-services/": SaaSApplicationDevAccordionData,
    "/generative-ai-development-services/": GenerativeAIAccordionData,
    "/low-code-no-code-development-services/": LowCodeNoCodeAccordionData,
    "/erp-next-development-services/": ERPNextDevAccordionData,
    "/business-intelligence-services/": BusinessIntelligenceAccordionData,
    "/frappe-development-services/": FrappeDevAccordionData,
    "/flutterflow-development-services/": FlutteFlowDevAccordionData,
    "/adalo-development-services/": AdaloDevAccordionData,
  };

  const showTitleBasedOnPathname = {
    "/kubernetes-consulting-services/":
      "Kubernetes Consulting Services by Brilworks",
    "/product-engineering-development-services/":
      "Our Product Development Services",
    "/application-development-services/": "Our offerings",
    "/adalo-development-services/": "Our offerings",
    "/generative-ai-development-services/":
      "Our Generative AI Development Services",
    "/business-intelligence-services/":
      "Business Intelligence Services by Brilworks",
    "/frappe-development-services/": "Frappe Development Services We Offer",
    "/flutterflow-development-services/":
      "Flutterflow Development Services We Offer",
  };

  const title = showTitleBasedOnPathname[pathname] || "Our Services";
  const servicesAccordionData = showDataBasedOnPathname[pathname] || {};

  return (
    <div
      className={`container max-w-[1440px] main-section-padding mx-auto ${
        pathname === "/digital-experience-services/" ||
        pathname === "/aws-consulting-services/" ||
        pathname === "/kubernetes-consulting-services/" ||
        pathname === "/product-enginnering-development-services/"
          ? "xl:!-mt-[15%]"
          : ""
      }`}
    >
      <div className="reveal">
        <h2 className="md:text-center text-left ml-4 xl:pb-10 md:pb-6 pb-4">
          {title}
        </h2>
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
