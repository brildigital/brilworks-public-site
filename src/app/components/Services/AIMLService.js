"use client";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import "../../styles/Services.scss";
import { useMediaQuery } from "react-responsive";
import { BestAdvocateText } from "../Homepage/BigText";

const HomepageWhyChooseUs = dynamic(() =>
  import("../Homepage/HomepageWhyChooseUs")
);
const OurServices = dynamic(() => import("./OurServices"));
const UseCases = dynamic(() => import("./UseCases"));
const KeyBenefits = dynamic(() => import("./KeyBenefits"));
const Honors = dynamic(() => import("../Homepage/Honors"));
const ContactBlock = dynamic(() => import("./ContactBlock"));
const TechStackWeUse = dynamic(() => import("./TechStackWeUse"));
const SeeingBelieving = dynamic(() => import("../Homepage/SeeingBelieving"));
const HomePageBlogs = dynamic(() => import("../Homepage/HomePageBlogs"));
const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));
const ServicesFAQ = dynamic(() => import("./ServicesFAQ"));

const AIMLService = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="services pt-[4rem] mx-auto">
      <div>
        <div className="relative">
          <div className="home_sec1_img">
            {isMobile ? (
              <div className="banner-bg w-full h-[600px]"></div>
            ) : (
              <Image
                className="w-full h-auto"
                src={`/images/AIML-banner.webp`}
                alt="ALML banner"
                width={isMobile ? 550 : 1440}
                height={isMobile ? 283 : 648}
                priority={true}
                sizes="100vw"
              />
            )}
          </div>
          <div className="sec1_txt_position !top-[15%]">
            <h1 className="mb-[30px] md:mb-[20px] lg:mb-[30px] w-full md:w-1/2">
              Advance Your Business with AI/ML and Computer Vision
            </h1>
            <p className="!text-colorGray w-full md:w-1/2 lg:!mb-10 md:!mb-6 !mb-10">
              Leverage the power of AI and visual analytics to transform your
              business operation.
            </p>
            <Link
              href="/contact-us/"
              className="bg-unset hover:!bg-colorWhite !mb-4"
            >
              <div className="header_sec1_txt2">
                <p className="transition uppercase !text-base">
                  Let’s Get Started
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <OurServices />
      <UseCases />
      <KeyBenefits />
      <Honors />
      <ContactBlock />
      <TechStackWeUse />
      <HomepageWhyChooseUs />
      <BestAdvocateText />
      <ClientReviews />
      <SeeingBelieving />
      <HomePageBlogs />
      <ServicesFAQ />
    </div>
  );
};

export default AIMLService;
