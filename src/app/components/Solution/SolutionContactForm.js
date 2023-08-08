import { useState } from "react";
import Loader from "../Homepage/Loader";

const SolutionContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [respMessage, setRespMessage] = useState("");

  const url = process.env.googleSheetURL;

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
        clearMessage();
      })
      .catch((err) => {
        setIsSubmitting(false);
        console.log(err);
      });
  };

  return (
    <div
      className="mx-auto px-[15px] sec3_width_home md:py-[6rem] py-[4rem] w-"
      id="section10_service"
    >
      <div className="bg_grey rounded-[30px] bg-[#ededed]">
        <div className="like_flex">
          <div className="like_basis basis-[50%]">
            <div className="like_text bold home_sec2_txt3">
              <p className="!w-full">
                TAKE THE FIRST STEP BY FILLING OUT THIS QUICK FORM.
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
                    <p>
                      <label className="label_name"> Name*</label>
                      <br />
                      <span className="wpcf7-form-control-wrap">
                        <input
                          size="40"
                          className="form-control-txt"
                          type="text"
                          name="name"
                        />
                      </span>
                    </p>
                  </div>

                  <div className="form-group">
                    <p>
                      <label className="label_name">Mobile*</label>
                      <br />
                      <span className="wpcf7-form-control-wrap">
                        <input
                          size="40"
                          className="form-control-txt"
                          type="text"
                          name="phone"
                        />
                      </span>
                    </p>
                  </div>
                  <div className="form-group">
                    <p>
                      <label className="label_name"> Email *</label>
                      <br />
                      <span className="wpcf7-form-control-wrap">
                        <input
                          size="40"
                          className="form-control-txt"
                          type="email"
                          name="email"
                        />
                      </span>
                    </p>
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
                            name="btnSubmit"
                            type="submit"
                          />
                        </p>
                      </>
                    )}
                  </div>
                  <div className="success-msg" id="sucess_msg">
                    {respMessage}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionContactForm;
