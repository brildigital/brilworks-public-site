"use client";
import { useState } from "react";
import FAQAccordion from "../Common/FAQAccordion";
import { usePathname } from "next/navigation";
import Link from "next/link";

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
      question: "What is fleet management software?",
      answer:
        "The fleet management software is a dynamic platform for managing your fleet and its components, including cars, trucks, and vans. It can track vehicle movement, fuel consumption, and maintenance schedules. The software also provides real-time monitoring of drivers and their performance.",
    },
    {
      question:
        "Do you provide custom fleet management software development services?",
      answer:
        "Yes, we do provide custom development services for fleet management software solutions. We create solutions tailored to the requirements of your organization.",
    },
    {
      question:
        "What are some of the main features a fleet management system must have?",
      answer:
        "Fleet management is the backbone of most companies. Fleet management systems should have robust reporting, customizable dashboards, and analytics to generate actionable insights, GPS vehicle tracking fleet maintenance, and dispatch & scheduling features.",
    },
    {
      question: "Why is fleet management a necessity?",
      answer:
        "Fleet management helps to keep vehicles organized, in good working order, and running as efficiently as possible. Tracking the location of all vehicles in your fleet can help decrease costly breakdowns and increase fuel efficiency.",
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

  const showDataBasedOnPathname = {
    "/industry/fintech-software-development/": fintechFAQData,
    "/industry/fleet-management-software-development/": fleetManagementFAQData,
    "/industry/media-entertainment-software-development/":
      mediaEntertainmentFAQData,
    "/industry/healthcare-software-development/": healthcareFAQData,
  };

  const solutionFAQData = showDataBasedOnPathname[pathname] || {};

  return (
    <div className="xl:pb-[6rem] md:pb-[4rem] pb-8 xl:px-[5%] md:px-8 px-4">
      <div className="container max-w-[1280px] mx-auto">
        <div className="md:w-[90%] w-full mx-auto faq-bottom">
          <div className="service_sec3 md:text-center text-left solutions">
            <h2 className="uppercase xl:text-[48px] lg:text-[34px] md:text-[32px] text-[22px] md:pb-10 pb-8">
              FAQs
            </h2>
          </div>

          <div className="reveal">
            <div itemScope="true" itemType="https://schema.org/FAQPage">
              {solutionFAQData?.map(({ question, answer }, index) => (
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
      </div>
    </div>
  );
};

export default SolutionFAQ;
