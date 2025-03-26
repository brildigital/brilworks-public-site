"use client";
import { ActionNResultText } from "./BigText";
import { useEffect } from "react";
import { scrollEffect } from "../lib/commonFunction";
import Image from "next/image";
import LinkWithArrow from "../Common/LinkWithArrow";
import { useMediaQuery } from "react-responsive";

const Brilliant = () => {
  const isMediumScreen = useMediaQuery({ minWidth: 1081, maxWidth: 1700 });
  useEffect(() => {
    scrollEffect();
    window.addEventListener("scroll", scrollEffect);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);

  return (
    <div className="container mx-auto max-w-[1440px] main-section-padding">
      <div>
        <div className="flex gap-8 lg:flex-row flex-col items-center reveal">
          {/* Left Side Text */}
          <div className="lg:w-[55%] w-full flex flex-col justify-center">
            <ActionNResultText />
            <p className="lg:text-xl md:text-lg text-base md:!leading-[36px]">
              Welcome to Brilworks – a tech-first company with a passion to
              create great products for businesses around the world. We’re agile
              and transparent in our processes, take care of our customers like
              they’re part of the team, and we believe in giving back to the
              community around us.
            </p>
            <LinkWithArrow
              href="/about-us/"
              label="About Us"
              className="justify-start"
            />
          </div>

          {/* Right Side Image */}
          <div className="lg:w-[45%] w-full h-full flex-none flex-grow">
            <Image
              src="/images/Brilliant.webp"
              alt="arrow"
              width="670"
              height="400"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>

    // <div className="container mx-auto md:px-12 max-w-[1440px] main-section-padding">
    //   <div>
    //     <div className="flex gap-8 lg:flex-row flex-col items-center reveal">
    //       <div className="lg:w-3/5 w-full">
    //         <ActionNResultText />
    //         <p className="lg:text-xl md:text-lg text-base md:!leading-[36px]">
    //           Welcome to Brilworks – a tech-first company with a passion to
    //           create great products for businesses around the world. We’re agile
    //           and transparent in our processes, take care of our customers like
    //           they’re part of the team, and we believe in giving back to the
    //           community around us.
    //         </p>
    //         <LinkWithArrow
    //           href="/about-us/"
    //           label="About Us"
    //           className="justify-start"
    //         />
    //       </div>
    //       <div className="lg:w-2/5 w-full">
    //         <Image
    //           src="/images/Brilliant.webp"
    //           alt="arrow"
    //           width="670"
    //           height="400"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Brilliant;
