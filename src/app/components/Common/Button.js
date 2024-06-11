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
  ...props
}) => {
  return (
    <button
      type={type ? type : "button"}
      className={[
        `common-button gap-2 outline-none overflow-hidden whitespace-nowrap`,
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
        <Link href={redirect ? redirect : "/contact-us/"}>
          {icon}
          {label}
        </Link>
      )}
    </button>
  );
};

export default Button;
