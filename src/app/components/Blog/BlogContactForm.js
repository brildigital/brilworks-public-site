import { useState } from "react";
import Loader from "../Homepage/Loader";

const BlogContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [respMessage, setRespMessage] = useState("");

  const url = process.env.googleSheetURL;

  const clearMessage = () => {
    setTimeout(() => {
      setRespMessage("");
    }, 5000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target;
    const formData = new FormData(form);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.text())
      .then((finalResp) => {
        setRespMessage(finalResp);
        setIsSubmitting(false);
        clearMessage();
      })
      .catch((err) => {
        setIsSubmitting(false);
        console.log(err);
      });
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
          <form method="post" onSubmit={handleSubmit}>
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
                  ></textarea>
                </span>
              </p>
            </div>
            <div className="btn_paddinng contact_btn btn_flex">
              {isSubmitting ? (
                <Loader />
              ) : (
                <>
                  <div>
                    <p>
                      <img src="/images/right_arrow.png" alt="arrow" />
                    </p>
                  </div>
                  <p>
                    <input id="submit" type="submit" name="btnSubmit" />
                  </p>
                </>
              )}
            </div>
            <div className="success-msg" id="sucess_msg">
              {respMessage}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogContactForm;
