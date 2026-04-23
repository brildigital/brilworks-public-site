import React from "react";
import Image from "next/image";
import Link from "next/link";
import ButtonV2 from "../Common/ButtonV2";
import { formatSrcUrl } from "../lib/commonFunction";

const formatSlug = (slug) =>
  slug
    ?.replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase()) || "";

const PortfolioFirstSection = ({
  slug,
  title,
  description,
  images,
  buttontext,
  KeyValueBlock,
  processAndEnhanceBlock,
  technology,
  industry,
}) => {
  return (
    <section className="portfolio-hero" aria-labelledby="hero-heading">
      <div className="portfolio-hero-bg"></div>
      <div className="portfolio-hero-grid"></div>
      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto relative z-[2]">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] grid-cols-1 gap-10 lg:gap-[60px] items-center pt-[140px] pb-20">
          {/* Left Column */}
          <div>
            {/* Breadcrumb */}
            <nav
              className="text-[13px] text-white/70 !mb-5"
              aria-label="Breadcrumb"
            >
              <Link href="/" className="text-white/80 hover:text-white transition-colors">
                Home
              </Link>
              {" / "}
              <Link href="/portfolio/" className="text-white/80 hover:text-white transition-colors">
                Portfolio
              </Link>
              {" / "}
              <span>{formatSlug(slug)}</span>
            </nav>

            {/* Badge */}
            <span className="inline-flex items-center gap-2 bg-[rgba(26,92,204,0.15)] border border-[rgba(26,92,204,0.3)] rounded-full px-[14px] py-[6px] text-[#00b4d8] text-xs font-semibold tracking-[0.1em] mb-6">
              CASE STUDY
            </span>

            {/* H1 */}
            <h1
              id="hero-heading"
              className="font-extrabold tracking-[-1.5px] leading-[1.1] mb-4 bg-gradient-to-r from-white via-white to-[#00ffff] bg-clip-text text-transparent"
              style={{ fontSize: "clamp(36px, 3.8vw, 54px)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              {title}
            </h1>

            {/* Subtitle */}
            <p className="text-[18px] text-white/60 leading-[1.7] max-w-[600px] !mb-10">
              {description}
            </p>

            {/* Project Meta */}
            {(industry || KeyValueBlock?.length > 0 || technology?.length > 0) && (
              <div className="flex gap-6 flex-wrap !mb-10">
                {industry && (
                  <div className="text-[13px] text-white/50">
                    <strong className="text-white/75 font-semibold">Category:</strong> {industry}
                  </div>
                )}
                {KeyValueBlock?.filter(({ text }) => text !== industry).map(({ text }, index) => (
                  <div key={index} className="text-[13px] text-white/50">
                    <strong className="text-white/75 font-semibold">
                      {index === 0 ? "Client:" : "Location:"}
                    </strong>{" "}
                    {text}
                  </div>
                ))}
                {technology?.length > 0 && (
                  <div className="text-[13px] text-white/50">
                    <strong className="text-white/75 font-semibold">Tech:</strong>{" "}
                    {technology.join(", ")}
                  </div>
                )}
              </div>
            )}

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <ButtonV2
                size="large"
                label={buttontext || "Get the Full Case Study"}
                redirect="#download-section"
              />
              <Link
                href="/contact-us/"
                className="c-button c-btn-large border border-white/20 text-white bg-transparent hover:bg-white/[0.08] hover:border-white/40 transition-all duration-300 rounded-md px-[30px] py-3 font-medium whitespace-nowrap inline-flex items-center"
              >
                Build Something Similar
              </Link>
            </div>

            {/* Stats Row */}
            {processAndEnhanceBlock?.length > 0 &&
              processAndEnhanceBlock[0]?.title &&
              processAndEnhanceBlock[0]?.description && (
                <div className="grid grid-cols-3 gap-[1px] bg-white/[0.08] rounded-xl overflow-hidden border border-white/[0.08]">
                  {processAndEnhanceBlock.slice(0, 3).map(({ title: statValue, description: statLabel }, index) => (
                    <div
                      key={index}
                      className="bg-white/[0.03] hover:bg-white/[0.08] transition-colors py-6 px-5 text-center"
                    >
                      <div className="text-white text-[32px] font-extrabold tracking-[-0.5px] leading-none">
                        {statValue}
                      </div>
                      <div className="text-white/50 text-[13px] mt-1">
                        {statLabel}
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
                src={
                  images?.length > 1
                    ? formatSrcUrl(images[1]?.filename)
                    : formatSrcUrl(images?.[0]?.filename)
                }
                alt={title || "portfolio-banner"}
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

export default PortfolioFirstSection;
