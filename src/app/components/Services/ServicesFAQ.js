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

  const KubernatesConsultingFAQData = [
    {
      question: "1. What is Kubernetes?",
      answer:
        "Developed by Google for production-grade environments, Kubernetes tackles the challenge of managing multiple containerized applications within complex, multi-infrastructure deployments. Brilworks, a recognized Kubernetes leader, empowers organizations to streamline their CD/CI processes through expert Kubernetes consulting and solutions.",
    },
    {
      question: "2. Why do you need Kubernetes?",
      answer:
        "Kubernetes cuts through container orchestration limitations. It lets DevOps deploy across servers, fine-tune individual containers, schedule and scale them on demand, and build multi-container apps.",
    },
  ];

  const ProductEngineeringFAQData = [
    {
      question:
        "1. What is the difference between product development and product engineering?",
      answer:
        "Product development focuses on the big picture, like ideation and planning. Product engineering takes those ideas and turns them into a tangible product through coding, design, and testing.",
    },
    {
      question: "2. What types of product engineering services do you offer?",
      answer:
        "We offer a full range of services, from product conceptualization and prototyping to design, engineering, quality assurance, and post-launch support.",
    },
    {
      question:
        "3. How can your product engineering services benefit startups?",
      answer:
        "We provide a one-stop shop for startups, offering rapid prototyping, agile development, and cost-effective solutions to bring your innovative ideas to market quickly.",
    },
    {
      question:
        "4. Do you offer UI/UX design services as part of your product development process?",
      answer:
        "Absolutely! We have a dedicated team of UI/UX designers who ensure your product boasts intuitive interfaces and a captivating user experience.",
    },
    {
      question:
        "5. How do you ensure the quality and security of the products you develop?",
      answer:
        "We employ rigorous testing practices that go beyond functionality, focusing on performance, security, and user experience.  Our goal is to deliver bug-free, reliable products you can trust.",
    },
  ];

  const ApplicationDevFAQData = [
    {
      question: "1. What kind of software development services do you offer?",
      answer:
        "We offer a comprehensive range of software development services, including custom application development, web development, mobile app development, enterprise software solutions, and API integration. We can help you bring your software ideas to life, no matter the complexity.",
    },
    {
      question: "2. Do you work with startups and small businesses?",
      answer:
        "We understand the unique needs of startups and small businesses. We offer flexible engagement models and competitive rates to help you achieve your software development goals within your budget.",
    },
    {
      question: "3. How much does it cost to develop software?",
      answer:
        "The cost of software development varies depending on the project's scope, complexity, and features. We offer free consultations to discuss your project requirements and provide a tailored quote.",
    },
    {
      question: "4. What is the development process like?",
      answer:
        "We follow a collaborative and agile development process. We work closely with you throughout the entire development cycle, from initial concept to launch and ongoing maintenance. This ensures your project stays on track and meets your expectations.",
    },
    {
      question: "5. How long does it take to develop software?",
      answer:
        "The development timeline depends on the project's size and complexity. During the initial consultation, we can provide an estimated timeframe based on your specific requirements.",
    },
    {
      question: "6. Do you offer ongoing maintenance and support?",
      answer:
        "Yes, we offer comprehensive maintenance and support plans to ensure your software continues to function smoothly and securely. We can also help you implement new features and updates as needed.",
    },
  ];

  const SaasApplicationDevFAQData = [
    {
      question: "1. How long does it take to develop a SaaS product?",
      answer:
        "The development timeframe depends on the complexity of your product. We'll work with you to define a realistic timeline based on your specific needs.",
    },
    {
      question: "2. What's included in your SaaS development services?",
      answer:
        "Our services typically cover the entire development lifecycle, from ideation and design to development, testing, deployment, and ongoing support. ",
    },
    {
      question: "3. How much does it cost to develop a SaaS product?",
      answer:
        "The cost varies depending on the features, complexity, and development timeframe. We offer flexible engagement models to suit your budget.",
    },
    {
      question: "4. How will I know my SaaS product is secure?",
      answer:
        "Security is a top priority. We use industry-standard practices and technologies to ensure your data and user information are protected.",
    },
    {
      question: "5. What happens after my SaaS product launches?",
      answer:
        "We offer ongoing support and maintenance services to ensure your product continues to function smoothly and evolves with your needs.",
    },
    {
      question: "6. Can you help me integrate my SaaS with other applications?",
      answer:
        "Yes, we have expertise in integrating your SaaS with various third-party applications to enhance functionality.",
    },
    {
      question: "7. Do you offer any ongoing support after development?",
      answer:
        "Absolutely! We offer various support plans to provide ongoing maintenance, bug fixes, and security updates for your SaaS product.",
    },
  ];

  const showDataBasedOnPathname = {
    "/ai-ml-development-services/": AIMLFAQData,
    "/devops-consulting-services/": DevOpsFAQData,
    "/digital-experience-services/": DigitalExperienceFAQData,
    "/aws-consulting-services/": AWSConsultingFAQData,
    "/kubernates-consulting-services/": KubernatesConsultingFAQData,
    "/product-engineering-development-services/": ProductEngineeringFAQData,
    "/application-development-services/": ApplicationDevFAQData,
    "/saas-application-development-services/": SaasApplicationDevFAQData,
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
