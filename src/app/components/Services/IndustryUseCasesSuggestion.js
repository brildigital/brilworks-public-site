"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { scrollEffect } from "../lib/commonFunction";
import { usePathname } from "next/navigation";
import Heading from "../HTMLComponents/Heading";
export default function IndustryUseCasesSuggestion() {
  const GenAIUsecases = [
    {
      icon: "/images/v2/healthcare.svg",
      title: "Healthcare",
      description:
        "Revolutionizing patient care with secure and scalable solutions.",
      link: "/use-case/generative-ai-in-healthcare/",
    },
    {
      icon: "/images/v2/fintech.svg",
      title: "Fintech",
      description:
        "Driving financial innovation with secure, high-performance technology.",
      link: "/use-case/gen-ai-in-fintech/",
    },
    {
      icon: "/images/v2/setting.svg",
      title: "Media & Entertainment",
      description:
        "Transforming content delivery and audience engagement seamlessly.",
      link: "/use-case/generative-ai-in-media-and-entertainment/",
    },
    {
      icon: "/images/v2/setting.svg",
      title: "Manufacturing",
      description:
        "Streamlining operations and optimizing production processes.",
      link: "/use-case/generative-ai-in-manufacturing/",
    },
    {
      icon: "/images/v2/retail.svg",
      title: "Retail",
      description: "Enhancing shopping experiences with data-driven solutions.",
      link: "/use-case/generative-ai-in-retail/",
    },
  ];
  const AWSconsultingUsecases = [
    {
      icon: "/images/v2/healthcare.svg",
      title: "Healthcare",
      description: "Empowering healthcare with scalable, secure AWS solutions.",
      link: "/use-case/aws-in-healthcare/",
    },
    {
      icon: "/images/v2/IOT.svg",
      title: "IoT",
      description: "Enabling smart, connected devices with AWS IoT services.",
      link: "/use-case/aws-in-IoT/",
    },
    {
      icon: "/images/v2/ecommerce.svg",
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
    <div className="container max-w-[1280px] main-section-padding-top mx-auto">
      <Heading
        type="h2"
        className="lg:!text-[34px] md:!text-3xl !text-2xl mb-4 md:!leading-snug w-full"
        text="Industry Use Cases"
      />
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 md:gap-7.5 lg:gap-10 lg:pt-10 md:pt-7.5 pt-5">
        {data.map(({ title, icon, description, link }) => (
          <div
            className="bg-white flex flex-col justify-between items-start border rounded-2xl border-borderGray md:p-7.5 p-5"
            key={title}
          >
            <div>
              <div className="w-fit brilliant-icon rounded-md mb-5">
                <div className="flex items-center justify-start p-4 bg-white rounded-md">
                  <Image
                    className="md:w-8 md:h-8 w-6 h-6"
                    src={icon}
                    alt={`${title}-icon`}
                    width={32}
                    height={32}
                  />
                </div>
              </div>
              <Heading
                type="h3"
                className="text-colorBlack md:!text-xl !text-lg font-medium"
                text={title}
              />
              <p className="md:text-lg text-base py-4">{description}</p>
              <Link
                className="md:text-xl text-lg font-medium text-themeColor hover:text-colorBlack duration-500"
                href={link}
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
