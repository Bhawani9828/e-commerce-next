"use client"
import React from "react";
import Header from "../components/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import sanjeev1 from "@/assets/images/sanjeev1.webp";
import sanjeev2 from "@/assets/images/sanjeev2.webp";
import sanjeev3 from "@/assets/images/sanjeev3.jpg";
import Carousel from "react-multi-carousel";
import Footer from "../components/Footer";
import skate0 from "@/assets/images/skate0.jpg";
import skate1 from "@/assets/images/skate1.jpg";
import skate2 from "@/assets/images/skate2.jpg";
import skate3 from "@/assets/images/skate3.jpg";
import skate4 from "@/assets/images/skate4.jpg";
import skate5 from "@/assets/images/skate5.jpg";
import skate6 from "@/assets/images/skate6.jpg";
import skate7 from "@/assets/images/skate7.jpg";
import skate8 from "@/assets/images/skate8.jpg";
import skate9 from "@/assets/images/skate9.jpg";
import about1 from "@/assets/images/about1.webp";
import about2 from "@/assets/images/about2.webp";
import Slider from "react-slick";
const Page: React.FC = () => {


  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    padding: "60px",
    slidesToShow: 8,
    slidesToScroll: 8,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 8,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <div>
      <Header />
      <section>
        <div className="parallax2"></div>
      </section>
      <section>
      <div className=" mt-16 md:px-40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-36 items-center mb-36">
            <div className="">
              <Image src={about1} alt="" className="w-full " />
            </div>
            <div className="text-center">
              <h1 className="text-6xl text-orange-500 font-mono font-semibold mb-5">SKATE GEAR GUIDE</h1>
              <p className="text-gary-700 text-sm leading-7">
              Do you have questions about inline skates? Find all your answers here.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-36 items-center">
           
            <div className="text-center">
            <h1 className="text-6xl text-orange-500 font-mono font-semibold mb-5">Ambassadors</h1>
              <p className="text-gary-700 text-sm leading-7">
              Meet the Powerslide riders team.
              </p>
            </div>
            <div className="">
              <Image src={about2} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full mt-24">
        <div className="slider-container   mx-10 m-auto">
          <Slider {...settings} className="items-center flex">
          <div className="items-center flex">
              <Image src={skate0} alt="" />
            </div>
            <div className="items-center flex">
              <Image src={skate1} alt="" />
            </div>
            <div className="items-center flex">
              <Image src={skate2} alt="" />
            </div>
            <div className="items-center flex">
              <Image src={skate3} alt="" />
            </div>
            <div className="items-center flex">
              <Image src={skate4} alt="" />
            </div>
            <div className="items-center flex">
              <Image src={skate5} alt="" />
            </div>
            <div>
              <Image src={skate6} alt="" />
            </div>
            <div className="items-center flex">
              <Image src={skate7} alt="" />
            </div>
            <div className="items-center flex">
              <Image src={skate8} alt="" />
            </div>
            <div>
              <Image src={skate9} alt="" />
            </div>
            
          </Slider>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Page;
