"use client";
import { useMediaQuery } from "react-responsive";
import ClientReviews from "../Homepage/ClientReviews";
import { useState } from "react";
import Loader from "../Homepage/Loader";

const ContactUs = () => {
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
      .then((res) => {
        res.text();
      })
      .then((finalResp) => {
        setRespMessage(finalResp);
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
      <section className="flex items-start flex-col md:flex-row gap-[16px] mt-[48px] md:mt-[0px]">
        <div className="xl:pt-[8rem] xl:pr-[5rem] xl:pb-[3rem] xl:pl-[8rem] lg:pt-[6rem] lg:pr-[5rem] lg:pb-[3rem] lg:pl-[8rem] md:pt-[6rem] md:pr-[3rem] md:pb-[3rem] md:pl-[3rem] pt-[4rem] pr-[1rem] pb-[1rem] pl-[1rem] md:basis-6/12 basis-full">
          <div className="home_sec2_txt3 contact_bold xl:text-[48px] lg:text-[36px] md:text-[32px] sm:text-[24px] text-[22px] ">
            <p
              className={`uppercase m-0 !w-10/12 ${
                isMobile ? "p-0 !text-left !w-full" : ""
              }`}
            >
              Drop Us a Message and Let Our Team Help With Your Project
            </p>
          </div>
          <div className="noText md:pt-2">
            <ul>
              <li>No strings attached.</li>
              <li>No obligation to hire.</li>
              <li>No commitment from you.</li>
            </ul>
          </div>
          <div className="contact_form">
            <div>
              <form
                method="post"
                className="wpcf7-form init"
                onSubmit={handleSubmit}
              >
                <div className="form-group">
                  <p className={isMobile ? "pt-4" : ""}>
                    <label className={`label_name ${isMobile ? "pb-2" : ""}`}>
                      First &amp; Last Name*
                    </label>
                    <br />
                    <span className="wpcf7-form-control-wrap">
                      <input
                        size="40"
                        className="form-control-txt"
                        type="text"
                        name="name"
                        required
                      />
                    </span>
                  </p>
                </div>
                <div className="form-group">
                  <p className={isMobile ? "pt-4" : ""}>
                    <label className={`label_name ${isMobile ? "pb-2" : ""}`}>
                      Work Email Address*
                    </label>
                    <br />
                    <span className="wpcf7-form-control-wrap">
                      <input
                        size="40"
                        className="form-control-txt"
                        type="email"
                        name="email"
                        required
                      />
                    </span>
                  </p>
                </div>
                <div className="form-group">
                  <p className={isMobile ? "pt-4" : ""}>
                    <label className={`label_name ${isMobile ? "pb-2" : ""}`}>
                      Phone Number*
                    </label>
                    <br />
                    <span className="wpcf7-form-control-wrap">
                      <input
                        size="40"
                        className="form-control-txt"
                        type="number"
                        name="phone"
                        required
                      />
                    </span>
                  </p>
                </div>
                <div className="form-group">
                  <p className={isMobile ? "pt-4" : ""}>
                    <label className={`label_name ${isMobile ? "pb-2" : ""}`}>
                      Your Message
                    </label>
                    <br />
                    <span className="wpcf7-form-control-wrap mt-4">
                      <textarea
                        cols="1"
                        rows="2"
                        className="form-control-txt mt"
                        id="message"
                        name="message"
                      ></textarea>
                    </span>
                  </p>
                </div>
                <div className="success-msg" id="sucess_msg">
                  {respMessage}
                </div>
                <div className="btn_paddinng contact_btn btn_flex">
                  {isSubmitting ? (
                    <Loader />
                  ) : (
                    <>
                      <div className="formBtn_icon">
                        <p>
                          <img src="/images/right_arrow.png" alt="arrow" />
                        </p>
                      </div>
                      <p>
                        <input
                          className="send_btn"
                          id="submit"
                          type="submit"
                          name="btnSubmit"
                          disabled={isSubmitting}
                        />
                      </p>
                    </>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="xl:pt-[8rem] xl:pr-[5rem] xl:pb-[3rem] xl:pl-[8rem] lg:pt-[6rem] lg:pr-[5rem] lg:pb-[3rem] lg:pl-[8rem] md:pt-[6rem] md:pr-[3rem] md:pb-[3rem] md:pl-[3rem] pt-[2rem] pr-[1rem] pb-[1rem] pl-[1rem] md:basis-6/12 basis-full background_contact">
          <div className="drop_basis">
            <div className="drop_title home_sec2_txt3 contact_bold xl:text-[48px] lg:text-[36px] md:text-[32px] sm:text-[24px] text-[22px]">
              <p className="white_text uppercase !w-full">
                Ready to scale your business to new heights?
              </p>
            </div>
            <div className="ready_content">
              <div className="ready_content_sec home_sec2_txt4 pt-2">
                <p className="white_text !text-left">
                  Just fill out the form, and let our experts look after the
                  rest. Here’s what will happen next:
                </p>
              </div>
              <div className="ready_content_list home_sec2_txt4 ">
                <p className="white_text contact_title !text-left">
                  1. Initiating Contact
                </p>
                <p className="white_text !text-left">
                  We will contact you within 24 business hours.
                </p>
              </div>
              <div className="ready_content_list home_sec2_txt4">
                <p className="white_text !text-left contact_title">
                  2. Share Your Requirement
                </p>
                <p className="white_text !text-left">
                  Tell us exactly what you’re looking for and how would you like
                  our team to help you further. Our technical team will evaluate
                  your requirement and reach back to you with a project plan
                </p>
              </div>
              <div className="ready_content_list home_sec2_txt4">
                <p className="white_text !text-left contact_title">
                  3. Sign Non-Disclosure Agreement
                </p>
                <p className="white_text !text-left">
                  Signing an NDA is like putting your idea in a safe deposit
                  box. Be rest assured about any privacy concerns.
                </p>
              </div>
              <div className="ready_content_list home_sec2_txt4">
                <p className="white_text !text-left contact_title">
                  4. Estimated Budget/Cost
                </p>
                <p className="white_text !text-left">
                  After analyzing your requirement in-detail we will get back to
                  you with an estimated budget/cost and estimated time required
                  for successful project completion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="xl:mt-[96px] lg:mt-[60px] md:mt-[32px] mt-[16px]">
          <div className="service_width mx-auto md:px-[0px] px-[15px]">
            <div className="service_sec3 md:text-center text-left">
              <p className="uppercase xl:text-[48px] lg:text-[34px] md:text-[32px] text-[22px]">
                WHAT MAKES US BRILLIANT?
              </p>
            </div>

            <div className="grid md:grid-cols-3 grid-cols-1 sec7_service_grid">
              <div className="contact_box">
                <div className="mx-auto">
                  <img
                    src="/images/people-01.png"
                    alt="people"
                    className="md:!w-[92px]"
                  />
                </div>
                <div className="steps_service">
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
                    src="/images/progress-01.png"
                    alt="progress"
                    className="md:!w-[92px]"
                  />
                </div>

                <div className="steps_service">
                  <div className="no_flex ">
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
                    src="/images/passion-01.png"
                    alt="passion"
                    className="md:!w-[92px]"
                  />
                </div>
                <div className="steps_service">
                  <div className="no_flex">
                    <div className="no_flex_height">
                      <div className="developer_sec6_title text-center mob_center">
                        <p>Passion</p>
                      </div>
                      <div className="service_description text-center mob_center">
                        <p>
                          We help you move your product vision from the
                          whiteboard to the real world.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="service_width contact_sec3 md:!pt-[100px] pt-1">
          <div className="just_call_sec">
            <div className="home_sec2_txt3 contact_bold text-center">
              <p className="textUpercase md:!text-center !text-left !w-full">
                JUST A CALL AWAY
              </p>
            </div>
          </div>
          <div className="contact_details background relative">
            <div className="logowhite">
              <img
                className="alignnone"
                src="/images/logo-vector-white.png"
                alt="brilworks logo"
                width="73"
                height="124"
              />
            </div>
            <div className="contact_details_list">
              <div className="contact_iconText_flex">
                <div className="contact_icon">
                  <img
                    className="alignnone"
                    src="/images/call.png"
                    alt="Mobile"
                  />
                </div>
                <div className="contact_text_call">
                  <p>
                    <a href="tel:919313644148">+91 93136 44148</a>
                  </p>
                </div>
              </div>
              <div className="contact_iconText_flex">
                <div className="contact_icon">
                  <img
                    className="alignnone"
                    src="/images/email.png"
                    alt="Email"
                  />
                </div>
                <div className="contact_text_call">
                  <p>
                    <a href="mailto:sales@brilworks.com">sales@brilworks.com</a>
                  </p>
                </div>
              </div>
              <div className="contact_iconText_flex">
                <div className="contact_icon">
                  <img
                    className="alignnone"
                    src="/images/skype.png"
                    alt="Skype"
                  />
                </div>
                <div className="contact_text_call">
                  <p>
                    <a href="skype:cid.d74c89a9ff70ee92">
                      cid.d74c89a9ff70ee92
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ClientReviews />

        <div className="mx-auto sec3_width_home pt-24">
          <div className="bg_grey">
            <div className="like_flex">
              <div className="like_basis">
                <div className="like_text bold home_sec2_txt3">
                  <p className="!w-full">
                    LIKE WHAT YOU SEE? LET’S GET STARTED THEN!
                  </p>
                </div>
              </div>
              <div className="like_basis_form">
                <div className="contact_form">
                  <div
                    className="wpcf7 js"
                    id="wpcf7-f695-p456-o2"
                    lang="en-US"
                    dir="ltr"
                  >
                    <form
                      method="post"
                      className="wpcf7-form init"
                      onSubmit={handleSubmit}
                    >
                      <div className="form-group">
                        <p className={isMobile ? "py-4" : ""}>
                          <label
                            className={`label_name ${isMobile ? "pb-2" : ""}`}
                          >
                            First &amp; Last Name*
                          </label>
                          <br />
                          <span className="wpcf7-form-control-wrap">
                            <input
                              size="40"
                              className="form-control-txt"
                              type="text"
                              name="name"
                              required
                            />
                          </span>
                        </p>
                      </div>
                      <div className="form-group">
                        <p className={isMobile ? "py-4" : ""}>
                          <label
                            className={`label_name ${isMobile ? "pb-2" : ""}`}
                          >
                            Work Email Address*
                          </label>
                          <br />
                          <span className="wpcf7-form-control-wrap">
                            <input
                              size="40"
                              className="form-control-txt"
                              type="email"
                              name="email"
                              required
                            />
                          </span>
                        </p>
                      </div>
                      <div className="form-group">
                        <p className={isMobile ? "py-4" : ""}>
                          <label
                            className={`label_name ${isMobile ? "pb-2" : ""}`}
                          >
                            Phone Number*
                          </label>
                          <br />
                          <span className="wpcf7-form-control-wrap">
                            <input
                              size="40"
                              className="form-control-txt"
                              type="number"
                              name="phone"
                              required
                            />
                          </span>
                        </p>
                      </div>
                      <div className="form-group">
                        <p className={isMobile ? "py-4" : ""}>
                          <label
                            className={`label_name ${isMobile ? "pb-2" : ""}`}
                          >
                            Your Message
                          </label>
                          <br />
                          <span className="wpcf7-form-control-wrap mt-4">
                            <textarea
                              cols="1"
                              rows="2"
                              className={`form-control-txt ${
                                isMobile ? "mt-4" : ""
                              }`}
                              id="message"
                              name="message"
                            ></textarea>
                          </span>
                        </p>
                      </div>
                      <div className="success-msg" id="sucess_msg">
                        {respMessage}
                      </div>
                      <div className="btn_paddinng contact_btn btn_flex">
                        {isSubmitting ? (
                          <Loader />
                        ) : (
                          <>
                            <div className="formBtn_icon">
                              <p>
                                <img
                                  src="/images/right_arrow.png"
                                  alt="arrow"
                                />
                              </p>
                            </div>
                            <p>
                              <input
                                className="send_btn"
                                name="btnSubmit"
                                id="submit"
                                type="submit"
                                disabled={isSubmitting}
                              />
                            </p>
                          </>
                        )}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
