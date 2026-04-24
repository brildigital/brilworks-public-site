import React from "react";

const LastUpdated = ({ date }) => {
  if (!date) return null;

  const formatted = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <p className="sr-only">Last updated: {formatted}</p>
  );
};

export default LastUpdated;
