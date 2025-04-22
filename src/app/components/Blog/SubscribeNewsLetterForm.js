"use client";
import React, { useState } from "react";
import Heading from "../HTMLComponents/Heading";
import { usePathname } from "next/navigation";

const SubscribeNewsLetterForm = () => {
  const pathname = usePathname();
  const [email, setEmail] = useState("");
  const [respMessage, setRespMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const clearMessage = () => {
    setTimeout(() => {
      setRespMessage("");
    }, 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbzwrVwvf5cxoDdqtWtKdF64gv9-JaPUOl6MT11nWaDe9lfuj7Qu6EDwyJketobPXmhE/exec";

    const form = e.target;
    const formData = new FormData(form);
    formData.append("email", email);
    formData.append("route", pathname);

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        header: {
          "Content-Type": "application/json",
        },
        body: formData,
      });
      console.log("response", response);

      if (response.ok) {
        setEmail("");
        setRespMessage("Your response is submitted successfully.");
        clearMessage();
      } else {
        setRespMessage("Something went wrong!");
      }
      setIsSubmitting(false);
    } catch (error) {
      console.error("Error submitting response", error);
      setIsSubmitting(false);
      clearMessage();
    }
  };

  return (
    <div className="news-letter-bg">
      <div className="container max-w-[1280px] mx-auto main-section-padding">
        <div className="w-full flex md:flex-row flex-col items-center justify-between gap-5">
          <div className="w-full">
            <Heading
              type="h2"
              className={`sxl:!text-[52px] md:!text-[40px] !text-2xl mb-4 md:!leading-snug w-full font-bold`}
              text={"Subscribe to Our Newsletter"}
            />

            <div className="w-full flex justify-between sxl:flex-row flex-col md:!text-lg text-base md:gap-4 gap-2 font-medium">
              Get smart takes on technology, strategy, and product
              development—delivered to your inbox.
            </div>
          </div>
          <div className="w-full max-w-sm">
            <form
              onSubmit={handleSubmit}
              className="flex rounded-md overflow-hidden w-full max-w-sm border border-borderGray"
            >
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Enter email address"
                className="px-4 py-3 w-full text-base text-gray-900 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-colorBlack text-white font-semibold px-6 py-3 text-base hover:opacity-90 transition"
              >
                Subscribe
              </button>
            </form>
            {respMessage && <p className="!ml-1 !mt-2">{respMessage}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeNewsLetterForm;
