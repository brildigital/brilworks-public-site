"use client";
import React from "react";
import DeviceMockups from "./DeviceMockups";
import { scrollToSection } from "../lib/commonFunction";
import Image from "next/image";

const FreeMockUpHeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 lg:pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-3xl animate-pulse opacity-60"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-gradient-to-br from-accent/30 to-primary/20 rounded-full blur-3xl animate-pulse opacity-60"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse opacity-40"
        style={{ animationDelay: "2s", transform: "translate(-50%, -50%)" }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Content */}
        <div className="space-y-8 scroll-reveal">
          <div className="space-y-4">
            <h1
              className="text-5xl lg:text-7xl font-bold leading-tight"
              data-testid="text-hero-headline"
            >
              Got an <span className="gradient-text">app idea?</span>
              <br />
              Get free mockups,
              <em className="text-[#2f6bff]"> on us.</em>
            </h1>
            <p
              className="md:text-xl text-lg text-[#566678] max-w-xl"
              data-testid="text-hero-subheadline"
            >
              Transform your napkin sketches into professional, clickable
              mockups in minutes. No designer needed. No cost. No catch.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={(e) => scrollToSection(e, "form-section")}
              className="px-8 md:py-4 py-2.5 bg-[#2f6bff] text-white rounded-lg hover:bg-[#1e4fd6] transition-all duration-300 font-semibold text-lg animate-pulse-glow"
              data-testid="button-get-mockups"
            >
              Turn My Idea Into Mockups
              <span className="ml-2">→</span>
            </button>
            <button
              onClick={(e) => scrollToSection(e, "ui-portfolio")}
              className="px-8 md:py-4 py-2.5 border border-border text-[#0b1e33] rounded-lg hover:bg-[#f1f5fb] transition-all duration-300 font-medium"
              data-testid="button-view-examples"
            >
              View Examples
            </button>
          </div>

          {/* <div className="flex items-center gap-6 md:pt-4">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-themeColor to-accent border-2 border-white"></div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-themeColor border-2 border-white"></div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2f6bffB3] to-accent/70 border-2 border-white"></div>
            </div>
            <p
              className="text-sm text-[#566678]"
              data-testid="text-social-proof"
            >
              <span className="text-[#2f6bff] font-semibold">2,500+</span> founders
              already visualized their ideas
            </p>
          </div> */}
          <div className="flex md:flex-row flex-col items-center justify-start gap-4">
            <div className="md:w-fit w-full flex items-center justify-start md:pt-4">
              <Image
                className="w-10 h-10 rounded-full"
                src="/images/v2/image_avtar-1.svg"
                alt="image-avtar"
                width="42"
                height="42"
              />
              <Image
                className="-ml-[10px] w-10 h-10 rounded-full"
                src="/images/v2/image_avtar-2.svg"
                alt="image-avtar"
                width="42"
                height="42"
              />
              <Image
                className="-ml-[10px] w-10 h-10 rounded-full"
                src="/images/v2/image_avtar-3.svg"
                alt="image-avtar"
                width="42"
                height="42"
              />
              <div className="flex items-center justify-center w-[42px] h-[42px] bg-gradient-to-br from-[#2f6bffB3] to-accent/70 rounded-full -ml-[10px] !border-[1px] border-colorWhite">
                <p className="text-sm text-center">2k+</p>
              </div>
            </div>
            <div>
              <p
                className="text-sm md:!mt-3 !mt-0 text-[#566678]"
                data-testid="text-social-proof"
              >
                <span className="text-[#2f6bff] font-semibold">2,500+</span>{" "}
                founders already visualized their ideas
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Device Mockups */}
        <div
          className="relative scroll-reveal"
          style={{ animationDelay: "0.2s" }}
        >
          <DeviceMockups />
        </div>
      </div>
    </section>
  );
};

export default FreeMockUpHeroSection;
