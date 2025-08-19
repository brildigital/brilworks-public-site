"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import GradientFAQAccordion from "../Common/GradientFAQAccordion";
import Heading from "../HTMLComponents/Heading";
import ContactFormPopup from "./ContactFormPopup";

const TechnologyFAQ = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(1);

  const [openPopup, setOpenPopup] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (dismissed) return; // 👉 if closed once, never show again

      const pageHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const viewportHeight = window.innerHeight;

      const scrolled = scrollTop + viewportHeight;

      if (scrolled >= pageHeight / 2) {
        setOpenPopup(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissed]);

  const handleClose = () => {
    setOpenPopup(false);
    setDismissed(true); // 👉 permanently dismiss
  };

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const reactJSFAQData = [
    {
      question: "How quickly can your remote React developers start working?",
      answer:
        "Our process moves at the fastest pace in the tech industry. Pre-vetted experts start coding in your time zone within 72 hours. For urgent front-end issues, senior React architects can be ready in just 48 hours. There are no setup delays because developers come pre-trained on your stack, whether it’s Next.js, TypeScript, or specialized UI libraries like Framer Motion.",
    },
    {
      question: "What if the developer doesn’t meet expectations?",
      answer:
        "Our 92% first-match success rate is backed by strong guarantees. We offer a 14-day free replacement if the fit isn’t ideal. A dedicated success manager conducts weekly code reviews to ensure UI quality matches your Figma designs. Performance SLAs, tracked via Jira analytics, help maintain high sprint task completion rates.",
    },
    {
      question: "Should we build cross-platform or native apps?",
      answer:
        "Our front-end architects base their advice on data. React Native provides a shared codebase with a unified UI that performs like native apps. However, if your project needs heavy ARKit integrations or precise animation timing, native development may be better. A hybrid approach can also work, using React Native for core features and adding Swift or Kotlin modules for device-specific optimizations.",
    },
    {
      question: "What experience level do your React.js developers have?",
      answer:
        "We provide top-rated talent with an average of 4.2 years of experience. Our developers rank among the top 3%, having passed a rigorous five-stage vetting process. They excel in pixel-perfect Figma-to-React implementations, advanced React 18 features like Suspense and Concurrent Mode, and industry-specific expertise in healthcare, fintech, and gaming.",
    },
    {
      question: "How long does hiring React developers through Brilworks take?",
      answer:
        "Our process is faster than traditional internal HR teams. It takes just two to five business days from contract signing to the first code commit. Our smart matching algorithm evaluates UI complexity, scalability, and compliance requirements. For larger projects, we can deploy pre-built teams in as little as 72 hours.",
    },
    {
      question: "How do you ensure high-quality user interfaces?",
      answer:
        "We enforce a minimum Lighthouse score for performance, accessibility, and SEO. We use Storybook components to integrate design systems that match your brand guidelines. Post-launch, we optimize UI flows using real-user monitoring tools like Hotjar heatmaps.",
    },
    {
      question:
        "What is the benefit of hiring dedicated React.js developers from Brilworks?",
      answer:
        "Hiring dedicated React.js developers ensures tasks are completed on time and with top quality. You can scale the team as needed and bring in reliable talent without worrying about retention.",
    },
    {
      question:
        "Do you provide support and maintenance services after deployment?",
      answer:
        "Yes, we offer post-deployment support and maintenance to keep your product running smoothly. This includes bug fixes, security maintenance, minor changes, module alterations, feature enhancements, upgrades, and resolution of technical glitches.",
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
      question: "How fast can remote Node.js developers start?",
      answer:
        "Typically, our developers can begin work within 72 hours. Expedited onboarding is available for urgent needs. With our streamlined process, we ensure that you experience minimal delays and can quickly integrate top talent into your project.",
    },
    {
      question: "What if the developer isn’t the right fit?",
      answer:
        "We offer a free replacement within 14 days if the developer does not meet your expectations. Our process is designed to achieve a 92% first-match success rate. If there are any issues, we promptly match you with another expert who aligns perfectly with your project requirements.",
    },
    {
      question: "Do you provide support after deployment?",
      answer:
        "Yes, our support extends well beyond the initial launch. We offer ongoing maintenance that includes bug fixes, security updates, and feature enhancements. This ensures your Node.js application remains secure, efficient, and up-to-date even as your business evolves.",
    },
    {
      question: "How do you verify developer expertise?",
      answer:
        "Our rigorous screening process involves multiple layers of evaluation. We conduct technical assessments, portfolio reviews, and live coding tests to ensure that each candidate is proficient in Node.js and related frameworks. This thorough verification minimizes risks and guarantees you receive high-quality talent.",
    },
    {
      question: "What is the cost structure?",
      answer:
        "We provide competitive hourly rates or fixed project fees, depending on your needs. Our pricing is completely transparent—there are no hidden charges. This clear cost structure allows you to plan your budget with confidence while benefiting from expert development services.",
    },
    {
      question: "Can I request specific technical skills or experience?",
      answer:
        "Absolutely. We pride ourselves on matching candidates to your precise technical requirements. Whether you need expertise in Express.js, asynchronous programming, API development, or database integrations, we tailor our selection to ensure the developer has the exact skills necessary for your project’s success.",
    },
    {
      question: "How do you handle time zone differences?",
      answer:
        "Our global talent network means that we have developers available across multiple time zones. This allows for flexible working hours and ensures there is ample overlap with your business hours. We also use robust communication tools and regular check-ins to bridge any time zone gaps, ensuring seamless collaboration.",
    },
    {
      question: "What is the onboarding process like?",
      answer:
        "The onboarding process is simple and efficient. It begins with an initial consultation to understand your project’s specific needs, followed by a careful candidate selection. After a brief trial period, we fully integrate the developer into your team, ensuring a smooth transition and immediate productivity.",
    },
    {
      question: "How do you manage project progress and quality?",
      answer:
        "We maintain tight control over project progress through regular updates and agile project management methodologies. Milestone tracking, quality control checkpoints, and frequent feedback sessions keep your project on schedule and within scope. This proactive management approach ensures high standards and timely delivery.",
    },
    {
      question: "What happens if my project needs change over time?",
      answer:
        "We understand that project requirements can evolve. That’s why our service is highly scalable and flexible. Whether you need to add more developers or pivot your project focus, our team adapts to meet changing demands with minimal disruption. Our ongoing support and agile methodologies ensure your project continues to align with your business goals.",
    },
  ];
  const reactNativeFAQData = [
    {
      question: "What do React Native developers do?",
      answer:
        "React Native developers build cross-platform mobile apps for iOS, Android, and macOS using React Native. They create responsive UIs, integrate APIs, and ensure high performance, leveraging tools like Redux and TypeScript.",
    },
    {
      question: "Why choose React Native for app development?",
      answer:
        "React Native enables cross-platform mobile app development, reducing costs and time by using a single codebase for iOS and Android. It offers native-like performance and a rich ecosystem of components.",
    },
    {
      question: "How much does it cost to hire React Native developers?",
      answer:
        "Our pricing starts at $18/hour for developers with 2–4 years of experience. Monthly plans are $2500 for 160 hours, and team plans start at $12000 for complex projects. Get a custom quote.",
    },
    {
      question: "How long does it take to build a React Native app?",
      answer:
        "Timelines vary, but a typical MVP takes 3–6 months, depending on complexity. Our Agile approach ensures fast delivery with regular updates.",
    },
    {
      question: "Do you provide NDA and IP protection?",
      answer:
        "Yes, we offer 100% ownership of your project, including NDAs, source code, and intellectual property rights, ensuring complete confidentiality.",
    },
    {
      question: "What if I’m not satisfied with the developer?",
      answer:
        "We provide a risk-free trial and will replace any developer who doesn’t meet your expectations, ensuring you get the best talent for your project.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We specialize in fintech, healthcare, SaaS, and e-commerce, delivering tailored React Native solutions for startups and enterprises.",
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
      question: "How quickly can a blockchain developer start?",
      answer:
        "A developer can start within 72 hours, with urgent hires onboarding in just 24 hours to meet tight project deadlines.",
    },
    {
      question: "What if the developer isn’t suitable?",
      answer:
        "We offer a free replacement within 10 days. With a 94% first-match success rate, most clients find the right fit immediately.",
    },
    {
      question: "Private vs. Public Blockchain?",
      answer:
        "We assess your requirements to recommend the best option. Hybrid models often provide an ideal balance of speed, security, and transparency.",
    },
    {
      question: "Do you audit smart contracts?",
      answer:
        "Yes, all smart contract projects include third-party audits to ensure security, compliance, and reliability before deployment.",
    },
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

  const flutterflowFAQData = [
    {
      question:
        "What are the key benefits of using FlutterFlow for mobile app development?",
      answer:
        "FlutterFlow offers several advantages for mobile app development. It allows for rapid prototyping with a code-free approach that reduces development time and costs. Furthermore, FlutterFlow allows you to build a cross-platform app for both iOS and Android devices. ",
    },
    {
      question: "Why should I choose Brilworks for FlutterFlow development?",
      answer:
        "Brilworks offers expertise in FlutterFlow, ensuring efficient and high-quality app development. Their client-centric approach guarantees personalized service and attention to detail. Competitive pricing combined with exceptional quality makes Brilworks a valuable partner.",
    },
    {
      question: "How to Evaluate FlutterFlow Development Companies?",
      answer:
        "You should assess a company's technical skills, including proficiency in Flutterflow development and UI/UX design. Evaluate project management methodologies, such as Agile or Waterfall. Additionally, reviewing a company's portfolio and client testimonials can provide valuable insights into its experience and reputation.",
    },
    {
      question: "What are the steps to get started with Brilworks?",
      answer:
        "To begin your FlutterFlow development project with Brilworks, simply reach out for a personalized consultation. During this initial meeting, we'll discuss your project goals, requirements, and timeline. Based on this information, we'll provide a tailored proposal outlining the project scope, timeline, and cost. Once you approve the proposal, we'll proceed to project kickoff and begin development.",
    },
  ];
  const bubbleFAQData = [
    {
      question: "What is Bubble.io, and why should I use it?",
      answer:
        "Bubble.io is a no-code development platform that allows you to build fully functional web applications without extensive programming knowledge. It streamlines the development process, enabling faster deployment and reduced costs.",
    },
    {
      question: "How can a Bubble.io developer benefit my project?",
      answer:
        "A skilled Bubble.io developer can leverage the platform's capabilities to create custom applications tailored to your business needs. They can optimize performance, enhance user experience, and ensure that your app is scalable and maintainable.",
    },
    {
      question:
        "What types of projects are suitable for Bubble.io development?",
      answer:
        "Bubble.io is ideal for MVPs, SaaS applications, and interactive web platforms. If you're looking to quickly launch a product with dynamic features and a user-friendly interface, Bubble.io is a great choice.",
    },
    {
      question: "How long does it take to build an application with Bubble.io?",
      answer:
        "The timeline for developing an application on Bubble.io can vary based on complexity and features. However, using Bubble.io typically accelerates the development process, allowing for faster iterations and quicker time to market.",
    },
    {
      question: "Can Bubble.io handle high-traffic applications?",
      answer:
        "Yes, Bubble.io can support high-traffic applications by utilizing scalable infrastructure and performance optimization techniques. A professional Bubble.io developer can implement best practices to ensure your app runs smoothly under heavy usage.",
    },
    {
      question: "What should I look for when hiring a Bubble.io developer?",
      answer:
        "When hiring a Bubble.io developer, consider their experience with the platform, portfolio of past projects, and understanding of best practices. Effective communication and problem-solving skills are also essential for successful collaboration.",
    },
  ];
  const adaloFAQData = [
    {
      question: "What is Adalo?",
      answer:
        "Adalo is a no-code platform that allows users to build mobile and web applications quickly and easily, without needing to write code. It offers a range of features, including drag-and-drop design tools, database management, and integration capabilities.",
    },
    {
      question: "How long does it take to develop an app using Adalo?",
      answer:
        "The development timeline depends on the complexity and features of the app. However, due to Adalo’s no-code nature, we can typically deliver applications much faster than traditional development methods.",
    },
    {
      question: "Can you help with existing Adalo apps?",
      answer:
        "We offer services to enhance, update, or troubleshoot existing Adalo applications, ensuring they meet your evolving business needs.",
    },
    {
      question: "What types of applications can you develop with Adalo?",
      answer:
        "We can develop various applications, including business apps, e-commerce platforms, community apps, and more. If you have a specific idea, we’d love to discuss it!",
    },
    {
      question: "How does pricing work for your Adalo development services?",
      answer:
        "Our pricing is based on the specific services and complexity of the project. We offer customized quotes after an initial consultation to understand your requirements fully.",
    },
    {
      question: "Will I own the app once it's developed?",
      answer:
        "Yes, once your application is developed, you will have full ownership and control over it, including the source code and design.",
    },
    {
      question: "Do you provide training on how to use Adalo?",
      answer:
        "Yes, we offer training sessions to help you and your team understand how to manage and update your app using Adalo, enabling you to make changes as needed in the future.",
    },
    {
      question: "How can I get started with your Adalo development services?",
      answer:
        "Getting started is simple. Contact us through our website or give us a call to schedule a consultation. We’ll discuss your project and outline the next steps.",
    },
  ];
  const lowCodeNoCodeFAQData = [
    {
      question: "What is no code app development?",
      answer:
        "No code development allows users to create applications without writing any code, using visual interfaces and pre-built components.",
    },
    {
      question: "How quickly can I get my app developed?",
      answer:
        "With our low code development services, you can expect a significantly reduced development timeline, often ranging from a few days to weeks, depending on the project scope.",
    },
    {
      question: "Can I customize my app later?",
      answer:
        "Absolutely! Both no code and low code platforms allow for easy updates and modifications, ensuring your app can grow with your business.",
    },
    {
      question: "Do I need technical skills to work with no code developers?",
      answer:
        "No technical skills are necessary. Our no code developers will guide you through the process and handle the technical aspects.",
    },
  ];
  const mobileAppFAQData = [
    {
      question: "How long does it take to develop a mobile app?",
      answer:
        "The development timeline varies depending on the app's complexity, features, and the chosen development approach. Factors such as the number of screens, integrations, and customization requirements can significantly impact the project duration. We can provide a more accurate estimate once we have a detailed understanding of your app idea.",
    },
    {
      question: "Can you help with app design and UI/UX?",
      answer:
        "Yes, we offer design services to help you develop a captivating user interface and intuitive user experience. We can provide design mockups, wireframes, and prototypes to ensure your app meets your aesthetic and functional requirements.",
    },
    {
      question: "Do you provide post-launch support and maintenance?",
      answer:
        "Yes, we offer ongoing support and maintenance services to ensure your app's continued performance and functionality. Our team can provide updates, bug fixes, and enhancements. We also offer ongoing monitoring and optimization.",
    },
    {
      question: "Can you help with app store submission and marketing?",
      answer:
        "Yes, we can assist you with the app store submission process. Furthermore, we also provide guidance on app marketing strategies, such as ASO (App Store Optimization) and user acquisition campaigns.",
    },
  ];

  const whiteLabelFAQs = [
    {
      question: "What is white label app development?",
      answer:
        "White label app development involves developing customizable, pre-built apps that businesses can rebrand and deploy as their own. It is popular among startups and enterprises.",
    },
    {
      question: "What are the benefits of white label app development?",
      answer:
        "White label development helps you move faster without starting from scratch. It cuts down costs and shortens build time. It’s a practical way to launch quickly without trading off quality or control.",
    },
    {
      question: "How much does it cost to build a white label app?",
      answer:
        "Costs vary based on customization, features, and complexity, typically ranging from $2,000 to $50,000. Basic apps with minimal customization are cheaper, while feature-rich apps with advanced integrations cost more. Our transparent pricing ensures no hidden fees. For precise estimates, contact us to discuss your project requirements and receive a tailored quote.",
    },
    {
      question: "How to find the right white label development company?",
      answer:
        "Choose a company with proven expertise, a strong portfolio, and positive client reviews. Ensure they offer customization, cross-platform support, and ongoing maintenance. Check their ability to align with your brand and deliver on time. Our team at Brilworks excels in tailored white label solutions with flexible engagement models. Contact us to explore our services.",
    },
    {
      question: "How much time does it take to build a white label app?",
      answer:
        "Development typically takes 4-12 weeks, depending on customization and complexity. Basic apps with minimal changes launch faster, around 4-6 weeks, while feature-heavy apps may require 8-12 weeks. Our efficient process, from template selection to testing, ensures timely delivery.",
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
    "/hire-flutterflow-developer/": flutterflowFAQData,
    "/hire-bubble-developer/": bubbleFAQData,
    "/hire-adalo-developer/": adaloFAQData,
    "/hire-mobile-app-developer/": mobileAppFAQData,
    "/hire-low-code-no-code-developer/": lowCodeNoCodeFAQData,
    "/hire-white-label-developer/": whiteLabelFAQs,
  };

  const technologyFAQData = showDataBasedOnPathname[pathname] || {};

  return (
    <>
      <div className="container max-w-[1280px] main-section-padding mx-auto">
        <div className="w-full">
          <Heading
            type="h2"
            className="lg:!text-[34px] md:!text-3xl !text-2xl"
            text="Frequently Asked Questions"
          />
          <div className="slg:pt-10 md:pt-7.5 pt-5 reveal">
            <div itemScope="true" itemType="https://schema.org/FAQPage">
              {technologyFAQData?.map(({ question, answer }, index) => (
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
      {openPopup && (
        <ContactFormPopup open={openPopup} handleClose={handleClose} />
      )}
    </>
  );
};

export default TechnologyFAQ;
