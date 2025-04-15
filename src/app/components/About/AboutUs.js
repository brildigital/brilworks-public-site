"use client";
import { useEffect } from "react";
import { scrollEffect } from "../lib/commonFunction";
import Image from "next/image";
import Heading from "../HTMLComponents/Heading";
import IndustriesWeServe from "../Homepage/IndustriesWeServe";
import CTASection from "../Common/CTASection";
import MeetOurTeam from "./MeetOurTeam";
import MultipleKeyValueWithBG from "../Common/MultipleKeyValueWithBG";

const AboutUs = () => {
  useEffect(() => {
    scrollEffect();
    window.addEventListener("scroll", scrollEffect);

    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);

  const greatnessSkills = [
    {
      value: "60%",
      description: "Professional Employee",
      color: "#E5F4FF",
    },
    {
      value: "120+",
      description: "Projects Completed",
      color: "#E9FFE2",
    },
    {
      value: "8+",
      description: "Years of Experience",
      color: "#FFE2E5",
    },
    {
      value: "98%",
      description: "Project Success Rate",
      color: "#FFE8FC",
    },
  ];

  const brilBeliefData = [
    {
      title: "Trustworthy Partnership",
      imageSrc: "/images/v2/partnership.png",
      description:
        "We build lasting, trusted partnerships by providing top talent, expertise, and innovative solutions to tackle complex challenges with confidence.",
    },
    {
      title: "High Caliber Talent",
      imageSrc: "/images/v2/medal-star.svg",
      description:
        "We hire top talent to drive our vision, staying ahead with rising technologies to ensure innovation, excellence, & exceptional customer service.",
    },
    {
      title: "Growth Mindset",
      imageSrc: "/images/v2/growth-midset-img.png",
      description:
        "We provide end-to-end solutions, from strategy to execution, crafting intuitive experiences that align with your vision.",
    },
  ];

  return (
    <>
      <div className="about-us-banner">
        <div className="banner-layer h-full min-h-[600px] md:max-h-[980px] max-h-full">
          <div className="container max-w-[1280px] main-section-padding !pt-28 mx-auto">
            <section className="flex flex-col md:flex-row items-center justify-start md:h-screen h-full min-h-[600px] md:max-h-[840px] max-h-full lg:gap-16 md:gap-10 gap-6">
              <div className="md:w-1/2 w-full">
                <p className="text-colorWhite uppercase md:text-2xl text-xl md:!mb-7.25 !mb-5">
                  About Us
                </p>
                <Heading
                  type="h1"
                  className="text-white"
                  text="Your Tech Partner in a Fast Changing World."
                />
                <p className="text-white lg:text-2xl md:text-xl text-lg !mt-5">
                  We create digital experiences that drive business performance
                  to help organizations adapt to shifts in customer seek
                  behaviour and technology.
                </p>
              </div>
              <div className="md:w-1/2 w-full">
                <Image
                  src="/images/v2/about-us-hero-img.webp"
                  width={565}
                  height={470}
                  className="w-full"
                  alt="about-hero-img"
                />
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="container max-w-[1280px] main-section-padding mx-auto">
        <section className="flex flex-col md:flex-row items-center justify-start lg:gap-10 md:gap-7.5 gap-6">
          <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-7.5 gap-5">
            <div>
              <div className="md:pb-7.5 pb-5 ">
                <Image
                  className="lg:w-28 lg:h-28 md:w-20 md:h-20 w-12 h-12"
                  src="/images/v2/our-mission.webp"
                  alt="mission-icon"
                  width={120}
                  height={120}
                />
              </div>
              <Heading
                type="h2"
                className="lg:!text-[34px] md:!text-3xl !text-2xl "
                text="Our Mission"
              />

              <p className="md:text-lg text-base pt-4">
                To empower businesses and startups with exceptional products
                that wow customers.
              </p>
            </div>
            <div>
              <div className="md:pb-7.5 pb-5 ">
                <Image
                  className="lg:w-28 lg:h-28 md:w-20 md:h-20 w-12 h-12"
                  src="/images/v2/our-vision.webp"
                  alt="mission-icon"
                  width={120}
                  height={120}
                />
              </div>
              <Heading
                type="h2"
                className="lg:!text-[34px] md:!text-3xl !text-2xl"
                text="Our Vision"
              />

              <p className="md:text-lg text-base pt-4">
                To empower businesses and startups with exceptional products
                that wow customers.
              </p>
            </div>
          </div>
        </section>
      </div>

      <MultipleKeyValueWithBG
        title="Empowering Greatness With Our Skills"
        description="Whether you’re looking for products and web applications that excite, energize, and engage your customers or seek to transform your internal processes with seamless tech innovations, we have the right people, the right expertise, and the right insights to serve your business needs."
        keyValueData={greatnessSkills}
      />

      <div className="container max-w-[1280px] main-section-padding mx-auto reveal">
        <p className="uppercase lg:text-2xl md:text-xl text-lg md:!mb-7.5 !mb-5">
          Brilbelief
        </p>
        <Heading
          type="h2"
          className="text-colorBlack lg:!text-[34px] md:!text-3xl !text-2xl"
          text="The Beliefs of Brilworks"
        />

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 md:gap-7.5 lg:gap-10 lg:pt-10 md:pt-7.5 pt-5">
          {brilBeliefData.map(({ title, imageSrc, description }) => (
            <div
              className="bg-white flex flex-col justify-start items-start border rounded-2xl border-borderGray md:p-7.5 p-5"
              key={title}
            >
              <div className="brilliant-icon rounded-md mb-5">
                <div className="flex items-center justify-start p-4 bg-white rounded-md">
                  <Image
                    className="md:w-8 md:h-8 w-6 h-6"
                    src={imageSrc}
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
              <p className="md:text-lg text-base pt-4">{description}</p>
            </div>
          ))}
        </div>
      </div>

      <IndustriesWeServe
        title="Trusted by Companies across Industries"
        darkBackground={false}
      />
      <MeetOurTeam />

      <CTASection
        title="Let’s Build Something Great Together."
        description="Tell us your project idea and get a free consultation to create an outstanding digital product."
        buttonText="Let’s Discuss"
        darkBackground={false}
      />
    </>
  );
};

export default AboutUs;
