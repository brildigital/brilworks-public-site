"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { scrollEffect, scrollToSection } from "../lib/commonFunction";
import Image from "next/image";
import dynamic from "next/dynamic";

const AccordionCustomStyle = dynamic(() =>
  import("../Common/AccordionCustomStyle")
);
const ToolsAndGetInTouch = dynamic(() =>
  import("../Portfolio/ToolsAndGetInTouch")
);

const OurProcessPage = () => {
  const [open, setOpen] = useState(1);
  const [open2, setOpen2] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const handleOpen2 = (value) => setOpen2(open2 === value ? 0 : value);

  const ourProcessUpperAccordionItems = [
    {
      title: "Requirements Analysis",
      iconSrc: "/images/Requirements-Analysis.png",
      content:
        "We follow a rigorous process of requirement analysis in which we go through the business needs using various techniques. It includes end-to-end sessions with the client team and project team.",
      imageSrc: "/images/requirements-analysis-1-226x300.jpg",
      imageAlt: "requirements-analysis",
      processTags: (
        <div className="flex items-center gap-[1rem] flex-wrap pb-4">
          <div className="ideaBg_class bg-[#dcecff]">
            <div className="idea_title work_sec2_txt4">
              <p>Idea Validation</p>
            </div>
          </div>

          <div className="ideaBg_class  bg-[#dcf9f0]">
            <div className="idea_title work_sec2_txt4">
              <p>Project Estimation</p>
            </div>
          </div>

          <div className="ideaBg_class bg-[#ede9ff]">
            <div className="idea_title work_sec2_txt4">
              <p>Technical Feasibility</p>
            </div>
          </div>

          <div className="ideaBg_class bg-[#f9f0de]">
            <div className="idea_title work_sec2_txt4">
              <p>Operational Feasibility</p>
            </div>
          </div>

          <div className="ideaBg_class  bg-[#cbdbfe]">
            <div className="idea_title work_sec2_txt4">
              <p>Legal Feasibility</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Prototype or MVP",
      iconSrc: "/images/Prototype-or-MVP.png",
      content:
        "After identifying the business needs and understanding the market, we develop the product with the help of our industry experts and create a minimum viable product to verify its usability.",
      imageSrc:
        "https://a.storyblok.com/f/219851/692x920/07ee0875cf/prototype.jpg",
      imageAlt: "Prototype",
      processTags: (
        <div className="flex items-center gap-[1rem] flex-wrap pb-4">
          <div className="ideaBg_class  bg-[#dcecff]">
            <div className="idea_title work_sec2_txt4">
              <p>Technology selection</p>
            </div>
          </div>

          <div className="ideaBg_class bg-[#dcf9f0]">
            <div className="idea_title work_sec2_txt4">
              <p>Basic features</p>
            </div>
          </div>

          <div className="ideaBg_class  bg-[#ede9ff]">
            <div className="idea_title work_sec2_txt4">
              <p>Performance features</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Design Sprint",
      iconSrc: "/images/Design-Sprint.png",
      content:
        "When planning your product, we ensure that user experience is at the core of our development. Our best practices have led to a flow of product development that enriches user experience.",
      imageSrc: "/images/design-sprint.jpg",
      imageAlt: "Design spirit",
      processTags: (
        <div className="flex items-center gap-[1rem] flex-wrap pb-4">
          <div className="ideaBg_class bg-[#dcecff]">
            <div className="idea_title work_sec2_txt4">
              <p>Design brief</p>
            </div>
          </div>

          <div className="ideaBg_class   bg-[#dcf9f0]">
            <div className="idea_title work_sec2_txt4">
              <p>User persona</p>
            </div>
          </div>

          <div className="ideaBg_class  bg-[#ede9ff]">
            <div className="idea_title work_sec2_txt4">
              <p>User journey</p>
            </div>
          </div>

          <div className="ideaBg_class bg-[#f9f0de]">
            <div className="idea_title work_sec2_txt4">
              <p>Wireframing</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Development Sprint",
      iconSrc: "/images/Development-Sprint.png",
      content:
        "We work together to ensure the delivery of the product is on time while ensuring that all the intended features are in place. We ensure the delivery of a stable build before a launch. Internal demos ensure that we are ready for testing prior to any release.",
      imageSrc:
        "https://a.storyblok.com/f/219851/692x920/6553d4ab22/end-to-end.png",
      imageAlt: "End to end development",
      processTags: (
        <div className="flex items-center gap-[1rem] flex-wrap pb-4">
          <div className="ideaBg_class  bg-[#dcecff]">
            <div className="idea_title work_sec2_txt4">
              <p>Gantt chart</p>
            </div>
          </div>

          <div className="ideaBg_class  bg-[#dcf9f0]">
            <div className="idea_title work_sec2_txt4">
              <p>RACI matrix</p>
            </div>
          </div>

          <div className="ideaBg_class bg-[#ede9ff]">
            <div className="idea_title work_sec2_txt4">
              <p>Project roadmap Back</p>
            </div>
          </div>

          <div className="ideaBg_class    bg-[#f9f0de]">
            <div className="idea_title work_sec2_txt4">
              <p>Daily standups</p>
            </div>
          </div>

          <div className="ideaBg_class bg-[#cbdbfe]">
            <div className="idea_title work_sec2_txt4">
              <p>Backlog estimation</p>
            </div>
          </div>

          <div className="ideaBg_class  bg-[#dcecff]">
            <div className="idea_title work_sec2_txt4">
              <p>Sprint retrospectives</p>
            </div>
          </div>
          <p>&nbsp;</p>
        </div>
      ),
    },
    {
      title: "Quality Assurance",
      iconSrc: "/images/Quality-Assurance.png",
      content:
        "Our quality assurance team supports our developers by testing the product in various environments and scenarios. Our testing experts test across all the product requirements through both automated and manual approaches. We ensure that the entire product is properly tested before going to market.",
      imageSrc:
        "https://a.storyblok.com/f/219851/692x920/d5d12b1dd4/quality.jpg",
      imageAlt: "Quality Analysis",
      processTags: (
        <div className="flex items-center gap-[1rem] flex-wrap pb-4">
          <div className="ideaBg_class  bg-[#dcecff]">
            <div className="idea_title work_sec2_txt4">
              <p>Usability testing</p>
            </div>
          </div>

          <div className="ideaBg_class bg-[#dcf9f0]">
            <div className="idea_title work_sec2_txt4">
              <p>Functionality testing</p>
            </div>
          </div>

          <div className="ideaBg_class bg-[#ede9ff]">
            <div className="idea_title work_sec2_txt4">
              <p>Compatibility testing</p>
            </div>
          </div>

          <div className="ideaBg_class  bg-[#f9f0de]">
            <div className="idea_title work_sec2_txt4">
              <p>Performance testing</p>
            </div>
          </div>

          <div className="ideaBg_class bg-[#cbdbfe]">
            <div className="idea_title work_sec2_txt4">
              <p>Penetration testing</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Implementation & Deployment",
      iconSrc: "/images/Implementation-Deployment.png",
      content:
        "When the software is ready for release, we orchestrate the build from sprint to the staging server. This allows us to test the product in a live environment thereby removing any risk of failure. Once everyone is satisfied, we take the product live.",
      imageSrc: "/images/implementation-Deployment.jpg",
      imageAlt: "Implemnetation Deployment",
      processTags: (
        <div className="flex items-center gap-[1rem] flex-wrap pb-4">
          <div className="ideaBg_class bg-[#dcecff]">
            <div className="idea_title work_sec2_txt4">
              <p>Setting up servers</p>
            </div>
          </div>

          <div className="ideaBg_class bg-[#dcf9f0]">
            <div className="idea_title work_sec2_txt4">
              <p>Building CI/CD pipeline</p>
            </div>
          </div>

          <div className="ideaBg_class  bg-[#ede9ff]">
            <div className="idea_title work_sec2_txt4">
              <p>Tests at staging server</p>
            </div>
          </div>

          <div className="ideaBg_class bg-[#f9f0de]">
            <div className="idea_title work_sec2_txt4">
              <p>Preparing &amp; implementing a deployment plan</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Maintenance & Support",
      iconSrc: "/images/Maintenance-Support.png",
      content:
        "Maintenance keeps the application running smoothly by providing 24x7x365 days support for complete peace of mind. It’s the best way to ensure that your new app is up-to-date and secure, which means users will continue to love it.",
      imageSrc:
        "https://a.storyblok.com/f/219851/692x920/f1915dbc83/maintenance-and-support.jpg",
      imageAlt: "Maintenance and Support",
      processTags: (
        <div className="flex items-center gap-[1rem] flex-wrap pb-4">
          <div className="ideaBg_class bg-[#dcecff]">
            <div className="idea_title work_sec2_txt4">
              <p>Corrective software maintenance</p>
            </div>
          </div>

          <div className="ideaBg_class bg-[#dcf9f0]">
            <div className="idea_title work_sec2_txt4">
              <p>Preventive software maintenance</p>
            </div>
          </div>

          <div className="ideaBg_class bg-[#ede9ff]">
            <div className="idea_title work_sec2_txt4">
              <p>Perfective software maintenance</p>
            </div>
          </div>

          <div className="ideaBg_class bg-[#f9f0de]">
            <div className="idea_title work_sec2_txt4">
              <p>Adaptive software maintenance</p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const ourProcessLowerAccordionItems = [
    {
      title: "Screening & Shortlisting",
      iconSrc: "/images/Screening-Shortlisting.png",
      content:
        "Phase I begins with sorting, filtering, and assessing candidates against our stringent criteria. This helps us to determine the best candidates for each role.",
      imageSrc: "/images/Screening-and-Shortlisting-1.jpg",
      imageAlt: "Screening-and-Shortlisting",
      processTags: (
        <div className="flex items-center gap-[1rem] flex-wrap">
          <div className="ideaBg_class  bg-[#dcecff]">
            <div className="idea_title work_sec2_txt4">
              <p>Reviewing skills</p>
            </div>
          </div>

          <div className="ideaBg_class  bg-[#dcf9f0]">
            <div className="idea_title work_sec2_txt4">
              <p>Behavioral traits</p>
            </div>
          </div>

          <div className="ideaBg_class bg-[#ede9ff]">
            <div className="idea_title work_sec2_txt4">
              <p>Culture fit</p>
            </div>
          </div>

          <div className="ideaBg_class bg-[#f9f0de]">
            <div className="idea_title work_sec2_txt4">
              <p>Overall experience</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Language Proficiency",
      iconSrc: "/images/Language-Proficiency.png",
      content:
        "We test each candidate’s language proficiency through a series of assessments to understand their speaking, writing, and collaboration skills.",
      imageSrc: "/images/language-proficiency.jpg",
      imageAlt: "language-proficiency",
      processTags: (
        <div className="flex items-center gap-[1rem] flex-wrap">
          <div className="ideaBg_class  bg-[#dbebff]">
            <div className="idea_title work_sec2_txt4">
              <p>Reading</p>
            </div>
          </div>

          <div className="ideaBg_class bg-[#dcf9f0]">
            <div className="idea_title work_sec2_txt4">
              <p>Written communication ability</p>
            </div>
          </div>

          <div className="ideaBg_class bg-[#ede9ff]">
            <div className="idea_title work_sec2_txt4">
              <p>Pronunciation &amp; speaking</p>
            </div>
          </div>

          <div className="ideaBg_class bg-[#f9f0de]">
            <div className="idea_title work_sec2_txt4">
              <p>Clarity &amp; fluency</p>
            </div>
          </div>

          <div className="ideaBg_class  bg-[#cbdbfe]">
            <div className="idea_title work_sec2_txt4">
              <p>Overall communication skills</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: " Aptitude Assessment",
      iconSrc: "/images/Aptitude-Assessment.png",
      content:
        "Each candidate is given a timed aptitude test to help assess their decision-making, problem-solving, and critical thinking skills. These tests help us determine if they have the skills you are looking for. We also use this test as an indicator of how well they will fit into your company culture.",
      imageSrc: "/images/aptitude-test-recruitment-assessment.jpg",
      imageAlt: "aptitude-test",
      processTags: (
        <div className="flex items-center gap-[1rem] flex-wrap">
          <div className="ideaBg_class bg-[#dcecff]">
            <div className="idea_title work_sec2_txt4">
              <p>Reasoning skills</p>
            </div>
          </div>

          <div className="ideaBg_class bg-[#dcf9f0]">
            <div className="idea_title work_sec2_txt4">
              <p>Learning across disciplines</p>
            </div>
          </div>

          <div className="ideaBg_class   bg-[#ede9ff]">
            <div className="idea_title work_sec2_txt4">
              <p>Working across cultural boundaries</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      index: 4,
      title: "Technical Evaluation",
      iconSrc: "/images/Technical-Evaluation.png",
      content:
        "We conduct rigorous skill review tests to review your technical capabilities and professional knowledge",
      imageSrc: "/images/technical-evaluation-1.jpg",
      imageAlt: "technical-evaluation",
      processTags: (
        <div className="flex items-center gap-[1rem] flex-wrap">
          <div className="ideaBg_class  bg-[#dcecff]">
            <div className="idea_title work_sec2_txt4">
              <p>Domain knowledge</p>
            </div>
          </div>

          <div className="ideaBg_class bg-[#dcf9f0]">
            <div className="idea_title work_sec2_txt4">
              <p>Technical know-how</p>
            </div>
          </div>

          <div className="ideaBg_class bg-[#ede9ff]">
            <div className="idea_title work_sec2_txt4">
              <p>Proficiency with tools &amp; technologies</p>
            </div>
          </div>

          <div className="ideaBg_class bg-[#f9f0de]">
            <div className="idea_title work_sec2_txt4">
              <p>Industry-ready skills</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      index: 5,
      title: "Team Extension",
      iconSrc: "/images/Team-Extension.png",
      content:
        "The final matchmaking process to connect you with the right talent for your business. Our mission is to keep your project on track by providing you with the skills and talent you need.",
      imageSrc: "/images/team-extension.jpg",
      imageAlt: "team-extension",
      processTags: (
        <div className="flex items-center gap-[1rem] flex-wrap">
          <div className="ideaBg_class  bg-[#dcecff]">
            <div className="idea_title work_sec2_txt4">
              <p>Remote talent</p>
            </div>
          </div>
          <div className="ideaBg_class  bg-[#dcf9f0]">
            <div className="idea_title work_sec2_txt4">
              <p>Pre-vetted talent</p>
            </div>
          </div>
          <div className="ideaBg_class  bg-[#ede9ff]">
            <div className="idea_title work_sec2_txt4">
              <p>Available in your timezone</p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  useEffect(() => {
    scrollEffect();
    window.addEventListener("scroll", scrollEffect);
    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);

  return (
    <section className="portfolio mt-[6rem] our_process_page">
      <div className="mx-auto service_width">
        <div className="relative">
          <p>
            <Image
              className="how_works_img alignnone"
              src={
                "https://a.storyblok.com/f/219851/1398x780/014497fa1b/work-baner.webp"
              }
              alt="our process"
              width={1398}
              height={780}
              sizes="(min-width: 1040px) 80vw, (min-width: 640px) 91.84vw, calc(100vw - 30px)"
            />
          </p>
          <div className="service_sec1_position">
            <div className="flex self-end justify-between w-[90%] mx-auto">
              <div className="txt">
                <div className="how-we flex items-center gap-[1rem]">
                  <h1 className="font-style-solution-head uppercase xl:text-[96px] lg:text-[86px] md:text-[70px] sm:text-[55px] text-[30px]">
                    How We
                    <div className="how-we flex items-center gap-[1rem]">
                      <div className="imgebreakets">
                        <Image
                          className="alignnone"
                          src="/images/1.png"
                          alt="curley bracket"
                          width="24"
                          height="94"
                        />
                      </div>
                      Work
                      <div className="imgebreakets">
                        <Image
                          className="alignnone"
                          src="/images/2.png"
                          alt="curley bracket"
                          width="24"
                          height="94"
                        />
                      </div>
                    </div>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto service_width lg:py-20 py-12">
        <div className="flex !flex-col lg:!flex-row xl:gap-[3.5rem] gap-[2rem]">
          <div className="basis-[45%]">
            <div className="home_sec2_txt3 like_text">
              <p className="uppercase !p-0 !ml-[0] lg:!w-[92%] !w-[100%]">
                Time Tested Processes for All Your Project Needs
              </p>
            </div>
          </div>
          <div className="basis-[55%]">
            <div className="home_sec2_txt4">
              <p className="!text-left !text-[1.2rem]">
                Over the past decade, we’ve developed a flexible production
                process that enables us to deliver high-quality solutions on
                time, regardless of scale. Our experienced team offers a breadth
                of technical expertise to meet any client’s needs from finding
                the right talent to managing end-to-end projects.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto service_width xl:pb-[6rem] md:pb-[4rem] pb-[2rem] reveal">
        <div className="flex !flex-col md:!flex-row items-start gap-[1rem]">
          <div className="our_img_text_sec relative">
            <div className="our_img">
              <img
                decoding="async"
                loading="lazy"
                className="border_redius20 alignnone"
                src="/images/time1.webp"
                alt="Project Development"
              />
            </div>
            <div className="overlay">
              <div className="ourProcess_text_arrow">
                <div className="our_text home_sec2_txt4">
                  <p>Our Process for End-to-end Project Development</p>
                </div>
                <div className="down_arrow">
                  <Link
                    href="#workSec4"
                    onClick={(e) => scrollToSection(e, "workSec4")}
                    className="__mPS2id _mPS2id-h mPS2id-highlight mPS2id-highlight-first mPS2id-highlight-last"
                  >
                    <Image
                      className="alignnone"
                      src="/images/explore-arrow-01.png"
                      alt="down arrow"
                      width="72"
                      height="72"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="our_img_text_sec relative">
            <div className="our_img">
              <img
                decoding="async"
                loading="lazy"
                className="border_redius20 alignnone"
                src="/images/time2.webp"
                alt="Team Extension"
              />
            </div>
            <div className="overlay">
              <div className="ourProcess_text_arrow">
                <div className="our_text home_sec2_txt4">
                  <p>Our Process for Team Extension</p>
                </div>
                <div className="down_arrow">
                  <Link
                    href="#workSec5"
                    onClick={(e) => scrollToSection(e, "workSec5")}
                    className="__mPS2id _mPS2id-h"
                  >
                    <Image
                      className="alignnone"
                      src="/images/explore-arrow-01.png"
                      alt="down arrow"
                      width="72"
                      height="72"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="mx-auto service_width xl:py-[6rem] md:py-[4rem] py-[2rem] workpadd_borderTop end-to-end reveal"
        id="workSec4"
      >
        <div className="end-To-end">
          <div className="endTO_text home_sec2_txt3">
            <p className="md:!w-[74%] !w-full !p-0 !font-bold">
              OUR PROCESS FOR END-TO-END PROJECT DEVELOPMENT
            </p>
          </div>
        </div>

        <div className="endTO_text_content home_sec2_txt4">
          <p className="mx-auto md:!w-[74%] !w-full md:!text-xl text-base">
            We’ll understand your project needs and goals to guide you from the
            project initiation to the release phase. Depending on your goals, we
            provide consultation and an end-to-end development plan.
          </p>
        </div>

        <div className="mx-auto pt-10">
          <div className="accordion-tab-section our-process-endToEnd">
            <div className="flex flex-wrap">
              <div className="lg:w-6/12 w-full">
                <div className="accordion !mb-0 lg:w-[90%] w-full">
                  {ourProcessUpperAccordionItems.map(
                    ({ title, content, processTags, iconSrc }, index) => (
                      <AccordionCustomStyle
                        key={index}
                        index={index + 1}
                        title={title}
                        iconSrc={iconSrc}
                        content={content}
                        processTags={processTags}
                        handleOpen={handleOpen}
                        open={open}
                      />
                    )
                  )}
                </div>
              </div>
              <div className="lg:w-6/12 w-full md:mt-[0px] mt-[30px]">
                <div>
                  {ourProcessUpperAccordionItems.map(
                    ({ imageSrc, imageAlt }, index) => (
                      <div
                        key={index}
                        className={`fade-image ${
                          (index === 0 && (open === 1 || open === 0)) ||
                          (index !== 0 && open === index + 1)
                            ? "active"
                            : "hidden"
                        }`}
                      >
                        <div className="team_img">
                          <img
                            decoding="async"
                            loading="lazy"
                            src={imageSrc}
                            alt={imageAlt}
                          />
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="mx-auto service_width xl:pt-[6rem] md:pt-[4rem] pt-[2rem] workpadd_borderTop end-to-end reveal"
        id="workSec5"
      >
        <div className="end-To-end">
          <div className="endTO_text home_sec2_txt3">
            <p className="md:!w-[74%] !w-full !p-0 !font-bold">
              OUR PROCESS FOR TEAM EXTENSION
            </p>
          </div>
        </div>

        <div className="endTO_text_content home_sec2_txt4">
          <p className="mx-auto md:!w-[74%] !w-full md:!text-xl text-base">
            Whether you want to add a member to your existing team or build an
            entire SCRUM team from scratch, We’ll handle all the search,
            interviewing and vetting to help you find the right team members.
          </p>
        </div>

        <div className="mx-auto pt-10">
          <div className="accordion-tab-section our-process-endToEnd2">
            <div className="flex flex-wrap">
              <div className="lg:w-6/12 w-full md:mt-[0px]">
                <div>
                  {ourProcessLowerAccordionItems.map(
                    ({ imageSrc, imageAlt }, index) => (
                      <div
                        key={index}
                        className={`fade-image ${
                          (index === 0 && (open2 === 1 || open2 === 0)) ||
                          (index !== 0 && open2 === index + 1)
                            ? "active"
                            : "hidden"
                        }`}
                      >
                        <div className="team_img">
                          <img
                            decoding="async"
                            loading="lazy"
                            src={imageSrc}
                            alt={imageAlt}
                          />
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="lg:w-6/12 w-full">
                <div className="accordion !mb-0 lg:ml-8 w-full">
                  {ourProcessLowerAccordionItems.map(
                    ({ title, content, iconSrc }, index) => (
                      <AccordionCustomStyle
                        key={index}
                        index={index + 1}
                        title={title}
                        iconSrc={iconSrc}
                        content={content}
                        handleOpen={handleOpen2}
                        open={open2}
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToolsAndGetInTouch />
    </section>
  );
};

export default OurProcessPage;
