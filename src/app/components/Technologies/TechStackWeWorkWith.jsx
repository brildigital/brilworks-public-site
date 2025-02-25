"use client";
import { useState } from "react";
import {
  faReact,
  faAngular,
  faVuejs,
  faNode,
  faJava,
  faPython,
  faPhp,
  faJs,
  faHtml5,
  faCss3Alt,
  faAws,
  faMicrosoft,
  faDocker,
} from "@fortawesome/free-brands-svg-icons";
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

function TechStackWeWorkWith() {
  const [activeTab, setActiveTab] = useState("frontend");
  const data = [
    {
      title: "Frontend",
      value: "frontend",
      items: [
        { label: "ReactJS", icon: faReact, color: "#61DBFB" },
        { label: "AngularJS", icon: faAngular, color: "#DD0031" },
        { label: "VueJS", icon: faVuejs, color: "#42B883" },
      ],
    },
    {
      title: "Backend",
      value: "backend",
      items: [
        { label: "NodeJS", icon: faNode, color: "#68A063" },
        { label: "Java", iconifyIcon: "/images/java.svg" },
        { label: "Python", iconifyIcon: "/images/python.svg" },
        { label: "PHP", icon: faPhp, color: "#777BB4" },
      ],
    },
    {
      title: "Languages",
      value: "languages",
      items: [
        { label: "JavaScript", icon: faJs, color: "#F7DF1E" },
        {
          label: "TypeScript",
          iconifyIcon: "/images/typescript.svg",
        },
        { label: "HTML", icon: faHtml5, color: "#E34F26" },
        { label: "CSS", icon: faCss3Alt, color: "#1572B6" },
      ],
    },
    {
      title: "Databases",
      value: "databases",
      items: [
        {
          label: "MongoDB",
          iconifyIcon: "/images/mongodb.svg",
        },
        {
          label: "PostgreSQL",
          iconifyIcon: "/images/postgresql.svg",
        },
        { label: "MySQL", iconifyIcon: "/images/mysql.svg" },
      ],
    },
    {
      title: "Cloud & DevOps",
      value: "cloud-devops",
      items: [
        { label: "AWS", iconifyIcon: "/images/aws.svg" },
        { label: "Azure", iconifyIcon: "/images/azure.svg" },
        { label: "Docker", icon: faDocker, color: "#2496ED" },
        { label: "Kubernetes", iconifyIcon: "/images/kubernetes.svg" },
      ],
    },
  ];

  return (
    <div className="mx-auto w-[85%] xl:py-[6rem] md:py-[4rem] py-[2rem] workpadd_borderTop end-to-end !mt-10 ">
      <div className="end-To-end reveal">
        <div className="endTO_text solutions flex flex-col gap-2">
          <h2 className="!w-full p-0">Tech Stack We Work With</h2>
          {/* <p className="md:text-xl text-base md:text-center text-left">
            We don’t just write React code – we engineer user addiction. Here’s
            what sets us apart:
          </p> */}
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
          {data.map(({ title, value }) => (
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
          {data.map(({ value, items }) => (
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
