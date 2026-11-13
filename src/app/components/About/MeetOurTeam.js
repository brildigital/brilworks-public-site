"use client";
import React from "react";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useMediaQuery } from "react-responsive";
import Heading from "../HTMLComponents/Heading";
import Image from "next/image";
import ButtonV2 from "../Common/ButtonV2";
import { Linkedin } from "lucide-react";
import { TEAM_MEMBERS } from "./teamData";

const MeetOurTeam = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <div style={{ background: "#f1f5fb" }}>
      <div className="container max-w-[1280px] main-section-padding mx-auto">
        <Heading
          type="h2"
          className="lg:!text-[34px] md:!text-3xl !text-2xl"
          text="Meet Our Team"
        />
        <Splide
          className="our-team-swiper lg:py-10 md:py-7.7 py-5"
          options={{
            gap: 15,
            arrows: true,
            pagination: false,
            isNavigation: true,
            perPage: isMobile ? 1 : 3,
            perMove: isMobile ? 1 : 3,
          }}
        >
          {TEAM_MEMBERS.map(({ name, role, imageSrc, linkedin }) => {
            return (
              <SplideSlide key={name}>
                <div className="overflow-hidden max-w-[580px]">
                  <Image
                    className="rounded-2xl lg:h-[393px] h-auto"
                    src={imageSrc}
                    width="302"
                    height="400"
                    alt={`${name}, ${role} at Brilworks`}
                  />
                  <div className="w-full flex items-center flex-col justify-center md:pt-7.5 pt-5">
                    <h3
                      className="text-center md:text-2xl text-xl font-medium md:w-11/12"
                      style={{ color: "#0b1e33" }}
                    >
                      {name}
                    </h3>
                    <p
                      className="text-center md:text-xl text-lg font-light md:w-11/12"
                      style={{ color: "#566678" }}
                    >
                      {role}
                    </p>
                    {linkedin && (
                      <a
                        href={linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 mt-2 text-sm font-medium text-[#2f6bff] hover:underline"
                        aria-label={`${name} on LinkedIn`}
                      >
                        <Linkedin size={16} aria-hidden="true" />
                        LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>

        <ButtonV2
          redirect="/career/"
          label="Join Our Team"
          className="w-fit mx-auto mt-5 hover:text-themeColor"
        />
      </div>
    </div>
  );
};

export default MeetOurTeam;
