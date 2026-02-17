/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import Heading from "../HTMLComponents/Heading";
import PortfolioBanner from "./PortfolioBanner";
import { formatSrcUrl } from "../lib/commonFunction";

const CTASection = dynamic(() => import("../Common/CTASection"));
const ToolsAndGetInTouch = dynamic(() => import("./ToolsAndGetInTouch"));

const Portfolio = ({ caseStudyData }) => {
  return (
    <>
      <PortfolioBanner />
      <section className="container max-w-[1280px] main-section-padding mx-auto">
        <Heading
          type="h2"
          className="lg:!text-[34px] md:!text-3xl !text-2xl "
          text="Our Recent Work"
        />
        <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-10 lg:pt-10 md:pt-8 pt-5">
          {caseStudyData?.length ? (
            caseStudyData?.map(({ name, content, full_slug }, index) => {
              return (
                <div
                  className={`min-w-[300px] overflow-hidden h-full rounded-t-2xl w-fit flex flex-col ${
                    index % 2 ? "md:mt-18 lg:mt-28 mt-0" : ""
                  }`}
                  key={index}
                >
                  <Link href={`/${full_slug}/`} prefetch={true}>
                    <div className="relative group">
                      <Image
                        className="rounded-2xl lg:max-h-[400px] transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                        src={formatSrcUrl(content?.images?.[0]?.filename)}
                        alt={`casestudy-${index}`}
                        width="302"
                        height="240"
                        sizes="(min-width: 1040px) 42.35vw, (min-width: 640px) 60.84vw, calc(100vw - 30px)"
                      />
                      <Image
                        className="w-[56px] absolute bottom-3 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        src="/images/v2/read-icon.svg"
                        alt="Read Icon"
                        width="56"
                        height="56"
                      />
                    </div>
                    <div className="flex flex-col justify-between flex-1 py-4 items-start">
                      <div className="w-full flex items-center justify-between">
                        <Heading
                          className="md:!text-xl !text-lg font-medium"
                          type="h3"
                          text={content?.title}
                        />
                        <div className="md:text-xl text-lg font-bold text-themeColor"></div>
                      </div>
                      <p className="text-colorGray md:text-lg text-base">
                        {content?.description?.split(" ")?.length > 31
                          ? content?.description
                              ?.split(" ")
                              ?.slice(0, 25)
                              ?.join(" ") + "..."
                          : content?.description}
                      </p>
                    </div>
                  </Link>

                  <div className="flex md:flex-row flex-col md:items-center justify-between items-start gap-2">
                    <p className="bg-clip-text text-transparent bg-theme-gradient md:text-xl text-lg font-medium uppercase">
                      {content?.industry}
                    </p>
                    <div className="flex items-center md:gap-2.5 gap-1.5">
                      {content?.technology?.map((data) => (
                        <div
                          className="bg-white md:px-4 px-2.5 py-1.5 md:py-[9px] border rounded-md"
                          key={data}
                        >
                          {data}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="flex items-center justify-center py-20">
              <p>No case studies found.</p>
            </div>
          )}
        </div>
      </section>
      <CTASection
        description="Tell us your project idea and get a free consultation to create an outstanding digital product."
        buttonText="Let’s Discuss"
      />
      <ToolsAndGetInTouch />
    </>
  );
};

export default Portfolio;
