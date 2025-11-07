"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { portfolioDynamicItems } from "../lib/constants";

const proofItems = [
  {
    title: "Building a Swipe-Based Platform Connecting Artists and Buyers",
    link: "/portfolio/art-marketplace-app/",
    description:
      "We created a dynamic platform that allows art lovers to discover new pieces, communicate directly with artists, and complete purchases with ease, fostering a vibrant art community.",
    image:
      "https://brilworks-storyblok-assets.s3.eu-central-1.amazonaws.com/assets/75ad9804cf_building-swiper-based-mobile-app.webp",
    alt: "Social marketplace app",
  },
  {
    title: "Connecting Pet Owners With Trusted Caregivers and Expert Advice",
    link: "/portfolio/pet-finding-app/",
    description:
      "We built a mobile app that helps pet owners find reliable caregivers, consult veterinarians, and connect with a community of pet lovers-all in one place.",
    image:
      "https://brilworks-storyblok-assets.s3.eu-central-1.amazonaws.com/assets/d47ae82eac_connecting-pet-owners.webp",
    alt: "Pet finder app",
  },
  {
    title: "Making Early Learning Fun with An Interactive Educational Game",
    link: "/portfolio/educational-game-app/",
    description:
      "We developed a safe, mobile game for kids aged 2-6, using gamified activities to teach alphabets, numbers, colors, and shapes in an engaging way.",
    image:
      "https://brilworks-storyblok-assets.s3.eu-central-1.amazonaws.com/assets/a8b82fb2a7_early-learning-app.webp",
    alt: "Educational mobile game",
  },
  {
    title: "Streamlining Energy Audits with An All-In-One CRM Solution",
    link: "/portfolio/crm-solution/",
    description:
      "We built a specialized CRM platform that automates energy auditing, connecting key stakeholders and optimizing workflows from scheduling to invoicing.",
    image:
      "https://brilworks-storyblok-assets.s3.eu-central-1.amazonaws.com/assets/9918cfc298_crm-based-software.webp",
    alt: "Consulting App",
  },
];
// const proofItems = [
//   {
//     title: "Zo Labs Growth Engine",
//     description: "Programmatic agent pages, community flywheel",
//     image:
//       "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
//     alt: "Modern startup workspace with people collaborating",
//   },
//   {
//     title: "GEOptimer",
//     description: "LLM visibility scoring, GEO playbook",
//     image:
//       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
//     alt: "Professional software development dashboard interface",
//   },
//   {
//     title: "Martian Wallet Growth Study",
//     description: "400k installs era",
//     image:
//       "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
//     alt: "Tech entrepreneur consulting meeting",
//   },
//   {
//     title: "DigiPe B2B Payments",
//     description: "5M to 20M revenue lift",
//     image:
//       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
//     alt: "Modern office with financial charts",
//   },
// ];

const WhyChooseBrilworks = [
  {
    title: "Proven Expertise",
    description: "120+ successful projects, 98% success rate.",
  },
  {
    title: "Full Stack & Emerging Tech",
    description:
      "Mobile (React Native), Web (ReactJS, NodeJS), Cloud Services (AWS), Low-code/no-code when it makes sense",
  },
  {
    title: "Industry Reach",
    description:
      "Fintech, Healthcare, E-commerce, Media, Fleet Management, etc.",
  },
  {
    title: "Transparent, Agile Process",
    description:
      "You get regular updates, collaborative feedback, clear deliverables.",
  },
  {
    title: "Cost-Effective Solutions",
    description:
      "Maximizing ROI, using resources efficiently without sacrificing quality.",
  },
];
const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return (
    <section className="py-20 relative overflow-hidden" ref={ref}>
      <div className="data-streams"></div>
      <div className="geometric-shapes"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Profile Section - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex flex-col items-center mb-8">
            <h2
              className="text-3xl font-bold mb-4 !bg-gradient-to-r from-themeColor to-accent bg-clip-text text-transparent"
              data-testid="text-about-name"
            >
              Why Brilworks is the Right Partner
            </h2>
            <p
              className="text-lg text-[#94a3b8] max-w-2xl mx-auto"
              data-testid="text-outcomes-subtitle"
            >
              Brilworks brings together technical strength, design thinking, and
              a client-centric mindset. Some reasons to choose us:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto text-left">
            {WhyChooseBrilworks.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="flex items-start flex-col bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-[#017eeb33]"
                  data-testid="text-about-experience-1"
                >
                  <div className="flex items-center gap-2 font-semibold text-white mb-2">
                    <CheckCircle className="text-themeColor flex-shrink-0" />
                    {item.title}
                  </div>
                  <p className="text-sm text-[#94a3b8] pl-8">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <h3
            className="text-2xl font-bold mb-12 text-center !bg-gradient-to-r from-themeColor to-accent bg-clip-text text-transparent"
            data-testid="text-proof-title"
          >
            Proof of work
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioDynamicItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 hover:shadow-2xl border-[#017eeb33] transition-all duration-500 cursor-pointer group overflow-hidden"
                data-testid={`card-proof-${index}`}
              >
                <Link href={item.link} className="flex flex-col space-y-4">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full rounded-xl object-cover border border-[#017eeb33] shadow-lg group-hover:shadow-xl group-hover:scale-[1.02] transition-all duration-500"
                      data-testid={`img-proof-${index}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 w-10 h-10 bg-primary/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                      <i className="fas fa-external-link-alt text-white text-sm"></i>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4
                      className="font-semibold text-lg group-hover:text-themeColor transition-colors duration-300"
                      data-testid={`text-proof-title-${index}`}
                    >
                      {item.title}
                    </h4>
                    <p
                      className="text-[#94a3b8] group-hover:text-[#94a3b8] transition-colors duration-300"
                      data-testid={`text-proof-description-${index}`}
                    >
                      {item.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
