import Image from "next/image";
import React from "react";
import ButtonV2 from "../Common/ButtonV2";
import Heading from "../HTMLComponents/Heading";
import { usePathname } from "next/navigation";

const HireTeamHeroSection = ({
  technologyText,
  title,
  description,
  imageSrc,
  hireButtonText = "",
}) => {
  const pathname = usePathname();
  const bgBannerSelection = [
    "/hire-aws-developer/",
    "/hire-mobile-app-developer/",
    "/hire-flutterflow-developer/",
    "/hire-adalo-developer/",
    "/hire-bubble-developer/",
    "/hire-low-code-no-code-developer/",
  ];
  return (
    <div
      className={
        bgBannerSelection.includes(pathname)
          ? "hire-team-section-l"
          : "hire-team-section"
      }
    >
      <div className="banner-layer h-full min-h-[600px] md:max-h-[980px] max-h-full">
        <div className="container max-w-[1280px] main-section-padding !pt-24 mx-auto">
          <section className="flex flex-col md:flex-row items-center justify-start md:h-screen h-full min-h-[600px] md:max-h-[840px] max-h-full lg:gap-14 md:gap-10 gap-6">
            <div className="md:w-1/2 w-full">
              <p className="text-colorWhite uppercase md:text-2xl text-xl md:!mb-7.5 !mb-5">
                {technologyText}
              </p>
              <Heading type="h1" className="text-white" text={title} />
              <p className="text-white lg:text-2xl md:text-xl text-lg !mt-5">
                {description}
              </p>
              <div className="flex md:flex-row flex-col md:items-center items-start justify-start gap-5 lg:mt-10 md:my-7.5 my-5">
                <ButtonV2
                  size="large"
                  className="w-fit"
                  label="Plan and Pricing"
                />
                <ButtonV2
                  size="large"
                  redirect="#section-contact-form"
                  className="w-fit !bg-transparent !border-colorWhite hover:!bg-colorWhite hover:text-themeColor"
                  label={hireButtonText || technologyText}
                  scrollingButton
                />
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <Image
                className="rounded-2xl md:h-[650px] object-cover"
                src={imageSrc}
                alt="hire-banner"
                width="565"
                height="610"
                priority
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HireTeamHeroSection;
