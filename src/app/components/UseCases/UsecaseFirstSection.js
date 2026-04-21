import React from "react";
import Image from "next/image";
import Link from "next/link";
import ButtonV2 from "../Common/ButtonV2";
import { formatSrcUrl } from "../lib/commonFunction";

const formatSlug = (path) => {
  const slug = path?.split("/").filter(Boolean).pop() || "";
  return slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
};

const UsecaseFirstSection = ({ data, slug }) => {
  return (
    <section className="portfolio-hero" aria-labelledby="usecase-heading">
      <div className="portfolio-hero-bg"></div>
      <div className="portfolio-hero-grid"></div>
      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto relative z-[2]">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] grid-cols-1 gap-10 lg:gap-[60px] items-center pt-[130px] pb-20">
          {/* Left Column */}
          <div>
            {/* Breadcrumb */}
            <nav
              className="text-[13px] text-white/70 !mb-6"
              aria-label="Breadcrumb"
            >
              <Link
                href="/"
                className="text-white/50 hover:text-white transition-colors"
              >
                Home
              </Link>
              {" / "}
              <Link
                href="/use-case/"
                className="text-white/50 hover:text-white transition-colors"
              >
                Use Cases
              </Link>
              {" / "}
              <span className="text-white/70">{formatSlug(slug)}</span>
            </nav>

            {/* Badge */}
            <span className="inline-flex items-center gap-2 bg-[rgba(26,92,204,0.15)] border border-[rgba(26,92,204,0.3)] rounded-full px-[14px] py-[6px] text-[#00b4d8] text-xs font-semibold tracking-[0.1em] !mb-6">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
              AWS CONSULTING PARTNER
            </span>

            {/* H1 */}
            <h1
              id="usecase-heading"
              className="font-extrabold text-white tracking-[-1.5px] leading-[1.1] !mb-6"
              style={{ fontSize: "clamp(36px, 3.8vw, 54px)" }}
            >
              {data?.title}
            </h1>

            {/* Subtitle */}
            <p className="text-[18px] text-white/[0.62] leading-[1.7] max-w-[600px] !mb-10">
              {data?.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <ButtonV2
                size="large"
                label={data?.button_text || "Get a Free Consultation"}
              />
              <Link
                href="#content-section"
                className="inline-flex items-center whitespace-nowrap rounded-md px-[30px] py-3 font-medium text-white border border-white/20 bg-transparent hover:bg-white/[0.08] hover:border-white/40 transition-all duration-300"
              >
                Read More
              </Link>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          {data?.banner_image?.filename && (
            <div className="hidden lg:flex items-center justify-center">
              <div className="w-full rounded-2xl overflow-hidden bg-white/[0.05] border border-white/10 backdrop-blur-[10px]">
                <Image
                  className="rounded-2xl object-cover w-full"
                  src={formatSrcUrl(data.banner_image.filename)}
                  alt={data.banner_image.alt || "use-case-banner"}
                  width={650}
                  height={390}
                  priority
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default UsecaseFirstSection;
