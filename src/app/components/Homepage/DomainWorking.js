"use client";
import Link from "next/link";
import { useEffect } from "react";
import "./homepage.scss";
import { scrollEffect } from "../lib/commonfunction";
import Image from "next/image";

const DomainWorking = () => {
  useEffect(() => {
    scrollEffect();
    window.addEventListener("scroll", scrollEffect);
    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);
  return (
    <>
      <div className="mx-auto px-[15px] md:pt-[128px] pt-[32px] sm:w-[92%] w-[100%] reveal">
        <div className="accordion-tab-section homepage-work-domain">
          <div className="flex flex-wrap">
            <div className="lg:w-6/12 w-full">
              <div
                className="tab-content d-flex justify-content-center align-items-center h-100"
                id="nav-tabContent"
              >
                <div
                  className="tab-pane fade show active"
                  id="accordion-one"
                  role="tabpanel"
                  aria-labelledby="accordion-one-tab"
                >
                  <div className="solutions_img">
                    <img
                      decoding="async"
                      loading="lazy"
                      className="alignnone wp-image-32 size-full"
                      src="/images/Fintech-275x300.webp"
                      alt="fintech app"
                      width="1010"
                      height="1100"
                      srcSet="
                        /images/Fintech-275x300.webp   275w,
                        /images/Fintech-940x1024.webp  940w,
                        /images/Fintech-768x836.webp   768w,
                        /images/Fintech.webp         1010w
                      "
                      sizes="(max-width: 1010px) 100vw, 1010px"
                    />
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="accordion-two"
                  role="tabpanel"
                  aria-labelledby="accordion-two-tab"
                >
                  <div className="solutions_img">
                    <img
                      decoding="async"
                      loading="lazy"
                      className="alignnone wp-image-32 size-full"
                      src="/images/healthcare-275x300.webp"
                      alt="fintech app"
                      width="1010"
                      height="1100"
                      srcSet="
                        /images/healthcare-275x300.webp   275w,
                        /images/healthcare-940x1024.webp  940w,
                        /images/healthcare-768x836.webp   768w,
                        /images/healthcare.webp          1010w
                      "
                      sizes="(max-width: 1010px) 100vw, 1010px"
                    />
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="accordion-three"
                  role="tabpanel"
                  aria-labelledby="accordion-three-tab"
                >
                  <div className="solutions_img">
                    <img
                      decoding="async"
                      loading="lazy"
                      className="alignnone wp-image-32 size-full"
                      src="/images/media-entertainment-275x300.webp"
                      alt="fintech app"
                      width="1010"
                      height="1100"
                      srcSet="
                        /images/media-entertainment-275x300.webp   275w,
                        /images/media-entertainment-940x1024.webp  940w,
                        /images/media-entertainment-768x836.webp   768w,
                        /images/media-entertainment.webp          1010w
                      "
                      sizes="(max-width: 1010px) 100vw, 1010px"
                    />
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="accordion-four"
                  role="tabpanel"
                  aria-labelledby="accordion-four-tab"
                >
                  <div className="solutions_img">
                    <img
                      decoding="async"
                      loading="lazy"
                      className="alignnone wp-image-32 size-full"
                      src="/images/Fleet-mgmt-275x300.webp"
                      alt="fintech app"
                      width="1010"
                      height="1100"
                      srcSet="
                        /images/Fleet-mgmt-275x300.webp   275w,
                        /images/Fleet-mgmt-940x1024.webp  940w,
                        /images/Fleet-mgmt-768x836.webp   768w,
                        /images/Fleet-mgmt.webp          1010w
                      "
                      sizes="(max-width: 1010px) 100vw, 1010px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-6/12 w-full md:mt-4">
              <div
                id="accordionExample"
                className="d-block accordion nav nav-tabs !mb-0 lg:ml-8 w-full"
                role="tablist"
              >
                <div
                  className="accordion-item"
                  data-bs-toggle="tab"
                  data-bs-target="#accordion-one"
                  type="button"
                  role="tab"
                  aria-controls="accordion-one"
                  aria-selected="true"
                >
                  <h3 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      1. Fintech
                    </button>
                  </h3>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Revolutionize the financial world with a robust & secure
                      fintech app that solves real-life problems.
                    </div>
                    <Link
                      href="/industry/fintech-software-development/"
                      className="flex items-center gap-[20px] about_btn transition md:pt-[12px] pb-[24px]"
                    >
                      <div className="about_txt_domain">
                        <p href="/industry/fintech-software-development/">
                          Know more
                        </p>
                      </div>
                      <div className="aerrow relative">
                        <Image
                          className="black_aerrow alignnone wp-image-28 size-full"
                          src="/images/black_aerrow-1.png"
                          alt="arrow"
                          width="46"
                          height="18"
                        />

                        <Image
                          className="gradiant_aerrow alignnone wp-image-29 size-full"
                          src="/images/arrow-gradiant.png"
                          alt="arrow"
                          width="46"
                          height="18"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
                <div
                  className="accordion-item"
                  data-bs-toggle="tab"
                  data-bs-target="#accordion-two"
                  type="button"
                  role="tab"
                  aria-controls="accordion-two"
                  aria-selected="false"
                >
                  <h3 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed  "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      2. Health Care
                    </button>
                  </h3>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Implement digital solutions that are poised to transform
                      the healthcare industry.
                    </div>
                    <Link
                      href="/industry/healthcare-software-development/"
                      className="flex items-center gap-[20px] about_btn transition md:pt-[12px] pb-[24px]"
                    >
                      <div className="about_txt_domain">
                        <p
                          className="change_link"
                          href="/industry/healthcare-software-development/"
                        >
                          Know more
                        </p>
                      </div>
                      <div className="aerrow relative">
                        <Image
                          className="black_aerrow alignnone wp-image-28 size-full"
                          src="/images/black_aerrow-1.png"
                          alt="arrow"
                          width="46"
                          height="18"
                        />

                        <img
                          decoding="async"
                          loading="lazy"
                          className="gradiant_aerrow alignnone wp-image-29 size-full"
                          src="/images/arrow-gradiant.png"
                          alt="arrow"
                          width="46"
                          height="18"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
                <div
                  className="accordion-item"
                  data-bs-toggle="tab"
                  data-bs-target="#accordion-three"
                  type="button"
                  role="tab"
                  aria-controls="accordion-three"
                  aria-selected="false"
                >
                  <h3 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed  "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      3. Media & Entertainment
                    </button>
                  </h3>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      From ticketing to online video, we’ll help you improve the
                      way you engage and entertain.
                    </div>
                    <Link
                      href="/industry/media-entertainment-software-development/"
                      className="flex items-center gap-[20px] about_btn transition md:pt-[12px] pb-[24px]"
                    >
                      <div className="about_txt_domain">
                        <p className="change_link">Know more</p>
                      </div>
                      <div className="aerrow relative">
                        <Image
                          className="black_aerrow alignnone wp-image-28 size-full"
                          src="/images/black_aerrow-1.png"
                          alt="arrow"
                          width="46"
                          height="18"
                        />
                        <Image
                          className="gradiant_aerrow alignnone wp-image-29 size-full"
                          src="/images/arrow-gradiant.png"
                          alt="arrow"
                          width="46"
                          height="18"
                        />
                      </div>
                    </Link>
                  </div>
                </div>

                <div
                  className="accordion-item"
                  data-bs-toggle="tab"
                  data-bs-target="#accordion-four"
                  type="button"
                  role="tab"
                  aria-controls="accordion-four"
                  aria-selected="false"
                >
                  <h3 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed  "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      4. Fleet Management + GPS
                    </button>
                  </h3>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Simplify fleet management with solutions that let you
                      manage workflows with GPS tracking.
                    </div>
                    <Link
                      href="/industry/fleet-management-software-development/"
                      className="flex items-center gap-[20px] about_btn transition md:pt-[12px] pb-[24px]"
                    >
                      <div className="about_txt_domain">
                        <p>Know more</p>
                      </div>
                      <div className="aerrow relative">
                        <Image
                          className="black_aerrow alignnone wp-image-28 size-full"
                          src="/images/black_aerrow-1.png"
                          alt="arrow"
                          width="46"
                          height="18"
                        />
                        <Image
                          className="gradiant_aerrow alignnone wp-image-29 size-full"
                          src="/images/arrow-gradiant.png"
                          alt="arrow"
                          width="46"
                          height="18"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DomainWorking;
