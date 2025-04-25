const CaseStudyContent = ({ data }) => {
  return (
    <div className="portfolio mt-[5.1rem] mx-auto h-screen">
      {data?.content && (
        <iframe
          src={`${data?.content?.content?.filename}#toolbar=0&navpanes=0&scrollbar=0`}
          frameBorder="0"
          scrolling="auto"
          height="100%"
          width="100%"
        ></iframe>
      )}
    </div>
  );
};

export default CaseStudyContent;
