"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import Image from "next/image";
import ButtonV2 from "../Common/ButtonV2";

const Footer = () => {
  const pathname = usePathname();

  const getActivePage = (pageURL) => {
    return pathname === pageURL ? "page-active" : "";
  };

  const socialLinksNew = [
    {
      name: "Facebook",
      linkURL: "https://www.facebook.com/brilwork/",
      imgSrc: "/images/fb-logo.svg",
    },
    {
      name: "Youtube",
      linkURL: "https://www.youtube.com/@brilworks",
      imgSrc: "/images/youtube-icon.svg",
    },
    {
      name: "Instagram",
      linkURL: "https://www.instagram.com/brilworkssoftware/",
      imgSrc: "/images/insta-logo.svg",
    },
    {
      name: "LinkedIn",
      linkURL: "https://www.linkedin.com/company/brilworks/",
      imgSrc: "/images/linkedin-logo.svg",
    },
    {
      name: "Behance",
      linkURL: "https://www.behance.net/hellobrilworks",
      imgSrc: "/images/behance-logo.svg",
    },
    {
      name: "Dribbble",
      linkURL: "https://dribbble.com/Brilworks",
      imgSrc: "/images/driblle-logo.svg",
    },
    {
      name: "Upwork",
      linkURL: "https://www.upwork.com/ag/brilworks/",
      imgSrc: "/images/upwork-logo.svg",
    },
    {
      name: "Clutch",
      linkURL: "https://clutch.co/profile/brilworks-software/",
      imgSrc: "/images/clutch-f-icon.svg",
    },
  ];

  const footerData = [
    {
      title: "Quick Links",
      links: [
        {
          link: "/",
          text: "Home",
        },
        {
          link: "/contact-us/",
          text: "Contact Us",
        },
        {
          link: "/portfolio/",
          text: "Portfolio",
        },
        {
          link: "/about-us/",
          text: "About",
        },
        {
          link: "/our-process/",
          text: "Our Process",
        },
        {
          link: "/blog/",
          text: "Blogs",
        },
      ],
    },
    {
      title: "Solutions",
      links: [
        {
          text: "EdTech",
          link: "/industry/edtech-software-development/",
        },

        {
          link: "/industry/fintech-software-development/",
          text: "Fintech",
        },
        {
          link: "/industry/healthcare-software-development/",
          text: "Healthcare",
        },
        {
          text: "E-Commerce",
          link: "/industry/e-commerce-app-development/",
        },
        {
          link: "/industry/media-entertainment-software-development/",
          text: "Media & Entertainment",
        },
        {
          link: "/industry/fleet-management-software-development/",
          text: "Fleet Management  + GPS",
        },
      ],
    },
    {
      title: "Technologies",
      links: [
        {
          link: "/hire-java-developer/",
          text: "Java",
        },
        {
          link: "/hire-nodejs-developer/",
          text: "Nodejs",
        },
        {
          link: "/hire-reactjs-developer/",
          text: "Reactjs",
        },
        {
          link: "/hire-react-native-developer/",
          text: "React Native",
        },
        {
          link: "/hire-aws-developer/",
          text: "AWS Development",
        },
        {
          link: "/hire-ui-ux-designer//",
          text: "UI/UX Development",
        },
        {
          link: "/hire-blockchain-developer/",
          text: "Blockchain Development",
        },
      ],
    },
    {
      title: (
        <>
          Contact <span className="font-bold text-themeColor">Sales</span>
        </>
      ),
      links: [
        {
          link: "tel:919313644148",
          text: "+ 91 9313644148",
        },
        {
          link: "mailto:sales@brilworks.com",
          text: "sales@brilworks.com",
        },
      ],
    },
    {
      title: (
        <>
          Contact <span className="font-bold text-themeColor">Career</span>
        </>
      ),
      links: [
        {
          link: "tel:919106810920",
          text: "+ 91 9106810920",
        },
        {
          link: "mailto:hr@brilworks.com",
          text: "hr@brilworks.com",
        },
      ],
    },
  ];

  const contactLinks = [
    {
      title: "Contact Sales",
      links: [
        {
          link: "tel:919313644148",
          text: "+ 91 9313644148",
          imgSrc: "/images/call-white.svg",
        },
        {
          link: "mailto:sales@brilworks.com",
          text: "sales@brilworks.com",
          imgSrc: "/images/sms-white.svg",
        },
      ],
    },
    {
      title: "Contact Career",
      links: [
        {
          link: "tel:919106810920",
          text: "+ 91 9106810920",
          imgSrc: "/images/call-white.svg",
        },
        {
          link: "mailto:hr@brilworks.com",
          text: "hr@brilworks.com",
          imgSrc: "/images/sms-white.svg",
        },
      ],
    },
    {
      title: "Location",
      links: [
        {
          link: "tel:919106810920",
          text: "503, Fortune Business Hub, Science City Road, Sola, Ahmedabad, Gujarat, India Pincode- 380060",
          imgSrc: "/images/location-white.svg",
        },
      ],
    },
  ];

  return pathname === "/posters/" ||
    pathname.includes("/x/product-listing/spine-recovery-pro/") ||
    pathname.includes("/ai-agents/") ||
    pathname.includes("/i-remi") ? (
    ""
  ) : (
    <div className="footer-background text-colorWhite">
      <div className="container max-w-[1280px] mx-auto main-section-padding-top !pb-0">
        <div
          className={`footer-new w-full xl:gap-20 md:gap-10 gap-6 xl:mb-10 md:mb-8 mb-5 ${
            pathname === "/mvp-in-48-hours/" || pathname === "/free-mockups/"
              ? ""
              : "grid"
          }`}
        >
          <div className="w-full">
            <Image
              className="w-[155px] h-[46px] md:mb-7 mb-5"
              src="/images/logo-white.svg"
              alt="Brilworks Logo"
              width="155"
              height="46"
              priority
            />
            <p className="md:text-xl text-lg w-full !mb-7.5">
              Hello, we are
              <span className="gradient-text font-medium">
                &nbsp;BRILLIAN’S.&nbsp;
              </span>
              Trying to make an effort to put the right people for you to get
              the best results. Just insight !
            </p>
            {pathname === "/mvp-in-48-hours/" ||
            pathname === "/free-mockups/" ? (
              ""
            ) : (
              <>
                <div className="flex items-center md:text-2xl textxl font-medium mb-4">
                  <span className="gradient-text">We are Hiring!</span>
                  <Image
                    className="w-6 h-6 ml-2"
                    src="/images/group-of-people.png"
                    alt="hiring-voice"
                    width="24"
                    height="24"
                  />
                </div>
                <ButtonV2
                  redirect={`/career/`}
                  label="View Positions"
                  className="w-fit"
                />
              </>
            )}
          </div>
          {pathname === "/mvp-in-48-hours/" || pathname === "/free-mockups/" ? (
            ""
          ) : (
            <div className="w-full grid lg:grid-cols-3 grid-cols-2 xl:gap-12 md:gap-10 gap-6 footer-link">
              {footerData.slice(0, 3).map(({ title, links }) => (
                <div
                  key={title}
                  className={`flex flex-col flex-wrap gap-[14px]`}
                >
                  <h3 className="md:text-xl text-lg mb-[2px] text-colorWhite">
                    {title}
                  </h3>
                  {links.map(({ link, text }) => (
                    <Link
                      key={text}
                      href={link}
                      className={`${getActivePage(link)} md:text-base text-sm`}
                    >
                      {text}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {pathname === "/mvp-in-48-hours/" || pathname === "/free-mockups/" ? (
        ""
      ) : (
        <>
          <hr className="border-[#232323] mt-7.5 mb-5" />
          <div className="container max-w-[1280px] !py-0 mx-auto main-section-padding-top">
            <div className="w-full grid slg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-[155px] gap-6">
              {contactLinks.map(({ title, links }, index) => (
                <div className="flex flex-col gap-4" key={index}>
                  <h3 className="md:text-xl text-lg mb-[2px] text-colorWhite">
                    {title}
                  </h3>
                  {links.map(({ text, imgSrc, link }, idx) =>
                    text.includes("503") ? (
                      <div
                        key={text}
                        className="!text-colorWhite md:text-base text-sm flex slg:gap-2 gap-1 items-start font-medium"
                      >
                        <Image
                          className="mt-1 w-5"
                          src={imgSrc}
                          alt="location"
                          width="20"
                          height="20"
                        />

                        {text}
                      </div>
                    ) : (
                      <a
                        key={text}
                        href={link}
                        target="_blank"
                        className="!text-colorWhite md:text-base text-sm flex slg:gap-2 gap-1 items-center font-medium"
                      >
                        <Image
                          className={`${
                            text.includes("503") ? "mt-1" : ""
                          } w-5`}
                          src={imgSrc}
                          alt="call-email-logo"
                          width="20"
                          height="20"
                        />
                        {text}
                      </a>
                    ),
                  )}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      <hr className="border-[#232323] mt-7.5" />
      <div className="container max-w-[1280px] main-section-padding-bottom py-0 mx-auto">
        <div className="w-full flex md:items-center justify-between flex-col lg:flex-row lg:gap-20 gap-4">
          <div className="flex">
            © {new Date().getFullYear()} Brilworks. All Rights Reserved.
          </div>
          <div className="flex items-center justify-start gap-2">
            {socialLinksNew.map(({ name, linkURL, imgSrc }, index) => (
              <Link
                key={name}
                href={linkURL}
                target="_blank"
                className="w-8 h-8 flex items-center justify-center bg-[#000000] rounded-full"
              >
                <Image
                  className="w-5"
                  src={imgSrc}
                  alt={name}
                  width="20"
                  height="20"
                />
              </Link>
            ))}
          </div>
          <div className="flex items-center justify-between lg:gap-10 md:gap-4 gap-0 mt-2 md:!mt-0">
            <Link href="/terms-and-conditions/" className="transition">
              Terms of Service
            </Link>
            <Link href="/privacy-policy/" className="transition">
              Privacy Policy
            </Link>
            {/* <Link href="/site-map/" className="transition">
          Sitemap
        </Link> */}
            <TawkMessengerReact
              propertyId={`${process.env.NEXT_PUBLIC_TAWKPROPERTY_ID}`}
              widgetId={`${process.env.NEXT_PUBLIC_TAWKWIDGET_ID}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
