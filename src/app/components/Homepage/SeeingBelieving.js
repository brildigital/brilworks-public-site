import "../../styles/Homepage.scss";
import Link from "next/link";
import { BelievingText } from "./BigText";
import Image from "next/image";
import LinkWithArrow from "../Common/LinkWithArrow";

const SeeingBelieving = () => {
  const portfolioItems = [
    {
      title: "VUGO",
      description:
        "Founded in 2015, Vugo is the first company to develop in-car advertising for the rideshare marketplace. Headquartered in Minneapolis, Minnesota, Vugo develops highly targeted, responsive ads on billboards above vehicles for hire.",
      link: "/portfolio/vugo/",
      shortDesc:
        "150% customer base increase with product engineering services for vugo",
      image: "https://a.storyblok.com/f/219851/500x375/77c04adb56/vugo.jpg",
      alt: "vugo",
      bgColor: "!bg-[#2cbc89]",
    },
    {
      title: "TRACKIMO",
      description:
        "Trackimo specializes in highly reliable and effective tracking solutions. The company's end-to-end global IoT platform provides personal safety and tracking solutions to more than 500,000 consumers and more than 50 enterprise clients worldwide.",
      link: "/portfolio/trackimo/",
      shortDesc:
        "Our product engineering and AWS consulting services enable Trackimo to support 60,000 active devices seamlessly.",
      image: "https://a.storyblok.com/f/219851/500x375/f472daac29/trackimo.jpg",
      alt: "trackimo",
      bgColor: "!bg-[#e8eed5]",
    },
    {
      title: "OROKII",
      description:
        "Orokii is an on-demand platform that allows you to send cross-border payments anywhere in the world at real-time prices. Orokii is making domestic and cross-border payments cheaper, faster, and safer using blockchain technology.",
      link: "/portfolio/orokii/",
      shortDesc:
        "More than 5000 customers onboarded in a year with product development services for orokii.",
      image: "/images/orokii1.webp",
      alt: "orokii",
      bgColor: "!bg-[#377df8]",
    },
    {
      title: "ECCOCAR",
      description:
        "Eccocar is a SaaS Company that provides technology for rental cars to adapt to new mobility trends and offers a mobility service on demand. Eccocar digitizes rent-a-car and new on-demand mobility providers, such as ride-hailing and ride-sharing operators, and generates white-label APPs for them to launch their service.",
      link: "/portfolio/eccocar/",
      shortDesc:
        "Eccocar successfully onboarded 1,000+ fleet managers/users through our product engineering and AWS consulting services",
      image:
        "https://a.storyblok.com/f/219851/500x375/8707c8ae6a/eccocar-1.jpg",
      alt: "eccocar",
      bgColor: "!bg-[#f13134]",
    },
    {
      title: "RASTRACK",
      description:
        "Rastrack is a satellite tracking and real-time monitoring company which helps owners track their vehicles with detailed analysis. Rastrack specializes in the control and satellite monitoring of assets or individuals using networking technologies.",
      link: "/portfolio/rastrack/",
      image: "/images/rastrack1.webp",
      alt: "rastrack",
      bgColor: "!bg-[#2cbc89]",
    },
  ];

  return (
    <div className="bg-sectionBG">
      <div className="container mx-auto main-section-padding reveal">
        <BelievingText />
        <div className="md:w-4/5 w-full mx-auto grid md:grid-cols-2 grid-cols-1 gap-10 pt-4">
          {portfolioItems
            .slice(0, 4)
            .map(
              ({ title, image, shortDesc, description, alt, link }, index) => {
                return (
                  <div
                    className="min-w-[300px] h-full border border-themeColor shadow-none hover:shadow-lg bg-colorWhite rounded-[25px] w-fit"
                    key={index}
                  >
                    <Link href={link} prefetch={true}>
                      <Image
                        className="rounded-[25px]"
                        src={image}
                        alt={alt}
                        width="500"
                        height="475"
                        sizes="(min-width: 1040px) 42.35vw, (min-width: 640px) 60.84vw, calc(100vw - 30px)"
                      />

                      <div className="flex flex-col p-4 items-start">
                        <div className="w-full flex items-center justify-between">
                          <div className="text-2xl font-bold text-themeColor mb-1">
                            {title}
                          </div>
                          <div className="text-colorGray uppercase">
                            Mobile App
                          </div>
                        </div>
                        <h2 className="w-full mb-1 !text-xl font-semibold">
                          {shortDesc}
                        </h2>
                        <p className="text-colorGray text-base">
                          {description}
                        </p>
                      </div>
                    </Link>
                  </div>
                );
              }
            )}
        </div>
        <div>
          <LinkWithArrow
            href="/portfolio/"
            label=" View all works"
            className="justify-start mobile:justify-center"
          />
        </div>
      </div>
    </div>
  );
};

export default SeeingBelieving;
