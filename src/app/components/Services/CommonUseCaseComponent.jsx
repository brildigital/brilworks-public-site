"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { scrollEffect } from "../lib/commonFunction";
import { usePathname } from "next/navigation";
import Heading from "../HTMLComponents/Heading";

export const UseCaseCard = ({ icon, title, description, link = "/" }) => {
  return (
    <div className=" bg-colorWhite shadow-md flex flex-col justify-between p-5 pt-[18px] rounded-[20px]">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-[14px] border-[1px] border-[#EBEBEB] rounded-[10px] bg-[#F7F7F7] w-[60px]">
          <Image width={32} height={32} alt={title} src={icon}></Image>
        </div>
        <div className="text-xl font-semibold">{title}</div>
      </div>
      <div className="text-colorGray">{description}</div>
      <hr className="my-4" />

      <Link
        className="gradient-text-blue font-semibold text-center"
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
    <div className="bg-sectionBG">
      <div className="container max-w-[1280px] main-section-padding mx-auto">
        <div className="w-full">
          <Heading
            type="h2"
            className="lg:!text-[34px] md:!text-3xl !text-2xl mb-4 md:!leading-snug w-full !text-center"
            text="Industry Use Cases"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-7 reveal">
            {data.map((item, index) => {
              return (
                <div key={index}>
                  <UseCaseCard
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
      </div>
    </div>
  );
}
