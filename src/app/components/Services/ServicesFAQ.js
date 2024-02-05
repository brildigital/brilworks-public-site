"use client";
import { useState } from "react";
import FAQAccordion from "../Common/FAQAccordion";
import { usePathname } from "next/navigation";

const ServicesFAQ = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

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

  return (
    <div className="container md:w-[90%] w-full mx-auto faq-bottom md:!pb-[5rem] !pb-8 pt-12 px-4">
      <div className="service_sec3 text-center solutions">
        <h2 className="uppercase xl:text-[48px] lg:text-[34px] md:text-[32px] text-[22px] md:py-10 pb-8">
          FAQs
        </h2>
      </div>

      <div className="reveal">
        <div itemscope="true" itemtype="https://schema.org/FAQPage">
          {fintechFAQData.map(({ question, answer }, index) => (
            <FAQAccordion
              key={index + 1}
              id={index + 1}
              question={question}
              answer={answer}
              open={open}
              handleOpen={handleOpen}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesFAQ;
