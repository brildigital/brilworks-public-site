"use client";
import { useState } from "react";
import Loader from "../Homepage/Loader";
import { usePathname } from "next/navigation";

const BlogContactForm = () => {
  const pathname = usePathname();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [respMessage, setRespMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
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
        `${process.env.NEXT_PUBLIC_BASE_URL}api/blog-contact`,
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
    <div className="get_in_touch blog_padding">
      <div className="">
        <p className="gradiant md:!text-4xl">Get In Touch</p>
      </div>
      <br />

      <div className="post_details_content">
        <p>Contact us for your software development requirements</p>
      </div>
      <div className="blog-contact-form">
        <div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <p>
                <label className="label_name">Name*</label>
                <br />
                <span>
                  <input
                    className="form-control-txt"
                    id="name"
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
              <p>
                <label className="label_name">Email*</label>
                <br />
                <span>
                  <input
                    className="form-control-txt"
                    id="email"
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
              <p>
                <label className="label_name">Message*</label>
                <br />
                <span>
                  <textarea
                    cols="1"
                    rows="2"
                    className="form-control-txt"
                    id="message"
                    name="message"
                    value={formData.message}
                    required
                    onChange={handleChange}
                  ></textarea>
                </span>
              </p>
            </div>
            <div className="success-msg h-5" id="sucess_msg">
              {respMessage}
            </div>
            <button
              className="btn_paddinng contact_btn btn_flex"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="py-[4px] px-[30px]">
                  <Loader />
                </div>
              ) : (
                <>
                  <div>
                    <p>
                      <img src="/images/right_arrow.png" alt="arrow" />
                    </p>
                  </div>
                  <p id="submit" name="btnSubmit">
                    Submit
                  </p>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogContactForm;
