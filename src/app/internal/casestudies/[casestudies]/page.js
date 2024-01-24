"use client";
import { usePathname } from "next/navigation";
import React from "react";

const page = () => {
  const pathname = usePathname();
  const caseStudiesView = {
    accelevent:
      "https://a.storyblok.com/f/219851/x/7a8ad88280/accelvents_eventtech.pdf",
    endo: "https://a.storyblok.com/f/219851/x/2d89c66e48/endo_health.pdf",
    nickacademy:
      "https://a.storyblok.com/f/219851/x/56b75c9118/nick-academy_childeducation.pdf",
    orokii: "https://a.storyblok.com/f/219851/x/fe5a358832/orokii_fintech.pdf",
    reliant:
      "https://a.storyblok.com/f/219851/x/1a86d23d3a/reliant_fintech.pdf",
    servicebuddy:
      "https://a.storyblok.com/f/219851/x/80b8cc1733/servicebuddy_fsm.pdf",
    trackimo: "https://a.storyblok.com/f/219851/x/499ac404a8/trackimo_gps.pdf",
    vugo: "https://a.storyblok.com/f/219851/x/7253c9892a/vugo_advertisment.pdf",
  };
  const lastWord = pathname.split("/").reverse()[1];
  const pdfLink = caseStudiesView[lastWord];

  return (
    <div className="portfolio mt-[6rem] mx-auto h-[100vh]">
      <iframe
        src={`${pdfLink}#toolbar=0&navpanes=0&scrollbar=0`}
        frameBorder="0"
        scrolling="auto"
        height="100%"
        width="100%"
      ></iframe>
    </div>
  );
};

export default page;
