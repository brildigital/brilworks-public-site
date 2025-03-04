import Image from "next/image";
import React from "react";
import Button from "../Common/Button";
import { usePathname } from "next/navigation";

const reactJsPricingPlans = [
  {
    title: "Fixed Cost Model",
    benefits: [
      "Budget-friendly & predictable pricing",
      "Milestone-based payments",
      "Zero hidden fees",
      "Time zone-aligned sprints",
    ],
  },
  {
    title: "Dedicated Resource Model",
    benefits: [
      "Exclusive developer/team",
      "Full control over workflows",
      "Daily standups in your time zone",
      "Monthly billing, no contracts",
    ],
  },
  {
    title: "Hourly/Time & Material",
    benefits: [
      "Pay only for hours worked",
      "Scale up/down weekly",
      "Remote React developers on-demand",
      "Transparent timesheets",
    ],
  },
];
const blockchainPricingPlans = [
  {
    title: "Fixed Cost Model",
    benefits: [
      "Predictable budgeting",
      "Milestone-driven delivery",
      "Ideal for well-defined projects",
    ],
  },
  {
    title: "Dedicated Team Model",
    benefits: [
      "Exclusive developers",
      "Daily SCRUM meetings",
      "Monthly billing, flexible terms",
    ],
  },
  {
    title: "Hourly/Time & Material",
    benefits: [
      "Pay per hour",
      "Scale resources weekly",
      "Transparent tracking",
    ],
  },
];

const HiringModels = () => {
  const pathname = usePathname();
  const mapToRender = {
    "/hire-reactjs-developer/": {
      title: "Hire React JS Developers with These Flexible Hiring Models",
      description: "",
      pricingPlans: reactJsPricingPlans,
    },
    "/hire-nodejs-developer/": {
      title: "Flexible Hiring Models for Node.js Developers",
      description: "",
      pricingPlans: reactJsPricingPlans,
    },
    "/hire-blockchain-developer/": {
      title: "Flexible Hiring Models for Blockchain Developers",
      description: "",
      pricingPlans: blockchainPricingPlans,
    },
  };
  const currentData = mapToRender[pathname];
  return (
    <div className="container mx-auto">
      <div className="sm:w-[90%] w-full mx-auto xl:py-24 md:py-16 py-8 px-4 flex items-center flex-col gap-4 md:gap-6 end-to-end">
        <div>
          <div className="endTO_text solutions">
            <h2 className="!w-full p-0 uppercase">{currentData.title}</h2>
          </div>
          <div className="endTO_text_content home_sec2_txt4">
            <p className="!text-[1.2rem]">{currentData.description}</p>
          </div>
        </div>

        <div className="hire_sec1_service_50 reveal">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentData.pricingPlans.map((plan, index) => (
              <div
                key={index}
                className="p-6 border-2 border-gray-400 rounded-xl shadow-lg bg-white hover:shadow-xl transition duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative">
                    <h3 className="text-xl font-semibold mb-4">{plan.title}</h3>
                    <hr className="border-themeColor border-2 w-1/4 absolute left-0 top-[92%] rounded-lg" />
                  </div>
                  <ul className="space-y-2">
                    {plan.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Image
                          className="w-[18px]"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cg clip-path='url(%23clip0_30_12)'%3E%3Ccircle cx='10' cy='10' r='10' fill='%23017eeb'/%3E%3Cpath d='M8.08102 13.9311C8.18816 14.0217 8.34951 14.0235 8.45897 13.9333C10.8471 11.9585 13.024 9.88733 15.6214 7.7973C15.8456 7.61698 15.9792 7.36482 15.9978 7.08682C16.0551 6.22275 14.9755 5.65693 14.2418 6.23531C12.0196 7.98443 10.1719 9.57103 8.44857 11.2108C8.1099 10.8884 7.65676 10.4271 7.09779 9.83522C6.66554 9.3777 5.88549 9.2986 5.36077 9.79257C4.89989 10.2261 4.8779 10.9221 5.31028 11.3773C6.35388 12.4751 7.00913 13.0229 8.08102 13.9311Z' fill='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_30_12'%3E%3Crect width='20' height='20' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"
                          alt="right"
                          width="15"
                          height="15"
                        />
                        <div className="">{benefit}</div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-end text-themeColor text-2xl font-bold">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
        <Button
          innerClassName="flex items-center justify-center gap-2 !py-1 !px-4"
          className="!bg-colorWhite hover:!bg-themeColor !text-colorBlack hover:!text-colorWhite"
          redirect="#section10_service"
          label="Hire Full Stack React.js Developers"
          icon={
            <div className="w-[25px]">
              <img
                decoding="async"
                loading="lazy"
                src="/images/hire-hand.png"
                alt="hand"
                width="20"
                height="30"
              />
            </div>
          }
          scrollingButton
        />
      </div>
    </div>
  );
};

export default HiringModels;
