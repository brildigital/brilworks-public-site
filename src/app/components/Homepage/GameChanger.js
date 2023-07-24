"use client";
import Link from "next/link";

const GameChanger = () => {
  const isMobile = window.innerWidth < 414;
  return (
    <div className="relative">
      <div className="home_sec1_img">
        <img
          className="size-full"
          src="/images/banner.jpg"
          alt="homepage banner"
        />
      </div>
      <div className="sec1_txt_position">
        <div className="home_txt1">
          <p>We are</p>
        </div>
        <div className="home_txt2">
          <p>
            Game
            <br />
            Changers
          </p>
        </div>
        <div className="our_btn_flex">
          <div className="home_txt3 mt-[38px]">
            <h1>
              <span className="ez-toc-section"></span>We build stunning digital
              solutions for global brands
              <br />
              and startups which deﬁne their success.
              <span className="ez-toc-section-end"></span>
            </h1>
          </div>
          <div
            className={`our_work flex items-center justify-end gap-4 ${
              isMobile && "!pt-4"
            }`}
          >
            <p>
              <Link href="/contact-us">GET IN TOUCH</Link>
            </p>
            <p>
              <Link href="/contact-us">
                <img
                  decoding="async"
                  loading="lazy"
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
