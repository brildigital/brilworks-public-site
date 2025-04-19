"use client";
import dynamic from "next/dynamic";
import ServiceHeroSection from "./ServiceHeroSection";
import ServicesSection from "../Common/ServicesSection";

const UseCases = dynamic(() => import("./UseCases"));
const CTASection = dynamic(() => import("../Common/CTASection"));
const Honors = dynamic(() => import("../Homepage/Honors"));
const TechStackWeUse = dynamic(() => import("./TechStackWeUse"));
const SeeingBelieving = dynamic(() => import("../Homepage/SeeingBelieving"));
const HomePageBlogs = dynamic(() => import("../Homepage/HomePageBlogs"));
const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));
const MultipleCardInGrid = dynamic(() =>
  import("../Common/MultipleCardInGrid")
);
const MultipleCardWithIconBG = dynamic(() =>
  import("../Common/MultipleCardWithIconBG")
);
const ServicesFAQ = dynamic(() => import("./ServicesFAQ"));

const AIMLService = () => {
  const aiMLServices = {
    title: "Our Services",
    servicesList: [
      {
        title: "Generative AI Solutions",
        value: "ai-ml-service-1",
        description:
          "With years of experience in Generative AI Development, our team has worked across various industies. At Brilworks, we utilize state-of-the-art tools in generative AI development with one goal in mind: to revolutionize how businesses operate and innovate.",
        imageSrc: "/images/v2/gen-ai-solution.webp",
        imageAlt: "Generative AI img",
      },
      {
        title: "AI-Based Product Development",
        value: "ai-ml-service-2",
        description:
          "Optimize operations, drive growth, and stay ahead of the curve with our top-tier AI solutions. Our advanced software, powered by cutting-edge Generative AI Development, solves complex problems and provides invaluable insights.",
        imageSrc: "/images/v2/ai-based-product-development.webp",
        imageAlt: "AI-Based Product dev img",
      },
      {
        title: "Machine Learning Expertise",
        value: "ai-ml-service-3",
        description:
          "Move beyond conventional machine learning approaches. We understand that each business is unique, which is why we collaborate closely with you to develop customized ML models that align with your specific objectives and challenges.",
        imageSrc: "/images/v2/machine-learning-expertise.webp",
        imageAlt: "ML expertise img",
      },
      {
        title: "Computer Vision Solutions",
        value: "ai-ml-service-4",
        description:
          "With our intelligent computer vision solutions object detection, tracking, and image classification are seamlessly integrated to provide your company with unparalleled vision capabilities.",
        imageSrc: "/images/v2/computer-vision-solutions.webp",
        imageAlt: "Computer vision img",
      },
      {
        title: "Natural Language Processing (NLP)",
        value: "ai-ml-service-5",
        description:
          "Our advanced NLP solutions bridge the gap between systems and humans, automate processes. Leverage cutting-edge AI to gain a competitive edge through data-driven insights powered by our sophisticated NLP technologies.",
        imageSrc: "/images/v2/natural-language-processing-nlp.webp",
        imageAlt: "Natural lan. processing img",
      },
      {
        title: "AI Chatbot Development",
        value: "ai-ml-service-6",
        description:
          "Enhance your customer support experience effortlessly with AI-powered advanced chatbots. Provide round-the-clock support using state-of-the-art AI technology to ensure personalized assistance and heightened customer satisfaction.",
        imageSrc: "/images/v2/ai-chatbot-development.webp",
        imageAlt: "AI-chatbot-dev img",
      },
    ],
  };

  const aiMLKeyBenefits = [
    {
      title: "Customized Solutions",
      icon: "/images/v2/fi_8869087.svg",
      imageAlt: "customized-icon",
      description:
        "We collaborate closely with you to understand your unique challenges and goals, to develop tailored AI/ML models that address your specific needs.",
    },
    {
      title: "Enhanced Efficiency",
      icon: "/images/v2/transparent.svg",
      imageAlt: "efficiency-icon",
      description:
        "Repetitive tasks become a thing of the past. Our top AI software automate solutions to free up your team's valuable time and resources for higher-level pursuits.",
    },
    {
      title: "Predictive Advantage",
      icon: "/images/v2/fi_17976177.svg",
      imageAlt: "advantage-icon",
      description:
        "Gain valuable foresight into future trends and customer behaviour. Our models analyze historical data to predict potential risks and opportunities, positioning you for proactive action.",
    },
    {
      title: "Scalability and Adaptability",
      icon: "/images/v2/scale-project.svg",
      imageAlt: "scalability-icon",
      description:
        "Built with the future in mind, our AI/ML solutions seamlessly adapt to your evolving business needs, ensuring sustained success.",
    },
    {
      title: "Transparent and Ethical Development",
      icon: "/images/v2/dedicates-no-distraction.svg",
      imageAlt: "transparent-icon",
      description:
        "Committed to responsible practices, we uphold stringent ethical guidelines and maintain transparency throughout the development process.",
    },
    {
      title: "Dedicated Expertise and Support",
      icon: "/images/v2/fi_11478510.svg",
      imageAlt: "dedicated-icon",
      description:
        "Benefit from our team of experienced professionals who provide ongoing support and guidance throughout every stage of the journey.",
    },
  ];

  const whyChooseUsALMLData = {
    title: "Why Choose Brilworks?",
    benefits: [
      {
        title: "Cost-Effective Excellence",
        icon: "/images/v2/cost-efficient.svg",
        description:
          "Cost-effective e-solutions that deliver maximum value for your investment.",
      },
      {
        title: "Diverse Portfolio",
        icon: "/images/v2/fi_942799.svg",
        description:
          "A diverse portfolio of over 120 successfully developed applications across various industries.",
      },
      {
        title: "Proven Expertise",
        icon: "/images/v2/dediated-resource.svg",
        description:
          "Proven expertise from our seasoned professionals with over 8 years of experience.",
      },
      {
        title: "Client-Centric Approach",
        icon: "/images/v2/client-centric-icon.svg",
        description:
          " A client-centric approach that prioritizes your unique needs and fosters long-term partnerships.",
      },
      {
        title: "Innovative Solution",
        icon: "/images/v2/fi_8869087.svg",
        description:
          "Innovative solutions that leverage emerging technologies to exceed industry standards.",
      },
      {
        title: "Dedicated Support",
        icon: "/images/v2/fi_8623753.svg",
        description:
          "  Dedicated support to ensure smooth integration, troubleshooting and updates for optimal software performance.",
      },
    ],
  };

  return (
    <>
      <ServiceHeroSection
        title="Advance Your Business with AI/ML and Computer Vision"
        description="We are pioneering the future of AI with our generative AI solutions. We are not just another AI company; we are a team of passionate experts who craft bespoke AI applications tailored to your unique needs."
        buttonText="Let’s Get Started"
        imageSrc="/images/v2/ai-ml-service-banner.webp"
      />
      <ServicesSection sectionId="ai-ml-service" serviceData={aiMLServices} />
      <UseCases />
      <MultipleCardInGrid title="Key Benefits" cardData={aiMLKeyBenefits} />
      <Honors />
      <CTASection
        titleClass="md:w-[70%]"
        title="Don't let cost hold you back. Our industry-leading AI/ML services are within reach."
        buttonText="Let's Get Started"
      />
      <TechStackWeUse />
      <MultipleCardWithIconBG
        bgClass="bg-sectionBG"
        data={whyChooseUsALMLData}
      />
      <ClientReviews />
      <SeeingBelieving />
      <HomePageBlogs />
      <ServicesFAQ />
    </>
  );
};

export default AIMLService;
