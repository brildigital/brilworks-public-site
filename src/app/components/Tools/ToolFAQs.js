"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Heading from "../HTMLComponents/Heading";
import Link from "next/link";
import Cal from "@calcom/embed-react";

const faqData = [
  {
    question: "How accurate are the cost estimates?",
    answer:
      "Our calculator provides estimates based on your selected platform, project complexity, features, and design requirements. While it provides a close estimate, final pricing may vary depending on specific details discussed during consultation.",
  },
  {
    question: "What factors influence the cost calculation?",
    answer:
      "Multiple factors affect the estimate including: project complexity, platform requirements (web, mobile, desktop), project features, project timeline, required integrations, security requirements, and post-launch support needs. Our algorithm weighs these factors based on industry benchmarks.",
  },
  {
    question: "Can I use this for both web and mobile applications?",
    answer:
      "Yes! Our calculator supports various project types including web applications, mobile apps (iOS/Android), desktop software, APIs, and complex enterprise systems. Each project type has specific considerations that are factored into the cost calculation.",
  },
  {
    question: "Is my project information secure?",
    answer:
      "Absolutely. We don't store any of your project details on our servers. All calculations happen locally in your browser, and no personal or project information is transmitted or saved. Your data privacy and security are our top priorities.",
  },
  {
    question: "How do different geographic locations affect costs?",
    answer:
      "Geographic location significantly impacts development costs. Our calculator includes current market rates for different regions including North America, Europe, Asia, and other markets. You can compare costs across different locations to make informed outsourcing decisions.",
  },
  {
    question: "How often is the pricing data updated?",
    answer:
      "We update our pricing database quarterly based on industry surveys, market research, and real project data from development agencies worldwide. This ensures our estimates reflect current market conditions and hiring rates.",
  },
  {
    question: "What if my project has unique requirements?",
    answer:
      "Our calculator handles most common project scenarios, but for highly specialized or unique projects, the estimates should be used as a starting point. We recommend consulting with development experts for projects with very specific technical requirements or regulatory compliance needs.",
  },
];

const ToolFAQs = () => {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (index) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="faq">
      <div className="max-w-6xl mx-auto main-section-padding">
        <div className="text-center space-y-4 mb-8">
          <Heading
            type="h2"
            className="lg:!text-[34px] md:!text-3xl !text-2xl !font-bold mb-4"
            text="Frequently Asked Questions"
          />
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about our software development cost
            calculator
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden hover:border-themeColor transition-colors duration-200"
            >
              <button
                className="w-full px-8 py-6 text-left hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleItem(index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openItems.includes(index) ? (
                      <Minus className="w-5 h-5 text-themeColor" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </div>
              </button>

              {openItems.includes(index) && (
                <div className="px-8 pb-6">
                  <div className="border-t border-gray-200 pt-6">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-blue-50 rounded-2xl pt-8 px-4 md:pb-0 pb-4">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Still have questions?
            </h3>
            <p className="text-gray-600 !mb-6">
              Can't find the answer you're looking for? Please get in touch with
              our team.
            </p>
            <div className="w-full">
              <Cal
                calLink="vikas-singh-bril/free-consultation"
                config={{ theme: "light" }}
              />
            </div>
            {/* <Link
              href="/contact-us/"
              className="bg-themeColor hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Contact Support
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolFAQs;
