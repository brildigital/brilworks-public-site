import Link from "next/link";
import { HonorText } from "./BigText";

const Honors = () => {
  return (
    <>
      <HonorText />
      <div className="w-[90%] mx-auto">
        <div className="swiper-container swiper-review">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="award ng-scope">
                <Link
                  href="https://www.adalo.com/experts/brilworks-software"
                  target="_blank"
                  rel="nofollow noopener"
                >
                  <div className="award_sec8_img1">
                    <img src="/images/review-adalo.png" alt="adalo expert" />
                  </div>

                  <div className="review-text">
                    <p className="ng-binding xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[14px] text-[14px]">
                      Adalo Expert No-Code
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="award ng-scope">
                <Link
                  href="https://topsoftwarecompanies.co/india/software-development/agencies/ahmedabad"
                  target="_blank"
                  rel="nofollow noopener"
                >
                  <div className="award_sec8_img1">
                    <img
                      src="/images/review-top-software-developers.png"
                      alt="top software developers"
                    />
                  </div>

                  <div className="review-text">
                    <p className="ng-binding xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[14px] text-[14px]">
                      Top Software Companies
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="award ng-scope">
                <div className="award_sec8_img1">
                  <img src="/images/review-liferay.png" alt="Liferay Partner" />
                </div>

                <div className="review-text">
                  <p className="ng-binding xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[14px] text-[14px]">
                    Liferay Silver Service Partner
                  </p>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="award ng-scope">
                <Link
                  href="https://clutch.co/profile/brilworks-software#summary"
                  target="_blank"
                  rel="nofollow noopener"
                >
                  <div className="award_sec8_img1">
                    <img src="/images/review-clutch.png" alt="Clutch Reviews" />
                  </div>

                  <div className="review-text">
                    <p className="ng-binding xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[14px] text-[14px]">
                      Clutch 9.9 Ratings
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="award ng-scope">
                <Link
                  href="https://technology.siliconindia.com/ranking/10-most-promising-blockchain-development-companies-%C2%AD-2022-rid-1689.html"
                  target="_blank"
                  rel="nofollow noopener"
                >
                  <div className="award_sec8_img1">
                    <img
                      src="/images/review-blockchain.png"
                      alt="SiliconIndia Blockchain Development Company"
                    />
                  </div>

                  <div className="review-text">
                    <p className="ng-binding xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[14px] text-[14px]">
                      Silicon India Promising Company
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="award ng-scope">
                <Link
                  href="https://www.ambitionbox.com/overview/brilworks-overview"
                  target="_blank"
                  rel="nofollow noopener"
                >
                  <div className="award_sec8_img1">
                    <img
                      src="/images/review-ambitionbox.png"
                      alt="AmbitionBox Rating"
                    />
                  </div>

                  <div className="review-text">
                    <p className="ng-binding xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[14px] text-[14px]">
                      AmbitionBox Rating
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="award ng-scope">
                <Link
                  href="https://www.glassdoor.co.in/Overview/Working-at-Brilworks-EI_IE3883160.11,20.htm"
                  target="_blank"
                  rel="nofollow noopener"
                >
                  <div className="award_sec8_img1">
                    <img
                      src="/images/review-glassdoor.png"
                      alt="SiliconIndia Blockchain Development Company"
                    />
                  </div>

                  <div className="review-text">
                    <p className="ng-binding xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[14px] text-[14px]">
                      Glassdoor 4.8 Ratings
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Honors;
