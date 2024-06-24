import React from "react";
import "../../styles/Common-component.scss";
import Link from "next/link";
import { scrollToSection } from "../lib/commonFunction";

const Button = ({
  type,
  label,
  icon,
  redirect,
  variant = "primary",
  className,
  scrollingButton,
  innerClassName,
  ...props
}) => {
  const buttonIcon =
    icon === "right-arrow" ? (
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 24 24"
        height="24px"
        width="24px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="none" d="M0 0h24v24H0V0z"></path>
        <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
      </svg>
    ) : (
      <>
        {icon === "right-arrow-next" ? (
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 448 512"
            height="22px"
            width="22px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
          </svg>
        ) : (
          icon
        )}
      </>
    );
  return (
    <button
      type={type ? type : "button"}
      className={[
        `common-button gap-2 outline-none overflow-hidden whitespace-nowrap transition-all duration-300`,
        `button-${variant}`,
        className,
      ].join(" ")}
      {...props}
    >
      {type === "submit" ? (
        <div className="flex items-center justify-center gap-2">
          {buttonIcon}
          {label}
        </div>
      ) : (
        <Link
          className={innerClassName}
          href={redirect ? redirect : "/contact-us/"}
          onClick={
            scrollingButton
              ? (e) => scrollToSection(e, redirect.replace("#", ""))
              : ""
          }
          {...props}
        >
          {icon === "right-arrow-next" ? (
            <>
              {label}
              {buttonIcon}
            </>
          ) : (
            <>
              {buttonIcon}
              {label}
            </>
          )}
        </Link>
      )}
    </button>
  );
};

export default Button;
