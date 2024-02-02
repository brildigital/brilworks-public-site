import Link from "next/link";
import React from "react";

const ContactBlock = () => {
  return (
    <div className="container w-[90%] mx-auto md:py-12 py-4">
      <div className="background !rounded-2xl md:p-8 p-4 reveal">
        <div className="solutions mx-auto flex flex-col items-center justify-center md:w-4/5 w-full">
          <p className="md:!text-3xl text-lg text-center pb-7">
            Lorem ipsum dolor sit amet consectetur. Malesuada augue nunc
            ultrices convallis urna. Mattis viverra purus faucibus risus mus
            lorem sit.
          </p>

          <Link href="/contact-us/">
            <div className="!bg-colorWhite px-[14px] py-[10px] border border-colorBlack shadow-none hover:shadow-lg cursor-pointer">
              <p className="uppercase ">Let’s Get Started</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactBlock;
