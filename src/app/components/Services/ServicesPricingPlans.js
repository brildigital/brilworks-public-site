import Image from "next/image";
import React from "react";
import { useMediaQuery } from "react-responsive";

const PlanBenefit = ({ description }) => (
  <div className="pricing-desc">
    <div className="flex align-middle gap-3 pt-4">
      <p>
        <Image
          className="w-[30px]"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cg clip-path='url(%23clip0_30_12)'%3E%3Ccircle cx='10' cy='10' r='10' fill='%230d9a9a'/%3E%3Cpath d='M8.08102 13.9311C8.18816 14.0217 8.34951 14.0235 8.45897 13.9333C10.8471 11.9585 13.024 9.88733 15.6214 7.7973C15.8456 7.61698 15.9792 7.36482 15.9978 7.08682C16.0551 6.22275 14.9755 5.65693 14.2418 6.23531C12.0196 7.98443 10.1719 9.57103 8.44857 11.2108C8.1099 10.8884 7.65676 10.4271 7.09779 9.83522C6.66554 9.3777 5.88549 9.2986 5.36077 9.79257C4.89989 10.2261 4.8779 10.9221 5.31028 11.3773C6.35388 12.4751 7.00913 13.0229 8.08102 13.9311Z' fill='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_30_12'%3E%3Crect width='20' height='20' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"
          alt="right"
          width="23"
          height="23"
        />
      </p>
      <p className="pricing-desc-text">{description}</p>
    </div>
  </div>
);

const ServicesPricingPlans = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="container mx-auto">
      <div className="sm:w-[90%] w-full mx-auto xl:py-24 md:py-16 py-8 px-4 end-to-end">
        <div className="endTO_text solutions">
          <h2 className="!w-full p-0">
            Flexible & Predictable Costs: Find the Right IT Staff
            <br className="hidden md:block" /> Augmentation Solution
          </h2>
        </div>
        <div className="endTO_text_content home_sec2_txt4 xl:mb-24 md:mb-16 mb-8">
          <p className="!text-[1.2rem]">
            Transparent pricing  | Top talent | Data Security | Dedicated client
            support
          </p>
        </div>
        <div className="hire_sec1_service_50 reveal">
          <div className="react-technology">
            <div className="relative z-10 rounded-[30px] !border-[1px] border-themeColor">
              <div className="endTO_text_content home_sec2_txt4 py-6">
                <p className="!text-[1.2rem]">Plans start with</p>
              </div>
              <div className="border-t-[1px] border-t-[#80808085]">
                <div className="pricing_grid ">
                  <div
                    className={`one ${
                      !isMobile && "!border-r border-r-[#80808085]"
                    } md:p-4 lg:p-8 p-6`}
                  >
                    <div className="md:align-middle">
                      <p className="pricing-amount">
                        $20 <br />
                        Hourly (USD)
                      </p>
                    </div>
                    <PlanBenefit description="We prioritize the privacy of your project." />
                    <PlanBenefit
                      description="  We offer a fully signed non-disclosure agreement (NDA)
                        for your protection."
                    />
                  </div>
                  <div
                    className={`two ${
                      isMobile
                        ? "!border-t border-t-[#80808085]"
                        : "border-r-[1px] border-r-[#80808085]"
                    }  md:p-4 lg:p-8 p-6`}
                  >
                    <div className="sec8_service_txt1 txt_center">
                      <p className="pricing-amount">
                        $2500 <br />
                        Monthly (USD)
                      </p>
                    </div>
                    <PlanBenefit description="Highly skilled developers with 4-6 years of experience." />
                  </div>
                  <div
                    className={`three ${
                      isMobile && "!border-t border-t-[#80808085]"
                    }  md:p-4 lg:p-8 p-6`}
                  >
                    <div className="sec8_service_txt1 txt_center">
                      <p className="pricing-amount">
                        Request a <br />
                        quote
                      </p>
                    </div>
                    <PlanBenefit description="For a fixed-cost solution" />
                    <PlanBenefit description="Successful Project Execution within Time Constraints" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPricingPlans;
