"use client";
const TechnologyContactForm = () => {
  const isMobile = window.innerWidth < 767;
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
                <form action="" method="post" className="wpcf7-form init">
                  <div className="form-group">
                    <p className={isMobile && "py-4"}>
                      <label className={`label_name ${isMobile && "pb-2"}`}>
                        Name*
                      </label>
                      <br />
                      <span className="wpcf7-form-control-wrap">
                        <input
                          size="40"
                          className="form-control-txt"
                          type="text"
                          name="text-737"
                        />
                      </span>
                    </p>
                  </div>

                  <div className="form-group">
                    <p className={isMobile && "py-4"}>
                      <label className={`label_name ${isMobile && "pb-2"}`}>
                        Mobile*
                      </label>
                      <br />
                      <span className="wpcf7-form-control-wrap">
                        <input
                          size="40"
                          className="form-control-txt"
                          type="tel"
                          name="tel-336"
                        />
                      </span>
                    </p>
                  </div>
                  <div className="form-group">
                    <p className={isMobile && "py-4"}>
                      <label className={`label_name ${isMobile && "pb-2"}`}>
                        Email *
                      </label>
                      <br />
                      <span className="wpcf7-form-control-wrap">
                        <input
                          size="40"
                          className="form-control-txt"
                          type="email"
                          name="email-160"
                        />
                      </span>
                    </p>
                  </div>
                  <div className="contact_btn btn_flex ">
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
                        value="Inquire Now"
                      />
                      <span className="wpcf7-spinner"></span>
                    </p>
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

export default TechnologyContactForm;
