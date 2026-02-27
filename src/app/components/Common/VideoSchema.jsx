import React from "react";

const VideoSchema = ({ schema }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: schema }}
    />
  );
};

export default VideoSchema;
