import React from "react";

const SoutionHowCanStart = () => {
  return (
    <section className="solution_gradiant md:py-[4rem] py-[4rem]">
      <div className="sm:!w-[90%] mx-auto w-full px-[15px]">
        <div className="service_sec3 md:text-center text-left">
          <p className="uppercase xl:text-[48px] lg:text-[34px] md:text-[32px] text-[22px] !pt-0">
            HOW CAN YOU GET STARTED?
          </p>
        </div>

        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[2rem] reveal">
          <div className="border-1 rounded-[30px] border-[#00dfb8] bg-[#fff] py-[4rem] px-[2rem]">
            <img
              decoding="async"
              loading="lazy"
              src="/images/burgerAsset-120.png"
              alt="asset"
              className="w-[62px] py-[1rem]"
            />

            <div className="contact-p">
              <p className="">Contact Us</p>
            </div>

            <div className="service_description">
              <p>
                Get in touch with us by filling out the contact form. Our
                experts will get back to you within 24 business hours.
              </p>
            </div>
          </div>

          <div className="border-1 rounded-[30px] border-[#00dfb8] bg-[#fff] py-[4rem] px-[2rem]">
            <img
              decoding="async"
              loading="lazy"
              src="/images/burgerAsset-130.png"
              alt="Consultation"
              className="w-[62px] py-[1rem]"
            />

            <div className="contact-p">
              <p className="">Consultation</p>
            </div>

            <div className="service_description">
              <p>
                Let’s talk about your idea. We will discuss your requirement,
                create a roadmap and see how we can help you get there.
              </p>
            </div>
          </div>

          <div className="border-1 rounded-[30px] border-[#00dfb8] bg-[#fff] py-[4rem] px-[2rem]">
            <img
              decoding="async"
              loading="lazy"
              src="/images/burgerAsset-140.png"
              alt="Get a Budget Estimate"
              className="w-[62px] py-[1rem]"
            />

            <div className="contact-p">
              <p className="">Get a Budget Estimate</p>
            </div>

            <div className="service_description">
              <p>
                We work with you to identify the project requirements and share
                a project proposal with budget and timeline estimates.
              </p>
            </div>
          </div>

          <div className="border-1 rounded-[30px] border-[#00dfb8] bg-[#fff] py-[4rem] px-[2rem]">
            <img
              decoding="async"
              loading="lazy"
              src="/images/burgerAsset-150.png"
              alt="Project Kickoff"
              className="w-[62px] py-[1rem]"
            />

            <div className="contact-p">
              <p className="">Project Kickoff</p>
            </div>

            <div className="service_description">
              <p>
                Once the project is approved & the NDA is signed, we will assign
                our world-class team in an efficient & time-tested manner.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoutionHowCanStart;
