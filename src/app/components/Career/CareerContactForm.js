"use client";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Loader from "../Homepage/Loader";
import { usePathname } from "next/navigation";
import Image from "next/image";

const CareerContactForm = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const pathname = usePathname();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [respMessage, setRespMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const clearMessage = () => {
    setTimeout(() => {
      setRespMessage("");
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}api/home-career`,
        {
          method: "POST",
          header: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...formData, page: pathname }),
        }
      );

      if (response.ok) {
        setFormData({ name: "", company: "", email: "", message: "" });
        setRespMessage("Your response is submitted successfully.");
        clearMessage();
      } else {
        setRespMessage("Something went wrong!");
      }
      setIsSubmitting(false);
    } catch (error) {
      console.error("Error sending email", error);
      setIsSubmitting(false);
    }
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
                    id="career-contact-Form"
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
                            value={formData.name}
                            required
                            onChange={handleChange}
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
                            value={formData.company}
                            required
                            onChange={handleChange}
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
                            value={formData.email}
                            required
                            onChange={handleChange}
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
                            value={formData.message}
                            onChange={handleChange}
                          ></textarea>
                        </span>
                      </p>
                    </div>
                    <div className="success-msg h-4" id="sucess_msg">
                      {respMessage}
                    </div>
                    <button className="btn_paddinng pt-4">
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
                    </button>
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
                    <div className="w-[30%]">
                      <Image
                        className="alignnone"
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
                    <div className="w-[30%]">
                      <Image
                        className="alignnone"
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
                    <div className="w-[30%]">
                      <Image
                        className="alignnone"
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
                    <div className="w-[30%]">
                      <Image
                        className="alignnone"
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
