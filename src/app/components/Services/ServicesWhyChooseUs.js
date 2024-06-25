"use client";
import React from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const Svgs = dynamic(() => import("../Svgs"));

const ServiceCard = ({ title, description }) => (
  <div className="service_detail_card_border p-[1px] rounded-lg">
    <div className="flex flex-col gap-2 border border-transparent p-4 rounded-lg cursor-pointer bg-white">
      <div className="text-2xl font-bold">{title}</div>
      <p className="text-base text-colorGray">{description}</p>
    </div>
  </div>
);

const ServicesWhyChooseUs = () => {
  const pathname = usePathname();

  const whyChooseUscontent = [
    {
      title: "Cost-Effective Excellence",
      description:
        "Cost-effective e-solutions that deliver maximum value for your investment.",
    },
    {
      title: "Proven Expertise",
      description:
        "Proven expertise from our seasoned professionals with over 8 years of experience.",
    },
    {
      title: "Innovative Solution",
      description:
        "Innovative solutions that leverage emerging technologies to exceed industry standards.",
    },
    {
      title: "Diverse Portfolio",
      description:
        "A diverse portfolio of over 120 successfully developed applications across various industries.",
    },
    {
      title: "Client-Centric Approach",
      description:
        " A client-centric approach that prioritizes your unique needs and fosters long-term partnerships.",
    },
    {
      title: "Dedicated Support",
      description:
        "  Dedicated support to ensure smooth integration, troubleshooting and updates for optimal software performance.",
    },
  ];
  const whyChooseUsStaffAugmentation = [
    {
      title: "Cost-effective",
      description:
        "With our IT staff augmentation services, you gain access to the talent you need without the burden of overhead costs associated with traditional hiring processes.",
    },
    {
      title: "Highly Skilled Developers",
      description:
        "By choosing us, you gain access to a pool of highly skilled developers, software engineers, business analysts, Scrum Masters, and QA specialists.",
    },
    {
      title: "Domain Expertise",
      description:
        "Whether you operate in finance, healthcare, e-commerce, or any other sector, we have the expertise to support you.",
    },
    {
      title: "Seamless Staffing",
      description:
        "We connect you with pre-vetted, highly skilled professionals who can seamlessly integrate into your existing team.",
    },
    {
      title: "Flexibility and Scalability",
      description:
        "Our staff augmentation services provide unmatched flexibility. Scale your IT team up or down seamlessly to meet your project requirements and evolving business needs.",
    },
    {
      title: "Dedicated Support",
      description:
        "Client satisfaction is our priority. We are committed to providing ongoing support and clear communication throughout your partnership with us.",
    },
  ];

  const whyChooseUsDevOps = [
    {
      title: "Streamlined Workflows",
      description:
        "Brilworks helps you automate manual tasks and set up CI/CD pipelines, leading to faster development cycles and fewer errors.",
    },
    {
      title: "Expertise Across Technologies",
      description:
        "Regardless of your tools – cloud platforms, containers, IaC – we have the expertise to handle your specific DevOps needs.",
    },
    {
      title: "Improved Collaboration",
      description:
        "We break down silos between Dev, Ops, and Security teams for smooth collaboration and enhanced efficiency.",
    },
    {
      title: "Scalability and Flexibility",
      description:
        "Adapt your infrastructure and processes to dynamic requirements with ease and confidence.",
    },
    {
      title: "Cost Optimization",
      description:
        "Streamline your DevOps practices for reduced waste and improved profitability, maximizing your bottom line.",
    },
    {
      title: "Proven Track Record",
      description:
        "Our expertise delivers demonstrably successful DevOps implementations, giving you peace of mind.",
    },
  ];

  const whyChooseUsDigitalExperience = [
    {
      title: "Award-Winning Expertise",
      description:
        "Recognized for innovation and excellence by Clutch, Techreviewer, and more.",
    },
    {
      title: "Human-Centered Approach",
      description:
        "We prioritize understanding your unique needs and building solutions that resonate.",
    },
    {
      title: "Agile & Collaborative",
      description:
        "We work closely with your team, ensuring open communication and swift adjustments.",
    },
    {
      title: "End-to-End Support",
      description:
        "We offer a full spectrum of services, from ideation to implementation and ongoing maintenance.",
    },
    {
      title: "Scalable & Secure",
      description:
        "Our solutions are built with future growth and industry-leading security standards in mind.",
    },
  ];

  const whyChooseUsAWSConsulting = [
    {
      title: "Proven Track Record",
      description:
        "We have a successful history of delivering value to businesses of all sizes across diverse industries.",
    },
    {
      title: "Customer-Centric Approach",
      description:
        "We prioritize close collaboration and open communication, ensuring your satisfaction every step of the way.",
    },
    {
      title: "Innovation & Expertise",
      description:
        "Our team stays ahead of the curve with the latest AWS technologies and best practices, bringing continuous value to your cloud journey.",
    },
    {
      title: "Scalability & Flexibility",
      description:
        "We adapt to your evolving needs, readily scaling our services to support your growth and changing priorities.",
    },
  ];

  const whyChooseUsKubernetesConsulting = [
    {
      title: "Transparency and support",
      description:
        "We prioritize clear and constant communication throughout the entire process, ensuring you are involved and informed in every step. ",
    },
    {
      title: "Proven track record",
      description:
        "We have empowered businesses across several domains with tailored Kubernetes solutions, helping them achieve an average 30% improvement and 40% reduction in downtime.",
    },
    {
      title: "Certified team",
      description:
        "As a leading Kubernetes consulting service provider, we house a team of certified experts who hold certification from reputed organizations.",
    },
    {
      title: "Scalable team",
      description:
        "Gain the advantage of a flexible team structure that allows Brilworks to adjust resource allocation based on your specific project requirements.",
    },
    {
      title: "Domain Expertise",
      description:
        "Our engineers specialize in architecting, deploying, and optimizing Kubernetes solutions tailored to meet the unique needs of our clients across industries.",
    },
    {
      title: "Agile Development",
      description:
        "Our agile approach to Kubernetes implementation breaks down projects into smaller, interactive cycles, enabling you to gain value from your investment sooner.",
    },
  ];

  const whyChooseUsProductEngineering = [
    {
      title: "Expert Team",
      description:
        "Skilled engineers with a wealth of experience to every project, ensuring successful product development from concept to launch.",
    },
    {
      title: "Agile Approach",
      description:
        "We use a flexible, iterative development process to adapt to your needs and deliver high-quality results quickly.",
    },
    {
      title: "Quality Focus",
      description:
        "We are committed to delivering exceptional products. Our rigorous testing processes ensure your product is reliable, bug-free, and exceeds expectations.",
    },
    {
      title: "Scalable Solutions",
      description:
        "We build products that can grow with your business. Our solutions are designed to be adaptable and integrate seamlessly with future needs.",
    },
    {
      title: "On-Time Delivery",
      description:
        "Our efficient processes and clear communication ensure your project is delivered on time and within budget.",
    },
    {
      title: "Transparent Communication",
      description:
        "We believe in open communication throughout the development process. You'll always be informed and involved in every step of the product's journey.",
    },
  ];

  const whyChooseUsApplicationDev = [
    {
      title: "Experienced Team",
      description:
        "Our team of skilled developers possesses a deep understanding of diverse technologies and platforms.",
    },
    {
      title: "Client-Centric Approach",
      description:
        "We collaborate closely with you to understand your unique vision and business goals.",
    },
    {
      title: "Scalable Solutions",
      description:
        "We build applications that grow with your business, ensuring long-term value.",
    },
    {
      title: "Transparent Communication",
      description:
        "We keep you informed throughout the development process, fostering trust and collaboration.",
    },
    {
      title: "Proven Track Record",
      description:
        "We have a history of successful project completions, delivering exceptional results for clients across various industries.",
    },
    {
      title: "Competitive Rates",
      description:
        "We offer competitive pricing models to fit your budget and project requirements.",
    },
  ];

  const whyChooseUsSaasApplicationDev = [
    {
      title: "Fast Track Your Idea",
      description:
        "We don't just code, we co-create. Our experts refine your vision and propel it through efficient development, all under one roof.",
    },
    {
      title: "UX Obsessed Design",
      description:
        "We craft interfaces that captivate users while building fortresses around your data. Your SaaS will be both stunning and secure.",
    },
    {
      title: "Scalable Architecture from Day One",
      description:
        "Forget costly overhauls – your application seamlessly adapts to your ever-expanding needs. We design your SaaS to flex with your growth.",
    },
    {
      title: "Future-Proof Tech Stack Expertise",
      description:
        "We stay ahead of the curve, leveraging cutting-edge technology to create a future-proof SaaS. Stay competitive with a solution that never goes out of style.",
    },
    {
      title: "Collaborative Development for Success",
      description:
        "We're not just developers; we're your partners in success. Clear communication and collaboration ensure your vision becomes a reality.",
    },
    {
      title: "Continuous Innovation for Your SaaS",
      description:
        "We offer ongoing support and maintenance, constantly evolving it to meet changing needs and user demands.",
    },
  ];

  const whyChooseUsGenerativeAI = [
    {
      title: "Beyond Automation, Embrace Innovation",
      description:
        "We don't just automate tasks; we empower your AI to generate entirely new content, concepts, and ideas. ",
    },
    {
      title: "We Speak Your Language, and AI's",
      description:
        "Our team of AI experts bridge the gap between your domain knowledge and the complex world of generative models.",
    },
    {
      title: "Agility at the Core",
      description:
        "We stay ahead of the curve, continuously refining our techniques and integrating the latest advancements.  Your project benefits from cutting-edge technology without the learning curve.",
    },
    {
      title: "Scalable AI solutions",
      description:
        "The world is constantly evolving, and your AI shouldn't be left behind. Our solutions are built to scale and adapt alongside your business.",
    },
    {
      title: "AI for Everyone",
      description:
        "We're not just developers; we're your partners in success. Clear communication and collaboration ensure your vision becomes a reality.",
    },
  ];
  const whyChooseUsLowCodeNoCode = [
    {
      title: "Unmatched Expertise",
      description:
        "Our team boasts seasoned professionals with deep experience in Low-Code No-Code development.",
    },
    {
      title: "Agility and Speed",
      description:
        "Get your applications up and running faster than ever before, with minimal coding requirements.",
    },
    {
      title: "Cost-Effectiveness",
      description:
        "Eliminate the high costs associated with traditional software development projects.",
    },
    {
      title: "Scalability and Flexibility",
      description:
        "Build applications that adapt and grow alongside your business needs.",
    },
    {
      title: "User-Friendly Platform",
      description:
        "Our intuitive platform empowers both technical and non-technical users to create powerful applications.",
    },
  ];

  const whyChooseUsERPNextDev = [
    {
      title: "Expert Storytellers",
      description:
        "We're not just data visualization developers; we're data storytellers. We go beyond creating charts and graphs; we craft compelling narratives that resonate with your audience and drive action.",
    },
    {
      title: "Unmatched Tool Expertise",
      description:
        "We are well-versed in industry-leading platforms like Power BI and Tableau, allowing us to tailor solutions that perfectly match your specific needs and data ecosystem.",
    },
    {
      title: "Actionable Insights, Delivered",
      description:
        "Our focus is on delivering actionable insights, not just beautiful dashboards. We work closely with you to understand your business goals and translate data into clear, actionable recommendations.",
    },
    {
      title: "Data Visualization with Impact",
      description:
        "We don't just develop dashboards; we design them for impact. Our team creates visually stunning and interactive dashboards that are easy to understand and navigate, ensuring maximum user engagement.",
    },
    {
      title: "Agile & Collaborative Approach",
      description:
        "We believe in a collaborative approach, working closely with your team throughout the development process to ensure your vision comes to life.",
    },
  ];

  const whyChooseUsBusinessIntelligence = [
    {
      title: "Advanced Analytics",
      description:
        "We go beyond basic reporting, employing machine learning and artificial intelligence (AI) to uncover hidden patterns and predict future trends.",
    },
    {
      title: "Stay Ahead of the Curve",
      description:
        "Our team constantly explores and implements the latest BI tools and technologies to ensure you have a future-proof solution.",
    },
    {
      title: "Real-Time Analytics",
      description:
        "Leverage the power of in-memory computing and real-time data pipelines for instant insights that fuel faster decision-making.",
    },
    {
      title: "Exceptional User Experiences",
      description:
        "Our data visualization experts create intuitive and interactive dashboards that bring your data to life for users of all technical abilities.",
    },
  ];
  const whyChooseUsFrappee = [
    {
      title: "Develop custom solutions",
      description:
        "We build custom applications tailored precisely to your workflows, giving your business a leg up.",
    },
    {
      title: "Frappe integrations",
      description:
        "We will break down data silos and streamline information flow by integrating your Frappe system with other applications.",
    },
    {
      title: "Round-the-clock support",
      description:
        "We'll handle ongoing Frappe support and maintenance so you can focus on running your business with peace of mind.",
    },
    {
      title: "Expertise",
      description:
        "Our team comprises expert Frappe developers with extensive experience in delivering high-quality solutions.",
    },
    {
      title: "Client-Centric Approach",
      description:
        "We prioritize client satisfaction and work closely with you to ensure that our solutions meet your expectations.",
    },
    {
      title: "Personalized Attention",
      description:
        "Receive personalized attention from our dedicated support team, who are committed to understanding your specific needs and providing tailored solutions to meet them.",
    },
  ];

  const whyChooseUsFlutterflow = [
    {
      title: "Top talent",
      description:
        "We have the best Flutter talent who have rich experience in Flutter web and app development.",
    },
    {
      title: "Dedicate expert",
      description:
        "Vetted expert who becomes an integral part of your team in just 48 hours.",
    },
    {
      title: "Flexible engagement model",
      description:
        "Choose the pricing model that best suits you: fixed fees for predictable costs or hourly billing.",
    },
    {
      title: "Faster Development",
      description:
        "Get your app to market quicker with our expertise in FlutterFlow's rapid development tools.",
    },
    {
      title: "Expert Developers",
      description:
        "Our team consists of highly skilled FlutterFlow developers who stay up-to-date on the latest features and best practices.",
    },
    {
      title: "Enhanced UX Focus",
      description:
        "We prioritize user experience by crafting intuitive and visually appealing UIs with FlutterFlow.",
    },
  ];

  const whyChooseUsAdalo = [
    {
      title: "Expertise",
      description:
        "Our team consists of experienced Adalo developers who are passionate about delivering excellence.",
    },
    {
      title: "Creativity",
      description:
        "We think outside the box to create innovative solutions that set your app apart.",
    },
    {
      title: "Client-Centric Approach",
      description:
        "Your satisfaction is our top priority, and we strive to exceed your expectations at every step.",
    },
    {
      title: "Timely Delivery",
      description:
        "We understand the importance of deadlines and work diligently to deliver projects on time and within budget.",
    },
  ];

  const showDataBasedOnPathname = {
    "/ai-ml-development-services/": whyChooseUscontent,
    "/staff-augmentation/": whyChooseUsStaffAugmentation,
    "/devops-consulting-services/": whyChooseUsDevOps,
    "/digital-experience-services/": whyChooseUsDigitalExperience,
    "/aws-consulting-services/": whyChooseUsAWSConsulting,
    "/kubernetes-consulting-services/": whyChooseUsKubernetesConsulting,
    "/product-engineering-development-services/": whyChooseUsProductEngineering,
    "/application-development-services/": whyChooseUsApplicationDev,
    "/saas-application-development-services/": whyChooseUsSaasApplicationDev,
    "/generative-ai-development-services/": whyChooseUsGenerativeAI,
    "/low-code-no-code-development-services/": whyChooseUsLowCodeNoCode,
    "/erp-next-development-services/": whyChooseUsERPNextDev,
    "/business-intelligence-services/": whyChooseUsBusinessIntelligence,
    "/frappe-development-services/": whyChooseUsFrappee,
    "/flutterflow-development-services/": whyChooseUsFlutterflow,
    "/adalo-development-services/": whyChooseUsAdalo,
  };

  const data = showDataBasedOnPathname[pathname];

  const firstThree = data.slice(0, data.length === 4 ? 2 : 3);
  const remainingThree = data.slice(data.length === 4 ? 2 : 3, data?.length);

  return (
    <div className="container mx-auto">
      <div className="md:w-[90%] w-full mx-auto px-6 xl:py-24 md:py-16 py-8 end-to-end">
        <div className="endTO_text solutions">
          {pathname === "/application-development-services/" ? (
            <h2 className="text-center w-2/3">
              Why Choose Brilworks for your App Development Needs?
            </h2>
          ) : (
            <>
              {pathname === "/saas-application-development-services/" ||
              pathname === "/generative-ai-development-services/" ? (
                <h2 className="text-center w-2/3">Here's what sets us apart</h2>
              ) : (
                <>
                  {pathname === "/frappe-development-services/" ? (
                    <h2 className="text-center w-full">
                      Why Choose Brilworks for Frappe Development?
                    </h2>
                  ) : (
                    <>
                      {pathname === "/staff-augmentation/" ? (
                        <h2 className="!w-full p-0">
                          Why Brilworks For IT Staff Augmentation Service
                        </h2>
                      ) : (
                        <h2 className="text-center w-full">
                          Why Choose Brilworks?
                        </h2>
                      )}
                    </>
                  )}
                </>
              )}
            </>
          )}
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-5 md:mt-16 mt-8 reveal">
          <div className="flex flex-col md:gap-20">
            {firstThree?.map(({ title, description }, index) => (
              <ServiceCard
                key={index}
                title={title}
                description={description}
              />
            ))}
            {/* <ServiceCard
              title="Cost-effective"
              description="With our IT staff augmentation services, you gain access to the talent you need without the burden of overhead costs associated with traditional hiring processes."
            />
            <ServiceCard
              title="Highly Skilled Developers"
              description="By choosing us, you gain access to a pool of highly skilled developers, software engineers, business analysts, Scrum Masters, and QA specialists."
            />
            <ServiceCard
              title="Domain Expertise"
              description="Whether you operate in finance, healthcare, e-commerce, or any other sector, we have the expertise to support you."
            /> */}
          </div>
          <div className="m-auto why_staff_augmentation">
            <Svgs name="staff-augmentation-service" />
          </div>

          <div className="flex flex-col md:gap-20">
            {remainingThree?.map(({ title, description }, index) => (
              <ServiceCard
                key={index}
                title={title}
                description={description}
              />
            ))}
            {/* <ServiceCard
              title="Seamless Staffing"
              description="We connect you with pre-vetted, highly skilled professionals who can seamlessly integrate into your existing team."
            />
            <ServiceCard
              title="Flexibility and Scalability"
              description="Our staff augmentation services provide unmatched flexibility. Scale your IT team up or down seamlessly to meet your project requirements and evolving business needs."
            />
            <ServiceCard
              title="Dedicated Support"
              description="Client satisfaction is our priority. We are committed to providing ongoing support and clear communication throughout your partnership with us"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesWhyChooseUs;
