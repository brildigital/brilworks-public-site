"use client";
import { getCalApi } from "@calcom/embed-react";

const CalPopupButton = ({ label, calLink, className }) => (
  <button
    className={className}
    onClick={async () => {
      const cal = await getCalApi({});
      cal("modal", {
        calLink: calLink ?? "vikas-singh-bril/30-min-product-eng-review",
        config: { theme: "light" },
      });
    }}
  >
    {label}
  </button>
);

export default CalPopupButton;
