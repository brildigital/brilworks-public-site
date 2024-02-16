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
const TechStack = dynamic(() => import("./TechStack"));
const Honors = dynamic(() => import("../Homepage/Honors"));
const ContactBlock = dynamic(() => import("./ContactBlock"));
const IndustriesWeHelp = dynamic(() => import("./IndustriesWeHelp"));
const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));
const SeeingBelieving = dynamic(() => import("../Homepage/SeeingBelieving"));
const HomePageBlogs = dynamic(() => import("../Homepage/HomePageBlogs"));
const ServicesFAQ = dynamic(() => import("./ServicesFAQ"));

const DigitalExperienceService = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
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
                src={`/images/digital-experience.webp`}
                alt="Digital experience banner"
                width={isMobile ? 550 : 1440}
                height={isMobile ? 283 : 796}
                priority={true}
              />
            )}
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
            <Link href="/contact-us/" onClick={() => setOpenNav(false)}>
              <div className="header_sec1_txt2">
                <p className="transition uppercase !text-base">
                  Let’s Get Started
                </p>
              </div>
            </Link>
            {!isMobile && !isTablet && (
              <div>
                <DevOpsShipFaster />
              </div>
            )}
          </div>
        </div>
      </div>
      {(isMobile || isTablet) && (
        <div className="mt-10 md:mt-0">
          <div className="container w-[90%] mx-auto md:py-4 py-4">
            <div className="background !rounded-2xl p-4">
              <h2 className="text-center !text-2xl mx-auto my-6">
                Ship Faster, Test Smarter, Deploy Smoother: DevOps Consulting
                for Modern Businesses
              </h2>
              <p className="text-lg text-center mx-auto">
                We're a leading DevOps consulting service company dedicated to
                building high-performing software delivery pipelines that
                streamline your workflow, accelerate releases, and empower your
                teams.
              </p>
              <br />
              <p className="text-lg text-center mx-auto !mb-4">
                Our expert consultants work alongside your team to identify your
                unique challenges and design a pipeline tailored to address your
                unique needs. We leverage the latest tools and cutting-edge
                technologies, from GitLab CI/CD to containerization solutions,
                to create a system that aligns perfectly with your specific
                needs.
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="sxl:mt-[30%]">
        <OurServices />
      </div>

      <HomepageWhyChooseUs />
      <Honors />
      <ContactBlock />
      <TechStack />
      <IndustriesWeHelp />
      <BestAdvocateText />
      <ClientReviews />
      <SeeingBelieving />
      <HomePageBlogs />
      <ServicesFAQ />
    </div>
  );
};

export default DigitalExperienceService;
