"use client";
import Link from "next/link";
import { TechTeamText } from "./BigText";
import { useEffect } from "react";
import { scrollEffect } from "../lib/commonfunction";
import Image from "next/image";

const ExtensionOfTeam = () => {
  useEffect(() => {
    scrollEffect();
    window.addEventListener("scroll", scrollEffect);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);
  return (
    <>
      <TechTeamText />
      <div className="mx-auto px-[15px] md:pt-[128px] pt-[32px] sm:w-[92%] w-[100%] reveal">
        <div className="accordion-tab-section homepage-extension-team">
          <div className="flex flex-wrap">
            <div className="lg:w-6/12 w-full">
              <div className=" !mb-0 lg:w-[90%] w-full">
                <div className="sec6_title xl:text-[48px] lg:text-[32px] md:text-[28px] sm:text-[26px] text-[24px]">
                  <h2>
                    Our Services drive
                    <br />
                    sustainable growth.
                  </h2>
                </div>

                <div
                  id="accordionExampleother"
                  className="d-block accordion nav nav-tabs"
                  role="tablist"
                >
                  <div
                    className="accordion-item"
                    data-bs-toggle="tab"
                    data-bs-target="#accordion-growth-one"
                    type="button"
                    role="tab"
                    aria-controls="accordion-growth-one"
                    aria-selected="true"
                  >
                    <h3 className="accordion-header" id="headinggrowth-One">
                      <button
                        className="accordion-button xl:!text-[1.8rem] md:!text-[26px] !text-[22px]"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsegrowth-One"
                        aria-expanded="true"
                        aria-controls="collapsegrowth-One"
                      >
                        1. Backend Developer
                      </button>
                    </h3>
                    <div
                      id="collapsegrowth-One"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headinggrowth-One"
                      data-bs-parent="#accordionExampleother"
                    >
                      <div className="accordion-body">
                        <Link
                          href="/hire-java-developer/"
                          className="flex items-center gap-[20px] about_btn transition"
                        >
                          <div className="about_txt">
                            <p
                              href="/hire-java-developer/"
                              className="change_link md:text-[24px] text-[22px]"
                            >
                              Java
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
                        <Link
                          href="/hire-nodejs-developer"
                          className="flex items-center gap-[20px] about_btn transition py-[20px]"
                        >
                          <div className="about_txt">
                            <p
                              href="/hire-nodejs-developer/"
                              className="change_link md:text-[24px] text-[22px]"
                            >
                              Node.Js
                            </p>
                          </div>
                          <div className="aerrow relative">
                            <p href="/hire-nodejs-developer/">
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
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion-item"
                    data-bs-toggle="tab"
                    data-bs-target="#accordion-growth-two"
                    type="button"
                    role="tab"
                    aria-controls="accordion-growth-two"
                    aria-selected="false"
                  >
                    <h3 className="accordion-header" id="headinggrowth-Two">
                      <button
                        className="accordion-button collapsed xl:!text-[1.8rem] md:!text-[26px] !text-[22px]"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsegrowth-Two"
                        aria-expanded="false"
                        aria-controls="collapsegrowth-Two"
                      >
                        2. Frontend Developer
                      </button>
                    </h3>
                    <div
                      id="collapsegrowth-Two"
                      className="accordion-collapse collapse"
                      aria-labelledby="headinggrowth-Two"
                      data-bs-parent="#accordionExampleother"
                    >
                      <div className="accordion-body">
                        <Link
                          href="/hire-reactjs-developer/"
                          className="flex items-center gap-[20px] about_btn transition pb-[20px]"
                        >
                          <div className="about_txt">
                            <p className="change_link md:text-[24px] text-[22px]">
                              React.Js
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
                  </div>
                  <div
                    className="accordion-item"
                    data-bs-toggle="tab"
                    data-bs-target="#accordion-growth-three"
                    type="button"
                    role="tab"
                    aria-controls="accordion-growth-three"
                    aria-selected="false"
                  >
                    <h3 className="accordion-header" id="headinggrowth-Three">
                      <button
                        className="accordion-button collapsed xl:!text-[1.8rem] md:!text-[26px] !text-[22px]"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsegrowth-Three"
                        aria-expanded="false"
                        aria-controls="collapsegrowth-Three"
                      >
                        3. Cloud Services
                      </button>
                    </h3>
                    <div
                      id="collapsegrowth-Three"
                      className="accordion-collapse collapse"
                      aria-labelledby="headinggrowth-Three"
                      data-bs-parent="#accordionExampleother"
                    >
                      <div className="accordion-body">
                        <Link
                          href="/hire-aws-developer/"
                          className="flex items-center gap-[20px] about_btn transition pb-[20px]"
                        >
                          <div className="about_txt">
                            <p className="change_link md:text-[24px] text-[22px]">
                              AWS Development Services
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
                  </div>
                  <div
                    className="accordion-item"
                    data-bs-toggle="tab"
                    data-bs-target="#accordion-growth-four"
                    type="button"
                    role="tab"
                    aria-controls="accordion-growth-four"
                    aria-selected="false"
                  >
                    <h3 className="accordion-header" id="headinggrowth-Four">
                      <button
                        className="accordion-button collapsed xl:!text-[1.8rem] md:!text-[26px] !text-[22px]"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsegrowth-Four"
                        aria-expanded="false"
                        aria-controls="collapsegrowth-Four"
                      >
                        4. Mobile App Developer
                      </button>
                    </h3>
                    <div
                      id="collapsegrowth-Four"
                      className="accordion-collapse collapse"
                      aria-labelledby="headinggrowth-Four"
                      data-bs-parent="#accordionExampleother"
                    >
                      <div className="accordion-body">
                        <Link
                          href="/hire-react-native-developer/"
                          className="flex items-center gap-[20px] about_btn transition pb-[20px]"
                        >
                          <div className="about_txt">
                            <p className="change_link md:text-[24px] text-[22px]">
                              React Native
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

                        <Link
                          href="/hire-blockchain-developer/"
                          className="flex items-center gap-[20px] about_btn transition pb-[20px]"
                        >
                          <div className="about_txt">
                            <p
                              href="/hire-blockchain-developer/"
                              className="change_link md:text-[24px] text-[22px]"
                            >
                              Block Chain and Solidity
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
                  </div>
                  <div
                    className="accordion-item"
                    data-bs-toggle="tab"
                    data-bs-target="#accordion-growth-five"
                    type="button"
                    role="tab"
                    aria-controls="accordion-growth-five"
                    aria-selected="false"
                  >
                    <h3 className="accordion-header" id="headinggrowth-Five">
                      <button
                        className="accordion-button collapsed xl:!text-[1.8rem] md:!text-[26px] !text-[22px]"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsegrowth-Five"
                        aria-expanded="false"
                        aria-controls="collapsegrowth-Five"
                      >
                        5. UI/UX Design
                      </button>
                    </h3>
                    <div
                      id="collapsegrowth-Five"
                      className="accordion-collapse collapse"
                      aria-labelledby="headinggrowth-Five"
                      data-bs-parent="#accordionExampleother"
                    >
                      <div className="accordion-body">
                        <Link
                          href="/hire-ui-ux-designer/"
                          className="flex items-center gap-[20px] about_btn transition pb-[20px]"
                        >
                          <div className="about_txt">
                            <p className="change_link md:text-[24px] text-[22px]">
                              UI/UX Designer
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
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-6/12 w-full">
              <div className="solutions_img">
                <img
                  decoding="async"
                  loading="lazy"
                  className="alignnone wp-image-40 size-full !ml-auto !w-full"
                  src={
                    "https://a.storyblok.com/f/219851/1011x1101/a2929139da/team-img.webp"
                  }
                  alt="Teamwork"
                  width="1011"
                  height="1101"
                  srcSet="
                  https://a.storyblok.com/f/219851/1011x1101/a2929139da/team-img.webp          1011w,
                  /images/team-275x300.webp   275w,
                  https://a.storyblok.com/f/219851/940x1024/a45f992bf1/team-940x1024.webp  940w,
                  https://a.storyblok.com/f/219851/768x836/36f87ab39c/team-768x836.webp   768w
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
