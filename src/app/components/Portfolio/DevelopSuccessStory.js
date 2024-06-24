import React from "react";
import Button from "../Common/Button";

const DevelopSuccessStory = () => {
  return (
    <div className="bg-sectionBG">
      <div className="container mx-auto">
        <div className="xl:!p-16 md:!py-12 !py-8 md:px-8 px-4 reveal">
          <h2 className="md:text-center text-start font-bold xl:text-3xl text-2xl mb-4">
            Ready to develop your success story with us?
          </h2>
          <p className="md:text-center text-start md:text-xl text-lg !mb-14">
            Tell us your project idea and get a free consultation to create an
            outstanding digital product.
          </p>
          <div className="flex items-center justify-center">
            <Button
              innerClassName="flex items-center justify-center gap-2"
              label="Let's Discuss"
              icon="right-arrow-next"
            />
          </div>
          {/* <div className="ready_img relative">
        <p>
          <img
            decoding="async"
            loading="lazy"
            className="ready_main hidden md:block alignnone"
            src="/images/ready.png"
            alt="get in touch"
          />
          <img
            decoding="async"
            loading="lazy"
            className="block md:hidden rounded-[20px] alignnone"
            src="/images/ready-mobile.webp"
            alt="get in touch"
          />
        </p>
        <div className="redy_title home_sec2_txt3">
          <p className="!w-full font-bold">
            READY TO DEVELOP YOUR SUCCESS STORY WITH US?
          </p>
        </div>
        <div className="get_touch">
          <div className="get_flex ml-14">
            <div className="get_icon">
              <Link href="/contact-us/">
                <img
                  decoding="async"
                  loading="lazy"
                  className="alignnone"
                  src="/images/right_arrow.png"
                  alt="right arrow"
                />
              </Link>
            </div>
            <div className="get_text">
              <p>
                <Link href="/contact-us/">Get in Touch</Link>
              </p>
            </div>
          </div>
        </div>
      </div> */}
        </div>
      </div>
    </div>
  );
};

export default DevelopSuccessStory;
