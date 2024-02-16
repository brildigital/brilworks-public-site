"use client";
import { useState } from "react";
import FAQAccordion from "../Common/FAQAccordion";
import { usePathname } from "next/navigation";

const ServicesFAQ = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const AIMLFAQData = [
    {
      question: "1. What services does Brilworks offer in AI/ML development?",
      answer:
        "Brilworks offers comprehensive AI/ML development services covering generative AI solutions, AI-based product development, machine learning expertise, computer vision solutions, natural language processing (NLP), and AI chatbot development.",
    },
    {
      question: "2. How does Brilworks approach Generative AI Solutions?",
      answer:
        "Brilworks leverages state-of-the-art tools in generative AI development to revolutionize business operations and innovation across various industries, ensuring cutting-edge solutions tailored to each client's needs.",
    },
    {
      question:
        "3. Can Brilworks customize AI/ML models for specific business objectives?",
      answer:
        "Yes, we collaborate closely with clients to develop customized ML models that align with their unique objectives and challenges, ensuring tailored solutions for maximum impact.",
    },
    {
      question:
        "4. What are the key benefits of Brilworks' AI/ML development services?",
      answer:
        "Our services offer enhanced efficiency through automation, predictive advantage through data-driven insights, scalability, and adaptability for evolving business needs, and a commitment to transparent and ethical development practices.",
    },

    {
      question:
        "5. How does Brilworks support its clients throughout the development process?",
      answer:
        "Our team of experienced professionals provides dedicated expertise and support at every stage of the journey, ensuring clients receive ongoing guidance and assistance to achieve their goals.",
    },
    {
      question:
        "6. How can I get started with Brilworks' AI/ML development services?",
      answer:
        "To get started, simply schedule a consultation with our team to discuss your aspirations and how our industry-leading AI/ML services can transform your business.",
    },
    {
      question:
        "7. How does Brilworks ensure ethical AI development practices?",
      answer:
        "We uphold stringent ethical guidelines and maintain transparency throughout the development process, ensuring responsible AI solutions that prioritize ethical considerations.",
    },
    {
      question:
        "8. Can Brilworks' AI/ML solutions be adapted to different industries? ",
      answer:
        "Yes, our AI/ML solutions are designed to be adaptable to various industries, including finance, healthcare, media & entertainment, retail & e-commerce, education, logistics, and marketing, among others.",
    },
  ];
  const DigitalExperienceFAQData = [
    {
      question:
        "1. What's the difference between digital experience services and solutions?",
      answer:
        "Services encompass the human expertise and collaboration involved in crafting your digital experience, while solutions refer to the specific software and tools used to implement it. Brilworks offers both, ensuring a holistic approach to your digital transformation.",
    },
    {
      question:
        "2. What specific types of digital experience solutions do you offer?",
      answer:
        "We offer a wide range of solutions, from custom web and mobile apps to content management systems, chatbots, and marketing automation platforms. We'll work with you to identify the right solution for your unique needs.",
    },
    {
      question: "3. How much do your services cost?",
      answer:
        "Our pricing depends on the scope and complexity of your project. We offer flexible engagement models to fit your budget and timeframe. Contact us today for a free consultation and quote.",
    },
  ];

  const fintechFAQData = [
    {
      question: "What is FinTech?",
      answer:
        "Fintech is short for financial technology. It is a term used to describe the application, design, and development of new financial technology products. Fintech helps not just in terms of business applications but also includes software for accounting, payments, payroll, and asset management.",
    },
    {
      question: "What does a fintech software developer do?",
      answer:
        "Fintech software developers are the individuals responsible for designing, building, and deploying fintech solutions using various technology stacks. Our expert fintech software developers can help you build cutting-edge fintech solutions with the latest technologies, resources, and strategies to develop software that adapts to change.",
    },
    {
      question: "How long will it take for you to develop my Fintech Software?",
      answer:
        "The time taken depends on the complexity of the project. Our skilled team of developers will first create a comprehensive roadmap for your app and tailor it towards your goals and objectives.",
    },
    {
      question:
        "What are the main advantages of building a fintech software solution?",
      answer:
        "Fintech solutions provide the ability to make multi-banking transactions and enhanced functionalities of banking apps. By building such a system, you can automate business tasks and processes and enable secure transactions.",
    },
  ];

  const showDataBasedOnPathname = {
    "/ai-ml-development-services/": AIMLFAQData,
    "/devops-consulting-services/": fintechFAQData,
    "/digital-experience-services/": DigitalExperienceFAQData,
  };

  return (
    <div className="container md:w-[90%] w-full mx-auto faq-bottom md:!pb-[5rem] !pb-8 pt-12 px-4">
      <div className="service_sec3 text-center solutions">
        <h2 className="uppercase xl:text-[48px] lg:text-[34px] md:text-[32px] text-[22px] md:py-10 pb-8">
          FAQs
        </h2>
      </div>

      <div className="reveal">
        {
          <div itemscope="true" itemtype="https://schema.org/FAQPage">
            {showDataBasedOnPathname[pathname].map(
              ({ question, answer }, index) => (
                <FAQAccordion
                  key={index + 1}
                  id={index + 1}
                  question={question}
                  answer={answer}
                  open={open}
                  handleOpen={handleOpen}
                />
              )
            )}
          </div>
        }
      </div>
    </div>
  );
};

export default ServicesFAQ;
