"use client";
import { useEffect, useState } from "react";
import Swiper from "swiper";
import "swiper/css";
import Header from "../components/Header/Header";
import Blogs from "../components/Homepage/Blogs";
import Honors from "../components/Homepage/Honors";
import Brilliant from "../components/Homepage/Brilliant";
import ContactUs from "../components/Homepage/ContactUs";
import GameChanger from "../components/Homepage/GameChanger";
import ClientReviews from "../components/Homepage/ClientReviews";
import DomainWorking from "../components/Homepage/DomainWorking";
import HomePageFooter from "../components/Homepage/HomePageFooter";
import ExtensionOfTeam from "../components/Homepage/ExtensionOfTeam";
import SeeingBelieving from "../components/Homepage/SeeingBelieving";
import AutoSlidesFooter from "../components/Homepage/AutoSlidesFooter";

const page = () => {
  const [lastScrolledPosition, setLastScrolledPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    const handleScroll = () => {
      const newScrollDirection =
        lastScrolledPosition > window.scrollY ? "up" : "down";
      setScrollDirection(newScrollDirection);
      setLastScrolledPosition(window.scrollY);

      console.log(newScrollDirection, "scroll direction");

      if (window.scrollY > 150 && newScrollDirection === "down") {
        if (
          !document
            .querySelector("header .header")
            .classList.contains("header-hide")
        ) {
          document.querySelector("header .header").classList.add("header-hide");
        }
      }

      if (newScrollDirection === "up") {
        if (
          document
            .querySelector("header .header")
            .classList.contains("header-hide")
        ) {
          document
            .querySelector("header .header")
            .classList.remove("header-hide");
        }
      }

      if (window.scrollY > 150) {
        document
          .querySelector("header .header")
          .classList.add("header-bg-white");
      } else {
        document
          .querySelector("header .header")
          .classList.remove("header-bg-white");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrolledPosition]);

  useEffect(() => {
    const initSwipers = () => {
      new Swiper("#swiper-client-review", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: 5000,
        speed: 300,
        breakpoints: {
          1920: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          1028: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          767: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      });

      new Swiper("#swiper-portfolio", {
        loop: true,
        slidesPerView: 3,
        paginationClickable: true,
        centeredSlides: true,
        spaceBetween: 20,
        autoplay: 5000,
        speed: 300,
        breakpoints: {
          1920: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1028: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          767: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      });

      new Swiper(".swiper-review", {
        loop: true,
        slidesPerView: 4,
        paginationClickable: true,
        spaceBetween: 20,
        autoplay: 5000,
        speed: 300,
        breakpoints: {
          1475: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1028: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          991: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          767: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          575: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      });
    };
    initSwipers();
  }, []);

  return (
    <>
      <Header />
      <GameChanger />
      <Brilliant />
      <ClientReviews />
      <DomainWorking />
      <ExtensionOfTeam />
      <SeeingBelieving />
      <Honors />
      <Blogs />
      <ContactUs />
      <AutoSlidesFooter />
      <HomePageFooter />
    </>
  );
};

export default page;
