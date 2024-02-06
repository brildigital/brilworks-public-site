"use client";

const CaseStudyContent = ({ data }) => {
  return (
    <div className="portfolio mt-[6rem] mx-auto h-[100vh]">
      <iframe
        src={`${data?.content?.content?.filename}#toolbar=0&navpanes=0&scrollbar=0`}
        frameBorder="0"
        scrolling="auto"
        height="100%"
        width="100%"
      ></iframe>
    </div>
  );
};

export default CaseStudyContent;
