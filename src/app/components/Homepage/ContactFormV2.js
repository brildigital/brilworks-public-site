"use client";
import ReCAPTCHA from "react-google-recaptcha";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { Bot, Smartphone, Globe, Users, Cpu, Database } from "lucide-react";
import ButtonV2 from "../Common/ButtonV2";
import Loader from "./Loader";
import {
  getLeadSource,
  markLeadSource,
  pushFormStart,
  pushGenerateLead,
} from "../lib/leadSource";

const projectTypes = [
  {
    value: "data-engineering",
    label: "Data Engineering",
    icon: <Database size={20} strokeWidth={1.75} />,
  },
  {
    value: "embedded-solutions",
    label: "Embedded Solutions",
    icon: <Cpu size={20} strokeWidth={1.75} />,
  },
  {
    value: "ai-solutions",
    label: "AI Solutions",
    icon: <Bot size={20} strokeWidth={1.75} />,
  },
  {
    value: "mobile-app",
    label: "Mobile App",
    icon: <Smartphone size={20} strokeWidth={1.75} />,
  },
  {
    value: "web-saas",
    label: "Web / SaaS",
    icon: <Globe size={20} strokeWidth={1.75} />,
  },
  {
    value: "staff-augmentation",
    label: "Staff Augmentation",
    icon: <Users size={20} strokeWidth={1.75} />,
  },
];

const ContactFormV2 = ({
  darkMode = false,
  hideEmail = false,
  careerMode = false,
}) => {
  const pathname = usePathname();
  const recaptchaRef = useRef(null);
  const [step, setStep] = useState(careerMode ? 2 : 1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [respMessage, setRespMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    projectType: careerMode ? "career" : "",
  });

  const [previousPage, setPreviousPage] = useState("");
  const formStartFiredRef = useRef(false);

  useEffect(() => {
    const currentPath = window.location.pathname;
    const storedPreviousPage = sessionStorage.getItem("previousNav");
    if (storedPreviousPage && storedPreviousPage !== currentPath) {
      setPreviousPage(storedPreviousPage);
    }
    sessionStorage.setItem("previousNav", currentPath);
  }, []);

  const markFormFunnel = () => {
    if (formStartFiredRef.current) return;
    formStartFiredRef.current = true;
    markLeadSource("form_funnel");
    pushFormStart({ form_id: "homepage-contact-form" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    markFormFunnel();
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleProjectSelect = (value) => {
    markFormFunnel();
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
    const leadSource =
      getLeadSource() === "unknown" ? "form_funnel" : getLeadSource();
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
            lead_source_funnel: leadSource,
          }),
        },
      );

      if (response.ok) {
        pushGenerateLead({
          form_id: "homepage-contact-form",
          page: pathname,
          project_type: formData.projectType,
          lead_source_funnel: leadSource,
        });
        setFormData({
          name: "",
          email: "",
          message: "",
          projectType: careerMode ? "career" : "",
        });
        setStep(careerMode ? 2 : 1);
        formStartFiredRef.current = false;
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
        {!careerMode && (
          <div className="flex items-center gap-3 mb-6">
            <div
              className={`flex items-center gap-2 text-sm font-semibold ${step === 1 ? "text-themeColor" : darkMode ? "text-white/40" : "text-[#9ca3af]"}`}
            >
              <span
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step === 1 ? "bg-themeColor text-white" : "bg-themeColor/20 text-themeColor"}`}
              >
                1
              </span>
              Project type
            </div>
            <div
              className={`w-8 h-[1px] ${darkMode ? "bg-white/20" : "bg-[#e5e7eb]"}`}
            />
            <div
              className={`flex items-center gap-2 text-sm font-semibold ${step === 2 ? "text-themeColor" : darkMode ? "text-white/40" : "text-[#9ca3af]"}`}
            >
              <span
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step === 2 ? "bg-themeColor text-white" : darkMode ? "bg-white/10 text-white/40" : "bg-[#f3f4f6] text-[#9ca3af]"}`}
              >
                2
              </span>
              Your details
            </div>
          </div>
        )}

        {/* Step 1: Project Type Selection */}
        {step === 1 && (
          <div className="flex flex-col gap-3">
            <p
              className={`text-[15px] font-medium mb-1 ${darkMode ? "text-white/70" : "text-[#374151]"}`}
            >
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
                      : "border-gray-300 hover:border-themeColor hover:bg-[#f0f5ff] text-[#374151]"
                  }`}
                >
                  <span
                    className={`${darkMode ? "text-white/50 group-hover:text-themeColor" : "text-[#9ca3af] group-hover:text-themeColor"} transition-colors`}
                  >
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
            {!careerMode && (
              <div className="flex items-center gap-2 mb-1">
                <span
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full ${darkMode ? "bg-white/10 text-white/70" : "bg-[#f0f5ff] text-themeColor"}`}
                >
                  {
                    projectTypes.find((t) => t.value === formData.projectType)
                      ?.label
                  }
                </span>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className={`text-xs font-medium underline underline-offset-2 ${darkMode ? "text-white/40 hover:text-white/70" : "text-[#9ca3af] hover:text-[#374151]"} transition-colors`}
                >
                  Change
                </button>
              </div>
            )}

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
                placeholder={
                  careerMode
                    ? "Tell us about yourself — role you're applying for, experience, and a link to your resume or portfolio..."
                    : "Tell us what you're building — goals, timeline, budget range..."
                }
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
                label={
                  isSubmitting
                    ? "Submitting..."
                    : careerMode
                      ? "Send Application"
                      : "Let's Build This"
                }
                disabled={isSubmitting}
              />
              {!hideEmail && (
                <p
                  className={`text-xs ${darkMode ? "text-white/35" : "text-[#9ca3af]"}`}
                >
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
