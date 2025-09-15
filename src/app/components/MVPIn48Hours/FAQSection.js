"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { usePathname } from "next/navigation";

const mvpIn48HoursFaqs = [
  {
    question: "Who is this for?",
    answer:
      "Entrepreneurs, startups, or businesses with a concept who want to validate quickly. Even if you have limited tech specs, sketch, or no code.",
  },
  {
    question: "Do I need to pay for the walkthrough?",
    answer:
      "No, the 20-minute walkthrough is completely free. You choose whether to proceed with the full 48-hour MVP sprint.",
  },
  {
    question:
      "What if I already have some work done (wireframes, prototype, partial code)?",
    answer:
      "Great! We can incorporate your existing assets, speed up scoping, reduce time where possible.",
  },
  {
    question: "What technology stacks do you support?",
    answer:
      "We work with ReactJS, NodeJS, React Native, Cloud Infrastructure (AWS), and Low-code/no-code platforms when relevant.",
  },
  {
    question: "Will I own the IP / code after 48 hours?",
    answer:
      "Yes. You get full ownership of whatever is built. We hand over documentation, prototypes, designs.",
  },
  {
    question:
      "What happens after the 48 hours if I want to move into full product development?",
    answer:
      "We provide a detailed plan, cost & timeline estimates. You can choose to continue internally, hire, or contract with Brilworks to build the full product.",
  },
];
const freeMockupFaqs = [
  {
    question: "Is it really free?",
    answer:
      "Yes — 100% free, no hidden fees, no upsells. Just share your idea, get mockups.",
  },
  {
    question: "Do I need design skills?",
    answer:
      "Not at all. Even a rough sketch or verbal idea is enough. We’ll take it from there.",
  },
  {
    question: "What exactly will I receive?",
    answer:
      "You’ll get professional mockup screens that visualise your app idea. Typically delivered as clickable prototypes or design files (Figma / PDF etc).",
  },
  {
    question: "How fast will I get them?",
    answer:
      "Usually within 24-48 hours, depending on how complex your concept is.",
  },
  {
    question: "Will my app idea remain private?",
    answer: "Absolutely. Your idea stays confidential. We respect your IP.",
  },
  {
    question: "Can I use mockups to launch or build the app?",
    answer:
      "Yes. Use mockups as a blueprint for developers or a presentation for investors.",
  },
  {
    question: "Is this available worldwide?",
    answer:
      "Yes — as long as you can describe your idea in English, we can work with you.",
  },
];

export default function FAQSection() {
  const pathname = usePathname();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const faqData =
    pathname === "/mvp-in-48-hours/" ? mvpIn48HoursFaqs : freeMockupFaqs;

  return (
    <section
      className={`py-20 ${
        pathname === "/mvp-in-48-hours/" ? "bg-[#0b111e]" : "bg-[#0d0f11]"
      }`}
    >
      <div className="container max-w-[1280px] mx-auto px-6">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4" data-testid="faq-title">
            Frequently Asked Questions
          </h2>
          <p
            className="text-xl text-[#94a3b8] max-w-2xl mx-auto"
            data-testid="faq-subtitle"
          >
            Everything you need to know about our 48-hour MVP process
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div
                className={`${
                  pathname === "/mvp-in-48-hours/"
                    ? "bg-[#121a2b33] border-[#017eeb33]"
                    : "glass-effect"
                }  border  rounded-2xl overflow-hidden hover:border-primary/30 transition-colors`}
                data-testid={`faq-item-${index}`}
              >
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/30 transition-colors"
                  onClick={() => toggleFAQ(index)}
                  data-testid={`faq-question-${index}`}
                >
                  <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-primary" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#94a3b8]" />
                    )}
                  </motion.div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div
                    className="p-6 pt-0 text-[#94a3b8] leading-relaxed"
                    data-testid={`faq-answer-${index}`}
                  >
                    {faq.answer}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
