import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useMediaQuery } from "react-responsive";
import Heading from "../HTMLComponents/Heading";
import Image from "next/image";
import ButtonV2 from "../Common/ButtonV2";

const MeetOurTeam = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const ourTeamData = [
    {
      name: "Vikas Singh",
      role: "Chief Technology Officer",
      imageSrc: "/images/v2/team-member1.webp",
    },
    {
      name: "Hitesh Umaletiya",
      role: "Co-Founder",
      imageSrc: "/images/v2/team-member2.webp",
    },
    {
      name: "Dhaval Trivedi",
      role: "Project Manager",
      imageSrc: "/images/v2/team-member5.webp",
    },
    {
      name: "Colin Shah",
      role: "Technical Project Manager",
      imageSrc: "/images/v2/team-member3.webp",
    },
    {
      name: "Dinesh Kachhot",
      role: "Team Lead",
      imageSrc: "/images/v2/team-member4.webp",
    },
  ];
  return (
    <div className="contact-us-banner">
      <div className="banner-layer-dark">
        <div className="container max-w-[1280px] main-section-padding mx-auto">
          <Heading
            type="h2"
            className="text-colorWhite lg:!text-[34px] md:!text-3xl !text-2xl"
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
            {ourTeamData.map(({ name, role, imageSrc }, index) => {
              return (
                <SplideSlide key={name}>
                  <div className="overflow-hidden max-w-[580px]">
                    <Image
                      className="rounded-2xl lg:h-[393px] h-auto"
                      src={imageSrc}
                      width="302"
                      height="400"
                      alt={`team-${index}`}
                    />
                    <div className="w-full flex items-center flex-col text-colorWhite justify-center md:pt-7.5 pt-5">
                      <h3 className="text-center md:text-2xl text-xl font-medium md:w-11/12">
                        {name}
                      </h3>
                      <p className="text-center md:text-xl text-lg font-light md:w-11/12">
                        {role}
                      </p>
                    </div>
                  </div>
                </SplideSlide>
              );
            })}
          </Splide>

          <ButtonV2
            redirect="/career/"
            label="Join Our Team"
            className="w-fit mx-auto mt-5"
          />
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeam;
