"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import GradientFAQAccordion from "../Common/GradientFAQAccordion";
import Heading from "../HTMLComponents/Heading";

const SolutionFAQ = () => {
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

  const fleetManagementFAQData = [
    {
      question: "How much does it cost to develop a fleet management app?",
      answer:
        "The cost depends on the app’s complexity, features, and integrations. A simple delivery tracking app may cost less, while a full-scale fleet management platform with analytics, route optimization, and multi-user dashboards will require a larger investment. We provide detailed estimates after understanding your requirements.",
    },
    {
      question: "How long does it take to build a logistics app?",
      answer:
        "Most fleet management apps take between 8 to 20 weeks to design, develop, and test. Timelines vary based on project scope, custom integrations, and feedback cycles. We follow an agile approach to ensure you start seeing results early.",
    },
    {
      question: "Can you integrate the app with my existing ERP or CRM?",
      answer:
        "Yes. We specialize in connecting logistics systems with popular ERPs, CRMs, and third-party platforms like SAP, Salesforce, Zoho, or any custom-built system you’re using. This keeps your data connected and workflows efficient.",
    },
    {
      question: "Do you offer post-launch maintenance and updates?",
      answer:
        "Absolutely. Our partnership doesn’t end with deployment. We provide continuous support, performance monitoring, and feature upgrades to keep your logistics app secure and up-to-date.",
    },
    {
      question: "Will my fleet management app work across devices?",
      answer:
        "Yes. All our solutions are built to work seamlessly on iOS, Android, and web platforms. Whether it’s for drivers on the road or managers in the office, your team can access data anytime, anywhere.",
    },
    {
      question: "How secure is my fleet management data?",
      answer:
        "We follow best practices for data security and compliance, including data encryption, role-based access control, and secure APIs. Your business and customer data stay protected at every stage.",
    },
    {
      question: "Can you help me scale the app later?",
      answer:
        "Yes. We build every solution with scalability in mind. As your operations grow, we can expand your app’s capacity, add modules, and integrate new technologies without disrupting performance.",
    },
    {
      question: "Do you build white-label fleet solutions?",
      answer:
        "Yes, if you’re a startup or SaaS provider looking to launch a white-label product for fleet management clients, we can create a fully customizable solution that aligns with your brand.",
    },
  ];

  const mediaEntertainmentFAQData = [
    {
      question:
        "What sorts of media and entertainment software do you develop?",
      answer: (
        <>
          As a well-known entertainment app development company, we provide our
          clients with the most sophisticated media &{" "}
          <strong>
            <Link
              className="FAQ-link"
              href="https://www.designrush.com/agency/software-development/nearshore"
            >
              software solutions{" "}
            </Link>
          </strong>
          including Live Video Streaming, VOD Apps, Video Editing Software,
          Music On-Demand, Photo Editing Software, Digital Asset management, and
          many more.
        </>
      ),
    },
    {
      question:
        "How long does it take to develop a media & entertainment software app?",
      answer:
        "The time it takes to develop a media app is highly dependent on what functionality the app has, what features it will possess, and its use case.",
    },
    {
      question:
        "Do you provide custom media & entertainment software development?",
      answer:
        "Yes, we do provide custom development services for media and entertainment software. We create solutions tailored to the requirements of your organization.",
    },
    {
      question: "What is better for entertainment apps: mobile or web?",
      answer:
        "In a world where consumers are always on the go, mobile applications are quickly becoming the standard for entertainment apps. Whether it is social media or messaging apps, gaming, or streaming services, there’s no denying that mobile is where the action is as far as digital trends are concerned.",
    },
    {
      question: "What do I need to build a dating app like Tinder?",
      answer:
        "There are many things to consider if you want to build a dating app like Tinder: A strong matching algorithm and geo-location features are two of them.",
    },
  ];

  const healthcareFAQData = [
    {
      question: "What is healthcare software development?",
      answer:
        "Healthcare software development is the process of developing mobile apps or web apps for both patients and medical professionals. With our healthcare software development services, you can incorporate e-prescribing, mobile app design and development, clinical data analysis, and real-time patient interaction into a single platform that’s easy to use and available where you need it most.",
    },
    {
      question: "Do you provide custom healthcare software development?",
      answer:
        "Yes, we do provide custom healthcare software development services. We create solutions tailored to the requirements of your healthcare organization.",
    },
    {
      question:
        "How do I choose the right healthcare software development company?",
      answer:
        "When in the process of choosing a healthcare software development service, you need to keep in mind your requirements and expectations. You need to choose a company that not only offers great services but has solid experience with projects similar to yours. Choose a company that understands your needs and delivers on time, on budget, and with high-quality end-products every time. Check Brilworks as top.",
    },
    {
      question:
        "Do your healthcare software development services follow HIPAA compliance?",
      answer:
        "Yes, we do follow HIPAA standards. We take security seriously and implement the highest levels of quality assurance.",
    },
    {
      question: "What are the benefits of mHealth apps?",
      answer:
        "Implementing mHealth apps in healthcare organizations enables professionals to deliver care more efficiently, reducing costs associated with transportation and hospital admission. They also provide patients and their families with real-time information about their health status and create a direct connection between healthcare providers and patients.",
    },
  ];

  const eCommerceFAQData = [
    {
      question: "How much does it cost to develop an eCommerce app?",
      answer:
        "The cost of developing an eCommerce app varies based on complexity, features, design, and the development team's location and expertise. While basic apps might start from around $15,000 for an outsourced team in India, a full-fledged solution can range from $30,000 to over $170,000 for a reputable outsourced team. Ongoing maintenance and updates also add to the overall cost.",
    },
    {
      question: "How long does it take to develop an eCommerce app?",
      answer:
        "The time to develop an eCommerce app depends on its complexity, ranging from approximately 3-6 months for a basic app to over 10 months for a complex solution. On average, development can take 700-800 working hours, with full-fledged eCommerce products requiring even more time.",
    },
    {
      question: "What key features should an eCommerce mobile app include?",
      answer:
        "Essential features for an eCommerce app include easy user onboarding and secure payment options. Key functionalities such as product browsing with smart filters, a shopping cart, and delivery status tracking are crucial for a seamless experience. Additionally, features like product reviews and ratings, personalised recommendations, and multiple payment methods enhance user engagement and conversions.",
    },
    {
      question:
        "How do you ensure the security of eCommerce mobile applications?",
      answer:
        "To ensure security, providers employ comprehensive security protocols and adhere to best practices to maintain data confidentiality and integrity. This often includes ISO 27001-approved security processes and alignment with GDPR standards. Security testing is performed to make solutions shatterproof against cybercrime, alongside continuous performance monitoring for vulnerabilities and timely updates.",
    },
  ];
  const edTechFAQData = [
    {
      question: "How much does it cost to build an EdTech platform?",
      answer:
        "Costs depend on features, design, integrations, and scalability. A small e-learning app might cost less, while a complete learning management system with analytics and AI recommendations will require a higher budget. We share clear estimates after discussing your goals.",
    },
    {
      question: "How long does it take to develop an education app?",
      answer:
        "Timelines vary by scope, but most projects range between 10 to 20 weeks from concept to launch. We work in agile sprints to deliver faster without compromising quality.",
    },
    {
      question: "Can you integrate my app with existing systems?",
      answer:
        "Yes. We can connect your new platform to CRMs, ERPs, video tools like Zoom, and payment gateways for seamless operation.",
    },
    {
      question: "Do you support both web and mobile platforms?",
      answer:
        "Absolutely. We build responsive web platforms and native or cross-platform mobile apps for iOS and Android.",
    },
    {
      question: "Is my users’ data secure?",
      answer:
        "We follow strict data security practices, including encryption, secure APIs, and compliance with international privacy standards to protect learners and institutions.",
    },
    {
      question: "Can you help me scale the product later?",
      answer:
        "Yes. We build all solutions with scalability in mind so you can easily add new features, courses, or users as your platform grows.",
    },
  ];
  const showDataBasedOnPathname = {
    "/industry/fintech-software-development/": fintechFAQData,
    "/industry/fleet-management-software-development/": fleetManagementFAQData,
    "/industry/media-entertainment-software-development/":
      mediaEntertainmentFAQData,
    "/industry/healthcare-software-development/": healthcareFAQData,
    "/industry/e-commerce-app-development/": eCommerceFAQData,
    "/industry/edtech-software-development/": edTechFAQData,
  };

  const solutionFAQData = showDataBasedOnPathname[pathname] || {};

  return (
    <div className="container max-w-[1280px] main-section-padding mx-auto">
      <div className="w-full mx-auto">
        <Heading
          type="h2"
          className="lg:!text-[34px] md:!text-3xl !text-2xl"
          text="Frequently Asked Questions"
        />

        <div className="slg:pt-10 md:pt-7.5 pt-5 reveal">
          <div itemScope="true" itemType="https://schema.org/FAQPage">
            {solutionFAQData?.map(({ question, answer }, index) => (
              <GradientFAQAccordion
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
    </div>
  );
};

export default SolutionFAQ;
