/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";

import { useEffect, useState } from "react";
const TableOfContent = ({blogTableOfContent}) => {
  const [headings, setHeadings] = useState([]);
  const [activeLink,setActiveLink] = useState();

  const addTemporaryIDs = () => {
    (true)
    return new Promise((resolve) => {
      const headings = document.querySelectorAll("h2");
      headings.forEach((heading, index) => {
        heading.id = `temp-section-${index}`;
      });
      resolve();
     
    });
  };

  useEffect(() => {
    // Call the function and handle the promise
    addTemporaryIDs()
      .then(() => {
        console.log("Temporary IDs added to headings.");
       
      })
      .catch((error) => {
        console.error("Error adding temporary IDs:", error);
       
      });
  }, []);

  const parseHTML = (htmlString) => {

    return new Promise((resolve, reject) => {
      try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, "text/html");
        const headings = Array.from(doc.querySelectorAll("h2")).map(
          (heading) => {
            const level = parseInt(heading.tagName.slice(1), 10);
            const text = heading.textContent;
            return { level, text };
          }
        );
        resolve(headings);
        (false);
      } catch (error) {
        (false);
        reject(error);
      }
    });
  };

  useEffect(() => {
    const fetchHeadings = async () => {
      try {
        const parsedHeadings = await parseHTML(blogTableOfContent);
        setHeadings(parsedHeadings);
      } catch (error) {
        console.error("Error parsing HTML:", error);
      }
    };

    fetchHeadings();
  }, [blogTableOfContent]);

  const handleTableOfContentLinkClick = (e, index) => {
    setActiveLink(index);
    e.preventDefault();

    const targetId = e.target.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const headingPositions = headings.map((heading, index) => {
        const targetElement = document.getElementById(`temp-section-${index}`);

        if (targetElement) {
          return {
            id: `${index}`,
            offsetTop: targetElement.offsetTop,
          };
        }
        return null;
      });

      // Find the first heading whose offsetTop is greater than or equal to scrollY
      const activeHeadingIndex = headingPositions.find(
        (position) => position !== null && position.offsetTop >= scrollY
      );
      // Set the active link to the ID of the active heading
      if (activeHeadingIndex) {
        setActiveLink(activeHeadingIndex.id);
      }
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headings]);

  return (
    <div className={`${headings?.length ? "blog-tab-content" : "!hidden"}`}>
      <div className="flex justify-between !mb-5">
        <p>Table of Contents</p>
      </div>
      <ul className="max-h-[calc(100vh_-_300px)] overflow-auto">
        {/* {headings?.length ? ( */}
        {headings?.map((heading, index) => (
          <li key={index}>
            <Link
              href={`#temp-section-${index}`}
              onClick={(e) => handleTableOfContentLinkClick(e, index)}
              className={`${index == activeLink ? "page-active" : ""}`}
            >
              {heading.text}
            </Link>
          </li>
        ))}
        {/* ) : (
        <div className="flex align-middle justify-center py-16">
          <FetchDataSpinner />
        </div>
      )} */}
      </ul>
    </div>
  );
};

export default TableOfContent;
