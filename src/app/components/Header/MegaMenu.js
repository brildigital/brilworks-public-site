import {
  Menu,
  MenuHandler,
  MenuItem as MaterialMenuItem,
  MenuList,
} from "@material-tailwind/react";
import React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import MenuItem from "./MenuItem";

const MegaMenu = ({
  setOpenNav,
  name,
  heading,
  menuItems,
  pathname,
  theme,
  columns,
  footerNote,
  footerLink,
}) => {
  const isCompact = true;
  const isEnterprise = theme === "enterprise";

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
            className={`group/item flex items-center header_font ${
              isEnterprise
                ? "text-[#0B1E33] hover:text-[#2F6BFF]"
                : "hover:text-themeColor"
            }`}
            style={
              isEnterprise ? { fontFamily: "var(--font-body)" } : undefined
            }
          >
            <p
              className={`!mb-0 font-normal ${
                isEnterprise
                  ? "group-hover/item:text-[#2F6BFF]"
                  : "group-hover/item:text-themeColor"
              }`}
            >
              {name}
            </p>
            <ChevronDown className="w-4 h-4 ms-2" aria-hidden="true" />
          </div>
        </MaterialMenuItem>
      </MenuHandler>
      <MenuList
        dismissible
        className={`z-[9999] outline-none bg-white border ${
          isEnterprise ? "border-[#E4EAF1]" : "border-[#e5e7eb]"
        } !p-0 ${
          isCompact
            ? "!w-auto rounded-xl shadow-lg"
            : "w-full rounded-none border-t menu-shadow"
        } ${columns === 2 ? "min-w-[420px]" : ""}`}
      >
        <div
          className={`outline-none ${
            isCompact
              ? "p-6"
              : "container max-w-[1280px] mx-auto md:px-10 px-5 py-8"
          }`}
        >
          {heading && (
            <div
              className={`text-xs tracking-[0.1em] uppercase !mb-6 ${
                isEnterprise ? "text-[#2F6BFF]" : "text-[#6b7280]"
              }`}
              style={
                isEnterprise
                  ? { fontFamily: "var(--font-mono-enterprise)" }
                  : undefined
              }
            >
              {heading}
            </div>
          )}
          <div
            className={`flex gap-y-8 ${
              isCompact ? "gap-x-12" : "gap-x-16 justify-center flex-wrap"
            }`}
          >
            {menuItems.map((mainSection) => {
              return (
                <div
                  key={mainSection?.name || Math.random()}
                  className={`flex flex-col ${columns ? "w-full" : "min-w-[140px]"}`}
                >
                  {mainSection?.name &&
                    (isEnterprise ? (
                      <span
                        className={` text-[11px] tracking-[0.08em] uppercase !mb-3 ${
                          mainSection?.muted
                            ? "text-[#6B7A8A]"
                            : "text-[#2F6BFF]"
                        }`}
                        style={
                          isEnterprise
                            ? { fontFamily: "var(--font-body)" }
                            : undefined
                        }
                      >
                        {mainSection.name}
                      </span>
                    ) : (
                      <span
                        className="font-bold text-sm tracking-[-0.2px] !mb-3 text-[#212121]"
                        style={
                          isEnterprise
                            ? { fontFamily: "var(--font-body)" }
                            : undefined
                        }
                      >
                        {mainSection.name}
                      </span>
                    ))}
                  <div
                    className={
                      columns === 2
                        ? "grid grid-cols-2 gap-x-6 gap-y-2"
                        : "flex flex-col gap-0.5"
                    }
                  >
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
                            theme={theme}
                            className={`text-[15px] transition-colors py-1.5 block ${
                              isEnterprise
                                ? ""
                                : "text-[#6b7280] hover:text-themeColor"
                            }`}
                          />
                        </MaterialMenuItem>
                      ))}
                  </div>
                </div>
              );
            })}
          </div>
          {(footerNote || footerLink) && (
            <div
              className={`mt-4 pt-3 flex items-center justify-between gap-3 flex-wrap border-t ${
                isEnterprise ? "border-[#EEF2F8]" : "border-[#e5e7eb]"
              }`}
            >
              {footerNote && (
                <span
                  className={`text-xs ${isEnterprise ? "text-[#6B7A8A]" : "text-[#6b7280]"}`}
                  style={
                    isEnterprise
                      ? { fontFamily: "var(--font-body)" }
                      : undefined
                  }
                >
                  {footerNote}
                </span>
              )}
              {footerLink && (
                <Link
                  href={footerLink.path}
                  onClick={() => setOpenNav(false)}
                  className={`text-sm font-medium whitespace-nowrap ${
                    isEnterprise
                      ? "text-[#2F6BFF] hover:underline"
                      : "text-themeColor hover:underline"
                  }`}
                  style={
                    isEnterprise
                      ? { fontFamily: "var(--font-body)" }
                      : undefined
                  }
                >
                  {footerLink.name}
                </Link>
              )}
            </div>
          )}
        </div>
      </MenuList>
    </Menu>
  );
};

export default MegaMenu;
