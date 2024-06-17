"use client";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import "../../styles/Services.scss";
import Button from "../Common/Button";

const HomepageWhyChooseUs = dynamic(() =>
  import("../Homepage/HomepageWhyChooseUs")
);
const DevOpsShipFaster = dynamic(() => import("./DevOpsShipFaster"));
const OurServices = dynamic(() => import("./OurServices"));
const Honors = dynamic(() => import("../Homepage/Honors"));
const ContactBlock = dynamic(() => import("./ContactBlock"));
const IndustriesWeHelp = dynamic(() => import("./IndustriesWeHelp"));
const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));
const SeeingBelieving = dynamic(() => import("../Homepage/SeeingBelieving"));
const HomePageBlogs = dynamic(() => import("../Homepage/HomePageBlogs"));
const ServicesFAQ = dynamic(() => import("./ServicesFAQ"));

const FrappeDevelopmentService = () => {
  return (
    <div className="services pt-[4rem] mx-auto">
      <div>
        <div className="relative">
          <div className="home_sec1_img">
            <div className="banner-bg w-full block md:hidden h-[600px]"></div>

            <Image
              className="w-full md:block hidden h-auto"
              src={`/images/frappe-banner.webp`}
              alt="Frappe Development banner"
              width="1440"
              height="796"
              priority
              sizes="(max-width: 767px) 550px, 1440px"
            />
          </div>
          <div className="sec1_txt_position !left-[5%] lg:!top-[40%]">
            <h1 className="mb-[30px] w-full md:w-3/5">
              A Trusted Frappe Development Company
            </h1>
            <p className="!text-colorGray !mb-10 w-full md:w-[55%]">
              At Brilworks, we specialize in creating custom Frappe solutions
              for small and medium-sized businesses. Our experienced team is
              dedicated to helping startups and SMBs thrive by providing
              top-notch development services.
            </p>
            <Button label="Consult our expert" />
          </div>
        </div>
      </div>
      <DevOpsShipFaster />
      <OurServices />
      <HomepageWhyChooseUs />
      <Honors />
      <ContactBlock />
      <IndustriesWeHelp />
      <ClientReviews />
      <SeeingBelieving />
      <HomePageBlogs />
      <ServicesFAQ />
    </div>
  );
};

export default FrappeDevelopmentService;
