"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const TabVerticalDark = ({
  initialTabValue,
  data,
  borderRight = true,
  rightSideOnlyImage = false,
}) => {
  const [tabValue, setTabValue] = useState(initialTabValue);

  return (
    <Tabs id="custom-animation" value={initialTabValue} orientation="vertical">
      <div className="flex w-full">
        <div
          className={`md:w-1/2 main-section-padding md:!pt-10 !pt-6 ${
            borderRight ? "border-r border-r-[#2B3138]" : ""
          }`}
        >
          <div className="flex flex-col">
            <TabsHeader className="!p-0 w-full z-0">
              {data.map(({ title, description, value }, index) => (
                <Tab
                  key={value}
                  value={value}
                  onClick={() => setTabValue(value)}
                  className={`flex items-start justify-start p-0 w-full font-Figtree ${
                    tabValue === value ? "tab-bg-gradient rounded-l-2xl" : ""
                  }`}
                >
                  <div
                    className={`flex ${
                      rightSideOnlyImage ? "md:items-start" : "md:items-center"
                    } justify-start md:pl-10 md:py-7.5 py-4 rounded-l-2xl md:gap-5 gap-2 !w-full`}
                  >
                    <div>
                      <p
                        className={`flex items-center justify-center lg:w-10 lg:h-10 md:w-8 md:h-8 font-semibold rounded-full lg:text-2xl md:text-xl ${
                          tabValue === value
                            ? "bg-white text-colorBlack"
                            : "bg-[#17283E] text-colorWhite"
                        }`}
                      >
                        {index + 1}
                      </p>
                    </div>

                    <div className={rightSideOnlyImage ? "" : "lg:!w-[300px]"}>
                      <p
                        className={`lg:text-2xl md:text-xl text-lg break-words text-start text-colorWhite`}
                      >
                        {title}
                      </p>
                      {rightSideOnlyImage && tabValue === value && (
                        <p className="md:text-lg text-base pt-4 text-left text-colorWhite">
                          {description}
                        </p>
                      )}
                    </div>

                    {/* {tabValue === value && (
                      <Image
                        src="/images/v2/active-tab-pointer.svg"
                        alt="active-pointer"
                        className="w-6 h-6"
                        width="24"
                        height="24"
                      />
                    )} */}
                  </div>
                </Tab>
              ))}
            </TabsHeader>
          </div>
        </div>
        <div className="md:w-1/2 main-section-padding md:!pt-10 !pt-6 sticky top-0">
          <TabsBody
            animate={{
              initial: { x: 250 },
              mount: { x: 0 },
              unmount: { x: 250 },
            }}
            className={`z-0 ${rightSideOnlyImage ? "h-[660px]" : "h-[540px]"}`}
          >
            {data.map(({ title, value, imageSrc, description, service }) => (
              <TabPanel
                key={value}
                value={value}
                className="p-0 font-Figtree text-white"
              >
                {rightSideOnlyImage ? (
                  <div className="w-full rounded-2xl lg:mb-10 mb-8">
                    <Image
                      src={imageSrc}
                      width={830}
                      height={350}
                      alt={`${value}-icon`}
                      sizes="(max-width: 767px) 414px, 830px"
                    />
                  </div>
                ) : (
                  <>
                    <div className="w-full rounded-2xl lg:mb-10 mb-8">
                      <Image
                        src={imageSrc}
                        width={830}
                        height={350}
                        alt={`${value}-icon`}
                        sizes="(max-width: 767px) 414px, 830px"
                      />
                    </div>
                    <div>
                      <h3 className="md:text-2xl text-lg font-medium md:pb-3 pb-2">
                        {title}
                      </h3>
                      <p className="md:text-lg text-base md:pb-5 pb-4">
                        {description}
                      </p>
                      {service &&
                        service.map(({ title, redirect }, index) => (
                          <div className="group" key={index}>
                            <Link
                              href={redirect}
                              className="flex items-center justify-start bg-clip-text text-transparent group-hover:text-white bg-theme-gradient duration-300 pb-2"
                            >
                              {title}&nbsp;&nbsp;
                              <FontAwesomeIcon
                                className="group-hover:text-white text-[#00DBD3]"
                                size="lg"
                                icon={faArrowRight}
                              />
                            </Link>
                          </div>
                        ))}
                    </div>
                  </>
                )}
              </TabPanel>
            ))}
          </TabsBody>
        </div>
      </div>
    </Tabs>
  );
};

export default TabVerticalDark;
