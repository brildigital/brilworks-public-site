"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import parse from "html-react-parser";
import { notNewTabRedirect } from "../lib/constants";
import FetchDataSpinner from "../Homepage/FetchDataSpinner";
import {
  convertParamsToString,
  formatPhoneNumber,
} from "../lib/commonFunction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useMediaQuery } from "react-responsive";

const TeamAuthor = ({ authorName }) => {
  const [author, setAuthor] = useState(null);
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  const fetchAuthorData = async () => {
    try {
      const response = await fetch(
        `https://api.storyblok.com/v2/cdn/stories/teams/${authorName}?version=draft&token=gasBbmVVImrrTRQLlShorwtt&cv=1725958144`
      );
      const data = await response.json();
      setAuthor(data.story.content);
    } catch (error) {
      console.error("Error fetching author data:", error);
    }
  };

  useEffect(() => {
    fetchAuthorData();
  }, [authorName]);

  function modifyImagesWithLazyLoading(html) {
    return parse(html, {
      replace: (node, index) => {
        if (node.type === "tag" && node.name === "img") {
          node.attribs.loading = "lazy";
          node.attribs.decoding = "async";
          node.attribs.width = "736";
          node.attribs.height = "200";
          node.attribs.alt = "banner-image";
        }

        if (node.type === "tag" && node.name === "a") {
          if (!notNewTabRedirect.includes(node.attribs.href)) {
            node.attribs.target = "_blank";
          }
          if (
            node.attribs.href &&
            !node.attribs.href.includes("brilworks.com")
          ) {
            node.attribs.rel = "nofollow noopener";
          } else {
            node.attribs.rel = "noopener";
          }
        }
        return node;
      },
    });
  }

  function extractParenthesesText(text) {
    const match = text.match(/\(([^)]+)\)/); // Regex to extract content inside parentheses
    return match ? match[1] : text; // Return the match or null if not found
  }

  if (!author) {
    return (
      <div className="flex align-middle justify-center p-28">
        <FetchDataSpinner />
      </div>
    );
  }

  const brilworksServices = [
    {
      title: "Mobile App Development",
      pageUrl: "/application-development-services/",
      description:
        "From MVPs to scalable apps, we build for iOS and Android using technologies like Flutter Flow and React Native.",
    },
    {
      title: "Generative AI & ML",
      pageUrl: "/generative-ai-development-services/",
      description:
        "Automate processes, gain insights, and enhance decision-making with AI-driven solutions.",
    },
    {
      title: "Custom Software",
      pageUrl: "/product-engineering-development-services/",
      description:
        "Develop tailored software for unique business needs, from web apps to enterprise platforms.",
    },
    {
      title: "Low-Code/No-Code",
      pageUrl: "/low-code-no-code-development-services/s",
      description:
        "Accelerate product development with platforms like Adalo and Builder.ai.",
    },
    {
      title: "Cloud & DevOps",
      pageUrl: "/aws-consulting-services/",
      description:
        "Enable cloud migrations and set up CI/CD pipelines for optimal app performance.",
    },
    {
      title: "IT Consulting & Team Augmentation",
      pageUrl: "/staff-augmentation/",
      description:
        "Scale your team with specialized talent or seek strategic tech advice.",
    },
  ];

  const myApproachData = [
    {
      title: "Understanding Your Business",
      description:
        "I deeply understand your business model, challenges, and objectives to recommend effective, cost-efficient technologies.",
    },
    {
      title: "End-to-End Support",
      description:
        "From consultation to completion and beyond, I offer ongoing guidance, support, and updates as your business evolves.",
    },
    {
      title: "Data-Driven Strategies",
      description:
        "I help businesses use data to make informed decisions, optimize workflows, and drive innovation through AI and analytics.",
    },
    {
      title: "Results-Oriented Solutions",
      description:
        "I focus on delivering measurable results—improving efficiency, reducing costs, and enhancing customer satisfaction to impact your business.",
    },
  ];

  return (
    <section>
      <div className="md:pt-[8rem] pt-[6rem]">
        <div className="container md:w-[90%] blog !mx-auto">
          <div
            className="w-full inline-flex flex-wrap items-center mb-3 px-[16px]"
            aria-label="Breadcrumb"
          >
            <span className="font-medium">
              <Link href="/">Brilworks</Link>
            </span>
            <span className="self-center md:mx-2 mx-1 mt-[2px]">
              <Image
                className="black_aerrow alignnone !w-[20px] size-full"
                src="/images/black_aerrow-1.png"
                alt="arrow"
                width="20"
                height="10"
              />
            </span>
            <span className="font-medium">
              <Link href={`/blog/author/${authorName}`}>
                {convertParamsToString(authorName)}
              </Link>
            </span>
          </div>
        </div>
        <div className="bg-themeLight">
          <div className="container md:w-[90%] !mx-auto">
            <div className="lg:px-6 md:py-10 px-4 py-8 flex xl:flex-row flex-col lg:gap-8 gap-6">
              <div>
                <div className="author-main-img w-fit">
                  <div className="border-[3px] rounded-full border-colorWhite">
                    <div className="xl:w-[150px] w-[100px] xl:h-[150px] h-[100px]">
                      <Image
                        src={author.Image.filename}
                        width="150"
                        height="150"
                        alt={author.Name}
                        priority
                        className="!rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="sxl:w-4/5 w-full">
                <div className="flex lg:items-center items-start justify-between mb-6">
                  <div>
                    <h2 className="font-bold md:text-[28px] text-2xl md:mb-2 mb-1">
                      {author?.Name}
                    </h2>
                    <div className="!font-medium md:text-lg text-colorGray">
                      {author?.Designation} at&nbsp;
                      <span className="text-themeColor font-medium">
                        Brilworks
                      </span>
                    </div>
                  </div>
                  <Link href={author?.author_linkedIn?.url} target="_blank">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      style={{ color: "#0077B5" }}
                      size={isMobile ? "2x" : "4x"}
                    />
                  </Link>
                </div>
                <p className="md:!text-[22px] !text-lg !leading-8">
                  {author?.AuthorData
                    ? modifyImagesWithLazyLoading(author.AuthorData)
                    : ""}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container md:w-[90%] !mx-auto">
          <div className="lg:px-6 lg:py-14 md:py-8 py-6 px-4 flex flex-col lg:gap-8 gap-6">
            <h2 className="lg:!text-[48px] !text-3xl lg:mb-10 md:mb-6 text-themeColor font-bold text-center">
              Brilworks Services
            </h2>
            <div className="w-full grid sxl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
              {brilworksServices.map((service, index) => (
                <div key={index}>
                  <h3 className="text-center !font-semibold lg:text-2xl text-xl mb-1">
                    <Link
                      href={service.pageUrl}
                      className="hover:!text-themeColor duration-200 ease-in-out"
                    >
                      {service.title}
                    </Link>
                  </h3>
                  <p className="sxl:w-4/5 md:w-[90%] w-full mx-auto text-center text-colorGray lg:text-[22px] text-xl !leading-7">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-themeLight">
          <div className="container md:w-[90%] !mx-auto">
            <div className="lg:px-6 lg:py-14 md:py-8 py-6 px-4 flex flex-col lg:gap-8 gap-6">
              <div className="md:mb-8 mb-6">
                <h2 className="lg:!text-[48px] !text-3xl text-themeColor font-bold text-center mb-4">
                  My Approach
                </h2>
                <p className="lg:w-3/5 md:w-4/5 w-full mx-auto text-center text-colorGray lg:text-[22px] text-xl !leading-7">
                  As the {extractParenthesesText(author?.Designation)} of
                  Brilworks, my approach is centered around long-term
                  partnerships and creating sustainable value for our clients.
                  Here’s how I achieve that:
                </p>
              </div>
              <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-8">
                {myApproachData.map((approach, index) => (
                  <div key={index}>
                    <h3 className="text-center !font-semibold lg:text-2xl text-xl">
                      {approach.title}
                    </h3>
                    <p className="lg:w-4/5 w-full mx-auto text-center text-colorGray lg:text-[22px] text-xl !leading-7">
                      {approach.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#151B21]">
          <div className="container md:w-[90%] !mx-auto">
            <div className="lg:px-6 lg:py-16 md:py-12 py-10 px-4 flex lg:flex-row flex-col sxl:gap-20 gap-10 md:w-11/12 w-full mx-auto">
              <div className="md:max-w-[324px] w-fit">
                <Image
                  className="w-full"
                  src="/images/Goal-icon.webp"
                  width="324"
                  height="319"
                  alt="target-icon"
                />
              </div>
              <div className="w-full">
                <h2 className="text-themeColor font-semibold sxl:text-[70px] md:text-5xl text-4xl mb-5">
                  Reach Out to Me
                </h2>
                <p className="sxl:w-4/5 w-full text-colorWhite lg:text-[22px] text-xl md:!leading-8 !mb-5">
                  I’m always available for a conversation on how we can
                  collaborate and achieve your business goals.
                </p>
                <div className="w-full flex items-center justify-start 2xl:flex-row flex-col gap-5">
                  <a
                    href={`mailto:${author?.email}`}
                    target="_blank"
                    className="2xl:w-11/12 w-full border-themeColor border-2 rounded-full"
                  >
                    <div className="flex items-center justify-between py-[10px] pl-5 pr-3">
                      <div className="flex items-center gap-4">
                        <div>
                          <Image
                            className="!w-[32px]"
                            src="/images/team-mail-icon.png"
                            width="32"
                            height="32"
                            alt="whatsapp-icon"
                          />
                        </div>

                        <div className="font-semibold text-xl !leading-5 text-colorWhite">
                          {author?.email}
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <Image
                          className="w-[40px]"
                          src="/images/arrow-down-theme.svg"
                          width="42"
                          height="42"
                          alt="arror-up-icon"
                        />
                      </div>
                    </div>
                  </a>
                  <Link
                    href={`https://wa.me/${author.whatsapp}`}
                    target="_blank"
                    className="2xl:w-4/5 w-full border-themeColor border-2 rounded-full"
                  >
                    <div className="flex items-center justify-between py-[10px] pl-5 pr-3">
                      <div className="flex items-center gap-4">
                        <div>
                          <Image
                            className="w-[32px]"
                            src="/images/team-whatsapp.png"
                            width="32"
                            height="32"
                            alt="whatsapp-icon"
                          />
                        </div>

                        <div className="font-semibold text-xl !leading-5 text-colorWhite">
                          {formatPhoneNumber(author?.whatsapp)}
                        </div>
                      </div>
                      <div className="flex items-center justify-end">
                        <Image
                          className="w-[40px]"
                          src="/images/arrow-down-theme.svg"
                          width="42"
                          height="42"
                          alt="arror-up-icon"
                        />
                      </div>
                    </div>
                  </Link>
                  <button className="2xl:w-3/4 w-full bg-themeColor py-[14px] rounded-full font-semibold text-xl !leading-8 text-colorWhite border-2 border-themeColor hover:bg-transparent">
                    <Link href="/contact-us/">Book Free Consultation</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamAuthor;
