import Link from "next/link";
import ClientReviews from "../Homepage/ClientReviews";

const ContactUs = () => {
  return (
    <>
      <section className="flex items-start flex-col md:flex-row gap-[16px] mt-[48px] md:mt-[0px]">
        <div className="xl:pt-[8rem] xl:pr-[5rem] xl:pb-[3rem] xl:pl-[8rem] lg:pt-[6rem] lg:pr-[5rem] lg:pb-[3rem] lg:pl-[8rem] md:pt-[6rem] md:pr-[3rem] md:pb-[3rem] md:pl-[3rem] pt-[4rem] pr-[1rem] pb-[1rem] pl-[1rem] md:basis-6/12 basis-full">
          <div className="home_sec2_txt3 contact_bold xl:text-[48px] lg:text-[36px] md:text-[32px] sm:text-[24px] text-[22px]">
            <p className="uppercase">
              Drop Us a Message and Let Our Team Help With Your Project
            </p>
          </div>
          <div className="noText">
            <ul>
              <li>No strings attached.</li>
              <li>No obligation to hire.</li>
              <li>No commitment from you.</li>
            </ul>
          </div>
          <div className="contact_form">
            <div>
              <form action="" method="post" className="wpcf7-form init">
                <div className="form-group">
                  <p>
                    <label className="label_name">First &amp; Last Name*</label>
                    <br />
                    <span className="wpcf7-form-control-wrap">
                      <input
                        size="40"
                        className="form-control-txt"
                        value=""
                        type="text"
                        name="text-737"
                      />
                    </span>
                  </p>
                </div>
                <div className="form-group">
                  <p>
                    <label className="label_name">Work Email Address*</label>
                    <br />
                    <span className="wpcf7-form-control-wrap">
                      <input
                        size="40"
                        className="form-control-txt"
                        value=""
                        type="email"
                        name="email-160"
                      />
                    </span>
                  </p>
                </div>
                <div className="form-group">
                  <p>
                    <label className="label_name">Phone Number*</label>
                    <br />
                    <span className="wpcf7-form-control-wrap">
                      <input
                        size="40"
                        className="form-control-txt"
                        value=""
                        type="tel"
                        name="tel-336"
                      />
                    </span>
                  </p>
                </div>
                <div className="form-group">
                  <p>
                    <label className="label_name">Your Message</label>
                    <br />
                    <span className="wpcf7-form-control-wrap">
                      <textarea
                        cols="1"
                        rows="2"
                        className="form-control-txt"
                        id="message"
                        name="textarea-62"
                      ></textarea>
                    </span>
                  </p>
                </div>
                <div className="btn_paddinng contact_btn btn_flex">
                  <div className="formBtn_icon">
                    <p>
                      <img src="images/right_arrow.png" alt="arrow" />
                    </p>
                  </div>
                  <p>
                    <input
                      className="send_btn"
                      id="submit"
                      type="submit"
                      value="Send me a Proposal"
                    />
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="xl:pt-[8rem] xl:pr-[5rem] xl:pb-[3rem] xl:pl-[8rem] lg:pt-[6rem] lg:pr-[5rem] lg:pb-[3rem] lg:pl-[8rem] md:pt-[6rem] md:pr-[3rem] md:pb-[3rem] md:pl-[3rem] pt-[4rem] pr-[1rem] pb-[1rem] pl-[1rem] md:basis-6/12 basis-full background_contact">
          <div className="drop_basis">
            <div className="drop_title home_sec2_txt3 contact_bold xl:text-[48px] lg:text-[36px] md:text-[32px] sm:text-[24px] text-[22px]">
              <p className="white_text uppercase">
                Ready to scale your business to new heights?
              </p>
            </div>
            <div className="ready_content">
              <div className="ready_content_sec home_sec2_txt4">
                <p className="white_text">
                  Just fill out the form, and let our experts look after the
                  rest. Here’s what will happen next:
                </p>
              </div>
              <div className="ready_content_list home_sec2_txt4">
                <p className="white_text contact_title">
                  1. Initiating Contact
                </p>
                <p className="white_text">
                  We will contact you within 24 business hours.
                </p>
              </div>
              <div className="ready_content_list home_sec2_txt4">
                <p className="white_text contact_title">
                  2. Share Your Requirement
                </p>
                <p className="white_text">
                  Tell us exactly what you’re looking for and how would you like
                  our team to help you further. Our technical team will evaluate
                  your requirement and reach back to you with a project plan
                </p>
              </div>
              <div className="ready_content_list home_sec2_txt4">
                <p className="white_text contact_title">
                  3. Sign Non-Disclosure Agreement
                </p>
                <p className="white_text">
                  Signing an NDA is like putting your idea in a safe deposit
                  box. Be rest assured about any privacy concerns.
                </p>
              </div>
              <div className="ready_content_list home_sec2_txt4">
                <p className="white_text contact_title">
                  4. Estimated Budget/Cost
                </p>
                <p className="white_text">
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
                  <img src="images/people-01.png" alt="people" className="" />
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
                    src="images/progress-01.png"
                    alt="progress"
                    className=""
                  />
                </div>

                <div className="steps_service">
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
                  <img src="images/passion-01.png" alt="passion" className="" />
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

        <div className="service_width contact_sec3">
          <div className="just_call_sec">
            <div className="home_sec2_txt3 contact_bold text-center">
              <p className="textUpercase">JUST A CALL AWAY</p>
            </div>
          </div>
          <div className="contact_details background relative">
            <div className="logowhite">
              <img
                className="alignnone"
                src="images/logo-vector-white.png"
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
                    src="images/call.png"
                    alt="Mobile"
                  />
                </div>
                <div className="contact_text_call">
                  <p>
                    <Link href="tel:919313644148">+91 93136 44148</Link>
                  </p>
                </div>
              </div>
              <div className="contact_iconText_flex">
                <div className="contact_icon">
                  <img
                    className="alignnone"
                    src="images/email.png"
                    alt="Email"
                  />
                </div>
                <div className="contact_text_call">
                  <p>
                    <Link href="mailto:sales@brilworks.com">
                      sales@brilworks.com
                    </Link>
                  </p>
                </div>
              </div>
              <div className="contact_iconText_flex">
                <div className="contact_icon">
                  <img
                    className="alignnone"
                    src="images/skype.png"
                    alt="Skype"
                  />
                </div>
                <div className="contact_text_call">
                  <p>
                    <Link href="skype:cid.d74c89a9ff70ee92">
                      cid.d74c89a9ff70ee92
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ClientReviews />

        <div className="mx-auto px-[15px] sec3_width_home pt-24">
          <div className="bg_grey">
            <div className="like_flex">
              <div className="like_basis">
                <div className="like_text bold home_sec2_txt3">
                  <p>LIKE WHAT YOU SEE? LET’S GET STARTED THEN!</p>
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
                    <form action="" method="post" className="wpcf7-form init">
                      <div className="form-group">
                        <p>
                          <label className="label_name">
                            First &amp; Last Name*
                          </label>
                          <br />
                          <span className="wpcf7-form-control-wrap">
                            <input
                              size="40"
                              className="form-control-txt"
                              value=""
                              type="text"
                              name="text-737"
                            />
                          </span>
                        </p>
                      </div>
                      <div className="form-group">
                        <p>
                          <label className="label_name">
                            Work Email Address*
                          </label>
                          <br />
                          <span className="wpcf7-form-control-wrap">
                            <input
                              size="40"
                              className="form-control-txt"
                              value=""
                              type="email"
                              name="email-160"
                            />
                          </span>
                        </p>
                      </div>
                      <div className="form-group">
                        <p>
                          <label className="label_name">Phone Number*</label>
                          <br />
                          <span className="wpcf7-form-control-wrap">
                            <input
                              size="40"
                              className="form-control-txt"
                              value=""
                              type="tel"
                              name="tel-336"
                            />
                          </span>
                        </p>
                      </div>
                      <div className="form-group">
                        <p>
                          <label className="label_name">Your Message</label>
                          <br />
                          <span className="wpcf7-form-control-wrap">
                            <textarea
                              cols="1"
                              rows="2"
                              className="form-control-txt"
                              id="message"
                              name="textarea-62"
                            ></textarea>
                          </span>
                        </p>
                      </div>
                      <div className="btn_paddinng contact_btn btn_flex">
                        <div className="formBtn_icon">
                          <p>
                            <img src="images/right_arrow.png" alt="arrow" />
                          </p>
                        </div>
                        <p>
                          <input
                            className="send_btn"
                            id="submit"
                            type="submit"
                            value="Inquire Now"
                          />
                        </p>
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
