"use client";
import ReCAPTCHA from "react-google-recaptcha";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import ButtonV2 from "../Common/ButtonV2";
import Loader from "../Homepage/Loader";

const FreeUiContactForm = () => {
  const pathname = usePathname();

  const recaptchaRef = useRef(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [respMessage, setRespMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
    linkedin: "",
  });

  const [previousPage, setPreviousPage] = useState("");

  useEffect(() => {
    // Store current page in sessionStorage when component mounts
    const currentPath = window.location.pathname;

    const storedPreviousPage = sessionStorage.getItem("previousNav");
    if (storedPreviousPage && storedPreviousPage !== currentPath) {
      setPreviousPage(storedPreviousPage);
    }

    // Store current page for next navigation
    sessionStorage.setItem("previousNav", currentPath);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const clearMessage = () => {
    setTimeout(() => setRespMessage(""), 5000);
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
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            page: pathname,
            token,
            previousPage,
          }),
        }
      );

      if (response.ok) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          website: "",
          message: "",
          linkedin: "",
        });
        setRespMessage("Your response has been submitted successfully.");
        clearMessage();
      } else {
        setRespMessage("Something went wrong!");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setRespMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex v2-contact-form">
      <form
        className="w-full flex flex-col gap-4 text-colorBlack dark"
        id="homepage-contact-form"
        onSubmit={handleSubmit}
      >
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
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

        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <input
            className="form-field"
            placeholder="Phone Number"
            type="tel"
            name="phone"
            value={formData.phone}
            required
            onChange={handleChange}
          />
          <input
            className="form-field"
            placeholder="Website (Optional)"
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
          />
        </div>

        <textarea
          className="form-field"
          placeholder="Tell us about your idea"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
        />

        <input
          className="form-field"
          placeholder="LinkedIn URL (Optional)"
          type="url"
          name="linkedin"
          value={formData.linkedin}
          onChange={handleChange}
        />

        {respMessage && (
          <div className="h-4 text-sm text-colorWhite" id="success_msg">
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
        </div>
      </form>
    </div>
  );
};

export default FreeUiContactForm;
