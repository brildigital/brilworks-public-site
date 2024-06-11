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
      <div className="container mx-auto lg:w-[80%] main-section-padding">
        <div className="flex flex-col lg:flex-row">
          {/* <div className="footer_grid border-b border-borderGray"> */}
          <div className="footer_grid">
            <div className="grid-area-one sxl:col-span-2">
              <div className="lg:mb-10 mb-5">
                <p className="text-2xl font-semibold !mb-[10px]">
                  BRILLIANT + WORKS
                </p>
                <p className="lg:text-[26px] text-2xl lg:leading-[36px] font-semibold sxl:w-[90%] w-full">
                  Hello, we are
                  <span className="font-bold text-themeColor">BRILLIAN’S</span>.
                  Trying to make an effort to put the right people for you to
                  get the best results. Just insight !!
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
                      className={pathname === "/about-us/" ? "page-active" : ""}
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
                        pathname === "/hire-aws-developer/" ? "page-active" : ""
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
        {/* <div className="border-b border-borderGray pt-6"> */}
        <div className="">
          <Image
            src="/images/footer-award-img.png"
            alt="Award images"
            width="1600"
            height="600"
          />
        </div>
        {/* <div className="pt-6"> */}
        <div className="">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
            <div className="footer-contact border border-borderGray rounded-[14px] p-6">
              <p className="font-bold md:text-3xl text-xl !mb-[10px]">
                CONTACT # <span className="">SALES</span>
              </p>
              <p className="flex lg:items-center lg:justify-between font-bold text-base flex-wrap md:w-3/4">
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
              <p className="flex lg:items-center lg:justify-between font-bold text-base flex-wrap md:w-3/4">
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
                priority={true}
                className="size-full wp-image-15"
              />
            </div>
            <div className="py-1">
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
                <Link href="https://www.facebook.com/brilwork/" target="_blank">
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
                <Link href="https://www.youtube.com/@brilworks" target="_blank">
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
  );
};

export default Footer;

{
  /* <>
{!pathname.includes("dashboard") && (
  <div className="bg-footerBG">
    <div className="container mx-auto main-section-padding !pb-0">
      <div className="footer_width">
        <div className="footer_grid">
          <div className="grid-area-one">
            <div className="add_loc_email">
              <div className="quick_link">
                <p>OFFICE LOCATION</p>
              </div>
              <ul className="footer_link">
                <li>
                  503, Fortune Business Hub, Science City Road, Near Shell
                  Petrol Pump, Sola, Ahmedabad, Gujarat 380060
                </li>
              </ul>
              <div className="quick_link">
                <p>EMAIL</p>
              </div>
              <ul className="footer_link">
                <li>
                  <a href="mailto:hr@brilworks.com">hr@brilworks.com</a>
                  <br />
                  <a href="mailto:sales@brilworks.com">
                    sales@brilworks.com
                  </a>
                </li>
              </ul>
              <div className="quick_link">
                <p>CONTACT</p>
              </div>
              <ul className="footer_link">
                <li>
                  For career:{" "}
                  <a href="tel:919313644148">+91 91068 10920</a>
                  <br />
                  For sales: <a href="tel:919313644148">+91 9313644148</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid-area-two md:pl-8">
            <div className="quick_link">
              <p>QUICK LINKS</p>
            </div>
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
                      className={
                        pathname === "/gist/" ? "page-active" : ""
                      }
                    >
                      Gist
                    </Link>
                  </li>
                )}
              </ul>
            </div>
            <div className="footer_btn pt-4">
              <Link href="/career/">
                <div className="header_sec1_txt2 hidden-xs">
                  <p className="transition">We’re Hiring!</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="grid-area-three">
            <div className="quick_link">
              <p>SOLUTIONS</p>
            </div>
            <div>
              <ul className="footer_link">
                <li>
                  <Link
                    href="/industry/fintech-software-development/"
                    className={
                      pathname ===
                      "/industry/fintech-software-development/"
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
              <div className="footer_btn pt-4">
                <Link href="/login/">
                  <div className="header_sec1_txt2 hidden-xs">
                    <p className="transition">Log In</p>
                  </div>
                </Link>
              </div>
            )}
          </div>
          <div className="grid-area-four md:pl-12">
            <div className="quick_link">
              <p>TECHNOLOGIES</p>
            </div>
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
        <div className=""></div>
      </div>

      <div className="footer_last_width">
        <div className="footer_txt_flex">
          <div className="footer_logo">
            <Image
              src="/images/brilworks-logo.png"
              alt="Brilworks Logo"
              width="206"
              height="62"
              priority={true}
              className="size-full wp-image-15"
            />
          </div>
          <div className="">© {new Date().getFullYear()} BRILWORKS</div>
          <div className="flex items-center gap-8">
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
          <div className="social_media">
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
)}
</> */
}
