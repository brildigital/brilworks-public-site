import React from "react";
import Image from "next/image";
import Link from "next/link";
import ButtonV2 from "../Common/ButtonV2";
import { formatSrcUrl } from "../lib/commonFunction";
import "../../styles/ServiceLightTheme.css";

const formatSlug = (slug) =>
  slug
    ?.replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase()) || "";

const PortfolioFirstSection = ({
  slug,
  title,
  description,
  images,
  heroImageSrc,
  buttontext,
  KeyValueBlock,
  processAndEnhanceBlock,
  technology,
  industry,
}) => {
  return (
    <section
      className="svc-hero-bg relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto relative z-[2]">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] grid-cols-1 gap-10 lg:gap-[60px] items-center pt-[140px] pb-20">
          {/* Left Column */}
          <div>
            {/* Breadcrumb */}
            <nav
              className="text-[13px] !mb-5"
              style={{ color: "#6b7a8a" }}
              aria-label="Breadcrumb"
            >
              <Link
                href="/"
                className="transition-colors"
                style={{ color: "#566678" }}
              >
                Home
              </Link>
              {" / "}
              <Link
                href="/portfolio/"
                className="transition-colors"
                style={{ color: "#566678" }}
              >
                Portfolio
              </Link>
              {" / "}
              <span style={{ color: "#0b1e33" }}>{formatSlug(slug)}</span>
            </nav>

            {/* Badge */}
            <span
              className="inline-flex items-center gap-2 rounded-full px-[14px] py-[6px] text-xs font-semibold tracking-[0.1em] mb-6 border"
              style={{
                background: "#ffffff",
                borderColor: "#e4eaf1",
                color: "#566678",
                boxShadow: "0 1px 2px rgba(11, 30, 51, 0.05)",
              }}
            >
              CASE STUDY
            </span>

            {/* H1 */}
            <h1
              id="hero-heading"
              className="font-extrabold tracking-[-1.5px] leading-[1.1] mb-4"
              style={{ fontSize: "clamp(36px, 3.8vw, 54px)", color: "#0b1e33" }}
            >
              {title}
            </h1>

            {/* Subtitle */}
            <p
              className="text-[18px] leading-[1.7] max-w-[600px] !mb-10"
              style={{ color: "#566678" }}
            >
              {description}
            </p>

            {/* Project Meta */}
            {(industry || KeyValueBlock?.length > 0 || technology?.length > 0) && (
              <div className="flex gap-6 flex-wrap !mb-10">
                {industry && (
                  <div className="text-[13px]" style={{ color: "#6b7a8a" }}>
                    <strong className="font-semibold" style={{ color: "#0b1e33" }}>
                      Category:
                    </strong>{" "}
                    {industry}
                  </div>
                )}
                {KeyValueBlock?.filter(({ text }) => text !== industry).map(({ text }, index) => (
                  <div key={index} className="text-[13px]" style={{ color: "#6b7a8a" }}>
                    <strong className="font-semibold" style={{ color: "#0b1e33" }}>
                      {index === 0 ? "Client:" : "Location:"}
                    </strong>{" "}
                    {text}
                  </div>
                ))}
                {technology?.length > 0 && (
                  <div className="text-[13px]" style={{ color: "#6b7a8a" }}>
                    <strong className="font-semibold" style={{ color: "#0b1e33" }}>
                      Tech:
                    </strong>{" "}
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
                className="hover:!text-themeColor"
              />
              <Link
                href="/contact-us/"
                className="c-button c-btn-large transition-all duration-300 rounded-md px-[30px] py-3 font-medium whitespace-nowrap inline-flex items-center hover:bg-black/5"
                style={{
                  border: "1px solid #e4eaf1",
                  color: "#0b1e33",
                  background: "transparent",
                }}
              >
                Build Something Similar
              </Link>
            </div>

            {/* Stats Row */}
            {processAndEnhanceBlock?.length > 0 &&
              processAndEnhanceBlock[0]?.title &&
              processAndEnhanceBlock[0]?.description && (
                <div className="grid grid-cols-3 gap-4">
                  {processAndEnhanceBlock.slice(0, 3).map(({ title: statValue, description: statLabel }, index) => (
                    <div
                      key={index}
                      className="rounded-xl transition-all py-6 px-5 text-center svc-stat-card"
                    >
                      <div
                        className="text-[32px] font-extrabold tracking-[-0.5px] leading-none"
                        style={{ color: "#2f6bff" }}
                      >
                        {statValue}
                      </div>
                      <div className="text-[13px] mt-1" style={{ color: "#6b7a8a" }}>
                        {statLabel}
                      </div>
                    </div>
                  ))}
                </div>
              )}
          </div>

          {/* Right Column - Hero Image */}
          <div className="hidden lg:flex items-center justify-center">
            <div
              className="w-full rounded-2xl overflow-hidden"
              style={{
                background: "#ffffff",
                border: "1px solid #e4eaf1",
                boxShadow: "0 4px 24px rgba(11,30,51,0.08)",
              }}
            >
              <Image
                className="rounded-2xl object-cover w-full"
                src={
                  heroImageSrc ||
                  (images?.length > 1
                    ? formatSrcUrl(images[1]?.filename)
                    : formatSrcUrl(images?.[0]?.filename))
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
