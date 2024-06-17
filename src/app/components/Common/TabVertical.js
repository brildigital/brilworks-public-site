"use client";
import React, { useState } from "react";
import Image from "next/image";
import "../../styles/Services.scss";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { useMediaQuery } from "react-responsive";
import { usePathname } from "next/navigation";

const TabVertical = ({ initialTabValue, data }) => {
  const pathname = usePathname();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [tabValue, setTabValue] = useState(initialTabValue);

  return (
    <Tabs
      id="custom-animation"
      value={initialTabValue}
      orientation="vertical"
      className="services"
    >
      <div className="flex w-full md:px-0 px-4">
        <div className="md:w-1/3 w-[35%] rounded-l-[30px] bg-themeColor lg:pl-[7%] md:pl-6 md:pr-0 pr-4 lg:pr-8 py-8">
          <div className="flex flex-col">
            <div className="flex md:items-center md:justify-center lg:justify-start md:pr-6 lg:pl-2 pl-2 lg:pr-0">
              <h3 className="xl:!text-5xl lg:!text-4xl md:!text-3xl text-xl font-bold text-center md:my-8 my-2 regular-font-family text-colorWhite">
                {pathname === "/ai-ml-development-services/" && "Industries"}
              </h3>
            </div>

            <TabsHeader>
              {data.map(({ title, iconSrc, value }) => (
                <Tab
                  key={value}
                  value={value}
                  onClick={() => setTabValue(value)}
                  className="flex items-start justify-start"
                >
                  <div className="flex md:items-center items-baseline justify-start lg:mb-10 mb-4 mt-2">
                    {tabValue === value ? (
                      <div className="lg:w-[60px] w-[20px] h-[2px] bg-colorWhite fixed md:left-0 left-4 md:block hidden"></div>
                    ) : (
                      ""
                    )}
                    {!isMobile && (
                      <div className="lg:mr-4 mr-2 flex-shrink-0">
                        <Image
                          className="invert"
                          src={iconSrc}
                          width={24}
                          height={24}
                          alt="tab-icon"
                        />
                      </div>
                    )}
                    <p
                      className={`lg:text-xl md:text-lg text-base regular-font-family break-words text-start text-colorWhite ${
                        tabValue === value ? "font-bold" : "font-normal"
                      }`}
                    >
                      {title}
                    </p>
                  </div>
                </Tab>
              ))}
            </TabsHeader>
          </div>
        </div>
        <div className="w-2/3 bg-[#c2f7ee] rounded-r-[30px]">
          <TabsBody
            animate={{
              initial: { x: 250 },
              mount: { x: 0 },
              unmount: { x: 250 },
            }}
          >
            {data.map(({ value, imageSrc, heading, listDescription }) => (
              <TabPanel key={value} value={value} className="md:p-6">
                <div className="w-full rounded-[20px] lg:mb-5 mb-3">
                  <Image
                    src={imageSrc}
                    width={830}
                    height={350}
                    alt={`${value}-icon`}
                    sizes="(max-width: 767px) 414px, 830px"
                  />
                </div>
                <div className="lg:px-8 md:px-4 px-1">
                  <h3 className="md:text-2xl text-lg font-bold text-black pb-4 regular-font-family">
                    {heading}
                  </h3>
                  <ul className="md:text-xl text-base text-colorGray list-outside list-disc">
                    {listDescription?.map((listData, index) => (
                      <li key={index} className="pb-1 regular-font-family">
                        {listData}
                      </li>
                    ))}
                  </ul>
                </div>
              </TabPanel>
            ))}
          </TabsBody>
        </div>
      </div>
    </Tabs>
  );
};

export default TabVertical;
