import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ContactBlock = () => {
  const pathname = usePathname();

  const contactText = {
    "/ai-ml-development-services/":
      "Don't let cost hold you back. Our industry-leading AI/ML services are within reach.",
    "/devops-consulting-services/":
      "Transform your development, achieve DevOps success - Get your free Brilworks consultation today!",
    "/digital-experience-services/": "Ready to spark your digital revolution?",
    "/aws-consulting-services/": "Ready to spark your digital revolution?",
    "/kubernates-consulting-services/":
      "Get in touch to discover how we can elevate your efficiency and performance.",
    "/product-engineering-development-services/":
      "Get a free consultation to see how our expertise can bring your product vision to life.",
    "/application-development-services/":
      "Contact us today for a free consultation and let's discuss how custom software development can transform your business.",
    "/saas-application-development-services/":
      "Connect with our experts for a no-obligation discussion about your vision and how we can bring it to life.",
  };

  return (
    <div className="container w-[90%] mx-auto md:py-12 py-4">
      <div className="background !rounded-2xl md:p-8 p-4 reveal">
        {pathname === "/kubernates-consulting-services/" ? (
          <p className="md:!text-5xl text-3xl md: leading-[54px] text-center pb-3">
            Transform your operations with Kubernetes expertise.
          </p>
        ) : (
          <>
            {pathname === "/product-engineering-development-services/" ? (
              <p className="md:!text-5xl text-3xl md: leading-[54px] text-center pb-3 mx-auto w-11/12">
                Leverage our expertise in product engineering services to
                optimize your product's performance.
              </p>
            ) : (
              ""
            )}
          </>
        )}
        <div
          className={`solutions mx-auto flex flex-col items-center justify-center ${
            pathname === "/kubernates-consulting-services/" ? "" : "md:w-4/5"
          } w-full`}
        >
          <p
            className={`${
              pathname === "/kubernates-consulting-services/" ||
              pathname === "/product-engineering-development-services/"
                ? ""
                : "md:!text-3xl"
            } text-2xl md: leading-[54px] text-center pb-7`}
          >
            {contactText[pathname]}
          </p>

          <Link href="/contact-us/">
            <div className="!bg-colorWhite px-[14px] py-[10px] border border-colorBlack shadow-none hover:shadow-lg cursor-pointer">
              <p className="uppercase ">
                {pathname === "/kubernates-consulting-services/" ? (
                  "SCHEDULE A CALL"
                ) : (
                  <>
                    {" "}
                    {pathname ===
                    "/product-engineering-development-services/" ? (
                      "Contact us now!"
                    ) : (
                      <>
                        {pathname === "/application-development-services/" ? (
                          "Schedule Your Free Consultation Now!"
                        ) : (
                          <>
                            {pathname ===
                            "/saas-application-development-services/"
                              ? "GET A QUOTE"
                              : "Let’s Get Started"}
                          </>
                        )}
                      </>
                    )}
                  </>
                )}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactBlock;
