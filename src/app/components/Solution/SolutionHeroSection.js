import Image from "next/image";
import React from "react";
import ButtonV2 from "../Common/ButtonV2";
import Link from "next/link";

const SolutionHeroSection = ({
  technologyText,
  title,
  description,
  imageSrc,
  buttonText,
  stats,
}) => {
  return (
    <section className="portfolio-hero" aria-labelledby="hero-heading">
      <div className="portfolio-hero-bg"></div>
      <div className="portfolio-hero-grid"></div>
      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto relative z-[2]">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] grid-cols-1 gap-10 lg:gap-[60px] items-center pt-[160px] pb-20 lg:pb-[100px]">
          {/* Left Column */}
          <div>
            {/* Badge */}
            <span className="inline-flex items-center gap-2 bg-[rgba(26,92,204,0.15)] border border-[rgba(26,92,204,0.3)] rounded-full px-[14px] py-[6px] text-[#00b4d8] text-xs font-semibold tracking-[0.1em] !mb-7">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
              Trusted by 120+ companies across 20 countries
            </span>

            {/* H1 */}
            <h1
              id="hero-heading"
              className="font-extrabold text-white tracking-[-1.5px] leading-[1.1] !mb-4"
              style={{ fontSize: "clamp(36px, 3.8vw, 54px)" }}
              dangerouslySetInnerHTML={{ __html: title }}
            />

            {/* SEO keyword heading */}
            {technologyText && (
              <h2 className="text-[18px] font-semibold text-white/50 tracking-normal !mb-6">
                {technologyText}
              </h2>
            )}

            {/* Subtitle */}
            <p className="text-[18px] text-white/60 leading-[1.7] max-w-[600px] !mb-10">
              {description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 !mb-12">
              <ButtonV2
                size="large"
                label={buttonText || "Get My Free Consultation"}
                redirect="#section-contact-form"
                scrollingButton
              />
              <Link
                href="/portfolio/"
                className="inline-flex items-center whitespace-nowrap rounded-md px-[30px] py-3 font-medium text-white border border-white/20 bg-transparent hover:bg-white/[0.08] hover:border-white/40 transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>

            {/* Stats Row */}
            {stats?.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-white/[0.08] rounded-xl overflow-hidden border border-white/[0.08]">
                {stats.map(({ value, label }, index) => (
                  <div
                    key={index}
                    className="bg-white/[0.03] hover:bg-white/[0.08] transition-colors py-5 px-5 text-center"
                  >
                    <div className="text-white text-[28px] font-extrabold tracking-[-0.5px] leading-none">
                      {value}
                    </div>
                    <div className="text-white/50 text-[12px] mt-1">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column - Hero Image */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-full rounded-2xl overflow-hidden bg-white/[0.05] border border-white/10 backdrop-blur-[10px]">
              <Image
                className="rounded-2xl object-cover w-full"
                src={imageSrc}
                alt={technologyText || "industry-banner"}
                width={565}
                height={650}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionHeroSection;
