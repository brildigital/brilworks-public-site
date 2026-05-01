import React from "react";
import Image from "next/image";
import Link from "next/link";
import { formatSrcUrl } from "../lib/commonFunction";

const IconCheck = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M20 6L9 17L4 12" stroke="#017eeb" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const AIWorking = ({ data }) => {
  return (
    <section className="py-16 md:py-24" style={{ background: "#f2f9fe" }}>
      <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>

        {/* Section header */}
        <div className="text-center mx-auto mb-14" style={{ maxWidth: 720 }}>
          <span
            className="inline-block mb-4"
            style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#017eeb" }}
          >
            How It Works
          </span>
          <h2
            className="font-extrabold"
            style={{ fontSize: "clamp(28px, 3.2vw, 42px)", letterSpacing: "-1px", lineHeight: 1.15, color: "#0d0f1a" }}
          >
            {data?.[0]?.title ?? ""}
          </h2>
          {data?.[0]?.description && (
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>
              {data?.[0]?.description}
            </p>
          )}
        </div>

        {/* Content — text left, image right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[60px] items-center">

          {/* Left — feature list */}
          <div>
            <ul className="flex flex-col gap-6">
              {data?.slice(1, 5).map((item, index) => (
                <li
                  key={index}
                  className="rounded-2xl transition-all hover:-translate-y-0.5"
                  style={{ background: "#fff", border: "1px solid #e5e7eb", padding: "24px 28px" }}
                >
                  <div className="flex items-start gap-3">
                    <span style={{ color: "#017eeb", flexShrink: 0, marginTop: 3 }}>
                      <IconCheck />
                    </span>
                    <div>
                      <h3 className="font-bold mb-1.5" style={{ fontSize: 16, color: "#0d0f1a" }}>
                        {item?.Key}
                      </h3>
                      <p style={{ fontSize: 14, lineHeight: 1.6, color: "#6b7280" }}>
                        {item?.Value}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                href={data?.[0]?.youtube_link?.url || "/contact-us/"}
                {...(data?.[0]?.youtube_link?.url ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all"
                style={{ background: "#017eeb", color: "#fff", border: "1px solid #017eeb", padding: "14px 28px", fontSize: 15 }}
              >
                {data?.[0]?.button_text || "Get Started"}
              </Link>
            </div>
          </div>

          {/* Right — image */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid #e5e7eb", boxShadow: "0 8px 24px rgba(13,15,26,0.06)" }}
          >
            <Image
              className="w-full h-auto"
              src={
                data?.[0]?.banner_image?.filename
                  ? formatSrcUrl(data?.[0]?.banner_image?.filename)
                  : ""
              }
              alt={data?.[0]?.image?.alt || "How it works"}
              width={500}
              height={573}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIWorking;
