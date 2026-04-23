"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Heading from "../HTMLComponents/Heading";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const TechStackWeUse = () => {
  const pathname = usePathname();
  const StaffAugmentation = [
    {
      title: "React",
      imageSrc: "/images/React-icon.png",
    },
    {
      title: "Angular",
      imageSrc: "/images/Angular.png",
    },
    {
      title: "Vue.js",
      imageSrc: "/images/Vue.png",
    },
    {
      title: "Node.js",
      imageSrc: "/images/Node-logo.png",
    },
    {
      title: "Python",
      imageSrc: "/images/python-logo.svg",
    },
    {
      title: "MySQL",
      imageSrc: "/images/MySql.png",
    },
    {
      title: "PostgreSQL",
      imageSrc: "/images/postgresql-svgrepo.png",
    },
    {
      title: "MongoDB",
      imageSrc: "/images/mongodb-svgrepo.png",
    },
    {
      title: "AWS",
      imageSrc: "/images/aws-tech.webp",
    },
    {
      title: "Figma",
      imageSrc: "/images/figma.png",
    },
    {
      title: "Adobe XD",
      imageSrc: "/images/adobe-xd.png",
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
      title: "Kubernetes",
      imageSrc: "/images/kubernetes-seeklogocom.webp",
    },
    {
      title: "DevOps",
      imageSrc: "/images/devops-tech.webp",
    },
    {
      title: "Tableau",
      imageSrc: "/images/tableau.webp",
    },
    {
      title: "DynamoDB",
      imageSrc: "/images/aws-dynamodb-svgrepo-com.png",
    },
  ];

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
      title: "RDS",
      imageSrc: "/images/aws-rds.png",
    },
    {
      title: "AWS",
      imageSrc: "/images/aws-tech.webp",
    },
  ];

  const DigitalExperienceTechStack = [
    {
      title: "React",
      imageSrc: "/images/React-icon.png",
    },
    {
      title: "Angular",
      imageSrc: "/images/Angular.png",
    },
    {
      title: "Vue.js",
      imageSrc: "/images/Vue.png",
    },
    {
      title: "Node.js",
      imageSrc: "/images/Node-logo.png",
    },
    {
      title: "Python",
      imageSrc: "/images/python-logo.svg",
    },
    {
      title: "Pardot",
      imageSrc: "/images/pardot-img.png",
    },
    {
      title: "MySQL",
      imageSrc: "/images/MySql.png",
    },
    {
      title: "PostgreSQL",
      imageSrc: "/images/postgresql-svgrepo.png",
    },
    {
      title: "MongoDB",
      imageSrc: "/images/mongodb-svgrepo.png",
    },
    {
      title: "AWS",
      imageSrc: "/images/aws-tech.webp",
    },
    {
      title: "Azure",
      imageSrc: "/images/azure-tech.svg",
    },
    {
      title: "Figma",
      imageSrc: "/images/figma.png",
    },
    {
      title: "Sketch",
      imageSrc: "/images/sketch-svgrepo.png",
    },
    {
      title: "Adobe XD",
      imageSrc: "/images/adobe-xd.png",
    },
    {
      title: "Hubspot",
      imageSrc: "/images/hubspot-svgrepo.png",
    },
    {
      title: "GCS",
      imageSrc: "/images/gcp-svgrepo-com.png",
    },
    {
      title: "Marketo",
      imageSrc: "/images/marketo-svgrepo.png",
    },
    {
      title: "Google Analytics",
      imageSrc: "/images/google-analytics-svgrepo.png",
    },
    {
      title: "Adobe Analytics",
      imageSrc: "/images/adobe-analytics.png",
    },
  ];

  const AWSConsultingTechStack = [
    {
      title: "Terraform",
      imageSrc: "/images/terraform-svgrepo-com.png",
    },
    {
      title: "Jenkins",
      imageSrc: "/images/jenkins-svgrepo-com.png",
    },
    {
      title: "AWS Security Hub",
      imageSrc: "/images/aws-security.png",
    },
    {
      title: "AWS CloudFormation",
      imageSrc: "/images/aws-cloudformation.png",
    },
    {
      title: "Ansible",
      imageSrc: "/images/Ansible_logo.png",
    },
    {
      title: "CloudWatch",
      imageSrc: "/images/aws-cloudwatch.png",
    },
  ];

  const KubernetesConsultingTechStack = [
    {
      title: "Kubernetes",
      imageSrc: "/images/kubernetes-seeklogocom.webp",
    },
    {
      title: "Docker",
      imageSrc: "/images/docker-svgrepo-com.png",
    },
    {
      title: "AWS",
      imageSrc: "/images/aws-tech.webp",
    },
    {
      title: "ELK Stack",
      imageSrc: "/images/elk-stack.png",
    },
    {
      title: "Jenkins",
      imageSrc: "/images/jenkins-svgrepo-com.png",
    },
    {
      title: "GitLab CI/CD",
      imageSrc: "/images/machine-learning-tech.png",
    },
    {
      title: "Terraform",
      imageSrc: "/images/terraform-svgrepo-com.png",
    },
    {
      title: "Amazon (ECR)",
      imageSrc: "/images/ecr.png",
    },
  ];

  const showTechStack = {
    "/ai-ml-development-services/": AIMLTechStack,
    "/devops-consulting-services/": DevOpsTechStack,
    "/digital-experience-services/": DigitalExperienceTechStack,
    "/aws-consulting-services/": AWSConsultingTechStack,
    "/kubernetes-consulting-services/": KubernetesConsultingTechStack,
    "/staff-augmentation/": StaffAugmentation,
    "/hire-dedicated-software-development-team/": StaffAugmentation,
    "/rapid-digitalization/": StaffAugmentation,
  };

  return (
    <div className="container max-w-[1280px] mx-auto main-section-padding">
      <Heading
        type="h2"
        className="lg:!text-[34px] md:!text-3xl !text-2xl"
        text="Tech Stack We Use"
      />
      <Splide
        className="lg:!pt-10 md:!pt-7.5 !pt-5"
        options={{
          type: "loop",
          drag: "free",
          arrows: false,
          gap: 20,
          pagination: true,
          perPage: 4,
          autoScroll: {
            pauseOnHover: true,
            pauseOnFocus: false,
            rewind: false,
            speed: 1,
          },
          breakpoints: {
            1080: {
              perPage: 4,
            },
            1023: {
              perPage: 4,
              gap: 15,
            },
            767: {
              perPage: 3,
              gap: 10,
            },
            535: {
              perPage: 2,
              gap: 10,
            },
          },
        }}
        extensions={{ AutoScroll }}
      >
        {showTechStack[pathname]?.map(({ title, imageSrc }, index) => {
          return (
            <SplideSlide key={index}>
              <div className="honors-card !mb-10">
                <div className="award !p-0 !pb-1">
                  <div
                    key={title}
                    className="mx-auto max-w-[220px] lg:w-[220px] lg:h-[220px] max-h-[220px] flex flex-col items-center justify-center rounded-2xl lg:py-10 md:py-7.5 py-5"
                  >
                    <Image
                      className="w-auto md:mb-6 mb-4"
                      src={imageSrc}
                      width={100}
                      height={100}
                      alt={`${title} technology logo`}
                    />
                    <p className="md:text-lg text-base font-medium pt-5">
                      {title}
                    </p>
                  </div>
                </div>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default TechStackWeUse;
