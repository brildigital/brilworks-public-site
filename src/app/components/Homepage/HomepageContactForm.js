"use client";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Loader from "./Loader";
import { usePathname } from "next/navigation";
import Button from "../Common/Button";

const HomepageContactForm = () => {
  const pathname = usePathname();
  const isMobile = useMediaQuery({ maxWidth: 767 });

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
    <div className="container mx-auto home_sec3_box">
      <div className="dots_flex !rounded-[30px]">
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
                  className="wpcf7-form init"
                  id="homepage-contact-form"
                  onSubmit={handleSubmit}
                >
                  <div className="form-group-home">
                    <p className="pb-4 md:pb-0">
                      <label className="label_name pb-2 md:pb-0">Name*</label>
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
                  <div className="form-group-home">
                    <p className={isMobile ? "pb-4" : ""}>
                      <label className={`label_name ${isMobile ? "pb-2" : ""}`}>
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
                  <div className="form-group-home">
                    <p className={isMobile ? "pb-4" : ""}>
                      <label className={`label_name ${isMobile ? "pb-2" : ""}`}>
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
                  <div className="form-group-home">
                    <p className={isMobile ? "pb-4" : ""}>
                      <label className={`label_name ${isMobile ? "pb-2" : ""}`}>
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
                  <div className="h-4 !text-colorWhite" id="sucess_msg">
                    {respMessage}
                  </div>
                  <Button
                    className="md:my-8 my-6"
                    id="submit"
                    name="btnSubmit"
                    type="submit"
                    icon={isSubmitting ? <Loader /> : ""}
                    label={isSubmitting ? "Submitting" : "Submit"}
                    variant="white"
                    disabled={isSubmitting}
                  />
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
  );
};

export default HomepageContactForm;
