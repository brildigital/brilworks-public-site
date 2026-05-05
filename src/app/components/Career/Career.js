"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { scrollEffect } from "../lib/commonFunction";
import Heading from "../HTMLComponents/Heading";
import ButtonV2 from "../Common/ButtonV2";
import CTASection from "../Common/CTASection";

const BrilworksCareerReview = dynamic(() => import("./BrilworksCareerReview"));
const MultipleCardInGrid = dynamic(() =>
  import("../Common/MultipleCardInGrid")
);
const ContactFormV2 = dynamic(() => import("../Homepage/ContactFormV2"));

const Career = () => {
  const careerBenefits = [
    {
      title: "Flexible Timings",
      icon: "/images/v2/fi_8718268.svg",
      imageAlt: "Clock icon representing flexible timings",
      description:
        "We understand your responsibilities extend beyond your work and so it is important for us to be flexible.",
    },
    {
      title: "Medical Insurance Cover",
      icon: "/images/v2/fi_10055327.svg",
      imageAlt: "Medical icon representing insurance cover",
      description:
        "Gain a clear roadmap for digital transformation aligned with your business goals and market demands.",
    },
    {
      title: "Holidays Time Off",
      icon: "/images/v2/clock.svg",
      imageAlt: "Calendar icon representing holidays",
      description:
        "Gain a clear roadmap for digital transformation aligned with your business goals and market demands.",
    },
    {
      title: "Team Building",
      icon: "/images/v2/fi_18992293.svg",
      imageAlt: "Team icon representing team building",
      description:
        "Gain a clear roadmap for digital transformation aligned with your business goals and market demands.",
    },
    {
      title: "Learning and Development",
      icon: "/images/v2/fi_3018864.svg",
      imageAlt: "Graduation cap icon representing learning",
      description:
        "Gain a clear roadmap for digital transformation aligned with your business goals and market demands.",
    },
  ];

  useEffect(() => {
    scrollEffect();
    window.addEventListener("scroll", scrollEffect);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);

  return (
    <>
      <div className="service-hero-bg">
        <div
          className={`banner-layer-dark h-full min-h-[600px] md:max-[980] max-h-full`}
        >
          <div className="container max-w-[1280px] main-section-padding sxl:!pt-32 md:!pt-20 !pt-32 mx-auto">
            <section
              className={`flex flex-col md:flex-row items-center justify-start md:h-screen h-full min-h-[600px] max-h-full md:max-h-[980px] lg:gap-16 md:gap-10 gap-6`}
            >
              <div className="w-full lg:mt-10">
                <Heading
                  type="h1"
                  className="text-white"
                  text="Welcome to our World of Brilliance"
                />
                <p className="text-white lg:text-2xl md:text-xl text-lg !mt-5">
                  A place where brilliant minds come together, to collaborate
                  and create products with a common goal of making them
                  innovative, appealing, and efficient while having truckloads
                  of fun!
                </p>

                <div className="flex md:flex-row flex-col md:items-center items-start justify-start gap-5 sxl:mt-10 sxl:mb-12 md:my-7.5 my-5">
                  <ButtonV2
                    size="large"
                    className="w-fit"
                    redirect="#explore-open-positions"
                    label="Explore Open Positions"
                    scrollingButton
                  />
                  <ButtonV2
                    size="large"
                    redirect="#career-contact-form"
                    className="w-fit !bg-transparent !border-colorWhite hover:!bg-colorWhite hover:text-themeColor"
                    label="Join Our Team"
                    scrollingButton
                  />
                </div>
                <Image
                  className="rounded-2xl w-full max-h-[505px] object-cover"
                  src="/images/v2/career-banner.webp"
                  alt="service-banner"
                  width="1200"
                  height="505"
                  priority
                />
              </div>
            </section>
          </div>
        </div>
      </div>
      <CTASection
        darkBackground={false}
        title="At Brilworks, It's all about people"
        descriptionClass="md:w-3/4"
        description="To us, the people and the collaborative working style are key drivers of engagement. It’s our aim to create a welcoming environment in which employees are empowered to achieve their fullest potential."
        buttonText="Let's Discuss"
      />
      <hr className="border-borderGray" />
      <BrilworksCareerReview />
      <MultipleCardInGrid
        title="Why should you join us?"
        cardData={careerBenefits}
      />

      <section
        className="container max-w-[1280px] mx-auto main-section-padding-bottom reveal"
        id="explore-open-positions"
      >
        <Heading
          type="h2"
          className="lg:!text-[34px] md:!text-3xl !text-2xl"
          text="Explore Open Positions"
        />

        <div className="mt-[2rem]">
          <iframe
            title="current-openings"
            loading="lazy"
            src="https://brilworks.keka.com/careers/api/embedjobs/71b6b7a2-333a-47bc-81ca-11d00c4be18f"
            width="100%"
            height="100%"
            frameBorder="0"
            className="w-full mx-auto h-[85vh]"
          ></iframe>
        </div>
      </section>
      <div className="bg-themeLight">
        <div
          className="container max-w-[1280px] mx-auto main-section-padding reveal"
          id="career-contact-form"
        >
          <Heading
            type="h2"
            className="lg:!text-[34px] md:!text-3xl !text-2xl"
            text="Do you want to work with us? Please fill in your details"
          />
          <p className="md:!text-lg text-base py-5">
            If you are interested in finding out more about how we can help your
            organization, please provide your details and project requirements.
            We'll get back to you soon.
          </p>
          <ContactFormV2 hideEmail={true} careerMode={true} />
        </div>
      </div>
    </>
  );
};

export default Career;
