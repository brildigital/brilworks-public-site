import Image from "next/image";
import Link from "next/link";
import React from "react";

export const BrilworksButton = ({
  type,
  label,
  iconPosition,
  buttonIcon,
  redirect,
  variant = "primary",
  className,
  scrollingButton,
  innerClassName,
  ...props
}) => {
  return (
    <button
      type={type ? type : "button"}
      className={[
        `primary-btn gap-2 outline-none overflow-hidden whitespace-nowrap transition-all duration-300`,
        className,
      ].join(" ")}
      {...props}
    >
      {type === "submit" ? (
        <div className="flex items-center justify-center gap-2">
          {buttonIcon}
          {label}
        </div>
      ) : (
        <Link
          className={innerClassName}
          href={redirect ? redirect : "/contact-us/"}
          onClick={
            scrollingButton
              ? (e) => scrollToSection(e, redirect.replace("#", ""))
              : ""
          }
          {...props}
        >
          {iconPosition === "after" ? (
            <>
              {label}
              {buttonIcon}
            </>
          ) : (
            <>
              {buttonIcon}
              {label}
            </>
          )}
        </Link>
      )}
    </button>
  );
};

const PortfolioGradientHero = () => {
  return (
    <div className="container max-w-[1440px] md:px-[60px] px-[20px] lg:px-[100px] 3xl:px-[120px] 3xl:py-[100px] py-[60px] md:mt-20 mt-10 mx-auto">
      <div className="flex items-center lg:flex-row flex-col gap-9">
        <div className="lg:w-1/2 w-full flex flex-col">
          <h1 className="lg:text-[52px] md:text-[44px] text-4xl font-bold leading-normal mb-5">
            Employee Recruitment
            <br className="lg:block hidden" />
            <span className="h1-border-b"> Referral Platform</span>
          </h1>
          <p className="text-lg lg:!mb-10 md:!mb-8 !mb-6">
            Transforming a job referral platform with our expertise by
            developing a powerful referral program management solution for
            Cruit.
          </p>
          <div className="lg:mb-[50px] md:mb-10 mb-8">
            <BrilworksButton type="button" label="Build Similar App" />
          </div>
          <div className="flex">
            <div className="flex items-center gap-[10px] lg:text-[26px] md:text-xl text-lg">
              <Image
                className="lg:w-8 md:w-6 w-5 lg:h-8 md:h-6 h-5"
                src="/images/profile-2user.svg"
                alt="person"
                width="32"
                height="32"
                priority
              />
              Recruitment
            </div>
            <div className="flex items-center w-[1px] lg:h-[39px] md:h-7 h-6 mx-5 bg-borderGray"></div>
            <div className="flex items-center gap-[10px] lg:text-[26px] md:text-xl text-lg">
              <Image
                className="lg:w-8 md:w-6 w-5 lg:h-8 h-6"
                src="/images/location.svg"
                alt="person"
                width="32"
                height="32"
                priority
              />
              Amsterdam
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full flex flex-col">
          <Image
            src="/images/new-portfolio-banner.webp"
            alt="portfolio-banner"
            width="580"
            height="550"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioGradientHero;
