"use client";
import ReCAPTCHA from "react-google-recaptcha";
import { usePathname } from "next/navigation";
import React, { useRef, useState } from "react";
import ButtonV2 from "../Common/ButtonV2";
import Loader from "./Loader";

const ContactFormV2 = ({
  darkMode = false,
  hideEmail = false,
  showProjectType = false,
}) => {
  const pathname = usePathname();
  const recaptchaRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [respMessage, setRespMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    projectType: "",
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

    const token = await recaptchaRef.current.executeAsync();
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}api/home-career`,
        {
          method: "POST",
          header: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...formData, page: pathname, token }),
        }
      );

      if (response.ok) {
        setFormData({ name: "", phone: "", email: "", message: "" });
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
    <div className="flex v2-contact-form">
      <form
        className={`w-full flex flex-col md:!gap-5 gap-3 ${
          darkMode ? "dark" : ""
        }`}
        id="homepage-contact-form"
        onSubmit={handleSubmit}
      >
        <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-4">
          <input
            className="form-field"
            placeholder="Name"
            type="text"
            name="name"
            value={formData.name}
            required
            onChange={handleChange}
          />
          <input
            className="form-field"
            placeholder="Email Address"
            type="email"
            name="email"
            value={formData.email}
            required
            onChange={handleChange}
          />
        </div>
        <div
          className={`w-full grid ${
            showProjectType ? "md:grid-cols-2 gap-4" : "grid-cols-1"
          }`}
        >
          <input
            className="form-field"
            placeholder="Phone Number"
            type="number"
            name="phone"
            value={formData.phone}
            required
            onChange={handleChange}
          />
          {showProjectType && (
            <select
              className="form-field bg-white"
              name="projectType"
              value={formData.projectType}
              required
              onChange={handleChange}
            >
              <option value="" disabled>
                Select Project Type
              </option>
              <option value="website">Website</option>
              <option value="mobileApp">Mobile App</option>
              <option value="dashboard">Dashboard</option>
              <option value="other">Other</option>
            </select>
          )}
        </div>
        <div className="w-full grid grid-cols-1">
          <textarea
            className="form-field"
            cols="1"
            rows="4"
            placeholder="About Your Project"
            id="message"
            aria-invalid="false"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        {respMessage && (
          <div
            className={`h-4 ${
              darkMode ? "text-colorWhite" : "text-colorBlack"
            }`}
            id="sucess_msg"
          >
            {respMessage}
          </div>
        )}
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          size="invisible"
          ref={recaptchaRef}
        />
        <div className="flex items-center gap-5">
          <ButtonV2
            id="submit"
            name="btnSubmit"
            type="submit"
            size="large"
            className="hover:text-themeColor hover:!bg-colorWhite w-fit gap-2"
            icon={isSubmitting ? <Loader /> : ""}
            label={isSubmitting ? "Submitting..." : "Submit"}
            disabled={isSubmitting}
          />
          {!hideEmail && (
            <div
              className={`md:text-xl text-lg border-l border-l-[#CFD8DF] !pl-5 ${
                darkMode ? "text-colorWhite" : ""
              }`}
            >
              Email Us :{" "}
              <a
                href="mailto:sales@brilworks.com"
                target="_blank"
                className="bg-clip-text text-transparent bg-theme-gradient"
              >
                sales@brilworks.com
              </a>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactFormV2;
