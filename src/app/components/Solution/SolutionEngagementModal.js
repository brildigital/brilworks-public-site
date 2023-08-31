"use client";
import Link from "next/link";
import { scrollToSection } from "../lib/commonfunction";

const SolutionEngagementModal = () => {
  return (
    <section>
      <div className="xl:mt-[76px] lg:mt-[60px] md:mt-[32px] mt-[16px]">
        <div className="service_width mx-auto md:px-[0px] px-[15px] py-8 workpadd_borderTop">
          <div className="service_sec3 md:text-center text-left">
            <p className="uppercase xl:text-[48px] lg:text-[34px] md:text-[32px] text-[22px]">
              OUR ENGAGEMENT MODELS
            </p>
          </div>

          <div className="grid xl:grid-cols-3 grid-cols-1 md:gap-[3rem] our-engagement-models reveal">
            <div className="contact_box">
              <div className="mx-auto">
                <img
                  decoding="async"
                  loading="lazy"
                  src="/images/Dedicated-Development-Team.png"
                  alt="people"
                  className="md:!w-[92px]"
                />
              </div>
              <div className="steps_service flex items-center justify-center">
                <div className="no_flex">
                  <div className="no_flex_height">
                    <div className="developer_sec6_title text-center mob_center">
                      <p>Dedicated Development Team</p>
                    </div>
                    <div className="service_description text-center mob_center">
                      <p>
                        For when you don’t have the time to search for and hire
                        new talent. Hire dedicated developers in the time it
                        takes to hire one person.
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
                  src="/images/Team-Extension-2.png"
                  alt="progress"
                  className="md:!w-[92px]"
                />
              </div>

              <div className="steps_service flex items-center justify-center">
                <div className="no_flex">
                  <div className="no_flex_height">
                    <div className="developer_sec6_title text-center mob_center">
                      <p>Team Extension</p>
                    </div>
                    <div className="service_description text-center mob_center">
                      <p>
                        As your business grows, the development needs to follow
                        suit. We want to help you keep up with demand and scale
                        your team with the right expertise.
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
                  src="/images/Project-Based-Model-1.png"
                  alt="passion"
                  className="md:!w-[92px]"
                />
              </div>
              <div className="steps_service flex items-center justify-center">
                <div className="no_flex">
                  <div className="no_flex_height">
                    <div className="developer_sec6_title text-center mob_center">
                      <p>Project-Based Model</p>
                    </div>
                    <div className="service_description text-center mob_center">
                      <p>
                        Our project-based model gives you the confidence to
                        engage our team for the preparation, development, and
                        ongoing maintenance of your online presence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:py-[6rem] py-4">
            <Link
              href="#section10_service"
              onClick={(e) => scrollToSection(e, "section10_service")}
            >
              <div className="btn_paddinng btn_flex !mx-auto">
                <div className="formBtn_icon">
                  <p>
                    <img
                      decoding="async"
                      loading="lazy"
                      src="/images/right_arrow.png"
                      alt="arrow"
                    />
                  </p>
                </div>

                <p className="xl:!text-[20px] lg:!text-[18px]">Know More</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionEngagementModal;
