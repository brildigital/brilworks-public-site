"use client";
import { useEffect } from "react";
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
import Footer from "../components/Footer/index";
import ExtensionOfTeam from "../components/Homepage/ExtensionOfTeam";
import SeeingBelieving from "../components/Homepage/SeeingBelieving";
import AutoSlidesFooter from "../components/Homepage/AutoSlidesFooter";
import { BestAdvocateText } from "../components/Homepage/BigText";

const page = () => {
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
      <BestAdvocateText />
      <ClientReviews />
      <DomainWorking />
      <ExtensionOfTeam />
      <SeeingBelieving />
      <Honors />
      <Blogs />
      <ContactUs />
      <AutoSlidesFooter />
      <Footer />
    </>
  );
};

export default page;
