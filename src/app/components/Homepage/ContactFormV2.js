"use client";
import ReCAPTCHA from "react-google-recaptcha";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import ButtonV2 from "../Common/ButtonV2";
import Loader from "./Loader";

const projectTypes = [
  { value: "ai-solutions", label: "AI Solutions", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a4 4 0 0 1 4 4v2H8V6a4 4 0 0 1 4-4z" /><rect x="3" y="8" width="18" height="12" rx="2" /><circle cx="9" cy="14" r="1.5" /><circle cx="15" cy="14" r="1.5" /></svg> },
  { value: "mobile-app", label: "Mobile App", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg> },
  { value: "web-saas", label: "Web / SaaS", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg> },
  { value: "staff-augmentation", label: "Staff Augmentation", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg> },
];

const ContactFormV2 = ({
  darkMode = false,
  hideEmail = false,
}) => {
  const pathname = usePathname();
  const recaptchaRef = useRef(null);
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [respMessage, setRespMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    projectType: "",
  });

  const [previousPage, setPreviousPage] = useState("");

  useEffect(() => {
    const currentPath = window.location.pathname;
    const storedPreviousPage = sessionStorage.getItem("previousNav");
    if (storedPreviousPage && storedPreviousPage !== currentPath) {
      setPreviousPage(storedPreviousPage);
    }
    sessionStorage.setItem("previousNav", currentPath);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleProjectSelect = (value) => {
    setFormData((prevData) => ({ ...prevData, projectType: value }));
    setStep(2);
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
          body: JSON.stringify({
            ...formData,
            page: pathname,
            token,
            previousPage,
          }),
        }
      );

      if (response.ok) {
        setFormData({ name: "", email: "", message: "", projectType: "" });
        setStep(1);
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
      <div className={`w-full ${darkMode ? "dark" : ""}`}>
        {/* Step Indicator */}
        <div className="flex items-center gap-3 mb-6">
          <div className={`flex items-center gap-2 text-sm font-semibold ${step === 1 ? "text-themeColor" : darkMode ? "text-white/60" : "text-[#9ca3af]"}`}>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step === 1 ? "bg-themeColor text-white" : "bg-themeColor/20 text-themeColor"}`}>1</span>
            Project type
          </div>
          <div className={`w-8 h-[1px] ${darkMode ? "bg-white/20" : "bg-[#e5e7eb]"}`} />
          <div className={`flex items-center gap-2 text-sm font-semibold ${step === 2 ? "text-themeColor" : darkMode ? "text-white/60" : "text-[#9ca3af]"}`}>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step === 2 ? "bg-themeColor text-white" : darkMode ? "bg-white/10 text-white/60" : "bg-[#f3f4f6] text-[#9ca3af]"}`}>2</span>
            Your details
          </div>
        </div>

        {/* Step 1: Project Type Selection */}
        {step === 1 && (
          <div className="flex flex-col gap-3">
            <p className={`text-[15px] font-medium mb-1 ${darkMode ? "text-white/70" : "text-[#374151]"}`}>
              What are you building?
            </p>
            <div className="grid grid-cols-2 gap-3">
              {projectTypes.map((type) => (
                <button
                  key={type.value}
                  type="button"
                  onClick={() => handleProjectSelect(type.value)}
                  className={`flex items-center gap-3 px-4 py-4 rounded-xl border transition-all duration-200 text-left group ${
                    darkMode
                      ? "border-white/10 hover:border-themeColor hover:bg-white/[0.05] text-white/70 hover:text-white"
                      : "border-[#e5e7eb] hover:border-themeColor hover:bg-[#f0f5ff] text-[#374151]"
                  }`}
                >
                  <span className={`${darkMode ? "text-white/65 group-hover:text-themeColor" : "text-[#9ca3af] group-hover:text-themeColor"} transition-colors`}>
                    {type.icon}
                  </span>
                  <span className="text-sm font-semibold">{type.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Contact Details */}
        {step === 2 && (
          <form
            className="w-full flex flex-col md:!gap-5 gap-3"
            id="homepage-contact-form"
            onSubmit={handleSubmit}
          >
            {/* Selected project type chip */}
            <div className="flex items-center gap-2 mb-1">
              <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${darkMode ? "bg-white/10 text-white/70" : "bg-[#f0f5ff] text-themeColor"}`}>
                {projectTypes.find((t) => t.value === formData.projectType)?.label}
              </span>
              <button
                type="button"
                onClick={() => setStep(1)}
                className={`text-xs font-medium underline underline-offset-2 ${darkMode ? "text-white/60 hover:text-white/70" : "text-[#9ca3af] hover:text-[#374151]"} transition-colors`}
              >
                Change
              </button>
            </div>

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
            <div className="w-full grid grid-cols-1">
              <textarea
                className="form-field"
                cols="1"
                rows="4"
                placeholder="Tell us what you're building — goals, timeline, budget range..."
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
            <div className="flex flex-col gap-3 items-end">
              <ButtonV2
                id="submit"
                name="btnSubmit"
                type="submit"
                size="large"
                className="hover:text-themeColor hover:!bg-colorWhite w-fit gap-2"
                icon={isSubmitting ? <Loader /> : ""}
                label={isSubmitting ? "Submitting..." : "Let's Build This"}
                disabled={isSubmitting}
              />
              {!hideEmail && (
                <p className={`text-xs ${darkMode ? "text-white/60" : "text-[#9ca3af]"}`}>
                  Or email us directly at{" "}
                  <a
                    href="mailto:sales@brilworks.com"
                    target="_blank"
                    className="underline underline-offset-2 hover:text-themeColor transition-colors"
                  >
                    sales@brilworks.com
                  </a>
                </p>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactFormV2;
