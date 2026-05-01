import React from "react";
import Image from "next/image";
import { formatSrcUrl } from "../lib/commonFunction";

const iconAccents = [
  { bg: "#e8f0fd", border: "#c3d6fb" },
  { bg: "#d1fae5", border: "#99f6d0" },
  { bg: "#ede9fe", border: "#ddd6fe" },
  { bg: "#fce7f3", border: "#fbcfe8" },
  { bg: "#ccfbf1", border: "#99f6e4" },
];

const AISeamlessIntegration = ({ data }) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto px-5 md:px-10" style={{ maxWidth: 1280 }}>
        {/* Header */}
        <div className="text-center mx-auto mb-14" style={{ maxWidth: 720 }}>
          <span
            className="inline-block mb-4"
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#017eeb",
            }}
          >
            Capabilities
          </span>
          <h2
            className="font-extrabold"
            style={{
              fontSize: "clamp(28px, 3.2vw, 42px)",
              letterSpacing: "-1px",
              lineHeight: 1.15,
              color: "#0d0f1a",
            }}
          >
            {data?.[0]?.Key}
          </h2>
          {data?.[0]?.Value && (
            <p className="mt-4" style={{ fontSize: 17, lineHeight: 1.7, color: "#6b7280" }}>
              {data?.[0]?.Value}
            </p>
          )}
        </div>

        {/* Cards grid */}
        <div
          className="grid gap-6"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}
        >
          {data?.slice(1, 6)?.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl transition-all hover:-translate-y-0.5"
              style={{
                background: "#fff",
                border: "1px solid #e5e7eb",
                padding: "32px 28px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
              }}
            >
              <div
                className="rounded-[14px] flex items-center justify-center mb-5"
                style={{
                  width: 64,
                  height: 64,
                  background: iconAccents[index]?.bg,
                  border: `1px solid ${iconAccents[index]?.border}`,
                }}
              >
                <Image
                  className="w-8 h-8"
                  src={formatSrcUrl(item?.image?.filename)}
                  alt={item?.image?.alt || item?.title}
                  width={32}
                  height={32}
                />
              </div>
              <h3
                className="font-bold mb-3"
                style={{ fontSize: 18, color: "#0d0f1a" }}
              >
                {item.title}
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "#6b7280" }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AISeamlessIntegration;
