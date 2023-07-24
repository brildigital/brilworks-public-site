"use client";
import { useMediaQuery } from "react-responsive";

const HomepageContactForm = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <>
      <div className="home_sec3_box">
        <div className="dots_flex">
          <div className="dots"></div>
          <div className="dots"></div>
          <div className="dots"></div>
        </div>
        <div className="background">
          <div className="style_sec10_swiper_home">
            <div className="sec10_flex_row">
              <div className="sec10_basis_50 order_2">
                <div className="sec10_txt1">
                  <p>
                    Contact us to build the right product with the right team.
                  </p>
                </div>
                <div
                  className="wpcf7 no-js"
                  id="wpcf7-f719-p96-o1"
                  lang="en-US"
                  dir="ltr"
                >
                  <form action="" method="post" className="wpcf7-form init">
                    <div className="form-group">
                      <p className={isMobile && "pb-4"}>
                        <label className={`label_name ${isMobile && "pb-2"}`}>
                          Name*
                        </label>
                        <br />
                        <span
                          className="wpcf7-form-control-wrap"
                          data-name="text-807"
                        >
                          <input
                            size="40"
                            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control-txt"
                            aria-required="true"
                            aria-invalid="false"
                            type="text"
                            name="text-807"
                          />
                        </span>
                      </p>
                    </div>
                    <div className="form-group">
                      <p className={isMobile && "pb-4"}>
                        <label className={`label_name ${isMobile && "pb-2"}`}>
                          Company*
                        </label>
                        <br />
                        <span
                          className="wpcf7-form-control-wrap"
                          data-name="text-8070"
                        >
                          <input
                            size="40"
                            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control-txt"
                            aria-required="true"
                            aria-invalid="false"
                            type="text"
                            name="text-8070"
                          />
                        </span>
                      </p>
                    </div>
                    <div className="form-group">
                      <p className={isMobile && "pb-4"}>
                        <label className={`label_name ${isMobile && "pb-2"}`}>
                          Email Id*
                        </label>
                        <br />
                        <span
                          className="wpcf7-form-control-wrap"
                          data-name="email-866"
                        >
                          <input
                            size="40"
                            className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email form-control-txt"
                            aria-required="true"
                            aria-invalid="false"
                            type="email"
                            name="email-866"
                          />
                        </span>
                      </p>
                    </div>
                    <div className="form-group">
                      <p className={isMobile && "pb-4"}>
                        <label className={`label_name ${isMobile && "pb-2"}`}>
                          Message
                        </label>
                        <br />
                        <span
                          className="wpcf7-form-control-wrap"
                          data-name="textarea-797"
                        >
                          <textarea
                            cols="1"
                            rows="2"
                            className={`wpcf7-form-control wpcf7-textarea form-control-txt ${
                              isMobile && "mt-4"
                            }`}
                            id="message"
                            aria-invalid="false"
                            name="textarea-797"
                          ></textarea>
                        </span>
                      </p>
                    </div>
                    <div className="btn_paddinng pt-4">
                      <div type="submit" className="home_ready_sec transition">
                        <p>
                          <input
                            className="wpcf7-form-control has-spinner wpcf7-submit home_btn"
                            id="submit"
                            type="submit"
                            value="Submit"
                          />
                        </p>
                      </div>
                    </div>
                    <div
                      className="wpcf7-response-output"
                      aria-hidden="true"
                    ></div>
                  </form>
                </div>
              </div>
              <div className="sec10_basis_50 order_1">
                <div className="sec10_txt1">
                  <p>
                    Top-rated software
                    <br />
                    development company
                  </p>
                </div>
                <div className="form_grid">
                  <div>
                    <div className="number">
                      <p data-max="8">8+</p>
                    </div>
                    <div className="year">
                      <p>
                        Years of
                        <br />
                        experience
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="number">
                      <p data-max="98">98%</p>
                    </div>
                    <div className="year">
                      <p>
                        Project
                        <br />
                        Success Rate
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="number">
                      <p data-max="60">60+</p>
                    </div>
                    <div className="year">
                      <p>
                        Professional
                        <br />
                        employee
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="number">
                      <p data-max="120">120+</p>
                    </div>
                    <div className="year">
                      <p>
                        Applications
                        <br />
                        Developed
                      </p>
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

export default HomepageContactForm;
