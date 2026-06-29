"use client";
import React, { useEffect } from "react";
import { Mail, Phone, Globe } from "lucide-react";
import ButtonV2 from "../Common/ButtonV2";
import Heading from "../HTMLComponents/Heading";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { scrollEffect } from "../lib/commonFunction";
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

  useEffect(() => {
    scrollEffect();
    window.addEventListener("scroll", scrollEffect);

    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);

  return (
    <>
      <section
        id="portfolio"
        className="container max-w-[1280px] main-section-padding-top mx-auto reveal"
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
        className="container max-w-[1280px] main-section-padding mx-auto reveal"
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
          className="container max-w-[1280px] main-section-padding mx-auto reveal"
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
              redirect="#cta"
              scrollingButton
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
                      icon: <Mail size={32} color="#fff" strokeWidth={1.5} />,
                      title: "Email Us",
                      value: "sales@brilworks.com",
                    },
                    {
                      icon: <Phone size={32} color="#fff" strokeWidth={1.5} />,
                      title: "Call Us",
                      value: "+91 9313644148",
                    },
                    {
                      icon: <Globe size={32} color="#fff" strokeWidth={1.5} />,
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
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ExploreFreeDesign;
