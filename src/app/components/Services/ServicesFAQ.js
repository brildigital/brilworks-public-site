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

  const DevOpsFAQData = [
    {
      question:
        "1. What is DevOps consulting, and how can it benefit my business?",
      answer:
        "DevOps consulting helps bridge the gap between development and operations teams. Our experts implement automation, collaboration tools, and cultural changes to optimize your release cycles, improve software quality, and boost innovation. This translates to faster time to market, reduced costs, and happier customers.",
    },
    {
      question:
        "2. I'm already using some DevOps tools. Do I still need consulting?",
      answer:
        "Absolutely! While tools can automate tasks, successful DevOps requires a holistic approach which includes processes, people, and culture. Our consultants don't just recommend tools; they analyze your existing setup, identify bottlenecks, and design a customized DevOps strategy that integrates seamlessly with your workflow and maximizes the value of your existing tools.",
    },
    {
      question: "3. What types of DevOps engagements do you offer?",
      answer:
        "We offer a range of flexible engagements to cater to your specific needs. We can provide short-term assessments and recommendations, ongoing DevOps coaching and support, or full-fledged implementation of your DevOps strategy. We also specialize in cloud migration, continuous integration/continuous delivery (CI/CD) pipelines, and containerization technologies like Docker and Kubernetes.",
    },
    {
      question: "4. How much does your DevOps consulting cost?",
      answer:
        "The cost of our services depends on the scope and complexity of your project. We offer transparent pricing models based on hourly rates, fixed-price engagements, or hybrid approaches. We'll work with you to understand your budget and tailor a solution that delivers maximum value within your constraints.",
    },
    {
      question:
        "5. How can I be sure your DevOps consulting will be successful?",
      answer:
        "We have a proven track record of helping businesses achieve their DevOps goals. We leverage our extensive experience, industry best practices, and agile methodologies to ensure successful project outcomes. We also collaborate closely with you throughout the engagement, ensuring complete transparency and alignment with your expectations.",
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

  const AWSConsultingFAQData = [
    {
      question: "1. What is AWS consulting?",
      answer:
        "AWS consulting is the process of helping businesses design, build, and manage their workloads on Amazon Web Services (AWS). This can include a variety of services, such as cloud strategy and architecture, cloud migration, application modernization, DevOps, security and compliance, cost optimization, and managed services.",
    },
    {
      question: "2. Why should I use AWS consulting services?",
      answer:
        "By leveraging our deep understanding of AWS, we can help you avoid common migration pitfalls and optimize your cloud usage for faster performance, enhanced security, and significant cost savings. We can also streamline your launch process and ensure your infrastructure is configured for maximum efficiency, saving you time and money in the long run.",
    },
    {
      question: "3. How much does AWS consulting cost?",
      answer:
        "The cost of AWS consulting services varies depending on the size and scope of your project. However, we offer free consultations so you can get an estimate of the cost before you commit to anything.",
    },
  ];

  const showDataBasedOnPathname = {
    "/ai-ml-development-services/": AIMLFAQData,
    "/devops-consulting-services/": DevOpsFAQData,
    "/digital-experience-services/": DigitalExperienceFAQData,
    "/aws-consulting-services/": AWSConsultingFAQData,
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
          <div itemScope="true" itemtype="https://schema.org/FAQPage">
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
