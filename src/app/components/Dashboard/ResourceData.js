"use client";
import React, { useState } from "react";
import parse from "html-react-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "react-tooltip";
import { useSession } from "next-auth/react";
import FetchDataSpinner from "../Homepage/FetchDataSpinner";

const ResourceData = ({ data }) => {
  const [copied, setCopied] = useState(false);
  const { data: session } = useSession();

  const handleCopyUrl = () => {
    const currentUrl = window.location.href;
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1000);
      })
      .catch((err) => {
        console.error("Error copying URL to clipboard:", err);
      });
  };

  return (
    <div className="md:pt-[8rem] pt-[6rem] pb-8 blog-main bg-white technical-QA-page">
      {!data ? (
        <div className="flex items-center justify-center !py-60">
          <FetchDataSpinner />
        </div>
      ) : (
        <div className="container mx-auto my-0 !px-4">
          <div className="flex lg:flex-row-reverse flex-col md:flex-row flex-wrap ">
            <div className="w-full md:basis-auto md:px-3 max-w-full">
              <div className="border border-gray-300">
                <div className="flex items-center justify-between border-b border-gray-300">
                  <div>
                    <h2 className=" font-bold lg:text-3xl md:text-2xl text-xl p-4 break-words">
                      {data.name}
                    </h2>
                  </div>
                  {session?.user?.role === "ADMIN" && (
                    <div
                      id="copy-link"
                      className="pr-8 cursor-pointer text-base"
                      onClick={handleCopyUrl}
                    >
                      <FontAwesomeIcon
                        icon={faShareNodes}
                        style={{ color: "#000000", transform: "scale(1.5)" }}
                      />

                      <Tooltip
                        place="left"
                        anchorSelect="#copy-link"
                        content={copied ? "URL copied!" : "Copy URL"}
                      />
                    </div>
                  )}
                </div>

                <div className="p-4 tech-content break-words">
                  {parse(data?.content?.Content) || ""}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResourceData;
