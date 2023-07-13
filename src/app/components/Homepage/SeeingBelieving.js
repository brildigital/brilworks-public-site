import Link from "next/link";
import { BelievingText } from "./BigText";

const SeeingBelieving = () => {
  return (
    <>
      <BelievingText />

      <div className="w-[90%] mx-auto">
        <div className="swiper-container" id="swiper-portfolio">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <Link href="">
                <img
                  className="alignnone wp-image-45 size-full"
                  src="https://www.brilworks.com/wp-content/uploads/2023/01/Vugo.jpg"
                  alt="vugo"
                />

                <div className="portfolio-home">
                  <div className="portfolio-title">
                    <h2>VUGO</h2>
                  </div>
                  <div className="portfolio-desc">
                    <p>
                      Founded in 2015, Vugo is the first company to develop
                      in-car advertising for the rideshare marketplace.
                      Headquartered in Minneapolis, Minnesota, Vugo develops
                      highly targeted, responsive ads on billboards above
                      vehicles for hire.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="swiper-slide">
              <Link href="https://www.brilworks.com/portfolio/trackimo/">
                <img
                  className="alignnone wp-image-47 size-full"
                  src="https://www.brilworks.com/wp-content/uploads/2023/01/Trackimo.jpg"
                  alt="trackimo"
                />

                <div className="portfolio-home">
                  <div className="portfolio-title">
                    <h2>TRACKIMO</h2>
                  </div>
                  <div className="portfolio-desc">
                    <p>
                      Trackimo specializes in highly reliable and effective
                      tracking solutions. The company's end-to-end global IoT
                      platform provides personal safety and tracking solutions
                      to more than 500,000 consumers and more than 50 enterprise
                      clients worldwide.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="swiper-slide">
              <Link href="https://www.brilworks.com/portfolio/orokii/">
                <img
                  className="alignnone wp-image-48 size-full"
                  src="https://www.brilworks.com/wp-content/uploads/2023/01/Orokii.jpg"
                  alt="orokii"
                />

                <div className="portfolio-home">
                  <div className="portfolio-title">
                    <h2>OROKII</h2>
                  </div>
                  <div className="portfolio-desc">
                    <p>
                      Orokii is an on-demand platform that allows you to send
                      cross-border payments anywhere in the world at real-time
                      prices. Orokii is making domestic and cross-border
                      payments cheaper, faster, and safer using blockchain
                      technology.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="swiper-slide">
              <Link href="https://www.brilworks.com/portfolio/eccocar/">
                <img
                  className="alignnone wp-image-49 size-full"
                  src="https://www.brilworks.com/wp-content/uploads/2023/01/Eccocar.jpg"
                  alt="eccocar"
                />

                <div className="portfolio-home">
                  <div className="portfolio-title">
                    <h2>ECCOCAR</h2>
                  </div>
                  <div className="portfolio-desc">
                    <p>
                      Eccocar is a SaaS Company that provides technology for
                      rental cars to adapt to new mobility trends and offers a
                      mobility service on demand. Eccocar digitizes rent-a-car
                      and new on-demand mobility providers, such as ride-hailing
                      and ride-sharing operators, and generates white-label APPs
                      for them to launch their service.
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="swiper-slide">
              <Link href="https://www.brilworks.com/portfolio/rastrack/">
                <img
                  className="alignnone wp-image-50 size-full"
                  src="https://www.brilworks.com/wp-content/uploads/2023/01/Rastrack.jpg"
                  alt="rastrack"
                />

                <div className="portfolio-home">
                  <div className="portfolio-title">
                    <h2>RASTRACK</h2>
                  </div>
                  <div className="portfolio-desc">
                    <p>
                      Orokii is an on-demand platform that allows you to send
                      cross-border payments anywhere in the world at real-time
                      prices. Orokii is making domestic and cross-border
                      payments cheaper, faster, and safer using blockchain
                      technology.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center lg:gap-[80px] gap-[20px] flex-col sm:flex-row">
        <div className="flex items-center justify-center gap-[20px] about_btn transition lg:mt-[60px] mt-[16px]">
          <div className="about_txt">
            <Link href="https://www.brilworks.com/about-us/" className="text-[21px]">
              View all works
            </Link>
          </div>
          <div className="aerrow relative">
            <img
              decoding="async"
              loading="lazy"
              className="black_aerrow alignnone wp-image-28 size-full"
              src="images/black_aerrow-1.png"
              alt="arrow"
              width="46"
              height="18"
            />
            <img
              decoding="async"
              loading="lazy"
              className="gradiant_aerrow alignnone wp-image-29 size-full"
              src="images/arrow-gradiant.png"
              alt="arrow"
              width="46"
              height="18"
            />
          </div>
        </div>
        <div className="flex items-center justify-center gap-[20px] about_btn transition lg:mt-[60px] mt-[16px]">
          <div className="about_txt">
            <Link href="https://www.brilworks.com/about-us/" className="text-[21px]">
              Contact Us
            </Link>
          </div>
          <div className="aerrow relative">
            <img
              decoding="async"
              loading="lazy"
              className="black_aerrow alignnone wp-image-28 size-full"
              src="images/black_aerrow-1.png"
              alt="arrow"
              width="46"
              height="18"
            />
            <img
              decoding="async"
              loading="lazy"
              className="gradiant_aerrow alignnone wp-image-29 size-full"
              src="images/arrow-gradiant.png"
              alt="arrow"
              width="46"
              height="18"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SeeingBelieving;
