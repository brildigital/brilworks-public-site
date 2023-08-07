"use client";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Loader from "./Loader";

const HomepageContactForm = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [respMessage, setRespMessage] = useState("");

  const url = process.env.googleSheetURL;

  // const DataSubmit = () => {
  //   const url =
  //     "https://script.google.com/macros/s/AKfycbxWZFV_BRhZMkOGoCuvq21dGfbhic-uzXxB_hR6iwdI-Ua_F6LXe8DeCEQjkXixtNrN/exec";
  //   let form = document.getElementById("homepageForm");

  //   form.addEventListener("submit", (e) => {
  //     e.target.btnSubmit.innerHTML = "Submitting...";
  //     let formData = new FormData(form);
  //     fetch(url, {
  //       method: "POST",
  //       body: formData,
  //     })
  //       .then((res) => res.text())
  //       .then((finalResp) => {
  //         e.target.btnSubmit.innerHTML = "Submit";
  //         document.getElementById("sucess_msg").innerHTML = finalResp;
  //         formData.reset();
  //         setTimeout(() => {
  //           document.getElementById("sucess_msg").innerHTML = "";
  //         }, 5000);
  //       });
  //     e.preventDefault();
  //   });
  // };

  const clearMessage = () => {
    setTimeout(() => {
      setRespMessage("");
    }, 5000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target;
    const formData = new FormData(form);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.text())
      .then((finalResp) => {
        setRespMessage(finalResp);
        formData.reset();
        setIsSubmitting(false);
        clearMessage();
      })
      .catch((err) => {
        setIsSubmitting(false);
        console.log(err);
      });
  };

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
                  <form
                    method="post"
                    className="wpcf7-form init"
                    id="homepageForm"
                    onSubmit={handleSubmit}
                  >
                    <div className="form-group">
                      <p className={isMobile ? "pb-4" : ""}>
                        <label
                          className={`label_name ${isMobile ? "pb-2" : ""}`}
                        >
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
                            name="name"
                          />
                        </span>
                      </p>
                    </div>
                    <div className="form-group">
                      <p className={isMobile ? "pb-4" : ""}>
                        <label
                          className={`label_name ${isMobile ? "pb-2" : ""}`}
                        >
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
                            name="company"
                          />
                        </span>
                      </p>
                    </div>
                    <div className="form-group">
                      <p className={isMobile ? "pb-4" : ""}>
                        <label
                          className={`label_name ${isMobile ? "pb-2" : ""}`}
                        >
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
                            name="email"
                          />
                        </span>
                      </p>
                    </div>
                    <div className="form-group">
                      <p className={isMobile ? "pb-4" : ""}>
                        <label
                          className={`label_name ${isMobile ? "pb-2" : ""}`}
                        >
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
                              isMobile ? "mt-4" : ""
                            }`}
                            id="message"
                            aria-invalid="false"
                            name="message"
                          ></textarea>
                        </span>
                      </p>
                    </div>
                    <div className="success-msg" id="sucess_msg">
                      {respMessage}
                    </div>
                    <div className="btn_paddinng pt-4">
                      <div className="home_ready_sec transition  !w-[115px]">
                        <p className="flex align-middle justify-center">
                          {isSubmitting ? (
                            <Loader />
                          ) : (
                            <input
                              // className="wpcf7-form-control has-spinner wpcf7-submit home_btn"
                              id="submit"
                              name="btnSubmit"
                              type="submit"
                            />
                          )}
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
                    <div className="number_home">
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
                    <div className="number_home">
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
                    <div className="number_home">
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
                    <div className="number_home">
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
