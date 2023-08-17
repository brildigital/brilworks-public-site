"use client";
import { useMediaQuery } from "react-responsive";
import Loader from "../Homepage/Loader";
import { useState } from "react";
import { usePathname } from "next/navigation";

const TechnologyContactForm = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [respMessage, setRespMessage] = useState("");
  const pathname = usePathname();

  const url = process.env.NEXT_PUBLIC_GOOGLESHEET_URL;

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
    formData.append("route", pathname);

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        res.text();
      })
      .then((finalResp) => {
        setRespMessage("Your response is submitted successfully.");
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
    <div
      className="mx-auto sec3_width_home md:py-[4rem] py-[2rem]"
      id="section10_service"
    >
      <div className="bg_grey !rounded-[30px] bg-[#ededed]">
        <div className="like_flex">
          <div className="like_basis basis-[50%]">
            <div className="like_text bold home_sec2_txt3">
              <p className="!w-full">
                CONNECT WITH US TO GET A 48 HOURS RISK-FREE TRIAL
              </p>
            </div>
          </div>
          <div className="like_basis_form basis-[50%]">
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
                    <p className={isMobile ? "pt-4" : ""}>
                      <label className="label_name">Name*</label>
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
                      <label className="label_name">Mobile*</label>
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
                      <label className="label_name">Email *</label>
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

                  <div className="success-msg mb-6 mt-2 h-2" id="sucess_msg">
                    {respMessage}
                  </div>

                  <button
                    className="contact_btn_technology btn_flex !w-50%]"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="py-[8px] px-[41px]">
                        <Loader />
                      </div>
                    ) : (
                      <>
                        <div className="formBtn_icon">
                          <p>
                            <img src="/images/right_arrow.png" alt="arrow" />
                          </p>
                        </div>
                        <p className="send_btn" id="submit" name="btnSubmit">
                          Submit
                        </p>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyContactForm;
