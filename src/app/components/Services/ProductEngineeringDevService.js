"use client";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import "../../styles/Services.scss";
import DevOpsShipFaster from "./DevOpsShipFaster";
import Button from "../Common/Button";

const HomepageWhyChooseUs = dynamic(() =>
  import("../Homepage/HomepageWhyChooseUs")
);
const OurServices = dynamic(() => import("./OurServices"));
const Honors = dynamic(() => import("../Homepage/Honors"));
const ContactBlock = dynamic(() => import("./ContactBlock"));
const IndustriesWeHelp = dynamic(() => import("./IndustriesWeHelp"));
const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));
const SeeingBelieving = dynamic(() => import("../Homepage/SeeingBelieving"));
const HomePageBlogs = dynamic(() => import("../Homepage/HomePageBlogs"));
const ServicesFAQ = dynamic(() => import("./ServicesFAQ"));

const ProductEngineeringDevService = () => {
  return (
    <div className="services pt-[4rem] mx-auto">
      <div>
        <div className="relative">
          <div className="home_sec1_img">
            <div className="banner-bg w-full block md:hidden h-[600px]"></div>
            <Image
              className="w-full md:block hidden h-auto"
              src={`/images/product-engineering-banner.webp`}
              alt="Product engineering banner"
              width="1440"
              height="796"
              priority
              sizes="(max-width: 767px) 550px, 1440px"
            />
          </div>
          <div className="sec1_txt_position !left-[5%] md:!top-[45%] lg:!top-[40%]">
            <h1 className="mb-[30px] w-full md:w-3/5">
              Product Engineering & Development Service
            </h1>
            <p className="!text-colorGray !mb-10 w-full md:w-7/12">
              From concept to creation, we partner with you throughout your
              engineering product development journey. Are you looking for a
              reliable partner to navigate the complexities of product
              engineering and development? Our team of experts brings innovative
              solutions to every stage.
            </p>
            <Button label="Get Free Consultation" />
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

export default ProductEngineeringDevService;
