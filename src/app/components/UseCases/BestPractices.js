import Link from "next/link";
import React from "react";

const BestPractices = () => {
  return (
    <div className="container mx-auto w-full lg:py-24 py-10 flex lg:flex-row gap-8 flex-col justify-between lg:!px-0 xl:px-[96px] px-8">
      <div className="lg:w-[45%] w-full">
        <h2 className="mb-6">Best Practices</h2>
        <p className="lg:!text-4xl md:!text-3xl !text-xl text-colorGray !mb-6">
          Lorem ipsum dolor sit amet consectetur. Diam at m quam at. Nunc sit
          faucibus feugiat elementum sed gravida at. Semper massa nec vitae nisi
          eu.
        </p>
        <Link
          href="/contact-us/"
          className="bg-unset hover:!bg-colorWhite !mb-4"
        >
          <div className="header_sec1_txt2">
            <p className="transition !text-base font-semibold">Know More</p>
          </div>
        </Link>
      </div>
      <div className="lg:w-1/2 w-full flex flex-col gap-4">
        <div className="border border-colorBlack rounded-3xl md:text-[26px] text-xl font-semibold md:p-10 p-6 hover:bg-gradient-custom">
          AWS Consultation
        </div>
        <div className="border border-colorBlack rounded-3xl md:text-[26px] text-xl font-semibold md:p-10 p-6 hover:bg-gradient-custom">
          AWS Consultation
        </div>
        <div className="border border-colorBlack rounded-3xl md:text-[26px] text-xl font-semibold md:p-10 p-6 hover:bg-gradient-custom">
          AWS Consultation
        </div>
        <div className="border border-colorBlack rounded-3xl md:text-[26px] text-xl font-semibold md:p-10 p-6 hover:bg-gradient-custom">
          AWS Consultation
        </div>
        <div className="border border-colorBlack rounded-3xl md:text-[26px] text-xl font-semibold md:p-10 p-6 hover:bg-gradient-custom">
          AWS Consultation
        </div>
      </div>
    </div>
  );
};

export default BestPractices;
