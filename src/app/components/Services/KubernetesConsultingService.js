"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import "../../styles/Services.scss";
import Button from "../Common/Button";

const OurServices = dynamic(() => import("./OurServices"));
const TechStackWeUse = dynamic(() => import("./TechStackWeUse"));
const Honors = dynamic(() => import("../Homepage/Honors"));
const ContactBlock = dynamic(() => import("./ContactBlock"));
const IndustriesWeHelp = dynamic(() => import("./IndustriesWeHelp"));
const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));
const ServicesWhyChooseUs = dynamic(() => import("./ServicesWhyChooseUs"));
const SeeingBelieving = dynamic(() => import("../Homepage/SeeingBelieving"));
const HomePageBlogs = dynamic(() => import("../Homepage/HomePageBlogs"));
const ServicesFAQ = dynamic(() => import("./ServicesFAQ"));

const KubernetesConsultingService = () => {
  return (
    <div className="services pt-[4rem] mx-auto">
      <div>
        <div className="relative">
          <div className="home_sec1_img">
            <div className="banner-bg w-full block md:hidden  h-[600px]"></div>

            <Image
              className="w-full md:block hidden h-auto"
              src="/images/kubernetes-banner.webp"
              alt="Kubernetes Consulting banner"
              width="1440"
              height="796"
              priority
              sizes="(max-width: 767px) 550px, 1440px"
            />
          </div>
          <div className="sec1_txt_position !left-[5%] lg:!top-[40%]">
            <h1 className="mb-[30px] w-full md:w-1/2">
              Achieve resilience, scale, and savings
            </h1>
            <p className="!text-colorGray !mb-10 w-full md:w-1/2">
              Boost your DevOps journey with our Kubernetes consulting service.
              Our experts plan a roadmap to achieve rapid deployments and
              seamless upgrades with our proven Kubernetes consulting services.
            </p>
            <Button label="Let’s Get Started" />
          </div>
        </div>
      </div>

      <OurServices />
      <ServicesWhyChooseUs />
      <Honors />
      <ContactBlock />
      <TechStackWeUse />
      <IndustriesWeHelp />
      <ClientReviews />
      <SeeingBelieving />
      <HomePageBlogs />
      <ServicesFAQ />
    </div>
  );
};

export default KubernetesConsultingService;
