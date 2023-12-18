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
    <div className="sticky top-[110px] z-[99] !mb-6 overflow-auto lg:max-h-[calc(100vh_-_110px)]">
      <div className="blog-get-in-touch">
        <div className=" mt-2">
          <p className="gradiant !text-[24px] font-medium font-graphik">
            Get In Touch
          </p>
        </div>
        <br />

        <div className="post_details_content">
          <p className="!font-[unset] !text-lg">
            Contact us for your software development requirements
          </p>
        </div>
        <div className="blog-contact-form">
          <div>
            <form id="Blogpage-contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <p>
                  <span>
                    <input
                      className="form-control-txt !w-full"
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      required
                      onChange={handleChange}
                      placeholder="Name*"
                    />
                  </span>
                </p>
              </div>
              <div className="form-group">
                <p>
                  <span>
                    <input
                      className="form-control-txt !w-full"
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      required
                      onChange={handleChange}
                      placeholder="Email*"
                    />
                  </span>
                </p>
              </div>
              <div className="form-group">
                <p>
                  <span>
                    <textarea
                      cols="1"
                      rows="2"
                      className="form-control-txt !w-full"
                      id="message"
                      name="message"
                      value={formData.message}
                      required
                      onChange={handleChange}
                      placeholder="Message*"
                    ></textarea>
                  </span>
                </p>
              </div>
              <div className="success-msg h-5 !font-[unset]" id="sucess_msg">
                {respMessage}
              </div>
              <button
                className="btn_flex ease-in-out !rounded !text-base font-semibold !w-full py-2"
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
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/images/right_arrow.png"
                          alt="arrow"
                        />
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
    </div>
  );
};

export default BlogContactForm;
