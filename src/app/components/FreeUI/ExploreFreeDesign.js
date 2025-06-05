"use client";
import React from "react";
import ButtonV2 from "../Common/ButtonV2";
import Heading from "../HTMLComponents/Heading";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import FreeUiContactForm from "./FreeUiContactForm";

const ExploreFreeDesign = () => {
  const templates = [
    {
      title: "EduMentor",
      category: "Educational / AI Tutor App",
      description:
        "Your AI-powered learning companion for personalized education and growth.",
      image: "/images/v2/free_ui_1.webp",
      link: "https://www.figma.com/proto/KylXJaBcjcicaHe7aE1XxF/EduMentor?page-id=0%3A1&node-id=1-220&viewport=305%2C215%2C0.19&t=oIQk1txbZ4OTllSN-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A220",
    },
    {
      title: "Shoplynx",
      category: "E-commerce / Shopping App",
      description:
        "A sleek, intuitive shopping experience powered by smart discovery and seamless checkout.",
      image: "/images/v2/free_ui_2.webp",
      link: "https://www.figma.com/proto/XmFrwohyMuTYYVPGMCGC1n/Shoplynx---Ecommerce?page-id=0%3A1&node-id=1-845&viewport=399%2C101%2C0.19&t=rwwxbSarzGRjUUeo-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A845",
    },
    {
      title: "BNPL Mobile App",
      category: "Fintech / Buy Now Pay Later",
      description:
        "Shop now, pay later—your flexible finance partner for every purchase.",
      image: "/images/v2/free_ui_3.webp",
      link: "https://www.figma.com/proto/eEYqwCvskeu8QFUgrONQTh/Loan-Mobile-App?page-id=0%3A1&node-id=1-245&viewport=209%2C168%2C0.25&t=DBVjmX5VJg6R2AKe-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A245",
    },
    {
      title: "Novawallet",
      category: "Finance / Crypto Wallet",
      description:
        "Secure, sleek, and future-ready—your smart gateway to crypto and digital finance.",
      image: "/images/v2/free_ui_4.webp",
      link: "https://www.figma.com/proto/n0uZGkjqwHvK1CdpGIxW0r/Novawallet-Mobile-App?page-id=0%3A1&node-id=1-471&viewport=292%2C192%2C0.18&t=2Y630cqgonOxU2X3-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A471",
    },
    {
      title: "NutriTrackr",
      category: "Health & Fitness / Calorie Tracker",
      description:
        "Track your calories, reach your goals—nutrition made effortless.",
      image: "/images/v2/free_ui_5.webp",
      link: "https://www.figma.com/proto/v1Pb54GPr5OA07O6cXUQrg/NutriTrackr--Mobile-App?page-id=0%3A1&node-id=1-61&viewport=268%2C169%2C0.26&t=3fIpb1zW7rDHEsTw-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A61",
    },
    {
      title: "Event Management App",
      category: "Events / Lifestyle",
      description: "Plan, discover, and experience events with ease and style.",
      image: "/images/v2/free_ui_6.webp",
      link: "https://www.figma.com/proto/a6bNy5RqybAi7ecw0DbJ0e/Event-Management-Mobile-App?page-id=0%3A1&node-id=1-2&viewport=287%2C208%2C0.24&t=pNVg73ezv2O0Nvex-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2",
    },
    {
      title: "CreAItive",
      category: "AI Tools / Social Media Assistant",
      description:
        "Create scroll-stopping social media posts and chat with your AI creative partner.",
      image: "/images/v2/free_ui_7.webp",
      link: "https://www.figma.com/proto/6smftAOB4XxlfvvzY9SFe4/CreAItive?page-id=0%3A1&node-id=[…]&t=A9t4VnfWY7a0AJoe-1&scaling=scale-down&content-scaling=fixed",
    },
    {
      title: "BookRide",
      category: "Transportation / Ride-Hailing App",
      description:
        "Effortless taxi booking with real-time tracking and secure payments.",
      image: "/images/v2/free_ui_8.webp",
      link: "https://www.figma.com/proto/gHOHR5UV39J9PLKkX8WfPi/Book-Ride-Mobile-App?page-id=0%3A1&node-id=1-4110&viewport=152%2C233%2C0.28&t=UJ3EyvyarnacPYwT-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A4110",
    },
    {
      title: "Vibe (Dating App)",
      category: "Dating / Lifestyle App",
      description:
        "Meaningful matches through emotional profiles, intention-first discovery, and gamified chats.",
      image: "/images/v2/free_ui_9.webp",
      link: "https://www.figma.com/proto/TyA9wGOuDKbEHGauALFv7t/Vibe?page-id=0%3A1&node-id=1-285&viewport=99%2C-106%2C0.36&t=VZuyDD1GkFKNGwVW-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A285",
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
      <div className="contact-us-banner">
        <div className="banner-layer">
          <section
            className="max-w-[1280px] mx-auto main-section-padding text-colorWhite"
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
                    Fill out the form and we'll get back to you within 24 hours
                    to discuss your project and how we can create 5 free custom
                    UI/UX screens for your needs.
                  </p>
                </div>

                {/* Contact Methods */}
                <div className="space-y-4 lg:mb-8 mb-5">
                  {[
                    {
                      icon: (
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22.667 27.3337H9.33366C5.33366 27.3337 2.66699 25.3337 2.66699 20.667V11.3337C2.66699 6.66699 5.33366 4.66699 9.33366 4.66699H22.667C26.667 4.66699 29.3337 6.66699 29.3337 11.3337V20.667C29.3337 25.3337 26.667 27.3337 22.667 27.3337Z"
                            stroke="#fff"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M22.6663 12L18.493 15.3333C17.1197 16.4267 14.8663 16.4267 13.493 15.3333L9.33301 12"
                            stroke="#fff"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      ),
                      title: "Email Us",
                      value: "sales@brilworks.com",
                    },
                    {
                      icon: (
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M29.2937 24.4403C29.2937 24.9203 29.187 25.4137 28.9603 25.8937C28.7337 26.3737 28.4403 26.827 28.0537 27.2537C27.4003 27.9737 26.6803 28.4937 25.867 28.827C25.067 29.1603 24.2003 29.3337 23.267 29.3337C21.907 29.3337 20.4537 29.0137 18.9203 28.3603C17.387 27.707 15.8537 26.827 14.3337 25.7203C12.8003 24.6003 11.347 23.3603 9.96033 21.987C8.58699 20.6003 7.34699 19.147 6.24033 17.627C5.14699 16.107 4.26699 14.587 3.62699 13.0803C2.98699 11.5603 2.66699 10.107 2.66699 8.72033C2.66699 7.81366 2.82699 6.94699 3.14699 6.14699C3.46699 5.33366 3.97366 4.58699 4.68033 3.92033C5.53366 3.08033 6.46699 2.66699 7.45366 2.66699C7.82699 2.66699 8.20033 2.74699 8.53366 2.90699C8.88033 3.06699 9.18699 3.30699 9.42699 3.65366L12.5203 8.01366C12.7603 8.34699 12.9337 8.65366 13.0537 8.94699C13.1737 9.22699 13.2403 9.50699 13.2403 9.76033C13.2403 10.0803 13.147 10.4003 12.9603 10.707C12.787 11.0137 12.5337 11.3337 12.2137 11.6537L11.2003 12.707C11.0537 12.8537 10.987 13.027 10.987 13.2403C10.987 13.347 11.0003 13.4403 11.027 13.547C11.067 13.6537 11.107 13.7337 11.1337 13.8137C11.3737 14.2537 11.787 14.827 12.3737 15.5203C12.9737 16.2137 13.6137 16.9203 14.307 17.627C15.027 18.3337 15.7203 18.987 16.427 19.587C17.1203 20.1737 17.6937 20.5737 18.147 20.8137C18.2137 20.8403 18.2937 20.8803 18.387 20.9203C18.4937 20.9603 18.6003 20.9737 18.7203 20.9737C18.947 20.9737 19.1203 20.8937 19.267 20.747L20.2803 19.747C20.6137 19.4137 20.9337 19.1603 21.2403 19.0003C21.547 18.8137 21.8537 18.7203 22.187 18.7203C22.4403 18.7203 22.707 18.7737 23.0003 18.8937C23.2937 19.0137 23.6003 19.187 23.9337 19.4137L28.347 22.547C28.6937 22.787 28.9337 23.067 29.0803 23.4003C29.2137 23.7337 29.2937 24.067 29.2937 24.4403Z"
                            stroke="#fff"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                          />
                        </svg>
                      ),
                      title: "Call Us",
                      value: "+91 9313644148",
                    },
                    {
                      icon: (
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.0003 29.3337C23.3641 29.3337 29.3337 23.3641 29.3337 16.0003C29.3337 8.63653 23.3641 2.66699 16.0003 2.66699C8.63653 2.66699 2.66699 8.63653 2.66699 16.0003C2.66699 23.3641 8.63653 29.3337 16.0003 29.3337Z"
                            stroke="#fff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M10.6665 4H11.9998C9.3998 11.7867 9.3998 20.2133 11.9998 28H10.6665"
                            stroke="#fff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M20 4C22.6 11.7867 22.6 20.2133 20 28"
                            stroke="#fff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M4 21.3333V20C11.7867 22.6 20.2133 22.6 28 20V21.3333"
                            stroke="#fff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M4 11.9998C11.7867 9.3998 20.2133 9.3998 28 11.9998"
                            stroke="#fff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
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
                        <h4 className="font-semibold">{method.title}</h4>
                        <p className="text-sm">{method.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* What Happens Next */}
                <div className="bg-[#081120] border border-[#2D3540] rounded-lg p-6">
                  <h4 className="font-semibold mb-3">What Happens Next?</h4>
                  <ol className="list-decimal list-inside text-sm space-y-1">
                    <li>We'll review your request within 24 hours</li>
                    <li>
                      Schedule a quick discovery call to understand your needs
                    </li>
                    <li>You'll receive your 5 custom screens within 7 days</li>
                  </ol>
                </div>
              </div>

              {/* Right Section: Contact Form */}
              <div
                className="bg-[#081120] border border-[#2D3540] rounded-xl shadow-lg p-8"
                id="cta"
              >
                <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
                <FreeUiContactForm />
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
        </div>
      </div>
    </>
  );
};

export default ExploreFreeDesign;
