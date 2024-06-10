"use client";
import Link from "next/link";
import dynamic from "next/dynamic";
import { TechTeamText } from "./BigText";
import { useEffect, useState } from "react";
import { Icon, scrollEffect } from "../lib/commonFunction";
import LinkWithArrow from "../Common/LinkWithArrow";

const Accordion = dynamic(
  () => import("@material-tailwind/react").then((mod) => mod.Accordion),
  { ssr: false }
);
const AccordionHeader = dynamic(
  () => import("@material-tailwind/react").then((mod) => mod.AccordionHeader),
  { ssr: false }
);
const AccordionBody = dynamic(
  () => import("@material-tailwind/react").then((mod) => mod.AccordionBody),
  { ssr: false }
);

const ExtensionOfTeam = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  useEffect(() => {
    scrollEffect();
    window.addEventListener("scroll", scrollEffect);

    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);

  const accordionItems = [
    {
      title: "1. Backend Developer",
      description:
        "Engineer the backbone of your digital presence with our backend development expertise, ensuring reliable and efficient functionality for your applications.",
      links: [
        { href: "/hire-java-developer/", text: "Java" },
        { href: "/hire-nodejs-developer", text: "Node.Js" },
      ],
    },
    {
      title: "2. Frontend Developer",
      description:
        "Translate your vision into an intuitive and visually compelling user interface as our front-end developers prioritize seamless user interactions and responsive design.",
      links: [{ href: "/hire-reactjs-developer/", text: "React.Js" }],
    },
    {
      title: "3. Cloud Services",
      description:
        "Optimize your infrastructure with our cloud services, streamlining operations and enhancing scalability to meet the demands of your evolving business landscape.",
      links: [
        { href: "/hire-aws-developer/", text: "AWS Development Services" },
      ],
    },
    {
      title: "4. Mobile App Developer",
      description:
        "As a top-rated mobile app development company, we specialize in transforming your unique ideas into vibrant, functional mobile experiences through our dedicated team of expert developers.",
      links: [
        { href: "/hire-react-native-developer/", text: "React Native" },
        {
          href: "/hire-blockchain-developer/",
          text: "Block Chain and Solidity",
        },
      ],
    },
    {
      title: "5. UI/UX Design",
      description:
        "Enhance user experience and satisfaction through thoughtful design with our UI/UX experts, ensuring that every digital interaction aligns seamlessly with your business objectives.",
      links: [{ href: "/hire-ui-ux-designer/", text: "UI/UX Designer" }],
    },
  ];

  return (
    <div className="container mx-auto main-section-padding reveal">
      <TechTeamText />
      <div className="md:px-4 md:pt-12 pt-8 sm:w-[92%] w-[100%] reveal">
        <div className="homepage-extension-team">
          <div className="flex flex-wrap">
            <div className="lg:w-1/2 w-full">
              <div className="!mb-0 lg:w-[90%] w-full">
                <div className="!text-2xl font-bold mb-8">
                  <h2>Our Services drive sustainable growth.</h2>
                </div>

                {accordionItems.map((item, index) => (
                  <Accordion
                    key={index + 1}
                    open={open === index + 1}
                    icon={<Icon id={index + 1} open={open} />}
                  >
                    <AccordionHeader
                      onClick={() => handleOpen(index + 1)}
                      className={`py-6 ${
                        open === index + 1 ? "border-none" : ""
                      }`}
                    >
                      <h3>{item.title}</h3>
                    </AccordionHeader>
                    <AccordionBody
                      className={`pt-0 ${open === index + 1 ? "border-b" : ""}`}
                    >
                      <div className="accordion-body">
                        <p className="pb-4 pt-0">{item.description}</p>
                        {item.links.map((link, index) => (
                          <LinkWithArrow
                            href={link.href}
                            className={index > 0 ? "pt-4 !mt-0" : "!mt-0"}
                            key={index}
                            label={link.text}
                          />
                        ))}
                      </div>
                    </AccordionBody>
                  </Accordion>
                ))}

                {/* <Accordion
                    open={open === 1}
                    icon={<Icon id={1} open={open} />}
                  >
                    <AccordionHeader
                      onClick={() => handleOpen(1)}
                      className={`py-6 ${open === 1 ? "border-none" : ""}`}
                    >
                      <h3> 1. Backend Developer</h3>
                    </AccordionHeader>
                    <AccordionBody
                      className={`pt-0 ${open === 1 ? "border-b" : ""}`}
                    >
                      <div className="accordion-body">
                        <p className="pb-4 pt-0">
                          Engineer the backbone of your digital presence with
                          our backend development expertise, ensuring reliable
                          and efficient functionality for your applications.
                        </p>
                        <Link
                          href="/hire-java-developer/"
                          className="flex items-center gap-[20px] about_btn transition"
                        >
                          <div className="about_txt">
                            <p
                              href="/hire-java-developer/"
                              className="change_link md:text-[24px] text-[20px]"
                            >
                              Java
                            </p>
                          </div>
                          <div className="aerrow relative">
                            <img
                              decoding="async"
                              loading="lazy"
                              className="black_aerrow alignnone wp-image-28 size-full"
                              src="/images/black_aerrow-1.png"
                              alt="arrow"
                              width="46"
                              height="18"
                            />
                            <img
                              decoding="async"
                              loading="lazy"
                              className="gradiant_aerrow alignnone wp-image-29 size-full"
                              src="/images/arrow-gradiant.png"
                              alt="arrow"
                              width="46"
                              height="18"
                            />
                          </div>
                        </Link>
                        <Link
                          href="/hire-nodejs-developer"
                          className="flex items-center gap-[20px] about_btn transition pt-[16px]"
                        >
                          <div className="about_txt">
                            <p
                              href="/hire-nodejs-developer/"
                              className="change_link md:text-[24px] text-[20px]"
                            >
                              Node.Js
                            </p>
                          </div>
                          <div className="aerrow relative">
                            <img
                              decoding="async"
                              loading="lazy"
                              className="black_aerrow alignnone wp-image-28 size-full"
                              src="/images/black_aerrow-1.png"
                              alt="arrow"
                              width="46"
                              height="18"
                            />
                            <img
                              decoding="async"
                              loading="lazy"
                              className="gradiant_aerrow alignnone wp-image-29 size-full"
                              src="/images/arrow-gradiant.png"
                              alt="arrow"
                              width="46"
                              height="18"
                            />
                          </div>
                        </Link>
                      </div>
                    </AccordionBody>
                  </Accordion>
                  <Accordion
                    open={open === 2}
                    icon={<Icon id={2} open={open} />}
                  >
                    <AccordionHeader
                      onClick={() => handleOpen(2)}
                      className={`py-6 ${open === 2 ? "border-none" : ""}`}
                    >
                      <h3> 2. Frontend Developer</h3>
                    </AccordionHeader>
                    <AccordionBody
                      className={`pt-0 ${open === 2 ? "border-b" : ""}`}
                    >
                      <div className="accordion-body">
                        <p className="pb-4 pt-0">
                          Translate your vision into an intuitive and visually
                          compelling user interface as our front-end developers
                          prioritize seamless user interactions and responsive
                          design.
                        </p>
                        <Link
                          href="/hire-reactjs-developer/"
                          className="flex items-center gap-[20px] about_btn transition"
                        >
                          <div className="about_txt">
                            <p className="change_link md:text-[24px] text-[20px]">
                              React.Js
                            </p>
                          </div>
                          <div className="aerrow relative">
                            <img
                              decoding="async"
                              loading="lazy"
                              className="black_aerrow alignnone wp-image-28 size-full"
                              src="/images/black_aerrow-1.png"
                              alt="arrow"
                              width="46"
                              height="18"
                            />
                            <img
                              decoding="async"
                              loading="lazy"
                              className="gradiant_aerrow alignnone wp-image-29 size-full"
                              src="/images/arrow-gradiant.png"
                              alt="arrow"
                              width="46"
                              height="18"
                            />
                          </div>
                        </Link>
                      </div>
                    </AccordionBody>
                  </Accordion>
                  <Accordion
                    open={open === 3}
                    icon={<Icon id={3} open={open} />}
                  >
                    <AccordionHeader
                      onClick={() => handleOpen(3)}
                      className={`py-6 ${open === 3 ? "border-none" : ""}`}
                    >
                      <h3> 3. Cloud Services</h3>
                    </AccordionHeader>
                    <AccordionBody
                      className={`pt-0 ${open === 3 ? "border-b" : ""}`}
                    >
                      <div className="accordion-body">
                        <p className="pb-4 pt-0">
                          Optimize your infrastructure with our cloud services,
                          streamlining operations and enhancing scalability to
                          meet the demands of your evolving business landscape.
                        </p>
                        <Link
                          href="/hire-aws-developer/"
                          className="flex items-center gap-[20px] about_btn transition"
                        >
                          <div className="about_txt">
                            <p className="change_link md:text-[24px] text-[20px]">
                              AWS Development Services
                            </p>
                          </div>
                          <div className="aerrow relative">
                            <img
                              decoding="async"
                              loading="lazy"
                              className="black_aerrow alignnone wp-image-28 size-full"
                              src="/images/black_aerrow-1.png"
                              alt="arrow"
                              width="46"
                              height="18"
                            />
                            <img
                              decoding="async"
                              loading="lazy"
                              className="gradiant_aerrow alignnone wp-image-29 size-full"
                              src="/images/arrow-gradiant.png"
                              alt="arrow"
                              width="46"
                              height="18"
                            />
                          </div>
                        </Link>
                      </div>
                    </AccordionBody>
                  </Accordion>
                  <Accordion
                    open={open === 4}
                    icon={<Icon id={4} open={open} />}
                  >
                    <AccordionHeader
                      onClick={() => handleOpen(4)}
                      className={`py-6 ${open === 4 ? "border-none" : ""}`}
                    >
                      <h3> 4. Mobile App Developer</h3>
                    </AccordionHeader>
                    <AccordionBody
                      className={`pt-0 ${open === 4 ? "border-b" : ""}`}
                    >
                      <div className="accordion-body">
                        <p className="pb-4 pt-0">
                          As a top-rated mobile app development company, we
                          specialize in transforming your unique ideas into
                          vibrant, functional mobile experiences through our
                          dedicated team of expert developers.
                        </p>
                        <Link
                          href="/hire-react-native-developer/"
                          className="flex items-center gap-[20px] about_btn transition"
                        >
                          <div className="about_txt">
                            <p className="change_link md:text-[24px] text-[20px]">
                              React Native
                            </p>
                          </div>
                          <div className="aerrow relative">
                            <img
                              decoding="async"
                              loading="lazy"
                              className="black_aerrow alignnone wp-image-28 size-full"
                              src="/images/black_aerrow-1.png"
                              alt="arrow"
                              width="46"
                              height="18"
                            />
                            <img
                              decoding="async"
                              loading="lazy"
                              className="gradiant_aerrow alignnone wp-image-29 size-full"
                              src="/images/arrow-gradiant.png"
                              alt="arrow"
                              width="46"
                              height="18"
                            />
                          </div>
                        </Link>

                        <Link
                          href="/hire-blockchain-developer/"
                          className="flex items-center gap-[20px] about_btn transition pt-4"
                        >
                          <div className="about_txt">
                            <p
                              href="/hire-blockchain-developer/"
                              className="change_link md:text-[24px] text-[20px]"
                            >
                              Block Chain and Solidity
                            </p>
                          </div>
                          <div className="aerrow relative">
                            <img
                              decoding="async"
                              loading="lazy"
                              className="black_aerrow alignnone wp-image-28 size-full"
                              src="/images/black_aerrow-1.png"
                              alt="arrow"
                              width="46"
                              height="18"
                            />
                            <img
                              decoding="async"
                              loading="lazy"
                              className="gradiant_aerrow alignnone wp-image-29 size-full"
                              src="/images/arrow-gradiant.png"
                              alt="arrow"
                              width="46"
                              height="18"
                            />
                          </div>
                        </Link>
                      </div>
                    </AccordionBody>
                  </Accordion>
                  <Accordion
                    open={open === 5}
                    icon={<Icon id={5} open={open} />}
                  >
                    <AccordionHeader
                      onClick={() => handleOpen(5)}
                      className={`py-6 ${open === 5 ? "border-none" : ""}`}
                    >
                      <h3> 5. UI/UX Design</h3>
                    </AccordionHeader>
                    <AccordionBody
                      className={`pt-0 ${open === 5 ? "border-b" : ""}`}
                    >
                      <div className="accordion-body">
                        <p className="pb-4 pt-0">
                          Enhance user experience and satisfaction through
                          thoughtful design with our UI/UX experts, ensuring
                          that every digital interaction aligns seamlessly with
                          your business objectives.
                        </p>
                        <Link
                          href="/hire-ui-ux-designer/"
                          className="flex items-center gap-[20px] about_btn transition"
                        >
                          <div className="about_txt">
                            <p className="change_link md:text-[24px] text-[20px]">
                              UI/UX Designer
                            </p>
                          </div>
                          <div className="aerrow relative">
                            <img
                              decoding="async"
                              loading="lazy"
                              className="black_aerrow alignnone wp-image-28 size-full"
                              src="/images/black_aerrow-1.png"
                              alt="arrow"
                              width="46"
                              height="18"
                            />
                            <img
                              decoding="async"
                              loading="lazy"
                              className="gradiant_aerrow alignnone wp-image-29 size-full"
                              src="/images/arrow-gradiant.png"
                              alt="arrow"
                              width="46"
                              height="18"
                            />
                          </div>
                        </Link>
                      </div>
                    </AccordionBody>
                  </Accordion> */}
              </div>
            </div>
            <div className="lg:w-6/12 w-full">
              <div className="solutions_img mt-4 md:mt-0">
                <img
                  decoding="async"
                  loading="lazy"
                  className="alignnone wp-image-40 size-full !ml-auto !w-full"
                  src={
                    "https://a.storyblok.com/f/219851/1011x1101/a2929139da/team-img.webp"
                  }
                  alt="Teamwork"
                  width="1011"
                  height="1101"
                  srcSet="
                  https://a.storyblok.com/f/219851/1011x1101/a2929139da/team-img.webp          1011w,
                  /images/team-275x300.webp   275w,
                  https://a.storyblok.com/f/219851/940x1024/a45f992bf1/team-940x1024.webp  940w,
                  https://a.storyblok.com/f/219851/768x836/36f87ab39c/team-768x836.webp   768w
                  "
                  sizes="(min-width: 1040px) 46.02vw, (min-width: 640px) 91.84vw, calc(100vw - 30px)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtensionOfTeam;
