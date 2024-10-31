"use client";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Loader from "../Homepage/Loader";
import Button from "../Common/Button";
import { usePathname } from "next/navigation";

const ContactUsEmailForm = ({ inquiryForm }) => {
  const pathname = usePathname()
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
        className="wpcf7-form"
        id="contactus-page-form"
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <p className={isMobile ? "pt-4" : ""}>
            <label className={`label_name ${isMobile ? "pb-2" : ""}`}>
              First/Last Name*
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
              Business Email Address*
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
              About Your Project
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
        {inquiryForm ? (
          <Button
            className={isSubmitting ? "!text-colorBlack !mt-8" : "!mt-8"}
            id="submit"
            name="btnSubmit"
            type="submit"
            icon={isSubmitting ? <Loader /> : ""}
            label={isSubmitting ? "Submitting" : "Submit Inquiry"}
            disabled={isSubmitting}
          />
        ) : (
          <Button
            type="submit"
            innerClassName="flex items-center justify-center gap-2"
            className={isSubmitting ? "!text-colorBlack !mt-8" : "!mt-8 !pr-5"}
            icon={isSubmitting ? <Loader /> : "right-arrow"}
            label={isSubmitting ? "Submitting" : "Submit"}
            disabled={isSubmitting}
          />
        )}
      </form>
    </div>
  );
};

export default ContactUsEmailForm;
