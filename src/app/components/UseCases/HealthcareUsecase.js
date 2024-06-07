"use client";
import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import "../../styles/Services.scss";

const ServicesUsecase = dynamic(() => import("./ServicesUsecase"));
const UsecasesProblemAndSolution = dynamic(() =>
  import("./UsecasesProblemAndSolution")
);
const BestPractices = dynamic(() => import("./BestPractices"));
const Conclusion = dynamic(() => import("./Conclusion"));
const GettingStarted = dynamic(() => import("./GettingStarted"));
const CTA = dynamic(() => import("./CTA"));
const UsecaseFAQ = dynamic(() => import("./UsecaseFAQ"));
const HomepageContactForm = dynamic(() =>
  import("../Homepage/HomepageContactForm")
);

const HealthcareUsecase = () => {
  return (
    <>
      <div className="bg-colorWhite pt-20 mx-auto usecase">
        <div className="bg-gradient-usecase">
          <div className="lg:py-20 py-10 flex flex-col items-center justify-center lg:px-[70px] px-8">
            <h1 className="font-extrabold text-center text-[75px] mb-4">
              AWS <br className="md:hidden" /> in Healthcare
            </h1>
            <p className="lg:!text-[40px] md:text-4xl text-3xl leading-tight font-medium lg:w-3/5 w-full text-center">
              AWS used in healthcare orem ipsum dolor sit amet consectetur.
              Purus imperdiet eget in molestie nec nisl. Ultrices mattis nisi
              quis sed sit at imperdiet.
            </p>
            <Image
              className="md:w-2/3 mx-auto md:pt-20 pt-10"
              src="/images/Healthcare-usecase.webp"
              alt="Healthcare usecase"
              priority={true}
              width="1174"
              height="479"
            />
          </div>
        </div>
        <ServicesUsecase />
        <UsecasesProblemAndSolution />
        <BestPractices />
        <Conclusion />
        <GettingStarted />
        <CTA />
        <UsecaseFAQ />
      </div>
      <div className="bg-colorWhite md:py-20 py-10 lg:!px-[15%] px-6">
        <HomepageContactForm />
      </div>
    </>
  );
};

export default HealthcareUsecase;
