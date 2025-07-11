"use client";
import { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Heading from "../HTMLComponents/Heading";

function TechStackWeWorkWith({
  bgClass = "bg-themeLight",
  active = "",
  techStackList = [],
}) {
  const [activeTab, setActiveTab] = useState(active);

  return (
    <div className={bgClass}>
      <div className="container max-w-[1280px] main-section-padding mx-auto reveal">
        <Heading
          type="h2"
          className="lg:!text-[34px] md:!text-3xl !text-2xl"
          text="Tech Stack We Work With"
        />
        <Tabs
          className="tech-stack-working sxl:pt-10 md:pt-7.5 pt-5 reveal"
          orientation="horizontal"
          value={activeTab}
        >
          <TabsHeader
            className={`border border-borderGray md:flex-row flex-col ${
              bgClass === "bg-themeLight"
                ? "bg-colorWhite rounded-md"
                : "bg-themeLight rounded-[30px]"
            }`}
          >
            {techStackList.map(({ title, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
                className={`font-Figtree m-1 ${
                  activeTab === value
                    ? `sm:bg-transparent !bg-themeColor text-white font-medium sxl:text-xl text-lg md:text-xl ${
                        bgClass === "bg-themeLight"
                          ? "rounded-md"
                          : "rounded-[30px]"
                      }`
                    : "text-lg md:text-xl"
                }`}
              >
                {title}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {techStackList.map(({ value, items }) => (
              <TabPanel
                className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 w-full p-0 sxl:pt-10 md:pt-7.5 pt-5"
                key={value}
                value={value}
              >
                {items.map(({ label, icon, color, iconifyIcon }, index) => (
                  <div
                    className="flex flex-col gap-4 items-center border bg-white border-borderGray rounded-2xl hover:-translate-y-2 duration-500 sxl:p-10 md:p-7.5 p-5"
                    key={index}
                  >
                    {iconifyIcon ? (
                      <Image
                        className="w-[75px] h-[75px] object-contain"
                        src={iconifyIcon}
                        alt="icon"
                        height={75}
                        width={75}
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={icon}
                        size="5x"
                        style={{ color }}
                      />
                    )}
                    <p className="font-Figtree text-colorBlack md:text-xl text-lg font-medium">
                      {label}
                    </p>
                  </div>
                ))}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </div>
  );
}

export default TechStackWeWorkWith;
