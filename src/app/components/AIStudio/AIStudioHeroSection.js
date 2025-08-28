"use client";
import React, { useState, useRef, useEffect } from "react";
import ButtonV2 from "../Common/ButtonV2";
import Heading from "../HTMLComponents/Heading";

const AIStudioHeroSection = () => {
  const videoRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }

    setTimeout(() => {
      setShowVideo(true);
    }, 2000);
  }, []);

  return (
    <>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            showVideo ? "opacity-0" : "opacity-100"
          }`}
          style={{
            backgroundImage: "url('/video-img-initial.png')",
          }}
        />
        {showVideo && (
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/design-2.mp4" type="video/mp4" />
          </video>
        )}

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-3xl text-center px-6">
          <Heading
            type="h1"
            className="text-white !font-bold lg:mt-20 mt-10"
            text={
              <>
                From Idea to MVP
                <br />
                <span className="text-orange-600 !font-semibold text-4xl">
                  in Days, Not Months
                </span>
              </>
            }
          />
          <p className="mt-6 sxl:text-lg md:text-base text-sm text-gray-200 pt-4">
            3D AI Loop Validate Before You Build From Idea to MVP in Days, Not
            Months Get expert validation, MVP roadmap, and prototype for FREE.
            Only pay when you’re ready to build your production-ready app with
            white-glove support.
          </p>

          <div className="flex items-center gap-4 justify-center">
            <ButtonV2
              size="large"
              label="Get Free MVP Consultation"
              className="md:mt-8 mt-4"
            />
            <ButtonV2
              size="large"
              variant="secondary"
              label="See Success Stories"
              className="md:mt-8 mt-4"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AIStudioHeroSection;
