"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardBody } from "@material-tailwind/react";
import { useMediaQuery } from "react-responsive";

const MainGist = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const techQandNData = [
    {
      title: "AWS",
      imageSrc: "/images/AWS-DEVELOPMENT.svg",
      imageAlt: "AWS_image",
      linkUrl: "/gist/aws/",
    },
    {
      title: "Java",
      imageSrc: "/images/JAVA.svg",
      imageAlt: "Java_image",
      linkUrl: "/gist/java/",
    },
    {
      title: "NodeJS",
      imageSrc: "/images/NODE.JS.svg",
      imageAlt: "NodeJS_image",
      linkUrl: "/gist/node/",
    },
    {
      title: "React Native",
      imageSrc: "/images/REACT-NATIVE.svg",
      imageAlt: "React_Native_image",
      linkUrl: "/gist/react-native/",
    },
    {
      title: "ReactJS",
      imageSrc: "/images/REACT.JS.svg",
      imageAlt: "ReactJS_image",
      linkUrl: "/gist/react/",
    },
  ];

  return (
    <section className="portfolio mt-[6rem] mx-auto">
      <div className="service_width relative flex items-center justify-center">
        <Image
          className="h-[46vh] rounded-[20px]"
          src="/images/gist-banner.webp"
          alt="Tech Q&A banner"
          width={isMobile ? 330 : 1300}
          height={isMobile ? 200 : 400}
          priority={true}
          sizes="(min-width: 1040px) 42.35vw, (min-width: 640px) 91.84vw, calc(100vw - 30px)"
        />
        <div className="absolute bottom-1/4 w-full text-center mx-auto">
          <div className="how-we">
            <h1 className="font-style-solution-head xl:text-[4.5rem] lg:text-[66px] md:text-[50px] sm:text-[55px] text-[30px]">
              Tech Q&N
            </h1>
            <p className="md:mx-auto mx-4 md:max-w-[70%]">
              Get every mistake you've made fixed in one location. We make an
              honest effort to address your technical inquiries, focusing on the
              developer community. Glory to Tech!
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto service_width md:py-[6rem] py-[4rem]">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-8 gap-6 md:p-6 !pt-0">
          {techQandNData.map(
            ({ title, imageSrc, imageAlt, linkUrl }, index) => (
              <Link href={linkUrl} key={index}>
                <Card className="shadow-lg shadow-[#00b6cf]-500/50 border hover:border-[#00b6cf] cursor-pointer">
                  <CardBody className="p-8">
                    <div className="md:w-14 w-10 mb-4">
                      <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={50}
                        height={50}
                      />
                    </div>
                    <h2 className="text-2xl why_text font-bold mb-7">
                      {title}
                    </h2>
                    <div className="inline-flex gap-4 why_text font-bold ">
                      <p className="!text-[#00b6cf]">{title} Q & N</p>
                      <div className="aerrow relative">
                        <img
                          decoding="async"
                          loading="lazy"
                          className="black_aerrow alignnone wp-image-28 size-full"
                          src="/images/black_aerrow-1.png"
                          alt="arrow"
                          width="46"
                          height="18"
                        />
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default MainGist;
