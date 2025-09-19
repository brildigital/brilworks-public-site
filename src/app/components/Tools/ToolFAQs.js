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
const SaasDevCostCalculatorFaqData = {
  description:
    "Get answers to common questions about app development costs and ROI calculations",
  queAns: [
    {
      question: "How accurate is the SaaS development cost estimate?",
      answer:
        "Our calculator provides a baseline estimate based on industry standards and typical project requirements. The actual cost may vary depending on specific requirements, team location, and additional customizations.",
    },
    {
      question: "What factors influence SaaS development costs the most?",
      answer:
        "The main cost drivers include project complexity, number of features, design requirements, platform choice, timeline, and the development team's location and expertise level.",
    },
    {
      question: "Is ongoing maintenance included in the estimate?",
      answer:
        "The estimate covers initial development costs. Ongoing maintenance typically costs 15-20% of the initial development cost annually for updates, bug fixes, and server costs.",
    },
    {
      question: "How long does SaaS development typically take?",
      answer:
        "Simple SaaS applications take 3-6 months, medium complexity projects take 6-12 months, while complex enterprise solutions can take 12-24 months or more.",
    },
    {
      question: "Can I reduce development costs?",
      answer:
        "Yes, you can reduce costs by starting with an MVP (Minimum Viable Product), using pre-built components, choosing standard designs, and having flexible timelines.",
    },
  ],
};
const mvpDevCostCalculatorFaqData = {
  description:
    "Get answers to common questions about MVP development costs and our calculator",
  queAns: [
    {
      question: "How accurate are the cost estimates?",
      answer:
        "Our calculator provides estimates with 90-95% accuracy based on industry standards and real project data. However, final costs may vary depending on specific requirements, changes during development, and market rates in your region.",
    },
    {
      question: "What's included in the MVP development cost?",
      answer:
        "The cost includes planning and analysis, UI/UX design, development, testing, deployment, and basic documentation. It covers a functional MVP with core features but excludes ongoing maintenance, marketing, and advanced integrations.",
    },
    {
      question: "How does the keyword-based pricing work?",
      answer:
        "Our algorithm analyzes your project description for specific keywords like 'AI', 'payment', 'blockchain', etc., and adjusts the cost based on the complexity these features typically add to development projects.",
    },
    {
      question: "Can I get a more detailed breakdown?",
      answer:
        "Yes! The calculator provides a detailed breakdown including development phases, team composition, timeline, and cost distribution across different aspects of your MVP project.",
    },
    {
      question: "What if my project requirements change?",
      answer:
        "You can easily update your project details in the calculator to get a revised estimate. We recommend using the calculator multiple times during your planning phase to explore different scenarios.",
    },
    {
      question: "How long does MVP development typically take?",
      answer:
        "Most MVPs take 6-16 weeks depending on complexity. Simple MVPs can be completed in 6-8 weeks, medium complexity in 8-12 weeks, and complex MVPs may take 12-16 weeks or more.",
    },
    {
      question: "What's the difference between web and mobile app costs?",
      answer:
        "Mobile apps typically cost 30% more than web apps due to platform-specific development, app store guidelines, and additional testing requirements. Cross-platform solutions can help reduce costs.",
    },
    {
      question: "Do you provide actual development services?",
      answer:
        "This is a cost estimation tool. For actual development services, we can connect you with our network of vetted development partners who can bring your MVP to life based on these estimates.",
    },
  ],
};
const appMaintenanceCostEstimatorFaqData = {
  description:
    "Get answers to common questions about app maintenance costs and planning",
  queAns: [
    {
      question: "What's included in app maintenance costs?",
      answer:
        "App maintenance costs typically include bug fixes, security updates, OS compatibility updates, performance optimization, server maintenance, monitoring, user support, and regular feature updates. Our calculator provides a comprehensive breakdown of all these components.",
    },
    {
      question: "How much should I budget for app maintenance annually?",
      answer:
        "Generally, you should budget 15-20% of your initial development cost annually for maintenance. However, this varies based on app complexity, user base size, update frequency, and feature requirements. Our calculator provides personalized estimates based on your specific needs.",
    },
    {
      question: "What factors affect app maintenance costs the most?",
      answer:
        "The main factors include app complexity, number of platforms (iOS, Android, Web), user base size, update frequency, third-party integrations, security requirements, and the level of support needed. Complex apps with large user bases typically require higher maintenance budgets.",
    },
    {
      question: "How often should I update my app?",
      answer:
        "Most successful apps release updates monthly or bi-weekly. Critical security updates should be immediate, while feature updates can follow a regular schedule. More frequent updates generally mean higher costs but better user engagement and security.",
    },
    {
      question: "What's the difference between basic and premium maintenance?",
      answer:
        "Basic maintenance covers essential bug fixes and security updates. Premium maintenance includes proactive monitoring, performance optimization, regular feature updates, priority support, and comprehensive analytics. Enterprise plans add 24/7 support and dedicated resources.",
    },
    {
      question: "Do maintenance costs increase over time?",
      answer:
        "Yes, maintenance costs typically increase as your app grows. More users mean more server costs, support requests, and scaling challenges. Additionally, as technology evolves, you'll need updates for new OS versions and security standards.",
    },
    {
      question: "Can I reduce maintenance costs without affecting quality?",
      answer:
        "Yes, through automation, efficient coding practices, regular preventive maintenance, choosing stable technologies, and planning updates strategically. However, cutting maintenance too much can lead to higher costs later due to technical debt and emergency fixes.",
    },
    {
      question: "What happens if I skip regular maintenance?",
      answer:
        "Skipping maintenance can lead to security vulnerabilities, compatibility issues with new OS versions, poor performance, user complaints, app store rejections, and eventually much higher costs for emergency fixes and major overhauls.",
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
    "/tools/saas-development-cost-calculator/": SaasDevCostCalculatorFaqData,
    "/tools/mvp-development-cost-calculator/": mvpDevCostCalculatorFaqData,
    "/tools/app-maintenance-cost-estimator/":
      appMaintenanceCostEstimatorFaqData,
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
