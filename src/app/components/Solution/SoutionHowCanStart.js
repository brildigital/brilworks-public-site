import React from "react";

const SoutionHowCanStart = () => {
  return (
    <section className="solution_gradiant xl:py-[6rem] md:py-[4rem] py-[2rem]">
      <div className="sm:!w-[90%] mx-auto w-full px-[15px]">
        <div className="service_sec3 solutions md:text-center text-left pb-8">
          <h2 className="uppercase xl:text-[48px] lg:text-[34px] md:text-[32px] text-[22px] !pt-0">
            HOW CAN YOU GET STARTED?
          </h2>
        </div>

        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[2rem] reveal">
          <div className="!border rounded-[30px] border-[#00dfb8] bg-[#fff] py-[4rem] px-[2rem]">
            <img
              decoding="async"
              loading="lazy"
              src="/images/burgerAsset-120.png"
              alt="asset"
              className="w-[62px] py-[1rem]"
            />

            <div className="contact-p">
              <h3>Contact Us</h3>
            </div>

            <div className="service_description">
              <p>
                Get in touch with us by filling out the contact form. Our
                experts will get back to you within 24 business hours.
              </p>
            </div>
          </div>

          <div className="!border rounded-[30px] border-[#00dfb8] bg-[#fff] py-[4rem] px-[2rem]">
            <img
              decoding="async"
              loading="lazy"
              src="/images/burgerAsset-130.png"
              alt="Consultation"
              className="w-[62px] py-[1rem]"
            />

            <div className="contact-p">
              <h3>Consultation</h3>
            </div>

            <div className="service_description">
              <p>
                Let’s talk about your idea. We will discuss your requirement,
                create a roadmap and see how we can help you get there.
              </p>
            </div>
          </div>

          <div className="!border rounded-[30px] border-[#00dfb8] bg-[#fff] py-[4rem] px-[2rem]">
            <img
              decoding="async"
              loading="lazy"
              src="/images/burgerAsset-140.png"
              alt="Get a Budget Estimate"
              className="w-[62px] py-[1rem]"
            />

            <div className="contact-p">
              <h3>Get a Budget Estimate</h3>
            </div>

            <div className="service_description">
              <p>
                We work with you to identify the project requirements and share
                a project proposal with budget and timeline estimates.
              </p>
            </div>
          </div>

          <div className="!border rounded-[30px] border-[#00dfb8] bg-[#fff] py-[4rem] px-[2rem]">
            <img
              decoding="async"
              loading="lazy"
              src="/images/burgerAsset-150.png"
              alt="Project Kickoff"
              className="w-[62px] py-[1rem]"
            />

            <div className="contact-p">
              <h3>Project Kickoff</h3>
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
