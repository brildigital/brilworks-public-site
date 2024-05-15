/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useMediaQuery } from "react-responsive";
import { scrollEffect } from "../lib/commonFunction";

const ToolsAndGetInTouch = dynamic(() => import("./ToolsAndGetInTouch"));

const Portfolio = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  useEffect(() => {
    scrollEffect();
    window.addEventListener("scroll", scrollEffect);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);
  return (
    <div className="container mx-auto">
      <section className="portfolio">
        <div className="mx-auto service_width">
          <div className="banner_padding">
            <div className="sec1_service relative">
              <p>
                <Image
                  src={
                    isMobile
                      ? "https://a.storyblok.com/f/219851/1080x1080/8e827beb35/portfolio-mobile-size.webp"
                      : "https://a.storyblok.com/f/219851/1398x781/55093620b7/banner-portfolio.webp"
                  }
                  width={isMobile ? 400 : 1080}
                  height={isMobile ? 300 : 400}
                  alt="Portfolio banner"
                  sizes="100vw"
                />
              </p>
            </div>
          </div>
        </div>

        <div className="service_width">
          <div className="sec6_title md:!pt-24">
            <h1 className="head-title">SEE TEAM BRILLIANT IN ACTION</h1>
          </div>
          <div className="portfolio_sec1_txt2 portfolio_sec1_border ">
            <p>
              Our portfolio of digital experiences helps companies win in the
              industry.
            </p>
          </div>
        </div>

        <div className="portflio_flex_row service_width reveal">
          <div className="portflio_flex_40">
            <div className="portfolio_sec1_txt1">
              <p>
                A Unique In-car
                <br />
                Advertising Application
              </p>
            </div>
            <div className="portfolio_sec1_txt2 portfolio_description_width">
              <p>
                Vugo is a seed-stage auto tech infotainment startup, Mobility
                Media™ platform is monetizing ridesharing today, and
                self-driving mobility services tomorrow.
              </p>
            </div>
            <Link href="/portfolio/vugo/" className="portfolio_know_more">
              <div className="get_icon">
                <img
                  decoding="async"
                  loading="lazy"
                  className="alignnone"
                  src="/images/right_arrow.png"
                  alt="right arrow"
                />
              </div>
              <p>Know More</p>
            </Link>
          </div>
          <div className="portflio_flex_60">
            <div className="">
              <div className="portfolio_color_style">
                <div className="porfolio_sec1_img relative">
                  <img
                    loading="lazy"
                    decoding="async"
                    className="alignnone"
                    src="/images/vugo-1.jpg"
                    alt="vugo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="portflio_flex_row portfolio_sec service_width reveal">
          <div className="portflio_flex_60 order_2">
            <div className="">
              <div className="portfolio_color_style">
                <div className="porfolio_sec1_img relative">
                  <img
                    loading="lazy"
                    decoding="async"
                    className="alignnone"
                    src="/images/rastrack.jpg"
                    alt="Rastrack"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="portflio_flex_40 order_1">
            <div className="portfolio_sec1_txt1">
              <p>
                Improve Fleet’s
                <br />
                Efficiency Application
              </p>
            </div>
            <div className="portfolio_sec1_txt2 portfolio_description_width">
              <p>
                Rastrack specializes in the control and satellite monitoring of
                assets or individuals using networking technologies.
              </p>
            </div>
            <Link href="/portfolio/rastrack/" className="portfolio_know_more">
              <div className="get_icon">
                <img
                  decoding="async"
                  loading="lazy"
                  className="alignnone"
                  src="/images/right_arrow.png"
                  alt="right arrow"
                />
              </div>
              <p>Know More</p>
            </Link>
          </div>
        </div>

        <div className="portflio_flex_row service_width reveal">
          <div className="portflio_flex_40">
            <div className="portfolio_sec1_txt1">
              <p>
                A Custom
                <br />
                Fintech Application
              </p>
            </div>
            <div className="portfolio_sec1_txt2 portfolio_description_width">
              <p>
                Send Cheaper and faster Domestic and Crossborder Payments –
                Orokii provides its customers with one of the lowest transaction
                fees in the industry.
              </p>
            </div>
            <Link href="/portfolio/orokii/" className="portfolio_know_more">
              <div className="get_icon">
                <img
                  decoding="async"
                  loading="lazy"
                  className="alignnone"
                  src="/images/right_arrow.png"
                  alt="right arrow"
                />
              </div>
              <p>Know More</p>
            </Link>
          </div>
          <div className="portflio_flex_60">
            <div className="">
              <div className="portfolio_color_style">
                <div className="porfolio_sec1_img relative">
                  <img
                    loading="lazy"
                    decoding="async"
                    className="alignnone"
                    src="/images/orokii.jpg"
                    alt="Orokii"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="portflio_flex_row portfolio_sec service_width reveal">
          <div className="portflio_flex_60 order_2">
            <div className="">
              <div className="portfolio_color_style">
                <div className="porfolio_sec1_img relative">
                  <img
                    loading="lazy"
                    decoding="async"
                    className="alignnone"
                    src="/images/Eccocar.jpg"
                    alt="Eccocar"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="portflio_flex_40 order_1">
            <div className="portfolio_sec1_txt1">
              <p>
                A Payment
                <br />
                Gateway Application
              </p>
            </div>
            <div className="portfolio_sec1_txt2 portfolio_description_width">
              <p>
                Eccocar is a platform to launch, operate and scale digital
                mobility services, designed hand in hand with Rent-a-Cars,
                Dealers and Fleet Managers.
              </p>
            </div>
            <Link href="/portfolio/eccocar/" className="portfolio_know_more">
              <div className="get_icon">
                <img
                  decoding="async"
                  loading="lazy"
                  className="alignnone"
                  src="/images/right_arrow.png"
                  alt="right arrow"
                />
              </div>
              <p>Know More</p>
            </Link>
          </div>
        </div>

        <div className="portflio_flex_row service_width reveal">
          <div className="portflio_flex_40">
            <div className="portfolio_sec1_txt1">
              <p>
                A Smart
                <br />
                Software Solution
              </p>
            </div>
            <div className="portfolio_sec1_txt2 portfolio_description_width">
              <p>
                Trackimo is a smart GPS/GSM/Wi-Fi tracker that keeps your
                valuables safe and alerts you of troubles. Trackimo works
                worldwide, indoors and outdoors.
              </p>
            </div>
            <Link href="/portfolio/trackimo/" className="portfolio_know_more">
              <div className="get_icon">
                <img
                  decoding="async"
                  loading="lazy"
                  className="alignnone"
                  src="/images/right_arrow.png"
                  alt="right arrow"
                />
              </div>

              <p href="/portfolio/trackimo/">Know More</p>
            </Link>
          </div>
          <div className="portflio_flex_60">
            <div className="">
              <div className="portfolio_color_style">
                <div className="porfolio_sec1_img relative">
                  <img
                    loading="lazy"
                    decoding="async"
                    className="alignnone"
                    src="/images/gps-trackers-devices-uses2-1.webp"
                    alt="Trackimo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <ToolsAndGetInTouch />
      </section>
    </div>
  );
};

export default Portfolio;
