"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import "../../styles/tab-sticky-style.scss";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TabVerticalSticky = ({
  sectionId, // Add sectionId prop to make each instance unique
  data,
  borderRight = true,
  rightSideOnlyImage = false,
}) => {
  const containerRef = useRef(null);

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

    // Process links in reverse order to ensure the correct section is highlighted
    Array.from(links)
      .reverse()
      .forEach((link) => {
        const targetId = link.getAttribute("data-target");
        const targetEl = document.querySelector(targetId);
        if (!targetEl) return;

        const topPos = targetEl.getBoundingClientRect().top + window.scrollY;

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

            // Update content
            sectionItem.innerHTML = targetEl.innerHTML;

            activeFound = true;
          }
        }
      });

    // If no section was active, default to the first
    if (!activeFound && links.length > 0) {
      container.querySelectorAll(".anchor-links li").forEach((li, idx) => {
        li.classList[idx === 0 ? "add" : "remove"]("active");
      });

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
  }, [sectionId]);

  return (
    <div className="flex w-full" ref={containerRef}>
      <div
        className={`md:w-1/2 main-section-padding md:!pt-10 !pt-6 ${
          borderRight ? "border-r border-r-[#2B3138]" : ""
        }`}
      >
        <aside className="stickysection__sidebar flex items-start justify-start w-full">
          <ul className="anchor-links w-full">
            {data.map(({ title, value }, index) => (
              <li
                className={`${
                  index === 0 ? "active" : ""
                } justify-start md:!pl-10 md:!py-7.5 !py-4 rounded-l-2xl md:gap-5 gap-2 !w-full`}
                key={index}
              >
                <div
                  data-target={`#${value}`} // Changed from id to data-target
                  className="anchor-link flex items-center justify-start gap-5 lg:text-2xl md:text-xl text-lg break-words text-start text-colorWhite"
                >
                  <p
                    className={`numeric flex items-center justify-center lg:w-10 lg:h-10 md:w-8 md:h-8 font-semibold rounded-full lg:text-2xl md:text-xl`}
                  >
                    {index + 1}
                  </p>
                  &nbsp;
                  {title}
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <div className="md:w-1/2 main-section-padding md:!pt-10 !pt-6">
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
                  <h3 className="md:text-2xl text-lg font-medium md:pb-3 pb-2 text-colorWhite">
                    {data?.[0]?.title}
                  </h3>
                  <p className="md:text-lg text-base md:pb-5 pb-4 text-colorWhite">
                    {data?.[0]?.description}
                  </p>
                  {data?.[0]?.service &&
                    data?.[0]?.service.map(({ title, redirect }, index) => (
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
                </>
              )}
            </div>
          </div>
          {data.map(
            ({ title, description, value, imageSrc, service }, index) => (
              <div
                id={value}
                className="stickysection__item flex items-start justify-start w-full"
                key={value}
              >
                <div className="w-full rounded-2xl lg:mb-10 mb-8 stickysection__item">
                  <Image
                    src={imageSrc}
                    width={830}
                    height={350}
                    alt={`${value}-icon`}
                    sizes="(max-width: 767px) 414px, 830px"
                  />
                </div>
                {!rightSideOnlyImage && (
                  <div>
                    <h3 className="md:text-2xl text-lg font-medium md:pb-3 pb-2 text-colorWhite">
                      {title}
                    </h3>
                    <p className="md:text-lg text-base md:pb-5 pb-4 text-colorWhite">
                      {description}
                    </p>
                    {service &&
                      service.map(({ title, redirect }, index) => (
                        <div className="group" key={index}>
                          <Link
                            href={redirect}
                            className="flex items-center justify-start bg-clip-text text-transparent group-hover:text-white bg-theme-gradient duration-300 pb-2"
                          >
                            {title}&nbsp;
                            <FontAwesomeIcon
                              className="group-hover:text-white text-[#00DBD3]"
                              size="lg"
                              icon={faArrowRight}
                            />
                          </Link>
                        </div>
                      ))}
                  </div>
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
