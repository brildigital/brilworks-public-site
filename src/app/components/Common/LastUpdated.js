import React from "react";

const LastUpdated = ({ date }) => {
  if (!date) return null;

  const formatted = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="container max-w-[1280px] mx-auto px-5 md:px-10">
      <p className="text-sm text-[#6b7280] mt-4">
        Last updated: {formatted}
      </p>
    </div>
  );
};

export default LastUpdated;
