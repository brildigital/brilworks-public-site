import Link from "next/link";
import { TechTeamText } from "./BigText";

const ExtensionOfTeam = () => {
  return (
    <>
      <TechTeamText />
      <div className="mx-auto px-[15px] md:pt-[128px] pt-[32px] sm:w-[92%] w-[100%]">
        <div className="accordion-tab-section">
          <div className="flex flex-wrap">
            <div className="lg:w-6/12 w-full">
              <div className="sec6_title xl:text-[48px] lg:text-[32px] md:text-[28px] sm:text-[26px] text-[24px]">
                <p>
                  Intelligent teams that drive
                  <br />
                  sustainable growth.
                </p>
              </div>

              <div
                id="accordionExampleother"
                className="d-block accordion nav nav-tabs"
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
                      className="accordion-button xl:text-[32px] md:text-[26px] text-[16px]"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Backend Developer
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExampleother"
                  >
                    <div className="accordion-body">
                      <div className="flex items-center gap-[20px] about_btn transition pt-[32px]">
                        <div className="about_txt">
                          <Link href="" className="text-[21px]">
                            {" "}
                            Java
                          </Link>
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
                            className="gradiant_aerrow alignnone wp-image-29 size-full"
                            src="/images/arrow-gradiant.png"
                            alt="arrow"
                            width="46"
                            height="18"
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-[20px] about_btn transition pt-[32px]">
                        <div className="about_txt">
                          <Link href="" className="text-[21px]">
                            {" "}
                            Node.Js
                          </Link>
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
                            className="gradiant_aerrow alignnone wp-image-29 size-full"
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
                      className="accordion-button collapsed xl:text-[32px] md:text-[26px] text-[16px]"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Frontend Developer
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExampleother"
                  >
                    <div className="accordion-body">
                      <div className="flex items-center gap-[20px] about_btn transition pt-[32px]">
                        <div className="about_txt">
                          <Link href="" className="text-[21px]">
                            React.Js
                          </Link>
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
                            className="gradiant_aerrow alignnone wp-image-29 size-full"
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
                        className="accordion-button collapsed xl:text-[32px] md:text-[26px] text-[16px]"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Cloud Services
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExampleother"
                    >
                      <div className="accordion-body">
                        <div className="flex items-center gap-[20px] about_btn transition pt-[32px]">
                          <div className="about_txt">
                            <Link href="" className="text-[21px]">
                              AWS Development Services
                            </Link>
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
                              className="gradiant_aerrow alignnone wp-image-29 size-full"
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
                        className="accordion-button collapsed xl:text-[32px] md:text-[26px] text-[16px]"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        Mobile App Developer
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExampleother"
                    >
                      <div className="accordion-body">
                        <div className="flex items-center gap-[20px] about_btn transition pt-[32px]">
                          <div className="about_txt">
                            <Link href="" className="text-[21px]">
                              React Native{" "}
                            </Link>
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
                              className="gradiant_aerrow alignnone wp-image-29 size-full"
                              src="/images/arrow-gradiant.png"
                              alt="arrow"
                              width="46"
                              height="18"
                            />
                          </div>
                        </div>

                        <div className="flex items-center gap-[20px] about_btn transition pt-[32px]">
                          <div className="about_txt">
                            <Link href="" className="text-[21px]">
                              Block Chain and Solidity
                            </Link>
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
                              className="gradiant_aerrow alignnone wp-image-29 size-full"
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

                  <div
                    className="accordion-item"
                    data-bs-toggle="tab"
                    data-bs-target="#accordion-five"
                    type="button"
                    role="tab"
                    aria-controls="accordion-five"
                    aria-selected="false"
                  >
                    <h2 className="accordion-header" id="headingFive">
                      <button
                        className="accordion-button collapsed xl:text-[32px] md:text-[26px] text-[16px]"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        UI/UX Design
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordionExampleother"
                    >
                      <div className="accordion-body">
                        <div className="flex items-center gap-[20px] about_btn transition pt-[32px]">
                          <div className="about_txt">
                            <Link href="" className="text-[21px]">
                              UI/UX Designer
                            </Link>
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
                              className="gradiant_aerrow alignnone wp-image-29 size-full"
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
            <div className="lg:w-6/12 w-full">
              <div className="solutions_img">
                <img
                  decoding="async"
                  loading="lazy"
                  className="alignnone wp-image-40 size-full !ml-auto"
                  src="https://www.brilworks.com/wp-content/uploads/2023/01/team.jpg"
                  alt="Teamwork"
                  width="1011"
                  height="1101"
                  srcset="
                    https://www.brilworks.com/wp-content/uploads/2023/01/team.jpg          1011w,
                    https://www.brilworks.com/wp-content/uploads/2023/01/team-275x300.jpg   275w,
                    https://www.brilworks.com/wp-content/uploads/2023/01/team-940x1024.jpg  940w,
                    https://www.brilworks.com/wp-content/uploads/2023/01/team-768x836.jpg   768w
                  "
                  sizes="(max-width: 1011px) 100vw, 1011px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExtensionOfTeam;
