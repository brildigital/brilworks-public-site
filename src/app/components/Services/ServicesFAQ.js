"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import GradientFAQAccordion from "../Common/GradientFAQAccordion";
import Heading from "../HTMLComponents/Heading";

const ServicesFAQ = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const AIMLFAQData = [
    {
      question: "What services does Brilworks offer in AI/ML development?",
      answer:
        "Brilworks offers comprehensive AI/ML development services covering generative AI solutions, AI-based product development, machine learning expertise, computer vision solutions, natural language processing (NLP), and AI chatbot development.",
    },
    {
      question: "How does Brilworks approach Generative AI Solutions?",
      answer:
        "Brilworks leverages state-of-the-art tools in generative AI development to revolutionize business operations and innovation across various industries, ensuring cutting-edge solutions tailored to each client's needs.",
    },
    {
      question:
        "Can Brilworks customize AI/ML models for specific business objectives?",
      answer:
        "Yes, we collaborate closely with clients to develop customized ML models that align with their unique objectives and challenges, ensuring tailored solutions for maximum impact.",
    },
    {
      question:
        "What are the key benefits of Brilworks' AI/ML development services?",
      answer:
        "Our services offer enhanced efficiency through automation, predictive advantage through data-driven insights, scalability, and adaptability for evolving business needs, and a commitment to transparent and ethical development practices.",
    },

    {
      question:
        "How does Brilworks support its clients throughout the development process?",
      answer:
        "Our team of experienced professionals provides dedicated expertise and support at every stage of the journey, ensuring clients receive ongoing guidance and assistance to achieve their goals.",
    },
    {
      question:
        "How can I get started with Brilworks' AI/ML development services?",
      answer:
        "To get started, simply schedule a consultation with our team to discuss your aspirations and how our industry-leading AI/ML services can transform your business.",
    },
    {
      question: "How does Brilworks ensure ethical AI development practices?",
      answer:
        "We uphold stringent ethical guidelines and maintain transparency throughout the development process, ensuring responsible AI solutions that prioritize ethical considerations.",
    },
    {
      question:
        "Can Brilworks' AI/ML solutions be adapted to different industries? ",
      answer:
        "Yes, our AI/ML solutions are designed to be adaptable to various industries, including finance, healthcare, media & entertainment, retail & e-commerce, education, logistics, and marketing, among others.",
    },
  ];

  const DevOpsFAQData = [
    {
      question:
        "What is DevOps consulting, and how can it benefit my business?",
      answer:
        "DevOps consulting helps bridge the gap between development and operations teams. Our experts implement automation, collaboration tools, and cultural changes to optimize your release cycles, improve software quality, and boost innovation. This translates to faster time to market, reduced costs, and happier customers.",
    },
    {
      question:
        "I'm already using some DevOps tools. Do I still need consulting?",
      answer:
        "Absolutely! While tools can automate tasks, successful DevOps requires a holistic approach which includes processes, people, and culture. Our consultants don't just recommend tools; they analyze your existing setup, identify bottlenecks, and design a customized DevOps strategy that integrates seamlessly with your workflow and maximizes the value of your existing tools.",
    },
    {
      question: "What types of DevOps engagements do you offer?",
      answer:
        "We offer a range of flexible engagements to cater to your specific needs. We can provide short-term assessments and recommendations, ongoing DevOps coaching and support, or full-fledged implementation of your DevOps strategy. We also specialize in cloud migration, continuous integration/continuous delivery (CI/CD) pipelines, and containerization technologies like Docker and Kubernetes.",
    },
    {
      question: "How much does your DevOps consulting cost?",
      answer:
        "The cost of our services depends on the scope and complexity of your project. We offer transparent pricing models based on hourly rates, fixed-price engagements, or hybrid approaches. We'll work with you to understand your budget and tailor a solution that delivers maximum value within your constraints.",
    },
    {
      question: "How can I be sure your DevOps consulting will be successful?",
      answer:
        "We have a proven track record of helping businesses achieve their DevOps goals. We leverage our extensive experience, industry best practices, and agile methodologies to ensure successful project outcomes. We also collaborate closely with you throughout the engagement, ensuring complete transparency and alignment with your expectations.",
    },
  ];

  const DigitalExperienceFAQData = [
    {
      question:
        "What's the difference between digital experience services and solutions?",
      answer:
        "Services encompass the human expertise and collaboration involved in crafting your digital experience, while solutions refer to the specific software and tools used to implement it. Brilworks offers both, ensuring a holistic approach to your digital transformation.",
    },
    {
      question:
        "What specific types of digital experience solutions do you offer?",
      answer:
        "We offer a wide range of solutions, from custom web and mobile apps to content management systems, chatbots, and marketing automation platforms. We'll work with you to identify the right solution for your unique needs.",
    },
    {
      question: "How much do your services cost?",
      answer:
        "Our pricing depends on the scope and complexity of your project. We offer flexible engagement models to fit your budget and timeframe. Contact us today for a free consultation and quote.",
    },
  ];

  const AWSConsultingFAQData = [
    {
      question: "What is AWS consulting?",
      answer:
        "AWS consulting is the process of helping businesses design, build, and manage their workloads on Amazon Web Services (AWS). This can include a variety of services, such as cloud strategy and architecture, cloud migration, application modernization, DevOps, security and compliance, cost optimization, and managed services.",
    },
    {
      question: "Why should I use AWS consulting services?",
      answer:
        "By leveraging our deep understanding of AWS, we can help you avoid common migration pitfalls and optimize your cloud usage for faster performance, enhanced security, and significant cost savings. We can also streamline your launch process and ensure your infrastructure is configured for maximum efficiency, saving you time and money in the long run.",
    },
    {
      question: "How much does AWS consulting cost?",
      answer:
        "The cost of AWS consulting services varies depending on the size and scope of your project. However, we offer free consultations so you can get an estimate of the cost before you commit to anything.",
    },
  ];

  const KubernetesConsultingFAQData = [
    {
      question: "What is Kubernetes?",
      answer:
        "Developed by Google for production-grade environments, Kubernetes tackles the challenge of managing multiple containerized applications within complex, multi-infrastructure deployments. Brilworks, a recognized Kubernetes leader, empowers organizations to streamline their CD/CI processes through expert Kubernetes consulting and solutions.",
    },
    {
      question: "Why do you need Kubernetes?",
      answer:
        "Kubernetes cuts through container orchestration limitations. It lets DevOps deploy across servers, fine-tune individual containers, schedule and scale them on demand, and build multi-container apps.",
    },
  ];

  const ProductEngineeringFAQData = [
    {
      question:
        "What is the difference between product development and product engineering?",
      answer:
        "Product development focuses on the big picture, like ideation and planning. Product engineering takes those ideas and turns them into a tangible product through coding, design, and testing.",
    },
    {
      question: "What types of product engineering services do you offer?",
      answer:
        "We offer a full range of services, from product conceptualization and prototyping to design, engineering, quality assurance, and post-launch support.",
    },
    {
      question: "How can your product engineering services benefit startups?",
      answer:
        "We provide a one-stop shop for startups, offering rapid prototyping, agile development, and cost-effective solutions to bring your innovative ideas to market quickly.",
    },
    {
      question:
        "Do you offer UI/UX design services as part of your product development process?",
      answer:
        "Absolutely! We have a dedicated team of UI/UX designers who ensure your product boasts intuitive interfaces and a captivating user experience.",
    },
    {
      question:
        "How do you ensure the quality and security of the products you develop?",
      answer:
        "We employ rigorous testing practices that go beyond functionality, focusing on performance, security, and user experience.  Our goal is to deliver bug-free, reliable products you can trust.",
    },
  ];

  const ApplicationDevFAQData = [
    {
      question: "What kind of software development services do you offer?",
      answer:
        "We offer a comprehensive range of software development services, including custom application development, web development, mobile app development, enterprise software solutions, and API integration. We can help you bring your software ideas to life, no matter the complexity.",
    },
    {
      question: "Do you work with startups and small businesses?",
      answer:
        "We understand the unique needs of startups and small businesses. We offer flexible engagement models and competitive rates to help you achieve your software development goals within your budget.",
    },
    {
      question: "How much does it cost to develop software?",
      answer:
        "The cost of software development varies depending on the project's scope, complexity, and features. We offer free consultations to discuss your project requirements and provide a tailored quote.",
    },
    {
      question: "What is the development process like?",
      answer:
        "We follow a collaborative and agile development process. We work closely with you throughout the entire development cycle, from initial concept to launch and ongoing maintenance. This ensures your project stays on track and meets your expectations.",
    },
    {
      question: "How long does it take to develop software?",
      answer:
        "The development timeline depends on the project's size and complexity. During the initial consultation, we can provide an estimated timeframe based on your specific requirements.",
    },
    {
      question: "Do you offer ongoing maintenance and support?",
      answer:
        "Yes, we offer comprehensive maintenance and support plans to ensure your software continues to function smoothly and securely. We can also help you implement new features and updates as needed.",
    },
  ];

  const SaasApplicationDevFAQData = [
    {
      question: "How long does it take to develop a SaaS product?",
      answer:
        "The development timeframe depends on the complexity of your product. We'll work with you to define a realistic timeline based on your specific needs.",
    },
    {
      question: "What's included in your SaaS development services?",
      answer:
        "Our services typically cover the entire development lifecycle, from ideation and design to development, testing, deployment, and ongoing support. ",
    },
    {
      question: "How much does it cost to develop a SaaS product?",
      answer:
        "The cost varies depending on the features, complexity, and development timeframe. We offer flexible engagement models to suit your budget.",
    },
    {
      question: "How will I know my SaaS product is secure?",
      answer:
        "Security is a top priority. We use industry-standard practices and technologies to ensure your data and user information are protected.",
    },
    {
      question: "What happens after my SaaS product launches?",
      answer:
        "We offer ongoing support and maintenance services to ensure your product continues to function smoothly and evolves with your needs.",
    },
    {
      question: "Can you help me integrate my SaaS with other applications?",
      answer:
        "Yes, we have expertise in integrating your SaaS with various third-party applications to enhance functionality.",
    },
    {
      question: "Do you offer any ongoing support after development?",
      answer:
        "Absolutely! We offer various support plans to provide ongoing maintenance, bug fixes, and security updates for your SaaS product.",
    },
  ];

  const GenerativeAIFAQData = [
    {
      question: "How much does it cost to develop a generative AI solution?",
      answer:
        "The cost of generative AI development depends on several factors, like the complexity of the project, the size and expertise of the development team, and the ongoing maintenance needs. However, to give you a ballpark figure, a basic application might range from $50,000 to $150,000, while feature-rich solutions with advanced functionalities can reach $400,000 or more.  We at Brilworks offer free consultations to assess your specific needs and provide a tailored quote.",
    },
    {
      question: "Why choose Brilworks for Generative AI development services?",
      answer: (
        <>
          <span>
            There are many reasons to choose Brilworks for your generative AI
            project. Here are just a few:
          </span>
          <li>
            We focus on building AI solutions that solve real business problems,
            not just showcase technology.
          </li>
          <li>
            Our team of experienced AI developers and data scientists have a
            proven track record of success in diverse industries.
          </li>
          <li>
            We prioritize clear communication and transparency throughout the
            development process.
          </li>
          <li>
            We offer competitive pricing and flexible engagement models to fit
            your budget.
          </li>
          <li>
            We are committed to building ethical and responsible AI solutions.
          </li>
        </>
      ),
    },
    {
      question: "How much does it cost to develop software?",
      answer:
        "The development timeline for a generative AI solution can vary depending on the project's complexity. However, you can expect the process to take anywhere from 3 to 12 months.  This timeframe includes data collection and preparation, model training, testing and refinement, and integration with your existing systems.  We work closely with you to establish realistic timelines and milestones throughout the project.",
    },
  ];

  const LowCodeNoCodeFAQData = [
    {
      question: "What is Low-Code No-Code development?",
      answer:
        "Low-Code No-Code development allows you to build applications with minimal coding or no coding at all.",
    },
    {
      question: "Is Low-Code No-Code development right for my business?",
      answer:
        "Low-Code No-Code is a great fit for businesses of all sizes looking to build custom applications quickly and efficiently.",
    },
    {
      question: "What kind of applications can I build with Low-Code No-Code?",
      answer:
        "You can build a wide range of applications, from internal tools to customer-facing solutions.",
    },
  ];

  const ERPNextFAQData = [
    {
      question: "How long does it typically take to customize ERPNext?",
      answer:
        "The timeline for customization depends on the complexity of your needs. However, we provide realistic estimates during the consultation and keep you informed throughout the process. We also offer agile development methodologies to ensure flexibility and adapt to your changing requirements.",
    },
    {
      question: "What if I'm not sure what customizations I need for ERPNext?",
      answer:
        "During the consultation, our experienced team will discuss your business processes, challenges, and goals to identify areas where customization can benefit you. Based on our understanding, we'll recommend specific customization options to address your unique needs.",
    },
    {
      question: "How much does ERPNext customization cost?",
      answer:
        "The cost of customization depends on the complexity of your needs. However, we offer transparent pricing. You can schedule a free consultation to discuss your requirements and we will provide a detailed quote outlining the specific costs associated with your desired customizations. In addition, we offer flexible engagement models to fit your budget, including hourly rates or fixed-price projects.",
    },
  ];

  const BusinessIntelligenceFAQData = [
    {
      question: "How can your BI services benefit my business?",
      answer: (
        <>
          Our business intelligence (BI) services can benefit your business in
          several ways, including:
          <div>
            <span className="font-bold">Improved decision-making:&nbsp;</span>By
            providing real-time insights into your data, BI allows you to make
            data-driven decisions that are more likely to lead to success.
          </div>
          <div>
            <span className="font-bold">
              Increased efficiency and productivity:&nbsp;
            </span>
            BI can help you identify areas for optimization and streamline
            processes, leading to a more efficient and productive workforce.
          </div>
          <div>
            <span className="font-bold">
              Enhanced customer satisfaction:&nbsp;
            </span>
            BI can help you gain a deeper understanding of your customers and
            their needs, enabling you to tailor your products and services for
            better satisfaction.
          </div>
          <div>
            <span className="font-bold">Reduced costs:&nbsp;</span>BI can help
            you identify areas for cost savings and improve your return on
            investment (ROI).
          </div>
          <div>
            <span className="font-bold">Competitive advantage:&nbsp;</span>By
            leveraging the power of data analytics, you can gain a strategic
            edge over your competition.
          </div>
        </>
      ),
    },
    {
      question: "Do I need a specific data infrastructure for BI?",
      answer:
        "Not necessarily. While a well-defined data warehouse or data lake can be beneficial, many BI solutions can work with existing data sources. We can assess your current infrastructure and propose the best approach for your needs.",
    },
    {
      question: "What kind of data can be used for BI?",
      answer:
        "Almost any data relevant to your business operations can be used for BI. This includes sales data, customer data, marketing data, financial data, operational data, and more.",
    },
    {
      question: "What BI tools do you use?",
      answer:
        "We have expertise in a wide range of BI tools, including Power BI, Tableau, Qlik, and others. We will choose the best tool or combination of tools to fit your specific needs and budget.",
    },
    {
      question: "How long does it take to implement a BI solution?",
      answer:
        "The implementation timeframe varies depending on the scope and complexity of your project. We will work with you to understand your needs and create a realistic timeline.",
    },
    {
      question: "Do you offer ongoing support after implementation?",
      answer:
        "Yes, we offer ongoing support and maintenance to ensure your BI solution continues to meet your evolving needs. We can provide training to your staff, help you integrate new data sources, and update your dashboards as your business grows.",
    },
    {
      question: "What are your fees for BI services?",
      answer:
        "Our fees are tailored to your specific project requirements. We offer a variety of engagement models, including fixed-fee projects, hourly rates, and retainer agreements.",
    },
    {
      question: "How can I get started with BI?",
      answer:
        "Contact us today for a free consultation. We can discuss your business goals and challenges and create a customized BI plan that helps you unlock the power of your data.",
    },
  ];

  const FrappeDevelopmentFAQData = [
    {
      question: "What is Frappe?",
      answer:
        "Frappe is an open-source framework used for rapid application development, particularly for building ERP (Enterprise Resource Planning) systems.",
    },
    {
      question:
        "Can you customize Frappe applications to suit our specific business requirements?",
      answer:
        "Yes, we specialize in customizing Frappe application development to align with our clients' businesses' unique needs.",
    },
    {
      question: "How do you ensure the security of Frappe applications?",
      answer:
        "We follow best practices in software development and employ robust security measures to safeguard our applications against potential threats and vulnerabilities.",
    },
    {
      question:
        "What kind of support do you offer after the development phase?",
      answer:
        "We provide continuous support and maintenance services to ensure the smooth functioning of Frappe applications post-development. Our team is round-the-clock and available to address any issues or concerns that may arise.",
    },
  ];

  const FlutterFlowFAQData = [
    {
      question: "What is Flutterflow?",
      answer:
        "Flutterflow is a revolutionary tool that empowers businesses to create high-quality mobile and web apps without writing mountains of code.",
    },
    {
      question:
        "What is your engagement model for FlutterFlow development projects?",
      answer:
        "We offer flexible engagement models to cater to your specific needs. We can work on a fixed-price basis for well-defined projects, or an hourly rate for ongoing development and maintenance.",
    },
    {
      question:
        "Do you sign Non-Disclosure Agreements (NDAs) to protect our confidential ideas?",
      answer:
        "We understand the importance of confidentiality and are happy to sign an NDA before project commencement.",
    },
    {
      question:
        "What kind of support do you offer after the development phase?",
      answer:
        "The development timeline depends on the complexity of your app's features and functionalities. However, FlutterFlow's visual development approach often leads to faster development times compared to traditional coding methods. We can provide a more accurate estimate after discussing your project in detail.",
    },
    {
      question: "How much does it cost to develop a FlutterFlow app?",
      answer:
        "Similar to timelines, the cost of development varies based on project complexity, features, and required resources. We offer competitive rates and can provide a custom quote based on your specific needs.",
    },
    {
      question:
        "What are the advantages of choosing your company for FlutterFlow development?",
      answer:
        "Our team consists of experienced FlutterFlow developers who can leverage the platform's capabilities to create high-performing and visually stunning apps. We stay updated with the latest trends and best practices to ensure your app is future-proof.",
    },
    {
      question:
        "Can you integrate complex functionalities or custom code into FlutterFlow apps?",
      answer:
        "Yes, our developers are skilled in integrating custom code written in Dart to extend FlutterFlow's functionalities and achieve your desired features.",
    },
    {
      question:
        "Do you offer any post-development support or maintenance services?",
      answer:
        "We understand that app development is an ongoing process. We offer comprehensive support plans to ensure your app functions smoothly and receives timely updates as needed.",
    },
  ];

  const AdaloFAQData = [
    {
      question: "What is Adalo?",
      answer:
        "Adalo is a no-code platform that allows users to build powerful mobile and web applications without the need for extensive coding knowledge.",
    },
    {
      question: "How long does it take to develop an Adalo app?",
      answer:
        "The timeline for developing an Adalo app depends on various factors, including the complexity of the project and the specific requirements. We work closely with our clients to establish realistic timelines and ensure timely delivery.",
    },
    {
      question: "Do you provide ongoing support for Adalo apps?",
      answer:
        "Yes, we offer maintenance and support services to ensure your app remains functional and optimized even after launch. Our team is here to address any issues and implement updates as needed.",
    },
    {
      question: "Can you integrate third-party services into Adalo apps?",
      answer:
        "We have extensive experience integrating a wide range of third-party services to enhance the functionality of Adalo apps and meet our client's unique needs.",
    },
    {
      question: "Do you offer UI/UX design services for Adalo apps?",
      answer:
        "Yes, we provide comprehensive UI/UX design services to create visually stunning and user-friendly interfaces for Adalo apps. Our goal is to deliver an exceptional user experience that keeps your audience engaged.",
    },
  ];

  const StaffAugmentationFAQData = [
    {
      question: "What is an IT staff augmentation?",
      answer:
        "TIT staff augmentation is the practice of supplementing your existing IT team with temporary or permanent IT professionals. This can help you address specific skill gaps, manage workload fluctuations, and complete projects on time and within budget. By leveraging IT staff augmentation, your business can gain access to a wider talent pool, improve operational efficiency, and achieve your IT goals more effectively.",
    },
    {
      question: "What are the costs associated with IT staff augmentation?",
      answer:
        "The cost of IT staff augmentation will vary depending on the experience level of the professionals you need, the duration of the engagement, and your location.",
    },
    {
      question:
        "What IT staff augmentation models and pricing options do you offer?",
      answer: `We understand the importance of flexibility. That's why we offer three different IT staff augmentation models to fit your project needs and budget: Dedicated Developer (monthly basis), Hourly Basis (pay-as-you-go), and Time and Material (T&M) Model (transparent cost estimation).`,
    },
  ];

  const RapidDigitalisationFAQData = [
    {
      question: "How do you ensure alignment with our business objectives?",
      answer:
        "Our digital experts work closely with your team to understand your business goals and challenges, ensuring that our solutions are strategically aligned with your objectives.",
    },
    {
      question: "What technologies do you leverage for digital acceleration?",
      answer:
        "We harness a wide range of technologies, including AI, cloud computing, IoT, blockchain, and more, to drive innovation and digital transformation for our clients",
    },
    {
      question:
        "How do you measure the success of digital acceleration initiatives?",
      answer:
        "We establish key performance indicators (KPIs) and metrics aligned with your business goals to track the success and impact of our digital acceleration efforts.",
    },
    {
      question:
        "Can you provide ongoing support and maintenance post-implementation?",
      answer:
        "Yes, we offer comprehensive support and maintenance services to ensure the continued success and optimization of your digital initiatives post-implementation.",
    },
  ];

  const DedicatedTeamFAQData = [
    {
      question: "How do you ensure the security of our project?",
      answer:
        "We follow industry best practices for security, including secure coding, data encryption, and regular security audits, to safeguard your project from potential threats.",
    },
    {
      question:
        "Can we scale the team up or down based on project requirements?",
      answer:
        "Absolutely. Our flexible engagement model allows you to scale the team as needed, ensuring optimal resource utilization and cost-effectiveness.",
    },
    {
      question:
        "What level of involvement will we have in the development process?",
      answer:
        "We believe in collaborative development. You will have regular meetings, access to project management tools, and opportunities for feedback throughout the development cycle.",
    },
    {
      question: "What happens if we encounter issues post-launch?",
      answer:
        "Our support and maintenance services ensure that we're there for you even after the project is deployed. We provide timely assistance and updates to address any issues and keep your software running smoothly.",
    },
  ];

  const WebAppDevelopmentFAQData = [
    {
      question: "How long does it typically take to customize ERPNext?",
      answer:
        "The timeline for customization depends on the complexity of your needs. However, we provide realistic estimates during the consultation and keep you informed throughout the process. We also offer agile development methodologies to ensure flexibility and adapt to your changing requirements.",
    },
    {
      question: "What if I'm not sure what customizations I need for ERPNext?",
      answer:
        "During the consultation, our experienced team will discuss your business processes, challenges, and goals to identify areas where customization can benefit you. Based on our understanding, we'll recommend specific customization options to address your unique needs.",
    },
    {
      question: "How much does ERPNext customization cost?",
      answer:
        "The cost of customization depends on the complexity of your needs. However, we offer transparent pricing. You can schedule a free consultation to discuss your requirements and we will provide a detailed quote outlining the specific costs associated with your desired customizations. In addition, we offer flexible engagement models to fit your budget, including hourly rates or fixed-price projects.",
    },
  ];

  const showDataBasedOnPathname = {
    "/ai-ml-development-services/": AIMLFAQData,
    "/devops-consulting-services/": DevOpsFAQData,
    "/digital-experience-services/": DigitalExperienceFAQData,
    "/aws-consulting-services/": AWSConsultingFAQData,
    "/kubernetes-consulting-services/": KubernetesConsultingFAQData,
    "/product-engineering-development-services/": ProductEngineeringFAQData,
    "/application-development-services/": ApplicationDevFAQData,
    "/saas-application-development-services/": SaasApplicationDevFAQData,
    "/generative-ai-development-services/": GenerativeAIFAQData,
    "/low-code-no-code-development-services/": LowCodeNoCodeFAQData,
    "/erp-next-development-services/": ERPNextFAQData,
    "/business-intelligence-services/": BusinessIntelligenceFAQData,
    "/frappe-development-services/": FrappeDevelopmentFAQData,
    "/flutterflow-development-services/": FlutterFlowFAQData,
    "/adalo-development-services/": AdaloFAQData,
    "/staff-augmentation/": StaffAugmentationFAQData,
    "/hire-dedicated-software-development-team/": DedicatedTeamFAQData,
    "/rapid-digitalization/": RapidDigitalisationFAQData,
    "/web-app-development-services/": WebAppDevelopmentFAQData,
  };

  const servicesFAQData = showDataBasedOnPathname[pathname] || {};

  return (
    <div className="container max-w-[1280px] main-section-padding-bottom mx-auto">
      <div className="w-full mx-auto">
        <Heading
          type="h2"
          className="lg:!text-[34px] md:!text-3xl !text-2xl"
          text="Frequently Asked Questions"
        />

        <div className="slg:pt-10 md:pt-7.5 pt-5 reveal">
          <div itemScope="true" itemType="https://schema.org/FAQPage">
            {servicesFAQData?.map(({ question, answer }, index) => (
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

export default ServicesFAQ;
