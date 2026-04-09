"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { scrollEffect } from "../lib/commonFunction";
import FetchDataSpinner from "./FetchDataSpinner";

const avatarColors = [
  "bg-[#1A5CCC]",
  "bg-[#0891b2]",
  "bg-[#7c3aed]",
  "bg-[#1A5CCC]",
  "bg-[#0891b2]",
];

const clientTestimonials = [
  {
    quote:
      "I have been working with Brilworks for more than 4 years and could not be happier with the quality of their work and the support provided. The best part is they're always available.",
    author: "David Velasquez",
    initials: "DV",
    position: "CEO, Rastrack",
    duration: "4+ year relationship",
  },
  {
    quote:
      "Team Brilworks has been an absolute delight to work with. They were able to take my list of prioritized needs and identify the most pressing ones to solve them quickly and exponentially.",
    author: "Liz Bullen",
    initials: "LB",
    position: "Founder, Lyfecoin",
    duration: "2+ year relationship",
  },
  {
    quote:
      "Orokii has a special relationship with Brilworks. They treat our project as if it were their own. Exceptional communication, on-time delivery, and they always go the extra mile.",
    author: "Orokii Team",
    initials: "OR",
    position: "Art Marketplace Platform",
    duration: "3+ year relationship",
  },
  {
    quote:
      "I absolutely loving working with the Brilworks team because their communication is top-notch. I really value their partnership, transparency in processes and suggestions that ensure our project comes to fruition.",
    author: "Edwin",
    initials: "ED",
    position: "Founder, Tekstride",
    duration: "2+ year relationship",
  },
  {
    quote:
      "Brilworks team members are an excellent group of professionals. Excellent knowledge of Java, Spring Boot, DB, and DevOps. Dedicated, available, and communication is excellent! I strongly recommend Brilworks.",
    author: "Golan",
    initials: "GL",
    position: "Director of R&D, Trackimo",
    duration: "3+ year relationship",
  },
];

const TestimonialCard = ({ testimonial, index }) => (
  <div className="bg-white/[0.05] border border-white/[0.08] rounded-2xl p-7 transition-all duration-300 hover:bg-white/[0.08] hover:border-[rgba(26,92,204,0.5)] h-full flex flex-col">
    {/* Stars */}
    <div className="text-[#fbbf24] text-sm mb-3.5 tracking-[1px]">
      ★★★★★
    </div>

    {/* Quote */}
    <p className="font-[family-name:var(--font-body)] text-sm text-white/75 leading-[1.75] mb-5 italic flex-1">
      &ldquo;{testimonial.quote}&rdquo;
    </p>

    {/* Author */}
    <div className="flex items-center gap-3">
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center font-[family-name:var(--font-heading)] font-extrabold text-[15px] text-white shrink-0 ${avatarColors[index % avatarColors.length]}`}
      >
        {testimonial.initials}
      </div>
      <div>
        <div className="font-[family-name:var(--font-body)] text-sm font-semibold text-white">
          {testimonial.author}
        </div>
        <div className="font-[family-name:var(--font-body)] text-xs text-white/40">
          {testimonial.position}
        </div>
        {testimonial.duration && (
          <div className="inline-flex items-center gap-1.5 bg-[rgba(16,185,129,0.15)] border border-[rgba(16,185,129,0.3)] rounded-full px-2.5 py-0.5 text-[11px] font-semibold text-[#10b981] mt-2">
            ⏱ {testimonial.duration}
          </div>
        )}
      </div>
    </div>
  </div>
);

const ClientReviews = () => {
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {
    setIsLoaded(true);
    scrollEffect();
    window.addEventListener("scroll", scrollEffect);
    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);

  if (!isLoaded) {
    return (
      <div className="container mx-auto px-[15px]">
        <FetchDataSpinner />
      </div>
    );
  }

  return (
    <>
      <div className="bg-[#0d0f1a] py-24">
        <div className="container max-w-[1280px] md:px-10 px-5 mx-auto">
          {/* Section Header */}
          <div className="mb-14 reveal">
            <span className="text-[11px] font-bold tracking-[0.12em] uppercase block mb-3 text-[#00b4d8]">
              Our Clients Simply Love Our Work
            </span>
            <h2 className="text-[clamp(30px,3.5vw,44px)] font-extrabold tracking-[-1px] leading-[1.1] text-white">
              What Our Clients Say
            </h2>
            <p className="text-[17px] text-white/50 mt-3 max-w-[560px]">
              Not curated marketing quotes. Real words from real people who have
              worked with us for years.
            </p>
          </div>

          {/* Testimonials Swiper */}
          <div className="reveal testimonials-swiper">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              speed={600}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {clientTestimonials.map((testimonial, index) => (
                <SwiperSlide key={index} className="!h-auto">
                  <TestimonialCard testimonial={testimonial} index={index} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

    </>
  );
};

export default ClientReviews;
