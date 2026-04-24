"use client";
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import Heading from "../HTMLComponents/Heading";
import PortfolioBanner from "./PortfolioBanner";
import CTASection from "../Common/CTASection";
import ToolsAndGetInTouch from "./ToolsAndGetInTouch";
import { formatSrcUrl } from "../lib/commonFunction";
import { aiAgentCaseStudies } from "@/app/portfolio/ai-agents/[slug]/content";
import { trackEvent } from "../lib/tracking";

const Portfolio = ({ caseStudyData = [] }) => {
  const aiAgentCount = Object.keys(aiAgentCaseStudies).length;

  return (
    <>
      <PortfolioBanner caseStudyCount={caseStudyData?.length} />

      {/* AI AGENTS SPOTLIGHT */}
      <section className="bg-[#F4F8FC] border-b border-[#D9E3EF]">
        <div className="container max-w-[1280px] mx-auto md:px-10 px-5 py-14 md:py-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="md:max-w-[680px]">
              <p className="text-[#EA580C] uppercase tracking-[0.12em] text-xs font-semibold !mb-3">
                New · AI Agents
              </p>
              <Heading
                type="h2"
                className="text-[#0B2545] lg:!text-[30px] md:!text-2xl !text-xl font-semibold !mb-3"
                text={`${aiAgentCount} AI agent patterns we build and ship.`}
              />
              <p className="text-[#5A6B82] md:text-base text-sm leading-relaxed">
                Planning, content operations, research, finance, engineering,
                education, and media — each with the challenge it solves, how it
                works, outcomes, and honest fit criteria.
              </p>
            </div>
            <Link
              href="/portfolio/ai-agents/"
              prefetch={false}
              onClick={() => trackEvent("portfolio_ai_agents_spotlight_click")}
              className="inline-flex items-center gap-2 bg-[#0A4D8C] hover:bg-[#0B2545] text-white font-medium rounded-md px-5 py-3 text-sm md:text-base transition-colors self-start md:self-auto whitespace-nowrap"
            >
              Explore AI agent solutions
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* RECENT WORK */}
      <section
        id="recent-work"
        className="container max-w-[1280px] main-section-padding mx-auto scroll-mt-24"
      >
        <div className="flex items-end justify-between flex-wrap gap-4 !mb-8 md:!mb-10">
          <div>
            <Heading
              type="h2"
              className="lg:!text-[34px] md:!text-3xl !text-2xl"
              text="Our recent work"
            />
            <p className="text-colorGray md:text-base text-sm !mt-2">
              A slice of the products we've shipped with clients across fintech,
              healthtech, mobility, and SaaS.
            </p>
          </div>
        </div>

        <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-8 md:gap-10">
          {caseStudyData?.length ? (
            caseStudyData.map(({ name, content, full_slug }, index) => {
              const description = content?.description || "";
              const words = description.split(" ");
              const truncated =
                words.length > 25
                  ? words.slice(0, 25).join(" ") + "…"
                  : description;

              return (
                <Link
                  key={index}
                  href={`/${full_slug}/`}
                  prefetch={true}
                  onClick={() =>
                    trackEvent("portfolio_card_click", {
                      slug: full_slug,
                      position: index + 1,
                    })
                  }
                  className={`group flex flex-col h-full ${
                    index % 2 ? "md:mt-16 lg:mt-24" : ""
                  }`}
                >
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      className="rounded-2xl w-full lg:max-h-[400px] transition-transform duration-300 ease-in-out group-hover:scale-[1.03]"
                      src={formatSrcUrl(content?.images?.[0]?.filename)}
                      alt={`${content?.title || name} case study`}
                      width="302"
                      height="240"
                      sizes="(min-width: 1040px) 42.35vw, (min-width: 640px) 60.84vw, calc(100vw - 30px)"
                    />
                    <Image
                      className="w-[56px] absolute bottom-3 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      src="/images/v2/read-icon.svg"
                      alt=""
                      width="56"
                      height="56"
                    />
                  </div>

                  <div className="flex flex-col flex-1 py-5">
                    {content?.industry && (
                      <p className="bg-clip-text text-transparent bg-theme-gradient uppercase text-xs md:text-sm font-semibold tracking-[0.1em] !mb-2">
                        {content.industry}
                      </p>
                    )}
                    <Heading
                      className="md:!text-xl !text-lg font-semibold group-hover:text-themeColor transition-colors"
                      type="h3"
                      text={content?.title}
                    />
                    <p className="text-colorGray md:text-base text-sm !mt-3 leading-relaxed">
                      {truncated}
                    </p>

                    {content?.technology?.length > 0 && (
                      <div className="flex items-center gap-2 flex-wrap !mt-4">
                        {content.technology.slice(0, 5).map((tech) => (
                          <span
                            key={tech}
                            className="text-xs text-colorGray bg-[#F4F8FC] border border-[#D9E3EF] rounded px-2 py-1"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    <span className="inline-flex items-center gap-1.5 text-themeColor font-medium text-sm !mt-5 group-hover:gap-2.5 transition-all">
                      Read the case study
                      <span aria-hidden>→</span>
                    </span>
                  </div>
                </Link>
              );
            })
          ) : (
            <div className="flex items-center justify-center py-20 col-span-full">
              <p>No case studies found.</p>
            </div>
          )}
        </div>
      </section>

      <div
        onClickCapture={(e) => {
          if (e.target.closest("a, button")) {
            trackEvent("portfolio_bottom_cta_click", {
              label: "tell_us_about_your_project",
            });
          }
        }}
      >
        <CTASection
          title="Tell us what you're building."
          description="We'll come back within 24 hours with an estimate, a proposed team, and a realistic timeline — not a sales call."
          buttonText="Tell us about your project"
        />
      </div>

      <ToolsAndGetInTouch />
    </>
  );
};

export default Portfolio;
