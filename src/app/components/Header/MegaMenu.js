import {
  Menu,
  MenuHandler,
  MenuItem as MaterialMenuItem,
  MenuList,
} from "@material-tailwind/react";
import React from "react";
import MenuItem from "./MenuItem";

const MegaMenu = ({ setOpenNav, name, heading, menuItems, pathname }) => {
  return (
    <Menu
      placement="bottom"
      dismiss={{ itemPress: true, ancestorScroll: true }}
      allowHover={true}
      lockScroll
    >
      <MenuHandler>
        <MaterialMenuItem
          tabIndex={-1}
          className="flex items-end !w-[unset] outline-none p-0"
        >
          <div
            onClick={(e) => {
              e.preventDefault();
              setOpenNav(false);
            }}
            className={`group/item flex items-center header_font ${
              pathname.includes("/portfolio/")
                ? "hover:text-themeColor"
                : "hover:text-themeColor"
            }`}
          >
            <p
              className={`!mb-0  ${
                pathname.includes("/portfolio/")
                  ? "group-hover/item:text-themeColor"
                  : "group-hover/item:text-themeColor"
              } uppercase`}
            >
              {name}
            </p>
            <svg
              className="w-4 h-2 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </div>
        </MaterialMenuItem>
      </MenuHandler>
      <MenuList
        dismissible
        className="flex items-start z-10 w-full pb-20 menu-shadow outline-none overflow-y-auto rounded-none bg-[#f2f5f7] !top-[70px]"
      >
        <div
          className={`flex xl:ml-[15%] p-5 outline-none w-full ${
            pathname?.includes("/portfolio/")
              ? "container max-w-[1300px] px-10 mx-auto"
              : ""
          }`}
        >
          {heading && (
            <div className={`font-semibold text-base w-40 pt-2 font-Inter`}>
              {heading}
            </div>
          )}
          <div
            className={`mega-menu-items-group p-3 pl-16 ${
              heading ? "border-l-2" : ""
            }`}
          >
            {menuItems.map((mainSection) => (
              <div key={mainSection?.name} className="flex flex-col gap-3">
                <span
                  className={`font-semibold text-base break-words font-Inter`}
                >
                  {mainSection?.name}
                </span>
                <div className="flex flex-col">
                  {mainSection?.subSections
                    .filter((subSection) => !subSection?.hideInHeader)
                    .map((subSection) => (
                      <MaterialMenuItem
                        key={subSection?.name}
                        className="mega_menu_txt w-fit !p-0"
                      >
                        <MenuItem
                          name={subSection?.name}
                          path={subSection?.path}
                          onClick={() => setOpenNav(false)}
                        />
                      </MaterialMenuItem>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </MenuList>
    </Menu>
  );
};

export default MegaMenu;
