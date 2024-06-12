import React from "react";
import Button from "../Common/Button";

const WhatMakeUsBrilliant = () => {
  return (
    <>
      <div className="sec6_title text-center !p-0 mx-auto md:mb-[2rem] !mt-[2rem] md:!mt-[6rem]">
        <p>WHAT MAKES US BRILLIANT?</p>
      </div>

      <div className="md:px-[0px] px-[15px] reveal">
        <div className="grid lg:grid-cols-3 grid-cols-1 md:gap-[3rem] our-engagement-models">
          <div className="contact_box">
            <div className="mx-auto">
              <img
                decoding="async"
                loading="lazy"
                src="/images/people-01.png"
                alt="people"
              />
            </div>
            <div className="steps_service flex items-center justify-center">
              <div className="no_flex">
                <div className="no_flex_height">
                  <div className="developer_sec6_title text-center mob_center">
                    <p>People</p>
                  </div>
                  <div className="service_description text-center mob_center">
                    <p>
                      With our design &amp; development ninjas by our side,
                      there’s absolutely nothing we can’t achieve.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact_box">
            <div className="mx-auto">
              <img
                decoding="async"
                loading="lazy"
                src="/images/progress-01.png"
                alt="progress"
              />
            </div>

            <div className="steps_service flex items-center justify-center">
              <div className="no_flex">
                <div className="no_flex_height">
                  <div className="developer_sec6_title text-center mob_center">
                    <p>Progress</p>
                  </div>
                  <div className="service_description text-center mob_center">
                    <p>
                      We’ve built and launched more than 120+ products in 20
                      countries across the globe.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact_box">
            <div className="mx-auto">
              <img
                decoding="async"
                loading="lazy"
                src="/images/passion-01.png"
                alt="passion"
              />
            </div>
            <div className="steps_service flex items-center justify-center">
              <div className="no_flex">
                <div className="no_flex_height">
                  <div className="developer_sec6_title text-center mob_center">
                    <p>Passion</p>
                  </div>
                  <div className="service_description text-center mob_center">
                    <p>
                      We help you move your product vision from the whiteboard
                      to the real world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:pt-[4rem] pt-[2rem] flex items-center justify-center">
        <Button
          innerClassName="flex items-center justify-center gap-1"
          className="!pr-5"
          redirect="/about-us/"
          label="About Us"
          icon="right-arrow"
        />
      </div>
    </>
  );
};

export default WhatMakeUsBrilliant;
