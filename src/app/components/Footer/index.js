"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import Image from "next/image";
import Button from "../Common/Button";

const Footer = () => {
  const pathname = usePathname();

  return (
    <div className="bg-footerBG">
      <div className="section-padding !pb-16">
        <div className="container max-w-[1280px] mx-auto">
          <div className="flex flex-col lg:flex-row">
            {/* <div className="footer_grid border-b border-borderGray"> */}
            <div className="footer_grid border-b border-borderGray">
              <div className="grid-area-one sxl:col-span-2">
                <div className="lg:mb-10 mb-5">
                  <p className="text-2xl font-semibold !mb-[10px]">
                    BRILLIANT + WORKS
                  </p>
                  <p className="lg:text-[26px] text-2xl lg:leading-[36px] font-semibold sxl:w-[90%] w-full">
                    Hello, we are
                    <span className="font-bold text-themeColor">
                      BRILLIAN’S
                    </span>
                    . Trying to make an effort to put the right people for you
                    to get the best results. Just insight !!
                  </p>
                </div>
                <div className="lg:mb-10 mb-5">
                  <p className="text-base font-bold !mb-[10px]">
                    OFFICE LOCATION
                  </p>
                  <p className="text-base sxl:w-[70%] w-[90%]">
                    503, Fortune Business Hub, Science City Road, Near Shell
                    Petrol Pump, Sola, Ahmedabad, Gujarat 380060
                  </p>
                </div>
              </div>
              <div className="grid-area-two">
                <p className="text-base font-bold !mb-5">QUICK LINKS</p>
                <div>
                  <ul className="footer_link">
                    <li>
                      <Link
                        href="/"
                        className={pathname === "/" ? "page-active" : ""}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact-us/"
                        className={
                          pathname === "/contact-us/" ? "page-active" : ""
                        }
                      >
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/portfolio/"
                        className={
                          pathname === "/portfolio/" ? "page-active" : ""
                        }
                      >
                        Portfolio
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about-us/"
                        className={
                          pathname === "/about-us/" ? "page-active" : ""
                        }
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/our-process/"
                        className={
                          pathname === "/our-process/" ? "page-active" : ""
                        }
                      >
                        Our Process
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog/"
                        className={pathname === "/blog/" ? "page-active" : ""}
                      >
                        Blogs
                      </Link>
                    </li>
                    {process.env.NEXT_PUBLIC_BASE_URL !==
                      "https://www.brilworks.com/" && (
                      <li>
                        <Link
                          href="/gist/"
                          className={pathname === "/gist/" ? "page-active" : ""}
                        >
                          Gist
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
              <div className="grid-area-three">
                <p className="text-base font-bold !mb-5">SOLUTIONS</p>
                <div>
                  <ul className="footer_link">
                    <li>
                      <Link
                        href="/industry/fintech-software-development/"
                        className={
                          pathname === "/industry/fintech-software-development/"
                            ? "page-active"
                            : ""
                        }
                      >
                        Fintech
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/industry/fleet-management-software-development/"
                        className={
                          pathname ===
                          "/industry/fleet-management-software-development/"
                            ? "page-active"
                            : ""
                        }
                      >
                        Fleet Management + GPS
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/industry/healthcare-software-development/"
                        className={
                          pathname ===
                          "/industry/healthcare-software-development/"
                            ? "page-active"
                            : ""
                        }
                      >
                        Health Care
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/industry/media-entertainment-software-development/"
                        className={
                          pathname ===
                          "/industry/media-entertainment-software-development/"
                            ? "page-active"
                            : ""
                        }
                      >
                        Media & Entertainment
                      </Link>
                    </li>
                  </ul>
                </div>
                {process.env.NEXT_PUBLIC_BASE_URL !==
                  "https://www.brilworks.com/" && (
                  <div className="footer_btn">
                    <Button
                      label="Log In"
                      redirect="/login/"
                      className="hidden-xs"
                    />
                  </div>
                )}
              </div>
              <div className="grid-area-four">
                <p className="text-base font-bold !mb-5">TECHNOLOGIES</p>
                <div>
                  <ul className="footer_link">
                    <li>
                      <Link
                        href="/hire-java-developer/"
                        className={
                          pathname === "/hire-java-developer/"
                            ? "page-active"
                            : ""
                        }
                      >
                        Java
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/hire-nodejs-developer/"
                        className={
                          pathname === "/hire-nodejs-developer/"
                            ? "page-active"
                            : ""
                        }
                      >
                        Nodejs
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/hire-reactjs-developer/"
                        className={
                          pathname === "/hire-reactjs-developer/"
                            ? "page-active"
                            : ""
                        }
                      >
                        Reactjs
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/hire-react-native-developer/"
                        className={
                          pathname === "/hire-react-native-developer/"
                            ? "page-active"
                            : ""
                        }
                      >
                        React Native
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/hire-aws-developer/"
                        className={
                          pathname === "/hire-aws-developer/"
                            ? "page-active"
                            : ""
                        }
                      >
                        AWS Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/hire-ui-ux-designer/"
                        className={
                          pathname === "/hire-ui-ux-designer/"
                            ? "page-active"
                            : ""
                        }
                      >
                        UI/UX Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/hire-blockchain-developer/"
                        className={
                          pathname === "/hire-blockchain-developer/"
                            ? "page-active"
                            : ""
                        }
                      >
                        Blockchain Development
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b border-borderGray py-6">
            <p className="pb-6">Partnerships:</p>
            <div className="footer-award flex items-center flex-wrap justify-between gap-4 xl:gap-6">
              <Image
                className="xl:w-fit w-[50px] xl:h-14 h-auto"
                src="/images/select-tier-service-partner-light-1.png"
                alt="AWS Partner"
                width="300"
                height="118"
              />
              <Image
                className="xl:w-fit w-[80px] xl:h-10 h-auto"
                src="/images/review-adalo.png"
                alt="adalo expert"
                width="300"
                height="118"
              />
              <Image
                className="xl:w-fit w-[130px] xl:h-10 h-auto"
                src="/images/Storyblok.svg"
                alt="Storyblok partner"
                width="123"
                height="26"
              />
              <Image
                className="xl:w-fit w-[100px] xl:h-6 h-auto"
                src="/images/dotCMS-logo.svg"
                alt="dotCMS logo"
                width="300"
                height="118"
              />
              <Image
                className="xl:w-fit md:w-[200px] w-[180px] xl:h-10 h-auto"
                src="/images/review-liferay.png"
                alt="Liferay Partner"
                width="300"
                height="118"
              />
            </div>
          </div>
          <div className="border-b border-borderGray py-6">
            <p className="pb-6">Recognized by:</p>
            <div className="footer-award flex items-center flex-wrap justify-between xl:gap-6 gap-4">
            <Link
              href={ "https://clutch.co/profile/brilworks-software#summary"}
                        target="_blank"
                        rel="nofollow noopener"
                      >
            <Image
                className="xl:w-[150px] scale-[0.8]  md:w-[100px] w-[80px]"
                src="/images/global_award_2023 (1).webp"
                alt="global award"
                width="150"
                height="162"
                
              />
              </Link>
              <Link
              href={ "https://clutch.co/profile/brilworks-software#highlights"}
                        target="_blank"
                        rel="nofollow noopener"
                >
              <Image
                className="xl:w-[150px] scale-[0.8]  md:w-[100px] w-[80px]"
                src="/images/top-clutchco-software-developers-gaming-india.webp"
                alt="Gaming India"
                width="150"
                height="162"
              />
              </Link>
              <Link
              href={"https://themanifest.com/in/software-development/java/companies/ahmedabad"}
                        target="_blank"
                        rel="nofollow noopener"
                >
              <Image
                className="xl:w-[110px] scale-[0.8]  md:w-[80px] w-[60px]"
                src="/images/top_the_manifest_app_development_company_ahmedabad_award.png"
                alt="App dev company award"
                width="110"
                height="160"
              />
              </Link>
              <Link
              href={"https://www.designrush.com/agency/profile/brilworks-software"}
                        target="_blank"
                        rel="nofollow noopener"
                >
              <Image
                className="xl:w-[120px] scale-[0.8]  md:w-[90px] w-[70px]"
                src="/images/Top-Mobile-App-Development-Company2.webp"
                alt="Top App dev company award"
                width="120"
                height="130"
              />
              </Link>
              <Link
              href={"https://topsoftwarecompanies.co/india/software-development/agencies/ahmedabad"}
                        target="_blank"
                        rel="nofollow noopener"
                >
              <Image
                className="xl:w-[150px] scale-[0.8]  md:w-[100px] w-[80px]"
                src="/images/review-top-software-developers.png"
                alt="Top software companies logo"
                width="150"
                height="105"
              />
              </Link>
              <Link
              href={"https://themanifest.com/in/software-development/java/companies/ahmedabad"}
                        target="_blank"
                        rel="nofollow noopener"
                >
              <Image
                className="xl:w-[110px] scale-[0.8]  md:w-[80px] w-[60px]"
                src="/images/top_the_manifest_software_developers_ahmedabad_2023_award.png"
                alt="Top manifest review"
                width="110"
                height="160"
              />
              </Link>
              <Link
              href={"https://clutch.co/profile/brilworks-software#highlights"}
                        target="_blank"
                        rel="nofollow noopener"
                >
              

              <Image
                className="xl:w-[150px] scale-[0.8]  md:w-[100px] w-[80px]"
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
                className="xl:w-[150px] scale-[0.8]  md:w-[100px] w-[80px]"
                src="/images/global_award_spring_2024.webp"
                alt="global award"
                width="150"
                height="162"
              />
              </Link>
            </div>
          </div>
          <div className="pt-6">
            <div className="grid sxl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
              <div className="footer-contact border border-borderGray rounded-[14px] p-6">
                <p className="font-bold md:text-3xl text-xl !mb-[10px]">
                  CONTACT # <span className="">SALES</span>
                </p>
                <p className="flex lg:items-center lg:justify-between font-bold text-base flex-wrap md:flex-nowrap">
                  <Link href="tel:919313644148">+91 93136 44148 </Link>/
                  <Link href="mailto:sales@brilworks.com">
                    sales@brilworks.com
                  </Link>
                </p>
              </div>
              <div className="footer-contact border border-borderGray rounded-[14px] p-6">
                <p className="font-bold md:text-3xl text-xl !mb-[10px]">
                  CONTACT # <span className="">CAREER</span>
                </p>
                <p className="flex lg:items-center lg:justify-between font-bold text-base flex-wrap md:flex-nowrap md:w-[90%]">
                  <Link href="tel:919106810920">+91 91068 10920 </Link>/
                  <Link href="mailto:hr@brilworks.com"> hr@brilworks.com</Link>
                </p>
              </div>
              <div className="p-6 border border-borderGray rounded-[14px]">
                <p className="font-bold !text-themeColor md:text-3xl text-xl !mb-[10px] text-center">
                  👋 WE ARE HIRING!!!
                </p>
                <div className="flex items-center justify-center font-bold text-base bg-themeColor w-fit rounded-[34px] px-5 py-[6px] mx-auto cursor-pointer">
                  <Link href="/career/" className="!text-colorWhite">
                    👀 View Positions
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-end items-start lg:justify-between justify-center pt-6">
              <div className="footer_logo">
                <Image
                  src="/images/brilworks-logo.png"
                  alt="Brilworks Logo"
                  width="206"
                  height="62"
                  priority
                  className="size-full wp-image-15"
                />
              </div>
              <div className="md:py-0 py-1">
                © {new Date().getFullYear()} Brilworks. All Rights Reserved.
              </div>
              <div className="flex flex-col md:flex-row md:items-center md:gap-8">
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
              <div className="social_media pt-4">
                <div className="social_media_img">
                  <Link
                    href="https://www.facebook.com/brilwork/"
                    target="_blank"
                  >
                    <img
                      decoding="async"
                      loading="lazy"
                      src="/images/fb.png"
                      alt="Brilworks on Facebook"
                      width={24}
                      height={24}
                    />
                  </Link>
                </div>
                <div className="social_media_img">
                  <Link
                    href="https://www.instagram.com/brilworkssoftware/"
                    target="_blank"
                  >
                    <img
                      decoding="async"
                      loading="lazy"
                      src="/images/insta.png"
                      alt="Brilworks on Instagram"
                      width={24}
                      height={24}
                    />
                  </Link>
                </div>
                <div className="social_media_img">
                  <Link
                    href="https://www.youtube.com/@brilworks"
                    target="_blank"
                  >
                    <img
                      decoding="async"
                      loading="lazy"
                      src="/images/youtube.png"
                      alt="Brilworks on YouTube"
                      width={24}
                      height={24}
                    />
                  </Link>
                </div>
                <div className="social_media_img">
                  <Link
                    href="https://www.linkedin.com/company/brilworks/"
                    target="_blank"
                  >
                    <img
                      decoding="async"
                      loading="lazy"
                      src="/images/linkedin.png"
                      alt="Brilworks on LinkedIn"
                      width={24}
                      height={24}
                    />
                  </Link>
                </div>
                <div className="social_media_img">
                  <Link href="https://dribbble.com/Brilworks" target="_blank">
                    <img
                      decoding="async"
                      loading="lazy"
                      src="/images/social.png"
                      alt="Brilworks on Dribble"
                      width={24}
                      height={24}
                    />
                  </Link>
                </div>
                <div className="social_media_img">
                  <Link
                    href="https://www.behance.net/hellobrilworks"
                    target="_blank"
                  >
                    <img
                      decoding="async"
                      loading="lazy"
                      src="/images/behance.png"
                      alt="Brilworks on Behance"
                      width={24}
                      height={24}
                    />
                  </Link>
                </div>
                <div className="social_media_img">
                  <Link
                    href="https://www.upwork.com/ag/brilworks/"
                    target="_blank"
                  >
                    <img
                      decoding="async"
                      loading="lazy"
                      src="/images/up-01.png"
                      alt="Brilworks on Upwork"
                      width={24}
                      height={24}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <TawkMessengerReact
            propertyId={`${process.env.NEXT_PUBLIC_TAWKPROPERTY_ID}`}
            widgetId={`${process.env.NEXT_PUBLIC_TAWKWIDGET_ID}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;


const slidesData = [
  {
    link: "https://www.adalo.com/experts/brilworks-software",
    imgSrc: "/images/review-adalo.png",
    imgAlt: "adalo expert",
    text: "Adalo Expert No-Code",
  },
  {
    link: "https://partners.amazonaws.com/partners/0018a00001qmc5PAAQ/Brilworks%20Technology%20Pvt%20Ltd",
    imgSrc: "/images/select-tier-service-partner-light-1.png",
    imgAlt: "AWS Partner",
    imgClass: "w-[120px]",
    text: "AWS Partner",
  },
  {
    link: "https://clutch.co/profile/brilworks-software#highlights",
    imgSrc: "/images/top-clutchco-software-developers-gaming-india.webp",
    imgAlt: "Clutch Game Reviews",
    imgClass: "w-[150px]",
    text: "Gaming India",
  },
  {
    link: "https://themanifest.com/in/software-development/java/companies/ahmedabad",
    imgSrc:
      "/images/top_the_manifest_app_development_company_ahmedabad_award.png",
    imgAlt: "App dev Company",
    imgClass: "w-[110px]",
    text: "App Development Company",
  },
  {
    link: "https://www.storyblok.com/pl/brilworks-technology",
    imgSrc: "/images/Storyblok.svg",
    imgAlt: "Storyblok partner",
    imgClass: "w-[180px]",
    text: "Storyblok Partner",
  },
  {
    link: "https://clutch.co/profile/brilworks-software#highlights",
    imgSrc:
      "/images/top-clutchco-software-developers-gps-navigation-gis-india.webp",
    imgAlt: "Clutch GPS, Navigation & GIS Reviews",
    imgClass: "w-[150px]",
    text: "GPS, Navigation & GIS India",
  },
  {
    link: "https://themanifest.com/in/software-development/java/companies/ahmedabad",
    imgSrc:
      "/images/top_the_manifest_software_developers_ahmedabad_2023_award.png",
    imgAlt: "The manifest Reviews",
    imgClass: "w-[110px]",
    text: "Software Developers",
  },
  {
    link: "https://clutch.co/profile/brilworks-software#summary",
    imgSrc: "/images/review-clutch.png",
    imgAlt: "Clutch Reviews",
    text: "Clutch 9.9 Ratings",
  },
  {
    link: "https://www.designrush.com/agency/profile/brilworks-software",
    imgSrc: "/images/Top-Mobile-App-Development-Company2.webp",
    imgAlt: "Top Mobile App Development Company",
    imgClass: "w-[150px]",
    text: "DesignRush Top Company",
  },
  {
    link: "https://www.dotcms.com/partners/brilworks",
    imgSrc: "/images/dotCMS-logo.svg",
    imgAlt: "dotCMS logo",
    imgClass: "w-[150px]",
    text: "dotCMS Partner",
  },
  {
    link: "https://www.ambitionbox.com/overview/brilworks-overview",
    imgSrc: "/images/review-ambitionbox.png",
    imgAlt: "AmbitionBox Rating",
    text: "AmbitionBox Rating",
  },
  {
    link: "https://www.glassdoor.co.in/Overview/Working-at-Brilworks-EI_IE3883160.11,20.htm",
    imgSrc: "/images/review-glassdoor.png",
    imgAlt: "Glassdoor review",
    text: "Glassdoor 4.8 Ratings",
  },
  {
    imgSrc: "/images/review-liferay.png",
    imgAlt: "Liferay Partner",
    text: "Liferay Silver Service Partner",
  },
  {
    link: "https://technology.siliconindia.com/ranking/10-most-promising-blockchain-development-companies-%C2%AD-2022-rid-1689.html",
    imgSrc: "/images/review-blockchain.png",
    imgAlt: "SiliconIndia Blockchain Development Company",
    text: "Silicon India Promising Company",
  },
  {
    link: "https://topsoftwarecompanies.co/india/software-development/agencies/ahmedabad",
    imgSrc: "/images/review-top-software-developers.png",
    imgAlt: "top software developers",
    text: "Top Software Companies",
  },
  {
    link: "https://clutch.co/profile/brilworks-software#summary",
    imgSrc:"/images/global_award_spring_2024.webp",
    imgAlt: "global award spring",
    text: "Global Award Spring",
    imgClass:"scale-[0.8]"
  },
  {
    link: "https://clutch.co/profile/brilworks-software#summary",
    imgSrc:"/images/global_award_2023 (1).webp",
    imgAlt: "global award fall",
    text: "Global Award Fall",
    imgClass:"scale-[0.8]"
  }

];
