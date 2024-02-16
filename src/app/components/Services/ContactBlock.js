import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ContactBlock = () => {
  const pathname = usePathname();

  const contactText = {
    "/ai-ml-development-services/":
      "Don't let cost hold you back. Our industry-leading AI/ML services are within reach.",
    "/devops-consulting-services/":
      "Lorem ipsum dolor sit amet consectetur. Malesuada augue nunc ultrices convallis urna. Mattis viverra purus faucibus risus mus lorem sit.",
    "/digital-experience-services/": "Ready to spark your digital revolution?",
  };

  return (
    <div className="container w-[90%] mx-auto md:py-12 py-4">
      <div className="background !rounded-2xl md:p-8 p-4 reveal">
        <div className="solutions mx-auto flex flex-col items-center justify-center md:w-11/12 w-full">
          <p className="xl:!text-5xl lg:!text-4xl md:!text-3xl text-2xl md: leading-[54px] text-center pb-7">
            {contactText[pathname]}
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
