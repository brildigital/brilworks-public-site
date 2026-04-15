import {
  Menu,
  MenuHandler,
  MenuItem as MaterialMenuItem,
  MenuList,
} from "@material-tailwind/react";
import React from "react";
import MenuItem from "./MenuItem";

const MegaMenu = ({ setOpenNav, name, heading, menuItems, pathname }) => {
  const isCompact = true;

  return (
    <Menu
      placement={isCompact ? "bottom-start" : "bottom"}
      dismiss={{ itemPress: true, ancestorScroll: true }}
      allowHover={true}
      lockScroll={false}
      offset={isCompact ? 15 : 0}
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
            className="group/item flex items-center header_font hover:text-themeColor"
          >
            <p className="!mb-0 group-hover/item:text-themeColor font-normal">
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
        className={`z-[9999] outline-none bg-white border border-[#e5e7eb] !p-0 ${
          isCompact
            ? "!w-auto rounded-xl shadow-lg"
            : "w-full rounded-none border-t menu-shadow"
        }`}
      >
        <div
          className={`outline-none ${
            isCompact
              ? "p-6"
              : "container max-w-[1280px] mx-auto md:px-10 px-5 py-8"
          }`}
        >
          {heading && (
            <div className="font-bold text-xs tracking-[0.1em] uppercase text-[#6b7280] !mb-6">
              {heading}
            </div>
          )}
          <div
            className={`flex gap-y-8 ${
              isCompact ? "gap-x-12" : "gap-x-16 justify-center flex-wrap"
            }`}
          >
            {menuItems.map((mainSection) => (
              <div
                key={mainSection?.name || Math.random()}
                className="flex flex-col min-w-[140px]"
              >
                {mainSection?.name && (
                  <span className="font-bold text-sm text-[#212121] tracking-[-0.2px] !mb-3">
                    {mainSection.name}
                  </span>
                )}
                <div className="flex flex-col gap-0.5">
                  {mainSection?.subSections
                    .filter((subSection) => !subSection?.hideInHeader)
                    .map((subSection) => (
                      <MaterialMenuItem
                        key={subSection?.name}
                        className="!p-0 !bg-transparent hover:!bg-transparent"
                      >
                        <MenuItem
                          name={subSection?.name}
                          path={subSection?.path}
                          onClick={() => setOpenNav(false)}
                          className="text-[15px] text-[#6b7280] hover:text-themeColor transition-colors py-1.5 block"
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
