"use client";
import React from "react";
import "../../styles/Services.scss";
import Conclusion from "./Conclusion";
import Image from "next/image";
import ServicesUsecase from "./ServicesUsecase";
import UsecasesProblemAndSolution from "./UsecasesProblemAndSolution";
import HomepageContactForm from "../Homepage/HomepageContactForm";
import BestPractices from "./BestPractices";

const HealthcareUsecase = () => {
  return (
    <>
      <div className="bg-colorWhite pt-20 mx-auto usecase">
        <div className="bg-gradient-usecase">
          <div className="md:py-20 py-10 flex flex-col items-center justify-center lg:px-[70px] px-8">
            <h1 className="font-extrabold text-[75px] mb-4">
              AWS in Healthcare
            </h1>
            <p className="!text-[40px] leading-tight font-medium w-3/5 text-center">
              AWS used in healthcare orem ipsum dolor sit amet consectetur.
              Purus imperdiet eget in molestie nec nisl. Ultrices mattis nisi
              quis sed sit at imperdiet.
            </p>
            <Image
              className="w-2/3 mx-auto pt-20"
              src="/images/Healthcare-usecase.webp"
              alt="Healthcare usecase"
              width="1174"
              height="479"
            />
          </div>
        </div>
        <ServicesUsecase />
        <UsecasesProblemAndSolution />
        <BestPractices />
        <Conclusion />
      </div>
      <div className="bg-colorWhite md:py-20 py-10 lg:px-[70px] px-8">
        <HomepageContactForm />
      </div>
    </>
  );
};

export default HealthcareUsecase;
