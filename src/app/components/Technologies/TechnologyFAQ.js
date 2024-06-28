"use client";

import { usePathname } from "next/navigation";
import FAQAccordion from "../Common/FAQAccordion";
import { useState } from "react";

const TechnologyFAQ = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const reactJSFAQData = [
    {
      question:
        " What is the average work experience of a React.js developer hired through Brilworks?",
      answer:
        "The average experience of React.js developers hired through us is of mid-senior level, which is 3+ years.",
    },
    {
      question: "How long will it take to hire Reactjs from Brilworks?",
      answer:
        "In as few as 2-5 business days, we can quickly and efficiently assign a React js developer to your project.",
    },
    {
      question:
        "What is the benefit of hiring dedicated React.js developers from Brilworks?",
      answer:
        "Hiring dedicated React js developers for your team is a good idea if you want to ensure that tasks are completed on time and with the highest degree of quality, have the option of scaling the team as and when demand increases, and most importantly get someone reliable on board without worrying about retention.",
    },
    {
      question:
        "Do you provide support and maintenance services after deployment?",
      answer:
        "Yes, we offer support and maintenance services to help you keep your product running smoothly after it has been deployed. This includes bug fixes, security maintenance, minor changes, module alterations, feature enhancements, upgrades, and resolution of technical glitches.",
    },
  ];
  const javaFAQData = [
    {
      question: "How can I hire Java Developers from Brilworks?",
      answer:
        "You can hire Java backend developers from Brilworks to easily extend your web development team. We match up great talent with your requirements, then help you find the right fit for your project. You interview candidates, select the right one and start working right away!",
    },
    {
      question: "How long will it take to hire Java Developers from Brilworks?",
      answer:
        "In as few as 2-5 business days, we can quickly and efficiently assign a Java developer to your project.",
    },
    {
      question: "What are some skills a Java Developer must possess?",
      answer:
        "You should be looking for a Java developer who has the skills to work on any project, has a passion for coding, and enjoys learning new technologies. A strong candidate will have experience with code written in Java, Struts framework, Spring framework, and OOP concepts.",
    },
    {
      question:
        "How do you make sure the developer you find for me will fit my needs?",
      answer:
        "Our comprehensive vetting process means that there is no need to worry about missing out on a great candidate. Additionally, we are always looking to make sure that the right candidates are being matched with the right projects so your development team is highly motivated and productive!",
    },
  ];
  const nodeJSFAQData = [
    {
      question: "How does Brilworks vet Node.js developers ?",
      answer:
        "We thoroughly evaluate Node.js developers’ logical reasoning abilities, communication skills, and their ability to write well-documented and clean code before we hire them.",
    },
    {
      question:
        "How much will it cost to hire a NodeJS developer from Brilworks ?",
      answer:
        "Hiring a NodeJS developer from us will cost you approximately $2500 a month, depending on the skillset and experience of the candidate.",
    },
    {
      question:
        "Do you provide a trial period for hiring a Node.js developer ?",
      answer:
        "Yes, we offer a 48-hour no-risk trial period, so you can test the resource before making a decision.",
    },
    {
      question:
        "What are the key skills that a Node.js developer should have ?",
      answer:
        "The Nodejs developer must have a definite knowledge of both relational databases like MySQL, MariaDB, and No SQL databases like MongoDB, and CouchDB.",
    },
  ];
  const reactNativeFAQData = [
    {
      question: "What are the responsibilities of React Native developers?",
      answer:
        "A React Native developer is responsible for building native applications for Android, iOS, and macOS. They have the ability to create UI that is more responsive than traditional devices including touchscreen phones, tablets, and desktops.",
    },
    {
      question:
        "What is the benefit of choosing react native mobile app development?",
      answer:
        "It is safe to say that React Native gives you the best of both worlds. Convenient and cross-platform, it will enable you to build for iOS and Android without the complexity of having to learn two languages.",
    },
    {
      question: "How do I hire React Native developers?",
      answer:
        "An easy and convenient way to hire a React Native Developer from Brilworks is by sharing your requirements. Once you fill out the details, we will start shortlisting the top matching candidates for you so that you can interview them and onboard the ones you want to hire.",
    },
    {
      question: "Do you provide NDA and IP protection for my project?",
      answer:
        "You will have 100% ownership of the project and all its resource including NDA, copyright, source code, intellectual property rights, and confidential letters.",
    },
    {
      question:
        "What if I am not satisfied with the hired React Native developers work?",
      answer:
        "We understand that every project requires different skills, and we are always looking for ways to bring you the best developers to your team. We work with our clients long-term and will happily provide a new developer if they don’t deliver what you need.",
    },
  ];
  const awsFAQData = [
    {
      question: "How do I hire AWS developers through Brilworks?",
      answer:
        "You can hire AWS developers from Brilworks to easily extend your web development team. We match up great talent with your requirements, then help you find the right fit for your project. You interview candidates, select the right one and start working right away!",
    },
    {
      question: "Is the 2 days risk-free trial period completely free?",
      answer:
        "Yes, it’s completely free. We allow this free time period to evaluate whether we’re the right fit for your project. If you’re satisfied with the quality of our work, then you can continue with the engagement; if not, then you can cancel it without any further obligations.",
    },
    {
      question: "What are the advantages of hiring developers from Brilworks?",
      answer:
        "Our developers do all the heavy lifting for you and take over executing the work while giving you the freedom to focus on what matters the most to you, aka growing your business without any worries of hiring and retention.",
    },
    {
      question: "What to consider while choosing an AWS development company?",
      answer:
        "You need to choose an AWS partner that can help you understand the development process & technical challenges, what is required to meet security compliance standards, and how they can deliver their value-added services.",
    },
    {
      question:
        "Are your development services inclusive of post-project support?",
      answer:
        "Yes, we do offer post-launch maintenance and support. This includes bug fixes, security maintenance, minor changes, module alterations, feature enhancements, upgrades, and resolution of technical glitches.",
    },
  ];
  const uiuxFAQData = [
    {
      question: "Why should I hire a UI UX designer from Brilworks?",
      answer:
        "Our UI UX designers understand the value of user experience and are committed to creating a powerful web presence for your business.",
    },
    {
      question: "Do you provide a trial period for hiring a designer?",
      answer:
        "Yes, we do understand the importance of finding someone who is a good fit for your organization. Therefore, we offer a 48 hours no-risk trial for any employee who might be interested in working with us.",
    },
    {
      question: "Do you provide NDA and IP protection for my project?",
      answer:
        "You will have 100% ownership of the project and all its resource including NDA, copyright, source code, intellectual property rights, and confidential letters.",
    },
    {
      question: "What if I am not satisfied with the hired UI UX Designers?",
      answer:
        "We understand that every project requires different skills, and we are always looking for ways to bring you the best developers to your team. We work with our clients long-term and will happily provide a new developer if they don’t deliver what you need.",
    },
  ];
  const blockchainFAQData = [
    {
      question:
        "Can I hire Blockchain app developer from Brilworks on a full-time basis?",
      answer:
        "Yes, you can hire a Blockchain app developer in a full-time capacity. We have a team of Blockchain experts, who are experienced in developing blockchain-based solutions and implementing them into your projects.",
    },
    {
      question: "Why should you invest in Blockchain app development?",
      answer:
        "One of the biggest benefits of Blockchain is its ability to automate processes. Rather than relying on a third party to carry out transactions, you can use smart contracts that are self-executing and track the flow of data.",
    },
    {
      question: "What is Smart Contract Development?",
      answer:
        "Smart contract development is a blockchain technology that allows you to develop customized smart contracts. It leads to considerable benefits: less legal and economic uncertainty; more convenience, security, and speed.",
    },
    {
      question: "How to hire the right Blockchain app development company?",
      answer:
        "When it comes to picking out a Blockchain development company to work with, there are many factors that go into a company’s decision-making process. It’s best to consider things like team size, industry exposure, and portfolio.",
    },
    {
      question:
        "How will I assess the progress of my Blockchain app development project?",
      answer:
        "Agile project management is key to keeping clients, teams, and managers informed of the work being done. In the case of an app development project, we will provide login information for assessing real-time progress.",
    },
  ];

  const showDataBasedOnPathname = {
    "/hire-reactjs-developer/": reactJSFAQData,
    "/hire-java-developer/": javaFAQData,
    "/hire-nodejs-developer/": nodeJSFAQData,
    "/hire-react-native-developer/": reactNativeFAQData,
    "/hire-aws-developer/": awsFAQData,
    "/hire-ui-ux-designer/": uiuxFAQData,
    "/hire-blockchain-developer/": blockchainFAQData,
  };

  const technologyFAQData = showDataBasedOnPathname[pathname] || {};

  return (
    <div className="xl:pb-[6rem] md:pb-[4rem] pb-8 xl:px-[5%] md:px-8 px-4">
      <div className="container max-w-[1280px] mx-auto">
        <div className="md:w-[90%] w-full mx-auto faq-bottom">
          <div className="solutions md:text-center text-left">
            <h2 className="uppercase xl:text-[48px] lg:text-[34px] md:text-[32px] text-[22px] md:pb-10 pb-4">
              FAQs
            </h2>
          </div>
          <div className="reveal">
            <div itemScope="true" itemType="https://schema.org/FAQPage">
              {technologyFAQData?.map(({ question, answer }, index) => (
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

export default TechnologyFAQ;
