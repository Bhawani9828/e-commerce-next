import React from "react";
import Header from "../components/Header";

import Image from "next/image";
import sanjeev1 from "@/assets/images/sanjeev1.webp";
import sanjeev2 from "@/assets/images/sanjeev2.webp";
import sanjeev3 from "@/assets/images/sanjeev3.jpg";
import Carousel from "react-multi-carousel";
import Footer from "../components/Footer";


const Page: React.FC = () => {


  return (
    <div>
      <Header />
      <section>
        <div className="parallax"></div>
      </section>
      <section>
        <h1 className="text-6xl text-orange-500 mx-16  text-center font-extrabold my-16">
          CHEFS SPECIAL RECIPES
        </h1>
        <div className="mx-16 m-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="my-4 text-orange-400 text-3xl text-center">
              SANJIV KAPOOR
            </h3>
            <div className="">
           <Image src={sanjeev1} alt=""/>
          
            </div>
          </div>
          <div>
            <h3 className="my-4 text-orange-400 text-3xl text-center">
            VICKY RATNANI
            </h3>
            <div className="">
           <Image src={sanjeev2} alt=""/>
          
            </div>
          </div>
          <div>
            <h3 className="my-4 text-orange-400 text-3xl text-center">
            AMRITA RAICHAND
            </h3>
            <div className="">
           <Image src={sanjeev3} alt=""/>
          
            </div>
          </div>
        </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Page;
