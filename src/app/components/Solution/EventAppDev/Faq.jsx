"use client";
import React, { useState } from "react";
import GradientFAQAccordion from "../../Common/GradientFAQAccordion";

const faqs = [
  {
    question: "How much does it cost to develop an event app?",
    answer:
      "Costs depend on scope: feature set, number of platforms (web, iOS, Android), design complexity, integrations, security requirements, and whether the app will support a single event or a multi-event portfolio. We typically define an MVP first and then plan phased improvements.",
  },
  {
    question: "How long does it take to build an event app?",
    answer:
      "Simple branded apps can be developed in a few weeks, while fully custom, integrated event management apps for large or recurring events may require several months from discovery to launch.",
  },
  {
    question: "How do you measure the success of an event app?",
    answer:
      "Success is measured through metrics such as registration-to-attendance conversion, app adoption rate, engagement actions per attendee (messages, Q&A, polls), session popularity, and leads generated for sponsors.",
  },
  {
    question: "Can you integrate the event app with our existing tools?",
    answer:
      "Yes, we integrate with CRMs, marketing automation platforms, ticketing systems, payment gateways, and streaming tools so data flows seamlessly before, during, and after the event.",
  },
  {
    question: "Do you support hybrid and virtual events?",
    answer:
      "Yes, we design event apps that support in-person, hybrid, and fully virtual formats with features such as streaming integration, virtual sessions, chat, networking, and on-demand content libraries.",
  },
  {
    question: "Do sponsors and exhibitors get access to their own analytics?",
    answer:
      "Yes, event apps can provide dedicated views or exports for sponsors and exhibitors, including traffic, engagement, meetings, and lead data, helping them justify current investment and plan future participation.",
  },
];

const Faq = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <section id="faq">
      <div className="max-w-7xl mx-auto main-section-padding-bottom">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="slg:pt-10 md:pt-7.5 pt-5">
          <div itemScope="true" itemType="https://schema.org/FAQPage">
            {faqs?.map(({ question, answer }, index) => (
              <GradientFAQAccordion
                key={index + 1}
                id={index + 1}
                question={question}
                answer={answer}
                open={open}
                handleOpen={handleOpen}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
