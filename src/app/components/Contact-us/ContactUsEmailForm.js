"use client";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Loader from "../Homepage/Loader";
import { usePathname } from "next/navigation";

const ContactUsEmailForm = () => {
  const pathname = usePathname();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [respMessage, setRespMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
        `${process.env.NEXT_PUBLIC_BASE_URL}api/contact-us`,
        {
          method: "POST",
          header: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...formData, page: pathname }),
        }
      );

      if (response.ok) {
        setFormData({ name: "", email: "", phone: "", message: "" });
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
    <div>
      <form
        className="wpcf7-form init"
        id="contactus-page-form"
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
                value={formData.name}
                required
                onChange={handleChange}
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
                value={formData.email}
                required
                onChange={handleChange}
              />
            </span>
          </p>
        </div>
        <div className="form-group">
          <p className={isMobile ? "pt-4" : ""}>
            <label className={`label_name ${isMobile ? "pb-2" : ""}`}>
              Phone Number
            </label>
            <br />
            <span className="wpcf7-form-control-wrap">
              <input
                size="40"
                className="form-control-txt"
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
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
                value={formData.message}
                onChange={handleChange}
              ></textarea>
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
              <div className="formBtn_icon">
                <p>
                  <img
                    decoding="async"
                    loading="lazy"
                    src="/images/right_arrow.png"
                    alt="arrow"
                  />
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
  );
};

export default ContactUsEmailForm;
