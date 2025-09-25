"use client";
import ReCAPTCHA from "react-google-recaptcha";
import React, { useEffect, useRef, useState } from "react";
import Loader from "../Homepage/Loader";
import { usePathname } from "next/navigation";
import ButtonV2 from "../Common/ButtonV2";
import { formatSrcUrl } from "../lib/commonFunction";

const PortfolioContactForm = ({
  description,
  downloadFileUrl,
  darkMode = true,
  messageField = false,
  setShowPrice,
  showPhoneField = true,
  showCompanyField = true,
}) => {
  const pathname = usePathname();

  const recaptchaRef = useRef(null);

  const textToShow = pathname.startsWith("/portfolio/")
    ? "Case Study"
    : "E-Book";

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [respMessage, setRespMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    message: "",
  });

  const submitText = downloadFileUrl ? `Download ${textToShow}` : "Submit";
  const submitLoadingText = downloadFileUrl ? "Downloading" : "Submitting";
  const submitMessageText = downloadFileUrl
    ? "Thanks! Download link has been sent to your email."
    : "Your response is submitted successfully.";

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
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const clearMessage = () => {
    setShowPrice(true);
    setTimeout(() => {
      setRespMessage("");
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setRespMessage(submitMessageText);
    clearMessage();
    setIsSubmitting(false);

    // const token = await recaptchaRef.current.executeAsync();

    // try {
    //   const downloadURL = formatSrcUrl(downloadFileUrl);
    //   const response = await fetch(
    //     `${process.env.NEXT_PUBLIC_BASE_URL}api/home-career`,
    //     {
    //       method: "POST",
    //       header: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         ...formData,
    //         page: pathname,
    //         downloadLink: downloadURL,
    //         token,
    //         previousPage,
    //       }),
    //     }
    //   );

    //   if (response.ok) {
    //     setFormData({
    //       name: "",
    //       company: "",
    //       phone: "",
    //       email: "",
    //       message: "",
    //     });
    //     setRespMessage(submitMessageText);
    //     clearMessage();
    //   } else {
    //     setRespMessage("Something went wrong!");
    //   }
    //   setIsSubmitting(false);
    // } catch (error) {
    //   console.error("Error sending email", error);
    //   setIsSubmitting(false);
    // }
  };

  return (
    <div className="flex v2-contact-form">
      <form
        className={`w-full flex flex-col md:!gap-5 gap-3 ${
          darkMode ? "dark" : ""
        }`}
        id="case-study-download-form"
        onSubmit={handleSubmit}
      >
        {description && <p className="md:text-xl text-lg">{description}</p>}
        <div className="w-full grid grid-cols-1 gap-4">
          <input
            className="form-field"
            placeholder="Name"
            type="text"
            name="name"
            value={formData.name}
            required
            onChange={handleChange}
          />
          {showCompanyField && (
            <input
              className="form-field"
              placeholder="Company"
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          )}
          {showPhoneField && (
            <input
              className="form-field"
              type="number"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
          )}

          <input
            className="form-field"
            placeholder="Email Address"
            type="email"
            name="email"
            value={formData.email}
            required
            onChange={handleChange}
          />
          {messageField && (
            <textarea
              className="form-field"
              cols="1"
              rows="3"
              placeholder="About Your Project"
              id="message"
              aria-invalid="false"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required={messageField}
            />
          )}
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

        <div className="flex items-center gap-5">
          <ButtonV2
            id="submit"
            name="btnSubmit"
            type="submit"
            size="large"
            className="hover:text-themeColor hover:!bg-colorWhite w-full gap-2"
            icon={isSubmitting ? <Loader /> : ""}
            label={isSubmitting ? submitLoadingText : submitText}
            disabled={isSubmitting}
          />
        </div>
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          size="invisible"
          ref={recaptchaRef}
        />
      </form>
    </div>
  );
};

export default PortfolioContactForm;
