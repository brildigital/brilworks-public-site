"use client";
import Link from "next/link";

const GameChanger = () => {
  return (
    <div className="home_header pt-28 flex flex-col justify-center relative">
      <div className="flex-1 flex flex-col justify-center text-center">
        <div className="home_txt1">
          <p className="text-6xl font-semibold">
            Providing Nextgen Technology Solutions <br />
            for your next leap
          </p>
        </div>
        <div className="flex justify-center w-full mt-10">
          <Link href="/contact-us/" className="!w-fit">
            <div className="header_sec1_txt2 hidden-xs">
              <p className="transition uppercase">Free Consultation</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex-none home_txt3 home_txt3_top_padding px-3 py-5">
        <h1 className="!text-2xl flex gap-2 flex-wrap">
          <Link href="/generative-ai-development-services/">AI</Link> |
          <Link href="/product-engineering-development-services/">
            Product Engineering
          </Link>{" "}
          |{" "}
          <Link href="/business-intelligence-services/">Data Engineering</Link>{" "}
          | <Link href="/aws-consulting-services/">Cloud</Link> |
          <Link href="/low-code-no-code-development-services/">
            Low-code No-code
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default GameChanger;
