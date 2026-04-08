"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { scrollToSection } from "../lib/commonFunction";
import ButtonV2 from "./ButtonV2";

const TabVerticalSticky = ({
  sectionId,
  data,
  darkMode = true,
  buttonText,
  borderRight = true,
  rightSideOnlyImage = false,
  imageOnLeft = false,
  useCaseSection = false,
}) => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const themeBorder = darkMode ? "border-r-[#2B3138]" : "border-r-borderGray";
  const themeBaseText = darkMode ? "text-white" : "";
  const borderPosition = imageOnLeft ? "border-l" : "border-r";

  const iconBG = [
    "bg-[#E5F4FF]",
    "bg-[#E9FFE2]",
    "bg-[#FFE8FC]",
    "bg-[#FFE2E5]",
    "bg-[#EAFFFD]",
    "bg-[#F4ECFF]",
    "bg-[#FCFFE3]",
    "bg-[#FEF3E6]",
    "bg-[#E5F4FF]",
    "bg-[#FFE2E5]",
  ];

  const handleScroll = () => {
    // Get the current component container
    const container = containerRef.current;
    if (!container) return;

    // Get links only from this container
    const links = container.querySelectorAll(".anchor-link");
    const scrollTop = window.scrollY;

    // Find the right content append container
    const contentAppend = container.querySelector(
      `.stickysection__contentappend-${sectionId}`
    );
    if (!contentAppend) return;

    const sectionItem = contentAppend.querySelector(".stickysection__item");
    if (!sectionItem) return;

    // Check if we found an active section
    let activeFound = false;
    let currentActiveIndex = 0;

    // Process links in reverse order to ensure the correct section is highlighted
    Array.from(links)
      .reverse()
      .forEach((link, reverseIndex) => {
        const targetId = link.getAttribute("data-target");
        const targetEl = document.querySelector(targetId);
        if (!targetEl) return;

        const topPos = targetEl.getBoundingClientRect().top + window.scrollY;
        const index = links.length - 1 - reverseIndex;
        // If we're scrolled to or past this element
        if (scrollTop >= topPos - 100) {
          // Added offset for better UX
          if (!activeFound) {
            // Clear active state from all links in this container
            container.querySelectorAll(".anchor-links li").forEach((li) => {
              li.classList.remove("active");
            });

            // Set this link as active
            link.parentElement.classList.add("active");
            currentActiveIndex = index;
            // Update content
            sectionItem.innerHTML = targetEl.innerHTML;

            activeFound = true;
          }
        }
      });
    if (activeFound) {
      setActiveIndex(currentActiveIndex);
    } else if (links.length > 0) {
      container.querySelectorAll(".anchor-links li").forEach((li, idx) => {
        li.classList[idx === 0 ? "add" : "remove"]("active");
      });
      setActiveIndex(0);

      const firstLink = links[0];
      const firstTargetId = firstLink.getAttribute("data-target");
      const firstTargetEl = document.querySelector(firstTargetId);

      if (firstTargetEl && sectionItem) {
        sectionItem.innerHTML = firstTargetEl.innerHTML;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll(); // Initial call to set initial state

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex w-full ${imageOnLeft ? "flex-row-reverse" : "flex-row"}`}
      ref={containerRef}
    >
      <div
        className={`${
          useCaseSection ? "md:w-2/5" : "md:w-1/2"
        } main-section-padding md:!pt-10 ${
          imageOnLeft ? "!pl-0" : "!pr-0"
        } !pt-6 ${borderRight ? `${borderPosition} ${themeBorder}` : ""}`}
      >
        <aside
          className={`stickysection__sidebar flex items-start justify-start w-full ${
            useCaseSection ? "p-4 bg-white rounded-2xl" : ""
          } `}
        >
          <ul className="anchor-links w-full">
            {data.map(({ title, value, description }, index) => (
              <li
                className={`flex ${index === 0 ? "active" : ""} ${
                  imageOnLeft ? "left-img" : ""
                } ${
                  useCaseSection
                    ? "rounded-2xl md:!pl-5 md:!py-6 !py-4"
                    : "md:!pl-10 md:!py-7.5 slg:!py-4 smallDesktop:!py-7.5 !py-4"
                } justify-start md:gap-5 gap-2 !w-full`}
                key={index}
              >
                <a
                  href={`#${value}`}
                  data-target={`#${value}`} // Changed from id to data-target
                  onClick={(e) => scrollToSection(e, value)}
                  className={`anchor-link lg:text-2xl md:text-xl text-lg break-words text-start ${
                    darkMode ? "text-colorWhite" : ""
                  }`}
                >
                  <div className="flex items-center justify-start gap-5 font-medium">
                    {!useCaseSection && (
                      <p
                        className={`${
                          darkMode ? "numeric" : "numeric-l"
                        } flex items-center justify-center lg:w-10 lg:h-10 md:w-8 md:h-8 font-semibold rounded-full lg:text-2xl md:text-xl`}
                      >
                        {index + 1}
                      </p>
                    )}
                    &nbsp;
                    {title}
                  </div>
                  {rightSideOnlyImage && activeIndex === index && (
                    <p className="md:text-lg text-base pt-4 text-left text-colorWhite pl-[60px]">
                      {description}
                    </p>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <div
        className={`${
          useCaseSection ? "md:w-3/5" : "md:w-1/2"
        } main-section-padding md:!pt-10 !pt-6`}
      >
        <div className="stickysection__content">
          <div
            className={`stickysection__contentappend-${sectionId} flex items-start`}
          >
            <div className="w-full stickysection__item">
              <Image
                src={data?.[0]?.imageSrc}
                width={830}
                height={350}
                alt={`${data?.[0]?.value}-icon`}
                sizes="(max-width: 767px) 414px, 830px"
                className="rounded-2xl lg:mb-10 mb-8"
              />
              {!rightSideOnlyImage && (
                <>
                  <h3
                    className={`md:text-2xl text-lg font-medium md:pb-3 pb-2 ${themeBaseText}`}
                  >
                    {data?.[0]?.innerTitle || data?.[0]?.title}
                  </h3>
                  <p
                    className={`md:text-lg slg:!text-base smallDesktop:!text-lg text-base md:pb-5 pb-4 ${themeBaseText}`}
                  >
                    {data?.[0]?.description}
                  </p>
                  {data?.[0]?.service &&
                    data?.[0]?.service.map(({ title, redirect }, index) => (
                      <div className="group" key={index}>
                        <Link
                          href={redirect}
                          className="flex items-center justify-start bg-clip-text text-transparent group-hover:text-white bg-theme-gradient duration-300 pb-2"
                        >
                          {title}
                          <FontAwesomeIcon
                            className="group-hover:text-white text-[#00DBD3] ml-2"
                            size="lg"
                            icon={faArrowRight}
                          />
                        </Link>
                      </div>
                    ))}
                  {buttonText && (
                    <ButtonV2
                      label={buttonText}
                      className={`!w-fit ${
                        darkMode ? "" : "hover:text-themeColor"
                      }`}
                    />
                  )}
                </>
              )}
            </div>
          </div>
          {data.map(
            (
              {
                title,
                description,
                value,
                imageSrc,
                imageAlt,
                service,
                processTags,
                innerTitle,
                btnText,
              },
              index
            ) => (
              <div
                id={value}
                className="stickysection__item flex items-start justify-start w-full"
                key={index}
              >
                <div className="w-full rounded-2xl lg:mb-10 slg:!mb-4 smallDesktop:!mb-10 mb-8 stickysection__item">
                  <Image
                    className="lg:w-3/4 smallDesktop:w-full rounded-2xl"
                    src={imageSrc}
                    width={830}
                    height={350}
                    alt={imageAlt || `${value}-icon`}
                    sizes="(max-width: 767px) 414px, 830px"
                  />
                </div>
                {!rightSideOnlyImage && (
                  <div>
                    <h3
                      className={`md:text-2xl text-lg font-medium md:pb-3 pb-2 ${themeBaseText}`}
                    >
                      {innerTitle || title}
                    </h3>

                    {Array.isArray(description) ? (
                      <div className="li-tick-mark">
                        <ul className={`md:pb-5 pb-4`}>
                          {description.map((item, index) => (
                            <li
                              key={index}
                              className={`blue small before:!top-1 !pb-3 md:text-lg text-base ${themeBaseText}`}
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <p
                        className={`md:text-lg slg:!text-base smallDesktop:!text-lg md:pb-5 pb-4 ${themeBaseText}`}
                      >
                        {description}
                      </p>
                    )}
                    {service?.map(({ title, redirect }, index) => (
                      <div className="group" key={index}>
                        <Link
                          href={redirect}
                          className="flex items-center justify-start bg-clip-text text-transparent text-lg group-hover:text-white bg-theme-gradient duration-300 pb-2"
                        >
                          {title}
                          <FontAwesomeIcon
                            className="group-hover:text-white text-[#00DBD3] ml-2"
                            size="lg"
                            icon={faArrowRight}
                          />
                        </Link>
                      </div>
                    ))}
                    {processTags && (
                      <div className="flex flex-wrap gap-2.5">
                        {processTags.map((data, index) => (
                          <p
                            key={index}
                            className={`${iconBG[index]} md:px-4 py-2.5 rounded-md w-fit text-base`}
                          >
                            {data}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                )}
                {buttonText && (
                  <ButtonV2
                    label={btnText || buttonText}
                    className={`!w-fit ${
                      darkMode ? "" : "hover:text-themeColor"
                    }`}
                  />
                )}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default TabVerticalSticky;
