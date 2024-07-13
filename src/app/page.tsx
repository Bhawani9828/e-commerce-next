"use client";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Image from "next/image";
import topSlider1 from "@/assets/images/topSlider1.webp";
import topSlider2 from "@/assets/images/topSlider2.webp";
import topSlider3 from "@/assets/images/topSlider3.webp";
import topSlider4 from "@/assets/images/topSlider4.webp";
import topSlider5 from "@/assets/images/topSlider5.webp";

import woman from "@/assets/images/categrory-woman-img.webp";
import man from "@/assets/images/categrory-man-img.webp";
import kids from "@/assets/images/categrory-kids-img.webp";
import explor1 from "@/assets/images/explor1.jpg";
import explor2 from "@/assets/images/explor2.jpg";
import explor3 from "@/assets/images/explor3.jpg";
import explor4 from "@/assets/images/explor1.jpg";
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

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const images: any[] = [
    topSlider1,
    topSlider2,
    topSlider3,
    topSlider4,
    topSlider5,
  ];
  const images2: any[] = [explor1, explor2, explor3, explor4];

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <main className="h-full ">
      <section className="md:mt-32 mt-10">
        <div className="relative w-full md:h-[640px] overflow-hidden">
          <div
            className="absolute inset-0 flex transition-transform transform ease-in-out duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <Image
                  src={image}
                  className="w-full h-full object-cover"
                  alt={`Slide ${index}`}
                />
              </div>
            ))}
          </div>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
          >
            &lt;
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
          >
            &gt;
          </button>
        </div>
      </section>

      <section className="">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-8 ">
          <div className="">
            <Link href="product">
              <Image src={woman} alt="" className="w-full mb-2" layout="loading" />
            </Link>
            <h2 className="text-center w-full text-black font-semibold text-2xl">Woman</h2>
          </div>
          <div className="">
            <Link href="product">
              <Image src={man} alt="" className="w-full mb-2" layout="loading" />
            </Link>
            <h2 className="text-center w-full text-black font-semibold text-2xl">Woman</h2>
          </div>
          <div className="">
            <Link href="product">
              <Image src={kids} alt="" className="w-full mb-2" layout="loading" />
            </Link>
            <h2 className="text-center w-full text-black font-semibold text-2xl">Woman</h2>
          </div>
        </div>
      </section>

      <section className="mt-24">
        <h1 className="text-4xl text-orange-500 font-mono font-semibold text-start  px-12">
        EXPLORE
        </h1>
        <div className="flex flex-col md:flex-row mt-3 md:gap-24 gap-8 justify-center text-center md:-mx-4 m-auto w-full">
          <div className="bg-white rounded-lg shadow-lg p-8 md:mx-4">
            <Image src={explor1} alt="" className="w-full mb-2" layout="loading" />
            <h4 className="text-xl font-bold mb-4">ROLLEROBICS</h4>
            
            <Link
              href="product"
              className="btn py-2 px-5 rounded-lg text-white bg-orange-500 "
            >
              Shop Now
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 md:mx-4">
            <Image src={explor2} alt="" className="w-full mb-2" layout="loading" />
            <h4 className="text-xl font-bold mb-4">TRISKATES</h4>
            
            <Link
              href="product"
              className="btn py-2 px-5 rounded-lg text-white bg-orange-500 "
            >
              Shop Now
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 md:mx-4">
            <Image src={explor3} alt="" className="w-full mb-2" layout="loading" />
            <h4 className="text-xl font-bold mb-4">TRINITY</h4>
           
            <Link
              href="product"
              className="btn py-2 px-5 rounded-lg text-white bg-orange-500 "
            >
              Shop Now
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 md:mx-4">
            <Image src={explor4} alt="" className="w-full mb-2" layout="loading" />
            <h4 className="text-xl font-bold mb-4">ROLLEROBICS</h4>
            
            <Link
              href="product"
              className="btn py-2 px-5 rounded-lg text-white bg-orange-500 "
            >
              Shop Now
            </Link>
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
    </main>
  );
}
