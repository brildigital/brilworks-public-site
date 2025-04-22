"use client";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const TechStackWeUse = dynamic(() => import("./TechStackWeUse"));
const Honors = dynamic(() => import("../Homepage/Honors"));
const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));
const ServicesWhyChooseUs = dynamic(() => import("./ServicesWhyChooseUs"));
const SeeingBelieving = dynamic(() => import("../Homepage/SeeingBelieving"));
const HomePageBlogs = dynamic(() => import("../Homepage/HomePageBlogs"));
const ServicesFAQ = dynamic(() => import("./ServicesFAQ"));

const DigitalExperienceService = () => {
  const DigitalExperienceServiceData = [
    {
      title: "Digital Experience Strategy",
      value: "value-1",
      description:
        "We map your unique path to digital success, defining goals, user personas, and a winning roadmap.",
      imageSrc: "/images/digital-ex-img.webp",
      imageAlt: "Digital experience img",
    },
    {
      title: "Experience Design & Development",
      value: "value-1",
      description:
        "Craft seamless and captivating interfaces across web, mobile, and emerging platforms.",
      imageSrc: "/images/digital-experience-dev.webp",
      imageAlt: "Experience design dev img",
    },
    {
      title: "Content Management & Personalization",
      value: "value-1",
      description:
        "Deliver dynamic, targeted content that resonates with every individual.",
      imageSrc: "/images/content-mgmt.webp",
      imageAlt: "Content Mgmt img",
    },
    {
      title: "Marketing Automation & Analytics",
      value: "value-1",
      description:
        "Streamline your campaigns and measure impact with data-driven insights.",
      imageSrc: "/images/marketing-automation.webp",
      imageAlt: "Marketing Automation img",
    },
    {
      title: "Commerce & Payment Integration",
      value: "value-1",
      description:
        "Build frictionless shopping experiences that convert every click.",
      imageSrc: "/images/e-commerce-payment.webp",
      imageAlt: "Commerce Payment img",
    },
    {
      title: "Integration & API Development",
      value: "value-1",
      description:
        "Connect your systems seamlessly for a unified customer journey.",
      imageSrc: "/images/integartion-api-dev.webp",
      imageAlt: "Integration API img",
    },
  ];
  return (
    <div className="services pt-[4rem] mx-auto">
      <div>
        <div className="relative">
          <div className="home_sec1_img">
            <div className="banner-bg w-full block md:hidden h-[600px]"></div>
            <Image
              className="w-full md:block hidden h-auto"
              src="https://a.storyblok.com/f/219851/4500x2487/ee4ef3dd60/digital-experience-banner.webp"
              alt="Digital experience banner"
              width="1440"
              height="796"
              priority
              sizes="(max-width: 767px) 550px, 1440px"
            />
          </div>
          <div className="sec1_txt_position !left-[5%] !top-[15%]">
            <h1 className="mb-[30px] w-full md:w-1/2">
              Digital Experience Services
            </h1>
            <p className="!text-colorGray !mb-10 w-full md:w-1/2">
              At Brilworks, we empower startups & businesses to spark and
              enhance their digital journeys with our comprehensive suite of
              digital experience services combined with intelligent solutions
              and engineering expertise.
            </p>
            <Link href="/contact-us/">
              <div className="header_sec1_txt2">
                <p className="transition uppercase !text-base">
                  Let’s Get Started
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <ServicesWhyChooseUs />
      <Honors />
      <TechStackWeUse />
      <ClientReviews />
      <SeeingBelieving />
      <HomePageBlogs />
      <ServicesFAQ />
    </div>
  );
};

export default DigitalExperienceService;
