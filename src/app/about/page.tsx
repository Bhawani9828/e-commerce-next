import React from "react";
import Header from "../components/Header";
import about1 from "@/assets/images/about1.webp";
import about2 from "@/assets/images/about2.webp";
import Image from "next/image";
import Footer from "../components/Footer";
function page() {
  return (
    <div>
     
      <section>
        <div className="parallax"></div>

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
      
    </div>
  );
}

export default page;
