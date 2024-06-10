import React from "react";
import "../../styles/Common-component.scss";
import Link from "next/link";

const Button = ({
  label,
  icon,
  redirect,
  variant = "primary",
  className,
  ...props
}) => {
  return (
    <button
      type="button"
      className={[
        `common-button gap-2 outline-none overflow-hidden whitespace-nowrap`,
        `button-${variant}`,
        className,
      ].join(" ")}
      {...props}
    >
      <Link href={redirect ? redirect : "/contact-us/"}>
        {icon}
        {label}
      </Link>
    </button>
  );
};

export default Button;
