"use client";
import React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Drawer,
  IconButton,
} from "@material-tailwind/react";
import { Icon } from "../lib/commonFunction";
import { menuItems } from "../lib/constants";
import MenuItem from "./MenuItem";

const SideMenu = ({ open, close }) => {
  const [openSection, setOpenSection] = React.useState(0);

  const handleOpen = (value) => {
    setOpenSection(openSection === value ? 0 : value);
  };

  const megaMenuNavList = (
    <ul className="pt-4 flex flex-col md:mb-0 md:mt-0 items-left">
      {menuItems.map((menuItem, index) => (
        <li key={menuItem.name}>
          {!menuItem?.isMegaMenu ? (
            <div
              className={`menu_txt1 ${
                menuItem?.path === "/contact-us/" ? "!border-b-0" : ""
              }`}
            >
              <MenuItem
                name={menuItem?.name}
                path={menuItem?.path}
                onClick={close}
              />
            </div>
          ) : (
            <Accordion
              open={openSection === index}
              icon={<Icon id={index} open={openSection} />}
            >
              <AccordionHeader
                onClick={() => handleOpen(index)}
                className={`group/item accordion-title py-6 hover:!text-themeColor ${
                  openSection === index ? "border-none" : ""
                }`}
              >
                <p className="group-hover/item:text-themeColor">
                  {menuItem.name}
                </p>
              </AccordionHeader>
              <AccordionBody
                className={
                  openSection === index ? "border-b border-gray-500" : ""
                }
              >
                {menuItem?.menuItems?.map((subMenu) => (
                  <div
                    key={subMenu.name}
                    className="menu_mob_flex mega-menu-content flex flex-col gap-3 !items-start"
                  >
                    <p>{subMenu.name}</p>
                    <div className="flex flex-col menu_mob_flex mega-menu-content !items-start gap-2">
                      {subMenu.subSections.map((subMenuItem) => (
                        <MenuItem
                          key={subMenuItem?.name}
                          name={subMenuItem?.name}
                          path={subMenuItem?.path}
                          onClick={close}
                          className="!text-3xl"
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </AccordionBody>
            </Accordion>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <Drawer
      open={open}
      placement="right"
      size={"100vw"}
      className="overflow-y-scroll z-[9999] bg-white"
      onClose={close}
      transition={{
        duration: 1,
      }}
      overlayProps={{
        className: "!bg-black/50 z-[9998]",
      }}
    >
      <IconButton
        variant="text"
        className="absolute right-2 md:right-8 lg:right-10 top-4 md:top-6 lg:top-4"
        ripple={false}
        onClick={close}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          className="h-8 w-8"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </IconButton>
      <div className="w-[88%] mx-auto md:pt-8 py-4">
        <div className="flex md:flex-row flex-col md:gap-12 lg:gap-20 gap-8">
          <div className="basis-3/5">{megaMenuNavList}</div>
          <div className="basis-2/5">
            <div className="header_img1 py-4 hidden-xs">
              <Image
                className="block md:hidden"
                src="/images/blog-2.webp"
                alt="fintech"
                width="250"
                height="150"
                sizes="(max-width: 767px) 100vw, 250px"
              />
              <Image
                className="hidden md:block"
                src="/images/blog-2.webp"
                alt="fintech"
                width="491"
                height="276"
                sizes="(max-width: 767px) 100vw, 491px"
              />
            </div>
            <div className="header_img1">
              <Image
                className="block md:hidden"
                src="/images/blog-1.webp"
                alt="Healthcare"
                width="250"
                height="150"
                sizes="(max-width: 767px) 100vw, 250px"
              />
              <Image
                className="hidden md:block"
                src="/images/blog-1.webp"
                alt="Healthcare"
                width="491"
                height="276"
                sizes="(max-width: 767px) 100vw, 491px"
              />
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default SideMenu;
