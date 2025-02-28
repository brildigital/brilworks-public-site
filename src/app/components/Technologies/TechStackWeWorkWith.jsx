"use client";
import { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Card,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

function TechStackWeWorkWith({ active = "", techStackList = [] }) {
  const [activeTab, setActiveTab] = useState(active);

  return (
    <div className="mx-auto w-[85%] xl:pt-[6rem] md:pt-[4rem] pt-[2rem] workpadd_borderTop end-to-end !mt-10 ">
      <div className="end-To-end reveal">
        <div className="endTO_text solutions flex flex-col gap-2">
          <h2 className="!w-full p-0 uppercase">Tech Stack We Work With</h2>
        </div>
      </div>
      <Tabs className="reveal" value={activeTab}>
        <TabsHeader
          className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 sm:flex-row flex-col items-center"
          indicatorProps={{
            className:
              "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
          }}
        >
          {techStackList.map(({ title, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={
                activeTab === value
                  ? "bg-gray-200 sm:bg-transparent sm:border-b-2 border-themeColor text-themeColor font-semibold  text-lg md:text-xl"
                  : " text-lg md:text-xl"
              }
            >
              {title}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {techStackList.map(({ value, items }) => (
            <TabPanel
              className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 w-full"
              key={value}
              value={value}
            >
              {items.map(({ label, icon, color, iconifyIcon }, index) => (
                <div
                  className="flex flex-col gap-2 items-center border-2 border-transparent hover:border-gray-200 hover:-translate-y-1 duration-300 px-3 py-5 rounded-lg"
                  key={index}
                >
                  {iconifyIcon ? (
                    <Image
                      className="w-[75px] h-[75px]"
                      src={iconifyIcon}
                      alt="icon"
                      height={75}
                      width={75}
                    />
                  ) : (
                    <FontAwesomeIcon icon={icon} size="5x" style={{ color }} />
                  )}
                  <p className="text-lg sm:text-xl font-semibold">{label}</p>
                </div>
              ))}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}

export default TechStackWeWorkWith;
