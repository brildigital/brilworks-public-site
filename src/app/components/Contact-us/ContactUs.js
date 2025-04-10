"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { scrollEffect } from "../lib/commonFunction";
import ContactFormV2 from "../Homepage/ContactFormV2";
import Heading from "../HTMLComponents/Heading";
import Image from "next/image";
import ButtonV2 from "../Common/ButtonV2";
import CTASection from "../Common/CTASection";

const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));

const ContactUs = () => {
  useEffect(() => {
    scrollEffect();
    window.addEventListener("scroll", scrollEffect);
    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);

  const steps = [
    {
      title: "Initiating Contact",
      description:
        "Our team will reach out to you within the next 24 business hours.",
    },
    {
      title: "Share Your Requirement",
      description:
        "Share your requirements, and our technical team will review them and respond with a project plan.",
    },
    {
      title: "Sign Non-Disclosure Agreement",
      description:
        "Signing an NDA is like putting your idea in a safe deposit box. Be rest assured about privacy concerns.",
    },
    {
      title: "Estimated Budget/Cost",
      description:
        "After a detailed analysis, we'll provide the estimated cost and timeline for project completion.",
    },
  ];

  const whatMakeUsBrilliant = [
    {
      title: "People",
      imageSrc: "/images/v2/people-icon-vector.svg",
      description:
        "With our design & development ninjas by our side, there’s absolutely nothing we can’t achieve.",
    },
    {
      title: "Progress",
      imageSrc: "/images/v2/medal-star.svg",
      description:
        "We’ve built and launched more than 120+ products in 20 countries across the globe.",
    },
    {
      title: "Passion",
      imageSrc: "/images/v2/star.svg",
      description:
        "We turn your product vision from brainstorming to a fully implemented real-world solution.",
    },
  ];

  const contactLinks = [
    {
      title: "Sales",
      links: [
        {
          link: "tel:919313644148",
          text: "+ 91 9313644148",
          imgSrc: "/images/v2/call.svg",
        },
        {
          link: "mailto:sales@brilworks.com",
          text: "sales@brilworks.com",
          imgSrc: "/images/sms-white.svg",
        },
      ],
    },
    {
      title: "HR",
      links: [
        {
          link: "tel:919106810920",
          text: "+ 91 9106810920",
          imgSrc: "/images/v2/call.svg",
        },
        {
          link: "mailto:hr@brilworks.com",
          text: "hr@brilworks.com",
          imgSrc: "/images/sms-white.svg",
        },
      ],
    },
  ];

  return (
    <>
      <div className="contact-us-banner">
        <div className="banner-layer md:h-screen h-full min-h-[600px] md:max-h-[980px] max-h-full">
          <div className="container max-w-[1280px] main-section-padding !pt-28 mx-auto">
            <section className="flex flex-col md:flex-row items-center justify-start md:h-screen h-full min-h-[600px] md:max-h-[840px] max-h-full lg:gap-16 md:gap-10 gap-6">
              <h1 className="hidden">Contact Us</h1>
              <div className="md:w-[55%] w-full">
                <Heading
                  type="h2"
                  className="text-white g:!text-[34px] md:!text-3xl !text-2xl"
                  text="Let’s Discuss Your Project"
                />
                <div className="text-white grid md:grid-cols-3 grid-cols-1 gap-2 pt-5 pb-5 md:pb-7.5 lg:pb-10">
                  <div className="flex gap-3">
                    <Image
                      className="w-6 h-6"
                      src="/images/v2/white-tick-icon.svg"
                      alt="tick-mark-white"
                      width={24}
                      height={24}
                    />
                    No String attached.
                  </div>
                  <div className="flex gap-3">
                    <Image
                      className="w-6 h-6"
                      src="/images/v2/white-tick-icon.svg"
                      alt="tick-mark-white"
                      width={24}
                      height={24}
                    />
                    No obligation to hire.
                  </div>
                  <div className="flex gap-3">
                    <Image
                      className="w-6 h-6"
                      src="/images/v2/white-tick-icon.svg"
                      alt="tick-mark-white"
                      width={24}
                      height={24}
                    />
                    No commitment from you.
                  </div>
                </div>
                <ContactFormV2 darkMode={true} />
              </div>
              <div className="md:w-[45%] w-full flex flex-col bg-[#081120] rounded-2xl border border-[#2D3540] lg:gap-[50px] md:gap-7.5 gap-4 lg:p-10 md:p-7.5 p-5">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="flex gap-4 items-start justify-start"
                  >
                    <div className="rounded-full text-white bg-[#17283E] lg:text-2xl md:text-xl text-base">
                      <span className="md:w-10 md:h-10 w-6 h-6 flex items-center justify-center">
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <p className="md:text-xl text-lg text-white font-medium">
                        {step.title}
                      </p>
                      <p className="md:text-base text-sm text-white pt-[10px] font-light">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
      <section className="container max-w-[1280px] main-section-padding mx-auto">
        <div className="flex items-center justify-between md:flex-row flex-col gap-4">
          <Heading
            type="h2"
            className="text-colorBlack g:!text-[34px] md:!text-3xl !text-2xl"
            text={
              <>
                For career inquiry email us on{" "}
                <a
                  href="mailto:hr@brilworks.com"
                  target="_blank"
                  className="bg-clip-text text-transparent bg-theme-gradient"
                >
                  hr@brilworks.com
                </a>
              </>
            }
          />
          <ButtonV2
            size="medium"
            redirect="/career/"
            className="hover:text-themeColor"
            label="Search Openings"
          />
        </div>
      </section>
      <section className="bg-sectionBG">
        <div className="container max-w-[1280px] main-section-padding mx-auto reveal">
          <Heading
            type="h2"
            className="text-colorBlack g:!text-[34px] md:!text-3xl !text-2xl"
            text="What Makes Us Brilliant?"
          />

          <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 md:gap-7.5 lg:gap-10 lg:pt-10 md:pt-7.5 pt-5">
            {whatMakeUsBrilliant.map(({ title, imageSrc, description }) => (
              <div
                className="bg-white flex flex-col justify-start items-start border rounded-2xl border-[#DBDBDB] md:p-7.5 p-5"
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
      </section>
      <CTASection
        title="Always Here to Help!"
        description={
          <>
            {contactLinks.map(({ title, links }, index) => (
              <div
                className="flex md:flex-row flex-col sxl:justify-center justify-start md:gap-4 gap-2"
                key={index}
              >
                {links.map(({ text, imgSrc, link }, idx) => (
                  <div
                    className="flex flex-row items-center sxl:justify-center justify-start"
                    key={idx}
                  >
                    <Image
                      className="lg:w-8 md:w-6 w-5 pr-1"
                      src={imgSrc}
                      alt="call-email-logo"
                      width="20"
                      height="20"
                    />
                    <Heading
                      type="h3"
                      className="text-colorWhite lg:!text-[22px] md:!text-xl !text-lg"
                      text={title}
                    />
                    :&nbsp;&nbsp;
                    <a
                      key={text}
                      href={link}
                      target="_blank"
                      className="!text-colorWhite lg:!text-[22px] md:!text-xl !text-lg flex slg:gap-2 gap-1 items-center font-medium"
                    >
                      {text}
                    </a>
                  </div>
                ))}
              </div>
            ))}
          </>
        }
      />
      <ClientReviews />
    </>
  );
};

export default ContactUs;
