"use client";
import "./career.scss";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";

const BrilworksCareerReview = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ maxWidth: 1024 });
  const isDesktop = useMediaQuery({ minWidth: 1025 });

  const careerReviewData = [
    {
      reviewer: "Software Developer",
      description: "Good place to work and learn new things.",
    },
    {
      reviewer: "Software Developer",
      description:
        "This has just been like one of the dream companies to work in.",
    },
    {
      reviewer: "Ui/Ux Designer",
      description: "Good work-life balance and supportive team members.",
    },
    {
      reviewer: "Team Lead(Technical)",
      description:
        "Challenging work, motivating clients, supportive management & great co-workers.",
    },
  ];

  return (
    <>
      <div className="software-review-container ">
        <div className="lg:!pt-[8rem] !pt-[4rem] career_review">
          <Swiper
            className="!w-{90%]"
            modules={[Pagination]}
            spaceBetween={isMobile ? 10 : 21}
            slidesPerView={
              isMobile ? 1 : 3 && isTablet ? 2 : 3 && isDesktop ? 3 : 3
            }
            slidesPerGroup={isMobile ? 1 : 3}
            loopFillGroupWithBlank={true}
            speed={1500}
            loop={false}
            pagination={{ clickable: true }}
          >
            {careerReviewData?.length
              ? careerReviewData.map((data, index) => (
                  <SwiperSlide key={index}>
                    <div className="wpb_wrapper">
                      <div className="clutch-swiper home_sec3_box">
                        <div className="dots_flex">
                          <div className="dots !bg-[#00dfb8]"></div>
                          <div className="dots"></div>
                          <div className="dots"></div>
                        </div>
                        <div className="white-background">
                          <div className="clutch_content">
                            <p>{data?.description}</p>
                          </div>
                          <div className="clutch_author">
                            <div className="clutch_img"></div>
                            <div className="clutch_position">
                              <p>{data?.reviewer}</p>
                              <p>
                                <span className="star_clutch">
                                  <FontAwesomeIcon
                                    icon={faStar}
                                    className="review_stars"
                                  />
                                  <FontAwesomeIcon
                                    icon={faStar}
                                    className="review_stars"
                                  />
                                  <FontAwesomeIcon
                                    icon={faStar}
                                    className="review_stars"
                                  />
                                  <FontAwesomeIcon
                                    icon={faStar}
                                    className="review_stars"
                                  />
                                  <FontAwesomeIcon
                                    icon={faStar}
                                    className="review_stars"
                                  />
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              : null}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default BrilworksCareerReview;
