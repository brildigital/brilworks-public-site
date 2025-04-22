"use client";
import Link from "next/link";
import Image from "next/image";
import Heading from "../HTMLComponents/Heading";
import "@splidejs/splide/dist/css/splide.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.25 && rating - fullStars < 0.75;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <>
      {[...Array(fullStars)].map((_, i) => (
        <FontAwesomeIcon
          key={`full-${i}`}
          icon={faStar}
          className="text-[#FF9345]"
        />
      ))}
      {halfStar && (
        <FontAwesomeIcon icon={faStarHalfAlt} className="text-[#FF9345]" />
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <FontAwesomeIcon
          key={`empty-${i}`}
          icon={faStar}
          className="text-[#FF9345]"
        />
      ))}
    </>
  );
};

const BrilworksCareerReview = () => {
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

  const glassdoorRatings = [
    { title: "Overall", rating: 4.8 },
    { title: "Culture & Values", rating: 4.8 },
    { title: "Diversity & Inclusion", rating: 4.6 },
    { title: "Work/Life Balance", rating: 4.7 },
    { title: "Senior Management", rating: 4.7 },
    { title: "Compensation & Benefits", rating: 4.5 },
    { title: "Career Opportunities", rating: 4.7 },
  ];

  return (
    <>
      <div className="container max-w-[1280px] main-section-padding w-full mx-auto">
        <div className="flex md:items-center items-start justify-between">
          <Heading
            type="h2"
            className="lg:!text-[34px] md:!text-3xl !text-2xl"
            text={
              <div className="flex md:flex-row flex-col md:items-center items-start gap-1">
                Hear it from our people
                <span className="star_clutch !text-[20px] ml-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FontAwesomeIcon
                      key={index}
                      icon={faStar}
                      size="sm"
                      className="text-[#FF9345] mr-1"
                    />
                  ))}
                </span>
              </div>
            }
          />
          <Link href="https://widget.clutch.co/widgets/get/12?ref_domain=192.168.50.12&uid=1881351&primary_color=%2308537E&secondary_color=%2308537E&rel_nofollow=true&reviews=2054376%2C2040492%2C2032289%2C2010928%2C1968060%2C1960170%2C1955515%2C1946156%2C1944400%2C1942781%2C1942541%2C1941715&ref_path=/brilworks/home/">
            <Image
              className="lg:w-60 md:w-40 w-28 pl-1 md:pt-0 pt-2"
              width="275"
              height="52"
              src="/images/ambitions_logo.png"
              alt="ambitionbox reviews"
            />
          </Link>
        </div>
        <Splide
          className="lg:!pt-10 md:!pt-7.5 !pt-5"
          options={{
            type: "loop",
            drag: "free",
            arrows: false,
            gap: 20,
            pagination: true,
            perPage: 3,
            autoScroll: {
              pauseOnHover: true,
              pauseOnFocus: false,
              rewind: false,
              speed: 1,
            },
            breakpoints: {
              1080: {
                perPage: 3,
              },
              1023: {
                perPage: 3,
                gap: 15,
              },
              767: {
                perPage: 3,
                gap: 10,
              },
              535: {
                perPage: 1,
                gap: 10,
              },
            },
          }}
          extensions={{ AutoScroll }}
        >
          {careerReviewData?.map((dataItem, index) => (
            <SplideSlide key={index}>
              <div className="mb-10">
                <div className="border rounded-2xl p-5 !max-w-[380px]">
                  <Image
                    className="w-[44px] h-[44px] mb-6"
                    src="/images/quote.svg"
                    width={32}
                    height={32}
                    alt="quote"
                  />
                  <div>
                    <p className="mb-4 lg:!text-lg !text-base min-h-[100px]">
                      {dataItem?.description}
                    </p>
                    <p className="lg:!text-xl !text-lg font-medium">
                      {dataItem?.reviewer}
                    </p>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <div className="hire-team-section">
        <div className="banner-layer h-full min-h-[200px] md:max-h-[236px] max-h-full">
          <div className="container max-w-[1280px] main-section-padding !py-10 mx-auto">
            <div className="flex items-center justify-end text-white font-medium">
              Powered By&nbsp;
              <Image
                className="lg:w-[120px] md:w-24 w-20"
                src="/images/svgviewer-output-1.png"
                alt="glassdoor reviews"
                width={120}
                height={24}
              />
            </div>
            <Splide
              className="lg:!pt-10 md:!pt-7.5 !pt-5"
              options={{
                autoWidth: true,
                type: "loop",
                drag: "free",
                arrows: false,
                gap: 20,
                pagination: false,
                perPage: 2.5,
                autoScroll: {
                  pauseOnHover: true,
                  pauseOnFocus: false,
                  rewind: false,
                  speed: 1,
                },
                breakpoints: {
                  1080: {
                    perPage: 3,
                    gap: 10,
                  },
                  767: {
                    perPage: 2,
                    gap: 10,
                  },
                  535: {
                    perPage: 1,
                    gap: 10,
                  },
                },
              }}
              extensions={{ AutoScroll }}
            >
              {glassdoorRatings?.map((ratingItem, index) => (
                <SplideSlide key={index} className="w-fit">
                  <div className="mb-10">
                    <div className="border rounded-2xl bg-navyBlue md:p-6 p-4">
                      <div className="flex md:flex-row flex-col md:items-center justify-start md:gap-4 gap-2">
                        <div>
                          <p className="text-white sxl:text-2xl md:text-xl text-lg font-medium">
                            {ratingItem?.title}&nbsp; ({ratingItem?.rating})
                          </p>
                        </div>
                        <div>
                          <StarRating rating={ratingItem?.rating} />
                        </div>
                      </div>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrilworksCareerReview;
