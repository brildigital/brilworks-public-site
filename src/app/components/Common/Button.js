import React from "react";
import "../../styles/Common-component.scss";
import Link from "next/link";

const Button = ({
  type,
  label,
  icon,
  redirect,
  variant = "primary",
  className,
  innerClassName,
  ...props
}) => {
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
          {icon}
          {label}
        </div>
      ) : (
        <Link
          href={redirect ? redirect : "/contact-us/"}
          className={innerClassName}
        >
          {icon === "right-arrow" ? (
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
            icon
          )}
          {label}
        </Link>
      )}
    </button>
  );
};

export default Button;
