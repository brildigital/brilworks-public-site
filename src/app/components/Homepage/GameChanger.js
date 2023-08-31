"use client";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

const GameChanger = () => {
  const isMobile = useMediaQuery({ maxWidth: 414 });
  return (
    <div className="relative">
      <div className="home_sec1_img">
        <Image
          className="w-full"
          src={`https://a.storyblok.com/f/219851/1920x1000/8028e1d772/banner.jpg`}
          alt="homepage banner"
          width={1920}
          height={1000}
        />
      </div>
      <div className="sec1_txt_position">
        <div className="home_txt1">
          <p className="md:!text-[4rem]">We are</p>
        </div>
        <div className="home_txt2">
          <p>
            Game
            <br />
            Changers
          </p>
        </div>
        <div className="our_btn_flex flex lg:items-center items-end justify-between xl:!pt-12 !pt-0">
          <div className="home_txt3 home_txt3_top_padding md:max-w-[760px]">
            <h1>
              <span className="ez-toc-section"></span>We build stunning digital
              solutions for global brands and startups which deﬁne their
              success.
              <span className="ez-toc-section-end"></span>
            </h1>
          </div>
          <div
            className={`our_work flex items-center justify-end !gap-4 ${
              isMobile ? "!pt-4" : ""
            }`}
          >
            <p className="get_in_touch_hover">
              <Link href="/contact-us/">GET IN TOUCH</Link>
            </p>
            <p>
              <Link href="/contact-us/">
                <Image
                  className="alignnone wp-image-24 size-full"
                  src="/images/our-work.png"
                  alt="9 dots"
                  width="49"
                  height="49"
                />
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameChanger;
