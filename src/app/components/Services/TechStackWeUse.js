"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

const TechStackWeUse = () => {
  const pathname = usePathname();
  const AIMLTechStack = [
    {
      title: "Python",
      imageSrc: "/images/python-logo.svg",
    },
    {
      title: "Kubernetes",
      imageSrc: "/images/kubernetes-seeklogocom.webp",
    },
    {
      title: "Big Data",
      imageSrc: "/images/big-data-1.webp",
    },
    {
      title: "Machine Learning",
      imageSrc: "/images/machine-learning-tech.webp",
    },
    {
      title: "AWS",
      imageSrc: "/images/aws-tech.webp",
    },
    {
      title: "OpenCV",
      imageSrc: "/images/open-cv.webp",
    },
    {
      title: "Databricks",
      imageSrc: "/images/data-brick-logo.svg",
    },
    {
      title: "Azure",
      imageSrc: "/images/azure-tech.svg",
    },
    {
      title: "Grafana",
      imageSrc: "/images/grafana-tech.webp",
    },
    {
      title: "DevOps",
      imageSrc: "/images/devops-tech.webp",
    },
    {
      title: "Oracle",
      imageSrc: "/images/oracle-tech.webp",
    },
    {
      title: "TensorFlow",
      imageSrc: "/images/tensorflow-tech.svg",
    },
    {
      title: "Pandas",
      imageSrc: "/images/pandas-tech.webp",
    },
    {
      title: "Tableau",
      imageSrc: "/images/tableau.webp",
    },
    {
      title: "API",
      imageSrc: "/images/integration.webp",
    },
    {
      title: "Jupyter",
      imageSrc: "/images/jupyter-tech.webp",
    },
    {
      title: "Scikit-Learn",
      imageSrc: "/images/scikit-learn-tech.webp",
    },
    {
      title: "ETL",
      imageSrc: "/images/etl-tech.webp",
    },
  ];

  const DevOpsTechStack = [
    {
      title: "Terraform",
      imageSrc: "/images/terraform-svgrepo-com.png",
    },
    {
      title: "Jenkins",
      imageSrc: "/images/jenkins-svgrepo-com.png",
    },
    {
      title: "GitLab",
      imageSrc: "/images/machine-learning-tech.png",
    },
    {
      title: "Github",
      imageSrc: "/images/github-svgrepo-com.png",
    },
    {
      title: "Bitbucket",
      imageSrc: "/images/bitbucket-svgrepo-com.png",
    },
    {
      title: "Docker",
      imageSrc: "/images/docker-svgrepo-com.png",
    },
    {
      title: "Kubernetes",
      imageSrc: "/images/kubernetes-seeklogocom.webp",
    },
    {
      title: "DynamoDB",
      imageSrc: "/images/aws-dynamodb-svgrepo-com.png",
    },
    {
      title: "NeptuneDB",
      imageSrc: "/images/Neptune.png",
    },
    {
      title: "Keyspaces",
      imageSrc: "/images/Keyspaces.png",
    },
    {
      title: "Git",
      imageSrc: "/images/git-icon.png",
    },
    {
      title: "Mercurial",
      imageSrc: "/images/mercurial.png",
    },
    {
      title: "RDS",
      imageSrc: "/images/aws-rds.png",
    },
    {
      title: "AWS",
      imageSrc: "/images/aws-tech.webp",
    },
  ];

  const showTechStack = {
    "/ai-ml-development-services/": AIMLTechStack,
    "/devops-consulting-services/": DevOpsTechStack,
    "/digital-experience-services/": AIMLTechStack,
  };

  return (
    <div className="container md:w-[90%] w-full mx-auto md:py-12 pb-14">
      <div className="!rounded-2xl">
        <h2 className="md:text-center text-left ml-4 !mb-8">
          Tech Stack We Use
        </h2>
        <div className="reveal">
          <div
            className={`flex flex-wrap md:gap-5 gap-3 justify-center mx-auto mb-[20px] ${
              pathname === "/devops-consulting-services/" ? "w-full md:w-4/5" : ""
            }`}
          >
            {showTechStack[pathname].map(({ title, imageSrc }, index) => (
              <div
                className="flex items-center justify-center flex-col border border-[#8F9998] rounded-2xl shadow-none hover:shadow-lg md:p-6 p-4 md:w-[200px] w-[150px]"
                key={index}
              >
                <Image
                  src={imageSrc}
                  alt={`${title}-icon`}
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
