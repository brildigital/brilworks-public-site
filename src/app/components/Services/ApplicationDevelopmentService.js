"use client";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import "../../styles/Services.scss";
import { useMediaQuery } from "react-responsive";
import { BestAdvocateText } from "../Homepage/BigText";
import DevOpsShipFaster from "./DevOpsShipFaster";

const HomepageWhyChooseUs = dynamic(() =>
  import("../Homepage/HomepageWhyChooseUs")
);
const OurServices = dynamic(() => import("./OurServices"));
const Honors = dynamic(() => import("../Homepage/Honors"));
const ContactBlock = dynamic(() => import("./ContactBlock"));
const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));
const SeeingBelieving = dynamic(() => import("../Homepage/SeeingBelieving"));
const HomePageBlogs = dynamic(() => import("../Homepage/HomePageBlogs"));
const ServicesFAQ = dynamic(() => import("./ServicesFAQ"));

const ApplicationDevelopmentService = () => {
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
                src={`/images/application-dev-banner.webp`}
                alt="Digital experience banner"
                width={isMobile ? 550 : 1440}
                height={isMobile ? 283 : 796}
                priority={true}
              />
            )}
          </div>
          <div className="sec1_txt_position !left-[5%] !top-[15%]">
            <h1 className="mb-[30px] w-full md:w-7/12">
              Application development services
            </h1>
            <p className="!text-colorGray !mb-10 w-full md:w-1/2">
              We're a passionate team of software developers who help businesses
              turn innovative ideas into reality.  From concept to launch, we
              design, develop, and maintain custom software solutions that drive
              results.
            </p>
            <Link href="/contact-us/" onClick={() => setOpenNav(false)}>
              <div className="header_sec1_txt2">
                <p className="transition uppercase !text-base">CONTACT US</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <DevOpsShipFaster />

      <OurServices />
      <HomepageWhyChooseUs />
      <Honors />
      <ContactBlock />
      <BestAdvocateText />
      <ClientReviews />
      <SeeingBelieving />
      <HomePageBlogs />
      <ServicesFAQ />
    </div>
  );
};

export default ApplicationDevelopmentService;
