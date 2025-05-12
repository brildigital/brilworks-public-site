"use client";
import React from "react";
import ButtonV2 from "../Common/ButtonV2";
import Heading from "../HTMLComponents/Heading";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ContactFormV2 from "../Homepage/ContactFormV2";

const ExploreFreeDesign = () => {
  const templates = [
    {
      title: "Fintech Dashboard UI Kit",
      category: "DASHBOARD",
      description: "Complete dashboard design system for fintech applications",
      image:
        "https://images.pexels.com/photos/6804581/pexels-photo-6804581.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "https://dribbble.com/Brilworks",
    },
    {
      title: "Health & Fitness App UI",
      category: "MOBILE APP",
      description: "Modern fitness tracking app interface design",
      image:
        "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "https://dribbble.com/Brilworks",
    },
    {
      title: "E-commerce Dashboard",
      category: "DASHBOARD",
      description: "Complete e-commerce management interface",
      image:
        "https://images.pexels.com/photos/5935794/pexels-photo-5935794.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "https://dribbble.com/Brilworks",
    },
    {
      title: "Task Management System",
      category: "WEB APP",
      description: "Productivity tool interface design",
      image:
        "https://images.pexels.com/photos/8867434/pexels-photo-8867434.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "https://dribbble.com/Brilworks",
    },
    {
      title: "Social Media Dashboard",
      category: "DASHBOARD",
      description: "Social media management interface",
      image:
        "https://images.pexels.com/photos/6804581/pexels-photo-6804581.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "https://dribbble.com/Brilworks",
    },
    {
      title: "Food Delivery App",
      category: "MOBILE APP",
      description: "Food ordering app interface design",
      image:
        "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "https://dribbble.com/Brilworks",
    },
    {
      title: "Real Estate Platform",
      category: "WEB APP",
      description: "Property listing and management interface",
      image:
        "https://images.pexels.com/photos/5935794/pexels-photo-5935794.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "https://dribbble.com/Brilworks",
    },
    {
      title: "Education Platform",
      category: "WEB APP",
      description: "Learning management system interface",
      image:
        "https://images.pexels.com/photos/8867434/pexels-photo-8867434.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "https://dribbble.com/Brilworks",
    },
    {
      title: "Travel Booking App",
      category: "MOBILE APP",
      description: "Travel and accommodation booking interface",
      image:
        "https://images.pexels.com/photos/6804581/pexels-photo-6804581.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "https://dribbble.com/Brilworks",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Founder, TechLaunch",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 5,
      quote:
        "Brilworks' free MVP design services saved us time and money! Their team delivered stunning UI screens that impressed our investors.",
    },
    {
      name: "David Chen",
      role: "CEO, HealthApp",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 5,
      quote:
        "As a founder struggling with UI design, their free design support for early-stage startups was exactly what we needed to refine our product.",
    },
    {
      name: "Maya Patel",
      role: "CTO, FinanceFlow",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 5,
      quote:
        "The free UX design offer from Brilworks helped us transform our complex financial app into something users love. Highly recommended!",
    },
  ];

  return (
    <>
      <section
        id="portfolio"
        className="container max-w-[1280px] main-section-padding-top mx-auto"
      >
        <div className="text-center lg:mb-7.5 mb-5">
          <Heading
            type="h2"
            className="lg:!text-[34px] md:!text-3xl !text-2xl"
            text="Explore Free Design Templates"
          />

          <p className="pt-2 mx-auto">
            Browse our collection of premium UI/UX templates. Click any template
            to view and download.
          </p>
        </div>

        <div className="grid md:gap-8 gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {templates.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow group hover:shadow-lg transition duration-300 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <span className="view-template text-white text-sm font-semibold border border-white px-4 py-2 rounded-md">
                    View Template
                  </span>
                </div>
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold text-themeColor bg-blue-100 px-3 py-1 rounded-full">
                  {item.category}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section
        id="testimonials"
        className="container max-w-[1280px] main-section-padding mx-auto"
      >
        <div className="text-center lg:mb-10 md:mb-7.5 mb-5">
          <Heading
            type="h2"
            className="lg:!text-[34px] md:!text-3xl !text-2xl"
            text="What Founders Say About Our Free UX Design Offer"
          />

          <p className="pt-2 mx-auto">
            Hear from startup founders who have benefited from our free design
            services and brought their ideas to life.
          </p>
        </div>

        <div className="grid md:gap-8 gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-blue-50 rounded-xl p-6 shadow-sm flex flex-col justify-between"
            >
              <span className="star_clutch !text-xl !mb-4">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FontAwesomeIcon
                    key={index}
                    icon={faStar}
                    size="sm"
                    className="text-[#FF9345] mr-1"
                  />
                ))}
              </span>
              <p className="text-gray-800 italic md:!mb-6 !mb-4">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-gray-900 font-semibold">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="bg-themeLight">
        <section
          className="container max-w-[1280px] main-section-padding mx-auto"
          id="process"
        >
          <div className="text-center lg:mb-10 md:mb-7.5 mb-5">
            <Heading
              type="h2"
              className="lg:!text-[34px] md:!text-3xl !text-2xl"
              text="How to Claim Your Free Screens"
            />

            <p className="pt-2 mx-auto">
              Getting your 5 free UI/UX screens is simple. Follow these steps to
              start your design journey with Brilworks.
            </p>
          </div>

          <div className="grid md:gap-10 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:mb-16 md:mb-12 mb-8">
            {[
              {
                number: "01",
                title: "Submit Request",
                description:
                  "Fill out our simple contact form with details about your project and design needs.",
              },
              {
                number: "02",
                title: "Discovery Call",
                description:
                  "We'll schedule a brief call to understand your requirements and project goals better.",
              },
              {
                number: "03",
                title: "Design Creation",
                description:
                  "Our team will create 5 custom UI/UX screens tailored to your specific needs.",
              },
              {
                number: "04",
                title: "Delivery & Review",
                description:
                  "Receive your designs within 7 days and provide feedback if needed.",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-themeColor text-white flex items-center justify-center text-lg font-bold shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <Heading
              type="h3"
              className="text-colorBlack md:!text-xl !text-lg font-semibold"
              text="No Commitment Required"
            />
            <p className="md:!text-base !text-sm !py-4">
              Your 5 free UI/UX screens come with no strings attached. If you
              love our work, we'd be happy to discuss further collaboration, but
              there's absolutely no obligation.
            </p>

            <ButtonV2
              size="large"
              className="w-fit hover:text-themeColor mx-auto"
              label="Claim Now"
            />
          </div>
        </section>
      </div>

      <section
        className="max-w-[1280px] mx-auto main-section-padding"
        id="contact"
      >
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left Section: Contact Info */}
          <div>
            <div className="lg:mb-10 md:mb-7.5 mb-5">
              <Heading
                type="h2"
                className="lg:!text-[34px] md:!text-3xl !text-2xl"
                text="Ready to Claim Your Free UI/UX Screens?"
              />

              <p className="pt-2 mx-auto">
                Fill out the form and we'll get back to you within 24 hours to
                discuss your project and how we can create 5 free custom UI/UX
                screens for your needs.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4 lg:mb-8 mb-5">
              {[
                {
                  icon: (
                    <svg
                      className="w-8 h-8 text-themeColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <rect width="24" height="24" rx="12" fill="#f2f9fe" />
                      <path
                        d="M17 8L12 13L7 8M7 8H17V16H7V8Z"
                        stroke="#017eeb"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ),
                  title: "Email Us",
                  value: "sales@brilworks.com",
                },
                {
                  icon: (
                    <svg
                      className="w-8 h-8 text-themeColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <rect width="24" height="24" rx="12" fill="#f2f9fe" />
                      <path
                        d="M14.5 6.5L17.5 9.5M15 14C13.8954 14 13 13.1046 13 12C13 10.8954 13.8954 10 15 10C16.1046 10 17 10.8954 17 12C17 13.1046 16.1046 14 15 14ZM15 14V17.5M9 6.5V10M9 10C7.89543 10 7 10.8954 7 12C7 13.1046 7.89543 14 9 14C10.1046 14 11 13.1046 11 12C11 10.8954 10.1046 10 9 10ZM9 14V17.5"
                        stroke="#017eeb"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ),
                  title: "Call Us",
                  value: "+91 9313644148",
                },
                {
                  icon: (
                    <svg
                      className="w-8 h-8 text-themeColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <rect width="24" height="24" rx="12" fill="#f2f9fe" />
                      <path
                        d="M12 12.75C13.6569 12.75 15 11.4069 15 9.75C15 8.09315 13.6569 6.75 12 6.75C10.3431 6.75 9 8.09315 9 9.75C9 11.4069 10.3431 12.75 12 12.75Z"
                        stroke="#017eeb"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 12.75V17.25"
                        stroke="#017eeb"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ),
                  title: "Visit Us",
                  value:
                    "503, Fortune Business Hub, Science City Road, Sola, Ahmedabad, Gujarat, India Pincode- 380060",
                },
              ].map((method, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="shrink-0">{method.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {method.title}
                    </h4>
                    <p className="text-sm text-gray-600">{method.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* What Happens Next */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="font-semibold mb-3">What Happens Next?</h4>
              <ol className="list-decimal list-inside text-sm text-gray-700 space-y-1">
                <li>We'll review your request within 24 hours</li>
                <li>
                  Schedule a quick discovery call to understand your needs
                </li>
                <li>You'll receive your 5 custom screens within 7 days</li>
              </ol>
            </div>
          </div>

          {/* Right Section: Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8" id="cta">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Contact Us
            </h3>
            <ContactFormV2 hideEmail={true} showProjectType={true} />
            {/* <form className="space-y-4" id="contactForm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder="Your Company"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Project Type
                </label>
                <select
                  name="projectType"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm"
                >
                  <option value="website">Website</option>
                  <option value="mobileApp">Mobile App</option>
                  <option value="dashboard">Dashboard</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Project Details
                </label>
                <textarea
                  name="projectDetails"
                  rows="5"
                  placeholder="Tell us about your project and what screens you'd like us to design..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm"
                ></textarea>
              </div>

              <ButtonV2
                type="submit"
                size="large"
                className="w-fit hover:text-themeColor mx-auto"
                label="Get Free UI"
              />
            </form> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default ExploreFreeDesign;
