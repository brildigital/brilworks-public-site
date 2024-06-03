import Link from "next/link";
import React from "react";

const BestPractices = () => {
  return (
    <div className="w-full md:py-24 py-10 flex justify-between lg:px-[70px] xl:px-[96px] px-8">
      <div className="w-[45%]">
        <h2 className="mb-6">Best Practices</h2>
        <p className="!text-4xl text-colorGray !mb-6">
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
      <div className="w-1/2 flex flex-col gap-4">
        <div className="border border-colorBlack rounded-3xl text-[26px] font-semibold p-10 hover:bg-gradient-custom">
          AWS Consultation
        </div>
        <div className="border border-colorBlack rounded-3xl text-[26px] font-semibold p-10 hover:bg-gradient-custom">
          AWS Consultation
        </div>
        <div className="border border-colorBlack rounded-3xl text-[26px] font-semibold p-10 hover:bg-gradient-custom">
          AWS Consultation
        </div>
        <div className="border border-colorBlack rounded-3xl text-[26px] font-semibold p-10 hover:bg-gradient-custom">
          AWS Consultation
        </div>
        <div className="border border-colorBlack rounded-3xl text-[26px] font-semibold p-10 hover:bg-gradient-custom">
          AWS Consultation
        </div>
      </div>
    </div>
  );
};

export default BestPractices;
