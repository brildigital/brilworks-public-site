"use client";
import Link from "next/link";
import Heading from "../Common/Heading";

const GameChanger = () => {
  return (
    <div className="home_header pt-28 flex flex-col justify-center relative">
      <div className="flex-1 flex flex-col justify-center text-center">
        <div className="home_txt1">
          <p className="!font-semibold leading-none">
            Providing Nextgen Technology Solutions <br />
            for your next leap
          </p>
        </div>
        <div className="flex justify-center w-full mt-10">
          <Link href="/contact-us/" className="!w-fit">
            <div className="header_sec1_txt2">
              <p className="transition uppercase font-semibold !text-colorWhite hover:!text-colorBlack">
                Free Consultation
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex-none home_txt3 home_txt3_top_padding px-6 py-5">
        <h1 className="!text-2xl flex gap-2 flex-wrap">
          <Link href="/ai-ml-development-services/">AI</Link> |
          <Link href="/business-intelligence-services/">BI</Link> |
          <Link href="/aws-consulting-services/">Cloud</Link> |
          {process.env.NEXT_PUBLIC_BASE_URL !==
            "https://www.brilworks.com/" && <Link href="#">Data |</Link>}
          <Link href="/low-code-no-code-development-services/">Low-code</Link>|
          <Link href="/product-engineering-development-services/">Product</Link>
        </h1>
      </div>
    </div>
  );
};

export default GameChanger;
