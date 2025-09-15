"use client";
import { useState, useRef, useEffect } from "react";
import { Calendar, Clock, Video, Gift, Shield, Sparkles } from "lucide-react";
import { usePathname } from "next/navigation";
import { ReCAPTCHA } from "react-google-recaptcha";
import Link from "next/link";
import Cal from "@calcom/embed-react";

export default function LeadFormSection() {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const clearMessage = () => {
    setShowPrice(true);
    setTimeout(() => {
      setRespMessage("");
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const token = await recaptchaRef.current.executeAsync();

    try {
      const downloadURL = formatSrcUrl(downloadFileUrl);
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
        setFormData({
          name: "",
          email: "",
          message: "",
        });
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
    <section
      id="signup-form"
      className="max-w-[1280px] py-8 md:py-12 lg:py-16 mx-auto relative"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-themering-[#00b7ff]/8 via-accent/5 to-transparent"></div>
      <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse opacity-40"></div>
      <div
        className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-br from-blue-400/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse opacity-40"
        style={{ animationDelay: "1.5s" }}
      ></div>
      <div className="w-full mx-auto px-6 relative">
        <div className="text-center mb-12 scroll-reveal">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            data-testid="text-form-headline"
            id="form-section"
          >
            Turn My Idea Into <span className="gradient-text">Mockups</span>
          </h2>
          <p
            className="text-lg md:text-xl text-[#94a3b8] max-w-2xl mx-auto"
            data-testid="text-form-description"
          >
            Tell me about your idea, and I'll turn it into something you can
            see, touch, and share. Zero cost. Zero catch.
          </p>
        </div>
        <div className="flex lg:flex-row flex-col gap-4 items-stretch">
          {/* <div className="glass-effect rounded-2xl md:py-6 md:px-4 p-4 scroll-reveal h-full lg:w-[32%] w-full flex flex-col">
            <p className="text-lg">
              You're just a step away from creating exceptional business ideas.
              This case study reveals how Brilworks assists successful companies
              in extending their tech teams.
            </p>
            <span className="font-semibold text-lg my-4">
              Enter the details to proceed.
            </span>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#94a3b8] mb-2"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  placeholder="Enter your full name"
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#14161a] border border-border rounded-lg focus:ring-2 focus:outline-none focus:ring-[#00b7ff] focus:border-transparent transition-all duration-300"
                  data-testid="input-name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#94a3b8] mb-2"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#14161a] border border-border rounded-lg focus:ring-2 focus:outline-none focus:ring-[#00b7ff] focus:border-transparent transition-all duration-300"
                  data-testid="input-email"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#94a3b8] mb-2"
                >
                  Your App Idea
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Describe your app idea in a few sentences. What problem does it solve? Who's it for?"
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#14161a] border border-border rounded-lg focus:ring-2 focus:outline-none focus:ring-[#00b7ff] focus:border-transparent transition-all duration-300 resize-none"
                  data-testid="textarea-app-idea"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-2.5 bg-[#00b7ff] text-[#0d0f11] rounded-lg hover:bg-[#00b7ffE6] transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-2"
                data-testid="button-submit-form"
              >
                {isSubmitting ? (
                  <>Submitting...</>
                ) : (
                  <>
                    Turn My Idea Into Mockups
                    <Sparkles className="w-5 h-5" />
                  </>
                )}
              </button>
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                size="invisible"
                ref={recaptchaRef}
              />

              <p className="text-center text-sm text-[#94a3b8] flex items-center justify-center gap-2 !mt-4">
                <Shield className="w-4 h-4" />
                No spam, no pitching. Just your idea made visual.
              </p>
            </form>
          </div> */}

          {/* Calendly Embed */}
          <div
            className="scroll-reveal h-full lg:w-10/12 mx-auto w-full"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="glass-effect rounded-2xl md:pt-6 md:px-4 p-4 h-full flex flex-col">
              <div className="text-center mb-2">
                <h3 className="text-2xl font-bold mb-1">
                  Or Book a <span className="text-accent">15-Min</span> Idea
                  Chat (Free)
                </h3>
                <p className="text-[#94a3b8]">
                  Prefer to talk? Let's discuss your idea live and I'll give you
                  instant feedback.
                </p>
              </div>
              <div className="w-full">
                <Cal
                  calLink="vikas-singh-bril/free-consultation"
                  config={{ theme: "light" }}
                />
              </div>

              {/* Calendly placeholder */}
              {/* <div className="bg-[#14161a] rounded-lg md:p-8 p-6 border border-border flex-1 flex items-center justify-center">
                <div className="text-center">
                  <div className="md:w-16 w-12 md:h-16 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Calendar className="text-accent text-2xl" />
                  </div>
                  <p className="text-[#94a3b8] !mb-4 text-sm md:text-base">
                    Please click the button below to book your slot.
                  </p>
                  <Link
                    href="https://cal.com/vikas-singh-bril/free-consultation"
                    target="_blank"
                    className="px-6 py-2 bg-accent text-[#0d0f11] rounded-lg hover:bg-accent/90 transition-all duration-300 font-medium"
                  >
                    Book Your Slot
                  </Link>
                </div>
              </div> */}

              <div className="text-center">
                <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-[#94a3b8]">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    15 minutes
                  </span>
                  <span className="flex items-center gap-1">
                    <Video className="w-4 h-4" />
                    Video call
                  </span>
                  <span className="flex items-center gap-1">
                    <Gift className="w-4 h-4" />
                    100% free
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
