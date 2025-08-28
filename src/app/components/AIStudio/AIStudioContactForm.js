"use client";
import React from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const AIStudioContactForm = () => {
  return (
    <>
      <section className="bg-sectionBG py-16 px-6 flex flex-col md:flex-row justify-center items-center gap-12">
        <div className="container max-w-[1280px] main-section-padding-bottom mx-auto flex gap-8">
          {/* Left Side - Contact Information */}

          <div className="bg-[#111827] rounded-2xl p-8 w-full md:w-1/2 text-white shadow-xl">
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-sky-400">Go</span> ahead –{" "}
              <span className="italic font-light">Ask us anything</span>
            </h2>

            <div className="space-y-4">
              <div className="flex items-center gap-3 border border-sky-700/40 p-3 rounded-lg">
                <Phone className="text-sky-400" />
                <span>+91 9313644148</span>
              </div>

              <div className="flex items-center gap-3 border border-sky-700/40 p-3 rounded-lg">
                <Mail className="text-sky-400" />
                <span>sales@brilworks.com</span>
              </div>

              <div className="flex items-center gap-3 border border-sky-700/40 p-3 rounded-lg">
                <MapPin className="text-sky-400" />
                <span>Ahmedabad, Gujarat 380060, India</span>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-[#111827] rounded-2xl p-8 w-full md:w-1/2 text-white shadow-xl">
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 rounded-lg bg-black/40 border border-sky-700/40 text-white focus:outline-none focus:border-sky-400"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 rounded-lg bg-black/40 border border-sky-700/40 text-white focus:outline-none focus:border-sky-400"
                />
              </div>

              <textarea
                placeholder="Write message here..."
                rows={4}
                className="w-full p-3 rounded-lg bg-black/40 border border-sky-700/40 text-white focus:outline-none focus:border-sky-400"
              ></textarea>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 text-white font-semibold hover:opacity-90 transition"
              >
                Submit
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default AIStudioContactForm;
