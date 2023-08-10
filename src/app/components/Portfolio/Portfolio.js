/* eslint-disable @next/next/no-img-element */
"use client"
import Link from "next/link";
import ToolsAndGetInTouch from "./ToolsAndGetInTouch";
import Head from "next/head";
import { useEffect } from "react";

const Portfolio = () => {
  useEffect(() => {
    document.querySelector(".scroll-shadows").scrollTop = 100;
  });
  return (
    <div className="scroll-shadows">
      <section className="portfolio">
        <div className="mx-auto service_width">
          <div className="banner_padding">
            <div className="sec1_service relative">
              <p>
                <img
                  className="hidden-xs alignnone wp-image-252 size-medium"
                  src="/images/Banner_portfolio.jpg"
                  alt="portfolio"
                />
                <img
                  className="visible-xs alignnone"
                  src="/images/portfolio-mobile-size.jpg"
                  alt="portfolio"
                />
              </p>
            </div>
          </div>
        </div>

        <div className="service_width">
          <div className="sec6_title">
            <p>SEE TEAM BRILLIANT IN ACTION</p>
          </div>
          <div className="portfolio_sec1_txt2 portfolio_sec1_border">
            <p>
              Our portfolio of digital experiences helps companies win in the
              industry.
            </p>
          </div>
        </div>

        <div className="portflio_flex_row service_width">
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
            <div className="portfolio_know_more">
              <div className="get_icon">
                <Link href="/portfolio/vugo/">
                  <img
                    className="alignnone"
                    src="/images/right_arrow.png"
                    alt=""
                  />
                </Link>
              </div>
              <div className="portfolio_know_more_txt">
                <p>
                  <Link href="/portfolio/vugo/">Know More</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="portflio_flex_60">
            <div className="">
              <div className="portfolio_color_style">
                <div className="porfolio_sec1_img relative">
                  <img
                    className="alignnone"
                    src="/images/vugo-1.jpg"
                    alt="vugo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="portflio_flex_row portfolio_sec service_width">
          <div className="portflio_flex_60 order_2">
            <div className="">
              <div className="portfolio_color_style">
                <div className="porfolio_sec1_img relative">
                  <img
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
            <div className="portfolio_know_more">
              <div className="get_icon">
                <Link href="/portfolio/rastrack/">
                  <img
                    className="alignnone"
                    src="/images/right_arrow.png"
                    alt=""
                  />
                </Link>
              </div>
              <div className="portfolio_know_more_txt">
                <p>
                  <Link href="/portfolio/rastrack/">Know More</Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="portflio_flex_row service_width">
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
            <div className="portfolio_know_more">
              <div className="get_icon">
                <Link href="/portfolio/orokii/">
                  <img
                    className="alignnone"
                    src="/images/right_arrow.png"
                    alt=""
                  />
                </Link>
              </div>
              <div className="portfolio_know_more_txt">
                <Link href="/portfolio/orokii/">Know More</Link>
              </div>
            </div>
          </div>
          <div className="portflio_flex_60">
            <div className="">
              <div className="portfolio_color_style">
                <div className="porfolio_sec1_img relative">
                  <img
                    className="alignnone"
                    src="/images/orokii.jpg"
                    alt="Orokii"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="portflio_flex_row portfolio_sec service_width">
          <div className="portflio_flex_60 order_2">
            <div className="">
              <div className="portfolio_color_style">
                <div className="porfolio_sec1_img relative">
                  <img
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
            <div className="portfolio_know_more">
              <div className="get_icon">
                <Link href="/portfolio/eccocar/">
                  <img
                    className="alignnone"
                    src="/images/right_arrow.png"
                    alt=""
                  />
                </Link>
              </div>
              <div className="portfolio_know_more_txt">
                <p>
                  <Link href="/portfolio/eccocar/">Know More</Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="portflio_flex_row service_width">
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
            <div className="portfolio_know_more">
              <div className="get_icon">
                <Link href="/portfolio/trackimo/">
                  <img
                    className="alignnone"
                    src="/images/right_arrow.png"
                    alt=""
                  />
                </Link>
              </div>
              <div className="portfolio_know_more_txt">
                <p>
                  <Link href="/portfolio/trackimo/">Know More</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="portflio_flex_60">
            <div className="">
              <div className="portfolio_color_style">
                <div className="porfolio_sec1_img relative">
                  <img
                    className="alignnone"
                    src="/images/GPS_Trackers_Devices-Uses2-1.jpg"
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
