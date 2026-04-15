"use client";
import React, { useState } from "react";
import Heading from "../HTMLComponents/Heading";
import { usePathname } from "next/navigation";
import Loader from "../Homepage/Loader";

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
    setIsSubmitting(true);
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbx4V2ZTjKH5gChZL0uGzYfHz-kZSyVR9QBQZUbILrG9NFE2OYe977bE8IHV6HMDU28kDw/exec";

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

      if (response.ok) {
        setEmail("");
        setRespMessage("Thanks! We’re glad to have you with us.");
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
    <div className="blog-newsletter-cro">
      <div className="container max-w-[1280px] mx-auto sxl:p-10 md:p-7.5 p-5">
        <div className="w-full flex md:flex-row flex-col items-center justify-between gap-8">
          <div className="w-full">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex -space-x-2">
                <span className="w-7 h-7 rounded-full bg-[#1A5CCC] border-2 border-white/30 flex items-center justify-center text-[11px] font-bold text-white">
                  V
                </span>
                <span className="w-7 h-7 rounded-full bg-[#0d9488] border-2 border-white/30 flex items-center justify-center text-[11px] font-bold text-white">
                  A
                </span>
                <span className="w-7 h-7 rounded-full bg-[#4f46e5] border-2 border-white/30 flex items-center justify-center text-[11px] font-bold text-white">
                  R
                </span>
              </div>
              <p className="text-[13px] font-semibold text-white/85">
                Join 3,000+ tech leaders
              </p>
            </div>
            <Heading
              type="h2"
              className="md:!text-2xl text-xl mb-1.5 md:!leading-snug w-full !font-bold !text-white"
              text="Get Weekly Engineering Insights"
            />
            <p className="text-[15px] text-white/60 leading-relaxed">
              Curated takes on technology, architecture, and product strategy —
              straight to your inbox every Thursday.
            </p>
          </div>
          <div className="w-full max-w-sm">
            <form
              onSubmit={handleSubmit}
              className="flex rounded-md overflow-hidden w-full max-w-sm border border-white/15 bg-white/[0.08]"
            >
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="px-4 py-3 w-full text-[15px] text-white bg-transparent focus:outline-none placeholder:text-white/45"
              />
              <button
                type="submit"
                className="bg-white text-themeColor font-semibold px-6 py-3 text-sm hover:bg-[#e8f0fd] transition flex items-center gap-2 whitespace-nowrap"
              >
                {isSubmitting ? <Loader /> : ""}{" "}
                {isSubmitting ? "Sending..." : "Get Insights"}
              </button>
            </form>
            {respMessage ? (
              <p className="!ml-1 !mt-2 h-5 text-white/80 text-sm">
                {respMessage}
              </p>
            ) : (
              <p className="!ml-1 !mt-2 h-5 text-white/40 text-xs">
                No spam. Unsubscribe anytime. We respect your inbox.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeNewsLetterForm;
