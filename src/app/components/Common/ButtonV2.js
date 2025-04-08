import Link from "next/link";
import React from "react";
import "../../styles/button.scss";

const ButtonV2 = ({
  type,
  label,
  redirect,
  className,
  icon,
  variant = "primary",
  size = "medium",
  ...props
}) => {
  return type ? (
    <button
      type={type}
      className={[
        `c-button outline-none overflow-hidden whitespace-nowrap transition-all duration-300`,
        `c-btn-${variant} c-btn-${size}`,
        className,
      ].join(" ")}
      {...props}
    >
      {icon} {label}
    </button>
  ) : (
    <Link
      href={redirect || "/contact-us/"}
      className={[
        `c-button outline-none overflow-hidden whitespace-nowrap transition-all duration-300`,
        `c-btn-${variant} c-btn-${size}`,
        className,
      ].join(" ")}
    >
      {label}
    </Link>
  );
};

export default ButtonV2;
