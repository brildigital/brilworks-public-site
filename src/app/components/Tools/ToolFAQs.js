"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Heading from "../HTMLComponents/Heading";
import Cal from "@calcom/embed-react";
import { usePathname } from "next/navigation";

const softwareDevelopmentCostCalculatorFaqData = {
  description:
    "Everything you need to know about our software development cost calculator",
  queAns: [
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
  ],
};

const appLikeUberCostCalculatorFaqData = {
  description:
    "Get answers to common questions about ride-hailing app development",
  queAns: [
    {
      question: "How accurate is this cost estimate?",
      answer:
        "This estimate provides a baseline cost range based on industry standards. Actual costs may vary depending on specific requirements, development team location, timeline, and additional customizations.",
    },
    {
      question: "What factors affect the cost of developing an Uber-like app?",
      answer:
        "Key factors include app complexity, number of platforms, required features, UI/UX design sophistication, backend infrastructure, third-party integrations, and geographic scope.",
    },
    {
      question: "How long does it take to develop an Uber-like app?",
      answer: (
        <>
          Development timeline typically ranges from 6-18 months depending on
          complexity.
          <ul className="list-disc list-inside mt-1">
            <li>Basic version: 6-9 months</li>
            <li>Standard: 9-12 months</li>
            <li>Premium: 12-18 months</li>
          </ul>
        </>
      ),
    },
    {
      question: "Do I need separate apps for riders and drivers?",
      answer:
        "Yes, typically you'll need separate apps for riders and drivers, plus an admin panel for management. Some solutions offer unified apps with role-based interfaces.",
    },
    {
      question: "What ongoing costs should I consider?",
      answer:
        "Consider server hosting, third-party API costs (maps, payments), maintenance, updates, customer support, marketing, and compliance costs.",
    },
  ],
};
const roiCalculatorFaqData = {
  description:
    "Get answers to common questions about app development costs and ROI calculations",
  queAns: [
    {
      question: "How accurate is this ROI calculator?",
      answer:
        "This calculator provides estimates based on industry standards and typical development costs. Actual costs may vary based on specific requirements, team location, and market conditions.",
    },
    {
      question: "What factors affect app development costs the most?",
      answer:
        "The main factors include app complexity, number of features, development timeline, team size and location, platform choice (native vs hybrid), and post-launch maintenance requirements.",
    },
    {
      question: "How is the payback period calculated?",
      answer:
        "The payback period is calculated by dividing the total investment cost by the annual revenue generated by the app. It represents how long it takes to recover your initial investment.",
    },
    {
      question: "What's included in maintenance costs?",
      answer:
        "Maintenance costs typically include bug fixes, security updates, OS compatibility updates, server costs, and minor feature enhancements. We estimate this at 20% of development cost annually.",
    },
    {
      question: "Can I reduce development costs?",
      answer:
        "Yes, costs can be reduced by starting with an MVP, choosing hybrid development, reducing initial features, or working with offshore development teams. However, balance cost savings with quality requirements.",
    },
  ],
};

const ToolFAQs = () => {
  const pathname = usePathname();
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (index) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const showDataBasedOnPathname = {
    "/tools/project-estimate/": softwareDevelopmentCostCalculatorFaqData,
    "/tools/roi-calculator/": roiCalculatorFaqData,
    "/tools/mobility-app-development-calculator/":
      appLikeUberCostCalculatorFaqData,
  };

  const toolsFAQData = showDataBasedOnPathname[pathname] || {};

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
            {toolsFAQData?.description}
          </p>
        </div>

        <div className="space-y-4">
          {toolsFAQData?.queAns?.map((faq, index) => (
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
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg">
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
