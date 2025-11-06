"use client";
import { X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ButtonV2 from "../Common/ButtonV2";
import Heading from "../HTMLComponents/Heading";

const EbookPopup = ({ open, handleClose }) => {
  const ebookData = {
    title: (
      <>
        How To Launch an <br className="" />
        AI MVP in 48 Hours
      </>
    ),
    description: "",
    imageSrc: "/images/v2/launch-ai-mvp-48hr.webp",
    imageAlt: "launch-ai-mvp-in-48-hours",
    slug: "launch-ai-mvp-in-48-hours-playbook",
  };

  return (
    <AnimatePresence>
      <div className="fixed z-50 bottom-2 right-2 p-2">
        <motion.div
          key="ebook-popup"
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="relative z-10 w-full md:max-w-lg lg:max-w-xl max-h-[350px] rounded-xl overflow-hidden bg-white shadow-lg border pointer-events-auto"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-[40%] w-[80%]">
              <Image
                className="w-full drop-shadow-book-shadow mx-auto"
                src={ebookData.imageSrc}
                alt={`${ebookData.imageAlt}-img`}
                width={300}
                height={65}
              />
            </div>
            <div className="md:w-[60%] w-[20%]">
              <button
                className="p-1 flex rounded-md absolute right-2 top-2 outline-none hover:bg-gray-100"
                onClick={() => handleClose()}
              >
                <X className="h-5 w-5" />
              </button>
              <div>
                <span className="bg-themeLight px-3 py-1.5 rounded-md">
                  Ebook
                </span>
                <Heading
                  type="h3"
                  className="md:!text-xl !text-lg font-medium mt-3"
                  text={ebookData.title}
                />
                <p className="!my-3">
                  Downloaded by 120+ CTOs from
                  <br /> Startups and Enterprises
                </p>
              </div>
              <div className="flex items-center justify-between gap-5 mt-auto mb-4">
                <ButtonV2
                  className="hover:!bg-themeColor/90"
                  size="small"
                  as={`/ebooks/${ebookData.slug}/`}
                  redirect={`/ebooks/${ebookData.slug}`}
                  label="Unlock what’s inside"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default EbookPopup;
