import React from "react";

const DomainWorking = () => {
  return (
    <>
      <div className="mx-auto px-[15px] md:pt-[128px] sm:pt-[32px] pt-[60px] sm:w-[92%] w-[100%]">
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
                      src="/images/Fintech.jpg"
                      alt="fintech app"
                      width="1010"
                      height="1100"
                      srcSet="
                        /images/Fintech-275x300.jpg   275w,
                        /images/Fintech-940x1024.jpg  940w,
                        /images/Fintech-768x836.jpg   768w,
                        /images/Fintech.jpg          1010w
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
                      src="/images/healthcare-275x300.jpg"
                      alt="fintech app"
                      width="1010"
                      height="1100"
                      srcSet="
                        /images/healthcare-275x300.jpg   275w,
                        /images/healthcare-940x1024.jpg  940w,
                        /images/healthcare-768x836.jpg   768w,
                        /images/healthcare.jpg          1010w
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
                      src="/images/New-Project-3-275x300.jpg"
                      alt="fintech app"
                      width="1010"
                      height="1100"
                      srcSet="
                        /images/New-Project-3-275x300.jpg   275w,
                        /images/New-Project-3-940x1024.jpg  940w,
                        /images/New-Project-3-768x836.jpg   768w,
                        /images/New-Project-3.jpg          1010w
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
                      src="/images/1-275x300.jpg"
                      alt="fintech app"
                      width="1010"
                      height="1100"
                      srcSet="
                        /images/1-275x300.jpg   275w,
                        /images/1-940x1024.jpg  940w,
                        /images/1-768x836.jpg   768w,
                        /images/1.jpg          1010w
                      "
                      sizes="(max-width: 1010px) 100vw, 1010px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-6/12 w-full">
              <div
                id="accordionExample"
                className="d-block accordion nav nav-tabs !mb-0"
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
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Fintech
                    </button>
                  </h2>
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
                    <div className="flex items-center gap-[20px] about_btn transition md:pt-[12px] pb-[24px]">
                      <div className="about_txt_domain">
                        <a
                          className=""
                          href="/industry/fintech-software-development"
                        >
                          Know more
                        </a>
                      </div>
                      <div className="aerrow relative">
                        <img
                          decoding="async"
                          loading="lazy"
                          className="black_aerrow alignnone wp-image-28 size-full"
                          src="/images/black_aerrow-1.png"
                          alt="arrow"
                          width="46"
                          height="18"
                        />
                        <img
                          decoding="async"
                          loading="lazy"
                          class="gradiant_aerrow alignnone wp-image-29 size-full"
                          src="/images/arrow-gradiant.png"
                          alt="arrow"
                          width="46"
                          height="18"
                        />
                      </div>
                    </div>
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
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed  "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Health Care
                    </button>
                  </h2>
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
                    <div className="flex items-center gap-[20px] about_btn transition md:pt-[12px] pb-[24px]">
                      <div className="about_txt_domain">
                        <a
                          className=""
                          href="/industry/healthcare-software-development"
                        >
                          Know more
                        </a>
                      </div>
                      <div className="aerrow relative">
                        <img
                          decoding="async"
                          loading="lazy"
                          className="black_aerrow alignnone wp-image-28 size-full"
                          src="/images/black_aerrow-1.png"
                          alt="arrow"
                          width="46"
                          height="18"
                        />
                        <img
                          decoding="async"
                          loading="lazy"
                          class="gradiant_aerrow alignnone wp-image-29 size-full"
                          src="/images/arrow-gradiant.png"
                          alt="arrow"
                          width="46"
                          height="18"
                        />
                      </div>
                    </div>
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
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed  "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Media & Entertainment
                    </button>
                  </h2>
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
                    <div className="flex items-center gap-[20px] about_btn transition md:pt-[12px] pb-[24px]">
                      <div className="about_txt_domain">
                        <a
                          className=""
                          href="/industry/media-entertainment-software-development"
                        >
                          Know more
                        </a>
                      </div>
                      <div className="aerrow relative">
                        <img
                          decoding="async"
                          loading="lazy"
                          className="black_aerrow alignnone wp-image-28 size-full"
                          src="/images/black_aerrow-1.png"
                          alt="arrow"
                          width="46"
                          height="18"
                        />
                        <img
                          decoding="async"
                          loading="lazy"
                          class="gradiant_aerrow alignnone wp-image-29 size-full"
                          src="/images/arrow-gradiant.png"
                          alt="arrow"
                          width="46"
                          height="18"
                        />
                      </div>
                    </div>
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
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed  "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      Fleet Management + GPS
                    </button>
                  </h2>
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
                    <div className="flex items-center gap-[20px] about_btn transition md:pt-[12px] pb-[24px]">
                      <div className="about_txt_domain">
                        <a
                          className=""
                          href="/industry/fleet-management-software-development"
                        >
                          Know more
                        </a>
                      </div>
                      <div className="aerrow relative">
                        <img
                          decoding="async"
                          loading="lazy"
                          className="black_aerrow alignnone wp-image-28 size-full"
                          src="/images/black_aerrow-1.png"
                          alt="arrow"
                          width="46"
                          height="18"
                        />
                        <img
                          decoding="async"
                          loading="lazy"
                          class="gradiant_aerrow alignnone wp-image-29 size-full"
                          src="/images/arrow-gradiant.png"
                          alt="arrow"
                          width="46"
                          height="18"
                        />
                      </div>
                    </div>
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
