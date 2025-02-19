import { useState } from "react";
import Loader from "../Homepage/Loader";
import { usePathname } from "next/navigation";
import Button from "../Common/Button";

const SolutionContactForm = () => {
  const pathname = usePathname();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [respMessage, setRespMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
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
        `${process.env.NEXT_PUBLIC_BASE_URL}api/techSolution`,
        {
          method: "POST",
          header: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...formData, page: pathname }),
        }
      );

      if (response.ok) {
        setFormData({ name: "", phone: "", email: "" });
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
      className="mx-auto !px-4 lg:px-0 container max-w-[1440px] xl:py-[6rem] md:py-[4rem] py-8"
      id="section10_service"
    >
      <div className="bg_grey rounded-[30px] bg-[#ededed] reveal">
        <div className="like_flex">
          <div className="like_basis basis-[50%]">
            <div className="like_text bold home_sec2_txt3 solutions">
              <h2 className="!w-full py-10">
                {pathname === "/industry/fintech-software-development/" ||
                pathname ===
                  "/industry/media-entertainment-software-development/" ||
                pathname ===
                  "/industry/fleet-management-software-development/" ||
                pathname === "/industry/healthcare-software-development/"
                  ? " TAKE THE FIRST STEP BY FILLING OUT THIS QUICK FORM."
                  : "  CONNECT WITH US TO GET A 48 HOURS RISK-FREE TRIAL"}
              </h2>
            </div>
          </div>
          <div className="like_basis_form basis-[50%]">
            <div className="contact_form">
              <div
                className="wpcf7 js"
                id="wpcf7-f695-p456-o2"
                lang="en-US"
                dir="ltr"
              >
                <form
                  className="wpcf7-form init"
                  id="solution-contact-form"
                  onSubmit={handleSubmit}
                >
                  <div className="form-group">
                    <p>
                      <label className="label_name"> Name*</label>
                      <br />
                      <span className="wpcf7-form-control-wrap">
                        <input
                          size="40"
                          className="form-control-txt"
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
                      <label className="label_name">Mobile*</label>
                      <br />
                      <span className="wpcf7-form-control-wrap">
                        <input
                          size="40"
                          className="form-control-txt"
                          type="number"
                          name="phone"
                          value={formData.phone}
                          required
                          onChange={handleChange}
                        />
                      </span>
                    </p>
                  </div>
                  <div className="form-group">
                    <p>
                      <label className="label_name"> Email *</label>
                      <br />
                      <span className="wpcf7-form-control-wrap">
                        <input
                          size="40"
                          className="form-control-txt"
                          type="email"
                          name="email"
                          value={formData.email}
                          required
                          onChange={handleChange}
                        />
                      </span>
                    </p>
                  </div>
                  <div className="success-msg h-4 mt-1" id="sucess_msg">
                    {respMessage}
                  </div>

                  <Button
                    type="submit"
                    innerClassName="flex items-center justify-center gap-1 !pl-5 !pr-6"
                    className={
                      isSubmitting ? "!text-colorBlack !mt-8" : "!mt-8"
                    }
                    icon={isSubmitting ? <Loader /> : "right-arrow"}
                    label={isSubmitting ? "Submitting" : "Submit"}
                    disabled={isSubmitting}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionContactForm;
