"use client";
import Image from "next/image";
import "@splidejs/splide/dist/css/splide.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Heading from "../HTMLComponents/Heading";

const ToolsAndGetInTouch = () => {
  const toolsData = [
    {
      title: "Jira",
      imageSrc: "/images/v2/jira-icon.png",
      className: "lg:w-[80px] md:w-[60px] w-[50px]",
    },
    {
      title: "GitHub",
      imageSrc: "/images/v2/github-icon.png",
      className: "lg:w-[90px] md:w-[80px] w-[60px]",
    },
    {
      title: "Miro",
      imageSrc: "/images/v2/miro-icon.png",
      className: "lg:w-[80px] md:w-[60px] w-[50px]",
    },
    {
      title: "Google Meet",
      imageSrc: "/images/v2/google-meet.png",
      className: "lg:w-[90px] md:w-[80px] w-[60px]",
    },
    {
      title: "BitBucket",
      imageSrc: "/images/v2/logos--bitbucket.svg",
      className: "lg:w-[80px] md:w-[60px] w-[50px]",
    },
    {
      title: "Clickup",
      imageSrc: "/images/v2/logo-clickup.svg",
      className: "lg:w-[80px] md:w-[60px] w-[50px]",
    },
    {
      title: "Slack",
      imageSrc: "/images/v2/logos--slack-icon.svg",
      className: "lg:w-[80px] md:w-[60px] w-[50px]",
    },
    // {
    //   title: "Skype",
    //   imageSrc: "/images/v2/logos--skype.svg",
    //   className: "lg:w-[80px] md:w-[60px] w-[50px]",
    // },
  ];
  return (
    <div className="container max-w-[1280px] mx-auto main-section-padding">
      <Heading
        type="h2"
        className="lg:!text-[34px] md:!text-3xl !text-2xl"
        text="Tools We Use to Manage Our Workflow"
      />
      <Splide
        className="lg:!pt-10 md:!pt-7.5 !pt-5"
        options={{
          type: "loop",
          drag: "free",
          arrows: false,
          gap: 20,
          pagination: true,
          perPage: 5,
          autoScroll: {
            pauseOnHover: true,
            pauseOnFocus: false,
            rewind: false,
            speed: 0.5,
          },
          breakpoints: {
            1080: {
              perPage: 5,
            },
            1023: {
              perPage: 4,
              gap: 15,
            },
            767: {
              perPage: 3,
              gap: 10,
            },
            535: {
              perPage: 2,
              gap: 10,
            },
          },
        }}
        extensions={{ AutoScroll }}
      >
        {toolsData?.map(({ title, imageSrc, className }, index) => {
          return (
            <SplideSlide key={index}>
              <div className="honors-card !mb-10">
                <div className="award !p-0 !pb-1">
                  <div
                    key={title}
                    className="mx-auto max-w-[220px] lg:w-[220px] lg:h-[220px] max-h-[220px] flex flex-col items-center justify-center rounded-2xl lg:py-10 md:py-7.5 py-5"
                  >
                    <Image
                      className={className}
                      src={imageSrc}
                      width={100}
                      height={100}
                      alt={`${title}-icon`}
                    />
                    <p className="md:text-lg text-base font-medium pt-5">
                      {title}
                    </p>
                  </div>
                </div>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default ToolsAndGetInTouch;
