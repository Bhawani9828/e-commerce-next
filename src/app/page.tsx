"use client";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Image from "next/image";
import slid1 from "@/assets/images/slid-1.jpg";
import slid2 from "@/assets/images/slid-2.jpg";
import slid3 from "@/assets/images/slid-3.jpg";

import slaad from "@/assets/images/Salad.jpg";
import opre1 from "@/assets/images/oper1.jpg";
import opre2 from "@/assets/images/oper2.jpg";
import opre3 from "@/assets/images/oper3.jpg";
import opre4 from "@/assets/images/oper4.jpg";
import brand1 from "@/assets/images/brand1.png";
import brand2 from "@/assets/images/brand2.png";
import brand3 from "@/assets/images/brand3.png";
import brand4 from "@/assets/images/brand4.jpg";
import brand5 from "@/assets/images/brand5.jpg";
import brand6 from "@/assets/images/brand6.jpg";
import brand7 from "@/assets/images/brand2.png";
import brand8 from "@/assets/images/brand8.png";
import brand9 from "@/assets/images/brand9.png";
import brand10 from "@/assets/images/brand10.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer";
import Link from "next/link";




export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const images: any[] = [slid1, slid2, slid3];
  const images2: any[] = [opre1, opre2, opre3,opre4];
  
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    padding:'60px',
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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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
        <div className="grid grid-cols-1">
          <div className="relative">
            <Image src={slaad} alt="" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <span className="text-md text-orange-300">
                With The Goodness of
              </span>
              <h2 className="text-4xl mt-2 mb-10 font-semibold text-black">
                Canola & Rice Bran Oil
              </h2>
              <Link
                href="product"
                className="btn py-2 px-5 rounded-lg text-white bg-orange-500 "
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h1 className="text-4xl text-orange-500 text-center my-10">
          Opera Crisps
        </h1>
        <div className="flex flex-col md:flex-row mt-24 justify-center text-center md:-mx-4 m-auto w-full">
          <div className="bg-white rounded-lg shadow-lg p-8 md:mx-4">
            <Image src={opre1} alt="" />
            <h4 className="text-xl font-bold">Salt & Black Pepper</h4>
            <p className="mt-1 mb-3">55g</p>
            <Link
              href="product"
              className="btn py-2 px-5 rounded-lg text-white bg-orange-500 "
            >
              Shop Now
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 md:mx-4">
            <Image src={opre2} alt="" />
            <h4 className="text-xl font-bold">Piri Piri</h4>
            <p className="mt-1 mb-3">55g</p>
            <Link
              href="product"
              className="btn py-2 px-5 rounded-lg text-white bg-orange-500 "
            >
              Shop Now
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 md:mx-4">
            <Image src={opre3} alt="" />
            <h4 className="text-xl font-bold">Cheese Jalapeno</h4>
            <p className="mt-1 mb-3">55g</p>
            <Link
              href="product"
              className="btn py-2 px-5 rounded-lg text-white bg-orange-500 "
            >
              Shop Now
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 md:mx-4">
            <Image src={opre4} alt="" />
            <h4 className="text-xl font-bold">Fiery Sriracha</h4>
            <p className="mt-1 mb-3">55g</p>
            <Link
             href="product"
              className="btn py-2 px-5 rounded-lg text-white bg-orange-500 "
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full my-24">
      <div className="slider-container   mx-10 m-auto">
      <Slider {...settings} className="items-center flex">
        <div className="items-center flex" >
          <Image src={brand1} alt="" />
        </div>
        <div className="items-center flex" >
        <Image src={brand2} alt=""/>
        </div>
        <div className="items-center flex" >
        <Image src={brand3} alt=""/>
        </div>
        <div className="items-center flex" >
        <Image src={brand4}  alt=""/>
        </div>
        <div className="items-center flex">
        <Image src={brand5} alt=""/>
        </div>
        <div >
        <Image src={brand6} alt=""/>
        </div>
        <div className="items-center flex" >
        <Image src={brand7} alt=""/>
        </div>
        <div className="items-center flex" >
        <Image src={brand8} alt=""/>
        </div>
        <div >
        <Image src={brand9} alt=""/>
        </div>
        <div className="items-center flex" >
        <Image src={brand10} alt=""/>
        </div>
      </Slider>
    </div>
      </section>

 


    </main>
  );
}
