"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import Image from "next/image";
import Button from "../Common/Button";
import { BrilworksButton } from "../PortfolioGradient/PortfolioGradientHero";

const Footer = () => {
  const pathname = usePathname();

  const getActivePage = (pageURL) => {
    return pathname === pageURL ? "page-active" : "";
  };
  const socialLinks = [
    {
      name: "Facebook",
      linkURL: "https://www.facebook.com/brilwork/",
      imgSrc: "/images/fb-footer.svg",
    },
    {
      name: "Youtube",
      linkURL: "https://www.youtube.com/@brilworks",
      imgSrc: "/images/youtube-footer.svg",
    },
    {
      name: "Instagram",
      linkURL: "https://www.instagram.com/brilworkssoftware/",
      imgSrc: "/images/insta-footer.svg",
    },
    {
      name: "LinkedIn",
      linkURL: "https://www.linkedin.com/company/brilworks/",
      imgSrc: "/images/linkedin-footer.svg",
    },
    {
      name: "Behance",
      linkURL: "https://www.behance.net/hellobrilworks",
      imgSrc: "/images/behance-img.svg",
    },
    {
      name: "Dribbble",
      linkURL: "https://dribbble.com/Brilworks",
      imgSrc: "/images/dribble-img.svg",
    },
    {
      name: "Dribbble",
      linkURL: "https://www.upwork.com/ag/brilworks/",
      imgSrc: "/images/upwork-footer.svg",
    },
  ];
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
          link: "/industry/fintech-software-development/",
          text: "Fintech",
        },
        {
          link: "/industry/fleet-management-software-development/",
          text: "Fleet Management  + GPS",
        },
        {
          link: "/industry/healthcare-software-development/",
          text: "Healthcare",
        },
        {
          link: "/industry/media-entertainment-software-development/",
          text: "Media & Entertainment",
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

  return pathname.startsWith("/portfolio/") ? (
    <div className="footer-background font-Urbanist text-colorWhite">
      <div className="container max-w-[1440px] md:px-[60px] px-[20px] lg:px-[100px] 3xl:px-[120px] lg:pt-[60px] md:pt-[40px] pt-[30px] mx-auto">
        <div className="footer-new w-full grid xl:gap-20 md:gap-10 gap-6 xl:mb-10 md:mb-8 mb-5">
          <div className="w-full">
            <Image
              className="w-[155px] h-[46px] md:mb-7 mb-5"
              src="/images/logo-white.svg"
              alt="Brilworks Logo"
              width="155"
              height="46"
              priority
            />
            <p className="text-xl w-full !mb-[30px]">
              Hello, we are
              <span className="gradient-text font-medium">
                &nbsp;BRILLIAN’S.&nbsp;
              </span>
              Trying to make an effort to put the right people for you to get
              the best results. Just insight !
            </p>
            <div className="flex items-center text-2xl font-medium mb-4">
              <span className="gradient-text">We are Hiring!</span>
              <Image
                className="w-6 h-6 ml-2"
                src="/images/group-of-people.png"
                alt="hiring-voice"
                width="24"
                height="24"
              />
            </div>
            <BrilworksButton
              className="hover:!text-colorWhite hover:!border-colorWhite"
              redirect={`/career/`}
              label="View Positions"
            />
          </div>
          <div className="w-full grid lg:grid-cols-3 grid-cols-2 xl:gap-12 md:gap-10 gap-6 footer-link-blue">
            {footerData.slice(0, 3).map(({ title, links }) => (
              <div key={title} className={`flex flex-col flex-wrap gap-[14px]`}>
                <h3 className="md:text-xl text-base mb-[2px] text-[#ABABAB]">
                  {title}
                </h3>
                {links.map(({ link, text }) => (
                  <Link
                    key={text}
                    href={link}
                    className={`${getActivePage(
                      link
                    )} md:text-xl text-base font-medium`}
                  >
                    {text}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className="border border-[#232323] mt-[30px] mb-5" />
      <div className="container max-w-[1440px] md:px-[60px] px-[20px] lg:px-[100px] 3xl:px-[120px] mx-auto">
        <div className="w-full grid slg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {contactLinks.map(({ title, links }, index) => (
            <div className="flex flex-col gap-4" key={index}>
              <h3 className="md:text-xl text-base mb-[2px] text-[#ABABAB]">
                {title}
              </h3>
              {links.map(({ text, imgSrc, link }, idx) =>
                text.includes("503") ? (
                  <div
                    key={text}
                    className="!text-colorWhite md:text-xl text-base flex slg:gap-2 gap-1 items-start font-medium"
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
                    className="!text-colorWhite md:text-xl text-base flex slg:gap-2 gap-1 items-center font-medium"
                  >
                    <Image
                      className={`${text.includes("503") ? "mt-1" : ""} w-5`}
                      src={imgSrc}
                      alt="call-email-logo"
                      width="20"
                      height="20"
                    />
                    {text}
                  </a>
                )
              )}
            </div>
          ))}
        </div>
      </div>
      <hr className="border border-[#232323] mt-[30px]" />
      <div className="container max-w-[1440px] md:px-[60px] px-[20px] lg:px-[100px] 3xl:px-[120px] py-5 mx-auto">
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
                className="p-[6px] bg-[#000000] rounded-full"
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
            <Link href="/site-map/" className="transition">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="bg-footerBG">
      <div className="xl:p-[60px] !pb-6 md:pt-10 md:px-6 pt-8 px-4">
        <div className="container max-w-[1280px] mx-auto">
          <div className="w-full grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-10 md:gap-8 gap-5 xl:mb-10 md:mb-8 mb-5">
            <div className="w-full">
              <p className="text-2xl font-medium !mb-4">Brilliant + Works</p>
              <p className="text-base w-full !mb-6">
                Hello, we are
                <span className="font-medium text-themeColor">
                  &nbsp; BRILLIAN’S.
                </span>
                Trying to make an effort to put the right people for you to get
                the best results. Just insight !
              </p>
              <div className="flex items-center text-xl font-medium mb-4">
                We are&nbsp;
                <span className="text-themeColor">Hiring&nbsp;</span>
                <Image
                  className="w-6 h-6 ml-2"
                  src="/images/megaphone.svg"
                  alt="hiring-voice"
                  width="24"
                  height="24"
                />
              </div>
              <Button
                innerClassName="flex items-center justify-center gap-2 font-medium"
                redirect={`/career/`}
                label="View Positions"
                icon="right-arrow-next"
              />
              <div className="xl:my-10 md:mt-8 mt-6 flex items-center justify-start slg:gap-4 gap-2 flex-wrap">
                {socialLinks.map(({ name, linkURL, imgSrc }, index) => (
                  <Link
                    key={name}
                    href={linkURL}
                    target="_blank"
                    className="md:p-[10px] p-2 !border-borderGray border rounded-full"
                  >
                    <Image
                      className="w-5 h-5"
                      src={imgSrc}
                      alt={name}
                      width="20"
                      height="20"
                    />
                  </Link>
                ))}
              </div>
            </div>
            <div className="w-full flex xl:gap-10 md:gap-[30px] gap-4 footer-links">
              {footerData.slice(0, 2).map(({ title, links }) => (
                <div
                  key={title}
                  className={`${
                    title === "Quick Links"
                      ? "md:w-2/5 w-1/2"
                      : "md:w-3/5 w-1/2"
                  } flex flex-col gap-[14px]`}
                >
                  <h3 className="md:text-xl text-base font-semibold mb-[2px] uppercase">
                    {title}
                  </h3>
                  {links.map(({ link, text }) => (
                    <Link
                      key={text}
                      href={link}
                      className={`${getActivePage(
                        link
                      )} !text-colorGray md:text-base text-sm font-medium`}
                    >
                      {text}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
            <div className="w-full flex xl:gap-8 md:gap-[30px] gap-4 footer-links">
              {footerData.slice(2, 3).map(({ title, links }) => (
                <div key={title} className="w-1/2 flex flex-col gap-[14px]">
                  <h3 className="md:text-xl text-base font-semibold mb-[2px] uppercase">
                    {title}
                  </h3>
                  {links.map(({ link, text }) => (
                    <Link
                      key={text}
                      href={link}
                      className={`${getActivePage(
                        link
                      )} !text-colorGray md:text-base text-sm font-medium`}
                    >
                      {text}
                    </Link>
                  ))}
                </div>
              ))}
              <div className="w-1/2 xl:block md:hidden block flex flex-col xl:gap-10 md:gap-8 gap-6">
                {footerData.slice(3, 5).map(({ title, links }, index) => (
                  <div
                    key={title}
                    className={`${
                      index === 0 ? "mb-10" : ""
                    } w-full flex flex-col gap-[14px]`}
                  >
                    <h3 className="md:text-xl text-base font-semibold mb-[2px] uppercase">
                      {title}
                    </h3>
                    {links.map(({ link, text }) => (
                      <a
                        key={text}
                        href={link}
                        target="_blank"
                        className="!text-colorGray md:text-base text-sm flex items-center slg:gap-2 gap-1 font-medium"
                      >
                        {text?.split("").includes("@") ? (
                          <Image
                            className="md:w-5 w-4 md:h-5 h-4"
                            src="/images/sms.svg"
                            alt="email-now"
                            width="20"
                            height="20"
                          />
                        ) : (
                          <Image
                            className="md:w-5 w-4 md:h-5 h-4"
                            src="/images/call-calling.svg"
                            alt="connect-now"
                            width="20"
                            height="20"
                          />
                        )}

                        {text}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="xl:hidden md:block hidden flex flex-col xl:gap-10 md:gap-8 gap-6">
              {footerData.slice(3, 5).map(({ title, links }, index) => (
                <div
                  key={title}
                  className={`${
                    index === 0 ? "mb-10" : ""
                  } w-full flex flex-col gap-[14px]`}
                >
                  <h3 className="md:text-xl text-base font-semibold mb-[2px] uppercase">
                    {title}
                  </h3>
                  {links.map(({ link, text }) => (
                    <a
                      key={text}
                      href={link}
                      target="_blank"
                      className="!text-colorGray md:text-base text-sm flex items-center slg:gap-2 gap-1 font-medium"
                    >
                      {text?.split("").includes("@") ? (
                        <Image
                          className="md:w-5 w-4 md:h-5 h-4"
                          src="/images/sms.svg"
                          alt="email-now"
                          width="20"
                          height="20"
                        />
                      ) : (
                        <Image
                          className="md:w-5 w-4 md:h-5 h-4"
                          src="/images/call-calling.svg"
                          alt="connect-now"
                          width="20"
                          height="20"
                        />
                      )}

                      {text}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="flex lg:flex-row flex-col gap-8 justify-between xl:mb-10 md:mb-8 mb-5">
            <div className="">
              <p className="text-[#000000] uppercase font-medium !mb-4">
                Partnerships:
              </p>
              <div className="footer-award flex items-center flex-wrap gap-5">
                <Link
                  href="https://partners.amazonaws.com/partners/0018a00001qmc5PAAQ/Brilworks%20Technology%20Pvt%20Ltd"
                  target="_blank"
                  rel="nofollow noopener"
                >
                  <Image
                    className="w-[50px] h-auto"
                    src="/images/select-tier-service-partner-light-1.png"
                    alt="AWS Partner"
                    width="300"
                    height="118"
                  />
                </Link>
                <Link
                  href="https://www.adalo.com/experts/brilworks-software"
                  target="_blank"
                  rel="nofollow noopener"
                >
                  <Image
                    className="w-[80px] h-auto"
                    src="/images/review-adalo.png"
                    alt="adalo expert"
                    width="300"
                    height="118"
                  />
                </Link>
                <Link
                  href="https://www.storyblok.com/pl/brilworks-technology"
                  target="_blank"
                  rel="nofollow noopener"
                >
                  <Image
                    className="w-[130px] h-auto"
                    src="/images/Storyblok.svg"
                    alt="Storyblok partner"
                    width="123"
                    height="26"
                  />
                </Link>
                <Link
                  href="https://www.dotcms.com/partners/brilworks"
                  target="_blank"
                  rel="nofollow noopener"
                >
                  <Image
                    className="w-[90px] h-auto"
                    src="/images/dotCMS-logo.svg"
                    alt="dotCMS logo"
                    width="300"
                    height="118"
                  />
                </Link>

                <Image
                  className="w-[180px] h-auto"
                  src="/images/review-liferay.png"
                  alt="Liferay Partner"
                  width="300"
                  height="118"
                />
              </div>
            </div>
            <div className="">
              <p className="text-[#000000] uppercase font-medium !mb-4">
                Recognized by:
              </p>
              <div className="footer-award flex items-center justify-between flex-wrap gap-3">
                <Link
                  href={"https://clutch.co/profile/brilworks-software#summary"}
                  target="_blank"
                  rel="nofollow noopener"
                >
                  <Image
                    className="w-[80px]"
                    src="/images/global_award_2023 (1).webp"
                    alt="global award"
                    width="150"
                    height="162"
                  />
                </Link>
                <Link
                  href={
                    "https://clutch.co/profile/brilworks-software#highlights"
                  }
                  target="_blank"
                  rel="nofollow noopener"
                >
                  <Image
                    className="w-[70px]"
                    src="/images/top-clutchco-software-developers-gaming-india.webp"
                    alt="Gaming India"
                    width="150"
                    height="162"
                  />
                </Link>
                <Link
                  href={
                    "https://themanifest.com/in/software-development/java/companies/ahmedabad"
                  }
                  target="_blank"
                  rel="nofollow noopener"
                >
                  <Image
                    className="w-[50px]"
                    src="/images/top_the_manifest_app_development_company_ahmedabad_award.png"
                    alt="App dev company award"
                    width="110"
                    height="160"
                  />
                </Link>
                <Link
                  href={
                    "https://www.designrush.com/agency/profile/brilworks-software"
                  }
                  target="_blank"
                  rel="nofollow noopener"
                >
                  <Image
                    className="w-[60px]"
                    src="/images/Top-Mobile-App-Development-Company2.webp"
                    alt="Top App dev company award"
                    width="120"
                    height="130"
                  />
                </Link>
                <Link
                  href={
                    "https://topsoftwarecompanies.co/india/software-development/agencies/ahmedabad"
                  }
                  target="_blank"
                  rel="nofollow noopener"
                >
                  <Image
                    className="w-[70px]"
                    src="/images/review-top-software-developers.png"
                    alt="Top software companies logo"
                    width="150"
                    height="105"
                  />
                </Link>
                <Link
                  href={
                    "https://themanifest.com/in/software-development/java/companies/ahmedabad"
                  }
                  target="_blank"
                  rel="nofollow noopener"
                >
                  <Image
                    className="w-[50px]"
                    src="/images/top_the_manifest_software_developers_ahmedabad_2023_award.png"
                    alt="Top manifest review"
                    width="110"
                    height="160"
                  />
                </Link>
                <Link
                  href={
                    "https://clutch.co/profile/brilworks-software#highlights"
                  }
                  target="_blank"
                  rel="nofollow noopener"
                >
                  <Image
                    className="w-[70px]"
                    src="/images/top-clutchco-software-developers-gps-navigation-gis-india.webp"
                    alt="GPS, Navigation & GIS India"
                    width="150"
                    height="162"
                  />
                </Link>
                <Link
                  href={"https://clutch.co/profile/brilworks-software#summary"}
                  target="_blank"
                  rel="nofollow noopener"
                >
                  <Image
                    className="w-[80px]"
                    src="/images/global_award_spring_2024.webp"
                    alt="global award"
                    width="150"
                    height="162"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center justify-center !text-[#000000] gap-4 font-medium">
            <Image
              className="w-6 h-6"
              src="/images/location.svg"
              alt="location-icon"
              width="24"
              height="24"
            />
            503, Fortune Business Hub, Science City Road, Near Petrol Pump,
            Sola, Ahmedabad, Gujarat - 380060.
          </div>
          <hr className="border border-borderGray my-6" />
          <div className="w-full flex md:flex-row flex-col items-end lg:justify-between justify-start">
            <div className="lg:w-fit w-full footer_logo flex items-center">
              <Image
                src="/images/brilworks-logo.png"
                alt="Brilworks Logo"
                width="206"
                height="62"
                priority
                className="mb-5 md:mb-0"
              />
            </div>
            <div className="lg:w-fit w-full flex md:items-center flex-col lg:flex-row lg:gap-20 md:gap-0">
              <div className="flex">
                © {new Date().getFullYear()} Brilworks. All Rights Reserved.
              </div>
              <div className="flex items-center justify-between lg:gap-20 md:gap-4 gap-0 mt-2 md:!mt-0">
                <Link href="/terms-and-conditions/" className="transition">
                  Terms of Service
                </Link>
                <Link href="/privacy-policy/" className="transition">
                  Privacy Policy
                </Link>
                <Link href="/site-map/" className="transition">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
          {/* <TawkMessengerReact
          propertyId={`${process.env.NEXT_PUBLIC_TAWKPROPERTY_ID}`}
          widgetId={`${process.env.NEXT_PUBLIC_TAWKWIDGET_ID}`}
        /> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
