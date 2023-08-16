"use client";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Loader from "../Homepage/Loader";

const CareerContactForm = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [respMessage, setRespMessage] = useState("");

  const url = process.env.googleSheetURL;

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
        setIsSubmitting(false);
        form.reset();
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
                    Do you want to work with us? Please fill in your details
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
                            required
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
                            required
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
                            required
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
                    <div className="success-msg h-4" id="sucess_msg">
                      {respMessage}
                    </div>
                    <div className="btn_paddinng pt-4">
                      <div className="home_ready_sec transition  !w-[115px]">
                        <p className="flex align-middle justify-center">
                          {isSubmitting ? (
                            <div className="py-[4px] px-[30px]">
                              <Loader />
                            </div>
                          ) : (
                            <input id="submit" name="btnSubmit" type="submit" />
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
                  <p>Values that Guide Us</p>
                </div>
                <div className="form_grid">
                  <div>
                    <div class="w-[30%]">
                      <img
                        decoding="async"
                        loading="lazy"
                        class="alignnone"
                        src="/images/Stronger-Together.png"
                        alt="Stronger Together"
                        width="60"
                        height="60"
                      />
                    </div>
                    <div className="year">
                      <p>
                        Stronger
                        <br />
                        Together
                      </p>
                    </div>
                  </div>
                  <div>
                    <div class="w-[30%]">
                      <img
                        decoding="async"
                        loading="lazy"
                        class="alignnone"
                        src="/images/Passion-Over-Perfectionism.png"
                        alt="Passion Over Perfectionism"
                        width="60"
                        height="60"
                      />
                    </div>
                    <div className="year">
                      <p>
                        Passion Over
                        <br />
                        Perfectionism
                      </p>
                    </div>
                  </div>
                  <div>
                    <div class="w-[30%]">
                      <img
                        decoding="async"
                        loading="lazy"
                        class="alignnone"
                        src="/images/Future-focused.png"
                        alt="Future-focused"
                        width="60"
                        height="60"
                      />
                    </div>
                    <div className="year">
                      <p>
                        Future-
                        <br />
                        focused
                      </p>
                    </div>
                  </div>
                  <div>
                    <div class="w-[30%]">
                      <img
                        decoding="async"
                        loading="lazy"
                        class="alignnone"
                        src="/images/Continuous-Improvement.png"
                        alt="Continuous Improvement"
                        width="60"
                        height="60"
                      />
                    </div>
                    <div className="year">
                      <p>
                        Continuous
                        <br />
                        Improvement
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

export default CareerContactForm;
