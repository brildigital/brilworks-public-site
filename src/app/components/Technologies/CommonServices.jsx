import React from "react";
import Button from "../Common/Button";

export default function CommonServices({ title = "", services = [] }) {
  return (
    <div className="mx-auto service_width xl:py-[2rem] md:py-[1.5rem] py-[1rem] workpadd_borderTop end-to-end">
      <div className="grid md:grid-cols-5 grid-cols-1 gap-6 md:flex-row justify-between">
        <div className="end-To-end md:col-span-2">
          <div className="endTO_text solutions">
            <h2 className="!w-full p-0 uppercase text-left">{title}</h2>
          </div>
        </div>

        <div className="service_grid_img reveal md:col-span-3">
          <div className="flex flex-col overflow-y-auto md:h-[500px] custom-scrollbar md:gap-[40px] gap-[10px] ">
            {services.map(({ imgSrc, title, description }, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6">
                <div className="basis-[15%]">
                  <div className="flex md:justify-end">
                    <img
                      className="max-w-[48px] object-cover"
                      decoding="async"
                      loading="lazy"
                      src={imgSrc}
                      alt={title}
                    />
                  </div>
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 0{index + 1}.</div>
                  <div className="service_title">
                    <h3>{title}</h3>
                  </div>
                  <div className="py-4">
                    <p>{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center xl:pt-[2rem] md:pt-[1.5rem] pt-[1rem]">
        <Button
          innerClassName="flex items-center justify-center gap-2"
          className="!pr-5"
          redirect="#section10_service"
          label="Get A Quote For Your Project"
          scrollingButton
          icon={
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="24px"
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C6.486 2 2 5.589 2 10c0 2.908 1.898 5.515 5 6.934V22l5.34-4.005C17.697 17.852 22 14.32 22 10c0-4.411-4.486-8-10-8zm0 14h-.333L9 18v-2.417l-.641-.247C5.67 14.301 4 12.256 4 10c0-3.309 3.589-6 8-6s8 2.691 8 6-3.589 6-8 6z"></path>
              <path d="M7 7h10v2H7zm0 4h7v2H7z"></path>
            </svg>
          }
        />
      </div>
    </div>
  );
}
