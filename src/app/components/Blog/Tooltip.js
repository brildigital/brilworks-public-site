"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Tooltip = ({ blogAuthor, targetRef }) => {
  const pathname = usePathname();
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleSelection = () => {
      const selection = window.getSelection();
      const isTabletScreen = window.innerWidth;
      if (
        selection.rangeCount > 0 &&
        selection.type === "Range" &&
        targetRef.current.contains(selection.anchorNode) &&
        isTabletScreen > 979
      ) {
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        setPosition({
          top: rect.top + window.pageYOffset,
          left: rect.left + window.pageXOffset + rect.width / 2,
        });
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    document.addEventListener("selectionchange", handleSelection);

    return () => {
      document.removeEventListener("selectionchange", handleSelection);
    };
  }, [targetRef]);

  const handleCopyClick = () => {
    const selection = window.getSelection();
    const selectedText = selection.toString();
    navigator.clipboard.writeText(selectedText);
    setIsVisible(false); // Hide the tooltip after copying
  };

  return isVisible ? (
    <div
      style={{
        position: "absolute",
        top: position.top,
        left: position.left,
        transform: "translate(-50%, -100%)",
        padding: "8px",
        backgroundColor: "#333",
        color: "#fff",
        borderRadius: "4px",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className="flex items-center justify-center flex-wrap">
        <button
          onClick={handleCopyClick}
          className="scale-125 mx-2"
          title="Copy text"
        >
          <FontAwesomeIcon icon={faCopy} />
        </button>
        <Link
          target="_blank"
          title="Share on Facebook"
          href={`http://www.facebook.com/sharer.php?u=https://www.brilworks.com${pathname}`}
          className="!mx-2"
        >
          <img
            decoding="async"
            loading="lazy"
            src="/images/fb_tooltip.svg"
            alt="Facebook blog share"
          />
        </Link>
        <Link
          target="_blank"
          className="!mx-2"
          title="Share on Twitter"
          href={`https://twitter.com/share?url=https://www.brilworks.com${pathname
            .split("")
            .splice(0, pathname.length - 1)
            .join("")}&text="${window
            .getSelection()
            .toString()}"-${blogAuthor}`}
        >
          <img
            decoding="async"
            loading="lazy"
            src="/images/twitter_x_tooltip.svg"
            alt="Twitter blog share"
          />
        </Link>
        <Link
          target="_blank"
          className="!mx-2"
          title="Share on LinkedIn"
          href={`https://www.linkedin.com/sharing/share-offsite/?url=https://www.brilworks.com${pathname}`}
        >
          <img
            decoding="async"
            loading="lazy"
            src="/images/linkedin_tooltip.svg"
            alt="LinkedIn blog share"
          />
        </Link>
      </div>
    </div>
  ) : null;
};

export default Tooltip;
