"use client";

import Link from "next/link";
import { useEffect, useState, useCallback, useMemo } from "react";
import { TableOfContentSkeleton } from "./Blog/ArticleSkeleton";

const TableOfContent = ({ blogTableOfContent }) => {
  const [activeLink, setActiveLink] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const headings = useMemo(() => {
    if (typeof window === 'undefined') return [];
    const parser = new DOMParser();
    const doc = parser.parseFromString(blogTableOfContent, "text/html");
    return Array.from(doc.querySelectorAll("h2")).map((heading, index) => ({
      id: `temp-section-${index}`,
      text: heading.textContent,
    }));
  }, [blogTableOfContent]);

  useEffect(() => {
    const headingElements = document.querySelectorAll("h2");
    headingElements.forEach((heading, index) => {
      heading.id = `temp-section-${index}`;
    });
    setIsLoading(false);
  }, [headings]);

  const handleTableOfContentLinkClick = useCallback((e, index) => {
    e.preventDefault();
    setActiveLink(index);
    const targetElement = document.getElementById(`temp-section-${index}`);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const activeHeading = headings.findIndex((heading, index) => {
        const element = document.getElementById(`temp-section-${index}`);
        return element && element.offsetTop > scrollY;
      });
      setActiveLink(activeHeading > 0 ? activeHeading - 1 : 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headings]);

  if (isLoading) {
    return <TableOfContentSkeleton />;
  }

  if (headings.length === 0) return null;

  return (
    <div className="blog-tab-content">
      <div className="flex justify-between !mb-5">
        <p>Table of Contents</p>
      </div>
      <ul className="max-h-[calc(100vh_-_300px)] overflow-auto">
        {headings.map(({ id, text }, index) => (
          <li key={id}>
            <Link
              href={`#${id}`}
              onClick={(e) => handleTableOfContentLinkClick(e, index)}
              className={index === activeLink ? "page-active" : ""}
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContent;