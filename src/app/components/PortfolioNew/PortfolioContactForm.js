"use client";
import React, { useState } from "react";
import Loader from "../Homepage/Loader";
import { usePathname } from "next/navigation";
import ButtonV2 from "../Common/ButtonV2";

const PortfolioContactForm = ({
  description,
  companyNotRequired,
  downloadFileUrl,
  darkMode = true,
}) => {
  const pathname = usePathname();

  const textToShow = pathname.startsWith("/portfolio/")
    ? "Case Study"
    : "E-Book";

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [respMessage, setRespMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
  });

  const submitText = downloadFileUrl ? `Download ${textToShow}` : "Submit";
  const submitLoadingText = downloadFileUrl ? "Downloading" : "Submitting";

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
          body: JSON.stringify({
            ...formData,
            page: pathname,
            downloadLink: downloadFileUrl,
          }),
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
    <div className="flex v2-contact-form">
      <form
        className={`w-full flex flex-col md:!gap-5 gap-3 ${
          darkMode ? "dark" : ""
        }`}
        id="case-study-download-form"
        onSubmit={handleSubmit}
      >
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
          <input
            className="form-field"
            placeholder="Organisation Name"
            type="text"
            name="company"
            value={formData.company}
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
        <div className="h-4" id="sucess_msg">
          {respMessage}
        </div>
        <div className="flex items-center gap-5">
          <ButtonV2
            id="submit"
            name="btnSubmit"
            type="submit"
            size="large"
            className="hover:text-themeColor hover:!bg-colorWhite w-fit gap-2"
            icon={isSubmitting ? <Loader /> : ""}
            label={isSubmitting ? submitLoadingText : submitText}
            disabled={isSubmitting}
          />
        </div>
      </form>
    </div>
    // <form id="case-study-contact-form" onSubmit={handleSubmit}>
    //   {description && (
    //     <div>
    //       <p className="text-colorGray text-xl !mb-[30px] pl-1">
    //         {description}
    //       </p>
    //     </div>
    //   )}
    //   <div
    //     className={`relative w-full mb-6 ${
    //       companyNotRequired ? "h-16" : "h-10"
    //     }`}
    //   >
    //     <input
    //       className="peer w-full h-full border-t-0 bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-blue-gray-200 focus:border-t-transparent text-sm px-4 py-5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
    //       id="name"
    //       type="text"
    //       name="name"
    //       value={formData.name}
    //       required
    //       onChange={handleChange}
    //       placeholder=""
    //     />
    //     <label
    //       className={`flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900  ${
    //         companyNotRequired
    //           ? "peer-placeholder-shown:leading-[5.75]"
    //           : "peer-placeholder-shown:leading-[3.75]"
    //       }`}
    //     >
    //       Name*
    //     </label>
    //   </div>
    //   {!companyNotRequired && (
    //     <div className="relative w-full h-10 mb-6">
    //       <input
    //         className="peer w-full h-full border-t-0 bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-blue-gray-200 focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
    //         id="company"
    //         type="text"
    //         name="company"
    //         value={formData.company}
    //         required
    //         onChange={handleChange}
    //         placeholder=""
    //       />
    //       <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
    //         Company*
    //       </label>
    //     </div>
    //   )}
    //   <div
    //     className={`relative w-full mb-6 ${
    //       companyNotRequired ? "h-16" : "h-10"
    //     }`}
    //   >
    //     <input
    //       className="peer w-full h-full border-t-0 bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-blue-gray-200 focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
    //       id="email"
    //       type="email"
    //       name="email"
    //       value={formData.email}
    //       required
    //       onChange={handleChange}
    //       placeholder=""
    //     />
    //     <label
    //       className={`flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900  ${
    //         companyNotRequired
    //           ? "peer-placeholder-shown:leading-[5.75]"
    //           : "peer-placeholder-shown:leading-[3.75]"
    //       }`}
    //     >
    //       Email*
    //     </label>
    //   </div>
    //   <div className="h-4 text-xs font-medium text-themeColor" id="sucess_msg">
    //     {respMessage}
    //   </div>
    //   <BrilworksButton
    //     id="submit"
    //     type="submit"
    //     className="mt-2 w-full font-bold"
    //     icon={isSubmitting ? <Loader /> : ""}
    //     label={isSubmitting ? submitLoadingText : submitText}
    //     variant="primary"
    //     disabled={isSubmitting}
    //   />
    // </form>
  );
};

export default PortfolioContactForm;
