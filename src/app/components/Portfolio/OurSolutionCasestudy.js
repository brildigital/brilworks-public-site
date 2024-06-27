import Image from "next/image";
import React from "react";

const OurSolutionCasestudy = () => {
  return (
    <div className="section-padding">
      <div className="container max-w-[1280px] mx-auto">
        <div className="flex items-center justify-between lg:flex-row flex-col-reverse lg:gap-10 md:gap-8 gap-5">
          <div className="lg:basis-3/5">
            <h2 className="font-bold 2xl:text-4xl xl:text-3xl lg:text-3xl text-xl !leading-tight mb-5">
              Our
              <span className="text-themeColor"> Solution</span>
            </h2>
            <h3 className="font-semibold lg:text-2xl md:text-xl text-lg mb-2 lg:w-11/12 w-full">
              Brilworks helps to solve above problems with below approaches
            </h3>
            <ol className="list-outside list-decimal pl-6 lg:w-11/12 w-full">
              <li className="text-xl text-colorGray mb-2">
                Use the combination of multiple databases and replicas to manage
                a large database
              </li>
              <li className="text-xl text-colorGray mb-2">
                Divide the existing monolithic application into micro-service
                architecture
              </li>
              <li className="text-xl text-colorGray mb-2">
                Created a 2 way data solution using UDP protocol
              </li>
              <li className="text-xl text-colorGray mb-2">
                Created a Jenkins + AWS ECS Automated process to deploy each
                service for different environments.
              </li>
            </ol>
          </div>
          <div className="lg:basis-2/5">
            <Image
              className=""
              src="/images/our-solution-cs.webp"
              width="560"
              height="426"
              alt="Our-solution-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSolutionCasestudy;
