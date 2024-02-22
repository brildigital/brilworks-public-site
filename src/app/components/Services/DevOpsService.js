"use client";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import "../../styles/Services.scss";
import { useMediaQuery } from "react-responsive";
import { BestAdvocateText } from "../Homepage/BigText";

const HomepageWhyChooseUs = dynamic(() =>
  import("../Homepage/HomepageWhyChooseUs")
);
const DevOpsShipFaster = dynamic(() => import("./DevOpsShipFaster"));
const OurServices = dynamic(() => import("./OurServices"));
const TechStackWeUse = dynamic(() => import("./TechStackWeUse"));
const Honors = dynamic(() => import("../Homepage/Honors"));
const ContactBlock = dynamic(() => import("./ContactBlock"));
const IndustriesWeHelp = dynamic(() => import("./IndustriesWeHelp"));
const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));
const SeeingBelieving = dynamic(() => import("../Homepage/SeeingBelieving"));
const HomePageBlogs = dynamic(() => import("../Homepage/HomePageBlogs"));
const ServicesFAQ = dynamic(() => import("./ServicesFAQ"));

const DevOpsService = () => {
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
                src={`/images/DevOps-banner.webp`}
                alt="ALML banner"
                width={isMobile ? 550 : 1440}
                height={isMobile ? 283 : 796}
                priority={true}
              />
            )}
          </div>
          <div className="sec1_txt_position !left-[5%] !top-[15%]">
            <h1 className="mb-[30px] w-full md:w-1/2">
              DevOps Consulting Services
            </h1>
            <p className="!text-colorGray !mb-10 w-full md:w-1/2">
              We build you a smooth-running CI/CD pipeline, so you can ship
              updates faster, test smarter, deploy smoothly, and gain a
              competitive edge.
            </p>
            <Link href="/contact-us/" onClick={() => setOpenNav(false)}>
              <div className="header_sec1_txt2">
                <p className="transition uppercase !text-base">
                  Let’s Get Started
                </p>
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
      <TechStackWeUse />
      <IndustriesWeHelp />
      <BestAdvocateText />
      <ClientReviews />
      <SeeingBelieving />
      <HomePageBlogs />
      <ServicesFAQ />
    </div>
  );
};

export default DevOpsService;
