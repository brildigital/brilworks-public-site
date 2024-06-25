"use client";
import { usePathname } from "next/navigation";
import React from "react";

const DevOpsShipFaster = () => {
  const pathname = usePathname();

  const devOpsData = {
    heading:
      "Ship Faster, Test Smarter, Deploy Smoother: DevOps Consulting for Modern Businesses",
    para1:
      "We're a leading DevOps consulting service company dedicated to building high-performing software delivery pipelines that streamline your workflow, accelerate releases, and empower your teams.",
    para2:
      " Our expert consultants work alongside your team to identify your unique challenges and design a pipeline tailored to address your unique needs. We leverage the latest tools and cutting-edge technologies, from GitLab CI/CD to containerization solutions, to create a system that aligns perfectly with your specific needs.",
  };
  const productEngineeringData = {
    heading:
      "Build High-Performance Products with Our Product Engineering Services",
    para1:
      "  We combine cutting-edge technology with a deep understanding of user needs to deliver exceptional solutions that push boundaries and leave a lasting impression. Let's craft an innovative product that stands out in a crowded marketplace.",
  };

  const saasApplicationDevData = {
    heading: "Your Trusted Partner for Next-Gen SaaS Development",
    para1:
      "At Briworks, we’re a team of award-winning SaaS architect and developers with proven track record of building secure, scalable, and user-centric cloud applications.",
    para2:
      "We leverage the latest technology and industry best practices to deliver future proof  solutions that optimize your operations, drive growth, and captivate users. Partner with us and experience the difference - expertise, agility, and dedication to your success.",
  };

  const generativeAIData = {
    heading: "Transform Your Business with Generative AI",
    para1:
      "Unlock the vast potential of generative AI to creatively revolutionize how your business operates. Whether it's generating original content, designing innovative applications, or creating novel customer experiences, generative AI serves as a catalyst for significant productivity improvements and operational transformation. Utilize Amazon's Bedrock and Foundation Models, available through SageMaker Jumpstart, to train your models using your own internal data while maintaining its confidentiality.",
    para2:
      "At Brilworks, we offer the depth of experience and technical expertise needed to launch or scale your generative AI initiatives effectively. Whether you are beginning your AI journey or seeking to enhance your existing model's infrastructure, our team is equipped to guide you through every step of the process, ensuring tailored solutions that drive real results.",
  };

  const applicationDevData = {
    heading: "Your Innovation Partner in Cutting-Edge Development",
    para1:
      "We're more than just developers. Our team of elite engineers and strategists become an extension of yours, collaborating to develop groundbreaking solutions on any platform.",
    para2:
      "Your success is paramount. Client satisfaction is woven into every stage of our process, from brainstorming your initial concept to ongoing support after launch.",
  };

  const frappeDevelopmentData = {
    heading: "Frappe Development Solutions by Brilworks",
    para1:
      "Missing a Frappe feature? We'll plug the gap. We're the architects you've been searching for – from customizing existing Frappe applications to developing bespoke solutions from scratch, we have the expertise to meet your unique requirements.",
  };

  const flutterFlowDevelopmentData = {
    heading:
      "We offer premium Flutterflow development services to turn your dreams into reality",
    para1:
      "Our FlutterFlow development services include FlutterFlow web and app development. Hire pre-vetted Flutter developers from Brilworks to work with your own team. Contact us today and hire top-rated Flutter experts in just 48 hours.",
  };

  const adaloDevelopmentData = {
    heading: "Your Adalo Partner: Our Development Services",
    para1:
      "As a leading Adalo development company, we thrive on creating tailored solutions that cater to our clients' diverse needs. Our team of skilled developers combines technical prowess with creative flair to build apps that not only meet but exceed expectations.",
  };

  const showDataBasedOnPathname = {
    "/devops-consulting-services/": devOpsData,
    "/product-engineering-development-services/": productEngineeringData,
    "/saas-application-development-services/": saasApplicationDevData,
    "/application-development-services/": applicationDevData,
    "/generative-ai-development-services/": generativeAIData,
    "/erp-next-development-services/": applicationDevData,
    "/low-code-no-code-development-services/": applicationDevData,
    "/business-intelligence-services/": applicationDevData,
    "/frappe-development-services/": frappeDevelopmentData,
    "/flutterflow-development-services/": flutterFlowDevelopmentData,
    "/adalo-development-services/": adaloDevelopmentData,
  };

  const { heading, para1, para2 } = showDataBasedOnPathname[pathname];

  return (
    <div className="md:mt-[5%] lg:mt-[5%] xl:-mt-[4%] 2xl:-mt-[10%] mt-[30px] mx-auto w-[90%]">
      <div className="bg-themeLight md:bg-cover md:bg-no-repeat rounded-[38px] xl:p-14 py-8">
        <h2
          className={`${
            pathname === "/product-engineering-development-services/" ||
            pathname === "/devops-consulting-services/" ||
            pathname === "/flutterflow-development-services/"
              ? ""
              : "md:w-3/5"
          } w-[90%] md:text-center text-left mx-auto mb-8 !text-2xl !leading-10 md:!text-[2rem] lg:!text-5xl md:!leading-[52px] lg:!leading-[52px]`}
        >
          {heading}
        </h2>
        <p className="md:text-2xl text-lg md:text-center text-left w-11/12 mx-auto">
          {para1}
        </p>
        <br />
        {para2 && (
          <p className="md:text-2xl text-lg md:text-center text-left w-11/12 mx-auto">
            {para2}
          </p>
        )}
      </div>
    </div>
  );
};

export default DevOpsShipFaster;
