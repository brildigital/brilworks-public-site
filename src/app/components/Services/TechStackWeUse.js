import Image from "next/image";
import React from "react";

const TechStackWeUse = () => {
  const upperRowIndustry = [
    {
      title: "Python",
      imageSrc: "/images/python-logo.svg",
      imageAlt: "python-icon",
    },
    {
      title: "Kubernetes",
      imageSrc: "/images/kubernetes-seeklogocom.webp",
      imageAlt: "kubernetes-icon",
    },
    {
      title: "Big Data",
      imageSrc: "/images/big-data-1.webp",
      imageAlt: "big-data-icon",
    },
    {
      title: "Machine Learning",
      imageSrc: "/images/machine-learning-tech.webp",
      imageAlt: "machine-learning-icon",
    },
    {
      title: "AWS",
      imageSrc: "/images/aws-tech.webp",
      imageAlt: "aws-icon",
    },
    {
      title: "OpenCV",
      imageSrc: "/images/open-cv.webp",
      imageAlt: "opencv-icon",
    },
    {
      title: "Databricks",
      imageSrc: "/images/data-brick-logo.svg",
      imageAlt: "data-brick-icon",
    },
    {
      title: "Azure",
      imageSrc: "/images/azure-tech.svg",
      imageAlt: "azure-icon",
    },
    {
      title: "Grafana",
      imageSrc: "/images/grafana-tech.webp",
      imageAlt: "grafana-icon",
    },
    {
      title: "DevOps",
      imageSrc: "/images/devops-tech.webp",
      imageAlt: "devops-icon",
    },
    {
      title: "Oracle",
      imageSrc: "/images/oracle-tech.webp",
      imageAlt: "oracle-icon",
    },
    {
      title: "TensorFlow",
      imageSrc: "/images/tensorflow-tech.svg",
      imageAlt: "tensorflow-icon",
    },
    {
      title: "Pandas",
      imageSrc: "/images/pandas-tech.webp",
      imageAlt: "pandas-icon",
    },
    {
      title: "Tableau",
      imageSrc: "/images/tableau.webp",
      imageAlt: "tableau-icon",
    },
    {
      title: "API",
      imageSrc: "/images/integration.webp",
      imageAlt: "api-icon",
    },
    {
      title: "Jupyter",
      imageSrc: "/images/jupyter-tech.webp",
      imageAlt: "jupyter-icon",
    },
    {
      title: "Scikit-Learn",
      imageSrc: "/images/scikit-learn-tech.webp",
      imageAlt: "scikit-icon",
    },
    {
      title: "ETL",
      imageSrc: "/images/etl-tech.webp",
      imageAlt: "etl-icon",
    },
  ];

  return (
    <div className="container md:w-[90%] w-full mx-auto md:py-12 pb-14">
      <div className="!rounded-2xl">
        <h2 className="md:text-center text-left ml-4 !mb-8">
          Tech Stack We Use
        </h2>
        <div className="reveal">
          <div className="flex flex-wrap md:gap-5 gap-3 justify-center mx-auto mb-[20px]">
            {upperRowIndustry.map(({ title, imageSrc, imageAlt }, index) => (
              <div
                className="flex items-center justify-center flex-col border border-[#8F9998] rounded-2xl shadow-none hover:shadow-lg md:p-6 p-4 md:w-[200px] w-[150px]"
                key={index}
              >
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  className="w-auto md:mb-6 mb-4"
                  width={60}
                  height={60}
                />

                <span className="text-center lg:text-2xl md:text-xl text-base">
                  {title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStackWeUse;
