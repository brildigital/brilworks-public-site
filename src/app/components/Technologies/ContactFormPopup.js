import React, { useEffect } from "react";
import { IconButton } from "@material-tailwind/react";
import { X } from "lucide-react";
import PortfolioContactForm from "../Portfolio/PortfolioContactForm";
import Image from "next/image";
import Heading from "../HTMLComponents/Heading";

const ContactFormPopup = ({ open, handleClose }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"; // disable background scroll
    } else {
      document.body.style.overflow = ""; // reset to default
    }

    // cleanup if component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="popup fixed inset-0 z-50 flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-black/50" onClick={handleClose} />

        <div className="relative z-10 w-full max-w-[1200px] rounded-lg bg-white shadow-lg p-6 !pb-3  md:pt-10">
          <IconButton
            size="sm"
            variant="text"
            className="!absolute right-1 top-1 outline-none focus:outline-none hover:bg-gray-100 md:hidden flex"
            onClick={handleClose}
          >
            <X className="h-5 w-5" />
          </IconButton>

          <div className="flex flex-col lg:flex-row items-center lg:gap-10 md:gap-6 gap-4">
            <div className="lg:w-1/2 w-full">
              <Heading
                type="h2"
                className="text-colorBlack lg:!text-[34px] md:!text-3xl !text-2xl mb-4"
                data="Connect With Us to Get a 48 Hours Risk-Free Trial"
              />
              <p className="text-colorBlack md:text-lg text-base !mb-4">
                You're just a step away from creating exceptional business
                ideas. This case study reveals how Brilworks assists successful
                companies in extending their tech teams.
              </p>
              <p className="text-colorBlack lg:text-2xl md:text-xl text-lg font-medium !mb-4">
                Enter the details to proceed.
              </p>
              <PortfolioContactForm
                phoneRequired={true}
                messageField={true}
                darkMode={false}
              />
            </div>
            <div className="lg:w-1/2 md:w-full hidden md:flex">
              <IconButton
                size="sm"
                variant="text"
                className="!absolute right-3.5 top-4 outline-none focus:outline-none hover:bg-gray-100 "
                onClick={handleClose}
              >
                <X className="h-5 w-5" />
              </IconButton>
              <Image
                className="rounded-2xl"
                src="/images/v2/team-contact.webp"
                alt="img-c"
                width="565"
                height="620"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactFormPopup;
