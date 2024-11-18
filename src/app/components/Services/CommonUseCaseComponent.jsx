"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { scrollEffect } from "../lib/commonFunction";
import { usePathname } from "next/navigation";

export const CommonUseCaseComponent = ({
  icon,
  title,
  description,
  link = "/",
}) => {
  return (
    <div className=" bg-colorWhite  h-[209px] shadow-md flex flex-col justify-between gap-4 p-3 rounded-[20px]">
      <div className="flex items-center gap-3">
        <div className="p-[14px] border-[1px] border-[#EBEBEB] rounded-[10px] bg-[#F7F7F7] h-[60px] w-[60px]">
          <Image width={32} height={32} alt={title} src={icon}></Image>
        </div>
        <div className="text-[20px] font-bold">{title}</div>
      </div>
      <div className="text-[#504F4F]">{description}</div>
      <hr />
      <Link
        className="gradient-text-blue font-semibold text-[20px] flex  justify-center"
        href={link}
      >
        Read More
      </Link>
    </div>
  );
};

export default function CommonUseCases() {
  const GenAIUsecases = [
    {
      icon: "/images/healthcare.svg",
      title: "Healthcare",
      description:
        "Revolutionizing patient care with secure and scalable solutions.",
      link: "/use-case/generative-ai-in-healthcare/",
    },
    {
      icon: "/images/fintech.svg",
      title: "Fintech",
      description:
        "Driving financial innovation with secure, high-performance technology.",
      link: "/use-case/gen-ai-in-fintech/",
    },
    {
      icon: "/images/setting.svg",
      title: "Media & Entertainment",
      description:
        "Transforming content delivery and audience engagement seamlessly.",
      link: "/use-case/generative-ai-in-media-and-entertainment/",
    },
    {
      icon: "/images/setting.svg",
      title: "Manufacturing",
      description:
        "Streamlining operations and optimizing production processes.",
      link: "/use-case/generative-ai-in-manufacturing/",
    },
    {
      icon: "/images/retail.svg",
      title: "Retail",
      description: "Enhancing shopping experiences with data-driven solutions.",
      link: "/use-case/generative-ai-in-retail/",
    },
  ];
  const AWSconsultingUsecases = [
    {
      icon: "/images/healthcare.svg",
      title: "Healthcare",
      description: "Empowering healthcare with scalable, secure AWS solutions.",
      link: "/use-case/aws-in-healthcare/",
    },
    {
      icon: "/images/IOT.svg",
      title: "IoT",
      description: "Enabling smart, connected devices with AWS IoT services.",
      link: "/use-case/aws-in-IoT/",
    },
    {
      icon: "/images/ecommerce.svg",
      title: "E-commerce",
      description:
        "Boosting online retail with AWS-powered personalized experiences.",
      link: "/use-case/aws-in-ecommerce/",
    },
  ];
  const pathname = usePathname();
  const getMyUseCase = {
    "/generative-ai-development-services/": GenAIUsecases,
    "/aws-consulting-services/": AWSconsultingUsecases,
  };
  const data = getMyUseCase[pathname];
  useEffect(() => {
    scrollEffect();
    window.addEventListener("scroll", scrollEffect);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);
  return (
    <div className="bg-sectionBG flex items-center flex-col p-10 gap-10 reveal">
      <h1 className="text-[48px] font-semibold reveal">Industry Use Cases</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 reveal">
        {data.map((item, index) => {
          return (
            <div key={index}>
              <CommonUseCaseComponent
                icon={item.icon}
                title={item.title}
                description={item.description}
                link={item.link}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
