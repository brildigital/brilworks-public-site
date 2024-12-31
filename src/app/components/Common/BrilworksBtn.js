"use client";
import Link from "next/link";

export const BrilworksButton = ({
  type,
  label,
  iconPosition,
  buttonIcon,
  redirect,
  variant = "primary",
  className,
  scrollingButton,
  innerClassName,
  ...props
}) => {
  return (
    <button
      type={type ? type : "button"}
      className={[
        `primary-btn gap-2 outline-none overflow-hidden whitespace-nowrap transition-all duration-300`,
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
          {iconPosition === "after" ? (
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
