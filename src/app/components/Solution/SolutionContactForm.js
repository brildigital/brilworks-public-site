import { useState } from "react";
import Loader from "../Homepage/Loader";
import { usePathname } from "next/navigation";

const SolutionContactForm = () => {
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
    <div
      className="mx-auto px-[15px] sec3_width_home md:py-[6rem] py-[4rem]"
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
                          required
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
                          type="number"
                          name="phone"
                          required
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
                          required
                        />
                      </span>
                    </p>
                  </div>
                  <div className="success-msg h-4" id="sucess_msg">
                    {respMessage}
                  </div>
                  <button
                    className="btn_paddinng contact_btn btn_flex"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="py-[8px] px-[41px]">
                        <Loader />
                      </div>
                    ) : (
                      <>
                        <div className="formBtn_icon grid-flow-row">
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

export default SolutionContactForm;
