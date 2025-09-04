"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { usePathname } from "next/navigation";

const mvpIn48HoursFaqs = [
  {
    question: "What exactly do I get in 48 hours?",
    answer:
      "You'll receive a complete MVP scope map, clickable demo/prototype, integration blueprint for auth/payments/analytics, 5 detailed user stories with acceptance criteria, a go-live checklist, and realistic cost & timeline estimates. It's everything you need to move from idea to development-ready specs.",
  },
  {
    question: "Do I need technical knowledge to participate?",
    answer:
      "Not at all! This service is designed for founders and builders of all backgrounds. Whether you have a Figma mockup, a written idea, or just concepts in your head, we'll help you structure and scope your MVP. Technical implementation comes after we define what to build.",
  },
  {
    question: "What if I already have some code or a prototype?",
    answer:
      "Perfect! Bring your existing repo, prototype, or partial build. We'll audit what you have, identify gaps, and create a roadmap to get you to a launchable MVP. Sometimes existing work can accelerate the process significantly.",
  },
  {
    question: "How do we communicate during the 48 hours?",
    answer:
      "We start with a 20-minute discovery call to understand your vision and goals. Then we work intensively on your project with regular check-ins via your preferred communication method (Slack, email, or scheduled calls) to ensure we're aligned throughout the process.",
  },
  {
    question: "What happens after the 48 hours?",
    answer:
      "You'll have everything needed to start development - whether with your own team, freelancers, or our recommended partners. We provide clear handoff documentation, and you're welcome to book follow-up sessions for ongoing guidance as you build and launch.",
  },
  {
    question: "Is this really free? What's the catch?",
    answer:
      "The initial 20-minute audit and consultation is completely free with no strings attached. We believe in providing value upfront. If you decide to proceed with the full 48-hour process, we'll discuss pricing transparently based on your project's scope and needs.",
  },
];
const freeMockupFaqs = [
  {
    question: "Is it really free?",
    answer:
      "Yes — 100% free. There are no hidden costs, subscriptions, or upsells. Just share your idea, and you’ll get mockups delivered.",
  },
  {
    question: "Do I need design skills?",
    answer:
      "Not at all. You only need your app idea — even a rough sketch on paper works. I’ll turn it into clean, clickable mockups.",
  },
  {
    question: "What exactly will I receive?",
    answer:
      "You’ll get professional mockup screens that visually represent your app idea. These can be shared with developers, investors, or co-founders.",
  },
  {
    question: "How fast can I get my mockups?",
    answer:
      "Most mockups are ready within 24–48 hours, depending on the complexity of your idea.",
  },
  {
    question: "What if I only have a rough idea, not a detailed plan?",
    answer:
      "That’s totally fine. You don’t need everything figured out — just explain your concept in simple words or share a sketch, and I’ll take it from there.",
  },
  {
    question: "Can I use these mockups to build my app?",
    answer:
      "Yes. The mockups can serve as a blueprint for your development team or help you pitch your app idea to investors and partners.",
  },
  {
    question: "Will my app idea remain private?",
    answer:
      "Absolutely. Your idea stays confidential and will never be shared with anyone else.",
  },
  {
    question: "Is this offer available worldwide?",
    answer:
      "Yes. As long as you can describe your idea in English, you can request free mockups from anywhere in the world.",
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
          className="text-center mb-16"
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
