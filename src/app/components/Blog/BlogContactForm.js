"use client";
import ReCAPTCHA from "react-google-recaptcha";
import { useEffect, useRef, useState } from "react";
import Loader from "../Homepage/Loader";
import { usePathname } from "next/navigation";
import ButtonV2 from "../Common/ButtonV2";

const BlogContactForm = () => {
  const pathname = usePathname();
  const recaptchaRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [respMessage, setRespMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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

  const isBlogPage = pathname.includes("/blog/");

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
          body: JSON.stringify({
            ...formData,
            page: pathname,
            token,
            previousPage,
          }),
        }
      );

      if (response.ok) {
        setFormData({ name: "", email: "", message: "" });
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
    <div
      className={`w-full border ${
        isBlogPage
          ? "sticky top-[110px] !mb-6 overflow-auto lg:max-h-[calc(100vh_-_110px)] rounded-2xl"
          : "p-4"
      } border border-borderGray`}
    >
      {isBlogPage ? (
        <>
          <p className="flex justify-between border-b border-borderGray font-medium !p-5 !pb-3">
            Get In Touch
          </p>

          <p className="p-4 !pb-0 text-sm">
            Contact us for your software development requirements
          </p>
        </>
      ) : (
        <p className="font-semibold !mb-4 text-base md:text-lg">
          Hire Skilled Developer From Us
        </p>
      )}

      <form
        id={isBlogPage ? "Blogpage-contact-form" : "Gist-contact-form"}
        onSubmit={handleSubmit}
        className="p-4 blog-contact-form"
      >
        <div className="mb-3">
          <input
            className="form-field"
            placeholder="Name"
            type="text"
            name="name"
            value={formData.name}
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
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
        <div className="mb-4">
          <textarea
            className="form-field"
            cols="1"
            rows="4"
            placeholder="Write here..."
            id="message"
            aria-invalid="false"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <div className="success-msg mb-4 !text-xs" id="sucess_msg">
          {respMessage}
        </div>
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          size="invisible"
          ref={recaptchaRef}
        />
        <ButtonV2
          id="submit"
          name="btnSubmit"
          type="submit"
          className="w-full hover:text-themeColor"
          icon={isSubmitting ? <Loader /> : ""}
          label={isSubmitting ? "Submitting" : "Submit"}
          disabled={isSubmitting}
        />
      </form>
    </div>
  );
};

export default BlogContactForm;
