import Link from "next/link";
import React from "react";

const LinkWithArrow = ({ href, label, className }) => {
  return (
    <Link
      href={href}
      className={`flex items-center ${className} gap-5 about_btn transition lg:mt-10 mt-4`}
    >
      <div className="about_txt">
        <p className="change_link text-[21px] uppercase lg:!tracking-[5px] !tracking-[2px] font-Inter">
          {label}
        </p>
      </div>
      <div className="aerrow relative">
        <img
          decoding="async"
          loading="lazy"
          className="black_aerrow alignnone wp-image-28 size-full"
          src="/images/black_aerrow-1.png"
          alt="arrow"
          width="46"
          height="18"
        />
        <img
          decoding="async"
          loading="lazy"
          className="gradiant_aerrow alignnone wp-image-29 size-full"
          src="/images/arrow-gradiant.png"
          alt="arrow"
          width="46"
          height="18"
        />
      </div>
    </Link>
  );
};

export default LinkWithArrow;
