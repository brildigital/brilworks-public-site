import React from "react";
import Image from "next/image";
import Link from "next/link";
import ButtonV2 from "../Common/ButtonV2";
import { formatSrcUrl } from "../lib/commonFunction";
import "../../styles/ServiceLightTheme.css";

const formatSlug = (path) => {
  const slug = path?.split("/").filter(Boolean).pop() || "";
  return slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
};

const UsecaseFirstSection = ({ data, slug }) => {
  return (
    <section
      className="svc-hero-bg relative overflow-hidden"
      aria-labelledby="usecase-heading"
    >
      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto relative z-[2]">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] grid-cols-1 gap-10 lg:gap-[60px] items-center pt-[130px] pb-20">
          {/* Left Column */}
          <div>
            {/* Breadcrumb */}
            <nav
              className="text-[13px] !mb-6"
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
                href="/use-case/"
                className="transition-colors"
                style={{ color: "#566678" }}
              >
                Use Cases
              </Link>
              {" / "}
              <span style={{ color: "#0b1e33" }}>{formatSlug(slug)}</span>
            </nav>

            {/* Badge */}
            <span
              className="inline-flex items-center gap-2 rounded-full px-[14px] py-[6px] text-xs font-semibold tracking-[0.1em] !mb-6 border"
              style={{
                background: "#ffffff",
                borderColor: "#e4eaf1",
                color: "#566678",
                boxShadow: "0 1px 2px rgba(11, 30, 51, 0.05)",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
              AWS CONSULTING PARTNER
            </span>

            {/* H1 */}
            <h1
              id="usecase-heading"
              className="font-extrabold tracking-[-1.5px] leading-[1.1] !mb-6"
              style={{ fontSize: "clamp(36px, 3.8vw, 54px)", color: "#0b1e33" }}
            >
              {data?.title}
            </h1>

            {/* Subtitle */}
            <p
              className="text-[18px] leading-[1.7] max-w-[600px] !mb-10"
              style={{ color: "#566678" }}
            >
              {data?.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <ButtonV2
                size="large"
                label={data?.button_text || "Get a Free Consultation"}
                className="hover:!text-themeColor"
              />
              <Link
                href="#content-section"
                className="inline-flex items-center whitespace-nowrap rounded-md px-[30px] py-3 font-medium transition-all duration-300 hover:bg-black/5"
                style={{
                  color: "#0b1e33",
                  border: "1px solid #e4eaf1",
                  background: "transparent",
                }}
              >
                Read More
              </Link>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          {data?.banner_image?.filename && (
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
