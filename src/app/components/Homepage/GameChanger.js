"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "../Common/Button";
import { useMediaQuery } from "react-responsive";

const GameChanger = () => {
  const isMobile = useMediaQuery({ maxWidth: 480 });
  return (
    <div className="relative">
      <div className="home_sec1_img">
        <Image
          className="w-full md:h-[600px] xl:h-auto h-auto"
          src={`https://a.storyblok.com/f/219851/1920x1000/8028e1d772/banner.jpg`}
          alt="homepage banner"
          width={isMobile ? 550 : 1920}
          height={isMobile ? 283 : 1000}
          priority={true}
          sizes="100vw"
        />
      </div>
      <div className="container mx-auto">
        <div className="sec1_txt_position">
          <div className="home_txt1">
            <p className="xl:w-4/5 !w-full leading-tight">
              Providing&nbsp;
              <br className="mobile:hidden" />
              <span className="text-themeColor font-bold">
                Nextgen Technology Solutions
              </span>
              &nbsp;for your next leap
            </p>
          </div>

          <div className="flex lg:items-center items-end justify-between xl:!pt-10 !pt-0">
            <div className="home_txt3 pt-4 xl:pt-0">
              <h1>
                We help ramp up engineering and design capacity, speed up
                product and MVP <br className="lg:block hidden" /> development,
                automate processes, and cut costs.
              </h1>
            </div>
          </div>
          <div className="lg:mt-12 mt-5">
            <Button label="Book Free Consultation" />
          </div>
        </div>
        <div className="absolute md:bottom-[6%] bottom-3 md:left-[7%] left-[4%] md:px-0">
          <span className="md:!text-2xl flex gap-2 flex-wrap">
            <Link
              className="hover:!text-themeColor"
              href="/ai-ml-development-services/"
            >
              AI
            </Link>
            |
            <Link
              className="hover:!text-themeColor"
              href="/business-intelligence-services/"
            >
              BI
            </Link>
            |
            <Link
              className="hover:!text-themeColor"
              href="/aws-consulting-services/"
            >
              Cloud
            </Link>
            |
            {process.env.NEXT_PUBLIC_BASE_URL !==
              "https://www.brilworks.com/" && (
              <Link className="hover:!text-themeColor" href="#">
                Data |
              </Link>
            )}
            <Link
              className="hover:!text-themeColor"
              href="/low-code-no-code-development-services/"
            >
              Low-code
            </Link>
            |
            <Link
              className="hover:!text-themeColor"
              href="/product-engineering-development-services/"
            >
              Product
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default GameChanger;
